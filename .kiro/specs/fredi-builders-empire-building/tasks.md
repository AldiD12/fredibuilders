# Implementation Plan: Fredi Builders Empire Building

## Overview

This implementation plan breaks down the Fredi Builders Empire Building feature into discrete, incremental coding tasks. The plan follows a logical progression: data layer → shared components → page implementations → testing → optimization. Each task builds on previous work and includes specific requirements references for traceability.

The implementation uses Next.js 14 with TypeScript, Tailwind CSS, and follows the existing codebase patterns established in the homepage and location pages.

## Tasks

- [ ] 1. Set up data layer and type definitions
  - [x] 1.1 Create enhanced location data structure
    - Extend `app/data/locations.ts` with 5 new fields per location
    - Add `detailedDescription` (150-200 words) for all 18 locations
    - Add `localStreets` array (3 streets per location)
    - Add `landmarks` array (1-2 landmarks per location)
    - Add `recentProjects` array with project descriptions and years
    - Add `lsiKeywords` array (bathroom-specific vocabulary)
    - _Requirements: 4.1, 4.2, 4.3, 4.4, 4.5_
  
  - [x] 1.2 Write property test for location data completeness
    - **Property 16: Location Data Completeness**
    - **Validates: Requirements 4.1, 4.2, 4.3, 4.4, 4.5**
  
  - [x] 1.3 Create reviews data file and parser
    - Create `app/data/reviews.ts` with Review interface
    - Parse `reviews.txt` into structured Review objects
    - Extract rating, text, author, location, postcode, date, verified status
    - Create `aggregateRating` object with 9.6/10 score
    - Export reviews array and aggregateRating
    - _Requirements: 2.1, 12.5_
  
  - [x] 1.4 Write property test for reviews parsing
    - **Property 44: Reviews Data Parsing**
    - **Validates: Requirements 12.5**
  
  - [x] 1.5 Create gallery images data file
    - Create `app/data/gallery.ts` with GalleryImage interface
    - Catalog all 40+ images from `public/images/`
    - Categorize into Showroom, Trust, Transformation, Craftsmanship
    - Add descriptive alt text with location keywords
    - Specify width, height, and priority for each image
    - _Requirements: 1.1, 1.4, 6.4, 6.5_
  
  - [x] 1.6 Write property test for image data structure
    - **Property 1: Gallery Image Rendering** (data validation part)
    - **Validates: Requirements 1.1, 1.4**

- [ ] 2. Checkpoint - Verify data layer
  - Ensure all data files compile without TypeScript errors
  - Verify all 18 locations have complete enriched data
  - Verify all 104+ reviews are parsed correctly
  - Verify all 40+ images are cataloged with proper metadata
  - Ask the user if questions arise

- [ ] 3. Implement Schema.org markup components
  - [x] 3.1 Create ReviewSchema component
    - Create `app/components/schemas/ReviewSchema.tsx`
    - Accept array of Review objects as props
    - Generate Schema.org Review markup for each review
    - Include rating, author, datePublished, reviewBody
    - Render as JSON-LD script tag
    - _Requirements: 2.2, 7.3_
  
  - [x] 3.2 Write property test for review schema markup
    - **Property 6: Review Schema Markup**
    - **Validates: Requirements 2.2**
  
  - [x] 3.3 Create ImageGallerySchema component
    - Create `app/components/schemas/ImageGallerySchema.tsx`
    - Accept array of GalleryImage objects as props
    - Generate Schema.org ImageGallery markup
    - Include all images with contentUrl, caption, description
    - Render as JSON-LD script tag
    - _Requirements: 1.3, 7.4_
  
  - [x] 3.4 Write property test for image gallery schema
    - **Property 3: Gallery Schema Markup**
    - **Validates: Requirements 1.3**
  
  - [x] 3.5 Create AggregateRatingSchema component
    - Create `app/components/schemas/AggregateRatingSchema.tsx`
    - Accept rating data as props (ratingValue, reviewCount, etc.)
    - Generate Schema.org AggregateRating markup
    - Render as JSON-LD script tag
    - _Requirements: 2.3, 7.7_
  
  - [x] 3.6 Write property test for aggregate rating schema
    - **Property 33: Aggregate Rating Schema**
    - **Validates: Requirements 7.7**
  
  - [x] 3.7 Enhance LocationSchema component
    - Update existing `app/components/LocationSchema.tsx`
    - Add LocalBusiness schema with geo-coordinates (already exists)
    - Add Service schema with service details (already exists)
    - Ensure FAQPage schema is included (already exists)
    - _Requirements: 7.1, 7.2, 7.5_
  
  - [ ] 3.8 Write property test for location page schema
    - **Property 30: Location Page Schema Markup**
    - **Property 31: Service Page Schema Markup**
    - **Property 32: FAQ Page Schema Markup**
    - **Validates: Requirements 7.1, 7.2, 7.5**

