import AGB from '@/page-components/AGB'
import { PAGE_SEO } from '@/seo/metadata'

export const metadata = PAGE_SEO['/agb']?.metadata

export default function AGBPage() {
  return <AGB />
}
