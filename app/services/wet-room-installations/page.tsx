import Link from 'next/link'
import type { Metadata } from 'next'
import Navigation from '@/app/components/Navigation'
import Footer from '@/app/components/Footer'
import WhatsAppFloatButton from '@/app/components/WhatsAppFloatButton'

export const metadata: Metadata = {
  title: 'How We Install Wet Rooms: Waterproofing & Drainage Guide | Fredi Builders',
  description: 'Learn about our wet room installation process, from tanking systems to drainage. Discover what makes a successful wet room and how we ensure complete waterproofing.',
  keywords: 'wet room installation process, how to install wet room, waterproofing bathroom, tanking system, drainage installation',
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
                How We Install Wet Rooms: The Complete Guide
              </h1>
              <p className="text-lg md:text-xl text-teal-50 mb-8">
                Understanding waterproofing, drainage, and the technical process behind modern wet room installations
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
                What Is a Wet Room and Why Choose One?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                A wet room is a fully waterproofed bathroom space with an open shower area—no tray, no enclosure, just a seamless floor that drains water away. Here's why they're becoming increasingly popular and what you need to know before installing one.
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
                The Critical Importance of Waterproofing
              </h2>
              <p className="text-lg text-gray-600 text-center mb-6">
                The single most important aspect of a wet room is the waterproofing. Get this wrong, and you'll face water damage, mold, and costly repairs. Here's how we ensure your wet room is completely watertight using British Standard tanking systems.
              </p>
              <div className="bg-amber-50 border-l-4 border-amber-500 p-6 mb-12">
                <p className="text-gray-700">
                  <strong>Why waterproofing matters:</strong> Unlike a traditional shower tray that contains water, a wet room floor is level with the rest of the bathroom. This means water can potentially travel anywhere—which is why professional tanking (waterproofing) is absolutely essential.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start gap-4">
                  <span className="material-icons-outlined text-teal-600 text-2xl">check_circle</span>
                  <div>
                    <h4 className="font-bold mb-2">Tanking Membrane Installation</h4>
                    <p className="text-gray-600 text-sm">We apply a liquid or sheet membrane to all wet areas—floor, walls, and joints. This creates a continuous waterproof barrier that prevents water from penetrating the substrate.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="material-icons-outlined text-teal-600 text-2xl">check_circle</span>
                  <div>
                    <h4 className="font-bold mb-2">Proper Drainage & Falls</h4>
                    <p className="text-gray-600 text-sm">The floor must have a gradient (fall) of 1:80 toward the drain. Too steep and it's uncomfortable to walk on; too shallow and water pools. We get this exactly right.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="material-icons-outlined text-teal-600 text-2xl">check_circle</span>
                  <div>
                    <h4 className="font-bold mb-2">Quality Linear or Point Drains</h4>
                    <p className="text-gray-600 text-sm">We install premium drainage systems—either linear drains (long, narrow grates) or point drains (central waste). Both are designed for high water flow and easy maintenance.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="material-icons-outlined text-teal-600 text-2xl">check_circle</span>
                  <div>
                    <h4 className="font-bold mb-2">Guaranteed Waterproof Seal</h4>
                    <p className="text-gray-600 text-sm">All joints, corners, and penetrations (pipes, drains) are sealed with waterproof tape and membrane. We test the system before tiling to ensure zero leaks.</p>
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
                Our 6-Step Wet Room Installation Process
              </h2>
              <div className="space-y-12">
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-teal-600 text-white rounded-full flex items-center justify-center font-bold text-2xl">
                    1
                  </div>
                  <div>
                    <h3 className="font-bold text-2xl mb-3">Site Survey & Drainage Assessment</h3>
                    <p className="text-gray-700 mb-4 leading-relaxed">
                      We start with a comprehensive assessment of your space. The most critical question: where will the water go? We need to ensure there's adequate fall (gradient) from the shower area to the drain, and that the existing drainage system can handle the water flow.
                    </p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      <strong>What we check:</strong> Floor levels, joist direction (for timber floors), existing drainage location, and whether we need to raise the floor or lower the drain. We'll also discuss whether you want a linear drain (modern, minimalist) or a point drain (traditional, central waste).
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-teal-600 text-white rounded-full flex items-center justify-center font-bold text-2xl">
                    2
                  </div>
                  <div>
                    <h3 className="font-bold text-2xl mb-3">Floor Preparation & Leveling</h3>
                    <p className="text-gray-700 mb-4 leading-relaxed">
                      The floor must be perfectly prepared before any waterproofing begins. For concrete floors, we ensure the surface is smooth and level. For timber floors, we install marine-grade plywood or cement backer board to create a stable, waterproof base.
                    </p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      <strong>Creating the fall:</strong> We build up the floor using a pre-formed shower tray former or create a custom screed with the correct gradient. The fall must be consistent—typically 1:80 (12mm drop per meter)—to ensure water flows efficiently to the drain without pooling.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-teal-600 text-white rounded-full flex items-center justify-center font-bold text-2xl">
                    3
                  </div>
                  <div>
                    <h3 className="font-bold text-2xl mb-3">Waterproof Tanking System</h3>
                    <p className="text-gray-700 mb-4 leading-relaxed">
                      This is the most critical stage. We apply a British Standard tanking system (liquid membrane or sheet membrane) to all wet areas—floor, walls up to at least 1.8m, and all joints. The membrane creates a continuous waterproof barrier that prevents water from penetrating the substrate.
                    </p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      <strong>Special attention to:</strong> Corners, joints, and penetrations (pipes, drains). These are the most vulnerable areas for leaks, so we reinforce them with waterproof tape and multiple membrane layers. We also tank behind where the shower controls will be installed.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-teal-600 text-white rounded-full flex items-center justify-center font-bold text-2xl">
                    4
                  </div>
                  <div>
                    <h3 className="font-bold text-2xl mb-3">Drainage Installation & Testing</h3>
                    <p className="text-gray-700 mb-4 leading-relaxed">
                      We install your chosen drain system—either a linear drain (long, narrow grate along one edge) or a point drain (central waste). The drain must be perfectly level and sealed to the tanking membrane. We then conduct a flood test: we fill the wet room with water and leave it for 24 hours to ensure zero leaks.
                    </p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      <strong>Why we test before tiling:</strong> If there's a leak, it's much easier (and cheaper) to fix before the tiles go down. Once tiled, any waterproofing issues require removing tiles and starting again—which is why we never skip this step.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-teal-600 text-white rounded-full flex items-center justify-center font-bold text-2xl">
                    5
                  </div>
                  <div>
                    <h3 className="font-bold text-2xl mb-3">Premium Tiling & Finishing</h3>
                    <p className="text-gray-700 mb-4 leading-relaxed">
                      With the waterproofing tested and approved, we install your chosen tiles. For wet rooms, we recommend large-format porcelain tiles (fewer grout lines = less maintenance) or natural stone. We use flexible adhesive and grout to accommodate any movement, and ensure all cuts are precise and all grout lines are consistent.
                    </p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      <strong>The details:</strong> We seal all joints with silicone (not grout), install any glass screens or panels, and add any finishing touches like recessed shelves or LED lighting. The drain grate is installed flush with the tiles for a seamless finish.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-teal-600 text-white rounded-full flex items-center justify-center font-bold text-2xl">
                    6
                  </div>
                  <div>
                    <h3 className="font-bold text-2xl mb-3">Quality Testing & Handover</h3>
                    <p className="text-gray-700 mb-4 leading-relaxed">
                      Before we hand over the keys, we conduct a final water test. We run the shower at full pressure for 30 minutes and check for any leaks, pooling, or drainage issues. We also test the shower controls, check the water temperature, and ensure all seals are perfect.
                    </p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      <strong>Maintenance advice:</strong> We'll show you how to maintain your wet room—how to clean the drain, when to re-seal joints, and what products to use on your tiles. With proper care, your wet room will last for decades.
                    </p>
                  </div>
                </div>
              </div>

              {/* Timeline & Cost */}
              <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-8 bg-teal-50 rounded-lg border-l-4 border-teal-600">
                  <h3 className="font-bold text-xl mb-4 flex items-center gap-2">
                    <span className="material-icons-outlined text-teal-600">schedule</span>
                    Typical Timeline
                  </h3>
                  <p className="text-gray-700 mb-4">
                    A wet room installation typically takes <strong>10-14 working days</strong> from start to finish. This includes the 24-hour flood test and time for the tanking membrane to cure.
                  </p>
                  <p className="text-gray-600 text-sm">
                    Larger or more complex wet rooms (multiple drains, underfloor heating, structural changes) may take 14-18 days.
                  </p>
                </div>

                <div className="p-8 bg-amber-50 rounded-lg border-l-4 border-amber-500">
                  <h3 className="font-bold text-xl mb-4 flex items-center gap-2">
                    <span className="material-icons-outlined text-amber-600">payments</span>
                    Investment Range
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Wet rooms are a premium service with prices typically ranging from <strong>£5,000-£12,000</strong> depending on size, specification, and materials.
                  </p>
                  <p className="text-gray-600 text-sm">
                    Factors affecting cost: floor type (concrete vs timber), drainage complexity, tile choice, and any structural work required.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Locations */}
        <section className="py-16 bg-slate-100">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-6 text-center">
                Where We Install Wet Rooms
              </h2>
              <p className="text-gray-600 text-center mb-8">
                We install wet rooms across South London and Surrey. Each location page shows our local work and provides area-specific contact options:
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <Link href="/locations/bathroom-fitters-esher-kt10" className="text-teal-600 hover:text-teal-700 hover:underline">
                  Our Esher team
                </Link>
                <Link href="/locations/bathroom-fitters-wimbledon-sw19" className="text-teal-600 hover:text-teal-700 hover:underline">
                  Serving Wimbledon SW19
                </Link>
                <Link href="/locations/luxury-bathrooms-cobham-kt11" className="text-teal-600 hover:text-teal-700 hover:underline">
                  Recent work in Cobham
                </Link>
                <Link href="/locations/bathroom-fitters-streatham-sw16" className="text-teal-600 hover:text-teal-700 hover:underline">
                  Streatham projects
                </Link>
                <Link href="/locations/luxury-bathrooms-dulwich-se21" className="text-teal-600 hover:text-teal-700 hover:underline">
                  Working in Dulwich
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
                <Link href="/services/disabled-assisted-bathrooms" className="p-6 border border-gray-200 rounded-lg hover:border-teal-600 hover:shadow-lg transition-all">
                  <h4 className="font-bold text-lg mb-2">Our Approach to Accessible Bathrooms</h4>
                  <p className="text-gray-600 text-sm">Discover how we create safe, accessible bathroom solutions</p>
                </Link>
                <Link href="/services/luxury-tiling-services" className="p-6 border border-gray-200 rounded-lg hover:border-teal-600 hover:shadow-lg transition-all">
                  <h4 className="font-bold text-lg mb-2">How We Approach Luxury Tiling</h4>
                  <p className="text-gray-600 text-sm">Learn about our tiling techniques and craftsmanship</p>
                </Link>
                <Link href="/services/full-bathroom-renovations" className="p-6 border border-gray-200 rounded-lg hover:border-teal-600 hover:shadow-lg transition-all">
                  <h4 className="font-bold text-lg mb-2">Our Bathroom Renovation Process</h4>
                  <p className="text-gray-600 text-sm">See how we handle complete bathroom transformations</p>
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
