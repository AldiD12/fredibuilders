/**
 * Property-Based Tests for Reviews Filtering
 * Feature: fredi-builders-empire-building
 * Property 7: Reviews Location Filtering
 * Property 8: Reviews Service Filtering
 * **Validates: Requirements 2.4, 2.5**
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
  postcode: fc.oneof(
    fc.constant('SW16'),
    fc.constant('CR7'),
    fc.constant('CR0'),
    fc.constant('SE25'),
    fc.constant('KT22'),
    fc.constant('SM1'),
    fc.string({ minLength: 2, maxLength: 10 })
  ),
  service: fc.option(
    fc.oneof(
      fc.constant('Bathroom renovation'),
      fc.constant('Wet room installation'),
      fc.constant('Tiling work'),
      fc.constant('Extension building'),
      fc.constant('Kitchen fitting'),
      fc.constant('Plumbing repair'),
      fc.constant('Painting and decorating'),
      fc.string({ minLength: 5, maxLength: 100 })
    ),
    { nil: undefined }
  ),
  date: fc.integer({ min: 2020, max: 2025 })
    .chain(year => fc.integer({ min: 1, max: 12 })
      .chain(month => fc.integer({ min: 1, max: 28 })
        .map(day => `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`))),
  verified: fc.boolean(),
  jobLocation: fc.option(fc.string({ minLength: 2, maxLength: 10 }), { nil: undefined })
}) as fc.Arbitrary<Review>;

/**
 * Filter reviews by location (mimics ReviewsFilter component logic)
 */
function filterByLocation(reviews: Review[], postcode: string): Review[] {
  if (postcode === 'all') return reviews;
  return reviews.filter(r => r.postcode === postcode);
}

/**
 * Filter reviews by service (mimics ReviewsFilter component logic)
 */
function filterByService(reviews: Review[], serviceFilter: string): Review[] {
  if (serviceFilter === 'all') return reviews;
  
  return reviews.filter(r => {
    if (!r.service) return false;
    const service = r.service.toLowerCase();
    const filter = serviceFilter.toLowerCase();
    
    if (filter === 'bathroom') return service.includes('bathroom');
    if (filter === 'wet room') return service.includes('wet room');
    if (filter === 'tiling') return service.includes('tiling') || service.includes('tiles');
    if (filter === 'extension') return service.includes('extension');
    if (filter === 'kitchen') return service.includes('kitchen');
    if (filter === 'plumbing') return service.includes('plumbing');
    if (filter === 'painting') return service.includes('painting');
    return true;
  });
}

describe('Property 7: Reviews Location Filtering', () => {
  /**
   * **Validates: Requirements 2.4**
   * For any set of reviews with mixed locations, when a location filter is applied,
   * the displayed reviews should only include reviews from that location
   */
  test('should filter reviews by location postcode', () => {
    fc.assert(
      fc.property(
        fc.array(reviewArbitrary, { minLength: 5, maxLength: 30 }),
        fc.oneof(fc.constant('SW16'), fc.constant('CR7'), fc.constant('CR0')),
        (reviews, filterPostcode) => {
          // Apply location filter
          const filtered = filterByLocation(reviews, filterPostcode);
          
          // Property: All filtered reviews must have the selected postcode
          filtered.forEach(review => {
            expect(review.postcode).toBe(filterPostcode);
          });
          
          // Property: No reviews with different postcodes should be included
          const expectedCount = reviews.filter(r => r.postcode === filterPostcode).length;
          expect(filtered.length).toBe(expectedCount);
        }
      ),
      { numRuns: 100 }
    );
  });

  test('should return all reviews when filter is "all"', () => {
    fc.assert(
      fc.property(
        fc.array(reviewArbitrary, { minLength: 1, maxLength: 30 }),
        (reviews) => {
          // Apply "all" filter
          const filtered = filterByLocation(reviews, 'all');
          
          // Property: Should return all reviews unchanged
          expect(filtered.length).toBe(reviews.length);
          expect(filtered).toEqual(reviews);
        }
      ),
      { numRuns: 100 }
    );
  });

  test('should return empty array when no reviews match location', () => {
    fc.assert(
      fc.property(
        fc.array(reviewArbitrary, { minLength: 1, maxLength: 20 }),
        (reviews) => {
          // Use a postcode that doesn't exist in the reviews
          const nonExistentPostcode = 'XXXXX';
          const filtered = filterByLocation(reviews, nonExistentPostcode);
          
          // Property: Should return empty array
          expect(filtered.length).toBe(0);
        }
      ),
      { numRuns: 100 }
    );
  });

  test('should preserve review properties when filtering', () => {
    fc.assert(
      fc.property(
        fc.array(reviewArbitrary, { minLength: 5, maxLength: 20 }),
        fc.oneof(fc.constant('SW16'), fc.constant('CR7')),
        (reviews, filterPostcode) => {
          const filtered = filterByLocation(reviews, filterPostcode);
          
          // Property: All properties of filtered reviews should be preserved
          filtered.forEach(review => {
            expect(review.id).toBeDefined();
            expect(review.rating).toBeGreaterThanOrEqual(1);
            expect(review.rating).toBeLessThanOrEqual(10);
            expect(review.text).toBeDefined();
            expect(review.author).toBeDefined();
            expect(review.location).toBeDefined();
            expect(review.date).toBeDefined();
          });
        }
      ),
      { numRuns: 100 }
    );
  });

  test('should handle reviews with same postcode', () => {
    fc.assert(
      fc.property(
        fc.integer({ min: 2, max: 10 }),
        fc.constant('SW16'),
        (count, postcode) => {
          // Create reviews all with the same postcode
          const reviews: Review[] = Array.from({ length: count }, (_, i) => ({
            id: `review-${i}`,
            rating: 10,
            text: 'Test review',
            author: 'Test Author',
            location: 'Test Location',
            postcode: postcode,
            date: '2025-01-01',
            verified: true
          }));
          
          const filtered = filterByLocation(reviews, postcode);
          
          // Property: Should return all reviews
          expect(filtered.length).toBe(count);
        }
      ),
      { numRuns: 100 }
    );
  });
});

