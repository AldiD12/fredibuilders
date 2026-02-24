import Link from 'next/link'
import type { Metadata } from 'next'
import Navigation from '@/app/components/Navigation'
import Footer from '@/app/components/Footer'
import WhatsAppFloatButton from '@/app/components/WhatsAppFloatButton'
import ServiceSchema from '@/app/components/schemas/ServiceSchema'

export const metadata: Metadata = {
  title: 'How We Approach Luxury Tiling: Techniques & Craftsmanship | Fredi Builders',
  description: 'Learn about our tiling techniques, from large-format porcelain to intricate mosaics. Discover what makes perfect tiling and how we achieve laser-level precision.',
  keywords: 'tiling techniques, how to tile bathroom, porcelain tile installation, natural stone tiling, grout lines, tile patterns',
  alternates: {
    canonical: 'https://fredibuilders.co.uk/services/luxury-tiling-services'
  }
}

export default function LuxuryTilingServices() {
  return (
    <>
      <ServiceSchema
        serviceName="Luxury Tiling Services"
        gmbServiceName="Large Format Porcelain Tiling"
        serviceDescription="Expert installation of marble, porcelain, and designer tiles. Precision tiling with laser-level accuracy for bathrooms, wet rooms, and feature walls."
        serviceUrl="https://fredibuilders.co.uk/services/luxury-tiling-services"
        serviceType="HomeAndConstructionBusiness"
      />
      <Navigation />
      <main className="min-h-screen bg-slate-50">
        <section className="bg-gradient-to-br from-teal-600 to-teal-700 text-white py-16 md:py-24">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
                How We Approach Luxury Tiling
              </h1>
              <p className="text-lg md:text-xl text-teal-50 mb-8">
                The techniques, materials, and attention to detail that create perfect tiling every time
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
                <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
                  <span className="font-semibold">104+</span> Five-Star Reviews
                </div>
                <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
                  Master Tiler
                </div>
                <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
                  <span className="font-semibold">15+</span> Years Experience
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-6">
                What Makes Perfect Tiling?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Tiling looks simple—until you try it yourself. The difference between amateur and professional tiling comes down to preparation, precision, and understanding how different materials behave. Here's what we've learned over 15 years and 104+ projects.
              </p>
              <div className="bg-teal-50 border-l-4 border-teal-600 p-6">
                <p className="text-gray-700">
                  <strong>The truth about tiling:</strong> Anyone can stick tiles to a wall. But achieving laser-level precision, perfect grout lines, and a finish that lasts decades? That requires expertise, the right tools, and an obsessive attention to detail.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-slate-100">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-8 text-center">
                Understanding Different Tile Materials
              </h2>
              <p className="text-gray-600 text-center mb-12">
                Each tile material has unique properties that affect how it's installed, maintained, and performs over time. Here's what you need to know:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-teal-600">
                  <div className="flex items-start gap-4">
                    <span className="material-icons-outlined text-teal-600 text-3xl">grid_view</span>
                    <div>
                      <h3 className="font-bold text-lg mb-3">Large-Format Porcelain</h3>
                      <p className="text-gray-700 mb-3">Modern porcelain tiles (up to 1200x600mm) create seamless, minimal-grout finishes. They're incredibly durable, water-resistant, and perfect for contemporary bathrooms.</p>
                      <p className="text-gray-600 text-sm"><strong>Installation challenge:</strong> Large tiles require perfectly flat surfaces and specialized adhesive. Any deviation shows as lippage (uneven edges). We use laser levels and self-leveling compound to ensure perfection.</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-amber-500">
                  <div className="flex items-start gap-4">
                    <span className="material-icons-outlined text-amber-600 text-3xl">landscape</span>
                    <div>
                      <h3 className="font-bold text-lg mb-3">Natural Stone (Marble, Travertine)</h3>
                      <p className="text-gray-700 mb-3">Natural stone brings luxury and uniqueness—no two tiles are identical. Marble is classic and elegant; travertine has a rustic, textured finish.</p>
                      <p className="text-gray-600 text-sm"><strong>Installation challenge:</strong> Stone is porous and can stain if not sealed properly. We seal before grouting, use white adhesive (grey shows through), and handle with extreme care to avoid chips.</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-blue-500">
                  <div className="flex items-start gap-4">
                    <span className="material-icons-outlined text-blue-600 text-3xl">apps</span>
                    <div>
                      <h3 className="font-bold text-lg mb-3">Ceramic Tiles</h3>
                      <p className="text-gray-700 mb-3">Traditional ceramic tiles are versatile, affordable, and available in endless colors and patterns. Perfect for walls and low-traffic floors.</p>
                      <p className="text-gray-600 text-sm"><strong>Installation tip:</strong> Ceramic is softer than porcelain, so we use diamond blades for clean cuts and avoid over-tightening when drilling for fixtures.</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-purple-500">
                  <div className="flex items-start gap-4">
                    <span className="material-icons-outlined text-purple-600 text-3xl">auto_awesome_mosaic</span>
                    <div>
                      <h3 className="font-bold text-lg mb-3">Mosaic & Feature Tiles</h3>
                      <p className="text-gray-700 mb-3">Small mosaic tiles (often on mesh backing) create intricate patterns and are perfect for feature walls, niches, and borders.</p>
                      <p className="text-gray-600 text-sm"><strong>Installation challenge:</strong> Mosaics require patience and precision. We ensure the mesh backing is fully adhered, grout lines are consistent, and patterns align perfectly across sheets.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-8 text-center">
                Our Tiling Process: The Details That Matter
              </h2>
              <p className="text-gray-600 text-center mb-12">
                Here's what separates professional tiling from DIY disasters—and why our 104 five-star reviews consistently mention "perfect finish" and "laser-level precision":
              </p>
              <div className="space-y-8">
                <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-teal-600">
                  <div className="flex items-start gap-4">
                    <span className="material-icons-outlined text-teal-600 text-3xl flex-shrink-0">straighten</span>
                    <div>
                      <h3 className="font-bold text-xl mb-3">1. Laser-Level Precision</h3>
                      <p className="text-gray-700 mb-2">We use laser levels (not spirit levels) to ensure every tile is perfectly aligned—horizontally, vertically, and in plane with adjacent tiles.</p>
                      <p className="text-gray-600 text-sm"><strong>Why it matters:</strong> Even 1mm of deviation becomes obvious when light hits the tiles at an angle. Laser levels eliminate human error and ensure a flawless finish.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-teal-600">
                  <div className="flex items-start gap-4">
                    <span className="material-icons-outlined text-teal-600 text-3xl flex-shrink-0">space_bar</span>
                    <div>
                      <h3 className="font-bold text-xl mb-3">2. Perfect Grout Lines & Spacing</h3>
                      <p className="text-gray-700 mb-2">We use tile spacers (typically 2-3mm for walls, 3-5mm for floors) to ensure consistent grout lines. But spacers alone aren't enough—we also check alignment by eye and adjust as needed.</p>
                      <p className="text-gray-600 text-sm"><strong>The secret:</strong> We work from the center outward, ensuring symmetry. If a cut tile is needed, it goes in the least visible corner—never in the middle of a wall.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-teal-600">
                  <div className="flex items-start gap-4">
                    <span className="material-icons-outlined text-teal-600 text-3xl flex-shrink-0">pattern</span>
                    <div>
                      <h3 className="font-bold text-xl mb-3">3. Expert Pattern Matching</h3>
                      <p className="text-gray-700 mb-2">For tiles with patterns (wood-effect, marble-look, or geometric designs), we dry-lay the tiles first to ensure patterns flow naturally and veining matches across tiles.</p>
                      <p className="text-gray-600 text-sm"><strong>Pro tip:</strong> We number the backs of tiles during dry-lay so we install them in the correct order. This prevents mismatched patterns that scream "amateur work."</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-teal-600">
                  <div className="flex items-start gap-4">
                    <span className="material-icons-outlined text-teal-600 text-3xl flex-shrink-0">water_drop</span>
                    <div>
                      <h3 className="font-bold text-xl mb-3">4. Proper Waterproofing Preparation</h3>
                      <p className="text-gray-700 mb-2">Before any tiles go down, we ensure the substrate is properly waterproofed (tanking membrane for wet areas) and primed. Tiles are only as good as what's underneath them.</p>
                      <p className="text-gray-600 text-sm"><strong>Common mistake:</strong> Tiling directly onto plasterboard in wet areas. We always tank first, then tile—preventing water damage and mold growth behind the tiles.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-teal-600">
                  <div className="flex items-start gap-4">
                    <span className="material-icons-outlined text-teal-600 text-3xl flex-shrink-0">science</span>
                    <div>
                      <h3 className="font-bold text-xl mb-3">5. Premium Adhesives & Grouts</h3>
                      <p className="text-gray-700 mb-2">We use flexible, waterproof adhesive (not cheap cement-based adhesive) and epoxy or polymer-modified grout. These materials accommodate movement and resist staining.</p>
                      <p className="text-gray-600 text-sm"><strong>Why it matters:</strong> Buildings move (thermal expansion, settling). Flexible adhesive prevents tiles from cracking. Epoxy grout stays white and doesn't absorb water or stains.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-teal-600">
                  <div className="flex items-start gap-4">
                    <span className="material-icons-outlined text-teal-600 text-3xl flex-shrink-0">crop_square</span>
                    <div>
                      <h3 className="font-bold text-xl mb-3">6. Attention to Corners & Edges</h3>
                      <p className="text-gray-700 mb-2">Internal corners get silicone (not grout) to allow for movement. External corners get metal or PVC trim for protection. All cuts are made with diamond blades for clean, chip-free edges.</p>
                      <p className="text-gray-600 text-sm"><strong>The finish:</strong> We polish cut edges, seal natural stone, and clean off all adhesive residue before grouting. The result? A finish that looks like it was always meant to be there.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-slate-100">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-6 text-center">
                Where We Provide Tiling Services
              </h2>
              <p className="text-gray-600 text-center mb-8">
                We provide luxury tiling services across South London and Surrey. Each location page shows our local work and provides area-specific contact options:
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <Link href="/locations/luxury-bathrooms-dulwich-se21" className="text-teal-600 hover:text-teal-700 hover:underline">
                  Our Dulwich team
                </Link>
                <Link href="/locations/bathroom-fitters-esher-kt10" className="text-teal-600 hover:text-teal-700 hover:underline">
                  Serving Esher KT10
                </Link>
                <Link href="/locations/bathroom-fitters-streatham-sw16" className="text-teal-600 hover:text-teal-700 hover:underline">
                  Recent work in Streatham
                </Link>
                <Link href="/locations/luxury-bathrooms-cobham-kt11" className="text-teal-600 hover:text-teal-700 hover:underline">
                  Cobham projects
                </Link>
                <Link href="/locations/bathroom-fitters-wimbledon-sw19" className="text-teal-600 hover:text-teal-700 hover:underline">
                  Working in Wimbledon
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

        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h3 className="font-playfair text-2xl font-bold mb-6 text-center">Learn About Our Other Services</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Link href="/services/full-bathroom-renovations" className="p-6 border border-gray-200 rounded-lg hover:border-teal-600 hover:shadow-lg transition-all">
                  <h4 className="font-bold text-lg mb-2">Our Bathroom Renovation Process</h4>
                  <p className="text-gray-600 text-sm">See how we handle complete bathroom transformations</p>
                </Link>
                <Link href="/services/wet-room-installations" className="p-6 border border-gray-200 rounded-lg hover:border-teal-600 hover:shadow-lg transition-all">
                  <h4 className="font-bold text-lg mb-2">How We Install Wet Rooms</h4>
                  <p className="text-gray-600 text-sm">Learn about our waterproofing and drainage approach</p>
                </Link>
                <Link href="/services/structural-building-repairs" className="p-6 border border-gray-200 rounded-lg hover:border-teal-600 hover:shadow-lg transition-all">
                  <h4 className="font-bold text-lg mb-2">Structural Alterations Guide</h4>
                  <p className="text-gray-600 text-sm">Understanding RSJ beams and knock-throughs</p>
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
