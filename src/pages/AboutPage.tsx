import { Link } from 'react-router-dom'
import { ScrollReveal } from '../components/ScrollReveal'

const strengths = [
  'Senior-level attention from the first conversation through delivery',
  'Experience translating operational problems into practical improvements',
  'Ability to work across departments, processes, vendors, and existing systems',
  'A bias toward focused changes that create evidence before larger investments',
]

const principles = [
  'Begin with the business problem and the people doing the work',
  'Measure success in time, cost, quality, throughput, risk, or service improvement',
  'Use what already works and change only what needs to change',
  'Make ownership, adoption, controls, and support part of the solution',
]

export function AboutPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6" aria-labelledby="about-heading">
      <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">About Vektas</p>
      <h1 id="about-heading" className="mt-3 text-4xl font-bold tracking-tight text-[#07111F] dark:text-white sm:text-5xl">
        A practical partner for complicated operational problems.
      </h1>
      <p className="mt-6 max-w-4xl text-lg text-slate-700 dark:text-slate-200">
        Vektas helps mid-market and enterprise organizations improve work that crosses departments, systems, documents, and decision points. We focus on the problems that are important enough to fix but too tangled for an off-the-shelf answer.
      </p>
      <p className="mt-4 max-w-4xl text-slate-600 dark:text-slate-300">
        Our role is to help leadership and operational teams turn an unclear problem into a workable plan, then carry that plan into a dependable result. The underlying technology matters, but it is not the reason the engagement exists.
      </p>

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        <ScrollReveal className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">What clients can expect</h2>
          <ul className="mt-4 space-y-3">
            {strengths.map((strength) => (
              <li key={strength} className="rounded-xl bg-slate-50 px-4 py-3 text-sm text-slate-700 dark:bg-slate-950 dark:text-slate-200">
                {strength}
              </li>
            ))}
          </ul>
        </ScrollReveal>

        <ScrollReveal className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">How we make decisions</h2>
          <ul className="mt-4 space-y-3">
            {principles.map((principle) => (
              <li key={principle} className="rounded-xl bg-slate-50 px-4 py-3 text-sm text-slate-700 dark:bg-slate-950 dark:text-slate-200">
                {principle}
              </li>
            ))}
          </ul>
        </ScrollReveal>
      </div>

      <div className="mt-12 rounded-3xl bg-[#07111F] p-8 text-white">
        <h2 className="text-2xl font-semibold">You do not need to know the answer before contacting us.</h2>
        <p className="mt-3 max-w-3xl text-slate-200">
          Knowing that a process is slow, expensive, fragile, or difficult to manage is enough to begin a useful conversation.
        </p>
        <Link to="/contact" className="mt-6 inline-flex rounded-full bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-500">
          Start With the Problem
        </Link>
      </div>
    </section>
  )
}
