interface AggregateRatingSchemaProps {
  ratingValue: number
  reviewCount: number
  bestRating?: number
  worstRating?: number
  itemName?: string
  itemType?: string
}

export default function AggregateRatingSchema({
  ratingValue,
  reviewCount,
  bestRating = 10,
  worstRating = 1,
  itemName = 'Fredi Builders',
  itemType = 'LocalBusiness'
}: AggregateRatingSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': itemType,
    name: itemName,
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: ratingValue,
      reviewCount: reviewCount,
      bestRating: bestRating,
      worstRating: worstRating
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
