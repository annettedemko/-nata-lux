'use client'

import { useLanguage } from '@/contexts/LanguageContext';
import { ServiceCard } from '@/components/ServiceCard';
import { Star, Zap } from 'lucide-react';

const Koerperbehandlungen = () => {
  const { t } = useLanguage();

  const treatments = [
    {
      title: 'RF-Vakuum',
      description: 'Radiofrequenz mit Vakuum für Straffung und Cellulite-Reduktion',
      icon: Star,
      href: '/services/koerperbehandlungen/rf-vakuum',
    },
    {
      title: 'Kavitation',
      description: 'Ultraschall-Kavitation für Fettreduktion an Bauch, Gesäß und Oberschenkeln',
      icon: Zap,
      href: '/services/koerperbehandlungen/kavitation',
    },
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-brand-gold/10 mb-6">
            <Star className="w-10 h-10 text-brand-gold" />
          </div>
          <h1 className="text-4xl md:text-5xl font-heading font-semibold text-brand-espresso mb-6">
            Körperbehandlungen
          </h1>
          <p className="text-xl text-brand-gold font-heading mb-4">
            RF-Vakuum und Kavitation für Body Contouring
          </p>
          <p className="text-lg text-brand-coffee/80 max-w-2xl mx-auto leading-relaxed">
            Moderne Körperbehandlungen für Straffung, Cellulite-Reduktion und Fettabbau.
            Nicht-invasive Methoden für eine schönere Silhouette.
          </p>
        </div>

        {/* Treatments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-16 max-w-4xl mx-auto">
          {treatments.map((treatment, index) => (
            <div key={treatment.title} className="animate-slide-up" style={{ animationDelay: `${index * 50}ms` }}>
              <ServiceCard {...treatment} />
            </div>
          ))}
        </div>

        {/* About Section */}
        <section className="glass rounded-2xl p-8 mb-12">
          <h2 className="text-2xl font-heading font-semibold text-brand-espresso mb-4">
            Was sind Körperbehandlungen?
          </h2>
          <p className="text-brand-coffee/80 leading-relaxed mb-4">
            Unsere Körperbehandlungen nutzen modernste Technologien wie RF-Vakuum und Kavitation, um gezielt Problemzonen
            am Körper zu behandeln – ganz ohne Operation oder lange Ausfallzeiten.
          </p>
          <p className="text-brand-coffee/80 leading-relaxed">
            Ob Cellulite-Reduktion, Hautstraffung oder Fettabbau – wir bieten effektive Lösungen für eine schönere,
            straffere Silhouette an Bauch, Gesäß, Oberschenkeln und anderen Bereichen.
          </p>
        </section>

        {/* CTA */}
        <div className="bg-gold-gradient rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-heading font-semibold text-white mb-4">
            Bereit für Ihre Traumfigur?
          </h2>
          <p className="text-white/90 mb-6">
            Buchen Sie eine kostenlose Beratung und starten Sie Ihre individuelle Body-Contouring-Reise.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Koerperbehandlungen;
