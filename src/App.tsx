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
    title: 'Vektas | Make Your Business Easier to Operate',
    description:
      'Vektas helps mid-market organizations reduce manual work, connect disconnected systems, and improve operations through practical software, automation, integration, and AI.',
  },
  '/services': {
    title: 'How We Help | Vektas',
    description:
      'Reduce manual work, connect systems, improve access to information, modernize limiting applications, and make technology produce measurable business value.',
  },
  '/solutions': {
    title: 'Problems We Solve | Vektas',
    description:
      'Vektas helps organizations address operational friction, disconnected systems, repetitive work, slow reporting, information bottlenecks, and ineffective technology investments.',
  },
  '/pricing': {
    title: 'How We Work | Vektas',
    description:
      'A practical engagement model for understanding operational problems, prioritizing improvements, delivering focused solutions, and measuring results.',
  },
  '/blog': {
    title: 'Insights | Vektas',
    description:
      'Practical insights on operational efficiency, business systems, workflow improvement, software modernization, automation, and measurable AI value.',
  },
  '/about': {
    title: 'About | Vektas',
    description:
      'Vektas brings decades of enterprise software, integration, analysis, and delivery experience to complex operational business problems.',
  },
  '/contact': {
    title: 'Start a Conversation | Vektas',
    description:
      'Talk with Vektas about manual work, disconnected systems, operational bottlenecks, or technology investments that are not producing enough business value.',
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
    const canonicalUrl = `https://vektas.com${location.pathname === '/' ? '/' : location.pathname}`

    const ensureMetaTag = (selector: string, attributes: Record<string, string>, content: string) => {
      let element = document.head.querySelector(selector) as HTMLMetaElement | null

      if (!element) {
        element = document.createElement('meta')
        Object.entries(attributes).forEach(([key, value]) => element?.setAttribute(key, value))
        document.head.appendChild(element)
      }

      element.content = content
    }

    ensureMetaTag('meta[name="description"]', { name: 'description' }, meta.description)
    ensureMetaTag('meta[property="og:description"]', { property: 'og:description' }, meta.description)
    ensureMetaTag('meta[name="twitter:description"]', { name: 'twitter:description' }, meta.description)
    ensureMetaTag('meta[property="og:title"]', { property: 'og:title' }, meta.title)
    ensureMetaTag('meta[name="twitter:title"]', { name: 'twitter:title' }, meta.title)
    ensureMetaTag('meta[property="og:url"]', { property: 'og:url' }, canonicalUrl)

    let canonical = document.head.querySelector('link[rel="canonical"]') as HTMLLinkElement | null
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.rel = 'canonical'
      document.head.appendChild(canonical)
    }
    canonical.href = canonicalUrl
  }, [location.pathname, meta])
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
