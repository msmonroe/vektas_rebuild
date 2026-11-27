import { useEffect, useId, useRef, useState } from 'react'
import type { FormEvent } from 'react'

type Turnstile = {
  render: (element: HTMLElement, options: Record<string, unknown>) => string
  reset: (id: string) => void
  remove: (id: string) => void
}
let loader: Promise<Turnstile> | undefined
function loadTurnstile() {
  if (!loader) loader = new Promise<Turnstile>((resolve, reject) => {
    const get = () => (window as Window & { turnstile?: Turnstile }).turnstile
    const existing = get()
    if (existing) { resolve(existing); return }
    const script = document.createElement('script')
    script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit'
    script.async = true
    script.onload = () => { const api = get(); if (api) resolve(api); else reject(new Error('Security check unavailable')) }
    script.onerror = () => reject(new Error('Security check unavailable'))
    document.head.appendChild(script)
  }).catch(error => { loader = undefined; throw error })
  return loader
}
export function useLeadForm(kind: 'contact' | 'newsletter') {
  const id = useId()
  const widget = useRef<HTMLDivElement>(null)
  const instance = useRef<{ api: Turnstile; id: string } | null>(null)
  const [token, setToken] = useState('')
  const [status, setStatus] = useState('')
  const [busy, setBusy] = useState(false)
  useEffect(() => {
    let active = true
    const key = import.meta.env.VITE_TURNSTILE_SITE_KEY
    if (!key) { setStatus('Online form unavailable. Please email sales@vektas.com.'); return }
    loadTurnstile().then(api => {
      if (!active || !widget.current) return
      instance.current = { api, id: api.render(widget.current, {
        sitekey: key, action: kind,
        callback: (value: string) => setToken(value),
        'expired-callback': () => setToken(''),
        'error-callback': () => { setToken(''); setStatus('Security check unavailable. Please retry or email sales@vektas.com.') }
      }) }
    }).catch(() => { if (active) setStatus('Security check unavailable. Please email sales@vektas.com.') })
    return () => { active = false; if (instance.current) instance.current.api.remove(instance.current.id); instance.current = null }
  }, [kind])
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!token || busy) return
    const form = event.currentTarget
    setBusy(true); setStatus('')
    try {
      const body = Object.fromEntries(new FormData(form))
      const response = await fetch('/api/' + kind, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ ...body, token }) })
      const result = await response.json()
      if (!response.ok || !result.ok) throw new Error(result.error || 'Submission failed')
      form.reset()
      setStatus(kind === 'contact' ? 'Thank you. Your inquiry has been saved.' : 'Your signup request has been recorded. Confirmation is required before newsletters are sent.')
    } catch (error) { setStatus(error instanceof Error ? error.message : 'Submission failed. Please email sales@vektas.com.') }
    finally { setBusy(false); setToken(''); if (instance.current) instance.current.api.reset(instance.current.id) }
  }
  return { id, widget, status, busy, ready: Boolean(token), submit }
}
