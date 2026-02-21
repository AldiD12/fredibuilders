/**
 * Property Test: Canonical Tag Presence
 * Feature: fredi-builders-empire-building, Property 28
 * 
 * Property 28: Canonical Tag Presence
 * For any page render, the HTML head should include a canonical link tag with the page's URL.
 * 
 * Validates: Requirements 6.7
 */

import { describe, test, expect } from 'vitest'
import * as fc from 'fast-check'
import { readFileSync, readdirSync, statSync } from 'fs'
import { join } from 'path'

// Define all page types and their expected canonical URLs
const pageConfigs = [
  { path: 'app/page.tsx', canonical: 'https://fredibuilders.co.uk', name: 'Homepage' },
  { path: 'app/about/page.tsx', canonical: 'https://fredibuilders.co.uk/about', name: 'About' },
  { path: 'app/contact/page.tsx', canonical: 'https://fredibuilders.co.uk/contact', name: 'Contact' },
  { path: 'app/gallery/page.tsx', canonical: 'https://fredibuilders.co.uk/gallery', name: 'Gallery' },
  { path: 'app/reviews/page.tsx', canonical: 'https://fredibuilders.co.uk/reviews', name: 'Reviews' },
  { path: 'app/locations/page.tsx', canonical: 'https://fredibuilders.co.uk/locations', name: 'Locations Index' },
  { path: 'app/services/page.tsx', canonical: 'https://fredibuilders.co.uk/services', name: 'Services Index' },
  { path: 'app/blog/page.tsx', canonical: 'https://fredibuilders.co.uk/blog', name: 'Blog Index' },
  { path: 'app/portfolio/page.tsx', canonical: 'https://fredibuilders.co.uk/portfolio', name: 'Portfolio' },
  { path: 'app/services/full-bathroom-renovations/page.tsx', canonical: 'https://fredibuilders.co.uk/services/full-bathroom-renovations', name: 'Full Bathroom Renovations' },
  { path: 'app/services/wet-room-installations/page.tsx', canonical: 'https://fredibuilders.co.uk/services/wet-room-installations', name: 'Wet Room Installations' },
  { path: 'app/services/luxury-tiling-services/page.tsx', canonical: 'https://fredibuilders.co.uk/services/luxury-tiling-services', name: 'Luxury Tiling Services' },
  { path: 'app/services/structural-building-repairs/page.tsx', canonical: 'https://fredibuilders.co.uk/services/structural-building-repairs', name: 'Structural Building Repairs' },
  { path: 'app/services/disabled-assisted-bathrooms/page.tsx', canonical: 'https://fredibuilders.co.uk/services/disabled-assisted-bathrooms', name: 'Disabled-Assisted Bathrooms' },
]

// Function to extract metadata from a page file
function extractMetadata(filePath: string): string {
  const content = readFileSync(join(process.cwd(), filePath), 'utf-8')
  return content
}

// Function to check if metadata contains canonical tag
function hasCanonicalTag(content: string): boolean {
  return content.includes('alternates:') && content.includes('canonical:')
}

// Function to extract canonical URL from metadata
function extractCanonicalUrl(content: string): string | null {
  const canonicalMatch = content.match(/canonical:\s*['"]([^'"]+)['"]/);
  return canonicalMatch ? canonicalMatch[1] : null
}

