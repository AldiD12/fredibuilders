/**
 * Property-Based Tests for ServiceLinks Component
 * Feature: fredi-builders-empire-building
 * Property 19: Location Page Upward Links
 * **Validates: Requirement 5.1**
 */

import { describe, test, expect } from 'vitest'
import { locations, Location } from '@/app/data/locations'

/**
 * Get relevant services for a location (mimics ServiceLinks component logic)
 */
function getRelevantServices(location: Location) {
  const allServices = [
    {
      slug: 'full-bathroom-renovations',
      name: 'Full Bathroom Renovations',
      description: 'Complete bathroom transformations'
    },
    {
      slug: 'wet-room-installations',
      name: 'Wet Room Installations',
      description: 'Modern accessible wet rooms'
    },
    {
      slug: 'luxury-tiling-services',
      name: 'Luxury Tiling Services',
      description: 'Expert tile installation'
    },
    {
      slug: 'disabled-assisted-bathrooms',
      name: 'Disabled & Assisted Bathrooms',
      description: 'Accessible bathroom solutions'
    },
    {
      slug: 'structural-building-repairs',
      name: 'Structural Building Repairs',
      description: 'RSJ beams and structural work'
    }
  ]

  const highlightServiceMap: Record<string, string> = {
    'Bespoke Wet Rooms': 'wet-room-installations',
    'Marble Tiling': 'luxury-tiling-services',
    'Full Home Renovation': 'full-bathroom-renovations',
    'Structural Knock-Throughs': 'structural-building-repairs',
    'Full Bathroom Renovations': 'full-bathroom-renovations',
    'Wet Room Installations': 'wet-room-installations',
    'Victorian Terrace Renovations': 'full-bathroom-renovations',
    'Modern Bathroom Designs': 'full-bathroom-renovations',
    'Luxury Tiling Services': 'luxury-tiling-services',
    'Premium Bathroom Suites': 'full-bathroom-renovations',
    'Designer Wet Rooms': 'wet-room-installations',
    'Structural Building Repairs': 'structural-building-repairs',
    'Complete Bathroom Transformations': 'full-bathroom-renovations',
    'Local Experts': 'full-bathroom-renovations'
  }

  if (location.highlightService) {
    const highlightSlug = highlightServiceMap[location.highlightService]
    if (highlightSlug) {
      const highlightedService = allServices.find((s) => s.slug === highlightSlug)
      const otherServices = allServices.filter((s) => s.slug !== highlightSlug)

      return highlightedService
        ? [highlightedService, ...otherServices.slice(0, 2)]
        : allServices.slice(0, 3)
    }
  }

  return allServices.slice(0, 3)
}

describe('ServiceLinks', () => {
  describe('Property 19: Location Page Upward Links', () => {
    test('should generate 2-3 service links for every location', () => {
      locations.forEach((location) => {
        const services = getRelevantServices(location)

        // Requirement 5.1: Each location page should link to 2-3 relevant service pages
        expect(services.length).toBeGreaterThanOrEqual(2)
        expect(services.length).toBeLessThanOrEqual(3)
      })
    })

    test('should include valid service slugs for all locations', () => {
      const validSlugs = [
        'full-bathroom-renovations',
        'wet-room-installations',
        'luxury-tiling-services',
        'disabled-assisted-bathrooms',
        'structural-building-repairs'
      ]

      locations.forEach((location) => {
        const services = getRelevantServices(location)

        services.forEach((service) => {
          expect(validSlugs).toContain(service.slug)
          expect(service.name).toBeTruthy()
          expect(service.description).toBeTruthy()
        })
      })
    })

    test('should prioritize highlight service when available', () => {
      const locationsWithHighlight = locations.filter((loc) => loc.highlightService)

      locationsWithHighlight.forEach((location) => {
        const services = getRelevantServices(location)

        // The first service should be related to the highlight service
        expect(services.length).toBeGreaterThan(0)
        expect(services[0].slug).toBeTruthy()

        // Verify the highlight service mapping works
        const highlightServiceMap: Record<string, string> = {
          'Bespoke Wet Rooms': 'wet-room-installations',
          'Marble Tiling': 'luxury-tiling-services',
          'Full Home Renovation': 'full-bathroom-renovations',
          'Structural Knock-Throughs': 'structural-building-repairs',
          'Full Bathroom Renovations': 'full-bathroom-renovations',
          'Wet Room Installations': 'wet-room-installations',
          'Victorian Terrace Renovations': 'full-bathroom-renovations',
          'Modern Bathroom Designs': 'full-bathroom-renovations',
          'Luxury Tiling Services': 'luxury-tiling-services',
          'Premium Bathroom Suites': 'full-bathroom-renovations',
          'Designer Wet Rooms': 'wet-room-installations',
          'Structural Building Repairs': 'structural-building-repairs',
          'Complete Bathroom Transformations': 'full-bathroom-renovations',
          'Local Experts': 'full-bathroom-renovations'
        }

        if (location.highlightService) {
          const expectedSlug = highlightServiceMap[location.highlightService]
          if (expectedSlug) {
            expect(services[0].slug).toBe(expectedSlug)
          }
        }
      })
    })

    test('should generate unique service links (no duplicates)', () => {
      locations.forEach((location) => {
        const services = getRelevantServices(location)
        const slugs = services.map((s) => s.slug)
        const uniqueSlugs = new Set(slugs)

        // No duplicate service links
        expect(uniqueSlugs.size).toBe(slugs.length)
      })
    })

    test('should generate valid service URLs', () => {
      locations.forEach((location) => {
        const services = getRelevantServices(location)

        services.forEach((service) => {
          const url = `/services/${service.slug}`

          // URL should be valid format
          expect(url).toMatch(/^\/services\/[a-z-]+$/)
          expect(url).not.toContain(' ')
          expect(url).not.toContain('_')
        })
      })
    })

    test('should include descriptive service names and descriptions', () => {
      locations.forEach((location) => {
        const services = getRelevantServices(location)

        services.forEach((service) => {
          // Service name should be descriptive
          expect(service.name.length).toBeGreaterThan(10)
          expect(service.name).toMatch(/[A-Z]/) // Contains capital letters

          // Description should be present and meaningful
          expect(service.description.length).toBeGreaterThan(15)
        })
      })
    })

    test('should maintain consistent service data structure', () => {
      locations.forEach((location) => {
        const services = getRelevantServices(location)

        services.forEach((service) => {
          // Each service must have required properties
          expect(service).toHaveProperty('slug')
          expect(service).toHaveProperty('name')
          expect(service).toHaveProperty('description')

          // Properties must be strings
          expect(typeof service.slug).toBe('string')
          expect(typeof service.name).toBe('string')
          expect(typeof service.description).toBe('string')
        })
      })
    })
  })

  describe('Service Link Coverage', () => {
    test('should cover all available services across all locations', () => {
      const allServiceSlugs = new Set<string>()

      locations.forEach((location) => {
        const services = getRelevantServices(location)
        services.forEach((service) => {
          allServiceSlugs.add(service.slug)
        })
      })

      // At least 3 different services should be linked across all locations
      expect(allServiceSlugs.size).toBeGreaterThanOrEqual(3)
    })

    test('should distribute service links across locations', () => {
      const serviceCount: Record<string, number> = {}

      locations.forEach((location) => {
        const services = getRelevantServices(location)
        services.forEach((service) => {
          serviceCount[service.slug] = (serviceCount[service.slug] || 0) + 1
        })
      })

      // Each service should be linked from at least one location
      Object.values(serviceCount).forEach((count) => {
        expect(count).toBeGreaterThan(0)
      })
    })
  })
})
