'use client'

import { Link } from '@/components/LinkAdapter'
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { LogoRebirth } from '@/components/LogoRebirth';
import { SparkleContainer } from '@/components/Sparkle';

export const HeroSection = () => {
  const { t, language } = useLanguage();

  return (
    <section
      className="relative min-h-screen h-screen flex items-center justify-center overflow-hidden z-10"
    >

      {/* Content - смещён вправо на 15% на десктопе, центрирован на мобильных */}
      <div className="container mx-auto px-4 md:px-6 relative z-20 py-12 md:py-16 lg:py-20">
        <div className="max-w-3xl text-center md:text-right md:-translate-x-[15%]" style={{ marginLeft: 'auto', marginRight: '0' }}>
          {/* Logo - эффект возрождения с золотой пылью */}
          <motion.div
            className="mb-12 mt-16 flex justify-center md:justify-end relative"
          >
            <LogoRebirth />
            {/* Subtle sparkles around logo */}
            <SparkleContainer count={3} />
          </motion.div>

          {/* Text content wrapper - поднимаем только текст, не трогая логотип */}
          <div style={{ transform: 'translateY(-40px)' }}>
            {/* Title with enhanced mobile readability */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.4,
                ease: [0.16, 1, 0.3, 1]
              }}
              className="text-4xl md:text-5xl lg:text-7xl font-heading font-semibold text-brand-espresso mb-6 leading-tight px-2 md:px-0"
              style={{
                textShadow: '0 2px 10px rgba(255,255,255,0.9), 0 4px 20px rgba(255,255,255,0.8), 0 1px 3px rgba(0,0,0,0.15)',
              }}
            >
              {t('hero.title')}
            </motion.h1>

            {/* Subtitle with enhanced mobile contrast */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.6,
                ease: [0.16, 1, 0.3, 1]
              }}
              className="text-xl md:text-2xl lg:text-3xl font-heading mb-6 leading-relaxed font-bold px-2 md:px-0"
              style={{
                color: '#8B6F3D',
                textShadow: '0 2px 8px rgba(255,255,255,0.95), 0 4px 16px rgba(255,255,255,0.8), 0 0 30px rgba(255,255,255,0.6), 0 1px 3px rgba(0,0,0,0.2)',
                WebkitTextStroke: '0.5px rgba(255,255,255,0.4)',
              }}
            >
              {t('hero.subtitle')}
            </motion.p>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.8,
                ease: [0.16, 1, 0.3, 1]
              }}
              className="text-lg md:text-xl mb-12 leading-relaxed max-w-3xl mx-auto font-medium"
              style={{
                color: '#2B1F18',
                textShadow: '0 2px 10px rgba(255,255,255,0.9), 0 4px 20px rgba(255,255,255,0.7)',
              }}
            >
              {t('hero.description')}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 1,
                ease: [0.16, 1, 0.3, 1]
              }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
            {/* Primary button - Termin buchen */}
            <motion.div
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="primary-button-wrapper"
            >
              <Button
                size="lg"
                asChild
                className="text-lg px-10 py-7 relative overflow-hidden"
                style={{
                  background: 'linear-gradient(90deg, #BFA77A, #D7C5A0)',
                  backgroundSize: '200% 100%',
                  backgroundPosition: '0% 0%',
                  color: '#FFFFFF',
                  fontWeight: 500,
                  letterSpacing: '0.5px',
                  borderRadius: '0.6rem',
                  border: 'none',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 4px 12px rgba(191,167,122,0.3), 0 2px 4px rgba(0,0,0,0.1)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundPosition = '100% 0%';
                  e.currentTarget.style.boxShadow = 'inset 0 0 8px rgba(255,255,255,0.35), 0 8px 20px rgba(191,167,122,0.5), 0 4px 8px rgba(0,0,0,0.15)';
                  e.currentTarget.style.background = 'linear-gradient(90deg, #A8916A, #BFA77A)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundPosition = '0% 0%';
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(191,167,122,0.3), 0 2px 4px rgba(0,0,0,0.1)';
                  e.currentTarget.style.background = 'linear-gradient(90deg, #BFA77A, #D7C5A0)';
                }}
              >
                <a href="tel:+4917677267269" className="relative z-10">
                  {t('hero.cta.book')}
                </a>
              </Button>
            </motion.div>

            {/* Secondary button - WhatsApp */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="secondary-button-wrapper"
            >
              <Button
                size="lg"
                variant="outline"
                asChild
                className="text-lg px-10 py-7"
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.7)',
                  backdropFilter: 'blur(10px)',
                  borderWidth: '2px',
                  borderColor: '#BFA77A',
                  color: '#8B7355',
                  fontWeight: 500,
                  letterSpacing: '0.5px',
                  borderRadius: '0.6rem',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 4px 12px rgba(191,167,122,0.2), inset 0 1px 0 rgba(255,255,255,0.5)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(191,167,122,0.15)';
                  e.currentTarget.style.borderColor = '#D7C5A0';
                  e.currentTarget.style.color = '#6B5A45';
                  e.currentTarget.style.boxShadow = '0 0 16px rgba(191,167,122,0.4), inset 0 0 10px rgba(191,167,122,0.2)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.7)';
                  e.currentTarget.style.borderColor = '#BFA77A';
                  e.currentTarget.style.color = '#8B7355';
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(191,167,122,0.2), inset 0 1px 0 rgba(255,255,255,0.5)';
                }}
              >
                <a href="https://wa.me/4917677267269" target="_blank" rel="noopener noreferrer">
                  {t('hero.cta.whatsapp')}
                </a>
              </Button>
            </motion.div>

            {/* Secondary button - Preise ansehen */}
            <Link to={`${language === 'ru' ? '/ru' : ''}/prices`}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="secondary-button-wrapper"
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-10 py-7"
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.7)',
                    backdropFilter: 'blur(10px)',
                    borderWidth: '2px',
                    borderColor: '#BFA77A',
                    color: '#8B7355',
                    fontWeight: 500,
                    letterSpacing: '0.5px',
                    borderRadius: '0.6rem',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 4px 12px rgba(191,167,122,0.2), inset 0 1px 0 rgba(255,255,255,0.5)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(191,167,122,0.15)';
                    e.currentTarget.style.borderColor = '#D7C5A0';
                    e.currentTarget.style.color = '#6B5A45';
                    e.currentTarget.style.boxShadow = '0 0 16px rgba(191,167,122,0.4), inset 0 0 10px rgba(191,167,122,0.2)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.7)';
                    e.currentTarget.style.borderColor = '#BFA77A';
                    e.currentTarget.style.color = '#8B7355';
                    e.currentTarget.style.boxShadow = '0 4px 12px rgba(191,167,122,0.2), inset 0 1px 0 rgba(255,255,255,0.5)';
                  }}
                >
                  {t('hero.cta.prices')}
                </Button>
              </motion.div>
            </Link>
          </motion.div>
          </div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="mt-20"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="inline-block"
            >
              <div className="w-6 h-10 border-2 border-brand-gold/30 rounded-full p-1">
                <motion.div
                  animate={{ y: [0, 12, 0] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="w-1 h-2 bg-brand-gold rounded-full mx-auto"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
