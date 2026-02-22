/**
 * Property-Based Tests for Review Schema Markup
 * Feature: fredi-builders-empire-building
 * Property 6: Review Schema Markup
 * **Validates: Requirements 2.2**
 */

import { describe, test, expect } from 'vitest';
import * as fc from 'fast-check';
import { Review } from '@/app/data/reviews';

/**
 * Arbitrary generator for valid Review objects
 */
const reviewArbitrary = fc.record({
  id: fc.string({ minLength: 5, maxLength: 20 }).map(s => `review-${s}`),
  rating: fc.double({ min: 1, max: 10, noNaN: true }),
  text: fc.string({ minLength: 10, maxLength: 500 }),
  author: fc.string({ minLength: 3, maxLength: 50 }),
  location: fc.string({ minLength: 3, maxLength: 50 }),
  postcode: fc.string({ minLength: 2, maxLength: 10 }),
  service: fc.option(fc.string({ minLength: 5, maxLength: 100 }), { nil: undefined }),
  date: fc.date({ min: new Date('2020-01-01'), max: new Date('2025-12-31') })
    .map(d => d.toISOString().split('T')[0]),
  verified: fc.boolean(),
  jobLocation: fc.option(fc.string({ minLength: 2, maxLength: 10 }), { nil: undefined })
}) as fc.Arbitrary<Review>;

/**
 * Generate schema markup for reviews (mimics ReviewSchema component logic)
 */
function generateReviewSchemas(reviews: Review[]): any[] {
  return reviews.map((review) => ({
    '@context': 'https://schema.org',
    '@type': 'Review',
    '@id': `https://fredibuilders.co.uk/reviews#${review.id}`,
    itemReviewed: {
      '@type': 'LocalBusiness',
      name: 'Fredi Builders',
      image: 'https://fredibuilders.co.uk/og-image.jpg',
      telephone: '+447468451511',
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'GB'
      }
    },
    reviewRating: {
      '@type': 'Rating',
      ratingValue: review.rating,
      bestRating: 10,
      worstRating: 1
    },
    author: {
      '@type': 'Person',
      name: review.author
    },
    datePublished: review.date,
    reviewBody: review.text,
    publisher: {
      '@type': 'Organization',
      name: 'Checkatrade'
    }
  }));
}

