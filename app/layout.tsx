import type { Metadata } from 'next'
import { Playfair_Display, Cormorant_Garamond, Inter } from 'next/font/google'
import Script from 'next/script'
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
  verification: {
    google: '1f4c5d6c83b5b4f6',
  },
  title: 'Nata Lux - Beauty Studio München',
  description: 'Professionelles Beauty Studio in München – Wimpernverlängerung, Permanent Make-up, Laserbehandlungen, Anti-Aging und Kosmetik. Jetzt Termin buchen!',
  keywords: 'beauty studio München, Wimpernverlängerung München, Permanent Make-up München, Anti-Aging München, Kosmetikstudio München, Laserbehandlungen München',
  metadataBase: new URL('https://munich-beauty.de'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Nata Lux - Beauty Studio München',
    description: 'Professionelles Beauty Studio in München – Wimpernverlängerung, Permanent Make-up, Laserbehandlungen, Anti-Aging und Kosmetik.',
    url: 'https://munich-beauty.de',
    siteName: 'Nata Lux Beauty Studio',
    locale: 'de_DE',
    type: 'website',
    images: [{ url: 'https://munich-beauty.de/og-image.jpg', width: 1200, height: 630, alt: 'Nata Lux Beauty Studio München' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nata Lux - Beauty Studio München',
    description: 'Professionelles Beauty Studio in München – Wimpernverlängerung, Permanent Make-up, Laserbehandlungen, Anti-Aging und Kosmetik.',
    images: ['https://munich-beauty.de/og-image.jpg'],
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
      <head>
        {/* hreflang tags for multilingual SEO */}
        <link rel="alternate" hrefLang="de" href="https://munich-beauty.de/" />
        <link rel="alternate" hrefLang="ru" href="https://munich-beauty.de/?lang=ru" />
        <link rel="alternate" hrefLang="uk" href="https://munich-beauty.de/?lang=ua" />
        <link rel="alternate" hrefLang="x-default" href="https://munich-beauty.de/" />

        {/* LocalBusiness / BeautySalon JSON-LD Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BeautySalon",
              "name": "Nata Lux Beauty Studio",
              "alternateName": "NataLux",
              "url": "https://munich-beauty.de",
              "telephone": "+4917677267269",
              "email": "natali.lux@web.de",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Elsässer Straße 33",
                "addressLocality": "München",
                "addressRegion": "Bayern",
                "postalCode": "81667",
                "addressCountry": "DE"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 48.1291,
                "longitude": 11.6003
              },
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  "opens": "10:00",
                  "closes": "20:00"
                },
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": "Saturday",
                  "opens": "10:00",
                  "closes": "18:00"
                }
              ],
              "priceRange": "€€",
              "image": "https://munich-beauty.de/logo.png",
              "description": "Professionelles Beauty Studio in München-Haidhausen – Wimpernverlängerung, Permanent Make-up, Laserbehandlungen, Anti-Aging und Kosmetik.",
              "areaServed": {
                "@type": "City",
                "name": "München"
              },
              "availableLanguage": ["German", "Russian", "Ukrainian"]
            })
          }}
        />

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-9WW8PXXRQ0"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            // Default consent to denied (GDPR/DSGVO compliant - Consent Mode v2)
            gtag('consent', 'default', {
              'analytics_storage': 'denied',
              'functionality_storage': 'granted',
              'security_storage': 'granted',
              'wait_for_update': 500
            });

            gtag('config', 'G-9WW8PXXRQ0', {
              page_path: window.location.pathname,
              'anonymize_ip': true
            });
          `}
        </Script>
      </head>
      <body className={`${playfair.variable} ${cormorant.variable} ${inter.variable} font-heading`}>
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  )
}
