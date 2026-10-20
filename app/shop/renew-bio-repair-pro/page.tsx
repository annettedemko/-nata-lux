import type { Metadata } from 'next'
import RenewBioRepairPro from '@/page-components/shop/RenewBioRepairPro'

export const metadata: Metadata = {
  title: 'RENEW BioRepair Pro | Nata Lux',
  robots: { index: false, follow: true },
  alternates: { canonical: '/shop/renew/biorepair-pro/' },
}

export default function RenewBioRepairProPage() {
  return <RenewBioRepairPro />
}
