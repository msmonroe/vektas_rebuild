import { NewsletterSignup } from '../components/NewsletterSignup'

export function ContactPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6" aria-labelledby="contact-heading">
      <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">Start a conversation</p>
      <h1 id="contact-heading" className="mt-3 text-4xl font-bold tracking-tight text-[#07111F] dark:text-white sm:text-5xl">
        Tell us what is not working as well as it should.
      </h1>
      <p className="mt-4 max-w-3xl text-lg text-slate-600 dark:text-slate-300">
        Describe the delay, cost, workaround, risk, or operational frustration. You do not need to diagnose the technical cause or arrive with a proposed solution.
      </p>

      <div className="mt-10 grid gap-8 lg:grid-cols-3">
        <form
          className="space-y-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm lg:col-span-2 dark:border-slate-800 dark:bg-slate-900"
          onSubmit={(event) => event.preventDefault()}
        >
          {[
            { id: 'name', label: 'Your name', type: 'text' },
            { id: 'company', label: 'Organization', type: 'text' },
            { id: 'email', label: 'Work email', type: 'email' },
            { id: 'phone', label: 'Phone, optional', type: 'tel' },
          ].map((field) => (
            <div key={field.id}>
              <label htmlFor={field.id} className="mb-1 block text-sm font-medium text-slate-800 dark:text-slate-100">
                {field.label}
              </label>
              <input
                id={field.id}
                type={field.type}
                required={field.id !== 'phone'}
                className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 outline-none ring-blue-600 focus:ring-2 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
              />
            </div>
          ))}
          <div>
            <label htmlFor="message" className="mb-1 block text-sm font-medium text-slate-800 dark:text-slate-100">
              What is happening, and what would you like to improve?
            </label>
            <textarea
              id="message"
              required
              rows={6}
              placeholder="For example: Requests are taking two weeks because three departments track them differently, and leadership cannot see where they are stalled."
              className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 outline-none ring-blue-600 focus:ring-2 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
            />
          </div>
          <button type="submit" className="rounded-full bg-blue-600 px-5 py-2.5 font-semibold text-white hover:bg-blue-500">
            Start the Conversation
          </button>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            We will review the problem and respond with a practical next step. No technical brief required.
          </p>
        </form>

        <aside className="space-y-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <div>
            <h2 className="text-xl font-semibold text-slate-900 dark:text-white">A good fit for the first conversation</h2>
            <ul className="mt-4 space-y-3 text-sm text-slate-600 dark:text-slate-300">
              <li>A process is too slow or expensive.</li>
              <li>Teams rely on manual workarounds.</li>
              <li>Important systems do not work together.</li>
              <li>An improvement initiative is stuck.</li>
              <li>The problem is clear, but the right solution is not.</li>
            </ul>
          </div>
          <div className="border-t border-slate-200 pt-5 dark:border-slate-800">
            <p className="text-sm font-semibold text-slate-900 dark:text-white">Contact</p>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">hello@vektas.com</p>
            <p className="text-sm text-slate-600 dark:text-slate-300">Available throughout North America</p>
          </div>
          <NewsletterSignup />
        </aside>
      </div>
    </section>
  )
}
