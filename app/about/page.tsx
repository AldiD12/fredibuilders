import type { Metadata } from 'next'
import Navigation from '@/app/components/Navigation'
import Footer from '@/app/components/Footer'
import Image from 'next/image'
import WhatsAppFloatButton from '@/app/components/WhatsAppFloatButton'

import FounderSchema from '@/app/components/FounderSchema'

export const metadata: Metadata = {
  title: 'About Fredi Builders | 15 Years Experience | British Standard Certified',
  description: '15 years of expert bathroom renovations and building services across Surrey and South London. British Standard certified with 104 five-star reviews.',
  alternates: {
    canonical: 'https://fredibuilders.co.uk/about'
  }
}

export default function About() {
  return (
    <>
      <FounderSchema />
      <Navigation />
      <main className="min-h-screen bg-slate-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-teal-600 to-teal-700 text-white py-16 md:py-24">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
                About Fredi Builders
              </h1>
              <p className="text-lg md:text-xl text-teal-50">
                15 years of excellence in bathroom renovations and building services across Surrey and South London
              </p>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-6 text-center">15 Years of Excellence</h2>
              <p className="text-lg text-gray-600 text-center mb-8">
                Since 2011, Fredi Builders has been transforming bathrooms and homes across Surrey and South London.
              </p>
            </div>
          </div>
        </section>

        {/* Founder Section - E-E-A-T */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4">Meet the Founder</h2>
                <p className="text-lg text-gray-600">
                  Expert craftsmanship backed by 15+ years of experience
                </p>
              </div>
              
              <div className="bg-slate-50 rounded-lg p-8 md:p-12">
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="flex-shrink-0">
                    <div className="w-32 h-32 bg-teal-600 rounded-full flex items-center justify-center">
                      <span className="text-white text-5xl font-bold">FD</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">Fredi Dengu</h3>
                    <p className="text-teal-600 font-semibold mb-4">Founder & Lead Contractor</p>
                    <p className="text-slate-700 leading-relaxed mb-4">
                      With over 15 years of hands-on experience in luxury bathroom renovations and structural building work, 
                      Fredi has built a reputation for meticulous attention to detail and flawless finishes across South London and Surrey.
                    </p>
                    <p className="text-slate-700 leading-relaxed mb-4">
                      Specializing in complex projects including RSJ steel beam installations, wet room tanking, and high-end marble tiling, 
                      Fredi personally oversees every project to ensure it meets the exacting standards that have earned Fredi Builders 
                      a 9.6/10 rating on Checkatrade.
                    </p>
                    <div className="flex flex-wrap gap-2 mt-6">
                      <span className="px-3 py-1 bg-teal-100 text-teal-800 rounded-full text-sm font-semibold">
                        Bathroom Renovations
                      </span>
                      <span className="px-3 py-1 bg-teal-100 text-teal-800 rounded-full text-sm font-semibold">
                        Wet Room Installations
                      </span>
                      <span className="px-3 py-1 bg-teal-100 text-teal-800 rounded-full text-sm font-semibold">
                        Structural Building
                      </span>
                      <span className="px-3 py-1 bg-teal-100 text-teal-800 rounded-full text-sm font-semibold">
                        Building Regulations
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Certifications Section */}
        <section className="py-16 bg-slate-100">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-6 text-center">British Standard Certified</h2>
              <p className="text-lg text-gray-600 text-center mb-8">
                We maintain the highest standards in construction and renovation work.
              </p>
            </div>
          </div>
        </section>

        {/* Reviews Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-6 text-center">104 Five-Star Reviews</h2>
              <p className="text-lg text-gray-600 text-center mb-8">
                Our reputation speaks for itself. Real customers, real results.
              </p>
              <div className="text-center">
                <a href="/reviews" className="inline-block bg-teal-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-teal-700 transition-colors">
                  Read Our Reviews
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section with Van Photo */}
        <section className="py-16 bg-slate-100">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-12 text-center">Our Professional Service</h2>
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="relative rounded-lg overflow-hidden shadow-2xl">
                    <Image
                      src="/images/fredi-front-van.jpeg"
                      alt="Fredi Builders company van - Professional bathroom renovation service"
                      width={800}
                      height={600}
                      className="w-full h-auto"
                      priority
                    />
                  </div>
                </div>
                <div>
                  <h3 className="font-playfair text-2xl font-bold mb-4">Meet Fredi</h3>
                  <p className="text-lg text-gray-700 mb-4">
                    Expert craftsman with over 15 years of experience in bathroom renovations and building services.
                  </p>
                  <p className="text-gray-600 mb-6">
                    From our base in South London, we serve clients across Surrey and the M25 corridor, bringing professional service and exceptional craftsmanship to every project.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <span className="material-icons-outlined text-teal-600">verified</span>
                      <span className="text-gray-700">Fully insured with £2M public liability</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="material-icons-outlined text-teal-600">star</span>
                      <span className="text-gray-700">9.6/10 Checkatrade rating</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="material-icons-outlined text-teal-600">local_shipping</span>
                      <span className="text-gray-700">Professional equipment and branded service</span>
                    </div>
                  </div>
                </div>
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
