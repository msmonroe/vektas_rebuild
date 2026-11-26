import { useLeadForm } from './useLeadForm'

export function NewsletterSignup() {
  const form = useLeadForm('newsletter')
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900" aria-label="Newsletter signup">
      <h2 className="text-xl font-semibold text-slate-900 dark:text-white">Newsletter</h2>
      <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
        Get practical guidance on private AI, automation, and secure enterprise adoption.
      </p>
      <form className="mt-4 flex flex-col gap-3 sm:flex-row" onSubmit={form.submit}>
        <label className="sr-only" htmlFor={form.id}>
          Email
        </label>
        <input
          id={form.id}
          name="email"
          type="email"
          required
          placeholder="you@company.com"
          className="flex-1 rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 outline-none ring-blue-600 focus:ring-2 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
        />
        <label className="text-sm"><input type="checkbox" name="consent" value="yes" required /> I agree to receive Vektas newsletters. I can unsubscribe at any time.</label>
        <div ref={form.widget} />
        <p role="status" aria-live="polite">{form.status}</p>
        <button
          disabled={!form.ready || form.busy}
          type="submit"
          className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-500"
        >
          {form.busy ? 'Submitting…' : 'Subscribe'}
        </button>
      </form>
    </section>
  )
}