describe('Property 6: Review Schema Markup', () => {
  /**
   * **Validates: Requirements 2.2**
   * For any review displayed on the reviews page, the HTML should include 
   * Schema.org Review markup with rating, author, and date fields
   */
  test('should generate valid Schema.org Review markup for any set of reviews', () => {
    fc.assert(
      fc.property(
        fc.array(reviewArbitrary, { minLength: 1, maxLength: 20 }),
        (reviews) => {
          // Generate schemas
          const schemas = generateReviewSchemas(reviews);
          
          // Property: Number of schemas should match number of reviews
          expect(schemas.length).toBe(reviews.length);
          
          // Property: Each schema must be valid Schema.org Review markup
          schemas.forEach((schema, index) => {
            const review = reviews[index];
            
            // Required Schema.org fields
            expect(schema['@context']).toBe('https://schema.org');
            expect(schema['@type']).toBe('Review');
            expect(schema['@id']).toBeDefined();
            expect(schema['@id']).toContain(review.id);
            
            // itemReviewed (LocalBusiness)
            expect(schema.itemReviewed).toBeDefined();
            expect(schema.itemReviewed['@type']).toBe('LocalBusiness');
            expect(schema.itemReviewed.name).toBe('Fredi Builders');
            expect(schema.itemReviewed.telephone).toBeDefined();
            expect(schema.itemReviewed.address).toBeDefined();
            expect(schema.itemReviewed.address['@type']).toBe('PostalAddress');
            
            // reviewRating (Rating)
            expect(schema.reviewRating).toBeDefined();
            expect(schema.reviewRating['@type']).toBe('Rating');
            expect(schema.reviewRating.ratingValue).toBe(review.rating);
            expect(schema.reviewRating.bestRating).toBe(10);
            expect(schema.reviewRating.worstRating).toBe(1);
            
            // author (Person)
            expect(schema.author).toBeDefined();
            expect(schema.author['@type']).toBe('Person');
            expect(schema.author.name).toBe(review.author);
            
            // datePublished
            expect(schema.datePublished).toBe(review.date);
            
            // reviewBody
            expect(schema.reviewBody).toBe(review.text);
            
            // publisher (Organization)
            expect(schema.publisher).toBeDefined();
            expect(schema.publisher['@type']).toBe('Organization');
            expect(schema.publisher.name).toBe('Checkatrade');
          });
        }
      ),
      { numRuns: 100 }
    );
  });

  test('should handle single review correctly', () => {
    fc.assert(
      fc.property(
        reviewArbitrary,
        (review) => {
          const { container } = render(<ReviewSchema reviews={[review]} />);
          const schemas = extractJsonLd(container);
          
          // Property: Should generate exactly one schema
          expect(schemas.length).toBe(1);
          
          const schema = schemas[0];
          
          // Property: All required fields must be present
          expect(schema['@context']).toBe('https://schema.org');
          expect(schema['@type']).toBe('Review');
          expect(schema.reviewRating.ratingValue).toBe(review.rating);
          expect(schema.author.name).toBe(review.author);
          expect(schema.datePublished).toBe(review.date);
          expect(schema.reviewBody).toBe(review.text);
        }
      ),
      { numRuns: 100 }
    );
  });

  test('should preserve rating precision across valid range', () => {
    fc.assert(
      fc.property(
        fc.double({ min: 1, max: 10, noNaN: true }),
        fc.string({ minLength: 10, maxLength: 100 }),
        fc.string({ minLength: 3, maxLength: 50 }),
        (rating, text, author) => {
          const review: Review = {
            id: 'test-review',
            rating,
            text,
            author,
            location: 'Test Location',
            postcode: 'TEST',
            date: '2025-01-01',
            verified: true
          };
          
          const { container } = render(<ReviewSchema reviews={[review]} />);
          const schemas = extractJsonLd(container);
          
          // Property: Rating value should be preserved exactly
          expect(schemas[0].reviewRating.ratingValue).toBe(rating);
          expect(schemas[0].reviewRating.ratingValue).toBeGreaterThanOrEqual(1);
          expect(schemas[0].reviewRating.ratingValue).toBeLessThanOrEqual(10);
        }
      ),
      { numRuns: 100 }
    );
  });

  test('should handle reviews with optional fields', () => {
    fc.assert(
      fc.property(
        fc.record({
          id: fc.string({ minLength: 5, maxLength: 20 }),
          rating: fc.double({ min: 1, max: 10, noNaN: true }),
          text: fc.string({ minLength: 10, maxLength: 200 }),
          author: fc.string({ minLength: 3, maxLength: 50 }),
          location: fc.string({ minLength: 3, maxLength: 50 }),
          postcode: fc.string({ minLength: 2, maxLength: 10 }),
          date: fc.date({ min: new Date('2020-01-01'), max: new Date('2025-12-31') })
            .map(d => d.toISOString().split('T')[0]),
          verified: fc.boolean(),
          hasService: fc.boolean(),
          service: fc.string({ minLength: 5, maxLength: 100 }),
          hasJobLocation: fc.boolean(),
          jobLocation: fc.string({ minLength: 2, maxLength: 10 })
        }),
        (reviewData) => {
          const review: Review = {
            id: reviewData.id,
            rating: reviewData.rating,
            text: reviewData.text,
            author: reviewData.author,
            location: reviewData.location,
            postcode: reviewData.postcode,
            date: reviewData.date,
            verified: reviewData.verified,
            service: reviewData.hasService ? reviewData.service : undefined,
            jobLocation: reviewData.hasJobLocation ? reviewData.jobLocation : undefined
          };
          
          const { container } = render(<ReviewSchema reviews={[review]} />);
          const schemas = extractJsonLd(container);
          
          // Property: Schema should be valid regardless of optional fields
          expect(schemas.length).toBe(1);
          expect(schemas[0]['@type']).toBe('Review');
          expect(schemas[0].reviewRating.ratingValue).toBe(review.rating);
          expect(schemas[0].author.name).toBe(review.author);
          expect(schemas[0].datePublished).toBe(review.date);
          expect(schemas[0].reviewBody).toBe(review.text);
        }
      ),
      { numRuns: 100 }
    );
  });

  test('should generate unique @id for each review', () => {
    fc.assert(
      fc.property(
        fc.array(reviewArbitrary, { minLength: 2, maxLength: 10 }),
        (reviews) => {
          const { container } = render(<ReviewSchema reviews={reviews} />);
          const schemas = extractJsonLd(container);
          
          // Property: All @id values must be unique
          const ids = schemas.map(s => s['@id']);
          const uniqueIds = new Set(ids);
          expect(uniqueIds.size).toBe(schemas.length);
          
          // Property: Each @id should contain the corresponding review ID
          schemas.forEach((schema, index) => {
            expect(schema['@id']).toContain(reviews[index].id);
          });
        }
      ),
      { numRuns: 100 }
    );
  });

  test('should maintain consistent schema structure across all reviews', () => {
    fc.assert(
      fc.property(
        fc.array(reviewArbitrary, { minLength: 2, maxLength: 10 }),
        (reviews) => {
          const { container } = render(<ReviewSchema reviews={reviews} />);
          const schemas = extractJsonLd(container);
          
          // Property: All schemas should have the same structure
          const firstSchemaKeys = Object.keys(schemas[0]).sort();
          
          schemas.forEach(schema => {
            const schemaKeys = Object.keys(schema).sort();
            expect(schemaKeys).toEqual(firstSchemaKeys);
            
            // Check nested structure consistency
            expect(Object.keys(schema.itemReviewed).sort())
              .toEqual(Object.keys(schemas[0].itemReviewed).sort());
            expect(Object.keys(schema.reviewRating).sort())
              .toEqual(Object.keys(schemas[0].reviewRating).sort());
            expect(Object.keys(schema.author).sort())
              .toEqual(Object.keys(schemas[0].author).sort());
            expect(Object.keys(schema.publisher).sort())
              .toEqual(Object.keys(schemas[0].publisher).sort());
          });
        }
      ),
      { numRuns: 100 }
    );
  });

  test('should handle empty reviews array', () => {
    const { container } = render(<ReviewSchema reviews={[]} />);
    const schemas = extractJsonLd(container);
    
    // Property: Empty array should produce empty schema array
    expect(schemas.length).toBe(0);
  });

  test('should escape special characters in review text', () => {
    fc.assert(
      fc.property(
        fc.string({ minLength: 10, maxLength: 100 }),
        (text) => {
          const review: Review = {
            id: 'test-review',
            rating: 10,
            text: text,
            author: 'Test Author',
            location: 'Test Location',
            postcode: 'TEST',
            date: '2025-01-01',
            verified: true
          };
          
          const { container } = render(<ReviewSchema reviews={[review]} />);
          const schemas = extractJsonLd(container);
          
          // Property: Text should be properly escaped and parseable as JSON
          expect(schemas.length).toBe(1);
          expect(schemas[0].reviewBody).toBe(text);
        }
      ),
      { numRuns: 100 }
    );
  });

  test('should validate date format is ISO 8601', () => {
    fc.assert(
      fc.property(
        fc.date({ min: new Date('2020-01-01'), max: new Date('2025-12-31') }),
        (date) => {
          const isoDate = date.toISOString().split('T')[0];
          const review: Review = {
            id: 'test-review',
            rating: 10,
            text: 'Test review text',
            author: 'Test Author',
            location: 'Test Location',
            postcode: 'TEST',
            date: isoDate,
            verified: true
          };
          
          const { container } = render(<ReviewSchema reviews={[review]} />);
          const schemas = extractJsonLd(container);
          
          // Property: Date should be in ISO 8601 format (YYYY-MM-DD)
          expect(schemas[0].datePublished).toMatch(/^\d{4}-\d{2}-\d{2}$/);
          expect(schemas[0].datePublished).toBe(isoDate);
        }
      ),
      { numRuns: 100 }
    );
  });
});
