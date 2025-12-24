'use client'

import { useState, useEffect } from 'react'
import { X, Cookie } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'
import Link from 'next/link'

export function CookieConsent() {
  const { language } = useLanguage()
  const [isVisible, setIsVisible] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  const initializeAnalytics = () => {
    // Grant consent for analytics when user accepts
    if (typeof window !== 'undefined' && typeof (window as any).gtag === 'function') {
      (window as any).gtag('consent', 'update', {
        'analytics_storage': 'granted'
      });
      console.log('✅ Google Analytics activated - consent granted')
    }
  }

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem('cookie-consent')
    const analytics = localStorage.getItem('cookie-analytics')

    if (!consent) {
      setIsVisible(true)
    } else if (consent === 'accepted' && analytics === 'true') {
      // User previously accepted - activate analytics
      initializeAnalytics()
    }

    setIsLoaded(true)
  }, [])

  const handleAcceptAll = () => {
    localStorage.setItem('cookie-consent', 'accepted')
    localStorage.setItem('cookie-analytics', 'true')
    setIsVisible(false)
    // Initialize analytics here
    initializeAnalytics()
  }

  const handleRejectAll = () => {
    localStorage.setItem('cookie-consent', 'rejected')
    localStorage.setItem('cookie-analytics', 'false')
    setIsVisible(false)
  }

  const handleAcceptNecessary = () => {
    localStorage.setItem('cookie-consent', 'necessary-only')
    localStorage.setItem('cookie-analytics', 'false')
    setIsVisible(false)
  }

  // Don't render anything on server or if already consented
  if (!isLoaded || !isVisible) {
    return null
  }

  const content = {
    de: {
      title: 'Cookie-Einstellungen',
      description:
        'Wir verwenden Cookies, um Ihnen das beste Erlebnis auf unserer Website zu bieten. Technisch notwendige Cookies sind für die Funktion der Website erforderlich. Mit Ihrer Zustimmung verwenden wir auch Analyse-Cookies (Google Analytics, Ahrefs) zur Verbesserung unserer Website.',
      acceptAll: 'Alle akzeptieren',
      rejectAll: 'Alle ablehnen',
      necessary: 'Nur notwendige',
      privacy: 'Datenschutzerklärung',
    },
    ru: {
      title: 'Настройки Cookie',
      description:
        'Мы используем файлы Cookie, чтобы предоставить вам лучший опыт на нашем сайте. Технически необходимые Cookie требуются для работы сайта. С вашего согласия мы также используем аналитические Cookie (Google Analytics, Ahrefs) для улучшения нашего сайта.',
      acceptAll: 'Принять все',
      rejectAll: 'Отклонить все',
      necessary: 'Только необходимые',
      privacy: 'Политика конфиденциальности',
    },
    uk: {
      title: 'Налаштування Cookie',
      description:
        'Ми використовуємо файли Cookie, щоб надати вам найкращий досвід на нашому сайті. Технічно необхідні Cookie потрібні для роботи сайту. З вашої згоди ми також використовуємо аналітичні Cookie (Google Analytics, Ahrefs) для покращення нашого сайту.',
      acceptAll: 'Прийняти всі',
      rejectAll: 'Відхилити всі',
      necessary: 'Тільки необхідні',
      privacy: 'Політика конфіденційності',
    },
  }

  const t = content[language as keyof typeof content] || content.de

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center p-4 pointer-events-none">
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm pointer-events-auto" />

      {/* Cookie Banner */}
      <div className="relative w-full max-w-2xl mb-4 pointer-events-auto animate-slide-up">
        <div className="glass rounded-2xl p-6 md:p-8 shadow-2xl border border-brand-gold/20">
          {/* Header */}
          <div className="flex items-start gap-3 mb-4">
            <Cookie className="w-6 h-6 md:w-7 md:h-7 text-brand-gold flex-shrink-0 mt-1" />
            <div className="flex-1">
              <h2 className="text-xl md:text-2xl font-heading font-semibold text-brand-espresso mb-2">
                {t.title}
              </h2>
              <p className="text-sm md:text-base text-brand-coffee/80 leading-relaxed">
                {t.description}
              </p>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 mt-6">
            <button
              onClick={handleAcceptAll}
              className="flex-1 px-6 py-3 bg-brand-gold text-white font-medium rounded-xl hover:bg-brand-gold/90 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              {t.acceptAll}
            </button>
            <button
              onClick={handleAcceptNecessary}
              className="flex-1 px-6 py-3 bg-brand-espresso/10 text-brand-espresso font-medium rounded-xl hover:bg-brand-espresso/20 transition-all duration-300"
            >
              {t.necessary}
            </button>
            <button
              onClick={handleRejectAll}
              className="flex-1 px-6 py-3 bg-transparent border-2 border-brand-coffee/30 text-brand-coffee font-medium rounded-xl hover:bg-brand-coffee/5 transition-all duration-300"
            >
              {t.rejectAll}
            </button>
          </div>

          {/* Privacy Link */}
          <div className="mt-4 text-center">
            <Link
              href="/datenschutz"
              className="text-sm text-brand-gold hover:text-brand-gold/80 transition-colors underline"
            >
              {t.privacy}
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
