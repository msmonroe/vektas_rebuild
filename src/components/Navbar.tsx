import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { navLinks } from '../data/siteContent'
import { ThemeToggle } from './ThemeToggle'

type NavbarProps = {
  theme: 'light' | 'dark'
  onToggleTheme: () => void
}

export function Navbar({ theme, onToggleTheme }: NavbarProps) {
  const [open, setOpen] = useState(false)

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `rounded-md px-3 py-2 text-sm font-medium transition ${
      isActive
        ? 'bg-blue-600 text-white'
        : 'text-slate-700 hover:bg-slate-200 dark:text-slate-200 dark:hover:bg-slate-800'
    }`

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur dark:border-slate-800 dark:bg-[#07111F]/90">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6" aria-label="Main navigation">
        <Link to="/" className="text-lg font-semibold tracking-tight text-[#07111F] dark:text-white">
          Vektas
        </Link>

        <div className="hidden items-center gap-2 lg:flex">
          {navLinks.map((link) => (
            <NavLink key={link.to} to={link.to} className={linkClass} end={link.to === '/'}>
              {link.label}
            </NavLink>
          ))}
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          <button
            type="button"
            className="rounded-md border border-slate-300 p-2 dark:border-slate-700"
            onClick={() => setOpen((value) => !value)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <XMarkIcon className="h-5 w-5" /> : <Bars3Icon className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="space-y-1 border-t border-slate-200 px-4 py-3 lg:hidden dark:border-slate-800">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `block rounded-md px-3 py-2 text-sm font-medium ${
                  isActive ? 'bg-blue-600 text-white' : 'text-slate-700 dark:text-slate-200'
                }`
              }
              end={link.to === '/'}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      )}
    </header>
  )
}
