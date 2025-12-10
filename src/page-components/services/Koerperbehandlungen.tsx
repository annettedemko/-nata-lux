'use client'

import { useLanguage } from '@/contexts/LanguageContext';
import { ServiceCard } from '@/components/ServiceCard';
import { Star, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Koerperbehandlungen = () => {
  const { t, language } = useLanguage();
  const isGerman = language === 'de';

  const treatments = [
    {
      title: language === 'de' ? 'RF-Vakuum' : language === 'ru' ? 'RF-вакуум' : 'RF-вакуум',
      description: isGerman
        ? 'Radiofrequenz mit Vakuum für Straffung und Cellulite-Reduktion'
        : 'Радиочастоты с вакуумом для подтяжки и уменьшения целлюлита',
      icon: Star,
      href: '/services/koerperbehandlungen/rf-vakuum',
      image: '/83.jpg',
    },
    {
      title: language === 'de' ? 'Kavitation' : language === 'ru' ? 'Кавитация' : 'Кавитация',
      description: isGerman
        ? 'Ultraschall-Kavitation für Fettreduktion an Bauch, Gesäß und Oberschenkeln'
        : 'Ультразвуковая кавитация для уменьшения жировых отложений на животе, ягодицах и бёдрах',
      icon: Zap,
      href: '/services/koerperbehandlungen/kavitation',
      image: '/127.jpeg',
    },
  ];

  return (
    <div className="relative min-h-screen">
      {/* Background */}
      <div className="fixed inset-0 z-0">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'url(/45.webp)',
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 py-20">
        <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-brand-gold/10 mb-6">
            <Star className="w-10 h-10 text-brand-gold" />
          </div>
          <h1 className="text-4xl md:text-5xl font-heading font-semibold text-brand-espresso mb-6">
            {language === 'de' ? 'Körperbehandlungen' : language === 'ru' ? 'Процедуры для тела' : 'Процедуры для тела'}
          </h1>
          <p className="text-xl text-brand-gold font-heading mb-4">
            {language === 'de' ? 'RF-Vakuum und Kavitation für Body Contouring' : language === 'ru' ? 'RF-вакуум и кавитация для контурирования тела' : 'RF-вакуум и кавитация для контурирования тела'}
          </p>
          <p className="text-lg text-brand-coffee/80 max-w-2xl mx-auto leading-relaxed">
            {isGerman
              ? 'Moderne Körperbehandlungen für Straffung, Cellulite-Reduktion und Fettabbau. Nicht-invasive Methoden für eine schönere Silhouette.'
              : 'Современные процедуры для тела: подтяжка, уменьшение целлюлита и жировых отложений. Неинвазивные методы для красивого силуэта.'}
          </p>
        </div>

        {/* Treatments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-16 max-w-4xl mx-auto">
          {treatments.map((treatment, index) => (
            <div key={treatment.title} className="animate-slide-up h-full flex" style={{ animationDelay: `${index * 50}ms` }}>
              <ServiceCard {...treatment} />
            </div>
          ))}
        </div>

        {/* About Section */}
        <section className="glass rounded-2xl p-8 mb-12">
          <h2 className="text-2xl font-heading font-semibold text-brand-espresso mb-4">
            {language === 'de' ? 'Was sind Körperbehandlungen?' : language === 'ru' ? 'Что такое процедуры для тела?' : 'Что такое процедуры для тела?'}
          </h2>
          <p className="text-brand-coffee/80 leading-relaxed mb-4">
            {isGerman
              ? 'Unsere Körperbehandlungen nutzen modernste Technologien wie RF-Vakuum und Kavitation, um gezielt Problemzonen am Körper zu behandeln – ganz ohne Operation oder lange Ausfallzeiten.'
              : 'Наши процедуры используют современные технологии RF-вакуум и кавитация для целенаправленной работы с проблемными зонами тела — без операций и длительного восстановления.'}
          </p>
          <p className="text-brand-coffee/80 leading-relaxed">
            {isGerman
              ? 'Ob Cellulite-Reduktion, Hautstraffung oder Fettabbau – wir bieten effektive Lösungen für eine schönere, straffere Silhouette an Bauch, Gesäß, Oberschenkeln und anderen Bereichen.'
              : 'Уменьшение целлюлита, подтяжка кожи или сжигание жира — мы предлагаем эффективные решения для красивого, подтянутого силуэта на животе, ягодицах, бёдрах и других зонах.'}
          </p>
        </section>

        {/* CTA */}
        <div className="bg-gold-gradient rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-heading font-semibold text-white mb-4">
            {language === 'de' ? 'Bereit für Ihre Traumfigur?' : language === 'ru' ? 'Готовы к фигуре мечты?' : 'Готовы к фигуре мечты?'}
          </h2>
          <p className="text-white/90 mb-6">
            {isGerman
              ? 'Buchen Sie eine kostenlose Beratung und starten Sie Ihre individuelle Body-Contouring-Reise.'
              : 'Запишитесь на бесплатную консультацию и начните свой индивидуальный путь к идеальному телу.'}
          </p>
          <Button
            size="lg"
            className="bg-white hover:bg-brand-cream text-brand-espresso font-medium rounded-xl px-8 py-6"
            asChild
          >
            <a href="https://wa.me/4917677267269" target="_blank" rel="noopener noreferrer">
              {language === 'de' ? 'Beratung anfragen' : language === 'ru' ? 'Запросить консультацию' : 'Запросить консультацию'}
            </a>
          </Button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Koerperbehandlungen;
