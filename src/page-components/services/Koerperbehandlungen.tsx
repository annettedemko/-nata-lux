'use client'

import { useLanguage } from '@/contexts/LanguageContext';
import { ServiceCard } from '@/components/ServiceCard';
import { Star, Zap } from 'lucide-react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const Koerperbehandlungen = () => {
  const { t, language } = useLanguage();
  const isGerman = language === 'de';
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const galleryImages = ['/78.PNG', '/77.PNG', '/81.jpg', '/82.jpg', '/83.jpg', '/84.jpg', '/85.jpg', '/86.jpg'];

  const openLightbox = (index: number) => setSelectedImage(index);
  const closeLightbox = () => setSelectedImage(null);
  const nextImage = () => setSelectedImage((prev) => prev !== null ? (prev + 1) % galleryImages.length : null);
  const prevImage = () => setSelectedImage((prev) => prev !== null ? (prev - 1 + galleryImages.length) % galleryImages.length : null);

  const treatments = [
    {
      title: isGerman ? 'RF-Vakuum' : 'RF-вакуум',
      description: isGerman
        ? 'Radiofrequenz mit Vakuum für Straffung und Cellulite-Reduktion'
        : 'Радиочастоты с вакуумом для подтяжки и уменьшения целлюлита',
      icon: Star,
      href: '/services/koerperbehandlungen/rf-vakuum',
    },
    {
      title: isGerman ? 'Kavitation' : 'Кавитация',
      description: isGerman
        ? 'Ultraschall-Kavitation für Fettreduktion an Bauch, Gesäß und Oberschenkeln'
        : 'Ультразвуковая кавитация для уменьшения жировых отложений на животе, ягодицах и бёдрах',
      icon: Zap,
      href: '/services/koerperbehandlungen/kavitation',
    },
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-brand-gold/10 mb-6">
            <Star className="w-10 h-10 text-brand-gold" />
          </div>
          <h1 className="text-4xl md:text-5xl font-heading font-semibold text-brand-espresso mb-6">
            {isGerman ? 'Körperbehandlungen' : 'Процедуры для тела'}
          </h1>
          <p className="text-xl text-brand-gold font-heading mb-4">
            {isGerman ? 'RF-Vakuum und Kavitation für Body Contouring' : 'RF-вакуум и кавитация для контурирования тела'}
          </p>
          <p className="text-lg text-brand-coffee/80 max-w-2xl mx-auto leading-relaxed">
            {isGerman
              ? 'Moderne Körperbehandlungen für Straffung, Cellulite-Reduktion und Fettabbau. Nicht-invasive Methoden für eine schönere Silhouette.'
              : 'Современные процедуры для тела: подтяжка, уменьшение целлюлита и жировых отложений. Неинвазивные методы для красивого силуэта.'}
          </p>
        </div>

        {/* Treatments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-16 max-w-4xl mx-auto">
          {treatments.map((treatment, index) => (
            <div key={treatment.title} className="animate-slide-up" style={{ animationDelay: `${index * 50}ms` }}>
              <ServiceCard {...treatment} />
            </div>
          ))}
        </div>

        {/* About Section */}
        <section className="glass rounded-2xl p-8 mb-12">
          <h2 className="text-2xl font-heading font-semibold text-brand-espresso mb-4">
            {isGerman ? 'Was sind Körperbehandlungen?' : 'Что такое процедуры для тела?'}
          </h2>
          <p className="text-brand-coffee/80 leading-relaxed mb-4">
            {isGerman
              ? 'Unsere Körperbehandlungen nutzen modernste Technologien wie RF-Vakuum und Kavitation, um gezielt Problemzonen am Körper zu behandeln – ganz ohne Operation oder lange Ausfallzeiten.'
              : 'Наши процедуры используют современные технологии RF-вакуум и кавитация для целенаправленной работы с проблемными зонами тела — без операций и длительного восстановления.'}
          </p>
          <p className="text-brand-coffee/80 leading-relaxed">
            {isGerman
              ? 'Ob Cellulite-Reduktion, Hautstraffung oder Fettabbau – wir bieten effektive Lösungen für eine schönere, straffere Silhouette an Bauch, Gesäß, Oberschenkeln und anderen Bereichen.'
              : 'Уменьшение целлюлита, подтяжка кожи или сжигание жира — мы предлагаем эффективные решения для красивого, подтянутого силуэта на животе, ягодицах, бёдрах и других зонах.'}
          </p>
        </section>

        {/* Premium Gallery */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative mb-16"
        >
          <div className="text-center mb-10">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: '80px' }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="h-[2px] bg-gradient-to-r from-transparent via-brand-gold to-transparent mx-auto mb-6"
            />
            <h2 className="text-3xl md:text-4xl font-heading font-semibold text-brand-espresso mb-2">
              {isGerman ? 'Unsere Arbeiten' : 'Наши работы'}
            </h2>
            <p className="text-brand-coffee/60 text-sm tracking-widest uppercase">
              {isGerman ? 'Galerie' : 'Галерея'}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {galleryImages.map((src, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ scale: 1.02 }}
                onClick={() => openLightbox(index)}
                className="group relative aspect-square cursor-pointer overflow-hidden rounded-2xl"
              >
                <Image
                  src={src}
                  alt={`${isGerman ? 'Körperbehandlung' : 'Процедура для тела'} ${index + 1}`}
                  fill
                  className="object-cover transition-all duration-700 ease-out group-hover:scale-110"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                <div className="absolute inset-0 rounded-2xl border-2 border-brand-gold/0 group-hover:border-brand-gold/40 transition-all duration-500" />
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                  <span className="text-white text-xs font-medium tracking-wider uppercase bg-black/30 backdrop-blur-sm px-3 py-1.5 rounded-full">
                    {isGerman ? 'Ansehen' : 'Смотреть'}
                  </span>
                </div>
              </motion.div>
            ))}
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
              className="relative w-[90vw] h-[80vh] md:w-[80vw] md:h-[85vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image src={galleryImages[selectedImage]} alt="" fill className="object-contain" sizes="90vw" priority />
            </motion.div>
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/60 text-sm font-medium tracking-wider">
              {selectedImage + 1} / {galleryImages.length}
            </div>
          </motion.div>
        )}

        {/* CTA */}
        <div className="bg-gold-gradient rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-heading font-semibold text-white mb-4">
            {isGerman ? 'Bereit für Ihre Traumfigur?' : 'Готовы к фигуре мечты?'}
          </h2>
          <p className="text-white/90 mb-6">
            {isGerman
              ? 'Buchen Sie eine kostenlose Beratung und starten Sie Ihre individuelle Body-Contouring-Reise.'
              : 'Запишитесь на бесплатную консультацию и начните свой индивидуальный путь к идеальному телу.'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Koerperbehandlungen;
