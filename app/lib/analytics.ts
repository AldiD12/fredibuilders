/**
 * Analytics tracking utility for Google Analytics 4
 * Tracks user interactions and conversions
 */

export type AnalyticsEvent =
  | 'click_whatsapp'
  | 'click_call'
  | 'form_submit'
  | 'gallery_view'
  | 'review_filter'
  | 'location_view'

interface EventProperties {
  [key: string]: string | number | boolean
}

export function trackEvent(event: AnalyticsEvent, properties?: EventProperties) {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    ;(window as any).gtag('event', event, properties)
  }
}

export function trackWhatsAppClick(context: string) {
  trackEvent('click_whatsapp', { context })
}

export function trackCallClick(context: string) {
  trackEvent('click_call', { context })
}

export function trackFormSubmit(service: string, hasPhotos: boolean) {
  trackEvent('form_submit', { service, has_photos: hasPhotos })
}

export function trackGalleryView(category?: string) {
  trackEvent('gallery_view', { category: category || 'all' })
}

export function trackReviewFilter(filterType: string, filterValue: string) {
  trackEvent('review_filter', { filter_type: filterType, filter_value: filterValue })
}

export function trackLocationView(locationName: string) {
  trackEvent('location_view', { location: locationName })
}
