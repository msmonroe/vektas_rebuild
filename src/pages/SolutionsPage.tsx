import { ScrollReveal } from '../components/ScrollReveal'
import { industries } from '../data/siteContent'

const useCases = [
  'Enterprise knowledge assistants grounded in internal information',
  'Document intake, extraction, validation, and routing',
  'Cross-system workflow automation and orchestration',
  'Legacy application integration and incremental modernization',
  'AI-assisted operational analysis with human review',
  'Secure internal applications built around specialized processes',
]

export function SolutionsPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6" aria-labelledby="solutions-heading">
      <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">Solutions</p>
      <h1 id="solutions-heading" className="mt-3 text-4xl font-bold tracking-tight text-[#07111F] dark:text-white sm:text-5xl">
        Practical systems for information-heavy, integration-heavy organizations
      </h1>
      <p className="mt-4 max-w-3xl text-lg text-slate-600 dark:text-slate-300">
        Vektas focuses on problems where workflows cross teams, systems, documents, and data boundaries. Solutions are designed around the operating environment rather than forced into a one-size-fits-all AI product.
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
          </ScrollReveal>
        ))}
      </div>

      <div className="mt-14 rounded-3xl border border-slate-200 bg-slate-50 p-8 dark:border-slate-800 dark:bg-slate-900">
        <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">Common initiatives</h2>
        <ul className="mt-6 grid gap-3 md:grid-cols-2">
          {useCases.map((useCase) => (
            <li key={useCase} className="rounded-xl bg-white px-4 py-3 text-sm text-slate-700 shadow-sm dark:bg-slate-950 dark:text-slate-200">
              {useCase}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
