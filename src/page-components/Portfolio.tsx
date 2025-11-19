'use client'

import { useLanguage } from '@/contexts/LanguageContext';
import { useState } from 'react';

const Portfolio = () => {
  const { t, language } = useLanguage();
  const isGerman = language === 'de';
  const [filter, setFilter] = useState('all');

  const categories = isGerman ? [
    { id: 'all', name: 'Alle' },
    { id: 'lashes', name: 'Wimpern' },
    { id: 'pmu', name: 'PMU' },
    { id: 'brows', name: 'Augenbrauen' },
    { id: 'laser', name: 'Laser' },
  ] : [
    { id: 'all', name: 'Все' },
    { id: 'lashes', name: 'Ресницы' },
    { id: 'pmu', name: 'ПМ' },
    { id: 'brows', name: 'Брови' },
    { id: 'laser', name: 'Лазер' },
  ];

  // Placeholder gallery items
  const galleryItems = [
    { id: 1, category: 'lashes', title: '3D Volume Lashes', image: 'https://images.unsplash.com/photo-1583001809515-4baa03a8b0b6?w=600' },
    { id: 2, category: 'pmu', title: 'Powder Brows', image: 'https://images.unsplash.com/photo-1560750588-73207b1ef5b8?w=600' },
    { id: 3, category: 'brows', title: 'Brow Lamination', image: 'https://images.unsplash.com/photo-1590736969955-71cc94901144?w=600' },
    { id: 4, category: 'lashes', title: 'Classic Lashes', image: 'https://images.unsplash.com/photo-1571939228382-b2f2b585ce15?w=600' },
    { id: 5, category: 'pmu', title: 'Lip Blushing', image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=600' },
    { id: 6, category: 'brows', title: 'Brow Tinting', image: 'https://images.unsplash.com/photo-1515688594390-b649af70d282?w=600' },
  ];

  const filteredItems = filter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === filter);

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-heading font-semibold text-brand-espresso mb-6">
            {t('nav.portfolio')}
          </h1>
          <p className="text-lg text-brand-coffee/80 max-w-2xl mx-auto leading-relaxed">
            {isGerman
              ? 'Entdecken Sie unsere Arbeiten und lassen Sie sich von den Ergebnissen inspirieren.'
              : 'Посмотрите наши работы и вдохновитесь результатами.'}
          </p>
        </div>

        {/* Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setFilter(category.id)}
              className={`px-6 py-3 rounded-xl font-medium transition-all ${
                filter === category.id
                  ? 'bg-brand-gold text-white shadow-medium'
                  : 'bg-white/40 text-brand-coffee hover:bg-brand-sand/50'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredItems.map((item, index) => (
            <div 
              key={item.id}
              className="glass rounded-2xl overflow-hidden hover-lift animate-fade-in cursor-pointer"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-espresso/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6 w-full">
                    <h3 className="text-white font-heading text-xl font-semibold">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Instagram CTA */}
        <div className="glass rounded-2xl p-8 md:p-12 max-w-2xl mx-auto mt-16 text-center">
          <h2 className="text-2xl font-heading font-semibold text-brand-espresso mb-4">
            {isGerman ? 'Folgen Sie uns auf Instagram' : 'Подписывайтесь на нас в Instagram'}
          </h2>
          <p className="text-brand-coffee/70 mb-6 leading-relaxed">
            {isGerman
              ? 'Für täglich neue Inspirationen und Vorher-Nachher-Bilder folgen Sie uns auf Instagram.'
              : 'Следите за новыми работами и фото до/после в нашем Instagram.'}
          </p>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-3 bg-brand-gold hover:bg-brand-gold/90 text-white font-medium rounded-xl transition-all shadow-medium hover:shadow-glow"
          >
            @natalux_munich
          </a>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
