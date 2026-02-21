# Design Document: Fredi Builders Empire Building

## Overview

This design document outlines the technical architecture for transforming the Fredi Builders website from a single-page showroom into a comprehensive digital authority platform. The system will implement six major feature areas: Gallery Page, Reviews Wall, Multi-Step Lead Form, Enhanced Location Data, Strategic Interlinking, and Technical SEO Infrastructure.

The architecture follows Next.js 14 App Router conventions with TypeScript, leveraging server-side rendering for SEO, client-side interactivity for user engagement, and static generation for performance. The design prioritizes Core Web Vitals (LCP < 1.2s, CLS = 0), mobile-first responsive design, and WCAG AA accessibility compliance.

## Architecture

### High-Level Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                     Next.js 14 App Router                    │
├─────────────────────────────────────────────────────────────┤
│                                                               │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐      │
│  │   Gallery    │  │   Reviews    │  │  Multi-Step  │      │
│  │     Page     │  │     Wall     │  │  Lead Form   │      │
│  │  /gallery    │  │  /reviews    │  │  /contact    │      │
│  └──────────────┘  └──────────────┘  └──────────────┘      │
│                                                               │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐      │
│  │  Location    │  │   Service    │  │   Homepage   │      │
│  │    Pages     │  │     Hubs     │  │      /       │      │
│  │ /locations/* │  │ /services/*  │  └──────────────┘      │
│  └──────────────┘  └──────────────┘                         │
│                                                               │
├─────────────────────────────────────────────────────────────┤
│                    Shared Components                         │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐      │
│  │   Schema     │  │  Interlinking│  │   Analytics  │      │
│  │   Markup     │  │  Components  │  │   Tracking   │      │
│  └──────────────┘  └──────────────┘  └──────────────┘      │
├─────────────────────────────────────────────────────────────┤
│                       Data Layer                             │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐      │
│  │  locations.ts│  │  reviews.ts  │  │  images.ts   │      │
│  │  (18 locs)   │  │  (104+ revs) │  │  (40+ imgs)  │      │
│  └──────────────┘  └──────────────┘  └──────────────┘      │
└─────────────────────────────────────────────────────────────┘
```

### Technology Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS with custom design tokens
- **Fonts**: Playfair Display (headings), Inter (body)
- **Image Optimization**: Next.js Image component with WebP format
- **Schema Markup**: JSON-LD embedded in server components
- **Analytics**: Google Analytics 4 with custom event tracking
- **Form Handling**: Server Actions for form submission
- **State Management**: React hooks for client-side state

### Design Principles

1. **Performance First**: All pages must achieve Core Web Vitals targets (LCP < 1.2s, CLS = 0)
2. **SEO Optimized**: Every page includes proper meta tags, Schema.org markup, and semantic HTML
3. **Mobile First**: Design and develop for mobile viewports first, then enhance for desktop
4. **Accessibility**: WCAG AA compliance with proper ARIA labels, keyboard navigation, and screen reader support
5. **Scalability**: Architecture supports growth to 100+ location pages without performance degradation
6. **Maintainability**: Centralized data files, reusable components, and consistent patterns

## Components and Interfaces

### 1. Gallery Page Component

**File**: `app/gallery/page.tsx`

**Purpose**: Display curated project images in a filterable, high-performance grid with Schema.org ImageGallery markup.

**Interface**:
```typescript
interface GalleryImage {
  id: string
  src: string
  alt: string
  category: 'Showroom' | 'Trust' | 'Transformation' | 'Craftsmanship'
  location?: string
  service?: string
  width: number
  height: number
}

interface GalleryPageProps {
  images: GalleryImage[]
}
```

**Key Features**:
- Server-side rendering for initial page load
- Client-side filtering without page reload
- Lazy loading for below-the-fold images
- Lightbox modal for full-size viewing
- Schema.org ImageGallery markup
- Responsive grid (1 column mobile, 2 tablet, 3 desktop)

**Performance Optimizations**:
- Use Next.js Image component with priority loading for above-the-fold images
- Implement intersection observer for lazy loading
- Preload critical images
- Use blur placeholder for loading states

### 2. Reviews Wall Component

**File**: `app/reviews/page.tsx`

**Purpose**: Display all 104+ Checkatrade reviews with filtering, Schema.org Review markup, and aggregate rating display.

**Interface**:
```typescript
interface Review {
  id: string
  rating: number
  text: string
  author: string
  location: string
  postcode: string
  service?: string
  date: string
  verified: boolean
}

interface ReviewsPageProps {
  reviews: Review[]
  aggregateRating: {
    ratingValue: number
    reviewCount: number
    bestRating: number
    worstRating: number
  }
}
```

**Key Features**:
- Server-side rendering with all reviews hard-coded
- Client-side filtering by location and service
- Schema.org Review markup for each review
- Schema.org AggregateRating for overall score
- Verified reviewer badges
- Reverse chronological ordering by default
- Pagination or infinite scroll for mobile

**Data Source**:
- Parse reviews from `reviews.txt`
- Transform into structured TypeScript objects
- Store in `app/data/reviews.ts`

### 3. Multi-Step Lead Form Component

**File**: `app/components/MultiStepForm.tsx`

**Purpose**: Capture lead information through a psychologically optimized multi-step form with progress indication.

**Interface**:
```typescript
interface FormStep {
  step: number
  title: string
  fields: FormField[]
}

interface FormField {
  name: string
  type: 'select' | 'text' | 'tel' | 'email' | 'file'
  label: string
  required: boolean
  options?: string[]
  validation?: (value: any) => boolean
}

interface FormData {
  service: 'Bathroom' | 'Extension' | 'Other'
  postcode: string
  photos?: File[]
  phone: string
  email: string
  name: string
}
```

**Key Features**:
- Step 1: Service selection (radio buttons with icons)
- Step 2: Postcode entry (text input with validation)
- Step 3: Photo upload (optional, drag-and-drop)
- Step 4: Contact details (name, phone, email)
- Progress indicator (e.g., "Step 2 of 4")
- Form validation at each step
- Server Action for form submission
- Analytics event tracking (Form_Submit)
- Success/error messaging

**Psychological Optimization**:
- Sunk cost fallacy: Users more likely to complete after investing time
- Progressive disclosure: Only show relevant fields
- Optional photo upload builds trust without friction
- Clear progress indication reduces abandonment

### 4. Enhanced Location Data Structure

**File**: `app/data/locations.ts`

**Purpose**: Centralized location data with enriched information for local SEO and user engagement.

**Interface**:
```typescript
interface Location {
  slug: string
  name: string
  postcode: string
  zone: 'gold' | 'renovation' | 'village' | 'foundation'
  region: string
  description: string
  detailedDescription: string // 150-200 words
  keywords: string[]
  highlightService?: string
  coordinates: {
    lat: number
    lng: number
  }
  nearby: string[]
  localStreets: string[] // 3 streets
  landmarks: string[] // 1-2 landmarks
  recentProjects: {
    description: string
    year: number
  }[]
  lsiKeywords: string[] // bathroom-specific vocabulary
}
```

**Enrichment Requirements**:
- 3 local streets per location (e.g., "High Street", "Station Road")
- 1-2 nearby landmarks (e.g., "Streatham Common", "Esher Rugby Club")
- Detailed area description (150-200 words) covering:
  - Property types (Victorian terraces, modern builds, etc.)
  - Local characteristics
  - Why Fredi Builders is ideal for this area
- Recent project examples (anonymized addresses)
- LSI keywords (e.g., "walk-in shower", "underfloor heating", "marble tiles")

### 5. Interlinking Components

**File**: `app/components/InternalLinks.tsx`

**Purpose**: Strategic internal linking with randomized anchor text to distribute link equity and avoid over-optimization penalties.

**Interface**:
```typescript
interface InternalLink {
  href: string
  text: string
  type: 'upward' | 'lateral' | 'deep'
}

interface InterlinkingProps {
  currentPage: string
  pageType: 'location' | 'service' | 'home'
  relatedPages: string[]
}
```

**Linking Strategy**:

1. **Upward Links** (Location → Service):
   - Each location page links to 2-3 relevant service hubs
   - Example: Streatham page → Full Bathroom Renovations, Wet Room Installations

2. **Lateral Links** (Location → Location):
   - Each location page links to 4 nearby locations
   - Use randomized anchor text from 8 variations
   - Variations: "Bathroom Fitters in {location}", "{location} Wet Room Installations", "Our {location} Team", etc.

3. **Deep Links** (All → Reviews):
   - Every page includes link to Reviews Wall
   - Contextual placement near CTAs
   - Example: "See what our 104+ customers say"

4. **Service → Gallery Links**:
   - Service pages link to gallery filtered by service type
   - Example: Wet Room page → Gallery?filter=wet-rooms

**Anchor Text Randomization**:
```typescript
const anchorTextTemplates = [
  'Bathroom Fitters in {location}',
  '{location} Wet Room Installations',
  'Our {location} Team',
  'Recent work in {location}',
  'Serving {location}',
  '{location} Building Services',
  'Luxury Bathrooms {location}',
  '{location} Renovations'
]

function getRandomAnchorText(location: string, seed: number): string {
  const index = seed % anchorTextTemplates.length
  return anchorTextTemplates[index].replace('{location}', location)
}
```

### 6. Schema Markup Components

**Files**: 
- `app/components/schemas/LocalBusinessSchema.tsx`
- `app/components/schemas/ReviewSchema.tsx`
- `app/components/schemas/ImageGallerySchema.tsx`
- `app/components/schemas/FAQSchema.tsx`

**Purpose**: Reusable Schema.org markup components for rich snippets and search engine visibility.

**Interfaces**:
```typescript
interface LocalBusinessSchemaProps {
  location: Location
  url: string
}

interface ReviewSchemaProps {
  reviews: Review[]
}

interface ImageGallerySchemaProps {
  images: GalleryImage[]
}

interface FAQSchemaProps {
  faqs: {
    question: string
    answer: string
  }[]
}
```

**Schema Types**:
- LocalBusiness: Location pages
- Service: Service hub pages
- Review: Individual reviews on Reviews Wall
- AggregateRating: Overall rating display
- ImageGallery: Gallery page
- FAQPage: FAQ sections
- BreadcrumbList: Navigation breadcrumbs

### 7. Analytics Tracking Component

**File**: `app/components/Analytics.tsx`

**Purpose**: Track user interactions and conversions for ROI measurement.

**Interface**:
```typescript
interface AnalyticsEvent {
  event: 'Click_WhatsApp' | 'Click_Call' | 'Form_Submit' | 'Gallery_View' | 'Review_Filter'
  properties?: Record<string, any>
}

function trackEvent(event: AnalyticsEvent): void
```

**Tracked Events**:
- Click_WhatsApp: User clicks WhatsApp button
- Click_Call: User clicks phone number
- Form_Submit: User submits lead form (with service type)
- Gallery_View: User views gallery page
- Review_Filter: User filters reviews (with filter type)
- Location_View: User views location page (with location name)

### 8. PWA Manifest and Favicons

**Files**:
- `public/manifest.json`
- `public/favicon-48x48.png`
- `public/favicon-96x96.png`
- `public/favicon-144x144.png`

**Manifest Structure**:
```json
{
  "name": "Fredi Builders - Luxury Bathroom Renovations",
  "short_name": "Fredi Builders",
  "description": "Premium bathroom renovations and master building services across South London and Surrey",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#f8fafc",
  "theme_color": "#0d9488",
  "icons": [
    {
      "src": "/favicon-48x48.png",
      "sizes": "48x48",
      "type": "image/png"
    },
    {
      "src": "/favicon-96x96.png",
      "sizes": "96x96",
      "type": "image/png"
    },
    {
      "src": "/favicon-144x144.png",
      "sizes": "144x144",
      "type": "image/png"
    }
  ]
}
```

## Data Models

### Location Data Model

**File**: `app/data/locations.ts`

**Current Structure** (18 locations):
```typescript
export interface Location {
  slug: string
  name: string
  postcode: string
  zone: 'gold' | 'renovation' | 'village' | 'foundation'
  region: string
  description: string
  keywords: string[]
  highlightService?: string
  coordinates: { lat: number; lng: number }
  nearby: string[]
}
```

**Enhanced Structure** (adds 5 new fields):
```typescript
export interface Location {
  // ... existing fields ...
  detailedDescription: string // 150-200 words
  localStreets: string[] // 3 streets
  landmarks: string[] // 1-2 landmarks
  recentProjects: {
    description: string
    year: number
  }[]
  lsiKeywords: string[] // bathroom-specific vocabulary
}
```

### Review Data Model

**File**: `app/data/reviews.ts`

**Structure**:
```typescript
export interface Review {
  id: string
  rating: number // 1-10 (Checkatrade scale)
  text: string
  author: string
  location: string
  postcode: string
  service?: string // extracted from review text
  date: string // ISO 8601 format
  verified: boolean
  jobLocation?: string // e.g., "CR7", "SW16"
}

export const reviews: Review[] = [
  // Parsed from reviews.txt
]

export const aggregateRating = {
  ratingValue: 9.6,
  reviewCount: 104,
  bestRating: 10,
  worstRating: 1
}
```

**Parsing Strategy**:
- Extract rating from first line (e.g., "10", "9.33")
- Extract review text from subsequent lines
- Extract location from "Job location: CR7" pattern
- Extract author from "Verified reviewer" or name line
- Extract date from "Posted X days/months ago" pattern
- Mark as verified if "Verified reviewer" present

### Gallery Image Data Model

**File**: `app/data/gallery.ts`

**Structure**:
```typescript
export interface GalleryImage {
  id: string
  src: string // path to image in public/images/photos/
  alt: string // descriptive alt text with location keywords
  category: 'Showroom' | 'Trust' | 'Transformation' | 'Craftsmanship'
  location?: string // e.g., "Streatham", "Esher"
  service?: string // e.g., "Bathroom Renovation", "Wet Room"
  width: number
  height: number
  priority?: boolean // for above-the-fold images
}

export const galleryImages: GalleryImage[] = [
  {
    id: 'luxury-marble-bathroom-1',
    src: '/images/photos/luxury-marble-bathroom-black-porcelain-floor.webp',
    alt: 'Luxury marble bathroom with black porcelain floor tiles - Fredi Builders Esher',
    category: 'Showroom',
    location: 'Esher',
    service: 'Full Bathroom Renovation',
    width: 1200,
    height: 800,
    priority: true
  },
  // ... 40+ more images
]
```

**Image Organization**:
- Existing images in `public/images/photos/`
- Categorize into 4 categories based on visual appeal and purpose
- Add descriptive alt text with location and service keywords
- Specify dimensions for proper aspect ratio

### Form Data Model

**File**: `app/types/form.ts`

**Structure**:
```typescript
export interface LeadFormData {
  // Step 1
  service: 'Bathroom' | 'Extension' | 'Other'
  
  // Step 2
  postcode: string
  
  // Step 3 (optional)
  photos?: File[]
  
  // Step 4
  name: string
  phone: string
  email: string
  
  // Metadata
  source: string // e.g., "gallery", "location-page-streatham"
  timestamp: string
}

export interface FormValidation {
  isValid: boolean
  errors: Record<string, string>
}
```

## Correctness Properties

*A property is a characteristic or behavior that should hold true across all valid executions of a system—essentially, a formal statement about what the system should do. Properties serve as the bridge between human-readable specifications and machine-verifiable correctness guarantees.*


### Property Reflection

After analyzing all acceptance criteria, I identified several areas where properties can be consolidated:

**Redundancy Elimination**:
1. Image properties (1.4, 1.7, 6.4, 6.5, 8.5, 10.2) all test image attributes - can be combined into comprehensive image validation properties
2. Schema markup properties (7.1, 7.2, 7.3, 7.5, 7.7) all test schema presence - can be grouped by page type
3. Form progression properties (3.2, 3.3, 3.4) all test step advancement - can be combined into single form progression property
4. Filtering properties (1.2, 2.4, 2.5) all test filtering logic - share same pattern
5. Analytics tracking properties (11.1, 11.2, 11.3, 11.5, 11.6, 11.7) all test event firing - can be grouped
6. Link presence properties (5.1, 5.2, 5.4, 5.7) all test that links exist - can be consolidated

**Properties to Keep Separate**:
- Data structure validation (4.1-4.5) - each tests different field requirements
- Accessibility properties (10.1, 10.3, 10.6, 10.7) - each tests different WCAG criteria
- Interlinking anchor text (5.3) - unique randomization requirement

### Gallery Page Properties

**Property 1: Gallery Image Rendering**
*For any* set of gallery images, when the gallery page renders, all images should be displayed in a responsive grid with proper WebP format, descriptive alt text containing location keywords, and width/height attributes to prevent layout shift.
**Validates: Requirements 1.1, 1.4, 1.7**

**Property 2: Gallery Category Filtering**
*For any* set of gallery images with mixed categories, when a category filter is applied, the displayed images should only include images matching that category.
**Validates: Requirements 1.2**

**Property 3: Gallery Schema Markup**
*For any* gallery page render, the HTML should include Schema.org ImageGallery markup in JSON-LD format.
**Validates: Requirements 1.3**

**Property 4: Gallery Lightbox Interaction**
*For any* image in the gallery, when clicked, a lightbox modal should open displaying the full-size image with project details.
**Validates: Requirements 1.5**

### Reviews Wall Properties

**Property 5: Reviews Display Completeness**
*For any* set of reviews in the data source, when the reviews page renders, all reviews should be displayed on the page.
**Validates: Requirements 2.1**

**Property 6: Review Schema Markup**
*For any* review displayed on the reviews page, the HTML should include Schema.org Review markup with rating, author, and date fields.
**Validates: Requirements 2.2**

**Property 7: Reviews Location Filtering**
*For any* set of reviews with mixed locations, when a location filter is applied, the displayed reviews should only include reviews from that location.
**Validates: Requirements 2.4**

**Property 8: Reviews Service Filtering**
*For any* set of reviews, when a service filter is applied, the displayed reviews should only include reviews mentioning that service.
**Validates: Requirements 2.5**

**Property 9: Verified Reviewer Badges**
*For any* set of reviews, those marked as verified should render with a verified reviewer badge, and non-verified reviews should not have the badge.
**Validates: Requirements 2.6**

**Property 10: Reviews Chronological Ordering**
*For any* set of reviews with dates, when displayed with default sorting, the reviews should be ordered by date in descending order (newest first).
**Validates: Requirements 2.7**

### Multi-Step Form Properties

**Property 11: Form Step Progression**
*For any* valid completion of step N (where N < 4), the form should advance to step N+1 and display the appropriate fields for that step.
**Validates: Requirements 3.2, 3.3, 3.4**

**Property 12: Form Progress Indicator**
*For any* step in the multi-step form, the progress indicator should display the current step number and total number of steps.
**Validates: Requirements 3.5**

**Property 13: Form Photo Upload Validation**
*For any* file upload attempt, files with invalid types (not JPEG, PNG, or WebP) or size exceeding 5MB should be rejected with an error message.
**Validates: Requirements 3.7**

**Property 14: Form Submission Event Tracking**
*For any* successful form submission, a Form_Submit analytics event should be fired with the form data.
**Validates: Requirements 3.8**

**Property 15: Form Data Transmission**
*For any* valid form submission, the form data should be sent to the server with all required fields (service, postcode, name, phone, email).
**Validates: Requirements 3.6**

### Location Data Properties

**Property 16: Location Data Completeness**
*For any* location in the locations data file, it should include exactly 3 local streets, 1-2 landmarks, a detailed description of 150-200 words, at least one recent project example, and at least 3 LSI keywords.
**Validates: Requirements 4.1, 4.2, 4.3, 4.4, 4.5**

**Property 17: Location Page Data Display**
*For any* location page render, all enriched data fields (local streets, landmarks, detailed description, recent projects, LSI keywords) should be present in the rendered HTML.
**Validates: Requirements 4.6**

**Property 18: Location Page Structural Consistency**
*For any* two location pages, they should have the same HTML structure with the same section types and element hierarchy.
**Validates: Requirements 4.7**

### Interlinking Properties

**Property 19: Location Page Upward Links**
*For any* location page render, the page should include links to at least 2 relevant service hub pages.
**Validates: Requirements 5.1**

**Property 20: Location Page Lateral Links**
*For any* location page render, the page should include exactly 4 links to nearby location pages.
**Validates: Requirements 5.2**

**Property 21: Lateral Link Anchor Text Variation**
*For any* set of lateral links on a location page, the anchor text should come from the 8 defined variations and should not all be identical.
**Validates: Requirements 5.3**

**Property 22: Reviews Wall Deep Links**
*For any* page render, the page should include at least one link to the /reviews page.
**Validates: Requirements 5.4**

**Property 23: Service Page Gallery Links**
*For any* service hub page render, the page should include a link to the gallery page with a service filter query parameter.
**Validates: Requirements 5.5**

**Property 24: Footer Navigation Links**
*For any* page render, the footer should include links to all service pages and at least 6 location pages.
**Validates: Requirements 5.7**

### Technical SEO Properties

**Property 25: Image Filename Keywords**
*For any* image served by the system, the filename should contain at least one location or service keyword.
**Validates: Requirements 6.4**

**Property 26: Image Alt Text Keywords**
*For any* image rendered, the alt text should be non-empty and contain at least one location-specific keyword.
**Validates: Requirements 6.5, 10.2**

**Property 27: Sitemap Completeness**
*For any* sitemap generation, the sitemap should include URLs for all location pages, all service pages, the gallery page, and the reviews page.
**Validates: Requirements 6.6**

**Property 28: Canonical Tag Presence**
*For any* page render, the HTML head should include a canonical link tag with the page's URL.
**Validates: Requirements 6.7**

**Property 29: Analytics Event Tracking**
*For any* user interaction (WhatsApp click, phone click, form submit, review filter), the corresponding analytics event should be fired with appropriate event properties.
**Validates: Requirements 6.3, 11.1, 11.2, 11.3, 11.5, 11.6, 11.7**

### Schema Markup Properties

**Property 30: Location Page Schema Markup**
*For any* location page render, the HTML should include LocalBusiness schema with geo-coordinates, address, and aggregate rating.
**Validates: Requirements 7.1**

**Property 31: Service Page Schema Markup**
*For any* service page render, the HTML should include Service schema with service type, provider, and area served.
**Validates: Requirements 7.2**

**Property 32: FAQ Page Schema Markup**
*For any* page with FAQ sections, the HTML should include FAQPage schema with all questions and answers.
**Validates: Requirements 7.5**

**Property 33: Aggregate Rating Schema**
*For any* page displaying aggregate ratings, the HTML should include AggregateRating schema with rating value, review count, best rating, and worst rating.
**Validates: Requirements 7.7**

### Performance and Optimization Properties

**Property 34: Image Lazy Loading**
*For any* image that is below the fold (not in initial viewport), the img tag should have loading="lazy" attribute.
**Validates: Requirements 8.3**

**Property 35: WebP Image Format**
*For any* image served by the system, the image format should be WebP.
**Validates: Requirements 8.5**

**Property 36: Static Asset Caching Headers**
*For any* static asset (images, CSS, JS), the HTTP response should include cache-control headers with appropriate max-age.
**Validates: Requirements 8.7**

### Mobile Responsiveness Properties

**Property 37: Mobile Image Sizing**
*For any* image rendered at mobile viewport width, the image should be sized appropriately for the viewport (using srcset or responsive sizing).
**Validates: Requirements 9.6**

**Property 38: Mobile Form Input Types**
*For any* form field, the input type attribute should match the data type (tel for phone, email for email, text for names).
**Validates: Requirements 9.7**

### Accessibility Properties

**Property 39: Interactive Element ARIA Labels**
*For any* interactive element (buttons, links, form controls), the element should have an appropriate ARIA label or accessible name.
**Validates: Requirements 10.1**

**Property 40: Form Label Association**
*For any* form input, there should be an associated label element linked via htmlFor/id or aria-label.
**Validates: Requirements 10.3**

**Property 41: Text Contrast Ratios**
*For any* text element, the color contrast ratio between text and background should be at least 4.5:1 for body text and 3:1 for large text.
**Validates: Requirements 10.6**

**Property 42: Focus Indicator Visibility**
*For any* focusable element, when focused, there should be a visible focus indicator (outline, border, or background change).
**Validates: Requirements 10.7**

### Content Management Properties

**Property 43: Dynamic Location Page Generation**
*For any* location added to the locations data file, a corresponding page should be generated at /locations/{slug}.
**Validates: Requirements 12.2**

**Property 44: Reviews Data Parsing**
*For any* valid reviews.txt file, the system should parse it into an array of Review objects with all required fields (rating, text, author, date, location).
**Validates: Requirements 12.5**

**Property 45: Dynamic Sitemap Generation**
*For any* set of locations and services in the data files, the sitemap should dynamically include all corresponding page URLs.
**Validates: Requirements 12.7**

## Error Handling

### Form Validation Errors

**Client-Side Validation**:
- Step 1: Service selection is required
- Step 2: Postcode must match UK postcode format (regex: `^[A-Z]{1,2}[0-9]{1,2}[A-Z]?\s?[0-9][A-Z]{2}$`)
- Step 3: Photo files must be JPEG, PNG, or WebP and under 5MB each
- Step 4: Phone must be valid UK format, email must be valid email format, name is required

**Error Messages**:
- Clear, actionable error messages displayed inline
- Error state styling (red border, error icon)
- Focus moved to first error field
- Error summary at top of form for screen readers

**Server-Side Validation**:
- Validate all fields again on server
- Sanitize inputs to prevent XSS
- Rate limiting to prevent spam (max 5 submissions per IP per hour)
- Return 400 Bad Request with error details for invalid submissions

### Image Loading Errors

**Fallback Strategy**:
- Use Next.js Image component with onError handler
- Display placeholder image if load fails
- Log error to monitoring service
- Retry loading once after 2-second delay

**Missing Images**:
- Validate all image paths at build time
- Fail build if referenced images don't exist
- Use TypeScript to ensure image data matches actual files

### Data Parsing Errors

**Reviews Parsing**:
- Validate reviews.txt format before parsing
- Skip malformed reviews with warning log
- Ensure minimum 100 reviews parsed successfully
- Fail build if parsing fails completely

**Location Data Validation**:
- Validate all required fields at build time
- Ensure coordinates are valid lat/lng
- Validate postcode format
- Fail build if any location is invalid

### Schema Validation Errors

**JSON-LD Validation**:
- Validate schema structure at build time
- Use TypeScript types to ensure correct schema format
- Test schema with Google's Rich Results Test in CI/CD
- Log warnings for missing optional fields

### 404 Handling

**Not Found Pages**:
- Custom 404 page with helpful navigation
- Suggest similar pages based on URL
- Include search functionality
- Track 404s in analytics to identify broken links

### Performance Degradation

**Slow Loading**:
- Monitor Core Web Vitals in production
- Alert if LCP > 2.5s or CLS > 0.1
- Implement performance budgets in CI/CD
- Use Lighthouse CI to catch regressions

**Large Image Files**:
- Validate image file sizes at build time
- Warn if any image > 200KB
- Automatically optimize images during build
- Use responsive images with multiple sizes

## Testing Strategy

### Dual Testing Approach

This project requires both unit testing and property-based testing for comprehensive coverage:

**Unit Tests**: Verify specific examples, edge cases, and error conditions
- Specific form validation scenarios (empty fields, invalid formats)
- Specific schema markup examples (one location, one review)
- Error handling paths (network failures, invalid data)
- Integration points between components
- Edge cases (empty arrays, null values, boundary conditions)

**Property-Based Tests**: Verify universal properties across all inputs
- Gallery filtering works for any set of images
- Form progression works for any valid input sequence
- Schema markup is valid for any location/review data
- Interlinking is consistent across all pages
- Data validation works for any input data

**Balance**: Avoid writing too many unit tests. Property-based tests handle covering lots of inputs. Unit tests should focus on specific examples that demonstrate correct behavior and edge cases that are hard to generate randomly.

### Property-Based Testing Configuration

**Library**: Use `fast-check` for TypeScript/JavaScript property-based testing

**Configuration**:
- Minimum 100 iterations per property test (due to randomization)
- Seed-based reproducibility for debugging failures
- Shrinking enabled to find minimal failing examples
- Timeout of 30 seconds per property test

**Test Tagging**:
Each property test must reference its design document property using this format:
```typescript
// Feature: fredi-builders-empire-building, Property 1: Gallery Image Rendering
test('gallery renders all images with proper attributes', () => {
  fc.assert(
    fc.property(fc.array(galleryImageArbitrary), (images) => {
      const rendered = renderGallery(images)
      // assertions
    }),
    { numRuns: 100 }
  )
})
```

### Unit Testing Strategy

**Component Testing**:
- Test each React component in isolation
- Mock external dependencies (data fetching, analytics)
- Test user interactions (clicks, form inputs)
- Test conditional rendering
- Test error states

**Integration Testing**:
- Test page rendering with real data
- Test form submission flow end-to-end
- Test navigation between pages
- Test schema markup generation
- Test analytics event firing

**Data Validation Testing**:
- Test location data structure
- Test review parsing from reviews.txt
- Test image data structure
- Test schema validation

**Accessibility Testing**:
- Test keyboard navigation
- Test screen reader compatibility (using jest-axe)
- Test ARIA attributes
- Test focus management

### Test Coverage Goals

- **Unit Test Coverage**: 80% line coverage minimum
- **Property Test Coverage**: All 45 correctness properties implemented
- **Integration Test Coverage**: All critical user flows (form submission, page navigation)
- **Accessibility Test Coverage**: All interactive components tested with jest-axe

### Continuous Integration

**Pre-Commit**:
- Run TypeScript type checking
- Run ESLint
- Run Prettier formatting check

**CI Pipeline**:
- Run all unit tests
- Run all property-based tests
- Run Lighthouse CI for performance
- Run accessibility tests
- Build production bundle
- Validate all images exist
- Validate location data structure
- Generate sitemap and validate

**Pre-Deployment**:
- Run full test suite
- Validate Core Web Vitals on staging
- Test schema markup with Google Rich Results Test
- Verify all 18 location pages render correctly
- Verify gallery and reviews pages load

## Implementation Notes

### Image Organization

**Current Structure**:
```
public/images/photos/
├── bathrooms/
├── kitchens/
├── other/
├── structural-work/
└── [47 loose images]
```

**Recommended Organization**:
```
public/images/photos/
├── gallery/
│   ├── showroom/
│   ├── trust/
│   ├── transformation/
│   └── craftsmanship/
├── locations/
│   ├── streatham/
│   ├── esher/
│   └── [other locations]
└── services/
    ├── bathrooms/
    ├── wet-rooms/
    └── [other services]
```

### Data File Structure

**app/data/locations.ts**: Enhanced with 5 new fields per location (18 locations × 5 fields = 90 new data points)

**app/data/reviews.ts**: New file with parsed reviews (104+ reviews)

**app/data/gallery.ts**: New file with gallery image metadata (40+ images)

### Performance Budget

**Page Weight Targets**:
- Homepage: < 500KB total
- Location pages: < 400KB total
- Gallery page: < 800KB total (with lazy loading)
- Reviews page: < 300KB total

**Core Web Vitals Targets**:
- LCP: < 1.2s (target), < 2.5s (acceptable)
- FID: < 100ms (target), < 300ms (acceptable)
- CLS: 0 (target), < 0.1 (acceptable)

**Image Optimization**:
- All images converted to WebP
- Multiple sizes generated (320w, 640w, 1024w, 1920w)
- Blur placeholders for loading states
- Priority loading for above-the-fold images

### SEO Implementation Checklist

**On-Page SEO**:
- [ ] Title tags (55-60 characters, include location and service)
- [ ] Meta descriptions (150-160 characters, include CTA)
- [ ] H1 tags (one per page, include location and service)
- [ ] H2-H6 hierarchy (proper nesting)
- [ ] Image alt text (descriptive, include keywords)
- [ ] Internal linking (upward, lateral, deep)
- [ ] Canonical tags (prevent duplicate content)
- [ ] Open Graph tags (social sharing)

**Technical SEO**:
- [ ] XML sitemap (all pages)
- [ ] Robots.txt (allow all, link to sitemap)
- [ ] Schema.org markup (LocalBusiness, Service, Review, etc.)
- [ ] Mobile-friendly (responsive design)
- [ ] Page speed (Core Web Vitals)
- [ ] HTTPS (already implemented)
- [ ] Security headers (already implemented in next.config.js)

**Local SEO**:
- [ ] Geo-coordinates in meta tags
- [ ] LocalBusiness schema with coordinates
- [ ] Location-specific content (streets, landmarks)
- [ ] Area descriptions (150-200 words)
- [ ] Local keywords (LSI keywords)
- [ ] Nearby location links (lateral linking)

### Deployment Considerations

**Build Time**:
- Static generation of 18 location pages
- Static generation of gallery and reviews pages
- Image optimization during build
- Sitemap generation during build
- Estimated build time: 2-3 minutes

**Hosting**:
- Vercel (recommended for Next.js)
- Automatic deployments from Git
- Edge caching for static assets
- Serverless functions for form submission

**Monitoring**:
- Google Analytics 4 for user behavior
- Google Search Console for SEO performance
- Vercel Analytics for Core Web Vitals
- Sentry for error tracking (optional)

### Future Enhancements

**Phase 2 (Post-Launch)**:
- Blog system for content marketing
- Customer testimonial video gallery
- Live chat integration
- Online booking system
- Before/after image slider
- Project cost calculator
- 3D bathroom planner

**Scalability**:
- Expand to 50+ location pages
- Add more service pages (kitchen extensions, loft conversions)
- Multi-language support (Polish for tradespeople)
- CMS integration for non-technical content updates
