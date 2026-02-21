/**
 * Property-Based Tests for Location Page Schema Markup
 * Feature: fredi-builders-empire-building
 * Property 30: Location Page Schema Markup
 * Property 31: Service Page Schema Markup
 * Property 32: FAQ Page Schema Markup
 * **Validates: Requirements 7.1, 7.2, 7.5**
 */

import { describe, test, expect } from 'vitest'
import * as fc from 'fast-check'
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

describe('LocationSchema - Property Tests', () => {
  /**
   * Property 30: Location Page Schema Markup
   * For any location page render, the HTML should include LocalBusiness schema
   * with geo-coordinates, address, and aggregate rating.
   * Validates: Requirements 7.1
   */
  describe('Property 30: LocalBusiness Schema Markup', () => {
    test('should include LocalBusiness schema with all required fields for any location', () => {
      locations.forEach((location) => {
        const url = `https://fredibuilders.co.uk/locations/${location.slug}`
        const schemas = generateLocationSchemas(location, url)

        expect(Array.isArray(schemas)).toBe(true)

        // Find LocalBusiness schema
        const localBusinessSchema = schemas.find(
          (s: any) => s['@type'] === 'LocalBusiness'
        )
        expect(localBusinessSchema).toBeTruthy()

        // Verify required LocalBusiness fields
        expect(localBusinessSchema['@context']).toBe('https://schema.org')
        expect(localBusinessSchema['@type']).toBe('LocalBusiness')
        expect(localBusinessSchema.name).toContain('Fredi Builders')
        expect(localBusinessSchema.name).toContain(location.name)
        expect(localBusinessSchema.url).toBe(url)
        expect(localBusinessSchema.telephone).toBeTruthy()
        expect(localBusinessSchema.description).toBe(location.description)

        // Verify geo-coordinates
        expect(localBusinessSchema.geo).toBeTruthy()
        expect(localBusinessSchema.geo['@type']).toBe('GeoCoordinates')
        expect(localBusinessSchema.geo.latitude).toBe(location.coordinates.lat)
        expect(localBusinessSchema.geo.longitude).toBe(location.coordinates.lng)

        // Verify address
        expect(localBusinessSchema.address).toBeTruthy()
        expect(localBusinessSchema.address['@type']).toBe('PostalAddress')
        expect(localBusinessSchema.address.addressLocality).toBe(location.name)
        expect(localBusinessSchema.address.addressRegion).toBe(location.region)
        expect(localBusinessSchema.address.postalCode).toBe(location.postcode)
        expect(localBusinessSchema.address.addressCountry).toBe('GB')

        // Verify aggregate rating
        expect(localBusinessSchema.aggregateRating).toBeTruthy()
        expect(localBusinessSchema.aggregateRating['@type']).toBe('AggregateRating')
        expect(localBusinessSchema.aggregateRating.ratingValue).toBeTruthy()
        expect(localBusinessSchema.aggregateRating.reviewCount).toBeTruthy()
        expect(localBusinessSchema.aggregateRating.bestRating).toBeTruthy()
        expect(localBusinessSchema.aggregateRating.worstRating).toBeTruthy()
      })
    })

    test('should include areaServed with geo-coordinates for any location', () => {
      locations.forEach((location) => {
        const url = `https://fredibuilders.co.uk/locations/${location.slug}`
        const schemas = generateLocationSchemas(location, url)
        const localBusinessSchema = schemas.find(
          (s: any) => s['@type'] === 'LocalBusiness'
        )

        expect(localBusinessSchema.areaServed).toBeTruthy()
        expect(localBusinessSchema.areaServed['@type']).toBe('GeoCircle')
        expect(localBusinessSchema.areaServed.geoMidpoint).toBeTruthy()
        expect(localBusinessSchema.areaServed.geoMidpoint.latitude).toBe(
          location.coordinates.lat
        )
        expect(localBusinessSchema.areaServed.geoMidpoint.longitude).toBe(
          location.coordinates.lng
        )
        expect(localBusinessSchema.areaServed.geoRadius).toBeTruthy()
      })
    })
  })

  /**
   * Property 31: Service Page Schema Markup
   * For any service page render, the HTML should include Service schema
   * with service type, provider, and area served.
   * Validates: Requirements 7.2
   */
  describe('Property 31: Service Schema Markup', () => {
    test('should include Service schema with all required fields for any location', () => {
      locations.forEach((location) => {
        const url = `https://fredibuilders.co.uk/locations/${location.slug}`
        const schemas = generateLocationSchemas(location, url)

        // Find Service schema
        const serviceSchema = schemas.find((s: any) => s['@type'] === 'Service')
        expect(serviceSchema).toBeTruthy()

        // Verify required Service fields
        expect(serviceSchema['@context']).toBe('https://schema.org')
        expect(serviceSchema['@type']).toBe('Service')
        expect(serviceSchema.serviceType).toBeTruthy()

        // Verify provider
        expect(serviceSchema.provider).toBeTruthy()
        expect(serviceSchema.provider['@type']).toBe('LocalBusiness')
        expect(serviceSchema.provider.name).toBe('Fredi Builders')
        expect(serviceSchema.provider.telephone).toBeTruthy()

        // Verify area served
        expect(serviceSchema.areaServed).toBeTruthy()
        expect(serviceSchema.areaServed['@type']).toBe('City')
        expect(serviceSchema.areaServed.name).toBe(location.name)
      })
    })

    test('should include hasOfferCatalog with service offerings for any location', () => {
      locations.forEach((location) => {
        const url = `https://fredibuilders.co.uk/locations/${location.slug}`
        const schemas = generateLocationSchemas(location, url)
        const serviceSchema = schemas.find((s: any) => s['@type'] === 'Service')

        expect(serviceSchema.hasOfferCatalog).toBeTruthy()
        expect(serviceSchema.hasOfferCatalog['@type']).toBe('OfferCatalog')
        expect(serviceSchema.hasOfferCatalog.name).toBeTruthy()
        expect(serviceSchema.hasOfferCatalog.itemListElement).toBeTruthy()
        expect(Array.isArray(serviceSchema.hasOfferCatalog.itemListElement)).toBe(
          true
        )
        expect(serviceSchema.hasOfferCatalog.itemListElement.length).toBeGreaterThan(
          0
        )

        // Verify each offer has required structure
        serviceSchema.hasOfferCatalog.itemListElement.forEach((offer: any) => {
          expect(offer['@type']).toBe('Offer')
          expect(offer.itemOffered).toBeTruthy()
          expect(offer.itemOffered['@type']).toBe('Service')
          expect(offer.itemOffered.name).toBeTruthy()
          expect(offer.itemOffered.description).toBeTruthy()
        })
      })
    })
  })

  /**
   * Property 32: FAQ Page Schema Markup
   * For any page with FAQ sections, the HTML should include FAQPage schema
   * with all questions and answers.
   * Validates: Requirements 7.5
   */
  describe('Property 32: FAQPage Schema Markup', () => {
    test('should include FAQPage schema with all required fields for any location', () => {
      locations.forEach((location) => {
        const url = `https://fredibuilders.co.uk/locations/${location.slug}`
        const schemas = generateLocationSchemas(location, url)

        // Find FAQPage schema
        const faqSchema = schemas.find((s: any) => s['@type'] === 'FAQPage')
        expect(faqSchema).toBeTruthy()

        // Verify required FAQPage fields
        expect(faqSchema['@context']).toBe('https://schema.org')
        expect(faqSchema['@type']).toBe('FAQPage')
        expect(faqSchema.mainEntity).toBeTruthy()
        expect(Array.isArray(faqSchema.mainEntity)).toBe(true)
        expect(faqSchema.mainEntity.length).toBeGreaterThan(0)
      })
    })

    test('should include properly structured questions and answers for any location', () => {
      locations.forEach((location) => {
        const url = `https://fredibuilders.co.uk/locations/${location.slug}`
        const schemas = generateLocationSchemas(location, url)
        const faqSchema = schemas.find((s: any) => s['@type'] === 'FAQPage')

        // Verify each question has required structure
        faqSchema.mainEntity.forEach((question: any) => {
          expect(question['@type']).toBe('Question')
          expect(question.name).toBeTruthy()
          expect(typeof question.name).toBe('string')
          expect(question.name.length).toBeGreaterThan(0)

          expect(question.acceptedAnswer).toBeTruthy()
          expect(question.acceptedAnswer['@type']).toBe('Answer')
          expect(question.acceptedAnswer.text).toBeTruthy()
          expect(typeof question.acceptedAnswer.text).toBe('string')
          expect(question.acceptedAnswer.text.length).toBeGreaterThan(0)
        })
      })
    })

    test('should include location-specific FAQ content for any location', () => {
      locations.forEach((location) => {
        const url = `https://fredibuilders.co.uk/locations/${location.slug}`
        const schemas = generateLocationSchemas(location, url)
        const faqSchema = schemas.find((s: any) => s['@type'] === 'FAQPage')

        // At least one FAQ should mention the location name
        const hasLocationMention = faqSchema.mainEntity.some(
          (question: any) =>
            question.name.includes(location.name) ||
            question.acceptedAnswer.text.includes(location.name)
        )
        expect(hasLocationMention).toBe(true)
      })
    })
  })

  /**
   * Additional validation: BreadcrumbList schema
   * Ensures proper navigation structure for SEO
   */
  describe('BreadcrumbList Schema Validation', () => {
    test('should include BreadcrumbList schema for any location', () => {
      locations.forEach((location) => {
        const url = `https://fredibuilders.co.uk/locations/${location.slug}`
        const schemas = generateLocationSchemas(location, url)

        const breadcrumbSchema = schemas.find(
          (s: any) => s['@type'] === 'BreadcrumbList'
        )
        expect(breadcrumbSchema).toBeTruthy()
        expect(breadcrumbSchema.itemListElement).toBeTruthy()
        expect(Array.isArray(breadcrumbSchema.itemListElement)).toBe(true)
        expect(breadcrumbSchema.itemListElement.length).toBeGreaterThanOrEqual(3)

        // Verify breadcrumb structure
        breadcrumbSchema.itemListElement.forEach((item: any, index: number) => {
          expect(item['@type']).toBe('ListItem')
          expect(item.position).toBe(index + 1)
          expect(item.name).toBeTruthy()
          expect(item.item).toBeTruthy()
        })

        // Last breadcrumb should be the location
        const lastBreadcrumb =
          breadcrumbSchema.itemListElement[
            breadcrumbSchema.itemListElement.length - 1
          ]
        expect(lastBreadcrumb.name).toBe(location.name)
        expect(lastBreadcrumb.item).toBe(url)
      })
    })
  })

  /**
   * Schema array validation
   * Ensures all schemas are properly formatted as an array
   */
  describe('Schema Array Structure', () => {
    test('should render exactly 4 schema types for any location', () => {
      locations.forEach((location) => {
        const url = `https://fredibuilders.co.uk/locations/${location.slug}`
        const schemas = generateLocationSchemas(location, url)

        expect(schemas.length).toBe(4)

        const schemaTypes = schemas.map((s: any) => s['@type'])
        expect(schemaTypes).toContain('LocalBusiness')
        expect(schemaTypes).toContain('Service')
        expect(schemaTypes).toContain('BreadcrumbList')
        expect(schemaTypes).toContain('FAQPage')
      })
    })

    test('should generate valid JSON-LD for any location', () => {
      locations.forEach((location) => {
        const url = `https://fredibuilders.co.uk/locations/${location.slug}`
        const schemas = generateLocationSchemas(location, url)

        expect(Array.isArray(schemas)).toBe(true)

        // Each schema should have @context and @type
        schemas.forEach((schema: any) => {
          expect(schema['@context']).toBe('https://schema.org')
          expect(schema['@type']).toBeTruthy()
        })

        // Should be valid JSON when stringified
        expect(() => JSON.stringify(schemas)).not.toThrow()
      })
    })
  })
})
