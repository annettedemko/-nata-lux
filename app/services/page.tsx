import Services from '@/page-components/Services'
import { PAGE_SEO } from '@/seo/metadata'

export const metadata = PAGE_SEO['/services']?.metadata

export default function ServicesPage() {
  return <Services />
}
