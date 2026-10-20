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
        ? "Pflege für Kopfhaut und Haarwurzeln mit Hochfrequenzstrom"
        : language === 'ru'
          ? "Уход за кожей головы и корнями волос с помощью высокочастотного тока"
          : "Догляд за шкірою голови та корінням волосся за допомогою високочастотного струму"}
      aboutTitle={language === 'de' ? "Was ist Darsonval für Haare?" : language === 'ru' ? "Что такое дарсонваль для волос?" : "Що таке дарсонваль для волосся?"}
      aboutDescription={language === 'de' ? [
        'Darsonval ist eine bewährte kosmetische Behandlung mit Hochfrequenzstrom, die die Kopfhaut belebt und das Haarwachstum unterstützen kann.',
        'Die sanften elektrischen Impulse fördern die Mikrozirkulation der Kopfhaut und unterstützen so die Versorgung der Haarwurzeln. Das Haar kann dadurch kräftiger und vitaler wirken.',
        'Die Behandlung ist angenehm, gut verträglich und besonders empfehlenswert in Kombination mit pflegenden Seren oder als Kur über mehrere Wochen.'
      ] : language === 'ru' ? [
        'Дарсонваль — это проверенная косметическая процедура с высокочастотным током, которая тонизирует кожу головы и может поддержать рост волос.',
        'Мягкие электрические импульсы улучшают микроциркуляцию кожи головы и тем самым поддерживают питание корней волос. Волосы могут выглядеть более крепкими и живыми.',
        'Процедура комфортна, хорошо переносится и особенно рекомендуется в сочетании с питательными сыворотками или курсом в течение нескольких недель.'
      ] : [
        'Дарсонваль — це перевірена косметична процедура з високочастотним струмом, яка тонізує шкіру голови та може підтримати ріст волосся.',
        'М’які електричні імпульси покращують мікроциркуляцію шкіри голови і тим самим підтримують живлення коренів волосся. Волосся може виглядати міцнішим та живішим.',
        'Процедура комфортна, добре переноситься та особливо рекомендується у поєднанні з живильними сироватками або курсом протягом кількох тижнів.'
      ]}
      benefits={language === 'de' ? [
        'Kann das Haarwachstum unterstützen',
        'Pflege für die Haarwurzeln',
        'Fördert die Mikrozirkulation der Kopfhaut',
        'Für eine gepflegte, vital wirkende Kopfhaut',
        'Kräftiger und gepflegter wirkendes Haar',
        'Kann Schuppenbildung mildern',
        'Für eine ausgeglichene Kopfhaut bei fettigem Ansatz',
        'Klärende Wirkung auf die Kopfhaut',
        'Angenehm und entspannend'
      ] : language === 'ru' ? [
        'Может поддержать рост волос',
        'Уход за корнями волос',
        'Улучшение микроциркуляции кожи головы',
        'Для ухоженной, здоровой на вид кожи головы',
        'Волосы выглядят более крепкими и ухоженными',
        'Может уменьшить шелушение',
        'Помогает сбалансировать жирность кожи головы',
        'Очищающее действие на кожу головы',
        'Комфортно и расслабляюще'
      ] : [
        'Може підтримати ріст волосся',
        'Догляд за корінням волосся',
        'Покращення мікроциркуляції шкіри голови',
        'Для доглянутої, здорової на вигляд шкіри голови',
        'Волосся виглядає міцнішим та доглянутішим',
        'Може зменшити лущення',
        'Допомагає збалансувати жирність шкіри голови',
        'Очищувальна дія на шкіру голови',
        'Комфортно та розслаблююче'
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
          a: 'Wir empfehlen in der Regel eine Kur von 10-15 Sitzungen, 2-3x pro Woche. Danach als Erhaltung 1-2x monatlich.'
        },
        {
          q: 'Wann sehe ich erste Ergebnisse?',
          a: 'Viele Kunden bemerken nach 4-6 Wochen regelmäßiger Anwendung, dass das Haar kräftiger und gepflegter wirkt. Ergebnisse sind individuell verschieden – Geduld ist wichtig!'
        },
        {
          q: 'Spürt man etwas bei der Behandlung?',
          a: 'Sie spüren ein leichtes Kribbeln oder Prickeln, das angenehm und entspannend ist. Die Behandlung ist gut verträglich.'
        },
        {
          q: 'Kann Darsonval bei Haarausfall helfen?',
          a: 'Darsonval ist eine kosmetische Pflegebehandlung und ersetzt keine ärztliche Behandlung. Sie belebt die Kopfhaut und kann das Haarwachstum unterstützen. Bei starkem oder anhaltendem Haarausfall empfehlen wir, die Ursache dermatologisch abklären zu lassen.'
        }
      ] : language === 'ru' ? [
        {
          q: 'Как часто нужно делать дарсонваль?',
          a: 'Обычно рекомендуем курс из 10-15 сеансов, 2-3 раза в неделю. Затем для поддержания 1-2 раза в месяц.'
        },
        {
          q: 'Когда я увижу первые результаты?',
          a: 'Многие клиенты замечают через 4-6 недель регулярного применения, что волосы выглядят крепче и ухоженнее. Результаты индивидуальны — важно терпение!'
        },
        {
          q: 'Что ощущается во время процедуры?',
          a: 'Вы ощущаете лёгкое покалывание или пощипывание, которое приятно и расслабляет. Процедура хорошо переносится.'
        },
        {
          q: 'Может ли дарсонваль помочь при выпадении волос?',
          a: 'Дарсонваль — это косметическая ухаживающая процедура, которая не заменяет лечение у врача. Она тонизирует кожу головы и может поддержать рост волос. При сильном или длительном выпадении волос рекомендуем выяснить причину у врача-дерматолога.'
        }
      ] : [
        {
          q: 'Як часто потрібно робити дарсонваль?',
          a: 'Зазвичай рекомендуємо курс із 10-15 сеансів, 2-3 рази на тиждень. Потім для підтримки 1-2 рази на місяць.'
        },
        {
          q: 'Коли я побачу перші результати?',
          a: 'Багато клієнтів помічають через 4-6 тижнів регулярного застосування, що волосся виглядає міцнішим та доглянутішим. Результати індивідуальні — важливе терпіння!'
        },
        {
          q: 'Що відчувається під час процедури?',
          a: 'Ви відчуваєте легке поколювання або пощипування, яке приємне та розслаблює. Процедура добре переноситься.'
        },
        {
          q: 'Чи може дарсонваль допомогти при випаданні волосся?',
          a: 'Дарсонваль — це косметична доглядова процедура, яка не замінює лікування в лікаря. Вона тонізує шкіру голови та може підтримати ріст волосся. При сильному або тривалому випаданні волосся рекомендуємо з’ясувати причину в лікаря-дерматолога.'
        }
      ]}
      procedureSchema={<SchemaSection />}
      ctaTitle={language === 'de' ? "Bereit für kräftiger wirkendes, gepflegtes Haar?" : language === 'ru' ? "Готовы к более крепким на вид, ухоженным волосам?" : "Готові до міцнішого на вигляд, доглянутого волосся?"}
      ctaDescription={language === 'de'
        ? "Buchen Sie jetzt Ihre Darsonval-Behandlung und starten Sie Ihre Haar-Kur."
        : language === 'ru'
          ? "Запишитесь на процедуру дарсонваль и начните курс для волос."
          : "Запишіться на процедуру дарсонваль та розпочніть курс для волосся."}
    />
  );
};

export default DarsonvalHaare;
