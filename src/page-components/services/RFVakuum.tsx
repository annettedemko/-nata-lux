'use client'

import { ServicePageLayout } from '@/components/ServicePageLayout';
import { Star, Waves, Zap, Activity } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { ServiceCard } from '@/components/ServiceCard';

const RFVakuum = () => {
  const { language } = useLanguage();
  const isGerman = language === 'de';

  // Recommended body contouring services
  const RecommendedServices = () => (
    <div className="mt-12">
      <h2 className="text-2xl md:text-3xl font-heading font-semibold text-brand-espresso mb-6 text-center">
        {isGerman ? 'Empfohlene Kombinationen' : 'Рекомендуемые комбинации'}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <ServiceCard
          title={isGerman ? 'Kavitation' : 'Кавитация'}
          description={isGerman ? 'Ultraschall für Fettreduktion' : 'Ультразвук для уменьшения жира'}
          icon={Waves}
          href="/services/koerperbehandlungen/kavitation"
          image="/83.jpg"
        />
        <ServiceCard
          title="RF-Lifting"
          description={isGerman ? 'Radiofrequenz für Gesichtsstraffung' : 'Радиочастоты для подтяжки лица'}
          icon={Zap}
          href="/services/apparative-anti-aging/rf-lifting"
          image="/162.jpeg"
        />
        <ServiceCard
          title={isGerman ? 'Biostrom' : 'Биотоки'}
          description={isGerman ? 'Mikrostrom für Lifting-Effekt' : 'Микротоки для лифтинг-эффекта'}
          icon={Activity}
          href="/services/apparative-anti-aging/biostrom"
          image="/125.webp"
        />
      </div>
    </div>
  );

  return (
    <ServicePageLayout
      icon={Star}
      title={isGerman ? "RF-Vakuum" : "RF-вакуум"}
      subtitle={isGerman
        ? "Radiofrequenz mit Vakuum für Straffung und Cellulite-Reduktion"
        : "Радиочастоты с вакуумом для подтяжки и уменьшения целлюлита"}
      aboutTitle={isGerman ? "Was ist RF-Vakuum?" : "Что такое RF-вакуум?"}
      aboutDescription={isGerman ? [
        'RF-Vakuum kombiniert zwei hochwirksame Technologien: Radiofrequenz-Wellen zur Hautstraffung und Vakuum-Massage zur Cellulite-Reduktion und Lymphdrainage.',
        'Die Radiofrequenz erwärmt die tiefen Hautschichten und regt die Kollagenproduktion an, während die Vakuum-Massage die Durchblutung fördert, Fettgewebe mobilisiert und Cellulite sichtbar reduziert.',
        'Perfekt für Problemzonen wie Bauch, Gesäß, Oberschenkel und Arme. Die Kombination beider Technologien liefert schnelle, sichtbare Ergebnisse!'
      ] : [
        'RF-вакуум сочетает две высокоэффективные технологии: радиочастотные волны для подтяжки кожи и вакуумный массаж для уменьшения целлюлита и лимфодренажа.',
        'Радиочастоты нагревают глубокие слои кожи и стимулируют выработку коллагена, а вакуумный массаж улучшает кровообращение, мобилизует жировую ткань и заметно уменьшает целлюлит.',
        'Идеально для проблемных зон: живот, ягодицы, бёдра и руки. Комбинация обеих технологий даёт быстрые, видимые результаты!'
      ]}
      benefits={isGerman ? [
        'Sichtbare Cellulite-Reduktion',
        'Hautstraffung und Konturierung',
        'Lymphdrainage und Entgiftung',
        'Verbesserung der Durchblutung',
        'Mobilisierung von Fettgewebe',
        'Glattere, festere Haut',
        'Reduzierung von Umfang',
        'Keine Ausfallzeit',
        'Schmerzfreie Behandlung'
      ] : [
        'Видимое уменьшение целлюлита',
        'Подтяжка и контурирование кожи',
        'Лимфодренаж и детоксикация',
        'Улучшение кровообращения',
        'Мобилизация жировой ткани',
        'Более гладкая, упругая кожа',
        'Уменьшение объёмов',
        'Без периода восстановления',
        'Безболезненная процедура'
      ]}
      steps={isGerman ? [
        {
          title: 'Beratung',
          description: 'Körperanalyse und Festlegung der Behandlungszonen.'
        },
        {
          title: 'Vorbereitung',
          description: 'Auftragen von Gel für optimale Gleiteigenschaften.'
        },
        {
          title: 'RF-Vakuum Behandlung',
          description: 'Gezielte Behandlung der Problemzonen mit RF und Vakuum für 30-60 Minuten.'
        },
        {
          title: 'Nachpflege',
          description: 'Straffende Körperpflege und Empfehlungen für zu Hause.'
        }
      ] : [
        {
          title: 'Консультация',
          description: 'Анализ тела и определение зон обработки.'
        },
        {
          title: 'Подготовка',
          description: 'Нанесение геля для оптимального скольжения.'
        },
        {
          title: 'Процедура RF-вакуум',
          description: 'Целенаправленная обработка проблемных зон с RF и вакуумом 30-60 минут.'
        },
        {
          title: 'Уход после процедуры',
          description: 'Подтягивающий уход и рекомендации для дома.'
        }
      ]}
      additionalSections={<RecommendedServices />}
      priceSection="body-treatments"
      contraindications={isGerman ? [
        'Schwangerschaft und Stillzeit',
        'Herzschrittmacher oder Metallimplantate',
        'Thrombose oder Krampfadern',
        'Aktive Hautinfektionen',
        'Krebs oder Chemotherapie',
        'Frische Operationen (mind. 6 Monate Abstand)',
        'Menstruation (keine Bauchbehandlung)'
      ] : [
        'Беременность и период кормления',
        'Кардиостимулятор или металлические имплантаты',
        'Тромбоз или варикозное расширение вен',
        'Активные кожные инфекции',
        'Онкология или химиотерапия',
        'Недавние операции (минимум 6 месяцев перерыва)',
        'Менструация (нет обработки живота)'
      ]}
      faq={isGerman ? [
        {
          q: 'Wie viele Sitzungen brauche ich?',
          a: 'Für sichtbare Ergebnisse empfehlen wir 10-15 Sitzungen, 2x pro Woche. Die Ergebnisse sind kumulativ.'
        },
        {
          q: 'Ist die Behandlung schmerzhaft?',
          a: 'Nein, die Behandlung ist angenehm. Sie spüren Wärme und eine Massage-Wirkung, ähnlich wie eine intensive Massage.'
        },
        {
          q: 'Wann sehe ich Ergebnisse?',
          a: 'Nach 3-4 Sitzungen werden erste Verbesserungen sichtbar. Die volle Wirkung zeigt sich nach 10-12 Sitzungen.'
        },
        {
          q: 'Kann ich damit abnehmen?',
          a: 'RF-Vakuum unterstützt die Fettreduktion, ersetzt aber keine gesunde Ernährung und Bewegung. Es konturiert und strafft Problemzonen.'
        },
        {
          q: 'Gibt es Ausfallzeiten?',
          a: 'Nein, Sie können sofort wieder Ihren normalen Aktivitäten nachgehen. Die Haut kann leicht gerötet sein, was nach 1-2 Stunden verschwindet.'
        }
      ] : [
        {
          q: 'Сколько сеансов мне нужно?',
          a: 'Для видимых результатов рекомендуем 10-15 сеансов, 2 раза в неделю. Результаты накапливаются.'
        },
        {
          q: 'Болезненна ли процедура?',
          a: 'Нет, процедура приятная. Вы ощущаете тепло и массажный эффект, похоже на интенсивный массаж.'
        },
        {
          q: 'Когда я увижу результаты?',
          a: 'После 3-4 сеансов заметны первые улучшения. Полный эффект проявляется после 10-12 сеансов.'
        },
        {
          q: 'Могу ли я похудеть с этим?',
          a: 'RF-вакуум поддерживает уменьшение жира, но не заменяет здоровое питание и движение. Он контурирует и подтягивает проблемные зоны.'
        },
        {
          q: 'Есть ли период восстановления?',
          a: 'Нет, вы можете сразу вернуться к обычной деятельности. Кожа может быть слегка покрасневшей, что проходит через 1-2 часа.'
        }
      ]}
      ctaTitle={isGerman ? "Bereit für straffere, glattere Haut?" : "Готовы к более упругой, гладкой коже?"}
      ctaDescription={isGerman
        ? "Buchen Sie jetzt Ihre RF-Vakuum Behandlung und verabschieden Sie sich von Cellulite!"
        : "Запишитесь на процедуру RF-вакуум и попрощайтесь с целлюлитом!"}
    />
  );
};

export default RFVakuum;
