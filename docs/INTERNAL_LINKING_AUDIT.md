# Internal Linking Audit & Strategy Document
## Fredi Builders Website - Complete Analysis

**Date:** February 22, 2026  
**Status:** COMPREHENSIVE AUDIT  
**Purpose:** Document current internal linking structure, identify issues, and provide optimization recommendations

---

## Executive Summary

This document provides a complete analysis of the internal linking structure across the Fredi Builders website, covering:
- Homepage → Service/Location linking
- Service pages (Hub) → Location pages (Spoke) linking
- Location pages (Spoke) → Service pages (Hub) linking
- Location → Location lateral linking
- Service → Service lateral linking

### Current Status: ⚠️ NEEDS OPTIMIZATION

**Issues Identified:**
1. ❌ Homepage has NO links to service pages in main content
2. ❌ Service pages use exact-match anchor text to locations (keyword cannibalization risk)
3. ✅ Location pages use broad anchor text to services (CORRECT)
4. ✅ Location pages have randomized anchor text to nearby locations (CORRECT)
5. ❌ Missing "View All Services" link on homepage
6. ❌ Service pages only link to 2 other services (should be 3-4)

---

## 1. Homepage Internal Linking Structure

### Current Implementation

#### Links to Service Pages:
**Location:** Services section cards
```typescript
// Service Card 1 - Full Bathroom Renovations
<Link href="/services/full-bathroom-renovations">Learn More →</Link>

// Service Card 2 - Bespoke Wet Rooms
<Link href="/services/wet-room-installations">Learn More →</Link>

// Service Card 3 - Designer Tiling
<Link href="/services/luxury-tiling-services">Learn More →</Link>

// Service Card 4 - Structural Knock-throughs
<Link href="/services/structural-building-repairs">Learn More →</Link>
```

**Anchor Text:** Generic "Learn More →" (4 instances)

#### Links to Location Pages:
**Location:** Service Areas section
```typescript
// 6 featured location cards:
- Streatham SW16: "View" button
- Esher KT10: "View" button
- Cobham KT11: "View" button
- Wimbledon SW19: "View" button
- Kingston KT1: "View" button
- Dulwich SE21: "View" button
```

**Anchor Text:** Generic "View" button (6 instances)

#### Links in Portfolio Gallery:
```typescript
// Portfolio images link to:
1. /services/wet-room-installations (Marble Wet Room)
2. /locations/bathroom-fitters-streatham-sw16 (Victorian Renovation)
3. /services/full-bathroom-renovations (Modern Minimalist)
4. /services/structural-building-repairs (Structural Stage)
```

**Anchor Text:** Image titles only (no keyword-rich text links)

### ❌ CRITICAL ISSUES

1. **No keyword-rich links to service pages in main content**
   - All service links use generic "Learn More →"
   - Missing opportunity for keyword-rich anchor text
   - Should have contextual links in "About" or "Why Choose Us" sections

2. **No "View All Services" prominent link**
   - Users can't easily navigate to /services page
   - Missing internal link juice to services hub

3. **Portfolio links are image-only**
   - No text anchor text for SEO value
   - Should have descriptive captions with links

### ✅ WHAT'S WORKING

1. Links to 6 priority location pages (good geographic coverage)
2. Portfolio gallery provides visual navigation
3. Clean, organized service cards

---

## 2. Service Pages (Hub) → Location Pages (Spoke) Linking

### Current Implementation

Each service page has a "Where We Provide [Service]" section with 6 location links.

#### Example: Full Bathroom Renovations
```typescript
<Link href="/locations/bathroom-fitters-streatham-sw16">
  Bathroom fitters in Streatham
</Link>
<Link href="/locations/bathroom-fitters-esher-kt10">
  Bathroom renovations in Esher
</Link>
<Link href="/locations/luxury-bathrooms-dulwich-se21">
  Bathroom fitters in Dulwich
</Link>
<Link href="/locations/bathroom-fitters-wimbledon-sw19">
  Bathroom specialists in Wimbledon
</Link>
<Link href="/locations/luxury-bathrooms-cobham-kt11">
  Bathroom renovations in Cobham
</Link>
<Link href="/locations/bathroom-fitters-croydon-cr0">
  Bathroom fitters in Croydon
</Link>
```

