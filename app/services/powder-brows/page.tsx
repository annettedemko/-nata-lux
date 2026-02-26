import PowderBrows from '@/page-components/services/PowderBrows'
import { PAGE_SEO } from '@/seo/metadata'

export const metadata = PAGE_SEO['/services/powder-brows']?.metadata

export default function PowderBrowsPage() {
  return <PowderBrows />
}
