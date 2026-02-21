/**
 * Property-Based Tests for WebP Image Format
 * Feature: fredi-builders-empire-building
 * Property 35: WebP Image Format
 * Validates: Requirements 8.5
 * 
 * Tests that all images served by the system are in WebP format
 */

import { describe, test, expect } from 'vitest'
import * as fc from 'fast-check'
import { galleryImages, type GalleryImage } from '@/app/data/gallery'

describe('Property 35: WebP Image Format', () => {
  test('all gallery images should have .webp extension', () => {
    fc.assert(
      fc.property(
        fc.constantFrom(...galleryImages),
        (image) => {
          // Extract file extension from src
          const extension = image.src.split('.').pop()?.toLowerCase()
          
          // Image should have .webp extension
          expect(extension).toBe('webp')
        }
      ),
      { numRuns: galleryImages.length }
    )
  })

  test('image src paths should contain /images/ directory', () => {
    fc.assert(
      fc.property(
        fc.constantFrom(...galleryImages),
        (image) => {
          // All images should be served from /images/ directory
          expect(image.src).toContain('/images/')
        }
      ),
      { numRuns: galleryImages.length }
    )
  })

  test('image src should not contain non-WebP extensions', () => {
    const nonWebPExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.bmp', '.tiff']
    
    fc.assert(
      fc.property(
        fc.constantFrom(...galleryImages),
        (image) => {
          // Image src should not end with non-WebP extensions
          const hasNonWebPExtension = nonWebPExtensions.some(ext => 
            image.src.toLowerCase().endsWith(ext)
          )
          
          expect(hasNonWebPExtension).toBe(false)
        }
      ),
      { numRuns: galleryImages.length }
    )
  })

  test('all images have valid WebP file paths', () => {
    galleryImages.forEach(image => {
      // Check that the image path is a valid WebP file
      expect(image.src).toMatch(/\.webp$/i)
      
      // Check that the path starts with /
      expect(image.src).toMatch(/^\//)
    })
  })

  test('WebP format is used consistently across all categories', () => {
    const categories = ['Showroom', 'Trust', 'Transformation', 'Craftsmanship'] as const
    
    categories.forEach(category => {
      const categoryImages = galleryImages.filter(img => img.category === category)
      
      // All images in each category should be WebP
      categoryImages.forEach(image => {
        expect(image.src).toMatch(/\.webp$/i)
      })
    })
  })

  test('image filenames follow WebP naming convention', () => {
    fc.assert(
      fc.property(
        fc.constantFrom(...galleryImages),
        (image) => {
          // Extract filename from path
          const filename = image.src.split('/').pop() || ''
          
          // Filename should end with .webp
          expect(filename).toMatch(/\.webp$/i)
          
          // Filename should not be empty
          expect(filename.length).toBeGreaterThan(5) // At least "x.webp"
        }
      ),
      { numRuns: galleryImages.length }
    )
  })
})
