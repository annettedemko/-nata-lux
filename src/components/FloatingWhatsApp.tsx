'use client'

import { MessageCircle } from 'lucide-react';

export const FloatingWhatsApp = () => {
  const whatsappNumber = '4917677267269';
  const message = 'Hallo! Ich interessiere mich für Ihre Dienstleistungen.';

  const handleClick = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

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
      aria-label="WhatsApp kontaktieren"
    >
      <MessageCircle className="w-6 h-6 text-white drop-shadow-sm" />
      <span className="absolute right-full mr-3 px-4 py-2 rounded-2xl text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none"
        style={{
          background: 'linear-gradient(135deg, rgba(197,151,80,0.95) 0%, rgba(156,116,56,0.95) 100%)',
          color: 'white',
          boxShadow: '0 4px 16px rgba(197,151,80,0.3)',
        }}
      >
        WhatsApp schreiben
      </span>
    </button>
  );
};
