import Training from '@/page-components/Training'
import { PAGE_SEO } from '@/seo/metadata'

export const metadata = PAGE_SEO['/training']?.metadata

export default function TrainingPage() {
  return <Training />
}
