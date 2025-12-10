'use client'

import { ServicePageLayout } from '@/components/ServicePageLayout';
import { Zap } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const AlexandritLaser = () => {
  const { language } = useLanguage();
  const isGerman = language === 'de';

  return (
    <ServicePageLayout
      icon={Zap}
      title={language === 'de' ? "Alexandrit Laser Haarentfernung" : language === 'ru' ? "Александритовый лазер для удаления волос" : "Александритовый лазер для удаления волос"}
      subtitle={isGerman
        ? "Ideal für helle Haut und dunkles Haar – Schnell, effektiv und dauerhaft"
        : "Идеален для светлой кожи и тёмных волос – Быстро, эффективно и навсегда"}
      aboutTitle={language === 'de' ? "Was ist der Alexandrit Laser?" : language === 'ru' ? "Что такое александритовый лазер?" : "Что такое александритовый лазер?"}
      aboutDescription={isGerman ? [
        'Der Alexandrit Laser ist der Goldstandard für dauerhafte Haarentfernung bei hellen bis mittleren Hauttönen. Mit einer Wellenlänge von 755 nm zielt er präzise auf das Melanin im Haarfollikel ab und zerstört diesen nachhaltig.',
        'Diese Technologie ist besonders effektiv bei dunklen Haaren auf heller Haut (Hauttyp I-IV nach Fitzpatrick). Die Behandlung ist schnell, nahezu schmerzfrei dank integriertem Kühlsystem und liefert langanhaltende Ergebnisse.',
        'Im Vergleich zu anderen Lasern ist der Alexandrit Laser durch seine kurze Wellenlänge besonders präzise und erzielt bereits nach wenigen Sitzungen sichtbare Ergebnisse.'
      ] : [
        'Александритовый лазер — золотой стандарт перманентного удаления волос для светлых и средних оттенков кожи. С длиной волны 755 нм он точно воздействует на меланин в волосяном фолликуле и навсегда разрушает его.',
        'Эта технология особенно эффективна при тёмных волосах на светлой коже (фототип I-IV по Фитцпатрику). Процедура быстрая, практически безболезненная благодаря встроенной системе охлаждения и даёт долговременные результаты.',
        'По сравнению с другими лазерами александритовый лазер особенно точен благодаря короткой длине волны и даёт видимые результаты уже после нескольких сеансов.'
      ]}
      benefits={isGerman ? [
        'Dauerhafte Haarentfernung – für immer glatte Haut',
        'Besonders effektiv bei dunklen Haaren',
        'Schnelle Behandlung großer Flächen',
        'Integrierte Kühlung für mehr Komfort',
        'Deutlich weniger schmerzhaft als Waxing',
        'Sichtbare Ergebnisse nach 1-2 Sitzungen',
        'Kein Einwachsen der Haare mehr',
        'Sehr präzise und effektiv',
        'FDA-zugelassen und sicher'
      ] : [
        'Перманентное удаление волос – гладкая кожа навсегда',
        'Особенно эффективен при тёмных волосах',
        'Быстрая обработка больших зон',
        'Встроенное охлаждение для комфорта',
        'Значительно менее болезненно, чем ваксинг',
        'Видимые результаты после 1-2 сеансов',
        'Больше никаких вросших волос',
        'Очень точный и эффективный',
        'Одобрен FDA и безопасен'
      ]}
      steps={isGerman ? [
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
      ] : [
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
      ]}
      priceSection="laser"
      contraindications={isGerman ? [
        'Gebräunte oder sehr dunkle Haut (Hauttyp V-VI)',
        'Schwangerschaft und Stillzeit',
        'Aktive Hautinfektionen oder Herpes im Behandlungsbereich',
        'Einnahme von photosensibilisierenden Medikamenten',
        'Frische Tätowierungen im Behandlungsbereich',
        'Sehr helle oder graue Haare (kein Melanin)'
      ] : [
        'Загорелая или очень тёмная кожа (фототип V-VI)',
        'Беременность и период кормления',
        'Активные кожные инфекции или герпес в зоне обработки',
        'Приём фотосенсибилизирующих препаратов',
        'Свежие татуировки в зоне обработки',
        'Очень светлые или седые волосы (нет меланина)'
      ]}
      faq={isGerman ? [
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
      ] : [
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
      ]}
      ctaTitle={language === 'de' ? "Bereit für dauerhaft glatte Haut?" : language === 'ru' ? "Готовы к гладкой коже навсегда?" : "Готовы к гладкой коже навсегда?"}
      ctaDescription={isGerman
        ? "Buchen Sie jetzt Ihre kostenlose Beratung und starten Sie Ihre Laser-Haarentfernung."
        : "Запишитесь на бесплатную консультацию и начните лазерное удаление волос."}
    />
  );
};

export default AlexandritLaser;
