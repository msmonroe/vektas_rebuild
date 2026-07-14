import { MoonIcon, SunIcon } from '@heroicons/react/24/outline'

type ThemeToggleProps = {
  theme: 'light' | 'dark'
  onToggle: () => void
}

export function ThemeToggle({ theme, onToggle }: ThemeToggleProps) {
  return (
    <button
      type="button"
      onClick={onToggle}
      className="rounded-full border border-slate-300 bg-white p-2 text-slate-700 transition hover:border-blue-600 hover:text-blue-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
    </button>
  )
}
