import { CtaBanner } from '../components/CtaBanner'
import { FaqAccordion } from '../components/FaqAccordion'
import { ScrollReveal } from '../components/ScrollReveal'

const phases = [
  {
    name: 'Clarify the Problem',
    price: 'Focused first engagement',
    detail: 'Understand where the operation is breaking down, who is affected, what the problem costs, and what a meaningful improvement would look like.',
  },
  {
    name: 'Prove the Improvement',
    price: 'Defined milestone',
    detail: 'Test a focused change against real work and real users before committing to a broader rollout.',
  },
  {
    name: 'Put It Into Operation',
    price: 'Scoped implementation',
    detail: 'Integrate the improvement into the actual business process with ownership, controls, training, measurement, and support built in.',
  },
  {
    name: 'Improve and Expand',
    price: 'Ongoing or follow-on work',
    detail: 'Refine the result, address additional bottlenecks, and expand only where the evidence supports further investment.',
  },
]

export function PricingPage() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6" aria-labelledby="pricing-heading">
        <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">How we work</p>
        <h1 id="pricing-heading" className="mt-3 text-4xl font-bold tracking-tight text-[#07111F] dark:text-white sm:text-5xl">
          Start with clarity. Invest further when the evidence supports it.
        </h1>
        <p className="mt-4 max-w-3xl text-lg text-slate-600 dark:text-slate-300">
          Complex operational problems should not begin with a blank check. We structure engagements around clear decisions, measurable milestones, and useful stopping points so leadership can manage risk as the work progresses.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {phases.map((phase, index) => (
            <ScrollReveal
              key={phase.name}
              delay={index * 0.05}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900"
            >
              <p className="text-sm font-semibold text-blue-600">Step {index + 1}</p>
              <h2 className="mt-2 text-xl font-semibold text-slate-900 dark:text-white">{phase.name}</h2>
              <p className="mt-3 text-sm font-medium text-slate-500 dark:text-slate-400">{phase.price}</p>
              <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">{phase.detail}</p>
            </ScrollReveal>
          ))}
        </div>

        <div className="mt-12 rounded-3xl border border-blue-200 bg-blue-50 p-8 dark:border-blue-500/30 dark:bg-blue-500/10">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">The first conversation is not a sales ambush.</h2>
          <p className="mt-3 max-w-4xl text-slate-600 dark:text-slate-300">
            We use it to understand the problem, determine whether Vektas is a reasonable fit, and identify the most useful next step. Sometimes that next step is a focused assessment. Sometimes it is a smaller change. Sometimes the honest answer is that another option makes more sense.
          </p>
        </div>
      </section>
      <FaqAccordion />
      <CtaBanner />
    </>
  )
}
