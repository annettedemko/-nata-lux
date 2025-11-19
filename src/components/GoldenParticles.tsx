'use client'

import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
  color: string;
}

export const GoldenParticles = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Настройка размеров canvas
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Золотые оттенки для частиц
    const goldColors = [
      '#C9A56A', // brand-gold
      '#E7CFA3', // brand-gold-light
      '#D4B896', // промежуточный золотой
      '#B8956A', // тёмно-золотой
      '#F0E4D3', // светло-золотой
    ];

    // Создание частиц
    const particleCount = 300; // больше частиц для эффекта пыли
    const particles: Particle[] = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 1.5 + 0.3, // очень мелкие частицы от 0.3 до 1.8px
        speedX: (Math.random() - 0.5) * 0.3, // очень медленное движение по X
        speedY: (Math.random() - 0.5) * 0.2, // очень легкое движение
        opacity: Math.random() * 0.4 + 0.2, // прозрачность от 0.2 до 0.6
        color: goldColors[Math.floor(Math.random() * goldColors.length)]
      });
    }

    // Анимация
    let animationFrameId: number;

    const animate = () => {
      // Очистка canvas с легким затуханием для эффекта следа
      ctx.fillStyle = 'rgba(244, 240, 236, 0.03)'; // brand-cream с очень низкой прозрачностью
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        // Обновление позиции
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        // Мерцание частиц
        particle.opacity += (Math.random() - 0.5) * 0.015;
        particle.opacity = Math.max(0.15, Math.min(0.6, particle.opacity));

        // Wrap around - бесшовная прокрутка
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.y > canvas.height) particle.y = 0;
        if (particle.y < 0) particle.y = canvas.height;

        // Отрисовка частицы
        ctx.save();
        ctx.globalAlpha = particle.opacity;

        // Основная частица (круг)
        ctx.fillStyle = particle.color;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();

        // Очень мягкий glow эффект
        const gradient = ctx.createRadialGradient(
          particle.x,
          particle.y,
          0,
          particle.x,
          particle.y,
          particle.size * 4
        );
        gradient.addColorStop(0, particle.color);
        gradient.addColorStop(0.5, `${particle.color}40`); // 25% opacity
        gradient.addColorStop(1, 'transparent');

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size * 4, 0, Math.PI * 2);
        ctx.fill();

        ctx.restore();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{
        background: 'linear-gradient(135deg, #F4F0EC 0%, #EDE8E3 50%, #F4F0EC 100%)', // brand-cream gradient
      }}
    />
  );
};
