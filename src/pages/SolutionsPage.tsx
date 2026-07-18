import { Link } from 'react-router-dom'
import { ScrollReveal } from '../components/ScrollReveal'
import { industries } from '../data/siteContent'

const results = [
  'Shorter cycle times and fewer stalled requests',
  'Less duplicate entry, reconciliation, and rework',
  'Clearer ownership and more consistent execution',
  'Faster access to current, reliable information',
  'Better visibility across the complete process',
  'A practical path forward without replacing everything at once',
]

export function SolutionsPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6" aria-labelledby="solutions-heading">
      <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">Business problems we solve</p>
      <h1 id="solutions-heading" className="mt-3 text-4xl font-bold tracking-tight text-[#07111F] dark:text-white sm:text-5xl">
        When important work is harder than it should be
      </h1>
      <p className="mt-4 max-w-3xl text-lg text-slate-600 dark:text-slate-300">
        Most operational problems do not fit neatly into one department or one software product. They appear in the gaps between people, process, information, and existing systems. That is where Vektas focuses.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {industries.map((problem, index) => (
          <ScrollReveal
            key={problem.name}
            delay={index * 0.04}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900"
          >
            <h2 className="text-xl font-semibold text-slate-900 dark:text-white">{problem.name}</h2>
            <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">{problem.summary}</p>
          </ScrollReveal>
        ))}
      </div>

      <div className="mt-14 grid gap-8 rounded-3xl border border-slate-200 bg-slate-50 p-8 dark:border-slate-800 dark:bg-slate-900 lg:grid-cols-2">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">What success looks like</p>
          <h2 className="mt-3 text-2xl font-semibold text-slate-900 dark:text-white">A measurable improvement in how the work gets done</h2>
          <p className="mt-3 text-slate-600 dark:text-slate-300">
            We define success in operational terms that leadership and employees can recognize, not in the number of tools installed or features delivered.
          </p>
        </div>
        <ul className="grid gap-3">
          {results.map((result) => (
            <li key={result} className="rounded-xl bg-white px-4 py-3 text-sm text-slate-700 shadow-sm dark:bg-slate-950 dark:text-slate-200">
              {result}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-10 text-center">
        <p className="text-slate-600 dark:text-slate-300">Recognize one of these problems in your organization?</p>
        <Link to="/contact" className="mt-4 inline-flex rounded-full bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-500">
          Talk Through the Problem
        </Link>
      </div>
    </section>
  )
}
