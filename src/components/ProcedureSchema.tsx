'use client'

import { useLanguage } from '@/contexts/LanguageContext';
import Image from 'next/image';
import { motion } from 'framer-motion';

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

  return (
    <div className={`my-6 md:my-8 ${className}`} style={{ transform: `scale(${scale})`, transformOrigin: 'top center' }}>
      {images.map((imagePath, index) => (
        <motion.div
          key={imagePath}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          className={`relative w-full ${index > 0 ? 'mt-4 md:mt-6' : ''}`}
        >
          <div className="relative w-full rounded-xl md:rounded-2xl overflow-hidden shadow-lg bg-white">
            <Image
              src={imagePath}
              alt={`${altText} ${images.length > 1 ? `- ${index + 1}` : ''}`}
              width={1200}
              height={800}
              className="w-full h-auto"
              priority={index === 0}
            />
          </div>
        </motion.div>
      ))}
    </div>
  );
};
