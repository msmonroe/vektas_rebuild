import {
  BoltIcon,
  CircleStackIcon,
  CpuChipIcon,
  ShieldCheckIcon,
} from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'
import { CtaBanner } from '../components/CtaBanner'
import { NewsletterSignup } from '../components/NewsletterSignup'
import { ScrollReveal } from '../components/ScrollReveal'
import { TestimonialsSection } from '../components/TestimonialsSection'

const features = [
  {
    title: 'Private AI',
    description: 'Deploy Ollama, Llama, and open-source LLMs securely.',
    icon: ShieldCheckIcon,
  },
  {
    title: 'AI Automation',
    description: 'Automate repetitive business processes using AI.',
    icon: BoltIcon,
  },
  {
    title: 'Enterprise Integration',
    description: 'Integrate AI into Microsoft, .NET, REST APIs, SQL Server, and existing systems.',
    icon: CircleStackIcon,
  },
  {
    title: 'AI Readiness Assessment',
    description: 'Evaluate where AI can provide the highest ROI.',
    icon: CpuChipIcon,
  },
]

export function HomePage() {
  return (
    <>
      <section className="mx-auto grid max-w-6xl gap-12 px-4 pb-16 pt-16 sm:px-6 lg:grid-cols-2 lg:items-center" aria-labelledby="home-hero-heading">
        <div>
          <p className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-blue-700 dark:border-blue-500/40 dark:bg-blue-500/10 dark:text-blue-300">
            Private AI Consulting
          </p>
          <h1 id="home-hero-heading" className="mt-4 text-4xl font-extrabold tracking-tight text-[#07111F] dark:text-white sm:text-5xl">
            Private AI. Real Results.
          </h1>
          <p className="mt-5 max-w-xl text-lg text-slate-600 dark:text-slate-300">
            We help businesses deploy secure AI systems that run on their own infrastructure, reducing AI costs while keeping sensitive data under their control.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/contact" className="rounded-full bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-500">
              Schedule Consultation
            </Link>
            <Link to="/services" className="rounded-full border border-slate-300 px-5 py-3 font-semibold text-slate-800 transition hover:border-blue-600 hover:text-blue-600 dark:border-slate-700 dark:text-slate-100">
              Explore Services
            </Link>
          </div>
        </div>

        <ScrollReveal>
          <div className="relative mx-auto h-72 w-full max-w-md rounded-3xl border border-blue-200 bg-gradient-to-br from-[#07111F] via-slate-900 to-blue-700 p-8 shadow-2xl dark:border-blue-500/40" role="img" aria-label="Abstract secure AI server with glowing circuitry">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(59,130,246,0.45),transparent_45%)]" />
            <div className="relative space-y-4">
              <div className="h-8 w-2/3 rounded bg-blue-400/40" />
              <div className="h-8 w-5/6 rounded bg-slate-200/20" />
              <div className="h-8 w-1/2 rounded bg-blue-300/30" />
              <div className="mt-6 grid grid-cols-4 gap-3">
                {Array.from({ length: 12 }).map((_, i) => (
                  <div key={i} className="h-6 rounded bg-white/15" />
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      <section className="mx-auto max-w-6xl px-4 sm:px-6" aria-label="Feature cards">
        <div className="grid gap-6 md:grid-cols-2">
          {features.map((feature, index) => (
            <ScrollReveal
              key={feature.title}
              delay={index * 0.05}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900"
            >
              <feature.icon className="h-8 w-8 text-blue-600" aria-hidden="true" />
              <h2 className="mt-4 text-xl font-semibold text-slate-900 dark:text-white">{feature.title}</h2>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{feature.description}</p>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <TestimonialsSection />
      <CtaBanner />

      <div className="mx-auto max-w-6xl px-4 pb-16 sm:px-6">
        <NewsletterSignup />
      </div>
    </>
  )
}
