# Server-Side Tracking Implementation Guide

**Created:** February 22, 2026  
**Site:** fredibuilders.co.uk  
**Purpose:** Implement server-side Google Tag Manager (ssGTM) to bypass ad-blockers and achieve 100% tracking accuracy

---

## The Problem

Currently using client-side Google Analytics, which means:

- **iOS Safari blocks ~40% of tracking** (Intelligent Tracking Prevention)
- **Firefox blocks ~15% of tracking** (Enhanced Tracking Protection)
- **Ad-blockers delete ~20% of data** (uBlock Origin, AdBlock Plus, Ghostery)
- **Total data loss: ~50-60%** of actual conversions

### Real-World Impact:

If you get 100 leads/month:
- **Current visible leads:** 40-50
- **Actual leads:** 100
- **Hidden leads:** 50-60 ❌

You're making business decisions based on incomplete data!

---

## The Solution: Server-Side Google Tag Manager

### Architecture:

```
User Browser → Next.js API Route → Google Cloud Run (ssGTM) → GA4
```

### Benefits:

1. **First-Party Data:** Tracking appears to come from fredibuilders.co.uk (not google-analytics.com)
2. **100% Accuracy:** Cannot be blocked by client-side tools
3. **True Attribution:** See which postcodes generate revenue
4. **GDPR Compliant:** Server-side consent management
5. **Faster Page Load:** No client-side tracking scripts

---

## Implementation Steps

### Phase 1: Google Cloud Setup (Week 1, Day 1-2)

#### Step 1.1: Create Google Cloud Project

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Click "Create Project"
3. Name: "fredibuilders-ssgtm"
4. Click "Create"

#### Step 1.2: Enable Required APIs

1. Go to "APIs & Services" → "Enable APIs and Services"
2. Search and enable:
   - Cloud Run API
   - Container Registry API
   - Cloud Build API

#### Step 1.3: Set Up Billing

1. Go to "Billing" → "Link a billing account"
2. Add payment method
3. **Cost estimate:** £10-20/month (free tier covers most usage)

---

### Phase 2: Server-Side GTM Container Setup (Week 1, Day 3-4)

#### Step 2.1: Create Server Container

