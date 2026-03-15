import type { MetadataRoute } from 'next'

export const dynamic = 'force-static'

const BASE_URL = 'https://munich-beauty.de'

export default function sitemap(): MetadataRoute.Sitemap {

  // High priority — main pages
  const mainPages = [
    { url: '/', priority: 1.0, changeFrequency: 'weekly' as const },
    { url: '/services', priority: 0.9, changeFrequency: 'weekly' as const },
    { url: '/prices', priority: 0.9, changeFrequency: 'weekly' as const },
    { url: '/shop', priority: 0.8, changeFrequency: 'weekly' as const },
    { url: '/contact', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/about', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/training', priority: 0.7, changeFrequency: 'monthly' as const },
  ]

  // Service category pages
  const serviceCategories = [
    { url: '/laser', priority: 0.8, changeFrequency: 'weekly' as const },
    { url: '/permanent-makeup', priority: 0.8, changeFrequency: 'weekly' as const },
    { url: '/anti-aging', priority: 0.8, changeFrequency: 'weekly' as const },
    { url: '/lashes-brows', priority: 0.8, changeFrequency: 'weekly' as const },
    { url: '/massagen', priority: 0.8, changeFrequency: 'weekly' as const },
  ]

  // Individual service pages
  const servicePages = [
    '/services/wimpernverlaengerung',
    '/services/wimpern-augenbrauen-laminierung',
    '/services/powder-brows',
    '/services/aquarell-lips',
    '/services/wimpernkranz',
    '/services/pmu-remover',
    '/services/microneedling',
    '/services/gesichtsreinigung',
    '/services/phonophorese',
    '/services/darsonval-haare',
    '/services/apparative-anti-aging',
    '/services/apparative-anti-aging/rf-lifting',
    '/services/apparative-anti-aging/ultraschall',
    '/services/apparative-anti-aging/lichttherapie',
    '/services/apparative-anti-aging/biostrom',
    '/services/koerperbehandlungen',
    '/services/koerperbehandlungen/rf-vakuum',
    '/services/koerperbehandlungen/kavitation',
  ].map((url) => ({
    url,
    priority: 0.7,
    changeFrequency: 'monthly' as const,
  }))

  // Shop pages
  const shopPages = [
    '/shop/renew/whitening',
    '/shop/renew/golden-age',
    '/shop/renew/anti-age',
    '/shop/renew/anti-aging',
    '/shop/renew/retinol',
    '/shop/renew/biorepair-pro',
    '/shop/renew/dermo-control',
    '/shop/renew/propioguard',
    '/shop/renew/peelings',
    '/shop/renew/masks',
    '/shop/renew/basic-care',
    '/shop/renew/sun-protection',
    '/shop/renew/sensitive-skin',
    '/shop/renew/aqualia',
    '/shop/renew/vitamin-c',
    '/shop/renew/professional',
    '/shop/renew/hydration',
    '/shop/renew/problem-skin',
    '/shop/renew-bio-repair-pro',
  ].map((url) => ({
    url,
    priority: 0.6,
    changeFrequency: 'monthly' as const,
  }))

  // Legal pages — low priority, rarely change
  const legalPages = [
    '/impressum',
    '/datenschutz',
    '/agb',
    '/widerruf',
  ].map((url) => ({
    url,
    priority: 0.3,
    changeFrequency: 'yearly' as const,
  }))

  const allPages = [
    ...mainPages,
    ...serviceCategories,
    ...servicePages,
    ...shopPages,
    ...legalPages,
  ]

  return allPages.map((page) => ({
    url: `${BASE_URL}${page.url}`,
    lastModified: '2026-03-15',
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }))
}
