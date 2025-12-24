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
      <head>
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

            // Default consent to denied (GDPR compliant)
            gtag('consent', 'default', {
              'analytics_storage': 'denied'
            });

            gtag('config', 'G-9WW8PXXRQ0', {
              page_path: window.location.pathname,
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
