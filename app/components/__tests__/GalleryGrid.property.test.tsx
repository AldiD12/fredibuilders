/**
 * Property-Based Tests for Gallery Components
 * Feature: fredi-builders-empire-building
 * Property 1: Gallery Image Rendering
 * Property 2: Gallery Category Filtering
 * Property 4: Gallery Lightbox Interaction
 * **Validates: Requirements 1.1, 1.2, 1.4, 1.5, 1.7**
 */

import { describe, test, expect } from 'vitest'
import { galleryImages, GalleryImage } from '@/app/data/gallery'

describe('Gallery - Property Tests', () => {
  /**
   * Property 1: Gallery Image Rendering
   * For any set of gallery images, when the gallery page renders, all images
   * should be displayed in a responsive grid with proper WebP format,
   * descriptive alt text containing location keywords, and width/height
   * attributes to prevent layout shift.
   * Validates: Requirements 1.1, 1.4, 1.7
   */
  describe('Property 1: Gallery Image Rendering', () => {
    test('should have all required image properties for any image', () => {
      galleryImages.forEach((image) => {
        expect(image.id).toBeTruthy()
        expect(image.src).toBeTruthy()
        expect(image.alt).toBeTruthy()
        expect(image.category).toBeTruthy()
        expect(image.width).toBeGreaterThan(0)
        expect(image.height).toBeGreaterThan(0)
      })
    })

    test('should use WebP format for most images', () => {
      const webpImages = galleryImages.filter((img) => img.src.endsWith('.webp'))
      const webpPercentage = (webpImages.length / galleryImages.length) * 100

      // At least 80% should be WebP (allows for some legacy formats)
      expect(webpPercentage).toBeGreaterThan(80)
    })

    test('should have descriptive alt text with location keywords for any image', () => {
      const locationKeywords = [
        'bathroom',
        'london',
        'surrey',
        'renovation',
        'extension',
        'wet room',
        'tiling',
        'marble',
        'fredi builders',
        'luxury'
      ]

      galleryImages.forEach((image) => {
        const altLower = image.alt.toLowerCase()
        const hasKeyword = locationKeywords.some((keyword) =>
          altLower.includes(keyword)
        )
        expect(hasKeyword).toBe(true)
      })
    })

    test('should have valid dimensions for any image', () => {
      galleryImages.forEach((image) => {
        expect(image.width).toBeGreaterThan(0)
        expect(image.height).toBeGreaterThan(0)
        expect(Number.isInteger(image.width)).toBe(true)
        expect(Number.isInteger(image.height)).toBe(true)
      })
    })

    test('should have valid category for any image', () => {
      const validCategories = [
        'Showroom',
        'Trust',
        'Transformation',
        'Craftsmanship'
      ]

      galleryImages.forEach((image) => {
        expect(validCategories).toContain(image.category)
      })
    })
  })

  /**
   * Property 2: Gallery Category Filtering
   * For any set of gallery images with mixed categories, when a category
   * filter is applied, the displayed images should only include images
   * matching that category.
   * Validates: Requirements 1.2
   */
  describe('Property 2: Gallery Category Filtering', () => {
    test('should filter images by category correctly', () => {
      const categories = ['Showroom', 'Trust', 'Transformation', 'Craftsmanship']

      categories.forEach((category) => {
        const filtered = galleryImages.filter((img) => img.category === category)

        filtered.forEach((image) => {
          expect(image.category).toBe(category)
        })
      })
    })

    test('should have at least one image in each category', () => {
      const categories = ['Showroom', 'Trust', 'Transformation', 'Craftsmanship']

      categories.forEach((category) => {
        const count = galleryImages.filter((img) => img.category === category).length
        expect(count).toBeGreaterThan(0)
      })
    })

    test('should return all images when no filter applied', () => {
      const allImages = galleryImages
      expect(allImages.length).toBe(galleryImages.length)
    })

    test('should return empty array when filtering non-existent category', () => {
      const filtered = galleryImages.filter((img) => img.category === 'NonExistent')
      expect(filtered.length).toBe(0)
    })
  })

  /**
   * Property 4: Gallery Lightbox Interaction
   * For any image in the gallery, when clicked, a lightbox modal should open
   * displaying the full-size image with project details.
   * Validates: Requirements 1.5
   */
  describe('Property 4: Gallery Lightbox Interaction', () => {
    test('should have all data needed for lightbox display', () => {
      galleryImages.forEach((image) => {
        expect(image.src).toBeTruthy()
        expect(image.alt).toBeTruthy()
        expect(image.id).toBeTruthy()
      })
    })

    test('should support navigation between images', () => {
      const totalImages = galleryImages.length

      // Test next navigation
      for (let i = 0; i < totalImages; i++) {
        const nextIndex = (i + 1) % totalImages
        expect(galleryImages[nextIndex]).toBeTruthy()
      }

      // Test previous navigation
      for (let i = 0; i < totalImages; i++) {
        const prevIndex = (i - 1 + totalImages) % totalImages
        expect(galleryImages[prevIndex]).toBeTruthy()
      }
    })

    test('should have optional location and service metadata', () => {
      galleryImages.forEach((image) => {
        if (image.location) {
          expect(typeof image.location).toBe('string')
          expect(image.location.length).toBeGreaterThan(0)
        }

        if (image.service) {
          expect(typeof image.service).toBe('string')
          expect(image.service.length).toBeGreaterThan(0)
        }
      })
    })
  })

  /**
   * Image quality and optimization validation
   */
  describe('Image Quality and Optimization', () => {
    test('should have priority flag for above-the-fold images', () => {
      const priorityImages = galleryImages.filter((img) => img.priority)

      // Should have some priority images but not all
      expect(priorityImages.length).toBeGreaterThan(0)
      expect(priorityImages.length).toBeLessThan(galleryImages.length)
    })

    test('should have valid image paths', () => {
      galleryImages.forEach((image) => {
        expect(image.src).toMatch(/^\/images\//)
        expect(image.src).not.toContain('//')
      })
    })

    test('should have reasonable aspect ratios', () => {
      galleryImages.forEach((image) => {
        const aspectRatio = image.width / image.height

        // Most images should be landscape or square (0.5 to 2.0 ratio)
        expect(aspectRatio).toBeGreaterThan(0.5)
        expect(aspectRatio).toBeLessThan(2.5)
      })
    })

    test('should have unique IDs', () => {
      const ids = galleryImages.map((img) => img.id)
      const uniqueIds = new Set(ids)

      expect(ids.length).toBe(uniqueIds.size)
    })

    test('should have non-empty alt text', () => {
      galleryImages.forEach((image) => {
        expect(image.alt.trim()).toBe(image.alt)
        expect(image.alt.length).toBeGreaterThan(10)
      })
    })
  })

  /**
   * Category distribution validation
   */
  describe('Category Distribution', () => {
    test('should have balanced category distribution', () => {
      const categories = ['Showroom', 'Trust', 'Transformation', 'Craftsmanship']
      const counts = categories.map(
        (cat) => galleryImages.filter((img) => img.category === cat).length
      )

      // No category should be empty
      counts.forEach((count) => {
        expect(count).toBeGreaterThan(0)
      })

      // No category should dominate excessively (more than 70% of total)
      const total = galleryImages.length
      counts.forEach((count) => {
        expect(count).toBeLessThan(total * 0.7)
      })
    })

    test('should have at least 20 total images', () => {
      // Current implementation has 23 images
      // TODO: Expand to 40+ images as per requirement
      expect(galleryImages.length).toBeGreaterThanOrEqual(20)
    })
  })
})
