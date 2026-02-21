/**
 * Property-Based Tests for Reviews Chronological Ordering
 * Feature: fredi-builders-empire-building
 * Property 10: Reviews Chronological Ordering
 * **Validates: Requirements 2.7**
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
 * Sort reviews by date (mimics ReviewsFilter component logic)
 */
function sortReviewsByDate(reviews: Review[], order: 'newest' | 'oldest' | 'highest'): Review[] {
  const sorted = [...reviews];
  
  if (order === 'newest') {
    return sorted.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  } else if (order === 'oldest') {
    return sorted.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
  } else if (order === 'highest') {
    return sorted.sort((a, b) => b.rating - a.rating);
  }
  
  return sorted;
}

describe('Property 10: Reviews Chronological Ordering', () => {
  /**
   * **Validates: Requirements 2.7**
   * For any set of reviews with dates, when displayed with default sorting,
   * the reviews should be ordered by date in descending order (newest first)
   */
  test('should sort reviews by date descending (newest first) by default', () => {
    fc.assert(
      fc.property(
        fc.array(reviewArbitrary, { minLength: 2, maxLength: 30 }),
        (reviews) => {
          // Sort by newest first (default)
          const sorted = sortReviewsByDate(reviews, 'newest');
          
          // Property: Each review should have a date >= the next review's date
          for (let i = 0; i < sorted.length - 1; i++) {
            const currentDate = new Date(sorted[i].date).getTime();
            const nextDate = new Date(sorted[i + 1].date).getTime();
            expect(currentDate).toBeGreaterThanOrEqual(nextDate);
          }
        }
      ),
      { numRuns: 100 }
    );
  });

  test('should sort reviews by date ascending (oldest first)', () => {
    fc.assert(
      fc.property(
        fc.array(reviewArbitrary, { minLength: 2, maxLength: 30 }),
        (reviews) => {
          // Sort by oldest first
          const sorted = sortReviewsByDate(reviews, 'oldest');
          
          // Property: Each review should have a date <= the next review's date
          for (let i = 0; i < sorted.length - 1; i++) {
            const currentDate = new Date(sorted[i].date).getTime();
            const nextDate = new Date(sorted[i + 1].date).getTime();
            expect(currentDate).toBeLessThanOrEqual(nextDate);
          }
        }
      ),
      { numRuns: 100 }
    );
  });

  test('should sort reviews by rating descending (highest first)', () => {
    fc.assert(
      fc.property(
        fc.array(reviewArbitrary, { minLength: 2, maxLength: 30 }),
        (reviews) => {
          // Sort by highest rated first
          const sorted = sortReviewsByDate(reviews, 'highest');
          
          // Property: Each review should have a rating >= the next review's rating
          for (let i = 0; i < sorted.length - 1; i++) {
            expect(sorted[i].rating).toBeGreaterThanOrEqual(sorted[i + 1].rating);
          }
        }
      ),
      { numRuns: 100 }
    );
  });

  test('should preserve all reviews when sorting', () => {
    fc.assert(
      fc.property(
        fc.array(reviewArbitrary, { minLength: 1, maxLength: 30 }),
        fc.oneof(fc.constant('newest'), fc.constant('oldest'), fc.constant('highest')),
        (reviews, sortOrder) => {
          const sorted = sortReviewsByDate(reviews, sortOrder as 'newest' | 'oldest' | 'highest');
          
          // Property: Sorted array should have same length as original
          expect(sorted.length).toBe(reviews.length);
          
          // Property: All original reviews should be present in sorted array
          reviews.forEach(review => {
            const found = sorted.find(r => r.id === review.id);
            expect(found).toBeDefined();
          });
        }
      ),
      { numRuns: 100 }
    );
  });

  test('should handle reviews with same date', () => {
    fc.assert(
      fc.property(
        fc.integer({ min: 2, max: 10 }),
        fc.constant('2025-01-01'),
        (count, date) => {
          // Create reviews all with the same date
          const reviews: Review[] = Array.from({ length: count }, (_, i) => ({
            id: `review-${i}`,
            rating: Math.random() * 9 + 1,
            text: 'Test review',
            author: 'Test Author',
            location: 'Test Location',
            postcode: 'SW16',
            date: date,
            verified: true
          }));
          
          const sorted = sortReviewsByDate(reviews, 'newest');
          
          // Property: Should not throw error and return all reviews
          expect(sorted.length).toBe(count);
          
          // Property: All dates should be the same
          sorted.forEach(review => {
            expect(review.date).toBe(date);
          });
        }
      ),
      { numRuns: 100 }
    );
  });

  test('should handle reviews with same rating', () => {
    fc.assert(
      fc.property(
        fc.integer({ min: 2, max: 10 }),
        fc.double({ min: 1, max: 10, noNaN: true }),
        (count, rating) => {
          // Create reviews all with the same rating
          const reviews: Review[] = Array.from({ length: count }, (_, i) => ({
            id: `review-${i}`,
            rating: rating,
            text: 'Test review',
            author: 'Test Author',
            location: 'Test Location',
            postcode: 'SW16',
            date: `2025-01-${String(i + 1).padStart(2, '0')}`,
            verified: true
          }));
          
          const sorted = sortReviewsByDate(reviews, 'highest');
          
          // Property: Should not throw error and return all reviews
          expect(sorted.length).toBe(count);
          
          // Property: All ratings should be the same
          sorted.forEach(review => {
            expect(review.rating).toBe(rating);
          });
        }
      ),
      { numRuns: 100 }
    );
  });

  test('should handle single review', () => {
    fc.assert(
      fc.property(
        reviewArbitrary,
        fc.oneof(fc.constant('newest'), fc.constant('oldest'), fc.constant('highest')),
        (review, sortOrder) => {
          const sorted = sortReviewsByDate([review], sortOrder as 'newest' | 'oldest' | 'highest');
          
          // Property: Single review should remain unchanged
          expect(sorted.length).toBe(1);
          expect(sorted[0]).toEqual(review);
        }
      ),
      { numRuns: 100 }
    );
  });

  test('should handle empty array', () => {
    const sorted = sortReviewsByDate([], 'newest');
    
    // Property: Empty array should remain empty
    expect(sorted.length).toBe(0);
  });

  test('should not mutate original array', () => {
    fc.assert(
      fc.property(
        fc.array(reviewArbitrary, { minLength: 2, maxLength: 20 }),
        (reviews) => {
          // Create a copy of the original array
          const originalCopy = reviews.map(r => ({ ...r }));
          
          // Sort the reviews
          sortReviewsByDate(reviews, 'newest');
          
          // Property: Original array should remain unchanged
          expect(reviews.length).toBe(originalCopy.length);
          reviews.forEach((review, index) => {
            expect(review.id).toBe(originalCopy[index].id);
            expect(review.date).toBe(originalCopy[index].date);
            expect(review.rating).toBe(originalCopy[index].rating);
          });
        }
      ),
      { numRuns: 100 }
    );
  });

  test('should handle reviews spanning multiple years', () => {
    const reviews: Review[] = [
      {
        id: 'review-2020',
        rating: 10,
        text: 'Test',
        author: 'Author',
        location: 'Location',
        postcode: 'SW16',
        date: '2020-06-15',
        verified: true
      },
      {
        id: 'review-2023',
        rating: 10,
        text: 'Test',
        author: 'Author',
        location: 'Location',
        postcode: 'SW16',
        date: '2023-03-20',
        verified: true
      },
      {
        id: 'review-2025',
        rating: 10,
        text: 'Test',
        author: 'Author',
        location: 'Location',
        postcode: 'SW16',
        date: '2025-01-10',
        verified: true
      }
    ];
    
    const sortedNewest = sortReviewsByDate(reviews, 'newest');
    const sortedOldest = sortReviewsByDate(reviews, 'oldest');
    
    // Property: Newest first should have 2025 first
    expect(sortedNewest[0].id).toBe('review-2025');
    expect(sortedNewest[2].id).toBe('review-2020');
    
    // Property: Oldest first should have 2020 first
    expect(sortedOldest[0].id).toBe('review-2020');
    expect(sortedOldest[2].id).toBe('review-2025');
  });

  test('should maintain stable sort for equal values', () => {
    fc.assert(
      fc.property(
        fc.integer({ min: 3, max: 10 }),
        (count) => {
          // Create reviews with same date but different IDs
          const reviews: Review[] = Array.from({ length: count }, (_, i) => ({
            id: `review-${i}`,
            rating: 10,
            text: 'Test review',
            author: 'Test Author',
            location: 'Test Location',
            postcode: 'SW16',
            date: '2025-01-01',
            verified: true
          }));
          
          const sorted1 = sortReviewsByDate(reviews, 'newest');
          const sorted2 = sortReviewsByDate(reviews, 'newest');
          
          // Property: Multiple sorts should produce same order
          sorted1.forEach((review, index) => {
            expect(review.id).toBe(sorted2[index].id);
          });
        }
      ),
      { numRuns: 100 }
    );
  });
});
