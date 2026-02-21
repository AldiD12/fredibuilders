'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { GalleryImage } from '@/app/data/gallery'
import GalleryFilter from '@/app/components/GalleryFilter'
import ImageLightbox from '@/app/components/ImageLightbox'
import { trackGalleryView } from '@/app/lib/analytics'

interface GalleryClientProps {
  images: GalleryImage[]
}

export default function GalleryClient({ images }: GalleryClientProps) {
  const [selectedCategory, setSelectedCategory] = useState<GalleryImage['category'] | 'All'>('All')
  const [lightboxImage, setLightboxImage] = useState<GalleryImage | null>(null)
  const [lightboxIndex, setLightboxIndex] = useState<number>(0)

  // Track page view on mount
  useEffect(() => {
    trackGalleryView()
  }, [])

  // Filter images based on selected category
  const filteredImages = selectedCategory === 'All' 
    ? images 
    : images.filter(img => img.category === selectedCategory)

  const handleImageClick = (image: GalleryImage, index: number) => {
    setLightboxImage(image)
    setLightboxIndex(index)
  }

  const handleCloseLightbox = () => {
    setLightboxImage(null)
  }

  const handlePrevImage = () => {
    const newIndex = lightboxIndex > 0 ? lightboxIndex - 1 : filteredImages.length - 1
    setLightboxIndex(newIndex)
    setLightboxImage(filteredImages[newIndex])
  }

  const handleNextImage = () => {
    const newIndex = lightboxIndex < filteredImages.length - 1 ? lightboxIndex + 1 : 0
    setLightboxIndex(newIndex)
    setLightboxImage(filteredImages[newIndex])
  }

  return (
    <>
      {/* Filter Section */}
      <section className="container mx-auto px-4 py-8 md:py-12">
        <GalleryFilter 
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />

        {/* Image Count */}
        <div className="text-center mb-8">
          <p className="text-slate-600">
            Showing <span className="font-semibold text-teal-600">{filteredImages.length}</span> {filteredImages.length === 1 ? 'project' : 'projects'}
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredImages.map((image, index) => (
            <div
              key={image.id}
              className="group relative aspect-[4/3] overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer bg-slate-200"
              onClick={() => handleImageClick(image, index)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                loading={image.priority ? 'eager' : 'lazy'}
                priority={image.priority}
              />
              
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  {image.service && (
                    <p className="text-sm font-semibold mb-1">{image.service}</p>
                  )}
                  {image.location && (
                    <p className="text-xs text-teal-200">{image.location}</p>
                  )}
                </div>
              </div>

              {/* Category Badge */}
              <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-slate-700">
                {image.category}
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredImages.length === 0 && (
          <div className="text-center py-16">
            <p className="text-slate-500 text-lg">No projects found in this category.</p>
            <button
              onClick={() => setSelectedCategory('All')}
              className="mt-4 text-teal-600 hover:text-teal-700 font-medium"
            >
              View all projects
            </button>
          </div>
        )}
      </section>

      {/* Lightbox Modal */}
      {lightboxImage && (
        <ImageLightbox
          image={lightboxImage}
          onClose={handleCloseLightbox}
          onPrev={handlePrevImage}
          onNext={handleNextImage}
          currentIndex={lightboxIndex}
          totalImages={filteredImages.length}
        />
      )}
    </>
  )
}
