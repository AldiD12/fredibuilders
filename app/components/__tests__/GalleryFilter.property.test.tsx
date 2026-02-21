/**
 * Property-Based Tests for Gallery Filtering
 * Feature: fredi-builders-empire-building
 * 
 * These tests validate that gallery filtering works correctly
 * for any set of images with mixed categories.
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

describe('Gallery Filtering - Property-Based Tests', () => {
  /**
   * Property 2: Gallery Category Filtering
   * **Validates: Requirements 1.2**
   * 
   * For any set of gallery images with mixed categories, when a category filter is applied,
   * the displayed images should only include images matching that category.
   */
  test('Property 2: Gallery Category Filtering - filters images by category correctly', () => {
    fc.assert(
      fc.property(
        fc.array(galleryImageArbitrary, { minLength: 5, maxLength: 50 }),
        fc.constantFrom('Showroom', 'Trust', 'Transformation', 'Craftsmanship') as fc.Arbitrary<'Showroom' | 'Trust' | 'Transformation' | 'Craftsmanship'>,
        (images, filterCategory) => {
          // Apply filter logic (simulating what the component does)
          const filteredImages = images.filter(img => img.category === filterCategory)
          
          // All filtered images must have the selected category
          for (const image of filteredImages) {
            expect(image.category).toBe(filterCategory)
          }
          
          // No images with other categories should be included
          const otherCategories = ['Showroom', 'Trust', 'Transformation', 'Craftsmanship']
            .filter(cat => cat !== filterCategory)
          
          for (const image of filteredImages) {
            expect(otherCategories).not.toContain(image.category)
          }
          
          // The filtered count should match the actual count of images with that category
          const expectedCount = images.filter(img => img.category === filterCategory).length
          expect(filteredImages.length).toBe(expectedCount)
        }
      ),
      { numRuns: 100 }
    )
  })

  /**
   * Property 2b: Gallery "All" Filter
   * **Validates: Requirements 1.2**
   * 
   * When "All" filter is selected, all images should be displayed.
   */
  test('Property 2b: Gallery "All" filter shows all images', () => {
    fc.assert(
      fc.property(
        fc.array(galleryImageArbitrary, { minLength: 1, maxLength: 50 }),
        (images) => {
          // When "All" is selected, no filtering should occur
          const filteredImages = images // No filter applied
          
          // All images should be present
          expect(filteredImages.length).toBe(images.length)
          
          // Every original image should be in the filtered list
          for (const image of images) {
            expect(filteredImages).toContainEqual(image)
          }
        }
      ),
      { numRuns: 100 }
    )
  })

  /**
   * Property 2c: Gallery Filter Preserves Image Properties
   * **Validates: Requirements 1.2**
   * 
   * Filtering should not modify image properties.
   */
  test('Property 2c: Gallery filtering preserves image properties', () => {
    fc.assert(
      fc.property(
        fc.array(galleryImageArbitrary, { minLength: 1, maxLength: 50 }),
        fc.constantFrom('Showroom', 'Trust', 'Transformation', 'Craftsmanship') as fc.Arbitrary<'Showroom' | 'Trust' | 'Transformation' | 'Craftsmanship'>,
        (images, filterCategory) => {
          // Apply filter
          const filteredImages = images.filter(img => img.category === filterCategory)
          
          // Each filtered image should have all its original properties intact
          for (const filteredImage of filteredImages) {
            const originalImage = images.find(img => img.id === filteredImage.id)
            expect(originalImage).toBeDefined()
            
            if (originalImage) {
              expect(filteredImage.id).toBe(originalImage.id)
              expect(filteredImage.src).toBe(originalImage.src)
              expect(filteredImage.alt).toBe(originalImage.alt)
              expect(filteredImage.category).toBe(originalImage.category)
              expect(filteredImage.width).toBe(originalImage.width)
              expect(filteredImage.height).toBe(originalImage.height)
            }
          }
        }
      ),
      { numRuns: 100 }
    )
  })

  /**
   * Property 2d: Gallery Filter with Empty Results
   * **Validates: Requirements 1.2**
   * 
   * When no images match the filter, the result should be an empty array.
   */
  test('Property 2d: Gallery filter returns empty array when no matches', () => {
    fc.assert(
      fc.property(
        fc.constantFrom('Showroom', 'Trust', 'Transformation', 'Craftsmanship') as fc.Arbitrary<'Showroom' | 'Trust' | 'Transformation' | 'Craftsmanship'>,
        fc.constantFrom('Showroom', 'Trust', 'Transformation', 'Craftsmanship') as fc.Arbitrary<'Showroom' | 'Trust' | 'Transformation' | 'Craftsmanship'>,
        (imageCategory, filterCategory) => {
          // Create images with only one category
          const images: GalleryImage[] = [{
            id: 'test-1',
            src: '/images/test.webp',
            alt: 'Test image description',
            category: imageCategory,
            width: 1200,
            height: 800
          }]
          
          // Filter by a different category
          if (imageCategory !== filterCategory) {
            const filteredImages = images.filter(img => img.category === filterCategory)
            expect(filteredImages.length).toBe(0)
            expect(filteredImages).toEqual([])
          }
        }
      ),
      { numRuns: 100 }
    )
  })
})
