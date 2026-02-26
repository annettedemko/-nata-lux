import Microneedling from '@/page-components/services/Microneedling'
import { PAGE_SEO } from '@/seo/metadata'

export const metadata = PAGE_SEO['/services/microneedling']?.metadata

export default function MicroneedlingPage() {
  return <Microneedling />
}