- [x] 4. Implement interlinking components
  - [x] 4.1 Create ServiceLinks component
    - Create `app/components/ServiceLinks.tsx`
    - Accept current location as prop
    - Generate upward links to 2-3 relevant service pages
    - Use semantic HTML with proper link text
    - _Requirements: 5.1_
  
  - [x] 4.2 Write property test for service links
    - **Property 19: Location Page Upward Links**
    - **Validates: Requirements 5.1**
  
  - [x] 4.3 Enhance NearbyLocations component
    - Update existing `app/components/NearbyLocations.tsx`
    - Ensure exactly 4 nearby locations are displayed
    - Verify randomized anchor text from 8 variations (already implemented)
    - Add tests for anchor text variation
    - _Requirements: 5.2, 5.3_
  
  - [x] 4.4 Write property test for nearby locations links
    - **Property 20: Location Page Lateral Links**
    - **Property 21: Lateral Link Anchor Text Variation**
    - **Validates: Requirements 5.2, 5.3**
  
  - [x] 4.5 Create ReviewsLink component
    - Create `app/components/ReviewsLink.tsx`
    - Generate contextual link to /reviews page
    - Include review count and rating in link text
    - Style as CTA button or inline link based on context prop
    - _Requirements: 5.4_
  
  - [x] 4.6 Write property test for reviews deep links
    - **Property 22: Reviews Wall Deep Links**
    - **Validates: Requirements 5.4**
  
  - [x] 4.7 Update footer with comprehensive links
    - Update footer in `app/page.tsx` or create `app/components/Footer.tsx`
    - Include links to all 5 service pages
    - Include links to top 6-8 location pages
    - Include link to gallery and reviews pages
    - _Requirements: 5.7_
  
  - [x] 4.8 Write property test for footer links
    - **Property 24: Footer Navigation Links**
    - **Validates: Requirements 5.7**

- [x] 5. Checkpoint - Verify components
  - Ensure all schema components render valid JSON-LD
  - Verify interlinking components generate correct links
  - Test components in isolation with sample data
  - Ask the user if questions arise

- [x] 6. Implement Gallery Page
  - [x] 6.1 Create gallery page with image grid
    - Create `app/gallery/page.tsx`
    - Import gallery images from `app/data/gallery.ts`
    - Render responsive grid (1 col mobile, 2 tablet, 3 desktop)
    - Use Next.js Image component with lazy loading
    - Add priority loading for above-the-fold images
    - Include ImageGallerySchema component
    - Add meta tags for SEO (title, description, canonical)
    - _Requirements: 1.1, 1.3, 1.4, 1.7, 6.7_
  
  - [x] 6.2 Write property test for gallery image rendering
    - **Property 1: Gallery Image Rendering**
    - **Validates: Requirements 1.1, 1.4, 1.7**
  
  - [x] 6.3 Add category filtering to gallery
    - Create client component `app/components/GalleryFilter.tsx`
    - Add filter buttons for 4 categories (Showroom, Trust, Transformation, Craftsmanship)
    - Implement client-side filtering with useState
    - Update grid to show only filtered images
    - Add "All" option to show all images
    - _Requirements: 1.2_
  
  - [x] 6.4 Write property test for gallery filtering
    - **Property 2: Gallery Category Filtering**
    - **Validates: Requirements 1.2**
  
  - [x] 6.5 Add lightbox modal for full-size images
    - Create client component `app/components/ImageLightbox.tsx`
    - Implement modal with full-size image display
    - Add project details overlay (location, service, description)
    - Add prev/next navigation between images
    - Add close button and ESC key handler
    - Add click outside to close
    - _Requirements: 1.5_
  
  - [x] 6.6 Write property test for lightbox interaction
    - **Property 4: Gallery Lightbox Interaction**
    - **Validates: Requirements 1.5**
  
  - [x] 6.7 Optimize gallery performance
    - Implement intersection observer for lazy loading
    - Add blur placeholders for loading states
    - Optimize image sizes (multiple srcset sizes)
    - Test LCP < 1.2s target
    - _Requirements: 1.6, 8.3, 8.5_
  
  - [x] 6.8 Write unit tests for gallery edge cases
    - Test empty gallery state
    - Test single image
    - Test filter with no matching images
    - Test lightbox keyboard navigation

