'use client'

import { MessageCircle, Phone } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export const FloatingButtons = () => {
  const { language } = useLanguage();
  const whatsappNumber = '4917677267269';
  const phoneNumber = '+4917677267269';

  const handleWhatsApp = () => {
    const message = language === 'de'
      ? 'Hallo! Ich interessiere mich für Ihre Dienstleistungen.'
      : 'Здравствуйте! Меня интересуют ваши услуги.';
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const handleTermin = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <div className="fixed bottom-6 left-0 right-0 z-50 flex justify-center gap-4 px-6 md:hidden pointer-events-none">
      {/* Termin buchen button */}
      <button
        onClick={handleTermin}
        className="pointer-events-auto group relative w-14 h-14 rounded-full transition-all duration-300 hover:scale-110 active:scale-95"
        style={{
          background: 'linear-gradient(135deg, #C59750 0%, #9C7438 100%)',
          boxShadow: '0 8px 32px rgba(197,151,80,0.4), 0 2px 8px rgba(0,0,0,0.1)',
        }}
        aria-label={language === 'de' ? 'Termin buchen' : 'Записаться'}
      >
        <Phone className="w-5 h-5 text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

        {/* Tooltip */}
        <span className="absolute bottom-full mb-3 left-1/2 -translate-x-1/2 px-4 py-2 rounded-xl text-xs font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none"
          style={{
            background: 'rgba(255,255,255,0.95)',
            color: '#2B1F18',
            boxShadow: '0 4px 16px rgba(0,0,0,0.1)',
            backdropFilter: 'blur(10px)',
          }}
        >
          {language === 'de' ? 'Termin buchen' : 'Записаться'}
        </span>
      </button>

      {/* WhatsApp button */}
      <button
        onClick={handleWhatsApp}
        className="pointer-events-auto group relative w-14 h-14 rounded-full transition-all duration-300 hover:scale-110 active:scale-95"
        style={{
          background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
          boxShadow: '0 8px 32px rgba(37,211,102,0.4), 0 2px 8px rgba(0,0,0,0.1)',
        }}
        aria-label="WhatsApp"
      >
        <MessageCircle className="w-5 h-5 text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

        {/* Tooltip */}
        <span className="absolute bottom-full mb-3 left-1/2 -translate-x-1/2 px-4 py-2 rounded-xl text-xs font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none"
          style={{
            background: 'rgba(255,255,255,0.95)',
            color: '#2B1F18',
            boxShadow: '0 4px 16px rgba(0,0,0,0.1)',
            backdropFilter: 'blur(10px)',
          }}
        >
          WhatsApp
        </span>
      </button>
    </div>
  );
};
