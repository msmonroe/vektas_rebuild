import { NewsletterSignup } from '../components/NewsletterSignup'

export function ContactPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6" aria-labelledby="contact-heading">
      <h1 id="contact-heading" className="text-4xl font-bold tracking-tight text-[#07111F] dark:text-white sm:text-5xl">
        Contact
      </h1>
      <p className="mt-4 max-w-3xl text-slate-600 dark:text-slate-300">
        Tell us about your goals and current systems. We will follow up with practical next steps.
      </p>

      <div className="mt-10 grid gap-8 lg:grid-cols-3">
        <form
          className="space-y-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm lg:col-span-2 dark:border-slate-800 dark:bg-slate-900"
          onSubmit={(event) => event.preventDefault()}
        >
          {[
            { id: 'name', label: 'Name', type: 'text' },
            { id: 'company', label: 'Company', type: 'text' },
            { id: 'email', label: 'Email', type: 'email' },
            { id: 'phone', label: 'Phone', type: 'tel' },
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
              Message
            </label>
            <textarea
              id="message"
              required
              rows={5}
              className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 outline-none ring-blue-600 focus:ring-2 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
            />
          </div>
          <button type="submit" className="rounded-full bg-blue-600 px-5 py-2.5 font-semibold text-white hover:bg-blue-500">
            Send Message
          </button>
        </form>

        <aside className="space-y-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <h2 className="text-xl font-semibold text-slate-900 dark:text-white">Contact Details</h2>
          <p className="text-sm text-slate-600 dark:text-slate-300">hello@vektas.com</p>
          <p className="text-sm text-slate-600 dark:text-slate-300">Remote Consulting</p>
          <p className="text-sm text-slate-600 dark:text-slate-300">Available throughout North America</p>
          <NewsletterSignup />
        </aside>
      </div>
    </section>
  )
}
