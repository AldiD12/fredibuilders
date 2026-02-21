import { GalleryImage } from '@/app/data/gallery'

interface ImageGallerySchemaProps {
  images: GalleryImage[]
}

export default function ImageGallerySchema({ images }: ImageGallerySchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ImageGallery',
    name: 'Fredi Builders Project Gallery',
    description: 'Premium bathroom renovations, wet room installations, and luxury tiling projects across South London and Surrey',
    url: 'https://fredibuilders.co.uk/gallery',
    image: images.map((img) => ({
      '@type': 'ImageObject',
      contentUrl: `https://fredibuilders.co.uk${img.src}`,
      caption: img.alt,
      description: `${img.service || 'Building project'} in ${img.location || 'South London and Surrey'}`,
      width: img.width,
      height: img.height,
      name: img.id
    }))
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
