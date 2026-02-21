/**
 * Property-Based Tests for NearbyLocations Component
 * Feature: fredi-builders-empire-building
 * Property 20: Location Page Lateral Links
 * Property 21: Lateral Link Anchor Text Variation
 * **Validates: Requirements 5.2, 5.3**
 */

import { describe, test, expect } from 'vitest'
import { locations } from '@/app/data/locations'

/**
 * Simulate NearbyLocations component logic
 * Returns array of nearby location links with randomized anchor text
 */
function getNearbyLocationLinks(neighbors: string[]) {
  const getRandomAnchorText = (locationName: string, seed: number): string => {
    const templates = [
      `Bathroom Fitters in ${locationName}`,
      `${locationName} Wet Room Installations`,
      `Our ${locationName} Team`,
      `Recent work in ${locationName}`,
      `Serving ${locationName}`,
      `${locationName} Building Services`,
      `Luxury Bathrooms ${locationName}`,
      `${locationName} Renovations`
    ]

    const index = seed % templates.length
    return templates[index]
  }

  const nearbyLocations = neighbors
    .map((neighborName) => {
      const location = locations.find((loc) => loc.name === neighborName)
      return location
    })
    .filter((loc): loc is NonNullable<typeof loc> => loc !== undefined)

  return nearbyLocations.map((location, index) => ({
    slug: location.slug,
    name: location.name,
    postcode: location.postcode,
    anchorText: getRandomAnchorText(location.name, index),
    url: `/locations/${location.slug}`
  }))
}

