'use client'

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

export const ParallaxBackground = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Определяем мобильное устройство для оптимизации
    setIsMobile(window.innerWidth < 768);

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  // Параллакс эффекты с разными скоростями (меньше на мобильных для производительности)
  const y1 = useTransform(scrollYProgress, [0, 1], ['0%', isMobile ? '30%' : '60%']);
  const y2 = useTransform(scrollYProgress, [0, 1], ['0%', isMobile ? '15%' : '40%']);
  const y3 = useTransform(scrollYProgress, [0, 1], ['0%', isMobile ? '10%' : '25%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.85, 0.7]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, isMobile ? 1.05 : 1.15]);

  return (
    <div ref={ref} className="fixed inset-0 -z-10 overflow-hidden">
      {/* Основной параллакс слой с изображением */}
      <motion.div
        style={{ y: y1, scale, opacity }}
        className="absolute inset-0 will-change-transform"
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transform-gpu"
          style={{
            backgroundImage: 'url(/16.png)',
            filter: 'brightness(1.08) contrast(0.92) saturate(0.98)',
            imageRendering: 'crisp-edges',
          }}
        />
        {/* Многослойный градиентный оверлей для глубины и читаемости */}
        <div className="absolute inset-0 bg-gradient-to-b from-brand-cream/30 via-brand-cream/50 to-brand-cream/70" />
        <div className="absolute inset-0 bg-gradient-to-tr from-brand-latte/20 via-transparent to-brand-cream/30" />
      </motion.div>

      {/* Второй слой параллакса - дополнительная глубина */}
      <motion.div
        style={{ y: y2 }}
        className="absolute inset-0 pointer-events-none will-change-transform"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-latte/15 to-brand-latte/35" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-gold/5 via-transparent to-brand-gold/5" />
      </motion.div>

      {/* Третий слой - самый медленный для глубины */}
      <motion.div
        style={{ y: y3 }}
        className="absolute inset-0 pointer-events-none will-change-transform"
      >
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-brand-gold/3 to-transparent" />
      </motion.div>

      {/* Декоративные элементы с параллаксом и анимацией */}
      <motion.div
        style={{ y: y1 }}
        className="absolute top-1/4 left-10 w-96 h-96 bg-brand-gold/8 rounded-full blur-3xl will-change-transform"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.08, 0.12, 0.08],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        style={{ y: y2 }}
        className="absolute top-1/2 right-20 w-80 h-80 bg-brand-gold/12 rounded-full blur-3xl will-change-transform"
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.12, 0.18, 0.12],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />
      <motion.div
        style={{ y: y1 }}
        className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-brand-gold/6 rounded-full blur-3xl will-change-transform"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.06, 0.1, 0.06],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4,
        }}
      />

      {/* Дополнительные тонкие декоративные элементы */}
      <motion.div
        style={{ y: y3 }}
        className="absolute top-10 right-1/4 w-48 h-48 bg-brand-cream/20 rounded-full blur-2xl will-change-transform"
      />
      <motion.div
        style={{ y: y2 }}
        className="absolute bottom-10 left-1/4 w-56 h-56 bg-brand-latte/15 rounded-full blur-2xl will-change-transform"
      />

      {/* Текстурный шум для премиум-вида */}
      <div className="absolute inset-0 opacity-[0.02] mix-blend-overlay pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat',
          }}
        />
      </div>

      {/* Тонкий виньет-эффект по краям */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-brand-espresso/5" />
      </div>
    </div>
  );
};
