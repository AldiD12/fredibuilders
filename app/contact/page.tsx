import type { Metadata } from 'next'
import MultiStepForm from '@/app/components/MultiStepForm'
import Navigation from '@/app/components/Navigation'
import Footer from '@/app/components/Footer'
import ContactMethods from '@/app/components/ContactMethods'

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
    </>
  )
}
