import Link from 'next/link'
import type { Metadata } from 'next'
import Navigation from '@/app/components/Navigation'
import Footer from '@/app/components/Footer'
import WhatsAppFloatButton from '@/app/components/WhatsAppFloatButton'

export const metadata: Metadata = {
  title: 'Luxury Tiling Services Surrey & South London | 104 Five-Star Reviews',
  description: 'Expert luxury tiling for bathrooms, kitchens, and floors. 104 five-star reviews prove our craftsmanship. Porcelain, ceramic, natural stone specialists.',
  keywords: 'luxury tiling, bathroom tiling, kitchen tiling, porcelain tiles, natural stone, Surrey tiler',
  alternates: {
    canonical: 'https://fredibuilders.co.uk/services/luxury-tiling-services'
  }
}

export default function LuxuryTilingServices() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-slate-50">
        <section className="bg-gradient-to-br from-teal-600 to-teal-700 text-white py-16 md:py-24">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
                Luxury Tiling Services
              </h1>
              <p className="text-lg md:text-xl text-teal-50 mb-8">
                Premium tiling craftsmanship backed by 104 five-star reviews
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
                Premium Tiling Craftsmanship
              </h2>
              <p className="text-lg text-gray-600">
                Our 104 five-star reviews speak to one thing above all: exceptional tiling work. From intricate mosaics to large-format porcelain, we deliver perfection.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-slate-100">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-12 text-center">
                Tile Types We Specialize In
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { icon: 'grid_view', title: 'Large-Format Porcelain', desc: 'Up to 1200x600mm tiles for seamless finishes' },
                  { icon: 'landscape', title: 'Natural Stone', desc: 'Marble, travertine, and slate specialists' },
                  { icon: 'apps', title: 'Ceramic Tiles', desc: 'Wall and floor ceramic in all styles' },
                  { icon: 'auto_awesome_mosaic', title: 'Mosaic & Feature Tiles', desc: 'Intricate patterns and designs' },
                  { icon: 'deck', title: 'Wood-Effect Porcelain', desc: 'Modern wood-look tiles' },
                  { icon: 'thermostat', title: 'Underfloor Heating', desc: 'Compatible installation' }
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
              <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-12 text-center">
                Why Our Tiling Stands Out
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  'Laser-level precision',
                  'Perfect grout lines and spacing',
                  'Expert pattern matching',
                  'Proper waterproofing preparation',
                  'Premium adhesives and grouts',
                  'Attention to corners and edges'
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
              <h2 className="font-playfair text-3xl font-bold mb-8 text-center">
                Luxury Tiling Services Available In
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <Link href="/locations/luxury-bathrooms-dulwich-se21" className="text-teal-600 hover:text-teal-700 hover:underline">
                  Dulwich SE21
                </Link>
                <Link href="/locations/bathroom-fitters-streatham-sw16" className="text-teal-600 hover:text-teal-700 hover:underline">
                  Streatham SW16
                </Link>
                <Link href="/locations/bathroom-renovations-purley-cr8" className="text-teal-600 hover:text-teal-700 hover:underline">
                  Purley CR8
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
              Ready for Perfect Tiling?
            </h2>
            <p className="text-xl text-teal-50 mb-8 max-w-2xl mx-auto">
              Get your free, no-obligation quote today
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="inline-block bg-white text-teal-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Request Free Quote
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
                <Link href="/services/full-bathroom-renovations" className="p-6 border border-gray-200 rounded-lg hover:border-teal-600 hover:shadow-lg transition-all">
                  <h4 className="font-bold text-lg mb-2">Full Bathroom Renovations</h4>
                  <p className="text-gray-600 text-sm">Complete transformations</p>
                </Link>
                <Link href="/services/wet-room-installations" className="p-6 border border-gray-200 rounded-lg hover:border-teal-600 hover:shadow-lg transition-all">
                  <h4 className="font-bold text-lg mb-2">Wet Room Installations</h4>
                  <p className="text-gray-600 text-sm">Modern accessible wet rooms</p>
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
