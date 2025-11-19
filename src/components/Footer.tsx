'use client'

;
import { Link } from '@/components/LinkAdapter'
import { Instagram, Mail, Phone, MapPin } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-brand-latte/90 backdrop-blur-md border-t border-brand-gold/10 relative z-10">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-heading font-semibold text-brand-espresso mb-4">
              NATA LUX
            </h3>
            <p className="text-brand-coffee/70 mb-4">
              {t('hero.subtitle')}
            </p>
            <div className="flex space-x-3">
              <a
                href="https://www.instagram.com/nata_lux_pm?igsh=bnluOTNuZ2RsNnp2"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-brand-sand/50 flex items-center justify-center text-brand-coffee hover:bg-brand-gold hover:text-white transition-all"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-heading font-semibold text-brand-espresso mb-4">
              {t('nav.services')}
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/services/wimpernverlaengerung"
                  className="text-brand-coffee/70 hover:text-brand-gold transition-colors"
                >
                  {t('services.lashes.title')}
                </Link>
              </li>
              <li>
                <Link
                  to="/services/pmu-brows-powder"
                  className="text-brand-coffee/70 hover:text-brand-gold transition-colors"
                >
                  {t('services.pmu.title')}
                </Link>
              </li>
              <li>
                <Link
                  to="/services/laser-hair-removal"
                  className="text-brand-coffee/70 hover:text-brand-gold transition-colors"
                >
                  {t('services.laser.title')}
                </Link>
              </li>
              <li>
                <Link
                  to="/training"
                  className="text-brand-coffee/70 hover:text-brand-gold transition-colors"
                >
                  {t('nav.training')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
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
          <div>
            <h4 className="text-lg font-heading font-semibold text-brand-espresso mb-4">
              {t('footer.hours')}
            </h4>
            <ul className="space-y-2 text-brand-coffee/70">
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
