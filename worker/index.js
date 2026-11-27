const paths = new Set(['/api/contact', '/api/newsletter'])
const json = (status, body) => Response.json(body, { status, headers: { 'Cache-Control': 'no-store' } })
const field = (body, key, max, required = true) => {
  const value = body[key] === undefined && !required ? '' : body[key]
  if (typeof value !== 'string' || value.length > max || (required && !value.trim())) throw new Error('Invalid ' + key)
  return value.trim()
}
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
async function readBody(request) {
  const reader = request.body?.getReader()
  if (!reader) throw new Error('Missing body')
  const decoder = new TextDecoder()
  let bytes = 0, result = ''
  try {
    while (true) {
      const { done, value } = await reader.read()
      if (done) break
      bytes += value.byteLength
      if (bytes > 16384) throw new Error('Request too large')
      result += decoder.decode(value, { stream: true })
    }
    return JSON.parse(result + decoder.decode())
  } finally { await reader.cancel().catch(() => {}) }
}
export default {
  async fetch(request, env) {
    const url = new URL(request.url)
    if (!url.pathname.startsWith('/api/')) return env.ASSETS.fetch(request)
    if (!paths.has(url.pathname)) return json(404, { error: 'Not found' })
    if (request.method !== 'POST') return json(405, { error: 'Method not allowed' })
    if (request.headers.get('Origin') !== url.origin || !['https://vektas.com','https://www.vektas.com'].includes(url.origin)) return json(403, { error: 'Invalid origin' })
    if (!request.headers.get('Content-Type')?.startsWith('application/json')) return json(415, { error: 'Expected JSON' })
    if (!env.DB || !env.TURNSTILE_SECRET || !env.FORM_LIMIT) {
      console.error('Form configuration incomplete', { database: Boolean(env.DB), turnstile: Boolean(env.TURNSTILE_SECRET), rateLimit: Boolean(env.FORM_LIMIT) })
      return json(503, { error: 'Form temporarily unavailable. Please email sales@vektas.com.' })
    }
    const ip = request.headers.get('CF-Connecting-IP')
    if (!ip) return json(503, { error: 'Form temporarily unavailable.' })
    try {
      const { success } = await env.FORM_LIMIT.limit({ key: ip })
      if (!success) return json(429, { error: 'Too many requests. Please try again in a minute.' })
    } catch { return json(503, { error: 'Form temporarily unavailable.' }) }
    let body, data
    try {
      body = await readBody(request)
      if (!body || typeof body !== 'object' || Array.isArray(body)) throw new Error('Invalid body')
      const email = field(body, 'email', 254).toLowerCase()
      if (!emailPattern.test(email)) throw new Error('Invalid email')
      const token = field(body, 'token', 2048)
      data = { email, token }
      if (url.pathname === '/api/contact') Object.assign(data, {
        name: field(body, 'name', 120), company: field(body, 'company', 160, false),
        phone: field(body, 'phone', 40, false), problem: field(body, 'problem', 120),
        message: field(body, 'message', 5000)
      })
      else if (body.consent !== 'yes') throw new Error('Consent required')
    } catch { return json(400, { error: 'Please check the form fields and complete the security check.' }) }
    try {
      const verification = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
        method: 'POST', body: new URLSearchParams({ secret: env.TURNSTILE_SECRET, response: data.token })
      })
      const result = await verification.json()
      if (!verification.ok || !result.success || result.hostname !== url.hostname || result.action !== (url.pathname === '/api/contact' ? 'contact' : 'newsletter')) return json(403, { error: 'Security check failed. Please try again.' })
      if (url.pathname === '/api/contact') {
        await env.DB.prepare('INSERT INTO leads (id,name,company,email,phone,problem,message) VALUES (?,?,?,?,?,?,?)').bind(crypto.randomUUID(),data.name,data.company,data.email,data.phone,data.problem,data.message).run()
      } else {
        await env.DB.prepare('INSERT INTO newsletter (email) VALUES (?) ON CONFLICT(email) DO NOTHING').bind(data.email).run()
      }
      return json(200, { ok: true })
    } catch { return json(503, { error: 'Unable to save your submission. Please email sales@vektas.com.' }) }
  }
}
