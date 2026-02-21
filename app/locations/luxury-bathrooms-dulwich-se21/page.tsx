import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Luxury Bathrooms Dulwich SE21 | High-End Renovations | Fredi Builders',
  description: 'Luxury bathroom renovations in Dulwich SE21. Premium tiling, wet rooms, complete transformations. 104 five-star reviews.',
  keywords: 'luxury bathrooms Dulwich, bathroom renovations SE21, high-end bathrooms Dulwich',
}

export default function DulwichSE21() {
  return (
    <main className="container">
      <h1>Luxury Bathrooms Dulwich SE21</h1>
      <p className="trust-badge">⭐ 104 Five-Star Reviews | Premium Service</p>

      <section className="location-intro">
        <h2>High-End Bathroom Services in Dulwich</h2>
        <p>Serving Dulwich and the SE21 postcode with luxury bathroom renovations for over 15 years.</p>
      </section>

      <section className="services-local">
        <h2>Services in Dulwich SE21</h2>
        <ul>
          <li><Link href="/services/luxury-tiling-services">Luxury Tiling Services</Link></li>
          <li><Link href="/services/full-bathroom-renovations">Full Bathroom Renovations</Link></li>
        </ul>
      </section>
    </main>
  )
}
