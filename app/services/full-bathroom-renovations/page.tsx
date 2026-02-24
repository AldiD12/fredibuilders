import Link from 'next/link'
import type { Metadata } from 'next'
import Navigation from '@/app/components/Navigation'
import Footer from '@/app/components/Footer'
import WhatsAppFloatButton from '@/app/components/WhatsAppFloatButton'
import ServiceSchema from '@/app/components/schemas/ServiceSchema'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'How We Renovate Bathrooms: Complete Process Guide | Fredi Builders',
  description: 'Learn about our proven 5-step bathroom renovation process. From design consultation to final handover, discover what to expect when renovating your bathroom.',
  keywords: 'bathroom renovation process, how to renovate bathroom, bathroom remodel steps, renovation timeline, what to expect',
  alternates: {
    canonical: 'https://fredibuilders.co.uk/services/full-bathroom-renovations'
  }
}

export default function FullBathroomRenovations() {
  return (
    <>
      <ServiceSchema
        serviceName="Full Bathroom Renovations"
        serviceDescription="Complete bathroom transformations from concept to completion. Expert design, installation, and project management for luxury bathroom renovations across South London and Surrey."
        serviceUrl="https://fredibuilders.co.uk/services/full-bathroom-renovations"
        serviceType="HomeAndConstructionBusiness"
      />
      <Navigation />
      <main className="min-h-screen bg-slate-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-teal-600 to-teal-700 text-white py-16 md:py-24">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
                How We Renovate Bathrooms: The Complete Process
              </h1>
              <p className="text-lg md:text-xl text-teal-50 mb-8">
                A detailed guide to our proven 5-step renovation process, from initial consultation to final handover
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
                What Goes Into a Complete Bathroom Renovation?
              </h2>
              <p className="text-lg text-gray-600 text-center mb-12">
                At Fredi Builders, we follow a comprehensive approach that covers every aspect of your bathroom transformation. Here's what you can expect when you work with us, and why each step matters for the final result.
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
                Our 5-Step Renovation Process
              </h2>
              <div className="space-y-12">
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-teal-600 text-white rounded-full flex items-center justify-center font-bold text-2xl">
                    1
                  </div>
                  <div>
                    <h3 className="font-bold text-2xl mb-3">Initial Consultation & Design Planning</h3>
                    <p className="text-gray-700 mb-4 leading-relaxed">
                      We start with a free, no-obligation consultation at your property. During this visit, we'll measure your existing bathroom, discuss your vision, and understand your specific requirements—whether that's accessibility features, storage solutions, or luxury finishes.
                    </p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      <strong>What we cover:</strong> Space planning, fixture placement, lighting design, ventilation requirements, and material selection. We'll also discuss your budget and provide a detailed, itemized quote with no hidden costs.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-teal-600 text-white rounded-full flex items-center justify-center font-bold text-2xl">
                    2
                  </div>
                  <div>
                    <h3 className="font-bold text-2xl mb-3">Complete Strip-Out & Preparation</h3>
                    <p className="text-gray-700 mb-4 leading-relaxed">
                      Once you approve the design, we begin with a complete strip-out of your existing bathroom. This includes removing old fixtures, tiles, flooring, and any damaged plasterwork. We protect the rest of your home with dust sheets and ensure all waste is disposed of responsibly.
                    </p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      <strong>Why this matters:</strong> A proper strip-out reveals any hidden issues like water damage, outdated wiring, or poor ventilation. Addressing these now prevents costly problems later and ensures your new bathroom is built on a solid foundation.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-teal-600 text-white rounded-full flex items-center justify-center font-bold text-2xl">
                    3
                  </div>
                  <div>
                    <h3 className="font-bold text-2xl mb-3">Plumbing, Electrical & Structural Work</h3>
                    <p className="text-gray-700 mb-4 leading-relaxed">
                      This is where the technical expertise comes in. We install new pipework, ensuring all connections are pressure-tested to British Standards. Electrical work includes new lighting circuits, extractor fans, underfloor heating (if specified), and shaver sockets—all certified to Part P Building Regulations.
                    </p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      <strong>Our approach:</strong> We use solid brass fittings (not cheap plastic), install isolation valves for easy maintenance, and ensure all pipework is concealed behind walls for a clean finish. If you're adding underfloor heating, we'll install the heating mat and thermostat at this stage.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-teal-600 text-white rounded-full flex items-center justify-center font-bold text-2xl">
                    4
                  </div>
                  <div>
                    <h3 className="font-bold text-2xl mb-3">Tiling, Flooring & Waterproofing</h3>
                    <p className="text-gray-700 mb-4 leading-relaxed">
                      With the infrastructure in place, we move to the visible finishes. We apply tanking (waterproofing) to wet areas, then install your chosen tiles with laser-perfect alignment. Whether you've selected large-format porcelain, natural stone, or mosaic tiles, we ensure every cut is precise and every grout line is consistent.
                    </p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      <strong>The details:</strong> We use flexible adhesive and grout to prevent cracking, seal all joints with silicone, and ensure proper falls (slopes) toward drains. For floors, we can install heated mats before tiling for that luxury spa feel.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-teal-600 text-white rounded-full flex items-center justify-center font-bold text-2xl">
                    5
                  </div>
                  <div>
                    <h3 className="font-bold text-2xl mb-3">Fixture Installation & Final Finishing</h3>
                    <p className="text-gray-700 mb-4 leading-relaxed">
                      The final stage brings everything together. We install your bath, shower enclosure, toilet, basin, and any storage units. All fixtures are connected, tested, and sealed. We then add the finishing touches: mirrors, towel rails, accessories, and a final deep clean.
                    </p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      <strong>Quality check:</strong> Before we hand over the keys, we conduct a thorough inspection. We test all taps, check for leaks, ensure the shower pressure is correct, and verify that all electrical components work perfectly. Your bathroom is ready to use immediately—no waiting for grout to cure or sealant to dry.
                    </p>
                  </div>
                </div>
              </div>

              {/* Timeline */}
              <div className="mt-16 p-8 bg-teal-50 rounded-lg border-l-4 border-teal-600">
                <h3 className="font-bold text-xl mb-4 flex items-center gap-2">
                  <span className="material-icons-outlined text-teal-600">schedule</span>
                  Typical Timeline
                </h3>
                <p className="text-gray-700 mb-4">
                  A standard bathroom renovation takes <strong>7-10 working days</strong> from start to finish. Larger projects with structural changes (like removing walls or relocating plumbing) may take 12-14 days.
                </p>
                <p className="text-gray-600 text-sm">
                  We work Monday to Friday, 8am-5pm, and always clean up at the end of each day. You'll have access to a temporary toilet facility if needed, and we'll keep disruption to the rest of your home to an absolute minimum.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Locations Served */}
        <section className="py-16 bg-slate-100">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-6 text-center">
                Where We Renovate Bathrooms
              </h2>
              <p className="text-gray-600 text-center mb-8">
                We provide bathroom renovation services across South London and Surrey. Each location page shows our local work and provides area-specific contact options:
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <Link href="/locations/bathroom-fitters-streatham-sw16" className="text-teal-600 hover:text-teal-700 hover:underline">
                  Our Streatham team
                </Link>
                <Link href="/locations/bathroom-fitters-esher-kt10" className="text-teal-600 hover:text-teal-700 hover:underline">
                  Serving Esher KT10
                </Link>
                <Link href="/locations/luxury-bathrooms-dulwich-se21" className="text-teal-600 hover:text-teal-700 hover:underline">
                  Recent work in Dulwich
                </Link>
                <Link href="/locations/bathroom-fitters-wimbledon-sw19" className="text-teal-600 hover:text-teal-700 hover:underline">
                  Wimbledon projects
                </Link>
                <Link href="/locations/luxury-bathrooms-cobham-kt11" className="text-teal-600 hover:text-teal-700 hover:underline">
                  Working in Cobham
                </Link>
                <Link href="/locations/bathroom-fitters-croydon-cr0" className="text-teal-600 hover:text-teal-700 hover:underline">
                  Croydon area coverage
                </Link>
                <Link href="/locations" className="text-teal-600 hover:text-teal-700 hover:underline font-bold col-span-2 md:col-span-3 text-center">
                  View All 50+ Areas We Serve →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Related Services */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h3 className="font-playfair text-2xl font-bold mb-6 text-center">Learn About Our Other Services</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Link href="/services/wet-room-installations" className="p-6 border border-gray-200 rounded-lg hover:border-teal-600 hover:shadow-lg transition-all">
                  <h4 className="font-bold text-lg mb-2">Our Wet Room Installation Process</h4>
                  <p className="text-gray-600 text-sm">Discover how we create modern, accessible wet rooms with expert waterproofing and drainage systems</p>
                </Link>
                <Link href="/services/luxury-tiling-services" className="p-6 border border-gray-200 rounded-lg hover:border-teal-600 hover:shadow-lg transition-all">
                  <h4 className="font-bold text-lg mb-2">How We Approach Luxury Tiling</h4>
                  <p className="text-gray-600 text-sm">Learn about our tiling techniques, from large-format porcelain to intricate mosaic patterns</p>
                </Link>
                <Link href="/services/structural-building-repairs" className="p-6 border border-gray-200 rounded-lg hover:border-teal-600 hover:shadow-lg transition-all">
                  <h4 className="font-bold text-lg mb-2">Our Structural Work Process</h4>
                  <p className="text-gray-600 text-sm">See how we handle RSJ beam installations and complex knock-throughs with Building Control approval</p>
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
