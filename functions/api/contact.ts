interface Env {
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
}

function json(body: Record<string, unknown>, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'no-store',
    },
  })
}

function clean(value: unknown, maxLength: number) {
  return typeof value === 'string' ? value.trim().slice(0, maxLength) : ''
}

function escapeHtml(value: string) {
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

export async function onRequestPost(context: { request: Request; env: Env }): Promise<Response> {
  let payload: ContactPayload

  try {
    payload = (await context.request.json()) as ContactPayload
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

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  if (!name || !company || !emailPattern.test(email) || message.length < 20) {
    return json({ message: 'Please complete all required fields with a valid email address.' }, 400)
  }

  const apiKey = context.env.RESEND_API_KEY
  const from = context.env.CONTACT_FROM_EMAIL || 'Vektas Website <website@vektas.com>'
  const to = context.env.CONTACT_TO_EMAIL || 'sales@vektas.com'

  if (!apiKey) {
    console.error('RESEND_API_KEY is not configured.')
    return json({ message: 'The contact service is being configured. Please email sales@vektas.com.' }, 503)
  }

  const safeMessage = escapeHtml(message).replace(/\n/g, '<br />')

  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
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
    console.error('Resend request failed:', response.status, await response.text())
    return json({ message: 'Unable to send your message right now. Please email sales@vektas.com.' }, 502)
  }

  return json({ message: 'Message sent successfully.' })
}

export function onRequest() {
  return json({ message: 'Method not allowed.' }, 405)
}
