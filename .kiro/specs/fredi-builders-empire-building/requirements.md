# Requirements Document: Fredi Builders Empire Building

## Introduction

This document specifies the requirements for transforming the Fredi Builders single-page website into a comprehensive digital authority platform. The system will expand from a homepage "showroom" into a full topical authority architecture with gallery pages, reviews wall, enhanced lead forms, enriched location data, strategic interlinking, and technical SEO infrastructure. The goal is to generate £5,000/month in leads through improved search visibility, user engagement, and conversion optimization.

## Glossary

- **System**: The Fredi Builders Next.js 14 website application
- **Gallery_Page**: The /gallery route displaying curated project images
- **Reviews_Wall**: The /reviews route displaying all Checkatrade reviews
- **Lead_Form**: The multi-step contact form for capturing customer inquiries
- **Location_Page**: Dynamic pages for each service area (e.g., /locations/bathroom-fitters-streatham-sw16)
- **Service_Hub**: Service-specific pages (e.g., /services/full-bathroom-renovations)
- **Schema_Markup**: Structured data using Schema.org vocabulary for search engines
- **Interlinking**: Strategic internal links between pages using varied anchor text
- **LSI_Keywords**: Latent Semantic Indexing keywords (bathroom-specific vocabulary)
- **Core_Web_Vitals**: Performance metrics (LCP, CLS, FID) used by Google for ranking
- **PWA**: Progressive Web App with manifest.json and offline capabilities

## Requirements

### Requirement 1: Gallery Page Implementation

**User Story:** As a potential customer, I want to browse high-quality project photos organized by category, so that I can see the quality of work and find inspiration for my project.

#### Acceptance Criteria

1. WHEN a user visits /gallery, THE System SHALL display a responsive photo grid with 40+ curated project images
2. WHEN a user selects a category filter (Showroom, Trust, Transformation, Craftsmanship), THE System SHALL display only images matching that category
3. WHEN the gallery page loads, THE System SHALL include Schema.org ImageGallery markup for search engine visibility
4. WHEN images are displayed, THE System SHALL use WebP format with descriptive alt text containing location keywords
5. WHEN a user clicks an image, THE System SHALL display a full-size lightbox view with project details
6. WHEN the gallery page loads, THE System SHALL achieve LCP < 1.2s through lazy loading and image optimization
7. WHEN images are rendered, THE System SHALL include proper width and height attributes to prevent CLS

### Requirement 2: Reviews Wall Implementation

**User Story:** As a potential customer, I want to read all verified reviews from previous clients, so that I can make an informed decision about hiring Fredi Builders.

#### Acceptance Criteria

1. WHEN a user visits /reviews, THE System SHALL display all 104+ Checkatrade reviews hard-coded in the page
2. WHEN reviews are displayed, THE System SHALL include Schema.org Review markup for each review with rating, author, and date
3. WHEN the reviews page loads, THE System SHALL display an aggregate rating widget showing 9.6/10 score
4. WHEN a user applies a location filter, THE System SHALL display only reviews from that location
5. WHEN a user applies a service filter, THE System SHALL display only reviews mentioning that service
6. WHEN reviews are rendered, THE System SHALL include verified reviewer badges for Checkatrade-verified reviews
7. WHEN the page loads, THE System SHALL display reviews in reverse chronological order by default

### Requirement 3: Multi-Step Lead Form Enhancement

**User Story:** As a potential customer, I want to provide my project details through a simple step-by-step form, so that I can receive an accurate quote without feeling overwhelmed.

#### Acceptance Criteria

