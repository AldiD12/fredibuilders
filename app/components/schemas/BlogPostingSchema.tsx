interface BlogPostingSchemaProps {
  title: string
  description: string
  url: string
  datePublished: string
  dateModified: string
  authorName?: string
  imagePath?: string
}

export default function BlogPostingSchema({
  title,
  description,
  url,
  datePublished,
  dateModified,
  authorName = 'Fredi Dengu',
  imagePath = '/images/luxury-marble-bathroom-walk-in-shower.webp',
}: BlogPostingSchemaProps) {
  const baseUrl = 'https://fredibuilders.co.uk'

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: title,
    description: description,
    url: url,
    datePublished: datePublished,
    dateModified: dateModified,
    author: {
      '@type': 'Person',
      name: authorName,
      url: `${baseUrl}/about`,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Fredi Builders',
      url: baseUrl,
      logo: {
        '@type': 'ImageObject',
        url: `${baseUrl}/images/logo.webp`,
      },
    },
    image: {
      '@type': 'ImageObject',
      url: `${baseUrl}${imagePath}`,
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
