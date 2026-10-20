'use client'

import { ServicePageLayout } from '@/components/ServicePageLayout';
import { Zap } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const AlexandritLaser = () => {
  const { language } = useLanguage();

  return (
    <ServicePageLayout
      icon={Zap}
      title={language === 'de' ? "Alexandrit Laser Haarentfernung" : language === 'ru' ? "Александритовый лазер для удаления волос" : "Олександритовий лазер для видалення волосся"}
      subtitle={language === 'de'
        ? "Ideal für helle Haut und dunkles Haar – Schnell, effektiv und dauerhaft"
        : language === 'ru' ? "Идеален для светлой кожи и тёмных волос – Быстро, эффективно и навсегда"
        : "Ідеальний для світлої шкіри та темного волосся – Швидко, ефективно та назавжди"}
      aboutTitle={language === 'de' ? "Was ist der Alexandrit Laser?" : language === 'ru' ? "Что такое александритовый лазер?" : "Що таке олександритовий лазер?"}
      aboutDescription={language === 'de' ? [
        'Der Alexandrit Laser ist der Goldstandard für dauerhafte Haarentfernung bei hellen bis mittleren Hauttönen. Mit einer Wellenlänge von 755 nm zielt er präzise auf das Melanin im Haarfollikel ab und zerstört diesen nachhaltig.',
        'Diese Technologie ist besonders effektiv bei dunklen Haaren auf heller Haut (Hauttyp I-IV nach Fitzpatrick). Die Behandlung ist schnell, nahezu schmerzfrei dank integriertem Kühlsystem und liefert langanhaltende Ergebnisse.',
        'Im Vergleich zu anderen Lasern ist der Alexandrit Laser durch seine kurze Wellenlänge besonders präzise und erzielt bereits nach wenigen Sitzungen sichtbare Ergebnisse.'
      ] : language === 'ru' ? [
        'Александритовый лазер — золотой стандарт перманентного удаления волос для светлых и средних оттенков кожи. С длиной волны 755 нм он точно воздействует на меланин в волосяном фолликуле и навсегда разрушает его.',
        'Эта технология особенно эффективна при тёмных волосах на светлой коже (фототип I-IV по Фитцпатрику). Процедура быстрая, практически безболезненная благодаря встроенной системе охлаждения и даёт долговременные результаты.',
        'По сравнению с другими лазерами александритовый лазер особенно точен благодаря короткой длине волны и даёт видимые результаты уже после нескольких сеансов.'
      ] : [
        'Олександритовий лазер — золотий стандарт перманентного видалення волосся для світлих та середніх відтінків шкіри. З довжиною хвилі 755 нм він точно впливає на меланін у волосяному фолікулі та назавжди руйнує його.',
        'Ця технологія особливо ефективна при темному волоссі на світлій шкірі (фототип I-IV за Фіцпатріком). Процедура швидка, практично безболісна завдяки вбудованій системі охолодження та дає довготривалі результати.',
        'Порівняно з іншими лазерами олександритовий лазер особливо точний завдяки короткій довжині хвилі та дає видимі результати вже після кількох сеансів.'
      ]}
      benefits={language === 'de' ? [
        'Dauerhafte Haarentfernung – für immer glatte Haut',
        'Besonders effektiv bei dunklen Haaren',
        'Schnelle Behandlung großer Flächen',
        'Integrierte Kühlung für mehr Komfort',
        'Deutlich weniger schmerzhaft als Waxing',
        'Sichtbare Ergebnisse nach 1-2 Sitzungen',
        'Kein Einwachsen der Haare mehr',
        'Sehr präzise und effektiv',
        'FDA-zugelassen und sicher'
      ] : language === 'ru' ? [
        'Перманентное удаление волос – гладкая кожа навсегда',
        'Особенно эффективен при тёмных волосах',
        'Быстрая обработка больших зон',
        'Встроенное охлаждение для комфорта',
        'Значительно менее болезненно, чем ваксинг',
        'Видимые результаты после 1-2 сеансов',
        'Больше никаких вросших волос',
        'Очень точный и эффективный',
        'Одобрен FDA и безопасен'
      ] : [
        'Перманентне видалення волосся – гладка шкіра назавжди',
        'Особливо ефективний при темному волоссі',
        'Швидка обробка великих зон',
        'Вбудоване охолодження для комфорту',
        'Значно менш болісно, ніж вакcинг',
        'Видимі результати після 1-2 сеансів',
        'Більше ніякого врослого волосся',
        'Дуже точний та ефективний',
        'Схвалений FDA та безпечний'
      ]}
      steps={language === 'de' ? [
        {
          title: 'Kostenlose Beratung',
          description: 'Hauttyp-Analyse und Bestimmung der optimalen Behandlungsparameter.'
        },
        {
          title: 'Vorbereitung',
          description: 'Die Behandlungszone wird rasiert und desinfiziert. Ein Kühlgel wird aufgetragen.'
        },
        {
          title: 'Laser-Behandlung',
          description: 'Gezielte Laserimpulse zerstören die Haarfollikel. Die integrierte Kühlung sorgt für Komfort.'
        },
        {
          title: 'Nachpflege',
          description: 'Beruhigende Pflege und Sonnenschutz-Empfehlungen für optimale Heilung.'
        }
      ] : language === 'ru' ? [
        {
          title: 'Бесплатная консультация',
          description: 'Анализ типа кожи и определение оптимальных параметров процедуры.'
        },
        {
          title: 'Подготовка',
          description: 'Зона обработки бреется и дезинфицируется. Наносится охлаждающий гель.'
        },
        {
          title: 'Лазерная процедура',
          description: 'Целенаправленные лазерные импульсы разрушают волосяные фолликулы. Встроенное охлаждение обеспечивает комфорт.'
        },
        {
          title: 'Уход после процедуры',
          description: 'Успокаивающий уход и рекомендации по защите от солнца для оптимального заживления.'
        }
      ] : [
        {
          title: 'Безкоштовна консультація',
          description: 'Аналіз типу шкіри та визначення оптимальних параметрів процедури.'
        },
        {
          title: 'Підготовка',
          description: 'Зона обробки голиться та дезінфікується. Наноситься охолоджуючий гель.'
        },
        {
          title: 'Лазерна процедура',
          description: 'Цілеспрямовані лазерні імпульси руйнують волосяні фолікули. Вбудоване охолодження забезпечує комфорт.'
        },
        {
          title: 'Догляд після процедури',
          description: 'Заспокійливий догляд та рекомендації щодо захисту від сонця для оптимального загоєння.'
        }
      ]}
      priceSection="laser"
      contraindications={language === 'de' ? [
        'Gebräunte oder sehr dunkle Haut (Hauttyp V-VI)',
        'Schwangerschaft und Stillzeit',
        'Aktive Hautinfektionen oder Herpes im Behandlungsbereich',
        'Einnahme von photosensibilisierenden Medikamenten',
        'Frische Tätowierungen im Behandlungsbereich',
        'Sehr helle oder graue Haare (kein Melanin)'
      ] : language === 'ru' ? [
        'Загорелая или очень тёмная кожа (фототип V-VI)',
        'Беременность и период кормления',
        'Активные кожные инфекции или герпес в зоне обработки',
        'Приём фотосенсибилизирующих препаратов',
        'Свежие татуировки в зоне обработки',
        'Очень светлые или седые волосы (нет меланина)'
      ] : [
        'Засмагла або дуже темна шкіра (фототип V-VI)',
        'Вагітність та період годування',
        'Активні шкірні інфекції або герпес у зоні обробки',
        'Прийом фотосенсибілізуючих препаратів',
        'Свіжі татуювання у зоні обробки',
        'Дуже світле або сиве волосся (немає меланіну)'
      ]}
      faq={language === 'de' ? [
        {
          q: 'Wie viele Sitzungen brauche ich?',
          a: '6-8 Sitzungen im Abstand von 4-8 Wochen, abhängig vom Körperbereich. Der Haarwachstumszyklus erfordert mehrere Behandlungen für optimale Ergebnisse.'
        },
        {
          q: 'Ist die Behandlung schmerzhaft?',
          a: 'Dank der integrierten Kühlung ist die Behandlung gut erträglich. Die meisten Kunden beschreiben es als leichtes Ziepen, vergleichbar mit einem Gummiband.'
        },
        {
          q: 'Für welche Hauttöne ist der Alexandrit Laser geeignet?',
          a: 'Ideal für helle bis mittlere Hauttöne (Hauttyp I-IV). Bei dunkler Haut empfehlen wir den Dioden Laser.'
        },
        {
          q: 'Wann sehe ich erste Ergebnisse?',
          a: 'Nach der ersten Sitzung fallen die Haare innerhalb von 2-3 Wochen aus. Mit jeder Sitzung wachsen weniger und feinere Haare nach.'
        },
        {
          q: 'Was muss ich vor der Behandlung beachten?',
          a: 'Nicht waxen, zupfen oder epilieren – nur rasieren! 4 Wochen vor der Behandlung keine Sonne oder Solarium. Am Tag der Behandlung die Zone frisch rasieren.'
        }
      ] : language === 'ru' ? [
        {
          q: 'Сколько сеансов мне нужно?',
          a: '6-8 сеансов с интервалом 4-8 недель, в зависимости от зоны тела. Цикл роста волос требует нескольких процедур для оптимальных результатов.'
        },
        {
          q: 'Болезненна ли процедура?',
          a: 'Благодаря встроенному охлаждению процедура хорошо переносится. Большинство клиентов описывают ощущение как лёгкое покалывание, сравнимое с резинкой.'
        },
        {
          q: 'Для каких оттенков кожи подходит александритовый лазер?',
          a: 'Идеален для светлых и средних оттенков кожи (фототип I-IV). Для тёмной кожи рекомендуем диодный лазер.'
        },
        {
          q: 'Когда я увижу первые результаты?',
          a: 'После первого сеанса волосы выпадают в течение 2-3 недель. С каждым сеансом отрастает всё меньше и более тонких волос.'
        },
        {
          q: 'Что нужно учитывать перед процедурой?',
          a: 'Не делать ваксинг, выщипывание или эпиляцию – только бритьё! За 4 недели до процедуры избегать солнца и солярия. В день процедуры побрить зону.'
        }
      ] : [
        {
          q: 'Скільки сеансів мені потрібно?',
          a: '6-8 сеансів з інтервалом 4-8 тижнів, залежно від зони тіла. Цикл росту волосся потребує кількох процедур для оптимальних результатів.'
        },
        {
          q: 'Чи болісна процедура?',
          a: 'Завдяки вбудованому охолодженню процедура добре переноситься. Більшість клієнтів описують відчуття як легке поколювання, порівнянне з гумкою.'
        },
        {
          q: 'Для яких відтінків шкіри підходить олександритовий лазер?',
          a: 'Ідеальний для світлих та середніх відтінків шкіри (фототип I-IV). Для темної шкіри рекомендуємо діодний лазер.'
        },
        {
          q: 'Коли я побачу перші результати?',
          a: 'Після першого сеансу волосся випадає протягом 2-3 тижнів. З кожним сеансом відростає все менше і тонше волосся.'
        },
        {
          q: 'Що потрібно враховувати перед процедурою?',
          a: 'Не робити ваксинг, вищипування або епіляцію – тільки гоління! За 4 тижні до процедури уникати сонця та солярію. У день процедури поголити зону.'
        }
      ]}
      ctaTitle={language === 'de' ? "Bereit für dauerhaft glatte Haut?" : language === 'ru' ? "Готовы к гладкой коже навсегда?" : "Готові до гладкої шкіри назавжди?"}
      ctaDescription={language === 'de'
        ? "Buchen Sie jetzt Ihre kostenlose Beratung und starten Sie Ihre Laser-Haarentfernung."
        : language === 'ru' ? "Запишитесь на бесплатную консультацию и начните лазерное удаление волос."
        : "Запишіться на безкоштовну консультацію та розпочніть лазерне видалення волосся."}
    />
  );
};

export default AlexandritLaser;
