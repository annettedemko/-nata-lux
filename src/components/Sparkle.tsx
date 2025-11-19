'use client'

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface SparkleProps {
  delay?: number;
  index?: number;
}

export const Sparkle = ({ delay = 0, index = 0 }: SparkleProps) => {
  const [position, setPosition] = useState({
    top: '50%',
    left: '50%',
  });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Generate position only on client side
    setPosition({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
    });
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <motion.div
      className="absolute pointer-events-none"
      style={{
        top: position.top,
        left: position.left,
      }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: [0, 1, 1, 0],
        scale: [0, 1, 1, 0],
        rotate: [0, 180, 360],
      }}
      transition={{
        duration: 2,
        delay: delay,
        repeat: Infinity,
        repeatDelay: Math.random() * 3 + 2,
        ease: 'easeInOut',
      }}
    >
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
        <path
          d="M6 0L6.5 5.5L12 6L6.5 6.5L6 12L5.5 6.5L0 6L5.5 5.5L6 0Z"
          fill="url(#sparkleGradient)"
          style={{
            filter: 'drop-shadow(0 0 3px rgba(255,235,180,0.8))',
          }}
        />
        <defs>
          <linearGradient id="sparkleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFEBB4" />
            <stop offset="50%" stopColor="#DAB473" />
            <stop offset="100%" stopColor="#C59750" />
          </linearGradient>
        </defs>
      </svg>
    </motion.div>
  );
};

interface SparkleContainerProps {
  count?: number;
  className?: string;
}

export const SparkleContainer = ({ count = 5, className = '' }: SparkleContainerProps) => {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {Array.from({ length: count }).map((_, i) => (
        <Sparkle key={i} delay={i * 0.4} />
      ))}
    </div>
  );
};
