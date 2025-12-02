'use client'

import { ServicePageLayout } from '@/components/ServicePageLayout';
import { Heart, Palette, Eye, Sparkles } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { PremiumGallery } from '@/components/PremiumGallery';
import { ServiceCard } from '@/components/ServiceCard';

const AquarellLips = () => {
  const { language } = useLanguage();
  const isGerman = language === 'de';

  const galleryImages = [
    '/1.webm',
    '/52.jpg',
    '/53.jpg',
    '/54.jpg',
    '/55.jpg',
    '/93.jpg',
    '/96.jpg',
  ];

  const photoGallery = (
    <PremiumGallery images={galleryImages} />
  );

  // Recommended PMU services
  const RecommendedServices = () => (
    <div className="mt-12">
      <h2 className="text-2xl md:text-3xl font-heading font-semibold text-brand-espresso mb-6 text-center">
        {isGerman ? 'Weitere PMU Behandlungen' : 'Другие PMU процедуры'}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <ServiceCard
          title="Powder Brows"
          description={isGerman ? 'Pudertechnik für perfekte Augenbrauen' : 'Пудровая техника для идеальных бровей'}
          icon={Palette}
          href="/services/powder-brows"
          image="/65.jpg"
        />
        <ServiceCard
          title={isGerman ? 'Wimpernkranz' : 'Межресничка'}
          description={isGerman ? 'Permanent Make-up Wimpernkranz' : 'Перманентный макияж межресничного пространства'}
          icon={Eye}
          href="/services/wimpernkranz"
          image="/114.jpg"
        />
        <ServiceCard
          title={isGerman ? 'Wimpernverlängerung' : 'Наращивание ресниц'}
          description={isGerman ? 'Klassisch oder Volumentechnik' : 'Классика или объём'}
          icon={Sparkles}
          href="/services/wimpernverlaengerung"
          image="/43.png"
        />
      </div>
    </div>
  );

  return (
    <ServicePageLayout
      icon={Heart}
      title={isGerman ? "Aquarell Lips" : "Акварельные губы"}
      subtitle={isGerman
        ? "Natürliche Lippenpigmentierung mit Aquarell & Velvet Techniken"
        : "Естественная пигментация губ в техниках Aquarell и Velvet"}
      aboutTitle={isGerman ? "Was sind Aquarell Lips?" : "Что такое Aquarell Lips?"}
      aboutDescription={isGerman ? [
        'Aquarell Lips ist eine sanfte Permanent Make-up Technik für die Lippen, die einen natürlichen, zarten Farbton verleiht – wie ein Hauch von Farbe, der Ihre natürliche Lippenfarbe betont.',
        'Die Aquarell-Technik erzeugt einen weichen, transparenten Effekt, während die Velvet-Technik für etwas mehr Deckkraft sorgt. Beide Techniken verleihen Ihren Lippen eine schöne Definition und optisch mehr Volumen.',
        'Das Ergebnis ist absolut natürlich, hält 1-3 Jahre und spart Ihnen das tägliche Nachziehen der Lippen.'
      ] : [
        'Aquarell Lips — это мягкая техника перманентного макияжа губ, которая придаёт естественный, нежный оттенок — как лёгкий намёк цвета, подчёркивающий вашу натуральную окраску губ.',
        'Техника Aquarell создаёт мягкий, прозрачный эффект, тогда как техника Velvet обеспечивает большую насыщенность. Обе техники придают губам красивую чёткость и визуально больший объём.',
        'Результат абсолютно естественный, держится 1-3 года и избавляет от необходимости ежедневно подкрашивать губы.'
      ]}
      benefits={isGerman ? [
        'Natürlicher, zarter Farbton',
        'Optisch vollere, definierte Lippen',
        'Korrektur von Asymmetrien',
        'Langlebig: 1-3 Jahre haltbar',
        'Kein Lippenstift mehr nötig',
        'Wasserfest und wischfest',
        'Perfekt für jeden Alltag',
        'Kaschiert blasse oder ungleichmäßige Lippenfarbe'
      ] : [
        'Естественный, нежный оттенок',
        'Визуально более полные, очерченные губы',
        'Коррекция асимметрии',
        'Долговечность: 1-3 года',
        'Не нужна помада',
        'Водостойкость и устойчивость к смазыванию',
        'Идеально для повседневной жизни',
        'Скрывает бледный или неровный цвет губ'
      ]}
      steps={isGerman ? [
        {
          title: 'Beratung & Formgebung',
          description: 'Wir analysieren Ihre Lippenform und zeichnen die gewünschte Kontur vor.'
        },
        {
          title: 'Farbauswahl',
          description: 'Gemeinsam wählen wir den perfekten Farbton für einen natürlichen Look.'
        },
        {
          title: 'Pigmentierung',
          description: 'Sanftes Einarbeiten der Farbe mit Aquarell- oder Velvet-Technik.'
        },
        {
          title: 'Nachbehandlung',
          description: 'Nach 4-6 Wochen perfektionieren wir das Ergebnis für optimale Haltbarkeit.'
        }
      ] : [
        {
          title: 'Консультация и формирование',
          description: 'Мы анализируем форму ваших губ и предварительно рисуем желаемый контур.'
        },
        {
          title: 'Подбор цвета',
          description: 'Вместе выбираем идеальный оттенок для естественного образа.'
        },
        {
          title: 'Пигментация',
          description: 'Мягкое нанесение цвета в технике Aquarell или Velvet.'
        },
        {
          title: 'Коррекция',
          description: 'Через 4-6 недель совершенствуем результат для оптимальной стойкости.'
        }
      ]}
      additionalSections={
        <>
          {photoGallery}
          <RecommendedServices />
        </>
      }
      priceSection="pmu"
      contraindications={isGerman ? [
        'Schwangerschaft und Stillzeit',
        'Aktiver Herpes (mind. 2 Wochen vorher behandeln)',
        'Einnahme von Blutverdünnern',
        'Lippenfillerbehandlung (mind. 4 Wochen Abstand)',
        'Diabetes (nur mit ärztlicher Erlaubnis)',
        'Chemotherapie oder Bestrahlung'
      ] : [
        'Беременность и период кормления',
        'Активный герпес (лечить минимум за 2 недели)',
        'Приём препаратов, разжижающих кровь',
        'Процедуры филлера губ (минимум 4 недели перерыва)',
        'Диабет (только с разрешения врача)',
        'Химиотерапия или облучение'
      ]}
      faq={isGerman ? [
        {
          q: 'Wie lange halten Aquarell Lips?',
          a: '1-3 Jahre, abhängig von Hauttyp und Lebensstil. Die Lippenfarbe verblasst sanft und natürlich.'
        },
        {
          q: 'Ist die Behandlung schmerzhaft?',
          a: 'Mit betäubender Creme ist die Behandlung gut erträglich. Die Lippen können etwas empfindlicher sein als andere Bereiche.'
        },
        {
          q: 'Was ist der Unterschied zwischen Aquarell und Velvet?',
          a: 'Aquarell ist transparenter und natürlicher, Velvet bietet mehr Deckkraft und intensivere Farbe – ähnlich wie ein matter Lippenstift.'
        },
        {
          q: 'Was muss ich bei Herpes beachten?',
          a: 'Bei Neigung zu Lippenherpes empfehlen wir eine prophylaktische Einnahme von Aciclovir 3 Tage vor bis 5 Tage nach der Behandlung.'
        }
      ] : [
        {
          q: 'Как долго держатся Aquarell Lips?',
          a: '1-3 года, в зависимости от типа кожи и образа жизни. Цвет губ выцветает мягко и естественно.'
        },
        {
          q: 'Болезненна ли процедура?',
          a: 'С анестезирующим кремом процедура хорошо переносится. Губы могут быть немного более чувствительными, чем другие зоны.'
        },
        {
          q: 'В чём разница между Aquarell и Velvet?',
          a: 'Aquarell более прозрачный и естественный, Velvet обеспечивает большую насыщенность и интенсивный цвет — похоже на матовую помаду.'
        },
        {
          q: 'Что нужно учитывать при герпесе?',
          a: 'При склонности к герпесу на губах рекомендуем профилактический приём Ацикловира за 3 дня до и 5 дней после процедуры.'
        }
      ]}
      ctaTitle={isGerman ? "Bereit für natürlich schöne Lippen?" : "Готовы к естественно красивым губам?"}
      ctaDescription={isGerman
        ? "Buchen Sie jetzt Ihre Aquarell Lips Behandlung oder vereinbaren Sie eine kostenlose Beratung."
        : "Запишитесь на процедуру Aquarell Lips или договоритесь о бесплатной консультации."}
    />
  );
};

export default AquarellLips;
