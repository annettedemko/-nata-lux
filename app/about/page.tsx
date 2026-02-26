import About from '@/page-components/About'
import { PAGE_SEO } from '@/seo/metadata'

export const metadata = PAGE_SEO['/about']?.metadata

export default function AboutPage() {
  return <About />
}
