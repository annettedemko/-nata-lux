'use client'

import { useLanguage } from '@/contexts/LanguageContext';
import { ServiceCard } from '@/components/ServiceCard';
import {
  Sparkles,
  Heart,
  Zap,
  Star,
  Layers,
  Droplet,
  Scissors,
  Shield,
  Eye,
  Palette
} from 'lucide-react';

const Services = () => {
  const { t, language } = useLanguage();
  const isGerman = language === 'de';

  // Категория 1: Ресницы и Брови
  const lashesBrowsServices = [
    {
      title: t('lashesbrows.extensions'),
      description: t('lashesbrows.extensions.desc'),
      icon: Sparkles,
      href: '/services/wimpernverlaengerung',
      image: '/43.png',
      imagePosition: 'center 60%',
    },
    {
      title: t('lashesbrows.lashlifting') + ' + ' + t('lashesbrows.browlifting'),
      description: t('lashesbrows.lashlifting.desc') + ' & ' + t('lashesbrows.browlifting.desc'),
      icon: Layers,
      href: '/services/wimpern-augenbrauen-laminierung',
      image: '/131.jpeg',
    },
  ];

  // Категория 2: Перманентный макияж
  const pmuServices = [
    {
      title: t('pmu.brows'),
      description: t('pmu.brows.desc'),
      icon: Palette,
      href: '/services/powder-brows',
      image: '/65.jpg',
      imageScale: 1.7,
      imagePosition: 'center 20%',
    },
    {
      title: t('pmu.lips'),
      description: t('pmu.lips.desc'),
      icon: Heart,
      href: '/services/aquarell-lips',
      image: '/191.jpeg',
    },
    {
      title: t('pmu.eyeliner'),
      description: t('pmu.eyeliner.desc'),
      icon: Eye,
      href: '/services/wimpernkranz',
      image: '/114.jpg',
    },
    {
      title: t('pmu.removal'),
      description: t('pmu.removal.desc'),
      icon: Shield,
      href: '/services/pmu-remover',
      image: '/103.jpg',
      imagePosition: 'center 80%',
    },
  ];

  // Категория 3: Лазерная эпиляция
  const laserServices = [
    {
      title: t('laser.triwave'),
      description: t('laser.triwave.desc'),
      icon: Zap,
      href: '/laser',
      image: '/41.jpg',
    },
  ];

  // Категория 4: Anti-Aging и Косметология
  const antiagingServices = [
    {
      title: t('antiaging.devices'),
      description: t('antiaging.devices.desc'),
      icon: Star,
      href: '/services/apparative-anti-aging',
      image: '/125.webp',
    },
    {
      title: t('antiaging.body'),
      description: t('antiaging.body.desc'),
      icon: Star,
      href: '/services/koerperbehandlungen',
      image: '/83.jpg',
    },
    {
      title: t('antiaging.facial'),
      description: t('antiaging.facial.desc'),
      icon: Droplet,
      href: '/services/gesichtsreinigung',
      image: '/71.jpg',
      imagePosition: 'center 60%',
    },
    {
      title: t('antiaging.phonophoresis'),
      description: t('antiaging.phonophoresis.desc'),
      icon: Droplet,
      href: '/services/phonophorese',
      image: '/128.jpeg',
    },
    {
      title: t('antiaging.microneedling'),
      description: t('antiaging.microneedling.desc'),
      icon: Scissors,
      href: '/services/microneedling',
      image: '/44.png',
    },
    {
      title: t('antiaging.darsonval'),
      description: t('antiaging.darsonval.desc'),
      icon: Zap,
      href: '/services/darsonval-haare',
      image: '/129.webp',
    },
    {
      title: t('antiaging.removal'),
      description: t('antiaging.removal.desc'),
      icon: Shield,
      href: '/services/hautveraenderungen-entfernen',
      image: '/130.jpeg',
    },
  ];

  return (
    <div className="relative min-h-screen">
      {/* ЧИСТЫЙ ВИДИМЫЙ ФОН */}
      <div className="fixed inset-0 z-0">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'url(/28.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat',
          }}
        />
      </div>


      {/* КОНТЕНТ В СТИЛЕ VOGUE */}
      <div className="relative z-10 min-h-screen">
        <div className="container mx-auto px-4 max-w-7xl">

          {/* ДРАМАТИЧНЫЙ HERO - Минималистичный */}
          <div className="pt-24 md:pt-28 lg:pt-32 pb-12 md:pb-16 lg:pb-24 text-center">
            <h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl font-heading font-bold tracking-tighter leading-none mb-4 md:mb-6 px-4"
              style={{
                color: 'hsl(25, 27%, 19%)',
                letterSpacing: '-0.02em'
              }}
            >
              {isGerman ? 'LEISTUNGEN' : 'УСЛУГИ'}
            </h1>
            <div className="w-12 md:w-16 h-0.5 bg-brand-gold mx-auto opacity-60"></div>
          </div>

          {/* КАТЕГОРИИ В СТИЛЕ EDITORIAL */}

          {/* Категория 1 */}
          <div id="lashes-brows" className="mb-16 md:mb-24 lg:mb-32 scroll-mt-24">
            {/* Заголовок категории слева */}
            <div className="flex items-end mb-8 md:mb-8 md:mb-12 border-b border-brand-espresso/10 pb-4 md:pb-4 md:pb-6">
              <div className="flex items-center gap-2 md:gap-2 md:gap-4">
                <div
                  className="w-0.5 md:w-1 h-12 md:h-16 bg-brand-gold"
                  style={{ boxShadow: '0 0 20px hsla(38, 70%, 70%, 0.5)' }}
                ></div>
                <div>
                  <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-heading font-bold text-brand-espresso tracking-tight mb-0.5 md:mb-1 break-words" style={{ wordWrap: 'break-word', overflowWrap: 'break-word', hyphens: 'none' }}>
                    {t('lashesbrows.title')}
                  </h2>
                  <p className="text-brand-espresso/60 text-sm md:text-base lg:text-lg font-light italic">
                    {t('lashesbrows.subtitle')}
                  </p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 gap-4 md:gap-6 lg:gap-8">
              {lashesBrowsServices.map((service) => (
                <ServiceCard key={service.title} {...service} />
              ))}
            </div>
          </div>

          {/* Категория 2 */}
          <div id="pmu" className="mb-16 md:mb-24 lg:mb-32 scroll-mt-24">
            <div className="flex items-end mb-8 md:mb-12 border-b border-brand-espresso/10 pb-4 md:pb-6">
              <div className="flex items-center gap-2 md:gap-4">
                <div
                  className="w-0.5 md:w-1 h-12 md:h-16 bg-brand-gold"
                  style={{ boxShadow: '0 0 20px hsla(38, 70%, 70%, 0.5)' }}
                ></div>
                <div>
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-brand-espresso tracking-tight mb-1 break-words" style={{ wordWrap: 'break-word', overflowWrap: 'break-word', hyphens: 'none' }}>
                    {t('pmu.title')}
                  </h2>
                  <p className="text-brand-espresso/60 text-sm md:text-base lg:text-lg font-light italic">
                    {t('pmu.subtitle')}
                  </p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 gap-4 md:gap-6 lg:gap-8">
              {pmuServices.map((service) => (
                <ServiceCard key={service.title} {...service} />
              ))}
            </div>
          </div>

          {/* Категория 3 */}
          <div id="laser" className="mb-16 md:mb-24 lg:mb-32 scroll-mt-24">
            <div className="flex items-end mb-8 md:mb-12 border-b border-brand-espresso/10 pb-4 md:pb-6">
              <div className="flex items-center gap-2 md:gap-4">
                <div
                  className="w-0.5 md:w-1 h-12 md:h-16 bg-brand-gold"
                  style={{ boxShadow: '0 0 20px hsla(38, 70%, 70%, 0.5)' }}
                ></div>
                <div>
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-brand-espresso tracking-tight mb-1 break-words" style={{ wordWrap: 'break-word', overflowWrap: 'break-word', hyphens: 'none' }}>
                    {t('laser.title')}
                  </h2>
                  <p className="text-brand-espresso/60 text-sm md:text-base lg:text-lg font-light italic">
                    {t('laser.subtitle')}
                  </p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 gap-4 md:gap-6 lg:gap-8">
              {laserServices.map((service) => (
                <ServiceCard key={service.title} {...service} />
              ))}
            </div>
          </div>

          {/* Категория 4 */}
          <div id="anti-aging" className="mb-24 scroll-mt-24">
            <div className="flex items-end mb-8 md:mb-12 border-b border-brand-espresso/10 pb-4 md:pb-6">
              <div className="flex items-center gap-2 md:gap-4">
                <div
                  className="w-0.5 md:w-1 h-12 md:h-16 bg-brand-gold"
                  style={{ boxShadow: '0 0 20px hsla(38, 70%, 70%, 0.5)' }}
                ></div>
                <div>
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-brand-espresso tracking-tight mb-1 break-words" style={{ wordWrap: 'break-word', overflowWrap: 'break-word', hyphens: 'none' }}>
                    {t('antiaging.title')}
                  </h2>
                  <p className="text-brand-espresso/60 text-sm md:text-base lg:text-lg font-light italic">
                    {t('antiaging.subtitle')}
                  </p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 gap-4 md:gap-6 lg:gap-8">
              {antiagingServices.map((service) => (
                <ServiceCard key={service.title} {...service} />
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Services;
