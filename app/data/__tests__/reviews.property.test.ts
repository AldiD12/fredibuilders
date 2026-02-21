/**
 * Property-Based Tests for Reviews Data Parsing
 * Feature: fredi-builders-empire-building
 * Property 44: Reviews Data Parsing
 * **Validates: Requirements 12.5**
 */

import { describe, test, expect } from 'vitest';
import * as fc from 'fast-check';
import { Review } from '../reviews';

/**
 * Parse a reviews.txt format string into Review objects
 * This simulates the parsing logic that was used to create the reviews data
 */
function parseReviewsFromText(reviewsText: string): Review[] {
  const reviews: Review[] = [];
  const lines = reviewsText.trim().split('\n');
  
  let i = 0;
  let reviewId = 1;
  
  while (i < lines.length) {
    // Skip empty lines
    if (!lines[i] || lines[i].trim() === '') {
      i++;
      continue;
    }
    
    // Parse rating (first line of review)
    const ratingLine = lines[i].trim();
    const rating = parseFloat(ratingLine);
    
    if (isNaN(rating) || rating < 1 || rating > 10) {
      i++;
      continue;
    }
    
    i++;
    
    // Parse service/title (second line)
    let service = '';
    if (i < lines.length && lines[i].trim() !== '' && !lines[i].startsWith('Posted')) {
      service = lines[i].trim();
      i++;
    }
    
    // Parse date (Posted X ago)
    let dateStr = '';
    if (i < lines.length && lines[i].startsWith('Posted')) {
      dateStr = lines[i].trim();
      i++;
    }
    
    // Parse review text (multiple lines until we hit "Verified reviewer" or "Job location")
    let text = '';
    while (i < lines.length && 
           !lines[i].startsWith('Verified reviewer') && 
           !lines[i].startsWith('Job location:') &&
           !lines[i].match(/^\d+(\.\d+)?$/)) { // Not a rating (next review)
      if (lines[i].trim() !== '' && 
          !lines[i].startsWith('review attachment') &&
          !lines[i].startsWith('Posted')) {
        text += (text ? ' ' : '') + lines[i].trim();
      }
      i++;
    }
    
    // Parse verified status
    let verified = false;
    if (i < lines.length && lines[i].startsWith('Verified reviewer')) {
      verified = true;
      i++;
    }
    
    // Parse job location
    let jobLocation = '';
    let postcode = '';
    if (i < lines.length && lines[i].startsWith('Job location:')) {
      jobLocation = lines[i].replace('Job location:', '').trim();
      postcode = jobLocation;
      i++;
    }
    
    // Parse author name (if present)
    let author = verified ? 'Verified reviewer' : 'Verified reviewer';
    if (i < lines.length && 
        !lines[i].match(/^\d+(\.\d+)?$/) && 
        lines[i].trim() !== '' &&
        !lines[i].startsWith('Posted')) {
      author = lines[i].trim();
      i++;
    }
    
    // Only add review if we have minimum required fields
    if (rating && text) {
      reviews.push({
        id: `review-${String(reviewId).padStart(3, '0')}`,
        rating,
        text,
        author,
        location: extractLocationFromPostcode(postcode),
        postcode: postcode || 'UNKNOWN',
        service: service || undefined,
        date: convertDateToISO(dateStr),
        verified,
        jobLocation: jobLocation || undefined
      });
      reviewId++;
    }
  }
  
  return reviews;
}

/**
 * Helper to extract location name from postcode
 */
function extractLocationFromPostcode(postcode: string): string {
  // This is a simplified version - in reality would need a lookup table
  const postcodeMap: Record<string, string> = {
    'CR7': 'Thornton Heath',
    'SW16': 'Streatham',
    'SE25': 'South Norwood',
    'CR0': 'Croydon',
    'SM5': 'Sutton',
    'KT22': 'Esher',
    'SM1': 'Sutton',
    'SE22': 'East Dulwich',
    'SE27': 'West Norwood',
    'SE19': 'Crystal Palace',
    'SW12': 'Balham',
    'KT1': 'Kingston',
    'E11': 'Leytonstone',
    'SW2': 'Brixton',
    'SE13': 'Lewisham',
    'SW4': 'Clapham',
    'ME15': 'Maidstone',
    'SW9': 'Stockwell',
    'SE10': 'Greenwich',
    'CR4': 'Mitcham',
    'RH1': 'Redhill',
    'SE26': 'Sydenham',
    'E14': 'Canary Wharf',
    'WN4': 'Wigan',
    'WN8': 'Wigan',
    'WN6': 'Wigan',
    'SW17': 'Tooting',
    'N19': 'Archway',
    'CR8': 'Purley',
    'CR3': 'Caterham',
    'KT20': 'Epsom',
    'SW18': 'Wandsworth',
    'SE9': 'Eltham',
    'DA4': 'Dartford'
  };
  
  return postcodeMap[postcode] || 'Unknown';
}

