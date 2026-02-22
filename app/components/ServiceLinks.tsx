import Link from 'next/link'
import { Location } from '@/app/data/locations'

interface ServiceLinksProps {
  location: Location
}

/**
 * ServiceLinks Component
 * Generates upward links from location pages to relevant service hub pages
 * Requirement 5.1: Each location page links to 2-3 relevant service pages
 */
export default function ServiceLinks({ location }: ServiceLinksProps) {
  // Define service mappings based on location highlight or default services
  const getRelevantServices = () => {
    const allServices = [
      {
        slug: 'full-bathroom-renovations',
        name: 'Full Bathroom Renovations',
        description: 'Complete bathroom transformations'
      },
      {
        slug: 'wet-room-installations',
        name: 'Wet Room Installations',
        description: 'Modern accessible wet rooms'
      },
      {
        slug: 'luxury-tiling-services',
        name: 'Luxury Tiling Services',
        description: 'Expert tile installation'
      },
      {
        slug: 'disabled-assisted-bathrooms',
        name: 'Disabled & Assisted Bathrooms',
        description: 'Accessible bathroom solutions'
      },
      {
        slug: 'structural-building-repairs',
        name: 'Structural Building Repairs',
        description: 'RSJ beams and structural work'
      }
    ]

    // Map highlight service names to slugs
    const highlightServiceMap: Record<string, string> = {
      'Bespoke Wet Rooms': 'wet-room-installations',
      'Marble Tiling': 'luxury-tiling-services',
      'Full Home Renovation': 'full-bathroom-renovations',
      'Structural Knock-Throughs': 'structural-building-repairs',
      'Full Bathroom Renovations': 'full-bathroom-renovations',
      'Wet Room Installations': 'wet-room-installations',
      'Victorian Terrace Renovations': 'full-bathroom-renovations',
      'Modern Bathroom Designs': 'full-bathroom-renovations',
      'Luxury Tiling Services': 'luxury-tiling-services',
      'Premium Bathroom Suites': 'full-bathroom-renovations',
      'Designer Wet Rooms': 'wet-room-installations',
      'Structural Building Repairs': 'structural-building-repairs',
      'Complete Bathroom Transformations': 'full-bathroom-renovations',
      'Local Experts': 'full-bathroom-renovations'
    }

    // If location has a highlight service, prioritize it
    if (location.highlightService) {
      const highlightSlug = highlightServiceMap[location.highlightService]
      if (highlightSlug) {
        const highlightedService = allServices.find((s) => s.slug === highlightSlug)
        const otherServices = allServices.filter((s) => s.slug !== highlightSlug)

        // Return highlighted service + 2 others
        return highlightedService
          ? [highlightedService, ...otherServices.slice(0, 2)]
          : allServices.slice(0, 3)
      }
    }

    // Default: return first 3 services
    return allServices.slice(0, 3)
  }

  const services = getRelevantServices()

  // Broad anchor text mapping (non-competing with Hub keywords)
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

  return (
    <section className="py-12 bg-slate-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-serif text-slate-900 mb-8 text-center">
          Our Services in {location.name}
        </h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {services.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="group bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-semibold text-slate-900 mb-2 group-hover:text-teal-600 transition-colors">
                {service.name}
              </h3>
              <p className="text-slate-600 text-sm mb-4">{service.description}</p>
              <span className="text-teal-600 text-sm font-medium group-hover:underline">
                {getAnchorText(service.slug)} →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
