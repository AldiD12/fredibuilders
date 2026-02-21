import { MetadataRoute } from 'next'
import { locations } from './data/locations'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.fredibuilders.co.uk'
  const currentDate = new Date()

  // Homepage
  const homepage: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
  ]

  // About page
  const aboutPage: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ]

  // Contact page
  const contactPage: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ]

  // Gallery page
  const galleryPage: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/gallery`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
  ]

  // Reviews page
  const reviewsPage: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/reviews`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
  ]

  // Service pages (5 services)
  const servicePages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/services`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services/full-bathroom-renovations`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services/wet-room-installations`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services/luxury-tiling-services`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services/disabled-assisted-bathrooms`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services/structural-building-repairs`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ]

  // Location pages (18 locations dynamically generated from locations data)
  const locationPages: MetadataRoute.Sitemap = locations.map((location) => ({
    url: `${baseUrl}/locations/${location.slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  // Locations index page
  const locationsIndexPage: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/locations`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ]

  // Blog page (if exists)
  const blogPage: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/blog`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.6,
    },
  ]

  // Combine all pages
  return [
    ...homepage,
    ...aboutPage,
    ...contactPage,
    ...galleryPage,
    ...reviewsPage,
    ...servicePages,
    ...locationsIndexPage,
    ...locationPages,
    ...blogPage,
  ]
}
