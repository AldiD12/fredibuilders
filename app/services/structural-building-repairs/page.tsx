import Link from 'next/link'
import type { Metadata } from 'next'
import Navigation from '@/app/components/Navigation'
import Footer from '@/app/components/Footer'
import WhatsAppFloatButton from '@/app/components/WhatsAppFloatButton'

export const metadata: Metadata = {
  title: 'How We Handle Structural Building Repairs: RSJ Beams & Knock-Throughs | Fredi Builders',
  description: 'Learn about our approach to structural alterations, RSJ steel beam installations, and knock-throughs. Understand Building Control, load calculations, and what makes safe structural work.',
  keywords: 'structural alterations, RSJ beam installation, knock-through, load bearing wall, building control, structural engineer',
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
                How We Handle Structural Alterations
              </h1>
              <p className="text-lg md:text-xl text-teal-50 mb-8">
                Understanding RSJ beams, knock-throughs, and the process of safely removing load-bearing walls
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
                What Is a Structural Knock-Through?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                A knock-through (or structural alteration) involves removing a load-bearing wall to create open-plan living spaces. It's one of the most popular home improvements—but also one of the most complex. Here's what you need to know before you start knocking down walls.
              </p>
              <div className="bg-amber-50 border-l-4 border-amber-500 p-6">
                <p className="text-gray-700">
                  <strong>Critical warning:</strong> Never remove a wall without professional assessment. Load-bearing walls support the weight of the floors and roof above. Remove one incorrectly, and you risk catastrophic structural failure. We've seen DIY disasters that cost £50,000+ to fix.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-slate-100">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-12 text-center">
                Understanding Different Structural Works
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-teal-600">
                  <div className="flex items-start gap-4">
                    <span className="material-icons-outlined text-teal-600 text-3xl">view_week</span>
                    <div>
                      <h3 className="font-bold text-lg mb-3">RSJ Steel Beam Installation</h3>
                      <p className="text-gray-700 mb-3">RSJ (Rolled Steel Joist) beams replace the load-bearing function of a removed wall. They're sized by a structural engineer based on the load they need to support—typically 152mm, 178mm, or 203mm deep.</p>
                      <p className="text-gray-600 text-sm"><strong>Why steel?</strong> Steel is incredibly strong for its size. A 178mm RSJ can support the weight of an entire floor above, allowing you to create wide, open spaces without internal support.</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-blue-500">
                  <div className="flex items-start gap-4">
                    <span className="material-icons-outlined text-blue-600 text-3xl">add_home</span>
                    <div>
                      <h3 className="font-bold text-lg mb-3">Knock-Through (Open Plan Living)</h3>
                      <p className="text-gray-700 mb-3">The most common structural alteration: removing the wall between kitchen and dining room to create an open-plan space. This transforms cramped Victorian terraces into modern, light-filled homes.</p>
                      <p className="text-gray-600 text-sm"><strong>Typical cost:</strong> £3,000-£6,000 including structural engineer, Building Control, RSJ, installation, and making good (plastering, decorating).</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-purple-500">
                  <div className="flex items-start gap-4">
                    <span className="material-icons-outlined text-purple-600 text-3xl">foundation</span>
                    <div>
                      <h3 className="font-bold text-lg mb-3">Underpinning & Foundation Work</h3>
                      <p className="text-gray-700 mb-3">When foundations have settled or subsided, underpinning strengthens them by extending the foundation depth. Common for Victorian properties with shallow foundations or where ground conditions have changed.</p>
                      <p className="text-gray-600 text-sm"><strong>Signs you need it:</strong> Cracks wider than 5mm, doors/windows sticking, visible settlement, or cracks that widen over time.</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-amber-500">
                  <div className="flex items-start gap-4">
                    <span className="material-icons-outlined text-amber-600 text-3xl">construction</span>
                    <div>
                      <h3 className="font-bold text-lg mb-3">Lintel Replacement & Reinforcement</h3>
                      <p className="text-gray-700 mb-3">Lintels support the load above windows and doors. Older properties often have timber lintels that rot over time. We replace them with steel or concrete lintels that last indefinitely.</p>
                      <p className="text-gray-600 text-sm"><strong>Warning signs:</strong> Cracks above windows/doors, sagging brickwork, or visible timber decay. Don't ignore these—they can lead to major structural failure.</p>
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
                Our 6-Step Structural Alteration Process
              </h2>
              <p className="text-gray-600 text-center mb-12">
                Structural work requires careful planning, professional engineering, and Building Control approval. Here's how we ensure every project is safe, legal, and built to last:
              </p>
              <div className="space-y-12">
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-teal-600 text-white rounded-full flex items-center justify-center font-bold text-2xl">
                    1
                  </div>
                  <div>
                    <h3 className="font-bold text-2xl mb-3">Initial Structural Survey</h3>
                    <p className="text-gray-700 mb-4 leading-relaxed">
                      We visit your property to assess the wall you want to remove. Is it load-bearing? What's above it (floor joists, walls, roof)? What's the construction type (brick, block, timber frame)? We take measurements, photos, and notes.
                    </p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      <strong>Key question:</strong> How do you know if a wall is load-bearing? Generally, walls running perpendicular to floor joists are load-bearing. But the only way to be certain is to check the construction and consult a structural engineer.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-teal-600 text-white rounded-full flex items-center justify-center font-bold text-2xl">
                    2
                  </div>
                  <div>
                    <h3 className="font-bold text-2xl mb-3">Structural Engineer Calculations</h3>
                    <p className="text-gray-700 mb-4 leading-relaxed">
                      A chartered structural engineer calculates the load the wall is supporting and specifies the correct RSJ size. They'll produce detailed drawings showing beam size, bearing points (where the beam rests), and any temporary support required during installation.
                    </p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      <strong>Why this matters:</strong> An undersized beam can fail catastrophically. An oversized beam wastes money and may be too heavy to install safely. The engineer gets it exactly right based on British Standards (BS 5950).
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-teal-600 text-white rounded-full flex items-center justify-center font-bold text-2xl">
                    3
                  </div>
                  <div>
                    <h3 className="font-bold text-2xl mb-3">Building Control Notification</h3>
                    <p className="text-gray-700 mb-4 leading-relaxed">
                      We submit the structural engineer's drawings to Building Control (your local council). They review the plans and schedule inspections. This is a legal requirement—work without Building Control approval can make your property unsellable.
                    </p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      <strong>Timeline:</strong> Building Control typically takes 2-3 weeks to review plans. We don't start work until we have approval. Rushing this step is illegal and dangerous.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-teal-600 text-white rounded-full flex items-center justify-center font-bold text-2xl">
                    4
                  </div>
                  <div>
                    <h3 className="font-bold text-2xl mb-3">Temporary Support Installation</h3>
                    <p className="text-gray-700 mb-4 leading-relaxed">
                      Before we remove any bricks, we install Acrow props (adjustable steel supports) to temporarily hold up the structure above. These props transfer the load to the floor below while we work. We typically use 4-6 props for a standard knock-through.
                    </p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      <strong>Safety first:</strong> The props stay in place until the RSJ is fully installed and the padstones (concrete blocks that support the beam ends) have cured. Removing props too early can cause collapse.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-teal-600 text-white rounded-full flex items-center justify-center font-bold text-2xl">
                    5
                  </div>
                  <div>
                    <h3 className="font-bold text-2xl mb-3">RSJ Beam Installation</h3>
                    <p className="text-gray-700 mb-4 leading-relaxed">
                      We carefully remove the wall (brick by brick, not with a sledgehammer), install padstones at each end, and lift the RSJ into position. The beam must sit perfectly level and bear evenly on the padstones. We then build up brickwork around the beam ends and allow the mortar to cure.
                    </p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      <strong>The details:</strong> RSJ beams are heavy (a 3-meter 178mm beam weighs ~70kg). We use lifting equipment and multiple people. The beam is painted with intumescent paint (fire protection) before installation.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-teal-600 text-white rounded-full flex items-center justify-center font-bold text-2xl">
                    6
                  </div>
                  <div>
                    <h3 className="font-bold text-2xl mb-3">Making Good & Building Control Sign-Off</h3>
                    <p className="text-gray-700 mb-4 leading-relaxed">
                      Once the beam is installed and the mortar has cured (typically 7 days), we remove the temporary props. We then "make good"—plastering over the beam, repairing floors/ceilings, and decorating. Building Control inspects the work and issues a completion certificate.
                    </p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      <strong>The certificate:</strong> This proves the work was done legally and to British Standards. You'll need it when you sell your property. Without it, buyers' solicitors will raise concerns and you may need expensive retrospective approval.
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
                    A standard knock-through takes <strong>4-6 weeks</strong> from initial survey to completion. This includes 2-3 weeks for Building Control approval, 1 week for installation, and 1-2 weeks for making good.
                  </p>
                  <p className="text-gray-600 text-sm">
                    The actual installation (removing wall, installing beam) takes 2-3 days. The rest is planning, approval, and finishing.
                  </p>
                </div>

                <div className="p-8 bg-amber-50 rounded-lg border-l-4 border-amber-500">
                  <h3 className="font-bold text-xl mb-4 flex items-center gap-2">
                    <span className="material-icons-outlined text-amber-600">payments</span>
                    Investment Range
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Knock-throughs typically cost <strong>£3,000-£6,000</strong> including structural engineer (£400-£800), Building Control (£300-£500), RSJ and installation (£1,500-£3,000), and making good (£800-£1,700).
                  </p>
                  <p className="text-gray-600 text-sm">
                    Larger openings, complex structures, or difficult access increase costs. We provide detailed, itemized quotes with no hidden fees.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-slate-100">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-6 text-center">
                Find Structural Specialists Near You
              </h2>
              <p className="text-gray-600 text-center mb-8">
                We handle structural alterations across South London and Surrey. Select your area:
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <Link href="/locations/bathroom-fitters-streatham-sw16" className="text-teal-600 hover:text-teal-700 hover:underline">
                  Structural alterations in Streatham
                </Link>
                <Link href="/locations/bathroom-fitters-wimbledon-sw19" className="text-teal-600 hover:text-teal-700 hover:underline">
                  RSJ beams in Wimbledon
                </Link>
                <Link href="/locations/bathroom-fitters-esher-kt10" className="text-teal-600 hover:text-teal-700 hover:underline">
                  Knock-throughs in Esher
                </Link>
                <Link href="/locations/luxury-bathrooms-dulwich-se21" className="text-teal-600 hover:text-teal-700 hover:underline">
                  Structural work in Dulwich
                </Link>
                <Link href="/locations/luxury-bathrooms-cobham-kt11" className="text-teal-600 hover:text-teal-700 hover:underline">
                  Building repairs in Cobham
                </Link>
                <Link href="/locations/bathroom-fitters-croydon-cr0" className="text-teal-600 hover:text-teal-700 hover:underline">
                  Load bearing walls in Croydon
                </Link>
                <Link href="/locations" className="text-teal-600 hover:text-teal-700 hover:underline font-bold col-span-2 md:col-span-3 text-center">
                  View All 50+ Areas We Serve →
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
