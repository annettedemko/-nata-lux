import LashesBrows from '@/page-components/LashesBrows'
import { PAGE_SEO } from '@/seo/metadata'

export const metadata = PAGE_SEO['/lashes-brows']?.metadata

export default function LashesBrowsPage() {
  return <LashesBrows />
}
