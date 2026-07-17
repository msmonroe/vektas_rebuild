interface Env {
  ASSETS: { fetch(request: Request): Promise<Response> }
  TURNSTILE_SITE_KEY?: string
  TURNSTILE_SECRET_KEY?: string
  RESEND_API_KEY?: string
  CONTACT_FROM_EMAIL?: string
  CONTACT_TO_EMAIL?: string
}

type ContactPayload = {
  name?: unknown
  company?: unknown
  email?: unknown
  phone?: unknown
  message?: unknown
  website?: unknown
  turnstileToken?: unknown
}

type TurnstileResult = {
  success?: boolean
  'error-codes'?: string[]
}

type ResendError = {
  name?: string
  message?: string
}

function json(body: Record<string, unknown>, status = 200): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'no-store',
      'X-Content-Type-Options': 'nosniff',
    },
  })
}

function clean(value: unknown, maxLength: number): string {
  return typeof value === 'string' ? value.trim().slice(0, maxLength) : ''
}

function escapeHtml(value: string): string {
  return value.replace(/[&<>'"]/g, (character) => {
    const entities: Record<string, string> = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      "'": '&#39;',
      '"': '&quot;',
    }
    return entities[character]
  })
}

function isSameOrigin(request: Request): boolean {
  const origin = request.headers.get('Origin')
  if (!origin) return true

  try {
    return new URL(origin).host === new URL(request.url).host
  } catch {
    return false
  }
}

async function verifyTurnstile(request: Request, env: Env, token: string): Promise<boolean> {
  if (!env.TURNSTILE_SECRET_KEY || !token) return false

  const verification = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      secret: env.TURNSTILE_SECRET_KEY,
      response: token,
      remoteip: request.headers.get('CF-Connecting-IP') || undefined,
      idempotency_key: crypto.randomUUID(),
    }),
  })

  if (!verification.ok) return false

  const result = (await verification.json()) as TurnstileResult
  if (!result.success) {
    console.warn('Turnstile verification failed:', result['error-codes'] || [])
  }

  return result.success === true
}

function resendFailureMessage(status: number, error: ResendError): string {
  const detail = `${error.name || ''} ${error.message || ''}`.toLowerCase()

  if (status === 401 || detail.includes('api key')) {
    return 'Email delivery is not authenticated yet. Please email sales@vektas.com.'
  }

  if (
    detail.includes('domain') ||
    detail.includes('sender') ||
    detail.includes('from') ||
    detail.includes('verify')
  ) {
    return 'The website sending address has not been verified yet. Please email sales@vektas.com.'
  }

  return 'Unable to send your message right now. Please email sales@vektas.com.'
}

async function handleContact(request: Request, env: Env): Promise<Response> {
  if (request.method !== 'POST') {
    return json({ message: 'Method not allowed.' }, 405)
  }

  if (!isSameOrigin(request)) {
    return json({ message: 'Request origin was not accepted.' }, 403)
  }

  const contentLength = Number(request.headers.get('Content-Length') || 0)
  if (contentLength > 12_000) {
    return json({ message: 'Request is too large.' }, 413)
  }

  let payload: ContactPayload
  try {
    payload = (await request.json()) as ContactPayload
  } catch {
    return json({ message: 'Invalid request.' }, 400)
  }

  if (clean(payload.website, 200)) {
    return json({ message: 'Thanks. Your message has been received.' })
  }

  const name = clean(payload.name, 120)
  const company = clean(payload.company, 160)
  const email = clean(payload.email, 254)
  const phone = clean(payload.phone, 50)
  const message = clean(payload.message, 4000)
  const turnstileToken = clean(payload.turnstileToken, 2048)
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  if (!name || !company || !emailPattern.test(email) || message.length < 20) {
    return json({ message: 'Please complete all required fields with a valid email address.' }, 400)
  }

  const linkCount = (message.match(/https?:\/\//gi) || []).length
  if (linkCount > 5) {
    return json({ message: 'Please remove excessive links and try again.' }, 400)
  }

  if (!env.TURNSTILE_SECRET_KEY) {
    console.error('TURNSTILE_SECRET_KEY is not configured.')
    return json({ message: 'The contact service is being configured. Please email sales@vektas.com.' }, 503)
  }

  if (!(await verifyTurnstile(request, env, turnstileToken))) {
    return json({ message: 'Verification expired or failed. Please try again.' }, 403)
  }

  if (!env.RESEND_API_KEY) {
    console.error('RESEND_API_KEY is not configured.')
    return json({ message: 'The contact service is being configured. Please email sales@vektas.com.' }, 503)
  }

  const from = env.CONTACT_FROM_EMAIL || 'Vektas Website <website@vektas.com>'
  const to = env.CONTACT_TO_EMAIL || 'sales@vektas.com'
  const safeMessage = escapeHtml(message).replace(/\n/g, '<br />')

  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${env.RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: email,
      subject: `Vektas inquiry from ${name} at ${company}`,
      text: `Name: ${name}\nCompany: ${company}\nEmail: ${email}\nPhone: ${phone || 'Not provided'}\n\n${message}`,
      html: `<h2>New Vektas website inquiry</h2><p><strong>Name:</strong> ${escapeHtml(name)}</p><p><strong>Company:</strong> ${escapeHtml(company)}</p><p><strong>Email:</strong> ${escapeHtml(email)}</p><p><strong>Phone:</strong> ${escapeHtml(phone || 'Not provided')}</p><p><strong>Message:</strong><br />${safeMessage}</p>`,
    }),
  })

  if (!response.ok) {
    const responseText = await response.text()
    let resendError: ResendError = {}

    try {
      resendError = JSON.parse(responseText) as ResendError
    } catch {
      resendError = { message: responseText }
    }

    console.error('Resend request failed:', response.status, resendError)
    return json({ message: resendFailureMessage(response.status, resendError) }, 502)
  }

  return json({ message: 'Message sent successfully.' })
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url)

    if (url.pathname === '/api/config' && request.method === 'GET') {
      return json({ turnstileSiteKey: env.TURNSTILE_SITE_KEY || '' })
    }

    if (url.pathname === '/api/contact') {
      return handleContact(request, env)
    }

    return env.ASSETS.fetch(request)
  },
}
