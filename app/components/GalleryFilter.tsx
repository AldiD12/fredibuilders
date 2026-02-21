'use client'

import { GalleryImage } from '@/app/data/gallery'

interface GalleryFilterProps {
  selectedCategory: GalleryImage['category'] | 'All'
  onCategoryChange: (category: GalleryImage['category'] | 'All') => void
}

const categories: Array<GalleryImage['category'] | 'All'> = [
  'All',
  'Showroom',
  'Trust',
  'Transformation',
  'Craftsmanship'
]

const categoryDescriptions: Record<GalleryImage['category'] | 'All', string> = {
  All: 'View all projects',
  Showroom: 'Premium finished bathrooms',
  Trust: 'Our team and service',
  Transformation: 'Before & after projects',
  Craftsmanship: 'Construction & extensions'
}

export default function GalleryFilter({ selectedCategory, onCategoryChange }: GalleryFilterProps) {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-playfair font-bold text-slate-800 mb-4 text-center">
        Filter by Category
      </h2>
      
      {/* Desktop Filter - Horizontal Buttons */}
      <div className="hidden md:flex flex-wrap justify-center gap-3">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onCategoryChange(category)}
            className={`
              px-6 py-3 rounded-lg font-medium transition-all duration-200
              ${selectedCategory === category
                ? 'bg-teal-600 text-white shadow-lg scale-105'
                : 'bg-white text-slate-700 hover:bg-teal-50 hover:text-teal-700 shadow-md hover:shadow-lg'
              }
            `}
            aria-pressed={selectedCategory === category}
          >
            <span className="block">{category}</span>
            <span className="block text-xs mt-1 opacity-80">
              {categoryDescriptions[category]}
            </span>
          </button>
        ))}
      </div>

      {/* Mobile Filter - Dropdown */}
      <div className="md:hidden">
        <label htmlFor="category-select" className="sr-only">
          Select category
        </label>
        <select
          id="category-select"
          value={selectedCategory}
          onChange={(e) => onCategoryChange(e.target.value as GalleryImage['category'] | 'All')}
          className="w-full px-4 py-3 rounded-lg border-2 border-slate-200 bg-white text-slate-700 font-medium focus:border-teal-500 focus:ring-2 focus:ring-teal-200 transition-colors"
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category} - {categoryDescriptions[category]}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}
