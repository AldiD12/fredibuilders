'use client'

import { trackWhatsAppClick, trackCallClick } from '@/app/lib/analytics'

export default function ContactMethods() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
      <div className="bg-white rounded-lg shadow-md p-6 text-center">
        <span className="material-icons-outlined text-teal-600 text-4xl mb-3 block">
          phone
        </span>
        <h3 className="font-semibold text-slate-900 mb-2">Phone</h3>
        <p className="text-sm text-slate-600 mb-4">
          Speak directly with our team
        </p>
        <a
          href="tel:+447468451511"
          onClick={() => trackCallClick('contact-page')}
          className="text-teal-600 font-semibold hover:underline"
        >
          07468 451511
        </a>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6 text-center">
        <span className="material-icons-outlined text-teal-600 text-4xl mb-3 block">
          chat
        </span>
        <h3 className="font-semibold text-slate-900 mb-2">WhatsApp</h3>
        <p className="text-sm text-slate-600 mb-4">
          Send photos and get instant advice
        </p>
        <a
          href="https://wa.me/447468451511"
          onClick={() => trackWhatsAppClick('contact-page')}
          className="text-teal-600 font-semibold hover:underline"
        >
          Message Us
        </a>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6 text-center">
        <span className="material-icons-outlined text-teal-600 text-4xl mb-3 block">
          email
        </span>
        <h3 className="font-semibold text-slate-900 mb-2">Email</h3>
        <p className="text-sm text-slate-600 mb-4">
          Get a detailed written response
        </p>
        <a
          href="mailto:fredibuilder18@icloud.com"
          className="text-teal-600 font-semibold hover:underline"
        >
          fredibuilder18@icloud.com
        </a>
      </div>
    </div>
  )
}
