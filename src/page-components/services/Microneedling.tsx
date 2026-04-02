'use client'

import { ServicePageLayout } from '@/components/ServicePageLayout';
import { Scissors } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { PremiumGallery } from '@/components/PremiumGallery';
import { ProcedureSchema } from '@/components/ProcedureSchema';

const Microneedling = () => {
  const { language } = useLanguage();

  const galleryImages = ['/microneedling-gesicht-muenchen.jpg', '/microneedling-behandlung.jpg', '/microneedling-ergebnis.jpg', '/microneedling-vorher-nachher.jpg', '/microneedling-resultat.jpg'];

  // Schema section
  const schemaSection = (
    <ProcedureSchema
      germanImages={['/194 1.png']}
      russianImages={['/microneedling-detail.jpg']}
      ukrainianImages={['/microneedling-detail.jpg']}
      altTextGerman="Microneedling Schema"
      altTextRussian="Схема микронидлинга"
      altTextUkrainian="Схема мікронідлінгу"
      scale={0.67}
    />
  );

  const photoGallery = (
    <PremiumGallery images={galleryImages} />
  );

  return (
    <ServicePageLayout
      icon={Scissors}
      title="Microneedling"
      subtitle={language === 'de'
        ? "Kollagen-Induktionstherapie für Hautverjüngung, Narbenbehandlung und Haarwuchsstimulation"
        : language === 'ru' ? "Коллаген-индукционная терапия для омоложения кожи, лечения рубцов и стимуляции роста волос"
        : "Колаген-індукційна терапія для омолодження шкіри, лікування рубців та стимуляції росту волосся"}
      aboutTitle={language === 'de' ? "Was ist Microneedling?" : language === 'ru' ? "Что такое микронидлинг?" : "Що таке мікронідлінг?"}
      aboutDescription={language === 'de' ? [
        'Microneedling (auch Kollagen-Induktionstherapie genannt) ist eine innovative Behandlung zur Hautverjüngung und Regeneration. Mit einem speziellen Gerät werden feine Mikrokanäle in die Haut erzeugt, die die natürliche Kollagen- und Elastinproduktion anregen.',
        'Diese kontrollierte Verletzung aktiviert die Selbstheilungskräfte der Haut und fördert die Aufnahme von Wirkstoffen wie Hyaluronsäure, Vitaminen und Exosomen – für sichtbar straffere, glattere und jugendlichere Haut.',
        'Microneedling eignet sich hervorragend zur Behandlung von feinen Linien, Falten, Aknenarben, Pigmentflecken, vergrößerten Poren und Dehnungsstreifen. Auch zur Stimulation des Haarwuchses bei beginnendem Haarausfall wird es erfolgreich eingesetzt.',
        'Die Behandlung ist für Gesicht, Hals, Dekolleté, Kopfhaut und andere Körperzonen geeignet und kann je nach Hautzustand und Behandlungsziel individuell angepasst werden.'
      ] : language === 'ru' ? [
        'Микронидлинг (также называемый коллаген-индукционной терапией) — инновационная процедура для омоложения и регенерации кожи. С помощью специального аппарата создаются тонкие микроканалы в коже, которые стимулируют естественную выработку коллагена и эластина.',
        'Это контролируемое повреждение активирует механизмы самовосстановления кожи и способствует проникновению активных веществ — гиалуроновой кислоты, витаминов и экзосом — для заметно более упругой, гладкой и молодой кожи.',
        'Микронидлинг отлично подходит для лечения мелких морщин, рубцов постакне, пигментных пятен, расширенных пор и растяжек. Также успешно применяется для стимуляции роста волос при начинающемся выпадении.',
        'Процедура подходит для лица, шеи, декольте, кожи головы и других зон тела и может быть индивидуально адаптирована в зависимости от состояния кожи и целей лечения.'
      ] : [
        'Мікронідлінг (також відомий як колаген-індукційна терапія) — інноваційна процедура для омолодження та регенерації шкіри. За допомогою спеціального апарату створюються тонкі мікроканали у шкірі, які стимулюють природне вироблення колагену та еластину.',
        'Це контрольоване пошкодження активує механізми самовідновлення шкіри та сприяє проникненню активних речовин — гіалуронової кислоти, вітамінів та екзосом — для помітно пружнішої, гладшої та молодшої шкіри.',
        'Мікронідлінг чудово підходить для лікування дрібних зморшок, рубців постакне, пігментних плям, розширених пор та розтяжок. Також успішно застосовується для стимуляції росту волосся при початковому випадінні.',
        'Процедура підходить для обличчя, шиї, декольте, шкіри голови та інших зон тіла і може бути індивідуально адаптована залежно від стану шкіри та цілей лікування.'
      ]}
      benefits={language === 'de' ? [
        'Stimuliert natürliche Kollagen- und Elastinproduktion',
        'Reduziert feine Linien und Falten',
        'Verbessert Aknenarben und Narbengewebe',
        'Minimiert vergrößerte Poren',
        'Korrigiert Pigmentflecken und ungleichmäßigen Hautton',
        'Strafft und festigt die Haut',
        'Fördert Haarwachstum bei Haarausfall',
        'Verbessert Aufnahme von Wirkstoffen um bis zu 300%',
        'Behandelt Dehnungsstreifen',
        'Für alle Hauttypen geeignet',
        'Minimale Ausfallzeit',
        'Natürliche Ergebnisse ohne Füllstoffe'
      ] : language === 'ru' ? [
        'Стимулирует естественную выработку коллагена и эластина',
        'Уменьшает мелкие морщины и складки',
        'Улучшает рубцы постакне и рубцовую ткань',
        'Минимизирует расширенные поры',
        'Корректирует пигментные пятна и неровный тон кожи',
        'Подтягивает и укрепляет кожу',
        'Стимулирует рост волос при выпадении',
        'Улучшает впитывание активных веществ до 300%',
        'Лечит растяжки',
        'Подходит для всех типов кожи',
        'Минимальный период восстановления',
        'Естественные результаты без филлеров'
      ] : [
        'Стимулює природне вироблення колагену та еластину',
        'Зменшує дрібні зморшки та складки',
        'Покращує рубці постакне та рубцеву тканину',
        'Мінімізує розширені пори',
        'Коригує пігментні плями та нерівний тон шкіри',
        'Підтягує та зміцнює шкіру',
        'Стимулює ріст волосся при випадінні',
        'Покращує всмоктування активних речовин до 300%',
        'Лікує розтяжки',
        'Підходить для всіх типів шкіри',
        'Мінімальний період відновлення',
        'Природні результати без філерів'
      ]}
      steps={language === 'de' ? [
        {
          title: 'Hautvorbereitung',
          description: 'Gründliche Reinigung und Desinfektion. Bei Bedarf Auftragen einer betäubenden Creme für maximalen Komfort.'
        },
        {
          title: 'Microneedling-Behandlung',
          description: 'Präzise Behandlung mit dem Microneedling-Gerät. Tiefe und Intensität werden individuell angepasst.'
        },
        {
          title: 'Wirkstoff-Infusion',
          description: 'Auftragen von Seren mit Exosomen, Hyaluronsäure, Vitaminen oder Kollagen für optimale Ergebnisse.'
        },
        {
          title: 'Abschluss & Pflege',
          description: 'Beruhigende Maske, Darsonval oder Peeling falls nötig. Pflegeanweisungen für zu Hause.'
        }
      ] : language === 'ru' ? [
        {
          title: 'Подготовка кожи',
          description: 'Тщательное очищение и дезинфекция. При необходимости нанесение анестезирующего крема для максимального комфорта.'
        },
        {
          title: 'Процедура микронидлинг',
          description: 'Точная обработка аппаратом для микронидлинга. Глубина и интенсивность подбираются индивидуально.'
        },
        {
          title: 'Инфузия активных веществ',
          description: 'Нанесение сывороток с экзосомами, гиалуроновой кислотой, витаминами или коллагеном для оптимальных результатов.'
        },
        {
          title: 'Завершение и уход',
          description: 'Успокаивающая маска, дарсонваль или пилинг при необходимости. Инструкции по уходу дома.'
        }
      ] : [
        {
          title: 'Підготовка шкіри',
          description: 'Ретельне очищення та дезінфекція. За потреби нанесення знеболювального крему для максимального комфорту.'
        },
        {
          title: 'Процедура мікронідлінг',
          description: 'Точна обробка апаратом для мікронідлінгу. Глибина та інтенсивність підбираються індивідуально.'
        },
        {
          title: 'Інфузія активних речовин',
          description: 'Нанесення сироваток з екзосомами, гіалуроновою кислотою, вітамінами або колагеном для оптимальних результатів.'
        },
        {
          title: 'Завершення та догляд',
          description: 'Заспокійлива маска, дарсонваль або пілінг за потреби. Інструкції з догляду вдома.'
        }
      ]}
      procedureSchema={schemaSection}
      additionalSections={photoGallery}
      priceSection="microneedling"
      contraindications={language === 'de' ? [
        'Aktive Akne oder Hautinfektionen',
        'Herpes (mind. 2 Wochen vorher behandeln)',
        'Schwangerschaft und Stillzeit',
        'Einnahme von Blutverdünnern oder Isotretinoin',
        'Diabetes (nur mit ärztlicher Erlaubnis)',
        'Keloidneigung',
        'Frische Sonnenbräune oder Sonnenbrand',
        'Rosacea im aktiven Stadium',
        'Autoimmunerkrankungen'
      ] : language === 'ru' ? [
        'Активные акне или кожные инфекции',
        'Герпес (лечить минимум за 2 недели)',
        'Беременность и период кормления',
        'Приём препаратов, разжижающих кровь, или изотретиноина',
        'Диабет (только с разрешения врача)',
        'Склонность к келоидным рубцам',
        'Свежий загар или солнечный ожог',
        'Розацеа в активной стадии',
        'Аутоиммунные заболевания'
      ] : [
        'Активне акне або шкірні інфекції',
        'Герпес (лікувати мінімум за 2 тижні)',
        'Вагітність та період годування',
        'Прийом препаратів, що розріджують кров, або ізотретиноїну',
        'Діабет (тільки з дозволу лікаря)',
        'Схильність до келоїдних рубців',
        'Свіжа засмага або сонячний опік',
        'Розацеа в активній стадії',
        'Автоімунні захворювання'
      ]}
      faq={language === 'de' ? [
        {
          q: 'Ist Microneedling schmerzhaft?',
          a: 'Mit betäubender Creme ist die Behandlung gut erträglich. Sie spüren ein leichtes Kribbeln oder Prickeln. Die Empfindlichkeit variiert je nach behandelter Zone.'
        },
        {
          q: 'Wie viele Behandlungen brauche ich?',
          a: 'Für optimale Ergebnisse empfehlen wir 3-6 Sitzungen im Abstand von 2-4 Wochen. Bei Haarwuchsstimulation ist eine Kur über mehrere Monate sinnvoll.'
        },
        {
          q: 'Wie lange dauert die Heilung?',
          a: 'Die Haut ist 1-3 Tage gerötet (wie leichter Sonnenbrand). Nach 5-7 Tagen ist die Haut vollständig regeneriert. Make-up ist nach 24h möglich.'
        },
        {
          q: 'Wann sehe ich Ergebnisse?',
          a: 'Erste Verbesserungen nach 1-2 Wochen, optimale Ergebnisse nach 4-6 Wochen, wenn die Kollagenproduktion ihren Höhepunkt erreicht.'
        },
        {
          q: 'Was sind Exosome und warum werden sie verwendet?',
          a: 'Exosome sind winzige Zellbotenstoffe, die Regeneration und Heilung beschleunigen. Sie dringen tief in die Haut ein und verstärken die Wirkung des Microneedlings erheblich.'
        }
      ] : language === 'ru' ? [
        {
          q: 'Болезненен ли микронидлинг?',
          a: 'С анестезирующим кремом процедура хорошо переносится. Вы ощущаете лёгкое покалывание. Чувствительность варьируется в зависимости от обрабатываемой зоны.'
        },
        {
          q: 'Сколько процедур мне нужно?',
          a: 'Для оптимальных результатов рекомендуем 3-6 сеансов с интервалом 2-4 недели. Для стимуляции роста волос целесообразен курс в течение нескольких месяцев.'
        },
        {
          q: 'Как долго длится восстановление?',
          a: 'Кожа покрасневшая 1-3 дня (как лёгкий загар). Через 5-7 дней кожа полностью восстановлена. Макияж возможен через 24 часа.'
        },
        {
          q: 'Когда я увижу результаты?',
          a: 'Первые улучшения через 1-2 недели, оптимальные результаты через 4-6 недель, когда выработка коллагена достигает пика.'
        },
        {
          q: 'Что такое экзосомы и зачем они используются?',
          a: 'Экзосомы — крошечные клеточные мессенджеры, ускоряющие регенерацию и заживление. Они глубоко проникают в кожу и значительно усиливают эффект микронидлинга.'
        }
      ] : [
        {
          q: 'Чи болісний мікронідлінг?',
          a: 'Зі знеболювальним кремом процедура добре переноситься. Ви відчуваєте легке поколювання. Чутливість варіюється залежно від оброблюваної зони.'
        },
        {
          q: 'Скільки процедур мені потрібно?',
          a: 'Для оптимальних результатів рекомендуємо 3-6 сеансів з інтервалом 2-4 тижні. Для стимуляції росту волосся доцільний курс протягом кількох місяців.'
        },
        {
          q: 'Як довго триває відновлення?',
          a: 'Шкіра почервоніла 1-3 дні (як легка засмага). Через 5-7 днів шкіра повністю відновлена. Макіяж можливий через 24 години.'
        },
        {
          q: 'Коли я побачу результати?',
          a: 'Перші покращення через 1-2 тижні, оптимальні результати через 4-6 тижнів, коли вироблення колагену досягає піку.'
        },
        {
          q: 'Що таке екзосоми і навіщо вони використовуються?',
          a: 'Екзосоми — крихітні клітинні месенджери, що прискорюють регенерацію та загоєння. Вони глибоко проникають у шкіру та значно підсилюють ефект мікронідлінгу.'
        }
      ]}
      ctaTitle={language === 'de' ? "Bereit für strahlende, verjüngte Haut?" : language === 'ru' ? "Готовы к сияющей, помолодевшей коже?" : "Готові до сяючої, помолодшілої шкіри?"}
      ctaDescription={language === 'de'
        ? "Buchen Sie jetzt Ihre Microneedling-Behandlung oder vereinbaren Sie eine kostenlose Beratung."
        : language === 'ru' ? "Запишитесь на процедуру микронидлинг или договоритесь о бесплатной консультации."
        : "Запишіться на процедуру мікронідлінг або домовтеся про безкоштовну консультацію."}
    />
  );
};

export default Microneedling;
