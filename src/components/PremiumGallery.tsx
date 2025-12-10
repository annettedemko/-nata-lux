'use client'

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState, useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface MediaItem {
  src: string;
  type: 'image' | 'video';
}

interface PremiumGalleryProps {
  images: (string | MediaItem)[];
  title?: string;
}

const isVideo = (item: string | MediaItem): boolean => {
  if (typeof item === 'string') {
    return item.endsWith('.webm') || item.endsWith('.mp4') || item.endsWith('.mov');
  }
  return item.type === 'video';
};

const getSrc = (item: string | MediaItem): string => {
  return typeof item === 'string' ? item : item.src;
};

export const PremiumGallery = ({ images, title }: PremiumGalleryProps) => {
  const { language } = useLanguage();
  const isGerman = language === 'de';
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const openLightbox = (index: number) => setSelectedImage(index);
  const closeLightbox = useCallback(() => setSelectedImage(null), []);
  const nextImage = useCallback(() => setSelectedImage((prev) => prev !== null ? (prev + 1) % images.length : null), [images.length]);
  const prevImage = useCallback(() => setSelectedImage((prev) => prev !== null ? (prev - 1 + images.length) % images.length : null), [images.length]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImage === null) return;

      switch (e.key) {
        case 'ArrowLeft':
          prevImage();
          break;
        case 'ArrowRight':
          nextImage();
          break;
        case 'Escape':
          closeLightbox();
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage, nextImage, prevImage, closeLightbox]);

  // Touch/Swipe handling
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextImage();
    } else if (isRightSwipe) {
      prevImage();
    }
  };

  return (
    <>
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative mb-16"
      >
        {/* Section Header */}
        <div className="text-center mb-10">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '80px' }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-[2px] bg-gradient-to-r from-transparent via-brand-gold to-transparent mx-auto mb-6"
          />
          <h2 className="text-3xl md:text-4xl font-heading font-semibold text-brand-espresso mb-2">
            {title || (language === 'de' ? 'Unsere Arbeiten' : language === 'ru' ? 'Наши работы' : 'Наши работы')}
          </h2>
          <p className="text-brand-coffee/60 text-sm tracking-widest uppercase">
            {language === 'de' ? 'Galerie' : language === 'ru' ? 'Галерея' : 'Галерея'}
          </p>
        </div>

        {/* Premium Gallery Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3 md:gap-4">
          {images.map((item, index) => (
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
              {/* Image or Video */}
              {isVideo(item) ? (
                <video
                  src={getSrc(item)}
                  className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-110"
                  muted
                  loop
                  playsInline
                  onMouseEnter={(e) => e.currentTarget.play()}
                  onMouseLeave={(e) => { e.currentTarget.pause(); e.currentTarget.currentTime = 0; }}
                />
              ) : (
                <Image
                  src={getSrc(item)}
                  alt={`${language === 'de' ? 'Arbeit' : language === 'ru' ? 'Работа' : 'Работа'} ${index + 1}`}
                  fill
                  className="object-cover transition-all duration-700 ease-out group-hover:scale-110"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              )}

              {/* Luxury Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />

              {/* Golden Border Effect */}
              <div className="absolute inset-0 rounded-2xl border-2 border-brand-gold/0 group-hover:border-brand-gold/40 transition-all duration-500" />

              {/* Shine Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
              </div>

              {/* View indicator */}
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                <span className="text-white text-xs font-medium tracking-wider uppercase bg-black/30 backdrop-blur-sm px-3 py-1.5 rounded-full">
                  {language === 'de' ? 'Ansehen' : language === 'ru' ? 'Смотреть' : 'Смотреть'}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Decorative Elements */}
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-gold/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-brand-gold/5 rounded-full blur-3xl pointer-events-none" />
      </motion.section>

      {/* Premium Lightbox */}
      {selectedImage !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center"
          onClick={closeLightbox}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-all duration-300 group font-sans"
          >
            <X className="w-6 h-6 text-white group-hover:rotate-90 transition-transform duration-300" />
          </button>

          {/* Navigation - Previous */}
          <button
            onClick={(e) => { e.stopPropagation(); prevImage(); }}
            className="absolute left-4 md:left-8 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-all duration-300 font-sans"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>

          {/* Navigation - Next */}
          <button
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
            className="absolute right-4 md:right-8 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-all duration-300 font-sans"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>

          {/* Main Image or Video */}
          <motion.div
            key={selectedImage}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="relative w-[95vw] h-[75vh] landscape:h-[85vh] md:w-[80vw] md:h-[85vh] cursor-pointer"
            onClick={closeLightbox}
          >
            {isVideo(images[selectedImage]) ? (
              <video
                src={getSrc(images[selectedImage])}
                className="w-full h-full object-contain"
                controls
                autoPlay
                muted
                loop
                playsInline
              />
            ) : (
              <Image
                src={getSrc(images[selectedImage])}
                alt={`${language === 'de' ? 'Arbeit' : language === 'ru' ? 'Работа' : 'Работа'} ${selectedImage + 1}`}
                fill
                className="object-contain"
                sizes="90vw"
                priority
              />
            )}
          </motion.div>

          {/* Image Counter */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/60 text-sm font-medium tracking-wider">
            {selectedImage + 1} / {images.length}
          </div>
        </motion.div>
      )}
    </>
  );
};
