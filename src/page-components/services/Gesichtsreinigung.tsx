'use client'

import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { CheckCircle2, Clock, Droplet, Sparkles, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

const Gesichtsreinigung = () => {
  const { language } = useLanguage();
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const galleryImages = ['/gesichtsbehandlung-apparativ.jpg', '/gesichtsreinigung-behandlung.jpg', '/gesichtsreinigung-ergebnis.jpg', '/gesichtsreinigung-muenchen.jpg', '/gesichtsreinigung-vorher-nachher.jpeg'];

  const openLightbox = (index: number) => setSelectedImage(index);
  const closeLightbox = () => setSelectedImage(null);
  const nextImage = () => setSelectedImage((prev) => prev !== null ? (prev + 1) % galleryImages.length : null);
  const prevImage = () => setSelectedImage((prev) => prev !== null ? (prev - 1 + galleryImages.length) % galleryImages.length : null);

  return (
    <div className="relative min-h-screen">
      {/* Background */}
      <div className="fixed inset-0 z-0">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'url(/nata-lux-beauty-studio-muenchen.webp)',
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 py-20">
        <div className="container mx-auto px-6 max-w-6xl">

          {/* Hero */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20 pt-16"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-brand-gold/10 mb-6">
              <Droplet className="w-10 h-10 text-brand-gold" />
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold tracking-tight text-brand-espresso mb-8">
              {language === 'de' ? 'GESICHTSREINIGUNG' : language === 'ru' ? 'ЧИСТКА ЛИЦА' : 'ЧИСТКА ОБЛИЧЧЯ'}
            </h1>
            <p className="text-lg md:text-2xl font-heading font-light text-brand-espresso/80 mb-4">
              {language === 'de' ? 'in München' : language === 'ru' ? 'в Мюнхене' : 'у Мюнхені'}
            </p>
            <div className="w-32 h-0.5 bg-brand-gold mx-auto mb-8"></div>
            <p className="text-base md:text-xl text-brand-espresso/70 leading-relaxed max-w-3xl mx-auto">
              {language === 'de'
                ? '90 Min kombiniert: Ultrasound + Manuelle Reinigung für strahlend reine Haut'
                : language === 'ru'
                  ? '90 мин комбинированная: ультразвуковая + механическая для сияющей чистой кожи'
                  : '90 хв комбінована: ультразвукова + механічна для сяючої чистої шкіри'}
            </p>
          </motion.div>

          {/* Section 1: Was ist Gesichtsreinigung */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <div className="bg-white/90 backdrop-blur-xl rounded-3xl p-10 md:p-12">
              <h2 className="text-2xl md:text-4xl font-heading font-bold text-brand-espresso mb-6">
                {language === 'de'
                  ? 'Was ist eine professionelle Gesichtsreinigung?'
                  : language === 'ru'
                    ? 'Что такое профессиональная чистка лица?'
                    : 'Що таке професійна чистка обличчя?'}
              </h2>
              <div className="space-y-4 text-brand-espresso/85 leading-relaxed text-lg">
                {language === 'de' ? (
                  <>
                    <p>
                      Unsere <strong>professionelle Gesichtsreinigung</strong> ist eine umfassende 90-minütige Behandlung, die Ihre Haut tiefenwirksam reinigt, pflegt und revitalisiert. Wir kombinieren <strong>Ultraschall- und manuelle Reinigung</strong> für optimale Ergebnisse.
                    </p>
                    <p>
                      Diese Behandlung ist ideal für alle Hauttypen und hilft, Mitesser zu entfernen, Poren zu verfeinern und Ihrer Haut einen strahlenden, frischen Teint zu verleihen.
                    </p>
                    <p>
                      Als regelmäßige Pflegeroutine alle 4-6 Wochen empfohlen – für dauerhaft reine und gesunde Haut.
                    </p>
                  </>
                ) : language === 'ru' ? (
                  <>
                    <p>
                      Наша <strong>профессиональная чистка лица</strong> — это комплексная 90-минутная процедура, которая глубоко очищает, ухаживает и обновляет вашу кожу. Мы комбинируем <strong>ультразвуковую и механическую чистку</strong> для оптимальных результатов.
                    </p>
                    <p>
                      Эта процедура идеальна для всех типов кожи и помогает удалить черные точки, сузить поры и придать коже сияющий, свежий вид.
                    </p>
                    <p>
                      Рекомендуется как регулярный уход каждые 4-6 недель — для постоянно чистой и здоровой кожи.
                    </p>
                  </>
                ) : (
                  <>
                    <p>
                      Наша <strong>професійна чистка обличчя</strong> — це комплексна 90-хвилинна процедура, яка глибоко очищує, доглядає та оновлює вашу шкіру. Ми поєднуємо <strong>ультразвукову та механічну чистку</strong> для оптимальних результатів.
                    </p>
                    <p>
                      Ця процедура ідеальна для всіх типів шкіри та допомагає видалити чорні цятки, звузити пори та надати шкірі сяючий, свіжий вигляд.
                    </p>
                    <p>
                      Рекомендується як регулярний догляд кожні 4-6 тижнів — для постійно чистої та здорової шкіри.
                    </p>
                  </>
                )}
              </div>
            </div>
          </motion.section>

          {/* Section 2: Behandlungsablauf */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <div className="bg-white/90 backdrop-blur-xl rounded-3xl p-10 md:p-12">
              <h2 className="text-2xl md:text-4xl font-heading font-bold text-brand-espresso mb-8">
                {language === 'de' ? 'Wie läuft die Behandlung ab?' : language === 'ru' ? 'Как проходит процедура?' : 'Як проходить процедура?'}
              </h2>
              <div className="space-y-6">
                {[
                  {
                    titleDE: '1. Reinigung & Tonisierung',
                    titleRU: '1. Очищение и тонизация',
                    titleUA: '1. Очищення та тонізація',
                    descDE: 'Vorbereitung der Haut.',
                    descRU: 'Подготовка кожи.',
                    descUA: 'Підготовка шкіри.'
                  },
                  {
                    titleDE: '2. Peeling',
                    titleRU: '2. Пілінг',
                    titleUA: '2. Пілінг',
                    descDE: 'Entfernung abgestorbener Hautschüppchen.',
                    descRU: 'Удаление омертвевших клеток.',
                    descUA: 'Видалення відмерлих клітин.'
                  },
                  {
                    titleDE: '3. Porenöffnende Maske',
                    titleRU: '3. Маска для пор',
                    titleUA: '3. Маска для пор',
                    descDE: 'Sanfte Öffnung der Poren.',
                    descRU: 'Мягкое раскрытие пор.',
                    descUA: 'М\'яке розкриття пор.'
                  },
                  {
                    titleDE: '4. Ultraschall + Manuelle Reinigung',
                    titleRU: '4. Аппаратная + Механическая чистка',
                    titleUA: '4. Апаратна + Механічна чистка',
                    descDE: 'Tiefenreinigung und Ausreinigung.',
                    descRU: 'Глубокое очищение.',
                    descUA: 'Глибоке очищення.'
                  },
                  {
                    titleDE: '5. Porenschließende Masken',
                    titleRU: '5. Успокаивающие маски',
                    titleUA: '5. Заспокійливі маски',
                    descDE: 'Beruhigung und Schließen der Poren.',
                    descRU: 'Успокоение и закрытие пор.',
                    descUA: 'Заспокоєння та закриття пор.'
                  },
                  {
                    titleDE: '6. Abschlusspflege mit SPF',
                    titleRU: '6. Финальный крем с SPF',
                    titleUA: '6. Фінальний крем з SPF',
                    descDE: 'Schutz der frisch gereinigten Haut.',
                    descRU: 'Защита очищенной кожи.',
                    descUA: 'Захист очищеної шкіри.'
                  },
                  {
                    titleDE: '7. Darsonval / Phonophorese (nach Bedarf)',
                    titleRU: '7. Дарсонваль / Фонофорез',
                    titleUA: '7. Дарсонваль / Фонофорез',
                    descDE: 'Ergänzend nach Bedarf.',
                    descRU: 'Дополнительно при необходимости.',
                    descUA: 'Додатково за потребою.'
                  },
                ].map((step, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-brand-gold/10 flex items-center justify-center flex-shrink-0">
                      <Sparkles className="w-6 h-6 text-brand-gold" />
                    </div>
                    <div>
                      <h3 className="text-xl font-heading font-semibold text-brand-espresso mb-2">
                        {language === 'de' ? step.titleDE : language === 'ru' ? step.titleRU : step.titleUA}
                      </h3>
                      <p className="text-brand-espresso/70 leading-relaxed">
                        {language === 'de' ? step.descDE : language === 'ru' ? step.descRU : step.descUA}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 p-6 bg-brand-gold/10 rounded-2xl">
                <p className="text-brand-espresso/80 font-semibold mb-2">
                  {language === 'de' ? '⏱ Dauer: 90 Minuten' : language === 'ru' ? '⏱ Длительность: 90 минут' : '⏱ Тривалість: 90 хвилин'}
                </p>
                <p className="text-brand-espresso/70 text-sm">
                  {language === 'de'
                    ? 'Wir arbeiten mit hochwertiger professioneller Kosmetik: TM Renew, Derma Series und anderen Premium-Marken.'
                    : language === 'ru'
                      ? 'Мы работаем с высококачественной профессиональной косметикой: ТМ Renew, Derma Series и другими премиум брендами.'
                      : 'Ми працюємо з високоякісною професійною косметикою: ТМ Renew, Derma Series та іншими преміум брендами.'}
                </p>
              </div>
            </div>
          </motion.section>

          {/* Section 3: Ihre Vorteile */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <div className="bg-white/90 backdrop-blur-xl rounded-3xl p-10 md:p-12">
              <h2 className="text-2xl md:text-4xl font-heading font-bold text-brand-espresso mb-8">
                {language === 'de' ? 'Ihre Vorteile' : language === 'ru' ? 'Ваши преимущества' : 'Ваші переваги'}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { de: 'Tiefenwirksame Reinigung der Poren', ru: 'Глубокое очищение пор', ua: 'Глибоке очищення пор' },
                  { de: 'Entfernung von Mitessern und Unreinheiten', ru: 'Удаление черных точек и загрязнений', ua: 'Видалення чорних цяток та забруднень' },
                  { de: 'Verfeinerte und geschlossene Poren', ru: 'Суженные и закрытые поры', ua: 'Звужені та закриті пори' },
                  { de: 'Strahlender, frischer Teint', ru: 'Сияющий, свежий цвет лица', ua: 'Сяючий, свіжий колір обличчя' },
                  { de: 'Verbesserung der Hautstruktur', ru: 'Улучшение структуры кожи', ua: 'Покращення структури шкіри' },
                  { de: 'Bessere Aufnahme von Pflegeprodukten', ru: 'Лучшее усвоение уходовых средств', ua: 'Краще засвоєння доглядових засобів' },
                  { de: 'Vorbeugung von Unreinheiten und Akne', ru: 'Профилактика загрязнений и акне', ua: 'Профілактика забруднень та акне' },
                  { de: 'Entspannung und Wohlbefinden', ru: 'Расслабление и хорошее самочувствие', ua: 'Розслаблення та гарне самопочуття' },
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-brand-gold flex-shrink-0 mt-1" />
                    <span className="text-brand-espresso/70 leading-relaxed">
                      {language === 'de' ? item.de : language === 'ru' ? item.ru : item.ua}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.section>

          {/* Section 4: Empfehlungen */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <div className="bg-gradient-to-br from-brand-gold/20 via-brand-gold/10 to-transparent backdrop-blur-xl rounded-3xl p-10 md:p-12 border border-brand-gold/20">
              <h2 className="text-2xl md:text-4xl font-heading font-bold text-brand-espresso mb-6">
                {language === 'de' ? 'Empfehlungen' : language === 'ru' ? 'Рекомендации' : 'Рекомендації'}
              </h2>
              <div className="space-y-4 text-brand-espresso/85 leading-relaxed text-lg">
                {language === 'de' ? (
                  <>
                    <div className="flex items-start gap-4">
                      <Clock className="w-6 h-6 text-brand-gold flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold mb-2">Wie oft sollte ich eine Gesichtsreinigung machen?</p>
                        <p className="text-brand-espresso/70">
                          Wir empfehlen alle 4-6 Wochen für optimale Ergebnisse, abhängig von Ihrem Hauttyp und Hautzustand.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <Sparkles className="w-6 h-6 text-brand-gold flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold mb-2">Was sollte ich nach der Behandlung beachten?</p>
                        <p className="text-brand-espresso/70">
                          Verzichten Sie 24 Stunden auf Make-up, Sonnenbaden und Sauna. Ihre Haut braucht Zeit zur Regeneration. Mineralisches Make-up ist nach 12 Stunden möglich.
                        </p>
                      </div>
                    </div>
                  </>
                ) : language === 'ru' ? (
                  <>
                    <div className="flex items-start gap-4">
                      <Clock className="w-6 h-6 text-brand-gold flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold mb-2">Как часто нужно делать чистку лица?</p>
                        <p className="text-brand-espresso/70">
                          Мы рекомендуем каждые 4-6 недель для оптимальных результатов, в зависимости от типа кожи и ее состояния.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <Sparkles className="w-6 h-6 text-brand-gold flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold mb-2">Что следует учесть после процедуры?</p>
                        <p className="text-brand-espresso/70">
                          Воздержитесь от макияжа, загара и сауны в течение 24 часов. Вашей коже нужно время для восстановления. Минеральный макияж возможен через 12 часов.
                        </p>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="flex items-start gap-4">
                      <Clock className="w-6 h-6 text-brand-gold flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold mb-2">Як часто потрібно робити чистку обличчя?</p>
                        <p className="text-brand-espresso/70">
                          Ми рекомендуємо кожні 4-6 тижнів для оптимальних результатів, залежно від типу шкіри та її стану.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <Sparkles className="w-6 h-6 text-brand-gold flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold mb-2">Що слід врахувати після процедури?</p>
                        <p className="text-brand-espresso/70">
                          Утримайтеся від макіяжу, засмаги та сауни протягом 24 годин. Вашій шкірі потрібен час для відновлення. Мінеральний макіяж можливий через 12 годин.
                        </p>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </motion.section>

          {/* Section 5: Kontraindikationen */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <div className="bg-white/90 backdrop-blur-xl rounded-3xl p-10 md:p-12">
              <h2 className="text-2xl md:text-4xl font-heading font-bold text-brand-espresso mb-6">
                {language === 'de' ? 'Kontraindikationen' : language === 'ru' ? 'Противопоказания' : 'Протипоказання'}
              </h2>
              <p className="text-lg text-brand-espresso/70 mb-6 leading-relaxed">
                {language === 'de'
                  ? 'In folgenden Fällen raten wir von dieser Behandlung ab oder empfehlen vorherige ärztliche Abklärung:'
                  : language === 'ru'
                    ? 'В следующих случаях мы не рекомендуем эту процедуру или рекомендуем предварительную консультацию с врачом:'
                    : 'У наступних випадках ми не рекомендуємо цю процедуру або рекомендуємо попередню консультацію з лікарем:'}
              </p>
              <div className="space-y-3">
                {[
                  {
                    de: 'Aktive Hautinfektionen oder Herpes',
                    ru: 'Активные кожные инфекции или герпес',
                    ua: 'Активні шкірні інфекції або герпес'
                  },
                  {
                    de: 'Starke Akne (bitte zuerst Dermatologen konsultieren)',
                    ru: 'Сильное акне (сначала проконсультируйтесь с дерматологом)',
                    ua: 'Сильне акне (спочатку проконсультуйтеся з дерматологом)'
                  },
                  {
                    de: 'Frische Tätowierungen oder PMU im Gesicht',
                    ru: 'Свежие татуировки или перманентный макияж на лице',
                    ua: 'Свіжі татуювання або перманентний макіяж на обличчі'
                  },
                  {
                    de: 'Sonnenbrand',
                    ru: 'Солнечный ожог',
                    ua: 'Сонячний опік'
                  },
                  {
                    de: 'Nach chemischen Peelings (mindestens 2 Wochen Abstand)',
                    ru: 'После химических пилингов (минимум 2 недели перерыва)',
                    ua: 'Після хімічних пілінгів (мінімум 2 тижні перерви)'
                  },
                  {
                    de: 'Sehr empfindliche Couperose-Haut',
                    ru: 'Очень чувствительная кожа с куперозом',
                    ua: 'Дуже чутлива шкіра з куперозом'
                  },
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-brand-gold flex-shrink-0 mt-2"></div>
                    <p className="text-brand-espresso/70 leading-relaxed">
                      {language === 'de' ? item.de : language === 'ru' ? item.ru : item.ua}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.section>

          {/* CTA Section */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <div className="bg-gradient-to-br from-brand-espresso/5 via-brand-gold/10 to-brand-espresso/5 backdrop-blur-xl rounded-3xl p-10 md:p-12 border-2 border-brand-gold/30 text-center">
              <h2 className="text-2xl md:text-4xl font-heading font-bold text-brand-espresso mb-6">
                {language === 'de'
                  ? 'Bereit für strahlend reine Haut?'
                  : language === 'ru'
                    ? 'Готовы к сияющей чистой коже?'
                    : 'Готові до сяючої чистої шкіри?'}
              </h2>
              <p className="text-lg text-brand-espresso/70 mb-8 max-w-2xl mx-auto">
                {language === 'de'
                  ? 'Buchen Sie jetzt Ihre Gesichtsreinigung und gönnen Sie Ihrer Haut eine professionelle Tiefenpflege.'
                  : language === 'ru'
                    ? 'Запишитесь на чистку лица и подарите своей коже профессиональный глубокий уход.'
                    : 'Запишіться на чистку обличчя та подаруйте своїй шкірі професійний глибокий догляд.'}
              </p>
              <Button className="bg-brand-gold hover:bg-brand-gold/90 text-white font-medium rounded-xl px-8 py-6 text-lg">
                {language === 'de' ? 'Jetzt Termin vereinbaren' : language === 'ru' ? 'Записаться на процедуру' : 'Записатися на процедуру'}
              </Button>
            </div>
          </motion.section>

          {/* Gallery */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <div className="bg-white/90 backdrop-blur-xl rounded-3xl p-10 md:p-12">
              <h2 className="text-3xl font-heading font-bold text-brand-espresso mb-8 text-center">
                {language === 'de' ? 'Unsere Arbeiten' : language === 'ru' ? 'Наши работы' : 'Наші роботи'}
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {galleryImages.map((src, index) => (
                  <div
                    key={index}
                    className="relative aspect-square rounded-xl overflow-hidden cursor-pointer group"
                    onClick={() => openLightbox(index)}
                  >
                    <Image
                      src={src}
                      alt={`${language === 'de' ? 'Gesichtsreinigung' : language === 'ru' ? 'Чистка лица' : 'Чистка обличчя'} ${index + 1}`}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
                  </div>
                ))}
              </div>
            </div>
          </motion.section>

          {/* Lightbox */}
          {selectedImage !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center"
              onClick={closeLightbox}
            >
              <button onClick={closeLightbox} className="absolute top-6 right-6 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-all duration-300">
                <X className="w-6 h-6 text-white" />
              </button>
              <button onClick={(e) => { e.stopPropagation(); prevImage(); }} className="absolute left-4 md:left-8 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-all duration-300">
                <ChevronLeft className="w-6 h-6 text-white" />
              </button>
              <button onClick={(e) => { e.stopPropagation(); nextImage(); }} className="absolute right-4 md:right-8 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-all duration-300">
                <ChevronRight className="w-6 h-6 text-white" />
              </button>
              <motion.div
                key={selectedImage}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="relative w-[90vw] h-[80vh] md:w-[80vw] md:h-[85vh] cursor-pointer"
              >
                <Image src={galleryImages[selectedImage]} alt="" fill className="object-contain" sizes="90vw" priority />
              </motion.div>
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/60 text-sm font-medium tracking-wider">
                {selectedImage + 1} / {galleryImages.length}
              </div>
            </motion.div>
          )}

          {/* SEO Footer */}
          <div className="text-center text-sm text-brand-espresso/50 pb-8">
            <p>
              {language === 'de'
                ? 'Gesichtsreinigung München • Kosmetikstudio München • Ultraschallreinigung München • Professionelle Hautpflege München Haidhausen • Beauty Studio München'
                : language === 'ru'
                  ? 'Чистка лица Мюнхен • Косметолог Мюнхен • Ультразвуковая чистка Мюнхен • Профессиональный уход за кожей Мюнхен Хайдхаузен • Бьюти-студия Мюнхен'
                  : 'Чистка обличчя Мюнхен • Косметолог Мюнхен • Ультразвукова чистка Мюнхен • Професійний догляд за шкірою Мюнхен Хайдхаузен • Б\'юті-студія Мюнхен'}
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Gesichtsreinigung;
