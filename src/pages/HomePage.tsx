import {
  ArrowPathIcon,
  CircleStackIcon,
  CpuChipIcon,
  PuzzlePieceIcon,
} from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'
import { CtaBanner } from '../components/CtaBanner'
import { NewsletterSignup } from '../components/NewsletterSignup'
import { ScrollReveal } from '../components/ScrollReveal'

const capabilities = [
  {
    title: 'AI Systems Engineering',
    description: 'Move from experiments to production systems designed around security, governance, reliability, and measurable outcomes.',
    icon: CpuChipIcon,
  },
  {
    title: 'Workflow Modernization',
    description: 'Redesign complex operational workflows using the right mix of AI, software, automation, and human review.',
    icon: ArrowPathIcon,
  },
  {
    title: 'Systems Integration',
    description: 'Connect applications, APIs, identity platforms, data sources, and legacy systems across the enterprise.',
    icon: PuzzlePieceIcon,
  },
  {
    title: 'Enterprise Knowledge Systems',
    description: 'Build private RAG and knowledge solutions that help teams find and use trusted internal information.',
    icon: CircleStackIcon,
  },
]

const principles = [
  'AI where reasoning and adaptation add value.',
  'Deterministic software where reliability and repeatability matter.',
  'Security, governance, and observability designed in from the start.',
  'Incremental delivery tied to measurable business outcomes.',
]

export function HomePage() {
  return (
    <>
      <section className="mx-auto grid max-w-6xl gap-12 px-4 pb-16 pt-16 sm:px-6 lg:grid-cols-2 lg:items-center" aria-labelledby="home-hero-heading">
        <div>
          <p className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-blue-700 dark:border-blue-500/40 dark:bg-blue-500/10 dark:text-blue-300">
            AI, Automation & Software Engineering
          </p>
          <h1 id="home-hero-heading" className="mt-4 text-4xl font-extrabold tracking-tight text-[#07111F] dark:text-white sm:text-5xl">
            Build intelligent systems that work in the real world.
          </h1>
          <p className="mt-5 max-w-xl text-lg text-slate-600 dark:text-slate-300">
            Vektas helps mid-market and enterprise organizations modernize complex workflows, integrate disconnected systems, and deploy practical AI solutions built for production.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/contact" className="rounded-full bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-500">
              Discuss an Initiative
            </Link>
            <Link to="/services" className="rounded-full border border-slate-300 px-5 py-3 font-semibold text-slate-800 transition hover:border-blue-600 hover:text-blue-600 dark:border-slate-700 dark:text-slate-100">
              Explore Capabilities
            </Link>
          </div>
        </div>

        <ScrollReveal>
          <div className="relative mx-auto h-72 w-full max-w-md rounded-3xl border border-blue-200 bg-gradient-to-br from-[#07111F] via-slate-900 to-blue-700 p-8 shadow-2xl dark:border-blue-500/40" role="img" aria-label="Abstract enterprise technology architecture with connected systems">
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

      <section className="mx-auto max-w-6xl px-4 sm:px-6" aria-labelledby="capabilities-heading">
        <h2 id="capabilities-heading" className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
          From complex problem to production system
        </h2>
        <p className="mt-3 max-w-3xl text-slate-600 dark:text-slate-300">
          We work across the boundaries between business process, software engineering, data, integration, and AI to solve problems that rarely fit into a single product category.
        </p>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {capabilities.map((capability, index) => (
            <ScrollReveal
              key={capability.title}
              delay={index * 0.05}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900"
            >
              <capability.icon className="h-8 w-8 text-blue-600" aria-hidden="true" />
              <h3 className="mt-4 text-xl font-semibold text-slate-900 dark:text-white">{capability.title}</h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{capability.description}</p>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-16 max-w-6xl px-4 sm:px-6" aria-labelledby="engineering-heading">
        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 dark:border-slate-800 dark:bg-slate-900">
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">Our engineering approach</p>
          <h2 id="engineering-heading" className="mt-3 text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            AI where it helps. Deterministic software where it works better.
          </h2>
          <p className="mt-4 max-w-4xl text-slate-600 dark:text-slate-300">
            Not every problem needs an LLM. Vektas combines AI reasoning with conventional software, APIs, business rules, and automation so systems can be intelligent without becoming unnecessarily expensive, unpredictable, or difficult to operate.
          </p>
          <ul className="mt-6 grid gap-3 md:grid-cols-2">
            {principles.map((principle) => (
              <li key={principle} className="rounded-xl bg-white px-4 py-3 text-sm text-slate-700 shadow-sm dark:bg-slate-950 dark:text-slate-200">
                {principle}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBanner />

      <div className="mx-auto max-w-6xl px-4 pb-16 sm:px-6">
        <NewsletterSignup />
      </div>
    </>
  )
}
