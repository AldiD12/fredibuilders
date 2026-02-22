/**
 * FAQPage Schema Component
 * Enables FAQ rich snippets in Google Search Results
 * Part 7: God Tier Technical Implementation
 */

interface FAQPageSchemaProps {
  locationName: string
  postcode: string
}

export default function FAQPageSchema({ locationName, postcode }: FAQPageSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: `Do Fredi Builders cover ${locationName}?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `Yes, we provide bathroom renovation services throughout ${locationName} (${postcode}) and surrounding areas. We're based locally and can visit your property for a free, no-obligation quote.`
        }
      },
      {
        '@type': 'Question',
        name: 'Are you fully insured?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, we carry £2 Million Public Liability Insurance for complete peace of mind on every project.'
        }
      },
      {
        '@type': 'Question',
        name: 'Do you provide a guarantee?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, all work comes with our 1-Year Workmanship Guarantee as standard. If any issues arise due to our workmanship, we return and fix them free of charge.'
        }
      },
      {
        '@type': 'Question',
        name: 'How long does a bathroom renovation take?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A typical bathroom renovation takes 2-3 weeks from start to finish. We provide a detailed timeline in our quote and stay on your project every day until completion.'
        }
      }
    ]
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
