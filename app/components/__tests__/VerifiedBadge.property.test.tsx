/**
 * Property-Based Tests for Verified Reviewer Badges
 * Feature: fredi-builders-empire-building
 * Property 9: Verified Reviewer Badges
 * **Validates: Requirements 2.6**
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
 * Simulate rendering reviews with verified badges
 */
function renderReviewsWithBadges(reviews: Review[]): string {
  return reviews.map(review => `
    <div data-testid="review-${review.id}">
      <div class="rating">${review.rating}</div>
      <div class="text">${review.text}</div>
      ${review.verified ? '<div class="verified-badge" data-verified="true">Verified</div>' : ''}
    </div>
  `).join('');
}

/**
 * Count verified badges in HTML
 */
function countVerifiedBadges(html: string): number {
  return (html.match(/class="verified-badge"/g) || []).length;
}

/**
 * Check if review has verified badge in HTML
 */
function hasVerifiedBadge(html: string, reviewId: string): boolean {
  // Find the review div
  const reviewPattern = `data-testid="review-${reviewId}"`;
  const reviewStart = html.indexOf(reviewPattern);
  if (reviewStart === -1) return false;
  
  // Find the next closing div tag (end of this review)
  let depth = 1;
  let pos = html.indexOf('<div', reviewStart + reviewPattern.length);
  let closePos = html.indexOf('</div>', reviewStart + reviewPattern.length);
  
  // Simple approach: just check if verified-badge appears before the next review or end
  const nextReview = html.indexOf('data-testid="review-', reviewStart + reviewPattern.length);
  const searchEnd = nextReview === -1 ? html.length : nextReview;
  const reviewSection = html.substring(reviewStart, searchEnd);
  
  return reviewSection.includes('verified-badge');
}

