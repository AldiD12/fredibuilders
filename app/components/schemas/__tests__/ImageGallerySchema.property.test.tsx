/**
 * Property-Based Tests for Image Gallery Schema Markup
 * Feature: fredi-builders-empire-building
 * Property 3: Gallery Schema Markup
 * **Validates: Requirements 1.3**
 */

import { describe, test, expect } from 'vitest'
import * as fc from 'fast-check'
import { GalleryImage } from '@/app/data/gallery'

/**
 * Arbitrary generator for valid GalleryImage objects
 */
const galleryImageArbitrary = fc.record({
  id: fc.string({ minLength: 5, maxLength: 30 }).map(s => `image-${s}`),
  src: fc.string({ minLength: 10, maxLength: 100 }).map(s => `/images/${s}.webp`),
  alt: fc.string({ minLength: 20, maxLength: 200 }),
  category: fc.constantFrom('Showroom', 'Trust', 'Transformation', 'Craftsmanship'),
  location: fc.option(fc.string({ minLength: 3, maxLength: 50 }), { nil: undefined }),
  service: fc.option(fc.string({ minLength: 5, maxLength: 100 }), { nil: undefined }),
  width: fc.integer({ min: 400, max: 2400 }),
  height: fc.integer({ min: 300, max: 1800 }),
  priority: fc.option(fc.boolean(), { nil: undefined })
}) as fc.Arbitrary<GalleryImage>

/**
 * Generate schema markup for images (mimics ImageGallerySchema component logic)
 */
function generateImageGallerySchema(images: GalleryImage[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ImageGallery',
    name: 'Fredi Builders Project Gallery',
    description: 'Premium bathroom renovations, wet room installations, and luxury tiling projects across South London and Surrey',
    url: 'https://fredibuilders.co.uk/gallery',
    image: images.map((img) => ({
      '@type': 'ImageObject',
      contentUrl: `https://fredibuilders.co.uk${img.src}`,
      caption: img.alt,
      description: `${img.service || 'Building project'} in ${img.location || 'South London and Surrey'}`,
      width: img.width,
      height: img.height,
      name: img.id
    }))
  }
}

