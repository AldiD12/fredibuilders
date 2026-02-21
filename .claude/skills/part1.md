
THE LONDON CONTRACTOR RANKING BIBLE
PART 1: INFRASTRUCTURE, STACK & "TRUST" UI
1. THE IRON CLAD SERVER (Infrastructure)
If the foundation is weak, the house falls. We do not use WordPress. We use "Ferrari" tech.
[ ] DNS Strategy (Cloudflare):
Route DNS through Cloudflare.
Enable "Always Online".
Enable "Brotli Compression" (Better than Gzip).
Set TLS/SSL to "Full (Strict)".
[ ] Hosting (Vercel/Netlify):
Deploy on Vercel (Native Next.js support).
Select London (lon1) region for the server. Crucial for latency in UK.
[ ] The Tech Stack:
Framework: Next.js 14 (App Router).
Styling: Tailwind CSS (Zero runtime overhead).
Language: TypeScript (Strict typing prevents build errors).
2. CORE WEB VITALS (Speed is a Ranking Factor)
Google punishes slow sites. We aim for all Green scores.
[ ] LCP (Largest Contentful Paint) < 1.2s:
Preload the "Hero Image" using <link rel="preload">.
Convert all images to WebP or AVIF format automatically.
Use priority prop on the Hero Image in Next.js <Image />.
[ ] CLS (Cumulative Layout Shift) = 0:
Hardcode width and height attributes on every image and icon.
Reserve space for the "Trust Bar" so content doesn't jump when it loads.
[ ] FID (First Input Delay):
Defer all non-essential scripts (Analytics, Chatbots) using next/script with strategy="lazyOnload".
3. THE "MONSTER PROOF" UI (Trust Psychology)
London homeowners judge you in 0.05 seconds. The site must look "British Standard" (High End).
[ ] The Colour Palette:
Primary: Oxford Blue (#0f172a) or Slate Grey (#334155).
Accent: Old Gold (#ca8a04) or Teal (#0d9488).
Background: Off-White (#f8fafc) - Never pure white (looks cheap).
Error Colour: Never use bright red. Use Burnt Orange.
[ ] Typography:
Headings: Montserrat or Playfair Display (Serif = Traditional/Trust).
Body: Inter or Lato (San-serif = Clean/Modern).
Font Weight: Never use "Thin" fonts (hard to read). Use Semi-Bold for key points.
[ ] The "Above the Fold" Checklist (Desktop):
H1: Must include Service + Location (e.g., "Bespoke Joinery in Richmond").
Sub-headline: Value Prop (e.g., "German Materials, British Craftsmanship").
CTA: "Get a Quote" (Gold Button) + "WhatsApp" (Secondary).
Trust Badge: "Rated 4.9/5 on Checkatrade" visible without scrolling.
[ ] The "Thumb Zone" (Mobile):
Sticky Footer: A fixed bar at the bottom with two buttons:
Left: [WhatsApp Icon] "Chat" (Green).
Right: [Phone Icon] "Call" (Gold).
Hamburger Menu: Must be on the Right (Right-thumb accessible).
Font Size: Body text minimum 16px (Google creates "Mobile Usability" errors if smaller).
4. THE "CONVERSION TRAPS" (CRO)
Traffic is vanity. Leads are sanity.
[ ] The "Micro-Commitment" Form:
Do not show 10 fields at once.
Step 1: "What do you need?" (Buttons: Painting / Tiling / Plumbing).
Step 2: "Postcode?"
Step 3: "Details."
Why: Increases conversion by 40% via "Sunk Cost Fallacy."
[ ] Social Proof Injection:
Embed a real review screenshot (not text, an image of the review) near every CTA button.
Caption: "Verified Review from [Nearby Area]."
[ ] The "Anti-Anxiety" Footer:
Must list:
Company Number (Look real).
VAT Number (If applicable).
Insurance Policy Number (e.g., "Insured by AXA: #99281").
Physical Address (Matches GMB exactly).
1.1. THE "INVISIBLE SHIELD" (Security Headers)
[ ] next.config.js Headers: You must inject strict HTTP headers.
X-DNS-Prefetch-Control: On.
X-Frame-Options: DENY (Prevents clickjacking).
X-Content-Type-Options: nosniff.
Why: Google creates a "Trust Score" for site security. If you look hackable, you rank lower.
1.2. THE "SERP ICON" (The Favicon Strategy)
[ ] The 48x48 Rule: Google Mobile Search displays your logo next to the URL.
Most devs upload a 16x16 favicon. Wrong.
You must upload a 48x48px (or multiple: 96x96, 144x144) .ico or .png file.
Why: If your icon is blurry or missing in the SERP, your CTR drops by 15%.
[ ] manifest.json: Essential for Android users. It tells the phone "This is a real app/business."
1.3. THE "GHOST" TRACKING (Conversion API)
[ ] Event Tracking: Don't just track "Pageviews."
Track "Click_WhatsApp".
Track "Click_Call".
Track "Form_Submit".
Why: You feed this data back into Google Ads later. If you don't track the click, you are flying blind.
