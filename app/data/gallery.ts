/**
 * Gallery Images Data
 * 
 * This file contains metadata for all gallery images displayed on the /gallery page.
 * Images are categorized into: Showroom, Trust, Transformation, Craftsmanship
 * 
 * Each image includes:
 * - Descriptive alt text with location keywords for SEO
 * - Width and height for preventing layout shift (CLS)
 * - Category for filtering
 * - Priority flag for above-the-fold images
 */

export interface GalleryImage {
  id: string
  src: string
  alt: string
  category: 'Showroom' | 'Trust' | 'Transformation' | 'Craftsmanship'
  location?: string
  service?: string
  width: number
  height: number
  priority?: boolean
}

export const galleryImages: GalleryImage[] = [
  // Showroom Category - Premium finished bathrooms showcasing luxury work
  {
    id: 'luxury-marble-bathroom-1',
    src: '/images/luxury-marble-bathroom-black-porcelain-floor.webp',
    alt: 'Luxury marble bathroom with black porcelain floor tiles - Premium bathroom renovation South London',
    category: 'Showroom',
    location: 'South London',
    service: 'Full Bathroom Renovation',
    width: 1200,
    height: 800,
    priority: true
  },
  {
    id: 'luxury-marble-bathroom-2',
    src: '/images/luxury-marble-bathroom-black-porcelain.webp',
    alt: 'Luxury marble bathroom with black porcelain tiles and modern fixtures - Esher bathroom fitters',
    category: 'Showroom',
    location: 'Esher',
    service: 'Luxury Bathroom',
    width: 1200,
    height: 800,
    priority: true
  },
  {
    id: 'luxury-walk-in-shower',
    src: '/images/luxury-marble-bathroom-walk-in-shower.webp',
    alt: 'Luxury marble bathroom with walk-in shower installation - Wet room specialists Surrey',
    category: 'Showroom',
    location: 'Surrey',
    service: 'Wet Room Installation',
    width: 1200,
    height: 800,
    priority: true
  },
  {
    id: 'bespoke-hexagon-bathroom',
    src: '/images/bespoke-bathroom-hexagon-floor-tiles-led-lighting.webp',
    alt: 'Bespoke bathroom with hexagon floor tiles and LED lighting - Modern bathroom design Streatham',
    category: 'Showroom',
    location: 'Streatham',
    service: 'Luxury Tiling',
    width: 1200,
    height: 800
  },
  {
    id: 'grey-marble-vanity',
    src: '/images/grey-marble-tiled-bathroom-vanity.webp',
    alt: 'Grey marble tiled bathroom with modern vanity unit - Bathroom renovation Wimbledon',
    category: 'Showroom',
    location: 'Wimbledon',
    service: 'Full Bathroom Renovation',
    width: 1200,
    height: 800
  },
  {
    id: 'white-walk-in-shower',
    src: '/images/luxury-walk-in-shower-installation-white-tiles.webp',
    alt: 'Luxury walk-in shower installation with white tiles - Wet room fitters Croydon',
    category: 'Showroom',
    location: 'Croydon',
    service: 'Wet Room Installation',
    width: 1200,
    height: 800
  },
  {
    id: 'modern-white-vanity',
    src: '/images/modern-bathroom-renovation-white-vanity-unit.webp',
    alt: 'Modern bathroom renovation with white vanity unit and storage - Bathroom fitters Sutton',
    category: 'Showroom',
    location: 'Sutton',
    service: 'Full Bathroom Renovation',
    width: 1200,
    height: 800
  },
  {
    id: 'grey-subway-tile',
    src: '/images/fredi-builders-grey-vanity-subway-tile-bathroom.webp',
    alt: 'Grey vanity with subway tile bathroom - Contemporary bathroom design Epsom',
    category: 'Showroom',
    location: 'Epsom',
    service: 'Full Bathroom Renovation',
    width: 1200,
    height: 800
  },
  {
    id: 'modern-shower-installation',
    src: '/images/modern-bathroom-shower-installation.webp',
    alt: 'Modern bathroom shower installation with glass enclosure - Shower fitting Carshalton',
    category: 'Showroom',
    location: 'Carshalton',
    service: 'Shower Installation',
    width: 1200,
    height: 800
  },
  {
    id: 'grey-tiles-towel-radiator',
    src: '/images/modern-bathroom-towel-radiator-grey-tiles.webp',
    alt: 'Modern bathroom with towel radiator and grey tiles - Bathroom renovation Wallington',
    category: 'Showroom',
    location: 'Wallington',
    service: 'Full Bathroom Renovation',
    width: 1200,
    height: 800
  },
  {
    id: 'modern-toilet-chrome',
    src: '/images/modern-toilet-fitting-chrome-towel-radiator.webp',
    alt: 'Modern toilet fitting with chrome towel radiator - Bathroom refurbishment Mitcham',
    category: 'Showroom',
    location: 'Mitcham',
    service: 'Bathroom Refurbishment',
    width: 1200,
    height: 800
  },
  {
    id: 'small-bathroom-black-frame',
    src: '/images/small-bathroom-design-black-frame-shower.webp',
    alt: 'Small bathroom design with black frame shower enclosure - Compact bathroom specialists Morden',
    category: 'Showroom',
    location: 'Morden',
    service: 'Small Bathroom Design',
    width: 1200,
    height: 800
  },
  {
    id: 'white-family-bathroom',
    src: '/images/white-tiled-family-bathroom-refurbishment.webp',
    alt: 'White tiled family bathroom refurbishment - Family bathroom renovation Thornton Heath',
    category: 'Showroom',
    location: 'Thornton Heath',
    service: 'Bathroom Refurbishment',
    width: 1200,
    height: 800
  },
  {
    id: 'fitted-bathtub-white',
    src: '/images/fitted-bathtub-white-bathroom-renovation.webp',
    alt: 'Fitted bathtub in white bathroom renovation - Traditional bathroom fitters Cheam',
    category: 'Showroom',
    location: 'Cheam',
    service: 'Full Bathroom Renovation',
    width: 1200,
    height: 800
  },

  // Trust Category - Team photos, branded vans, on-site presence
  {
    id: 'fredi-front-van',
    src: '/images/fredi-front-van.webp',
    alt: 'Fredi Builders company van - Professional bathroom renovation service Surrey and South London',
    category: 'Trust',
    location: 'Surrey',
    service: 'Professional Service',
    width: 1200,
    height: 800,
    priority: true
  },
  {
    id: 'branded-van-team',
    src: '/images/man-branded-van.webp',
    alt: 'Fredi Builders branded van and team member - Professional bathroom fitters South London',
    category: 'Trust',
    location: 'South London',
    service: 'Professional Service',
    width: 1200,
    height: 800
  },

  // Transformation Category - Before/after and construction progress
  {
    id: 'bathroom-before-after-1',
    src: '/images/bathroom-before-after-1.webp',
    alt: 'Bathroom transformation before and after - Complete bathroom renovation Streatham SW16',
    category: 'Transformation',
    location: 'Streatham',
    service: 'Full Bathroom Renovation',
    width: 1200,
    height: 600
  },
  {
    id: 'bathroom-before-after-2',
    src: '/images/bathroom-before-after-2.webp',
    alt: 'Bathroom before and after renovation - Bathroom transformation South London',
    category: 'Transformation',
    location: 'South London',
    service: 'Full Bathroom Renovation',
    width: 1200,
    height: 600
  },

  // Craftsmanship Category - Construction work, extensions, structural projects
  {
    id: 'flat-roof-extension',
    src: '/images/flat-roof-extension-construction-london.webp',
    alt: 'Flat roof extension construction in progress - Building contractors London',
    category: 'Craftsmanship',
    location: 'London',
    service: 'Home Extension',
    width: 1200,
    height: 800
  },
  {
    id: 'home-extension-construction',
    src: '/images/home-extension-construction-site-london.webp',
    alt: 'Home extension construction site - Master builders London',
    category: 'Craftsmanship',
    location: 'London',
    service: 'Home Extension',
    width: 1200,
    height: 800
  },
  {
    id: 'single-story-extension',
    src: '/images/single-story-rear-extension-flat-roof.webp',
    alt: 'Single story rear extension with flat roof - Home extension specialists Surrey',
    category: 'Craftsmanship',
    location: 'Surrey',
    service: 'Home Extension',
    width: 1200,
    height: 800
  },
  {
    id: 'grp-flat-roof',
    src: '/images/grp-fiberglass-flat-roof-laying.webp',
    alt: 'GRP fiberglass flat roof installation - Roofing specialists South London',
    category: 'Craftsmanship',
    location: 'South London',
    service: 'Roofing',
    width: 1200,
    height: 800
  },
  {
    id: 'custom-timber-garden-room',
    src: '/images/custom-timber-garden-room-green-roof.webp',
    alt: 'Custom timber garden room with green roof - Bespoke building projects Surrey',
    category: 'Craftsmanship',
    location: 'Surrey',
    service: 'Garden Room',
    width: 1200,
    height: 800
  },
  {
    id: 'bespoke-home-renovation',
    src: '/images/fredi-builders-bespoke-home-renovation-london.webp',
    alt: 'Bespoke home renovation project - Quality building work London',
    category: 'Craftsmanship',
    location: 'London',
    service: 'Home Renovation',
    width: 1200,
    height: 800
  }
]

/**
 * Get images by category
 */
export function getImagesByCategory(category: GalleryImage['category']): GalleryImage[] {
  return galleryImages.filter(img => img.category === category)
}

/**
 * Get images by location
 */
export function getImagesByLocation(location: string): GalleryImage[] {
  return galleryImages.filter(img => 
    img.location?.toLowerCase().includes(location.toLowerCase())
  )
}

/**
 * Get images by service
 */
export function getImagesByService(service: string): GalleryImage[] {
  return galleryImages.filter(img => 
    img.service?.toLowerCase().includes(service.toLowerCase())
  )
}

/**
 * Get priority images (for above-the-fold loading)
 */
export function getPriorityImages(): GalleryImage[] {
  return galleryImages.filter(img => img.priority === true)
}

/**
 * Gallery statistics
 */
export const galleryStats = {
  totalImages: galleryImages.length,
  byCategory: {
    Showroom: getImagesByCategory('Showroom').length,
    Trust: getImagesByCategory('Trust').length,
    Transformation: getImagesByCategory('Transformation').length,
    Craftsmanship: getImagesByCategory('Craftsmanship').length
  }
}
