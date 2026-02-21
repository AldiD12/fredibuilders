import Link from 'next/link'
import type { Metadata } from 'next'
import Navigation from '@/app/components/Navigation'
import Footer from '@/app/components/Footer'

export const metadata: Metadata = {
  title: 'Blog | Bathroom Renovation Guides & Tips | Fredi Builders',
  description: 'Expert guides on bathroom renovations, cost breakdowns, and design tips from 15 years of experience.',
  alternates: {
    canonical: 'https://fredibuilders.co.uk/blog'
  }
}

export default function Blog() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-slate-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-teal-600 to-teal-700 text-white py-16 md:py-24">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
                Bathroom Renovation Guides
              </h1>
              <p className="text-lg md:text-xl text-teal-50">
                Expert advice from 15 years of experience and 104 completed projects
              </p>
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="grid gap-8">
                <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="p-8">
                    <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                      <span className="flex items-center gap-1">
                        <span className="material-icons-outlined text-teal-600 text-base">calendar_today</span>
                        February 2026
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <span className="material-icons-outlined text-teal-600 text-base">schedule</span>
                        8 min read
                      </span>
                    </div>
                    <h2 className="font-playfair text-2xl md:text-3xl font-bold mb-4">
                      <Link href="/blog/bathroom-refurbishment-vs-full-renovation-cost-guide-2026" className="hover:text-teal-600 transition-colors">
                        Bathroom Refurbishment vs Full Renovation: Cost Guide 2026
                      </Link>
                    </h2>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      Deciding between a refurbishment and full renovation? This comprehensive guide breaks down costs, timelines, and helps you make the right choice based on real project data.
                    </p>
                    <Link 
                      href="/blog/bathroom-refurbishment-vs-full-renovation-cost-guide-2026"
                      className="inline-flex items-center gap-2 text-teal-600 font-semibold hover:text-teal-700 transition-colors"
                    >
                      Read Full Guide
                      <span className="material-icons-outlined text-base">arrow_forward</span>
                    </Link>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-teal-600 text-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-6">
              Need Expert Advice?
            </h2>
            <p className="text-xl text-teal-50 mb-8 max-w-2xl mx-auto">
              Get personalized guidance for your bathroom project
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
