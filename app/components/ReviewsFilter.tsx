'use client'

import { useState, useMemo } from 'react'
import { Review } from '@/app/data/reviews'
import VerifiedBadge from './VerifiedBadge'

interface ReviewsFilterProps {
  reviews: Review[]
}

type SortOption = 'newest' | 'oldest' | 'highest'

export default function ReviewsFilter({ reviews }: ReviewsFilterProps) {
  const [locationFilter, setLocationFilter] = useState<string>('all')
  const [serviceFilter, setServiceFilter] = useState<string>('all')
  const [sortBy, setSortBy] = useState<SortOption>('newest')

  // Extract unique locations and services
  const locations = useMemo(() => {
    const uniqueLocations = new Set(reviews.map(r => r.postcode))
    return Array.from(uniqueLocations).sort()
  }, [reviews])

  const services = useMemo(() => {
    const uniqueServices = new Set(
      reviews
        .filter(r => r.service)
        .map(r => {
          const service = r.service!.toLowerCase()
          if (service.includes('bathroom')) return 'Bathroom'
          if (service.includes('wet room')) return 'Wet Room'
          if (service.includes('tiling') || service.includes('tiles')) return 'Tiling'
          if (service.includes('extension')) return 'Extension'
          if (service.includes('kitchen')) return 'Kitchen'
          if (service.includes('plumbing')) return 'Plumbing'
          if (service.includes('painting')) return 'Painting'
          return 'Other'
        })
    )
    return Array.from(uniqueServices).sort()
  }, [reviews])

  // Filter and sort reviews
  const filteredReviews = useMemo(() => {
    let filtered = reviews

    // Apply location filter
    if (locationFilter !== 'all') {
      filtered = filtered.filter(r => r.postcode === locationFilter)
    }

    // Apply service filter
    if (serviceFilter !== 'all') {
      filtered = filtered.filter(r => {
        if (!r.service) return false
        const service = r.service.toLowerCase()
        const filter = serviceFilter.toLowerCase()
        
        if (filter === 'bathroom') return service.includes('bathroom')
        if (filter === 'wet room') return service.includes('wet room')
        if (filter === 'tiling') return service.includes('tiling') || service.includes('tiles')
        if (filter === 'extension') return service.includes('extension')
        if (filter === 'kitchen') return service.includes('kitchen')
        if (filter === 'plumbing') return service.includes('plumbing')
        if (filter === 'painting') return service.includes('painting')
        return true
      })
    }

    // Apply sorting
    const sorted = [...filtered].sort((a, b) => {
      if (sortBy === 'newest') {
        return new Date(b.date).getTime() - new Date(a.date).getTime()
      } else if (sortBy === 'oldest') {
        return new Date(a.date).getTime() - new Date(b.date).getTime()
      } else if (sortBy === 'highest') {
        return b.rating - a.rating
      }
      return 0
    })

    return sorted
  }, [reviews, locationFilter, serviceFilter, sortBy])

  return (
    <div>
      {/* Filters */}
      <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
        <h2 className="font-semibold text-lg mb-4">Filter Reviews</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Location Filter */}
          <div>
            <label htmlFor="location-filter" className="block text-sm font-medium text-slate-700 mb-2">
              Location
            </label>
            <select
              id="location-filter"
              value={locationFilter}
              onChange={(e) => setLocationFilter(e.target.value)}
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
            >
              <option value="all">All Locations</option>
              {locations.map(location => (
                <option key={location} value={location}>
                  {location}
                </option>
              ))}
            </select>
          </div>

          {/* Service Filter */}
          <div>
            <label htmlFor="service-filter" className="block text-sm font-medium text-slate-700 mb-2">
              Service
            </label>
            <select
              id="service-filter"
              value={serviceFilter}
              onChange={(e) => setServiceFilter(e.target.value)}
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
            >
              <option value="all">All Services</option>
              {services.map(service => (
                <option key={service} value={service}>
                  {service}
                </option>
              ))}
            </select>
          </div>

          {/* Sort By */}
          <div>
            <label htmlFor="sort-by" className="block text-sm font-medium text-slate-700 mb-2">
              Sort By
            </label>
            <select
              id="sort-by"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as SortOption)}
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
            >
              <option value="newest">Newest First</option>
              <option value="oldest">Oldest First</option>
              <option value="highest">Highest Rated</option>
            </select>
          </div>
        </div>

        {/* Results Count */}
        <div className="mt-4 text-sm text-slate-600">
          Showing {filteredReviews.length} of {reviews.length} reviews
        </div>
      </div>

      {/* Reviews Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredReviews.map(review => (
          <div
            key={review.id}
            className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow"
          >
            {/* Rating */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="text-2xl font-bold text-teal-600">
                  {review.rating}
                </div>
                <div className="flex gap-0.5">
                  {[...Array(10)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-4 h-4 ${
                        i < Math.floor(review.rating)
                          ? 'text-yellow-400'
                          : 'text-slate-300'
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              {review.verified && <VerifiedBadge />}
            </div>

            {/* Review Text */}
            <p className="text-slate-700 mb-4 line-clamp-6">
              {review.text}
            </p>

            {/* Service */}
            {review.service && (
              <div className="mb-3">
                <span className="inline-block bg-teal-50 text-teal-700 text-xs font-medium px-3 py-1 rounded-full">
                  {review.service}
                </span>
              </div>
            )}

            {/* Author and Location */}
            <div className="border-t border-slate-200 pt-4 mt-4">
              <div className="flex items-center justify-between text-sm">
                <div>
                  <div className="font-semibold text-slate-900">
                    {review.author}
                  </div>
                  <div className="text-slate-600">
                    {review.location} ({review.postcode})
                  </div>
                </div>
                <div className="text-slate-500 text-xs">
                  {new Date(review.date).toLocaleDateString('en-GB', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric'
                  })}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* No Results Message */}
      {filteredReviews.length === 0 && (
        <div className="text-center py-12">
          <p className="text-slate-600 text-lg">
            No reviews found matching your filters. Try adjusting your selection.
          </p>
        </div>
      )}
    </div>
  )
}
