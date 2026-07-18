import { Link } from 'react-router-dom'
import { ScrollReveal } from './ScrollReveal'

export function CtaBanner() {
  return (
    <ScrollReveal className="mx-auto my-16 max-w-6xl px-4 sm:px-6">
      <section className="rounded-3xl bg-[#07111F] px-6 py-10 text-white shadow-xl sm:px-10" aria-label="Call to action">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Something important is taking too long, costing too much, or relying on too many workarounds.</h2>
        <p className="mt-3 max-w-3xl text-slate-200">
          Tell us what is happening. We will help clarify the problem, identify practical options, and determine whether there is a sensible next step.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            to="/contact"
            className="rounded-full bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-500"
          >
            Tell Us What Is Not Working
          </Link>
          <Link
            to="/solutions"
            className="rounded-full border border-white/30 px-5 py-3 font-semibold text-white transition hover:bg-white/10"
          >
            See Problems We Solve
          </Link>
        </div>
      </section>
    </ScrollReveal>
  )
}
