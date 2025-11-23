'use client'

import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { 
  GraduationCap, 
  Award, 
  Users, 
  FileText,
  CheckCircle2
} from 'lucide-react';

const Training = () => {
  const { t, language } = useLanguage();
  const isGerman = language === 'de';

  const courses = [
    {
      title: t('training.lashes'),
      description: t('training.lashes.desc'),
      icon: GraduationCap,
      includes: isGerman
        ? ['Theorie und Praxis', 'Zertifikat']
        : ['Теория и практика', 'Сертификат'],
      showPricing: false,
    },
    {
      title: t('training.pmu'),
      description: t('training.pmu.desc'),
      icon: Award,
      includes: isGerman
        ? ['Theorie und Praxis', 'Zertifikat']
        : ['Теория и практика', 'Сертификат'],
      showPricing: false,
    },
    {
      title: t('training.advanced'),
      description: t('training.advanced.desc'),
      icon: FileText,
      includes: isGerman
        ? ['Theorie und Praxis', 'Zertifikat']
        : ['Теория и практика', 'Сертификат'],
      showPricing: false,
    },
    {
      title: t('training.consulting'),
      description: t('training.consulting.desc'),
      icon: Users,
      includes: isGerman
        ? ['Rechtliche Grundlagen', 'Geschäftsformen', 'Preisgestaltung', 'Marketing-Tipps', 'Checklisten']
        : ['Правовые основы', 'Формы бизнеса', 'Ценообразование', 'Маркетинг-советы', 'Чеклисты'],
      showPricing: false,
    },
  ];

  return (
    <div className="relative min-h-screen">
      {/* Background Image */}
      <div className="fixed inset-0 z-0">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'url(/45.png)',
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
        <div className="text-center mb-16 animate-fade-in max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-heading font-semibold text-brand-espresso mb-6">
            {t('training.title')}
          </h1>
          <p className="text-xl text-brand-gold font-heading mb-4">
            {t('training.subtitle')}
          </p>
          <p className="text-lg text-brand-coffee/80 leading-relaxed">
            {isGerman
              ? 'Wir bieten professionelle Schulungen für angehende Beauty-Profis. Individuell oder in Mini-Gruppen, mit Zertifikat und lebenslanger Unterstützung.'
              : 'Мы предлагаем профессиональное обучение для начинающих бьюти-мастеров. Индивидуально или в мини-группах, с сертификатом и пожизненной поддержкой.'}
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
          {courses.map((course, index) => (
            <div 
              key={course.title}
              className="glass rounded-2xl p-8 hover-lift animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start mb-6">
                <div className="w-16 h-16 rounded-xl bg-brand-gold/10 flex items-center justify-center mr-4 flex-shrink-0">
                  <course.icon className="w-8 h-8 text-brand-gold" />
                </div>
                <div>
                  <h3 className="text-2xl font-heading font-semibold text-brand-espresso mb-2">
                    {course.title}
                  </h3>
                  <p className="text-brand-coffee/70 leading-relaxed">
                    {course.description}
                  </p>
                </div>
              </div>

              {course.showPricing && (
                <div className="flex items-center justify-between mb-6 pb-6 border-b border-brand-gold/10">
                  <div>
                    <p className="text-sm text-brand-coffee/60 mb-1">{isGerman ? 'Dauer' : 'Длительность'}</p>
                    <p className="text-brand-espresso font-semibold">{course.duration}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-brand-coffee/60 mb-1">{isGerman ? 'Preis' : 'Цена'}</p>
                    <p className="text-2xl font-heading font-semibold text-brand-gold">{course.price}</p>
                  </div>
                </div>
              )}

              <div className="space-y-3 mb-6">
                {course.includes.map((item, i) => (
                  <div key={i} className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-brand-gold mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-brand-coffee/70">{item}</span>
                  </div>
                ))}
              </div>

              <Button 
                className="w-full bg-brand-gold hover:bg-brand-gold/90 text-white font-medium rounded-xl"
              >
                {t('training.cta')}
              </Button>
            </div>
          ))}
        </div>

        {/* Why Choose Us */}
        <div className="glass rounded-3xl p-8 md:p-12 max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-heading font-semibold text-brand-espresso mb-6">
            {isGerman ? 'Warum bei uns lernen?' : 'Почему учиться у нас?'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="w-12 h-12 mx-auto rounded-full bg-brand-gold/10 flex items-center justify-center mb-3">
                <Award className="w-6 h-6 text-brand-gold" />
              </div>
              <h3 className="text-lg font-semibold text-brand-espresso mb-2">
                {isGerman ? 'Zertifiziert' : 'Сертификат'}
              </h3>
              <p className="text-brand-coffee/70 text-sm">
                {isGerman ? 'Offizielles Zertifikat nach Abschluss' : 'Официальный сертификат по окончании'}
              </p>
            </div>
            <div>
              <div className="w-12 h-12 mx-auto rounded-full bg-brand-gold/10 flex items-center justify-center mb-3">
                <Users className="w-6 h-6 text-brand-gold" />
              </div>
              <h3 className="text-lg font-semibold text-brand-espresso mb-2">
                {isGerman ? 'Kleine Gruppen' : 'Малые группы'}
              </h3>
              <p className="text-brand-coffee/70 text-sm">
                {isGerman ? 'Individuelle Betreuung garantiert' : 'Гарантированное индивидуальное внимание'}
              </p>
            </div>
            <div>
              <div className="w-12 h-12 mx-auto rounded-full bg-brand-gold/10 flex items-center justify-center mb-3">
                <GraduationCap className="w-6 h-6 text-brand-gold" />
              </div>
              <h3 className="text-lg font-semibold text-brand-espresso mb-2">
                {isGerman ? 'Support' : 'Поддержка'}
              </h3>
              <p className="text-brand-coffee/70 text-sm">
                {isGerman ? 'Lebenslange Unterstützung nach dem Kurs' : 'Пожизненная поддержка после курса'}
              </p>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Training;
