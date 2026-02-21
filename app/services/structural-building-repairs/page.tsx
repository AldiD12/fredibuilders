import Link from 'next/link'
import type { Metadata } from 'next'
import Navigation from '@/app/components/Navigation'
import Footer from '@/app/components/Footer'
import WhatsAppFloatButton from '@/app/components/WhatsAppFloatButton'

export const metadata: Metadata = {
  title: 'Structural Building Repairs Surrey | Foundation & Porch Repairs',
  description: 'Expert structural repairs including sinking porches, foundation work, and subsidence. 15 years experience. British Standard certified builders.',
  keywords: 'structural repairs, foundation repairs, sinking porch, subsidence, building repairs, Surrey builders',
  alternates: {
    canonical: 'https://fredibuilders.co.uk/services/structural-building-repairs'
  }
}

export default function StructuralBuildingRepairs() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-slate-50">
        <section className="bg-gradient-to-br from-teal-600 to-teal-700 text-white py-16 md:py-24">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
                Structural Building Repairs
              </h1>
              <p className="text-lg md:text-xl text-teal-50 mb-8">
                Expert structural solutions from foundation to roof
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
                <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
                  British Standard Certified
                </div>
                <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
                  <span className="font-semibold">15+</span> Years Experience
                </div>
                <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
                  Fully Insured
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-6">
                Expert Structural Solutions
              </h2>
              <p className="text-lg text-gray-600">
                From sinking porches to foundation issues, we provide professional structural repairs that stand the test of time.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-slate-100">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-12 text-center">
                Structural Services
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { icon: 'foundation', title: 'Sinking Porch Repairs', desc: 'Underpinning and foundation work' },
                  { icon: 'home_repair_service', title: 'Foundation Repairs', desc: 'Reinforcement and stabilization' },
                  { icon: 'warning', title: 'Subsidence Repair', desc: 'Investigation and remediation' },
                  { icon: 'construction', title: 'Crack Repair', desc: 'Monitoring and structural repair' },
                  { icon: 'view_week', title: 'Lintel Replacement', desc: 'Installation and reinforcement' },
                  { icon: 'water_drop', title: 'Damp Proofing', desc: 'Waterproofing solutions' },
                  { icon: 'add_home', title: 'Structural Alterations', desc: 'Extensions and modifications' },
                  { icon: 'verified', title: 'Building Control', desc: 'Full compliance and certification' }
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
                Our Approach
              </h2>
              <div className="space-y-6">
                {[
                  { num: 1, title: 'Structural Survey', desc: 'Thorough assessment and investigation' },
                  { num: 2, title: 'Detailed Report', desc: 'Photos and recommendations' },
                  { num: 3, title: 'Transparent Quote', desc: 'No hidden costs' },
                  { num: 4, title: 'Professional Execution', desc: 'To British Standards' },
                  { num: 5, title: 'Building Control', desc: 'Approval where required' },
                  { num: 6, title: 'Guarantee', desc: 'On all structural work' }
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

        <section className="py-16 bg-slate-100">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-playfair text-3xl font-bold mb-8 text-center">
                Structural Repairs Across
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <Link href="/locations/bathroom-fitters-streatham-sw16" className="text-teal-600 hover:text-teal-700 hover:underline">
                  Streatham SW16
                </Link>
                <Link href="/locations/bathroom-renovations-purley-cr8" className="text-teal-600 hover:text-teal-700 hover:underline">
                  Purley CR8
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

        <section className="py-16 bg-teal-600 text-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-6">
              Concerned About Structural Issues?
            </h2>
            <p className="text-xl text-teal-50 mb-8 max-w-2xl mx-auto">
              Get a professional assessment and honest advice
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="inline-block bg-white text-teal-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Book Free Survey
              </Link>
              <a href="tel:+447468451511" className="inline-block bg-teal-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-teal-800 transition-colors">
                Call: 07468 451511
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
