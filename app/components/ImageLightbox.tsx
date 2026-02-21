'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import { GalleryImage } from '@/app/data/gallery'

interface ImageLightboxProps {
  image: GalleryImage
  onClose: () => void
  onPrev: () => void
  onNext: () => void
  currentIndex: number
  totalImages: number
}

export default function ImageLightbox({
  image,
  onClose,
  onPrev,
  onNext,
  currentIndex,
  totalImages
}: ImageLightboxProps) {
  // Handle ESC key to close
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    window.addEventListener('keydown', handleEscape)
    return () => window.removeEventListener('keydown', handleEscape)
  }, [onClose])

  // Handle arrow keys for navigation
  useEffect(() => {
    const handleArrowKeys = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        onPrev()
      } else if (e.key === 'ArrowRight') {
        onNext()
      }
    }

    window.addEventListener('keydown', handleArrowKeys)
    return () => window.removeEventListener('keydown', handleArrowKeys)
  }, [onPrev, onNext])

  // Prevent body scroll when lightbox is open
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [])

  return (
    <div
      className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Image lightbox"
    >
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
        aria-label="Close lightbox"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>

      {/* Previous Button */}
      {totalImages > 1 && (
        <button
          onClick={(e) => {
            e.stopPropagation()
            onPrev()
          }}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          aria-label="Previous image"
        >
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>
      )}

      {/* Next Button */}
      {totalImages > 1 && (
        <button
          onClick={(e) => {
            e.stopPropagation()
            onNext()
          }}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          aria-label="Next image"
        >
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>
      )}

      {/* Image Container */}
      <div
        className="relative w-full h-full max-w-7xl max-h-[90vh] mx-4"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative w-full h-full">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-contain"
            sizes="100vw"
            priority
          />
        </div>

        {/* Image Details Overlay */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
          <div className="max-w-3xl">
            {image.service && (
              <h3 className="text-xl md:text-2xl font-playfair font-bold mb-2">
                {image.service}
              </h3>
            )}
            {image.location && (
              <p className="text-teal-300 mb-2">{image.location}</p>
            )}
            <p className="text-sm text-slate-300">
              {image.alt}
            </p>
            {totalImages > 1 && (
              <p className="text-xs text-slate-400 mt-3">
                Image {currentIndex + 1} of {totalImages}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Keyboard Hints */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/60 text-xs hidden md:block">
        <span className="mr-4">ESC to close</span>
        {totalImages > 1 && (
          <span>← → to navigate</span>
        )}
      </div>
    </div>
  )
}
