import Contact from '@/page-components/Contact'
import { PAGE_SEO } from '@/seo/metadata'

export const metadata = PAGE_SEO['/contact']?.metadata

export default function ContactPage() {
  return <Contact />
}
