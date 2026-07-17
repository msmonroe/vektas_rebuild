import { useEffect, useRef, useState } from 'react'
import { NewsletterSignup } from '../components/NewsletterSignup'

type SubmitState = 'idle' | 'submitting' | 'success' | 'error'

type TurnstileApi = {
  render: (container: HTMLElement, options: { sitekey: string; callback: (token: string) => void; 'expired-callback': () => void; 'error-callback': () => void }) => string
  reset: (widgetId?: string) => void
}

declare global {
  interface Window {
    turnstile?: TurnstileApi
  }
}

export function ContactPage() {
  const [submitState, setSubmitState] = useState<SubmitState>('idle')
  const [statusMessage, setStatusMessage] = useState('')
  const [turnstileToken, setTurnstileToken] = useState('')
  const [siteKey, setSiteKey] = useState('')
  const turnstileContainerRef = useRef<HTMLDivElement>(null)
  const widgetIdRef = useRef<string | undefined>(undefined)

  useEffect(() => {
    fetch('/api/config')
      .then(async (response) => (response.ok ? response.json() : Promise.reject()))
      .then((config: { turnstileSiteKey?: string }) => setSiteKey(config.turnstileSiteKey || ''))
      .catch(() => setSiteKey(''))
  }, [])

  useEffect(() => {
    if (!siteKey || !turnstileContainerRef.current) return

    const renderWidget = () => {
      if (!window.turnstile || !turnstileContainerRef.current || widgetIdRef.current) return
      widgetIdRef.current = window.turnstile.render(turnstileContainerRef.current, {
        sitekey: siteKey,
        callback: setTurnstileToken,
        'expired-callback': () => setTurnstileToken(''),
        'error-callback': () => setTurnstileToken(''),
      })
    }

    const existingScript = document.querySelector<HTMLScriptElement>('script[data-vektas-turnstile]')
    if (existingScript) {
      if (window.turnstile) renderWidget()
      else existingScript.addEventListener('load', renderWidget, { once: true })
      return
    }

    const script = document.createElement('script')
    script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit'
    script.async = true
    script.defer = true
    script.dataset.vektasTurnstile = 'true'
    script.addEventListener('load', renderWidget, { once: true })
    document.head.appendChild(script)
  }, [siteKey])

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatusMessage('')

    if (!siteKey || !turnstileToken) {
      setSubmitState('error')
      setStatusMessage('Please complete the verification before sending your message.')
      return
    }

    setSubmitState('submitting')
    const form = event.currentTarget
    const formData = new FormData(form)
    const payload = { ...Object.fromEntries(formData.entries()), turnstileToken }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      const responseText = await response.text()
      let result: { message?: string } = {}
      try {
        result = responseText ? (JSON.parse(responseText) as { message?: string }) : {}
      } catch {
        result = {}
      }

      if (!response.ok) {
        throw new Error(result.message || 'The contact form is not available yet. Please email sales@vektas.com.')
      }

      form.reset()
      setSubmitState('success')
      setStatusMessage('Thanks. Your message has been sent to the Vektas team.')
      setTurnstileToken('')
      window.turnstile?.reset(widgetIdRef.current)
    } catch (error) {
      setSubmitState('error')
      setStatusMessage(error instanceof Error ? error.message : 'Unable to send your message right now.')
      setTurnstileToken('')
      window.turnstile?.reset(widgetIdRef.current)
    }
  }

  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6" aria-labelledby="contact-heading">
      <h1 id="contact-heading" className="text-4xl font-bold tracking-tight text-[#07111F] dark:text-white sm:text-5xl">Start a Conversation</h1>
      <p className="mt-4 max-w-3xl text-slate-600 dark:text-slate-300">Tell us where work is slowing down, costing too much, or becoming harder to manage. We will follow up with practical next steps.</p>

      <div className="mt-10 grid gap-8 lg:grid-cols-3">
        <form className="space-y-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm lg:col-span-2 dark:border-slate-800 dark:bg-slate-900" onSubmit={handleSubmit}>
          <div className="hidden" aria-hidden="true"><label htmlFor="website">Website</label><input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" /></div>
          {[
            { id: 'name', label: 'Name', type: 'text', required: true },
            { id: 'company', label: 'Company', type: 'text', required: true },
            { id: 'email', label: 'Email', type: 'email', required: true },
            { id: 'phone', label: 'Phone', type: 'tel', required: false },
          ].map((field) => (
            <div key={field.id}>
              <label htmlFor={field.id} className="mb-1 block text-sm font-medium text-slate-800 dark:text-slate-100">{field.label}</label>
              <input id={field.id} name={field.id} type={field.type} required={field.required} autoComplete={field.id === 'name' ? 'name' : field.id === 'email' ? 'email' : field.id === 'phone' ? 'tel' : 'organization'} className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 outline-none ring-blue-600 focus:ring-2 dark:border-slate-700 dark:bg-slate-950 dark:text-white" />
            </div>
          ))}
          <div>
            <label htmlFor="message" className="mb-1 block text-sm font-medium text-slate-800 dark:text-slate-100">What would you like to improve?</label>
            <textarea id="message" name="message" required minLength={20} maxLength={4000} rows={6} className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 outline-none ring-blue-600 focus:ring-2 dark:border-slate-700 dark:bg-slate-950 dark:text-white" />
          </div>

          <div ref={turnstileContainerRef} aria-label="Spam verification" />
          {!siteKey && <p className="text-sm text-amber-700 dark:text-amber-300">Verification is being configured. You may email sales@vektas.com in the meantime.</p>}

          <button type="submit" disabled={submitState === 'submitting' || !siteKey} className="rounded-lg bg-blue-600 px-5 py-2.5 font-semibold text-white transition hover:bg-blue-500 disabled:cursor-not-allowed disabled:opacity-60">{submitState === 'submitting' ? 'Sending…' : 'Send Message'}</button>
          {statusMessage && <p role="status" className={`text-sm ${submitState === 'success' ? 'text-emerald-700 dark:text-emerald-300' : 'text-red-700 dark:text-red-300'}`}>{statusMessage}</p>}
        </form>

        <aside className="space-y-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <h2 className="text-xl font-semibold text-slate-900 dark:text-white">Contact Details</h2>
          <a className="block text-sm font-medium text-blue-600 hover:underline" href="mailto:sales@vektas.com">sales@vektas.com</a>
          <p className="text-sm text-slate-600 dark:text-slate-300">Remote consulting</p>
          <p className="text-sm text-slate-600 dark:text-slate-300">Available throughout North America</p>
          <NewsletterSignup />
        </aside>
      </div>
    </section>
  )
}
