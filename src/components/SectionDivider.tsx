'use client'

import { motion } from 'framer-motion';

export const SectionDivider = () => {
  return (
    <div className="relative w-full h-16 md:h-40 overflow-hidden my-4 md:my-8">
      {/* Soft golden light beam from top - more visible */}
      <motion.div
        initial={{ opacity: 0, scaleY: 0 }}
        whileInView={{ opacity: 1, scaleY: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
        className="absolute left-1/2 top-0 -translate-x-1/2 w-0.5 h-full"
        style={{
          background: 'linear-gradient(to bottom, transparent 0%, rgba(197,151,80,0.5) 15%, rgba(197,151,80,0.8) 50%, rgba(197,151,80,0.5) 85%, transparent 100%)',
          boxShadow: '0 0 10px rgba(197,151,80,0.4)',
        }}
      />

      {/* Reflection glow effect - stronger */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={{
          width: '300px',
          height: '300px',
          background: 'radial-gradient(circle, rgba(197,151,80,0.25) 0%, rgba(197,151,80,0.12) 35%, transparent 65%)',
          filter: 'blur(40px)',
        }}
      />

      {/* Center sparkle - more prominent */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: [0, 1, 0.7, 0] }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 2.5, delay: 0.6, ease: "easeInOut" }}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <div
          className="w-3 h-3 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(218,180,115,0.9) 30%, rgba(197,151,80,0.6) 60%, transparent 100%)',
            boxShadow: '0 0 30px rgba(197,151,80,0.8), 0 0 15px rgba(255,255,255,0.6)',
          }}
        />
      </motion.div>

      {/* Additional soft fade overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: [0, 0.15, 0] }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 2, ease: "easeInOut" }}
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(197,151,80,0.1) 0%, transparent 60%)',
        }}
      />
    </div>
  );
};
