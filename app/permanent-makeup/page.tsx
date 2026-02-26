import PermanentMakeup from '@/page-components/PermanentMakeup'
import { PAGE_SEO } from '@/seo/metadata'

export const metadata = PAGE_SEO['/permanent-makeup']?.metadata

export default function PermanentMakeupPage() {
  return <PermanentMakeup />
}