describe('Property 28: Canonical Tag Presence', () => {
  test('all static pages have canonical tags in metadata', () => {
    fc.assert(
      fc.property(
        fc.constantFrom(...pageConfigs),
        (pageConfig) => {
          const content = extractMetadata(pageConfig.path)
          
          // Verify canonical tag exists
          expect(
            hasCanonicalTag(content),
            `${pageConfig.name} (${pageConfig.path}) should have a canonical tag in metadata`
          ).toBe(true)
          
          return true
        }
      ),
      { numRuns: pageConfigs.length }
    )
  })

  test('all static pages have correct canonical URLs', () => {
    fc.assert(
      fc.property(
        fc.constantFrom(...pageConfigs),
        (pageConfig) => {
          const content = extractMetadata(pageConfig.path)
          const canonicalUrl = extractCanonicalUrl(content)
          
          // Verify canonical URL matches expected URL
          expect(
            canonicalUrl,
            `${pageConfig.name} should have a canonical URL`
          ).not.toBeNull()
          
          expect(
            canonicalUrl,
            `${pageConfig.name} canonical URL should match ${pageConfig.canonical}`
          ).toBe(pageConfig.canonical)
          
          return true
        }
      ),
      { numRuns: pageConfigs.length }
    )
  })

  test('all canonical URLs use HTTPS protocol', () => {
    fc.assert(
      fc.property(
        fc.constantFrom(...pageConfigs),
        (pageConfig) => {
          const content = extractMetadata(pageConfig.path)
          const canonicalUrl = extractCanonicalUrl(content)
          
          if (canonicalUrl) {
            expect(
              canonicalUrl.startsWith('https://'),
              `${pageConfig.name} canonical URL should use HTTPS protocol`
            ).toBe(true)
          }
          
          return true
        }
      ),
      { numRuns: pageConfigs.length }
    )
  })

  test('all canonical URLs use the correct domain', () => {
    const expectedDomain = 'fredibuilders.co.uk'
    
    fc.assert(
      fc.property(
        fc.constantFrom(...pageConfigs),
        (pageConfig) => {
          const content = extractMetadata(pageConfig.path)
          const canonicalUrl = extractCanonicalUrl(content)
          
          if (canonicalUrl) {
            expect(
              canonicalUrl.includes(expectedDomain),
              `${pageConfig.name} canonical URL should use domain ${expectedDomain}`
            ).toBe(true)
          }
          
          return true
        }
      ),
      { numRuns: pageConfigs.length }
    )
  })

  test('canonical URLs do not have trailing slashes (except homepage)', () => {
    fc.assert(
      fc.property(
        fc.constantFrom(...pageConfigs.filter(p => p.path !== 'app/page.tsx')),
        (pageConfig) => {
          const content = extractMetadata(pageConfig.path)
          const canonicalUrl = extractCanonicalUrl(content)
          
          if (canonicalUrl) {
            expect(
              !canonicalUrl.endsWith('/'),
              `${pageConfig.name} canonical URL should not have a trailing slash`
            ).toBe(true)
          }
          
          return true
        }
      ),
      { numRuns: pageConfigs.length - 1 }
    )
  })

  test('location pages have canonical tags with correct URL pattern', () => {
    const locationPageTemplate = readFileSync(
      join(process.cwd(), 'app/locations/[slug]/page.tsx'),
      'utf-8'
    )
    
    // Verify the template generates canonical URLs
    expect(locationPageTemplate).toContain('alternates:')
    expect(locationPageTemplate).toContain('canonical:')
    
    // Verify the URL is constructed correctly
    expect(locationPageTemplate).toContain('${baseUrl}/locations/${location.slug}')
  })

  test('all metadata exports include alternates field for canonical tags', () => {
    fc.assert(
      fc.property(
        fc.constantFrom(...pageConfigs),
        (pageConfig) => {
          const content = extractMetadata(pageConfig.path)
          
          // Verify alternates field exists in metadata
          expect(
            content.includes('alternates:'),
            `${pageConfig.name} metadata should include alternates field`
          ).toBe(true)
          
          return true
        }
      ),
      { numRuns: pageConfigs.length }
    )
  })

  test('canonical URLs match the actual page paths', () => {
    fc.assert(
      fc.property(
        fc.constantFrom(...pageConfigs),
        (pageConfig) => {
          const content = extractMetadata(pageConfig.path)
          const canonicalUrl = extractCanonicalUrl(content)
          
          if (canonicalUrl) {
            // Extract path from canonical URL
            const urlPath = canonicalUrl.replace('https://fredibuilders.co.uk', '') || '/'
            
            // Extract expected path from file path
            let expectedPath = pageConfig.path
              .replace('app/', '/')
              .replace('/page.tsx', '')
              .replace('[slug]', '') // Dynamic segments handled separately
            
            // Normalize paths
            if (expectedPath === '/' || expectedPath === '') {
              expectedPath = '/'
            } else if (expectedPath.endsWith('/')) {
              expectedPath = expectedPath.slice(0, -1)
            }
            
            // For dynamic pages, just verify the base path
            if (pageConfig.path.includes('[slug]')) {
              expect(
                urlPath.startsWith(expectedPath),
                `${pageConfig.name} canonical URL path should start with ${expectedPath}`
              ).toBe(true)
            } else {
              expect(
                urlPath,
                `${pageConfig.name} canonical URL path should match ${expectedPath}`
              ).toBe(expectedPath)
            }
          }
          
          return true
        }
      ),
      { numRuns: pageConfigs.length }
    )
  })

  test('all pages with metadata have exactly one canonical tag definition', () => {
    fc.assert(
      fc.property(
        fc.constantFrom(...pageConfigs),
        (pageConfig) => {
          const content = extractMetadata(pageConfig.path)
          
          // Count occurrences of canonical: in metadata
          const canonicalMatches = content.match(/canonical:\s*['"][^'"]+['"]/g)
          
          if (canonicalMatches) {
            expect(
              canonicalMatches.length,
              `${pageConfig.name} should have exactly one canonical tag definition`
            ).toBe(1)
          }
          
          return true
        }
      ),
      { numRuns: pageConfigs.length }
    )
  })

  test('canonical URLs are properly formatted without query parameters or fragments', () => {
    fc.assert(
      fc.property(
        fc.constantFrom(...pageConfigs),
        (pageConfig) => {
          const content = extractMetadata(pageConfig.path)
          const canonicalUrl = extractCanonicalUrl(content)
          
          if (canonicalUrl) {
            // Verify no query parameters
            expect(
              !canonicalUrl.includes('?'),
              `${pageConfig.name} canonical URL should not contain query parameters`
            ).toBe(true)
            
            // Verify no fragments
            expect(
              !canonicalUrl.includes('#'),
              `${pageConfig.name} canonical URL should not contain fragments`
            ).toBe(true)
          }
          
          return true
        }
      ),
      { numRuns: pageConfigs.length }
    )
  })

  test('blog post pages have canonical tags', () => {
    const blogPostPath = 'app/blog/bathroom-refurbishment-vs-full-renovation-cost-guide-2026/page.tsx'
    const content = extractMetadata(blogPostPath)
    
    expect(hasCanonicalTag(content)).toBe(true)
    
    const canonicalUrl = extractCanonicalUrl(content)
    expect(canonicalUrl).toBe('https://fredibuilders.co.uk/blog/bathroom-refurbishment-vs-full-renovation-cost-guide-2026')
  })

  test('all service pages have canonical tags', () => {
    const servicePages = pageConfigs.filter(p => p.path.startsWith('app/services/') && p.path !== 'app/services/page.tsx')
    
    expect(servicePages.length).toBeGreaterThan(0)
    
    servicePages.forEach((servicePage) => {
      const content = extractMetadata(servicePage.path)
      expect(
        hasCanonicalTag(content),
        `${servicePage.name} should have a canonical tag`
      ).toBe(true)
    })
  })

  test('metadata with canonical tags is properly typed', () => {
    fc.assert(
      fc.property(
        fc.constantFrom(...pageConfigs),
        (pageConfig) => {
          const content = extractMetadata(pageConfig.path)
          
          // Verify Metadata type is imported
          if (content.includes('export const metadata')) {
            expect(
              content.includes('Metadata') || content.includes('type Metadata'),
              `${pageConfig.name} should import Metadata type`
            ).toBe(true)
          }
          
          return true
        }
      ),
      { numRuns: pageConfigs.length }
    )
  })
})
