# Hub vs Spoke Keyword Strategy

**Created:** February 22, 2026  
**Site:** fredibuilders.co.uk  
**Purpose:** Prevent keyword cannibalization and establish clear intent separation

---

## The Problem

Currently, Hub pages (service pages) and Spoke pages (location pages) are competing for the same keywords in Google SERPs. This causes:

1. **Keyword Cannibalization:** Multiple pages targeting "bathroom renovations London"
2. **Confused Rankings:** Google doesn't know which page to rank
3. **Diluted Authority:** Link equity split across competing pages
4. **Lower Conversions:** Wrong page ranks for wrong intent

---

## The Solution: Intent Separation

### Hub Pages (Service Pages)
**Intent:** Informational, Educational  
**Goal:** Build authority, educate, showcase expertise  
**User Mindset:** "I want to learn about bathroom renovations"

### Spoke Pages (Location Pages)
**Intent:** Transactional, Local  
**Goal:** Convert leads, book quotes  
**User Mindset:** "I want to hire a bathroom fitter in Esher today"

---

## Keyword Matrix

### Hub Page: `/services/full-bathroom-renovations`

**Target Keywords (Informational):**
- "How to renovate a bathroom"
- "Bathroom renovation process"
- "What's included in a bathroom renovation"
- "Bathroom renovation timeline"
- "Types of bathroom renovations"
- "Luxury bathroom design ideas"

**Content Strategy:**
- Educational blog-style content
- Process breakdown (Step 1, Step 2, etc.)
- Before/after portfolio showcase
- "What to expect" sections
- FAQ about the process
- NO transactional CTAs (no "Get a Quote" buttons)

**Internal Linking:**
- Link DOWN to location pages with exact-match anchors:
  - "Bathroom fitters in Esher"
  - "Hire bathroom renovators in Wimbledon"
  - "Book a quote in Streatham"

**Example Content Structure:**
```
H1: How We Renovate Bathrooms: The Fredi Builders Process
H2: Step 1: Initial Consultation & Design
H2: Step 2: Demolition & Preparation
H2: Step 3: Plumbing & Electrical Work
H2: Step 4: Tiling & Finishing
H2: Step 5: Final Inspection & Handover
H2: Where We Work
  - Link to Esher: "Bathroom fitters in Esher"
  - Link to Wimbledon: "Bathroom renovations in Wimbledon"
  - Link to Streatham: "Hire us in Streatham"
```

---

### Spoke Page: `/locations/bathroom-fitters-esher-kt10`

**Target Keywords (Transactional):**
- "Bathroom fitters Esher"
- "Hire bathroom renovators Esher"
- "Bathroom installation Esher KT10"
- "Emergency bathroom repairs Esher"
- "Book bathroom quote Esher"
- "Bathroom builders near me" (geo-targeted)

**Content Strategy:**
- Conversion-focused
- Multiple CTAs ("Get a Quote", "Call Now", "WhatsApp Us")
- Local trust signals (recent projects, local streets, landmarks)
- Urgency language ("Book today", "Limited availability")
- Social proof (reviews from Esher residents)

**Internal Linking:**
- Link UP to hub pages with broad anchors:
  - "Learn about our renovation process"
  - "See how we work"
  - "Our bathroom design approach"
  - "Read about our services"

**Example Content Structure:**
```
H1: Bathroom Fitters in Esher (KT10) | Fredi Builders
H2: Get a Free Quote Today
  - CTA: "Request Free Quote"
  - CTA: "Call 07468 451511"
  - CTA: "WhatsApp Us"
H2: Recent Projects in Esher
  - 2024: Marble wet room on Claremont Lane
  - 2023: Victorian bathroom on Portsmouth Road
H2: Why Choose Us in Esher?
  - Local expertise
  - Fast response times
  - 9.6/10 Checkatrade rating
H2: Our Services
  - Link to hub: "Learn about our bathroom renovation process"
  - Link to hub: "See our wet room installation approach"
```

---

## Implementation Plan

### Phase 1: Audit Current Pages (Week 1)

**Service Pages to Audit:**
- `/services/full-bathroom-renovations`
- `/services/wet-room-installations`
- `/services/luxury-tiling-services`
- `/services/structural-building-repairs`
- `/services/disabled-assisted-bathrooms`

**Location Pages to Audit:**
- All 18 location pages under `/locations/*`

**Audit Checklist:**
- [ ] Identify keyword overlap
- [ ] Map current intent (informational vs transactional)
- [ ] List all CTAs on each page
- [ ] Document current internal linking patterns

---

### Phase 2: Rewrite Service Pages (Week 2)

**Changes Required:**

1. **Remove Transactional CTAs:**
   - ❌ Remove: "Get a Fixed-Price Quote" buttons
   - ❌ Remove: "Request Free Quote" buttons
   - ❌ Remove: "Call Now" buttons

2. **Add Educational Content:**
   - ✅ Add: "How It Works" sections
   - ✅ Add: "What to Expect" timelines
   - ✅ Add: "Our Process" step-by-step guides
   - ✅ Add: Portfolio showcases with explanations

3. **Add Strategic Internal Links:**
   - ✅ Add: "Find a bathroom fitter near you" section
   - ✅ Link to location pages with exact-match anchors
   - ✅ Example: "Looking for bathroom fitters in Esher? View our Esher page."

**Example Rewrite:**

**BEFORE (Transactional):**
```html
<h1>Full Bathroom Renovations</h1>
<p>We provide luxury bathroom renovations across London.</p>
<button>Get a Fixed-Price Quote</button>
```

