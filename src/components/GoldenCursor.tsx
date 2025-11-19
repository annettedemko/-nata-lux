'use client';

import React, { useEffect, useRef, useState } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  life: number;
  maxLife: number;
  opacity: number;
}

export const GoldenCursor: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });
  const [isMoving, setIsMoving] = useState(false);
  const particlesRef = useRef<Particle[]>([]);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameRef = useRef<number>();
  const particleIdRef = useRef(0);
  const lastPosRef = useRef({ x: -100, y: -100 });
  const movementTimeoutRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const newPos = { x: e.clientX, y: e.clientY };
      setMousePos(newPos);

      // Calculate distance moved
      const dx = newPos.x - lastPosRef.current.x;
      const dy = newPos.y - lastPosRef.current.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      // Create particles based on movement speed
      if (distance > 2) {
        setIsMoving(true);

        // Create more particles for faster movement
        const particleCount = Math.min(Math.floor(distance / 5), 3);

        for (let i = 0; i < particleCount; i++) {
          createParticle(newPos.x, newPos.y);
        }
      }

      lastPosRef.current = newPos;

      // Reset moving state after a delay
      clearTimeout(movementTimeoutRef.current);
      movementTimeoutRef.current = setTimeout(() => {
        setIsMoving(false);
      }, 100);
    };

    const handleMouseLeave = () => {
      setMousePos({ x: -100, y: -100 });
      setIsMoving(false);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      if (movementTimeoutRef.current) {
        clearTimeout(movementTimeoutRef.current);
      }
    };
  }, []);

  const createParticle = (x: number, y: number) => {
    const angle = Math.random() * Math.PI * 2;
    const speed = Math.random() * 0.5 + 0.2; // Slower, more elegant movement
    const size = Math.random() * 2 + 1; // Smaller, more refined particles
    const maxLife = Math.random() * 40 + 30; // Longer life for smooth trail

    const particle: Particle = {
      id: particleIdRef.current++,
      x: x + (Math.random() - 0.5) * 8, // Tighter spread
      y: y + (Math.random() - 0.5) * 8,
      size,
      speedX: Math.cos(angle) * speed,
      speedY: Math.sin(angle) * speed,
      life: maxLife,
      maxLife,
      opacity: 1,
    };

    particlesRef.current.push(particle);

    // Limit particle count for performance
    if (particlesRef.current.length > 80) {
      particlesRef.current.shift();
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const updateCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    updateCanvasSize();
    window.addEventListener('resize', updateCanvasSize);

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particlesRef.current = particlesRef.current.filter((particle) => {
        // Update particle
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        particle.life--;
        particle.opacity = particle.life / particle.maxLife;

        // Apply gravity and slow down
        particle.speedY += 0.1;
        particle.speedX *= 0.98;
        particle.speedY *= 0.98;

        // Draw particle with soft golden glow (luxury trail)
        if (particle.life > 0) {
          const gradient = ctx.createRadialGradient(
            particle.x,
            particle.y,
            0,
            particle.x,
            particle.y,
            particle.size * 3
          );

          // Soft golden glow - more refined colors
          gradient.addColorStop(0, `rgba(191, 167, 122, ${particle.opacity * 0.8})`);
          gradient.addColorStop(0.3, `rgba(215, 197, 160, ${particle.opacity * 0.5})`);
          gradient.addColorStop(0.6, `rgba(168, 145, 106, ${particle.opacity * 0.3})`);
          gradient.addColorStop(1, `rgba(139, 115, 85, 0)`);

          ctx.fillStyle = gradient;
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size * 3, 0, Math.PI * 2);
          ctx.fill();

          // Add a subtle bright center
          ctx.fillStyle = `rgba(227, 207, 177, ${particle.opacity * 0.4})`;
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size * 0.5, 0, Math.PI * 2);
          ctx.fill();
        }

        return particle.life > 0;
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', updateCanvasSize);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <>
      {/* Particle canvas */}
      <canvas
        ref={canvasRef}
        className="fixed top-0 left-0 w-full h-full pointer-events-none z-[9999]"
        style={{ mixBlendMode: 'screen' }}
      />

      {/* Luxury mini-circle cursor - Top-tier premium style */}
      <div
        className="fixed pointer-events-none z-[10000] transition-all duration-200 ease-out"
        style={{
          left: `${mousePos.x}px`,
          top: `${mousePos.y}px`,
          transform: `translate(-50%, -50%) scale(${isMoving ? 1.3 : 1})`,
        }}
      >
        {/* Outer glow ring - increased size */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full transition-all duration-300"
          style={{
            width: isMoving ? '32px' : '24px',
            height: isMoving ? '32px' : '24px',
            background: 'radial-gradient(circle, rgba(191,167,122,0.4) 0%, rgba(191,167,122,0.2) 50%, transparent 100%)',
            boxShadow: '0 0 16px rgba(191,167,122,0.5), 0 0 24px rgba(191,167,122,0.3)',
          }}
        />

        {/* Main cursor dot - increased size */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full transition-all duration-200"
          style={{
            width: '6px',
            height: '6px',
            background: 'radial-gradient(circle, #3A2C22 0%, #3A2C22 60%, rgba(58,44,34,0.8) 100%)',
            boxShadow: '0 0 6px rgba(191,167,122,0.7), 0 0 12px rgba(215,197,160,0.4), inset 0 0 3px rgba(255,255,255,0.4)',
          }}
        />

        {/* Subtle highlight dot for depth */}
        <div
          className="absolute rounded-full"
          style={{
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%) translate(-0.5px, -0.5px)',
            width: '2px',
            height: '2px',
            background: 'rgba(227,207,177,0.9)',
            boxShadow: '0 0 3px rgba(255,255,255,0.6)',
          }}
        />
      </div>

      <style jsx>{`
        @keyframes pulse {
          0% {
            transform: translate(-50%, -50%) scale(0.8);
            opacity: 0.8;
          }
          100% {
            transform: translate(-50%, -50%) scale(1.5);
            opacity: 0;
          }
        }
      `}</style>
    </>
  );
};