- [x] 7. Implement Reviews Wall Page
  - [x] 7.1 Create reviews page with all reviews
    - Create `app/reviews/page.tsx`
    - Import reviews from `app/data/reviews.ts`
    - Render all 104+ reviews in grid or list layout
    - Include ReviewSchema component for each review
    - Include AggregateRatingSchema component
    - Add aggregate rating widget at top
    - Add meta tags for SEO
    - _Requirements: 2.1, 2.2, 2.3, 7.3, 7.7_
  
  - [x] 7.2 Write property test for reviews display
    - **Property 5: Reviews Display Completeness**
    - **Property 6: Review Schema Markup**
    - **Validates: Requirements 2.1, 2.2**
  
  - [x] 7.3 Add location and service filtering
    - Create client component `app/components/ReviewsFilter.tsx`
    - Add dropdown for location filter (all postcodes)
    - Add dropdown for service filter (bathroom, wet room, tiling, etc.)
    - Implement client-side filtering with useState
    - Update reviews display to show only filtered reviews
    - Track filter usage with analytics events
    - _Requirements: 2.4, 2.5, 11.5_
  
  - [x] 7.4 Write property test for reviews filtering
    - **Property 7: Reviews Location Filtering**
    - **Property 8: Reviews Service Filtering**
    - **Validates: Requirements 2.4, 2.5**
  
  - [x] 7.5 Add verified reviewer badges
    - Create `app/components/VerifiedBadge.tsx`
    - Display badge for reviews with verified=true
    - Style with Checkatrade colors and icon
    - Add tooltip explaining verification
    - _Requirements: 2.6_
  
  - [x] 7.6 Write property test for verified badges
    - **Property 9: Verified Reviewer Badges**
    - **Validates: Requirements 2.6**
  
  - [x] 7.7 Implement chronological sorting
    - Sort reviews by date descending (newest first) by default
    - Add optional sort dropdown (newest, oldest, highest rated)
    - Update display when sort changes
    - _Requirements: 2.7_
  
  - [x] 7.8 Write property test for review sorting
    - **Property 10: Reviews Chronological Ordering**
    - **Validates: Requirements 2.7**

- [x] 8. Checkpoint - Verify gallery and reviews pages
  - Test gallery page loads with all images
  - Test filtering works correctly
  - Test lightbox opens and navigates
  - Test reviews page displays all reviews
  - Test review filtering works
  - Test verified badges appear correctly
  - Ask the user if questions arise

