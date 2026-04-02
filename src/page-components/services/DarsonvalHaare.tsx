'use client'

import { ServicePageLayout } from '@/components/ServicePageLayout';
import { Zap } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { ProcedureSchema } from '@/components/ProcedureSchema';

const DarsonvalHaare = () => {
  const { language } = useLanguage();

  // Schema section
  const SchemaSection = () => (
    <ProcedureSchema
      germanImages={['/darsonval-haarbehandlung.jpg']}
      russianImages={['/190 1.jpg']}
      altTextGerman="Darsonval Schema"
      altTextRussian="Схема дарсонваль"
      scale={0.5}
    />
  );

  return (
    <ServicePageLayout
      icon={Zap}
      title={language === 'de' ? "Darsonval für Haare" : language === 'ru' ? "Дарсонваль для волос" : "Дарсонваль для волосся"}
      subtitle={language === 'de'
        ? "Wachstumsstimulation und Wurzelstärkung mit Hochfrequenzstrom"
        : language === 'ru'
          ? "Стимуляция роста и укрепление корней высокочастотным током"
          : "Стимуляція росту та зміцнення коренів високочастотним струмом"}
      aboutTitle={language === 'de' ? "Was ist Darsonval für Haare?" : language === 'ru' ? "Что такое дарсонваль для волос?" : "Що таке дарсонваль для волосся?"}
      aboutDescription={language === 'de' ? [
        'Darsonval ist eine bewährte elektrotherapeutische Behandlung mit Hochfrequenzstrom, die die Kopfhaut stimuliert und das Haarwachstum anregt.',
        'Durch die sanften elektrischen Impulse werden die Durchblutung der Kopfhaut verbessert, die Haarfollikel gestärkt und die Nährstoffversorgung optimiert. Dies führt zu kräftigerem Haarwachstum und kann Haarausfall vorbeugen.',
        'Die Behandlung ist völlig schmerzfrei, angenehm und besonders effektiv in Kombination mit pflegenden Seren oder als Kur über mehrere Wochen.'
      ] : language === 'ru' ? [
        'Дарсонваль — это проверенная электротерапевтическая процедура с высокочастотным током, которая стимулирует кожу головы и активизирует рост волос.',
        'Благодаря мягким электрическим импульсам улучшается кровообращение кожи головы, укрепляются волосяные фолликулы и оптимизируется питание. Это приводит к более крепкому росту волос и может предотвратить выпадение.',
        'Процедура полностью безболезненна, приятна и особенно эффективна в сочетании с питательными сыворотками или курсом в течение нескольких недель.'
      ] : [
        'Дарсонваль — це перевірена електротерапевтична процедура з високочастотним струмом, яка стимулює шкіру голови та активізує ріст волосся.',
        'Завдяки м\'яким електричним імпульсам покращується кровообіг шкіри голови, зміцнюються волосяні фолікули та оптимізується живлення. Це призводить до більш міцного росту волосся та може запобігти випаданню.',
        'Процедура повністю безболісна, приємна та особливо ефективна у поєднанні з живильними сироватками або курсом протягом кількох тижнів.'
      ]}
      benefits={language === 'de' ? [
        'Stimulation des Haarwachstums',
        'Stärkung der Haarwurzeln',
        'Verbesserte Durchblutung der Kopfhaut',
        'Vorbeugung von Haarausfall',
        'Kräftigeres, gesünderes Haar',
        'Reduzierung von Schuppen',
        'Regulierung der Talgproduktion',
        'Antibakterielle Wirkung auf die Kopfhaut',
        'Schmerzfrei und entspannend'
      ] : language === 'ru' ? [
        'Стимуляция роста волос',
        'Укрепление корней волос',
        'Улучшение кровообращения кожи головы',
        'Профилактика выпадения волос',
        'Более крепкие, здоровые волосы',
        'Уменьшение перхоти',
        'Регуляция выработки кожного сала',
        'Антибактериальное действие на кожу головы',
        'Безболезненно и расслабляюще'
      ] : [
        'Стимуляція росту волосся',
        'Зміцнення коренів волосся',
        'Покращення кровообігу шкіри голови',
        'Профілактика випадання волосся',
        'Більш міцне, здорове волосся',
        'Зменшення лупи',
        'Регуляція виділення шкірного сала',
        'Антибактеріальна дія на шкіру голови',
        'Безболісно та розслаблююче'
      ]}
      steps={language === 'de' ? [
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
      ] : language === 'ru' ? [
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
      ] : [
        {
          title: 'Аналіз',
          description: 'Огляд шкіри голови та обговорення ваших проблем з волоссям.'
        },
        {
          title: 'Підготовка',
          description: 'За бажанням: нанесення живильних сироваток для кращого всмоктування.'
        },
        {
          title: 'Процедура дарсонваль',
          description: 'М\'яка обробка шкіри голови високочастотним струмом 15-20 хвилин.'
        },
        {
          title: 'Завершальний догляд',
          description: 'Легкий масаж та поради щодо догляду вдома.'
        }
      ]}
      priceSection="darsonval"
      contraindications={language === 'de' ? [
        'Schwangerschaft',
        'Herzschrittmacher',
        'Epilepsie',
        'Thrombose',
        'Aktive Kopfhautinfektionen oder offene Wunden',
        'Metallimplantate im Kopfbereich',
        'Tumorerkrankungen'
      ] : language === 'ru' ? [
        'Беременность',
        'Кардиостимулятор',
        'Эпилепсия',
        'Тромбоз',
        'Активные инфекции кожи головы или открытые раны',
        'Металлические имплантаты в области головы',
        'Онкологические заболевания'
      ] : [
        'Вагітність',
        'Кардіостимулятор',
        'Епілепсія',
        'Тромбоз',
        'Активні інфекції шкіри голови або відкриті рани',
        'Металеві імплантати в ділянці голови',
        'Онкологічні захворювання'
      ]}
      faq={language === 'de' ? [
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
      ] : language === 'ru' ? [
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
      ] : [
        {
          q: 'Як часто потрібно робити дарсонваль?',
          a: 'Для оптимальних результатів рекомендуємо курс із 10-15 сеансів, 2-3 рази на тиждень. Потім для підтримки 1-2 рази на місяць.'
        },
        {
          q: 'Коли я побачу перші результати?',
          a: 'Після 4-6 тижнів регулярного застосування волосся стає міцнішим та ріст активізується. Терпіння важливе!'
        },
        {
          q: 'Що відчувається під час процедури?',
          a: 'Ви відчуваєте легке поколювання або пощипування, яке приємне та розслаблює. Процедура повністю безболісна.'
        },
        {
          q: 'Чи допомагає дарсонваль при випаданні волосся?',
          a: 'Так, дарсонваль може допомогти при гормональному або стресовому випаданні волосся, стимулюючи волосяні фолікули. При тяжких формах рекомендуємо також проконсультуватися з дерматологом.'
        }
      ]}
      procedureSchema={<SchemaSection />}
      ctaTitle={language === 'de' ? "Bereit für kräftigeres, gesünderes Haar?" : language === 'ru' ? "Готовы к более крепким, здоровым волосам?" : "Готові до більш міцного, здорового волосся?"}
      ctaDescription={language === 'de'
        ? "Buchen Sie jetzt Ihre Darsonval-Behandlung und starten Sie Ihre Haar-Kur."
        : language === 'ru'
          ? "Запишитесь на процедуру дарсонваль и начните курс для волос."
          : "Запишіться на процедуру дарсонваль та розпочніть курс для волосся."}
    />
  );
};

export default DarsonvalHaare;
