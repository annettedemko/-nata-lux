'use client'

import NextLink from 'next/link'
import { ReactNode } from 'react'

// Адаптер для React Router Link, который работает с Next.js Link
export function Link({ to, children, ...props }: { to: string; children: ReactNode; [key: string]: any }) {
  return (
    <NextLink href={to} {...props}>
      {children}
    </NextLink>
  )
}
