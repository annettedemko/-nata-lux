'use client'

import { useLanguage } from '@/contexts/LanguageContext';
import { ServiceCard } from '@/components/ServiceCard';
import { Star, Zap, Sun, Activity } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ApparativeAntiAging = () => {
  const { t, language } = useLanguage();
  const isGerman = language === 'de';

  const treatments = [
    {
      title: 'RF-Lifting',
      description: isGerman
        ? 'Radiofrequenz für Straffung und Kollagenbildung'
        : 'Радиочастоты для подтяжки и выработки коллагена',
      icon: Zap,
      href: '/services/apparative-anti-aging/rf-lifting',
      image: '/162.jpeg',
    },
    {
      title: isGerman ? 'Lichttherapie' : 'Световая терапия',
      description: isGerman
        ? 'LED und IPL für Anti-Aging und Hautregeneration'
        : 'LED и IPL для омоложения и регенерации кожи',
      icon: Sun,
      href: '/services/apparative-anti-aging/lichttherapie',
      image: '/124.jpeg',
    },
    {
      title: isGerman ? 'Biostrom' : 'Биотоки',
      description: isGerman
        ? 'Mikrostrom für Muskelstimulation und Lifting'
        : 'Микротоки для стимуляции мышц и лифтинга',
      icon: Activity,
      href: '/services/apparative-anti-aging/biostrom',
      image: '/125.webp',
    },
    {
      title: isGerman ? 'Ultraschall' : 'Ультразвук',
      description: isGerman
        ? 'Tiefenwirksame Hautpflege und Straffung'
        : 'Глубокий уход за кожей и подтяжка',
      icon: Star,
      href: '/services/apparative-anti-aging/ultraschall',
      image: '/126.jpeg',
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
            {language === 'de' ? 'Apparative Anti-Aging' : language === 'ru' ? 'Аппаратный Anti-Aging' : 'Аппаратный Anti-Aging'}
          </h1>
          <p className="text-xl text-brand-espresso/80 font-heading mb-4">
            {language === 'de' ? 'RF-Lifting, Lichttherapie, Biostrom, Ultraschall' : language === 'ru' ? 'RF-лифтинг, Световая терапия, Биотоки, Ультразвук' : 'RF-лифтинг, Световая терапия, Биотоки, Ультразвук'}
          </p>
          <p className="text-lg text-brand-coffee/80 max-w-2xl mx-auto leading-relaxed">
            {isGerman
              ? 'Moderne Geräte-Behandlungen für natürliche Verjüngung ohne Injektionen. Wählen Sie die passende Behandlung für Ihre individuellen Bedürfnisse.'
              : 'Современные аппаратные процедуры для естественного омоложения без инъекций. Выберите подходящую процедуру для ваших индивидуальных потребностей.'}
          </p>
        </div>

        {/* Treatments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-16">
          {treatments.map((treatment, index) => (
            <div key={treatment.title} className="animate-slide-up h-full flex" style={{ animationDelay: `${index * 50}ms` }}>
              <ServiceCard {...treatment} />
            </div>
          ))}
        </div>

        {/* About Section */}
        <section className="glass rounded-2xl p-8 mb-12">
          <h2 className="text-2xl font-heading font-semibold text-brand-espresso mb-4">
            {language === 'de' ? 'Was ist apparative Anti-Aging?' : language === 'ru' ? 'Что такое аппаратный Anti-Aging?' : 'Что такое аппаратный Anti-Aging?'}
          </h2>
          <p className="text-brand-coffee/80 leading-relaxed mb-4">
            {isGerman
              ? 'Apparative Anti-Aging-Behandlungen nutzen modernste Technologien, um die Haut auf natürliche Weise zu verjüngen, zu straffen und zu regenerieren – ganz ohne Nadeln oder Skalpell.'
              : 'Аппаратные anti-age процедуры используют современные технологии для естественного омоложения, подтяжки и регенерации кожи — без игл и скальпеля.'}
          </p>
          <p className="text-brand-coffee/80 leading-relaxed">
            {isGerman
              ? 'Jede Technologie hat ihre spezifischen Vorteile. Wählen Sie die Behandlung, die am besten zu Ihren Bedürfnissen passt, oder kombinieren Sie mehrere Methoden für optimale Ergebnisse.'
              : 'Каждая технология имеет свои преимущества. Выберите процедуру, которая лучше всего подходит вашим потребностям, или комбинируйте несколько методов для оптимальных результатов.'}
          </p>
        </section>

        {/* CTA */}
        <div className="bg-gold-gradient rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-heading font-semibold text-white mb-4">
            {language === 'de' ? 'Welche Behandlung passt zu Ihnen?' : language === 'ru' ? 'Какая процедура подходит вам?' : 'Какая процедура подходит вам?'}
          </h2>
          <p className="text-white/90 mb-6">
            {isGerman
              ? 'Buchen Sie eine kostenlose Beratung und wir finden gemeinsam die optimale Behandlung für Ihre Haut.'
              : 'Запишитесь на бесплатную консультацию, и мы вместе подберём оптимальную процедуру для вашей кожи.'}
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

export default ApparativeAntiAging;
