'use client'

import { Link } from '@/components/LinkAdapter'
import { useLanguage } from '@/contexts/LanguageContext';
import { ServiceCard } from '@/components/ServiceCard';
import { Star, Zap, Droplet, Waves, Scissors, Sparkles, Eraser } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
;

const AntiAging = () => {
  const { t } = useLanguage();

  const subcategories = [
    {
      title: t('antiaging.devices'),
      description: t('antiaging.devices.desc'),
      icon: Star,
      href: '/services/anti-aging-devices',
      image: '/images/services/anti-aging-devices.jpg',
    },
    {
      title: t('antiaging.body'),
      description: t('antiaging.body.desc'),
      icon: Zap,
      href: '/services/body-treatments',
      image: '/images/services/body-treatments.jpg',
    },
    {
      title: t('antiaging.facial'),
      description: t('antiaging.facial.desc'),
      icon: Droplet,
      href: '/services/facial-cleaning',
      image: '/images/services/facial-cleaning.jpg',
    },
    {
      title: t('antiaging.phonophoresis'),
      description: t('antiaging.phonophoresis.desc'),
      icon: Waves,
      href: '/services/phonophoresis',
      image: '/images/services/phonophoresis.jpg',
    },
    {
      title: t('antiaging.microneedling'),
      description: t('antiaging.microneedling.desc'),
      icon: Scissors,
      href: '/services/microneedling',
      image: '/images/services/microneedling.jpg',
    },
    {
      title: t('antiaging.darsonval'),
      description: t('antiaging.darsonval.desc'),
      icon: Sparkles,
      href: '/services/darsonval-hair',
      image: '/images/services/darsonval-hair.jpg',
    },
    {
      title: t('antiaging.removal'),
      description: t('antiaging.removal.desc'),
      icon: Eraser,
      href: '/services/skin-removal',
      image: '/images/services/skin-removal.jpg',
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
              <Star className="w-8 h-8 md:w-10 md:h-10 text-brand-gold" />
            </div>
            <h1 className="text-xl md:text-2xl lg:text-3xl lg:text-4xl lg:text-5xl xl:text-6xl font-heading font-semibold text-brand-espresso mb-4 md:mb-6">
              {t('antiaging.title')}
            </h1>
            <p className="text-xl text-brand-coffee/80 leading-relaxed mb-8">
              {t('antiaging.subtitle')}
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
              Наши процедуры
            </h2>
            <p className="text-brand-coffee/70 max-w-2xl mx-auto">
              Современные аппаратные методики для лица и тела без операций и инъекций
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
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
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* For Face */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="glass rounded-3xl p-8"
            >
              <h3 className="text-2xl font-heading font-semibold text-brand-espresso mb-4 md:mb-6">
                Для лица, шеи, декольте
              </h3>
              <ul className="space-y-3 text-brand-coffee/80">
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-gold mt-2 flex-shrink-0" />
                  <span>RF-лифтинг — подтяжка без операции</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-gold mt-2 flex-shrink-0" />
                  <span>Световая терапия — омоложение и тонус</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-gold mt-2 flex-shrink-0" />
                  <span>Биотоки — лимфодренаж и укрепление мышц</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-gold mt-2 flex-shrink-0" />
                  <span>Ультразвук + фонофорез — глубокое питание</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-gold mt-2 flex-shrink-0" />
                  <span>Комплексная чистка 90 мин</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-gold mt-2 flex-shrink-0" />
                  <span>Микронидлинг — регенерация кожи</span>
                </li>
              </ul>
            </motion.div>

            {/* For Body */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="glass rounded-3xl p-8"
            >
              <h3 className="text-2xl font-heading font-semibold text-brand-espresso mb-4 md:mb-6">
                Для тела
              </h3>
              <ul className="space-y-3 text-brand-coffee/80">
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-gold mt-2 flex-shrink-0" />
                  <span>RF-вакуумный лифтинг — антицеллюлит</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-gold mt-2 flex-shrink-0" />
                  <span>Кавитация — уменьшение объемов</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-gold mt-2 flex-shrink-0" />
                  <span>Зоны: живот, ягодицы, бёдра, руки</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-gold mt-2 flex-shrink-0" />
                  <span>Курсы: 5 или 10 процедур со скидкой</span>
                </li>
              </ul>

              <div className="mt-6 pt-6 border-t border-brand-gold/20">
                <h4 className="font-semibold text-brand-espresso mb-3">Дополнительно</h4>
                <ul className="space-y-2 text-brand-coffee/80">
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-gold mt-2 flex-shrink-0" />
                    <span>Дарсонваль для волос</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-gold mt-2 flex-shrink-0" />
                    <span>Удаление папиллом (с дерматологом)</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>

          {/* Results */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-12 mt-8 max-w-4xl mx-auto"
          >
            <h3 className="text-xl md:text-2xl lg:text-3xl font-heading font-semibold text-brand-espresso mb-6 text-center">
              Результаты
            </h3>
            <div className="space-y-3 md:space-y-4 text-sm md:text-base text-brand-coffee/80 leading-relaxed">
              <p>
                Видимый эффект заметен уже после первой процедуры, но для стабильного результата
                рекомендуется курс из 5-10 сеансов.
              </p>
              <p>
                Все процедуры безболезненны и не требуют восстановительного периода.
                Вы можете сразу вернуться к обычной жизни.
              </p>
              <p className="font-semibold text-brand-espresso">
                Перед началом курса проводится бесплатная диагностика кожи и подбор оптимальной
                программы процедур.
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
              Начните путь к молодости
            </h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Запишитесь на диагностику и получите индивидуальную программу anti-age процедур
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

export default AntiAging;
