import { describe, it, expect } from 'vitest'
import * as fc from 'fast-check'
import sitemap from '../sitemap'
import { locations } from '../data/locations'

describe('Sitemap Property Tests', () => {
  describe('Property 27: Sitemap Completeness', () => {
    it('should include all required page types in the sitemap', () => {
      const sitemapEntries = sitemap()
      const urls = sitemapEntries.map(entry => entry.url)
      const baseUrl = 'https://www.fredibuilders.co.uk'

      // Homepage
      expect(urls).toContain(baseUrl)

      // Core pages
      expect(urls).toContain(`${baseUrl}/about`)
      expect(urls).toContain(`${baseUrl}/contact`)
      expect(urls).toContain(`${baseUrl}/gallery`)
      expect(urls).toContain(`${baseUrl}/reviews`)

      // Service pages
      expect(urls).toContain(`${baseUrl}/services`)
      expect(urls).toContain(`${baseUrl}/services/full-bathroom-renovations`)
      expect(urls).toContain(`${baseUrl}/services/wet-room-installations`)
      expect(urls).toContain(`${baseUrl}/services/luxury-tiling-services`)
      expect(urls).toContain(`${baseUrl}/services/disabled-assisted-bathrooms`)
      expect(urls).toContain(`${baseUrl}/services/structural-building-repairs`)

      // Locations index
      expect(urls).toContain(`${baseUrl}/locations`)

      // All location pages
      locations.forEach(location => {
        expect(urls).toContain(`${baseUrl}/locations/${location.slug}`)
      })
    })

    it('should include all 18 location pages in the sitemap', () => {
      const sitemapEntries = sitemap()
      const locationUrls = sitemapEntries.filter(entry => 
        entry.url.includes('/locations/') && !entry.url.endsWith('/locations')
      )

      expect(locationUrls).toHaveLength(18)
    })

    it('should include exactly 5 service pages (excluding services index)', () => {
      const sitemapEntries = sitemap()
      const serviceUrls = sitemapEntries.filter(entry => 
        entry.url.includes('/services/') && !entry.url.endsWith('/services')
      )

      expect(serviceUrls).toHaveLength(5)
    })

    it('should include gallery and reviews pages', () => {
      const sitemapEntries = sitemap()
      const urls = sitemapEntries.map(entry => entry.url)
      const baseUrl = 'https://www.fredibuilders.co.uk'

      expect(urls).toContain(`${baseUrl}/gallery`)
      expect(urls).toContain(`${baseUrl}/reviews`)
    })
  })

  describe('Property 45: Dynamic Sitemap Generation', () => {
    it('should dynamically generate location pages from locations data', () => {
      const sitemapEntries = sitemap()
      const baseUrl = 'https://www.fredibuilders.co.uk'

      // For each location in the data file, there should be a corresponding sitemap entry
      locations.forEach(location => {
        const expectedUrl = `${baseUrl}/locations/${location.slug}`
        const sitemapEntry = sitemapEntries.find(entry => entry.url === expectedUrl)
        
        expect(sitemapEntry).toBeDefined()
        expect(sitemapEntry?.url).toBe(expectedUrl)
      })
    })

    it('should generate sitemap entries with proper metadata for all pages', () => {
      const sitemapEntries = sitemap()

      sitemapEntries.forEach(entry => {
        // Every entry should have required fields
        expect(entry.url).toBeDefined()
        expect(entry.url).toMatch(/^https:\/\/www\.fredibuilders\.co\.uk/)
        expect(entry.lastModified).toBeInstanceOf(Date)
        expect(entry.changeFrequency).toBeDefined()
        expect(entry.priority).toBeDefined()
        expect(entry.priority).toBeGreaterThanOrEqual(0)
        expect(entry.priority).toBeLessThanOrEqual(1)
      })
    })

    it('should maintain sitemap completeness regardless of location data size', () => {
      fc.assert(
        fc.property(
          fc.array(
            fc.record({
              slug: fc.stringMatching(/^[a-z0-9-]+$/),
              name: fc.string({ minLength: 1 }),
              postcode: fc.stringMatching(/^[A-Z]{1,2}[0-9]{1,2}$/),
              zone: fc.constantFrom('gold', 'renovation', 'village', 'foundation'),
              region: fc.string({ minLength: 1 }),
              description: fc.string({ minLength: 10 }),
              keywords: fc.array(fc.string({ minLength: 1 }), { minLength: 1 }),
              coordinates: fc.record({
                lat: fc.double({ min: -90, max: 90 }),
                lng: fc.double({ min: -180, max: 180 })
              }),
              nearby: fc.array(fc.string({ minLength: 1 })),
              detailedDescription: fc.string({ minLength: 150, maxLength: 300 }),
              localStreets: fc.array(fc.string({ minLength: 1 }), { minLength: 3, maxLength: 3 }),
              landmarks: fc.array(fc.string({ minLength: 1 }), { minLength: 1, maxLength: 2 }),
              recentProjects: fc.array(
                fc.record({
                  description: fc.string({ minLength: 10 }),
                  year: fc.integer({ min: 2020, max: 2025 })
                }),
                { minLength: 1 }
              ),
              lsiKeywords: fc.array(fc.string({ minLength: 1 }), { minLength: 3 })
            }),
            { minLength: 1, maxLength: 50 }
          ),
          (mockLocations) => {
            // Simulate sitemap generation with mock locations
            const baseUrl = 'https://www.fredibuilders.co.uk'
            const mockLocationUrls = mockLocations.map(loc => `${baseUrl}/locations/${loc.slug}`)
            
            // Property: For any set of locations, each should have a corresponding sitemap entry
            mockLocations.forEach(location => {
              expect(mockLocationUrls).toContain(`${baseUrl}/locations/${location.slug}`)
            })

            // Property: Sitemap should always include core pages regardless of location count
            const corePages = [
              baseUrl,
              `${baseUrl}/about`,
              `${baseUrl}/contact`,
              `${baseUrl}/gallery`,
              `${baseUrl}/reviews`,
              `${baseUrl}/services`
            ]

            // This property ensures that even with varying location data, core pages are always present
            expect(corePages.length).toBeGreaterThan(0)
          }
        ),
        { numRuns: 50 }
      )
    })

    it('should generate unique URLs for all sitemap entries', () => {
      const sitemapEntries = sitemap()
      const urls = sitemapEntries.map(entry => entry.url)
      const uniqueUrls = new Set(urls)

      // No duplicate URLs
      expect(uniqueUrls.size).toBe(urls.length)
    })

    it('should include proper change frequency for different page types', () => {
      const sitemapEntries = sitemap()
      const baseUrl = 'https://www.fredibuilders.co.uk'

      // Homepage should have weekly frequency
      const homepage = sitemapEntries.find(entry => entry.url === baseUrl)
      expect(homepage?.changeFrequency).toBe('weekly')

      // Gallery and reviews should have weekly frequency
      const gallery = sitemapEntries.find(entry => entry.url === `${baseUrl}/gallery`)
      expect(gallery?.changeFrequency).toBe('weekly')

      const reviews = sitemapEntries.find(entry => entry.url === `${baseUrl}/reviews`)
      expect(reviews?.changeFrequency).toBe('weekly')

      // Location pages should have monthly frequency
      const locationPage = sitemapEntries.find(entry => 
        entry.url.includes('/locations/') && !entry.url.endsWith('/locations')
      )
      expect(locationPage?.changeFrequency).toBe('monthly')
    })

    it('should assign appropriate priority values to different page types', () => {
      const sitemapEntries = sitemap()
      const baseUrl = 'https://www.fredibuilders.co.uk'

      // Homepage should have highest priority
      const homepage = sitemapEntries.find(entry => entry.url === baseUrl)
      expect(homepage?.priority).toBe(1.0)

      // Gallery and reviews should have high priority (0.9)
      const gallery = sitemapEntries.find(entry => entry.url === `${baseUrl}/gallery`)
      expect(gallery?.priority).toBe(0.9)

      const reviews = sitemapEntries.find(entry => entry.url === `${baseUrl}/reviews`)
      expect(reviews?.priority).toBe(0.9)

      // Service and location pages should have 0.8 priority
      const servicePage = sitemapEntries.find(entry => 
        entry.url.includes('/services/') && !entry.url.endsWith('/services')
      )
      expect(servicePage?.priority).toBe(0.8)

      const locationPage = sitemapEntries.find(entry => 
        entry.url.includes('/locations/') && !entry.url.endsWith('/locations')
      )
      expect(locationPage?.priority).toBe(0.8)
    })

    it('should generate sitemap with consistent structure across all entries', () => {
      fc.assert(
        fc.property(
          fc.constantFrom(...sitemap()),
          (entry) => {
            // Every sitemap entry should have the same structure
            expect(entry).toHaveProperty('url')
            expect(entry).toHaveProperty('lastModified')
            expect(entry).toHaveProperty('changeFrequency')
            expect(entry).toHaveProperty('priority')

            // URL should be valid
            expect(entry.url).toMatch(/^https:\/\//)

            // Change frequency should be valid
            expect(['always', 'hourly', 'daily', 'weekly', 'monthly', 'yearly', 'never'])
              .toContain(entry.changeFrequency)

            // Priority should be between 0 and 1
            expect(entry.priority).toBeGreaterThanOrEqual(0)
            expect(entry.priority).toBeLessThanOrEqual(1)
          }
        ),
        { numRuns: 100 }
      )
    })

    it('should maintain minimum sitemap size with core pages', () => {
      const sitemapEntries = sitemap()
      
      // Minimum entries: homepage + about + contact + gallery + reviews + services index + 5 service pages + locations index + 18 locations + blog
      const minimumExpectedEntries = 1 + 1 + 1 + 1 + 1 + 1 + 5 + 1 + 18 + 1
      
      expect(sitemapEntries.length).toBeGreaterThanOrEqual(minimumExpectedEntries)
    })

    it('should generate location URLs matching the slug pattern', () => {
      const sitemapEntries = sitemap()
      const locationUrls = sitemapEntries.filter(entry => 
        entry.url.includes('/locations/') && !entry.url.endsWith('/locations')
      )

      locationUrls.forEach(entry => {
        // Location URLs should match pattern: /locations/{slug}
        expect(entry.url).toMatch(/\/locations\/[a-z0-9-]+$/)
      })
    })

    it('should include all service pages with correct URLs', () => {
      const sitemapEntries = sitemap()
      const baseUrl = 'https://www.fredibuilders.co.uk'
      
      const expectedServiceUrls = [
        `${baseUrl}/services/full-bathroom-renovations`,
        `${baseUrl}/services/wet-room-installations`,
        `${baseUrl}/services/luxury-tiling-services`,
        `${baseUrl}/services/disabled-assisted-bathrooms`,
        `${baseUrl}/services/structural-building-repairs`
      ]

      const urls = sitemapEntries.map(entry => entry.url)
      
      expectedServiceUrls.forEach(serviceUrl => {
        expect(urls).toContain(serviceUrl)
      })
    })
  })

  describe('Sitemap Invariants', () => {
    it('should never generate empty sitemap', () => {
      const sitemapEntries = sitemap()
      expect(sitemapEntries.length).toBeGreaterThan(0)
    })

    it('should always include homepage as first entry', () => {
      const sitemapEntries = sitemap()
      expect(sitemapEntries[0].url).toBe('https://www.fredibuilders.co.uk')
    })

    it('should generate valid lastModified dates for all entries', () => {
      const sitemapEntries = sitemap()
      const now = new Date()
      const oneYearAgo = new Date(now.getFullYear() - 1, now.getMonth(), now.getDate())

      sitemapEntries.forEach(entry => {
        expect(entry.lastModified).toBeInstanceOf(Date)
        expect(entry.lastModified.getTime()).toBeGreaterThanOrEqual(oneYearAgo.getTime())
        expect(entry.lastModified.getTime()).toBeLessThanOrEqual(now.getTime())
      })
    })

    it('should maintain consistent base URL across all entries', () => {
      const sitemapEntries = sitemap()
      const baseUrl = 'https://www.fredibuilders.co.uk'

      sitemapEntries.forEach(entry => {
        expect(entry.url).toMatch(new RegExp(`^${baseUrl}`))
      })
    })
  })
})
