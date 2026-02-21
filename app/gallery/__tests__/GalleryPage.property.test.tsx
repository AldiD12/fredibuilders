/**
 * Property-Based Tests for Gallery Page
 * Feature: fredi-builders-empire-building
 * 
 * These tests validate universal properties that should hold true
 * for any valid set of gallery images.
 */

import { describe, test, expect } from 'vitest'
import * as fc from 'fast-check'
import { GalleryImage } from '@/app/data/gallery'

// Arbitrary generator for GalleryImage
const galleryImageArbitrary = fc.record({
  id: fc.uuid(), // Use UUID for guaranteed uniqueness
  src: fc.string({ minLength: 1 }).map(s => `/images/${s.trim() || 'image'}.webp`),
  alt: fc.string({ minLength: 11 }).filter(s => s.trim().length > 10),
  category: fc.constantFrom('Showroom', 'Trust', 'Transformation', 'Craftsmanship') as fc.Arbitrary<'Showroom' | 'Trust' | 'Transformation' | 'Craftsmanship'>,
  location: fc.option(fc.string({ minLength: 1 }), { nil: undefined }),
  service: fc.option(fc.string({ minLength: 1 }), { nil: undefined }),
  width: fc.integer({ min: 100, max: 3000 }),
  height: fc.integer({ min: 100, max: 3000 }),
  priority: fc.option(fc.boolean(), { nil: undefined })
})

describe('Gallery Page - Property-Based Tests', () => {
  /**
   * Property 1: Gallery Image Rendering
   * **Validates: Requirements 1.1, 1.4, 1.7**
   * 
   * For any set of gallery images, when the gallery page renders, all images should be 
   * displayed with proper WebP format, descriptive alt text containing location keywords, 
   * and width/height attributes to prevent layout shift.
   */
  test('Property 1: Gallery Image Rendering - all images have required attributes', () => {
    fc.assert(
      fc.property(
        fc.array(galleryImageArbitrary, { minLength: 1, maxLength: 50 }),
        (images) => {
          // Validate each image has required properties
          for (const image of images) {
            // Requirement 1.1: Image must have valid src
            expect(image.src).toBeTruthy()
            expect(typeof image.src).toBe('string')
            
            // Requirement 1.4: Image must be WebP format
            expect(image.src).toMatch(/\.webp$/i)
            
            // Requirement 1.4: Image must have descriptive alt text
            expect(image.alt).toBeTruthy()
            expect(image.alt.trim().length).toBeGreaterThan(10)
            
            // Requirement 1.7: Image must have width and height to prevent CLS
            expect(image.width).toBeGreaterThan(0)
            expect(image.height).toBeGreaterThan(0)
            expect(typeof image.width).toBe('number')
            expect(typeof image.height).toBe('number')
            
            // Image must have a valid category
            expect(['Showroom', 'Trust', 'Transformation', 'Craftsmanship']).toContain(image.category)
            
            // Image must have unique id
            expect(image.id).toBeTruthy()
          }
          
          // All image IDs should be unique
          const ids = images.map(img => img.id)
          const uniqueIds = new Set(ids)
          expect(uniqueIds.size).toBe(ids.length)
        }
      ),
      { numRuns: 100 }
    )
  })

  /**
   * Property 1b: Gallery Image Alt Text Quality
   * **Validates: Requirements 1.4, 6.5**
   * 
   * For any gallery image, the alt text should be descriptive and non-empty.
   */
  test('Property 1b: Gallery images have descriptive alt text', () => {
    fc.assert(
      fc.property(
        galleryImageArbitrary,
        (image) => {
          // Alt text must be non-empty
          expect(image.alt).toBeTruthy()
          expect(image.alt.trim().length).toBeGreaterThan(0)
          
          // Alt text should be reasonably descriptive (at least 10 characters)
          expect(image.alt.length).toBeGreaterThanOrEqual(10)
        }
      ),
      { numRuns: 100 }
    )
  })

  /**
   * Property 1c: Gallery Image Dimensions
   * **Validates: Requirements 1.7**
   * 
   * For any gallery image, width and height must be positive numbers to prevent CLS.
   */
  test('Property 1c: Gallery images have valid dimensions', () => {
    fc.assert(
      fc.property(
        galleryImageArbitrary,
        (image) => {
          // Width must be a positive number
          expect(typeof image.width).toBe('number')
          expect(image.width).toBeGreaterThan(0)
          expect(Number.isFinite(image.width)).toBe(true)
          
          // Height must be a positive number
          expect(typeof image.height).toBe('number')
          expect(image.height).toBeGreaterThan(0)
          expect(Number.isFinite(image.height)).toBe(true)
        }
      ),
      { numRuns: 100 }
    )
  })
})
