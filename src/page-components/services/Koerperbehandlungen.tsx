'use client'

import { useLanguage } from '@/contexts/LanguageContext';
import { ServiceCard } from '@/components/ServiceCard';
import { Star, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Koerperbehandlungen = () => {
  const { t, language } = useLanguage();

  const treatments = [
    {
      title: language === 'de' ? 'RF-Vakuum' : language === 'ru' ? 'RF-вакуум' : 'RF-вакуум',
      description: language === 'de'
        ? 'Radiofrequenz mit Vakuum für Straffung und Cellulite-Reduktion'
        : language === 'ru' ? 'Радиочастоты с вакуумом для подтяжки и уменьшения целлюлита'
        : 'Радіочастоти з вакуумом для підтяжки та зменшення целюліту',
      icon: Star,
      href: '/services/koerperbehandlungen/rf-vakuum',
      image: '/rf-vakuum-koerperbehandlung-muenchen.jpg',
    },
    {
      title: language === 'de' ? 'Kavitation' : language === 'ru' ? 'Кавитация' : 'Кавітація',
      description: language === 'de'
        ? 'Ultraschall-Kavitation für Fettreduktion an Bauch, Gesäß und Oberschenkeln'
        : language === 'ru' ? 'Ультразвуковая кавитация для уменьшения жировых отложений на животе, ягодицах и бёдрах'
        : 'Ультразвукова кавітація для зменшення жирових відкладень на животі, сідницях та стегнах',
      icon: Zap,
      href: '/services/koerperbehandlungen/kavitation',
      image: '/koerperbehandlung-muenchen.jpeg',
    },
  ];

  return (
    <div className="relative min-h-screen">
      {/* Background */}
      <div className="fixed inset-0 z-0">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'url(/nata-lux-beauty-studio-muenchen.webp)',
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
            {language === 'de' ? 'Körperbehandlungen' : language === 'ru' ? 'Процедуры для тела' : 'Процедури для тіла'}
          </h1>
          <p className="text-xl text-brand-gold font-heading mb-4">
            {language === 'de' ? 'RF-Vakuum und Kavitation für Body Contouring' : language === 'ru' ? 'RF-вакуум и кавитация для контурирования тела' : 'RF-вакуум та кавітація для контурування тіла'}
          </p>
          <p className="text-lg text-brand-coffee/80 max-w-2xl mx-auto leading-relaxed">
            {language === 'de'
              ? 'Moderne Körperbehandlungen für Straffung, Cellulite-Reduktion und Fettabbau. Nicht-invasive Methoden für eine schönere Silhouette.'
              : language === 'ru' ? 'Современные процедуры для тела: подтяжка, уменьшение целлюлита и жировых отложений. Неинвазивные методы для красивого силуэта.'
              : 'Сучасні процедури для тіла: підтяжка, зменшення целюліту та жирових відкладень. Неінвазивні методи для красивого силуету.'}
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
            {language === 'de' ? 'Was sind Körperbehandlungen?' : language === 'ru' ? 'Что такое процедуры для тела?' : 'Що таке процедури для тіла?'}
          </h2>
          <p className="text-brand-coffee/80 leading-relaxed mb-4">
            {language === 'de'
              ? 'Unsere Körperbehandlungen nutzen modernste Technologien wie RF-Vakuum und Kavitation, um gezielt Problemzonen am Körper zu behandeln – ganz ohne Operation oder lange Ausfallzeiten.'
              : language === 'ru' ? 'Наши процедуры используют современные технологии RF-вакуум и кавитация для целенаправленной работы с проблемными зонами тела — без операций и длительного восстановления.'
              : 'Наші процедури використовують сучасні технології RF-вакуум та кавітацію для цілеспрямованої роботи з проблемними зонами тіла — без операцій та тривалого відновлення.'}
          </p>
          <p className="text-brand-coffee/80 leading-relaxed">
            {language === 'de'
              ? 'Ob Cellulite-Reduktion, Hautstraffung oder Fettabbau – wir bieten effektive Lösungen für eine schönere, straffere Silhouette an Bauch, Gesäß, Oberschenkeln und anderen Bereichen.'
              : language === 'ru' ? 'Уменьшение целлюлита, подтяжка кожи или сжигание жира — мы предлагаем эффективные решения для красивого, подтянутого силуэта на животе, ягодицах, бёдрах и других зонах.'
              : 'Зменшення целюліту, підтяжка шкіри або спалювання жиру — ми пропонуємо ефективні рішення для красивого, підтягнутого силуету на животі, сідницях, стегнах та інших зонах.'}
          </p>
        </section>

        {/* CTA */}
        <div className="bg-gold-gradient rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-heading font-semibold text-white mb-4">
            {language === 'de' ? 'Bereit für Ihre Traumfigur?' : language === 'ru' ? 'Готовы к фигуре мечты?' : 'Готові до фігури мрії?'}
          </h2>
          <p className="text-white/90 mb-6">
            {language === 'de'
              ? 'Buchen Sie eine kostenlose Beratung und starten Sie Ihre individuelle Body-Contouring-Reise.'
              : language === 'ru' ? 'Запишитесь на бесплатную консультацию и начните свой индивидуальный путь к идеальному телу.'
              : 'Запишіться на безкоштовну консультацію та розпочніть свій індивідуальний шлях до ідеального тіла.'}
          </p>
          <Button
            size="lg"
            className="bg-white hover:bg-brand-cream text-brand-espresso font-medium rounded-xl px-8 py-6"
            asChild
          >
            <a href="https://wa.me/4917677267269" target="_blank" rel="noopener noreferrer">
              {language === 'de' ? 'Beratung anfragen' : language === 'ru' ? 'Запросить консультацию' : 'Запросити консультацію'}
            </a>
          </Button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Koerperbehandlungen;