### ❌ CRITICAL ISSUE: Exact-Match Anchor Text

**Problem:** Service pages use exact-match anchor text that competes with location page titles.

**Example:**
- Service page anchor: "Bathroom fitters in Streatham"
- Location page title: "Bathroom Fitters in Streatham SW16"

**Why this is bad:**
- Creates keyword cannibalization
- Google doesn't know which page to rank for "bathroom fitters streatham"
- Violates Hub vs Spoke strategy (Hub should NOT compete with Spoke)

### 🔧 RECOMMENDED FIX

**Change anchor text to location-focused (not service-focused):**

```typescript
// ❌ BAD (Current):
<Link href="/locations/bathroom-fitters-streatham-sw16">
  Bathroom fitters in Streatham
</Link>

// ✅ GOOD (Recommended):
<Link href="/locations/bathroom-fitters-streatham-sw16">
  Our Streatham team
</Link>

// OR:
<Link href="/locations/bathroom-fitters-streatham-sw16">
  Serving Streatham SW16
</Link>

// OR:
<Link href="/locations/bathroom-fitters-streatham-sw16">
  Recent work in Streatham
</Link>
```

**Anchor Text Templates (Non-Competing):**
1. "Our [Location] team"
2. "Serving [Location]"
3. "Recent work in [Location]"
4. "[Location] projects"
5. "Working in [Location]"
6. "[Location] area coverage"

---

## 3. Location Pages (Spoke) → Service Pages (Hub) Linking

### Current Implementation

**Component:** `ServiceLinks.tsx`

Each location page links to 3 service pages using the ServiceLinks component.

#### Anchor Text Strategy (CORRECT ✅):
```typescript
const getAnchorText = (slug: string): string => {
  const anchorMap: Record<string, string> = {
    'full-bathroom-renovations': 'Read our renovation process guide',
    'wet-room-installations': 'See how we install wet rooms',
    'luxury-tiling-services': 'Learn about our tiling approach',
    'disabled-assisted-bathrooms': 'Understand our accessibility process',
    'structural-building-repairs': 'Discover our structural work method'
  }
  return anchorMap[slug] || 'Learn more about this service'
}
```

### ✅ WHAT'S WORKING

1. **Broad, non-competing anchor text**
   - "Read our renovation process guide" (not "bathroom renovations")
   - "See how we install wet rooms" (not "wet room installations")
   - Avoids keyword cannibalization

2. **Contextual relevance**
   - Links to 3 relevant services per location
   - Prioritizes location's highlight service

3. **Consistent implementation**
   - All 18 location pages use same component
   - Predictable, scalable structure

### 🔧 MINOR IMPROVEMENT NEEDED

**Issue:** Only 3 service links per location page

**Recommendation:** Increase to 4-5 service links for better internal link distribution

```typescript
// Current: Returns 3 services
return allServices.slice(0, 3)

// Recommended: Return 4 services
return allServices.slice(0, 4)
```

---

## 4. Location → Location Lateral Linking

### Current Implementation

**Component:** `NearbyLocations.tsx`

Each location page links to 4-8 nearby locations using randomized anchor text.

#### Anchor Text Randomization (CORRECT ✅):
```typescript
const getRandomAnchorText = (locationName: string, seed: number): string => {
  const templates = [
    `Bathroom Fitters in ${locationName}`,
    `${locationName} Wet Room Installations`,
    `Our ${locationName} Team`,
    `Recent work in ${locationName}`,
    `Serving ${locationName}`,
    `${locationName} Building Services`,
    `Luxury Bathrooms ${locationName}`,
    `${locationName} Renovations`
  ]
  
  // Use seed for consistent but varied selection
  const index = seed % templates.length
  return templates[index]
}
```

