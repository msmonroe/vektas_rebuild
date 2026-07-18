import { useEffect, useMemo, useState } from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { Layout } from './components/Layout'
import { blogPosts } from './data/blogPosts'
import { AboutPage } from './pages/AboutPage'
import { BlogArticlePage } from './pages/BlogArticlePage'
import { BlogPage } from './pages/BlogPage'
import { ContactPage } from './pages/ContactPage'
import { HomePage } from './pages/HomePage'
import { PricingPage } from './pages/PricingPage'
import { ServicesPage } from './pages/ServicesPage'
import { SolutionsPage } from './pages/SolutionsPage'

const routeMeta: Record<string, { title: string; description: string }> = {
  '/': {
    title: 'Vektas | Better Operations, Measurable Results',
    description:
      'Vektas helps mid-market and enterprise organizations reduce operational friction, improve consistency, control costs, and turn stalled initiatives into measurable results.',
  },
  '/services': {
    title: 'Services | Vektas',
    description:
      'Practical support for improving complex workflows, reducing delays, connecting teams, strengthening controls, and delivering reliable operational change.',
  },
  '/solutions': {
    title: 'Solutions | Vektas',
    description:
      'Solutions for slow processes, scattered knowledge, repetitive work, broken handoffs, inconsistent decisions, and difficult operational change.',
  },
  '/pricing': {
    title: 'Engagement Models | Vektas',
    description:
      'Flexible engagement models for assessment, focused improvement initiatives, implementation, optimization, and ongoing operational support.',
  },
  '/blog': {
    title: 'Business Operations Insights | Vektas',
    description:
      'Practical guidance for reducing delays, controlling costs, protecting information, improving access to knowledge, and delivering dependable operational change.',
  },
  '/about': {
    title: 'About | Vektas',
    description:
      'Learn how Vektas helps organizations untangle complex operations, improve business processes, and turn difficult initiatives into practical results.',
  },
  '/contact': {
    title: 'Contact | Vektas',
    description:
      'Contact Vektas to discuss an operational problem, stalled initiative, costly process, or improvement opportunity within your organization.',
  },
}

function useTheme() {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    const stored = localStorage.getItem('vektas-theme')
    if (stored === 'light' || stored === 'dark') {
      return stored
    }

    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  })

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
    localStorage.setItem('vektas-theme', theme)
  }, [theme])

  return { theme, toggleTheme: () => setTheme((value) => (value === 'dark' ? 'light' : 'dark')) }
}

function useSeoMetadata() {
  const location = useLocation()

  const meta = useMemo(() => {
    if (location.pathname.startsWith('/blog/')) {
      const slug = location.pathname.replace('/blog/', '')
      const post = blogPosts.find((candidate) => candidate.slug === slug)
      if (post) {
        return {
          title: `${post.title} | Vektas`,
          description: post.description,
        }
      }
    }

    return routeMeta[location.pathname] ?? routeMeta['/']
  }, [location.pathname])

  useEffect(() => {
    document.title = meta.title

    const ensureMetaTag = (selector: string, attributes: Record<string, string>) => {
      let element = document.head.querySelector(selector) as HTMLMetaElement | null

      if (!element) {
        element = document.createElement('meta')
        Object.entries(attributes).forEach(([key, value]) => element?.setAttribute(key, value))
        document.head.appendChild(element)
      }

      element.content = meta.description
    }

    ensureMetaTag('meta[name="description"]', { name: 'description' })
    ensureMetaTag('meta[property="og:description"]', { property: 'og:description' })
    ensureMetaTag('meta[name="twitter:description"]', { name: 'twitter:description' })

    const ensureTitleMeta = (selector: string, attributes: Record<string, string>) => {
      let element = document.head.querySelector(selector) as HTMLMetaElement | null

      if (!element) {
        element = document.createElement('meta')
        Object.entries(attributes).forEach(([key, value]) => element?.setAttribute(key, value))
        document.head.appendChild(element)
      }

      element.content = meta.title
    }

    ensureTitleMeta('meta[property="og:title"]', { property: 'og:title' })
    ensureTitleMeta('meta[name="twitter:title"]', { name: 'twitter:title' })
  }, [meta])
}

function AppRoutes() {
  useSeoMetadata()

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/solutions" element={<SolutionsPage />} />
      <Route path="/pricing" element={<PricingPage />} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/blog/:slug" element={<BlogArticlePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

function App() {
  const { theme, toggleTheme } = useTheme()

  return (
    <Layout theme={theme} onToggleTheme={toggleTheme}>
      <AppRoutes />
    </Layout>
  )
}

export default App
