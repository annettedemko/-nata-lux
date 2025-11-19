'use client'

import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

interface Particle {
  id: number;
  startX: number;
  startY: number;
  targetX: number;
  targetY: number;
  size: number;
  delay: number;
  midX: number;
  midY: number;
}

export const LogoRebirth = () => {
  const [particles, setParticles] = useState<Particle[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Create particles that will slowly gather to form the logo
    const particleCount = 120;
    const newParticles: Particle[] = [];

    for (let i = 0; i < particleCount; i++) {
      // Random start position (scattered far around)
      const angle = (Math.PI * 2 * i) / particleCount + (Math.random() - 0.5) * 0.5;
      const radius = 250 + Math.random() * 200;
      const startX = Math.cos(angle) * radius;
      const startY = Math.sin(angle) * radius;

      // Mid point for curved path
      const midAngle = angle + (Math.random() - 0.5) * Math.PI;
      const midRadius = radius * 0.6;
      const midX = Math.cos(midAngle) * midRadius;
      const midY = Math.sin(midAngle) * midRadius;

      // Target position (within logo area, more distributed)
      const targetRadius = Math.random() * 110;
      const targetAngle = Math.random() * Math.PI * 2;
      const targetX = Math.cos(targetAngle) * targetRadius;
      const targetY = Math.sin(targetAngle) * targetRadius;

      newParticles.push({
        id: i,
        startX,
        startY,
        midX,
        midY,
        targetX,
        targetY,
        size: Math.random() * 6 + 2,
        delay: Math.random() * 2.5,
      });
    }

    setParticles(newParticles);
  }, []);

  return (
    <div ref={containerRef} className="relative w-48 h-48 md:w-64 md:h-64">
      {/* Slow ambient glow */}
      <motion.div
        className="absolute inset-0 rounded-full blur-3xl -z-10"
        style={{
          background: 'radial-gradient(circle, rgba(197,151,80,0.4) 0%, rgba(197,151,80,0.2) 50%, transparent 70%)',
        }}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: [0, 0, 0.5, 1, 0.9], scale: [0.5, 0.5, 0.9, 1.3, 1.1] }}
        transition={{
          duration: 4.5,
          delay: 1,
          ease: [0.16, 1, 0.3, 1]
        }}
      />

      {/* Golden dust particles with faster curved paths */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute left-1/2 top-1/2 pointer-events-none"
          initial={{
            x: particle.startX,
            y: particle.startY,
            opacity: 0,
            scale: 0,
          }}
          animate={{
            x: [particle.startX, particle.midX, particle.targetX],
            y: [particle.startY, particle.midY, particle.targetY],
            opacity: [0, 0.3, 0.8, 1, 0.9, 0.3],
            scale: [0, 0.6, 1.3, 1.2, 1, 0],
          }}
          transition={{
            duration: 2,
            delay: particle.delay * 0.4,
            ease: [0.16, 1, 0.3, 1],
            times: [0, 0.3, 0.6, 0.75, 0.85, 1],
          }}
        >
          <motion.div
            className="rounded-full"
            style={{
              width: particle.size,
              height: particle.size,
              background: 'radial-gradient(circle, rgba(255,235,180,1) 0%, rgba(255,215,130,0.95) 30%, rgba(218,180,115,0.8) 60%, rgba(197,151,80,0.6) 80%, transparent 100%)',
              boxShadow: '0 0 16px rgba(255,215,130,0.9), 0 0 8px rgba(255,235,180,0.7), 0 0 4px rgba(255,255,255,0.5)',
            }}
            animate={{
              boxShadow: [
                '0 0 8px rgba(255,215,130,0.5), 0 0 4px rgba(255,235,180,0.3)',
                '0 0 20px rgba(255,215,130,1), 0 0 10px rgba(255,235,180,0.8), 0 0 5px rgba(255,255,255,0.6)',
                '0 0 12px rgba(255,215,130,0.7), 0 0 6px rgba(255,235,180,0.5)',
              ],
            }}
            transition={{
              duration: 2,
              delay: particle.delay + 1,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'easeInOut',
            }}
          />
        </motion.div>
      ))}

      {/* Logo faster materializing from particles */}
      <motion.div
        className="relative z-10 w-full h-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 1.2,
          delay: 1.2,
          ease: [0.16, 1, 0.3, 1]
        }}
      >
        <motion.img
          src="/112.png"
          alt="Nata Lux Logo"
          className="w-full h-full object-contain"
          style={{
            filter: 'drop-shadow(0 4px 16px rgba(197,151,80,0.4))',
          }}
          initial={{
            scale: 0.85,
            opacity: 0,
            filter: 'blur(8px) drop-shadow(0 4px 16px rgba(197,151,80,0.4))',
          }}
          animate={{
            scale: 1,
            opacity: 1,
            filter: 'blur(0px) drop-shadow(0 4px 16px rgba(197,151,80,0.4))',
          }}
          transition={{
            duration: 1.2,
            delay: 1.2,
            ease: [0.16, 1, 0.3, 1]
          }}
        />
      </motion.div>

      {/* Elegant shine sweep after logo fully appears */}
      <motion.div
        className="absolute inset-0 z-20 pointer-events-none overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 5.2, duration: 0.5 }}
      >
        <motion.div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(110deg, transparent 0%, transparent 40%, rgba(255,255,255,0.6) 50%, transparent 60%, transparent 100%)',
            width: '200%',
          }}
          initial={{ x: '-100%' }}
          animate={{ x: '100%' }}
          transition={{
            duration: 1.8,
            delay: 5.5,
            ease: [0.22, 1, 0.36, 1]
          }}
        />
      </motion.div>

      {/* Final radiant glow pulse */}
      <motion.div
        className="absolute inset-0 rounded-full -z-5"
        style={{
          background: 'radial-gradient(circle, rgba(255,235,180,0.3) 0%, rgba(218,180,115,0.35) 30%, rgba(197,151,80,0.2) 50%, transparent 70%)',
          filter: 'blur(40px)',
        }}
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{
          opacity: [0, 0, 0.7, 1, 0.8],
          scale: [0.6, 0.6, 1, 1.4, 1.2]
        }}
        transition={{
          duration: 3,
          delay: 4.5,
          ease: [0.16, 1, 0.3, 1]
        }}
      />
    </div>
  );
};
