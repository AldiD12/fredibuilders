'use client'

import Link from 'next/link'
import { useState } from 'react'
import { trackCallClick } from '@/app/lib/analytics'

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
      {/* Top Bar */}
      <div className="bg-white dark:bg-surface-dark border-b border-gray-100 dark:border-gray-800 py-3 hidden md:block">
        <div className="container mx-auto px-6 flex justify-between items-center text-sm">
          <div className="flex items-center gap-1 text-gray-700 dark:text-gray-300 font-semibold">
            <span className="material-icons-outlined text-primary">star</span>
            <span>9.6/10 Checkatrade Score</span>
            <span className="mx-3 text-gray-300">•</span>
            <span className="text-gray-600 dark:text-gray-400">South London, Surrey & M25</span>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/contact" className="bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-4 py-2 rounded text-xs font-bold uppercase tracking-wider hover:bg-primary dark:hover:bg-primary dark:hover:text-white transition-colors">
              Get Quote
            </Link>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 dark:bg-background-dark/95 backdrop-blur-md shadow-md">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-3 group">
            <img 
              src="/images/logo.webp" 
              alt="Fredi Builders Logo" 
              className="h-12 w-auto group-hover:opacity-80 transition-opacity"
            />
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8 font-medium text-sm uppercase tracking-wide">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <Link href="/about" className="hover:text-primary transition-colors">About</Link>
            <Link href="/services" className="hover:text-primary transition-colors">Services</Link>
            <Link href="/gallery" className="hover:text-primary transition-colors">Gallery</Link>
            <Link href="/reviews" className="hover:text-primary transition-colors">Reviews</Link>
            <Link href="/contact" className="hover:text-primary transition-colors">Contact</Link>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-gray-800 dark:text-white"
            aria-label="Toggle mobile menu"
          >
            <span className="material-icons-outlined text-3xl">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white dark:bg-background-dark border-t border-gray-200 dark:border-gray-800">
            <div className="container mx-auto px-6 py-4 flex flex-col space-y-4">
              <Link 
                href="/" 
                className="text-gray-800 dark:text-white hover:text-primary transition-colors py-2 font-medium uppercase tracking-wide"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/about" 
                className="text-gray-800 dark:text-white hover:text-primary transition-colors py-2 font-medium uppercase tracking-wide"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                href="/services" 
                className="text-gray-800 dark:text-white hover:text-primary transition-colors py-2 font-medium uppercase tracking-wide"
                onClick={() => setMobileMenuOpen(false)}
              >
                Services
              </Link>
              <Link 
                href="/gallery" 
                className="text-gray-800 dark:text-white hover:text-primary transition-colors py-2 font-medium uppercase tracking-wide"
                onClick={() => setMobileMenuOpen(false)}
              >
                Gallery
              </Link>
              <Link 
                href="/reviews" 
                className="text-gray-800 dark:text-white hover:text-primary transition-colors py-2 font-medium uppercase tracking-wide"
                onClick={() => setMobileMenuOpen(false)}
              >
                Reviews
              </Link>
              <Link 
                href="/contact" 
                className="text-gray-800 dark:text-white hover:text-primary transition-colors py-2 font-medium uppercase tracking-wide"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
              
              {/* Mobile CTA */}
              <div className="pt-4 border-t border-gray-200 dark:border-gray-800">
                <Link 
                  href="/contact" 
                  className="block w-full bg-teal-600 text-white text-center px-6 py-3 rounded font-bold uppercase tracking-wider hover:bg-teal-700 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Get Free Quote
                </Link>
                <a 
                  href="tel:+447468451511"
                  className="block w-full bg-gray-900 text-white text-center px-6 py-3 rounded font-bold uppercase tracking-wider hover:bg-gray-800 transition-colors mt-3"
                  onClick={() => {
                    trackCallClick('navigation')
                    setMobileMenuOpen(false)
                  }}
                >
                  <span className="material-icons-outlined text-sm align-middle mr-2">call</span>
                  Call Now
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  )
}
