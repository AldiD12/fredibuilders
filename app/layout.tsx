import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import MobileStickyFooter from './components/MobileStickyFooter'
import './globals.css'

// The Architect - Elegant serif for headings
const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  weight: ['600', '700'],
  variable: '--font-playfair',
  display: 'swap',
})

// The Engineer - Clean sans-serif for body text
const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Bathroom Fitters Surrey & SW London | 104 Verified Reviews | Fredi Builders',
  description: 'Expert bathroom renovations, wet rooms & luxury tiling. 9.6/10 Checkatrade score with 104+ verified reviews. Serving South London, Surrey & M25. British Standard certified.',
  manifest: '/manifest.json',
  icons: {
    icon: [
      { url: '/favicon-48x48.png', sizes: '48x48', type: 'image/png' },
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
      { url: '/favicon-144x144.png', sizes: '144x144', type: 'image/png' }
    ],
    apple: [
      { url: '/favicon-144x144.png', sizes: '144x144', type: 'image/png' }
    ]
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${playfairDisplay.variable} ${inter.variable}`}>
      <head>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons+Outlined" rel="stylesheet" />
      </head>
      <body className="font-sans">
        {children}
        <MobileStickyFooter />
      </body>
    </html>
  )
}
