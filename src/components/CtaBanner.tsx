import { Link } from 'react-router-dom'
import { ScrollReveal } from './ScrollReveal'

export function CtaBanner() {
  return (
    <ScrollReveal className="mx-auto my-16 max-w-6xl px-4 sm:px-6">
      <section className="rounded-3xl bg-[#07111F] px-6 py-10 text-white shadow-xl sm:px-10" aria-label="Call to action">
        <h2 className="max-w-4xl text-3xl font-bold tracking-tight sm:text-4xl">
          Where is your business losing time, money, or momentum?
        </h2>
        <p className="mt-3 max-w-3xl text-slate-200">
          Tell us what is difficult, repetitive, slow, or disconnected. We will help you identify a practical place to begin.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            to="/contact"
            className="rounded-full bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-500"
          >
            Discuss an Operational Challenge
          </Link>
          <Link
            to="/pricing"
            className="rounded-full border border-white/30 px-5 py-3 font-semibold text-white transition hover:bg-white/10"
          >
            See How We Work
          </Link>
        </div>
      </section>
    </ScrollReveal>
  )
}
