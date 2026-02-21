import Link from 'next/link'
import type { Metadata } from 'next'
import Navigation from '@/app/components/Navigation'
import Footer from '@/app/components/Footer'
import WhatsAppFloatButton from '@/app/components/WhatsAppFloatButton'

export const metadata: Metadata = {
  title: 'Our Services | Bathroom Renovations & Building Services | Fredi Builders',
  description: 'Expert bathroom renovations, wet rooms, luxury tiling, structural repairs, and disabled-assisted bathrooms across Surrey and South London.',
  alternates: {
    canonical: 'https://fredibuilders.co.uk/services'
  }
}

export default function Services() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-slate-50 py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-4">Our Specialist Services</h1>
            <p className="text-xl text-gray-600">15 years of expertise across all aspects of bathroom renovation and building work</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <article className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="p-8">
                <h2 className="font-playfair text-2xl font-bold mb-4">
                  <Link href="/services/full-bathroom-renovations" className="text-gray-900 hover:text-primary transition-colors">
                    Full Bathroom Renovations
                  </Link>
                </h2>
                <p className="text-gray-600 mb-6">Complete bathroom transformations from design to completion</p>
                <Link href="/services/full-bathroom-renovations" className="text-primary font-semibold hover:underline">
                  Learn More →
                </Link>
              </div>
            </article>

            <article className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="p-8">
                <h2 className="font-playfair text-2xl font-bold mb-4">
                  <Link href="/services/wet-room-installations" className="text-gray-900 hover:text-primary transition-colors">
                    Wet Room Installations
                  </Link>
                </h2>
                <p className="text-gray-600 mb-6">Modern, accessible wet rooms with expert waterproofing</p>
                <Link href="/services/wet-room-installations" className="text-primary font-semibold hover:underline">
                  Learn More →
                </Link>
              </div>
            </article>

            <article className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="p-8">
                <h2 className="font-playfair text-2xl font-bold mb-4">
                  <Link href="/services/luxury-tiling-services" className="text-gray-900 hover:text-primary transition-colors">
                    Luxury Tiling Services
                  </Link>
                </h2>
                <p className="text-gray-600 mb-6">Premium tiling with 104 five-star reviews backing our craftsmanship</p>
                <Link href="/services/luxury-tiling-services" className="text-primary font-semibold hover:underline">
                  Learn More →
                </Link>
              </div>
            </article>

            <article className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="p-8">
                <h2 className="font-playfair text-2xl font-bold mb-4">
                  <Link href="/services/structural-building-repairs" className="text-gray-900 hover:text-primary transition-colors">
                    Structural Building Repairs
                  </Link>
                </h2>
                <p className="text-gray-600 mb-6">Expert structural work including foundation and porch repairs</p>
                <Link href="/services/structural-building-repairs" className="text-primary font-semibold hover:underline">
                  Learn More →
                </Link>
              </div>
            </article>

            <article className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="p-8">
                <h2 className="font-playfair text-2xl font-bold mb-4">
                  <Link href="/services/disabled-assisted-bathrooms" className="text-gray-900 hover:text-primary transition-colors">
                    Disabled-Assisted Bathrooms
                  </Link>
                </h2>
                <p className="text-gray-600 mb-6">Accessible bathroom solutions with safety and dignity in mind</p>
                <Link href="/services/disabled-assisted-bathrooms" className="text-primary font-semibold hover:underline">
                  Learn More →
                </Link>
              </div>
            </article>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppFloatButton />
    </>
  )
}
