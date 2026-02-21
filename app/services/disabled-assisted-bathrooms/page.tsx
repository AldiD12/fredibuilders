import Link from 'next/link'
import type { Metadata } from 'next'
import Navigation from '@/app/components/Navigation'
import Footer from '@/app/components/Footer'
import WhatsAppFloatButton from '@/app/components/WhatsAppFloatButton'

export const metadata: Metadata = {
  title: 'Disabled-Assisted Bathrooms Surrey | Accessible Bathroom Specialists',
  description: 'Expert accessible bathroom installations. Wet rooms, walk-in showers, grab rails, and mobility solutions. Dignity and safety combined with beautiful design.',
  keywords: 'disabled bathroom, accessible bathroom, mobility bathroom, wet room, walk-in shower, grab rails, Surrey',
  alternates: {
    canonical: 'https://fredibuilders.co.uk/services/disabled-assisted-bathrooms'
  }
}

export default function DisabledAssistedBathrooms() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-slate-50">
        <section className="bg-gradient-to-br from-teal-600 to-teal-700 text-white py-16 md:py-24">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
                Disabled-Assisted Bathrooms
              </h1>
              <p className="text-lg md:text-xl text-teal-50 mb-8">
                Safety, dignity, and beautiful design combined
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
                <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
                  Accessible Design Specialists
                </div>
                <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
                  <span className="font-semibold">15+</span> Years Experience
                </div>
                <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
                  DFG Grant Support
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-6">
                Safety, Dignity, and Beautiful Design
              </h2>
              <p className="text-lg text-gray-600">
                We create accessible bathrooms that don't compromise on style. Every installation is tailored to individual needs while maintaining a luxurious feel.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-slate-100">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-12 text-center">
                Accessibility Features We Install
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { icon: 'accessible', title: 'Level-Access Wet Rooms', desc: 'No threshold for easy access' },
                  { icon: 'shower', title: 'Walk-In Showers', desc: 'With integrated seating' },
                  { icon: 'bathtub', title: 'Walk-In Baths', desc: 'With easy-access doors' },
                  { icon: 'support', title: 'Grab Rails & Support Bars', desc: 'Strategically placed for safety' },
                  { icon: 'wc', title: 'Raised Toilet Seats', desc: 'With support frames' },
                  { icon: 'warning', title: 'Non-Slip Flooring', desc: 'Throughout the bathroom' },
                  { icon: 'height', title: 'Accessible Sink Heights', desc: 'Wheelchair-friendly positioning' },
                  { icon: 'thermostat', title: 'Thermostatic Controls', desc: 'Anti-scald protection' },
                  { icon: 'emergency', title: 'Emergency Pull Cords', desc: 'For peace of mind' },
                  { icon: 'lightbulb', title: 'Improved Lighting', desc: 'Enhanced visibility and contrast' }
                ].map((item, i) => (
                  <div key={i} className="bg-white p-6 rounded-lg shadow-sm">
                    <div className="flex items-start gap-4">
                      <span className="material-icons-outlined text-teal-600 text-3xl">{item.icon}</span>
                      <div>
                        <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                        <p className="text-gray-600">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-8 text-center">
                Our Person-Centered Approach
              </h2>
              <p className="text-lg text-gray-600 text-center mb-8">
                Every accessible bathroom is different because every person's needs are unique. We take time to understand:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  'Current and future mobility requirements',
                  'Wheelchair or walker dimensions',
                  'Transfer preferences and techniques',
                  'Caregiver access needs',
                  'Personal style preferences',
                  'Budget and funding options'
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <span className="material-icons-outlined text-teal-600 text-2xl">check_circle</span>
                    <p className="text-gray-700 font-medium">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-slate-100">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-8 text-center">
                Funding and Grants
              </h2>
              <p className="text-lg text-gray-600 text-center mb-8">
                We can work with various funding sources and provide detailed quotes suitable for grant applications:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { title: 'Disabled Facilities Grants (DFG)', desc: 'Local authority funding support' },
                  { title: 'Local Authority Funding', desc: 'Council-provided assistance' },
                  { title: 'Private Funding', desc: 'Flexible payment options' },
                  { title: 'Insurance Claims', desc: 'We work with insurers' }
                ].map((item, i) => (
                  <div key={i} className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-playfair text-3xl font-bold mb-8 text-center">
                Accessible Bathroom Specialists Serving
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

        <section className="py-16 bg-teal-600 text-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-6">
              Let's Discuss Your Needs
            </h2>
            <p className="text-xl text-teal-50 mb-8 max-w-2xl mx-auto">
              Free consultation and home assessment
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="inline-block bg-white text-teal-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Book Consultation
              </Link>
              <a href="tel:+447468451511" className="inline-block bg-teal-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-teal-800 transition-colors">
                Call: 07468 451511
              </a>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h3 className="font-playfair text-2xl font-bold mb-6 text-center">Related Services</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Link href="/services/wet-room-installations" className="p-6 border border-gray-200 rounded-lg hover:border-teal-600 hover:shadow-lg transition-all">
                  <h4 className="font-bold text-lg mb-2">Wet Room Installations</h4>
                  <p className="text-gray-600 text-sm">Level-access wet rooms</p>
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
