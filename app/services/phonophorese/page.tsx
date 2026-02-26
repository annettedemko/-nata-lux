import Phonophorese from '@/page-components/services/Phonophorese'
import { PAGE_SEO } from '@/seo/metadata'

export const metadata = PAGE_SEO['/services/phonophorese']?.metadata

export default function PhonophoresePage() {
  return <Phonophorese />
}
