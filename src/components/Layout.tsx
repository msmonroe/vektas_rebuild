import type { PropsWithChildren } from 'react'
import { CookieBanner } from './CookieBanner'
import { Footer } from './Footer'
import { Navbar } from './Navbar'

type LayoutProps = PropsWithChildren<{
  theme: 'light' | 'dark'
  onToggleTheme: () => void
}>

export function Layout({ children, theme, onToggleTheme }: LayoutProps) {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-700 transition dark:bg-[#07111F] dark:text-slate-200">
      <Navbar theme={theme} onToggleTheme={onToggleTheme} />
      <main>{children}</main>
      <Footer />
      <CookieBanner />
    </div>
  )
}
