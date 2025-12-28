'use client'

import { useState, useEffect } from 'react'
import { X, Cookie, Shield, BarChart3 } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

interface CookieSettingsProps {
  isOpen: boolean
  onClose: () => void
}

export function CookieSettings({ isOpen, onClose }: CookieSettingsProps) {
  const { language } = useLanguage()
  const [analyticsEnabled, setAnalyticsEnabled] = useState(false)

  useEffect(() => {
    if (isOpen) {
      // Load current settings
      const analytics = localStorage.getItem('cookie-analytics')
      setAnalyticsEnabled(analytics === 'true')
    }
  }, [isOpen])

  const initializeAnalytics = () => {
    // Grant consent for analytics when user accepts
    if (typeof window !== 'undefined' && typeof (window as any).gtag === 'function') {
      (window as any).gtag('consent', 'update', {
        'analytics_storage': 'granted',
        'ad_storage': 'granted',
        'ad_user_data': 'granted',
        'ad_personalization': 'granted'
      });
      console.log('✅ Google Analytics activated - consent granted (Consent Mode v2)')
    }
  }

  const revokeAnalytics = () => {
    // Revoke consent for analytics
    if (typeof window !== 'undefined' && typeof (window as any).gtag === 'function') {
      (window as any).gtag('consent', 'update', {
        'analytics_storage': 'denied',
        'ad_storage': 'denied',
        'ad_user_data': 'denied',
        'ad_personalization': 'denied'
      });
      console.log('❌ Google Analytics deactivated - consent revoked')
    }
  }

  const handleSave = () => {
    localStorage.setItem('cookie-consent', 'custom')
    localStorage.setItem('cookie-analytics', analyticsEnabled ? 'true' : 'false')

    if (analyticsEnabled) {
      initializeAnalytics()
    } else {
      revokeAnalytics()
    }

    onClose()
  }

  const handleAcceptAll = () => {
    setAnalyticsEnabled(true)
    localStorage.setItem('cookie-consent', 'accepted')
    localStorage.setItem('cookie-analytics', 'true')
    initializeAnalytics()
    onClose()
  }

  const handleNecessaryOnly = () => {
    setAnalyticsEnabled(false)
    localStorage.setItem('cookie-consent', 'necessary-only')
    localStorage.setItem('cookie-analytics', 'false')
    revokeAnalytics()
    onClose()
  }

  const content = {
    de: {
      title: 'Cookie-Einstellungen',
      subtitle: 'Verwalten Sie Ihre Cookie-Präferenzen',
      description:
        'Wir verwenden Cookies, um Ihnen das beste Erlebnis auf unserer Website zu bieten. Sie können Ihre Präferenzen für verschiedene Cookie-Kategorien festlegen.',
      necessary: {
        title: 'Notwendige Cookies',
        description:
          'Diese Cookies sind für die Funktion der Website erforderlich und können nicht deaktiviert werden. Sie speichern z.B. Ihre Cookie-Einstellungen und Sprachpräferenzen.',
        alwaysActive: 'Immer aktiv',
      },
      analytics: {
        title: 'Statistik / Analytics',
        description:
          'Diese Cookies helfen uns zu verstehen, wie Besucher mit unserer Website interagieren. Wir verwenden Google Analytics und Ahrefs zur Verbesserung unserer Website.',
      },
      save: 'Speichern',
      acceptAll: 'Alle akzeptieren',
      necessaryOnly: 'Nur notwendige Cookies',
      privacy: 'Weitere Informationen finden Sie in unserer',
      privacyLink: 'Datenschutzerklärung',
    },
    ru: {
      title: 'Настройки Cookie',
      subtitle: 'Управляйте вашими предпочтениями Cookie',
      description:
        'Мы используем файлы Cookie, чтобы предоставить вам лучший опыт на нашем сайте. Вы можете настроить свои предпочтения для различных категорий Cookie.',
      necessary: {
        title: 'Необходимые Cookie',
        description:
          'Эти Cookie необходимы для работы сайта и не могут быть отключены. Они сохраняют ваши настройки Cookie и языковые предпочтения.',
        alwaysActive: 'Всегда активно',
      },
      analytics: {
        title: 'Статистика / Аналитика',
        description:
          'Эти Cookie помогают нам понять, как посетители взаимодействуют с нашим сайтом. Мы используем Google Analytics и Ahrefs для улучшения нашего сайта.',
      },
      save: 'Сохранить',
      acceptAll: 'Принять все',
      necessaryOnly: 'Только необходимые Cookie',
      privacy: 'Дополнительную информацию можно найти в нашей',
      privacyLink: 'Политике конфиденциальности',
    },
    uk: {
      title: 'Налаштування Cookie',
      subtitle: 'Керуйте вашими уподобаннями Cookie',
      description:
        'Ми використовуємо файли Cookie, щоб надати вам найкращий досвід на нашому сайті. Ви можете налаштувати свої уподобання для різних категорій Cookie.',
      necessary: {
        title: 'Необхідні Cookie',
        description:
          'Ці Cookie необхідні для роботи сайту і не можуть бути вимкнені. Вони зберігають ваші налаштування Cookie та мовні уподобання.',
        alwaysActive: 'Завжди активно',
      },
      analytics: {
        title: 'Статистика / Аналітика',
        description:
          'Ці Cookie допомагають нам зрозуміти, як відвідувачі взаємодіють з нашим сайтом. Ми використовуємо Google Analytics та Ahrefs для покращення нашого сайту.',
      },
      save: 'Зберегти',
      acceptAll: 'Прийняти всі',
      necessaryOnly: 'Тільки необхідні Cookie',
      privacy: 'Додаткову інформацію можна знайти в нашій',
      privacyLink: 'Політиці конфіденційності',
    },
  }

  const t = content[language as keyof typeof content] || content.de

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      {/* Backdrop - clicking outside does NOT close the modal */}
      <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" />

      {/* Modal */}
      <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto animate-slide-up">
        <div className="glass rounded-2xl p-6 md:p-8 shadow-2xl border border-brand-gold/20">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 text-brand-coffee/60 hover:text-brand-espresso transition-colors rounded-lg hover:bg-brand-espresso/5"
            aria-label="Schließen"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header */}
          <div className="flex items-start gap-3 mb-6">
            <Cookie className="w-7 h-7 text-brand-gold flex-shrink-0 mt-1" />
            <div className="flex-1">
              <h2 className="text-2xl md:text-3xl font-heading font-semibold text-brand-espresso mb-1">
                {t.title}
              </h2>
              <p className="text-sm md:text-base text-brand-coffee/70">
                {t.subtitle}
              </p>
            </div>
          </div>

          {/* Description */}
          <p className="text-sm md:text-base text-brand-coffee/80 leading-relaxed mb-6">
            {t.description}
          </p>

          {/* Cookie Categories */}
          <div className="space-y-4 mb-6">
            {/* Necessary Cookies - Always Active */}
            <div className="bg-brand-latte/30 rounded-xl p-5 border border-brand-gold/10">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-3 flex-1">
                  <Shield className="w-5 h-5 text-brand-gold flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <h3 className="text-lg font-heading font-semibold text-brand-espresso mb-2">
                      {t.necessary.title}
                    </h3>
                    <p className="text-sm text-brand-coffee/70 leading-relaxed">
                      {t.necessary.description}
                    </p>
                  </div>
                </div>
                <div className="flex-shrink-0">
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-brand-gold/20 text-brand-espresso text-xs font-medium">
                    {t.necessary.alwaysActive}
                  </span>
                </div>
              </div>
            </div>

            {/* Analytics - Toggle */}
            <div className="bg-brand-latte/30 rounded-xl p-5 border border-brand-gold/10">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-3 flex-1">
                  <BarChart3 className="w-5 h-5 text-brand-gold flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <h3 className="text-lg font-heading font-semibold text-brand-espresso mb-2">
                      {t.analytics.title}
                    </h3>
                    <p className="text-sm text-brand-coffee/70 leading-relaxed">
                      {t.analytics.description}
                    </p>
                  </div>
                </div>
                <div className="flex-shrink-0">
                  {/* Toggle Switch */}
                  <button
                    type="button"
                    onClick={() => setAnalyticsEnabled(!analyticsEnabled)}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-brand-gold focus:ring-offset-2 ${
                      analyticsEnabled ? 'bg-brand-gold' : 'bg-brand-coffee/30'
                    }`}
                    role="switch"
                    aria-checked={analyticsEnabled}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-200 ${
                        analyticsEnabled ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Privacy Link */}
          <p className="text-xs text-brand-coffee/60 mb-6 text-center">
            {t.privacy}{' '}
            <a
              href="/datenschutz"
              className="text-brand-gold hover:text-brand-gold/80 transition-colors underline"
            >
              {t.privacyLink}
            </a>
          </p>

          {/* Buttons - Equal Weight! */}
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={handleAcceptAll}
              className="flex-1 px-6 py-3 bg-brand-gold text-white font-medium rounded-xl hover:bg-brand-gold/90 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              {t.acceptAll}
            </button>
            <button
              onClick={handleSave}
              className="flex-1 px-6 py-3 bg-brand-espresso/10 text-brand-espresso font-medium rounded-xl hover:bg-brand-espresso/20 transition-all duration-300 border border-brand-espresso/20"
            >
              {t.save}
            </button>
            <button
              onClick={handleNecessaryOnly}
              className="flex-1 px-6 py-3 bg-brand-gold text-white font-medium rounded-xl hover:bg-brand-gold/90 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              {t.necessaryOnly}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
