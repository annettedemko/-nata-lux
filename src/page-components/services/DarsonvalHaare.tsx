'use client'

import { ServicePageLayout } from '@/components/ServicePageLayout';
import { Zap } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const DarsonvalHaare = () => {
  const { language } = useLanguage();
  const isGerman = language === 'de';

  return (
    <ServicePageLayout
      icon={Zap}
      title={isGerman ? "Darsonval für Haare" : "Дарсонваль для волос"}
      subtitle={isGerman
        ? "Wachstumsstimulation und Wurzelstärkung mit Hochfrequenzstrom"
        : "Стимуляция роста и укрепление корней высокочастотным током"}
      aboutTitle={isGerman ? "Was ist Darsonval für Haare?" : "Что такое дарсонваль для волос?"}
      aboutDescription={isGerman ? [
        'Darsonval ist eine bewährte elektrotherapeutische Behandlung mit Hochfrequenzstrom, die die Kopfhaut stimuliert und das Haarwachstum anregt.',
        'Durch die sanften elektrischen Impulse werden die Durchblutung der Kopfhaut verbessert, die Haarfollikel gestärkt und die Nährstoffversorgung optimiert. Dies führt zu kräftigerem Haarwachstum und kann Haarausfall vorbeugen.',
        'Die Behandlung ist völlig schmerzfrei, angenehm und besonders effektiv in Kombination mit pflegenden Seren oder als Kur über mehrere Wochen.'
      ] : [
        'Дарсонваль — это проверенная электротерапевтическая процедура с высокочастотным током, которая стимулирует кожу головы и активизирует рост волос.',
        'Благодаря мягким электрическим импульсам улучшается кровообращение кожи головы, укрепляются волосяные фолликулы и оптимизируется питание. Это приводит к более крепкому росту волос и может предотвратить выпадение.',
        'Процедура полностью безболезненна, приятна и особенно эффективна в сочетании с питательными сыворотками или курсом в течение нескольких недель.'
      ]}
      benefits={isGerman ? [
        'Stimulation des Haarwachstums',
        'Stärkung der Haarwurzeln',
        'Verbesserte Durchblutung der Kopfhaut',
        'Vorbeugung von Haarausfall',
        'Kräftigeres, gesünderes Haar',
        'Reduzierung von Schuppen',
        'Regulierung der Talgproduktion',
        'Antibakterielle Wirkung auf die Kopfhaut',
        'Schmerzfrei und entspannend'
      ] : [
        'Стимуляция роста волос',
        'Укрепление корней волос',
        'Улучшение кровообращения кожи головы',
        'Профилактика выпадения волос',
        'Более крепкие, здоровые волосы',
        'Уменьшение перхоти',
        'Регуляция выработки кожного сала',
        'Антибактериальное действие на кожу головы',
        'Безболезненно и расслабляюще'
      ]}
      steps={isGerman ? [
        {
          title: 'Analyse',
          description: 'Begutachtung der Kopfhaut und Besprechung Ihrer Haarprobleme.'
        },
        {
          title: 'Vorbereitung',
          description: 'Optional: Auftragen von pflegenden Seren für bessere Wirkstoffaufnahme.'
        },
        {
          title: 'Darsonval-Behandlung',
          description: 'Sanfte Behandlung der Kopfhaut mit Hochfrequenzstrom für 15-20 Minuten.'
        },
        {
          title: 'Abschlusspflege',
          description: 'Leichte Massage und Pflegetipps für zu Hause.'
        }
      ] : [
        {
          title: 'Анализ',
          description: 'Осмотр кожи головы и обсуждение ваших проблем с волосами.'
        },
        {
          title: 'Подготовка',
          description: 'По желанию: нанесение питательных сывороток для лучшего впитывания.'
        },
        {
          title: 'Процедура дарсонваль',
          description: 'Мягкая обработка кожи головы высокочастотным током 15-20 минут.'
        },
        {
          title: 'Завершающий уход',
          description: 'Лёгкий массаж и советы по уходу дома.'
        }
      ]}
      priceSection="darsonval"
      contraindications={isGerman ? [
        'Schwangerschaft',
        'Herzschrittmacher',
        'Epilepsie',
        'Thrombose',
        'Aktive Kopfhautinfektionen oder offene Wunden',
        'Metallimplantate im Kopfbereich',
        'Tumorerkrankungen'
      ] : [
        'Беременность',
        'Кардиостимулятор',
        'Эпилепсия',
        'Тромбоз',
        'Активные инфекции кожи головы или открытые раны',
        'Металлические имплантаты в области головы',
        'Онкологические заболевания'
      ]}
      faq={isGerman ? [
        {
          q: 'Wie oft sollte ich Darsonval machen?',
          a: 'Für optimale Ergebnisse empfehlen wir eine Kur von 10-15 Sitzungen, 2-3x pro Woche. Danach als Erhaltung 1-2x monatlich.'
        },
        {
          q: 'Wann sehe ich erste Ergebnisse?',
          a: 'Nach 4-6 Wochen regelmäßiger Anwendung werden die Haare kräftiger und das Wachstum wird angeregt. Geduld ist wichtig!'
        },
        {
          q: 'Spürt man etwas bei der Behandlung?',
          a: 'Sie spüren ein leichtes Kribbeln oder Prickeln, das angenehm und entspannend ist. Die Behandlung ist völlig schmerzfrei.'
        },
        {
          q: 'Hilft Darsonval bei Haarausfall?',
          a: 'Ja, Darsonval kann bei hormonell oder stressbedingtem Haarausfall helfen, indem es die Haarfollikel stimuliert. Bei schweren Formen empfehlen wir zusätzlich einen Dermatologen zu konsultieren.'
        }
      ] : [
        {
          q: 'Как часто нужно делать дарсонваль?',
          a: 'Для оптимальных результатов рекомендуем курс из 10-15 сеансов, 2-3 раза в неделю. Затем для поддержания 1-2 раза в месяц.'
        },
        {
          q: 'Когда я увижу первые результаты?',
          a: 'После 4-6 недель регулярного применения волосы становятся крепче и рост активизируется. Терпение важно!'
        },
        {
          q: 'Что ощущается во время процедуры?',
          a: 'Вы ощущаете лёгкое покалывание или пощипывание, которое приятно и расслабляет. Процедура полностью безболезненна.'
        },
        {
          q: 'Помогает ли дарсонваль при выпадении волос?',
          a: 'Да, дарсонваль может помочь при гормональном или стрессовом выпадении волос, стимулируя волосяные фолликулы. При тяжёлых формах рекомендуем также проконсультироваться с дерматологом.'
        }
      ]}
      ctaTitle={isGerman ? "Bereit für kräftigeres, gesünderes Haar?" : "Готовы к более крепким, здоровым волосам?"}
      ctaDescription={isGerman
        ? "Buchen Sie jetzt Ihre Darsonval-Behandlung und starten Sie Ihre Haar-Kur."
        : "Запишитесь на процедуру дарсонваль и начните курс для волос."}
    />
  );
};

export default DarsonvalHaare;
