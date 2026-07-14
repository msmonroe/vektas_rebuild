import { ScrollReveal } from '../components/ScrollReveal'
import { industries } from '../data/siteContent'

export function SolutionsPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6" aria-labelledby="solutions-heading">
      <h1 id="solutions-heading" className="text-4xl font-bold tracking-tight text-[#07111F] dark:text-white sm:text-5xl">
        Solutions by Industry
      </h1>
      <p className="mt-4 max-w-3xl text-slate-600 dark:text-slate-300">
        Private AI solutions designed for high productivity, strong governance, and strict data confidentiality.
      </p>
      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {industries.map((industry, index) => (
          <ScrollReveal
            key={industry.name}
            delay={index * 0.04}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900"
          >
            <h2 className="text-xl font-semibold text-slate-900 dark:text-white">{industry.name}</h2>
            <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">{industry.summary}</p>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
              Keep confidential data under your control while equipping teams with AI tools that streamline day-to-day work.
            </p>
          </ScrollReveal>
        ))}
      </div>
    </section>
  )
}
