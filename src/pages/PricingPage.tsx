import { CtaBanner } from '../components/CtaBanner'
import { FaqAccordion } from '../components/FaqAccordion'
import { ScrollReveal } from '../components/ScrollReveal'

const plans = [
  {
    name: 'AI Readiness Assessment',
    price: 'One-time engagement',
    detail: 'Identify highest ROI opportunities, risks, and implementation roadmap.',
  },
  {
    name: 'Custom AI Deployment',
    price: 'Custom quote',
    detail: 'Design and deploy secure private AI architecture tailored to your environment.',
  },
  {
    name: 'Managed AI Support',
    price: 'Monthly support',
    detail: 'Ongoing optimization, monitoring, and advisory for long-term performance.',
  },
]

export function PricingPage() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6" aria-labelledby="pricing-heading">
        <h1 id="pricing-heading" className="text-4xl font-bold tracking-tight text-[#07111F] dark:text-white sm:text-5xl">
          Pricing
        </h1>
        <p className="mt-4 max-w-3xl text-slate-600 dark:text-slate-300">
          Flexible engagement models based on your infrastructure, security, and delivery goals.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {plans.map((plan, index) => (
            <ScrollReveal
              key={plan.name}
              delay={index * 0.05}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900"
            >
              <h2 className="text-xl font-semibold text-slate-900 dark:text-white">{plan.name}</h2>
              <p className="mt-3 text-sm font-medium text-blue-600">{plan.price}</p>
              <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">{plan.detail}</p>
            </ScrollReveal>
          ))}
        </div>
      </section>
      <FaqAccordion />
      <CtaBanner />
    </>
  )
}
