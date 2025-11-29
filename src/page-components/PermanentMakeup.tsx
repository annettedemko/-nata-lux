'use client'

import { Link } from '@/components/LinkAdapter'
import { useLanguage } from '@/contexts/LanguageContext';
import { ServiceCard } from '@/components/ServiceCard';
import { Palette, Sparkles, Eye, Eraser } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
;

const PermanentMakeup = () => {
  const { t, language } = useLanguage();
  const isGerman = language === 'de';

  const subcategories = [
    {
      title: t('pmu.brows'),
      description: t('pmu.brows.desc'),
      icon: Palette,
      href: '/services/pmu-powder-brows',
      image: '/images/services/powder-brows.jpg',
    },
    {
      title: t('pmu.lips'),
      description: t('pmu.lips.desc'),
      icon: Sparkles,
      href: '/services/pmu-lips',
      image: '/images/services/pmu-lips.jpg',
    },
    {
      title: t('pmu.eyeliner'),
      description: t('pmu.eyeliner.desc'),
      icon: Eye,
      href: '/services/pmu-eyeliner',
      image: '/images/services/pmu-eyeliner.jpg',
    },
    {
      title: t('pmu.removal'),
      description: t('pmu.removal.desc'),
      icon: Eraser,
      href: '/services/pmu-removal',
      image: '/images/services/pmu-removal.jpg',
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
              <Palette className="w-8 h-8 md:w-10 md:h-10 text-brand-gold" />
            </div>
            <h1 className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-heading font-semibold text-brand-espresso mb-4 md:mb-6 px-4 break-words" style={{ wordWrap: 'break-word', overflowWrap: 'anywhere', wordBreak: 'break-word', hyphens: 'none', maxWidth: '100%' }}>
              {t('pmu.title')}
            </h1>
            <p className="text-xl text-brand-coffee/80 leading-relaxed mb-8">
              {t('pmu.subtitle')}
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
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
            className="text-center mb-12"
          >
            <h2 className="text-xl md:text-2xl lg:text-3xl lg:text-4xl font-heading font-semibold text-brand-espresso mb-4">
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
              {isGerman ? 'Was ist Permanent Make-up?' : 'Что такое перманентный макияж?'}
            </h3>
            <div className="space-y-3 md:space-y-4 text-sm md:text-base text-brand-coffee/80 leading-relaxed">
              <p>
                {isGerman
                  ? 'Permanent Make-up ist das Einbringen von natürlichen Pigmenten in die oberen Hautschichten. Das Ergebnis hält 1-3 Jahre, je nach Hauttyp und Pflege.'
                  : 'Перманентный макияж — это введение натуральных пигментов в верхние слои кожи. Результат держится 1-3 года в зависимости от типа кожи и ухода.'}
              </p>
              <p>
                {isGerman
                  ? 'Wir verwenden deutsche und Schweizer Pigmente, die ihre Farbe nicht verändern und auf natürliche Weise abgebaut werden.'
                  : 'Мы используем немецкие и швейцарские пигменты, которые не меняют цвет и постепенно выводятся естественным путем.'}
              </p>
              <p>
                {isGerman
                  ? 'Die Behandlung wird unter örtlicher Betäubung durchgeführt. Die Heilungszeit beträgt 7-10 Tage. Nach 4-6 Wochen erfolgt eine kostenlose Nachbesserung.'
                  : 'Процедура проходит с применением местной анестезии. Время заживления — 7-10 дней. Через 4-6 недель проводится бесплатная коррекция.'}
              </p>
              <p className="font-semibold text-brand-espresso">
                {isGerman
                  ? 'Beratung vor der Behandlung ist Pflicht! Wir bewerten Ihren Hauttyp und besprechen Form, Farbe und Technik.'
                  : 'Обязательная консультация перед процедурой! Мы оцениваем тип кожи, обсуждаем форму, цвет и технику нанесения.'}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gold-gradient relative overflow-hidden">
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-xl md:text-2xl lg:text-3xl lg:text-4xl font-heading font-semibold text-white mb-4 md:mb-6">
              {isGerman ? 'Beratungstermin vereinbaren' : 'Запишитесь на консультацию'}
            </h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              {isGerman
                ? 'Die Meisterin zeigt ihr Portfolio, wählt Form und Farbton aus. Die Beratung ist kostenlos!'
                : 'Мастер покажет портфолио работ, подберет форму и оттенок. Консультация бесплатная!'}
            </p>
            <Link to="/contact">
              <Button
                size="lg"
                className="bg-white hover:bg-brand-cream text-brand-espresso font-medium rounded-2xl text-lg px-10 py-7 shadow-glow"
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

export default PermanentMakeup;
