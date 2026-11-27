import { useLeadForm } from './useLeadForm'

export function NewsletterSignup() {
  const form = useLeadForm('newsletter')
  return (
    <section className="min-w-0 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6 dark:border-slate-800 dark:bg-slate-900" aria-label="Newsletter signup">
      <h2 className="text-xl font-semibold text-slate-900 dark:text-white">Newsletter</h2>
      <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
        Get practical guidance on private AI, automation, and secure enterprise adoption.
      </p>
      <form className="mt-5 max-w-xl space-y-4" onSubmit={form.submit}>
        <div className="space-y-1.5">
          <label className="block text-sm font-medium text-slate-800 dark:text-slate-100" htmlFor={form.id}>
            Email address
          </label>
          <input
            id={form.id}
            name="email"
            type="email"
            autoComplete="email"
            maxLength={254}
            required
            placeholder="you@company.com"
            className="block w-full min-w-0 rounded-lg border border-slate-300 px-3 py-2.5 text-sm text-slate-900 outline-none ring-blue-600 focus:ring-2 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
          />
        </div>
        <label className="flex items-start gap-2 text-sm leading-5 text-slate-600 dark:text-slate-300">
          <input className="mt-1 h-4 w-4 shrink-0 accent-blue-600" type="checkbox" name="consent" value="yes" required />
          <span>I agree to receive Vektas newsletters. I can unsubscribe at any time.</span>
        </label>
        <div ref={form.widget} className="w-full min-w-0" />
        <button
          disabled={!form.ready || form.busy}
          type="submit"
          className="w-full rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-blue-500 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {form.busy ? 'Submitting…' : 'Subscribe'}
        </button>
        {form.status && <p className="text-sm leading-5 text-slate-700 dark:text-slate-200" role="status" aria-live="polite">{form.status}</p>}
      </form>
    </section>
  )
}
