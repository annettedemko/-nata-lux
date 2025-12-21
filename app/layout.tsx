import type { Metadata } from 'next'
import { Playfair_Display, Cormorant_Garamond, Inter } from 'next/font/google'
import '../src/index.css'
import { ClientLayout } from './client-layout'

const playfair = Playfair_Display({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-playfair',
  display: 'swap',
})

const cormorant = Cormorant_Garamond({
  subsets: ['latin', 'cyrillic'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-cormorant',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Nata Lux - Beauty Studio München',
  description: 'Professional beauty services in Munich including lashes, brows, permanent makeup, laser treatments and anti-aging',
  keywords: 'beauty studio München, Wimpernverlängerung München, Permanent Make-up München, Anti-Aging München, Kosmetikstudio München',
  metadataBase: new URL('https://munich-beauty.de'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Nata Lux - Beauty Studio München',
    description: 'Professional beauty services in Munich including lashes, brows, permanent makeup, laser treatments and anti-aging',
    url: 'https://munich-beauty.de',
    siteName: 'Nata Lux Beauty Studio',
    locale: 'de_DE',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de">
      <body className={`${playfair.variable} ${cormorant.variable} ${inter.variable} font-heading`}>
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  )
}
