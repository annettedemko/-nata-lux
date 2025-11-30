'use client'

import { Link } from '@/components/LinkAdapter'
import { Button } from '@/components/ui/button';
import { CheckCircle2, LucideIcon, Sparkles } from 'lucide-react';
import { ReactNode } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';

export interface ServicePageProps {
  // Hero section
  icon: LucideIcon;
  title: string;
  subtitle: string;

  // About section
  aboutTitle: string;
  aboutDescription: string[];

  // Benefits
  benefits: string[];

  // Process steps
  steps?: {
    title: string;
    description: string;
  }[];

  // Price table (deprecated - now using priceSection link)
  priceTable?: {
    service: string;
    duration: string;
    price: string;
  }[];

  // Price section ID for linking to /prices page
  priceSection?: string;

  // Contraindications
  contraindications?: string[];

  // FAQ
  faq?: {
    q: string;
    a: string;
  }[];

  // Additional sections (для уникального контента)
  additionalSections?: ReactNode;

  // CTA
  ctaTitle: string;
  ctaDescription: string;
}

export const ServicePageLayout = ({
  icon: Icon,
  title,
  subtitle,
  aboutTitle,
  aboutDescription,
  benefits,
  steps,
  priceSection,
  contraindications,
  faq,
  additionalSections,
  ctaTitle,
  ctaDescription,
}: ServicePageProps) => {
  const { language } = useLanguage();
  const isGerman = language === 'de';

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* Background */}
      <div className="fixed inset-0 z-0">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'url(/45.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen overflow-x-hidden max-w-full">
      {/* Background Decorations */}
      <div className="absolute top-0 right-0 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-brand-gold/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[250px] md:w-[500px] h-[250px] md:h-[500px] bg-brand-gold/3 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3 pointer-events-none" />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-20 overflow-x-hidden">
        <div className="container mx-auto px-4 max-w-5xl overflow-x-hidden">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-center"
          >
            {/* Icon with glow effect */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.2, type: "spring", stiffness: 200 }}
              className="relative inline-block mb-8"
            >
              <div className="absolute inset-0 bg-brand-gold/20 rounded-3xl blur-xl animate-pulse" />
              <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-3xl bg-gradient-to-br from-brand-gold/20 to-brand-gold-light/10 backdrop-blur-sm flex items-center justify-center border border-brand-gold/20">
                <Icon className="w-10 h-10 md:w-12 md:h-12 text-brand-gold" />
              </div>
            </motion.div>

            {/* Title with gradient underline */}
            <h1 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-heading font-bold text-brand-espresso mb-6 leading-tight px-2 sm:px-4 max-w-full break-words" style={{ hyphens: 'none', wordBreak: 'break-word', overflowWrap: 'anywhere', whiteSpace: 'normal', letterSpacing: '-0.01em', wordWrap: 'break-word' }}>
              {title}
            </h1>

            {/* Animated divider */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '120px' }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="h-1 bg-gradient-to-r from-transparent via-brand-gold to-transparent mx-auto mb-6"
            />

            <p className="text-lg md:text-xl text-brand-espresso/70 font-heading mb-2 break-words px-4" style={{ wordWrap: 'break-word', overflowWrap: 'break-word', hyphens: 'none' }}>
              {subtitle}
            </p>

            {/* Decorative sparkles */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex items-center justify-center gap-2 text-brand-gold/40 mt-4"
            >
              <Sparkles className="w-4 h-4" />
              <span className="text-xs tracking-[0.3em] uppercase font-medium">Premium Quality</span>
              <Sparkles className="w-4 h-4" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4 max-w-5xl pb-20 overflow-x-hidden">

        {/* About Service */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative glass rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 mb-12 border border-brand-gold/10 shadow-xl shadow-brand-gold/5"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="px-4 py-1 bg-brand-cream rounded-full border border-brand-gold/20 text-xs text-brand-gold tracking-widest uppercase">
              {isGerman ? 'Über die Behandlung' : 'О процедуре'}
            </div>
          </div>
          <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-heading font-semibold text-brand-espresso mb-6 mt-2 max-w-full px-2 break-words" style={{ hyphens: 'none', wordBreak: 'break-word', overflowWrap: 'anywhere', whiteSpace: 'normal', letterSpacing: '-0.01em', wordWrap: 'break-word' }}>
            {aboutTitle}
          </h2>
          {aboutDescription.map((paragraph, index) => (
            <p key={index} className="text-brand-coffee/80 leading-relaxed mb-4 last:mb-0 text-lg">
              {paragraph}
            </p>
          ))}
        </motion.section>

        {/* Benefits */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative glass rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 mb-12 border border-brand-gold/10 shadow-xl shadow-brand-gold/5"
        >
          <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-heading font-semibold text-brand-espresso mb-8 max-w-full px-2 break-words" style={{ hyphens: 'none', wordBreak: 'break-word', overflowWrap: 'anywhere', whiteSpace: 'normal', letterSpacing: '-0.01em', wordWrap: 'break-word' }}>
            {isGerman ? 'Ihre Vorteile' : 'Ваши преимущества'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="flex items-start p-3 rounded-xl hover:bg-brand-gold/5 transition-colors duration-300"
              >
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-brand-gold to-brand-gold-light flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                  <CheckCircle2 className="w-4 h-4 text-white" />
                </div>
                <span className="text-brand-coffee/80">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Steps (optional) */}
        {steps && steps.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative glass rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 mb-12 border border-brand-gold/10 shadow-xl shadow-brand-gold/5"
          >
            <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-heading font-semibold text-brand-espresso mb-8 max-w-full px-2 break-words" style={{ hyphens: 'none', wordBreak: 'break-word', overflowWrap: 'anywhere', whiteSpace: 'normal', letterSpacing: '-0.01em', wordWrap: 'break-word' }}>
              {isGerman ? 'Wie läuft die Behandlung ab?' : 'Как проходит процедура?'}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start group"
                >
                  <div className="relative mr-4 flex-shrink-0">
                    <div className="absolute inset-0 bg-brand-gold/20 rounded-2xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="relative w-12 h-12 rounded-2xl bg-gradient-to-br from-brand-gold to-brand-gold-light flex items-center justify-center">
                      <span className="font-heading font-bold text-white text-lg">{index + 1}</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-brand-espresso mb-1 text-sm sm:text-base md:text-lg max-w-full break-words" style={{ hyphens: 'none', wordBreak: 'break-word', overflowWrap: 'anywhere', whiteSpace: 'normal', letterSpacing: '-0.01em', wordWrap: 'break-word' }}>{step.title}</h3>
                    <p className="text-brand-coffee/70 leading-relaxed">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>
        )}

        {/* Additional Sections */}
        {additionalSections}

        {/* Price Section Link */}
        {priceSection && (
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-3xl p-10 md:p-12 mb-12 text-center bg-gradient-to-br from-brand-espresso via-brand-coffee to-brand-espresso overflow-hidden"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.15),transparent_50%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(212,175,55,0.1),transparent_50%)]" />
            <div className="relative">
              <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-heading font-semibold text-white mb-4 max-w-full px-2 break-words" style={{ hyphens: 'none', wordBreak: 'break-word', overflowWrap: 'anywhere', whiteSpace: 'normal', letterSpacing: '-0.01em', wordWrap: 'break-word' }}>
                {isGerman ? 'Preise & Dauer' : 'Цены и длительность'}
              </h2>
              <p className="text-white/70 mb-8 max-w-md mx-auto">
                {isGerman
                  ? 'Alle Preise und Behandlungsdauern finden Sie auf unserer Preisseite.'
                  : 'Все цены и длительность процедур вы найдёте на нашей странице цен.'}
              </p>
              <Link to={`/prices#${priceSection}`}>
                <Button
                  size="lg"
                  className="bg-brand-gold hover:bg-brand-gold/90 text-white font-medium rounded-2xl px-6 py-4 md:px-8 md:py-6 text-base md:text-lg min-h-11 shadow-lg shadow-brand-gold/30 hover:shadow-brand-gold/50 transition-all duration-300"
                >
                  {isGerman ? 'Zu den Preisen' : 'К ценам'}
                </Button>
              </Link>
            </div>
          </motion.section>
        )}

        {/* Contraindications (optional) */}
        {contraindications && contraindications.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative glass rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 mb-12 border border-brand-gold/10 shadow-xl shadow-brand-gold/5"
          >
            <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-heading font-semibold text-brand-espresso mb-4 max-w-full px-2 break-words" style={{ hyphens: 'none', wordBreak: 'break-word', overflowWrap: 'anywhere', whiteSpace: 'normal', letterSpacing: '-0.01em', wordWrap: 'break-word' }}>
              {isGerman ? 'Kontraindikationen' : 'Противопоказания'}
            </h2>
            <p className="text-brand-coffee/70 mb-6 leading-relaxed">
              {isGerman
                ? 'In folgenden Fällen raten wir von dieser Behandlung ab:'
                : 'В следующих случаях мы не рекомендуем эту процедуру:'}
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {contraindications.map((item, index) => (
                <li key={index} className="text-brand-coffee/70 pl-5 relative before:content-[''] before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:rounded-full before:bg-brand-gold/40">
                  {item}
                </li>
              ))}
            </ul>
          </motion.section>
        )}

        {/* FAQ (optional) */}
        {faq && faq.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-heading font-semibold text-brand-espresso mb-8 text-center max-w-full px-2 break-words" style={{ hyphens: 'none', wordBreak: 'break-word', overflowWrap: 'anywhere', whiteSpace: 'normal', letterSpacing: '-0.01em', wordWrap: 'break-word' }}>
              {isGerman ? 'Häufige Fragen' : 'Частые вопросы'}
            </h2>
            <div className="space-y-4">
              {faq.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="glass rounded-2xl p-6 md:p-8 border border-brand-gold/10 hover:border-brand-gold/30 transition-colors duration-300"
                >
                  <h3 className="font-semibold text-brand-espresso mb-3 text-sm sm:text-base md:text-lg max-w-full break-words" style={{ hyphens: 'none', wordBreak: 'break-word', overflowWrap: 'anywhere', whiteSpace: 'normal', letterSpacing: '-0.01em', wordWrap: 'break-word' }}>{item.q}</h3>
                  <p className="text-brand-coffee/70 leading-relaxed whitespace-pre-line">{item.a}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>
        )}

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-3xl p-6 sm:p-8 md:p-10 lg:p-14 text-center overflow-hidden"
        >
          {/* Premium gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-brand-gold via-brand-gold-light to-brand-gold" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.2),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(0,0,0,0.1),transparent_50%)]" />

          {/* Animated shine effect */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full animate-[shimmer_3s_infinite]" />
          </div>

          <div className="relative">
            <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-heading font-bold text-white mb-4 max-w-full px-2 break-words" style={{ hyphens: 'none', wordBreak: 'break-word', overflowWrap: 'anywhere', whiteSpace: 'normal', letterSpacing: '-0.01em', wordWrap: 'break-word' }}>
              {ctaTitle}
            </h2>
            <p className="text-white/90 mb-8 text-lg max-w-xl mx-auto">
              {ctaDescription}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white hover:bg-brand-cream text-brand-espresso font-semibold rounded-2xl px-6 py-4 md:px-8 md:py-6 text-base md:text-lg min-h-11 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
                asChild
              >
                <a href="https://wa.me/4917677267269" target="_blank" rel="noopener noreferrer">
                  {isGerman ? 'Termin buchen' : 'Записаться'}
                </a>
              </Button>
              <Link to="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white/10 font-semibold rounded-2xl px-6 py-4 md:px-8 md:py-6 text-base md:text-lg min-h-11 transition-all duration-300 hover:-translate-y-0.5"
                >
                  {isGerman ? 'Beratung anfragen' : 'Запросить консультацию'}
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
      </div>
    </div>
  );
};