1. WHEN a user starts the contact form, THE System SHALL display Step 1 with service selection options (Bathroom/Extension/Other)
2. WHEN a user completes Step 1, THE System SHALL advance to Step 2 requesting postcode entry
3. WHEN a user completes Step 2, THE System SHALL advance to Step 3 offering optional photo upload
4. WHEN a user completes Step 3, THE System SHALL advance to Step 4 requesting contact details (phone/email)
5. WHEN a user is on any step, THE System SHALL display a progress indicator showing current step and total steps
6. WHEN a user submits the form, THE System SHALL send form data to info@fredibuilders.co.uk
7. WHEN a user uploads photos, THE System SHALL validate file types (JPEG, PNG, WebP) and size limits (max 5MB per file)
8. WHEN form submission succeeds, THE System SHALL trigger a Form_Submit event for analytics tracking

### Requirement 4: Enhanced Location Data

**User Story:** As a business owner, I want enriched location pages with detailed area information, so that I can rank for local search queries and demonstrate local expertise.

#### Acceptance Criteria

1. WHEN location data is defined, THE System SHALL include 3 local streets per location in app/data/locations.ts
2. WHEN location data is defined, THE System SHALL include 1-2 nearby landmarks per location
3. WHEN location data is defined, THE System SHALL include detailed area descriptions of 150-200 words
4. WHEN location data is defined, THE System SHALL include recent project examples with specific addresses (anonymized)
5. WHEN location data is defined, THE System SHALL include local SEO keywords specific to that area
6. WHEN a location page renders, THE System SHALL display all enriched data in semantically appropriate sections
7. WHEN location pages are generated, THE System SHALL maintain consistent structure across all 18 locations

### Requirement 5: Interlinking Master Plan

**User Story:** As a business owner, I want strategic internal links between pages, so that I can improve SEO through link equity distribution and help users discover related content.

#### Acceptance Criteria

1. WHEN a location page renders, THE System SHALL include upward links to relevant Service_Hub pages
2. WHEN a location page renders, THE System SHALL include lateral links to 4 nearby location pages
3. WHEN lateral links are generated, THE System SHALL use randomized anchor text from 8 variations to avoid over-optimization
4. WHEN any page renders, THE System SHALL include deep links to the Reviews_Wall
5. WHEN a Service_Hub page renders, THE System SHALL include links to the Gallery_Page filtered by that service type
6. WHEN the homepage renders, THE System SHALL include links to top-performing location pages
7. WHEN footer renders on any page, THE System SHALL include links to all service pages and top location pages

### Requirement 6: Technical SEO Infrastructure

**User Story:** As a business owner, I want comprehensive technical SEO implementation, so that search engines can properly index and rank my pages.

#### Acceptance Criteria

1. WHEN the site loads, THE System SHALL serve favicons in 48x48px, 96x96px, and 144x144px sizes
2. WHEN the site loads, THE System SHALL include a manifest.json file for PWA functionality
3. WHEN user interactions occur, THE System SHALL track Click_WhatsApp, Click_Call, and Form_Submit events
4. WHEN images are served, THE System SHALL use descriptive filenames with location and service keywords
5. WHEN images are rendered, THE System SHALL include alt text with location-specific keywords
6. WHEN the sitemap is generated, THE System SHALL include all location pages, service pages, and gallery/reviews pages
7. WHEN any page loads, THE System SHALL include proper canonical tags to prevent duplicate content issues

### Requirement 7: Schema.org Markup Implementation

**User Story:** As a business owner, I want structured data on all pages, so that search engines can display rich snippets and improve click-through rates.

#### Acceptance Criteria

1. WHEN a location page renders, THE System SHALL include LocalBusiness schema with geo-coordinates
2. WHEN a service page renders, THE System SHALL include Service schema with service details
3. WHEN the reviews page renders, THE System SHALL include Review schema for each review
4. WHEN the gallery page renders, THE System SHALL include ImageGallery schema
5. WHEN any page with FAQs renders, THE System SHALL include FAQPage schema
6. WHEN schema is generated, THE System SHALL validate against Schema.org specifications
7. WHEN aggregate ratings are displayed, THE System SHALL include AggregateRating schema

### Requirement 8: Performance Optimization