- [x] 9. Implement Multi-Step Lead Form
  - [x] 9.1 Create form component structure
    - Create `app/components/MultiStepForm.tsx` client component
    - Define FormData interface with all fields
    - Set up useState for current step (1-4)
    - Set up useState for form data
    - Create step progression logic
    - _Requirements: 3.1, 3.2, 3.3, 3.4_
  
  - [x] 9.2 Write property test for form progression
    - **Property 11: Form Step Progression**
    - **Validates: Requirements 3.2, 3.3, 3.4**
  
  - [x] 9.3 Implement Step 1 - Service selection
    - Create radio button group for service selection
    - Options: Bathroom, Extension, Other
    - Add icons for each service type
    - Add validation (required field)
    - Add "Next" button to advance to Step 2
    - _Requirements: 3.1_
  
  - [x] 9.4 Implement Step 2 - Postcode entry
    - Create text input for postcode
    - Add UK postcode validation regex
    - Add real-time validation feedback
    - Add "Back" and "Next" buttons
    - _Requirements: 3.2_
  
  - [x] 9.5 Implement Step 3 - Photo upload (optional)
    - Create file input with drag-and-drop
    - Add file type validation (JPEG, PNG, WebP)
    - Add file size validation (max 5MB per file)
    - Display preview thumbnails for uploaded files
    - Add "Skip" and "Next" buttons
    - _Requirements: 3.3, 3.7_
  
  - [x] 9.6 Write property test for photo upload validation
    - **Property 13: Form Photo Upload Validation**
    - **Validates: Requirements 3.7**
  
  - [x] 9.7 Implement Step 4 - Contact details
    - Create inputs for name, phone, email
    - Add validation for each field (required, format)
    - Add "Back" and "Submit" buttons
    - _Requirements: 3.4_
  
  - [x] 9.8 Add progress indicator
    - Create `app/components/FormProgressIndicator.tsx`
    - Display "Step X of 4" text
    - Display visual progress bar
    - Update as user progresses through steps
    - _Requirements: 3.5_
  
  - [x] 9.9 Write property test for progress indicator
    - **Property 12: Form Progress Indicator**
    - **Validates: Requirements 3.5**
  
  - [x] 9.10 Implement form submission with Server Action
    - Create Server Action in `app/actions/submitLead.ts`
    - Validate form data on server
    - Send email to info@fredibuilders.co.uk
    - Store submission in database (optional)
    - Return success/error response
    - _Requirements: 3.6_
  
  - [x] 9.11 Write property test for form data transmission
    - **Property 15: Form Data Transmission**
    - **Validates: Requirements 3.6**
  
  - [x] 9.12 Add analytics tracking for form submission
    - Fire Form_Submit event on successful submission
    - Include service type in event properties
    - Track form abandonment (which step)
    - _Requirements: 3.8, 11.3_
  
  - [x] 9.13 Write property test for form submission tracking
    - **Property 14: Form Submission Event Tracking**
    - **Validates: Requirements 3.8**
  
  - [x] 9.14 Integrate form into contact page
    - Update `app/contact/page.tsx` to use MultiStepForm
    - Add form introduction text
    - Add trust signals (9.6/10 rating, 104+ reviews)
    - Add success message display
    - Add error message display

- [x] 10. Implement Analytics Tracking
  - [x] 10.1 Create analytics utility functions
    - Create `app/lib/analytics.ts`
    - Implement trackEvent function for GA4
    - Define event types (Click_WhatsApp, Click_Call, Form_Submit, etc.)
    - Add TypeScript types for event properties
    - _Requirements: 6.3, 11.1, 11.2, 11.3, 11.5, 11.6, 11.7_
  
  - [x] 10.2 Write property test for analytics tracking
    - **Property 29: Analytics Event Tracking**
    - **Validates: Requirements 6.3, 11.1, 11.2, 11.3, 11.5, 11.6, 11.7**
  
  - [x] 10.3 Add WhatsApp click tracking
    - Update WhatsApp button/link components
    - Add onClick handler to fire Click_WhatsApp event
    - Include page context in event properties
    - _Requirements: 11.1_
  
  - [x] 10.4 Add phone click tracking
    - Update phone number links
    - Add onClick handler to fire Click_Call event
    - Include page context in event properties
    - _Requirements: 11.2_
  
  - [x] 10.5 Add page view tracking
    - Add page view tracking to gallery page
    - Add page view tracking to location pages
    - Include page metadata in event properties
    - _Requirements: 11.4, 11.6_

