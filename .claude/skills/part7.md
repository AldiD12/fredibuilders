THE LONDON CONTRACTOR RANKING BIBLE
PART 7: GOD TIER TECHNICAL IMPLEMENTATION

KIRO: INITIATE TECHNICAL ARCHITECTURE FOR FREDI BUILDERS

Execute the following 8 strict requirements using Next.js 14 (App Router), Tailwind CSS, and TypeScript:

## 1. SECURITY & IMAGE OPTIMIZATION (next.config.js)

Configure next.config.js to:
- Automatically convert all images to WebP/AVIF
- Inject strict Security Headers:
  * X-DNS-Prefetch-Control: on
  * X-Frame-Options: DENY
  * X-Content-Type-Options: nosniff
  * Referrer-Policy: origin-when-cross-origin
  * X-XSS-Protection: 1; mode=block
  * Permissions-Policy: geolocation=(), microphone=(), camera=()

## 2. GEO-COORDINATE META TAGS (generateMetadata)

In `app/locations/[slug]/page.tsx`, the generateMetadata function must output:
```html
<meta name="geo.region" content="GB-ENG" />
<meta name="geo.placename" content="{Location Name}" />
<meta name="geo.position" content="{lat};{lng}" />
<meta name="ICBM" content="{lat}, {lng}" />
```

## 3. THE "GOD TIER" SCHEMA.ORG INJECTION (JSON-LD)

Inject unified `<script type="application/ld+json">` on every location page containing:

**LocalBusiness Schema:**
- name: "Fredi Builders {Location}"
- image: Dynamic project image
- aggregateRating: { ratingValue: "9.6", reviewCount: "104" }
- areaServed: Dynamic location with geo coordinates
- priceRange: "££"
- address: Service area
- telephone: "07404304224"
- url: Dynamic location URL

**Service Schema:**
- serviceType: "Bathroom Renovations", "Wet Room Installations", "Structural Building"
- provider: Fredi Builders
- areaServed: Dynamic location

**BreadcrumbList Schema:**
- Home > Service Areas > {Location}

**FAQPage Schema:**
- Q1: "Do Fredi Builders cover {Location}?"
- Q2: "Are you fully insured?"
- Q3: "Do you provide guarantees?"

## 4. BRITISH STANDARD COPYWRITING (Tone of Voice)

**MUST USE:**
- "Flawless finishes"
- "15 years of trusted experience"
- "Punctual & respectful of your property"
- "Complete project management"
- "1-Year Workmanship Guarantee"
- "Fixed-price quotations"
- "Efficient service"
- "On-time delivery"
- "Meticulous attention to detail"
- "Dust-free installation"

**NEVER USE:**
- "Cheap"
- "Discount"
- "Fast"
- "Quick"
- "Bargain"

## 5. DYNAMIC MEDIA COMPONENT (next/image)

Create Gallery/Hero component:
- Use `next/image` with `priority` tag on LCP hero image
- Programmatic alt text: "{Service} project completed by Fredi Builders in {Location}"
- Enforce width/height to prevent CLS
- Use `sizes` prop for responsive images
- Format: WebP/AVIF with fallback

## 6. THE "NEURAL CLUSTER" (Nearby Locations Component)

Create `<NearbyLocations neighbors={location.nearby} />`:
- Randomize anchor text to avoid over-optimization penalty
- Formats:
  * "Bathroom Fitters in {neighbor}"
  * "{neighbor} Wet Room Installations"
  * "Our {neighbor} Team"
  * "Recent work in {neighbor}"
  * "Serving {neighbor}"
  * "{neighbor} Building Services"

## 7. BREADCRUMBS UI

Build visual `<Breadcrumb />` component:
- Structure: Home / Service Areas / {Location}
- Must match BreadcrumbList Schema exactly
- Include Schema.org markup
- Mobile responsive with truncation

## 8. THE FAQ UI

Build Accordion component for FAQs:
- Answers must match FAQPage schema exactly
- Q1: "Do you provide a guarantee?" 
  A: "Yes, all work comes with a 1-year workmanship guarantee as standard."
- Q2: "Do you remove waste?" 
  A: "Yes, our team clears all rubbish daily and protects your property."
- Q3: "Are you fully insured?"
  A: "Yes, we carry £2 Million Public Liability Insurance for complete peace of mind."

## IMPLEMENTATION CHECKLIST

- [ ] Update next.config.js with security headers and image optimization
- [ ] Add geo-coordinates to locations.ts data file
- [ ] Update generateMetadata to include geo meta tags
- [ ] Create unified Schema component for JSON-LD injection
- [ ] Refine all copy to British Standard tone
- [ ] Create optimized Image component with dynamic alt text
- [ ] Build NearbyLocations component with randomized anchors
- [ ] Build Breadcrumb component with Schema
- [ ] Build FAQ Accordion component with Schema
- [ ] Verify all Schema validates on Google Rich Results Test
- [ ] Test Core Web Vitals (LCP < 1.2s, CLS = 0)
- [ ] Verify security headers with securityheaders.com

## SUCCESS METRICS

- Google PageSpeed: 95+ (Mobile & Desktop)
- Schema Validation: 100% pass on Rich Results Test
- Security Headers: A+ rating
- Image Format: 100% WebP/AVIF
- Geo-tags: Present on all location pages
- FAQ Rich Snippets: Eligible in Search Console
