'use client'

import { useState } from 'react'
import Image from 'next/image'
import { GalleryImage } from '@/app/data/gallery'
import ImageLightbox from './ImageLightbox'

interface GalleryGridProps {
  images: GalleryImage[]
}

type CategoryFilter = 'All' | 'Showroom' | 'Trust' | 'Transformation' | 'Craftsmanship'

export default function GalleryGrid({ images }: GalleryGridProps) {
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>('All')
  const [lightboxImage, setLightboxImage] = useState<GalleryImage | null>(null)
  const [lightboxIndex, setLightboxIndex] = useState<number>(0)

  const categories: CategoryFilter[] = [
    'All',
    'Showroom',
    'Trust',
    'Transformation',
    'Craftsmanship'
  ]

  const filteredImages =
    selectedCategory === 'All'
      ? images
      : images.filter((img) => img.category === selectedCategory)

  const handleImageClick = (image: GalleryImage, index: number) => {
    setLightboxImage(image)
    setLightboxIndex(index)
  }

  const handleCloseLightbox = () => {
    setLightboxImage(null)
  }

  const handleNextImage = () => {
    const nextIndex = (lightboxIndex + 1) % filteredImages.length
    setLightboxIndex(nextIndex)
    setLightboxImage(filteredImages[nextIndex])
  }

  const handlePrevImage = () => {
    const prevIndex =
      (lightboxIndex - 1 + filteredImages.length) % filteredImages.length
    setLightboxIndex(prevIndex)
    setLightboxImage(filteredImages[prevIndex])
  }

  return (
    <>
      {/* Category Filter */}
      <section className="py-8 bg-white border-b border-slate-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-teal-600 text-white shadow-md'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {category}
                {category !== 'All' && (
                  <span className="ml-2 text-sm opacity-75">
                    ({images.filter((img) => img.category === category).length})
                  </span>
                )}
                {category === 'All' && (
                  <span className="ml-2 text-sm opacity-75">({images.length})</span>
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Image Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {filteredImages.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-xl text-slate-600">
                No images found in this category.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredImages.map((image, index) => (
                <div
                  key={image.id}
                  className="group relative aspect-[4/3] overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow cursor-pointer bg-slate-200"
                  onClick={() => handleImageClick(image, index)}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    loading={image.priority ? 'eager' : 'lazy'}
                    priority={image.priority}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                      <p className="font-semibold text-sm line-clamp-2">{image.alt}</p>
                      {image.location && (
                        <p className="text-xs text-slate-300 mt-1">
                          <span className="material-icons-outlined text-xs align-middle mr-1">
                            location_on
                          </span>
                          {image.location}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="absolute top-2 right-2 bg-teal-600 text-white text-xs px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                    View
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {lightboxImage && (
        <ImageLightbox
          image={lightboxImage}
          onClose={handleCloseLightbox}
          onNext={handleNextImage}
          onPrev={handlePrevImage}
          currentIndex={lightboxIndex}
          totalImages={filteredImages.length}
        />
      )}
    </>
  )
}
