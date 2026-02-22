import { Location } from '@/app/data/locations'

interface LocationMapProps {
  location: Location
}

/**
 * LocationMap Component
 * Embeds Google Maps showing service area for GMB gravity
 * Helps establish local relevance beyond Thornton Heath HQ
 */
export default function LocationMap({ location }: LocationMapProps) {
  // Google Maps search URL - free, no API key needed
  const mapSearchUrl = `https://www.google.com/maps/search/?api=1&query=${location.coordinates.lat},${location.coordinates.lng}`

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-serif font-bold text-slate-900 mb-4 text-center">
          Serving {location.name} and Surrounding Areas
        </h2>
        <p className="text-lg text-slate-600 mb-8 text-center max-w-2xl mx-auto">
          We're local to {location.name}, providing bathroom renovations and building
          services within a 5-mile radius. Fast response times and local expertise.
        </p>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-teal-50 to-slate-50 rounded-lg p-8 border-2 border-teal-200 text-center">
            <span className="material-icons-outlined text-teal-600 text-6xl mb-4 block">
              map
            </span>
            <h3 className="text-2xl font-bold text-slate-900 mb-3">
              Find Us in {location.name}
            </h3>
            <p className="text-slate-600 mb-6">
              View our service area and get directions on Google Maps
            </p>
            <a
              href={mapSearchUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors shadow-lg"
            >
              <span className="material-icons-outlined">location_on</span>
              View on Google Maps
            </a>
          </div>

          <div className="mt-6 grid md:grid-cols-3 gap-4 text-center">
            <div className="p-4 bg-slate-50 rounded-lg">
              <span className="material-icons-outlined text-teal-600 text-3xl mb-2 block">
                location_on
              </span>
              <p className="font-semibold text-slate-900">Local to {location.name}</p>
              <p className="text-sm text-slate-600">{location.postcode} area</p>
            </div>

            <div className="p-4 bg-slate-50 rounded-lg">
              <span className="material-icons-outlined text-teal-600 text-3xl mb-2 block">
                schedule
              </span>
              <p className="font-semibold text-slate-900">Fast Response</p>
              <p className="text-sm text-slate-600">Within 24 hours</p>
            </div>

            <div className="p-4 bg-slate-50 rounded-lg">
              <span className="material-icons-outlined text-teal-600 text-3xl mb-2 block">
                verified
              </span>
              <p className="font-semibold text-slate-900">15 Years Local</p>
              <p className="text-sm text-slate-600">Established reputation</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
