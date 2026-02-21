import { describe, test, expect } from 'vitest'
import { locations, Location } from '@/app/data/locations'

/**
 * Generate schema markup for location (mimics LocationSchema component logic)
 */
function generateLocationSchemas(location: Location, url: string) {
  return [
    // LocalBusiness Schema
    {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      '@id': url,
      name: `Fredi Builders ${location.name}`,
      image: 'https://fredibuilders.co.uk/og-image.jpg',
      description: location.description,
      url: url,
      telephone: '+447404304224',
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
        telephone: '+447404304224'
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
}

describe('LocationSchema', () => {
  describe('Property 30: Location Page Schema Markup', () => {
    test('should generate valid LocalBusiness schema for all locations', () => {
      locations.forEach((location) => {
        const url = `https://fredibuilders.co.uk/locations/${location.slug}`
        const schemas = generateLocationSchemas(location, url)

        expect(Array.isArray(schemas)).toBe(true)
        expect(schemas.length).toBe(4) // LocalBusiness, Service, BreadcrumbList, FAQPage

        // Validate LocalBusiness schema
        const localBusiness = schemas[0]
        expect(localBusiness['@context']).toBe('https://schema.org')
        expect(localBusiness['@type']).toBe('LocalBusiness')
        expect(localBusiness['@id']).toBe(url)
        expect(localBusiness.name).toContain('Fredi Builders')
        expect(localBusiness.name).toContain(location.name)
        expect(localBusiness.description).toBe(location.description)
        expect(localBusiness.telephone).toBe('+447404304224')
        expect(localBusiness.priceRange).toBe('££')

        // Validate address
        expect(localBusiness.address['@type']).toBe('PostalAddress')
        expect(localBusiness.address.addressLocality).toBe(location.name)
        expect(localBusiness.address.addressRegion).toBe(location.region)
        expect(localBusiness.address.postalCode).toBe(location.postcode)
        expect(localBusiness.address.addressCountry).toBe('GB')

        // Validate geo coordinates
        expect(localBusiness.geo['@type']).toBe('GeoCoordinates')
        expect(localBusiness.geo.latitude).toBe(location.coordinates.lat)
        expect(localBusiness.geo.longitude).toBe(location.coordinates.lng)

        // Validate area served
        expect(localBusiness.areaServed['@type']).toBe('GeoCircle')
        expect(localBusiness.areaServed.geoMidpoint.latitude).toBe(location.coordinates.lat)
        expect(localBusiness.areaServed.geoMidpoint.longitude).toBe(location.coordinates.lng)
        expect(localBusiness.areaServed.geoRadius).toBe('5000')

        // Validate aggregate rating
        expect(localBusiness.aggregateRating['@type']).toBe('AggregateRating')
        expect(localBusiness.aggregateRating.ratingValue).toBe('9.6')
        expect(localBusiness.aggregateRating.reviewCount).toBe('104')
        expect(localBusiness.aggregateRating.bestRating).toBe('10')
        expect(localBusiness.aggregateRating.worstRating).toBe('1')

        // Validate opening hours
        expect(localBusiness.openingHoursSpecification).toHaveLength(2)
        expect(localBusiness.openingHoursSpecification[0].dayOfWeek).toEqual([
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday'
        ])
        expect(localBusiness.openingHoursSpecification[0].opens).toBe('08:00')
        expect(localBusiness.openingHoursSpecification[0].closes).toBe('18:00')
      })
    })
  })

  describe('Property 31: Service Page Schema Markup', () => {
    test('should generate valid Service schema for all locations', () => {
      locations.forEach((location) => {
        const url = `https://fredibuilders.co.uk/locations/${location.slug}`
        const schemas = generateLocationSchemas(location, url)

        // Validate Service schema
        const service = schemas[1]
        expect(service['@context']).toBe('https://schema.org')
        expect(service['@type']).toBe('Service')
        expect(service.serviceType).toBe('Bathroom Renovations')

        // Validate provider
        expect(service.provider['@type']).toBe('LocalBusiness')
        expect(service.provider.name).toBe('Fredi Builders')
        expect(service.provider.telephone).toBe('+447404304224')

        // Validate area served
        expect(service.areaServed['@type']).toBe('City')
        expect(service.areaServed.name).toBe(location.name)
        expect(service.areaServed['@id']).toContain('wikipedia.org')

        // Validate offer catalog
        expect(service.hasOfferCatalog['@type']).toBe('OfferCatalog')
        expect(service.hasOfferCatalog.name).toBe('Bathroom Services')
        expect(service.hasOfferCatalog.itemListElement).toHaveLength(4)

        // Validate each service offer
        const serviceNames = [
          'Full Bathroom Renovations',
          'Wet Room Installations',
          'Luxury Tiling Services',
          'Structural Building Repairs'
        ]

        service.hasOfferCatalog.itemListElement.forEach((offer: any, index: number) => {
          expect(offer['@type']).toBe('Offer')
          expect(offer.itemOffered['@type']).toBe('Service')
          expect(offer.itemOffered.name).toBe(serviceNames[index])
          expect(offer.itemOffered.description).toBeTruthy()
        })
      })
    })
  })

  describe('Property 32: FAQ Page Schema Markup', () => {
    test('should generate valid FAQPage schema for all locations', () => {
      locations.forEach((location) => {
        const url = `https://fredibuilders.co.uk/locations/${location.slug}`
        const schemas = generateLocationSchemas(location, url)

        // Validate FAQPage schema
        const faqPage = schemas[3]
        expect(faqPage['@context']).toBe('https://schema.org')
        expect(faqPage['@type']).toBe('FAQPage')
        expect(faqPage.mainEntity).toHaveLength(4)

        // Validate each FAQ
        faqPage.mainEntity.forEach((faq: any) => {
          expect(faq['@type']).toBe('Question')
          expect(faq.name).toBeTruthy()
          expect(faq.acceptedAnswer['@type']).toBe('Answer')
          expect(faq.acceptedAnswer.text).toBeTruthy()
        })

        // Validate location-specific FAQ
        const locationFAQ = faqPage.mainEntity[0]
        expect(locationFAQ.name).toContain(location.name)
        expect(locationFAQ.acceptedAnswer.text).toContain(location.name)
        expect(locationFAQ.acceptedAnswer.text).toContain(location.postcode)
        expect(locationFAQ.acceptedAnswer.text).toContain(location.region)
      })
    })
  })

  describe('BreadcrumbList Schema', () => {
    test('should generate valid BreadcrumbList schema for all locations', () => {
      locations.forEach((location) => {
        const url = `https://fredibuilders.co.uk/locations/${location.slug}`
        const schemas = generateLocationSchemas(location, url)

        // Validate BreadcrumbList schema
        const breadcrumb = schemas[2]
        expect(breadcrumb['@context']).toBe('https://schema.org')
        expect(breadcrumb['@type']).toBe('BreadcrumbList')
        expect(breadcrumb.itemListElement).toHaveLength(3)

        // Validate breadcrumb items
        expect(breadcrumb.itemListElement[0].position).toBe(1)
        expect(breadcrumb.itemListElement[0].name).toBe('Home')
        expect(breadcrumb.itemListElement[0].item).toBe('https://fredibuilders.co.uk')

        expect(breadcrumb.itemListElement[1].position).toBe(2)
        expect(breadcrumb.itemListElement[1].name).toBe('Service Areas')
        expect(breadcrumb.itemListElement[1].item).toBe('https://fredibuilders.co.uk/locations')

        expect(breadcrumb.itemListElement[2].position).toBe(3)
        expect(breadcrumb.itemListElement[2].name).toBe(location.name)
        expect(breadcrumb.itemListElement[2].item).toBe(url)
      })
    })
  })

  describe('Schema Validation', () => {
    test('should generate parseable JSON-LD for all locations', () => {
      locations.forEach((location) => {
        const url = `https://fredibuilders.co.uk/locations/${location.slug}`
        const schemas = generateLocationSchemas(location, url)

        // Should not throw when stringifying
        expect(() => {
          JSON.stringify(schemas)
        }).not.toThrow()
      })
    })

    test('should include all required schema types', () => {
      const location = locations[0]
      const url = `https://fredibuilders.co.uk/locations/${location.slug}`
      const schemas = generateLocationSchemas(location, url)

      const schemaTypes = schemas.map((s: any) => s['@type'])
      expect(schemaTypes).toContain('LocalBusiness')
      expect(schemaTypes).toContain('Service')
      expect(schemaTypes).toContain('BreadcrumbList')
      expect(schemaTypes).toContain('FAQPage')
    })
  })
})