- [x] 11. Checkpoint - Verify form and analytics
  - Test multi-step form progression
  - Test form validation at each step
  - Test photo upload validation
  - Test form submission
  - Verify analytics events fire correctly
  - Ask the user if questions arise

- [x] 12. Update Location Pages with Enriched Data
  - [x] 12.1 Create Google Maps embed component
    - Create `app/components/LocationMap.tsx`
    - Accept location coordinates and name as props
    - Embed Google Maps iframe centered on location
    - Add visual service area indicator
    - Include "Serving [Location] and surrounding areas" text
    - Optimize for mobile responsiveness
    - _Requirements: GMB Gravity Strategy_
  
  - [x] 12.2 Update location page template
    - Update `app/locations/[slug]/page.tsx`
    - Add PROMINENT "Recent Projects" section (above the fold or immediately after hero)
    - Add section for detailed description (150-200 words)
    - Add section for local streets with "We're local to [Location]" messaging
    - Add section for landmarks
    - Integrate LocationMap component
    - Integrate LSI keywords naturally into content
    - Ensure the Location Page Hero section mirrors the 'One Goal' CTA of the homepage: One primary Teal button for the 'Fixed-Price Quote' and a secondary, subtle text-based 'Call' option. This maintains the high-end hierarchy across the entire empire.
    - Add multiple local street mentions throughout content for GMB gravity
    - Display unique recentProjects data prominently to avoid "robotic" clone detection
    - _Requirements: 4.6_
    - _SEO Strategy: Humanization (HCU compliance), GMB Gravity, Local Relevance_
  
  - [x] 12.3 Write property test for location page data display
    - **Property 17: Location Page Data Display**
    - **Validates: Requirements 4.6**
  
  - [x] 12.4 Add ServiceLinks component to location pages
    - Import and use ServiceLinks component
    - Pass current location as prop
    - Position in "Our Services" section
    - _Requirements: 5.1_
  
  - [x] 12.5 Add ReviewsLink component to location pages
    - Import and use ReviewsLink component
    - Position near CTAs
    - Use contextual link text
    - _Requirements: 5.4_
  
  - [x] 12.6 Verify location page structural consistency
    - Ensure all 18 location pages have same structure
    - Verify all sections are present
    - Verify all enriched data is displayed
    - Verify Recent Projects are unique and prominent
    - Verify Maps are embedded correctly
    - _Requirements: 4.7_
  
  - [x] 12.7 Write property test for location page consistency
    - **Property 18: Location Page Structural Consistency**
    - **Validates: Requirements 4.7**

- [x] 13. Implement PWA Manifest and Favicons
  - [x] 13.1 Create PWA manifest
    - Create `public/manifest.json`
    - Define app name, short name, description
    - Set start_url, display mode, theme colors
    - Add icon references (48x48, 96x96, 144x144)
    - _Requirements: 6.2_
  
  - [x] 13.2 Generate favicon files
    - Create favicon-48x48.png
    - Create favicon-96x96.png
    - Create favicon-144x144.png
    - Place in `public/` directory
    - _Requirements: 6.1_
  
  - [x] 13.3 Add manifest and favicon links to layout
    - Update `app/layout.tsx`
    - Add link to manifest.json
    - Add link tags for all favicon sizes
    - Add apple-touch-icon links
    - _Requirements: 6.1, 6.2_

- [ ] 14. Implement SEO Infrastructure
  - [x] 14.1 Add canonical tags to all pages
    - Update metadata in all page.tsx files
    - Add canonical URL to alternates.canonical
    - Ensure canonical matches actual URL
    - _Requirements: 6.7_
  
  - [x] 14.2 Write property test for canonical tags
    - **Property 28: Canonical Tag Presence**
    - **Validates: Requirements 6.7**
  
  - [x] 14.3 Optimize image filenames and alt text
    - Rename images to include location/service keywords
    - Update gallery.ts with new filenames
    - Ensure all alt text includes location keywords
    - _Requirements: 6.4, 6.5_
  
  - [x] 14.4 Write property test for image SEO
    - **Property 25: Image Filename Keywords**
    - **Property 26: Image Alt Text Keywords**
    - **Validates: Requirements 6.4, 6.5**
  
  - [x] 14.5 Generate dynamic sitemap
    - Create `app/sitemap.ts`
    - Include all location pages (18)
    - Include all service pages (5)
    - Include gallery and reviews pages
    - Include homepage and about page
    - Set lastModified dates
    - Set priority and changeFrequency
    - _Requirements: 6.6, 12.7_
  
  - [x] 14.6 Write property test for sitemap completeness
    - **Property 27: Sitemap Completeness**
    - **Property 45: Dynamic Sitemap Generation**
    - **Validates: Requirements 6.6, 12.7**

