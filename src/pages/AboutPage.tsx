import { ScrollReveal } from '../components/ScrollReveal'

const timeline = [
  { year: '2020', item: 'Vektas founded to deliver practical enterprise software integration.' },
  { year: '2022', item: 'Expanded into AI automation for operational and knowledge workflows.' },
  { year: '2024', item: 'Launched dedicated private AI practice for secure on-prem deployments.' },
]

const values = [
  'Security-first engineering',
  'Outcome-focused delivery',
  'Transparent collaboration',
  'Long-term partnership',
]

export function AboutPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6" aria-labelledby="about-heading">
      <h1 id="about-heading" className="text-4xl font-bold tracking-tight text-[#07111F] dark:text-white sm:text-5xl">
        About
      </h1>
      <p className="mt-6 max-w-4xl text-lg text-slate-700 dark:text-slate-200">
        Our mission is to help organizations adopt AI without sacrificing privacy, security, or cost predictability.
      </p>

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        <ScrollReveal className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">Timeline</h2>
          <ol className="mt-4 space-y-4">
            {timeline.map((entry) => (
              <li key={entry.year} className="rounded-xl bg-slate-50 p-4 dark:bg-slate-950">
                <p className="text-sm font-semibold text-blue-600">{entry.year}</p>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{entry.item}</p>
              </li>
            ))}
          </ol>
        </ScrollReveal>

        <ScrollReveal className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">Company Values</h2>
          <ul className="mt-4 space-y-3">
            {values.map((value) => (
              <li key={value} className="rounded-xl bg-slate-50 px-4 py-3 text-sm text-slate-700 dark:bg-slate-950 dark:text-slate-200">
                {value}
              </li>
            ))}
          </ul>
        </ScrollReveal>
      </div>
    </section>
  )
}
