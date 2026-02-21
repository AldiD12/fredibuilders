/**
 * Property-Based Tests for Analytics Tracking
 * Feature: fredi-builders-empire-building
 * 
 * Property 29: Analytics Event Tracking
 * **Validates: Requirements 6.3, 11.1, 11.2, 11.3, 11.5, 11.6, 11.7**
 * 
 * For any user interaction (WhatsApp click, phone click, form submit, review filter),
 * the corresponding analytics event should be fired with appropriate event properties.
 */

import { describe, test, expect, beforeEach, afterEach } from 'vitest'
import * as fc from 'fast-check'
import {
  trackEvent,
  trackWhatsAppClick,
  trackCallClick,
  trackFormSubmit,
  trackGalleryView,
  trackReviewFilter,
  trackLocationView,
  type AnalyticsEvent
} from '../analytics'

describe('Property 29: Analytics Event Tracking', () => {
  let mockGtag: any
  let gtagCalls: any[]
  let originalGtag: any

  beforeEach(() => {
    gtagCalls = []
    mockGtag = (...args: any[]) => {
      gtagCalls.push(args)
    }
    // Store original gtag if it exists
    originalGtag = (global as any).window?.gtag
    
    // Mock window object with gtag
    if (typeof (global as any).window === 'undefined') {
      (global as any).window = {}
    }
    ;(global as any).window.gtag = mockGtag
  })

  afterEach(() => {
    // Restore original gtag
    if (originalGtag) {
      ;(global as any).window.gtag = originalGtag
    } else if ((global as any).window) {
      delete (global as any).window.gtag
    }
    gtagCalls = []
  })

  /**
   * Test that trackEvent fires gtag with correct event name and properties
   */
  test('trackEvent fires gtag with any valid event and properties', () => {
    const eventArbitrary = fc.constantFrom(
      'click_whatsapp',
      'click_call',
      'form_submit',
      'gallery_view',
      'review_filter',
      'location_view'
    ) as fc.Arbitrary<AnalyticsEvent>

    const propertiesArbitrary = fc.dictionary(
      fc.string({ minLength: 1, maxLength: 20 }),
      fc.oneof(
        fc.string({ maxLength: 50 }),
        fc.integer({ min: 0, max: 1000 }),
        fc.boolean()
      )
    )

    fc.assert(
      fc.property(eventArbitrary, propertiesArbitrary, (event, properties) => {
        gtagCalls = []
        
        trackEvent(event, properties)

        // Verify gtag was called
        expect(gtagCalls.length).toBe(1)
        expect(gtagCalls[0][0]).toBe('event')
        expect(gtagCalls[0][1]).toBe(event)
        expect(gtagCalls[0][2]).toEqual(properties)
      }),
      { numRuns: 100 }
    )
  })

  /**
   * Test WhatsApp click tracking (Requirement 11.1)
   */
  test('trackWhatsAppClick fires click_whatsapp event with context', () => {
    const contextArbitrary = fc.oneof(
      fc.constant('homepage'),
      fc.constant('location-page'),
      fc.constant('contact-page'),
      fc.constant('footer'),
      fc.string({ minLength: 1, maxLength: 50 })
    )

    fc.assert(
      fc.property(contextArbitrary, (context) => {
        gtagCalls = []
        
        trackWhatsAppClick(context)

        // Verify click_whatsapp event was fired
        expect(gtagCalls.length).toBe(1)
        expect(gtagCalls[0][0]).toBe('event')
        expect(gtagCalls[0][1]).toBe('click_whatsapp')
        expect(gtagCalls[0][2]).toEqual({ context })
      }),
      { numRuns: 100 }
    )
  })

  /**
   * Test phone click tracking (Requirement 11.2)
   */
  test('trackCallClick fires click_call event with context', () => {
    const contextArbitrary = fc.oneof(
      fc.constant('homepage'),
      fc.constant('location-page'),
      fc.constant('contact-page'),
      fc.constant('header'),
      fc.string({ minLength: 1, maxLength: 50 })
    )

    fc.assert(
      fc.property(contextArbitrary, (context) => {
        gtagCalls = []
        
        trackCallClick(context)

        // Verify click_call event was fired
        expect(gtagCalls.length).toBe(1)
        expect(gtagCalls[0][0]).toBe('event')
        expect(gtagCalls[0][1]).toBe('click_call')
        expect(gtagCalls[0][2]).toEqual({ context })
      }),
      { numRuns: 100 }
    )
  })

  /**
   * Test form submission tracking (Requirement 11.3)
   */
  test('trackFormSubmit fires form_submit event with service and photo flag', () => {
    const serviceArbitrary = fc.constantFrom('Bathroom', 'Extension', 'Other')
    const hasPhotosArbitrary = fc.boolean()

    fc.assert(
      fc.property(serviceArbitrary, hasPhotosArbitrary, (service, hasPhotos) => {
        gtagCalls = []
        
        trackFormSubmit(service, hasPhotos)

        // Verify form_submit event was fired
        expect(gtagCalls.length).toBe(1)
        expect(gtagCalls[0][0]).toBe('event')
        expect(gtagCalls[0][1]).toBe('form_submit')
        expect(gtagCalls[0][2]).toEqual({
          service,
          has_photos: hasPhotos
        })
      }),
      { numRuns: 100 }
    )
  })

  /**
   * Test gallery view tracking (Requirement 11.4)
   */
  test('trackGalleryView fires gallery_view event with category', () => {
    const categoryArbitrary = fc.option(
      fc.constantFrom('Showroom', 'Trust', 'Transformation', 'Craftsmanship', 'all'),
      { nil: undefined }
    )

    fc.assert(
      fc.property(categoryArbitrary, (category) => {
        gtagCalls = []
        
        trackGalleryView(category)

        // Verify gallery_view event was fired
        expect(gtagCalls.length).toBe(1)
        expect(gtagCalls[0][0]).toBe('event')
        expect(gtagCalls[0][1]).toBe('gallery_view')
        expect(gtagCalls[0][2]).toEqual({
          category: category || 'all'
        })
      }),
      { numRuns: 100 }
    )
  })

  /**
   * Test review filter tracking (Requirement 11.5)
   */
  test('trackReviewFilter fires review_filter event with filter type and value', () => {
    const filterTypeArbitrary = fc.constantFrom('location', 'service', 'rating')
    const filterValueArbitrary = fc.string({ minLength: 1, maxLength: 50 })

    fc.assert(
      fc.property(filterTypeArbitrary, filterValueArbitrary, (filterType, filterValue) => {
        gtagCalls = []
        
        trackReviewFilter(filterType, filterValue)

        // Verify review_filter event was fired
        expect(gtagCalls.length).toBe(1)
        expect(gtagCalls[0][0]).toBe('event')
        expect(gtagCalls[0][1]).toBe('review_filter')
        expect(gtagCalls[0][2]).toEqual({
          filter_type: filterType,
          filter_value: filterValue
        })
      }),
      { numRuns: 100 }
    )
  })

  /**
   * Test location page view tracking (Requirement 11.6)
   */
  test('trackLocationView fires location_view event with location name', () => {
    const locationArbitrary = fc.oneof(
      fc.constant('Streatham'),
      fc.constant('Esher'),
      fc.constant('Wimbledon'),
      fc.string({ minLength: 1, maxLength: 50 })
    )

    fc.assert(
      fc.property(locationArbitrary, (location) => {
        gtagCalls = []
        
        trackLocationView(location)

        // Verify location_view event was fired
        expect(gtagCalls.length).toBe(1)
        expect(gtagCalls[0][0]).toBe('event')
        expect(gtagCalls[0][1]).toBe('location_view')
        expect(gtagCalls[0][2]).toEqual({
          location
        })
      }),
      { numRuns: 100 }
    )
  })

  /**
   * Test that events are not fired when gtag is not available
   */
  test('trackEvent does not throw error when gtag is unavailable', () => {
    const eventArbitrary = fc.constantFrom(
      'click_whatsapp',
      'click_call',
      'form_submit',
      'gallery_view',
      'review_filter',
      'location_view'
    ) as fc.Arbitrary<AnalyticsEvent>

    fc.assert(
      fc.property(eventArbitrary, (event) => {
        // Remove gtag
        delete (global as any).window.gtag
        gtagCalls = []
        
        // Should not throw
        expect(() => trackEvent(event, { test: 'value' })).not.toThrow()
        
        // No calls should be made
        expect(gtagCalls.length).toBe(0)
        
        // Restore gtag for next iteration
        ;(global as any).window.gtag = mockGtag
      }),
      { numRuns: 50 }
    )
  })

  /**
   * Test that all tracking functions handle edge cases
   */
  test('tracking functions handle empty and special characters in properties', () => {
    const specialStringArbitrary = fc.oneof(
      fc.constant(''),
      fc.constant('test with spaces'),
      fc.constant('test-with-dashes'),
      fc.constant('test_with_underscores'),
      fc.constant('test/with/slashes'),
      fc.string({ minLength: 0, maxLength: 100 })
    )

    fc.assert(
      fc.property(specialStringArbitrary, (value) => {
        gtagCalls = []
        
        // Test all tracking functions with special strings
        trackWhatsAppClick(value)
        expect(gtagCalls.length).toBe(1)
        
        gtagCalls = []
        trackCallClick(value)
        expect(gtagCalls.length).toBe(1)
        
        gtagCalls = []
        trackLocationView(value)
        expect(gtagCalls.length).toBe(1)
        
        gtagCalls = []
        trackReviewFilter('location', value)
        expect(gtagCalls.length).toBe(1)
      }),
      { numRuns: 100 }
    )
  })
})
