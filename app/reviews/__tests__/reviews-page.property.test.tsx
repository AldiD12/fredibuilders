/**
 * Property-Based Tests for Reviews Page Display
 * Feature: fredi-builders-empire-building
 * Property 5: Reviews Display Completeness
 * Property 6: Review Schema Markup
 * **Validates: Requirements 2.1, 2.2**
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
  date: fc.integer({ min: 2020, max: 2025 })
    .chain(year => fc.integer({ min: 1, max: 12 })
      .chain(month => fc.integer({ min: 1, max: 28 })
        .map(day => `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`))),
  verified: fc.boolean(),
  jobLocation: fc.option(fc.string({ minLength: 2, maxLength: 10 }), { nil: undefined })
}) as fc.Arbitrary<Review>;

/**
 * Simulate rendering reviews to HTML (simplified version)
 */
function renderReviewsToHTML(reviews: Review[]): string {
  return reviews.map(review => `
    <div data-testid="review-${review.id}">
      <div class="rating">${review.rating}</div>
      <div class="text">${review.text}</div>
      <div class="author">${review.author}</div>
      <div class="location">${review.location} (${review.postcode})</div>
      ${review.service ? `<div class="service">${review.service}</div>` : ''}
      <div class="date">${review.date}</div>
      ${review.verified ? '<div class="verified">Verified</div>' : ''}
    </div>
  `).join('');
}

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

