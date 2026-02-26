import AntiAging from '@/page-components/AntiAging'
import { PAGE_SEO } from '@/seo/metadata'

export const metadata = PAGE_SEO['/anti-aging']?.metadata

export default function AntiAgingPage() {
  return <AntiAging />
}
