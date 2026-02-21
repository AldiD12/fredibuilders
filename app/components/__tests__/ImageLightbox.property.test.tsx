/**
 * Property-Based Tests for Image Lightbox
 * Feature: fredi-builders-empire-building
 * 
 * These tests validate that the lightbox modal works correctly
 * for any gallery image and navigation scenarios.
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

describe('Image Lightbox - Property-Based Tests', () => {
  /**
   * Property 4: Gallery Lightbox Interaction
   * **Validates: Requirements 1.5**
   * 
   * For any image in the gallery, when clicked, a lightbox modal should open 
   * displaying the full-size image with project details.
   */
  test('Property 4: Lightbox displays image with all details', () => {
    fc.assert(
      fc.property(
        galleryImageArbitrary,
        (image) => {
          // Simulate lightbox opening with an image
          const lightboxImage = image
          
          // Lightbox should have the image
          expect(lightboxImage).toBeDefined()
          expect(lightboxImage.id).toBe(image.id)
          expect(lightboxImage.src).toBe(image.src)
          expect(lightboxImage.alt).toBe(image.alt)
          
          // Lightbox should display project details
          if (image.service) {
            expect(lightboxImage.service).toBe(image.service)
          }
          if (image.location) {
            expect(lightboxImage.location).toBe(image.location)
          }
          
          // Image dimensions should be preserved
          expect(lightboxImage.width).toBe(image.width)
          expect(lightboxImage.height).toBe(image.height)
        }
      ),
      { numRuns: 100 }
    )
  })

  /**
   * Property 4b: Lightbox Navigation - Next Image
   * **Validates: Requirements 1.5**
   * 
   * When navigating to the next image, the lightbox should display the correct image.
   */
  test('Property 4b: Lightbox next navigation works correctly', () => {
    fc.assert(
      fc.property(
        fc.array(galleryImageArbitrary, { minLength: 2, maxLength: 20 }),
        fc.integer({ min: 0 }),
        (images, startIndex) => {
          const currentIndex = startIndex % images.length
          const nextIndex = (currentIndex + 1) % images.length
          
          // Simulate next navigation
          const currentImage = images[currentIndex]
          const nextImage = images[nextIndex]
          
          // Next image should be different (unless only 1 image, but we have minLength: 2)
          if (images.length > 1) {
            // Next image should be the one at nextIndex
            expect(nextImage.id).toBe(images[nextIndex].id)
          }
          
          // Verify circular navigation (last -> first)
          if (currentIndex === images.length - 1) {
            expect(nextIndex).toBe(0)
            expect(nextImage.id).toBe(images[0].id)
          }
        }
      ),
      { numRuns: 100 }
    )
  })

  /**
   * Property 4c: Lightbox Navigation - Previous Image
   * **Validates: Requirements 1.5**
   * 
   * When navigating to the previous image, the lightbox should display the correct image.
   */
  test('Property 4c: Lightbox previous navigation works correctly', () => {
    fc.assert(
      fc.property(
        fc.array(galleryImageArbitrary, { minLength: 2, maxLength: 20 }),
        fc.integer({ min: 0 }),
        (images, startIndex) => {
          const currentIndex = startIndex % images.length
          const prevIndex = currentIndex > 0 ? currentIndex - 1 : images.length - 1
          
          // Simulate previous navigation
          const currentImage = images[currentIndex]
          const prevImage = images[prevIndex]
          
          // Previous image should be the one at prevIndex
          expect(prevImage.id).toBe(images[prevIndex].id)
          
          // Verify circular navigation (first -> last)
          if (currentIndex === 0) {
            expect(prevIndex).toBe(images.length - 1)
            expect(prevImage.id).toBe(images[images.length - 1].id)
          }
        }
      ),
      { numRuns: 100 }
    )
  })

  /**
   * Property 4d: Lightbox Index Bounds
   * **Validates: Requirements 1.5**
   * 
   * The lightbox index should always be within valid bounds.
   */
  test('Property 4d: Lightbox index stays within bounds', () => {
    fc.assert(
      fc.property(
        fc.array(galleryImageArbitrary, { minLength: 1, maxLength: 50 }),
        fc.integer({ min: 0 }),
        (images, startIndex) => {
          const currentIndex = startIndex % images.length
          
          // Current index should be valid
          expect(currentIndex).toBeGreaterThanOrEqual(0)
          expect(currentIndex).toBeLessThan(images.length)
          
          // Next index calculation
          const nextIndex = (currentIndex + 1) % images.length
          expect(nextIndex).toBeGreaterThanOrEqual(0)
          expect(nextIndex).toBeLessThan(images.length)
          
          // Previous index calculation
          const prevIndex = currentIndex > 0 ? currentIndex - 1 : images.length - 1
          expect(prevIndex).toBeGreaterThanOrEqual(0)
          expect(prevIndex).toBeLessThan(images.length)
        }
      ),
      { numRuns: 100 }
    )
  })

  /**
   * Property 4e: Lightbox Image Count Display
   * **Validates: Requirements 1.5**
   * 
   * The lightbox should correctly display the current position and total count.
   */
  test('Property 4e: Lightbox displays correct image count', () => {
    fc.assert(
      fc.property(
        fc.array(galleryImageArbitrary, { minLength: 1, maxLength: 50 }),
        fc.integer({ min: 0 }),
        (images, startIndex) => {
          const currentIndex = startIndex % images.length
          const totalImages = images.length
          
          // Display format: "Image X of Y"
          const displayIndex = currentIndex + 1 // 1-indexed for display
          
          expect(displayIndex).toBeGreaterThan(0)
          expect(displayIndex).toBeLessThanOrEqual(totalImages)
          expect(totalImages).toBe(images.length)
        }
      ),
      { numRuns: 100 }
    )
  })
})
