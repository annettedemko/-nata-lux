'use client'

import { useEffect, useRef, useState } from 'react';

export const BackgroundVideo = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // На мобильных не показываем видео (экономия трафика + battery)
    const mobile = window.innerWidth < 768;
    setIsMobile(mobile);
    if (mobile) return;

    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    video.playbackRate = 0.6;

    const handleCanPlay = () => {
      video.play()
        .then(() => setIsVisible(true))
        .catch(() => setIsVisible(true)); // показываем fallback
    };

    // Пробуем запустить при взаимодействии (если браузер заблокировал autoplay)
    const handleInteraction = () => {
      if (video.paused) {
        video.play().catch(() => {});
      }
    };

    // При возврате на вкладку
    const handleVisibility = () => {
      if (!document.hidden && video.paused) {
        video.play().catch(() => {});
      }
    };

    video.addEventListener('canplay', handleCanPlay, { once: true });
    document.addEventListener('click', handleInteraction, { once: true });
    document.addEventListener('visibilitychange', handleVisibility);

    // Если видео уже готово
    if (video.readyState >= 3) {
      handleCanPlay();
    }

    return () => {
      video.removeEventListener('canplay', handleCanPlay);
      document.removeEventListener('click', handleInteraction);
      document.removeEventListener('visibilitychange', handleVisibility);
    };
  }, []);

  // На мобильных — статичный фон
  if (isMobile) {
    return (
      <div
        className="overflow-hidden"
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: -1,
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'url(/25.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'linear-gradient(135deg, rgba(255,250,245,0.3) 0%, rgba(245,235,220,0.3) 50%, rgba(235,220,200,0.3) 100%)',
          }}
        />
      </div>
    );
  }

  return (
    <div
      className="overflow-hidden"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: -1,
      }}
    >
      {/* Статичный фон — виден пока видео загружается */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: 'url(/25.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Видео фон */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="pointer-events-none absolute inset-0 w-full h-full object-cover"
        style={{
          filter: 'brightness(1.1) contrast(0.95)',
          opacity: isVisible ? 1 : 0,
          transition: 'opacity 1.5s ease-in-out',
        }}
      >
        <source src="/kling_2.webm" type="video/webm" />
        <source src="/kling_2_h264.mp4" type="video/mp4" />
      </video>

      {/* Gradient overlay для читаемости текста */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(135deg, rgba(255,250,245,0.3) 0%, rgba(245,235,220,0.3) 50%, rgba(235,220,200,0.3) 100%)',
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(255,250,245,0.4) 0%, transparent 70%)',
        }}
      />
    </div>
  );
};