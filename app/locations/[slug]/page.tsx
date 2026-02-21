import Link from 'next/link'
import type { Metadata } from 'next'
import { locations, getLocationBySlug } from '@/app/data/locations'
import { notFound } from 'next/navigation'
import LocationSchema from '@/app/components/LocationSchema'
import Breadcrumb from '@/app/components/Breadcrumb'
import FAQAccordion from '@/app/components/FAQAccordion'
import NearbyLocations from '@/app/components/NearbyLocations'
import LocationMap from '@/app/components/LocationMap'
import ServiceLinks from '@/app/components/ServiceLinks'
import LocationCTAButtons from '@/app/components/LocationCTAButtons'
import LocationPageTracker from '@/app/components/LocationPageTracker'
import ReviewsLink from '@/app/components/ReviewsLink'
import LocationReviews from '@/app/components/LocationReviews'
import Navigation from '@/app/components/Navigation'
import Footer from '@/app/components/Footer'

export async function generateStaticParams() {
  return locations.map((location) => ({
    slug: location.slug,
  }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const location = getLocationBySlug(params.slug)
  
  if (!location) {
    return {
      title: 'Location Not Found | Fredi Builders',
    }
  }

  const baseUrl = 'https://fredibuilders.co.uk'
  const url = `${baseUrl}/locations/${location.slug}`

  return {
    title: `${location.highlightService || 'Bathroom Fitters'} ${location.name} ${location.postcode} | Fredi Builders`,
    description: location.description,
    keywords: location.keywords.join(', '),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `${location.highlightService || 'Bathroom Fitters'} ${location.name}`,
      description: location.description,
      url: url,
      siteName: 'Fredi Builders',
      locale: 'en_GB',
      type: 'website',
    },
    other: {
      'geo.region': 'GB-ENG',
      'geo.placename': location.name,
      'geo.position': `${location.coordinates.lat};${location.coordinates.lng}`,
      'ICBM': `${location.coordinates.lat}, ${location.coordinates.lng}`,
    },
  }
}

export default function LocationPage({ params }: { params: { slug: string } }) {
  const location = getLocationBySlug(params.slug)
  
  if (!location) {
    notFound()
  }

  const baseUrl = 'https://fredibuilders.co.uk'
  const url = `${baseUrl}/locations/${location.slug}`

  const zoneLabels = {
    gold: 'Premium Surrey Location',
    renovation: 'High-Demand Area',
    village: 'Premium Village Location',
    foundation: 'Core Service Area'
  }

  const breadcrumbItems = [
    { name: 'Home', href: '/' },
    { name: 'Service Areas', href: '/locations' },
    { name: location.name, href: url }
  ]

  return (
    <>
      <LocationSchema location={location} url={url} />
      <LocationPageTracker locationName={location.name} />
      <Navigation />
      
      <main className="min-h-screen bg-background-light dark:bg-background-dark">
        <Breadcrumb items={breadcrumbItems} />

        {/* Hero Section */}
        <section className="bg-slate-950 text-white py-12 md:py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl">
              <div className="flex flex-wrap items-center gap-2 md:gap-3 mb-4">
                <span className="px-3 py-1 bg-primary/20 border border-primary/40 rounded-full text-xs font-bold uppercase tracking-wider">
                  {zoneLabels[location.zone]}
                </span>
                <span className="text-gray-400 text-xs md:text-sm">{location.region}</span>
              </div>
              <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 leading-tight text-white">
                {location.highlightService || 'Luxury Bathroom Renovations'} in <span className="text-primary">{location.name}</span> ({location.postcode})
              </h1>
              <p className="text-base md:text-lg lg:text-xl text-gray-300 mb-6 md:mb-8 leading-relaxed">
                {location.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                <Link href="/contact" className="bg-primary hover:bg-primary-hover text-gray-900 font-bold py-3 md:py-4 px-6 md:px-8 rounded shadow-lg transform hover:-translate-y-1 transition-all duration-200 flex items-center justify-center gap-2 text-sm md:text-base">
                  <span className="material-icons-outlined text-lg md:text-xl">request_quote</span>
                  Get Fixed-Price Quote
                </Link>
                <a href="tel:07468451511" className="bg-white/10 hover:bg-white/20 border-2 border-white/30 text-white font-bold py-3 md:py-4 px-6 md:px-8 rounded shadow-lg transform hover:-translate-y-1 transition-all duration-200 flex items-center justify-center gap-2 text-sm md:text-base">
                  <span className="material-icons-outlined text-lg md:text-xl">call</span>
                  Call: 07468 451511
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Signals */}
        <section className="py-6 md:py-8 bg-white dark:bg-surface-dark border-b border-gray-100 dark:border-gray-800">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 text-center text-sm md:text-base">
              <div className="flex items-center gap-2">
                <span className="material-icons-outlined text-primary text-lg md:text-xl">star</span>
                <span className="font-bold">9.6/10</span>
                <span className="text-gray-600 dark:text-gray-400 text-xs md:text-sm">Checkatrade</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-icons-outlined text-primary text-lg md:text-xl">verified_user</span>
                <span className="font-bold">£2M</span>
                <span className="text-gray-600 dark:text-gray-400 text-xs md:text-sm">Insured</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-icons-outlined text-primary text-lg md:text-xl">groups</span>
                <span className="font-bold">104+</span>
                <span className="text-gray-600 dark:text-gray-400 text-xs md:text-sm">Happy Clients</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-icons-outlined text-primary text-lg md:text-xl">schedule</span>
                <span className="font-bold">15+</span>
                <span className="text-gray-600 dark:text-gray-400 text-xs md:text-sm">Years Experience</span>
              </div>
            </div>
          </div>
        </section>

        {/* PROMINENT Recent Projects Section - Anti-Robot SEO */}
        {location.recentProjects && location.recentProjects.length > 0 && (
          <section className="py-12 md:py-16 bg-gradient-to-br from-teal-50 to-slate-50 dark:from-slate-900 dark:to-slate-800">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-8">
                  <span className="inline-block px-4 py-2 bg-teal-600 text-white text-sm font-bold rounded-full mb-4">
                    RECENT WORK IN {location.name.toUpperCase()}
                  </span>
                  <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 dark:text-white mb-4">
                    Latest Projects in {location.name}
                  </h2>
                  <p className="text-lg text-slate-600 dark:text-slate-300">
                    Real projects we've completed for homeowners in {location.postcode}
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {location.recentProjects.map((project, index) => (
                    <div
                      key={index}
                      className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-6 border-l-4 border-teal-600"
                    >
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-teal-100 dark:bg-teal-900 rounded-full flex items-center justify-center">
                            <span className="material-icons-outlined text-teal-600 dark:text-teal-400 text-2xl">
                              check_circle
                            </span>
                          </div>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="text-sm font-bold text-teal-600 dark:text-teal-400">
                              {project.year}
                            </span>
                            <span className="text-xs text-slate-500">•</span>
                            <span className="text-sm text-slate-600 dark:text-slate-400">
                              {location.name}
                            </span>
                          </div>
                          <p className="text-slate-800 dark:text-slate-200 leading-relaxed">
                            {project.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 text-center">
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    <span className="material-icons-outlined text-base align-middle mr-1">
                      location_on
                    </span>
                    All projects completed within {location.postcode} area
                  </p>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Detailed Description & Local Streets - GMB Gravity */}
        {location.detailedDescription && (
          <section className="py-12 md:py-16 bg-white dark:bg-surface-dark">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 dark:text-white mb-6">
                  We're Local to {location.name}
                </h2>
                <div className="prose prose-lg dark:prose-invert max-w-none">
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
                    {location.detailedDescription}
                  </p>
                </div>

                {location.localStreets && location.localStreets.length > 0 && (
                  <div className="mt-8 p-6 bg-slate-50 dark:bg-slate-800 rounded-lg">
                    <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                      <span className="material-icons-outlined text-teal-600">map</span>
                      Streets We Serve in {location.name}
                    </h3>
                    <div className="grid md:grid-cols-3 gap-3">
                      {location.localStreets.map((street, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-2 text-slate-700 dark:text-slate-300"
                        >
                          <span className="material-icons-outlined text-teal-600 text-sm">
                            check
                          </span>
                          <span className="text-sm">{street}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {location.landmarks && location.landmarks.length > 0 && (
                  <div className="mt-6 flex flex-wrap gap-3">
                    <span className="text-sm font-medium text-slate-600 dark:text-slate-400">
                      Near:
                    </span>
                    {location.landmarks.map((landmark, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center gap-1 px-3 py-1 bg-teal-50 dark:bg-teal-900 text-teal-700 dark:text-teal-300 rounded-full text-sm"
                      >
                        <span className="material-icons-outlined text-xs">place</span>
                        {landmark}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </section>
        )}

        {/* Services in Location - Using ServiceLinks Component */}
        <ServiceLinks location={location} />

        {/* Google Maps - GMB Gravity */}
        <LocationMap location={location} />

        {/* Why Choose Us */}
        <section className="py-12 md:py-20 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-8 md:mb-12 text-text-light dark:text-text-dark">
                Why Choose Fredi Builders in <span className="text-primary">{location.name}</span>?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <div className="flex gap-3 md:gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                      <span className="material-icons-outlined text-lg md:text-xl">location_on</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-base md:text-lg mb-1 md:mb-2 text-text-light dark:text-white">Local Expertise</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-xs md:text-sm">We know {location.name} properties inside out. From Victorian terraces to modern builds, we understand local building regulations and architectural styles.</p>
                  </div>
                </div>

                <div className="flex gap-3 md:gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                      <span className="material-icons-outlined text-lg md:text-xl">speed</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-base md:text-lg mb-1 md:mb-2 text-text-light dark:text-white">Efficient Service</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-xs md:text-sm">Based nearby, we can visit your {location.postcode} property quickly for fixed-price quotations and start work without delay.</p>
                  </div>
                </div>

                <div className="flex gap-3 md:gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                      <span className="material-icons-outlined text-lg md:text-xl">star</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-base md:text-lg mb-1 md:mb-2 text-text-light dark:text-white">Proven Track Record</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-xs md:text-sm">104+ five-star Checkatrade reviews from satisfied customers across {location.region}. Flawless finishes and meticulous attention to detail.</p>
                  </div>
                </div>

                <div className="flex gap-3 md:gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                      <span className="material-icons-outlined text-lg md:text-xl">verified_user</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-base md:text-lg mb-1 md:mb-2 text-text-light dark:text-white">Fully Insured</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-xs md:text-sm">£2 Million Public Liability Insurance for complete peace of mind on every project. Punctual & respectful of your property.</p>
                  </div>
                </div>
              </div>

              {/* Reviews Link */}
              <div className="mt-8 text-center">
                <ReviewsLink context="inline" />
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-12 md:py-20 bg-white dark:bg-surface-dark">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-8 md:mb-12 text-text-light dark:text-text-dark">
                Frequently Asked <span className="text-primary">Questions</span>
              </h2>
              <FAQAccordion 
                locationName={location.name}
                postcode={location.postcode}
                region={location.region}
              />
            </div>
          </div>
        </section>

        {/* Location-Specific Reviews - GMB Neural Bridge */}
        <LocationReviews locationName={location.name} postcode={location.postcode} maxReviews={3} />

        {/* Nearby Locations */}
        <NearbyLocations neighbors={location.nearby} />

        {/* CTA Section */}
        <section className="py-12 md:py-20 bg-slate-950 text-white">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6">
              Ready to Transform Your Bathroom in {location.name}?
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-gray-300 mb-6 md:mb-8 max-w-2xl mx-auto">
              Get a free, no-obligation quote for your {location.postcode} property today. Complete project management with on-time delivery.
            </p>
            <LocationCTAButtons locationName={location.slug} />
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