**AFTER (Informational):**
```html
<h1>How We Renovate Bathrooms: The Complete Process</h1>
<p>At Fredi Builders, we follow a proven 5-step process to transform your bathroom from concept to completion. Here's what you can expect when you work with us.</p>

<h2>Step 1: Initial Consultation & Design</h2>
<p>We start with a free consultation at your property...</p>

<h2>Step 2: Demolition & Preparation</h2>
<p>Our team carefully removes existing fixtures...</p>

<!-- ... more educational content ... -->

<h2>Where We Work</h2>
<p>We provide bathroom renovation services across South London and Surrey. Find your local area:</p>
<ul>
  <li><a href="/locations/bathroom-fitters-esher-kt10">Bathroom fitters in Esher</a></li>
  <li><a href="/locations/bathroom-fitters-wimbledon-sw19">Bathroom renovations in Wimbledon</a></li>
  <li><a href="/locations/bathroom-fitters-streatham-sw16">Hire us in Streatham</a></li>
</ul>
```

---

### Phase 3: Optimize Location Pages (Week 2-3)

**Changes Required:**

1. **Strengthen Transactional CTAs:**
   - ✅ Add: Multiple "Get a Quote" buttons (top, middle, bottom)
   - ✅ Add: Sticky footer with "Call Now" button
   - ✅ Add: WhatsApp quick action button
   - ✅ Add: Urgency language ("Limited availability in [Location]")

2. **Add Local Trust Signals:**
   - ✅ Recent projects with specific street names
   - ✅ Local landmarks and postcodes
   - ✅ Reviews from local residents
   - ✅ "We're local to [Location]" messaging

3. **Update Internal Links:**
   - ✅ Link to service pages with broad anchors
   - ✅ Example: "Learn more about our bathroom renovation process"
   - ✅ Example: "See how we approach wet room installations"

**Example Optimization:**

**BEFORE:**
```html
<h1>Bathroom Fitters in Esher</h1>
<p>We provide bathroom services in Esher.</p>
<a href="/services/full-bathroom-renovations">Learn More</a>
```

**AFTER:**
```html
<h1>Bathroom Fitters in Esher (KT10) | Book Your Free Quote Today</h1>
<div class="cta-bar">
  <button>Get Free Quote</button>
  <button>Call 07468 451511</button>
  <button>WhatsApp Us</button>
</div>

<h2>Recent Projects in Esher</h2>
<p>We recently completed a luxury marble wet room on Claremont Lane, near Sandown Park Racecourse. The project included underfloor heating, rainfall shower, and bespoke tiling.</p>

<h2>Why Choose Fredi Builders in Esher?</h2>
<ul>
  <li>Local to KT10 - Fast response times</li>
  <li>9.6/10 Checkatrade rating</li>
  <li>£2M Public Liability Insurance</li>
</ul>

<h2>Our Services</h2>
<p>Want to learn more about how we work? <a href="/services/full-bathroom-renovations">Read about our bathroom renovation process</a> or <a href="/services/wet-room-installations">see our approach to wet room installations</a>.</p>

<div class="cta-bar">
  <button>Book Your Free Quote Now</button>
</div>
```

---

## Anchor Text Strategy

### Hub → Spoke (Exact Match)

Use exact-match, transactional anchors when linking from service pages to location pages:

- "Bathroom fitters in Esher"
- "Hire bathroom renovators in Wimbledon"
- "Book a quote in Streatham"
- "Emergency bathroom repairs in Dulwich"
- "Wet room installers in Cobham"

### Spoke → Hub (Broad Match)

Use broad, informational anchors when linking from location pages to service pages:

- "Learn about our renovation process"
- "See how we work"
- "Our bathroom design approach"
- "Read about our services"
- "Discover our wet room installation method"
- "Understand our tiling process"

---

## Expected Results

### After Week 2 (Service Pages Rewritten):
- **Keyword Cannibalization:** Reduced by 60%
- **Service Page Rankings:** Improved for informational queries
- **Location Page Rankings:** Improved for transactional queries
- **Conversion Rate:** Increased by 15-20% (right page for right intent)

### After Week 3 (Location Pages Optimized):
- **Keyword Cannibalization:** Reduced by 90%
- **Clear Intent Separation:** 100% of pages have distinct purpose
- **Internal Link Equity:** Properly distributed (Hub → Spoke → Hub)
- **User Experience:** Improved (users find what they're looking for)

---

## Monitoring & Validation

### Metrics to Track:

1. **Google Search Console:**
   - Track keyword rankings for each page
   - Identify remaining keyword overlap
   - Monitor click-through rates (CTR)

2. **Google Analytics:**
   - Track conversion rates per page type
   - Monitor bounce rates (should decrease)
   - Track time on page (should increase for hub pages)

3. **Internal Link Analysis:**
   - Use Screaming Frog to audit internal links
   - Verify anchor text distribution
   - Check for orphaned pages

### Success Criteria:

- ✅ No two pages rank for the same keyword
- ✅ Service pages rank for "how to", "what is", "process" queries
- ✅ Location pages rank for "hire", "book", "near me" queries
- ✅ Conversion rate increases by 15%+
- ✅ Organic traffic increases by 20%+

---

## Quick Reference

### Hub Page Checklist:
- [ ] Educational, informational content
- [ ] No transactional CTAs
- [ ] Links to location pages with exact-match anchors
- [ ] Portfolio showcase with explanations
- [ ] "How it works" or "Our process" sections

### Spoke Page Checklist:
- [ ] Conversion-focused content
- [ ] Multiple transactional CTAs
- [ ] Links to service pages with broad anchors
- [ ] Local trust signals (projects, streets, landmarks)
- [ ] Urgency language ("Book today", "Limited availability")

---

**End of Hub vs Spoke Strategy**
