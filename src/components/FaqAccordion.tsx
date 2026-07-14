import { ChevronDownIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'
import { faqs } from '../data/siteContent'

type FaqAccordionProps = {
  title?: string
}

export function FaqAccordion({ title = 'Frequently Asked Questions' }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="mx-auto mt-16 max-w-4xl px-4 sm:px-6" aria-labelledby="faq-heading">
      <h2 id="faq-heading" className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
        {title}
      </h2>
      <div className="mt-6 divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white dark:divide-slate-800 dark:border-slate-800 dark:bg-slate-900">
        {faqs.map((faq, index) => {
          const expanded = openIndex === index

          return (
            <div key={faq.question}>
              <button
                type="button"
                className="flex w-full items-center justify-between gap-3 px-5 py-4 text-left"
                onClick={() => setOpenIndex(expanded ? null : index)}
                aria-expanded={expanded}
              >
                <span className="font-medium text-slate-900 dark:text-white">{faq.question}</span>
                <ChevronDownIcon
                  className={`h-5 w-5 text-slate-500 transition ${expanded ? 'rotate-180' : ''}`}
                  aria-hidden="true"
                />
              </button>
              {expanded && <p className="px-5 pb-5 text-sm text-slate-600 dark:text-slate-300">{faq.answer}</p>}
            </div>
          )
        })}
      </div>
    </section>
  )
}
