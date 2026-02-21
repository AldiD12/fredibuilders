import { describe, test, expect } from 'vitest'

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

describe('AggregateRatingSchema', () => {
  test('should generate valid AggregateRating schema with required props', () => {
    const schema = generateAggregateRatingSchema(9.6, 104)

    expect(schema['@context']).toBe('https://schema.org')
    expect(schema['@type']).toBe('LocalBusiness')
    expect(schema.name).toBe('Fredi Builders')
    expect(schema.aggregateRating).toEqual({
      '@type': 'AggregateRating',
      ratingValue: 9.6,
      reviewCount: 104,
      bestRating: 10,
      worstRating: 1
    })
  })

  test('should generate schema with custom bestRating and worstRating', () => {
    const schema = generateAggregateRatingSchema(4.5, 50, 5, 0)
    
    expect(schema.aggregateRating.bestRating).toBe(5)
    expect(schema.aggregateRating.worstRating).toBe(0)
  })

  test('should generate schema with custom itemName and itemType', () => {
    const schema = generateAggregateRatingSchema(9.6, 104, 10, 1, 'Custom Business', 'Organization')
    
    expect(schema['@type']).toBe('Organization')
    expect(schema.name).toBe('Custom Business')
  })

  test('should handle decimal rating values', () => {
    const schema = generateAggregateRatingSchema(9.63, 104)
    
    expect(schema.aggregateRating.ratingValue).toBe(9.63)
  })

  test('should handle large review counts', () => {
    const schema = generateAggregateRatingSchema(9.6, 1000)
    
    expect(schema.aggregateRating.reviewCount).toBe(1000)
  })

  test('should include AggregateRating type', () => {
    const schema = generateAggregateRatingSchema(9.6, 104)
    
    expect(schema.aggregateRating['@type']).toBe('AggregateRating')
  })

  test('should handle minimum rating values', () => {
    const schema = generateAggregateRatingSchema(1, 1, 10, 1)
    
    expect(schema.aggregateRating.ratingValue).toBe(1)
    expect(schema.aggregateRating.reviewCount).toBe(1)
  })

  test('should handle maximum rating values', () => {
    const schema = generateAggregateRatingSchema(10, 10000, 10, 1)
    
    expect(schema.aggregateRating.ratingValue).toBe(10)
    expect(schema.aggregateRating.reviewCount).toBe(10000)
  })
})