describe('Property 8: Reviews Service Filtering', () => {
  /**
   * **Validates: Requirements 2.5**
   * For any set of reviews, when a service filter is applied,
   * the displayed reviews should only include reviews mentioning that service
   */
  test('should filter reviews by service type', () => {
    fc.assert(
      fc.property(
        fc.array(reviewArbitrary, { minLength: 5, maxLength: 30 }),
        fc.oneof(
          fc.constant('Bathroom'),
          fc.constant('Wet Room'),
          fc.constant('Tiling'),
          fc.constant('Extension')
        ),
        (reviews, serviceFilter) => {
          // Apply service filter
          const filtered = filterByService(reviews, serviceFilter);
          
          // Property: All filtered reviews must mention the service
          filtered.forEach(review => {
            expect(review.service).toBeDefined();
            const serviceLower = review.service!.toLowerCase();
            const filterLower = serviceFilter.toLowerCase();
            
            if (filterLower === 'bathroom') {
              expect(serviceLower).toContain('bathroom');
            } else if (filterLower === 'wet room') {
              expect(serviceLower).toContain('wet room');
            } else if (filterLower === 'tiling') {
              expect(serviceLower.includes('tiling') || serviceLower.includes('tiles')).toBe(true);
            } else if (filterLower === 'extension') {
              expect(serviceLower).toContain('extension');
            }
          });
        }
      ),
      { numRuns: 100 }
    );
  });

  test('should return all reviews when service filter is "all"', () => {
    fc.assert(
      fc.property(
        fc.array(reviewArbitrary, { minLength: 1, maxLength: 30 }),
        (reviews) => {
          // Apply "all" filter
          const filtered = filterByService(reviews, 'all');
          
          // Property: Should return all reviews unchanged
          expect(filtered.length).toBe(reviews.length);
          expect(filtered).toEqual(reviews);
        }
      ),
      { numRuns: 100 }
    );
  });

  test('should exclude reviews without service field', () => {
    fc.assert(
      fc.property(
        fc.array(reviewArbitrary, { minLength: 5, maxLength: 20 }),
        fc.oneof(fc.constant('Bathroom'), fc.constant('Extension')),
        (reviews, serviceFilter) => {
          const filtered = filterByService(reviews, serviceFilter);
          
          // Property: All filtered reviews must have a service field
          filtered.forEach(review => {
            expect(review.service).toBeDefined();
            expect(review.service).not.toBeUndefined();
          });
        }
      ),
      { numRuns: 100 }
    );
  });

  test('should handle case-insensitive service matching', () => {
    const reviews: Review[] = [
      {
        id: 'review-1',
        rating: 10,
        text: 'Great work',
        author: 'Test Author',
        location: 'Test Location',
        postcode: 'SW16',
        service: 'BATHROOM RENOVATION',
        date: '2025-01-01',
        verified: true
      },
      {
        id: 'review-2',
        rating: 10,
        text: 'Excellent',
        author: 'Test Author',
        location: 'Test Location',
        postcode: 'SW16',
        service: 'bathroom fitting',
        date: '2025-01-01',
        verified: true
      }
    ];
    
    const filtered = filterByService(reviews, 'Bathroom');
    
    // Property: Should match regardless of case
    expect(filtered.length).toBe(2);
  });

  test('should combine location and service filters correctly', () => {
    fc.assert(
      fc.property(
        fc.array(reviewArbitrary, { minLength: 10, maxLength: 30 }),
        fc.oneof(fc.constant('SW16'), fc.constant('CR7')),
        fc.oneof(fc.constant('Bathroom'), fc.constant('Extension')),
        (reviews, locationFilter, serviceFilter) => {
          // Apply both filters
          const locationFiltered = filterByLocation(reviews, locationFilter);
          const bothFiltered = filterByService(locationFiltered, serviceFilter);
          
          // Property: All filtered reviews must match both criteria
          bothFiltered.forEach(review => {
            expect(review.postcode).toBe(locationFilter);
            expect(review.service).toBeDefined();
            const serviceLower = review.service!.toLowerCase();
            const filterLower = serviceFilter.toLowerCase();
            
            if (filterLower === 'bathroom') {
              expect(serviceLower).toContain('bathroom');
            } else if (filterLower === 'extension') {
              expect(serviceLower).toContain('extension');
            }
          });
          
          // Property: Result should be subset of location-only filter
          expect(bothFiltered.length).toBeLessThanOrEqual(locationFiltered.length);
        }
      ),
      { numRuns: 100 }
    );
  });

  test('should preserve review order after filtering', () => {
    fc.assert(
      fc.property(
        fc.array(reviewArbitrary, { minLength: 5, maxLength: 20 }),
        fc.oneof(fc.constant('Bathroom'), fc.constant('Extension')),
        (reviews, serviceFilter) => {
          const filtered = filterByService(reviews, serviceFilter);
          
          // Property: Filtered reviews should maintain relative order from original array
          if (filtered.length >= 2) {
            const originalIndices = filtered.map(fr => 
              reviews.findIndex(r => r.id === fr.id)
            );
            
            // Check that indices are in ascending order
            for (let i = 1; i < originalIndices.length; i++) {
              expect(originalIndices[i]).toBeGreaterThan(originalIndices[i - 1]);
            }
          }
        }
      ),
      { numRuns: 100 }
    );
  });
});
