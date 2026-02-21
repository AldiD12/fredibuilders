'use client'

import { useState, useMemo } from 'react'
import { Review } from '@/app/data/reviews'
import VerifiedBadge from './VerifiedBadge'

interface ReviewsGridProps {
  reviews: Review[]
}

type SortOption = 'newest' | 'oldest' | 'highest'

export default function ReviewsGrid({ reviews }: ReviewsGridProps) {
  const [locationFilter, setLocationFilter] = useState<string>('all')
  const [serviceFilter, setServiceFilter] = useState<string>('all')
  const [sortBy, setSortBy] = useState<SortOption>('newest')

  // Extract unique locations and services
  const locations = useMemo(() => {
    const locs = new Set(reviews.map((r) => r.postcode).filter(Boolean))
    return Array.from(locs).sort()
  }, [reviews])

  const services = useMemo(() => {
    const servs = new Set(
      reviews
        .map((r) => r.service)
        .filter(Boolean)
        .flatMap((s) => s!.toLowerCase().split(/[,;]/))
        .map((s) => s.trim())
        .filter((s) => s.length > 3)
    )
    return Array.from(servs).sort()
  }, [reviews])

  // Filter and sort reviews
  const filteredReviews = useMemo(() => {
    let filtered = reviews

    // Location filter
    if (locationFilter !== 'all') {
      filtered = filtered.filter((r) => r.postcode === locationFilter)
    }

    // Service filter
    if (serviceFilter !== 'all') {
      filtered = filtered.filter(
        (r) => r.service && r.service.toLowerCase().includes(serviceFilter)
      )
    }

    // Sort
    const sorted = [...filtered]
    if (sortBy === 'newest') {
      sorted.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    } else if (sortBy === 'oldest') {
      sorted.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
    } else if (sortBy === 'highest') {
      sorted.sort((a, b) => b.rating - a.rating)
    }

    return sorted
  }, [reviews, locationFilter, serviceFilter, sortBy])

  return (
    <>
      {/* Filters */}
      <section className="py-8 bg-white border-b border-slate-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-4 items-center justify-between">
            <div className="flex flex-wrap gap-4">
              {/* Location Filter */}
              <select
                value={locationFilter}
                onChange={(e) => setLocationFilter(e.target.value)}
                className="px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              >
                <option value="all">All Locations</option>
                {locations.map((loc) => (
                  <option key={loc} value={loc}>
                    {loc}
                  </option>
                ))}
              </select>

              {/* Service Filter */}
              <select
                value={serviceFilter}
                onChange={(e) => setServiceFilter(e.target.value)}
                className="px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              >
                <option value="all">All Services</option>
                {services.map((service) => (
                  <option key={service} value={service}>
                    {service.charAt(0).toUpperCase() + service.slice(1)}
                  </option>
                ))}
              </select>
            </div>

            {/* Sort */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as SortOption)}
              className="px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            >
              <option value="newest">Newest First</option>
              <option value="oldest">Oldest First</option>
              <option value="highest">Highest Rated</option>
            </select>
          </div>

          <div className="mt-4 text-sm text-slate-600">
            Showing {filteredReviews.length} of {reviews.length} reviews
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {filteredReviews.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-xl text-slate-600">
                No reviews found matching your filters.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredReviews.map((review) => (
                <div
                  key={review.id}
                  className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
                >
                  {/* Rating */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl font-bold text-teal-600">
                        {review.rating}
                      </span>
                      <span className="text-slate-500">/10</span>
                    </div>
                    {review.verified && <VerifiedBadge />}
                  </div>

                  {/* Review Text */}
                  <p className="text-slate-700 mb-4 line-clamp-6">{review.text}</p>

                  {/* Author and Location */}
                  <div className="border-t border-slate-200 pt-4 mt-4">
                    <div className="flex items-center justify-between text-sm">
                      <div>
                        <p className="font-semibold text-slate-900">{review.author}</p>
                        {review.location && (
                          <p className="text-slate-600">{review.location}</p>
                        )}
                      </div>
                      <div className="text-right text-slate-500">
                        {new Date(review.date).toLocaleDateString('en-GB', {
                          month: 'short',
                          year: 'numeric'
                        })}
                      </div>
                    </div>
                    {review.service && (
                      <p className="text-xs text-teal-600 mt-2">{review.service}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  )
}
