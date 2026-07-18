import {
  ArrowTrendingUpIcon,
  ClockIcon,
  LinkIcon,
  ShieldCheckIcon,
} from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'
import { CtaBanner } from '../components/CtaBanner'
import { NewsletterSignup } from '../components/NewsletterSignup'
import { ScrollReveal } from '../components/ScrollReveal'

const outcomes = [
  {
    title: 'Faster work with fewer handoffs',
    description: 'Reduce delays caused by approvals, duplicate entry, unclear ownership, and disconnected steps.',
    icon: ClockIcon,
  },
  {
    title: 'Lower operating cost',
    description: 'Remove repetitive work and rework so skilled employees can focus on decisions, customers, and higher-value activity.',
    icon: ArrowTrendingUpIcon,
  },
  {
    title: 'Better-connected operations',
    description: 'Make information move reliably across teams and systems instead of depending on spreadsheets, email, and manual workarounds.',
    icon: LinkIcon,
  },
  {
    title: 'More control as volume grows',
    description: 'Increase throughput while preserving approvals, accountability, exception handling, and visibility.',
    icon: ShieldCheckIcon,
  },
]

const signs = [
  'Important work depends on spreadsheets, email, and tribal knowledge.',
  'Employees enter the same information into more than one system.',
  'Requests stall because ownership or next steps are unclear.',
  'A critical internal tool no longer supports the way the business operates.',
  'A promising improvement initiative cannot move beyond the pilot stage.',
  'Leadership knows the process is expensive, but the right fix is not obvious.',
]

export function HomePage() {
  return (
    <>
      <section className="mx-auto grid max-w-6xl gap-12 px-4 pb-16 pt-16 sm:px-6 lg:grid-cols-2 lg:items-center" aria-labelledby="home-hero-heading">
        <div>
          <p className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-blue-700 dark:border-blue-500/40 dark:bg-blue-500/10 dark:text-blue-300">
            Practical operational improvement
          </p>
          <h1 id="home-hero-heading" className="mt-4 text-4xl font-extrabold tracking-tight text-[#07111F] dark:text-white sm:text-5xl">
            Make complex work easier, faster, and more reliable.
          </h1>
          <p className="mt-5 max-w-xl text-lg text-slate-600 dark:text-slate-300">
            Vektas helps mid-market and enterprise organizations remove process bottlenecks, connect disconnected operations, reduce repetitive work, and turn difficult improvement initiatives into dependable business results.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/contact" className="rounded-full bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-500">
              Tell Us What Is Not Working
            </Link>
            <Link to="/solutions" className="rounded-full border border-slate-300 px-5 py-3 font-semibold text-slate-800 transition hover:border-blue-600 hover:text-blue-600 dark:border-slate-700 dark:text-slate-100">
              See Problems We Solve
            </Link>
          </div>
          <p className="mt-4 text-sm text-slate-500 dark:text-slate-400">
            No technical specification required. Start with the business problem.
          </p>
        </div>

        <ScrollReveal>
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xl dark:border-slate-800 dark:bg-slate-900">
            <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">A useful first conversation</p>
            <h2 className="mt-3 text-2xl font-bold text-slate-900 dark:text-white">What is slowing the business down?</h2>
            <div className="mt-6 space-y-4 text-sm text-slate-600 dark:text-slate-300">
              <p>Where does work wait?</p>
              <p>What do employees repeatedly do by hand?</p>
              <p>Which systems or departments do not work well together?</p>
              <p>What would improve if the problem were solved?</p>
            </div>
            <div className="mt-6 rounded-2xl bg-slate-50 p-5 dark:bg-slate-950">
              <p className="font-semibold text-slate-900 dark:text-white">The output</p>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                A clearer problem definition, practical options, and a sensible next step without committing to a giant transformation program.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </section>

      <section className="mx-auto max-w-6xl px-4 sm:px-6" aria-labelledby="outcomes-heading">
        <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">What improves</p>
        <h2 id="outcomes-heading" className="mt-3 text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
          Better operations, not more technology for its own sake
        </h2>
        <p className="mt-3 max-w-3xl text-slate-600 dark:text-slate-300">
          The solution may involve process changes, better use of existing systems, targeted automation, integration, or custom software. The measure of success is the business result.
        </p>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {outcomes.map((outcome, index) => (
            <ScrollReveal
              key={outcome.title}
              delay={index * 0.05}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900"
            >
              <outcome.icon className="h-8 w-8 text-blue-600" aria-hidden="true" />
              <h3 className="mt-4 text-xl font-semibold text-slate-900 dark:text-white">{outcome.title}</h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{outcome.description}</p>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-16 max-w-6xl px-4 sm:px-6" aria-labelledby="signs-heading">
        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 dark:border-slate-800 dark:bg-slate-900">
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">Signs it may be time to talk</p>
          <h2 id="signs-heading" className="mt-3 text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            The problem is visible even when the solution is not
          </h2>
          <ul className="mt-6 grid gap-3 md:grid-cols-2">
            {signs.map((sign) => (
              <li key={sign} className="rounded-xl bg-white px-4 py-3 text-sm text-slate-700 shadow-sm dark:bg-slate-950 dark:text-slate-200">
                {sign}
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
