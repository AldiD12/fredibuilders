import Link from 'next/link'
import type { Metadata } from 'next'
import { locations, getLocationsByZone } from '@/app/data/locations'
import Navigation from '@/app/components/Navigation'
import Footer from '@/app/components/Footer'
import WhatsAppFloatButton from '@/app/components/WhatsAppFloatButton'

export const metadata: Metadata = {
  title: 'Areas We Serve | Bathroom Fitters Surrey & South London | Fredi Builders',
  description: 'Expert bathroom renovations across Surrey and South London. Serving 18+ premium locations from Esher to Dulwich with 104+ five-star reviews.',
  alternates: {
    canonical: 'https://fredibuilders.co.uk/locations'
  }
}

export default function Locations() {
  const goldZone = getLocationsByZone('gold')
  const renovationZone = getLocationsByZone('renovation')
  const villageZone = getLocationsByZone('village')
  const foundationZone = getLocationsByZone('foundation')

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-background-light dark:bg-background-dark">
      {/* Hero Section */}
      <section className="bg-slate-950 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
            Areas We <span className="text-primary font-serif italic">Serve</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Bringing 15 years of expertise and 104+ five-star reviews to premium locations across Surrey and South London
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <div className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full">
              <span className="material-icons-outlined text-primary text-base">verified_user</span>
              <span>£2M Insured</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full">
              <span className="material-icons-outlined text-primary text-base">star</span>
              <span>9.6/10 Checkatrade</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full">
              <span className="material-icons-outlined text-primary text-base">schedule</span>
              <span>15+ Years Experience</span>
            </div>
          </div>
        </div>
      </section>

      {/* Gold Zone - Surrey Premium */}
      <section className="py-16 md:py-24 bg-white dark:bg-surface-dark">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-300 rounded-full text-xs font-bold uppercase tracking-wider">
                Gold Zone
              </span>
              <span className="text-gray-500 dark:text-gray-400 text-sm">Surrey - High Ticket / Luxury</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-text-light dark:text-text-dark">
              Premium Surrey Locations
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mt-2">Luxury bathroom renovations for high-end properties</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {goldZone.map((location) => (
              <Link 
                key={location.slug} 
                href={`/locations/${location.slug}`}
                className="group p-6 bg-gray-50 dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-primary hover:shadow-lg transition-all"
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-text-light dark:text-white group-hover:text-primary transition-colors">
                      {location.name}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 font-mono">{location.postcode} • {location.region}</p>
                  </div>
                  <span className="material-icons-outlined text-primary opacity-0 group-hover:opacity-100 transition-opacity">arrow_forward</span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{location.description}</p>
                {location.highlightService && (
                  <span className="inline-block text-xs px-2 py-1 bg-primary/10 text-primary rounded">
                    {location.highlightService}
                  </span>
                )}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Renovation Zone - SW London */}
      <section className="py-16 md:py-24 bg-gray-50 dark:bg-background-dark">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-xs font-bold uppercase tracking-wider">
                Renovation Zone
              </span>
              <span className="text-gray-500 dark:text-gray-400 text-sm">South West London - High Demand</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-text-light dark:text-text-dark">
              South West London
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mt-2">High-demand areas for bathroom renovations and structural work</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {renovationZone.map((location) => (
              <Link 
                key={location.slug} 
                href={`/locations/${location.slug}`}
                className="group p-6 bg-white dark:bg-surface-dark rounded-lg border border-gray-200 dark:border-gray-700 hover:border-primary hover:shadow-lg transition-all"
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-text-light dark:text-white group-hover:text-primary transition-colors">
                      {location.name}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 font-mono">{location.postcode} • {location.region}</p>
                  </div>
                  <span className="material-icons-outlined text-primary opacity-0 group-hover:opacity-100 transition-opacity">arrow_forward</span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{location.description}</p>
                {location.highlightService && (
                  <span className="inline-block text-xs px-2 py-1 bg-primary/10 text-primary rounded">
                    {location.highlightService}
                  </span>
                )}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Village Zone - SE London */}
      <section className="py-16 md:py-24 bg-white dark:bg-surface-dark">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 rounded-full text-xs font-bold uppercase tracking-wider">
                Village Zone
              </span>
              <span className="text-gray-500 dark:text-gray-400 text-sm">South East London - Premium</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-text-light dark:text-text-dark">
              South East London Villages
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mt-2">Premium village locations with character properties</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {villageZone.map((location) => (
              <Link 
                key={location.slug} 
                href={`/locations/${location.slug}`}
                className="group p-6 bg-gray-50 dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-primary hover:shadow-lg transition-all"
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-text-light dark:text-white group-hover:text-primary transition-colors">
                      {location.name}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 font-mono">{location.postcode} • {location.region}</p>
                  </div>
                  <span className="material-icons-outlined text-primary opacity-0 group-hover:opacity-100 transition-opacity">arrow_forward</span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{location.description}</p>
                {location.highlightService && (
                  <span className="inline-block text-xs px-2 py-1 bg-primary/10 text-primary rounded">
                    {location.highlightService}
                  </span>
                )}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Foundation Zone - Core Areas */}
      <section className="py-16 md:py-24 bg-gray-50 dark:bg-background-dark">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-300 rounded-full text-xs font-bold uppercase tracking-wider">
                Foundation Zone
              </span>
              <span className="text-gray-500 dark:text-gray-400 text-sm">Core Local Volume</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-text-light dark:text-text-dark">
              Core Service Areas
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mt-2">Our established local areas with proven track record</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {foundationZone.map((location) => (
              <Link 
                key={location.slug} 
                href={`/locations/${location.slug}`}
                className="group p-6 bg-white dark:bg-surface-dark rounded-lg border border-gray-200 dark:border-gray-700 hover:border-primary hover:shadow-lg transition-all"
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-text-light dark:text-white group-hover:text-primary transition-colors">
                      {location.name}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 font-mono">{location.postcode} • {location.region}</p>
                  </div>
                  <span className="material-icons-outlined text-primary opacity-0 group-hover:opacity-100 transition-opacity">arrow_forward</span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{location.description}</p>
                {location.highlightService && (
                  <span className="inline-block text-xs px-2 py-1 bg-primary/10 text-primary rounded">
                    {location.highlightService}
                  </span>
                )}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-slate-950 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Not Sure If We Cover Your Area?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            We serve surrounding areas too. Get in touch to confirm coverage and receive your free quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-primary hover:bg-primary-hover text-gray-900 font-bold py-4 px-8 rounded shadow-lg transform hover:-translate-y-1 transition-all duration-200 inline-flex items-center justify-center gap-2">
              <span className="material-icons-outlined">email</span>
              Contact Us
            </Link>
            <a href="tel:07468451511" className="bg-white hover:bg-gray-100 text-gray-900 font-bold py-4 px-8 rounded shadow-lg transform hover:-translate-y-1 transition-all duration-200 inline-flex items-center justify-center gap-2">
              <span className="material-icons-outlined">call</span>
              Call 07468 451511
            </a>
          </div>
        </div>
      </section>
    </main>
    <Footer />
    <WhatsAppFloatButton />
    </>
  )
}
