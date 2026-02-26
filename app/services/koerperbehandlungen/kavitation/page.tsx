import Kavitation from '@/page-components/services/Kavitation'
import { PAGE_SEO } from '@/seo/metadata'

export const metadata = PAGE_SEO['/services/koerperbehandlungen/kavitation']?.metadata

export default function KavitationPage() {
  return <Kavitation />
}
