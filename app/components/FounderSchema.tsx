/**
 * Founder Person Schema Component
 * Part 4: E-E-A-T - The "Human Entity"
 * Links Fredi Dengu to business entity for Google trust signals
 */

interface FounderSchemaProps {
  includeInPage?: boolean
}

export default function FounderSchema({ includeInPage = true }: FounderSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Fredi Dengu',
    jobTitle: 'Founder & Lead Contractor',
    worksFor: {
      '@type': 'LocalBusiness',
      name: 'Fredi Builders',
      url: 'https://fredibuilders.co.uk',
      telephone: '+447468451511'
    },
    description: 'Lead contractor at Fredi Builders with 15+ years of experience in luxury bathroom renovations and structural building work across South London and Surrey.',
    knowsAbout: [
      'Bathroom Renovations',
      'Wet Room Installations',
      'Luxury Tiling',
      'Structural Building Repairs',
      'RSJ Steel Beam Installation',
      'Building Regulations Compliance'
    ],
    // Link to external profiles for E-E-A-T
    sameAs: [
      'https://www.checkatrade.com/trades/FrediBuilders',
      // Add LinkedIn when available
      // Add other verified profiles
    ],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Thornton Heath',
      addressRegion: 'Surrey',
      postalCode: 'CR7',
      addressCountry: 'GB'
    }
  }

  if (!includeInPage) {
    return null
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
