'use client'

import { useState } from 'react'
import { MapPin } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

interface GoogleMapsEmbedProps {
  src: string
  className?: string
  height?: string
}

export function GoogleMapsEmbed({ src, className = '', height = '300' }: GoogleMapsEmbedProps) {
  const { language } = useLanguage()
  const [consented, setConsented] = useState(false)

  const text = {
    de: {
      title: 'Google Maps',
      description: 'Beim Laden der Karte werden Daten an Google übertragen. Weitere Informationen finden Sie in unserer Datenschutzerklärung.',
      button: 'Karte laden',
    },
    ru: {
      title: 'Google Maps',
      description: 'При загрузке карты данные передаются Google. Дополнительную информацию вы найдёте в нашей Политике конфиденциальности.',
      button: 'Загрузить карту',
    },
    ua: {
      title: 'Google Maps',
      description: 'При завантаженні карти дані передаються Google. Додаткову інформацію ви знайдете в нашій Політиці конфіденційності.',
      button: 'Завантажити карту',
    },
  }

  const t = text[language as keyof typeof text] || text.de

  if (consented) {
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

  return (
    <div
      className={`flex flex-col items-center justify-center bg-brand-latte/50 border border-brand-gold/20 rounded-xl text-center p-8 ${className}`}
      style={{ minHeight: `${height}px` }}
    >
      <MapPin className="w-10 h-10 text-brand-gold mb-3" />
      <p className="font-heading font-semibold text-brand-espresso mb-2">{t.title}</p>
      <p className="text-sm text-brand-coffee/70 mb-4 max-w-sm leading-relaxed">{t.description}</p>
      <button
        onClick={() => setConsented(true)}
        className="px-6 py-2 bg-brand-espresso text-white font-medium rounded-xl hover:bg-brand-espresso/90 transition-all duration-300 text-sm"
      >
        {t.button}
      </button>
    </div>
  )
}
