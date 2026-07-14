import { Link } from 'react-router-dom'
import { ScrollReveal } from './ScrollReveal'

export function CtaBanner() {
  return (
    <ScrollReveal className="mx-auto my-16 max-w-6xl px-4 sm:px-6">
      <section className="rounded-3xl bg-[#07111F] px-6 py-10 text-white shadow-xl sm:px-10" aria-label="Call to action">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Ready to deploy private AI securely?</h2>
        <p className="mt-3 max-w-3xl text-slate-200">
          Partner with Vektas to reduce AI costs, protect sensitive data, and accelerate enterprise outcomes.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            to="/contact"
            className="rounded-full bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-500"
          >
            Schedule Consultation
          </Link>
          <Link
            to="/services"
            className="rounded-full border border-white/30 px-5 py-3 font-semibold text-white transition hover:bg-white/10"
          >
            Explore Services
          </Link>
        </div>
      </section>
    </ScrollReveal>
  )
}