**User Story:** As a potential customer, I want fast-loading pages on all devices, so that I can quickly find information without waiting.

#### Acceptance Criteria

1. WHEN any page loads, THE System SHALL achieve Largest Contentful Paint (LCP) < 1.2 seconds
2. WHEN any page renders, THE System SHALL achieve Cumulative Layout Shift (CLS) = 0
3. WHEN images load, THE System SHALL use lazy loading for below-the-fold images
4. WHEN the gallery page loads, THE System SHALL implement progressive image loading
5. WHEN any page loads, THE System SHALL serve optimized WebP images with fallbacks
6. WHEN JavaScript executes, THE System SHALL minimize blocking time to achieve FID < 100ms
7. WHEN pages are served, THE System SHALL include proper caching headers for static assets

### Requirement 9: Mobile-First Responsive Design

**User Story:** As a mobile user, I want a seamless experience on my phone, so that I can browse services and contact the business easily.

#### Acceptance Criteria

1. WHEN any page renders on mobile, THE System SHALL display a mobile-optimized layout
2. WHEN the gallery loads on mobile, THE System SHALL display a single-column grid with touch-friendly spacing
3. WHEN the lead form displays on mobile, THE System SHALL use full-width inputs with large touch targets
4. WHEN navigation is accessed on mobile, THE System SHALL display a hamburger menu
5. WHEN contact buttons display on mobile, THE System SHALL show a sticky footer with WhatsApp/Call buttons
6. WHEN images load on mobile, THE System SHALL serve appropriately sized images for the viewport
7. WHEN forms are used on mobile, THE System SHALL use appropriate input types (tel, email, number)

### Requirement 10: Accessibility Compliance

**User Story:** As a user with accessibility needs, I want to navigate and use the website with assistive technologies, so that I can access all information and services.

#### Acceptance Criteria

1. WHEN any page renders, THE System SHALL include proper ARIA labels for interactive elements
2. WHEN images are displayed, THE System SHALL include descriptive alt text for screen readers
3. WHEN forms are rendered, THE System SHALL associate labels with form inputs
4. WHEN interactive elements are used, THE System SHALL support keyboard navigation
5. WHEN color is used to convey information, THE System SHALL provide alternative indicators
6. WHEN text is displayed, THE System SHALL maintain minimum contrast ratios of 4.5:1 for body text
7. WHEN focus states are active, THE System SHALL display visible focus indicators

### Requirement 11: Analytics and Event Tracking

**User Story:** As a business owner, I want to track user interactions and conversions, so that I can measure ROI and optimize the website.

#### Acceptance Criteria

1. WHEN a user clicks the WhatsApp button, THE System SHALL fire a Click_WhatsApp event
2. WHEN a user clicks a phone number link, THE System SHALL fire a Click_Call event
3. WHEN a user submits the lead form, THE System SHALL fire a Form_Submit event with form data
4. WHEN a user views the gallery, THE System SHALL track gallery page views
5. WHEN a user filters reviews, THE System SHALL track filter usage
6. WHEN a user navigates between location pages, THE System SHALL track location page views
7. WHEN events are tracked, THE System SHALL send data to Google Analytics 4

### Requirement 12: Content Management and Scalability

**User Story:** As a business owner, I want a maintainable architecture that can scale to 100+ location pages, so that I can expand coverage without performance degradation.

#### Acceptance Criteria

1. WHEN location data is stored, THE System SHALL use a centralized data file (app/data/locations.ts)
2. WHEN new locations are added, THE System SHALL automatically generate pages using the location template
3. WHEN location pages are generated, THE System SHALL maintain consistent performance regardless of total page count
4. WHEN images are added, THE System SHALL organize them in categorized folders
5. WHEN reviews are updated, THE System SHALL parse them from a centralized reviews.txt file
6. WHEN schema markup is generated, THE System SHALL use reusable components
7. WHEN the sitemap is generated, THE System SHALL dynamically include all location and service pages
