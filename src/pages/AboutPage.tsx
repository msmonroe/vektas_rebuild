import { ScrollReveal } from '../components/ScrollReveal'

const strengths = [
  'Enterprise software engineering and systems integration',
  'Business analysis that connects technology to operational outcomes',
  'Practical AI architecture with security, governance, and cost in mind',
  'Senior-level involvement from discovery through delivery',
]

const principles = [
  'Solve the business problem, not the technology trend',
  'Use AI where reasoning adds value and deterministic software where it works better',
  'Design for the systems, constraints, and people already in the organization',
  'Deliver in measurable stages instead of hiding complexity behind a giant transformation program',
]

export function AboutPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6" aria-labelledby="about-heading">
      <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">About Vektas</p>
      <h1 id="about-heading" className="mt-3 text-4xl font-bold tracking-tight text-[#07111F] dark:text-white sm:text-5xl">
        Senior engineering for complicated business problems.
      </h1>
      <p className="mt-6 max-w-4xl text-lg text-slate-700 dark:text-slate-200">
        Vektas is a boutique AI and software engineering consultancy for mid-market and enterprise organizations. We help teams modernize complex workflows, integrate disconnected systems, and move practical AI initiatives from experimentation into production.
      </p>
      <p className="mt-4 max-w-4xl text-slate-600 dark:text-slate-300">
        Our work sits at the intersection of software engineering, business process, data, integration, identity, automation, and AI. That matters because the hardest operational problems rarely belong to a single product category.
      </p>

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        <ScrollReveal className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">What we bring</h2>
          <ul className="mt-4 space-y-3">
            {strengths.map((strength) => (
              <li key={strength} className="rounded-xl bg-slate-50 px-4 py-3 text-sm text-slate-700 dark:bg-slate-950 dark:text-slate-200">
                {strength}
              </li>
            ))}
          </ul>
        </ScrollReveal>

        <ScrollReveal className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">How we think</h2>
          <ul className="mt-4 space-y-3">
            {principles.map((principle) => (
              <li key={principle} className="rounded-xl bg-slate-50 px-4 py-3 text-sm text-slate-700 dark:bg-slate-950 dark:text-slate-200">
                {principle}
              </li>
            ))}
          </ul>
        </ScrollReveal>
      </div>
    </section>
  )
}
