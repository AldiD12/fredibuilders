interface ServiceSchemaProps {
  serviceName: string
  serviceDescription: string
  serviceUrl: string
  serviceType?: string
}

export default function ServiceSchema({
  serviceName,
  serviceDescription,
  serviceUrl,
  serviceType = 'HomeAndConstructionBusiness'
}: ServiceSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: serviceName,
    description: serviceDescription,
    url: serviceUrl,
    serviceType: serviceType,
    provider: {
      '@type': 'LocalBusiness',
      '@id': 'https://www.fredibuilders.co.uk/#organization',
      name: 'Fredi Builders',
      image: 'https://www.fredibuilders.co.uk/images/logo.webp',
      telephone: '+44 7448 257 096',
      email: 'info@fredibuilders.co.uk',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Serving South London & Surrey',
        addressLocality: 'London',
        addressRegion: 'Greater London',
        addressCountry: 'GB'
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        reviewCount: '104',
        bestRating: '5',
        worstRating: '1'
      }
    },
    areaServed: [
      {
        '@type': 'City',
        name: 'London'
      },
      {
        '@type': 'City',
        name: 'Surrey'
      }
    ],
    availableChannel: {
      '@type': 'ServiceChannel',
      serviceUrl: serviceUrl,
      servicePhone: {
        '@type': 'ContactPoint',
        telephone: '+44 7448 257 096',
        contactType: 'customer service',
        availableLanguage: 'English'
      }
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
