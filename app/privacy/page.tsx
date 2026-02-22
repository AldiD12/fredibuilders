import type { Metadata } from 'next'
import Navigation from '@/app/components/Navigation'
import Footer from '@/app/components/Footer'
import WhatsAppFloatButton from '@/app/components/WhatsAppFloatButton'

export const metadata: Metadata = {
  title: 'Privacy Policy | Fredi Builders',
  description: 'Privacy policy for Fredi Builders. Learn how we collect, use, and protect your personal information.',
  alternates: {
    canonical: 'https://fredibuilders.co.uk/privacy'
  }
}

export default function Privacy() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-slate-50 py-12 md:py-20">
        <div className="container mx-auto px-6 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-8">
            Privacy Policy
          </h1>
          
          <div className="bg-white rounded-lg shadow-sm p-8 space-y-6 text-slate-700">
            <p className="text-sm text-slate-500">Last updated: February 2026</p>
            
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Introduction</h2>
              <p>
                Fredi Builders ("we", "our", "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website fredibuilders.co.uk or use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Information We Collect</h2>
              <p className="mb-3">We collect information that you provide directly to us, including:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Name and contact information (email, phone number, address)</li>
                <li>Project details and requirements</li>
                <li>Photos you upload for quote requests</li>
                <li>Communication preferences</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">3. How We Use Your Information</h2>
              <p className="mb-3">We use the information we collect to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide quotes and estimates for bathroom renovation services</li>
                <li>Communicate with you about your project</li>
                <li>Improve our website and services</li>
                <li>Send you marketing communications (with your consent)</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Cookies</h2>
              <p>
                We use cookies and similar tracking technologies to track activity on our website and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Data Security</h2>
              <p>
                We implement appropriate technical and organizational security measures to protect your personal information. However, no method of transmission over the Internet is 100% secure.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Your Rights (GDPR)</h2>
              <p className="mb-3">Under UK GDPR, you have the right to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Access your personal data</li>
                <li>Rectify inaccurate personal data</li>
                <li>Request erasure of your personal data</li>
                <li>Object to processing of your personal data</li>
                <li>Request restriction of processing</li>
                <li>Data portability</li>
                <li>Withdraw consent at any time</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">7. Third-Party Services</h2>
              <p>
                We may use third-party services such as Google Analytics to analyze website usage. These services have their own privacy policies.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">8. Contact Us</h2>
              <p className="mb-3">
                If you have questions about this Privacy Policy or wish to exercise your rights, please contact us:
              </p>
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
