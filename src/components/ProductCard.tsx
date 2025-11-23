'use client'

import { useEffect, useState } from 'react';

interface ProductCardProps {
  image: string;
  hoverImage?: string;
  name: string;
  fitContain?: boolean;
  hoverFitContain?: boolean;
  children: React.ReactNode;
  delay?: number;
}

export function ProductCard({
  image,
  hoverImage,
  name,
  fitContain,
  hoverFitContain,
  children,
  delay = 0
}: ProductCardProps) {
  const [showSecondImage, setShowSecondImage] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (!isMobile || !hoverImage) return;

    const interval = setInterval(() => {
      setShowSecondImage(prev => !prev);
    }, 3000);

    return () => clearInterval(interval);
  }, [isMobile, hoverImage]);

  return (
    <div
      className="glass rounded-2xl overflow-hidden hover:shadow-luxury transition-all duration-300 animate-slide-up"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="aspect-square overflow-hidden relative group bg-white">
        <img
          src={image}
          alt={name}
          className={`w-full h-full transition-opacity duration-500 ${fitContain ? 'object-contain' : 'object-cover'} ${
            hoverImage
              ? isMobile
                ? showSecondImage ? 'opacity-0' : 'opacity-100'
                : 'group-hover:opacity-0'
              : ''
          }`}
        />
        {hoverImage && (
          <img
            src={hoverImage}
            alt={name}
            className={`absolute inset-0 w-full h-full transition-opacity duration-500 ${hoverFitContain ? 'object-contain' : 'object-cover'} ${
              isMobile
                ? showSecondImage ? 'opacity-100' : 'opacity-0'
                : 'opacity-0 group-hover:opacity-100'
            }`}
          />
        )}
      </div>
      <div className="p-6">
        {children}
      </div>
    </div>
  );
}
