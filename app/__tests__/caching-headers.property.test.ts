/**
 * Property-Based Tests for Static Asset Caching Headers
 * Feature: fredi-builders-empire-building
 * Property 36: Static Asset Caching Headers
 * Validates: Requirements 8.7
 * 
 * Tests that static assets have proper cache-control headers configured
 */

import { describe, test, expect } from 'vitest'
import * as fc from 'fast-check'
import nextConfig from '@/next.config.js'

describe('Property 36: Static Asset Caching Headers', () => {
  test('next.config.js should have headers function defined', () => {
    expect(nextConfig.headers).toBeDefined()
    expect(typeof nextConfig.headers).toBe('function')
  })

  test('headers configuration should include caching rules for static assets', async () => {
    const headers = await nextConfig.headers()
    
    // Should have multiple header configurations
    expect(Array.isArray(headers)).toBe(true)
    expect(headers.length).toBeGreaterThan(1)
    
    // Find caching-related headers
    const cachingHeaders = headers.filter(h => 
      h.headers?.some(header => header.key === 'Cache-Control')
    )
    
    // Should have at least one caching header configuration
    expect(cachingHeaders.length).toBeGreaterThan(0)
  })

  test('images should have long-term caching (1 year)', async () => {
    const headers = await nextConfig.headers()
    
    // Find image caching configuration
    const imageHeaders = headers.find(h => 
      h.source?.includes('/images/') || h.source?.includes('images')
    )
    
    expect(imageHeaders).toBeDefined()
    
    // Check for Cache-Control header
    const cacheControl = imageHeaders?.headers?.find(h => h.key === 'Cache-Control')
    expect(cacheControl).toBeDefined()
    
    // Should have max-age of 1 year (31536000 seconds)
    expect(cacheControl?.value).toContain('max-age=31536000')
    expect(cacheControl?.value).toContain('public')
  })

  test('CSS and JS files should have long-term caching with immutable flag', async () => {
    const headers = await nextConfig.headers()
    
    // Find Next.js static files configuration
    const staticHeaders = headers.find(h => 
      h.source?.includes('_next/static')
    )
    
    expect(staticHeaders).toBeDefined()
    
    // Check for Cache-Control header
    const cacheControl = staticHeaders?.headers?.find(h => h.key === 'Cache-Control')
    expect(cacheControl).toBeDefined()
    
    // Should have max-age of 1 year and immutable flag
    expect(cacheControl?.value).toContain('max-age=31536000')
    expect(cacheControl?.value).toContain('immutable')
  })

  test('fonts should have long-term caching', async () => {
    const headers = await nextConfig.headers()
    
    // Find fonts caching configuration
    const fontHeaders = headers.find(h => 
      h.source?.includes('/fonts/') || h.source?.includes('fonts')
    )
    
    // If fonts directory is configured, it should have caching
    if (fontHeaders) {
      const cacheControl = fontHeaders.headers?.find(h => h.key === 'Cache-Control')
      expect(cacheControl).toBeDefined()
      expect(cacheControl?.value).toContain('max-age=31536000')
    }
  })

  test('all caching headers should use public directive', async () => {
    const headers = await nextConfig.headers()
    
    // Find all caching configurations
    const cachingHeaders = headers.filter(h => 
      h.headers?.some(header => 
        header.key === 'Cache-Control' && 
        header.value?.includes('max-age')
      )
    )
    
    // All caching headers should include 'public' directive
    cachingHeaders.forEach(config => {
      const cacheControl = config.headers?.find(h => h.key === 'Cache-Control')
      expect(cacheControl?.value).toContain('public')
    })
  })

  test('static asset paths should have appropriate max-age values', async () => {
    const headers = await nextConfig.headers()
    
    fc.assert(
      fc.property(
        fc.constantFrom(...headers.filter(h => 
          h.headers?.some(header => header.key === 'Cache-Control')
        )),
        (headerConfig) => {
          const cacheControl = headerConfig.headers?.find(h => h.key === 'Cache-Control')
          
          if (cacheControl) {
            // Extract max-age value
            const maxAgeMatch = cacheControl.value?.match(/max-age=(\d+)/)
            
            if (maxAgeMatch) {
              const maxAge = parseInt(maxAgeMatch[1], 10)
              
              // max-age should be a positive number
              expect(maxAge).toBeGreaterThan(0)
              
              // For static assets, max-age should be at least 1 day (86400 seconds)
              expect(maxAge).toBeGreaterThanOrEqual(86400)
            }
          }
        }
      ),
      { numRuns: 10 }
    )
  })

  test('immutable flag should be used for hashed assets', async () => {
    const headers = await nextConfig.headers()
    
    // Find configurations for hashed assets (Next.js static files, images)
    const hashedAssetHeaders = headers.filter(h => 
      h.source?.includes('_next/static') || 
      h.source?.includes('/images/')
    )
    
    hashedAssetHeaders.forEach(config => {
      const cacheControl = config.headers?.find(h => h.key === 'Cache-Control')
      
      if (cacheControl && cacheControl.value?.includes('max-age=31536000')) {
        // Long-term cached assets should have immutable flag
        expect(cacheControl.value).toContain('immutable')
      }
    })
  })
})
