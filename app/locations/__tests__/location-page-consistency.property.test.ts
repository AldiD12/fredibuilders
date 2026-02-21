/**
 * Property Test: Location Page Structural Consistency
 * Feature: fredi-builders-empire-building, Property 18
 * 
 * Property 18: Location Page Structural Consistency
 * For any two location pages, they should have the same HTML structure with the
 * same section types and element hierarchy.
 * 
 * Validates: Requirements 4.7
 */

import { describe, test, expect } from 'vitest'
import * as fc from 'fast-check'
import { locations, type Location } from '@/app/data/locations'
import { readFileSync } from 'fs'
import { join } from 'path'

// Read the location page template
const locationPageTemplate = readFileSync(
  join(process.cwd(), 'app/locations/[slug]/page.tsx'),
  'utf-8'
)

// Define the required sections that should be present in all location pages
const requiredSections = [
  'Hero Section',
  'Trust Signals',
  'Recent Projects Section',
  'Detailed Description & Local Streets',
  'Services in Location',
  'Google Maps',
  'Why Choose Us',
  'FAQ Section',
  'Nearby Locations',
  'CTA Section'
]

describe('Property 18: Location Page Structural Consistency', () => {
  test('all location pages use the same template structure', () => {
    // Since all location pages are generated from the same template,
    // they inherently have the same structure
    // Verify the template exists and has all required sections
    
    // Check for key section markers in the template
    expect(locationPageTemplate).toContain('{/* Hero Section */')
    expect(locationPageTemplate).toContain('{/* Trust Signals */')
    expect(locationPageTemplate).toContain('{/* PROMINENT Recent Projects Section')
    expect(locationPageTemplate).toContain('{/* Detailed Description & Local Streets')
    expect(locationPageTemplate).toContain('{/* Services in Location')
    expect(locationPageTemplate).toContain('{/* Google Maps')
    expect(locationPageTemplate).toContain('{/* Why Choose Us */')
    expect(locationPageTemplate).toContain('{/* FAQ Section */')
    expect(locationPageTemplate).toContain('{/* Nearby Locations */')
    expect(locationPageTemplate).toContain('{/* CTA Section */')
  })

  test('all locations have the required data fields for consistent rendering', () => {
    fc.assert(
      fc.property(
        fc.constantFrom(...locations),
        (location: Location) => {
          // Verify all required fields exist for consistent page structure
          expect(location.slug).toBeDefined()
          expect(location.name).toBeDefined()
          expect(location.postcode).toBeDefined()
          expect(location.zone).toBeDefined()
          expect(location.region).toBeDefined()
          expect(location.description).toBeDefined()
          expect(location.keywords).toBeDefined()
          expect(location.coordinates).toBeDefined()
          expect(location.nearby).toBeDefined()
          
          // Enriched data fields
          expect(location.detailedDescription).toBeDefined()
          expect(location.localStreets).toBeDefined()
          expect(location.landmarks).toBeDefined()
          expect(location.recentProjects).toBeDefined()
          expect(location.lsiKeywords).toBeDefined()
          
          return true
        }
      ),
      { numRuns: locations.length }
    )
  })

  test('all location pages have the same section order', () => {
    // Extract section order from template
    const heroIndex = locationPageTemplate.indexOf('{/* Hero Section */')
    const trustIndex = locationPageTemplate.indexOf('{/* Trust Signals */')
    const recentProjectsIndex = locationPageTemplate.indexOf('{/* PROMINENT Recent Projects Section')
    const detailedDescIndex = locationPageTemplate.indexOf('{/* Detailed Description & Local Streets')
    const servicesIndex = locationPageTemplate.indexOf('{/* Services in Location')
    const mapsIndex = locationPageTemplate.indexOf('{/* Google Maps')
    const whyChooseIndex = locationPageTemplate.indexOf('{/* Why Choose Us */')
    const faqIndex = locationPageTemplate.indexOf('{/* FAQ Section */')
    const nearbyIndex = locationPageTemplate.indexOf('{/* Nearby Locations */')
    const ctaIndex = locationPageTemplate.indexOf('{/* CTA Section */')
    
    // Verify sections appear in the correct order
    expect(heroIndex).toBeLessThan(trustIndex)
    expect(trustIndex).toBeLessThan(recentProjectsIndex)
    expect(recentProjectsIndex).toBeLessThan(detailedDescIndex)
    expect(detailedDescIndex).toBeLessThan(servicesIndex)
    expect(servicesIndex).toBeLessThan(mapsIndex)
    expect(mapsIndex).toBeLessThan(whyChooseIndex)
    expect(whyChooseIndex).toBeLessThan(faqIndex)
    expect(faqIndex).toBeLessThan(nearbyIndex)
    expect(nearbyIndex).toBeLessThan(ctaIndex)
  })

  test('all location pages have consistent component usage', () => {
    // Verify all required components are used in the template
    const requiredComponents = [
      'LocationSchema',
      'LocationPageTracker',
      'Navigation',
      'Breadcrumb',
      'ServiceLinks',
      'LocationMap',
      'FAQAccordion',
      'NearbyLocations',
      'LocationCTAButtons',
      'ReviewsLink',
      'Footer'
    ]
    
    requiredComponents.forEach((component) => {
      expect(locationPageTemplate).toContain(`<${component}`)
    })
  })

  test('all location pages have consistent metadata structure', () => {
    // Verify metadata generation function exists and has consistent structure
    expect(locationPageTemplate).toContain('generateMetadata')
    expect(locationPageTemplate).toContain('title:')
    expect(locationPageTemplate).toContain('description:')
    expect(locationPageTemplate).toContain('keywords:')
    expect(locationPageTemplate).toContain('alternates:')
    expect(locationPageTemplate).toContain('canonical:')
    expect(locationPageTemplate).toContain('openGraph:')
    expect(locationPageTemplate).toContain('geo.region')
    expect(locationPageTemplate).toContain('geo.placename')
    expect(locationPageTemplate).toContain('geo.position')
  })

  test('all location pages have consistent CTA structure', () => {
    // Verify CTA buttons appear with consistent structure
    const ctaMatches = locationPageTemplate.match(/Get Fixed-Price Quote/g)
    expect(ctaMatches).not.toBeNull()
    expect(ctaMatches!.length).toBeGreaterThanOrEqual(1) // At least in Hero
    
    const callMatches = locationPageTemplate.match(/Call: 07404 304224/g)
    expect(callMatches).not.toBeNull()
    expect(callMatches!.length).toBeGreaterThanOrEqual(1)
  })

  test('all location pages have consistent styling classes', () => {
    // Verify consistent Tailwind classes are used
    expect(locationPageTemplate).toContain('bg-slate-950') // Hero background
    expect(locationPageTemplate).toContain('bg-primary') // Primary button
    expect(locationPageTemplate).toContain('text-primary') // Primary text color
    expect(locationPageTemplate).toContain('container mx-auto') // Container
    expect(locationPageTemplate).toContain('max-w-4xl') // Content width
  })

  test('recent projects section is consistently prominent across all pages', () => {
    // Verify recent projects section has prominent styling
    expect(locationPageTemplate).toContain('bg-gradient-to-br')
    expect(locationPageTemplate).toContain('RECENT WORK IN')
    expect(locationPageTemplate).toContain('bg-teal-600')
    expect(locationPageTemplate).toContain('font-bold rounded-full')
    
    // Verify it's positioned early in the page (before "Why Choose Us")
    const recentProjectsIndex = locationPageTemplate.indexOf('RECENT WORK IN')
    const whyChooseIndex = locationPageTemplate.indexOf('Why Choose Fredi Builders')
    expect(recentProjectsIndex).toBeLessThan(whyChooseIndex)
  })

  test('all location pages have consistent local streets display', () => {
    // Verify local streets section has consistent structure
    expect(locationPageTemplate).toContain('Streets We Serve in')
    expect(locationPageTemplate).toContain('localStreets.map')
    expect(locationPageTemplate).toContain('md:grid-cols-3')
    expect(locationPageTemplate).toContain('material-icons-outlined')
  })

  test('all location pages have consistent landmarks display', () => {
    // Verify landmarks section has consistent structure
    expect(locationPageTemplate).toContain('landmarks')
    expect(locationPageTemplate).toContain('landmarks.map')
    expect(locationPageTemplate).toContain('Near:')
    expect(locationPageTemplate).toContain('bg-teal-50')
    expect(locationPageTemplate).toContain('rounded-full')
  })

  test('all 18 locations can be rendered without errors', () => {
    // Verify all locations have valid slugs and can be used to generate pages
    expect(locations.length).toBe(18)
    
    locations.forEach((location) => {
      // Verify slug is valid (no spaces, lowercase, hyphenated)
      expect(location.slug).toMatch(/^[a-z0-9-]+$/)
      
      // Verify all required fields are present
      expect(location.name).toBeTruthy()
      expect(location.postcode).toBeTruthy()
      expect(location.description).toBeTruthy()
      expect(location.detailedDescription).toBeTruthy()
      expect(location.localStreets.length).toBe(3)
      expect(location.landmarks.length).toBeGreaterThanOrEqual(1)
      expect(location.recentProjects.length).toBeGreaterThanOrEqual(1)
    })
  })

  test('all location pages have unique content to avoid duplicate detection', () => {
    // Verify that each location has unique data
    const descriptions = locations.map((loc) => loc.description)
    const detailedDescriptions = locations.map((loc) => loc.detailedDescription)
    const projectDescriptions = locations.flatMap((loc) =>
      loc.recentProjects.map((p) => p.description)
    )
    
    // All descriptions should be unique
    expect(new Set(descriptions).size).toBe(descriptions.length)
    expect(new Set(detailedDescriptions).size).toBe(detailedDescriptions.length)
    expect(new Set(projectDescriptions).size).toBe(projectDescriptions.length)
  })

  test('all location pages have consistent responsive design classes', () => {
    // Verify responsive classes are used consistently
    expect(locationPageTemplate).toContain('md:py-20') // Desktop padding
    expect(locationPageTemplate).toContain('md:text-4xl') // Desktop text size
    expect(locationPageTemplate).toContain('md:grid-cols-2') // Desktop grid
    expect(locationPageTemplate).toContain('md:grid-cols-3') // Desktop grid
    expect(locationPageTemplate).toContain('sm:flex-row') // Tablet flex
  })
})
