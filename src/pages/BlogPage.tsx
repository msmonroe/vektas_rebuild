import { blogPosts } from '../data/siteContent'
import { ScrollReveal } from '../components/ScrollReveal'

export function BlogPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6" aria-labelledby="blog-heading">
      <h1 id="blog-heading" className="text-4xl font-bold tracking-tight text-[#07111F] dark:text-white sm:text-5xl">
        Blog
      </h1>
      <p className="mt-4 max-w-3xl text-slate-600 dark:text-slate-300">
        Insights on private AI strategy, deployment, automation, and enterprise adoption.
      </p>
      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {blogPosts.map((title, index) => (
          <ScrollReveal
            key={title}
            delay={index * 0.04}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900"
          >
            <p className="text-xs font-semibold uppercase tracking-wide text-blue-600">Article</p>
            <h2 className="mt-3 text-xl font-semibold text-slate-900 dark:text-white">{title}</h2>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
              Placeholder summary content for upcoming long-form guidance and implementation patterns.
            </p>
          </ScrollReveal>
        ))}
      </div>
    </section>
  )
}
