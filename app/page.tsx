import Link from 'next/link'
import type { Metadata } from 'next'
import Navigation from './components/Navigation'
import WhatsAppFloatButton from './components/WhatsAppFloatButton'
import Footer from './components/Footer'

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://fredibuilders.co.uk'
  }
}

export default function Home() {
  return (
    <>
      <Navigation />

      {/* Hero Section */}
      <header className="relative h-[90vh] min-h-[700px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            alt="Luxury marble bathroom with walk-in shower - Premium bathroom renovation by Fredi Builders in Surrey"
            className="w-full h-full object-cover object-center"
            src="/images/luxury-marble-bathroom-walk-in-shower.webp"
          />
          {/* Gradient Overlay - Dark at top, transparent at bottom */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-transparent"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10 text-white pt-32 pb-20">
          <div className="max-w-4xl">
            <div className="flex gap-3 mb-8 flex-wrap">
              <span className="px-4 py-1.5 bg-white/15 backdrop-blur-sm rounded-full text-sm font-semibold border border-white/20 flex items-center gap-2">
                <span className="material-icons-outlined text-primary text-base">check_circle</span> Bathroom Renovations
              </span>
              <span className="px-4 py-1.5 bg-white/15 backdrop-blur-sm rounded-full text-sm font-semibold border border-white/20 flex items-center gap-2">
                <span className="material-icons-outlined text-primary text-base">check_circle</span> Wet Rooms
              </span>
            </div>
            <h1 className="font-display font-semibold text-5xl md:text-7xl lg:text-8xl mb-8 leading-[1.1] text-white">
              Luxury Bathroom <br />
              <span className="text-primary font-bold">Renovations</span> &amp; Master Building
            </h1>
            <p className="text-lg md:text-xl text-white mb-12 max-w-2xl leading-relaxed font-light">
              Bespoke Bathrooms &amp; Structural Alterations. From Victorian Terrace renovations in Streatham to Luxury Wet Rooms in Esher.
            </p>
            <div className="flex flex-col items-start gap-4 mb-16">
              <button className="bg-primary hover:bg-primary-hover text-gray-900 font-bold py-5 px-10 rounded shadow-2xl transform hover:-translate-y-1 transition-all duration-200 flex items-center justify-center gap-2 text-lg" aria-label="Get a fixed-price bathroom renovation quote">
                <span className="material-icons-outlined">calendar_today</span>
                Get a Fixed-Price Quote
              </button>
              <p className="text-white/90 text-base font-normal">
                or call our project manager on <a href="tel:07468451511" className="font-bold hover:text-primary transition-colors underline decoration-primary/50" aria-label="Call Fredi Builders on 07468 451511">07468 451511</a>
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Trust Bar - Separate "Island" Section */}
      <section className="bg-slate-50 dark:bg-slate-900 border-y border-gray-200 dark:border-gray-800 py-8">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-4">
            <div className="flex items-center justify-center gap-4">
              <div className="flex items-center justify-center w-14 h-14 rounded-full bg-primary/10">
                <span className="material-icons-outlined text-primary text-2xl">star</span>
              </div>
              <div className="flex flex-col">
                <span className="font-mono text-gray-900 dark:text-white font-bold text-3xl tracking-tight">9.6<span className="text-primary text-xl">/10</span></span>
                <span className="text-xs uppercase tracking-wider text-gray-600 dark:text-gray-400 font-semibold">Checkatrade Score</span>
              </div>
            </div>
            <div className="flex items-center justify-center gap-4">
              <div className="flex items-center justify-center w-14 h-14 rounded-full bg-primary/10">
                <span className="material-icons-outlined text-primary text-2xl">verified</span>
              </div>
              <div className="flex flex-col">
                <span className="font-mono text-gray-900 dark:text-white font-bold text-3xl tracking-tight">15<span className="text-primary text-xl">+</span></span>
                <span className="text-xs uppercase tracking-wider text-gray-600 dark:text-gray-400 font-semibold">Years Experience</span>
              </div>
            </div>
            <div className="flex items-center justify-center gap-4">
              <div className="flex items-center justify-center w-14 h-14 rounded-full bg-primary/10">
                <span className="material-icons-outlined text-primary text-2xl">shield</span>
              </div>
              <div className="flex flex-col">
                <span className="font-mono text-gray-900 dark:text-white font-bold text-3xl tracking-tight">£2<span className="text-primary text-xl">M</span></span>
                <span className="text-xs uppercase tracking-wider text-gray-600 dark:text-gray-400 font-semibold">Fully Insured</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pain & Agitation Section - Address Client Fears */}
      <section className="py-20 md:py-28 bg-white dark:bg-slate-800">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Tired of Unreliable Tradesmen in Surrey &amp; South London?
              </h2>
              <div className="h-1 w-24 bg-primary mx-auto mb-8"></div>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700 dark:text-gray-300 leading-relaxed space-y-6">
              <p className="text-xl text-center mb-8">
                Inviting contractors into your home shouldn't be stressful. Most homeowners in Surrey and South London worry about three things:
              </p>
              
              <div className="grid md:grid-cols-3 gap-8 my-12">
                <div className="text-center">
                  <div className="w-16 h-16 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="material-icons-outlined text-red-600 dark:text-red-400 text-3xl">cleaning_services</span>
                  </div>
                  <h3 className="font-bold text-gray-900 dark:text-white mb-2">Dust &amp; Mess</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Dust damaging expensive furnishings and spreading throughout the house</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="material-icons-outlined text-red-600 dark:text-red-400 text-3xl">schedule</span>
                  </div>
                  <h3 className="font-bold text-gray-900 dark:text-white mb-2">Delays</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Projects dragging on for weeks with no clear completion date</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="material-icons-outlined text-red-600 dark:text-red-400 text-3xl">payments</span>
                  </div>
                  <h3 className="font-bold text-gray-900 dark:text-white mb-2">Hidden Costs</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">The dreaded "extra costs" appearing at the end of the job</p>
                </div>
              </div>
              
              <div className="bg-slate-50 dark:bg-slate-900 border-l-4 border-primary p-8 rounded-r-lg">
                <h3 className="font-display text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  At Fredi Builders, we operate differently.
                </h3>
                <div className="space-y-4 text-gray-700 dark:text-gray-300">
                  <div className="flex items-start gap-3">
                    <span className="material-icons-outlined text-primary text-xl mt-1">check_circle</span>
                    <p><strong>Industrial-grade dust extraction systems</strong> keep your home clean. We seal off work areas with heavy-duty plastic sheeting and vacuum at the end of each day.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="material-icons-outlined text-primary text-xl mt-1">check_circle</span>
                    <p><strong>Fixed timelines with daily progress updates.</strong> We provide a strict schedule in our quote and stay on your project every day until it's 100% complete. We don't juggle multiple jobs.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="material-icons-outlined text-primary text-xl mt-1">check_circle</span>
                    <p><strong>The fixed price we quote is exactly what you pay.</strong> No surprises, no hidden extras, no excuses. Every cost is itemized upfront in our detailed quotation.</p>
                  </div>
                </div>
              </div>
              
              <p className="text-center text-lg font-medium text-gray-900 dark:text-white pt-6">
                We protect every surface with heavy-duty sheeting, arrive punctually at 8:00 AM, and treat your home with the same respect we'd treat our own.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 md:py-28 bg-background-light dark:bg-background-dark">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-start mb-12">
            <span className="h-1 w-16 bg-primary mb-4 block"></span>
            <span className="text-primary font-bold tracking-widest uppercase text-sm mb-2">About Fredi Builders</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-text-light dark:text-text-dark mb-4">
              Your Trusted Renovation <br />
              <span className="text-primary italic font-serif">&amp; Building Specialists</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6 text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
              <p>Fredi Builders represents a legacy of craftsmanship. With over 15 years of experience serving homeowners across South London and Surrey, we have established a reputation for reliability, precision, and architectural excellence.</p>
              <p>Specializing in luxury bathroom installations and complex structural knock-throughs, our team handles every aspect of the build. From the initial removal of old fixtures to the final polish of marble tiles, &apos;The Standard&apos; is not just a slogan—it is our guarantee.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-2 rounded-full text-primary">
                    <span className="material-icons-outlined">verified</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-text-light dark:text-white mb-1">Complete Satisfaction</h4>
                    <p className="text-sm">Guaranteed quality on every bespoke project.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-2 rounded-full text-primary">
                    <span className="material-icons-outlined">engineering</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-text-light dark:text-white mb-1">Expert Craftsmen</h4>
                    <p className="text-sm">Skilled professionals with meticulous attention.</p>
                  </div>
                </div>
              </div>
              <div className="pt-6">
                <button className="bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-200 px-8 py-4 rounded font-bold transition-colors" aria-label="Request a fixed-price bathroom renovation quote">
                  Get a Fixed-Price Quote
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/20 rounded-tl-3xl -z-10"></div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gray-900/10 dark:bg-white/10 rounded-br-3xl -z-10"></div>
              <img
                alt="Modern Bathroom Renovation with White Vanity Unit - Fredi Builders"
                className="w-full h-auto rounded-lg shadow-2xl object-cover"
                src="/images/modern-bathroom-renovation-white-vanity-unit.webp"
              />
              <div className="absolute bottom-8 left-[-20px] bg-gray-900 dark:bg-primary text-white dark:text-gray-900 p-6 rounded shadow-xl max-w-[200px]">
                <h3 className="text-3xl font-display font-bold mb-1">15+</h3>
                <p className="text-sm font-medium opacity-90">Years of Master Building Experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-slate-950 text-white py-32">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center mb-24 text-center">
            <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4">Why Choose Us</span>
            <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
              Excellence in <span className="text-primary font-serif font-bold italic">Every Detail</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-28">
            <div className="group relative p-8 border border-slate-200/10 hover:border-primary/50 transition-colors duration-500 rounded-none bg-transparent">
              <div className="mb-8 inline-flex items-center justify-center w-16 h-16 rounded-full border border-primary/40 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                <span className="material-icons-outlined text-3xl font-light">star</span>
              </div>
              <h3 className="font-bold text-2xl mb-4 text-white">Built to Last</h3>
              <p className="text-slate-400 text-base leading-relaxed font-light">We don&apos;t use cheap plastic fittings. We install solid brass, porcelain, and pressure-tested pipework behind the walls.</p>
            </div>
            <div className="group relative p-8 border border-slate-200/10 hover:border-primary/50 transition-colors duration-500 rounded-none bg-transparent">
              <div className="mb-8 inline-flex items-center justify-center w-16 h-16 rounded-full border border-primary/40 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                <span className="material-icons-outlined text-3xl font-light">verified_user</span>
              </div>
              <h3 className="font-bold text-2xl mb-4 text-white">Fully Insured</h3>
              <p className="text-slate-400 text-base leading-relaxed font-light">Complete peace of mind with comprehensive insurance coverage for all our building projects.</p>
              <p className="text-primary text-xs font-bold mt-2">Public Liability Insurance up to £2 Million</p>
            </div>
            <div className="group relative p-8 border border-slate-200/10 hover:border-primary/50 transition-colors duration-500 rounded-none bg-transparent">
              <div className="mb-8 inline-flex items-center justify-center w-16 h-16 rounded-full border border-primary/40 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                <span className="material-icons-outlined text-3xl font-light">description</span>
              </div>
              <h3 className="font-bold text-2xl mb-4 text-white">Transparent Pricing</h3>
              <p className="text-slate-400 text-base leading-relaxed font-light">No hidden costs or surprises. Our detailed written estimates give you complete confidence.</p>
            </div>
            <div className="group relative p-8 border border-slate-200/10 hover:border-primary/50 transition-colors duration-500 rounded-none bg-transparent">
              <div className="mb-8 inline-flex items-center justify-center w-16 h-16 rounded-full border border-primary/40 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                <span className="material-icons-outlined text-3xl font-light">engineering</span>
              </div>
              <h3 className="font-bold text-2xl mb-4 text-white">Master Craftsmanship</h3>
              <p className="text-slate-400 text-base leading-relaxed font-light">We stand behind every project with our commitment to excellence and customer satisfaction.</p>
            </div>
          </div>
          <div className="border-t border-b border-slate-800 py-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0 text-center items-center">
              <div className="px-4 md:border-r border-slate-800">
                <div className="font-mono text-white font-bold text-5xl mb-2 tracking-tighter">
                  9.6<span className="text-primary text-3xl">/10</span>
                </div>
                <div className="text-xs uppercase tracking-[0.2em] text-slate-400 font-semibold">Checkatrade Score</div>
              </div>
              <div className="px-4 md:border-r border-slate-800">
                <div className="font-mono text-white font-bold text-5xl mb-2 tracking-tighter">
                  104<span className="text-primary text-3xl">+</span>
                </div>
                <div className="text-xs uppercase tracking-[0.2em] text-slate-400 font-semibold">Happy Clients</div>
              </div>
              <div className="px-4 md:border-r border-slate-800">
                <div className="font-mono text-white font-bold text-5xl mb-2 tracking-tighter">
                  100<span className="text-primary text-3xl">%</span>
                </div>
                <div className="text-xs uppercase tracking-[0.2em] text-slate-400 font-semibold">Satisfaction Rate</div>
              </div>
              <div className="px-4">
                <div className="font-mono text-white font-bold text-5xl mb-2 tracking-tighter">
                  24<span className="text-primary text-3xl">/7</span>
                </div>
                <div className="text-xs uppercase tracking-[0.2em] text-slate-400 font-semibold">Support Available</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-background-light dark:bg-background-dark">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary font-bold tracking-widest uppercase text-sm mb-2 block">Our Services</span>
            <h2 className="font-display text-4xl font-bold text-text-light dark:text-text-dark mb-4">
              Comprehensive Solutions <br />
              <span className="text-primary italic">for Your Home</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400">From luxury bathroom suites to structural knock-throughs, we deliver exceptional results across South London, Surrey &amp; The M25.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service Card 1 - GOLDEN PATH (Most Popular) */}
            <div className="bg-white dark:bg-surface-dark rounded-lg overflow-hidden shadow-xl border-2 border-primary dark:border-primary group hover:shadow-2xl transition-all duration-300 relative lg:scale-105">
              {/* "Our Speciality" Ribbon */}
              <div className="absolute top-4 left-4 bg-primary text-gray-900 px-3 py-1 rounded-full z-20 text-xs font-bold uppercase tracking-wider shadow-lg flex items-center gap-1">
                <span className="material-icons-outlined text-sm">star</span>
                Our Speciality
              </div>
              <div className="relative h-64 overflow-hidden">
                <div className="absolute top-4 right-4 bg-primary text-gray-900 p-2 rounded-full z-10">
                  <span className="material-icons-outlined">bathtub</span>
                </div>
                <img
                  alt="Full Bathroom Renovation - Luxury Marble Bathroom"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  src="/images/luxury-marble-bathroom-walk-in-shower.webp"
                />
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold text-text-light dark:text-white mb-2">Full Bathroom Renovations</h3>
                <p className="text-primary text-xs font-bold uppercase mb-4">Transform Your Living Space</p>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 leading-relaxed">Full Concept-to-Completion Renovations. We handle the complex plumbing, electrical engineering, and luxury finishes so you don&apos;t have to.</p>
                <ul className="text-xs text-gray-500 dark:text-gray-400 space-y-1 mb-6">
                  <li>• Luxury Sanitaryware Installation</li>
                  <li>• Underfloor Heating</li>
                  <li>• Custom Lighting Schemes</li>
                </ul>
                <Link href="/services/full-bathroom-renovations" className="inline-block w-full text-center bg-primary text-gray-900 py-2 rounded text-sm font-bold hover:bg-gray-900 hover:text-white transition-colors" aria-label="Learn more about full bathroom renovations">
                  Learn More →
                </Link>
              </div>
            </div>

            {/* Service Card 2 */}
            <div className="bg-white dark:bg-surface-dark rounded-lg overflow-hidden shadow-lg border border-gray-100 dark:border-gray-800 group hover:shadow-2xl transition-all duration-300">
              <div className="relative h-64 overflow-hidden">
                <div className="absolute top-4 right-4 bg-primary text-gray-900 p-2 rounded-full z-10">
                  <span className="material-icons-outlined">shower</span>
                </div>
                <img
                  alt="Bespoke Wet Room Installation with White Tiles"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  src="/images/luxury-walk-in-shower-installation-white-tiles.webp"
                />
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold text-text-light dark:text-white mb-2">Bespoke Wet Rooms</h3>
                <p className="text-primary text-xs font-bold uppercase mb-4">Modern Functionality</p>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 leading-relaxed">Waterproof tanking systems and minimal floor level access showers. Perfect for accessibility and high-end modern design.</p>
                <ul className="text-xs text-gray-500 dark:text-gray-400 space-y-1 mb-6">
                  <li>• Tanking &amp; Waterproofing</li>
                  <li>• Linear Drains</li>
                  <li>• Glass Partitions</li>
                </ul>
                <Link href="/services/wet-room-installations" className="inline-block w-full text-center border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 py-2 rounded text-sm font-medium hover:bg-primary hover:text-gray-900 hover:border-primary transition-colors" aria-label="Learn more about bespoke wet room installations">
                  Learn More →
                </Link>
              </div>
            </div>

            {/* Service Card 3 */}
            <div className="bg-white dark:bg-surface-dark rounded-lg overflow-hidden shadow-lg border border-gray-100 dark:border-gray-800 group hover:shadow-2xl transition-all duration-300">
              <div className="relative h-64 overflow-hidden">
                <div className="absolute top-4 right-4 bg-primary text-gray-900 p-2 rounded-full z-10">
                  <span className="material-icons-outlined">grid_view</span>
                </div>
                <img
                  alt="Designer Tiling - Bespoke Hexagon Floor Tiles with LED Lighting"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  src="/images/bespoke-bathroom-hexagon-floor-tiles-led-lighting.webp"
                />
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold text-text-light dark:text-white mb-2">Designer Tiling</h3>
                <p className="text-primary text-xs font-bold uppercase mb-4">Precision Finishes</p>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 leading-relaxed">Expert installation of porcelain, marble, mosaic, and ceramic tiles. We ensure perfect lines and durable grouting every time.</p>
                <ul className="text-xs text-gray-500 dark:text-gray-400 space-y-1 mb-6">
                  <li>• Marble &amp; Natural Stone</li>
                  <li>• Herringbone Patterns</li>
                  <li>• Large Format Tiles</li>
                </ul>
                <Link href="/services/luxury-tiling-services" className="inline-block w-full text-center border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 py-2 rounded text-sm font-medium hover:bg-primary hover:text-gray-900 hover:border-primary transition-colors" aria-label="Learn more about designer tiling services">
                  Learn More →
                </Link>
              </div>
            </div>

            {/* Service Card 4 */}
            <div className="bg-white dark:bg-surface-dark rounded-lg overflow-hidden shadow-lg border border-gray-100 dark:border-gray-800 group hover:shadow-2xl transition-all duration-300">
              <div className="relative h-64 overflow-hidden">
                <div className="absolute top-4 right-4 bg-primary text-gray-900 p-2 rounded-full z-10">
                  <span className="material-icons-outlined">construction</span>
                </div>
                <img
                  alt="Structural Building Repairs - Flat Roof Extension Construction"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  src="/images/flat-roof-extension-construction-london.webp"
                />
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold text-text-light dark:text-white mb-2">Structural Knock-throughs</h3>
                <p className="text-primary text-xs font-bold uppercase mb-4">Open Plan Living</p>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 leading-relaxed">Structural Engineering &amp; Open-Plan Living. RSJ Steel installations to transform cramped layouts into expansive, modern spaces.</p>
                <ul className="text-xs text-gray-500 dark:text-gray-400 space-y-1 mb-6">
                  <li>• Steel Beam Installation</li>
                  <li>• Building Regulation Compliance</li>
                  <li>• Plastering &amp; Making Good</li>
                </ul>
                <Link href="/services/structural-building-repairs" className="inline-block w-full text-center border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 py-2 rounded text-sm font-medium hover:bg-primary hover:text-gray-900 hover:border-primary transition-colors" aria-label="Learn more about structural knock-throughs and building repairs">
                  Learn More →
                </Link>
              </div>
            </div>
          </div>
          <div className="text-center mt-12">
            <button className="bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-gray-900 font-bold py-3 px-10 rounded transition-colors uppercase tracking-widest text-xs" aria-label="View all building and renovation services">
              View All Services →
            </button>
          </div>
        </div>
      </section>

      {/* Portfolio Gallery */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <span className="text-primary font-bold tracking-widest uppercase text-sm mb-2 block">Our Portfolio</span>
              <h2 className="font-display text-4xl font-bold text-text-light dark:text-text-dark">
                The Masterpiece <span className="text-primary italic">Gallery</span>
              </h2>
            </div>
            <div className="hidden md:block">
              <p className="text-gray-500 dark:text-gray-400 max-w-sm text-right">A curated selection of our finest work across London.</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link 
              href="/services/wet-room-installations" 
              title="View our Marble Wet Room Projects"
              className="group relative h-80 md:h-[500px] overflow-hidden rounded-lg cursor-pointer block"
            >
              <img
                alt="Luxury marble wet room installation completed in Esher near Sandown Park Racecourse - Premium bathroom renovation by Fredi Builders"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                src="/images/grey-marble-tiled-bathroom-vanity.webp"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute bottom-0 left-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-primary text-xs font-bold tracking-widest uppercase mb-2 block">Esher, Surrey</span>
                <h3 className="text-white text-2xl font-display font-bold">Marble Wet Room</h3>
              </div>
            </Link>
            <div className="grid grid-cols-1 gap-4 h-full">
              <Link 
                href="/locations/bathroom-fitters-streatham-sw16" 
                title="View Victorian Bathroom Renovation in Streatham"
                className="group relative h-80 md:h-[242px] overflow-hidden rounded-lg cursor-pointer block"
              >
                <img
                  alt="Victorian bathroom renovation project completed in Streatham near Streatham Common - Period features with modern fixtures by Fredi Builders"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  src="/images/white-tiled-family-bathroom-refurbishment.webp"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <span className="text-primary text-xs font-bold tracking-widest uppercase mb-1 block">Streatham, London</span>
                  <h3 className="text-white text-xl font-display font-bold">Victorian Renovation</h3>
                </div>
              </Link>
              <div className="grid grid-cols-2 gap-4 h-full">
                <Link 
                  href="/services/full-bathroom-renovations" 
                  title="View Modern Minimalist Bathroom Projects"
                  className="group relative h-48 md:h-[242px] overflow-hidden rounded-lg cursor-pointer block"
                >
                  <img
                    alt="Modern minimalist bathroom renovation with walk-in shower completed in Croydon - Contemporary design by Fredi Builders"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    src="/images/modern-bathroom-shower-installation.webp"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-4">
                    <h3 className="text-white text-sm font-bold">Modern Minimalist</h3>
                  </div>
                </Link>
                <Link 
                  href="/services/structural-building-repairs" 
                  title="View Structural Building and Extension Projects"
                  className="group relative h-48 md:h-[242px] overflow-hidden rounded-lg cursor-pointer block"
                >
                  <img
                    alt="Structural building repairs and flat roof extension construction in South London - Expert building work by Fredi Builders"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                    src="/images/grp-fiberglass-flat-roof-laying.webp"
                  />
                  <div className="absolute inset-0 bg-primary/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-gray-900 font-bold uppercase tracking-widest text-sm border-2 border-gray-900 px-4 py-2">View Project</span>
                  </div>
                  <div className="absolute bottom-0 left-0 p-4 group-hover:opacity-0 transition-opacity">
                    <h3 className="text-white text-sm font-bold">The Structural Stage</h3>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-12 bg-gray-900 rounded-xl p-8 md:p-12 relative overflow-hidden">
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="text-white">
                <h3 className="font-display font-bold text-2xl mb-2">Ready to start your project?</h3>
                <p className="text-gray-400">Get a free, no-obligation quote today.</p>
              </div>
              <div className="flex gap-4">
                <button className="bg-primary text-gray-900 px-6 py-3 rounded font-bold hover:bg-white transition-colors" aria-label="Get a fixed-price quote for your bathroom project">
                  Get a Fixed-Price Quote
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-12 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-8 md:mb-16">
            <span className="text-slate-500 font-bold tracking-widest uppercase text-xs md:text-sm mb-2 md:mb-3 block">Local Authority</span>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-slate-900">
              Serving London&apos;s <span className="text-primary font-serif italic">Premier Neighbourhoods</span>
            </h2>
            <p className="mt-3 md:mt-6 text-gray-600 max-w-2xl mx-auto text-sm md:text-base lg:text-lg px-4">
              Specialist Bathroom Renovations across South London, Surrey &amp; The M25. We focus on premium areas where we can deliver exceptional service.
            </p>
          </div>
          <div className="bg-white rounded-lg md:rounded-2xl p-4 md:p-10 shadow-sm border border-gray-100">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 mb-6 md:mb-10">
              <div className="flex items-center gap-2 md:gap-4 p-3 md:p-4 border border-slate-200 bg-bone transition-colors rounded-none group hover:border-primary">
                <div className="text-primary p-1 md:p-2 flex-shrink-0">
                  <span className="material-icons-outlined text-base md:text-xl">location_on</span>
                </div>
                <div className="flex-grow min-w-0">
                  <span className="block font-bold text-slate-900 text-sm md:text-lg truncate">Builders in Streatham</span>
                  <span className="text-[10px] md:text-xs text-gray-500 font-mono">SW16 • South London</span>
                </div>
                <Link href="/locations/bathroom-fitters-streatham-sw16" className="border border-slate-200 text-[9px] md:text-[10px] font-bold uppercase tracking-wide text-slate-600 px-2 md:px-3 py-1 md:py-1.5 hover:bg-slate-900 hover:text-white transition-colors flex-shrink-0" aria-label="View bathroom fitters in Streatham SW16">
                  View
                </Link>
              </div>
              <div className="flex items-center gap-2 md:gap-4 p-3 md:p-4 border border-slate-200 bg-bone transition-colors rounded-none group hover:border-primary">
                <div className="text-primary p-1 md:p-2 flex-shrink-0">
                  <span className="material-icons-outlined text-base md:text-xl">location_on</span>
                </div>
                <div className="flex-grow min-w-0">
                  <span className="block font-bold text-slate-900 text-sm md:text-lg truncate">Builders in Esher</span>
                  <span className="text-[10px] md:text-xs text-gray-500 font-mono">KT10 • Surrey</span>
                </div>
                <Link href="/locations/bathroom-fitters-esher-kt10" className="border border-slate-200 text-[9px] md:text-[10px] font-bold uppercase tracking-wide text-slate-600 px-2 md:px-3 py-1 md:py-1.5 hover:bg-slate-900 hover:text-white transition-colors flex-shrink-0" aria-label="View bathroom fitters in Esher KT10">
                  View
                </Link>
              </div>
              <div className="flex items-center gap-2 md:gap-4 p-3 md:p-4 border border-slate-200 bg-bone transition-colors rounded-none group hover:border-primary">
                <div className="text-primary p-1 md:p-2 flex-shrink-0">
                  <span className="material-icons-outlined text-base md:text-xl">location_on</span>
                </div>
                <div className="flex-grow min-w-0">
                  <span className="block font-bold text-slate-900 text-sm md:text-lg truncate">Builders in Cobham</span>
                  <span className="text-[10px] md:text-xs text-gray-500 font-mono">KT11 • Surrey</span>
                </div>
                <Link href="/locations/luxury-bathrooms-cobham-kt11" className="border border-slate-200 text-[9px] md:text-[10px] font-bold uppercase tracking-wide text-slate-600 px-2 md:px-3 py-1 md:py-1.5 hover:bg-slate-900 hover:text-white transition-colors flex-shrink-0" aria-label="View luxury bathroom fitters in Cobham KT11">
                  View
                </Link>
              </div>
              <div className="flex items-center gap-2 md:gap-4 p-3 md:p-4 border border-slate-200 bg-bone transition-colors rounded-none group hover:border-primary">
                <div className="text-primary p-1 md:p-2 flex-shrink-0">
                  <span className="material-icons-outlined text-base md:text-xl">location_on</span>
                </div>
                <div className="flex-grow min-w-0">
                  <span className="block font-bold text-slate-900 text-sm md:text-lg truncate">Builders in Wimbledon</span>
                  <span className="text-[10px] md:text-xs text-gray-500 font-mono">SW19 • South West</span>
                </div>
                <Link href="/locations/bathroom-fitters-wimbledon-sw19" className="border border-slate-200 text-[9px] md:text-[10px] font-bold uppercase tracking-wide text-slate-600 px-2 md:px-3 py-1 md:py-1.5 hover:bg-slate-900 hover:text-white transition-colors flex-shrink-0" aria-label="View bathroom fitters in Wimbledon SW19">
                  View
                </Link>
              </div>
              <div className="flex items-center gap-2 md:gap-4 p-3 md:p-4 border border-slate-200 bg-bone transition-colors rounded-none group hover:border-primary">
                <div className="text-primary p-1 md:p-2 flex-shrink-0">
                  <span className="material-icons-outlined text-base md:text-xl">location_on</span>
                </div>
                <div className="flex-grow min-w-0">
                  <span className="block font-bold text-slate-900 text-sm md:text-lg truncate">Builders in Kingston</span>
                  <span className="text-[10px] md:text-xs text-gray-500 font-mono">KT1 • Surrey</span>
                </div>
                <Link href="/locations/bathroom-fitters-kingston-kt1" className="border border-slate-200 text-[9px] md:text-[10px] font-bold uppercase tracking-wide text-slate-600 px-2 md:px-3 py-1 md:py-1.5 hover:bg-slate-900 hover:text-white transition-colors flex-shrink-0" aria-label="View bathroom fitters in Kingston KT1">
                  View
                </Link>
              </div>
              <div className="flex items-center gap-2 md:gap-4 p-3 md:p-4 border border-slate-200 bg-bone transition-colors rounded-none group hover:border-primary">
                <div className="text-primary p-1 md:p-2 flex-shrink-0">
                  <span className="material-icons-outlined text-base md:text-xl">location_on</span>
                </div>
                <div className="flex-grow min-w-0">
                  <span className="block font-bold text-slate-900 text-sm md:text-lg truncate">Builders in Dulwich</span>
                  <span className="text-[10px] md:text-xs text-gray-500 font-mono">SE21 • South East</span>
                </div>
                <Link href="/locations/luxury-bathrooms-dulwich-se21" className="border border-slate-200 text-[9px] md:text-[10px] font-bold uppercase tracking-wide text-slate-600 px-2 md:px-3 py-1 md:py-1.5 hover:bg-slate-900 hover:text-white transition-colors flex-shrink-0" aria-label="View luxury bathroom fitters in Dulwich SE21">
                  View
                </Link>
              </div>
            </div>
            <div className="pt-4 md:pt-8 border-t border-gray-100">
              <div className="bg-slate-950 text-white p-4 md:p-8 rounded-none border-l-4 border-primary flex flex-col md:flex-row justify-between items-start md:items-center shadow-lg gap-4">
                <div>
                  <h4 className="font-bold flex items-center gap-2 md:gap-3 text-sm md:text-lg">
                    <span className="material-icons-outlined text-primary font-light text-base md:text-xl">verified</span> Premium Service Areas
                  </h4>
                  <p className="text-xs md:text-sm text-gray-400 mt-1 md:mt-2">Focused coverage across South London&apos;s most desirable areas.</p>
                </div>
                <div className="flex flex-wrap gap-2 md:gap-3">
                  <span className="text-[9px] md:text-[10px] uppercase font-bold tracking-wider border border-gray-600 px-2 md:px-3 py-1 md:py-1.5 rounded bg-gray-800 text-gray-300 whitespace-nowrap">High-Value Properties</span>
                  <span className="text-[9px] md:text-[10px] uppercase font-bold tracking-wider border border-gray-600 px-2 md:px-3 py-1 md:py-1.5 rounded bg-gray-800 text-gray-300 whitespace-nowrap">Exclusive Villages</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="py-12 md:py-24 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center mb-8 md:mb-16 text-center">
            <span className="text-primary font-bold tracking-widest uppercase text-xs md:text-sm mb-2 md:mb-3">Customer Reviews</span>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 px-4">
              What Our Customers <br />
              <span className="text-primary font-serif">Say About Us</span>
            </h2>
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 mt-4 md:mt-6 bg-gray-50 px-3 sm:px-6 py-2 sm:py-3 rounded-full">
              <div className="flex text-amber-400">
                <span className="material-icons-outlined fill-current text-base sm:text-xl">star</span>
                <span className="material-icons-outlined fill-current text-base sm:text-xl">star</span>
                <span className="material-icons-outlined fill-current text-base sm:text-xl">star</span>
                <span className="material-icons-outlined fill-current text-base sm:text-xl">star</span>
                <span className="material-icons-outlined fill-current text-base sm:text-xl">star</span>
              </div>
              <div className="hidden sm:block h-4 w-px bg-gray-300"></div>
              <span className="font-bold text-lg sm:text-xl text-slate-900">9.6</span>
              <span className="text-gray-500 text-xs sm:text-sm font-medium text-center">out of 10 based on 104+ Verified Checkatrade Reviews</span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
            <div className="bg-white p-5 md:p-8 rounded-lg md:rounded-xl shadow-lg border border-gray-100 relative group hover:-translate-y-1 transition-transform duration-300">
              <div className="absolute top-5 md:top-8 right-5 md:right-8 text-gray-100 group-hover:text-primary/10 transition-colors">
                <span className="material-icons-outlined text-3xl md:text-5xl">format_quote</span>
              </div>
              <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-slate-700 to-slate-900 text-white rounded-full flex items-center justify-center font-bold text-base md:text-lg flex-shrink-0 shadow-md">O</div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm md:text-base">Oli D.</h4>
                  <p className="text-[10px] md:text-xs text-gray-500 font-medium">Thornton Heath, <span className="font-bold text-gray-700">CR7</span></p>
                </div>
              </div>
              <p className="text-gray-600 text-xs md:text-sm leading-relaxed mb-4 md:mb-6">
                &quot;Complete bathroom renovation. Fredi ripped everything out to the brick. The tiling is laser-perfect, and he hid all the ugly pipework that the previous builder left exposed. A true perfectionist.&quot;
              </p>
              <div className="flex items-center justify-between mt-auto">
                <div className="flex text-amber-400 text-sm">
                  <span className="material-icons-outlined text-base md:text-lg fill-current">star</span>
                  <span className="material-icons-outlined text-base md:text-lg fill-current">star</span>
                  <span className="material-icons-outlined text-base md:text-lg fill-current">star</span>
                  <span className="material-icons-outlined text-base md:text-lg fill-current">star</span>
                  <span className="material-icons-outlined text-base md:text-lg fill-current">star</span>
                </div>
              </div>
            </div>
            <div className="bg-white p-5 md:p-8 rounded-lg md:rounded-xl shadow-lg border border-gray-100 relative group hover:-translate-y-1 transition-transform duration-300">
              <div className="absolute top-5 md:top-8 right-5 md:right-8 text-gray-100 group-hover:text-primary/10 transition-colors">
                <span className="material-icons-outlined text-3xl md:text-5xl">format_quote</span>
              </div>
              <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-slate-700 to-slate-900 text-white rounded-full flex items-center justify-center font-bold text-base md:text-lg flex-shrink-0 shadow-md">S</div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm md:text-base">Sarah M.</h4>
                  <p className="text-[10px] md:text-xs text-gray-500 font-medium">Streatham, <span className="font-bold text-gray-700">SW16</span></p>
                </div>
              </div>
              <p className="text-gray-600 text-xs md:text-sm leading-relaxed mb-4 md:mb-6">
                &quot;We removed a load-bearing wall to open up the kitchen and bathroom. Fredi handled the steel beam (RSJ) installation and Building Control sign-off. Stress-free and incredibly clean.&quot;
              </p>
              <div className="flex items-center justify-between mt-auto">
                <div className="flex text-amber-400 text-sm">
                  <span className="material-icons-outlined text-base md:text-lg fill-current">star</span>
                  <span className="material-icons-outlined text-base md:text-lg fill-current">star</span>
                  <span className="material-icons-outlined text-base md:text-lg fill-current">star</span>
                  <span className="material-icons-outlined text-base md:text-lg fill-current">star</span>
                  <span className="material-icons-outlined text-base md:text-lg fill-current">star</span>
                </div>
              </div>
            </div>
            <div className="bg-white p-5 md:p-8 rounded-lg md:rounded-xl shadow-lg border border-gray-100 relative group hover:-translate-y-1 transition-transform duration-300">
              <div className="absolute top-5 md:top-8 right-5 md:right-8 text-gray-100 group-hover:text-primary/10 transition-colors">
                <span className="material-icons-outlined text-3xl md:text-5xl">format_quote</span>
              </div>
              <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-slate-700 to-slate-900 text-white rounded-full flex items-center justify-center font-bold text-base md:text-lg flex-shrink-0 shadow-md">M</div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm md:text-base">Maureen K.</h4>
                  <p className="text-[10px] md:text-xs text-gray-500 font-medium">Dulwich, <span className="font-bold text-gray-700">SE21</span></p>
                </div>
              </div>
              <p className="text-gray-600 text-xs md:text-sm leading-relaxed mb-4 md:mb-6">
                &quot;Emergency leak turned into a beautiful new wet room. Fredi worked late to get the water back on and finished the tiling to a showroom standard.&quot;
              </p>
              <div className="flex items-center justify-between mt-auto">
                <div className="flex text-amber-400 text-sm">
                  <span className="material-icons-outlined text-base md:text-lg fill-current">star</span>
                  <span className="material-icons-outlined text-base md:text-lg fill-current">star</span>
                  <span className="material-icons-outlined text-base md:text-lg fill-current">star</span>
                  <span className="material-icons-outlined text-base md:text-lg fill-current">star</span>
                  <span className="material-icons-outlined text-base md:text-lg fill-current">star</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />

      {/* WhatsApp Float Button */}
      <WhatsAppFloatButton />
    </>
  )
}
