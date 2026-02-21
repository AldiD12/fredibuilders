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
  // Google Maps embed URL with location coordinates
  const mapUrl = `https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || 'YOUR_API_KEY'}&q=${location.coordinates.lat},${location.coordinates.lng}&zoom=13`

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
          <div className="aspect-video rounded-lg overflow-hidden shadow-lg border border-slate-200">
            <iframe
              src={mapUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`Map showing ${location.name} service area`}
            />
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
