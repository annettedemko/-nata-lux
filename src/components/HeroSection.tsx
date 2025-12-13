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
      className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden z-10 font-sans"
    >
      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-20 py-12 md:py-32">
        <div className="max-w-4xl mx-auto lg:ml-auto lg:mr-8 text-center lg:text-right">

          {/* Logo - эффект возрождения с золотой пылью */}
          <motion.div
            className="mb-6 md:mb-12 flex justify-center lg:justify-end relative scale-75 md:scale-100"
          >
            <LogoRebirth />
            {/* Subtle sparkles around logo */}
            <SparkleContainer count={3} />
          </motion.div>

          {/* Main Heading - Playfair Display, semi-bold, premium taupe */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: [0.16, 1, 0.3, 1]
            }}
            className="font-serif font-semibold mb-4 md:mb-8 leading-tight"
            style={{
              fontFamily: 'Playfair Display, serif',
              fontWeight: 600,
              fontSize: 'clamp(1.725rem, 5.75vw, 4.025rem)',
              color: '#4A4038',
              letterSpacing: '-0.01em',
              lineHeight: 1.3,
            }}
          >
            <>
              Aesthetic Studio München
              <br className="sm:hidden" />
              <span style={{ whiteSpace: 'nowrap' }}> – NATA LUX</span>
            </>
          </motion.h1>

          {/* Services Line - Inter, medium, caps, muted colors */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.4,
              ease: [0.16, 1, 0.3, 1]
            }}
            className="mb-4 md:mb-8"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 500,
              fontSize: 'clamp(0.8125rem, 2vw, 1.125rem)',
              letterSpacing: '0.05em',
              lineHeight: 1.6,
            }}
          >
            {t('hero.services').split('·').map((service, index, arr) => (
              <span key={index}>
                <span style={{ color: '#8E8072' }}>
                  {service.trim()}
                </span>
                {index < arr.length - 1 && (
                  <span style={{ color: '#D8C7A2', margin: '0 0.5rem' }}>·</span>
                )}
              </span>
            ))}
          </motion.div>

          {/* Subtitle Line 1 - Inter, semi-bold, dark taupe */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.6,
              ease: [0.16, 1, 0.3, 1]
            }}
            className="mb-2"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 500,
              fontSize: 'clamp(0.875rem, 2.5vw, 1.5rem)',
              color: '#4A4038',
              lineHeight: 1.5,
            }}
          >
            {t('hero.subtitle1')}
          </motion.p>

          {/* Subtitle Line 2 - Inter, regular, soft mocha */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.8,
              ease: [0.16, 1, 0.3, 1]
            }}
            className="mb-6 md:mb-10"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 400,
              fontSize: 'clamp(0.8125rem, 2vw, 1.25rem)',
              color: '#A49786',
              lineHeight: 1.5,
            }}
          >
            {t('hero.subtitle2')}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 1,
              ease: [0.16, 1, 0.3, 1]
            }}
            className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-end items-center w-full sm:w-auto"
          >
            {/* Primary Button - Termin buchen */}
            <motion.a
              href="tel:+4917677267269"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-block w-full sm:w-auto"
            >
              <button
                className="px-6 py-3 md:px-8 md:py-4 text-sm md:text-base font-medium transition-all duration-300 w-full sm:w-auto"
                style={{
                  backgroundColor: '#C9A974',
                  color: '#FFFFFF',
                  borderRadius: '9999px',
                  border: 'none',
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 500,
                  letterSpacing: '0.02em',
                  boxShadow: '0 2px 8px rgba(201, 169, 116, 0.25)',
                  minWidth: '180px',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#B8986A';
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(201, 169, 116, 0.35)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#C9A974';
                  e.currentTarget.style.boxShadow = '0 2px 8px rgba(201, 169, 116, 0.25)';
                }}
              >
                {t('hero.cta.book')}
              </button>
            </motion.a>

            {/* Secondary Button - WhatsApp */}
            <motion.a
              href="https://wa.me/4917677267269"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-block w-full sm:w-auto"
            >
              <button
                className="px-6 py-3 md:px-8 md:py-4 text-sm md:text-base font-medium transition-all duration-300 w-full sm:w-auto"
                style={{
                  backgroundColor: '#FFFFFF',
                  color: '#4A4038',
                  borderRadius: '9999px',
                  border: '2px solid #C9A974',
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 500,
                  letterSpacing: '0.02em',
                  boxShadow: '0 2px 8px rgba(201, 169, 116, 0.15)',
                  minWidth: '180px',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#FAFAF8';
                  e.currentTarget.style.borderColor = '#B8986A';
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(201, 169, 116, 0.25)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#FFFFFF';
                  e.currentTarget.style.borderColor = '#C9A974';
                  e.currentTarget.style.boxShadow = '0 2px 8px rgba(201, 169, 116, 0.15)';
                }}
              >
                {t('hero.cta.whatsapp')}
              </button>
            </motion.a>

            {/* Tertiary Button - Preisliste */}
            <Link to="/prices" className="w-full sm:w-auto">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-6 py-3 md:px-8 md:py-4 text-sm md:text-base font-medium transition-all duration-300 w-full sm:w-auto"
                style={{
                  backgroundColor: 'transparent',
                  color: '#4A4038',
                  borderRadius: '9999px',
                  border: '2px solid #D8C7A2',
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 500,
                  letterSpacing: '0.02em',
                  boxShadow: '0 2px 8px rgba(216, 199, 162, 0.15)',
                  minWidth: '180px',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(216, 199, 162, 0.1)';
                  e.currentTarget.style.borderColor = '#C9A974';
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(216, 199, 162, 0.25)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.borderColor = '#D8C7A2';
                  e.currentTarget.style.boxShadow = '0 2px 8px rgba(216, 199, 162, 0.15)';
                }}
              >
                {t('hero.cta.prices')}
              </motion.button>
            </Link>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="mt-4 md:mt-12"
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
              <div
                className="w-6 h-10 rounded-full p-1"
                style={{
                  border: '2px solid rgba(216, 199, 162, 0.4)',
                }}
              >
                <motion.div
                  animate={{ y: [0, 12, 0] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="w-1 h-2 rounded-full mx-auto"
                  style={{
                    backgroundColor: '#D8C7A2',
                  }}
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
