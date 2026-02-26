import Koerperbehandlungen from '@/page-components/services/Koerperbehandlungen'
import { PAGE_SEO } from '@/seo/metadata'

export const metadata = PAGE_SEO['/services/koerperbehandlungen']?.metadata

export default function KoerperbehandlungenPage() {
  return <Koerperbehandlungen />
}
