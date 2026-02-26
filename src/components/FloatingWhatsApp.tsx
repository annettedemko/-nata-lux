'use client'

import { MessageCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export const FloatingWhatsApp = () => {
  const { language } = useLanguage();
  const whatsappNumber = '4917677267269';

  const handleClick = () => {
    const message = language === 'de'
      ? 'Hallo! Ich interessiere mich für Ihre Dienstleistungen.'
      : language === 'ru'
      ? 'Здравствуйте! Меня интересуют ваши услуги.'
      : 'Привіт! Мене цікавлять ваші послуги.';
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const ariaLabel = language === 'de' ? 'WhatsApp kontaktieren' : language === 'ru' ? 'Связаться по WhatsApp' : 'Зв\'язатися через WhatsApp';
  const tooltip = language === 'de' ? 'WhatsApp schreiben' : language === 'ru' ? 'Написать в WhatsApp' : 'Написати в WhatsApp';

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group hover:scale-110"
      style={{
        background: 'linear-gradient(135deg, #C8E6C9 0%, #A5D6A7 50%, #81C784 100%)',
        boxShadow: '0 4px 20px rgba(129, 199, 132, 0.3)',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = '0 8px 32px rgba(129, 199, 132, 0.5), 0 4px 16px rgba(197,151,80,0.2)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = '0 4px 20px rgba(129, 199, 132, 0.3)';
      }}
      aria-label={ariaLabel}
    >
      <MessageCircle className="w-6 h-6 text-white drop-shadow-sm" />
      <span className="absolute right-full mr-3 px-4 py-2 rounded-2xl text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none"
        style={{
          background: 'linear-gradient(135deg, rgba(197,151,80,0.95) 0%, rgba(156,116,56,0.95) 100%)',
          color: 'white',
          boxShadow: '0 4px 16px rgba(197,151,80,0.3)',
        }}
      >
        {tooltip}
      </span>
    </button>
  );
};
