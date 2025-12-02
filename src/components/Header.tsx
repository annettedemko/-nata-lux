'use client'

import { Link } from '@/components/LinkAdapter'
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const pathname = usePathname();

  const navigation = [
    { name: t('nav.services'), href: '/services' },
    { name: t('nav.training'), href: '/training' },
    { name: t('nav.prices'), href: '/prices' },
    { name: t('nav.kosmetik'), href: '/shop' },
    { name: t('nav.about'), href: '/about' },
    { name: t('nav.contact'), href: '/contact' },
  ];

  const isActive = (path: string) => pathname === path;

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 glass border-b border-brand-gold/10 m-0"
    >
      <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <motion.img
              src="/112.png"
              alt="Nata Lux"
              className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
              whileHover={{ rotate: 5, scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
            <div className="text-xl sm:text-2xl font-heading font-semibold text-brand-espresso">
              NATA LUX
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                  isActive(item.href)
                    ? 'text-brand-gold bg-brand-sand/30'
                    : 'text-brand-coffee hover:text-brand-gold hover:bg-brand-sand/20'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Right Section */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Language Switcher */}
            <div className="flex items-center bg-brand-sand/30 rounded-lg p-1">
              <button
                onClick={() => setLanguage('de')}
                className={`px-3 py-1 text-sm font-medium font-sans rounded-md transition-colors ${
                  language === 'de'
                    ? 'bg-brand-gold text-white'
                    : 'text-brand-coffee hover:text-brand-gold'
                }`}
              >
                DE
              </button>
              <button
                onClick={() => setLanguage('ru')}
                className={`px-3 py-1 text-sm font-medium font-sans rounded-md transition-colors ${
                  language === 'ru'
                    ? 'bg-brand-gold text-white'
                    : 'text-brand-coffee hover:text-brand-gold'
                }`}
              >
                RU
              </button>
            </div>

            {/* Phone */}
            <a
              href="tel:+4917677267269"
              className="flex items-center space-x-2 text-brand-coffee hover:text-brand-gold transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="text-sm font-medium">+49 176 77267269</span>
            </a>

            {/* CTA Button */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button className="bg-brand-gold hover:bg-brand-gold/90 text-white font-medium rounded-2xl shadow-soft">
                {t('common.book')}
              </Button>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-brand-coffee hover:text-brand-gold transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden border-t border-brand-gold/10 bg-brand-cream/95 backdrop-blur-md overflow-hidden"
          >
            <nav className="container mx-auto px-4 py-4 space-y-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-4 py-3 text-base font-medium rounded-lg transition-colors ${
                  isActive(item.href)
                    ? 'text-brand-gold bg-brand-sand/30'
                    : 'text-brand-coffee hover:text-brand-gold hover:bg-brand-sand/20'
                }`}
              >
                {item.name}
              </Link>
            ))}
            
            <div className="pt-4 border-t border-brand-gold/10">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-medium text-brand-coffee">
                  {language === 'de' ? 'Sprache' : 'Язык'}
                </span>
                <div className="flex items-center bg-brand-sand/30 rounded-lg p-1">
                  <button
                    onClick={() => setLanguage('de')}
                    className={`px-3 py-1 text-sm font-medium font-sans rounded-md transition-colors ${
                      language === 'de'
                        ? 'bg-brand-gold text-white'
                        : 'text-brand-coffee'
                    }`}
                  >
                    DE
                  </button>
                  <button
                    onClick={() => setLanguage('ru')}
                    className={`px-3 py-1 text-sm font-medium font-sans rounded-md transition-colors ${
                      language === 'ru'
                        ? 'bg-brand-gold text-white'
                        : 'text-brand-coffee'
                    }`}
                  >
                    RU
                  </button>
                </div>
              </div>
              
              <Button className="w-full bg-brand-gold hover:bg-brand-gold/90 text-white font-medium rounded-xl">
                {t('common.book')}
              </Button>
            </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
