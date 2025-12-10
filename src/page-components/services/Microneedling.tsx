'use client'

import { ServicePageLayout } from '@/components/ServicePageLayout';
import { Scissors } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { PremiumGallery } from '@/components/PremiumGallery';
import { ProcedureSchema } from '@/components/ProcedureSchema';

const Microneedling = () => {
  const { language } = useLanguage();
  const isGerman = language === 'de';

  const galleryImages = ['/87.jpg', '/88.jpg', '/89.jpg', '/90.jpg', '/91.jpg'];

  // Schema section
  const schemaSection = (
    <ProcedureSchema
      germanImages={['/176.jpg']}
      russianImages={['/176 1.jpg']}
      altTextGerman="Microneedling Schema"
      altTextRussian="Схема микронидлинга"
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
      subtitle={isGerman
        ? "Kollagen-Induktionstherapie für Hautverjüngung, Narbenbehandlung und Haarwuchsstimulation"
        : "Коллаген-индукционная терапия для омоложения кожи, лечения рубцов и стимуляции роста волос"}
      aboutTitle={language === 'de' ? "Was ist Microneedling?" : language === 'ru' ? "Что такое микронидлинг?" : "Что такое микронидлинг?"}
      aboutDescription={isGerman ? [
        'Microneedling (auch Kollagen-Induktionstherapie genannt) ist eine innovative Behandlung zur Hautverjüngung und Regeneration. Mit einem speziellen Gerät werden feine Mikrokanäle in die Haut erzeugt, die die natürliche Kollagen- und Elastinproduktion anregen.',
        'Diese kontrollierte Verletzung aktiviert die Selbstheilungskräfte der Haut und fördert die Aufnahme von Wirkstoffen wie Hyaluronsäure, Vitaminen und Exosomen – für sichtbar straffere, glattere und jugendlichere Haut.',
        'Microneedling eignet sich hervorragend zur Behandlung von feinen Linien, Falten, Aknenarben, Pigmentflecken, vergrößerten Poren und Dehnungsstreifen. Auch zur Stimulation des Haarwuchses bei beginnendem Haarausfall wird es erfolgreich eingesetzt.',
        'Die Behandlung ist für Gesicht, Hals, Dekolleté, Kopfhaut und andere Körperzonen geeignet und kann je nach Hautzustand und Behandlungsziel individuell angepasst werden.'
      ] : [
        'Микронидлинг (также называемый коллаген-индукционной терапией) — инновационная процедура для омоложения и регенерации кожи. С помощью специального аппарата создаются тонкие микроканалы в коже, которые стимулируют естественную выработку коллагена и эластина.',
        'Это контролируемое повреждение активирует механизмы самовосстановления кожи и способствует проникновению активных веществ — гиалуроновой кислоты, витаминов и экзосом — для заметно более упругой, гладкой и молодой кожи.',
        'Микронидлинг отлично подходит для лечения мелких морщин, рубцов постакне, пигментных пятен, расширенных пор и растяжек. Также успешно применяется для стимуляции роста волос при начинающемся выпадении.',
        'Процедура подходит для лица, шеи, декольте, кожи головы и других зон тела и может быть индивидуально адаптирована в зависимости от состояния кожи и целей лечения.'
      ]}
      benefits={isGerman ? [
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
      ] : [
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
      ]}
      steps={isGerman ? [
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
      ] : [
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
      ]}
      procedureSchema={schemaSection}
      additionalSections={photoGallery}
      priceSection="microneedling"
      contraindications={isGerman ? [
        'Aktive Akne oder Hautinfektionen',
        'Herpes (mind. 2 Wochen vorher behandeln)',
        'Schwangerschaft und Stillzeit',
        'Einnahme von Blutverdünnern oder Isotretinoin',
        'Diabetes (nur mit ärztlicher Erlaubnis)',
        'Keloidneigung',
        'Frische Sonnenbräune oder Sonnenbrand',
        'Rosacea im aktiven Stadium',
        'Autoimmunerkrankungen'
      ] : [
        'Активные акне или кожные инфекции',
        'Герпес (лечить минимум за 2 недели)',
        'Беременность и период кормления',
        'Приём препаратов, разжижающих кровь, или изотретиноина',
        'Диабет (только с разрешения врача)',
        'Склонность к келоидным рубцам',
        'Свежий загар или солнечный ожог',
        'Розацеа в активной стадии',
        'Аутоиммунные заболевания'
      ]}
      faq={isGerman ? [
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
      ] : [
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
      ]}
      ctaTitle={language === 'de' ? "Bereit für strahlende, verjüngte Haut?" : language === 'ru' ? "Готовы к сияющей, помолодевшей коже?" : "Готовы к сияющей, помолодевшей коже?"}
      ctaDescription={isGerman
        ? "Buchen Sie jetzt Ihre Microneedling-Behandlung oder vereinbaren Sie eine kostenlose Beratung."
        : "Запишитесь на процедуру микронидлинг или договоритесь о бесплатной консультации."}
    />
  );
};

export default Microneedling;
