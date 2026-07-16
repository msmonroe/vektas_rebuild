import {
  ArrowPathIcon,
  ChartBarSquareIcon,
  CheckCircleIcon,
  ClockIcon,
  LinkIcon,
  MagnifyingGlassIcon,
  RectangleStackIcon,
  UserGroupIcon,
} from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'
import { CtaBanner } from '../components/CtaBanner'
import { ScrollReveal } from '../components/ScrollReveal'

const problems = [
  {
    title: 'Too much work is still manual',
    description: 'Skilled employees lose hours copying information, chasing approvals, and rebuilding the same reports.',
    icon: ClockIcon,
  },
  {
    title: 'Your systems do not work together',
    description: 'Important information is scattered across applications, spreadsheets, inboxes, and departments.',
    icon: LinkIcon,
  },
  {
    title: 'Growth keeps adding complexity',
    description: 'More customers and more employees create more handoffs, more exceptions, and more room for error.',
    icon: UserGroupIcon,
  },
  {
    title: 'Technology is not delivering enough value',
    description: 'You have invested in software and AI, but the day-to-day operation of the business has not become easier.',
    icon: RectangleStackIcon,
  },
]

const outcomes = [
  'Information moves automatically between systems.',
  'Employees spend less time on repetitive coordination.',
  'Customers receive faster and more consistent service.',
  'Leaders gain clearer visibility into operations.',
  'Growth does not require adding overhead at the same rate.',
  'Technology investments produce measurable business value.',
]

const waysWeHelp = [
  {
    title: 'Simplify workflows',
    description: 'Remove unnecessary steps, handoffs, and bottlenecks from the way work gets done.',
    icon: ArrowPathIcon,
  },
  {
    title: 'Connect systems and information',
    description: 'Make data move reliably between the tools and teams that need it.',
    icon: LinkIcon,
  },
  {
    title: 'Build software around the business',
    description: 'Create practical internal tools when off-the-shelf products do not fit the operation.',
    icon: RectangleStackIcon,
  },
  {
    title: 'Improve visibility and decisions',
    description: 'Turn scattered operational information into timely, useful reporting and insight.',
    icon: ChartBarSquareIcon,
  },
]

const steps = [
  {
    number: '01',
    title: 'Understand',
    description: 'We learn how work moves through the organization and where time, money, and attention are being lost.',
  },
  {
    number: '02',
    title: 'Prioritize',
    description: 'We identify the improvements most likely to create meaningful operational and financial value.',
  },
  {
    number: '03',
    title: 'Build',
    description: 'We deliver focused improvements using the right combination of software, automation, integration, and AI.',
  },
  {
    number: '04',
    title: 'Measure',
    description: 'We evaluate what changed, refine the solution, and build from demonstrated results rather than hype.',
  },
]

