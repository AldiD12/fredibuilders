import { Review } from '@/app/data/reviews'

interface ReviewSchemaProps {
  reviews: Review[]
}

export default function ReviewSchema({ reviews }: ReviewSchemaProps) {
  const schema = reviews.map((review) => ({
    '@context': 'https://schema.org',
    '@type': 'Review',
    '@id': `https://fredibuilders.co.uk/reviews#${review.id}`,
    itemReviewed: {
      '@type': 'LocalBusiness',
      name: 'Fredi Builders',
      image: 'https://fredibuilders.co.uk/og-image.jpg',
      telephone: '+447468451511',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '71 Lyndhurst Road',
        addressLocality: 'Thornton Heath',
        addressRegion: 'Greater London',
        postalCode: 'CR7 7PZ',
        addressCountry: 'GB'
      }
    },
    reviewRating: {
      '@type': 'Rating',
      ratingValue: review.rating,
      bestRating: 10,
      worstRating: 1
    },
    author: {
      '@type': 'Person',
      name: review.author
    },
    datePublished: review.date,
    reviewBody: review.text,
    publisher: {
      '@type': 'Organization',
      name: 'Checkatrade'
    }
  }))

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
