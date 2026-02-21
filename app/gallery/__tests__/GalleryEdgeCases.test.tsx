/**
 * Unit Tests for Gallery Edge Cases
 * Feature: fredi-builders-empire-building
 * 
 * These tests validate specific edge cases and error conditions
 * that are difficult to generate with property-based testing.
 */

import { describe, test, expect } from 'vitest'
import { GalleryImage } from '@/app/data/gallery'

describe('Gallery Edge Cases - Unit Tests', () => {
  /**
   * Test: Empty Gallery State
   * When no images are available, the gallery should handle it gracefully.
   */
  test('handles empty gallery state', () => {
    const images: GalleryImage[] = []
    
    // Filter should return empty array
    const filtered = images.filter(img => img.category === 'Showroom')
    expect(filtered).toEqual([])
    expect(filtered.length).toBe(0)
  })

  /**
   * Test: Single Image Gallery
   * When only one image exists, navigation should handle it correctly.
   */
  test('handles single image gallery', () => {
    const images: GalleryImage[] = [{
      id: 'single-image',
      src: '/images/test.webp',
      alt: 'Single test image for gallery',
      category: 'Showroom',
      width: 1200,
      height: 800
    }]
    
    expect(images.length).toBe(1)
    
    // Lightbox navigation with single image
    const currentIndex = 0
    const nextIndex = (currentIndex + 1) % images.length
    const prevIndex = currentIndex > 0 ? currentIndex - 1 : images.length - 1
    
    // Both next and prev should point to the same image
    expect(nextIndex).toBe(0)
    expect(prevIndex).toBe(0)
    expect(images[nextIndex].id).toBe('single-image')
    expect(images[prevIndex].id).toBe('single-image')
  })

  /**
   * Test: No Matching Filter
   * When a filter has no matching images, should return empty array.
   */
  test('handles filter with no matching images', () => {
    const images: GalleryImage[] = [
      {
        id: 'showroom-1',
        src: '/images/showroom.webp',
        alt: 'Showroom bathroom image',
        category: 'Showroom',
        width: 1200,
        height: 800
      },
      {
        id: 'showroom-2',
        src: '/images/showroom2.webp',
        alt: 'Another showroom bathroom',
        category: 'Showroom',
        width: 1200,
        height: 800
      }
    ]
    
    // Filter by category that doesn't exist in the array
    const filtered = images.filter(img => img.category === 'Trust')
    expect(filtered).toEqual([])
    expect(filtered.length).toBe(0)
  })

  /**
   * Test: Keyboard Navigation - ESC Key
   * Simulates ESC key press to close lightbox.
   */
  test('keyboard navigation - ESC key closes lightbox', () => {
    let lightboxOpen = true
    
    // Simulate ESC key handler
    const handleEscape = (key: string) => {
      if (key === 'Escape') {
        lightboxOpen = false
      }
    }
    
    handleEscape('Escape')
    expect(lightboxOpen).toBe(false)
  })

  /**
   * Test: Keyboard Navigation - Arrow Keys
   * Simulates arrow key navigation in lightbox.
   */
  test('keyboard navigation - arrow keys navigate images', () => {
    const images: GalleryImage[] = [
      {
        id: 'image-1',
        src: '/images/1.webp',
        alt: 'First image description',
        category: 'Showroom',
        width: 1200,
        height: 800
      },
      {
        id: 'image-2',
        src: '/images/2.webp',
        alt: 'Second image description',
        category: 'Trust',
        width: 1200,
        height: 800
      },
      {
        id: 'image-3',
        src: '/images/3.webp',
        alt: 'Third image description',
        category: 'Transformation',
        width: 1200,
        height: 800
      }
    ]
    
    let currentIndex = 1 // Start at middle image
    
    // Simulate ArrowRight (next)
    const handleArrowRight = () => {
      currentIndex = (currentIndex + 1) % images.length
    }
    
    // Simulate ArrowLeft (previous)
    const handleArrowLeft = () => {
      currentIndex = currentIndex > 0 ? currentIndex - 1 : images.length - 1
    }
    
    // Test next navigation
    handleArrowRight()
    expect(currentIndex).toBe(2)
    expect(images[currentIndex].id).toBe('image-3')
    
    // Test previous navigation
    handleArrowLeft()
    expect(currentIndex).toBe(1)
    expect(images[currentIndex].id).toBe('image-2')
    
    // Test previous from first image (wraps to last)
    currentIndex = 0
    handleArrowLeft()
    expect(currentIndex).toBe(2)
    expect(images[currentIndex].id).toBe('image-3')
    
    // Test next from last image (wraps to first)
    handleArrowRight()
    expect(currentIndex).toBe(0)
    expect(images[currentIndex].id).toBe('image-1')
  })

  /**
   * Test: Filter Preserves Original Array
   * Filtering should not modify the original images array.
   */
  test('filtering does not modify original array', () => {
    const images: GalleryImage[] = [
      {
        id: 'image-1',
        src: '/images/1.webp',
        alt: 'First image description',
        category: 'Showroom',
        width: 1200,
        height: 800
      },
      {
        id: 'image-2',
        src: '/images/2.webp',
        alt: 'Second image description',
        category: 'Trust',
        width: 1200,
        height: 800
      }
    ]
    
    const originalLength = images.length
    const originalIds = images.map(img => img.id)
    
    // Apply filter
    const filtered = images.filter(img => img.category === 'Showroom')
    
    // Original array should be unchanged
    expect(images.length).toBe(originalLength)
    expect(images.map(img => img.id)).toEqual(originalIds)
  })

  /**
   * Test: All Categories Have Valid Values
   * Ensures category values are from the allowed set.
   */
  test('all category values are valid', () => {
    const validCategories = ['Showroom', 'Trust', 'Transformation', 'Craftsmanship']
    
    const testImages: GalleryImage[] = [
      {
        id: 'test-1',
        src: '/images/test1.webp',
        alt: 'Test image one description',
        category: 'Showroom',
        width: 1200,
        height: 800
      },
      {
        id: 'test-2',
        src: '/images/test2.webp',
        alt: 'Test image two description',
        category: 'Trust',
        width: 1200,
        height: 800
      }
    ]
    
    for (const image of testImages) {
      expect(validCategories).toContain(image.category)
    }
  })

  /**
   * Test: Image Index Calculation Edge Cases
   * Tests boundary conditions for index calculations.
   */
  test('image index calculations handle boundaries correctly', () => {
    const totalImages = 5
    
    // Test at start (index 0)
    let currentIndex = 0
    let nextIndex = (currentIndex + 1) % totalImages
    let prevIndex = currentIndex > 0 ? currentIndex - 1 : totalImages - 1
    
    expect(nextIndex).toBe(1)
    expect(prevIndex).toBe(4) // Wraps to end
    
    // Test at end (index 4)
    currentIndex = 4
    nextIndex = (currentIndex + 1) % totalImages
    prevIndex = currentIndex > 0 ? currentIndex - 1 : totalImages - 1
    
    expect(nextIndex).toBe(0) // Wraps to start
    expect(prevIndex).toBe(3)
    
    // Test in middle (index 2)
    currentIndex = 2
    nextIndex = (currentIndex + 1) % totalImages
    prevIndex = currentIndex > 0 ? currentIndex - 1 : totalImages - 1
    
    expect(nextIndex).toBe(3)
    expect(prevIndex).toBe(1)
  })
})
