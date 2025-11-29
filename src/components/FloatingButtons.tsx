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
    <div className="fixed bottom-0 left-0 right-0 z-50 flex gap-3 p-4 md:hidden"
      style={{
        background: 'linear-gradient(to top, rgba(255,255,255,0.98), rgba(255,255,255,0.95))',
        backdropFilter: 'blur(10px)',
        boxShadow: '0 -4px 20px rgba(0,0,0,0.08)',
      }}
    >
      {/* Termin buchen button */}
      <button
        onClick={handleTermin}
        className="flex-1 flex items-center justify-center gap-2 py-4 px-6 rounded-2xl font-semibold text-white transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
        style={{
          background: 'linear-gradient(135deg, #C59750 0%, #BFA77A 100%)',
          boxShadow: '0 4px 16px rgba(197,151,80,0.3)',
        }}
      >
        <Calendar className="w-5 h-5" />
        <span>{language === 'de' ? 'Termin buchen' : 'Записаться'}</span>
      </button>

      {/* WhatsApp button */}
      <button
        onClick={handleWhatsApp}
        className="flex-1 flex items-center justify-center gap-2 py-4 px-6 rounded-2xl font-semibold text-white transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
        style={{
          background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
          boxShadow: '0 4px 16px rgba(37,211,102,0.3)',
        }}
      >
        <MessageCircle className="w-5 h-5" />
        <span>WhatsApp</span>
      </button>
    </div>
  );
};
