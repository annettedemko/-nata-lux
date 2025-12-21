'use client'

import { useEffect, useRef, useState } from 'react';

export const BackgroundVideo = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [autoplayBlocked, setAutoplayBlocked] = useState(false);

  useEffect(() => {

    const video = videoRef.current;
    if (!video) {
      console.log('❌ Video ref is null');
      return;
    }

    console.log('✅ Video element found');
    console.log('📊 Video readyState:', video.readyState);
    console.log('📊 Video networkState:', video.networkState);
    console.log('📊 Video src:', video.currentSrc || 'no source selected');

    const playVideo = async () => {
      try {
        console.log('🎬 Attempting to play video...');

        // ВАЖНО: убедимся что видео действительно muted для автозапуска
        video.muted = true;
        video.volume = 0;
        video.playbackRate = 0.8; // Слегка замедлить для плавности

        // Убеждаемся что видео загружено
        if (video.readyState < 2) {
          console.log('📥 Loading video...');
          await new Promise((resolve) => {
            video.addEventListener('loadeddata', resolve, { once: true });
            video.load();
          });
        }

        const playPromise = video.play();
        if (playPromise !== undefined) {
          await playPromise;
          console.log('✅ Video playing!');
          setIsLoaded(true);
          setAutoplayBlocked(false);
        }
      } catch (error) {
        // Автовоспроизведение заблокировано браузером - это нормально
        // Показываем статичный фон вместо видео
        console.log('ℹ️ Video autoplay blocked by browser:', error);
        setAutoplayBlocked(true);
        setIsLoaded(true);
      }
    };

    // Для десктопа - пробуем запустить немедленно
    playVideo();

    // Также пробуем через небольшую задержку для надежности
    const playTimer = setTimeout(() => {
      if (video.paused) {
        console.log('🔄 Retry playing after timeout...');
        playVideo();
      }
    }, 500);

    // Пробуем запустить при любом взаимодействии пользователя
    const handleUserInteraction = () => {
      if (autoplayBlocked || video.paused) {
        console.log('👆 User interaction detected, trying to play...');
        playVideo();
      }
    };

    // Обработчики событий видео
    const handleLoadedData = () => {
      console.log('📹 Video data loaded');
      if (video.paused) {
        playVideo();
      }
    };

    const handleCanPlayThrough = () => {
      console.log('✅ Video can play through');
      if (video.paused) {
        playVideo();
      }
    };

    const handleError = (e: Event) => {
      console.error('❌ Video error event:', e);
      const target = e.target as HTMLVideoElement;
      if (target.error) {
        console.error('❌ Video error details:', {
          code: target.error.code,
          message: target.error.message
        });
      }
    };

    const handleLoadStart = () => {
      console.log('🔄 Video load started');
    };

    const handleCanPlay = () => {
      console.log('✅ Video can play');
      if (video.paused) {
        playVideo();
      }
    };

    // Запускаем при загрузке
    video.addEventListener('loadeddata', handleLoadedData);
    video.addEventListener('canplaythrough', handleCanPlayThrough);
    video.addEventListener('error', handleError);
    video.addEventListener('loadstart', handleLoadStart);
    video.addEventListener('canplay', handleCanPlay);

    // Также пробуем запустить сразу если уже готово
    if (video.readyState >= 2) {
      console.log('⚡ Video ready immediately');
      playVideo();
    }

    // Обработчик для возврата на вкладку
    const handleVisibilityChange = () => {
      if (!document.hidden && video.paused) {
        console.log('👁️ Tab became visible, trying to play...');
        playVideo();
      }
    };

    // Слушаем клики/тачи на документе для запуска видео
    document.addEventListener('click', handleUserInteraction, { once: true });
    document.addEventListener('touchstart', handleUserInteraction, { once: true });
    document.addEventListener('scroll', handleUserInteraction, { once: true });
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      clearTimeout(playTimer);
      video.removeEventListener('loadeddata', handleLoadedData);
      video.removeEventListener('canplaythrough', handleCanPlayThrough);
      video.removeEventListener('error', handleError);
      video.removeEventListener('loadstart', handleLoadStart);
      video.removeEventListener('canplay', handleCanPlay);
      document.removeEventListener('click', handleUserInteraction);
      document.removeEventListener('touchstart', handleUserInteraction);
      document.removeEventListener('scroll', handleUserInteraction);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [autoplayBlocked]);

  return (
    <div
      className="overflow-hidden"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        transform: 'none',
        willChange: 'auto',
      }}
    >
      {/* Fallback статичный фон на случай блокировки видео */}
      {autoplayBlocked && (
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: 'url(/25.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat',
          }}
        />
      )}

      {/* Видео фон */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        controls={false}
        disablePictureInPicture
        disableRemotePlayback
        className="pointer-events-none"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          filter: 'brightness(1.1) contrast(0.95)',
          opacity: isLoaded ? 1 : 0,
          transition: 'opacity 1s ease-in-out',
          // ЖЁСТКАЯ БЛОКИРОВКА любых трансформаций
          transform: 'none',
          transformOrigin: 'center center',
          willChange: 'opacity',
          backfaceVisibility: 'hidden',
          WebkitBackfaceVisibility: 'hidden',
          imageRendering: 'auto',
          // Отключаем любые возможные GPU эффекты которые могут вызывать масштабирование
          WebkitTransform: 'none',
          MozTransform: 'none',
          msTransform: 'none',
          OTransform: 'none',
        }}
      >
        <source src="/kling_2.webm" type="video/webm" />
        <source src="/kling_2_h264.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Gradient overlay для лучшей читаемости текста */}
      <div
        className="pointer-events-none"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(135deg, rgba(255, 250, 245, 0.3) 0%, rgba(245, 235, 220, 0.3) 50%, rgba(235, 220, 200, 0.3) 100%)',
          transform: 'none',
          willChange: 'auto',
        }}
      />

      {/* Дополнительный overlay для центра (где текст) */}
      <div
        className="pointer-events-none"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(ellipse at center, rgba(255, 250, 245, 0.4) 0%, transparent 70%)',
          transform: 'none',
          willChange: 'auto',
        }}
      />
    </div>
  );
};
