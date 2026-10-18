'use client'

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

// Old URL: forwards visitors to the real BioRepair Pro product page.
const TARGET = '/shop/renew/biorepair-pro/';

const RenewBioRepairPro = () => {
  const router = useRouter();

  useEffect(() => {
    router.replace(TARGET);
  }, [router]);

  return (
    <div className="min-h-[50vh] flex items-center justify-center">
      <a href={TARGET} className="text-brand-gold underline">RENEW BioRepair Pro</a>
    </div>
  );
};

export default RenewBioRepairPro;
