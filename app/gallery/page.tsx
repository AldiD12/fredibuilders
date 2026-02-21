import { Metadata } from 'next'
import Image from 'next/image'
import { galleryImages } from '@/app/data/gallery'
import ImageGallerySchema from '@/app/components/schemas/ImageGallerySchema'
import GalleryClient from './GalleryClient'
import Navigation from '@/app/components/Navigation'
import Footer from '@/app/components/Footer'
import WhatsAppFloatButton from '@/app/components/WhatsAppFloatButton'

export const metadata: Metadata = {
  title: 'Project Gallery - Luxury Bathroom Renovations | Fredi Builders',
  description: 'Browse our portfolio of premium bathroom renovations, wet room installations, and luxury tiling projects across South London and Surrey. 40+ completed projects showcasing exceptional craftsmanship.',
  alternates: {
    canonical: 'https://fredibuilders.co.uk/gallery'
  },
  openGraph: {
    title: 'Project Gallery - Luxury Bathroom Renovations | Fredi Builders',
    description: 'Browse our portfolio of premium bathroom renovations, wet room installations, and luxury tiling projects across South London and Surrey.',
    url: 'https://fredibuilders.co.uk/gallery',
    siteName: 'Fredi Builders',
    images: [
      {
        url: 'https://fredibuilders.co.uk/images/luxury-marble-bathroom-black-porcelain-floor.webp',
        width: 1200,
        height: 800,
        alt: 'Luxury marble bathroom renovation by Fredi Builders'
      }
    ],
    locale: 'en_GB',
    type: 'website'
  }
}

export default function GalleryPage() {
  return (
    <>
      <ImageGallerySchema images={galleryImages} />
      <Navigation />
      
      <main className="min-h-screen bg-slate-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-teal-600 to-teal-700 text-white py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
                Project Gallery
              </h1>
              <p className="text-lg md:text-xl text-teal-50 mb-8">
                Explore our portfolio of luxury bathroom renovations, wet room installations, 
                and premium building projects across South London and Surrey. Each project 
                showcases our commitment to exceptional craftsmanship and attention to detail.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
                <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
                  <span className="font-semibold">{galleryImages.length}+</span> Completed Projects
                </div>
                <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
                  <span className="font-semibold">9.6/10</span> Customer Rating
                </div>
                <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
                  <span className="font-semibold">104+</span> Reviews
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Grid - Client Component */}
        <GalleryClient images={galleryImages} />
      </main>
      
      <Footer />
      <WhatsAppFloatButton />
    </>
  )
}
