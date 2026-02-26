import Gesichtsreinigung from '@/page-components/services/Gesichtsreinigung'
import { PAGE_SEO } from '@/seo/metadata'

export const metadata = PAGE_SEO['/services/gesichtsreinigung']?.metadata

export default function GesichtsreinigungPage() {
  return <Gesichtsreinigung />
}