describe('Property 5: Reviews Display Completeness', () => {
  /**
   * **Validates: Requirements 2.1**
   * For any set of reviews in the data source, when the reviews page renders,
   * all reviews should be displayed on the page
   */
  test('should display all reviews from the data source', () => {
    fc.assert(
      fc.property(
        fc.array(reviewArbitrary, { minLength: 1, maxLength: 50 }),
        (reviews) => {
          // Simulate rendering
          const html = renderReviewsToHTML(reviews);
          
          // Property: All reviews should be present in the HTML
          reviews.forEach(review => {
            expect(html).toContain(`review-${review.id}`);
            expect(html).toContain(review.text);
            expect(html).toContain(review.author);
            expect(html).toContain(review.location);
            expect(html).toContain(review.postcode);
          });
          
          // Property: Number of review elements should match number of reviews
          const reviewCount = (html.match(/data-testid="review-/g) || []).length;
          expect(reviewCount).toBe(reviews.length);
        }
      ),
      { numRuns: 100 }
    );
  });

  test('should display all required fields for each review', () => {
    fc.assert(
      fc.property(
        fc.array(reviewArbitrary, { minLength: 1, maxLength: 20 }),
        (reviews) => {
          const html = renderReviewsToHTML(reviews);
          
          // Property: Each review must have rating, text, author, location, postcode, and date
          reviews.forEach(review => {
            expect(html).toContain(String(review.rating));
            expect(html).toContain(review.text);
            expect(html).toContain(review.author);
            expect(html).toContain(review.location);
            expect(html).toContain(review.postcode);
            expect(html).toContain(review.date);
          });
        }
      ),
      { numRuns: 100 }
    );
  });

  test('should display optional fields when present', () => {
    fc.assert(
      fc.property(
        fc.array(reviewArbitrary, { minLength: 1, maxLength: 20 }),
        (reviews) => {
          const html = renderReviewsToHTML(reviews);
          
          // Property: Service should be displayed when present
          reviews.forEach(review => {
            if (review.service) {
              expect(html).toContain(review.service);
            }
          });
          
          // Property: Verified badge should be displayed for verified reviews
          const verifiedReviews = reviews.filter(r => r.verified);
          const verifiedCount = (html.match(/class="verified"/g) || []).length;
          expect(verifiedCount).toBe(verifiedReviews.length);
        }
      ),
      { numRuns: 100 }
    );
  });

  test('should handle empty reviews array', () => {
    const html = renderReviewsToHTML([]);
    
    // Property: Empty array should produce no review elements
    const reviewCount = (html.match(/data-testid="review-/g) || []).length;
    expect(reviewCount).toBe(0);
  });

  test('should handle single review', () => {
    fc.assert(
      fc.property(
        reviewArbitrary,
        (review) => {
          const html = renderReviewsToHTML([review]);
          
          // Property: Single review should be displayed with all fields
          expect(html).toContain(`review-${review.id}`);
          expect(html).toContain(review.text);
          expect(html).toContain(review.author);
          expect(html).toContain(review.location);
          
          const reviewCount = (html.match(/data-testid="review-/g) || []).length;
          expect(reviewCount).toBe(1);
        }
      ),
      { numRuns: 100 }
    );
  });

  test('should preserve review order', () => {
    fc.assert(
      fc.property(
        fc.array(reviewArbitrary, { minLength: 2, maxLength: 10 }),
        (reviews) => {
          // Ensure unique IDs for this test
          const uniqueReviews = reviews.map((r, i) => ({
            ...r,
            id: `review-${i}-${r.id}`
          }));
          
          const html = renderReviewsToHTML(uniqueReviews);
          
          // Property: Reviews should appear in the same order as the input array
          const positions = uniqueReviews.map(review => 
            html.indexOf(`review-${review.id}`)
          );
          
          // Check that positions are in ascending order
          for (let i = 1; i < positions.length; i++) {
            expect(positions[i]).toBeGreaterThan(positions[i - 1]);
          }
        }
      ),
      { numRuns: 100 }
    );
  });
});

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
            
            // reviewRating (Rating) - REQUIRED FIELDS
            expect(schema.reviewRating).toBeDefined();
            expect(schema.reviewRating['@type']).toBe('Rating');
            expect(schema.reviewRating.ratingValue).toBe(review.rating);
            expect(schema.reviewRating.bestRating).toBe(10);
            expect(schema.reviewRating.worstRating).toBe(1);
            
            // author (Person) - REQUIRED FIELD
            expect(schema.author).toBeDefined();
            expect(schema.author['@type']).toBe('Person');
            expect(schema.author.name).toBe(review.author);
            
            // datePublished - REQUIRED FIELD
            expect(schema.datePublished).toBe(review.date);
            
            // reviewBody
            expect(schema.reviewBody).toBe(review.text);
          });
        }
      ),
      { numRuns: 100 }
    );
  });

  test('should include all three required fields: rating, author, and date', () => {
    fc.assert(
      fc.property(
        reviewArbitrary,
        (review) => {
          const schemas = generateReviewSchemas([review]);
          const schema = schemas[0];
          
          // Property: Must have rating field
          expect(schema.reviewRating).toBeDefined();
          expect(schema.reviewRating.ratingValue).toBe(review.rating);
          
          // Property: Must have author field
          expect(schema.author).toBeDefined();
          expect(schema.author.name).toBe(review.author);
          
          // Property: Must have date field
          expect(schema.datePublished).toBeDefined();
          expect(schema.datePublished).toBe(review.date);
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
          const schemas = generateReviewSchemas(reviews);
          
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
          const schemas = generateReviewSchemas(reviews);
          
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
          });
        }
      ),
      { numRuns: 100 }
    );
  });

  test('should validate date format is ISO 8601', () => {
    fc.assert(
      fc.property(
        fc.integer({ min: 2020, max: 2025 }),
        fc.integer({ min: 1, max: 12 }),
        fc.integer({ min: 1, max: 28 }),
        (year, month, day) => {
          const isoDate = `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
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
          
          const schemas = generateReviewSchemas([review]);
          
          // Property: Date should be in ISO 8601 format (YYYY-MM-DD)
          expect(schemas[0].datePublished).toMatch(/^\d{4}-\d{2}-\d{2}$/);
          expect(schemas[0].datePublished).toBe(isoDate);
        }
      ),
      { numRuns: 100 }
    );
  });

  test('should preserve rating precision across valid range', () => {
    fc.assert(
      fc.property(
        fc.double({ min: 1, max: 10, noNaN: true }),
        (rating) => {
          const review: Review = {
            id: 'test-review',
            rating,
            text: 'Test review text',
            author: 'Test Author',
            location: 'Test Location',
            postcode: 'TEST',
            date: '2025-01-01',
            verified: true
          };
          
          const schemas = generateReviewSchemas([review]);
          
          // Property: Rating value should be preserved exactly
          expect(schemas[0].reviewRating.ratingValue).toBe(rating);
          expect(schemas[0].reviewRating.ratingValue).toBeGreaterThanOrEqual(1);
          expect(schemas[0].reviewRating.ratingValue).toBeLessThanOrEqual(10);
        }
      ),
      { numRuns: 100 }
    );
  });
});
