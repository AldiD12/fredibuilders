import type { Metadata } from 'next'
import MultiStepForm from '@/app/components/MultiStepForm'
import Navigation from '@/app/components/Navigation'
import Footer from '@/app/components/Footer'
import ContactMethods from '@/app/components/ContactMethods'
import WhatsAppFloatButton from '@/app/components/WhatsAppFloatButton'

export const metadata: Metadata = {
  title: 'Get Fixed-Price Quote | Fredi Builders',
  description:
    'Get your fixed-price bathroom renovation quote in 4 simple steps. No hidden costs, no surprises. 9.6/10 rating from 104+ verified customers.',
  alternates: {
    canonical: 'https://fredibuilders.co.uk/contact'
  }
}

export default function Contact() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-slate-50 py-12 md:py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-4">
            Get Your Fixed-Price Quote
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-6">
            Complete our simple 4-step form and receive your detailed quote within 24
            hours. No hidden costs, no surprises.
          </p>
          <div className="flex items-center justify-center gap-2 text-teal-600">
            <span className="material-icons-outlined">star</span>
            <span className="font-semibold">
              9.6/10 Rating • 104+ Verified Reviews
            </span>
          </div>
        </div>

        {/* Multi-Step Form with Fast-Track Messaging */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="lg:col-span-2">
            <MultiStepForm />
          </div>
          
          {/* Fast-Track Messaging Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-teal-50 border-2 border-teal-600 rounded-lg p-6 sticky top-24">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-teal-600 rounded-full flex items-center justify-center">
                  <span className="material-icons-outlined text-white text-2xl">schedule</span>
                </div>
                <div>
                  <p className="text-sm text-teal-800 font-semibold uppercase tracking-wide">Priority Service</p>
                  <p className="text-2xl font-bold text-teal-900">45 Minutes</p>
                </div>
              </div>
              <p className="text-slate-700 mb-4">
                Average response time for South London & Surrey residents
              </p>
              <div className="space-y-3 text-sm text-slate-600">
                <div className="flex items-start gap-2">
                  <span className="material-icons-outlined text-teal-600 text-lg">check_circle</span>
                  <span>Fixed-price quote within 24 hours</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="material-icons-outlined text-teal-600 text-lg">check_circle</span>
                  <span>No hidden costs or surprises</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="material-icons-outlined text-teal-600 text-lg">check_circle</span>
                  <span>Photos get priority estimates</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Alternative Contact Methods */}
        <div className="mt-16 max-w-4xl mx-auto">
          <h2 className="text-2xl font-serif font-bold text-center text-slate-900 mb-8">
            Prefer to speak directly?
          </h2>
          <ContactMethods />
        </div>

        {/* Google Maps Embed - GMB Entity Link */}
        <div className="mt-16 max-w-4xl mx-auto">
          <h2 className="text-2xl font-serif font-bold text-center text-slate-900 mb-8">
            Visit Our Office
          </h2>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="aspect-video w-full rounded-lg overflow-hidden">
              {/* TODO: Replace with actual GMB embed code from Google Maps "Share > Embed a Map" */}
              {/* This links the Entity ID for local SEO */}
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2488.0!2d-0.1003!3d51.3989!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTHCsDIzJzU2LjAiTiAwwrAwNicwMS4xIlc!5e0!3m2!1sen!2suk!4v1234567890"
                width="100%" 
                height="100%" 
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Fredi Builders Location - 71 Lyndhurst Road, Thornton Heath, Croydon CR7 7PZ"
              />
            </div>
            <div className="mt-4 text-center">
              <p className="text-slate-700 font-semibold">71 Lyndhurst Road, Thornton Heath</p>
              <p className="text-slate-600">Croydon, CR7 7PZ</p>
              <a 
                href="https://maps.google.com/?q=71+Lyndhurst+Road+Thornton+Heath+CR7+7PZ" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 text-teal-600 hover:text-teal-700 font-semibold"
              >
                Get Directions →
              </a>
            </div>
          </div>
        </div>

        {/* Trust Signals */}
        <div className="mt-12 text-center">
          <p className="text-slate-600">
            Serving South London and Surrey • 15 Years Experience • £2M Public Liability
            Insurance
          </p>
        </div>
      </div>
    </main>
    <Footer />
    <WhatsAppFloatButton />
    </>
  )
}
