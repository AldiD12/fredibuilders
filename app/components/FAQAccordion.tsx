'use client'

import { useState } from 'react'

interface FAQ {
  question: string
  answer: string
}

interface FAQAccordionProps {
  locationName: string
  postcode: string
  region: string
}

export default function FAQAccordion({ locationName, postcode, region }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs: FAQ[] = [
    {
      question: `Do Fredi Builders cover ${locationName}?`,
      answer: `Yes, we provide comprehensive bathroom renovation services throughout ${locationName} and the ${postcode} area. We have completed numerous projects in ${region} and maintain a strong local presence with 15 years of experience.`
    },
    {
      question: 'Are you fully insured?',
      answer: 'Yes, we carry £2 Million Public Liability Insurance for complete peace of mind. All our work is fully covered and we are registered with Checkatrade with a 9.6/10 rating based on 104+ verified reviews.'
    },
    {
      question: 'Do you provide a guarantee?',
      answer: 'Yes, all work comes with a 1-year workmanship guarantee as standard. If any issues arise due to our installation or craftsmanship, we will return and rectify them at no additional cost.'
    },
    {
      question: 'Do you remove waste and protect my property?',
      answer: 'Yes, our team clears all rubbish daily and protects your property throughout the project. We use industrial-grade dust extractors for 99% dust-free work and heavy-duty protective sheeting for all furniture and flooring.'
    }
  ]

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <div
          key={index}
          className="bg-white dark:bg-surface-dark rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden"
        >
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full flex items-center justify-between p-5 md:p-6 text-left hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
            aria-expanded={openIndex === index}
          >
            <span className="font-bold text-base md:text-lg text-text-light dark:text-white pr-4">
              {faq.question}
            </span>
            <span className={`material-icons-outlined text-primary flex-shrink-0 transition-transform duration-200 ${openIndex === index ? 'rotate-180' : ''}`}>
              expand_more
            </span>
          </button>
          {openIndex === index && (
            <div className="px-5 md:px-6 pb-5 md:pb-6 pt-0">
              <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base leading-relaxed">
                {faq.answer}
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
