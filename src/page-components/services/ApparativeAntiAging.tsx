'use client'

import { useLanguage } from '@/contexts/LanguageContext';
import { ServiceCard } from '@/components/ServiceCard';
import { Star, Zap, Sun, Activity } from 'lucide-react';

const ApparativeAntiAging = () => {
  const { t } = useLanguage();

  const treatments = [
    {
      title: 'RF-Lifting',
      description: 'Radiofrequenz für Straffung und Kollagenbildung',
      icon: Zap,
      href: '/services/apparative-anti-aging/rf-lifting',
    },
    {
      title: 'Lichttherapie',
      description: 'LED und IPL für Anti-Aging und Hautregeneration',
      icon: Sun,
      href: '/services/apparative-anti-aging/lichttherapie',
    },
    {
      title: 'Biostrom',
      description: 'Mikrostrom für Muskelstimulation und Lifting',
      icon: Activity,
      href: '/services/apparative-anti-aging/biostrom',
    },
    {
      title: 'Ultraschall',
      description: 'Tiefenwirksame Hautpflege und Straffung',
      icon: Star,
      href: '/services/apparative-anti-aging/ultraschall',
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
            Apparative Anti-Aging
          </h1>
          <p className="text-xl text-brand-gold font-heading mb-4">
            RF-Lifting, Lichttherapie, Biostrom, Ultraschall
          </p>
          <p className="text-lg text-brand-coffee/80 max-w-2xl mx-auto leading-relaxed">
            Moderne Geräte-Behandlungen für natürliche Verjüngung ohne Injektionen.
            Wählen Sie die passende Behandlung für Ihre individuellen Bedürfnisse.
          </p>
        </div>

        {/* Treatments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-16">
          {treatments.map((treatment, index) => (
            <div key={treatment.title} className="animate-slide-up" style={{ animationDelay: `${index * 50}ms` }}>
              <ServiceCard {...treatment} />
            </div>
          ))}
        </div>

        {/* About Section */}
        <section className="glass rounded-2xl p-8 mb-12">
          <h2 className="text-2xl font-heading font-semibold text-brand-espresso mb-4">
            Was ist apparative Anti-Aging?
          </h2>
          <p className="text-brand-coffee/80 leading-relaxed mb-4">
            Apparative Anti-Aging-Behandlungen nutzen modernste Technologien, um die Haut auf natürliche Weise zu verjüngen,
            zu straffen und zu regenerieren – ganz ohne Nadeln oder Skalpell.
          </p>
          <p className="text-brand-coffee/80 leading-relaxed">
            Jede Technologie hat ihre spezifischen Vorteile. Wählen Sie die Behandlung, die am besten zu Ihren Bedürfnissen passt,
            oder kombinieren Sie mehrere Methoden für optimale Ergebnisse.
          </p>
        </section>

        {/* CTA */}
        <div className="bg-gold-gradient rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-heading font-semibold text-white mb-4">
            Welche Behandlung passt zu Ihnen?
          </h2>
          <p className="text-white/90 mb-6">
            Buchen Sie eine kostenlose Beratung und wir finden gemeinsam die optimale Behandlung für Ihre Haut.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ApparativeAntiAging;