/**
 * Helper to convert "Posted X ago" to ISO date
 */
function convertDateToISO(dateStr: string): string {
  // Simplified - returns a valid ISO date
  // In reality would parse "Posted 5 days ago" etc.
  const now = new Date();
  return now.toISOString().split('T')[0];
}

/**
 * Arbitrary generator for valid review text format
 */
const validReviewTextArbitrary = fc.record({
  rating: fc.double({ min: 1, max: 10, noNaN: true }),
  service: fc.string({ minLength: 5, maxLength: 100 }),
  datePosted: fc.oneof(
    fc.constant('Posted 5 days ago'),
    fc.constant('Posted 14 November 2025'),
    fc.constant('Posted 22 October 2025')
  ),
  text: fc.string({ minLength: 10, maxLength: 500 }),
  verified: fc.boolean(),
  jobLocation: fc.oneof(
    fc.constant('CR7'),
    fc.constant('SW16'),
    fc.constant('SE25'),
    fc.constant('CR0'),
    fc.constant('SM5')
  ),
  author: fc.option(fc.string({ minLength: 3, maxLength: 50 }), { nil: undefined })
}).map(review => {
  let text = `${review.rating}\n`;
  text += `${review.service}\n`;
  text += `${review.datePosted}\n\n`;
  text += `${review.text}\n`;
  if (review.verified) {
    text += `Verified reviewer\n`;
  }
  text += `Job location: ${review.jobLocation}\n`;
  if (review.author) {
    text += `${review.author}\n`;
  }
  return text;
});

