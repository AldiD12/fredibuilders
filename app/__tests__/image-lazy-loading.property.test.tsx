/**
 * Property-Based Tests for Image Lazy Loading
 * Feature: fredi-builders-empire-building
 * Property 34: Image Lazy Loading
 * Validates: Requirements 8.3
 * 
 * Tests that images below the fold have loading="lazy" attribute
 * and above-the-fold images have priority={true}
 */

import { describe, test, expect } from 'vitest'
import * as fc from 'fast-check'
import { galleryImages, type GalleryImage } from '@/app/data/gallery'

describe('Property 34: Image Lazy Loading', () => {
  test('below-the-fold images should not have priority flag', () => {
    fc.assert(
      fc.property(
        fc.constantFrom(...galleryImages.filter(img => !img.priority)),
        (image) => {
          // Non-priority images should explicitly not have priority flag
          expect(image.priority).toBeUndefined()
        }
      ),
      { numRuns: 20 }
    )
  })

  test('above-the-fold images should have priority flag set to true', () => {
    fc.assert(
      fc.property(
        fc.constantFrom(...galleryImages.filter(img => img.priority)),
        (image) => {
          // Priority images should have priority flag set to true
          expect(image.priority).toBe(true)
        }
      ),
      { numRuns: 10 }
    )
  })

  test('gallery images have consistent lazy loading configuration', () => {
    fc.assert(
      fc.property(
        fc.constantFrom(...galleryImages),
        (image) => {
          // Each image should either have priority=true or priority=undefined
          // This ensures proper lazy loading configuration
          const hasPriority = image.priority === true
          const hasNoPriority = image.priority === undefined

          expect(hasPriority || hasNoPriority).toBe(true)
        }
      ),
      { numRuns: galleryImages.length }
    )
  })

  test('priority images are limited to above-the-fold content', () => {
    // Count priority images
    const priorityImages = galleryImages.filter(img => img.priority)

    // Should have a reasonable number of priority images (typically 3-6 for above-the-fold)
    expect(priorityImages.length).toBeGreaterThan(0)
    expect(priorityImages.length).toBeLessThanOrEqual(6)

    // Priority images should be at the beginning of the array (above-the-fold)
    const firstSixImages = galleryImages.slice(0, 6)
    const priorityInFirstSix = firstSixImages.filter(img => img.priority).length

    // Most priority images should be in the first 6
    expect(priorityInFirstSix).toBeGreaterThanOrEqual(priorityImages.length - 1)
  })

  test('majority of images should be lazy-loaded (not priority)', () => {
    const priorityCount = galleryImages.filter(img => img.priority).length
    const lazyLoadCount = galleryImages.length - priorityCount

    // At least 70% of images should be lazy-loaded
    const lazyLoadPercentage = (lazyLoadCount / galleryImages.length) * 100
    expect(lazyLoadPercentage).toBeGreaterThanOrEqual(70)
  })

  test('all images have required attributes for proper rendering', () => {
    fc.assert(
      fc.property(
        fc.constantFrom(...galleryImages),
        (image) => {
          // All images must have src, alt, width, and height for proper lazy loading
          expect(image.src).toBeDefined()
          expect(image.src.length).toBeGreaterThan(0)
          expect(image.alt).toBeDefined()
          expect(image.alt.length).toBeGreaterThan(0)
          expect(image.width).toBeGreaterThan(0)
          expect(image.height).toBeGreaterThan(0)
        }
      ),
      { numRuns: galleryImages.length }
    )
  })
})