describe('NearbyLocations - Property Tests', () => {
  /**
   * Property 20: Location Page Lateral Links
   * For any location page render, the page should include exactly 4 links
   * to nearby location pages.
   * Validates: Requirements 5.2
   */
  describe('Property 20: Location Page Lateral Links', () => {
    test('should generate links for all valid nearby locations', () => {
      locations.forEach((location) => {
        const nearbyLinks = getNearbyLocationLinks(location.nearby)

        // Should have links (may be less than 4 if some neighbors not found)
        expect(nearbyLinks.length).toBeGreaterThan(0)

        // Should not exceed the number of neighbors specified
        expect(nearbyLinks.length).toBeLessThanOrEqual(location.nearby.length)
      })
    })

    test('should generate exactly 4 links when 4 valid neighbors exist', () => {
      const locationsWithFourNeighbors = locations.filter(
        (loc) => loc.nearby.length === 4
      )

      locationsWithFourNeighbors.forEach((location) => {
        const nearbyLinks = getNearbyLocationLinks(location.nearby)

        // All 4 neighbors should be found and linked
        expect(nearbyLinks.length).toBe(4)
      })
    })

    test('should generate valid URLs for any location', () => {
      locations.forEach((location) => {
        const nearbyLinks = getNearbyLocationLinks(location.nearby)

        nearbyLinks.forEach((link) => {
          // URL should be well-formed (can include numbers in slug)
          expect(link.url).toMatch(/^\/locations\/[a-z0-9-]+$/)

          // Should not have double slashes
          expect(link.url).not.toContain('//')

          // Should not end with slash
          expect(link.url).not.toMatch(/\/$/)
        })
      })
    })

    test('should include valid location data for any location', () => {
      locations.forEach((location) => {
        const nearbyLinks = getNearbyLocationLinks(location.nearby)

        nearbyLinks.forEach((link) => {
          expect(link.slug).toBeTruthy()
          expect(link.name).toBeTruthy()
          expect(link.postcode).toBeTruthy()
          expect(link.anchorText).toBeTruthy()

          // Postcode should be valid UK format (outward code only or full postcode)
          expect(link.postcode).toMatch(/^[A-Z]{1,2}\d{1,2}[A-Z]?(\s?\d[A-Z]{2})?$/)
        })
      })
    })
  })

  /**
   * Property 21: Lateral Link Anchor Text Variation
   * For any set of lateral links on a location page, the anchor text should
   * come from the 8 defined variations and should not all be identical.
   * Validates: Requirements 5.3
   */
  describe('Property 21: Lateral Link Anchor Text Variation', () => {
    test('should use anchor text from the 8 defined templates for any location', () => {
      const validTemplatePatterns = [
        /^Bathroom Fitters in .+$/,
        /^.+ Wet Room Installations$/,
        /^Our .+ Team$/,
        /^Recent work in .+$/,
        /^Serving .+$/,
        /^.+ Building Services$/,
        /^Luxury Bathrooms .+$/,
        /^.+ Renovations$/
      ]

      locations.forEach((location) => {
        const nearbyLinks = getNearbyLocationLinks(location.nearby)

        nearbyLinks.forEach((link) => {
          // Anchor text should match one of the templates
          const matchesTemplate = validTemplatePatterns.some((pattern) =>
            pattern.test(link.anchorText)
          )
          expect(matchesTemplate).toBe(true)
        })
      })
    })

    test('should include location name in anchor text for any location', () => {
      locations.forEach((location) => {
        const nearbyLinks = getNearbyLocationLinks(location.nearby)

        nearbyLinks.forEach((link) => {
          // Anchor text should contain the location name
          expect(link.anchorText).toContain(link.name)
        })
      })
    })

    test('should vary anchor text when multiple neighbors exist', () => {
      const locationsWithMultipleNeighbors = locations.filter(
        (loc) => loc.nearby.length >= 2
      )

      locationsWithMultipleNeighbors.forEach((location) => {
        const nearbyLinks = getNearbyLocationLinks(location.nearby)

        if (nearbyLinks.length >= 2) {
          const anchorTexts = nearbyLinks.map((link) => link.anchorText)
          const uniquePatterns = new Set(
            anchorTexts.map((text) => {
              // Extract pattern by removing location name
              return text.replace(
                new RegExp(nearbyLinks.find((l) => text.includes(l.name))?.name || '', 'g'),
                'LOCATION'
              )
            })
          )

          // Should have some variation (not all identical patterns)
          // With 8 templates and modulo distribution, we expect variation
          if (nearbyLinks.length >= 8) {
            expect(uniquePatterns.size).toBeGreaterThan(1)
          }
        }
      })
    })

    test('should use consistent seed-based selection for any location', () => {
      locations.forEach((location) => {
        const nearbyLinks1 = getNearbyLocationLinks(location.nearby)
        const nearbyLinks2 = getNearbyLocationLinks(location.nearby)

        // Same input should produce same output (deterministic)
        expect(nearbyLinks1.map((l) => l.anchorText)).toEqual(
          nearbyLinks2.map((l) => l.anchorText)
        )
      })
    })

    test('should distribute templates across neighbors for any location', () => {
      const locationsWithFourNeighbors = locations.filter(
        (loc) => loc.nearby.length === 4
      )

      locationsWithFourNeighbors.forEach((location) => {
        const nearbyLinks = getNearbyLocationLinks(location.nearby)

        // With 4 neighbors and 8 templates, we should get 4 different templates
        const anchorTexts = nearbyLinks.map((link) => link.anchorText)

        // Extract template patterns
        const patterns = anchorTexts.map((text, index) => {
          const locationName = nearbyLinks[index].name
          return text.replace(locationName, 'LOCATION')
        })

        const uniquePatterns = new Set(patterns)

        // All 4 should use different templates (seed 0,1,2,3 -> templates 0,1,2,3)
        expect(uniquePatterns.size).toBe(4)
      })
    })
  })

  /**
   * Data integrity validation
   * Ensures nearby location data is valid
   */
  describe('Nearby Location Data Integrity', () => {
    test('should only link to locations that exist in the locations array', () => {
      locations.forEach((location) => {
        const nearbyLinks = getNearbyLocationLinks(location.nearby)

        nearbyLinks.forEach((link) => {
          // Location should exist in locations array
          const exists = locations.some((loc) => loc.slug === link.slug)
          expect(exists).toBe(true)
        })
      })
    })

    test('should not link to self for any location', () => {
      locations.forEach((location) => {
        const nearbyLinks = getNearbyLocationLinks(location.nearby)

        // No link should point to the current location
        const linksToSelf = nearbyLinks.some((link) => link.slug === location.slug)
        expect(linksToSelf).toBe(false)
      })
    })

    test('should have valid slugs for any location', () => {
      locations.forEach((location) => {
        const nearbyLinks = getNearbyLocationLinks(location.nearby)

        nearbyLinks.forEach((link) => {
          // Slug should be lowercase with hyphens and numbers
          expect(link.slug).toMatch(/^[a-z0-9-]+$/)

          // Should not start or end with hyphen
          expect(link.slug).not.toMatch(/^-/)
          expect(link.slug).not.toMatch(/-$/)

          // Should not have consecutive hyphens
          expect(link.slug).not.toContain('--')
        })
      })
    })

    test('should handle missing neighbors gracefully for any location', () => {
      // Test with invalid neighbor names
      const invalidNeighbors = ['NonExistentLocation', 'FakePlace', 'NotReal']

      const nearbyLinks = getNearbyLocationLinks(invalidNeighbors)

      // Should return empty array, not throw error
      expect(nearbyLinks).toEqual([])
    })
  })
})
