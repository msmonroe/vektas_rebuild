import { Link, Navigate, useParams } from 'react-router-dom'
import { blogPosts } from '../data/blogPosts'

function formatDate(value: string) {
  return new Intl.DateTimeFormat('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  }).format(new Date(`${value}T12:00:00`))
}

export function BlogArticlePage() {
  const { slug = '' } = useParams()
  const post = blogPosts.find((candidate) => candidate.slug === slug)

  if (!post) {
    return <Navigate to="/blog" replace />
  }

  return (
    <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <Link className="text-sm font-semibold text-blue-600 hover:text-blue-700" to="/blog">
        ← Back to the blog
      </Link>

      <header className="mt-8 border-b border-slate-200 pb-8 dark:border-slate-800">
        <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">{post.category}</p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-[#07111F] dark:text-white sm:text-5xl">
          {post.title}
        </h1>
        <p className="mt-5 text-xl leading-8 text-slate-600 dark:text-slate-300">{post.description}</p>
        <div className="mt-6 flex flex-wrap gap-x-4 gap-y-2 text-sm text-slate-500 dark:text-slate-400">
          <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
          <span aria-hidden="true">•</span>
          <span>{post.readTime}</span>
        </div>
      </header>

      <div className="mt-10 space-y-6 text-lg leading-8 text-slate-700 dark:text-slate-300">
        {post.introduction.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>

      <div className="mt-12 space-y-12">
        {post.sections.map((section) => (
          <section key={section.heading} aria-labelledby={`${post.slug}-${section.heading.replaceAll(' ', '-').toLowerCase()}`}>
            <h2
              id={`${post.slug}-${section.heading.replaceAll(' ', '-').toLowerCase()}`}
              className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-3xl"
            >
              {section.heading}
            </h2>
            <div className="mt-5 space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-300">
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              {section.bullets && (
                <ul className="list-disc space-y-3 pl-6 marker:text-blue-600">
                  {section.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              )}
            </div>
          </section>
        ))}
      </div>

      <div className="mt-12 space-y-5 border-t border-slate-200 pt-10 text-lg leading-8 text-slate-700 dark:border-slate-800 dark:text-slate-300">
        {post.conclusion.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>

      <aside className="mt-12 rounded-2xl bg-slate-100 p-8 dark:bg-slate-900">
        <h2 className="text-xl font-semibold text-slate-900 dark:text-white">Improve a process that is costing time or money</h2>
        <p className="mt-3 text-slate-600 dark:text-slate-300">
          Vektas helps mid-market and enterprise organizations reduce operational friction, improve consistency, and turn stalled initiatives into measurable results.
        </p>
        <Link
          className="mt-5 inline-flex rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-700"
          to="/contact"
        >
          Discuss the business problem
        </Link>
      </aside>
    </article>
  )
}
