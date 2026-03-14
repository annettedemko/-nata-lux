'use client'

import { useState, useEffect } from 'react'
import { MapPin } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'
import Link from 'next/link'

interface GoogleMapsEmbedProps {
  src: string
  className?: string
  height?: string
}

export function GoogleMapsEmbed({ src, className = '', height = '320' }: GoogleMapsEmbedProps) {
  const { language } = useLanguage()
  const [showMap, setShowMap] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // If user already accepted cookies via banner, load map directly
    const consent = localStorage.getItem('cookie-consent')
    if (consent === 'accepted') {
      setShowMap(true)
    }
    setIsLoaded(true)
  }, [])

  const text = {
    de: {
      button: 'Interaktive Karte laden',
      privacy: 'Beim Laden werden Daten an Google übertragen.',
      privacyLink: 'Datenschutzerklärung',
    },
    ru: {
      button: 'Загрузить карту',
      privacy: 'При загрузке данные передаются Google.',
      privacyLink: 'Политика конфиденциальности',
    },
    ua: {
      button: 'Завантажити карту',
      privacy: 'При завантаженні дані передаються Google.',
      privacyLink: 'Політика конфіденційності',
    },
  }

  const t = text[language as keyof typeof text] || text.de

  // SSR / loading: empty placeholder to prevent layout shift
  if (!isLoaded) {
    return (
      <div
        className={`bg-brand-latte/30 rounded-xl ${className}`}
        style={{ minHeight: `${height}px`, width: '100%' }}
      />
    )
  }

  // Cookie consent accepted → load Google Maps directly
  if (showMap) {
    return (
      <iframe
        src={src}
        className={className}
        height={height}
        style={{ border: 0, width: '100%' }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Maps"
      />
    )
  }

  // Beautiful 2-click fallback with elegant card design
  return (
    <div
      className={`relative overflow-hidden rounded-2xl group cursor-pointer ${className}`}
      style={{ minHeight: `${height}px` }}
      onClick={() => setShowMap(true)}
    >
      {/* Static map preview with warm tint */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
        style={{
          backgroundImage: 'url(/map-preview.jpg)',
          filter: 'saturate(0.7) contrast(1.05) brightness(0.95)',
        }}
      />

      {/* Warm overlay matching brand palette */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#2B1F18]/80 via-[#4A4038]/40 to-[#8E8072]/15 transition-opacity duration-300" />

      {/* Subtle warm tint overlay */}
      <div className="absolute inset-0" style={{ backgroundColor: 'rgba(201, 169, 116, 0.08)' }} />

      {/* Pin marker with pulse */}
      <div className="absolute top-[38%] left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="relative">
          {/* Pulse ring */}
          <div className="absolute inset-0 -m-3 rounded-full bg-brand-gold/20 animate-ping" style={{ animationDuration: '2s' }} />
          <div className="relative w-12 h-12 rounded-full bg-brand-gold/90 shadow-lg flex items-center justify-center border-2 border-white/80">
            <MapPin className="w-6 h-6 text-white" strokeWidth={2} />
          </div>
          <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-4 h-1.5 bg-black/20 rounded-full blur-sm" />
        </div>
      </div>

      {/* Address card + load button */}
      <div
        className="relative z-10 flex flex-col items-center justify-end h-full p-4 md:p-6 pb-6 md:pb-8"
        style={{ minHeight: `${height}px` }}
      >
        {/* Address info card */}
        <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-xl p-4 md:p-5 mb-3 max-w-sm w-full border border-brand-gold/10 transition-all duration-300 group-hover:shadow-2xl group-hover:-translate-y-0.5">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-brand-gold/10 flex items-center justify-center flex-shrink-0">
              <MapPin className="w-5 h-5 text-brand-gold" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-semibold text-brand-espresso text-sm md:text-base">Nata Lux Beauty Studio</p>
              <p className="text-brand-coffee/70 text-xs md:text-sm mt-0.5">Elsässer Str. 33, 81667 München</p>
              <p className="text-brand-coffee/50 text-xs mt-0.5">Haidhausen · S-Bahn Ostbahnhof</p>
            </div>
          </div>

          {/* Load map button inside card */}
          <button
            onClick={(e) => {
              e.stopPropagation()
              setShowMap(true)
            }}
            className="w-full mt-3 px-4 py-2.5 bg-brand-gold/10 hover:bg-brand-gold/20 text-brand-gold font-medium rounded-xl transition-all duration-300 text-sm flex items-center justify-center gap-2"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
            </svg>
            {t.button}
          </button>
        </div>

        <p className="text-white/60 text-xs max-w-xs text-center">
          {t.privacy}{' '}
          <Link href="/datenschutz" className="underline hover:text-white/90 transition-colors">
            {t.privacyLink}
          </Link>
        </p>
      </div>
    </div>
  )
}
