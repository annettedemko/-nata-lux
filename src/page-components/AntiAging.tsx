'use client'

import { Link } from '@/components/LinkAdapter'
import { useLanguage } from '@/contexts/LanguageContext';
import { ServiceCard } from '@/components/ServiceCard';
import { Star, Zap, Droplet, Waves, Scissors, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
;

const AntiAging = () => {
  const { t, language } = useLanguage();
  const isGerman = language === 'de';

  const subcategories = [
    {
      title: t('antiaging.devices'),
      description: t('antiaging.devices.desc'),
      icon: Star,
      href: '/services/apparative-anti-aging',
      image: '/apparative-anti-aging-geraet-muenchen.webp',
    },
    {
      title: t('antiaging.body'),
      description: t('antiaging.body.desc'),
      icon: Zap,
      href: '/services/koerperbehandlungen',
      image: '/rf-vakuum-koerperbehandlung-muenchen.jpg',
    },
    {
      title: t('antiaging.facial'),
      description: t('antiaging.facial.desc'),
      icon: Droplet,
      href: '/services/gesichtsreinigung',
      image: '/gesichtsreinigung-muenchen.jpg',
    },
    {
      title: t('antiaging.phonophoresis'),
      description: t('antiaging.phonophoresis.desc'),
      icon: Waves,
      href: '/services/phonophorese',
      image: '/ultraschall-gesichtsbehandlung-muenchen.jpeg',
    },
    {
      title: t('antiaging.microneedling'),
      description: t('antiaging.microneedling.desc'),
      icon: Scissors,
      href: '/services/microneedling',
      image: '/microneedling-gesicht-muenchen.jpg',
    },
    {
      title: t('antiaging.darsonval'),
      description: t('antiaging.darsonval.desc'),
      icon: Sparkles,
      href: '/services/darsonval-haare',
      image: '/darsonval-haarbehandlung.jpg',
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
            <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-heading font-semibold text-brand-espresso mb-4 md:mb-6 px-2 sm:px-4 max-w-full break-words" style={{ hyphens: 'none', wordBreak: 'break-word', overflowWrap: 'anywhere', whiteSpace: 'normal', letterSpacing: '-0.01em', wordWrap: 'break-word' }}>
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
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-heading font-semibold text-brand-espresso mb-4 max-w-full px-2 break-words" style={{ hyphens: 'none', wordBreak: 'break-word', overflowWrap: 'anywhere', whiteSpace: 'normal', letterSpacing: '-0.01em', wordWrap: 'break-word' }}>
              {language === 'de' ? 'Unsere Behandlungen' : language === 'ru' ? 'Наши процедуры' : 'Наши процедуры'}
            </h2>
            <p className="text-brand-coffee/70 max-w-2xl mx-auto">
              {isGerman
                ? 'Moderne apparative Methoden für Gesicht und Körper ohne OP und Injektionen'
                : 'Современные аппаратные методики для лица и тела без операций и инъекций'}
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
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-heading font-semibold text-brand-espresso mb-4 md:mb-6 max-w-full px-2 break-words" style={{ hyphens: 'none', wordBreak: 'break-word', overflowWrap: 'anywhere', whiteSpace: 'normal', letterSpacing: '-0.01em', wordWrap: 'break-word' }}>
                {language === 'de' ? 'Für Gesicht, Hals, Dekolleté' : language === 'ru' ? 'Для лица, шеи, декольте' : 'Для обличчя, шеи, декольте'}
              </h3>
              <ul className="space-y-3 text-brand-coffee/80">
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-gold mt-2 flex-shrink-0" />
                  <span>{language === 'de' ? 'RF-Lifting — straffender Effekt ohne OP' : language === 'ru' ? 'RF-лифтинг — эффект подтяжки без операции' : 'RF-ліфтинг — ефект підтяжки без операції'}</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-gold mt-2 flex-shrink-0" />
                  <span>{language === 'de' ? 'Lichttherapie — frischeres Hautbild und Tonus' : language === 'ru' ? 'Световая терапия — более свежий вид кожи и тонус' : 'Світлова терапія — свіжіший вигляд шкіри та тонус'}</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-gold mt-2 flex-shrink-0" />
                  <span>{language === 'de' ? 'Biostrom — lymphdrainierender Effekt und Tonisierung' : language === 'ru' ? 'Биотоки — лимфодренажный эффект и тонизирование' : 'Біострум — лімфодренажний ефект та тонізування'}</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-gold mt-2 flex-shrink-0" />
                  <span>{language === 'de' ? 'Ultraschall + Phonophorese — Tiefenpflege' : language === 'ru' ? 'Ультразвук + фонофорез — глубокое питание' : 'Ультразвук + фонофорез — глубокое питание'}</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-gold mt-2 flex-shrink-0" />
                  <span>{language === 'de' ? 'Komplexe Reinigung 90 Min.' : language === 'ru' ? 'Комплексная чистка 90 мин' : 'Комплексная чистка 90 мин'}</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-gold mt-2 flex-shrink-0" />
                  <span>{language === 'de' ? 'Microneedling — unterstützt die Hauterneuerung' : language === 'ru' ? 'Микронидлинг — поддержка обновления кожи' : 'Мікронідлінг — підтримка оновлення шкіри'}</span>
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
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-heading font-semibold text-brand-espresso mb-4 md:mb-6 max-w-full px-2 break-words" style={{ hyphens: 'none', wordBreak: 'break-word', overflowWrap: 'anywhere', whiteSpace: 'normal', letterSpacing: '-0.01em', wordWrap: 'break-word' }}>
                {language === 'de' ? 'Für den Körper' : language === 'ru' ? 'Для тела' : 'Для тела'}
              </h3>
              <ul className="space-y-3 text-brand-coffee/80">
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-gold mt-2 flex-shrink-0" />
                  <span>{language === 'de' ? 'RF-Vakuum-Lifting — für ein glatteres Hautbild bei Cellulite' : language === 'ru' ? 'RF-вакуумный лифтинг — для более гладкой кожи при целлюлите' : 'RF-вакуумний ліфтинг — для більш гладкої шкіри при целюліті'}</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-gold mt-2 flex-shrink-0" />
                  <span>{language === 'de' ? 'Kavitation — kann die Körperkonturierung unterstützen' : language === 'ru' ? 'Кавитация — может способствовать коррекции контуров тела' : 'Кавітація — може сприяти корекції контурів тіла'}</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-gold mt-2 flex-shrink-0" />
                  <span>{language === 'de' ? 'Zonen: Bauch, Gesäß, Oberschenkel, Arme' : language === 'ru' ? 'Зоны: живот, ягодицы, бёдра, руки' : 'Зоны: живот, ягодицы, бёдра, руки'}</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-gold mt-2 flex-shrink-0" />
                  <span>{language === 'de' ? 'Kurse: 5 oder 10 Behandlungen mit Rabatt' : language === 'ru' ? 'Курсы: 5 или 10 процедур со скидкой' : 'Курсы: 5 или 10 процедур со скидкой'}</span>
                </li>
              </ul>

              <div className="mt-6 pt-6 border-t border-brand-gold/20">
                <h4 className="font-semibold text-brand-espresso mb-3">{language === 'de' ? 'Zusätzlich' : language === 'ru' ? 'Дополнительно' : 'Дополнительно'}</h4>
                <ul className="space-y-2 text-brand-coffee/80">
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-gold mt-2 flex-shrink-0" />
                    <span>{language === 'de' ? 'Darsonval für Haare' : language === 'ru' ? 'Дарсонваль для волос' : 'Дарсонваль для волосся'}</span>
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
            <h3 className="text-sm sm:text-base md:text-xl lg:text-2xl font-heading font-semibold text-brand-espresso mb-6 text-center max-w-full" style={{ hyphens: 'none', wordBreak: 'normal', overflowWrap: 'normal' }}>
              {language === 'de' ? 'Ergebnisse' : language === 'ru' ? 'Результаты' : 'Результаты'}
            </h3>
            <div className="space-y-3 md:space-y-4 text-sm md:text-base text-brand-coffee/80 leading-relaxed">
              <p>
                {language === 'de'
                  ? 'Erste sichtbare Veränderungen sind oft schon nach der ersten Behandlung möglich; für ein nachhaltigeres Ergebnis empfehlen wir einen Kurs von 5-10 Sitzungen. Ergebnisse können individuell variieren.'
                  : language === 'ru' ? 'Первые видимые изменения часто возможны уже после первой процедуры; для более стойкого результата рекомендуется курс из 5-10 сеансов. Результаты индивидуальны.'
                  : 'Перші видимі зміни часто можливі вже після першої процедури; для стійкішого результату рекомендується курс з 5-10 сеансів. Результати індивідуальні.'}
              </p>
              <p>
                {language === 'de'
                  ? 'Die meisten Behandlungen sind schmerzarm und erfordern in der Regel keine oder nur eine kurze Erholungszeit. Meist können Sie direkt in Ihren Alltag zurückkehren.'
                  : language === 'ru' ? 'Большинство процедур малоболезненны и, как правило, не требуют восстановительного периода или он очень короткий. Обычно вы можете сразу вернуться к привычной жизни.'
                  : 'Більшість процедур малоболісні та, як правило, не потребують відновлювального періоду або він дуже короткий. Зазвичай ви можете одразу повернутися до звичного життя.'}
              </p>
              <p className="font-semibold text-brand-espresso">
                {language === 'de'
                  ? 'Vor Kursbeginn führen wir eine kostenlose Hautanalyse durch und erstellen ein individuelles Behandlungsprogramm.'
                  : language === 'ru' ? 'Перед началом курса проводится бесплатный анализ кожи и подбор индивидуальной программы процедур.'
                  : 'Перед початком курсу проводиться безкоштовний аналіз шкіри та підбір індивідуальної програми процедур.'}
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
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-heading font-semibold text-white mb-4 md:mb-6 max-w-full px-2 break-words" style={{ hyphens: 'none', wordBreak: 'break-word', overflowWrap: 'anywhere', whiteSpace: 'normal', letterSpacing: '-0.01em', wordWrap: 'break-word' }}>
              {language === 'de' ? 'Beginnen Sie Ihren Weg zu einem frischeren Hautbild' : language === 'ru' ? 'Начните путь к более свежему виду кожи' : 'Почніть шлях до свіжішого вигляду шкіри'}
            </h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              {language === 'de'
                ? 'Vereinbaren Sie einen Beratungstermin und erhalten Sie ein individuelles Anti-Aging-Programm'
                : language === 'ru' ? 'Запишитесь на консультацию и получите индивидуальную программу anti-age процедур'
                : 'Запишіться на консультацію та отримайте індивідуальну програму anti-age процедур'}
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
