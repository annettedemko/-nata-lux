import Impressum from '@/page-components/Impressum'
import { PAGE_SEO } from '@/seo/metadata'

export const metadata = PAGE_SEO['/impressum']?.metadata

export default function ImpressumPage() {
  return <Impressum />
}