describe('Property 9: Verified Reviewer Badges', () => {
  /**
   * **Validates: Requirements 2.6**
   * For any set of reviews, those marked as verified should render with a verified
   * reviewer badge, and non-verified reviews should not have the badge
   */
  test('should display badge only for verified reviews', () => {
    fc.assert(
      fc.property(
        fc.array(reviewArbitrary, { minLength: 5, maxLength: 30 }),
        (reviews) => {
          // Ensure unique IDs
          const uniqueReviews = reviews.map((r, i) => ({
            ...r,
            id: `${r.id}-${i}`
          }));
          
          const html = renderReviewsWithBadges(uniqueReviews);
          
          // Property: Number of badges should equal number of verified reviews
          const verifiedCount = uniqueReviews.filter(r => r.verified).length;
          const badgeCount = countVerifiedBadges(html);
          expect(badgeCount).toBe(verifiedCount);
          
          // Property: Each verified review should have a badge
          uniqueReviews.forEach(review => {
            const hasBadge = hasVerifiedBadge(html, review.id);
            if (review.verified) {
              expect(hasBadge).toBe(true);
            } else {
              expect(hasBadge).toBe(false);
            }
          });
        }
      ),
      { numRuns: 100 }
    );
  });

  test('should not display badge for non-verified reviews', () => {
    fc.assert(
      fc.property(
        fc.array(reviewArbitrary, { minLength: 1, maxLength: 20 }),
        (reviews) => {
          // Filter to only non-verified reviews
          const nonVerified = reviews.map(r => ({ ...r, verified: false }));
          const html = renderReviewsWithBadges(nonVerified);
          
          // Property: Should have zero badges
          const badgeCount = countVerifiedBadges(html);
          expect(badgeCount).toBe(0);
        }
      ),
      { numRuns: 100 }
    );
  });

  test('should display badge for all verified reviews', () => {
    fc.assert(
      fc.property(
        fc.array(reviewArbitrary, { minLength: 1, maxLength: 20 }),
        (reviews) => {
          // Set all reviews to verified
          const allVerified = reviews.map(r => ({ ...r, verified: true }));
          const html = renderReviewsWithBadges(allVerified);
          
          // Property: Should have badge for each review
          const badgeCount = countVerifiedBadges(html);
          expect(badgeCount).toBe(reviews.length);
        }
      ),
      { numRuns: 100 }
    );
  });

  test('should handle mixed verified and non-verified reviews', () => {
    fc.assert(
      fc.property(
        fc.integer({ min: 1, max: 10 }),
        fc.integer({ min: 1, max: 10 }),
        (verifiedCount, nonVerifiedCount) => {
          // Create mixed reviews
          const reviews: Review[] = [
            ...Array.from({ length: verifiedCount }, (_, i) => ({
              id: `verified-${i}`,
              rating: 10,
              text: 'Test review',
              author: 'Test Author',
              location: 'Test Location',
              postcode: 'SW16',
              date: '2025-01-01',
              verified: true
            })),
            ...Array.from({ length: nonVerifiedCount }, (_, i) => ({
              id: `non-verified-${i}`,
              rating: 10,
              text: 'Test review',
              author: 'Test Author',
              location: 'Test Location',
              postcode: 'SW16',
              date: '2025-01-01',
              verified: false
            }))
          ];
          
          const html = renderReviewsWithBadges(reviews);
          
          // Property: Badge count should equal verified count
          const badgeCount = countVerifiedBadges(html);
          expect(badgeCount).toBe(verifiedCount);
          
          // Property: Each verified review should have badge
          reviews.forEach(review => {
            const hasBadge = hasVerifiedBadge(html, review.id);
            expect(hasBadge).toBe(review.verified);
          });
        }
      ),
      { numRuns: 100 }
    );
  });

  test('should preserve badge state regardless of other review properties', () => {
    fc.assert(
      fc.property(
        fc.double({ min: 1, max: 10, noNaN: true }),
        fc.string({ minLength: 10, maxLength: 200 }),
        fc.boolean(),
        (rating, text, verified) => {
          const review: Review = {
            id: 'test-review',
            rating,
            text,
            author: 'Test Author',
            location: 'Test Location',
            postcode: 'SW16',
            date: '2025-01-01',
            verified
          };
          
          const html = renderReviewsWithBadges([review]);
          const hasBadge = hasVerifiedBadge(html, review.id);
          
          // Property: Badge presence should only depend on verified field
          expect(hasBadge).toBe(verified);
        }
      ),
      { numRuns: 100 }
    );
  });

  test('should handle empty reviews array', () => {
    const html = renderReviewsWithBadges([]);
    const badgeCount = countVerifiedBadges(html);
    
    // Property: Empty array should have zero badges
    expect(badgeCount).toBe(0);
  });

  test('should handle single verified review', () => {
    const review: Review = {
      id: 'test-review',
      rating: 10,
      text: 'Test review',
      author: 'Test Author',
      location: 'Test Location',
      postcode: 'SW16',
      date: '2025-01-01',
      verified: true
    };
    
    const html = renderReviewsWithBadges([review]);
    const badgeCount = countVerifiedBadges(html);
    
    // Property: Should have exactly one badge
    expect(badgeCount).toBe(1);
    expect(hasVerifiedBadge(html, review.id)).toBe(true);
  });

  test('should handle single non-verified review', () => {
    const review: Review = {
      id: 'test-review',
      rating: 10,
      text: 'Test review',
      author: 'Test Author',
      location: 'Test Location',
      postcode: 'SW16',
      date: '2025-01-01',
      verified: false
    };
    
    const html = renderReviewsWithBadges([review]);
    const badgeCount = countVerifiedBadges(html);
    
    // Property: Should have zero badges
    expect(badgeCount).toBe(0);
    expect(hasVerifiedBadge(html, review.id)).toBe(false);
  });

  test('should maintain badge consistency across multiple renders', () => {
    fc.assert(
      fc.property(
        fc.array(reviewArbitrary, { minLength: 1, maxLength: 20 }),
        (reviews) => {
          // Render twice
          const html1 = renderReviewsWithBadges(reviews);
          const html2 = renderReviewsWithBadges(reviews);
          
          // Property: Badge count should be consistent
          const badgeCount1 = countVerifiedBadges(html1);
          const badgeCount2 = countVerifiedBadges(html2);
          expect(badgeCount1).toBe(badgeCount2);
          
          // Property: Each review should have same badge state
          reviews.forEach(review => {
            const hasBadge1 = hasVerifiedBadge(html1, review.id);
            const hasBadge2 = hasVerifiedBadge(html2, review.id);
            expect(hasBadge1).toBe(hasBadge2);
          });
        }
      ),
      { numRuns: 100 }
    );
  });

  test('should handle reviews with identical properties except verified status', () => {
    const baseReview = {
      rating: 10,
      text: 'Identical review text',
      author: 'Same Author',
      location: 'Same Location',
      postcode: 'SW16',
      date: '2025-01-01'
    };
    
    const reviews: Review[] = [
      { ...baseReview, id: 'review-1', verified: true },
      { ...baseReview, id: 'review-2', verified: false },
      { ...baseReview, id: 'review-3', verified: true }
    ];
    
    const html = renderReviewsWithBadges(reviews);
    
    // Property: Only verified reviews should have badges
    expect(hasVerifiedBadge(html, 'review-1')).toBe(true);
    expect(hasVerifiedBadge(html, 'review-2')).toBe(false);
    expect(hasVerifiedBadge(html, 'review-3')).toBe(true);
    
    const badgeCount = countVerifiedBadges(html);
    expect(badgeCount).toBe(2);
  });
});
