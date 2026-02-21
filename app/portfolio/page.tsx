import type { Metadata } from 'next'
import Navigation from '@/app/components/Navigation'
import Footer from '@/app/components/Footer'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Portfolio | Before & After Bathroom Transformations | Fredi Builders',
  description: 'See our bathroom renovation work. High-resolution before and after photos from 15 years of projects across Surrey and South London.',
  alternates: {
    canonical: 'https://fredibuilders.co.uk/portfolio'
  }
}

export default function Portfolio() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-slate-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-teal-600 to-teal-700 text-white py-16 md:py-24">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
                Our Work
              </h1>
              <p className="text-lg md:text-xl text-teal-50 mb-8">
                High-resolution before and after transformations from 104 five-star projects
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
                <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
                  <span className="font-semibold">104+</span> Completed Projects
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

        {/* Coming Soon Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <div className="bg-white rounded-lg shadow-lg p-12">
                <span className="material-icons-outlined text-teal-600 text-6xl mb-6 block">photo_library</span>
                <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-6 text-slate-900">
                  Portfolio Coming Soon
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  We're currently curating high-resolution before and after photos showcasing our best bathroom renovations, wet rooms, and luxury tiling projects.
                </p>
                <p className="text-gray-600 mb-8">
                  In the meantime, check out our gallery to see examples of our completed work.
                </p>
                <Link 
                  href="/gallery"
                  className="inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors"
                >
                  <span className="material-icons-outlined">collections</span>
                  View Gallery
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* What to Expect */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-12 text-center text-slate-900">
                What to Expect
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="material-icons-outlined text-teal-600 text-3xl">compare</span>
                  </div>
                  <h3 className="font-bold text-lg mb-2">Before & After</h3>
                  <p className="text-gray-600 text-sm">Side-by-side comparisons of complete transformations</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="material-icons-outlined text-teal-600 text-3xl">high_quality</span>
                  </div>
                  <h3 className="font-bold text-lg mb-2">High Resolution</h3>
                  <p className="text-gray-600 text-sm">Professional photography showing every detail</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="material-icons-outlined text-teal-600 text-3xl">info</span>
                  </div>
                  <h3 className="font-bold text-lg mb-2">Project Details</h3>
                  <p className="text-gray-600 text-sm">Timeline, budget, and materials used</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-teal-600 text-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-teal-50 mb-8 max-w-2xl mx-auto">
              Get your free, no-obligation quote today
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-block bg-white text-teal-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Get Your Free Quote
              </Link>
              <a
                href="tel:+447468451511"
                className="inline-block bg-teal-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-teal-800 transition-colors"
              >
                Call: 07468 451511
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
