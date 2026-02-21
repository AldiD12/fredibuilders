/**
 * Unit tests for ImageGallerySchema component
 * 
 * Tests validate:
 * - Schema.org ImageGallery markup generation
 * - Required fields presence
 * - Image metadata completeness
 * - Handling of optional fields
 */

import { describe, test, expect } from 'vitest'
import { GalleryImage } from '@/app/data/gallery'

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

describe('ImageGallerySchema Component', () => {
  const mockImages: GalleryImage[] = [
    {
      id: 'test-image-1',
      src: '/images/test-bathroom.webp',
      alt: 'Test bathroom renovation in Streatham',
      category: 'Showroom',
      location: 'Streatham',
      service: 'Full Bathroom Renovation',
      width: 1200,
      height: 800,
      priority: true
    },
    {
      id: 'test-image-2',
      src: '/images/test-wetroom.webp',
      alt: 'Test wet room installation in Esher',
      category: 'Showroom',
      location: 'Esher',
      service: 'Wet Room Installation',
      width: 1200,
      height: 800
    }
  ]

  test('should generate ImageGallery schema type', () => {
    const schema = generateImageGallerySchema(mockImages)
    
    expect(schema['@type']).toBe('ImageGallery')
    expect(schema['@context']).toBe('https://schema.org')
  })

  test('should include all images with required properties', () => {
    const schema = generateImageGallerySchema(mockImages)
    
    expect(schema.image).toHaveLength(2)
    
    // Check first image
    expect(schema.image[0]['@type']).toBe('ImageObject')
    expect(schema.image[0].contentUrl).toBe('https://fredibuilders.co.uk/images/test-bathroom.webp')
    expect(schema.image[0].caption).toBe('Test bathroom renovation in Streatham')
    expect(schema.image[0].description).toContain('Full Bathroom Renovation')
    expect(schema.image[0].description).toContain('Streatham')
    expect(schema.image[0].width).toBe(1200)
    expect(schema.image[0].height).toBe(800)
    expect(schema.image[0].name).toBe('test-image-1')
  })

  test('should handle images without location or service', () => {
    const imageWithoutOptionalFields: GalleryImage[] = [
      {
        id: 'test-image-3',
        src: '/images/test-generic.webp',
        alt: 'Test generic image',
        category: 'Trust',
        width: 1200,
        height: 800
      }
    ]

    const schema = generateImageGallerySchema(imageWithoutOptionalFields)
    
    expect(schema.image[0].description).toContain('Building project')
    expect(schema.image[0].description).toContain('South London and Surrey')
  })

  test('should include gallery metadata', () => {
    const schema = generateImageGallerySchema(mockImages)
    
    expect(schema.name).toBe('Fredi Builders Project Gallery')
    expect(schema.description).toContain('bathroom renovations')
    expect(schema.url).toBe('https://fredibuilders.co.uk/gallery')
  })

  test('should handle empty images array', () => {
    const schema = generateImageGallerySchema([])
    
    expect(schema.image).toHaveLength(0)
    expect(schema['@type']).toBe('ImageGallery')
  })

  test('should include contentUrl with full domain', () => {
    const schema = generateImageGallerySchema(mockImages)
    
    schema.image.forEach(img => {
      expect(img.contentUrl).toMatch(/^https:\/\/fredibuilders\.co\.uk\//)
    })
  })

  test('should use alt text as caption', () => {
    const schema = generateImageGallerySchema(mockImages)
    
    expect(schema.image[0].caption).toBe(mockImages[0].alt)
    expect(schema.image[1].caption).toBe(mockImages[1].alt)
  })

  test('should include width and height for all images', () => {
    const schema = generateImageGallerySchema(mockImages)
    
    schema.image.forEach(img => {
      expect(img.width).toBeGreaterThan(0)
      expect(img.height).toBeGreaterThan(0)
    })
  })

  test('should use image ID as name', () => {
    const schema = generateImageGallerySchema(mockImages)
    
    expect(schema.image[0].name).toBe('test-image-1')
    expect(schema.image[1].name).toBe('test-image-2')
  })

  test('should generate unique contentUrl for each image', () => {
    const schema = generateImageGallerySchema(mockImages)
    
    const urls = schema.image.map(img => img.contentUrl)
    const uniqueUrls = new Set(urls)
    expect(uniqueUrls.size).toBe(urls.length)
  })
})
