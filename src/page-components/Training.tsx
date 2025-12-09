'use client'

import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import {
  GraduationCap,
  Award,
  Users,
  FileText,
  CheckCircle2,
  X,
  ChevronLeft,
  ChevronRight,
  Phone,
  MessageCircle
} from 'lucide-react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState } from 'react';

const Training = () => {
  const { t, language } = useLanguage();
  const isGerman = language === 'de';
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const galleryImages = ['/154.jpg', '/155.jpg', '/156.jpg', '/157.jpg', '/158.jpeg', '/159.jpg', '/160.jpeg', '/161.jpeg'];

  const openLightbox = (index: number) => setSelectedImage(index);
  const closeLightbox = () => setSelectedImage(null);
  const nextImage = () => setSelectedImage((prev) => prev !== null ? (prev + 1) % galleryImages.length : null);
  const prevImage = () => setSelectedImage((prev) => prev !== null ? (prev - 1 + galleryImages.length) % galleryImages.length : null);

  const courses = [
    {
      title: t('training.lashes'),
      description: t('training.lashes.desc'),
      icon: GraduationCap,
      image: '/136.png',
      includes: isGerman
        ? ['Theorie und Praxis', 'Zertifikat']
        : ['Теория и практика', 'Сертификат'],
      showPricing: false,
    },
    {
      title: t('training.pmu'),
      description: t('training.pmu.desc'),
      icon: Award,
      image: '/135.png',
      includes: isGerman
        ? ['Theorie und Praxis', 'Zertifikat']
        : ['Теория и практика', 'Сертификат'],
      showPricing: false,
    },
    {
      title: t('training.advanced'),
      description: t('training.advanced.desc'),
      icon: FileText,
      image: '/117.PNG',
      imagePosition: 'center 20%',
      includes: isGerman
        ? ['Theorie und Praxis', 'Zertifikat']
        : ['Теория и практика', 'Сертификат'],
      showPricing: false,
    },
    {
      title: t('training.consulting'),
      description: t('training.consulting.desc'),
      icon: Users,
      image: '/134.jpeg',
      imagePosition: 'center 20%',
      includes: isGerman
        ? ['Rechtliche Grundlagen', 'Geschäftsformen', 'Preisgestaltung', 'Marketing-Tipps', 'Checklisten']
        : ['Правовые основы', 'Формы бизнеса', 'Ценообразование', 'Маркетинг-советы', 'Чеклисты'],
      showPricing: false,
    },
  ];

  return (
    <div className="relative min-h-screen">
      {/* Background Image */}
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
        <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-heading font-semibold text-brand-espresso mb-6">
            {t('training.title')}
          </h1>
          <p className="text-xl text-brand-gold font-heading mb-4">
            {t('training.subtitle')}
          </p>
          <p className="text-lg text-brand-coffee/80 leading-relaxed">
            {isGerman
              ? 'Wir bieten professionelle Schulungen für angehende Beauty-Profis. Individuell oder in Mini-Gruppen, mit Zertifikat und lebenslanger Unterstützung.'
              : 'Мы предлагаем профессиональное обучение для начинающих бьюти-мастеров. Индивидуально или в мини-группах, с сертификатом и пожизненной поддержкой.'}
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
          {courses.map((course, index) => (
            <div
              key={course.title}
              className="glass rounded-2xl overflow-hidden hover-lift animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {course.image && (
                <div className="overflow-hidden relative" style={{ height: 'calc(16rem * 1.3)' }}>
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover"
                    style={{ objectPosition: course.imagePosition || 'center' }}
                  />
                </div>
              )}
              <div className="p-8">
              <div className="flex items-start mb-6">
                <div className="w-16 h-16 rounded-xl bg-brand-gold/10 flex items-center justify-center mr-4 flex-shrink-0">
                  <course.icon className="w-8 h-8 text-brand-gold" />
                </div>
                <div>
                  <h3 className="text-2xl font-heading font-semibold text-brand-espresso mb-2">
                    {course.title}
                  </h3>
                  <p className="text-brand-coffee/70 leading-relaxed">
                    {course.description}
                  </p>
                </div>
              </div>

              {course.showPricing && (
                <div className="flex items-center justify-between mb-6 pb-6 border-b border-brand-gold/10">
                  <div>
                    <p className="text-sm text-brand-coffee/60 mb-1">{isGerman ? 'Dauer' : 'Длительность'}</p>
                    <p className="text-brand-espresso font-semibold">{course.duration}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-brand-coffee/60 mb-1">{isGerman ? 'Preis' : 'Цена'}</p>
                    <p className="text-2xl font-heading font-semibold text-brand-gold">{course.price}</p>
                  </div>
                </div>
              )}

              <div className="space-y-3 mb-6">
                {course.includes.map((item, i) => (
                  <div key={i} className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-brand-gold mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-brand-coffee/70">{item}</span>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-3 gap-2">
                <a
                  href="tel:+4917677267269"
                  className="flex items-center justify-center gap-1.5 px-3 py-3 bg-brand-espresso hover:bg-brand-espresso/90 text-white font-medium rounded-xl transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span className="text-sm">{isGerman ? 'Anrufen' : 'Звонок'}</span>
                </a>
                <a
                  href="https://wa.me/4917677267269"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 px-3 py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded-xl transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span className="text-sm">WhatsApp</span>
                </a>
                <a
                  href="https://t.me/+4917677267269"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 px-3 py-3 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-xl transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span className="text-sm">Telegram</span>
                </a>
              </div>
              </div>
            </div>
          ))}
        </div>

        {/* Why Choose Us */}
        <div className="glass rounded-3xl p-8 md:p-12 max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-heading font-semibold text-brand-espresso mb-6">
            {isGerman ? 'Warum bei uns lernen?' : 'Почему учиться у нас?'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="w-12 h-12 mx-auto rounded-full bg-brand-gold/10 flex items-center justify-center mb-3">
                <Award className="w-6 h-6 text-brand-gold" />
              </div>
              <h3 className="text-lg font-semibold text-brand-espresso mb-2">
                {isGerman ? 'Zertifiziert' : 'Сертификат'}
              </h3>
              <p className="text-brand-coffee/70 text-sm">
                {isGerman ? 'Offizielles Zertifikat nach Abschluss' : 'Официальный сертификат по окончании'}
              </p>
            </div>
            <div>
              <div className="w-12 h-12 mx-auto rounded-full bg-brand-gold/10 flex items-center justify-center mb-3">
                <Users className="w-6 h-6 text-brand-gold" />
              </div>
              <h3 className="text-lg font-semibold text-brand-espresso mb-2">
                {isGerman ? 'Kleine Gruppen' : 'Малые группы'}
              </h3>
              <p className="text-brand-coffee/70 text-sm">
                {isGerman ? 'Individuelle Betreuung garantiert' : 'Гарантированное индивидуальное внимание'}
              </p>
            </div>
            <div>
              <div className="w-12 h-12 mx-auto rounded-full bg-brand-gold/10 flex items-center justify-center mb-3">
                <GraduationCap className="w-6 h-6 text-brand-gold" />
              </div>
              <h3 className="text-lg font-semibold text-brand-espresso mb-2">
                {isGerman ? 'Support' : 'Поддержка'}
              </h3>
              <p className="text-brand-coffee/70 text-sm">
                {isGerman ? 'Lebenslange Unterstützung nach dem Kurs' : 'Пожизненная поддержка после курса'}
              </p>
            </div>
          </div>
        </div>

        {/* Premium Gallery */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative mt-16"
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
              {isGerman ? 'Galerie' : 'Галерея'}
            </h2>
            <p className="text-brand-coffee/60 text-sm tracking-widest uppercase">
              {isGerman ? 'Zertifikate & Arbeiten unserer Schülerinnen' : 'Сертификаты и работы наших учениц'}
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 sm:gap-3 md:gap-4">
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
                  alt={`${isGerman ? 'Training' : 'Обучение'} ${index + 1}`}
                  fill
                  className="object-cover transition-all duration-700 ease-out group-hover:scale-110"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                <div className="absolute inset-0 rounded-2xl border-2 border-brand-gold/0 group-hover:border-brand-gold/40 transition-all duration-500" />
                {/* Shine Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
                </div>
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
              className="relative w-[90vw] h-[80vh] md:w-[80vw] md:h-[85vh] cursor-pointer"
              onClick={closeLightbox}
            >
              <Image src={galleryImages[selectedImage]} alt="" fill className="object-contain" sizes="90vw" priority />
            </motion.div>
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/60 text-sm font-medium tracking-wider">
              {selectedImage + 1} / {galleryImages.length}
            </div>
          </motion.div>
        )}
        </div>
      </div>
    </div>
  );
};

export default Training;
