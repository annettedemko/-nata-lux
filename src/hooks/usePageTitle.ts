'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { useLanguage } from '@/contexts/LanguageContext'
import { PAGE_SEO } from '@/seo/metadata'

export function usePageTitle() {
  const pathname = usePathname()
  const { language } = useLanguage()

  useEffect(() => {
    if (language === 'de') return

    const normalizedPath = pathname === '/' ? '/' : pathname.replace(/\/$/, '')
    const seo = PAGE_SEO[normalizedPath]
    if (seo?.titles) {
      const title = seo.titles[language as 'ru' | 'ua']
      if (title) {
        document.title = title
      }
    }
  }, [pathname, language])
}
