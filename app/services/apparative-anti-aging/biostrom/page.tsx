import Biostrom from '@/page-components/services/Biostrom'
import { PAGE_SEO } from '@/seo/metadata'

export const metadata = PAGE_SEO['/services/apparative-anti-aging/biostrom']?.metadata

export default function BiostromPage() {
  return <Biostrom />
}
