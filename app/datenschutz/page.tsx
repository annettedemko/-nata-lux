import Datenschutz from '@/page-components/Datenschutz'
import { PAGE_SEO } from '@/seo/metadata'

export const metadata = PAGE_SEO['/datenschutz']?.metadata

export default function DatenschutzPage() {
  return <Datenschutz />
}
