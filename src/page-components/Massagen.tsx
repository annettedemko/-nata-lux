'use client'

import { Link } from '@/components/LinkAdapter'
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Heart, Zap, Star, Waves, Activity, Sparkles, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import DikidiConsentDialog, { useDikidiConsent } from '@/components/DikidiConsentDialog';
import { PremiumGallery } from '@/components/PremiumGallery';

const Massagen = () => {
  const { language } = useLanguage();
  const { isDialogOpen, openDikidi, closeDialog } = useDikidiConsent();

  const massageTypes = [
    {
      icon: Waves,
      title: language === 'de' ? 'Lymphdrainage' : language === 'ru' ? 'Лимфодренажный массаж' : 'Лімфодренажний масаж',
      description: language === 'de'
        ? 'Apparative Lymphdrainage gegen Schwellungen und Wassereinlagerungen. Fördert den Lymphfluss und entgiftet den Körper.'
        : language === 'ru'
        ? 'Аппаратный лимфодренаж против отёков и задержки воды. Стимулирует лимфоток и выводит токсины.'
        : 'Апаратний лімфодренаж проти набряків та затримки води. Стимулює лімфотік та виводить токсини.',
      keywords: language === 'de' ? 'Lymphdrainage Behandlung München · Apparative Lymphdrainage' : '',
    },
    {
      icon: Activity,
      title: language === 'de' ? 'Anti-Cellulite Massage' : language === 'ru' ? 'Антицеллюлитный массаж' : 'Антицелюлітний масаж',
      description: language === 'de'
        ? 'Gezielte Behandlung gegen Cellulite mit RF-Technologie und Vakuum. Sichtbare Ergebnisse ab der ersten Sitzung möglich.'
        : language === 'ru'
        ? 'Целенаправленная процедура против целлюлита с RF-технологией и вакуумом. Видимые результаты уже после первого сеанса.'
        : 'Цілеспрямована процедура проти целюліту з RF-технологією та вакуумом. Видимі результати вже після першого сеансу.',
      keywords: language === 'de' ? 'Anti Cellulite Massage München · Cellulite Behandlung' : '',
    },
    {
      icon: Zap,
      title: language === 'de' ? 'Bodyforming Massage' : language === 'ru' ? 'Массаж для похудения' : 'Масаж для схуднення',
      description: language === 'de'
        ? 'Apparative Massage zur Fettverbrennung und Figurformung. Reduziert Umfänge an Bauch, Hüften und Oberschenkeln.'
        : language === 'ru'
        ? 'Аппаратный массаж для жиросжигания и формирования фигуры. Уменьшает объёмы на животе, бёдрах и ногах.'
        : 'Апаратний масаж для жироспалювання та формування фігури. Зменшує об\'єми на животі, стегнах та ногах.',
      keywords: language === 'de' ? 'Bodyforming München · Massage zur Fettverbrennung' : '',
    },
    {
      icon: Sparkles,
      title: language === 'de' ? 'Straffende Massage' : language === 'ru' ? 'Массаж для омоложения кожи' : 'Масаж для омолодження шкіри',
      description: language === 'de'
        ? 'Anti-Aging Massage mit Radiofrequenz für Hautstraffung und Kollagenstimulation. Verbessert die Hautstruktur sichtbar.'
        : language === 'ru'
        ? 'Anti-Aging массаж с радиочастотами для подтяжки кожи и стимуляции коллагена. Заметно улучшает структуру кожи.'
        : 'Anti-Aging масаж з радіочастотами для підтяжки шкіри та стимуляції колагену. Помітно покращує структуру шкіри.',
      keywords: language === 'de' ? 'Hautstraffung München · Anti Aging Massage' : '',
    },
  ];

  const benefits = language === 'de' ? [
    'Lymphdrainage und Entschlackung',
    'Cellulite-Reduktion',
    'Umfänge reduzieren',
    'Hautstraffung und Kollagenstimulation',
    'Fettverbrennung und Bodyforming',
    'Verbesserung der Durchblutung',
    'Entspannung und Wohlbefinden',
    'Sichtbare Ergebnisse ab der ersten Sitzung möglich',
  ] : language === 'ru' ? [
    'Лимфодренаж и детоксикация',
    'Уменьшение целлюлита',
    'Уменьшение объёмов',
    'Подтяжка кожи и стимуляция коллагена',
    'Жиросжигание и бодиформинг',
    'Улучшение кровообращения',
    'Расслабление и хорошее самочувствие',
    'Видимые результаты уже после первого сеанса',
  ] : [
    'Лімфодренаж та детоксикація',
    'Зменшення целюліту',
    'Зменшення об\'ємів',
    'Підтяжка шкіри та стимуляція колагену',
    'Жироспалювання та бодіформінг',
    'Покращення кровообігу',
    'Розслаблення та гарне самопочуття',
    'Видимі результати вже після першого сеансу',
  ];

  return (
    <div className="relative min-h-screen">
      {/* Background */}
      <div className="fixed inset-0 z-0">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'url(/45.webp)',
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 py-20">
        <div className="container mx-auto px-4 max-w-6xl">

          {/* Hero */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-brand-gold/10 mb-6">
              <Heart className="w-10 h-10 text-brand-gold" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-semibold text-brand-espresso mb-6">
              {language === 'de' ? 'Apparative Massagen München' : language === 'ru' ? 'Аппаратные массажи в Мюнхене' : 'Апаратні масажі в Мюнхені'}
            </h1>
            <p className="text-xl text-brand-gold font-heading mb-4">
              {language === 'de' ? 'Lymphdrainage · Anti-Cellulite · Bodyforming · Hautstraffung' : language === 'ru' ? 'Лимфодренаж · Антицеллюлитный · Бодиформинг · Подтяжка кожи' : 'Лімфодренаж · Антицелюлітний · Бодіформінг · Підтяжка шкіри'}
            </p>
            <p className="text-lg text-brand-coffee/80 max-w-3xl mx-auto leading-relaxed">
              {language === 'de'
                ? 'Professionelle apparative Massagen mit RF-Technologie, Vakuum und Infrarot. Effektive Behandlungen für Lymphdrainage, Cellulite-Reduktion, Figurformung und Hautverjüngung.'
                : language === 'ru'
                ? 'Профессиональные аппаратные массажи с RF-технологией, вакуумом и инфракрасным светом. Эффективные процедуры для лимфодренажа, борьбы с целлюлитом, формирования фигуры и омоложения кожи.'
                : 'Професійні апаратні масажі з RF-технологією, вакуумом та інфрачервоним світлом. Ефективні процедури для лімфодренажу, боротьби з целюлітом, формування фігури та омолодження шкіри.'}
            </p>
          </motion.div>

          {/* Massage Types Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-16">
            {massageTypes.map((massage, index) => {
              const Icon = massage.icon;
              return (
                <motion.div
                  key={massage.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="glass-strong rounded-2xl p-6 md:p-8 hover-glow"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-brand-gold/15 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-brand-gold" />
                    </div>
                    <h2 className="text-xl md:text-2xl font-heading font-semibold text-brand-espresso">
                      {massage.title}
                    </h2>
                  </div>
                  <p className="text-brand-coffee/80 leading-relaxed">
                    {massage.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* Benefits Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass-strong rounded-2xl p-8 mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-heading font-semibold text-brand-espresso mb-6">
              {language === 'de' ? 'Vorteile der apparativen Massage' : language === 'ru' ? 'Преимущества аппаратного массажа' : 'Переваги апаратного масажу'}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />
                  <span className="text-brand-coffee/80">{benefit}</span>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Price Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass-strong rounded-2xl p-8 mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-heading font-semibold text-brand-espresso mb-6">
              {language === 'de' ? 'Preise' : language === 'ru' ? 'Цены' : 'Ціни'}
            </h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between py-3 border-b border-brand-gold/10">
                <span className="text-brand-espresso text-lg">
                  {language === 'de' ? 'Einzelbehandlung (30 Min)' : language === 'ru' ? 'Разовая процедура (30 мин)' : 'Разова процедура (30 хв)'}
                </span>
                <span className="text-brand-gold font-heading font-semibold text-2xl">75 €</span>
              </div>
              <div className="flex items-center justify-between py-3 border-b border-brand-gold/10">
                <div>
                  <span className="text-brand-espresso text-lg">
                    {language === 'de' ? 'Kurs — 10 Behandlungen' : language === 'ru' ? 'Курс — 10 процедур' : 'Курс — 10 процедур'}
                  </span>
                  <span className="ml-2 text-sm text-brand-gold font-medium">
                    {language === 'de' ? '(Ersparnis 100 €!)' : language === 'ru' ? '(экономия 100 €!)' : '(економія 100 €!)'}
                  </span>
                </div>
                <span className="text-brand-gold font-heading font-semibold text-2xl">650 €</span>
              </div>
            </div>
            <div className="mt-6 p-4 bg-brand-gold/10 rounded-xl border border-brand-gold/20">
              <p className="text-brand-espresso font-medium text-center">
                {language === 'de'
                  ? '⚡ Anzahl der Angebote begrenzt! Beeilen Sie sich!'
                  : language === 'ru'
                  ? '⚡ Количество предложений ограничено! Поторопитесь!'
                  : '⚡ Кількість пропозицій обмежена! Поспішайте!'}
              </p>
            </div>
            <p className="text-sm text-brand-coffee/60 mt-4 text-center">
              {language === 'de'
                ? 'Alle angegebenen Preise sind Endpreise. Gemäß § 19 UStG wird keine Umsatzsteuer berechnet.'
                : language === 'ru'
                ? 'Все указанные цены являются окончательными. Согласно § 19 UStG НДС не взимается.'
                : 'Всі зазначені ціни є остаточними. Згідно з § 19 UStG ПДВ не стягується.'}
            </p>
          </motion.section>

          {/* How it works */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass-strong rounded-2xl p-8 mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-heading font-semibold text-brand-espresso mb-6">
              {language === 'de' ? 'Wie funktioniert die apparative Massage?' : language === 'ru' ? 'Как работает аппаратный массаж?' : 'Як працює апаратний масаж?'}
            </h2>
            <p className="text-brand-coffee/80 leading-relaxed mb-4">
              {language === 'de'
                ? 'Unsere apparativen Massagen kombinieren drei Technologien: Radiofrequenz (RF), Vakuum-Massage und Infrarotlicht. Diese Kombination ermöglicht eine tiefe Einwirkung auf das Gewebe — für effektive Lymphdrainage, Fettverbrennung und Hautstraffung.'
                : language === 'ru'
                ? 'Наши аппаратные массажи сочетают три технологии: радиочастоты (RF), вакуумный массаж и инфракрасный свет. Эта комбинация обеспечивает глубокое воздействие на ткани — для эффективного лимфодренажа, жиросжигания и подтяжки кожи.'
                : 'Наші апаратні масажі поєднують три технології: радіочастоти (RF), вакуумний масаж та інфрачервоне світло. Ця комбінація забезпечує глибокий вплив на тканини — для ефективного лімфодренажу, жироспалювання та підтяжки шкіри.'}
            </p>
            <p className="text-brand-coffee/80 leading-relaxed">
              {language === 'de'
                ? 'Die Behandlung dauert 30 Minuten und ist schmerzfrei. Ein Kurs von 10 Behandlungen wird für optimale Ergebnisse empfohlen.'
                : language === 'ru'
                ? 'Процедура длится 30 минут и безболезненна. Для оптимальных результатов рекомендуется курс из 10 процедур.'
                : 'Процедура триває 30 хвилин і безболісна. Для оптимальних результатів рекомендується курс із 10 процедур.'}
            </p>
          </motion.section>

          {/* Gallery */}
          <PremiumGallery
            images={[
              '/IMG_8633.PNG',
              '/IMG_7530.JPG',
              '/IMG_7537.JPG',
              '/IMG_7547.JPG',
              '/IMG_5430.JPG',
              '/IMG_3183.JPG',
              '/IMG_4399.JPG',
              '/IMG_9928.PNG',
            ]}
            title={language === 'de' ? 'Unsere Behandlungen' : language === 'ru' ? 'Наши процедуры' : 'Наші процедури'}
          />

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-gold-gradient rounded-2xl p-8 text-center"
          >
            <h2 className="text-2xl md:text-3xl font-heading font-semibold text-white mb-4">
              {language === 'de' ? 'Jetzt Termin buchen!' : language === 'ru' ? 'Запишитесь сейчас!' : 'Запишіться зараз!'}
            </h2>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              {language === 'de'
                ? 'Kostenlose Beratung inklusive. Erleben Sie die Wirkung der apparativen Massage — für eine schlankere Silhouette und straffere Haut.'
                : language === 'ru'
                ? 'Бесплатная консультация включена. Ощутите эффект аппаратного массажа — для стройного силуэта и упругой кожи.'
                : 'Безкоштовна консультація включена. Відчуйте ефект апаратного масажу — для стрункого силуету та пружної шкіри.'}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={openDikidi}
                size="lg"
                className="bg-white hover:bg-brand-cream text-brand-espresso font-medium rounded-xl px-8 py-6 cursor-pointer"
              >
                {language === 'de' ? 'Termin buchen' : language === 'ru' ? 'Записаться' : 'Записатися'}
              </Button>
              <Button
                size="lg"
                className="bg-white/20 hover:bg-white/30 text-white font-medium rounded-xl px-8 py-6 border border-white/30"
                asChild
              >
                <a href="https://wa.me/4917677267269" target="_blank" rel="noopener noreferrer">
                  {language === 'de' ? 'WhatsApp schreiben' : language === 'ru' ? 'Написать в WhatsApp' : 'Написати в WhatsApp'}
                </a>
              </Button>
            </div>
          </motion.div>

        </div>
      </div>

      <DikidiConsentDialog isOpen={isDialogOpen} onClose={closeDialog} />
    </div>
  );
};

export default Massagen;
