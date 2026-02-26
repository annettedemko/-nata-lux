'use client'

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from '@/components/LinkAdapter';

const NotFound = () => {
  const pathname = usePathname();
  const { language } = useLanguage();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", pathname);
  }, [pathname]);

  return (
    <div className="flex min-h-[80vh] items-center justify-center px-4">
      <div className="glass rounded-3xl p-8 md:p-14 text-center max-w-lg border border-brand-gold/10">
        <h1 className="mb-3 text-7xl md:text-8xl font-heading font-bold text-brand-gold/80">404</h1>
        <p className="mb-2 text-2xl md:text-3xl font-heading font-semibold text-brand-espresso">
          {language === 'de' ? 'Seite nicht gefunden' : language === 'ru' ? 'Страница не найдена' : 'Сторінку не знайдено'}
        </p>
        <p className="mb-8 text-brand-coffee/60">
          {language === 'de'
            ? 'Die gewünschte Seite existiert leider nicht.'
            : language === 'ru'
            ? 'Запрашиваемая страница не существует.'
            : 'Запитувана сторінка не існує.'}
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="inline-block px-6 py-3 bg-brand-gold hover:bg-brand-gold/90 text-white font-medium rounded-xl transition-all"
          >
            {language === 'de' ? 'Zur Startseite' : language === 'ru' ? 'На главную' : 'На головну'}
          </Link>
          <Link
            href="/contact"
            className="inline-block px-6 py-3 border border-brand-gold/30 hover:border-brand-gold/60 text-brand-espresso font-medium rounded-xl transition-all"
          >
            {language === 'de' ? 'Kontakt' : language === 'ru' ? 'Контакты' : 'Контакти'}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
