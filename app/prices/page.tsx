import Prices from '@/page-components/Prices'
import { PAGE_SEO } from '@/seo/metadata'

export const metadata = PAGE_SEO['/prices']?.metadata

export default function PricesPage() {
  return <Prices />
}
