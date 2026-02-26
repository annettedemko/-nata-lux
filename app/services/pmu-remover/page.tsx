import PMURemover from '@/page-components/services/PMURemover'
import { PAGE_SEO } from '@/seo/metadata'

export const metadata = PAGE_SEO['/services/pmu-remover']?.metadata

export default function PMURemoverPage() {
  return <PMURemover />
}
