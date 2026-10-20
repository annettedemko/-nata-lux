'use client'

import { ServicePageLayout } from '@/components/ServicePageLayout';
import { Zap } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const DiodenLaser = () => {
  const { language } = useLanguage();

  return (
    <ServicePageLayout
      icon={Zap}
      title={language === 'de' ? "Dioden Laser Haarentfernung" : language === 'ru' ? "Диодный лазер для удаления волос" : "Діодний лазер для видалення волосся"}
      subtitle={language === 'de'
        ? "Für alle Hauttypen geeignet – Schonend, effektiv und dauerhaft"
        : language === 'ru' ? "Подходит для всех типов кожи – Щадящий, эффективный и постоянный"
        : "Підходить для всіх типів шкіри – Щадний, ефективний та постійний"}
      aboutTitle={language === 'de' ? "Was ist der Dioden Laser?" : language === 'ru' ? "Что такое диодный лазер?" : "Що таке діодний лазер?"}
      aboutDescription={language === 'de' ? [
        'Der Dioden Laser ist eine vielseitige Laser-Technologie zur dauerhaften Haarentfernung, die für ALLE Hauttypen geeignet ist – von sehr hell bis dunkel (Hauttyp I-VI nach Fitzpatrick).',
        'Mit einer Wellenlänge von 808 nm dringt der Dioden Laser tiefer in die Haut ein als andere Laser und ist dadurch besonders effektiv bei dickeren, stärkeren Haaren. Gleichzeitig ist er schonend zur Haut und verursacht kaum Schmerzen.',
        'Dank moderner Kühlsysteme ist die Behandlung angenehm und sicher. Der Dioden Laser ist die erste Wahl für dunkle Hauttöne, empfindliche Bereiche und alle, die Wert auf Komfort legen.'
      ] : language === 'ru' ? [
        'Диодный лазер — это универсальная лазерная технология для перманентного удаления волос, подходящая для ВСЕХ типов кожи — от очень светлой до тёмной (фототип I-VI по Фитцпатрику).',
        'С длиной волны 808 нм диодный лазер проникает в кожу глубже других лазеров, что делает его особенно эффективным при толстых, жёстких волосах. При этом он щадящий для кожи и практически безболезненный.',
        'Благодаря современным системам охлаждения процедура комфортна и безопасна. Диодный лазер — лучший выбор для тёмных оттенков кожи, чувствительных зон и тех, кто ценит комфорт.'
      ] : [
        'Діодний лазер — це універсальна лазерна технологія для перманентного видалення волосся, що підходить для ВСІХ типів шкіри — від дуже світлої до темної (фототип I-VI за Фіцпатріком).',
        'З довжиною хвилі 808 нм діодний лазер проникає у шкіру глибше за інші лазери, що робить його особливо ефективним при товстому, жорсткому волоссі. При цьому він щадний для шкіри та практично безболісний.',
        'Завдяки сучасним системам охолодження процедура комфортна та безпечна. Діодний лазер — найкращий вибір для темних відтінків шкіри, чутливих зон та тих, хто цінує комфорт.'
      ]}
      benefits={language === 'de' ? [
        'Für ALLE Hauttypen geeignet (auch dunkle Haut)',
        'Besonders effektiv bei dicken, starken Haaren',
        'Schonend und nahezu schmerzfrei',
        'Schnelle Behandlung großer Flächen',
        'Dauerhafte Haarentfernung',
        'Sicher auch für empfindliche Bereiche',
        'Modernste Kühltechnologie',
        'Klinisch getestet und FDA-zugelassen',
        'Weniger Nebenwirkungen als andere Methoden'
      ] : language === 'ru' ? [
        'Подходит для ВСЕХ типов кожи (включая тёмную)',
        'Особенно эффективен при толстых, жёстких волосах',
        'Щадящий и практически безболезненный',
        'Быстрая обработка больших зон',
        'Перманентное удаление волос',
        'Безопасен для чувствительных зон',
        'Современнейшая технология охлаждения',
        'Клинически протестирован и одобрен FDA',
        'Меньше побочных эффектов, чем у других методов'
      ] : [
        'Підходить для ВСІХ типів шкіри (включаючи темну)',
        'Особливо ефективний при товстому, жорсткому волоссі',
        'Щадний та практично безболісний',
        'Швидка обробка великих зон',
        'Перманентне видалення волосся',
        'Безпечний для чутливих зон',
        'Найсучасніша технологія охолодження',
        'Клінічно протестований та схвалений FDA',
        'Менше побічних ефектів, ніж у інших методів'
      ]}
      steps={language === 'de' ? [
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
      ] : language === 'ru' ? [
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
      ] : [
        {
          title: 'Безкоштовна консультація',
          description: 'Визначення типу шкіри та індивідуальний план процедур.'
        },
        {
          title: 'Підготовка',
          description: 'Гоління та дезінфекція зони обробки. Нанесення охолоджуючого гелю.'
        },
        {
          title: 'Лазерна процедура',
          description: 'Цілеспрямовані лазерні імпульси назавжди руйнують корені волосся. Вбудоване охолодження забезпечує комфорт.'
        },
        {
          title: 'Догляд після процедури',
          description: 'Заспокійливий догляд та рекомендації на найближчі дні.'
        }
      ]}
      priceSection="laser"
      contraindications={language === 'de' ? [
        'Schwangerschaft und Stillzeit',
        'Aktive Hautinfektionen oder Herpes',
        'Einnahme von photosensibilisierenden Medikamenten',
        'Frische Tätowierungen im Behandlungsbereich',
        'Sehr helle oder graue Haare',
        'Aktive Bräune (2 Wochen Abstand zu Sonne/Solarium)'
      ] : language === 'ru' ? [
        'Беременность и период кормления',
        'Активные кожные инфекции или герпес',
        'Приём фотосенсибилизирующих препаратов',
        'Свежие татуировки в зоне обработки',
        'Очень светлые или седые волосы',
        'Активный загар (перерыв 2 недели после солнца/солярия)'
      ] : [
        'Вагітність та період годування',
        'Активні шкірні інфекції або герпес',
        'Прийом фотосенсибілізуючих препаратів',
        'Свіжі татуювання у зоні обробки',
        'Дуже світле або сиве волосся',
        'Активна засмага (перерва 2 тижні після сонця/солярію)'
      ]}
      faq={language === 'de' ? [
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
      ] : language === 'ru' ? [
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
      ] : [
        {
          q: 'Скільки сеансів мені потрібно?',
          a: '6-10 сеансів з інтервалом 4-8 тижнів. При товстому волоссі або гормонально обумовленому рості волосся може знадобитися більше сеансів.'
        },
        {
          q: 'Чи підходить діодний лазер для темної шкіри?',
          a: 'Так! Діодний лазер — найбезпечніший варіант для темних відтінків шкіри (фототип V-VI), оскільки він проникає глибше та щадить поверхню шкіри.'
        },
        {
          q: 'Чи болісна процедура?',
          a: 'Процедура дуже добре переноситься завдяки сучасному охолодженню. Більшість клієнтів відчувають лише легке тепло.'
        },
        {
          q: 'У чому різниця з олександритовим лазером?',
          a: 'Діодний лазер більш універсальний та підходить для всіх типів шкіри, тоді як олександритовий лазер оптимізований для світлої шкіри.'
        },
        {
          q: 'Як підготуватися до процедури?',
          a: 'Поголіть зону в день процедури. За 4 тижні уникайте сонця, солярію та автозасмаги. Не робіть ваксинг або епіляцію!'
        }
      ]}
      ctaTitle={language === 'de' ? "Bereit für dauerhaft glatte Haut?" : language === 'ru' ? "Готовы к гладкой коже навсегда?" : "Готові до гладкої шкіри назавжди?"}
      ctaDescription={language === 'de'
        ? "Buchen Sie jetzt Ihre kostenlose Beratung und profitieren Sie von modernster Laser-Technologie."
        : language === 'ru' ? "Запишитесь на бесплатную консультацию и воспользуйтесь преимуществами современнейшей лазерной технологии."
        : "Запишіться на безкоштовну консультацію та скористайтеся перевагами найсучаснішої лазерної технології."}
    />
  );
};

export default DiodenLaser;
