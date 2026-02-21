import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Builders in Leatherhead KT22 | Bathroom & Structural Experts | Fredi Builders',
  description: 'Expert builders in Leatherhead KT22. Bathroom renovations, structural repairs, wet rooms. 104 five-star reviews. British Standard certified.',
  keywords: 'builders Leatherhead, bathroom fitters KT22, structural repairs Leatherhead',
}

export default function LeatherheadKT22() {
  return (
    <main className="container">
      <h1>Builders in Leatherhead KT22</h1>
      <p className="trust-badge">⭐ 104 Five-Star Reviews | British Standard Certified</p>

      <section className="location-intro">
        <h2>Expert Building Services in Leatherhead</h2>
        <p>Serving Leatherhead and the KT22 postcode with professional building and renovation services for over 15 years.</p>
      </section>

      <section className="services-local">
        <h2>Services in Leatherhead KT22</h2>
        <ul>
          <li><Link href="/services/full-bathroom-renovations">Full Bathroom Renovations</Link></li>
          <li><Link href="/services/structural-building-repairs">Structural Building Repairs</Link></li>
        </ul>
      </section>
    </main>
  )
}
