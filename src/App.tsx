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
    title: 'Contact | Vektas',
    description:
      'Talk with Vektas about manual work, disconnected systems, operational bottlenecks, or a technology investment that is not producing enough business value.',
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
