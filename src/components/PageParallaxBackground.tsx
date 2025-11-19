'use client'

import { usePathname } from 'next/navigation'
import { useEffect } from 'react'

export const PageParallaxBackground = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname()
  const isHomePage = pathname === '/' || pathname === ''
  const isServicesPage = pathname === '/services' || pathname === '/services/'

  // Выбираем картинку фона в зависимости от страницы
  const backgroundImage = isServicesPage ? 'url(/26.png)' : 'url(/16.png)'

  useEffect(() => {
    console.log('PageParallaxBackground - pathname:', pathname)
    console.log('PageParallaxBackground - isServicesPage:', isServicesPage)
    console.log('PageParallaxBackground - backgroundImage:', backgroundImage)
  }, [pathname, isServicesPage, backgroundImage])

  return (
    <div className="relative min-h-screen">
      {/* Стабильный фон для всех страниц кроме главной */}
      {!isHomePage && (
        <div key={pathname} className="fixed inset-0 z-0">
          <div
            className="absolute inset-0 bg-no-repeat"
            style={{
              backgroundImage,
              backgroundAttachment: 'fixed',
              backgroundSize: isServicesPage ? '120%' : 'cover',
              backgroundPosition: isServicesPage ? 'center top 100px' : 'center top -10%',
              opacity: isServicesPage ? '0.25' : '1',
            }}
          />
          {/* Градиентный оверлей для лучшей читаемости */}
          {!isServicesPage && (
            <div className="absolute inset-0 bg-gradient-to-b from-brand-cream/30 via-brand-cream/10 to-brand-cream/30" />
          )}
        </div>
      )}

      {/* На главной странице фон НЕ используется - везде видео Marble.mp4 */}

      {/* Контент страницы - скользит поверх стабильного фона */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  )
}
