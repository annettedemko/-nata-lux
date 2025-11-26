'use client'

import { useEffect, useRef } from 'react';

export const BackgroundVideo = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.8; // Слегка замедлить для плавности
    }
  }, []);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        style={{
          filter: 'brightness(1.1) contrast(0.95)',
        }}
      >
        <source src="/kling_2.webm" type="video/webm" />
      </video>

      {/* Gradient overlay для лучшей читаемости текста */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, rgba(255, 250, 245, 0.3) 0%, rgba(245, 235, 220, 0.3) 50%, rgba(235, 220, 200, 0.3) 100%)',
        }}
      />

      {/* Дополнительный overlay для центра (где текст) */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(255, 250, 245, 0.4) 0%, transparent 70%)',
        }}
      />
    </div>
  );
};
