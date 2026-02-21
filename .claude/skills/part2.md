THE LONDON CONTRACTOR RANKING BIBLE
PART 2: THE PROGRAMMATIC CORE & SEMANTIC SEO
5. THE ARCHITECTURE (Hub & Spoke Logic)
We do not build "Pages." We build a "Knowledge Graph."
[ ] URL Structure (The Silo):
Hub: domain.com/services/painters-decorators (The Authority Page).
Spoke: domain.com/locations/painters-barnet-en5 (The Capture Page).
Avoid: domain.com/barnet-painters (Too flat).
Avoid: domain.com/services?loc=barnet (Query parameters kill SEO).
[ ] The Breadcrumb Trail:
Must be visible: Home > Services > Painters > Barnet.
Must be Schema-backed: Google needs to understand the hierarchy to display it in search results (e.g., Alba Decor > Locations > Barnet).
6. THE "DATA DNA" (Programmatic Injection)
This is the code that generates 100 pages instantly.
[ ] The locations.ts Master File:
Slug: painters-richmond-tw9 (Keywords in URL).
Name: "Richmond upon Thames".
Postcode: "TW9, TW10".
Coordinates: { lat: 51.4613, lng: -0.3037 } (Crucial for Schema).
Neighborhoods: ["Kew", "North Sheen", "Mortlake"] (For interlinking).
Landmarks: ["Richmond Park", "Kew Gardens"] (For content relevance).
[ ] The "Spintax" Variables:
Never repeat the exact same H1.
Template: {{Adjective}} {{Service}} in {{Location}} ({{Postcode}})
Adjectives: "Premium", "Reliable", "Bespoke", "Master".
Result: Page 1 = "Premium Painters...", Page 2 = "Reliable Decorators...".
7. ON-PAGE "NLP" (Natural Language Processing)
Google reads like a human now. Keyword stuffing ("Painter Painter Painter") gets you banned.
[ ] LSI Keywords (The "Vocabulary" of a Pro):
If you are a painter, the page MUST contain: "Sanding," "Primer," "Undercoat," "Sash Windows," "Farrow & Ball," "Dulux Trade," "Plastering," "Skirting Boards."
Why: If these words are missing, Google thinks you are a lead-gen spam site, not a real business.
[ ] The H-Tag Hierarchy:
H1: Primary Keyword + Location (e.g., "Painters in Esher").
H2: Trust Trigger (e.g., "Why Esher Homeowners Choose Us").
H2: Service Detail (e.g., "Our Exterior Painting Process").
H3: Local Proof (e.g., "Recent Jobs in KT10").
[ ] The "Hook" (First 100 Words):
Must mention the Location Name 3 times.
Must mention a specific local challenge (e.g., "Protecting your home from London's damp weather...").
8. IMAGE SEO (The Silent Traffic Source)
Google Image Search drives 20% of contractor traffic.
[ ] File Renaming (The "Dash" Rule):
❌ IMG_0923.jpg
✅ exterior-house-painting-richmond-tw9.webp
[ ] Alt Text Injection:
Programmatically set alt="{{Service}} project completed in {{Location}} near {{Landmark}}".
[ ] EXIF Data Manipulation (Gray Hat):
Use a tool to inject the GPS Coordinates of the target location (e.g., Esher) into the image metadata before uploading. Google reads this.
9. THE "GOD SCHEMA" (Structured Data)
This is the code only robots see. It tells Google exactly what you are.
[ ] LocalBusiness Schema:
@id: The official URL.
name: "Alba Decor {{Location}}".
image: The specific project image for that location.
address: The central business address (or areaServed as a GeoCircle for service areas).
priceRange: "££".
[ ] Service Schema:
Define the service explicitly: HousePainting, GeneralContractor.
[ ] FAQPage Schema:
Add 3 FAQs at the bottom of the page (e.g., "Do you work in {{Location}}?").
Wrap them in Schema.
Result: You get the "FAQ Snippet" (extra real estate) in Google Search Results.
END OF PART 2.