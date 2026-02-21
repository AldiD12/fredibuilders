/**
 * Property Tests: Image SEO
 * Feature: fredi-builders-empire-building, Properties 25 & 26
 * 
 * Property 25: Image Filename Keywords
 * For any image served by the system, the filename should contain at least one
 * location or service keyword.
 * 
 * Property 26: Image Alt Text Keywords
 * For any image rendered, the alt text should be non-empty and contain at least
 * one location-specific keyword.
 * 
 * Validates: Requirements 6.4, 6.5
 */

import { describe, test, expect } from 'vitest'
import * as fc from 'fast-check'
import { galleryImages, type GalleryImage } from '@/app/data/gallery'

// Common location keywords that should appear in filenames or alt text
const locationKeywords = [
  'london',
  'surrey',
  'streatham',
  'esher',
  'dulwich',
  'wimbledon',
  'croydon',
  'sutton',
  'epsom',
  'carshalton',
  'wallington',
  'mitcham',
  'morden',
  'thornton heath',
  'cheam',
  'purley',
  'south london',
  'sw16',
  'cr7',
  'cr8',
  'se21',
  'kt22'
]

// Common service keywords that should appear in filenames or alt text
const serviceKeywords = [
  'bathroom',
  'renovation',
  'wet room',
  'shower',
  'tiling',
  'tiles',
  'vanity',
  'extension',
  'building',
  'construction',
  'refurbishment',
  'luxury',
  'modern',
  'marble',
  'porcelain',
  'walk-in',
  'installation',
  'fitting',
  'fitters',
  'specialists',
  'design',
  'roof',
  'garden room',
  'van',
  'team',
  'branded',
  'fredi',
  'builders'
]

// Function to check if a string contains any keyword from a list
function containsKeyword(text: string, keywords: string[]): boolean {
  const lowerText = text.toLowerCase()
  return keywords.some(keyword => lowerText.includes(keyword.toLowerCase()))
}

// Function to extract filename from path
function getFilename(path: string): string {
  return path.split('/').pop() || ''
}

describe('Property 25: Image Filename Keywords', () => {
  test('all gallery images have filenames with location or service keywords', () => {
    fc.assert(
      fc.property(
        fc.constantFrom(...galleryImages),
        (image: GalleryImage) => {
          const filename = getFilename(image.src)
          
          // Check if filename contains location or service keywords
          const hasLocationKeyword = containsKeyword(filename, locationKeywords)
          const hasServiceKeyword = containsKeyword(filename, serviceKeywords)
          
          expect(
            hasLocationKeyword || hasServiceKeyword,
            `Image ${image.id} filename "${filename}" should contain at least one location or service keyword`
          ).toBe(true)
          
          return true
        }
      ),
      { numRuns: galleryImages.length }
    )
  })

  test('image filenames use descriptive names instead of generic names', () => {
    const genericPatterns = [
      /^img\d+/i,
      /^image\d+/i,
      /^photo\d+/i,
      /^pic\d+/i,
      /^dsc\d+/i,
      /^screenshot/i
    ]
    
    fc.assert(
      fc.property(
        fc.constantFrom(...galleryImages),
        (image: GalleryImage) => {
          const filename = getFilename(image.src)
          
          // Check that filename doesn't match generic patterns
          const isGeneric = genericPatterns.some(pattern => pattern.test(filename))
          
          expect(
            !isGeneric,
            `Image ${image.id} filename "${filename}" should not use generic naming patterns`
          ).toBe(true)
          
          return true
        }
      ),
      { numRuns: galleryImages.length }
    )
  })

  test('image filenames use hyphens for word separation', () => {
    fc.assert(
      fc.property(
        fc.constantFrom(...galleryImages),
        (image: GalleryImage) => {
          const filename = getFilename(image.src)
          const nameWithoutExtension = filename.replace(/\.(webp|jpeg|jpg|png)$/i, '')
          
          // If filename has multiple words, they should be separated by hyphens
          if (nameWithoutExtension.length > 10) {
            expect(
              nameWithoutExtension.includes('-') || nameWithoutExtension.includes('_'),
              `Image ${image.id} filename "${filename}" should use hyphens or underscores for word separation`
            ).toBe(true)
          }
          
          return true
        }
      ),
      { numRuns: galleryImages.length }
    )
  })

  test('image filenames are lowercase', () => {
    fc.assert(
      fc.property(
        fc.constantFrom(...galleryImages),
        (image: GalleryImage) => {
          const filename = getFilename(image.src)
          const nameWithoutExtension = filename.replace(/\.(webp|jpeg|jpg|png)$/i, '')
          
          // Filename should be lowercase (excluding extension)
          expect(
            nameWithoutExtension === nameWithoutExtension.toLowerCase(),
            `Image ${image.id} filename "${filename}" should be lowercase`
          ).toBe(true)
          
          return true
        }
      ),
      { numRuns: galleryImages.length }
    )
  })

  test('image filenames have appropriate file extensions', () => {
    const validExtensions = ['.webp', '.jpeg', '.jpg', '.png']
    
    fc.assert(
      fc.property(
        fc.constantFrom(...galleryImages),
        (image: GalleryImage) => {
          const filename = getFilename(image.src)
          const hasValidExtension = validExtensions.some(ext => 
            filename.toLowerCase().endsWith(ext)
          )
          
          expect(
            hasValidExtension,
            `Image ${image.id} filename "${filename}" should have a valid image extension`
          ).toBe(true)
          
          return true
        }
      ),
      { numRuns: galleryImages.length }
    )
  })
})