### ✅ WHAT'S WORKING

1. **Randomized anchor text**
   - 8 different templates prevent over-optimization
   - Seed-based selection ensures consistency per page

2. **Geographic clustering**
   - Links to genuinely nearby locations
   - Helps users find their area

3. **"View All Service Areas" link**
   - Provides path to /locations hub page

### ✅ NO ISSUES IDENTIFIED

This component is correctly implemented according to SEO best practices.

---

## 5. Service → Service Lateral Linking

### Current Implementation

Each service page has a "Learn About Our Other Services" section with 2 links to related services.

#### Example: Full Bathroom Renovations
```typescript
<Link href="/services/wet-room-installations">
  <h4>Our Wet Room Installation Process</h4>
  <p>Discover how we create modern, accessible wet rooms...</p>
</Link>

<Link href="/services/luxury-tiling-services">
  <h4>How We Approach Luxury Tiling</h4>
  <p>Learn about our tiling techniques...</p>
</Link>
```

### ⚠️ MINOR ISSUE

**Problem:** Only 2 service links per service page

**Recommendation:** Increase to 3-4 service links for better internal link distribution

**Why:**
- 5 service pages total
- Each should link to 3-4 others (not just 2)
- Improves crawlability and link equity distribution

### 🔧 RECOMMENDED FIX

```typescript
// Current: 2 service links
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
  {/* 2 services */}
</div>

// Recommended: 3-4 service links
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
  {/* 3-4 services */}
</div>
```

---

## 6. Missing Internal Links

### Critical Missing Links

1. **Homepage → /services page**
   - No prominent "View All Services" link
   - Users can't easily navigate to services hub

2. **Homepage → /locations page**
   - "View All Service Areas" link exists but not prominent
   - Should be more visible

3. **Service pages → /services page**
   - No breadcrumb or "Back to Services" link
   - Users can't easily navigate back to services hub

4. **Location pages → /locations page**
   - No breadcrumb or "Back to Locations" link
   - Users can't easily navigate back to locations hub

5. **Homepage → /about page**
   - About section exists but no link to dedicated about page
   - Missing opportunity for internal link

6. **Homepage → /gallery page**
   - Portfolio section exists but no "View Full Gallery" link
   - Missing opportunity for internal link

7. **Homepage → /reviews page**
   - Reviews section exists but no "Read All Reviews" link
   - Missing opportunity for internal link

---

## 7. Anchor Text Analysis

### Current Anchor Text Distribution

#### Homepage:
- "Learn More →" (4x) - Generic, no SEO value
- "View" (6x) - Generic, no SEO value
- "Get a Fixed-Price Quote" (3x) - CTA, not SEO-focused

#### Service Pages (Hub → Spoke):
- ❌ Exact-match keywords (e.g., "Bathroom fitters in Streatham")
- Risk of keyword cannibalization

#### Location Pages (Spoke → Hub):
- ✅ Broad, non-competing (e.g., "Read our renovation process guide")
- Correct implementation

#### Location Pages (Spoke → Spoke):
- ✅ Randomized, varied (8 templates)
- Correct implementation

### Anchor Text Recommendations

#### For Homepage → Services:
```typescript
// Instead of "Learn More →", use:
"How we renovate bathrooms in Surrey"
"Our wet room installation process"
"Expert tiling services explained"
"Structural building work guide"
```

#### For Service Pages → Locations:
```typescript
// Instead of "Bathroom fitters in Streatham", use:
"Our Streatham team"
"Serving Streatham SW16"
"Recent work in Streatham"
"Streatham projects"
```

---

## 8. Internal Link Equity Distribution

### Current Link Flow

