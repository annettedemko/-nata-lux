'use client'

import { usePathname } from 'next/navigation'

const BASE_URL = 'https://munich-beauty.de'

export function HreflangTags() {
  const pathname = usePathname()
  const path = pathname === '/' ? '' : pathname

  return (
    <>
      <link rel="alternate" hrefLang="de" href={`${BASE_URL}${path}`} />
      <link rel="alternate" hrefLang="ru" href={`${BASE_URL}${path}?lang=ru`} />
      <link rel="alternate" hrefLang="uk" href={`${BASE_URL}${path}?lang=ua`} />
      <link rel="alternate" hrefLang="x-default" href={`${BASE_URL}${path}`} />
    </>
  )
}
