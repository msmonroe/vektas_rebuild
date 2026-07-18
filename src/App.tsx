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
    title: 'Vektas | AI, Automation & Software Engineering',
    description:
      'Vektas helps mid-market and enterprise organizations modernize workflows, integrate systems, and deploy production-ready AI and custom software.',
  },
  '/services': {
    title: 'Services | Vektas',
    description:
      'AI systems engineering, workflow modernization, systems integration, custom software, enterprise knowledge systems, and production readiness services.',
  },
  '/solutions': {
    title: 'Solutions | Vektas',
    description:
      'Practical AI, automation, integration, document intelligence, and knowledge systems for complex mid-market and enterprise operations.',
  },
  '/pricing': {
    title: 'Engagement Models | Vektas',
    description:
      'Flexible consulting and delivery models for assessment, pilot, production implementation, optimization, and ongoing support.',
  },
  '/blog': {
    title: 'Blog | Vektas',
    description:
      'Practical guidance for reducing operational friction, protecting sensitive information, controlling costs, and improving access to organizational knowledge.',
  },
  '/about': {
    title: 'About | Vektas',
    description:
      'Learn how Vektas combines enterprise software engineering, systems integration, business analysis, and AI to solve complex operational problems.',
  },
  '/contact': {
    title: 'Contact | Vektas',
    description:
      'Contact Vektas to discuss an AI, automation, systems integration, or custom software initiative for your organization.',
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