describe('Property 26: Image Alt Text Keywords', () => {
  test('all gallery images have non-empty alt text', () => {
    fc.assert(
      fc.property(
        fc.constantFrom(...galleryImages),
        (image: GalleryImage) => {
          expect(
            image.alt,
            `Image ${image.id} should have alt text`
          ).toBeDefined()
          
          expect(
            image.alt.trim().length,
            `Image ${image.id} alt text should not be empty`
          ).toBeGreaterThan(0)
          
          return true
        }
      ),
      { numRuns: galleryImages.length }
    )
  })

  test('all gallery images have alt text with location keywords', () => {
    fc.assert(
      fc.property(
        fc.constantFrom(...galleryImages),
        (image: GalleryImage) => {
          const hasLocationKeyword = containsKeyword(image.alt, locationKeywords)
          
          expect(
            hasLocationKeyword,
            `Image ${image.id} alt text "${image.alt}" should contain at least one location keyword`
          ).toBe(true)
          
          return true
        }
      ),
      { numRuns: galleryImages.length }
    )
  })

  test('all gallery images have alt text with service keywords', () => {
    fc.assert(
      fc.property(
        fc.constantFrom(...galleryImages),
        (image: GalleryImage) => {
          const hasServiceKeyword = containsKeyword(image.alt, serviceKeywords)
          
          expect(
            hasServiceKeyword,
            `Image ${image.id} alt text "${image.alt}" should contain at least one service keyword`
          ).toBe(true)
          
          return true
        }
      ),
      { numRuns: galleryImages.length }
    )
  })

  test('alt text is descriptive and not just filename', () => {
    fc.assert(
      fc.property(
        fc.constantFrom(...galleryImages),
        (image: GalleryImage) => {
          const filename = getFilename(image.src).replace(/\.(webp|jpeg|jpg|png)$/i, '')
          const altTextLower = image.alt.toLowerCase()
          const filenameLower = filename.toLowerCase().replace(/-/g, ' ')
          
          // Alt text should be more descriptive than just the filename
          expect(
            altTextLower !== filenameLower,
            `Image ${image.id} alt text should be more descriptive than just the filename`
          ).toBe(true)
          
          return true
        }
      ),
      { numRuns: galleryImages.length }
    )
  })

  test('alt text has reasonable length (not too short, not too long)', () => {
    fc.assert(
      fc.property(
        fc.constantFrom(...galleryImages),
        (image: GalleryImage) => {
          const altLength = image.alt.length
          
          // Alt text should be between 20 and 150 characters
          expect(
            altLength,
            `Image ${image.id} alt text should be at least 20 characters (current: ${altLength})`
          ).toBeGreaterThanOrEqual(20)
          
          expect(
            altLength,
            `Image ${image.id} alt text should be at most 150 characters (current: ${altLength})`
          ).toBeLessThanOrEqual(150)
          
          return true
        }
      ),
      { numRuns: galleryImages.length }
    )
  })

  test('alt text does not start with "image of" or "picture of"', () => {
    const redundantPrefixes = ['image of', 'picture of', 'photo of', 'a picture of', 'an image of']
    
    fc.assert(
      fc.property(
        fc.constantFrom(...galleryImages),
        (image: GalleryImage) => {
          const altTextLower = image.alt.toLowerCase()
          const hasRedundantPrefix = redundantPrefixes.some(prefix => 
            altTextLower.startsWith(prefix)
          )
          
          expect(
            !hasRedundantPrefix,
            `Image ${image.id} alt text should not start with redundant prefixes like "image of"`
          ).toBe(true)
          
          return true
        }
      ),
      { numRuns: galleryImages.length }
    )
  })

  test('images with location metadata have matching location in alt text', () => {
    fc.assert(
      fc.property(
        fc.constantFrom(...galleryImages.filter(img => img.location)),
        (image: GalleryImage) => {
          if (image.location) {
            const altTextLower = image.alt.toLowerCase()
            const locationLower = image.location.toLowerCase()
            
            expect(
              altTextLower.includes(locationLower),
              `Image ${image.id} with location "${image.location}" should have that location in alt text`
            ).toBe(true)
          }
          
          return true
        }
      ),
      { numRuns: galleryImages.filter(img => img.location).length }
    )
  })

  test('images with service metadata have related service keywords in alt text', () => {
    fc.assert(
      fc.property(
        fc.constantFrom(...galleryImages.filter(img => img.service)),
        (image: GalleryImage) => {
          if (image.service) {
            const altTextLower = image.alt.toLowerCase()
            const serviceLower = image.service.toLowerCase()
            
            // Alt text should contain the service or related keywords
            const hasServiceMatch = altTextLower.includes(serviceLower) || 
                                   containsKeyword(image.alt, serviceKeywords)
            
            expect(
              hasServiceMatch,
              `Image ${image.id} with service "${image.service}" should have related keywords in alt text`
            ).toBe(true)
          }
          
          return true
        }
      ),
      { numRuns: galleryImages.filter(img => img.service).length }
    )
  })

  test('all images have both location and service metadata defined', () => {
    fc.assert(
      fc.property(
        fc.constantFrom(...galleryImages),
        (image: GalleryImage) => {
          expect(
            image.location,
            `Image ${image.id} should have location metadata`
          ).toBeDefined()
          
          expect(
            image.service,
            `Image ${image.id} should have service metadata`
          ).toBeDefined()
          
          return true
        }
      ),
      { numRuns: galleryImages.length }
    )
  })

  test('alt text uses proper capitalization', () => {
    fc.assert(
      fc.property(
        fc.constantFrom(...galleryImages),
        (image: GalleryImage) => {
          // Alt text should start with a capital letter
          expect(
            /^[A-Z]/.test(image.alt),
            `Image ${image.id} alt text should start with a capital letter`
          ).toBe(true)
          
          return true
        }
      ),
      { numRuns: galleryImages.length }
    )
  })
})
