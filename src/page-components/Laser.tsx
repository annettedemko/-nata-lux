'use client'

import { Link } from '@/components/LinkAdapter'
import { useLanguage } from '@/contexts/LanguageContext';
import { ServiceCard } from '@/components/ServiceCard';
import { Zap, Sparkles, Star, Target } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
;

const Laser = () => {
  const { t } = useLanguage();

  const laserTypes = [
    {
      title: t('laser.alexandrite'),
      description: t('laser.alexandrite.desc'),
      icon: Zap,
      href: '/services/laser-alexandrite',
      image: '/images/services/laser-alexandrite.jpg',
    },
    {
      title: t('laser.diode'),
      description: t('laser.diode.desc'),
      icon: Sparkles,
      href: '/services/laser-diode',
      image: '/images/services/laser-diode.jpg',
    },
    {
      title: t('laser.ndyag'),
      description: t('laser.ndyag.desc'),
      icon: Star,
      href: '/services/laser-ndyag',
      image: '/images/services/laser-ndyag.jpg',
    },
    {
      title: t('laser.areas'),
      description: t('laser.areas.desc'),
      icon: Target,
      href: '/services/laser-areas',
      image: '/images/services/laser-areas.jpg',
    },
  ];

  const treatmentAreas = [
    'Лицо (верхняя губа, подбородок, щеки)',
    'Подмышки',
    'Руки (полностью или предплечья)',
    'Ноги (полностью или голени)',
    'Зона бикини (классическое, глубокое)',
    'Спина и плечи',
    'Живот и грудь',
    'Ягодицы',
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
              <Zap className="w-8 h-8 md:w-10 md:h-10 text-brand-gold" />
            </div>
            <h1 className="text-xl md:text-2xl lg:text-3xl lg:text-4xl lg:text-5xl xl:text-6xl font-heading font-semibold text-brand-espresso mb-4 md:mb-6">
              {t('laser.title')}
            </h1>
            <p className="text-xl text-brand-coffee/80 leading-relaxed mb-8">
              {t('laser.subtitle')}
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

      {/* Laser Types */}
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
              Типы лазеров
            </h2>
            <p className="text-brand-coffee/70 max-w-2xl mx-auto">
              Мы используем 3 типа профессиональных лазеров для разных типов кожи и волос
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
            {laserTypes.map((laser, index) => (
              <motion.div
                key={laser.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <ServiceCard {...laser} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Treatment Areas */}
      <section className="py-12 md:py-16 lg:py-20 bg-brand-cream">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-12"
          >
            <h3 className="text-xl md:text-2xl lg:text-3xl font-heading font-semibold text-brand-espresso mb-6 text-center">
              Зоны обработки
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {treatmentAreas.map((area, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-2 h-2 rounded-full bg-brand-gold flex-shrink-0" />
                  <span className="text-brand-coffee/80">{area}</span>
                </motion.div>
              ))}
            </div>

            <div className="space-y-3 md:space-y-4 text-sm md:text-base text-brand-coffee/80 leading-relaxed border-t border-brand-gold/20 pt-6">
              <h4 className="font-semibold text-brand-espresso text-lg">Как это работает?</h4>
              <p>
                Лазерный луч воздействует на меланин в волосяной луковице, разрушая её без повреждения кожи.
                Для полного удаления требуется 6-10 процедур с интервалом 4-6 недель.
              </p>
              <p>
                Процедура практически безболезненна благодаря системе охлаждения. Время сеанса
                от 10 минут (верхняя губа) до 60 минут (ноги полностью).
              </p>
              <p className="font-semibold text-brand-espresso">
                Первая консультация бесплатная! Мастер определит ваш фототип кожи и подберет
                оптимальный тип лазера.
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
              Забудьте о бритве навсегда
            </h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Запишитесь на первую процедуру и получите 10% скидку на пакет из 6 сеансов
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

export default Laser;
