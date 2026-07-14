export function NewsletterSignup() {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900" aria-label="Newsletter signup">
      <h2 className="text-xl font-semibold text-slate-900 dark:text-white">Newsletter</h2>
      <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
        Get practical guidance on private AI, automation, and secure enterprise adoption.
      </p>
      <form className="mt-4 flex flex-col gap-3 sm:flex-row" onSubmit={(event) => event.preventDefault()}>
        <label className="sr-only" htmlFor="newsletter-email">
          Email
        </label>
        <input
          id="newsletter-email"
          type="email"
          required
          placeholder="you@company.com"
          className="flex-1 rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 outline-none ring-blue-600 focus:ring-2 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
        />
        <button
          type="submit"
          className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-500"
        >
          Subscribe
        </button>
      </form>
    </section>
  )
}
