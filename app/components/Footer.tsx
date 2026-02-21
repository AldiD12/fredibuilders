'use client'

import Link from 'next/link'
import { trackWhatsAppClick, trackCallClick } from '@/app/lib/analytics'

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-6">
              <img 
                src="/images/logo.webp" 
                alt="Fredi Builders Logo" 
                className="h-12 w-auto"
              />
            </Link>
            <p className="text-sm text-gray-400 mb-6 leading-relaxed">
              Premium bathroom renovations and master building services across South London and Surrey. 
              Fully insured with 15+ years of experience.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://wa.me/447468451511" 
                target="_blank" 
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppClick('footer')}
                className="w-10 h-10 bg-primary/10 hover:bg-primary rounded-full flex items-center justify-center transition-colors group"
              >
                <span className="material-icons-outlined text-primary group-hover:text-gray-900">chat</span>
              </a>
              <a 
                href="tel:+447468451511"
                onClick={() => trackCallClick('footer')}
                className="w-10 h-10 bg-primary/10 hover:bg-primary rounded-full flex items-center justify-center transition-colors group"
              >
                <span className="material-icons-outlined text-primary group-hover:text-gray-900">phone</span>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-primary font-bold uppercase tracking-widest text-sm mb-6">Quick Links</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link href="/about" className="hover:text-primary transition-colors flex items-center gap-2"><span className="material-icons-outlined text-xs">arrow_forward</span> About Us</Link></li>
              <li><Link href="/gallery" className="hover:text-primary transition-colors flex items-center gap-2"><span className="material-icons-outlined text-xs">arrow_forward</span> Our Gallery</Link></li>
              <li><Link href="/services" className="hover:text-primary transition-colors flex items-center gap-2"><span className="material-icons-outlined text-xs">arrow_forward</span> All Services</Link></li>
              <li><Link href="/locations" className="hover:text-primary transition-colors flex items-center gap-2"><span className="material-icons-outlined text-xs">arrow_forward</span> All Locations</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors flex items-center gap-2"><span className="material-icons-outlined text-xs">arrow_forward</span> Contact Us</Link></li>
              <li><Link href="/blog" className="hover:text-primary transition-colors flex items-center gap-2"><span className="material-icons-outlined text-xs">arrow_forward</span> Blog</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-primary font-bold uppercase tracking-widest text-sm mb-6">Our Services</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link href="/services/full-bathroom-renovations" className="hover:text-primary transition-colors flex items-center gap-2"><span className="material-icons-outlined text-xs">arrow_forward</span> Full Bathroom Renovations</Link></li>
              <li><Link href="/services/wet-room-installations" className="hover:text-primary transition-colors flex items-center gap-2"><span className="material-icons-outlined text-xs">arrow_forward</span> Wet Room Installations</Link></li>
              <li><Link href="/services/luxury-tiling-services" className="hover:text-primary transition-colors flex items-center gap-2"><span className="material-icons-outlined text-xs">arrow_forward</span> Luxury Tiling Services</Link></li>
              <li><Link href="/services/structural-building-repairs" className="hover:text-primary transition-colors flex items-center gap-2"><span className="material-icons-outlined text-xs">arrow_forward</span> Structural Building Repairs</Link></li>
              <li><Link href="/services/disabled-assisted-bathrooms" className="hover:text-primary transition-colors flex items-center gap-2"><span className="material-icons-outlined text-xs">arrow_forward</span> Disabled-Assisted Bathrooms</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-primary font-bold uppercase tracking-widest text-sm mb-6">Service Areas</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link href="/locations/bathroom-fitters-streatham-sw16" className="hover:text-primary transition-colors flex items-center gap-2"><span className="material-icons-outlined text-xs">arrow_forward</span> Bathroom Fitters Streatham</Link></li>
              <li><Link href="/locations/luxury-bathrooms-dulwich-se21" className="hover:text-primary transition-colors flex items-center gap-2"><span className="material-icons-outlined text-xs">arrow_forward</span> Luxury Bathrooms Dulwich</Link></li>
              <li><Link href="/locations/bathroom-renovations-purley-cr8" className="hover:text-primary transition-colors flex items-center gap-2"><span className="material-icons-outlined text-xs">arrow_forward</span> Bathroom Fitters Purley</Link></li>
              <li><Link href="/locations/bathroom-specialists-thornton-heath-cr7" className="hover:text-primary transition-colors flex items-center gap-2"><span className="material-icons-outlined text-xs">arrow_forward</span> Bathroom Specialists Thornton Heath</Link></li>
              <li><Link href="/locations" className="text-primary hover:text-white transition-colors font-bold mt-2 inline-block">View All Areas →</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>© 2026 Fredi Builders. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <span>Expert Bathroom Renovations & Master Building</span>
            <span>•</span>
            <span>South London & Surrey</span>
            <span>•</span>
            <span className="flex items-center gap-1">Fully Insured & Checkatrade Vetted</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
