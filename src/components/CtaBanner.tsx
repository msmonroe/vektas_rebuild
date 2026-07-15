import { Link } from 'react-router-dom'
import { ScrollReveal } from './ScrollReveal'

export function CtaBanner() {
  return (
    <ScrollReveal className="mx-auto my-16 max-w-6xl px-4 sm:px-6">
      <section className="rounded-3xl bg-[#07111F] px-6 py-10 text-white shadow-xl sm:px-10" aria-label="Call to action">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Have a complex initiative that needs to become a working system?</h2>
        <p className="mt-3 max-w-3xl text-slate-200">
          Talk with Vektas about the workflow, integration, software, or AI problem your organization needs to solve.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            to="/contact"
            className="rounded-full bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-500"
          >
            Discuss an Initiative
          </Link>
          <Link
            to="/services"
            className="rounded-full border border-white/30 px-5 py-3 font-semibold text-white transition hover:bg-white/10"
          >
            Explore Capabilities
          </Link>
        </div>
      </section>
    </ScrollReveal>
  )
}
