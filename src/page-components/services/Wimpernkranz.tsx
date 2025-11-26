'use client'

import { ServicePageLayout } from '@/components/ServicePageLayout';
import { Eye, Palette, Heart, Sparkles } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { PremiumGallery } from '@/components/PremiumGallery';
import { ServiceCard } from '@/components/ServiceCard';

const Wimpernkranz = () => {
  const { language } = useLanguage();
  const isGerman = language === 'de';

  const galleryImages = ['/56.jpg', '/68.jpg', '/69.jpg', '/114.jpg', '/150.jpeg', '/143.jpeg'];

  const photoGallery = (
    <PremiumGallery images={galleryImages} />
  );

  // Recommended PMU and lash services
  const RecommendedServices = () => (
    <div className="mt-12">
      <h2 className="text-2xl md:text-3xl font-heading font-semibold text-brand-espresso mb-6 text-center">
        {isGerman ? 'Weitere Behandlungen' : 'Другие процедуры'}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <ServiceCard
          title="Powder Brows"
          description={isGerman ? 'Pudertechnik für perfekte Augenbrauen' : 'Пудровая техника для идеальных бровей'}
          icon={Palette}
          href="/services/powder-brows"
          image="/147.jpeg"
        />
        <ServiceCard
          title="Aquarell Lips"
          description={isGerman ? 'Natürliche Lippenpigmentierung' : 'Естественная пигментация губ'}
          icon={Heart}
          href="/services/aquarell-lips"
          image="/52.jpg"
        />
        <ServiceCard
          title={isGerman ? 'Wimpernverlängerung' : 'Наращивание ресниц'}
          description={isGerman ? 'Klassisch oder Volumentechnik' : 'Классика или объём'}
          icon={Sparkles}
          href="/services/wimpernverlaengerung"
          image="/8.jpeg"
        />
      </div>
    </div>
  );

  return (
    <ServicePageLayout
      icon={Eye}
      title={isGerman ? "Wimpernkranz (Eyeliner PMU)" : "Межресничка (Eyeliner PMU)"}
      subtitle={isGerman
        ? "Permanent Make-up Wimpernkranzverdichtung – klassisch oder intensiv"
        : "Перманентный макияж межресничного пространства – классический или интенсивный"}
      aboutTitle={isGerman ? "Was ist ein Wimpernkranz?" : "Что такое межресничка?"}
      aboutDescription={isGerman ? [
        'Der Wimpernkranz (auch Lid-Strich oder Eyeliner PMU genannt) ist eine Permanent Make-up Behandlung, bei der Pigmente direkt am Wimpernkranz eingearbeitet werden.',
        'Das Ergebnis ist eine optisch dichtere Wimpernlinie, die Ihre Augen ausdrucksstärker wirken lässt – ganz ohne tägliches Eyeliner auftragen.',
        'Sie haben die Wahl zwischen einem dezenten Wimpernkranz (nur zwischen den Wimpern) oder einem intensiveren Lid-Strich mit sichtbarer Linie. Perfekt für alle, die sich ein dauerhaft definiertes Auge wünschen.'
      ] : [
        'Межресничка (также называемая татуаж века или Eyeliner PMU) – это процедура перманентного макияжа, при которой пигменты вводятся непосредственно в межресничное пространство.',
        'Результат – визуально более густая линия ресниц, которая делает ваши глаза более выразительными – без ежедневного нанесения подводки.',
        'Вы можете выбрать между деликатной межресничкой (только между ресницами) или более интенсивной стрелкой с видимой линией. Идеально для тех, кто хочет постоянно выразительный взгляд.'
      ]}
      benefits={isGerman ? [
        'Optisch dichtere, vollere Wimpern',
        'Ausdrucksstarke Augen ohne Make-up',
        'Kein tägliches Eyeliner ziehen mehr',
        'Wasserfest und wischfest',
        'Spart Zeit beim Schminken',
        'Perfekt symmetrische Linie',
        'Langlebig: 2-4 Jahre haltbar',
        'Individuell anpassbar (dezent bis intensiv)'
      ] : [
        'Визуально более густые, объёмные ресницы',
        'Выразительные глаза без макияжа',
        'Больше не нужно рисовать подводку каждый день',
        'Водостойкий и стойкий к смазыванию',
        'Экономит время на макияж',
        'Идеально симметричная линия',
        'Долговечность: 2-4 года',
        'Индивидуальная настройка (от деликатной до интенсивной)'
      ]}
      steps={isGerman ? [
        {
          title: 'Beratung & Vorzeichnung',
          description: 'Wir besprechen Ihre Wünsche: dezenter Wimpernkranz oder sichtbarer Lid-Strich.'
        },
        {
          title: 'Farbauswahl',
          description: 'Auswahl der passenden Farbe (meist Schwarz oder Dunkelbraun).'
        },
        {
          title: 'Pigmentierung',
          description: 'Präzises Einarbeiten der Pigmente am Wimpernkranz oder als Lid-Strich.'
        },
        {
          title: 'Nachbehandlung',
          description: 'Nach 4-6 Wochen erfolgt die Nachbehandlung für optimale Deckkraft.'
        }
      ] : [
        {
          title: 'Консультация и эскиз',
          description: 'Обсуждаем ваши пожелания: деликатная межресничка или видимая стрелка.'
        },
        {
          title: 'Выбор цвета',
          description: 'Подбор подходящего цвета (обычно чёрный или тёмно-коричневый).'
        },
        {
          title: 'Пигментация',
          description: 'Точное введение пигментов в межресничное пространство или в виде стрелки.'
        },
        {
          title: 'Коррекция',
          description: 'Через 4-6 недель проводится коррекция для оптимальной насыщенности.'
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
        'Aktive Augeninfektionen',
        'Sehr empfindliche oder trockene Augen',
        'Einnahme von Blutverdünnern',
        'Chemotherapie oder Bestrahlung',
        'Neigung zu Keloiden'
      ] : [
        'Беременность и период лактации',
        'Активные инфекции глаз',
        'Очень чувствительные или сухие глаза',
        'Приём препаратов, разжижающих кровь',
        'Химиотерапия или облучение',
        'Склонность к келоидным рубцам'
      ]}
      faq={isGerman ? [
        {
          q: 'Wie lange hält der Wimpernkranz?',
          a: '2-4 Jahre, abhängig von Hauttyp und Lebensstil. Eine Auffrischung ist nach 2-3 Jahren empfohlen.'
        },
        {
          q: 'Ist die Behandlung schmerzhaft?',
          a: 'Mit betäubender Creme ist die Behandlung gut erträglich. Die Augen können leicht tränen, was völlig normal ist.'
        },
        {
          q: 'Was ist der Unterschied zwischen Wimpernkranz und Lid-Strich?',
          a: 'Der Wimpernkranz ist dezent und nur zwischen den Wimpern sichtbar. Der Lid-Strich ist eine sichtbare Linie wie Eyeliner.'
        },
        {
          q: 'Kann ich mit Kontaktlinsen zur Behandlung kommen?',
          a: 'Nein, bitte kommen Sie ohne Kontaktlinsen. Bringen Sie ggf. Ihre Brille mit.'
        }
      ] : [
        {
          q: 'Как долго держится межресничка?',
          a: '2-4 года, в зависимости от типа кожи и образа жизни. Обновление рекомендуется через 2-3 года.'
        },
        {
          q: 'Больно ли делать процедуру?',
          a: 'С анестезирующим кремом процедура хорошо переносится. Глаза могут немного слезиться, что совершенно нормально.'
        },
        {
          q: 'В чём разница между межресничкой и стрелкой?',
          a: 'Межресничка деликатная и видна только между ресницами. Стрелка – это видимая линия как подводка.'
        },
        {
          q: 'Можно ли прийти на процедуру в контактных линзах?',
          a: 'Нет, пожалуйста, приходите без контактных линз. При необходимости возьмите с собой очки.'
        }
      ]}
      ctaTitle={isGerman ? "Bereit für ausdrucksstarke Augen?" : "Готовы к выразительному взгляду?"}
      ctaDescription={isGerman
        ? "Buchen Sie jetzt Ihren Wimpernkranz Termin oder lassen Sie sich kostenlos beraten."
        : "Запишитесь на процедуру межреснички или получите бесплатную консультацию."}
    />
  );
};

export default Wimpernkranz;
