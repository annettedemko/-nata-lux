import Shop from '@/page-components/Shop'
import { PAGE_SEO } from '@/seo/metadata'

export const metadata = PAGE_SEO['/shop']?.metadata

export default function ShopPage() {
  return <Shop />
}
