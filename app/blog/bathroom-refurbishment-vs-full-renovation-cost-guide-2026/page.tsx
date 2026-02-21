import Link from 'next/link'
import type { Metadata } from 'next'
import Navigation from '@/app/components/Navigation'
import Footer from '@/app/components/Footer'

export const metadata: Metadata = {
  title: 'Bathroom Refurbishment vs Full Renovation: Cost Guide 2026 | Fredi Builders',
  description: 'Complete cost breakdown for bathroom refurbishment vs full renovation in 2026. Expert advice from 15 years experience and 104 five-star reviews.',
  keywords: 'bathroom refurbishment cost, bathroom renovation cost, bathroom cost guide 2026, refurbishment vs renovation',
  alternates: {
    canonical: 'https://fredibuilders.co.uk/blog/bathroom-refurbishment-vs-full-renovation-cost-guide-2026'
  }
}

export default function CostGuide2026() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-white">
        {/* Article Header */}
        <article className="py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              {/* Breadcrumb */}
              <div className="flex items-center gap-2 text-sm text-gray-600 mb-8">
                <Link href="/" className="hover:text-teal-600">Home</Link>
                <span className="material-icons-outlined text-xs">chevron_right</span>
                <Link href="/blog" className="hover:text-teal-600">Blog</Link>
                <span className="material-icons-outlined text-xs">chevron_right</span>
                <span className="text-gray-900">Cost Guide 2026</span>
              </div>

              {/* Article Meta */}
              <div className="flex items-center gap-4 text-sm text-gray-600 mb-6">
                <span className="flex items-center gap-1">
                  <span className="material-icons-outlined text-teal-600 text-base">person</span>
                  Fredi Builders
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <span className="material-icons-outlined text-teal-600 text-base">calendar_today</span>
                  Updated February 2026
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <span className="material-icons-outlined text-teal-600 text-base">schedule</span>
                  8 min read
                </span>
              </div>

              <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-6 text-slate-900">
                Bathroom Refurbishment vs Full Renovation: Cost Guide 2026
              </h1>

              <section className="prose prose-lg max-w-none">
                <p className="text-xl text-gray-700 leading-relaxed mb-12 border-l-4 border-teal-600 pl-6 py-2 bg-teal-50">
                  Deciding between a bathroom refurbishment and a full renovation? This guide breaks down the costs, timelines, and helps you make the right choice based on 15 years of experience and 104 completed projects.
                </p>

                <h2 className="font-playfair text-3xl font-bold mt-12 mb-6 text-slate-900">What's the Difference?</h2>
                
                <div className="bg-slate-50 rounded-lg p-8 mb-8">
                  <h3 className="font-bold text-2xl mb-4 text-teal-600 flex items-center gap-2">
                    <span className="material-icons-outlined">refresh</span>
                    Bathroom Refurbishment
                  </h3>
                  <p className="mb-4 text-gray-700">A refurbishment updates your existing bathroom layout without major structural changes:</p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="material-icons-outlined text-teal-600 text-sm mt-1">check_circle</span>
                      <span>Replacing fixtures (toilet, sink, bath/shower)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="material-icons-outlined text-teal-600 text-sm mt-1">check_circle</span>
                      <span>New tiling over existing surfaces (where possible)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="material-icons-outlined text-teal-600 text-sm mt-1">check_circle</span>
                      <span>Updating lighting and accessories</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="material-icons-outlined text-teal-600 text-sm mt-1">check_circle</span>
                      <span>Repainting or re-grouting</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="material-icons-outlined text-teal-600 text-sm mt-1">check_circle</span>
                      <span>Keeping the same layout and plumbing positions</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-teal-50 rounded-lg p-8 mb-8">
                  <h3 className="font-bold text-2xl mb-4 text-teal-600 flex items-center gap-2">
                    <span className="material-icons-outlined">construction</span>
                    Full Bathroom Renovation
                  </h3>
                  <p className="mb-4 text-gray-700">A renovation involves complete transformation:</p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="material-icons-outlined text-teal-600 text-sm mt-1">check_circle</span>
                      <span>Complete strip-out to bare walls</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="material-icons-outlined text-teal-600 text-sm mt-1">check_circle</span>
                      <span>Moving plumbing and electrical</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="material-icons-outlined text-teal-600 text-sm mt-1">check_circle</span>
                      <span>Changing the layout entirely</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="material-icons-outlined text-teal-600 text-sm mt-1">check_circle</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="material-icons-outlined text-teal-600 text-sm mt-1">check_circle</span>
                      <span>All new fixtures and fittings</span>
                    </li>
                  </ul>
                </div>

                <h2 className="font-playfair text-3xl font-bold mt-12 mb-6 text-slate-900">Cost Breakdown 2026</h2>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-white border-2 border-slate-200 rounded-lg p-6">
                    <h3 className="font-bold text-xl mb-4 text-slate-900 flex items-center gap-2">
                      <span className="material-icons-outlined text-teal-600">refresh</span>
                      Bathroom Refurbishment Costs
                    </h3>
                    <ul className="space-y-3 mb-4">
                      <li className="flex justify-between items-center pb-2 border-b border-slate-100">
                        <span className="text-gray-700">Small bathroom (under 5m²)</span>
                        <span className="font-bold text-teal-600">£2,000 - £4,000</span>
                      </li>
                      <li className="flex justify-between items-center pb-2 border-b border-slate-100">
                        <span className="text-gray-700">Medium bathroom (5-8m²)</span>
                        <span className="font-bold text-teal-600">£3,500 - £6,000</span>
                      </li>
                      <li className="flex justify-between items-center">
                        <span className="text-gray-700">Large bathroom (8m²+)</span>
                        <span className="font-bold text-teal-600">£5,000 - £8,000</span>
                      </li>
                    </ul>
                    <p className="text-sm text-gray-600 flex items-center gap-2">
                      <span className="material-icons-outlined text-base">schedule</span>
                      Timeline: 3-5 days
                    </p>
                  </div>

                  <div className="bg-teal-50 border-2 border-teal-200 rounded-lg p-6">
                    <h3 className="font-bold text-xl mb-4 text-slate-900 flex items-center gap-2">
                      <span className="material-icons-outlined text-teal-600">construction</span>
                      Full Renovation Costs
                    </h3>
                    <ul className="space-y-3 mb-4">
                      <li className="flex justify-between items-center pb-2 border-b border-teal-100">
                        <span className="text-gray-700">Small bathroom</span>
                        <span className="font-bold text-teal-600">£4,000 - £7,000</span>
                      </li>
                      <li className="flex justify-between items-center pb-2 border-b border-teal-100">
                        <span className="text-gray-700">Medium bathroom</span>
                        <span className="font-bold text-teal-600">£6,000 - £10,000</span>
                      </li>
                      <li className="flex justify-between items-center">
                        <span className="text-gray-700">Large bathroom</span>
                        <span className="font-bold text-teal-600">£8,000 - £15,000+</span>
                      </li>
                    </ul>
                    <p className="text-sm text-gray-600 flex items-center gap-2">
                      <span className="material-icons-outlined text-base">schedule</span>
                      Timeline: 7-14 days
                    </p>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-lg p-8 mb-8">
                  <h3 className="font-bold text-xl mb-4 flex items-center gap-2">
                    <span className="material-icons-outlined text-teal-400">star</span>
                    Premium/Luxury Additions
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex justify-between items-center pb-3 border-b border-slate-700">
                      <span>Wet room conversion</span>
                      <span className="font-bold text-teal-400">+£2,000 - £5,000</span>
                    </li>
                    <li className="flex justify-between items-center pb-3 border-b border-slate-700">
                      <span>Underfloor heating</span>
                      <span className="font-bold text-teal-400">+£800 - £1,500</span>
                    </li>
                    <li className="flex justify-between items-center pb-3 border-b border-slate-700">
                      <span>High-end fixtures</span>
                      <span className="font-bold text-teal-400">+£1,000 - £3,000</span>
                    </li>
                    <li className="flex justify-between items-center">
                      <span>Natural stone tiling</span>
                      <span className="font-bold text-teal-400">+£1,500 - £4,000</span>
                    </li>
                  </ul>
                </div>

                <h2 className="font-playfair text-3xl font-bold mt-12 mb-6 text-slate-900">Which Should You Choose?</h2>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-slate-50 rounded-lg p-6">
                    <h3 className="font-bold text-xl mb-4 text-slate-900">Choose Refurbishment If:</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2 text-gray-700">
                        <span className="material-icons-outlined text-teal-600 text-sm mt-1">check</span>
                        <span>Your layout works well</span>
                      </li>
                      <li className="flex items-start gap-2 text-gray-700">
                        <span className="material-icons-outlined text-teal-600 text-sm mt-1">check</span>
                        <span>Plumbing is in good condition</span>
                      </li>
                      <li className="flex items-start gap-2 text-gray-700">
                        <span className="material-icons-outlined text-teal-600 text-sm mt-1">check</span>
                        <span>You're on a tighter budget</span>
                      </li>
                      <li className="flex items-start gap-2 text-gray-700">
                        <span className="material-icons-outlined text-teal-600 text-sm mt-1">check</span>
                        <span>You need it done quickly</span>
                      </li>
                      <li className="flex items-start gap-2 text-gray-700">
                        <span className="material-icons-outlined text-teal-600 text-sm mt-1">check</span>
                        <span>The bathroom is structurally sound</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-teal-50 rounded-lg p-6">
                    <h3 className="font-bold text-xl mb-4 text-slate-900">Choose Full Renovation If:</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2 text-gray-700">
                        <span className="material-icons-outlined text-teal-600 text-sm mt-1">check</span>
                        <span>The layout doesn't work for you</span>
                      </li>
                      <li className="flex items-start gap-2 text-gray-700">
                        <span className="material-icons-outlined text-teal-600 text-sm mt-1">check</span>
                        <span>You have plumbing or structural issues</span>
                      </li>
                      <li className="flex items-start gap-2 text-gray-700">
                        <span className="material-icons-outlined text-teal-600 text-sm mt-1">check</span>
                        <span>You want to add features (wet room, underfloor heating)</span>
                      </li>
                      <li className="flex items-start gap-2 text-gray-700">
                        <span className="material-icons-outlined text-teal-600 text-sm mt-1">check</span>
                        <span>The bathroom hasn't been updated in 20+ years</span>
                      </li>
                      <li className="flex items-start gap-2 text-gray-700">
                        <span className="material-icons-outlined text-teal-600 text-sm mt-1">check</span>
                        <span>You're planning to sell soon (ROI is better)</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <h2 className="font-playfair text-3xl font-bold mt-12 mb-6 text-slate-900">Hidden Costs to Watch For</h2>
                <div className="bg-amber-50 border-l-4 border-amber-500 rounded-lg p-6 mb-8">
                  <div className="flex items-start gap-3 mb-4">
                    <span className="material-icons-outlined text-amber-600 text-2xl">warning</span>
                    <p className="text-gray-700 font-medium">Be aware of these potential additional costs:</p>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex justify-between items-start gap-4 text-gray-700">
                      <span>Asbestos removal (pre-2000 homes)</span>
                      <span className="font-bold text-amber-700 whitespace-nowrap">£500 - £2,000</span>
                    </li>
                    <li className="flex justify-between items-start gap-4 text-gray-700">
                      <span>Structural repairs discovered during strip-out</span>
                      <span className="font-bold text-amber-700 whitespace-nowrap">£500 - £3,000</span>
                    </li>
                    <li className="flex justify-between items-start gap-4 text-gray-700">
                      <span>Upgrading electrical to current regulations</span>
                      <span className="font-bold text-amber-700 whitespace-nowrap">£300 - £800</span>
                    </li>
                    <li className="flex justify-between items-start gap-4 text-gray-700">
                      <span>Waste removal and skip hire</span>
                      <span className="font-bold text-amber-700 whitespace-nowrap">£200 - £400</span>
                    </li>
                    <li className="text-gray-700">
                      Temporary bathroom facilities during work
                    </li>
                  </ul>
                </div>

                <h2 className="font-playfair text-3xl font-bold mt-12 mb-6 text-slate-900">Return on Investment</h2>
                <div className="bg-green-50 rounded-lg p-8 mb-8">
                  <p className="text-lg text-gray-700 mb-6">According to 2026 property data:</p>
                  <div className="grid md:grid-cols-3 gap-6 mb-6">
                    <div className="bg-white rounded-lg p-6 text-center">
                      <div className="text-4xl font-bold text-green-600 mb-2">70-80%</div>
                      <div className="text-sm text-gray-600">Bathroom Refurbishment ROI</div>
                    </div>
                    <div className="bg-white rounded-lg p-6 text-center border-2 border-green-500">
                      <div className="text-4xl font-bold text-green-600 mb-2">85-95%</div>
                      <div className="text-sm text-gray-600">Full Renovation ROI</div>
                    </div>
                    <div className="bg-white rounded-lg p-6 text-center">
                      <div className="text-4xl font-bold text-green-600 mb-2">60-75%</div>
                      <div className="text-sm text-gray-600">Luxury Bathroom (£15k+) ROI</div>
                    </div>
                  </div>
                  <p className="text-gray-700 flex items-start gap-2">
                    <span className="material-icons-outlined text-green-600 mt-1">trending_up</span>
                    <span>A well-executed bathroom renovation can add <strong>£10,000-£20,000</strong> to your property value.</span>
                  </p>
                </div>

                <h2 className="font-playfair text-3xl font-bold mt-12 mb-6 text-slate-900">Expert Advice from 104 Projects</h2>
                <div className="bg-teal-600 text-white rounded-lg p-8 mb-8">
                  <p className="text-lg mb-6">After completing 104 bathroom projects, here's what we've learned:</p>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <span className="material-icons-outlined text-teal-200 text-xl mt-1">water_drop</span>
                      <span>Don't cheap out on waterproofing - it's the most expensive thing to fix later</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="material-icons-outlined text-teal-200 text-xl mt-1">grid_view</span>
                      <span>Invest in quality tiling - it's what you see every day</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="material-icons-outlined text-teal-200 text-xl mt-1">accessibility</span>
                      <span>Consider future needs (aging in place, resale value)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="material-icons-outlined text-teal-200 text-xl mt-1">request_quote</span>
                      <span>Get multiple quotes but don't always choose the cheapest</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="material-icons-outlined text-teal-200 text-xl mt-1">star</span>
                      <span>Check reviews - our 104 five-star reviews didn't happen by accident</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-lg p-8 md:p-12 text-center mb-12">
                  <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4">Get Your Accurate Quote</h2>
                  <p className="text-xl text-gray-300 mb-8">Every bathroom is different. We provide free, no-obligation quotes with transparent pricing.</p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link 
                      href="/contact" 
                      className="inline-flex items-center justify-center gap-2 bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors"
                    >
                      <span className="material-icons-outlined">request_quote</span>
                      Request Free Quote
                    </Link>
                    <a 
                      href="tel:+447468451511"
                      className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border-2 border-white/30 text-white px-8 py-4 rounded-lg font-semibold transition-colors"
                    >
                      <span className="material-icons-outlined">call</span>
                      Call: 07468 451511
                    </a>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mt-12">
                  <div>
                    <h3 className="font-bold text-xl mb-4 text-slate-900 flex items-center gap-2">
                      <span className="material-icons-outlined text-teal-600">build</span>
                      Our Services
                    </h3>
                    <ul className="space-y-2">
                      <li>
                        <Link href="/services/full-bathroom-renovations" className="text-teal-600 hover:text-teal-700 hover:underline flex items-center gap-2">
                          <span className="material-icons-outlined text-sm">arrow_forward</span>
                          Full Bathroom Renovations
                        </Link>
                      </li>
                      <li>
                        <Link href="/services/wet-room-installations" className="text-teal-600 hover:text-teal-700 hover:underline flex items-center gap-2">
                          <span className="material-icons-outlined text-sm">arrow_forward</span>
                          Wet Room Installations
                        </Link>
                      </li>
                      <li>
                        <Link href="/services/luxury-tiling-services" className="text-teal-600 hover:text-teal-700 hover:underline flex items-center gap-2">
                          <span className="material-icons-outlined text-sm">arrow_forward</span>
                          Luxury Tiling Services
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-bold text-xl mb-4 text-slate-900 flex items-center gap-2">
                      <span className="material-icons-outlined text-teal-600">location_on</span>
                      Areas We Serve
                    </h3>
                    <ul className="space-y-2">
                      <li>
                        <Link href="/locations/bathroom-fitters-streatham-sw16" className="text-teal-600 hover:text-teal-700 hover:underline flex items-center gap-2">
                          <span className="material-icons-outlined text-sm">arrow_forward</span>
                          Streatham SW16
                        </Link>
                      </li>
                      <li>
                        <Link href="/locations/bathroom-renovations-purley-cr8" className="text-teal-600 hover:text-teal-700 hover:underline flex items-center gap-2">
                          <span className="material-icons-outlined text-sm">arrow_forward</span>
                          Purley CR8
                        </Link>
                      </li>
                      <li>
                        <Link href="/locations/luxury-bathrooms-dulwich-se21" className="text-teal-600 hover:text-teal-700 hover:underline flex items-center gap-2">
                          <span className="material-icons-outlined text-sm">arrow_forward</span>
                          Dulwich SE21
                        </Link>
                      </li>
                      <li>
                        <Link href="/locations/builders-in-leatherhead-kt22" className="text-teal-600 hover:text-teal-700 hover:underline flex items-center gap-2">
                          <span className="material-icons-outlined text-sm">arrow_forward</span>
                          Leatherhead KT22
                        </Link>
                      </li>
                      <li>
                        <Link href="/locations/bathroom-specialists-thornton-heath-cr7" className="text-teal-600 hover:text-teal-700 hover:underline flex items-center gap-2">
                          <span className="material-icons-outlined text-sm">arrow_forward</span>
                          Thornton Heath CR7
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  )
}