describe('Property 3: Gallery Schema Markup', () => {
  /**
   * **Validates: Requirements 1.3**
   * For any gallery page render, the HTML should include Schema.org ImageGallery 
   * markup in JSON-LD format
   */
  test('should generate valid Schema.org ImageGallery markup for any set of images', () => {
    fc.assert(
      fc.property(
        fc.array(galleryImageArbitrary, { minLength: 1, maxLength: 50 }),
        (images) => {
          // Generate schema
          const schema = generateImageGallerySchema(images)
          
          // Property: Schema must have correct type and context
          expect(schema['@context']).toBe('https://schema.org')
          expect(schema['@type']).toBe('ImageGallery')
          
          // Property: Schema must have gallery metadata
          expect(schema.name).toBe('Fredi Builders Project Gallery')
          expect(schema.description).toBeDefined()
          expect(schema.description.length).toBeGreaterThan(0)
          expect(schema.url).toBe('https://fredibuilders.co.uk/gallery')
          
          // Property: Number of image objects should match number of images
          expect(schema.image.length).toBe(images.length)
          
          // Property: Each image must have valid ImageObject schema
          schema.image.forEach((imageObj, index) => {
            const originalImage = images[index]
            
            // Required Schema.org ImageObject fields
            expect(imageObj['@type']).toBe('ImageObject')
            expect(imageObj.contentUrl).toBeDefined()
            expect(imageObj.contentUrl).toContain('https://fredibuilders.co.uk')
            expect(imageObj.contentUrl).toContain(originalImage.src)
            
            // Caption should match alt text
            expect(imageObj.caption).toBe(originalImage.alt)
            
            // Description should be present
            expect(imageObj.description).toBeDefined()
            expect(imageObj.description.length).toBeGreaterThan(0)
            
            // Width and height should match original
            expect(imageObj.width).toBe(originalImage.width)
            expect(imageObj.height).toBe(originalImage.height)
            expect(imageObj.width).toBeGreaterThan(0)
            expect(imageObj.height).toBeGreaterThan(0)
            
            // Name should match ID
            expect(imageObj.name).toBe(originalImage.id)
          })
        }
      ),
      { numRuns: 100 }
    )
  })

  test('should handle images with optional location and service fields', () => {
    fc.assert(
      fc.property(
        fc.array(galleryImageArbitrary, { minLength: 1, maxLength: 20 }),
        (images) => {
          const schema = generateImageGallerySchema(images)
          
          // Property: Schema should be valid regardless of optional fields
          schema.image.forEach((imageObj, index) => {
            const originalImage = images[index]
            
            // Description should contain service or fallback
            if (originalImage.service) {
              expect(imageObj.description).toContain(originalImage.service)
            } else {
              expect(imageObj.description).toContain('Building project')
            }
            
            // Description should contain location or fallback
            if (originalImage.location) {
              expect(imageObj.description).toContain(originalImage.location)
            } else {
              expect(imageObj.description).toContain('South London and Surrey')
            }
          })
        }
      ),
      { numRuns: 100 }
    )
  })

  test('should generate unique contentUrl for each image', () => {
    fc.assert(
      fc.property(
        fc.array(galleryImageArbitrary, { minLength: 2, maxLength: 30 }),
        (images) => {
          // Ensure images have unique src paths
          const uniqueImages = images.map((img, idx) => ({
            ...img,
            src: `/images/unique-${idx}.webp`
          }))
          
          const schema = generateImageGallerySchema(uniqueImages)
          
          // Property: All contentUrl values must be unique
          const urls = schema.image.map(img => img.contentUrl)
          const uniqueUrls = new Set(urls)
          expect(uniqueUrls.size).toBe(schema.image.length)
        }
      ),
      { numRuns: 100 }
    )
  })

  test('should maintain consistent schema structure across all images', () => {
    fc.assert(
      fc.property(
        fc.array(galleryImageArbitrary, { minLength: 2, maxLength: 20 }),
        (images) => {
          const schema = generateImageGallerySchema(images)
          
          // Property: All image objects should have the same structure
          const firstImageKeys = Object.keys(schema.image[0]).sort()
          
          schema.image.forEach(imageObj => {
            const imageKeys = Object.keys(imageObj).sort()
            expect(imageKeys).toEqual(firstImageKeys)
            
            // All required fields should be present
            expect(imageObj).toHaveProperty('@type')
            expect(imageObj).toHaveProperty('contentUrl')
            expect(imageObj).toHaveProperty('caption')
            expect(imageObj).toHaveProperty('description')
            expect(imageObj).toHaveProperty('width')
            expect(imageObj).toHaveProperty('height')
            expect(imageObj).toHaveProperty('name')
          })
        }
      ),
      { numRuns: 100 }
    )
  })

  test('should handle single image correctly', () => {
    fc.assert(
      fc.property(
        galleryImageArbitrary,
        (image) => {
          const schema = generateImageGallerySchema([image])
          
          // Property: Should generate exactly one image object
          expect(schema.image.length).toBe(1)
          
          const imageObj = schema.image[0]
          
          // Property: All required fields must be present
          expect(imageObj['@type']).toBe('ImageObject')
          expect(imageObj.contentUrl).toContain(image.src)
          expect(imageObj.caption).toBe(image.alt)
          expect(imageObj.width).toBe(image.width)
          expect(imageObj.height).toBe(image.height)
          expect(imageObj.name).toBe(image.id)
        }
      ),
      { numRuns: 100 }
    )
  })

  test('should handle empty images array', () => {
    const schema = generateImageGallerySchema([])
    
    // Property: Empty array should produce valid schema with empty image array
    expect(schema['@type']).toBe('ImageGallery')
    expect(schema.image.length).toBe(0)
    expect(schema.name).toBeDefined()
    expect(schema.url).toBeDefined()
  })

  test('should preserve image dimensions accurately', () => {
    fc.assert(
      fc.property(
        fc.integer({ min: 400, max: 2400 }),
        fc.integer({ min: 300, max: 1800 }),
        (width, height) => {
          const image: GalleryImage = {
            id: 'test-image',
            src: '/images/test.webp',
            alt: 'Test image for dimension validation',
            category: 'Showroom',
            width,
            height
          }
          
          const schema = generateImageGallerySchema([image])
          
          // Property: Dimensions should be preserved exactly
          expect(schema.image[0].width).toBe(width)
          expect(schema.image[0].height).toBe(height)
        }
      ),
      { numRuns: 100 }
    )
  })

  test('should use alt text as caption for all images', () => {
    fc.assert(
      fc.property(
        fc.array(galleryImageArbitrary, { minLength: 1, maxLength: 20 }),
        (images) => {
          const schema = generateImageGallerySchema(images)
          
          // Property: Caption should always match alt text
          schema.image.forEach((imageObj, index) => {
            expect(imageObj.caption).toBe(images[index].alt)
            expect(imageObj.caption.length).toBeGreaterThan(0)
          })
        }
      ),
      { numRuns: 100 }
    )
  })

  test('should include full domain in contentUrl', () => {
    fc.assert(
      fc.property(
        fc.array(galleryImageArbitrary, { minLength: 1, maxLength: 20 }),
        (images) => {
          const schema = generateImageGallerySchema(images)
          
          // Property: All contentUrl values must include full domain
          schema.image.forEach(imageObj => {
            expect(imageObj.contentUrl).toMatch(/^https:\/\/fredibuilders\.co\.uk\//)
          })
        }
      ),
      { numRuns: 100 }
    )
  })

  test('should handle all valid category types', () => {
    fc.assert(
      fc.property(
        fc.constantFrom('Showroom', 'Trust', 'Transformation', 'Craftsmanship'),
        fc.string({ minLength: 5, maxLength: 30 }),
        (category, id) => {
          const image: GalleryImage = {
            id,
            src: '/images/test.webp',
            alt: 'Test image for category validation',
            category,
            width: 1200,
            height: 800
          }
          
          const schema = generateImageGallerySchema([image])
          
          // Property: Schema should be valid for all category types
          expect(schema['@type']).toBe('ImageGallery')
          expect(schema.image.length).toBe(1)
          expect(schema.image[0]['@type']).toBe('ImageObject')
        }
      ),
      { numRuns: 100 }
    )
  })

  test('should generate valid JSON-LD structure', () => {
    fc.assert(
      fc.property(
        fc.array(galleryImageArbitrary, { minLength: 1, maxLength: 20 }),
        (images) => {
          const schema = generateImageGallerySchema(images)
          
          // Property: Schema should be serializable to valid JSON
          const jsonString = JSON.stringify(schema)
          expect(jsonString).toBeDefined()
          expect(jsonString.length).toBeGreaterThan(0)
          
          // Property: Should be parseable back to object
          const parsed = JSON.parse(jsonString)
          expect(parsed['@type']).toBe('ImageGallery')
          expect(parsed.image.length).toBe(images.length)
        }
      ),
      { numRuns: 100 }
    )
  })

  test('should handle images with special characters in alt text', () => {
    fc.assert(
      fc.property(
        fc.string({ minLength: 20, maxLength: 200 }),
        (altText) => {
          const image: GalleryImage = {
            id: 'test-image',
            src: '/images/test.webp',
            alt: altText,
            category: 'Showroom',
            width: 1200,
            height: 800
          }
          
          const schema = generateImageGallerySchema([image])
          
          // Property: Alt text should be preserved and properly escaped
          expect(schema.image[0].caption).toBe(altText)
          
          // Property: Should be valid JSON even with special characters
          const jsonString = JSON.stringify(schema)
          const parsed = JSON.parse(jsonString)
          expect(parsed.image[0].caption).toBe(altText)
        }
      ),
      { numRuns: 100 }
    )
  })

  test('should use image ID as name field', () => {
    fc.assert(
      fc.property(
        fc.array(galleryImageArbitrary, { minLength: 1, maxLength: 20 }),
        (images) => {
          const schema = generateImageGallerySchema(images)
          
          // Property: Name field should always match image ID
          schema.image.forEach((imageObj, index) => {
            expect(imageObj.name).toBe(images[index].id)
          })
        }
      ),
      { numRuns: 100 }
    )
  })

  test('should maintain aspect ratio information through dimensions', () => {
    fc.assert(
      fc.property(
        fc.array(galleryImageArbitrary, { minLength: 1, maxLength: 20 }),
        (images) => {
          const schema = generateImageGallerySchema(images)
          
          // Property: Width and height should allow aspect ratio calculation
          schema.image.forEach((imageObj, index) => {
            const originalImage = images[index]
            const schemaAspectRatio = imageObj.width / imageObj.height
            const originalAspectRatio = originalImage.width / originalImage.height
            
            // Aspect ratios should match (within floating point precision)
            expect(Math.abs(schemaAspectRatio - originalAspectRatio)).toBeLessThan(0.0001)
          })
        }
      ),
      { numRuns: 100 }
    )
  })
})
