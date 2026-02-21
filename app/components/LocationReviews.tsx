'use client'

import { reviews } from '@/app/data/reviews'
import type { Review } from '@/app/data/reviews'

interface LocationReviewsProps {
  locationName: string
  postcode: string
  maxReviews?: number
}

/**
 * Location-Specific Reviews Component
 * Part 4: The "GMB Neural Bridge" - Review-to-Page Sync
 * Displays reviews from specific location on that location's page
 * Increases relevance score when review mentions location and page is about that location
 */
export default function LocationReviews({ locationName, postcode, maxReviews = 3 }: LocationReviewsProps) {
  // Filter reviews for this specific location
  const locationReviews = reviews
    .filter(review => 
      review.postcode === postcode || 
      review.location?.toLowerCase().includes(locationName.toLowerCase()) ||
      review.text?.toLowerCase().includes(locationName.toLowerCase())
    )
    .slice(0, maxReviews)

  if (locationReviews.length === 0) {
    return null
  }

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <span className="inline-block px-4 py-2 bg-teal-100 text-teal-800 text-sm font-bold rounded-full mb-4">
              VERIFIED REVIEWS FROM {locationName.toUpperCase()}
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4">
              What {locationName} Customers Say
            </h2>
            <p className="text-lg text-slate-600">
              Real reviews from verified customers in {postcode}
            </p>
          </div>

          <div className="space-y-6">
            {locationReviews.map((review) => (
              <div
                key={review.id}
                className="bg-slate-50 rounded-lg p-6 border-l-4 border-teal-600"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-2">
                    {[...Array(5)].map((_, i) => (
                      <span
                        key={i}
                        className={`material-icons-outlined text-xl ${
                          i < Math.floor(review.rating)
                            ? 'text-yellow-500'
                            : 'text-gray-300'
                        }`}
                      >
                        star
                      </span>
                    ))}
                    <span className="text-lg font-bold text-slate-900 ml-2">
                      {review.rating}/10
                    </span>
                  </div>
                  {review.verified && (
                    <span className="flex items-center gap-1 text-xs font-semibold text-teal-700 bg-teal-100 px-3 py-1 rounded-full">
                      <span className="material-icons-outlined text-sm">verified</span>
                      Verified
                    </span>
                  )}
                </div>

                <p className="text-slate-700 leading-relaxed mb-4">
                  "{review.text}"
                </p>

                <div className="flex items-center justify-between text-sm">
                  <div>
                    <p className="font-semibold text-slate-900">{review.author}</p>
                    <p className="text-slate-600">
                      {review.location} ({review.postcode})
                    </p>
                  </div>
                  <p className="text-slate-500">{review.date}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <a
              href="/reviews"
              className="inline-flex items-center gap-2 text-teal-600 font-semibold hover:text-teal-700 transition-colors"
            >
              <span>Read all {reviews.length}+ reviews</span>
              <span className="material-icons-outlined">arrow_forward</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
