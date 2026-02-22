import Link from 'next/link'
import type { Metadata } from 'next'
import Navigation from '@/app/components/Navigation'
import Footer from '@/app/components/Footer'
import WhatsAppFloatButton from '@/app/components/WhatsAppFloatButton'

export const metadata: Metadata = {
  title: 'How We Create Accessible Bathrooms: Design & Installation Process',
  description: 'Our complete approach to accessible bathroom design: person-centered assessment, mobility solutions, safety features, and dignity-focused installations. Learn our 7-step process.',
  keywords: 'accessible bathroom design, mobility bathroom process, wet room installation, walk-in shower guide, grab rails placement, disability bathroom planning',
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
                How We Create Accessible Bathrooms
              </h1>
              <p className="text-lg md:text-xl text-teal-50 mb-8">
                Our person-centered approach to designing bathrooms that prioritize safety, dignity, and independence
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
            <div className="max-w-4xl mx-auto">
              <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-6 text-center">
                Why Person-Centered Design Matters
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Every accessible bathroom we create starts with understanding the individual. No two people have identical mobility needs, transfer techniques, or daily routines. That's why we reject one-size-fits-all solutions in favor of truly personalized design.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Our approach combines occupational therapy principles with construction expertise. We consider not just current needs but future requirements, ensuring the bathroom remains functional as circumstances change. This forward-thinking design prevents costly modifications later.
              </p>
              <p className="text-lg text-gray-600">
                The result is a bathroom that feels like a natural part of the home—not a clinical space—while providing the safety features and accessibility required for independent living.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-slate-100">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-12 text-center">
                Our 7-Step Accessible Bathroom Process
              </h2>
              
              <div className="space-y-8">
                <div className="bg-white p-8 rounded-lg shadow-sm">
                  <div className="flex items-start gap-4 mb-4">
                    <span className="bg-teal-600 text-white font-bold text-xl w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">1</span>
                    <h3 className="font-bold text-2xl text-gray-900">Initial Needs Assessment</h3>
                  </div>
                  <p className="text-gray-700 mb-4 ml-14">
                    We begin with a comprehensive home visit to understand your specific requirements. This isn't just about measuring the space—it's about understanding how you move through it.
                  </p>
                  <div className="ml-14 space-y-2 text-gray-600">
                    <p><strong>What we assess:</strong> Current mobility aids (wheelchair dimensions, walker width), transfer techniques (standing, sliding, hoisting), caregiver access requirements, daily bathroom routine and timing, future mobility considerations, and personal style preferences.</p>
                    <p><strong>Why it matters:</strong> A wheelchair user who transfers independently needs different grab rail placement than someone who uses a hoist. We map these specifics to ensure every fixture serves a purpose.</p>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-lg shadow-sm">
                  <div className="flex items-start gap-4 mb-4">
                    <span className="bg-teal-600 text-white font-bold text-xl w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">2</span>
                    <h3 className="font-bold text-2xl text-gray-900">Space Planning & Layout Design</h3>
                  </div>
                  <p className="text-gray-700 mb-4 ml-14">
                    We create detailed floor plans that prioritize circulation space and turning circles. British Standard BS 8300 recommends 1500mm diameter turning circles for wheelchairs, but we adjust based on your specific mobility aid.
                  </p>
                  <div className="ml-14 space-y-2 text-gray-600">
                    <p><strong>Key considerations:</strong> Door width (minimum 800mm clear opening), threshold removal for level access, fixture positioning for optimal reach zones, emergency egress planning, and caregiver positioning space.</p>
                    <p><strong>Common solutions:</strong> We often recommend wet room conversions for maximum accessibility—no shower tray means no trip hazard. For smaller spaces, corner installations maximize usable floor area while maintaining turning radius.</p>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-lg shadow-sm">
                  <div className="flex items-start gap-4 mb-4">
                    <span className="bg-teal-600 text-white font-bold text-xl w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">3</span>
                    <h3 className="font-bold text-2xl text-gray-900">Safety Feature Specification</h3>
                  </div>
                  <p className="text-gray-700 mb-4 ml-14">
                    Every safety feature is positioned based on your specific transfer technique and reach range. Generic placement often fails because it doesn't account for individual biomechanics.
                  </p>
                  <div className="ml-14 space-y-2 text-gray-600">
                    <p><strong>Grab rail placement:</strong> We position horizontal rails at 800-900mm height for seated transfers, vertical rails for standing support, and angled rails for combination movements. All rails are load-tested to 150kg minimum.</p>
                    <p><strong>Non-slip flooring:</strong> We specify R11-rated anti-slip tiles (wet barefoot rating) with minimal grout lines to prevent wheelchair catching. Vinyl options offer seamless installation with integrated cove skirting for easy cleaning.</p>
                    <p><strong>Thermostatic controls:</strong> TMV2 or TMV3 certified thermostatic mixing valves prevent scalding by limiting water temperature to 43°C. Essential for users with reduced sensation or cognitive impairment.</p>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-lg shadow-sm">
                  <div className="flex items-start gap-4 mb-4">
                    <span className="bg-teal-600 text-white font-bold text-xl w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">4</span>
                    <h3 className="font-bold text-2xl text-gray-900">Funding & Grant Application Support</h3>
                  </div>
                  <p className="text-gray-700 mb-4 ml-14">
                    Accessible bathroom adaptations can qualify for Disabled Facilities Grants (DFG) up to £30,000. We provide detailed quotes formatted for local authority applications and work directly with occupational therapists.
                  </p>
                  <div className="ml-14 space-y-2 text-gray-600">
                    <p><strong>DFG process:</strong> Your local council's occupational therapist assesses needs, we provide itemized quotes, council approves funding (means-tested), and we complete works to approved specification. Timeline typically 4-6 months from application to completion.</p>
                    <p><strong>Alternative funding:</strong> Private funding with flexible payment plans, insurance claims for accident-related adaptations, charity grants for specific conditions, and local authority discretionary funding for urgent cases.</p>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-lg shadow-sm">
                  <div className="flex items-start gap-4 mb-4">
                    <span className="bg-teal-600 text-white font-bold text-xl w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">5</span>
                    <h3 className="font-bold text-2xl text-gray-900">Structural Preparation & Waterproofing</h3>
                  </div>
                  <p className="text-gray-700 mb-4 ml-14">
                    Level-access wet rooms require meticulous waterproofing and floor preparation. We create gentle gradients (1:80 minimum) toward drainage points while maintaining level thresholds at doorways.
                  </p>
                  <div className="ml-14 space-y-2 text-gray-600">
                    <p><strong>Floor build-up:</strong> We install tanking systems (Schluter, BAL, or similar) across entire floor and 150mm up walls. Linear drains positioned for optimal water flow without creating trip hazards. Floor reinforcement ensures wheelchair load-bearing capacity.</p>
                    <p><strong>Grab rail backing:</strong> All grab rail positions receive 18mm marine ply backing boards between studs, providing secure fixing points that won't pull out under load. Critical for safety—plasterboard alone cannot support transfer forces.</p>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-lg shadow-sm">
                  <div className="flex items-start gap-4 mb-4">
                    <span className="bg-teal-600 text-white font-bold text-xl w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">6</span>
                    <h3 className="font-bold text-2xl text-gray-900">Fixture Installation & Height Adjustment</h3>
                  </div>
                  <p className="text-gray-700 mb-4 ml-14">
                    Standard fixture heights don't work for wheelchair users or those with limited mobility. We customize every installation to your specific reach range and transfer technique.
                  </p>
                  <div className="ml-14 space-y-2 text-gray-600">
                    <p><strong>Sink positioning:</strong> Wall-hung basins at 750-800mm height (vs. standard 850mm) with clear knee space underneath for wheelchair access. Lever taps positioned within 400mm reach zone. Insulated waste pipes prevent leg burns.</p>
                    <p><strong>Toilet height:</strong> Comfort-height WCs (460-480mm vs. standard 400mm) reduce transfer effort. Wall-hung options allow precise height adjustment and easier floor cleaning. Drop-down support rails provide assistance without permanent obstruction.</p>
                    <p><strong>Shower controls:</strong> Positioned 900-1000mm height for seated access, within easy reach from shower seat or wheelchair. Large lever controls easier to operate than twist knobs, especially with reduced dexterity.</p>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-lg shadow-sm">
                  <div className="flex items-start gap-4 mb-4">
                    <span className="bg-teal-600 text-white font-bold text-xl w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">7</span>
                    <h3 className="font-bold text-2xl text-gray-900">Final Adjustments & User Training</h3>
                  </div>
                  <p className="text-gray-700 mb-4 ml-14">
                    Installation completion is just the beginning. We conduct thorough user testing to ensure every element works as intended for your specific needs.
                  </p>
                  <div className="ml-14 space-y-2 text-gray-600">
                    <p><strong>Practical testing:</strong> You (and caregivers) test all transfers, reaches, and movements while we're still on-site. This allows immediate adjustments—moving a grab rail 50mm can make the difference between independence and assistance.</p>
                    <p><strong>Maintenance guidance:</strong> We explain cleaning requirements for anti-slip surfaces, demonstrate thermostatic valve testing, and provide emergency contact procedures. You receive full documentation including fixture specifications and warranty information.</p>
                    <p><strong>Follow-up support:</strong> We schedule a 4-week follow-up to address any adjustments needed after daily use. As needs change over time, we can modify installations without complete renovation.</p>
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
                Common Accessibility Solutions Explained
              </h2>
              
              <div className="space-y-6">
                <div className="border-l-4 border-teal-600 pl-6">
                  <h3 className="font-bold text-xl mb-3">Level-Access Wet Rooms</h3>
                  <p className="text-gray-700 mb-2">
                    The gold standard for accessibility. By removing the shower tray entirely and creating a gentle floor gradient toward a linear drain, we eliminate the single biggest barrier in traditional bathrooms—the threshold.
                  </p>
                  <p className="text-gray-600">
                    Wet rooms work particularly well for wheelchair users, allowing direct roll-in access. The entire floor is waterproofed using tanking systems, with drainage positioned to prevent water pooling while maintaining level access at the doorway.
                  </p>
                </div>

                <div className="border-l-4 border-teal-600 pl-6">
                  <h3 className="font-bold text-xl mb-3">Walk-In Showers with Integrated Seating</h3>
                  <p className="text-gray-700 mb-2">
                    For spaces where full wet room conversion isn't feasible, walk-in showers with low-threshold trays (40mm maximum) provide a middle ground. We integrate fold-down seats or fixed benches at 450-480mm height.
                  </p>
                  <p className="text-gray-600">
                    Seat positioning is critical—too far from controls and you can't reach; too close and transfer becomes difficult. We position based on your dominant hand and transfer direction, ensuring comfortable seated showering.
                  </p>
                </div>

                <div className="border-l-4 border-teal-600 pl-6">
                  <h3 className="font-bold text-xl mb-3">Walk-In Baths</h3>
                  <p className="text-gray-700 mb-2">
                    Walk-in baths feature watertight doors that allow entry without climbing over the bath side. Once inside, the door seals and the bath fills. Ideal for those who want bathing capability but struggle with traditional bath access.
                  </p>
                  <p className="text-gray-600">
                    Important consideration: you must wait for the bath to fill before bathing and drain before exiting. For users who feel cold easily, we recommend models with fast-fill systems and heated backrests. Built-in seats provide stable positioning during bathing.
                  </p>
                </div>

                <div className="border-l-4 border-teal-600 pl-6">
                  <h3 className="font-bold text-xl mb-3">Grab Rail Placement Strategy</h3>
                  <p className="text-gray-700 mb-2">
                    Grab rails only work if they're positioned exactly where you need them during transfers. We map your movement patterns—sitting to standing, wheelchair to toilet, entry to shower—and position rails accordingly.
                  </p>
                  <p className="text-gray-600">
                    Horizontal rails (800-900mm height) assist seated transfers and provide continuous support. Vertical rails help with standing movements. Angled rails (135°) support combination movements. All rails are fixed to structural backing, not just plasterboard, ensuring they can support full body weight during transfers.
                  </p>
                </div>

                <div className="border-l-4 border-teal-600 pl-6">
                  <h3 className="font-bold text-xl mb-3">Comfort-Height Toilets & Support Frames</h3>
                  <p className="text-gray-700 mb-2">
                    Standard toilet height (400mm) requires significant leg strength to stand from. Comfort-height models (460-480mm) reduce the distance you need to rise, making transfers easier and safer.
                  </p>
                  <p className="text-gray-600">
                    We often combine raised toilets with drop-down support rails that provide armrest assistance during transfers but fold away when not needed. This maintains clear circulation space while providing support when required. Wall-hung toilets allow precise height adjustment and easier floor cleaning.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-slate-100">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-8 text-center">
                Understanding Funding Options
              </h2>
              
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="font-bold text-xl mb-3">Disabled Facilities Grants (DFG)</h3>
                  <p className="text-gray-700 mb-3">
                    DFG provides up to £30,000 for essential home adaptations that help disabled people live independently. The grant is means-tested (based on household income) but children and certain benefits recipients receive full funding regardless of income.
                  </p>
                  <p className="text-gray-600 mb-3">
                    <strong>Eligibility:</strong> You must be disabled (as defined by Equality Act 2010), the adaptation must be necessary and appropriate (assessed by occupational therapist), and it must be reasonable and practicable given the property's age and condition.
                  </p>
                  <p className="text-gray-600">
                    <strong>Process timeline:</strong> Initial OT assessment (2-4 weeks), grant application submission (1-2 weeks), council approval (6-8 weeks), contractor quotes and approval (2-4 weeks), installation (2-6 weeks depending on scope). Total timeline typically 4-6 months from first contact to completion.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="font-bold text-xl mb-3">Local Authority Discretionary Funding</h3>
                  <p className="text-gray-700 mb-3">
                    Some councils offer additional funding beyond DFG limits for complex cases or urgent needs. This varies significantly by local authority and is subject to budget availability.
                  </p>
                  <p className="text-gray-600">
                    We work with your council's housing adaptation team to identify all available funding streams. In some cases, combining DFG with discretionary funding can cover more extensive adaptations than DFG alone would permit.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="font-bold text-xl mb-3">Private Funding & Payment Plans</h3>
                  <p className="text-gray-700 mb-3">
                    For those who don't qualify for grants or need adaptations completed more quickly, we offer flexible private funding options. This allows you to proceed without the 4-6 month grant application timeline.
                  </p>
                  <p className="text-gray-600">
                    Payment plans can be structured around your budget, and the work can typically begin within 2-3 weeks of initial assessment. We provide the same quality installation whether funded privately or through grants.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="font-bold text-xl mb-3">Insurance Claims & Charity Grants</h3>
                  <p className="text-gray-700 mb-3">
                    If disability resulted from an accident, your insurance may cover adaptation costs. We provide detailed quotes formatted for insurance claims and can work directly with loss adjusters.
                  </p>
                  <p className="text-gray-600">
                    Condition-specific charities sometimes offer grants for bathroom adaptations. Organizations supporting MS, Parkinson's, stroke recovery, and other conditions may have funding available. We can advise on relevant charities based on your circumstances.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-playfair text-3xl font-bold mb-8 text-center">
                Where We Create Accessible Bathrooms
              </h2>
              <p className="text-gray-600 text-center mb-8">
                We provide accessible bathroom design and installation across South London and Surrey. Each location page shows our local work and provides area-specific contact options:
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <Link href="/locations/bathroom-fitters-streatham-sw16" className="text-teal-600 hover:text-teal-700 hover:underline">
                  Our Streatham team
                </Link>
                <Link href="/locations/bathroom-renovations-purley-cr8" className="text-teal-600 hover:text-teal-700 hover:underline">
                  Serving Purley CR8
                </Link>
                <Link href="/locations/luxury-bathrooms-dulwich-se21" className="text-teal-600 hover:text-teal-700 hover:underline">
                  Recent work in Dulwich
                </Link>
                <Link href="/locations/bathroom-fitters-croydon-cr0" className="text-teal-600 hover:text-teal-700 hover:underline">
                  Croydon projects
                </Link>
                <Link href="/locations/bathroom-renovations-sutton-sm1" className="text-teal-600 hover:text-teal-700 hover:underline">
                  Working in Sutton
                </Link>
                <Link href="/locations/luxury-bathrooms-wimbledon-sw19" className="text-teal-600 hover:text-teal-700 hover:underline">
                  Wimbledon area coverage
                </Link>
                <Link href="/locations" className="text-teal-600 hover:text-teal-700 hover:underline font-bold col-span-2 md:col-span-3 text-center">
                  View All 50+ Areas We Serve →
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-slate-100">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h3 className="font-playfair text-2xl font-bold mb-6 text-center">Related Bathroom Guides</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Link href="/services/wet-room-installations" className="p-6 border border-gray-200 rounded-lg hover:border-teal-600 hover:shadow-lg transition-all bg-white">
                  <h4 className="font-bold text-lg mb-2">How We Install Wet Rooms</h4>
                  <p className="text-gray-600 text-sm">Waterproofing and drainage process explained</p>
                </Link>
                <Link href="/services/full-bathroom-renovations" className="p-6 border border-gray-200 rounded-lg hover:border-teal-600 hover:shadow-lg transition-all bg-white">
                  <h4 className="font-bold text-lg mb-2">How We Renovate Bathrooms</h4>
                  <p className="text-gray-600 text-sm">Complete renovation process guide</p>
                </Link>
                <Link href="/services/luxury-tiling-services" className="p-6 border border-gray-200 rounded-lg hover:border-teal-600 hover:shadow-lg transition-all bg-white">
                  <h4 className="font-bold text-lg mb-2">Our Tiling Techniques</h4>
                  <p className="text-gray-600 text-sm">Learn about precision tiling and materials</p>
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
