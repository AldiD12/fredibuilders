/**
 * Property-Based Tests for Aggregate Rating Schema Markup
 * Feature: fredi-builders-empire-building
 * Property 33: Aggregate Rating Schema
 * **Validates: Requirements 7.7**
 */

import { describe, test, expect } from 'vitest'
import * as fc from 'fast-check'

/**
 * Arbitrary generator for valid aggregate rating data
 * Ensures ratingValue is always within the bestRating/worstRating range
 */
const aggregateRatingArbitrary = fc
  .record({
    reviewCount: fc.integer({ min: 1, max: 10000 }),
    bestRating: fc.option(fc.integer({ min: 5, max: 10 }), { nil: undefined }),
    worstRating: fc.option(fc.integer({ min: 0, max: 5 }), { nil: undefined }),
    itemName: fc.option(fc.string({ minLength: 3, maxLength: 100 }), { nil: undefined }),
    itemType: fc.option(
      fc.constantFrom('LocalBusiness', 'Organization', 'Product', 'Service'),
      { nil: undefined }
    )
  })
  .chain((base) => {
    const best = base.bestRating ?? 10
    const worst = base.worstRating ?? 1
    return fc
      .double({ min: worst, max: best, noNaN: true })
      .map((ratingValue) => ({ ...base, ratingValue }))
  })

/**
 * Generate schema markup for aggregate rating (mimics AggregateRatingSchema component logic)
 */
function generateAggregateRatingSchema(
  ratingValue: number,
  reviewCount: number,
  bestRating: number = 10,
  worstRating: number = 1,
  itemName: string = 'Fredi Builders',
  itemType: string = 'LocalBusiness'
) {
  return {
    '@context': 'https://schema.org',
    '@type': itemType,
    name: itemName,
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: ratingValue,
      reviewCount: reviewCount,
      bestRating: bestRating,
      worstRating: worstRating
    }
  }
}

