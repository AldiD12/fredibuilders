import type { Metadata } from 'next'
import Navigation from '@/app/components/Navigation'
import Footer from '@/app/components/Footer'
import WhatsAppFloatButton from '@/app/components/WhatsAppFloatButton'

export const metadata: Metadata = {
  title: 'Terms of Service | Fredi Builders',
  description: 'Terms of service for Fredi Builders bathroom renovation and building services.',
  alternates: {
    canonical: 'https://fredibuilders.co.uk/terms'
  }
}

export default function Terms() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-slate-50 py-12 md:py-20">
        <div className="container mx-auto px-6 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-8">
            Terms of Service
          </h1>
          
          <div className="bg-white rounded-lg shadow-sm p-8 space-y-6 text-slate-700">
            <p className="text-sm text-slate-500">Last updated: February 2026</p>
            
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Agreement to Terms</h2>
              <p>
                By accessing or using the Fredi Builders website and services, you agree to be bound by these Terms of Service and all applicable laws and regulations.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Services</h2>
              <p>
                Fredi Builders provides bathroom renovation, wet room installation, luxury tiling, and structural building services across Surrey and South London. All services are subject to availability and acceptance of quotes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Quotes and Estimates</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>All quotes are valid for 30 days from the date of issue</li>
                <li>Quotes are based on information provided by the client</li>
                <li>Final costs may vary if site conditions differ from initial assessment</li>
                <li>A deposit may be required to secure booking</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Payment Terms</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Payment schedules will be agreed upon before work commences</li>
                <li>Typical payment structure: deposit, progress payments, final payment on completion</li>
                <li>We accept bank transfer, cash, and card payments</li>
                <li>Late payments may incur additional charges</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Client Responsibilities</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide accurate information about the property and project requirements</li>
                <li>Ensure access to the property during agreed working hours</li>
                <li>Remove or protect valuable items from the work area</li>
                <li>Inform us of any changes to requirements promptly</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Warranty</h2>
              <p>
                All workmanship is guaranteed for 12 months from completion date. This warranty covers defects in workmanship but does not cover normal wear and tear, misuse, or damage caused by third parties.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">7. Insurance</h2>
              <p>
                Fredi Builders maintains Public Liability Insurance up to £2 million. We are fully insured for all work undertaken.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">8. Cancellation Policy</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Cancellations must be made in writing</li>
                <li>Deposits are non-refundable if work has been scheduled</li>
                <li>Cancellations after work has commenced will be charged for work completed and materials purchased</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">9. Limitation of Liability</h2>
              <p>
                Our liability is limited to the value of the contract. We are not liable for indirect or consequential losses.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">10. Governing Law</h2>
              <p>
                These terms are governed by the laws of England and Wales. Any disputes will be subject to the exclusive jurisdiction of the courts of England and Wales.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">11. Contact Information</h2>
              <div className="bg-slate-50 p-4 rounded">
                <p className="font-semibold">Fredi Builders</p>
                <p>71 Lyndhurst Road</p>
                <p>Thornton Heath, Croydon</p>
                <p>CR7 7PZ</p>
                <p className="mt-2">Email: fredibuilder18@icloud.com</p>
                <p>Phone: +44 7468 451511</p>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppFloatButton />
    </>
  )
}
