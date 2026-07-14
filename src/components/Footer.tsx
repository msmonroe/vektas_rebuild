import { Link } from 'react-router-dom'

export function Footer() {
  return (
    <footer className="mt-20 border-t border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-[#060d17]">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:grid-cols-2 sm:px-6">
        <div>
          <p className="text-lg font-semibold text-slate-900 dark:text-white">Vektas</p>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
            Private AI, AI automation, and enterprise software integration.
          </p>
        </div>
        <div className="space-y-2 text-sm">
          <Link to="/services" className="block text-slate-700 hover:text-blue-600 dark:text-slate-200">
            Services
          </Link>
          <Link to="/pricing" className="block text-slate-700 hover:text-blue-600 dark:text-slate-200">
            Pricing
          </Link>
          <Link to="/contact" className="block text-slate-700 hover:text-blue-600 dark:text-slate-200">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  )
}
