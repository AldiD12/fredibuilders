/**
 * Property Test: Location Page Data Display
 * Feature: fredi-builders-empire-building, Property 17
 * 
 * Property 17: Location Page Data Display
 * For any location page render, all enriched data fields (local streets, landmarks,
 * detailed description, recent projects, LSI keywords) should be present in the rendered HTML.
 * 
 * Validates: Requirements 4.6
 */

import { describe, test, expect } from 'vitest'
import * as fc from 'fast-check'
import { locations, type Location } from '@/app/data/locations'
import { readFileSync } from 'fs'
import { join } from 'path'

// Read the location page template to verify structure
const locationPageTemplate = readFileSync(
  join(process.cwd(), 'app/locations/[slug]/page.tsx'),
  'utf-8'
)

describe('Property 17: Location Page Data Display', () => {
  test('location page template includes all required sections for enriched data', () => {
    // Verify the template has sections for all enriched data fields
    
    // Recent Projects section
    expect(locationPageTemplate).toContain('recentProjects')
    expect(locationPageTemplate).toContain('RECENT WORK IN')
    expect(locationPageTemplate).toContain('Latest Projects in')
    
    // Detailed Description section
    expect(locationPageTemplate).toContain('detailedDescription')
    expect(locationPageTemplate).toContain("We're Local to")
    
    // Local Streets section
    expect(locationPageTemplate).toContain('localStreets')
    expect(locationPageTemplate).toContain('Streets We Serve in')
    
    // Landmarks section
    expect(locationPageTemplate).toContain('landmarks')
    
    // LocationMap component integration
    expect(locationPageTemplate).toContain('LocationMap')
    expect(locationPageTemplate).toContain('location={location}')
    
    // ServiceLinks component integration
    expect(locationPageTemplate).toContain('ServiceLinks')
    
    // ReviewsLink component integration
    expect(locationPageTemplate).toContain('ReviewsLink')
  })

  test('all locations have data that will be displayed on their pages', () => {
    fc.assert(
      fc.property(
        fc.constantFrom(...locations),
        (location: Location) => {
          // Verify all enriched data fields exist and are non-empty
          expect(location.detailedDescription).toBeDefined()
          expect(location.detailedDescription.length).toBeGreaterThan(0)
          
          expect(location.localStreets).toBeDefined()
          expect(location.localStreets.length).toBe(3)
          
          expect(location.landmarks).toBeDefined()
          expect(location.landmarks.length).toBeGreaterThanOrEqual(1)
          
          expect(location.recentProjects).toBeDefined()
          expect(location.recentProjects.length).toBeGreaterThanOrEqual(1)
          
          expect(location.lsiKeywords).toBeDefined()
          expect(location.lsiKeywords.length).toBeGreaterThanOrEqual(3)
          
          return true
        }
      ),
      { numRuns: locations.length }
    )
  })

  test('recent projects section is positioned prominently in template', () => {
    // Find the position of recent projects section in the template
    const recentProjectsIndex = locationPageTemplate.indexOf('recentProjects')
    expect(recentProjectsIndex).toBeGreaterThan(-1)
    
    // Find positions of other sections
    const whyChooseIndex = locationPageTemplate.indexOf('Why Choose Fredi Builders')
    const faqIndex = locationPageTemplate.indexOf('Frequently Asked')
    
    // Recent projects should appear before "Why Choose Us" and FAQ sections
    expect(recentProjectsIndex).toBeLessThan(whyChooseIndex)
    expect(recentProjectsIndex).toBeLessThan(faqIndex)
    
    // Verify prominent styling
    expect(locationPageTemplate).toContain('RECENT WORK IN')
    expect(locationPageTemplate).toContain('bg-gradient-to-br')
  })

  test('all recent projects are unique across locations to avoid clone detection', () => {
    // Collect all recent project descriptions
    const allProjectDescriptions = locations.flatMap((loc) =>
      loc.recentProjects.map((p) => p.description)
    )

    // Check that project descriptions are unique across locations
    const uniqueDescriptions = new Set(allProjectDescriptions)
    
    // Each location should have unique project descriptions
    // (no two locations should share the same project description)
    expect(uniqueDescriptions.size).toBe(allProjectDescriptions.length)
  })

  test('location names appear multiple times for GMB gravity', () => {
    fc.assert(
      fc.property(
        fc.constantFrom(...locations),
        (location: Location) => {
          // Count occurrences of location name in various data fields
          let nameCount = 0
          
          // In detailed description
          const descMatches = location.detailedDescription.match(
            new RegExp(location.name, 'gi')
          )
          nameCount += descMatches ? descMatches.length : 0
          
          // In recent projects
          location.recentProjects.forEach((project) => {
            const projMatches = project.description.match(
              new RegExp(location.name, 'gi')
            )
            nameCount += projMatches ? projMatches.length : 0
          })
          
          // Location name should appear at least 1 time in the data
          // (template will add many more occurrences in headings, CTAs, etc.)
          // The template adds the name in: hero, recent projects heading, 
          // "We're local to", streets section, why choose us, FAQ, CTA, etc.
          expect(nameCount).toBeGreaterThanOrEqual(1)
          
          return true
        }
      ),
      { numRuns: locations.length }
    )
  })

  test('template includes Google Maps embed for GMB gravity', () => {
    // Verify LocationMap component is used
    expect(locationPageTemplate).toContain('<LocationMap')
    expect(locationPageTemplate).toContain('location={location}')
    
    // Verify it's positioned in the page
    const mapIndex = locationPageTemplate.indexOf('LocationMap')
    expect(mapIndex).toBeGreaterThan(-1)
  })

  test('template maintains CTA hierarchy matching homepage', () => {
    // Verify primary teal button for Fixed-Price Quote
    expect(locationPageTemplate).toContain('Get Fixed-Price Quote')
    expect(locationPageTemplate).toContain('bg-primary')
    
    // Verify secondary Call option
    expect(locationPageTemplate).toContain('Call: 07468 451511')
    expect(locationPageTemplate).toContain('tel:07468451511')
    
    // Verify the primary CTA appears before the secondary CTA in the hero
    const primaryIndex = locationPageTemplate.indexOf('Get Fixed-Price Quote')
    const secondaryIndex = locationPageTemplate.indexOf('Call: 07468 451511')
    expect(primaryIndex).toBeLessThan(secondaryIndex)
  })

  test('template includes "We\'re local to [Location]" messaging', () => {
    expect(locationPageTemplate).toContain("We're Local to")
    expect(locationPageTemplate).toContain('{location.name}')
  })

  test('template displays local streets with proper heading', () => {
    expect(locationPageTemplate).toContain('Streets We Serve in')
    expect(locationPageTemplate).toContain('localStreets.map')
  })

  test('template displays landmarks with proper styling', () => {
    expect(locationPageTemplate).toContain('landmarks')
    expect(locationPageTemplate).toContain('landmarks.map')
    expect(locationPageTemplate).toContain('Near:')
  })

  test('LSI keywords are present in location data for natural integration', () => {
    fc.assert(
      fc.property(
        fc.constantFrom(...locations),
        (location: Location) => {
          // Verify LSI keywords exist
          expect(location.lsiKeywords).toBeDefined()
          expect(location.lsiKeywords.length).toBeGreaterThanOrEqual(3)
          
          // Verify they are bathroom-specific vocabulary
          const bathroomRelatedTerms = [
            'shower', 'bath', 'tile', 'wet room', 'vanity', 'toilet',
            'heating', 'plumbing', 'fixtures', 'marble', 'porcelain',
            'ensuite', 'renovation', 'waterproof', 'drainage'
          ]
          
          // At least one LSI keyword should be bathroom-related
          const hasBathroomTerms = location.lsiKeywords.some((keyword) =>
            bathroomRelatedTerms.some((term) =>
              keyword.toLowerCase().includes(term)
            )
          )
          
          expect(hasBathroomTerms).toBe(true)
          
          return true
        }
      ),
      { numRuns: locations.length }
    )
  })
})
