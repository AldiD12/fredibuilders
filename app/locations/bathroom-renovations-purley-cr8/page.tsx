import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Bathroom Renovations Purley CR8 | Expert Fitters | Fredi Builders',
  description: 'Professional bathroom renovations in Purley CR8. 104 five-star reviews. Complete bathroom transformations. Free quotes.',
  keywords: 'bathroom renovations Purley, bathroom fitters CR8, Purley bathroom specialists',
}

export default function PurleyCR8() {
  return (
    <main className="container">
      <h1>Bathroom Renovations Purley CR8</h1>
      <p className="trust-badge">⭐ 104 Five-Star Reviews | Local Experts</p>

      <section className="location-intro">
        <h2>Expert Bathroom Services in Purley</h2>
        <p>Serving Purley and the CR8 postcode with professional bathroom renovations for over 15 years.</p>
      </section>

      <section className="services-local">
        <h2>Services in Purley CR8</h2>
        <ul>
          <li><Link href="/services/full-bathroom-renovations">Full Bathroom Renovations</Link></li>
          <li><Link href="/services/wet-room-installations">Wet Room Installations</Link></li>
        </ul>
      </section>
    </main>
  )
}
