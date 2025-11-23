'use client'

import { ServicePageLayout } from '@/components/ServicePageLayout';
import { Zap } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const DiodenLaser = () => {
  const { language } = useLanguage();
  const isGerman = language === 'de';

  return (
    <ServicePageLayout
      icon={Zap}
      title={isGerman ? "Dioden Laser Haarentfernung" : "Диодный лазер для удаления волос"}
      subtitle={isGerman
        ? "Für alle Hauttypen geeignet – Schonend, effektiv und dauerhaft"
        : "Подходит для всех типов кожи – Щадящий, эффективный и постоянный"}
      aboutTitle={isGerman ? "Was ist der Dioden Laser?" : "Что такое диодный лазер?"}
      aboutDescription={isGerman ? [
        'Der Dioden Laser ist eine vielseitige Laser-Technologie zur dauerhaften Haarentfernung, die für ALLE Hauttypen geeignet ist – von sehr hell bis dunkel (Hauttyp I-VI nach Fitzpatrick).',
        'Mit einer Wellenlänge von 808 nm dringt der Dioden Laser tiefer in die Haut ein als andere Laser und ist dadurch besonders effektiv bei dickeren, stärkeren Haaren. Gleichzeitig ist er schonend zur Haut und verursacht kaum Schmerzen.',
        'Dank moderner Kühlsysteme ist die Behandlung angenehm und sicher. Der Dioden Laser ist die erste Wahl für dunkle Hauttöne, empfindliche Bereiche und alle, die Wert auf Komfort legen.'
      ] : [
        'Диодный лазер — это универсальная лазерная технология для перманентного удаления волос, подходящая для ВСЕХ типов кожи — от очень светлой до тёмной (фототип I-VI по Фитцпатрику).',
        'С длиной волны 808 нм диодный лазер проникает в кожу глубже других лазеров, что делает его особенно эффективным при толстых, жёстких волосах. При этом он щадящий для кожи и практически безболезненный.',
        'Благодаря современным системам охлаждения процедура комфортна и безопасна. Диодный лазер — лучший выбор для тёмных оттенков кожи, чувствительных зон и тех, кто ценит комфорт.'
      ]}
      benefits={isGerman ? [
        'Für ALLE Hauttypen geeignet (auch dunkle Haut)',
        'Besonders effektiv bei dicken, starken Haaren',
        'Schonend und nahezu schmerzfrei',
        'Schnelle Behandlung großer Flächen',
        'Dauerhafte Haarentfernung',
        'Sicher auch für empfindliche Bereiche',
        'Modernste Kühltechnologie',
        'Klinisch getestet und FDA-zugelassen',
        'Weniger Nebenwirkungen als andere Methoden'
      ] : [
        'Подходит для ВСЕХ типов кожи (включая тёмную)',
        'Особенно эффективен при толстых, жёстких волосах',
        'Щадящий и практически безболезненный',
        'Быстрая обработка больших зон',
        'Перманентное удаление волос',
        'Безопасен для чувствительных зон',
        'Современнейшая технология охлаждения',
        'Клинически протестирован и одобрен FDA',
        'Меньше побочных эффектов, чем у других методов'
      ]}
      steps={isGerman ? [
        {
          title: 'Kostenlose Beratung',
          description: 'Hauttyp-Bestimmung und individueller Behandlungsplan.'
        },
        {
          title: 'Vorbereitung',
          description: 'Rasur und Desinfektion der Behandlungszone. Auftragen von Kühlgel.'
        },
        {
          title: 'Laser-Behandlung',
          description: 'Gezielte Laserimpulse zerstören die Haarwurzeln dauerhaft. Integrierte Kühlung sorgt für Komfort.'
        },
        {
          title: 'Nachpflege',
          description: 'Beruhigende Pflege und Empfehlungen für die nächsten Tage.'
        }
      ] : [
        {
          title: 'Бесплатная консультация',
          description: 'Определение типа кожи и индивидуальный план процедур.'
        },
        {
          title: 'Подготовка',
          description: 'Бритьё и дезинфекция зоны обработки. Нанесение охлаждающего геля.'
        },
        {
          title: 'Лазерная процедура',
          description: 'Целенаправленные лазерные импульсы навсегда разрушают корни волос. Встроенное охлаждение обеспечивает комфорт.'
        },
        {
          title: 'Уход после процедуры',
          description: 'Успокаивающий уход и рекомендации на ближайшие дни.'
        }
      ]}
      priceSection="laser"
      contraindications={isGerman ? [
        'Schwangerschaft und Stillzeit',
        'Aktive Hautinfektionen oder Herpes',
        'Einnahme von photosensibilisierenden Medikamenten',
        'Frische Tätowierungen im Behandlungsbereich',
        'Sehr helle oder graue Haare',
        'Aktive Bräune (2 Wochen Abstand zu Sonne/Solarium)'
      ] : [
        'Беременность и период кормления',
        'Активные кожные инфекции или герпес',
        'Приём фотосенсибилизирующих препаратов',
        'Свежие татуировки в зоне обработки',
        'Очень светлые или седые волосы',
        'Активный загар (перерыв 2 недели после солнца/солярия)'
      ]}
      faq={isGerman ? [
        {
          q: 'Wie viele Sitzungen brauche ich?',
          a: '6-10 Sitzungen im Abstand von 4-8 Wochen. Bei dickeren Haaren oder hormonell bedingtem Haarwuchs können mehr Sitzungen nötig sein.'
        },
        {
          q: 'Ist der Dioden Laser auch für dunkle Haut geeignet?',
          a: 'Ja! Der Dioden Laser ist die sicherste Option für dunkle Hauttöne (Hauttyp V-VI), da er tiefer eindringt und die Hautoberfläche schont.'
        },
        {
          q: 'Tut die Behandlung weh?',
          a: 'Die Behandlung ist mit moderner Kühlung sehr gut erträglich. Die meisten Kunden empfinden nur ein leichtes Wärmegefühl.'
        },
        {
          q: 'Was ist der Unterschied zum Alexandrit Laser?',
          a: 'Der Dioden Laser ist vielseitiger und für alle Hauttypen geeignet, während der Alexandrit Laser speziell für helle Haut optimiert ist.'
        },
        {
          q: 'Wie bereite ich mich auf die Behandlung vor?',
          a: 'Rasieren Sie die Zone am Tag der Behandlung. Vermeiden Sie 4 Wochen vorher Sonne, Solarium und Selbstbräuner. Nicht waxen oder epilieren!'
        }
      ] : [
        {
          q: 'Сколько сеансов мне нужно?',
          a: '6-10 сеансов с интервалом 4-8 недель. При толстых волосах или гормонально обусловленном росте волос может потребоваться больше сеансов.'
        },
        {
          q: 'Подходит ли диодный лазер для тёмной кожи?',
          a: 'Да! Диодный лазер — самый безопасный вариант для тёмных оттенков кожи (фототип V-VI), так как он проникает глубже и щадит поверхность кожи.'
        },
        {
          q: 'Болезненна ли процедура?',
          a: 'Процедура очень хорошо переносится благодаря современному охлаждению. Большинство клиентов ощущают лишь лёгкое тепло.'
        },
        {
          q: 'В чём разница с александритовым лазером?',
          a: 'Диодный лазер более универсален и подходит для всех типов кожи, тогда как александритовый лазер оптимизирован для светлой кожи.'
        },
        {
          q: 'Как подготовиться к процедуре?',
          a: 'Побрейте зону в день процедуры. За 4 недели избегайте солнца, солярия и автозагара. Не делайте ваксинг или эпиляцию!'
        }
      ]}
      ctaTitle={isGerman ? "Bereit für dauerhaft glatte Haut?" : "Готовы к гладкой коже навсегда?"}
      ctaDescription={isGerman
        ? "Buchen Sie jetzt Ihre kostenlose Beratung und profitieren Sie von modernster Laser-Technologie."
        : "Запишитесь на бесплатную консультацию и воспользуйтесь преимуществами современнейшей лазерной технологии."}
    />
  );
};

export default DiodenLaser;
