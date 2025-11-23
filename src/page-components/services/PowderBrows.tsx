'use client'

import { ServicePageLayout } from '@/components/ServicePageLayout';
import { Palette } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { PremiumGallery } from '@/components/PremiumGallery';

const PowderBrows = () => {
  const { language } = useLanguage();
  const isGerman = language === 'de';

  const galleryImages = ['/65.jpg', '/43.png'];

  const photoGallery = (
    <PremiumGallery images={galleryImages} />
  );

  return (
    <ServicePageLayout
      icon={Palette}
      title="Powder Brows"
      subtitle={isGerman
        ? "Pudertechnik für natürliche, perfekt definierte Augenbrauen"
        : "Пудровая техника для естественных, идеально очерченных бровей"}
      aboutTitle={isGerman ? "Was sind Powder Brows?" : "Что такое Powder Brows?"}
      aboutDescription={isGerman ? [
        'Powder Brows sind eine moderne Permanent Make-up Technik, die Ihren Augenbrauen einen soften, pudrigen Look verleiht – ähnlich wie mit Augenbrauenpuder geschminkt.',
        'Anders als bei der Microblading-Technik werden hier keine Härchen nachgezeichnet, sondern die Farbe wird in feinen Punkten eingebracht. Das Ergebnis ist ein natürlicher, weicher Verlauf mit mehr Intensität im hinteren Bereich der Braue.',
        'Powder Brows sind besonders langlebig und halten 1-3 Jahre. Sie eignen sich perfekt für alle Hauttypen, auch für ölige Haut.'
      ] : [
        'Powder Brows — это современная техника перманентного макияжа, которая придаёт бровям мягкий, пудровый вид — как будто подкрашенные тенями для бровей.',
        'В отличие от микроблейдинга, здесь не прорисовываются отдельные волоски, а цвет наносится мелкими точками. Результат — естественный, мягкий переход с большей интенсивностью в задней части брови.',
        'Powder Brows особенно долговечны и держатся 1-3 года. Они идеально подходят для всех типов кожи, в том числе для жирной.'
      ]}
      benefits={isGerman ? [
        'Natürlicher, weicher Puder-Effekt',
        'Langlebig: 1-3 Jahre haltbar',
        'Für alle Hauttypen geeignet (auch ölige Haut)',
        'Wasserfest und wischfest',
        'Kein tägliches Nachschminken nötig',
        'Individuell angepasste Form und Farbe',
        'Schonender als Microblading'
      ] : [
        'Естественный, мягкий пудровый эффект',
        'Долговечность: 1-3 года',
        'Подходит для всех типов кожи (включая жирную)',
        'Водостойкость и устойчивость к смазыванию',
        'Не нужно ежедневно подкрашивать',
        'Индивидуально подобранная форма и цвет',
        'Более щадящий метод, чем микроблейдинг'
      ]}
      steps={isGerman ? [
        {
          title: 'Beratung & Vermessung',
          description: 'Wir analysieren Ihre Gesichtsform und zeichnen die perfekte Augenbrauenform vor.'
        },
        {
          title: 'Farbauswahl',
          description: 'Gemeinsam wählen wir den perfekten Farbton für Ihren Hauttyp und Haarfarbe.'
        },
        {
          title: 'Pigmentierung',
          description: 'Präzises Einarbeiten der Farbe mit der Powder-Technik für einen weichen Verlauf.'
        },
        {
          title: 'Nachbehandlung',
          description: 'Nach 4-6 Wochen erfolgt die Nachbehandlung für ein perfektes, langanhaltendes Ergebnis.'
        }
      ] : [
        {
          title: 'Консультация и измерение',
          description: 'Мы анализируем форму вашего лица и предварительно рисуем идеальную форму бровей.'
        },
        {
          title: 'Подбор цвета',
          description: 'Вместе выбираем идеальный оттенок для вашего типа кожи и цвета волос.'
        },
        {
          title: 'Пигментация',
          description: 'Точное нанесение цвета с помощью пудровой техники для мягкого перехода.'
        },
        {
          title: 'Коррекция',
          description: 'Через 4-6 недель проводится коррекция для идеального, долговременного результата.'
        }
      ]}
      additionalSections={photoGallery}
      priceSection="pmu"
      contraindications={isGerman ? [
        'Schwangerschaft und Stillzeit',
        'Einnahme von Blutverdünnern',
        'Diabetes (nur mit ärztlicher Erlaubnis)',
        'Aktive Hauterkrankungen im Behandlungsbereich',
        'Chemotherapie oder Bestrahlung',
        'Keloidneigung'
      ] : [
        'Беременность и период кормления',
        'Приём препаратов, разжижающих кровь',
        'Диабет (только с разрешения врача)',
        'Активные кожные заболевания в зоне обработки',
        'Химиотерапия или облучение',
        'Склонность к образованию келоидных рубцов'
      ]}
      faq={isGerman ? [
        {
          q: 'Wie lange halten Powder Brows?',
          a: '1-3 Jahre, abhängig von Hauttyp, Lebensstil und Sonneneinstrahlung. Bei öliger Haut kann eine frühere Auffrischung nötig sein.'
        },
        {
          q: 'Ist die Behandlung schmerzhaft?',
          a: 'Die Behandlung ist mit einer betäubenden Creme nahezu schmerzfrei. Die meisten Kunden empfinden nur ein leichtes Kratzen.'
        },
        {
          q: 'Wie lange dauert die Heilung?',
          a: '7-10 Tage. In dieser Zeit können die Brauen etwas dunkler wirken und leicht schuppen. Danach erscheint die finale Farbe.'
        },
        {
          q: 'Warum brauche ich eine Nachbehandlung?',
          a: 'Die Nachbehandlung nach 4-6 Wochen perfektioniert das Ergebnis und sorgt für optimale Haltbarkeit.'
        }
      ] : [
        {
          q: 'Как долго держатся Powder Brows?',
          a: '1-3 года, в зависимости от типа кожи, образа жизни и воздействия солнца. При жирной коже может потребоваться более ранняя коррекция.'
        },
        {
          q: 'Болезненна ли процедура?',
          a: 'Процедура почти безболезненна благодаря анестезирующему крему. Большинство клиентов ощущают лишь лёгкое покалывание.'
        },
        {
          q: 'Как долго длится заживление?',
          a: '7-10 дней. В это время брови могут выглядеть немного темнее и слегка шелушиться. После этого проявится окончательный цвет.'
        },
        {
          q: 'Зачем нужна коррекция?',
          a: 'Коррекция через 4-6 недель совершенствует результат и обеспечивает оптимальную стойкость.'
        }
      ]}
      ctaTitle={isGerman ? "Bereit für perfekte Augenbrauen?" : "Готовы к идеальным бровям?"}
      ctaDescription={isGerman
        ? "Buchen Sie jetzt Ihre Powder Brows Behandlung oder vereinbaren Sie einen kostenlosen Beratungstermin."
        : "Запишитесь на процедуру Powder Brows или договоритесь о бесплатной консультации."}
    />
  );
};

export default PowderBrows;
