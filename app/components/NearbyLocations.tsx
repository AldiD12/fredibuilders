import Link from 'next/link'
import { locations } from '@/app/data/locations'

interface NearbyLocationsProps {
  neighbors: string[]
}

export default function NearbyLocations({ neighbors }: NearbyLocationsProps) {
  // Randomize anchor text to avoid Google over-optimization penalty
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

  const nearbyLocations = neighbors
    .map(neighborName => {
      const location = locations.find(loc => loc.name === neighborName)
      return location
    })
    .filter((loc): loc is NonNullable<typeof loc> => loc !== undefined)

  if (nearbyLocations.length === 0) {
    return null
  }

  return (
    <section className="py-12 md:py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-text-light dark:text-text-dark">
          We Also Serve <span className="text-primary">Nearby Areas</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {nearbyLocations.map((location, index) => (
            <Link
              key={location.slug}
              href={`/locations/${location.slug}`}
              className="group p-4 bg-white dark:bg-surface-dark rounded-lg border border-gray-200 dark:border-gray-700 hover:border-primary hover:shadow-md transition-all"
            >
              <div className="flex items-center gap-3">
                <span className="material-icons-outlined text-primary text-xl flex-shrink-0">
                  location_on
                </span>
                <div className="min-w-0">
                  <h3 className="font-bold text-sm md:text-base text-text-light dark:text-white group-hover:text-primary transition-colors truncate">
                    {getRandomAnchorText(location.name, index)}
                  </h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400 font-mono">
                    {location.postcode}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link 
            href="/locations"
            className="inline-flex items-center gap-2 text-primary hover:text-primary-hover font-bold transition-colors"
          >
            View All Service Areas
            <span className="material-icons-outlined text-base">arrow_forward</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