- [x] 15. Implement Performance Optimizations
  - [x] 15.1 Add lazy loading to images
    - Update all Image components
    - Add loading="lazy" for below-the-fold images
    - Add priority={true} for above-the-fold images
    - _Requirements: 8.3_
  
  - [x] 15.2 Write property test for image lazy loading
    - **Property 34: Image Lazy Loading**
    - **Validates: Requirements 8.3**
  
  - [x] 15.3 Ensure all images are WebP format
    - Convert any non-WebP images to WebP
    - Update image references in data files
    - Verify all images in gallery are WebP
    - _Requirements: 8.5_
  
  - [x] 15.4 Write property test for WebP format
    - **Property 35: WebP Image Format**
    - **Validates: Requirements 8.5**
  
  - [x] 15.5 Add caching headers for static assets
    - Update `next.config.js` with cache headers
    - Set max-age for images (1 year)
    - Set max-age for CSS/JS (1 year with hash)
    - Set max-age for fonts (1 year)
    - _Requirements: 8.7_
  
  - [x] 15.6 Write property test for caching headers
    - **Property 36: Static Asset Caching Headers**
    - **Validates: Requirements 8.7**

- [ ] 16. Implement Mobile Responsiveness
  - [ ] 16.1 Add responsive image sizing
    - Update Image components with responsive sizes
    - Use srcset for multiple image sizes
    - Test on mobile, tablet, desktop viewports
    - _Requirements: 9.6_
  
  - [ ] 16.2 Write property test for mobile image sizing
    - **Property 37: Mobile Image Sizing**
    - **Validates: Requirements 9.6**
  
  - [ ] 16.3 Ensure proper input types for mobile
    - Update form inputs with correct type attributes
    - Use type="tel" for phone inputs
    - Use type="email" for email inputs
    - Use type="text" for name/postcode inputs
    - _Requirements: 9.7_
  
  - [ ] 16.4 Write property test for input types
    - **Property 38: Mobile Form Input Types**
    - **Validates: Requirements 9.7**
  
  - [ ] 16.5 Test mobile layouts
    - Test gallery single-column grid on mobile
    - Test form full-width inputs on mobile
    - Test hamburger menu on mobile
    - Test sticky footer with WhatsApp/Call buttons
    - _Requirements: 9.2, 9.3, 9.4, 9.5_

- [ ] 17. Implement Accessibility Features
  - [ ] 17.1 Add ARIA labels to interactive elements
    - Add aria-label to buttons without text
    - Add aria-label to icon-only links
    - Add aria-expanded to accordion buttons
    - Add aria-current to navigation links
    - _Requirements: 10.1_
  
  - [ ] 17.2 Write property test for ARIA labels
    - **Property 39: Interactive Element ARIA Labels**
    - **Validates: Requirements 10.1**
  
  - [ ] 17.3 Associate labels with form inputs
    - Ensure all form inputs have associated labels
    - Use htmlFor/id or aria-label
    - Add aria-describedby for error messages
    - _Requirements: 10.3_
  
  - [ ] 17.4 Write property test for form labels
    - **Property 40: Form Label Association**
    - **Validates: Requirements 10.3**
  
  - [ ] 17.5 Verify text contrast ratios
    - Test all text colors against backgrounds
    - Ensure 4.5:1 ratio for body text
    - Ensure 3:1 ratio for large text
    - Fix any failing combinations
    - _Requirements: 10.6_
  
  - [ ] 17.6 Write property test for contrast ratios
    - **Property 41: Text Contrast Ratios**
    - **Validates: Requirements 10.6**
  
  - [ ] 17.7 Add visible focus indicators
    - Ensure all focusable elements have focus styles
    - Use outline or border for focus state
    - Test keyboard navigation through all pages
    - _Requirements: 10.7_
  
  - [ ] 17.8 Write property test for focus indicators
    - **Property 42: Focus Indicator Visibility**
    - **Validates: Requirements 10.7**

