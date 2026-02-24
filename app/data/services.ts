/**
 * Centralized Services Data
 * Aligned with GMB Service Categories for Semantic Consistency
 * 
 * GMB Primary Category: Bathroom Renovator
 * GMB Additional Categories: General Contractor, Kitchen Renovator, Tile Contractor, Painter and Decorator, Bricklayer
 */

export interface Service {
  slug: string
  name: string // Display name for website
  gmbName: string // Exact GMB service name
  gmbCategory: 'Bathroom Renovator' | 'General Contractor' | 'Kitchen Renovator' | 'Tile contractor' | 'Painter and Decorator' | 'Bricklayer'
  description: string
  shortDescription: string
  icon: string
  features: string[]
  typicalDuration: string
  priceRange: string
  keywords: string[]
  relatedServices: string[] // slugs
  pageUrl: string
}

export const services: Service[] = [
  // PRIMARY CATEGORY: Bathroom Renovator
  {
    slug: 'full-bathroom-renovations',
    name: 'Full Bathroom Renovations',
    gmbName: 'Bespoke Bathroom Renovations',
    gmbCategory: 'Bathroom Renovator',
    description: 'Complete bathroom transformations from concept to completion. Expert design, installation, and project management for luxury bathroom renovations.',
    shortDescription: 'Complete bathroom transformations from design to completion',
    icon: 'home_repair_service',
    features: [
      'Complete suite removal and installation',
      'Plumbing and electrical work',
      'Tiling and waterproofing',
      'Project management',
      'Building regulations compliance'
    ],
    typicalDuration: '2-3 weeks',
    priceRange: '£5,000-£15,000',
    keywords: ['bathroom renovation', 'complete bathroom', 'bathroom transformation', 'bespoke bathroom'],
    relatedServices: ['wet-room-installations', 'luxury-tiling-services', 'structural-building-repairs'],
    pageUrl: '/services/full-bathroom-renovations'
  },
  {
    slug: 'wet-room-installations',
    name: 'Wet Room Installations',
    gmbName: 'Luxury Wet Room Installation',
    gmbCategory: 'Bathroom Renovator',
    description: 'Modern wet rooms with waterproof tanking and minimal access. Expert installation of level-access showers with proper drainage and waterproofing systems.',
    shortDescription: 'Modern, accessible wet rooms with expert waterproofing',
    icon: 'shower',
    features: [
      'Waterproof tanking to British Standards',
      'Linear drainage systems',
      'Level access installation',
      'Slip-resistant tiling',
      'Walk-in shower design'
    ],
    typicalDuration: '1-2 weeks',
    priceRange: '£4,000-£10,000',
    keywords: ['wet room', 'walk-in shower', 'level access shower', 'waterproofing', 'tanking'],
    relatedServices: ['full-bathroom-renovations', 'luxury-tiling-services', 'disabled-assisted-bathrooms'],
    pageUrl: '/services/wet-room-installations'
  },
  {
    slug: 'disabled-assisted-bathrooms',
    name: 'Accessible & Assisted Bathrooms',
    gmbName: 'Walk-in Shower Construction',
    gmbCategory: 'Bathroom Renovator',
    description: 'Person-centered accessible bathroom design and installation. Wet rooms, walk-in showers, grab rails, and mobility solutions with DFG grant support.',
    shortDescription: 'Accessible bathroom solutions with safety and dignity in mind',
    icon: 'accessible',
    features: [
      'Level access wet rooms',
      'Grab rail installation',
      'Walk-in baths',
      'Comfort-height toilets',
      'DFG grant support',
      'Occupational therapist collaboration'
    ],
    typicalDuration: '2-4 weeks',
    priceRange: '£6,000-£20,000',
    keywords: ['accessible bathroom', 'disabled bathroom', 'assisted living', 'mobility bathroom', 'DFG grant'],
    relatedServices: ['wet-room-installations', 'full-bathroom-renovations', 'structural-building-repairs'],
    pageUrl: '/services/disabled-assisted-bathrooms'
  },
  
  // TILE CONTRACTOR
  {
    slug: 'luxury-tiling-services',
    name: 'Luxury Tiling Services',
    gmbName: 'Large Format Porcelain Tiling',
    gmbCategory: 'Tile contractor',
    description: 'Expert installation of marble, porcelain, and designer tiles. Precision tiling with laser-level accuracy for bathrooms, wet rooms, and feature walls.',
    shortDescription: 'Premium tiling with 104 five-star reviews backing our craftsmanship',
    icon: 'grid_view',
    features: [
      'Large-format porcelain installation',
      'Marble and natural stone tiling',
      'Mosaic and feature walls',
      'Laser-level precision',
      'Waterproof grouting',
      'Victorian and geometric patterns'
    ],
    typicalDuration: '3-7 days',
    priceRange: '£2,000-£8,000',
    keywords: ['luxury tiling', 'marble tiling', 'porcelain tiles', 'large format tiles', 'mosaic work'],
    relatedServices: ['full-bathroom-renovations', 'wet-room-installations', 'structural-building-repairs'],
    pageUrl: '/services/luxury-tiling-services'
  },
  
  // GENERAL CONTRACTOR
  {
    slug: 'structural-building-repairs',
    name: 'Structural Building Repairs',
    gmbName: 'Structural Knock-Throughs (RSJ)',
    gmbCategory: 'General Contractor',
    description: 'RSJ steel beam installation and Building Control compliance. Expert structural alterations, knock-throughs, and load-bearing wall removal.',
    shortDescription: 'Expert structural work including foundation and porch repairs',
    icon: 'construction',
    features: [
      'RSJ steel beam installation',
      'Load-bearing wall removal',
      'Structural knock-throughs',
      'Building Control compliance',
      'Structural engineer collaboration',
      'Foundation repairs'
    ],
    typicalDuration: '1-2 weeks',
    priceRange: '£3,000-£8,000',
    keywords: ['structural repairs', 'RSJ beam', 'knock-through', 'load bearing wall', 'building control'],
    relatedServices: ['full-bathroom-renovations', 'wet-room-installations', 'luxury-tiling-services'],
    pageUrl: '/services/structural-building-repairs'
  }
]

// Helper functions
export function getServiceBySlug(slug: string): Service | undefined {
  return services.find(service => service.slug === slug)
}

export function getServicesByCategory(category: Service['gmbCategory']): Service[] {
  return services.filter(service => service.gmbCategory === category)
}

export function getRelatedServices(slug: string): Service[] {
  const service = getServiceBySlug(slug)
  if (!service) return []
  
  return service.relatedServices
    .map(relatedSlug => getServiceBySlug(relatedSlug))
    .filter((s): s is Service => s !== undefined)
}

// GMB Service Categories for reference
export const gmbCategories = {
  primary: 'Bathroom Renovator',
  additional: [
    'General Contractor',
    'Kitchen Renovator',
    'Tile contractor',
    'Painter and Decorator',
    'Bricklayer'
  ]
} as const

// Top-tier services for location pages (Semantic Mirror)
export const topTierServices = [
  'Bespoke Bathroom Renovations',
  'Luxury Wet Room Installation',
  'Walk-in Shower Construction',
  'Large Format Porcelain Tiling',
  'Structural Knock-Throughs (RSJ)'
] as const
