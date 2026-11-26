import { useEffect, useMemo, useState } from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { Layout } from './components/Layout'
import { getMetadata } from './seo'
import { AboutPage } from './pages/AboutPage'
import { BlogArticlePage } from './pages/BlogArticlePage'
import { BlogPage } from './pages/BlogPage'
import { ContactPage } from './pages/ContactPage'
import { HomePage } from './pages/HomePage'
import { PricingPage } from './pages/PricingPage'
import { ServicesPage } from './pages/ServicesPage'
import { SolutionsPage } from './pages/SolutionsPage'


function useTheme() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')
  const [ready, setReady] = useState(false)
  useEffect(() => {
    const stored = localStorage.getItem('vektas-theme')
    setTheme(stored === 'light' || stored === 'dark' ? stored : window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
    setReady(true)
  }, [])

  useEffect(() => {
    if (!ready) return
    document.documentElement.classList.toggle('dark', theme === 'dark')
    localStorage.setItem('vektas-theme', theme)
  }, [theme, ready])

  return { theme, toggleTheme: () => setTheme((value) => (value === 'dark' ? 'light' : 'dark')) }
}

function useSeoMetadata() {
  const location = useLocation()

  const meta = useMemo(() => getMetadata(location.pathname), [location.pathname])

  useEffect(() => {
    document.title = meta.title
    let canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]')
    if (!canonical) { canonical = document.createElement('link'); canonical.rel = 'canonical'; document.head.appendChild(canonical) }
    canonical.href = meta.canonical
    let schema = document.querySelector<HTMLScriptElement>('script[data-vektas-schema]')
    if (!schema) { schema = document.createElement('script'); schema.type = 'application/ld+json'; schema.dataset.vektasSchema = ''; document.head.appendChild(schema) }
    schema.textContent = JSON.stringify(meta.schema)
    const ogUrl = document.querySelector<HTMLMetaElement>('meta[property="og:url"]')
    if (ogUrl) ogUrl.content = meta.canonical

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
