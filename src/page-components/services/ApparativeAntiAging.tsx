'use client'

import { useLanguage } from '@/contexts/LanguageContext';
import { ServiceCard } from '@/components/ServiceCard';
import { Star, Zap, Sun, Activity } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ApparativeAntiAging = () => {
  const { t, language } = useLanguage();
  const treatments = [
    {
      title: 'RF-Lifting',
      description: language === 'de'
        ? 'Radiofrequenz für Straffung und Kollagenbildung'
        : language === 'ru' ? 'Радиочастоты для подтяжки и выработки коллагена'
        : 'Радіочастоти для підтяжки та вироблення колагену',
      icon: Zap,
      href: '/services/apparative-anti-aging/rf-lifting',
      image: '/rf-lifting-behandlung-muenchen.jpeg',
    },
    {
      title: language === 'de' ? 'Lichttherapie' : language === 'ru' ? 'Световая терапия' : 'Світлова терапія',
      description: language === 'de'
        ? 'LED und IPL für Anti-Aging und Hautregeneration'
        : language === 'ru' ? 'LED и IPL для омоложения и регенерации кожи'
        : 'LED та IPL для омолодження та регенерації шкіри',
      icon: Sun,
      href: '/services/apparative-anti-aging/lichttherapie',
      image: '/biostrom-behandlung-muenchen.jpeg',
    },
    {
      title: language === 'de' ? 'Biostrom' : language === 'ru' ? 'Биотоки' : 'Біоструми',
      description: language === 'de'
        ? 'Mikrostrom für Muskelstimulation und Lifting'
        : language === 'ru' ? 'Микротоки для стимуляции мышц и лифтинга'
        : 'Мікроструми для стимуляції м\'язів та ліфтингу',
      icon: Activity,
      href: '/services/apparative-anti-aging/biostrom',
      image: '/apparative-anti-aging-geraet-muenchen.webp',
    },
    {
      title: language === 'de' ? 'Ultraschall' : language === 'ru' ? 'Ультразвук' : 'Ультразвук',
      description: language === 'de'
        ? 'Tiefenwirksame Hautpflege und Straffung'
        : language === 'ru' ? 'Глубокий уход за кожей и подтяжка'
        : 'Глибокий догляд за шкірою та підтяжка',
      icon: Star,
      href: '/services/apparative-anti-aging/ultraschall',
      image: '/kavitation-behandlung-muenchen.jpeg',
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
            {language === 'de' ? 'Apparative Anti-Aging' : language === 'ru' ? 'Аппаратный Anti-Aging' : 'Апаратний Anti-Aging'}
          </h1>
          <p className="text-xl text-brand-espresso/80 font-heading mb-4">
            {language === 'de' ? 'RF-Lifting, Lichttherapie, Biostrom, Ultraschall' : language === 'ru' ? 'RF-лифтинг, Световая терапия, Биотоки, Ультразвук' : 'RF-ліфтинг, Світлова терапія, Біоструми, Ультразвук'}
          </p>
          <p className="text-lg text-brand-coffee/80 max-w-2xl mx-auto leading-relaxed">
            {language === 'de'
              ? 'Moderne Geräte-Behandlungen für natürliche Verjüngung ohne Injektionen. Wählen Sie die passende Behandlung für Ihre individuellen Bedürfnisse.'
              : language === 'ru' ? 'Современные аппаратные процедуры для естественного омоложения без инъекций. Выберите подходящую процедуру для ваших индивидуальных потребностей.'
              : 'Сучасні апаратні процедури для природного омолодження без ін\'єкцій. Оберіть відповідну процедуру для ваших індивідуальних потреб.'}
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
            {language === 'de' ? 'Was ist apparative Anti-Aging?' : language === 'ru' ? 'Что такое аппаратный Anti-Aging?' : 'Що таке апаратний Anti-Aging?'}
          </h2>
          <p className="text-brand-coffee/80 leading-relaxed mb-4">
            {language === 'de'
              ? 'Apparative Anti-Aging-Behandlungen nutzen modernste Technologien, um die Haut auf natürliche Weise zu verjüngen, zu straffen und zu regenerieren – ganz ohne Nadeln oder Skalpell.'
              : language === 'ru' ? 'Аппаратные anti-age процедуры используют современные технологии для естественного омоложения, подтяжки и регенерации кожи — без игл и скальпеля.'
              : 'Апаратні anti-age процедури використовують сучасні технології для природного омолодження, підтяжки та регенерації шкіри — без голок та скальпеля.'}
          </p>
          <p className="text-brand-coffee/80 leading-relaxed">
            {language === 'de'
              ? 'Jede Technologie hat ihre spezifischen Vorteile. Wählen Sie die Behandlung, die am besten zu Ihren Bedürfnissen passt, oder kombinieren Sie mehrere Methoden für optimale Ergebnisse.'
              : language === 'ru' ? 'Каждая технология имеет свои преимущества. Выберите процедуру, которая лучше всего подходит вашим потребностям, или комбинируйте несколько методов для оптимальных результатов.'
              : 'Кожна технологія має свої переваги. Оберіть процедуру, яка найкраще підходить вашим потребам, або поєднуйте кілька методів для оптимальних результатів.'}
          </p>
        </section>

        {/* CTA */}
        <div className="bg-gold-gradient rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-heading font-semibold text-white mb-4">
            {language === 'de' ? 'Welche Behandlung passt zu Ihnen?' : language === 'ru' ? 'Какая процедура подходит вам?' : 'Яка процедура підходить вам?'}
          </h2>
          <p className="text-white/90 mb-6">
            {language === 'de'
              ? 'Buchen Sie eine kostenlose Beratung und wir finden gemeinsam die optimale Behandlung für Ihre Haut.'
              : language === 'ru' ? 'Запишитесь на бесплатную консультацию, и мы вместе подберём оптимальную процедуру для вашей кожи.'
              : 'Запишіться на безкоштовну консультацію, і ми разом підберемо оптимальну процедуру для вашої шкіри.'}
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

export default ApparativeAntiAging;
