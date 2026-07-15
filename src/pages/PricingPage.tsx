import { CtaBanner } from '../components/CtaBanner'
import { FaqAccordion } from '../components/FaqAccordion'
import { ScrollReveal } from '../components/ScrollReveal'

const phases = [
  {
    name: 'Assessment & Discovery',
    price: 'Defined-scope engagement',
    detail: 'Clarify the business problem, current-state architecture, constraints, risks, data boundaries, and a practical implementation roadmap.',
  },
  {
    name: 'Pilot & Validation',
    price: 'Milestone-based delivery',
    detail: 'Build and test a focused solution against real workflows, integrations, users, and measurable success criteria before broader rollout.',
  },
  {
    name: 'Production Implementation',
    price: 'Custom project scope',
    detail: 'Engineer, integrate, deploy, and operationalize the solution with security, governance, observability, documentation, and handoff built in.',
  },
  {
    name: 'Optimization & Support',
    price: 'Ongoing engagement',
    detail: 'Improve performance, cost, reliability, adoption, and functionality as business needs and technology change.',
  },
]

export function PricingPage() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6" aria-labelledby="pricing-heading">
        <h1 id="pricing-heading" className="text-4xl font-bold tracking-tight text-[#07111F] dark:text-white sm:text-5xl">
          Engagement Models
        </h1>
        <p className="mt-4 max-w-3xl text-slate-600 dark:text-slate-300">
          Complex initiatives rarely fit a fixed menu. We structure engagements around clear decisions, measurable milestones, and the level of delivery support your organization needs.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {phases.map((phase, index) => (
            <ScrollReveal
              key={phase.name}
              delay={index * 0.05}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900"
            >
              <h2 className="text-xl font-semibold text-slate-900 dark:text-white">{phase.name}</h2>
              <p className="mt-3 text-sm font-medium text-blue-600">{phase.price}</p>
              <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">{phase.detail}</p>
            </ScrollReveal>
          ))}
        </div>
      </section>
      <FaqAccordion />
      <CtaBanner />
    </>
  )
}
