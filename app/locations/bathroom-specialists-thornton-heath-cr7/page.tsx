import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Bathroom Specialists Thornton Heath CR7 | Expert Fitters | Fredi Builders',
  description: 'Professional bathroom specialists in Thornton Heath CR7. 104 five-star reviews. Complete renovations, wet rooms, tiling. Free quotes.',
  keywords: 'bathroom specialists Thornton Heath, bathroom fitters CR7, Thornton Heath renovations',
}

export default function ThorntonHeathCR7() {
  return (
    <main className="container">
      <h1>Bathroom Specialists Thornton Heath CR7</h1>
      <p className="trust-badge">⭐ 104 Five-Star Reviews | Local Experts</p>

      <section className="location-intro">
        <h2>Expert Bathroom Services in Thornton Heath</h2>
        <p>Serving Thornton Heath and the CR7 postcode with professional bathroom renovations for over 15 years.</p>
      </section>

      <section className="services-local">
        <h2>Services in Thornton Heath CR7</h2>
        <ul>
          <li><Link href="/services/full-bathroom-renovations">Full Bathroom Renovations</Link></li>
          <li><Link href="/services/wet-room-installations">Wet Room Installations</Link></li>
        </ul>
      </section>
    </main>
  )
}