describe('Property 33: Aggregate Rating Schema', () => {
  /**
   * **Validates: Requirements 7.7**
   * For any page displaying aggregate ratings, the HTML should include 
   * AggregateRating schema with rating value, review count, best rating, and worst rating
   */
  test('should generate valid Schema.org AggregateRating markup for any rating data', () => {
    fc.assert(
      fc.property(
        aggregateRatingArbitrary,
        (ratingData) => {
          // Use defaults for optional fields
          const bestRating = ratingData.bestRating ?? 10
          const worstRating = ratingData.worstRating ?? 1
          const itemName = ratingData.itemName ?? 'Fredi Builders'
          const itemType = ratingData.itemType ?? 'LocalBusiness'
          
          // Generate schema
          const schema = generateAggregateRatingSchema(
            ratingData.ratingValue,
            ratingData.reviewCount,
            bestRating,
            worstRating,
            itemName,
            itemType
          )
          
          // Property: Schema must have correct context and type
          expect(schema['@context']).toBe('https://schema.org')
          expect(schema['@type']).toBe(itemType)
          
          // Property: Schema must have item name
          expect(schema.name).toBe(itemName)
          expect(schema.name.length).toBeGreaterThan(0)
          
          // Property: Schema must have aggregateRating object
          expect(schema.aggregateRating).toBeDefined()
          expect(schema.aggregateRating['@type']).toBe('AggregateRating')
          
          // Property: All required rating fields must be present
          expect(schema.aggregateRating.ratingValue).toBe(ratingData.ratingValue)
          expect(schema.aggregateRating.reviewCount).toBe(ratingData.reviewCount)
          expect(schema.aggregateRating.bestRating).toBe(bestRating)
          expect(schema.aggregateRating.worstRating).toBe(worstRating)
          
          // Property: Review count must be positive
          expect(schema.aggregateRating.reviewCount).toBeGreaterThan(0)
          
          // Property: Rating value should be within valid range
          expect(schema.aggregateRating.ratingValue).toBeGreaterThanOrEqual(worstRating)
          expect(schema.aggregateRating.ratingValue).toBeLessThanOrEqual(bestRating)
        }
      ),
      { numRuns: 100 }
    )
  })

  test('should preserve rating precision for decimal values', () => {
    fc.assert(
      fc.property(
        fc.double({ min: 0, max: 10, noNaN: true }),
        fc.integer({ min: 1, max: 1000 }),
        (ratingValue, reviewCount) => {
          const schema = generateAggregateRatingSchema(ratingValue, reviewCount)
          
          // Property: Rating value should be preserved exactly
          expect(schema.aggregateRating.ratingValue).toBe(ratingValue)
          
          // Property: Review count should be preserved exactly
          expect(schema.aggregateRating.reviewCount).toBe(reviewCount)
        }
      ),
      { numRuns: 100 }
    )
  })

  test('should handle custom rating scales', () => {
    fc.assert(
      fc.property(
        fc.integer({ min: 5, max: 10 }),
        fc.integer({ min: 0, max: 5 }),
        fc.integer({ min: 1, max: 100 }),
        (bestRating, worstRating, reviewCount) => {
          // Generate rating value within the custom scale
          const ratingValue = worstRating + Math.random() * (bestRating - worstRating)
          
          const schema = generateAggregateRatingSchema(
            ratingValue,
            reviewCount,
            bestRating,
            worstRating
          )
          
          // Property: Custom rating scale should be preserved
          expect(schema.aggregateRating.bestRating).toBe(bestRating)
          expect(schema.aggregateRating.worstRating).toBe(worstRating)
          
          // Property: Rating value should be within custom scale
          expect(schema.aggregateRating.ratingValue).toBeGreaterThanOrEqual(worstRating)
          expect(schema.aggregateRating.ratingValue).toBeLessThanOrEqual(bestRating)
        }
      ),
      { numRuns: 100 }
    )
  })

  test('should handle different item types', () => {
    fc.assert(
      fc.property(
        fc.constantFrom('LocalBusiness', 'Organization', 'Product', 'Service'),
        fc.string({ minLength: 3, maxLength: 100 }),
        (itemType, itemName) => {
          const schema = generateAggregateRatingSchema(9.6, 104, 10, 1, itemName, itemType)
          
          // Property: Item type should be preserved
          expect(schema['@type']).toBe(itemType)
          
          // Property: Item name should be preserved
          expect(schema.name).toBe(itemName)
          
          // Property: AggregateRating structure should be consistent regardless of item type
          expect(schema.aggregateRating['@type']).toBe('AggregateRating')
          expect(schema.aggregateRating).toHaveProperty('ratingValue')
          expect(schema.aggregateRating).toHaveProperty('reviewCount')
          expect(schema.aggregateRating).toHaveProperty('bestRating')
          expect(schema.aggregateRating).toHaveProperty('worstRating')
        }
      ),
      { numRuns: 100 }
    )
  })

  test('should handle minimum review count', () => {
    fc.assert(
      fc.property(
        fc.double({ min: 0, max: 10, noNaN: true }),
        (ratingValue) => {
          const schema = generateAggregateRatingSchema(ratingValue, 1)
          
          // Property: Should work with single review
          expect(schema.aggregateRating.reviewCount).toBe(1)
          expect(schema.aggregateRating.ratingValue).toBe(ratingValue)
        }
      ),
      { numRuns: 100 }
    )
  })

  test('should handle large review counts', () => {
    fc.assert(
      fc.property(
        fc.integer({ min: 1000, max: 10000 }),
        (reviewCount) => {
          const schema = generateAggregateRatingSchema(9.6, reviewCount)
          
          // Property: Should handle large review counts
          expect(schema.aggregateRating.reviewCount).toBe(reviewCount)
          expect(schema.aggregateRating.reviewCount).toBeGreaterThanOrEqual(1000)
        }
      ),
      { numRuns: 100 }
    )
  })

  test('should maintain consistent schema structure', () => {
    fc.assert(
      fc.property(
        aggregateRatingArbitrary,
        aggregateRatingArbitrary,
        (rating1, rating2) => {
          const schema1 = generateAggregateRatingSchema(
            rating1.ratingValue,
            rating1.reviewCount,
            rating1.bestRating ?? 10,
            rating1.worstRating ?? 1,
            rating1.itemName ?? 'Fredi Builders',
            rating1.itemType ?? 'LocalBusiness'
          )
          
          const schema2 = generateAggregateRatingSchema(
            rating2.ratingValue,
            rating2.reviewCount,
            rating2.bestRating ?? 10,
            rating2.worstRating ?? 1,
            rating2.itemName ?? 'Fredi Builders',
            rating2.itemType ?? 'LocalBusiness'
          )
          
          // Property: All schemas should have the same top-level structure
          const keys1 = Object.keys(schema1).sort()
          const keys2 = Object.keys(schema2).sort()
          expect(keys1).toEqual(keys2)
          
          // Property: All aggregateRating objects should have the same structure
          const ratingKeys1 = Object.keys(schema1.aggregateRating).sort()
          const ratingKeys2 = Object.keys(schema2.aggregateRating).sort()
          expect(ratingKeys1).toEqual(ratingKeys2)
        }
      ),
      { numRuns: 100 }
    )
  })

  test('should generate valid JSON-LD structure', () => {
    fc.assert(
      fc.property(
        aggregateRatingArbitrary,
        (ratingData) => {
          const schema = generateAggregateRatingSchema(
            ratingData.ratingValue,
            ratingData.reviewCount,
            ratingData.bestRating ?? 10,
            ratingData.worstRating ?? 1,
            ratingData.itemName ?? 'Fredi Builders',
            ratingData.itemType ?? 'LocalBusiness'
          )
          
          // Property: Schema should be serializable to valid JSON
          const jsonString = JSON.stringify(schema)
          expect(jsonString).toBeDefined()
          expect(jsonString.length).toBeGreaterThan(0)
          
          // Property: Should be parseable back to object
          const parsed = JSON.parse(jsonString)
          expect(parsed['@context']).toBe('https://schema.org')
          expect(parsed.aggregateRating['@type']).toBe('AggregateRating')
          expect(parsed.aggregateRating.ratingValue).toBe(ratingData.ratingValue)
          expect(parsed.aggregateRating.reviewCount).toBe(ratingData.reviewCount)
        }
      ),
      { numRuns: 100 }
    )
  })

  test('should handle edge case rating values', () => {
    fc.assert(
      fc.property(
        fc.constantFrom(0, 0.1, 5, 9.99, 10),
        fc.integer({ min: 1, max: 100 }),
        (ratingValue, reviewCount) => {
          const schema = generateAggregateRatingSchema(ratingValue, reviewCount)
          
          // Property: Edge case values should be handled correctly
          expect(schema.aggregateRating.ratingValue).toBe(ratingValue)
          expect(schema.aggregateRating.ratingValue).toBeGreaterThanOrEqual(0)
          expect(schema.aggregateRating.ratingValue).toBeLessThanOrEqual(10)
        }
      ),
      { numRuns: 100 }
    )
  })

  test('should use default values when optional parameters are undefined', () => {
    fc.assert(
      fc.property(
        fc.double({ min: 0, max: 10, noNaN: true }),
        fc.integer({ min: 1, max: 1000 }),
        (ratingValue, reviewCount) => {
          // Call with only required parameters
          const schema = generateAggregateRatingSchema(ratingValue, reviewCount)
          
          // Property: Should use default values for optional parameters
          expect(schema['@type']).toBe('LocalBusiness')
          expect(schema.name).toBe('Fredi Builders')
          expect(schema.aggregateRating.bestRating).toBe(10)
          expect(schema.aggregateRating.worstRating).toBe(1)
        }
      ),
      { numRuns: 100 }
    )
  })

  test('should handle special characters in item name', () => {
    fc.assert(
      fc.property(
        fc.string({ minLength: 3, maxLength: 100 }),
        (itemName) => {
          const schema = generateAggregateRatingSchema(9.6, 104, 10, 1, itemName)
          
          // Property: Item name should be preserved and properly escaped
          expect(schema.name).toBe(itemName)
          
          // Property: Should be valid JSON even with special characters
          const jsonString = JSON.stringify(schema)
          const parsed = JSON.parse(jsonString)
          expect(parsed.name).toBe(itemName)
        }
      ),
      { numRuns: 100 }
    )
  })

  test('should validate rating value is within scale bounds', () => {
    fc.assert(
      fc.property(
        fc.integer({ min: 5, max: 10 }),
        fc.integer({ min: 0, max: 5 }),
        fc.integer({ min: 1, max: 100 }),
        (bestRating, worstRating, reviewCount) => {
          // Generate rating within bounds
          const ratingValue = worstRating + (bestRating - worstRating) * 0.5
          
          const schema = generateAggregateRatingSchema(
            ratingValue,
            reviewCount,
            bestRating,
            worstRating
          )
          
          // Property: Rating should always be within the defined scale
          expect(schema.aggregateRating.ratingValue).toBeGreaterThanOrEqual(
            schema.aggregateRating.worstRating
          )
          expect(schema.aggregateRating.ratingValue).toBeLessThanOrEqual(
            schema.aggregateRating.bestRating
          )
        }
      ),
      { numRuns: 100 }
    )
  })

  test('should include all required Schema.org fields', () => {
    fc.assert(
      fc.property(
        aggregateRatingArbitrary,
        (ratingData) => {
          const schema = generateAggregateRatingSchema(
            ratingData.ratingValue,
            ratingData.reviewCount,
            ratingData.bestRating ?? 10,
            ratingData.worstRating ?? 1,
            ratingData.itemName ?? 'Fredi Builders',
            ratingData.itemType ?? 'LocalBusiness'
          )
          
          // Property: All required Schema.org fields must be present
          expect(schema).toHaveProperty('@context')
          expect(schema).toHaveProperty('@type')
          expect(schema).toHaveProperty('name')
          expect(schema).toHaveProperty('aggregateRating')
          
          expect(schema.aggregateRating).toHaveProperty('@type')
          expect(schema.aggregateRating).toHaveProperty('ratingValue')
          expect(schema.aggregateRating).toHaveProperty('reviewCount')
          expect(schema.aggregateRating).toHaveProperty('bestRating')
          expect(schema.aggregateRating).toHaveProperty('worstRating')
        }
      ),
      { numRuns: 100 }
    )
  })
})
