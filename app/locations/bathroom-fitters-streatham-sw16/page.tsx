import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Bathroom Fitters Streatham SW16 | Expert Renovations | Fredi Builders',
  description: 'Professional bathroom fitters in Streatham SW16. 104 five-star reviews. Full renovations, wet rooms, luxury tiling. Free quotes.',
  keywords: 'bathroom fitters Streatham, bathroom renovation SW16, Streatham bathroom specialists',
}

export default function StreathamSW16() {
  return (
    <main className="container">
      <h1>Bathroom Fitters Streatham SW16</h1>
      <p className="trust-badge">⭐ 104 Five-Star Reviews | Local Experts</p>

      <section className="location-intro">
        <h2>Expert Bathroom Services in Streatham</h2>
        <p>Serving Streatham and the SW16 postcode with professional bathroom renovations for over 15 years.</p>
      </section>

      <section className="services-local">
        <h2>Services in Streatham SW16</h2>
        <ul>
          <li><Link href="/services/full-bathroom-renovations">Full Bathroom Renovations</Link></li>
          <li><Link href="/services/wet-room-installations">Wet Room Installations</Link></li>
          <li><Link href="/services/luxury-tiling-services">Luxury Tiling</Link></li>
        </ul>
      </section>
    </main>
  )
}
