/**
 * Unit tests for gallery data
 * 
 * Tests validate:
 * - Data structure completeness
 * - Required fields presence
 * - Category distribution
 * - Helper function correctness
 */

import { 
  galleryImages, 
  getImagesByCategory, 
  getImagesByLocation,
  getImagesByService,
  getPriorityImages,
  galleryStats,
  type GalleryImage 
} from '../gallery'

describe('Gallery Data Structure', () => {
  test('should have at least 20 images', () => {
    expect(galleryImages.length).toBeGreaterThanOrEqual(20)
  })

  test('all images should have required fields', () => {
    galleryImages.forEach(img => {
      expect(img.id).toBeTruthy()
      expect(img.src).toBeTruthy()
      expect(img.alt).toBeTruthy()
      expect(img.category).toBeTruthy()
      expect(img.width).toBeGreaterThan(0)
      expect(img.height).toBeGreaterThan(0)
    })
  })

  test('all images should have valid categories', () => {
    const validCategories = ['Showroom', 'Trust', 'Transformation', 'Craftsmanship']
    galleryImages.forEach(img => {
      expect(validCategories).toContain(img.category)
    })
  })

  test('all images should have descriptive alt text with location keywords', () => {
    galleryImages.forEach(img => {
      // Alt text should be at least 20 characters
      expect(img.alt.length).toBeGreaterThanOrEqual(20)
      // Alt text should contain location or service keywords
      const hasKeywords = img.alt.toLowerCase().includes('bathroom') ||
                         img.alt.toLowerCase().includes('london') ||
                         img.alt.toLowerCase().includes('surrey') ||
                         img.alt.toLowerCase().includes('renovation') ||
                         img.alt.toLowerCase().includes('extension')
      expect(hasKeywords).toBe(true)
    })
  })

  test('priority images should be marked correctly', () => {
    const priorityImages = getPriorityImages()
    expect(priorityImages.length).toBeGreaterThan(0)
    expect(priorityImages.length).toBeLessThanOrEqual(3)
  })

  test('all image sources should start with /images/', () => {
    galleryImages.forEach(img => {
      expect(img.src).toMatch(/^\/images\//)
    })
  })

  test('all images should have unique IDs', () => {
    const ids = galleryImages.map(img => img.id)
    const uniqueIds = new Set(ids)
    expect(uniqueIds.size).toBe(ids.length)
  })
})

describe('Gallery Categories', () => {
  test('should have images in all four categories', () => {
    expect(getImagesByCategory('Showroom').length).toBeGreaterThan(0)
    expect(getImagesByCategory('Trust').length).toBeGreaterThan(0)
    expect(getImagesByCategory('Transformation').length).toBeGreaterThan(0)
    expect(getImagesByCategory('Craftsmanship').length).toBeGreaterThan(0)
  })

  test('Showroom category should have the most images', () => {
    const showroomCount = getImagesByCategory('Showroom').length
    const trustCount = getImagesByCategory('Trust').length
    const transformationCount = getImagesByCategory('Transformation').length
    const craftsmanshipCount = getImagesByCategory('Craftsmanship').length
    
    expect(showroomCount).toBeGreaterThanOrEqual(trustCount)
    expect(showroomCount).toBeGreaterThanOrEqual(transformationCount)
    expect(showroomCount).toBeGreaterThanOrEqual(craftsmanshipCount)
  })

  test('category filter should return only matching images', () => {
    const showroomImages = getImagesByCategory('Showroom')
    showroomImages.forEach(img => {
      expect(img.category).toBe('Showroom')
    })
  })
})

describe('Gallery Helper Functions', () => {
  test('getImagesByLocation should filter by location', () => {
    const londonImages = getImagesByLocation('London')
    londonImages.forEach(img => {
      expect(img.location?.toLowerCase()).toContain('london')
    })
  })

  test('getImagesByService should filter by service', () => {
    const bathroomImages = getImagesByService('Bathroom')
    bathroomImages.forEach(img => {
      expect(img.service?.toLowerCase()).toContain('bathroom')
    })
  })

  test('getImagesByLocation should be case-insensitive', () => {
    const lower = getImagesByLocation('london')
    const upper = getImagesByLocation('LONDON')
    const mixed = getImagesByLocation('London')
    
    expect(lower.length).toBe(upper.length)
    expect(lower.length).toBe(mixed.length)
  })

  test('getImagesByService should be case-insensitive', () => {
    const lower = getImagesByService('bathroom')
    const upper = getImagesByService('BATHROOM')
    const mixed = getImagesByService('Bathroom')
    
    expect(lower.length).toBe(upper.length)
    expect(lower.length).toBe(mixed.length)
  })

  test('getPriorityImages should only return images with priority flag', () => {
    const priorityImages = getPriorityImages()
    priorityImages.forEach(img => {
      expect(img.priority).toBe(true)
    })
  })
})

describe('Gallery Statistics', () => {
  test('galleryStats should match actual image counts', () => {
    expect(galleryStats.totalImages).toBe(galleryImages.length)
    expect(galleryStats.byCategory.Showroom).toBe(getImagesByCategory('Showroom').length)
    expect(galleryStats.byCategory.Trust).toBe(getImagesByCategory('Trust').length)
    expect(galleryStats.byCategory.Transformation).toBe(getImagesByCategory('Transformation').length)
    expect(galleryStats.byCategory.Craftsmanship).toBe(getImagesByCategory('Craftsmanship').length)
  })

  test('category counts should sum to total', () => {
    const sum = galleryStats.byCategory.Showroom +
                galleryStats.byCategory.Trust +
                galleryStats.byCategory.Transformation +
                galleryStats.byCategory.Craftsmanship
    
    expect(sum).toBe(galleryStats.totalImages)
  })
})

describe('Image Dimensions', () => {
  test('all images should have reasonable aspect ratios', () => {
    galleryImages.forEach(img => {
      const aspectRatio = img.width / img.height
      // Aspect ratio should be between 0.5 (portrait) and 2.5 (wide landscape)
      expect(aspectRatio).toBeGreaterThan(0.5)
      expect(aspectRatio).toBeLessThan(2.5)
    })
  })

  test('all images should have dimensions suitable for web', () => {
    galleryImages.forEach(img => {
      // Width should be at least 800px for quality display
      expect(img.width).toBeGreaterThanOrEqual(800)
      // Height should be at least 400px
      expect(img.height).toBeGreaterThanOrEqual(400)
    })
  })
})

describe('SEO and Accessibility', () => {
  test('alt text should not be generic', () => {
    const genericTerms = ['image', 'photo', 'picture', 'img']
    galleryImages.forEach(img => {
      const altLower = img.alt.toLowerCase()
      // Alt text should not be just "image" or "photo"
      const isGeneric = genericTerms.some(term => 
        altLower === term || altLower === `${term}.jpg` || altLower === `${term}.webp`
      )
      expect(isGeneric).toBe(false)
    })
  })

  test('alt text should include service or location context', () => {
    galleryImages.forEach(img => {
      // Alt text should provide context about what's shown
      const hasContext = img.alt.length > 30 && (
        img.alt.includes('-') || 
        img.alt.includes('with') ||
        img.alt.includes('in')
      )
      expect(hasContext).toBe(true)
    })
  })

  test('image IDs should be descriptive and kebab-case', () => {
    galleryImages.forEach(img => {
      // IDs should be kebab-case (lowercase with hyphens)
      expect(img.id).toMatch(/^[a-z0-9-]+$/)
      // IDs should be descriptive (at least 10 characters)
      expect(img.id.length).toBeGreaterThanOrEqual(10)
    })
  })
})