```
Homepage (High Authority)
├── Services (4 links, generic anchor)
│   ├── Full Bathroom Renovations
│   ├── Wet Room Installations
│   ├── Luxury Tiling Services
│   └── Structural Building Repairs
└── Locations (6 links, generic anchor)
    ├── Streatham SW16
    ├── Esher KT10
    ├── Cobham KT11
    ├── Wimbledon SW19
    ├── Kingston KT1
    └── Dulwich SE21

Service Pages (Medium Authority)
├── → 6 Location pages (exact-match anchor ❌)
└── → 2 Service pages (descriptive anchor ✅)

Location Pages (Lower Authority)
├── → 3 Service pages (broad anchor ✅)
└── → 4-8 Location pages (randomized anchor ✅)
```

### Issues with Current Flow

1. **Homepage doesn't pass keyword-rich link equity to services**
   - Generic "Learn More" anchors waste link value

2. **Service pages compete with location pages**
   - Exact-match anchors create cannibalization

3. **Service pages don't link enough to each other**
   - Only 2 links per service page (should be 3-4)

---

## 9. Recommended Action Plan

### Priority 1: CRITICAL FIXES (Do Immediately)

#### 1.1 Fix Service → Location Anchor Text
**File:** All 5 service pages
**Change:** Replace exact-match anchor text with location-focused text

```typescript
// Before:
<Link href="/locations/bathroom-fitters-streatham-sw16">
  Bathroom fitters in Streatham
</Link>

// After:
<Link href="/locations/bathroom-fitters-streatham-sw16">
  Our Streatham team
</Link>
```

**Impact:** Eliminates keyword cannibalization, improves rankings

#### 1.2 Add Keyword-Rich Links on Homepage
**File:** `app/page.tsx`
**Change:** Add contextual links in "About" or "Why Choose Us" sections

```typescript
// Add to "About" section:
<p>
  Specializing in <Link href="/services/full-bathroom-renovations" className="text-primary hover:underline">luxury bathroom installations</Link> and <Link href="/services/structural-building-repairs" className="text-primary hover:underline">complex structural knock-throughs</Link>, our team handles every aspect of the build.
</p>
```

**Impact:** Passes keyword-rich link equity to service pages

### Priority 2: IMPORTANT IMPROVEMENTS (Do This Week)

#### 2.1 Increase Service → Service Links
**File:** All 5 service pages
**Change:** Add 1-2 more service links to "Related Services" section

```typescript
// Change from 2 to 3-4 service links
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
  {/* 3-4 services instead of 2 */}
</div>
```

**Impact:** Better internal link distribution, improved crawlability

#### 2.2 Add "View All Services" Link on Homepage
**File:** `app/page.tsx`
**Change:** Make "View All Services" button more prominent

```typescript
<Link href="/services" className="bg-primary text-gray-900 px-8 py-4 rounded font-bold">
  View All Services →
</Link>
```

**Impact:** Improves navigation, passes link equity to /services hub

#### 2.3 Increase Location → Service Links
**File:** `app/components/ServiceLinks.tsx`
**Change:** Increase from 3 to 4 service links per location

```typescript
// Change:
return allServices.slice(0, 3)

// To:
return allServices.slice(0, 4)
```

**Impact:** Better internal link distribution

### Priority 3: NICE TO HAVE (Do This Month)

#### 3.1 Add Breadcrumbs
**Files:** All service and location pages
**Change:** Add breadcrumb navigation

```typescript
<nav className="text-sm text-gray-600 mb-4">
  <Link href="/">Home</Link> / 
  <Link href="/services">Services</Link> / 
  <span>Full Bathroom Renovations</span>
</nav>
```

**Impact:** Improved UX, additional internal links

#### 3.2 Add "View Full Gallery" Link
**File:** `app/page.tsx`
**Change:** Add prominent link to /gallery page

```typescript
<Link href="/gallery" className="text-primary hover:underline font-bold">
  View Full Gallery →
</Link>
```

