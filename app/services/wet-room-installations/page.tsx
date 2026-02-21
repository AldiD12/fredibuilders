import Link from 'next/link'
import type { Metadata } from 'next'
import Navigation from '@/app/components/Navigation'
import Footer from '@/app/components/Footer'
import WhatsAppFloatButton from '@/app/components/WhatsAppFloatButton'

export const metadata: Metadata = {
  title: 'Wet Room Installations Surrey & South London | Expert Waterproofing',
  description: 'Professional wet room installations with expert waterproofing. Modern, accessible, and luxurious. 104 five-star reviews. Serving Surrey and South London.',
  keywords: 'wet room installation, wet room specialists, waterproof bathroom, walk-in shower, Surrey, South London',
  alternates: {
    canonical: 'https://fredibuilders.co.uk/services/wet-room-installations'
  }
}

export default function WetRoomInstallations() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-slate-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-teal-600 to-teal-700 text-white py-16 md:py-24">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
                Wet Room Installations
              </h1>
              <p className="text-lg md:text-xl text-teal-50 mb-8">
                Modern, accessible wet rooms with expert waterproofing
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
                <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
                  Expert Waterproofing
                </div>
                <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
                  <span className="font-semibold">104+</span> Five-Star Reviews
                </div>
                <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
                  <span className="font-semibold">15+</span> Years Experience
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Service Intro */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-6">
                Modern, Accessible Wet Rooms
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Transform your bathroom into a sleek, modern wet room. Perfect for accessibility, luxury, and maximizing space in smaller bathrooms.
              </p>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 bg-slate-100">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-12 text-center">
                Why Choose a Wet Room?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="flex items-start gap-4">
                    <span className="material-icons-outlined text-teal-600 text-3xl">accessible</span>
                    <div>
                      <h3 className="font-bold text-lg mb-2">Fully Accessible</h3>
                      <p className="text-gray-600">No step or threshold - perfect for all ages and abilities</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="flex items-start gap-4">
                    <span className="material-icons-outlined text-teal-600 text-3xl">auto_awesome</span>
                    <div>
                      <h3 className="font-bold text-lg mb-2">Modern Aesthetic</h3>
                      <p className="text-gray-600">Sleek, minimalist design that enhances any bathroom</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="flex items-start gap-4">
                    <span className="material-icons-outlined text-teal-600 text-3xl">cleaning_services</span>
                    <div>
                      <h3 className="font-bold text-lg mb-2">Easy to Clean</h3>
                      <p className="text-gray-600">Fewer surfaces and joints mean easier maintenance</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="flex items-start gap-4">
                    <span className="material-icons-outlined text-teal-600 text-3xl">trending_up</span>
                    <div>
                      <h3 className="font-bold text-lg mb-2">Increases Value</h3>
                      <p className="text-gray-600">Premium feature that adds value to your property</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="flex items-start gap-4">
                    <span className="material-icons-outlined text-teal-600 text-3xl">straighten</span>
                    <div>
                      <h3 className="font-bold text-lg mb-2">Space Efficient</h3>
                      <p className="text-gray-600">Perfect for small or awkward bathroom spaces</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="flex items-start gap-4">
                    <span className="material-icons-outlined text-teal-600 text-3xl">elderly</span>
                    <div>
                      <h3 className="font-bold text-lg mb-2">Age-Friendly</h3>
                      <p className="text-gray-600">Ideal for elderly or mobility-impaired users</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Expertise */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-8 text-center">
                Expert Waterproofing
              </h2>
              <p className="text-lg text-gray-600 text-center mb-12">
                The key to a successful wet room is professional waterproofing. With 15 years of experience, we use British Standard tanking systems to ensure your wet room is completely watertight.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start gap-4">
                  <span className="material-icons-outlined text-teal-600 text-2xl">check_circle</span>
                  <div>
                    <h4 className="font-bold mb-1">Tanking Membrane Installation</h4>
                    <p className="text-gray-600 text-sm">Professional waterproof membrane systems</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="material-icons-outlined text-teal-600 text-2xl">check_circle</span>
                  <div>
                    <h4 className="font-bold mb-1">Proper Drainage & Falls</h4>
                    <p className="text-gray-600 text-sm">Correct gradient for efficient water drainage</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="material-icons-outlined text-teal-600 text-2xl">check_circle</span>
                  <div>
                    <h4 className="font-bold mb-1">Quality Linear Drains</h4>
                    <p className="text-gray-600 text-sm">Premium linear or point drain systems</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="material-icons-outlined text-teal-600 text-2xl">check_circle</span>
                  <div>
                    <h4 className="font-bold mb-1">Guaranteed Waterproof Seal</h4>
                    <p className="text-gray-600 text-sm">Complete peace of mind with our guarantee</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-16 bg-slate-100">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-12 text-center">
                Installation Process
              </h2>
              <div className="space-y-8">
                {[
                  { num: 1, title: 'Site Survey & Drainage Assessment', desc: 'Comprehensive assessment of your space and drainage requirements' },
                  { num: 2, title: 'Floor Preparation & Leveling', desc: 'Professional floor preparation to ensure proper drainage' },
                  { num: 3, title: 'Waterproof Tanking System', desc: 'Installation of British Standard waterproofing membrane' },
                  { num: 4, title: 'Drainage Installation', desc: 'Linear or point drain installation with correct falls' },
                  { num: 5, title: 'Premium Tiling & Finishing', desc: 'High-quality tiling and finishing touches' },
                  { num: 6, title: 'Quality Testing & Handover', desc: 'Thorough water testing and final inspection' }
                ].map((step) => (
                  <div key={step.num} className="flex gap-6">
                    <div className="flex-shrink-0 w-12 h-12 bg-teal-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                      {step.num}
                    </div>
                    <div>
                      <h3 className="font-bold text-xl mb-2">{step.title}</h3>
                      <p className="text-gray-600">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-6">
                Investment
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Wet rooms are a premium service with prices typically ranging from £5,000-£12,000 depending on size and specification.
              </p>
              <Link
                href="/contact"
                className="inline-block bg-teal-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-teal-700 transition-colors"
              >
                Get Accurate Quote
              </Link>
            </div>
          </div>
        </section>

        {/* Locations */}
        <section className="py-16 bg-slate-100">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-playfair text-3xl font-bold mb-8 text-center">
                Wet Room Specialists Serving
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
                <Link href="/locations" className="text-teal-600 hover:text-teal-700 hover:underline font-bold">
                  View All Areas →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-teal-600 text-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-6">
              Ready for Your Wet Room?
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
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Link href="/services/disabled-assisted-bathrooms" className="p-6 border border-gray-200 rounded-lg hover:border-teal-600 hover:shadow-lg transition-all">
                  <h4 className="font-bold text-lg mb-2">Disabled-Assisted Bathrooms</h4>
                  <p className="text-gray-600 text-sm">Accessible bathroom solutions</p>
                </Link>
                <Link href="/services/luxury-tiling-services" className="p-6 border border-gray-200 rounded-lg hover:border-teal-600 hover:shadow-lg transition-all">
                  <h4 className="font-bold text-lg mb-2">Luxury Tiling Services</h4>
                  <p className="text-gray-600 text-sm">Premium tiling craftsmanship</p>
                </Link>
                <Link href="/services/full-bathroom-renovations" className="p-6 border border-gray-200 rounded-lg hover:border-teal-600 hover:shadow-lg transition-all">
                  <h4 className="font-bold text-lg mb-2">Full Bathroom Renovations</h4>
                  <p className="text-gray-600 text-sm">Complete transformations</p>
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
