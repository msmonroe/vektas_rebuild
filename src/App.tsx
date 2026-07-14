import { useEffect, useMemo, useState } from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { Layout } from './components/Layout'
import { AboutPage } from './pages/AboutPage'
import { BlogPage } from './pages/BlogPage'
import { ContactPage } from './pages/ContactPage'
import { HomePage } from './pages/HomePage'
import { PricingPage } from './pages/PricingPage'
import { ServicesPage } from './pages/ServicesPage'
import { SolutionsPage } from './pages/SolutionsPage'

const routeMeta: Record<string, { title: string; description: string }> = {
  '/': {
    title: 'Vektas | Private AI. Real Results.',
    description:
      'Vektas helps businesses deploy private AI, automation, and enterprise integrations with secure infrastructure control.',
  },
  '/services': {
    title: 'Services | Vektas',
    description: 'Private AI consulting, local LLM deployment, RAG, workflow automation, and enterprise integration services.',
  },
  '/solutions': {
    title: 'Solutions | Vektas',
    description: 'Industry-focused private AI solutions for healthcare, manufacturing, legal, financial, government, and services.',
  },
  '/pricing': {
    title: 'Pricing | Vektas',
    description: 'Flexible private AI engagement models including readiness assessments, deployment, and managed support.',
  },
  '/blog': {
    title: 'Blog | Vektas',
    description: 'Insights on private AI strategy, AI cost reduction, RAG, and secure enterprise implementation.',
  },
  '/about': {
    title: 'About | Vektas',
    description: 'Learn about Vektas mission, values, and timeline in private AI and enterprise software integration.',
  },
  '/contact': {
    title: 'Contact | Vektas',
    description: 'Contact Vektas for private AI consulting and secure enterprise automation support across North America.',
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

  const meta = useMemo(
    () => routeMeta[location.pathname] ?? routeMeta['/'],
    [location.pathname],
  )

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
