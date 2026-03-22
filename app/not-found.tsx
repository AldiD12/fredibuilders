import Link from 'next/link'
import Navigation from './components/Navigation'
import Footer from './components/Footer'

export default function NotFound() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-slate-50 flex items-center justify-center py-20">
        <div className="container mx-auto px-6 text-center max-w-2xl">
          <h1 className="font-playfair text-6xl md:text-8xl font-bold text-primary mb-4">404</h1>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
            Page Not Found
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Sorry, the page you're looking for doesn't exist or has been moved.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="bg-primary hover:bg-primary-hover text-white font-bold py-3 px-8 rounded shadow-lg transition-all duration-200"
            >
              Back to Home
            </Link>
            <Link
              href="/contact"
              className="bg-white hover:bg-gray-50 text-slate-900 font-bold py-3 px-8 rounded shadow-lg border border-gray-200 transition-all duration-200"
            >
              Get a Quote
            </Link>
            <Link
              href="/gallery"
              className="bg-white hover:bg-gray-50 text-slate-900 font-bold py-3 px-8 rounded shadow-lg border border-gray-200 transition-all duration-200"
            >
              View Our Work
            </Link>
          </div>
          <div className="mt-12 text-sm text-gray-500">
            <p>Looking for something specific? Try these popular pages:</p>
            <div className="flex flex-wrap justify-center gap-4 mt-4">
              <Link href="/services" className="text-primary hover:underline">Services</Link>
              <Link href="/locations" className="text-primary hover:underline">Service Areas</Link>
              <Link href="/reviews" className="text-primary hover:underline">Reviews</Link>
              <Link href="/about" className="text-primary hover:underline">About Us</Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
