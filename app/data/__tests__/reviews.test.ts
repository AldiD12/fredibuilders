/**
 * Reviews Data Tests
 * Feature: fredi-builders-empire-building
 * Requirements: 2.1, 12.5
 */

import { describe, test, expect } from 'vitest';
import { allReviews, aggregateRating, Review } from '../reviews';

describe('Reviews Data Structure', () => {
  test('should have all required reviews', () => {
    expect(allReviews).toBeDefined();
    expect(allReviews.length).toBeGreaterThanOrEqual(104);
  });

  test('should have valid aggregate rating', () => {
    expect(aggregateRating).toBeDefined();
    expect(aggregateRating.ratingValue).toBe(9.6);
    expect(aggregateRating.reviewCount).toBe(104);
    expect(aggregateRating.bestRating).toBe(10);
    expect(aggregateRating.worstRating).toBe(1);
  });

  test('each review should have required fields', () => {
    allReviews.forEach((review: Review) => {
      expect(review.id).toBeDefined();
      expect(typeof review.id).toBe('string');
      expect(review.rating).toBeDefined();
      expect(typeof review.rating).toBe('number');
      expect(review.rating).toBeGreaterThanOrEqual(1);
      expect(review.rating).toBeLessThanOrEqual(10);
      expect(review.text).toBeDefined();
      expect(typeof review.text).toBe('string');
      expect(review.author).toBeDefined();
      expect(typeof review.author).toBe('string');
      expect(review.location).toBeDefined();
      expect(typeof review.location).toBe('string');
      expect(review.postcode).toBeDefined();
      expect(typeof review.postcode).toBe('string');
      expect(review.date).toBeDefined();
      expect(typeof review.date).toBe('string');
      expect(typeof review.verified).toBe('boolean');
    });
  });

  test('should have reviews with verified status', () => {
    const verifiedReviews = allReviews.filter(r => r.verified);
    expect(verifiedReviews.length).toBeGreaterThan(0);
  });

  test('should have reviews with job locations', () => {
    const reviewsWithJobLocation = allReviews.filter(r => r.jobLocation);
    expect(reviewsWithJobLocation.length).toBeGreaterThan(0);
  });

  test('should have reviews with service information', () => {
    const reviewsWithService = allReviews.filter(r => r.service);
    expect(reviewsWithService.length).toBeGreaterThan(0);
  });

  test('review IDs should be unique', () => {
    const ids = allReviews.map(r => r.id);
    const uniqueIds = new Set(ids);
    expect(uniqueIds.size).toBe(allReviews.length);
  });

  test('should have reviews from various locations', () => {
    const locations = new Set(allReviews.map(r => r.postcode));
    expect(locations.size).toBeGreaterThan(10); // Should have reviews from multiple postcodes
  });

  test('should have reviews with different ratings', () => {
    const ratings = new Set(allReviews.map(r => r.rating));
    expect(ratings.size).toBeGreaterThan(1); // Should have variety in ratings
  });

  test('dates should be in ISO 8601 format', () => {
    const isoDateRegex = /^\d{4}-\d{2}-\d{2}$/;
    allReviews.forEach((review: Review) => {
      expect(review.date).toMatch(isoDateRegex);
    });
  });
});
