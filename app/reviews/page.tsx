import { Metadata } from 'next'
import { allReviews, aggregateRating } from '@/app/data/reviews'
import ReviewSchema from '@/app/components/schemas/ReviewSchema'
import AggregateRatingSchema from '@/app/components/schemas/AggregateRatingSchema'
import ReviewsFilter from '@/app/components/ReviewsFilter'
import Navigation from '@/app/components/Navigation'
import Footer from '@/app/components/Footer'
import PhoneLink from '@/app/components/PhoneLink'
import WhatsAppFloatButton from '@/app/components/WhatsAppFloatButton'

export const metadata: Metadata = {
  title: 'Customer Reviews - 104+ Verified Reviews | Fredi Builders',
  description: 'Read 104+ verified customer reviews from Checkatrade. Rated 9.6/10 for bathroom renovations, extensions, and building work across South London and Surrey.',
  alternates: {
    canonical: 'https://fredibuilders.co.uk/reviews'
  },
  openGraph: {
    title: 'Customer Reviews - 104+ Verified Reviews | Fredi Builders',
    description: 'Read 104+ verified customer reviews from Checkatrade. Rated 9.6/10 for bathroom renovations, extensions, and building work.',
    url: 'https://fredibuilders.co.uk/reviews',
    siteName: 'Fredi Builders',
    locale: 'en_GB',
    type: 'website',
  }
}

export default function ReviewsPage() {
  return (
    <>
      {/* Schema Markup */}
      <ReviewSchema reviews={allReviews} />
      <AggregateRatingSchema
        ratingValue={aggregateRating.ratingValue}
        reviewCount={aggregateRating.reviewCount}
        bestRating={aggregateRating.bestRating}
        worstRating={aggregateRating.worstRating}
      />

      <Navigation />

      <main className="min-h-screen bg-slate-50">
        {/* Hero Section with Aggregate Rating */}
        <section className="bg-gradient-to-br from-teal-600 to-teal-700 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-6 text-white">
                Customer Reviews
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-teal-50">
                See what our {aggregateRating.reviewCount}+ customers say about our work
              </p>
              
              {/* Aggregate Rating Widget */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 inline-block">
                <div className="flex items-center justify-center gap-4 mb-4">
                  <div className="text-6xl font-bold">
                    {aggregateRating.ratingValue}
                  </div>
                  <div className="text-left">
                    <div className="flex gap-1 mb-2">
                      {[...Array(10)].map((_, i) => (
                        <svg
                          key={i}
                          className={`w-5 h-5 ${
                            i < Math.floor(aggregateRating.ratingValue)
                              ? 'text-yellow-400'
                              : 'text-white/30'
                          }`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <div className="text-sm text-teal-50">
                      Out of {aggregateRating.bestRating}
                    </div>
                  </div>
                </div>
                <div className="text-lg font-semibold">
                  Based on {aggregateRating.reviewCount}+ Checkatrade Reviews
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Reviews Section with Filtering */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <ReviewsFilter reviews={allReviews} />
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-slate-100 py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
              Join our {aggregateRating.reviewCount}+ satisfied customers across South London and Surrey
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-block bg-teal-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-teal-700 transition-colors"
              >
                Get Your Free Quote
              </a>
              <PhoneLink
                context="reviews-page"
                className="inline-block bg-white text-teal-600 px-8 py-4 rounded-lg font-semibold border-2 border-teal-600 hover:bg-teal-50 transition-colors"
              >
                Call: 07468 451511
              </PhoneLink>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
      <WhatsAppFloatButton />
    </>
  )
}
