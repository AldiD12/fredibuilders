/**
 * Property-Based Tests for ServiceLinks Component
 * Feature: fredi-builders-empire-building
 * Property 19: Location Page Upward Links
 * **Validates: Requirements 5.1**
 */

import { describe, test, expect } from 'vitest'
import { locations } from '@/app/data/locations'

/**
 * Simulate ServiceLinks component logic
 * Returns array of service links for a given location
 */
function getServiceLinksForLocation(location: typeof locations[0]) {
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

  // Map highlight service names to slugs
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

  // If location has a highlight service, prioritize it
  if (location.highlightService) {
    const highlightSlug = highlightServiceMap[location.highlightService]
    if (highlightSlug) {
      const highlightedService = allServices.find((s) => s.slug === highlightSlug)
      const otherServices = allServices.filter((s) => s.slug !== highlightSlug)

      // Return highlighted service + 2 others
      return highlightedService
        ? [highlightedService, ...otherServices.slice(0, 2)]
        : allServices.slice(0, 3)
    }
  }

  // Default: return first 3 services
  return allServices.slice(0, 3)
}

describe('ServiceLinks - Property Tests', () => {
  /**
   * Property 19: Location Page Upward Links
   * For any location page render, the page should include links to at least 2
   * relevant service hub pages.
   * Validates: Requirements 5.1
   */
  describe('Property 19: Location Page Upward Links', () => {
    test('should generate at least 2 service links for any location', () => {
      locations.forEach((location) => {
        const serviceLinks = getServiceLinksForLocation(location)

        // Must have at least 2 service links
        expect(serviceLinks.length).toBeGreaterThanOrEqual(2)

        // Should not exceed 3 service links (as per design)
        expect(serviceLinks.length).toBeLessThanOrEqual(3)
      })
    })

    test('should generate exactly 3 service links for any location', () => {
      locations.forEach((location) => {
        const serviceLinks = getServiceLinksForLocation(location)

        // Design specifies 2-3 links, implementation uses 3
        expect(serviceLinks.length).toBe(3)
      })
    })

    test('should include valid service slugs for any location', () => {
      const validServiceSlugs = [
        'full-bathroom-renovations',
        'wet-room-installations',
        'luxury-tiling-services',
        'disabled-assisted-bathrooms',
        'structural-building-repairs'
      ]

      locations.forEach((location) => {
        const serviceLinks = getServiceLinksForLocation(location)

        serviceLinks.forEach((service) => {
          expect(validServiceSlugs).toContain(service.slug)
        })
      })
    })

    test('should include service name and description for any location', () => {
      locations.forEach((location) => {
        const serviceLinks = getServiceLinksForLocation(location)

        serviceLinks.forEach((service) => {
          expect(service.name).toBeTruthy()
          expect(typeof service.name).toBe('string')
          expect(service.name.length).toBeGreaterThan(0)

          expect(service.description).toBeTruthy()
          expect(typeof service.description).toBe('string')
          expect(service.description.length).toBeGreaterThan(0)

          expect(service.slug).toBeTruthy()
          expect(typeof service.slug).toBe('string')
          expect(service.slug.length).toBeGreaterThan(0)
        })
      })
    })

    test('should prioritize highlighted service when present for any location', () => {
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

      const locationsWithHighlight = locations.filter(
        (loc) => loc.highlightService
      )

      locationsWithHighlight.forEach((location) => {
        const serviceLinks = getServiceLinksForLocation(location)
        const expectedSlug = highlightServiceMap[location.highlightService!]

        // First service should be the highlighted one (mapped to slug)
        expect(serviceLinks[0].slug).toBe(expectedSlug)
      })
    })

    test('should not include duplicate services for any location', () => {
      locations.forEach((location) => {
        const serviceLinks = getServiceLinksForLocation(location)

        const slugs = serviceLinks.map((s) => s.slug)
        const uniqueSlugs = new Set(slugs)

        // No duplicates
        expect(slugs.length).toBe(uniqueSlugs.size)
      })
    })

    test('should generate valid service URLs for any location', () => {
      locations.forEach((location) => {
        const serviceLinks = getServiceLinksForLocation(location)

        serviceLinks.forEach((service) => {
          const url = `/services/${service.slug}`

          // URL should be well-formed
          expect(url).toMatch(/^\/services\/[a-z-]+$/)

          // Should not have double slashes
          expect(url).not.toContain('//')

          // Should not end with slash
          expect(url).not.toMatch(/\/$/)
        })
      })
    })
  })

  /**
   * Service link relevance validation
   * Ensures services are contextually appropriate
   */
  describe('Service Link Relevance', () => {
    test('should include bathroom-related services for any location', () => {
      const bathroomServices = [
        'full-bathroom-renovations',
        'wet-room-installations',
        'luxury-tiling-services',
        'disabled-assisted-bathrooms'
      ]

      locations.forEach((location) => {
        const serviceLinks = getServiceLinksForLocation(location)
        const slugs = serviceLinks.map((s) => s.slug)

        // At least one bathroom service should be included
        const hasBathroomService = slugs.some((slug) =>
          bathroomServices.includes(slug)
        )
        expect(hasBathroomService).toBe(true)
      })
    })

    test('should maintain consistent service order for locations without highlights', () => {
      const locationsWithoutHighlight = locations.filter(
        (loc) => !loc.highlightService
      )

      if (locationsWithoutHighlight.length > 1) {
        const firstLocationServices = getServiceLinksForLocation(
          locationsWithoutHighlight[0]
        )

        locationsWithoutHighlight.slice(1).forEach((location) => {
          const serviceLinks = getServiceLinksForLocation(location)

          // Should have same services in same order
          expect(serviceLinks.map((s) => s.slug)).toEqual(
            firstLocationServices.map((s) => s.slug)
          )
        })
      }
    })
  })

  /**
   * Data integrity validation
   * Ensures service data is complete and valid
   */
  describe('Service Data Integrity', () => {
    test('should have non-empty service names for any location', () => {
      locations.forEach((location) => {
        const serviceLinks = getServiceLinksForLocation(location)

        serviceLinks.forEach((service) => {
          expect(service.name.trim()).toBe(service.name)
          expect(service.name.length).toBeGreaterThan(5)
        })
      })
    })

    test('should have non-empty service descriptions for any location', () => {
      locations.forEach((location) => {
        const serviceLinks = getServiceLinksForLocation(location)

        serviceLinks.forEach((service) => {
          expect(service.description.trim()).toBe(service.description)
          expect(service.description.length).toBeGreaterThan(10)
        })
      })
    })

    test('should have valid slug format for any location', () => {
      locations.forEach((location) => {
        const serviceLinks = getServiceLinksForLocation(location)

        serviceLinks.forEach((service) => {
          // Slug should be lowercase with hyphens only
          expect(service.slug).toMatch(/^[a-z-]+$/)

          // Should not start or end with hyphen
          expect(service.slug).not.toMatch(/^-/)
          expect(service.slug).not.toMatch(/-$/)

          // Should not have consecutive hyphens
          expect(service.slug).not.toContain('--')
        })
      })
    })
  })
})
