'use client'

import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { CheckCircle2, Clock, Droplet, Sparkles, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

const Gesichtsreinigung = () => {
  const { language } = useLanguage();
  const isGerman = language === 'de';
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const galleryImages = ['/51.jpg', '/101.jpg', '/100.jpg', '/99.jpg', '/142.jpeg'];

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
            backgroundImage: 'url(/45.webp)',
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
              {isGerman ? 'GESICHTSREINIGUNG' : 'ЧИСТКА ЛИЦА'}
            </h1>
            <p className="text-lg md:text-2xl font-heading font-light text-brand-espresso/80 mb-4">
              {isGerman ? 'in München' : 'в Мюнхене'}
            </p>
            <div className="w-32 h-0.5 bg-brand-gold mx-auto mb-8"></div>
            <p className="text-base md:text-xl text-brand-espresso/70 leading-relaxed max-w-3xl mx-auto">
              {isGerman
                ? '90 Min kombiniert: Ultrasound + Manuelle Reinigung für strahlend reine Haut'
                : '90 мин комбинированная: ультразвуковая + механическая для сияющей чистой кожи'}
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
                {isGerman
                  ? 'Was ist eine professionelle Gesichtsreinigung?'
                  : 'Что такое профессиональная чистка лица?'}
              </h2>
              <div className="space-y-4 text-brand-espresso/85 leading-relaxed text-lg">
                {isGerman ? (
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
                ) : (
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
                {isGerman ? 'Wie läuft die Behandlung ab?' : 'Как проходит процедура?'}
              </h2>
              <div className="space-y-6">
                {[
                  {
                    titleDE: '1. Reinigung & Tonisierung',
                    titleRU: '1. Очищение и тонизация',
                    descDE: 'Vorbereitung der Haut.',
                    descRU: 'Подготовка кожи.'
                  },
                  {
                    titleDE: '2. Peeling',
                    titleRU: '2. Пилинг',
                    descDE: 'Entfernung abgestorbener Hautschüppchen.',
                    descRU: 'Удаление омертвевших клеток.'
                  },
                  {
                    titleDE: '3. Porenöffnende Maske',
                    titleRU: '3. Маска для пор',
                    descDE: 'Sanfte Öffnung der Poren.',
                    descRU: 'Мягкое раскрытие пор.'
                  },
                  {
                    titleDE: '4. Ultraschall + Manuelle Reinigung',
                    titleRU: '4. Аппаратная + Механическая чистка',
                    descDE: 'Tiefenreinigung und Ausreinigung.',
                    descRU: 'Глубокое очищение.'
                  },
                  {
                    titleDE: '5. Porenschließende Masken',
                    titleRU: '5. Успокаивающие маски',
                    descDE: 'Beruhigung und Schließen der Poren.',
                    descRU: 'Успокоение и закрытие пор.'
                  },
                  {
                    titleDE: '6. Abschlusspflege mit SPF',
                    titleRU: '6. Финальный крем с SPF',
                    descDE: 'Schutz der frisch gereinigten Haut.',
                    descRU: 'Защита очищенной кожи.'
                  },
                  {
                    titleDE: '7. Darsonval / Phonophorese (nach Bedarf)',
                    titleRU: '7. Дарсонваль / Фонофорез',
                    descDE: 'Ergänzend nach Bedarf.',
                    descRU: 'Дополнительно при необходимости.'
                  },
                ].map((step, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-brand-gold/10 flex items-center justify-center flex-shrink-0">
                      <Sparkles className="w-6 h-6 text-brand-gold" />
                    </div>
                    <div>
                      <h3 className="text-xl font-heading font-semibold text-brand-espresso mb-2">
                        {isGerman ? step.titleDE : step.titleRU}
                      </h3>
                      <p className="text-brand-espresso/70 leading-relaxed">
                        {isGerman ? step.descDE : step.descRU}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 p-6 bg-brand-gold/10 rounded-2xl">
                <p className="text-brand-espresso/80 font-semibold mb-2">
                  {isGerman ? '⏱ Dauer: 90 Minuten' : '⏱ Длительность: 90 минут'}
                </p>
                <p className="text-brand-espresso/70 text-sm">
                  {isGerman
                    ? 'Wir arbeiten mit hochwertiger professioneller Kosmetik: TM Renew, Derma Series und anderen Premium-Marken.'
                    : 'Мы работаем с высококачественной профессиональной косметикой: ТМ Renew, Derma Series и другими премиум брендами.'}
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
                {isGerman ? 'Ihre Vorteile' : 'Ваши преимущества'}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { de: 'Tiefenwirksame Reinigung der Poren', ru: 'Глубокое очищение пор' },
                  { de: 'Entfernung von Mitessern und Unreinheiten', ru: 'Удаление черных точек и загрязнений' },
                  { de: 'Verfeinerte und geschlossene Poren', ru: 'Суженные и закрытые поры' },
                  { de: 'Strahlender, frischer Teint', ru: 'Сияющий, свежий цвет лица' },
                  { de: 'Verbesserung der Hautstruktur', ru: 'Улучшение структуры кожи' },
                  { de: 'Bessere Aufnahme von Pflegeprodukten', ru: 'Лучшее усвоение уходовых средств' },
                  { de: 'Vorbeugung von Unreinheiten und Akne', ru: 'Профилактика загрязнений и акне' },
                  { de: 'Entspannung und Wohlbefinden', ru: 'Расслабление и хорошее самочувствие' },
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-brand-gold flex-shrink-0 mt-1" />
                    <span className="text-brand-espresso/70 leading-relaxed">
                      {isGerman ? item.de : item.ru}
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
                {isGerman ? 'Empfehlungen' : 'Рекомендации'}
              </h2>
              <div className="space-y-4 text-brand-espresso/85 leading-relaxed text-lg">
                {isGerman ? (
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
                ) : (
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
                {isGerman ? 'Kontraindikationen' : 'Противопоказания'}
              </h2>
              <p className="text-lg text-brand-espresso/70 mb-6 leading-relaxed">
                {isGerman
                  ? 'In folgenden Fällen raten wir von dieser Behandlung ab oder empfehlen vorherige ärztliche Abklärung:'
                  : 'В следующих случаях мы не рекомендуем эту процедуру или рекомендуем предварительную консультацию с врачом:'}
              </p>
              <div className="space-y-3">
                {[
                  {
                    de: 'Aktive Hautinfektionen oder Herpes',
                    ru: 'Активные кожные инфекции или герпес'
                  },
                  {
                    de: 'Starke Akne (bitte zuerst Dermatologen konsultieren)',
                    ru: 'Сильное акне (сначала проконсультируйтесь с дерматологом)'
                  },
                  {
                    de: 'Frische Tätowierungen oder PMU im Gesicht',
                    ru: 'Свежие татуировки или перманентный макияж на лице'
                  },
                  {
                    de: 'Sonnenbrand',
                    ru: 'Солнечный ожог'
                  },
                  {
                    de: 'Nach chemischen Peelings (mindestens 2 Wochen Abstand)',
                    ru: 'После химических пилингов (минимум 2 недели перерыва)'
                  },
                  {
                    de: 'Sehr empfindliche Couperose-Haut',
                    ru: 'Очень чувствительная кожа с куперозом'
                  },
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-brand-gold flex-shrink-0 mt-2"></div>
                    <p className="text-brand-espresso/70 leading-relaxed">
                      {isGerman ? item.de : item.ru}
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
                {isGerman
                  ? 'Bereit für strahlend reine Haut?'
                  : 'Готовы к сияющей чистой коже?'}
              </h2>
              <p className="text-lg text-brand-espresso/70 mb-8 max-w-2xl mx-auto">
                {isGerman
                  ? 'Buchen Sie jetzt Ihre Gesichtsreinigung und gönnen Sie Ihrer Haut eine professionelle Tiefenpflege.'
                  : 'Запишитесь на чистку лица и подарите своей коже профессиональный глубокий уход.'}
              </p>
              <Button className="bg-brand-gold hover:bg-brand-gold/90 text-white font-medium rounded-xl px-8 py-6 text-lg">
                {isGerman ? 'Jetzt Termin vereinbaren' : 'Записаться на процедуру'}
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
                {isGerman ? 'Unsere Arbeiten' : 'Наши работы'}
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
                      alt={`${isGerman ? 'Gesichtsreinigung' : 'Чистка лица'} ${index + 1}`}
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
              {isGerman
                ? 'Gesichtsreinigung München • Kosmetikstudio München • Ultraschallreinigung München • Professionelle Hautpflege München Haidhausen • Beauty Studio München'
                : 'Чистка лица Мюнхен • Косметолог Мюнхен • Ультразвуковая чистка Мюнхен • Профессиональный уход за кожей Мюнхен Хайдхаузен • Бьюти-студия Мюнхен'}
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Gesichtsreinigung;