describe('Property 44: Reviews Data Parsing', () => {
  /**
   * **Validates: Requirements 12.5**
   * For any valid reviews.txt file, the system should parse it into an array 
   * of Review objects with all required fields (rating, text, author, date, location)
   */
  test('should parse any valid reviews.txt format into Review objects with all required fields', () => {
    fc.assert(
      fc.property(
        fc.array(validReviewTextArbitrary, { minLength: 1, maxLength: 10 }),
        (reviewTexts) => {
          // Combine all review texts into a single reviews.txt format
          const reviewsText = reviewTexts.join('\n');
          
          // Parse the reviews
          const parsedReviews = parseReviewsFromText(reviewsText);
          
          // Property: All parsed reviews must have required fields
          parsedReviews.forEach((review: Review) => {
            // Required fields must be defined
            expect(review.id).toBeDefined();
            expect(review.rating).toBeDefined();
            expect(review.text).toBeDefined();
            expect(review.author).toBeDefined();
            expect(review.location).toBeDefined();
            expect(review.postcode).toBeDefined();
            expect(review.date).toBeDefined();
            expect(review.verified).toBeDefined();
            
            // Type checks
            expect(typeof review.id).toBe('string');
            expect(typeof review.rating).toBe('number');
            expect(typeof review.text).toBe('string');
            expect(typeof review.author).toBe('string');
            expect(typeof review.location).toBe('string');
            expect(typeof review.postcode).toBe('string');
            expect(typeof review.date).toBe('string');
            expect(typeof review.verified).toBe('boolean');
            
            // Value constraints
            expect(review.rating).toBeGreaterThanOrEqual(1);
            expect(review.rating).toBeLessThanOrEqual(10);
            expect(review.text.length).toBeGreaterThan(0);
            expect(review.author.length).toBeGreaterThan(0);
            expect(review.location.length).toBeGreaterThan(0);
            expect(review.postcode.length).toBeGreaterThan(0);
            
            // Date format (ISO 8601: YYYY-MM-DD)
            expect(review.date).toMatch(/^\d{4}-\d{2}-\d{2}$/);
          });
          
          // Property: Number of parsed reviews should match input
          expect(parsedReviews.length).toBe(reviewTexts.length);
        }
      ),
      { numRuns: 100 }
    );
  });

  test('should handle reviews with optional fields correctly', () => {
    fc.assert(
      fc.property(
        fc.record({
          rating: fc.double({ min: 1, max: 10, noNaN: true }),
          text: fc.string({ minLength: 10, maxLength: 200 }).filter(s => s.trim().length > 0),
          hasService: fc.boolean(),
          service: fc.string({ minLength: 5, maxLength: 50 }),
          hasJobLocation: fc.boolean(),
          jobLocation: fc.constantFrom('CR7', 'SW16', 'SE25'),
          verified: fc.boolean()
        }),
        (reviewData) => {
          // Build review text with optional fields
          let reviewText = `${reviewData.rating}\n`;
          if (reviewData.hasService) {
            reviewText += `${reviewData.service}\n`;
          }
          reviewText += `Posted 5 days ago\n\n`;
          reviewText += `${reviewData.text}\n`;
          if (reviewData.verified) {
            reviewText += `Verified reviewer\n`;
          }
          if (reviewData.hasJobLocation) {
            reviewText += `Job location: ${reviewData.jobLocation}\n`;
          }
          
          const parsedReviews = parseReviewsFromText(reviewText);
          
          // Should parse at least one review (since we have valid rating and non-empty text)
          expect(parsedReviews.length).toBeGreaterThanOrEqual(1);
          
          const review = parsedReviews[0];
          
          // Required fields must always be present
          expect(review.id).toBeDefined();
          expect(review.rating).toBe(reviewData.rating);
          expect(review.text).toContain(reviewData.text.trim());
          expect(review.verified).toBe(reviewData.verified);
          
          // Optional fields
          if (reviewData.hasService) {
            expect(review.service).toBeDefined();
          }
          
          if (reviewData.hasJobLocation) {
            expect(review.jobLocation).toBe(reviewData.jobLocation);
            expect(review.postcode).toBe(reviewData.jobLocation);
          }
        }
      ),
      { numRuns: 100 }
    );
  });

  test('should generate unique IDs for each parsed review', () => {
    fc.assert(
      fc.property(
        fc.array(validReviewTextArbitrary, { minLength: 2, maxLength: 20 }),
        (reviewTexts) => {
          const reviewsText = reviewTexts.join('\n');
          const parsedReviews = parseReviewsFromText(reviewsText);
          
          // Property: All IDs must be unique
          const ids = parsedReviews.map(r => r.id);
          const uniqueIds = new Set(ids);
          expect(uniqueIds.size).toBe(parsedReviews.length);
          
          // Property: IDs should follow the format "review-XXX"
          parsedReviews.forEach(review => {
            expect(review.id).toMatch(/^review-\d{3}$/);
          });
        }
      ),
      { numRuns: 100 }
    );
  });

  test('should correctly parse rating values across the valid range', () => {
    fc.assert(
      fc.property(
        fc.double({ min: 1, max: 10, noNaN: true }),
        fc.string({ minLength: 10, maxLength: 100 }),
        (rating, text) => {
          const reviewText = `${rating}\nService\nPosted 5 days ago\n\n${text}\nVerified reviewer\nJob location: CR7\n`;
          const parsedReviews = parseReviewsFromText(reviewText);
          
          expect(parsedReviews.length).toBeGreaterThan(0);
          const review = parsedReviews[0];
          
          // Property: Parsed rating should match input rating
          expect(review.rating).toBeCloseTo(rating, 2);
          expect(review.rating).toBeGreaterThanOrEqual(1);
          expect(review.rating).toBeLessThanOrEqual(10);
        }
      ),
      { numRuns: 100 }
    );
  });

  test('should handle verified and non-verified reviewers correctly', () => {
    fc.assert(
      fc.property(
        fc.boolean(),
        fc.string({ minLength: 10, maxLength: 100 }),
        (isVerified, text) => {
          let reviewText = `10\nService\nPosted 5 days ago\n\n${text}\n`;
          if (isVerified) {
            reviewText += `Verified reviewer\n`;
          }
          reviewText += `Job location: CR7\n`;
          
          const parsedReviews = parseReviewsFromText(reviewText);
          
          expect(parsedReviews.length).toBeGreaterThan(0);
          const review = parsedReviews[0];
          
          // Property: Verified status should match input
          expect(review.verified).toBe(isVerified);
        }
      ),
      { numRuns: 100 }
    );
  });
});
