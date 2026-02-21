import Link from 'next/link'
import type { Metadata } from 'next'
import Navigation from '@/app/components/Navigation'
import Footer from '@/app/components/Footer'
import WhatsAppFloatButton from '@/app/components/WhatsAppFloatButton'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Full Bathroom Renovations Surrey & South London | Fredi Builders',
  description: 'Complete bathroom renovation services. 104 five-star reviews. 15 years experience. From design to installation across Surrey and South London.',
  keywords: 'bathroom renovation, bathroom refurbishment, complete bathroom remodel, Surrey, South London',
  alternates: {
    canonical: 'https://fredibuilders.co.uk/services/full-bathroom-renovations'
  }
}

export default function FullBathroomRenovations() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-slate-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-teal-600 to-teal-700 text-white py-16 md:py-24">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
                Full Bathroom Renovations
              </h1>
              <p className="text-lg md:text-xl text-teal-50 mb-8">
                Complete bathroom transformations from design to installation
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
                <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
                  <span className="font-semibold">104+</span> Five-Star Reviews
                </div>
                <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
                  <span className="font-semibold">15+</span> Years Experience
                </div>
                <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
                  <span className="font-semibold">9.6/10</span> Checkatrade
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Service Intro */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-6 text-center">
                Complete Bathroom Transformations
              </h2>
              <p className="text-lg text-gray-600 text-center mb-12">
                From initial design consultation to final installation, we handle every aspect of your bathroom renovation with expert care and attention to detail.
              </p>
            </div>
          </div>
        </section>

        {/* What's Included */}
        <section className="py-16 bg-slate-100">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-12 text-center">
                What's Included
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="flex items-start gap-4">
                    <span className="material-icons-outlined text-teal-600 text-3xl">design_services</span>
                    <div>
                      <h3 className="font-bold text-lg mb-2">Design Consultation</h3>
                      <p className="text-gray-600">Full design consultation and planning tailored to your needs</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="flex items-start gap-4">
                    <span className="material-icons-outlined text-teal-600 text-3xl">delete_sweep</span>
                    <div>
                      <h3 className="font-bold text-lg mb-2">Complete Strip-Out</h3>
                      <p className="text-gray-600">Professional removal and disposal of existing fixtures</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="flex items-start gap-4">
                    <span className="material-icons-outlined text-teal-600 text-3xl">plumbing</span>
                    <div>
                      <h3 className="font-bold text-lg mb-2">Plumbing & Electrical</h3>
                      <p className="text-gray-600">Expert plumbing and electrical work to code</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="flex items-start gap-4">
                    <span className="material-icons-outlined text-teal-600 text-3xl">grid_view</span>
                    <div>
                      <h3 className="font-bold text-lg mb-2">Tiling & Flooring</h3>
                      <p className="text-gray-600">Premium tiling, flooring, and decoration</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="flex items-start gap-4">
                    <span className="material-icons-outlined text-teal-600 text-3xl">bathtub</span>
                    <div>
                      <h3 className="font-bold text-lg mb-2">Fixture Installation</h3>
                      <p className="text-gray-600">Bath, shower, toilet, and sink installation</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="flex items-start gap-4">
                    <span className="material-icons-outlined text-teal-600 text-3xl">check_circle</span>
                    <div>
                      <h3 className="font-bold text-lg mb-2">Final Finishing</h3>
                      <p className="text-gray-600">Complete finishing touches and cleanup</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-12 text-center">
                Our Renovation Process
              </h2>
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-teal-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                    1
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2">Free Consultation & Quote</h3>
                    <p className="text-gray-600">We visit your property to discuss your vision and provide a detailed quote</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-teal-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                    2
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2">Design Approval & Material Selection</h3>
                    <p className="text-gray-600">Choose your fixtures, tiles, and finishes with our expert guidance</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-teal-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                    3
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2">Scheduled Installation</h3>
                    <p className="text-gray-600">Typically 7-10 days for complete transformation</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-teal-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                    4
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2">Quality Inspection & Handover</h3>
                    <p className="text-gray-600">Final walkthrough and quality check before handover</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Locations Served */}
        <section className="py-16 bg-slate-100">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-8 text-center">
                Areas We Serve
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <Link href="/locations/bathroom-fitters-streatham-sw16" className="text-teal-600 hover:text-teal-700 hover:underline">
                  Streatham SW16
                </Link>
                <Link href="/locations/bathroom-renovations-purley-cr8" className="text-teal-600 hover:text-teal-700 hover:underline">
                  Purley CR8
                </Link>
                <Link href="/locations/luxury-bathrooms-dulwich-se21" className="text-teal-600 hover:text-teal-700 hover:underline">
                  Dulwich SE21
                </Link>
                <Link href="/locations/bathroom-specialists-thornton-heath-cr7" className="text-teal-600 hover:text-teal-700 hover:underline">
                  Thornton Heath CR7
                </Link>
                <Link href="/locations" className="text-teal-600 hover:text-teal-700 hover:underline font-bold">
                  View All Areas →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-teal-600 text-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Bathroom?
            </h2>
            <p className="text-xl text-teal-50 mb-8 max-w-2xl mx-auto">
              Get your free, no-obligation quote today
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-block bg-white text-teal-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Get Your Free Quote
              </Link>
              <a
                href="tel:+447468451511"
                className="inline-block bg-teal-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-teal-800 transition-colors"
              >
                Call: 07468 451511
              </a>
            </div>
          </div>
        </section>

        {/* Related Services */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h3 className="font-playfair text-2xl font-bold mb-6 text-center">Related Services</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Link href="/services/wet-room-installations" className="p-6 border border-gray-200 rounded-lg hover:border-teal-600 hover:shadow-lg transition-all">
                  <h4 className="font-bold text-lg mb-2">Wet Room Installations</h4>
                  <p className="text-gray-600 text-sm">Modern, accessible wet rooms with expert waterproofing</p>
                </Link>
                <Link href="/services/luxury-tiling-services" className="p-6 border border-gray-200 rounded-lg hover:border-teal-600 hover:shadow-lg transition-all">
                  <h4 className="font-bold text-lg mb-2">Luxury Tiling Services</h4>
                  <p className="text-gray-600 text-sm">Premium tiling with exceptional craftsmanship</p>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFloatButton />
    </>
  )
}
