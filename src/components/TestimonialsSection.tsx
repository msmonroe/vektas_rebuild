import { testimonials } from '../data/siteContent'
import { ScrollReveal } from './ScrollReveal'

export function TestimonialsSection() {
  return (
    <section className="mx-auto mt-16 max-w-6xl px-4 sm:px-6" aria-labelledby="testimonials-heading">
      <h2 id="testimonials-heading" className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
        Trusted by teams building responsibly with AI
      </h2>
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {testimonials.map((item, index) => (
          <ScrollReveal
            key={item.author}
            delay={index * 0.05}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900"
          >
            <blockquote className="text-sm text-slate-600 dark:text-slate-300">“{item.quote}”</blockquote>
            <p className="mt-4 text-sm font-semibold text-slate-900 dark:text-white">{item.author}</p>
          </ScrollReveal>
        ))}
      </div>
    </section>
  )
}