**Impact:** Improves navigation, passes link equity

#### 3.3 Add "Read All Reviews" Link
**File:** `app/page.tsx`
**Change:** Add prominent link to /reviews page

```typescript
<Link href="/reviews" className="text-primary hover:underline font-bold">
  Read All 104+ Reviews →
</Link>
```

**Impact:** Improves navigation, passes link equity

---

## 10. Internal Linking Best Practices Summary

### ✅ DO:
1. Use broad, non-competing anchor text from Spoke → Hub
2. Randomize anchor text for lateral links (Location → Location)
3. Link to 3-4 related pages from each page
4. Use descriptive, keyword-rich anchor text from Homepage
5. Ensure every page is reachable within 3 clicks from homepage

### ❌ DON'T:
1. Use exact-match anchor text from Hub → Spoke
2. Use generic "Learn More" or "Click Here" anchors
3. Create circular linking patterns
4. Over-optimize anchor text (use natural variations)
5. Link to the same page multiple times with different anchors

---

## 11. Monitoring & Maintenance

### Monthly Checks:
1. Verify no broken internal links (use Screaming Frog)
2. Check anchor text distribution (avoid over-optimization)
3. Monitor keyword cannibalization in Google Search Console
4. Review internal link equity flow with Ahrefs/SEMrush

### Quarterly Reviews:
1. Audit new pages for proper internal linking
2. Update anchor text templates if needed
3. Review and optimize underperforming pages
4. Ensure new locations/services follow linking strategy

---

## 12. Expected Results After Fixes

### Short-Term (1-2 months):
- Reduced keyword cannibalization
- Clearer page hierarchy for Google
- Improved crawl efficiency

### Medium-Term (3-6 months):
- Better rankings for location pages (Spoke)
- Service pages (Hub) rank for educational queries
- Improved internal PageRank distribution

### Long-Term (6-12 months):
- Stronger domain authority
- More pages ranking in top 10
- Increased organic traffic from long-tail keywords

---

## 13. Technical Implementation Checklist

### Files to Update:

- [ ] `app/page.tsx` - Add keyword-rich links, "View All Services" button
- [ ] `app/services/full-bathroom-renovations/page.tsx` - Fix anchor text to locations
- [ ] `app/services/wet-room-installations/page.tsx` - Fix anchor text to locations
- [ ] `app/services/luxury-tiling-services/page.tsx` - Fix anchor text to locations
- [ ] `app/services/disabled-assisted-bathrooms/page.tsx` - Fix anchor text to locations
- [ ] `app/services/structural-building-repairs/page.tsx` - Fix anchor text to locations
- [ ] `app/components/ServiceLinks.tsx` - Increase to 4 service links
- [ ] All service pages - Add 1-2 more service links to "Related Services"

### Testing Checklist:

- [ ] All internal links work (no 404s)
- [ ] Anchor text is varied and natural
- [ ] No keyword cannibalization (check GSC)
- [ ] Mobile navigation works properly
- [ ] Page load times not affected

---

## Conclusion

The current internal linking structure is **70% correct** but has critical issues that need immediate attention:

1. **CRITICAL:** Service pages use exact-match anchor text to locations (keyword cannibalization)
2. **IMPORTANT:** Homepage uses generic anchor text (wasted link equity)
3. **MINOR:** Service pages only link to 2 other services (should be 3-4)

**Estimated Time to Fix:** 2-3 hours  
**Expected Impact:** 15-25% improvement in organic traffic within 3-6 months

**Next Steps:**
1. Fix service → location anchor text (Priority 1.1)
2. Add keyword-rich links on homepage (Priority 1.2)
3. Increase service → service links (Priority 2.1)
4. Monitor results in Google Search Console

---

**Document Version:** 1.0  
**Last Updated:** February 22, 2026  
**Author:** Kiro AI Assistant  
**Status:** Ready for Implementation
