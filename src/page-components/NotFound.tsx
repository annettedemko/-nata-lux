'use client'

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { useLanguage } from '@/contexts/LanguageContext';

const NotFound = () => {
  const pathname = usePathname();
  const { language } = useLanguage();
  const isGerman = language === 'de';

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", pathname);
  }, [pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-brand-cream/50">
      <div className="text-center">
        <h1 className="mb-4 text-6xl font-heading font-bold text-brand-gold">404</h1>
        <p className="mb-6 text-xl text-brand-espresso/80">
          {language === 'de' ? 'Seite nicht gefunden' : language === 'ru' ? 'Страница не найдена' : 'Страница не найдена'}
        </p>
        <a
          href="/"
          className="inline-block px-6 py-3 bg-brand-gold hover:bg-brand-gold/90 text-white font-medium rounded-xl transition-all"
        >
          {language === 'de' ? 'Zur Startseite' : language === 'ru' ? 'На главную' : 'На главную'}
        </a>
      </div>
    </div>
  );
};

export default NotFound;
