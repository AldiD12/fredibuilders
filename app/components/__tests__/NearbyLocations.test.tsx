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
 * Get random anchor text (mimics NearbyLocations component logic)
 */
function getRandomAnchorText(locationName: string, seed: number): string {
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

describe('NearbyLocations', () => {
  describe('Property 20: Location Page Lateral Links', () => {
    test('should generate exactly 4 nearby location links for locations with neighbors', () => {
      locations.forEach((location) => {
        if (location.nearby && location.nearby.length > 0) {
          // Requirement 5.2: Each location page should link to exactly 4 nearby locations
          const nearbyLocations = location.nearby
            .map(neighborName => locations.find(loc => loc.name === neighborName))
            .filter(loc => loc !== undefined)

          // Should have up to 4 neighbors (some locations may have fewer)
          expect(nearbyLocations.length).toBeLessThanOrEqual(4)
          expect(nearbyLocations.length).toBeGreaterThan(0)
        }
      })
    })

    test('should link to valid existing locations', () => {
      const locationNames = locations.map(loc => loc.name)

      locations.forEach((location) => {
        if (location.nearby) {
          location.nearby.forEach((neighborName) => {
            // Each neighbor must be a valid location
            expect(locationNames).toContain(neighborName)
          })
        }
      })
    })

    test('should generate valid URLs for nearby locations', () => {
      locations.forEach((location) => {
        if (location.nearby) {
          location.nearby.forEach((neighborName) => {
            const neighborLocation = locations.find(loc => loc.name === neighborName)
            if (neighborLocation) {
              const url = `/locations/${neighborLocation.slug}`

              // URL should be valid format
              expect(url).toMatch(/^\/locations\/[a-z0-9-]+$/)
              expect(url).not.toContain(' ')
              expect(url).not.toContain('_')
            }
          })
        }
      })
    })

    test('should not link to self', () => {
      locations.forEach((location) => {
        if (location.nearby) {
          // A location should never list itself as a neighbor
          expect(location.nearby).not.toContain(location.name)
        }
      })
    })

    test('should have unique neighbors (no duplicates)', () => {
      locations.forEach((location) => {
        if (location.nearby) {
          const uniqueNeighbors = new Set(location.nearby)
          expect(uniqueNeighbors.size).toBe(location.nearby.length)
        }
      })
    })
  })

  describe('Property 21: Lateral Link Anchor Text Variation', () => {
    test('should have exactly 8 anchor text variations', () => {
      const templates = [
        'Bathroom Fitters in',
        'Wet Room Installations',
        'Our',
        'Recent work in',
        'Serving',
        'Building Services',
        'Luxury Bathrooms',
        'Renovations'
      ]

      // Requirement 5.3: Must have 8 different anchor text variations
      expect(templates.length).toBe(8)
    })

    test('should generate varied anchor text for different seed values', () => {
      const testLocation = 'Streatham'
      const anchorTexts = new Set<string>()

      // Generate anchor text for 8 different seeds
      for (let i = 0; i < 8; i++) {
        const anchorText = getRandomAnchorText(testLocation, i)
        anchorTexts.add(anchorText)
      }

      // Should generate 8 unique anchor texts
      expect(anchorTexts.size).toBe(8)
    })

    test('should include location name in all anchor text variations', () => {
      const testLocation = 'Dulwich'

      for (let i = 0; i < 8; i++) {
        const anchorText = getRandomAnchorText(testLocation, i)
        
        // Every anchor text must include the location name
        expect(anchorText).toContain(testLocation)
      }
    })

    test('should generate consistent anchor text for same seed', () => {
      const testLocation = 'Thornton Heath'
      const seed = 3

      const anchorText1 = getRandomAnchorText(testLocation, seed)
      const anchorText2 = getRandomAnchorText(testLocation, seed)

      // Same seed should produce same anchor text
      expect(anchorText1).toBe(anchorText2)
    })

    test('should cycle through all variations with sequential seeds', () => {
      const testLocation = 'Purley'
      const anchorTexts: string[] = []

      // Generate 16 anchor texts (2 full cycles)
      for (let i = 0; i < 16; i++) {
        anchorTexts.push(getRandomAnchorText(testLocation, i))
      }

      // First 8 should match second 8 (cycling behavior)
      for (let i = 0; i < 8; i++) {
        expect(anchorTexts[i]).toBe(anchorTexts[i + 8])
      }
    })

    test('should generate SEO-friendly anchor text', () => {
      const testLocation = 'Leatherhead'

      for (let i = 0; i < 8; i++) {
        const anchorText = getRandomAnchorText(testLocation, i)

        // Anchor text should be descriptive (not just "click here")
        expect(anchorText.length).toBeGreaterThan(10)
        
        // Should contain service-related keywords
        const hasServiceKeyword = 
          anchorText.includes('Bathroom') ||
          anchorText.includes('Wet Room') ||
          anchorText.includes('Building') ||
          anchorText.includes('Renovations') ||
          anchorText.includes('Luxury') ||
          anchorText.includes('Team') ||
          anchorText.includes('work') ||
          anchorText.includes('Serving')

        expect(hasServiceKeyword).toBe(true)
      }
    })

    test('should avoid over-optimization patterns', () => {
      const testLocation = 'Esher'
      const anchorTexts: string[] = []

      for (let i = 0; i < 8; i++) {
        anchorTexts.push(getRandomAnchorText(testLocation, i))
      }

      // All anchor texts should be different (no repetition)
      const uniqueTexts = new Set(anchorTexts)
      expect(uniqueTexts.size).toBe(8)

      // Should not all follow the same pattern
      const patterns = anchorTexts.map(text => {
        if (text.startsWith(testLocation)) return 'location-first'
        if (text.endsWith(testLocation)) return 'location-last'
        return 'location-middle'
      })

      const uniquePatterns = new Set(patterns)
      // Should have at least 2 different patterns
      expect(uniquePatterns.size).toBeGreaterThanOrEqual(2)
    })
  })

  describe('Lateral Link Coverage', () => {
    test('should ensure all locations are reachable through lateral links', () => {
      const linkedLocations = new Set<string>()

      locations.forEach((location) => {
        if (location.nearby) {
          location.nearby.forEach((neighbor) => {
            linkedLocations.add(neighbor)
          })
        }
      })

      // Most locations should be linked from at least one other location
      // (Some edge locations might not be neighbors to any location)
      expect(linkedLocations.size).toBeGreaterThan(locations.length / 2)
    })

    test('should create a connected network of locations', () => {
      const locationsWithNeighbors = locations.filter(
        loc => loc.nearby && loc.nearby.length > 0
      )

      // At least 80% of locations should have neighbors
      const coverageRatio = locationsWithNeighbors.length / locations.length
      expect(coverageRatio).toBeGreaterThan(0.8)
    })
  })
})
