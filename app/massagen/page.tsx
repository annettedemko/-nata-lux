import Massagen from '@/page-components/Massagen'
import { PAGE_SEO } from '@/seo/metadata'

export const metadata = PAGE_SEO['/massagen']?.metadata

export default function MassagenPage() {
  return <Massagen />
}
