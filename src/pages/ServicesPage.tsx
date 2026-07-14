import {
  AcademicCapIcon,
  BuildingOffice2Icon,
  CommandLineIcon,
  CpuChipIcon,
  DocumentMagnifyingGlassIcon,
  SparklesIcon,
  SwatchIcon,
  WrenchScrewdriverIcon,
} from '@heroicons/react/24/outline'
import { ScrollReveal } from '../components/ScrollReveal'
import { serviceCards } from '../data/siteContent'

const icons = [
  SparklesIcon,
  CpuChipIcon,
  CommandLineIcon,
  WrenchScrewdriverIcon,
  DocumentMagnifyingGlassIcon,
  SwatchIcon,
  BuildingOffice2Icon,
  AcademicCapIcon,
]

export function ServicesPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6" aria-labelledby="services-heading">
      <h1 id="services-heading" className="text-4xl font-bold tracking-tight text-[#07111F] dark:text-white sm:text-5xl">
        Services
      </h1>
      <p className="mt-4 max-w-3xl text-slate-600 dark:text-slate-300">
        End-to-end support for planning, deploying, and scaling secure private AI solutions.
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
              <button type="button" className="mt-4 w-fit rounded-full border border-slate-300 px-4 py-2 text-sm font-medium text-slate-800 transition hover:border-blue-600 hover:text-blue-600 dark:border-slate-700 dark:text-slate-200">
                Learn More
              </button>
            </ScrollReveal>
          )
        })}
      </div>
    </section>
  )
}
