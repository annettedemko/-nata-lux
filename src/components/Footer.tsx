'use client'

import { Link } from '@/components/LinkAdapter'
import { Mail, Phone, MapPin } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export const Footer = () => {
  const { t, language } = useLanguage();

  return (
    <footer className="bg-brand-latte/90 backdrop-blur-md border-t border-brand-gold/10 relative z-10">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6 md:gap-8">
          {/* Brand */}
          <div className="xl:col-span-1">
            <h3 className="text-xl md:text-2xl font-heading font-semibold text-brand-espresso mb-4">
              NATA LUX
            </h3>
            <p className="text-brand-coffee/70 mb-4">
              {t('hero.subtitle')}
            </p>
          </div>

          {/* Dienstleistungen */}
          <div className="xl:col-span-2">
            <h4 className="text-lg font-heading font-semibold text-brand-espresso mb-4">
              {t('nav.services')}
            </h4>
            <ul className="space-y-2 text-sm grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-2 gap-x-4">
              <li>
                <Link
                  to="/services/wimpernverlaengerung"
                  className="text-brand-coffee/70 hover:text-brand-gold transition-colors"
                >
                  {t('lashesbrows.extensions')}
                </Link>
              </li>
              <li>
                <Link
                  to="/services/wimpern-augenbrauen-laminierung"
                  className="text-brand-coffee/70 hover:text-brand-gold transition-colors"
                >
                  {t('lashesbrows.lashlifting')} & {t('lashesbrows.browlifting')}
                </Link>
              </li>
              <li>
                <Link
                  to="/services/powder-brows"
                  className="text-brand-coffee/70 hover:text-brand-gold transition-colors"
                >
                  {t('pmu.brows')}
                </Link>
              </li>
              <li>
                <Link
                  to="/services/aquarell-lips"
                  className="text-brand-coffee/70 hover:text-brand-gold transition-colors"
                >
                  {t('pmu.lips')}
                </Link>
              </li>
              <li>
                <Link
                  to="/services/wimpernkranz"
                  className="text-brand-coffee/70 hover:text-brand-gold transition-colors"
                >
                  {t('pmu.eyeliner')}
                </Link>
              </li>
              <li>
                <Link
                  to="/services/pmu-remover"
                  className="text-brand-coffee/70 hover:text-brand-gold transition-colors"
                >
                  {t('pmu.removal')}
                </Link>
              </li>
              <li>
                <Link
                  to="/laser"
                  className="text-brand-coffee/70 hover:text-brand-gold transition-colors"
                >
                  {t('laser.triwave')}
                </Link>
              </li>
              <li>
                <Link
                  to="/services/apparative-anti-aging"
                  className="text-brand-coffee/70 hover:text-brand-gold transition-colors"
                >
                  {t('antiaging.devices')}
                </Link>
              </li>
              <li>
                <Link
                  to="/services/koerperbehandlungen"
                  className="text-brand-coffee/70 hover:text-brand-gold transition-colors"
                >
                  {t('antiaging.body')}
                </Link>
              </li>
              <li>
                <Link
                  to="/services/gesichtsreinigung"
                  className="text-brand-coffee/70 hover:text-brand-gold transition-colors"
                >
                  {t('antiaging.facial')}
                </Link>
              </li>
              <li>
                <Link
                  to="/services/phonophorese"
                  className="text-brand-coffee/70 hover:text-brand-gold transition-colors"
                >
                  {t('antiaging.phonophoresis')}
                </Link>
              </li>
              <li>
                <Link
                  to="/services/microneedling"
                  className="text-brand-coffee/70 hover:text-brand-gold transition-colors"
                >
                  {t('antiaging.microneedling')}
                </Link>
              </li>
              <li>
                <Link
                  to="/services/darsonval-haare"
                  className="text-brand-coffee/70 hover:text-brand-gold transition-colors"
                >
                  {t('antiaging.darsonval')}
                </Link>
              </li>
              <li>
                <Link
                  to="/services/hautveraenderungen-entfernen"
                  className="text-brand-coffee/70 hover:text-brand-gold transition-colors"
                >
                  {t('antiaging.removal')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Schulung */}
          <div className="xl:col-span-1">
            <h4 className="text-lg font-heading font-semibold text-brand-espresso mb-4">
              {t('nav.training')}
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/training"
                  className="text-brand-coffee/70 hover:text-brand-gold transition-colors"
                >
                  {language === 'de' ? 'Schulungsangebot' : language === 'ru' ? 'Программы обучения' : 'Програми навчання'}
                </Link>
              </li>
              <li>
                <Link
                  to="/training#wimpern"
                  className="text-brand-coffee/70 hover:text-brand-gold transition-colors"
                >
                  {language === 'de' ? 'Wimpernverlängerung' : language === 'ru' ? 'Наращивание ресниц' : 'Нарощування вій'}
                </Link>
              </li>
              <li>
                <Link
                  to="/training#pmu"
                  className="text-brand-coffee/70 hover:text-brand-gold transition-colors"
                >
                  {language === 'de' ? 'Permanent Make-up' : language === 'ru' ? 'Перманентный макияж' : 'Перманентний макіяж'}
                </Link>
              </li>
            </ul>
          </div>

          {/* Kosmetik */}
          <div className="xl:col-span-1">
            <h4 className="text-lg font-heading font-semibold text-brand-espresso mb-4">
              {t('categories.shop')}
            </h4>
            <p className="text-brand-coffee/70 text-sm mb-3">
              {t('categories.shop.desc')}
            </p>
            <Link
              to="/shop"
              className="inline-flex items-center text-sm font-medium text-brand-gold hover:text-brand-gold/80 transition-colors"
            >
              {language === 'de' ? 'Zum Shop' : language === 'ru' ? 'В магазин' : 'В магазин'}
              <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          {/* Contact */}
          <div className="xl:col-span-1">
            <h4 className="text-lg font-heading font-semibold text-brand-espresso mb-4">
              {t('nav.contact')}
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-brand-gold mt-0.5 flex-shrink-0" />
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=Elsässer+Straße+33+81667+München"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-coffee/70 hover:text-brand-gold transition-colors"
                >
                  NataLux Studio<br />
                  Elsässer Straße 33<br />
                  81667 München-Haidhausen
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-brand-gold flex-shrink-0" />
                <a
                  href="tel:+4917677267269"
                  className="text-brand-coffee/70 hover:text-brand-gold transition-colors"
                >
                  +49 176 77267269
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-brand-gold flex-shrink-0" />
                <a
                  href="mailto:natali.lux@web.de"
                  className="text-brand-coffee/70 hover:text-brand-gold transition-colors"
                >
                  natali.lux@web.de
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div className="xl:col-span-1">
            <h4 className="text-lg font-heading font-semibold text-brand-espresso mb-4">
              {t('footer.hours')}
            </h4>
            <ul className="space-y-2 text-brand-coffee/70 text-sm">
              <li>{t('footer.hours.weekdays')}</li>
              <li>{t('footer.hours.saturday')}</li>
              <li>{t('footer.hours.sunday')}</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-brand-gold/10 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-brand-coffee/60 text-sm">
            © 2025 NATA LUX. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <Link
              to="/impressum"
              className="text-brand-coffee/60 hover:text-brand-gold transition-colors"
            >
              {t('footer.impressum')}
            </Link>
            <Link
              to="/datenschutz"
              className="text-brand-coffee/60 hover:text-brand-gold transition-colors"
            >
              {t('footer.privacy')}
            </Link>
            <Link
              to="/agb"
              className="text-brand-coffee/60 hover:text-brand-gold transition-colors"
            >
              {t('footer.terms')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
