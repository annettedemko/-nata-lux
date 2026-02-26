'use client'

import { usePathname } from 'next/navigation'
import { BreadcrumbSchema } from './BreadcrumbSchema'

const BASE_URL = 'https://munich-beauty.de'

const SEGMENT_NAMES: Record<string, string> = {
  about: 'Über uns',
  contact: 'Kontakt',
  prices: 'Preise',
  services: 'Behandlungen',
  shop: 'Shop',
  laser: 'Laser',
  training: 'Schulungen',
  'permanent-makeup': 'Permanent Make-up',
  'anti-aging': 'Anti-Aging',
  'lashes-brows': 'Wimpern & Augenbrauen',
  impressum: 'Impressum',
  datenschutz: 'Datenschutz',
  agb: 'AGB',
  widerruf: 'Widerruf',
  // Service subpages
  wimpernverlaengerung: 'Wimpernverlängerung',
  'wimpern-augenbrauen-laminierung': 'Laminierung',
  'powder-brows': 'Powder Brows',
  'aquarell-lips': 'Aquarell Lips',
  wimpernkranz: 'Wimpernkranz',
  'pmu-remover': 'PMU Remover',
  gesichtsreinigung: 'Gesichtsreinigung',
  microneedling: 'Microneedling',
  phonophorese: 'Phonophorese',
  'darsonval-haare': 'Darsonval Haare',
  'apparative-anti-aging': 'Apparatives Anti-Aging',
  'rf-lifting': 'RF-Lifting',
  lichttherapie: 'Lichttherapie',
  biostrom: 'Biostrom',
  ultraschall: 'Ultraschall',
  koerperbehandlungen: 'Körperbehandlungen',
  'rf-vakuum': 'RF-Vakuum',
  kavitation: 'Kavitation',
  // Shop subpages
  renew: 'RENEW',
  whitening: 'Whitening',
  'golden-age': 'Golden Age',
  'anti-age': 'Anti Age',
  retinol: 'Retinol',
  'biorepair-pro': 'Biorepair Pro',
  'dermo-control': 'Dermo Control',
  propioguard: 'Propioguard',
  peelings: 'Peelings',
  masks: 'Masken',
  'basic-care': 'Basic Care',
  'sun-protection': 'Sonnenschutz',
  'sensitive-skin': 'Sensitive Skin',
  hydration: 'Hydration',
  aqualia: 'Aqualia',
  'vitamin-c': 'Vitamin C',
  professional: 'Professional',
  'problem-skin': 'Problem Skin',
  'renew-bio-repair-pro': 'RENEW Bio Repair Pro',
}

export function BreadcrumbInjector() {
  const pathname = usePathname()

  if (pathname === '/') return null

  const segments = pathname.split('/').filter(Boolean)
  const items = [{ name: 'Startseite', url: `${BASE_URL}/` }]

  let currentPath = ''
  for (const segment of segments) {
    currentPath += `/${segment}`
    const name = SEGMENT_NAMES[segment] || segment
    items.push({ name, url: `${BASE_URL}${currentPath}/` })
  }

  return <BreadcrumbSchema items={items} />
}
