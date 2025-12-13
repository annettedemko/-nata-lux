'use client'

import { MessageCircle, Calendar } from 'lucide-react';
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
    <>
      {/* Termin buchen button - Left side */}
      <button
        onClick={handleTermin}
        className="fixed bottom-6 left-4 z-50 md:hidden flex items-center gap-2 px-4 py-3 rounded-full transition-all duration-300 hover:scale-105 active:scale-95 font-sans"
        style={{
          background: 'rgba(43, 31, 24, 0.65)',
          boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
          backdropFilter: 'blur(10px)',
        }}
      >
        <Calendar className="w-5 h-5 text-white flex-shrink-0" />
        <span className="text-white text-sm font-medium">
          {language === 'de' ? 'Termin b...' : language === 'ru' ? 'Записать...' : 'Записатися...'}
        </span>
      </button>

      {/* WhatsApp button - Right side */}
      <button
        onClick={handleWhatsApp}
        className="fixed bottom-6 right-4 z-50 md:hidden w-14 h-14 rounded-full transition-all duration-300 hover:scale-110 active:scale-95 flex items-center justify-center font-sans"
        style={{
          background: 'rgba(43, 31, 24, 0.65)',
          boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
          backdropFilter: 'blur(10px)',
        }}
        aria-label="WhatsApp"
      >
        <MessageCircle className="w-5 h-5 text-white" />
      </button>
    </>
  );
};
