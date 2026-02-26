import Index from '@/page-components/Index'
import { PAGE_SEO } from '@/seo/metadata'

export const metadata = PAGE_SEO['/']?.metadata

export default function Home() {
  return <Index />
}
