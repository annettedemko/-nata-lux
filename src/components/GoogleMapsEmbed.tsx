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

  // Beautiful 2-click fallback with static map preview
  return (
    <div
      className={`relative overflow-hidden rounded-xl group cursor-pointer ${className}`}
      style={{ minHeight: `${height}px` }}
      onClick={() => setShowMap(true)}
    >
      {/* Static map preview (OpenStreetMap, no data transfer) */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
        style={{ backgroundImage: 'url(/map-preview.jpg)' }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-brand-espresso/60 via-brand-espresso/30 to-brand-espresso/10 transition-opacity duration-300" />

      {/* Pin marker */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[130%]">
        <div className="relative">
          <MapPin className="w-10 h-10 text-red-500 drop-shadow-lg" fill="currentColor" strokeWidth={1.5} stroke="white" />
          <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-3 h-1 bg-black/20 rounded-full blur-sm" />
        </div>
      </div>

      {/* Load button */}
      <div
        className="relative z-10 flex flex-col items-center justify-end h-full p-6 pb-8"
        style={{ minHeight: `${height}px` }}
      >
        <button
          onClick={(e) => {
            e.stopPropagation()
            setShowMap(true)
          }}
          className="px-6 py-3 bg-white/95 backdrop-blur-sm text-brand-espresso font-medium rounded-xl hover:bg-white transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 flex items-center gap-2"
        >
          <MapPin className="w-4 h-4 text-brand-gold" />
          {t.button}
        </button>
        <p className="text-white/70 text-xs mt-3 max-w-xs text-center">
          {t.privacy}{' '}
          <Link href="/datenschutz" className="underline hover:text-white transition-colors">
            {t.privacyLink}
          </Link>
        </p>
      </div>
    </div>
  )
}
