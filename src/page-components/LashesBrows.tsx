'use client'

import { Link } from '@/components/LinkAdapter'
import { useLanguage } from '@/contexts/LanguageContext';
import { ServiceCard } from '@/components/ServiceCard';
import { Sparkles, Eye, Palette, Scissors } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
;

const LashesBrows = () => {
  const { t, language } = useLanguage();
  const isGerman = language === 'de';

  const subcategories = [
    {
      title: t('lashesbrows.extensions'),
      description: t('lashesbrows.extensions.desc'),
      icon: Sparkles,
      href: '/services/wimpernverlaengerung',
      image: '/images/services/lash-extensions.jpg',
    },
    {
      title: t('lashesbrows.lashlifting'),
      description: t('lashesbrows.lashlifting.desc'),
      icon: Eye,
      href: '/services/lash-lifting',
      image: '/images/services/lash-lifting.jpg',
    },
    {
      title: t('lashesbrows.browlifting'),
      description: t('lashesbrows.browlifting.desc'),
      icon: Palette,
      href: '/services/brow-lifting',
      image: '/images/services/brow-lifting.jpg',
    },
    {
      title: t('lashesbrows.browstyling'),
      description: t('lashesbrows.browstyling.desc'),
      icon: Scissors,
      href: '/services/brow-styling',
      image: '/images/services/brow-styling.jpg',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-16 md:py-20 lg:py-24 bg-gradient-to-br from-brand-latte via-brand-cream to-white overflow-hidden">
        <div className="absolute top-0 right-0 w-48 h-48 md:w-96 md:h-96 bg-brand-gold/10 rounded-full blur-3xl -z-0" />
        <div className="absolute bottom-0 left-0 w-48 h-48 md:w-96 md:h-96 bg-brand-gold/5 rounded-full blur-3xl -z-0" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-2xl md:rounded-3xl bg-brand-gold/10 mb-4 md:mb-6">
              <Sparkles className="w-8 h-8 md:w-10 md:h-10 text-brand-gold" />
            </div>
            <h1 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-heading font-semibold text-brand-espresso mb-4 md:mb-6 px-4" style={{ hyphens: 'none' }}>
              {t('lashesbrows.title')}
            </h1>
            <p className="text-lg md:text-xl text-brand-coffee/80 leading-relaxed mb-6 md:mb-8 px-4">
              {t('lashesbrows.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 md:gap-4 justify-center px-4">
              <Link to="/prices">
                <Button
                  size="lg"
                  className="bg-brand-gold hover:bg-brand-gold/90 text-white font-medium rounded-2xl px-8"
                >
                  {t('common.viewPrices')}
                </Button>
              </Link>
              <Link to="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-brand-gold text-brand-espresso hover:bg-brand-gold/10 font-medium rounded-2xl px-8"
                >
                  {t('common.book')}
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Subcategories Grid */}
      <section className="py-12 md:py-16 lg:py-20 bg-brand-cream">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 md:mb-12"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-semibold text-brand-espresso mb-3 md:mb-4 px-4">
              {isGerman ? 'Unsere Leistungen' : 'Наши услуги'}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
            {subcategories.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <ServiceCard {...service} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-brand-cream">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-12"
          >
            <h3 className="text-xl md:text-2xl lg:text-3xl font-heading font-semibold text-brand-espresso mb-4 md:mb-6">
              {isGerman ? 'Warum uns wählen?' : 'Почему выбирают нас?'}
            </h3>
            <div className="space-y-3 md:space-y-4 text-sm md:text-base text-brand-coffee/80 leading-relaxed">
              <p>
                {isGerman
                  ? 'Unsere Stylisten sind zertifiziert und haben langjährige Erfahrung mit Wimpern und Augenbrauen. Wir verwenden nur Premium-Materialien aus Deutschland und Korea.'
                  : 'Наши мастера имеют сертификаты и многолетний опыт работы с ресницами и бровями. Мы используем только премиум-материалы из Германии и Кореи.'}
              </p>
              <p>
                {isGerman
                  ? 'Jede Behandlung beginnt mit einer kostenlosen Beratung, bei der der Stylist die optimale Form, Biegung und Länge für Sie auswählt.'
                  : 'Каждая процедура начинается с бесплатной консультации, где мастер подберет оптимальную форму, изгиб и длину с учетом ваших особенностей.'}
              </p>
              <p>
                {isGerman
                  ? 'Wir garantieren die Sterilität aller Instrumente und die Einhaltung höchster Hygienestandards.'
                  : 'Гарантируем стерильность всех инструментов и соблюдение высоких стандартов гигиены.'}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-gold-gradient relative overflow-hidden">
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-semibold text-white mb-4 md:mb-6 px-4">
              {isGerman ? 'Bereit für Ihre Verwandlung?' : 'Готовы к преображению?'}
            </h2>
            <p className="text-white/90 text-base md:text-lg mb-6 md:mb-8 max-w-2xl mx-auto px-4">
              {isGerman
                ? 'Buchen Sie eine kostenlose Beratung und erhalten Sie eine individuelle Empfehlung von unseren Stylisten'
                : 'Запишитесь на бесплатную консультацию и получите индивидуальную рекомендацию от наших мастеров'}
            </p>
            <Link to="/contact">
              <Button
                size="lg"
                className="bg-white hover:bg-brand-cream text-brand-espresso font-medium rounded-xl md:rounded-2xl text-base md:text-lg px-8 md:px-10 py-5 md:py-7 shadow-glow"
              >
                {t('common.book')}
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default LashesBrows;
