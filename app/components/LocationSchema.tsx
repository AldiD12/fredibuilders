import { Location } from '@/app/data/locations'

interface LocationSchemaProps {
  location: Location
  url: string
}

export default function LocationSchema({ location, url }: LocationSchemaProps) {
  const baseUrl = 'https://fredibuilders.co.uk'
  const imageUrl = location.projectImage 
    ? `${baseUrl}${location.projectImage}`
    : `${baseUrl}/images/luxury-marble-bathroom-walk-in-shower.webp`

  const schema = [
    // LocalBusiness Schema
    {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      '@id': url,
      name: `Fredi Builders ${location.name}`,
      image: imageUrl,
      description: location.description,
      url: url,
      telephone: '+447468451511',
      priceRange: '££',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '71 Lyndhurst Road',
        addressLocality: 'Thornton Heath',
        addressRegion: 'Greater London',
        postalCode: 'CR7 7PZ',
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
    }
  ]

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
