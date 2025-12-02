'use client'

import { useLanguage } from '@/contexts/LanguageContext';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface ProcedureSchemaProps {
  germanImages: string[];
  russianImages: string[];
  altTextGerman: string;
  altTextRussian: string;
  className?: string;
  scale?: number; // Scale factor: 0.5 = 50%, 1 = 100%, 1.5 = 150%
}

export const ProcedureSchema = ({
  germanImages,
  russianImages,
  altTextGerman,
  altTextRussian,
  className = '',
  scale = 1
}: ProcedureSchemaProps) => {
  const { language } = useLanguage();
  const isGerman = language === 'de';

  const images = isGerman ? germanImages : russianImages;
  const altText = isGerman ? altTextGerman : altTextRussian;

  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [isDesktop, setIsDesktop] = useState(false);

  // Detect screen size
  useEffect(() => {
    const checkScreenSize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    // Check on mount
    checkScreenSize();

    // Add resize listener
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = useCallback(() => {
    setSelectedImage(null);
    document.body.style.overflow = '';
  }, []);

  const nextImage = useCallback(() => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % images.length);
    }
  }, [selectedImage, images.length]);

  const prevImage = useCallback(() => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + images.length) % images.length);
    }
  }, [selectedImage, images.length]);

  // Cleanup body overflow on unmount
  useEffect(() => {
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

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

  return (
    <>
      {/* Full-width container on mobile, scaled on desktop */}
      <div className={`mt-3 md:mt-4 mb-0 ${className} -mx-4 md:mx-0`}>
        {/* Scale wrapper - only applies on desktop */}
        <div
          style={isDesktop && scale !== 1 ? {
            transform: `scale(${scale})`,
            transformOrigin: 'top center'
          } : undefined}
        >
          {images.map((imagePath, index) => (
            <motion.div
              key={imagePath}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative w-full ${index > 0 ? 'mt-4 md:mt-6' : ''}`}
            >
              <div
                className="relative w-full md:rounded-2xl overflow-hidden shadow-lg bg-white cursor-pointer hover:shadow-xl transition-shadow duration-300"
                onClick={() => openLightbox(index)}
              >
                <Image
                  src={imagePath}
                  alt={`${altText} ${images.length > 1 ? `- ${index + 1}` : ''}`}
                  width={1200}
                  height={800}
                  className="w-full h-auto"
                  priority={index === 0}
                />
              {/* Click indicator */}
              <div className="absolute inset-0 bg-black/0 hover:bg-black/5 transition-colors duration-300 flex items-center justify-center">
                <div className="opacity-0 hover:opacity-100 transition-opacity duration-300 bg-white/90 rounded-full p-3">
                  <svg className="w-6 h-6 text-brand-espresso" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center"
            onClick={closeLightbox}
          >
            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors font-sans"
              aria-label="Close"
            >
              <X className="w-6 h-6 text-white" />
            </button>

            {/* Navigation buttons (only if multiple images) */}
            {images.length > 1 && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    prevImage();
                  }}
                  className="absolute left-4 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors font-sans"
                  aria-label="Previous"
                >
                  <ChevronLeft className="w-6 h-6 text-white" />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    nextImage();
                  }}
                  className="absolute right-4 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors font-sans"
                  aria-label="Next"
                >
                  <ChevronRight className="w-6 h-6 text-white" />
                </button>
              </>
            )}

            {/* Image counter */}
            {images.length > 1 && (
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <span className="text-white text-sm font-medium">
                  {selectedImage + 1} / {images.length}
                </span>
              </div>
            )}

            {/* Image */}
            <motion.div
              key={selectedImage}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-7xl max-h-[90vh] w-full h-full flex items-center justify-center p-4"
            >
              <Image
                src={images[selectedImage]}
                alt={`${altText} ${images.length > 1 ? `- ${selectedImage + 1}` : ''}`}
                width={1200}
                height={800}
                className="w-auto h-auto max-w-full max-h-full object-contain rounded-lg cursor-pointer"
                priority
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