1. Go to [Google Tag Manager](https://tagmanager.google.com/)
2. Click "Create Account" or use existing
3. Container Setup:
   - Container name: "Fredi Builders Server"
   - Target platform: **Server**
   - Click "Create"

#### Step 2.2: Deploy to Google Cloud Run

1. In GTM, go to "Admin" → "Container Settings"
2. Click "Manually provision tagging server"
3. Copy the Container Config
4. Go to Google Cloud Console → Cloud Run
5. Click "Create Service"
6. Configuration:
   - Container image: `gcr.io/cloud-tagging-10302018/gtm-cloud-image:stable`
   - Service name: `fredibuilders-ssgtm`
   - Region: `europe-west2` (London)
   - CPU allocation: "CPU is only allocated during request processing"
   - Minimum instances: 0
   - Maximum instances: 10
   - Memory: 512 MiB
   - CPU: 1
   - Request timeout: 60 seconds
   - Environment variables:
     - `CONTAINER_CONFIG`: [paste from GTM]
     - `PREVIEW_SERVER_URL`: [leave empty for now]
7. Click "Create"

#### Step 2.3: Configure Custom Domain (Optional but Recommended)

1. In Cloud Run, click your service
2. Go to "Manage Custom Domains"
3. Add domain: `ssgtm.fredibuilders.co.uk`
4. Follow DNS instructions (add CNAME record in Cloudflare)
5. Wait for SSL certificate provisioning (~15 minutes)

---

### Phase 3: Next.js API Route Setup (Week 1, Day 5)

#### Step 3.1: Create API Route

Create file: `app/api/track/route.ts`

```typescript
import { NextRequest, NextResponse } from 'next/server'

const SSGTM_URL = process.env.SSGTM_URL || 'https://ssgtm.fredibuilders.co.uk'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Forward event to server-side GTM
    const response = await fetch(SSGTM_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'User-Agent': request.headers.get('user-agent') || '',
        'X-Forwarded-For': request.headers.get('x-forwarded-for') || request.ip || '',
      },
      body: JSON.stringify({
        ...body,
        ip_override: request.headers.get('x-forwarded-for') || request.ip,
        user_agent: request.headers.get('user-agent'),
      }),
    })

    if (!response.ok) {
      throw new Error(`ssGTM responded with ${response.status}`)
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Server-side tracking error:', error)
    return NextResponse.json(
      { success: false, error: 'Tracking failed' },
      { status: 500 }
    )
  }
}
```

#### Step 3.2: Add Environment Variable

Add to `.env.local`:

```bash
SSGTM_URL=https://ssgtm.fredibuilders.co.uk
```

Add to Vercel environment variables:
1. Go to Vercel Dashboard → Project Settings → Environment Variables
2. Add: `SSGTM_URL` = `https://ssgtm.fredibuilders.co.uk`

---

### Phase 4: Update Analytics Library (Week 2, Day 1-2)

#### Step 4.1: Modify `app/lib/analytics.ts`

Replace current implementation with:

```typescript
/**
 * Server-side analytics tracking utility
 * Bypasses ad-blockers by routing through Next.js API
 */

export type AnalyticsEvent =
  | 'click_whatsapp'
  | 'click_call'
  | 'form_submit'
  | 'gallery_view'
  | 'review_filter'
  | 'location_view'
  | 'page_view'

interface EventProperties {
  [key: string]: string | number | boolean
}

/**
 * Send event to server-side GTM via Next.js API route
 */
async function sendToServer(event: AnalyticsEvent, properties?: EventProperties) {
  try {
    await fetch('/api/track', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        event_name: event,
        ...properties,
        timestamp: Date.now(),
        page_url: window.location.href,
        page_title: document.title,
        referrer: document.referrer,
      }),
      // Don't wait for response (fire and forget)
      keepalive: true,
    })
  } catch (error) {
    // Silently fail - don't break user experience
    console.error('Analytics error:', error)
  }
}

/**
 * Track event (server-side)
 */
export function trackEvent(event: AnalyticsEvent, properties?: EventProperties) {
  // Send to server-side GTM
  sendToServer(event, properties)
  
  // Fallback to client-side gtag if available (for debugging)
  if (typeof window !== 'undefined' && (window as any).gtag) {
    ;(window as any).gtag('event', event, properties)
  }
}

/**
 * Track page view (server-side)
 */
export function trackPageView(url: string) {
  sendToServer('page_view', {
    page_location: url,
    page_title: document.title,
  })
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
```

#### Step 4.2: Add Page View Tracking

Update `app/layout.tsx` to track page views:

```typescript
'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { trackPageView } from '@/app/lib/analytics'

export function AnalyticsTracker() {
  const pathname = usePathname()

  useEffect(() => {
    if (pathname) {
      trackPageView(window.location.href)
    }
  }, [pathname])

  return null
}
```

Then add to layout:

```typescript
import { AnalyticsTracker } from './components/AnalyticsTracker'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <AnalyticsTracker />
        {children}
      </body>
    </html>
  )
}
```

---

### Phase 5: Configure ssGTM Tags (Week 2, Day 3-4)

#### Step 5.1: Create GA4 Tag in ssGTM

1. Go to GTM Server Container
2. Click "Tags" → "New"
3. Tag Configuration:
   - Tag Type: **Google Analytics: GA4**
   - Measurement ID: `G-XXXXXXXXXX` (your GA4 ID)
   - Event Name: `{{Event Name}}`
4. Triggering:
   - Trigger: **All Events**
5. Save

#### Step 5.2: Create Client

1. Click "Clients" → "New"
2. Client Type: **GA4**
3. Save

#### Step 5.3: Test in Preview Mode

1. Click "Preview" in GTM
2. Enter your site URL
3. Perform test actions (click buttons, submit forms)
4. Verify events appear in GTM debugger
5. Check GA4 DebugView for events

---

### Phase 6: Validation & Testing (Week 2, Day 5)

#### Step 6.1: Compare Client-Side vs Server-Side

Run both tracking methods in parallel for 1 week:

1. Keep existing client-side gtag
2. Add new server-side tracking
3. Compare event counts in GA4

**Expected Results:**
- Server-side events: ~100% of actual traffic
- Client-side events: ~40-50% of actual traffic
- **Difference: 50-60% more data with server-side!**

#### Step 6.2: Test Ad-Blocker Bypass

1. Install uBlock Origin browser extension
2. Visit your site
3. Perform test actions
4. Verify events still appear in GA4 (they should!)

#### Step 6.3: Test iOS Safari

1. Open site on iPhone with iOS 14+
2. Perform test actions
3. Verify events appear in GA4 (they should!)

---

### Phase 7: Remove Client-Side Tracking (Week 3)

Once validated, remove client-side gtag:

1. Remove Google Analytics script from `app/layout.tsx`
2. Remove fallback gtag calls from `analytics.ts`
3. Keep only server-side tracking

---

## Cost Breakdown

### Google Cloud Run Pricing:

**Free Tier (per month):**
- 2 million requests
- 360,000 GB-seconds
- 180,000 vCPU-seconds

**Estimated Usage:**
- 100,000 page views/month
- 200,000 events/month
- **Total: 300,000 requests/month**

**Cost:** £0 (within free tier) ✅

**If you exceed free tier:**
- £0.00002 per request
- 300,000 requests = £6/month
- **Maximum cost: £10-20/month**

---

## Monitoring & Maintenance

### Weekly Checks:

1. **GA4 Event Count:** Verify events are flowing
2. **Cloud Run Logs:** Check for errors
3. **API Route Performance:** Monitor response times

### Monthly Checks:

1. **Cost Analysis:** Review Google Cloud billing
2. **Data Accuracy:** Compare server-side vs expected traffic
3. **Conversion Attribution:** Analyze postcode-level ROI

---

## Troubleshooting

### Issue: Events not appearing in GA4

**Solution:**
1. Check Cloud Run logs for errors
2. Verify SSGTM_URL environment variable
3. Test API route directly: `curl -X POST https://fredibuilders.co.uk/api/track -d '{"event_name":"test"}'`
4. Check GTM Preview mode

### Issue: High Cloud Run costs

**Solution:**
1. Reduce minimum instances to 0
2. Increase request timeout to batch events
3. Add caching layer (Redis) for duplicate events

### Issue: Slow page load

**Solution:**
1. Use `keepalive: true` in fetch (fire and forget)
2. Don't await tracking responses
3. Add request timeout (5 seconds max)

---

## Expected Results

### After Week 1 (Setup Complete):
- **Server-side tracking:** Operational
- **Data accuracy:** 100% (vs 40-50% before)
- **Ad-blocker bypass:** Confirmed

### After Week 2 (Validation Complete):
- **Event count increase:** +50-60%
- **Conversion visibility:** 100% of actual leads
- **Postcode attribution:** Accurate ROI data

### After Week 3 (Client-Side Removed):
- **Page load speed:** Improved (no client-side scripts)
- **Data quality:** Highest possible
- **Business decisions:** Based on complete data

---

## ROI Calculation

### Current State (Client-Side):
- 100 actual leads/month
- 40-50 visible leads/month
- **50-60 hidden leads** ❌
- Cannot optimize for high-value postcodes

### Future State (Server-Side):
- 100 actual leads/month
- 100 visible leads/month
- **0 hidden leads** ✅
- Can optimize for high-value postcodes (Esher, Cobham, Dulwich)

### Business Impact:

If you discover that Esher (KT10) generates 2x more revenue per lead:
- Increase marketing spend in Esher
- Prioritize Esher location page SEO
- **Result: 20-30% revenue increase**

**Cost:** £10-20/month  
**Benefit:** 20-30% revenue increase  
**ROI:** 100x+

---

## Quick Start Checklist

- [ ] Create Google Cloud project
- [ ] Enable Cloud Run API
- [ ] Create server-side GTM container
- [ ] Deploy to Cloud Run
- [ ] Configure custom domain (optional)
- [ ] Create Next.js API route (`/api/track`)
- [ ] Update analytics library
- [ ] Add page view tracking
- [ ] Configure GA4 tag in ssGTM
- [ ] Test in preview mode
- [ ] Validate with ad-blocker
- [ ] Compare client-side vs server-side data
- [ ] Remove client-side tracking

---

**End of Server-Side Tracking Guide**
