import { Location } from '@/app/data/locations'

interface LocationSchemaProps {
  location: Location
  url: string
}

export default function LocationSchema({ location, url }: LocationSchemaProps) {
  const schema = [
    // LocalBusiness Schema
    {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      '@id': url,
      name: `Fredi Builders ${location.name}`,
      image: 'https://fredibuilders.co.uk/og-image.jpg',
      description: location.description,
      url: url,
      telephone: '+447468451511',
      priceRange: '££',
      address: {
        '@type': 'PostalAddress',
        addressLocality: location.name,
        addressRegion: location.region,
        postalCode: location.postcode,
        addressCountry: 'GB'
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: location.coordinates.lat,
        longitude: location.coordinates.lng
      },
      areaServed: {
        '@type': 'GeoCircle',
        geoMidpoint: {
          '@type': 'GeoCoordinates',
          latitude: location.coordinates.lat,
          longitude: location.coordinates.lng
        },
        geoRadius: '5000'
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '9.6',
        reviewCount: '104',
        bestRating: '10',
        worstRating: '1'
      },
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: '08:00',
          closes: '18:00'
        },
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: 'Saturday',
          opens: '09:00',
          closes: '14:00'
        }
      ]
    },
    // Service Schema
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      serviceType: 'Bathroom Renovations',
      provider: {
        '@type': 'LocalBusiness',
        name: 'Fredi Builders',
        telephone: '+447468451511'
      },
      areaServed: {
        '@type': 'City',
        name: location.name,
        '@id': `https://en.wikipedia.org/wiki/${location.name.replace(/ /g, '_')}`
      },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Bathroom Services',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Full Bathroom Renovations',
              description: 'Complete bathroom transformations from concept to completion'
            }
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Wet Room Installations',
              description: 'Modern wet rooms with waterproof tanking and minimal access'
            }
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Luxury Tiling Services',
              description: 'Expert installation of marble, porcelain, and designer tiles'
            }
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Structural Building Repairs',
              description: 'RSJ steel beam installation and Building Control compliance'
            }
          }
        ]
      }
    },
    // BreadcrumbList Schema
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://fredibuilders.co.uk'
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Service Areas',
          item: 'https://fredibuilders.co.uk/locations'
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: location.name,
          item: url
        }
      ]
    },
    // FAQPage Schema
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: `Do Fredi Builders cover ${location.name}?`,
          acceptedAnswer: {
            '@type': 'Answer',
            text: `Yes, we provide comprehensive bathroom renovation services throughout ${location.name} and the ${location.postcode} area. We have completed numerous projects in ${location.region} and maintain a strong local presence with 15 years of experience.`
          }
        },
        {
          '@type': 'Question',
          name: 'Are you fully insured?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, we carry £2 Million Public Liability Insurance for complete peace of mind. All our work is fully covered and we are registered with Checkatrade with a 9.6/10 rating based on 104+ verified reviews.'
          }
        },
        {
          '@type': 'Question',
          name: 'Do you provide a guarantee?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, all work comes with a 1-year workmanship guarantee as standard. If any issues arise due to our installation or craftsmanship, we will return and rectify them at no additional cost.'
          }
        },
        {
          '@type': 'Question',
          name: 'Do you remove waste and protect my property?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, our team clears all rubbish daily and protects your property throughout the project. We use industrial-grade dust extractors for 99% dust-free work and heavy-duty protective sheeting for all furniture and flooring.'
          }
        }
      ]
    }
  ]

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