export function HomePage() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-4 pb-20 pt-20 sm:px-6 lg:pb-28 lg:pt-28" aria-labelledby="home-hero-heading">
        <div className="max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-600">
            Business improvement through better systems
          </p>
          <h1 id="home-hero-heading" className="mt-5 text-5xl font-extrabold tracking-tight text-[#07111F] dark:text-white sm:text-6xl lg:text-7xl">
            Your business should become easier to operate as it grows.
          </h1>
          <p className="mt-7 max-w-3xl text-xl leading-8 text-slate-600 dark:text-slate-300">
            Vektas helps mid-market organizations remove manual work, connect disconnected systems, and improve how information moves across the business.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link to="/contact" className="rounded-full bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-500">
              Discuss an Operational Challenge
            </Link>
            <a href="#problems" className="rounded-full border border-slate-300 px-6 py-3 font-semibold text-slate-800 transition hover:border-blue-600 hover:text-blue-600 dark:border-slate-700 dark:text-slate-100">
              See the Problems We Solve
            </a>
          </div>
        </div>
      </section>

      <section id="problems" className="border-y border-slate-200 bg-white py-20 dark:border-slate-800 dark:bg-slate-950" aria-labelledby="problems-heading">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-600">Common signs of operational friction</p>
          <h2 id="problems-heading" className="mt-3 max-w-3xl text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            The business is growing, but the way work gets done has not kept up.
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {problems.map((problem, index) => (
              <ScrollReveal key={problem.title} delay={index * 0.04} className="rounded-2xl border border-slate-200 p-6 dark:border-slate-800">
                <problem.icon className="h-7 w-7 text-blue-600" aria-hidden="true" />
                <h3 className="mt-4 text-xl font-semibold text-slate-900 dark:text-white">{problem.title}</h3>
                <p className="mt-2 text-slate-600 dark:text-slate-300">{problem.description}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6" aria-labelledby="outcomes-heading">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-600">What better looks like</p>
            <h2 id="outcomes-heading" className="mt-3 text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
              Less friction. More capacity. Better service.
            </h2>
            <p className="mt-4 text-slate-600 dark:text-slate-300">
              The goal is not more technology. The goal is a business that can move faster, respond better, and grow without unnecessary complexity.
            </p>
          </div>
          <ul className="grid gap-4 sm:grid-cols-2">
            {outcomes.map((outcome) => (
              <li key={outcome} className="flex gap-3 rounded-2xl bg-white p-5 shadow-sm dark:bg-slate-900">
                <CheckCircleIcon className="mt-0.5 h-6 w-6 shrink-0 text-blue-600" aria-hidden="true" />
                <span className="text-slate-700 dark:text-slate-200">{outcome}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-[#07111F] py-20 text-white" aria-labelledby="help-heading">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-300">How we help</p>
          <h2 id="help-heading" className="mt-3 max-w-3xl text-4xl font-bold tracking-tight">
            We improve the way work moves through your organization.
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {waysWeHelp.map((item, index) => (
              <ScrollReveal key={item.title} delay={index * 0.04} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <item.icon className="h-7 w-7 text-blue-300" aria-hidden="true" />
                <h3 className="mt-4 text-xl font-semibold">{item.title}</h3>
                <p className="mt-2 text-slate-300">{item.description}</p>
              </ScrollReveal>
            ))}
          </div>
          <p className="mt-8 max-w-4xl text-slate-300">
            Depending on the problem, the solution may involve process redesign, systems integration, custom software, automation, reporting, or AI. We choose the tools after we understand the outcome.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6" aria-labelledby="assessment-heading">
        <div className="rounded-3xl border border-blue-200 bg-blue-50 p-8 dark:border-blue-500/30 dark:bg-blue-500/10 lg:p-12">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-700 dark:text-blue-300">A practical place to begin</p>
              <h2 id="assessment-heading" className="mt-3 text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
                The Operational Friction Assessment
              </h2>
              <p className="mt-4 text-lg text-slate-700 dark:text-slate-200">
                A focused review of the processes, systems, handoffs, and information bottlenecks that are costing your organization time and money.
              </p>
            </div>
            <div className="rounded-2xl bg-white p-6 shadow-sm dark:bg-slate-950">
              <MagnifyingGlassIcon className="h-8 w-8 text-blue-600" aria-hidden="true" />
              <p className="mt-4 text-slate-700 dark:text-slate-200">
                You leave with a prioritized view of where improvement is most likely to create value and a practical path for what to address first.
              </p>
              <Link to="/contact" className="mt-5 inline-flex font-semibold text-blue-600 hover:text-blue-500">
                Ask about the assessment →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white py-20 dark:border-slate-800 dark:bg-slate-950" aria-labelledby="process-heading">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-600">How we work</p>
          <h2 id="process-heading" className="mt-3 text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Understand. Prioritize. Build. Measure.
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => (
              <div key={step.number} className="border-t-2 border-blue-600 pt-5">
                <p className="text-sm font-bold text-blue-600">{step.number}</p>
                <h3 className="mt-2 text-xl font-semibold text-slate-900 dark:text-white">{step.title}</h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  )
}
