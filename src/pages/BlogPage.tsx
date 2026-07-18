import { Link } from 'react-router-dom'
import { ScrollReveal } from '../components/ScrollReveal'
import { blogPosts } from '../data/blogPosts'

function formatDate(value: string) {
  return new Intl.DateTimeFormat('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  }).format(new Date(`${value}T12:00:00`))
}

export function BlogPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6" aria-labelledby="blog-heading">
      <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">Insights</p>
      <h1 id="blog-heading" className="mt-3 text-4xl font-bold tracking-tight text-[#07111F] dark:text-white sm:text-5xl">
        Better Operations, Practical Results
      </h1>
      <p className="mt-4 max-w-3xl text-lg text-slate-600 dark:text-slate-300">
        Guidance for leaders and operational teams working through slow processes, broken handoffs, rising costs, scattered knowledge, and difficult improvement initiatives.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {blogPosts.map((post, index) => (
          <ScrollReveal
            key={post.slug}
            delay={index * 0.04}
            className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-slate-800 dark:bg-slate-900"
          >
            <p className="text-xs font-semibold uppercase tracking-wide text-blue-600">{post.category}</p>
            <h2 className="mt-3 text-xl font-semibold text-slate-900 dark:text-white">
              <Link className="hover:text-blue-600" to={`/blog/${post.slug}`}>
                {post.title}
              </Link>
            </h2>
            <p className="mt-3 flex-1 text-sm leading-6 text-slate-600 dark:text-slate-300">{post.description}</p>
            <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4 text-xs text-slate-500 dark:border-slate-800 dark:text-slate-400">
              <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
              <span>{post.readTime}</span>
            </div>
            <Link className="mt-4 text-sm font-semibold text-blue-600 hover:text-blue-700" to={`/blog/${post.slug}`}>
              Read insight →
            </Link>
          </ScrollReveal>
        ))}
      </div>
    </section>
  )
}