- [ ] 18. Checkpoint - Verify all pages and features
  - Test all 18 location pages render correctly
  - Test gallery page with filtering and lightbox
  - Test reviews page with filtering
  - Test multi-step form submission
  - Test analytics events fire correctly
  - Test mobile responsiveness
  - Test accessibility with keyboard navigation
  - Run Lighthouse audit on all page types
  - Ask the user if questions arise

- [ ] 19. Integration Testing and Bug Fixes
  - [ ] 19.1 Test navigation between pages
    - Test links from homepage to location pages
    - Test links from location pages to service pages
    - Test links from service pages to gallery
    - Test links from all pages to reviews
    - Test breadcrumb navigation
    - _Requirements: 5.1, 5.2, 5.4, 5.5_
  
  - [ ] 19.2 Test schema markup with Google Rich Results Test
    - Test LocalBusiness schema on location pages
    - Test Review schema on reviews page
    - Test ImageGallery schema on gallery page
    - Test FAQPage schema on pages with FAQs
    - Fix any validation errors
    - _Requirements: 7.1, 7.2, 7.3, 7.4, 7.5_
  
  - [ ] 19.3 Test Core Web Vitals
    - Run Lighthouse on homepage, location page, gallery, reviews
    - Verify LCP < 1.2s on all pages
    - Verify CLS = 0 on all pages
    - Verify FID < 100ms on all pages
    - Optimize any failing pages
    - _Requirements: 1.6, 8.1, 8.2_
  
  - [ ] 19.4 Test form submission end-to-end
    - Submit form with valid data
    - Verify email is sent to info@fredibuilders.co.uk
    - Verify analytics event fires
    - Test error handling for invalid data
    - Test error handling for network failures
    - _Requirements: 3.6, 3.8_
  
  - [ ] 19.5 Fix any bugs discovered during testing
    - Document bugs in issue tracker
    - Prioritize critical bugs
    - Fix bugs and re-test
    - Update tests to prevent regressions

- [ ] 20. Final Checkpoint - Production Readiness
  - Run full test suite (unit + property tests)
  - Verify all 45 correctness properties pass
  - Run Lighthouse CI on all page types
  - Verify all images are optimized and WebP
  - Verify all 18 location pages have enriched data
  - Verify Recent Projects sections are prominent and unique per location
  - Verify Google Maps embeds are working on all location pages
  - Verify sitemap includes all pages
  - Verify manifest.json is valid
  - Verify all analytics events work
  - Test on mobile devices (iOS and Android)
  - Test on multiple browsers (Chrome, Safari, Firefox)
  - **Post-Launch Strategy Reminder:**
    - Send website link to past customers for user engagement signals
    - Request customers browse gallery and reviews (3+ min sessions)
    - This helps overcome Google's "Cold Start" sandbox period
  - Ask the user for final approval before deployment

## Notes

- Tasks marked with `*` are optional property-based tests and can be skipped for faster MVP
- Each task references specific requirements for traceability
- Checkpoints ensure incremental validation and early error detection
- Property tests validate universal correctness properties across all inputs
- Unit tests validate specific examples and edge cases
- The implementation follows Next.js 14 App Router conventions
- All components use TypeScript with strict type checking
- All styling uses Tailwind CSS with existing design tokens
- Performance targets: LCP < 1.2s, CLS = 0, FID < 100ms
- Accessibility target: WCAG AA compliance
- SEO target: All pages have proper meta tags, schema markup, and canonical tags
