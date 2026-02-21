import { describe, test, expect } from 'vitest'
import * as fc from 'fast-check'
import { locations, type Location } from '../locations'

/**
 * Feature: fredi-builders-empire-building
 * Property 16: Location Data Completeness
 * 
 * **Validates: Requirements 4.1, 4.2, 4.3, 4.4, 4.5**
 * 
 * For any location in the locations data file, it should include:
 * - Exactly 3 local streets (Requirement 4.1)
 * - 1-2 landmarks (Requirement 4.2)
 * - A detailed description of 150-200 words (Requirement 4.3)
 * - At least one recent project example (Requirement 4.4)
 * - At least 3 LSI keywords (Requirement 4.5)
 */
describe('Property 16: Location Data Completeness', () => {
  test('all locations have exactly 3 local streets', () => {
    fc.assert(
      fc.property(
        fc.constantFrom(...locations),
        (location: Location) => {
          expect(location.localStreets).toBeDefined()
          expect(Array.isArray(location.localStreets)).toBe(true)
          expect(location.localStreets.length).toBe(3)
          
          // Verify all streets are non-empty strings
          location.localStreets.forEach(street => {
            expect(typeof street).toBe('string')
            expect(street.trim().length).toBeGreaterThan(0)
          })
          
          return true
        }
      ),
      { numRuns: locations.length }
    )
  })

  test('all locations have 1-2 landmarks', () => {
    fc.assert(
      fc.property(
        fc.constantFrom(...locations),
        (location: Location) => {
          expect(location.landmarks).toBeDefined()
          expect(Array.isArray(location.landmarks)).toBe(true)
          expect(location.landmarks.length).toBeGreaterThanOrEqual(1)
          expect(location.landmarks.length).toBeLessThanOrEqual(2)
          
          // Verify all landmarks are non-empty strings
          location.landmarks.forEach(landmark => {
            expect(typeof landmark).toBe('string')
            expect(landmark.trim().length).toBeGreaterThan(0)
          })
          
          return true
        }
      ),
      { numRuns: locations.length }
    )
  })

  test('all locations have detailed description of 150-200 words', () => {
    fc.assert(
      fc.property(
        fc.constantFrom(...locations),
        (location: Location) => {
          expect(location.detailedDescription).toBeDefined()
          expect(typeof location.detailedDescription).toBe('string')
          
          // Count words in the detailed description
          const words = location.detailedDescription.trim().split(/\s+/)
          const wordCount = words.length
          
          expect(wordCount).toBeGreaterThanOrEqual(150)
          expect(wordCount).toBeLessThanOrEqual(200)
          
          return true
        }
      ),
      { numRuns: locations.length }
    )
  })

  test('all locations have at least one recent project example', () => {
    fc.assert(
      fc.property(
        fc.constantFrom(...locations),
        (location: Location) => {
          expect(location.recentProjects).toBeDefined()
          expect(Array.isArray(location.recentProjects)).toBe(true)
          expect(location.recentProjects.length).toBeGreaterThanOrEqual(1)
          
          // Verify each project has required fields
          location.recentProjects.forEach(project => {
            expect(project.description).toBeDefined()
            expect(typeof project.description).toBe('string')
            expect(project.description.trim().length).toBeGreaterThan(0)
            
            expect(project.year).toBeDefined()
            expect(typeof project.year).toBe('number')
            expect(project.year).toBeGreaterThanOrEqual(2020)
            expect(project.year).toBeLessThanOrEqual(new Date().getFullYear())
          })
          
          return true
        }
      ),
      { numRuns: locations.length }
    )
  })

  test('all locations have at least 3 LSI keywords', () => {
    fc.assert(
      fc.property(
        fc.constantFrom(...locations),
        (location: Location) => {
          expect(location.lsiKeywords).toBeDefined()
          expect(Array.isArray(location.lsiKeywords)).toBe(true)
          expect(location.lsiKeywords.length).toBeGreaterThanOrEqual(3)
          
          // Verify all keywords are non-empty strings
          location.lsiKeywords.forEach(keyword => {
            expect(typeof keyword).toBe('string')
            expect(keyword.trim().length).toBeGreaterThan(0)
          })
          
          return true
        }
      ),
      { numRuns: locations.length }
    )
  })

  test('comprehensive location data completeness check', () => {
    // This test validates all requirements together for each location
    fc.assert(
      fc.property(
        fc.constantFrom(...locations),
        (location: Location) => {
          // Requirement 4.1: Exactly 3 local streets
          expect(location.localStreets.length).toBe(3)
          
          // Requirement 4.2: 1-2 landmarks
          expect(location.landmarks.length).toBeGreaterThanOrEqual(1)
          expect(location.landmarks.length).toBeLessThanOrEqual(2)
          
          // Requirement 4.3: Detailed description of 150-200 words
          const wordCount = location.detailedDescription.trim().split(/\s+/).length
          expect(wordCount).toBeGreaterThanOrEqual(150)
          expect(wordCount).toBeLessThanOrEqual(200)
          
          // Requirement 4.4: At least one recent project example
          expect(location.recentProjects.length).toBeGreaterThanOrEqual(1)
          
          // Requirement 4.5: At least 3 LSI keywords
          expect(location.lsiKeywords.length).toBeGreaterThanOrEqual(3)
          
          return true
        }
      ),
      { numRuns: locations.length }
    )
  })

  test('all 18 locations are present and complete', () => {
    // Verify we have exactly 18 locations
    expect(locations.length).toBe(18)
    
    // Verify each location has all enriched data fields
    locations.forEach(location => {
      expect(location.localStreets).toBeDefined()
      expect(location.landmarks).toBeDefined()
      expect(location.detailedDescription).toBeDefined()
      expect(location.recentProjects).toBeDefined()
      expect(location.lsiKeywords).toBeDefined()
    })
  })
})
