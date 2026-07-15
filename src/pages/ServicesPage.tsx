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
  DocumentMagnifyingGlassIcon,
  BuildingOffice2Icon,
  SwatchIcon,
  WrenchScrewdriverIcon,
  AcademicCapIcon,
]

export function ServicesPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6" aria-labelledby="services-heading">
      <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">Capabilities</p>
      <h1 id="services-heading" className="mt-3 text-4xl font-bold tracking-tight text-[#07111F] dark:text-white sm:text-5xl">
        Engineering for complex operational and technology problems
      </h1>
      <p className="mt-4 max-w-3xl text-lg text-slate-600 dark:text-slate-300">
        Vektas combines software engineering, systems integration, automation, and AI to help organizations move from fragmented processes and disconnected tools to maintainable production systems.
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
        <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">Technology follows the problem, not the other way around.</h2>
        <p className="mt-3 max-w-4xl text-slate-600 dark:text-slate-300">
          A successful solution may use generative AI, conventional machine learning, APIs, business rules, workflow engines, custom applications, or a combination of them. The goal is not to maximize AI usage. The goal is to build the simplest system that reliably delivers the required business outcome.
        </p>
      </div>
    </section>
  )
}
