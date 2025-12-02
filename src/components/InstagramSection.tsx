'use client'

import { Instagram } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

export const InstagramSection = () => {
  const { language } = useLanguage();

  const handleInstagramClick = () => {
    window.open('https://www.instagram.com/nata_lux_pm?igsh=bnluOTNuZ2RsNnp2', '_blank');
  };

  return (
    <section className="py-12 md:py-16 relative overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, rgba(245,235,225,0.5) 0%, rgba(235,225,215,0.5) 100%)',
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto"
        >
          <div className="mb-8">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, type: "spring" }}
              className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 mb-6"
            >
              <Instagram className="w-10 h-10 text-white" />
            </motion.div>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-semibold text-brand-espresso mb-6">
            {language === 'de' ? 'FOLGEN SIE UNS AUF INSTAGRAM' : 'ПОДПИСЫВАЙТЕСЬ НА НАС В INSTAGRAM'}
          </h2>

          <p className="text-lg md:text-xl text-brand-coffee/80 mb-8 leading-relaxed">
            {language === 'de'
              ? 'Erleben Sie NataLux Beauty hautnah auf Instagram! Entdecken Sie unsere neuesten Arbeiten, Vorher-Nachher-Verwandlungen und exklusive Beauty-Tipps.'
              : 'Следите за нашими работами в Instagram! Смотрите наши последние работы, преображения до и после, а также эксклюзивные советы по красоте.'}
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleInstagramClick}
            className="inline-flex items-center gap-3 px-10 py-5 rounded-2xl font-semibold text-white text-lg transition-all duration-300"
            style={{
              background: 'linear-gradient(135deg, #833AB4 0%, #FD1D1D 50%, #F77737 100%)',
              boxShadow: '0 8px 24px rgba(131,58,180,0.3)',
            }}
          >
            <Instagram className="w-6 h-6" />
            <span>{language === 'de' ? 'FOLGEN SIE UNS' : 'ПОДПИСАТЬСЯ'}</span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};
