import {
  ArrowPathIcon,
  BuildingOffice2Icon,
  ChartBarIcon,
  ClockIcon,
  LinkIcon,
  MagnifyingGlassIcon,
  ShieldCheckIcon,
  WrenchScrewdriverIcon,
} from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'
import { ScrollReveal } from '../components/ScrollReveal'
import { serviceCards } from '../data/siteContent'

const icons = [
  ClockIcon,
  ChartBarIcon,
  LinkIcon,
  MagnifyingGlassIcon,
  ShieldCheckIcon,
  WrenchScrewdriverIcon,
  ArrowPathIcon,
  BuildingOffice2Icon,
]

export function ServicesPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6" aria-labelledby="services-heading">
      <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">How we help</p>
      <h1 id="services-heading" className="mt-3 text-4xl font-bold tracking-tight text-[#07111F] dark:text-white sm:text-5xl">
        Improve the operation without forcing the business into a technology project.
      </h1>
      <p className="mt-4 max-w-3xl text-lg text-slate-600 dark:text-slate-300">
        Vektas helps leadership and operational teams define what is not working, identify the highest-value improvement, and deliver a practical solution that fits the organization’s people, constraints, and existing systems.
      </p>
      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {serviceCards.map((service, index) => {
          const Icon = icons[index]

          return (
            <ScrollReveal
              key={service.title}
              delay={index * 0.04}
              className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900"
            >
              <Icon className="h-8 w-8 text-blue-600" aria-hidden="true" />
              <h2 className="mt-4 text-lg font-semibold text-slate-900 dark:text-white">{service.title}</h2>
              <p className="mt-2 flex-1 text-sm text-slate-600 dark:text-slate-300">{service.description}</p>
            </ScrollReveal>
          )
        })}
      </div>

      <div className="mt-14 rounded-3xl border border-slate-200 bg-slate-50 p-8 dark:border-slate-800 dark:bg-slate-900">
        <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">You bring the problem. We help shape the solution.</h2>
        <p className="mt-3 max-w-4xl text-slate-600 dark:text-slate-300">
          You do not need to arrive with a product list, architecture diagram, or completed requirements document. A useful engagement begins with the operational problem, the people affected, the cost of leaving it unchanged, and the result leadership wants to achieve.
        </p>
        <Link to="/contact" className="mt-6 inline-flex rounded-full bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-500">
          Describe the Business Problem
        </Link>
      </div>
    </section>
  )
}
