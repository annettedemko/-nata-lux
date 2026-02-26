import Laser from '@/page-components/Laser'
import { PAGE_SEO } from '@/seo/metadata'

export const metadata = PAGE_SEO['/laser']?.metadata

export default function LaserPage() {
  return <Laser />
}
