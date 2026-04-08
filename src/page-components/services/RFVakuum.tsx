'use client'

import { ServicePageLayout } from '@/components/ServicePageLayout';
import { Star, Waves, Zap, Activity } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { ServiceCard } from '@/components/ServiceCard';
import { ProcedureSchema } from '@/components/ProcedureSchema';
import { PremiumGallery } from '@/components/PremiumGallery';

const RFVakuum = () => {
  const { language } = useLanguage();

  // Schema section
  const SchemaSection = () => (
    <ProcedureSchema
      germanImages={['/rf-vakuum-zertifikat-muenchen.jpg']}
      russianImages={['/rf-vakuum-ergebnis.jpg']}
      altTextGerman="RF-Vakuum Schema"
      altTextRussian="Схема RF-вакуум"
      scale={0.5}
    />
  );

  // Additional sections with gallery and recommended services
  const AdditionalSections = () => (
    <>
      <PremiumGallery
        images={['/apparative-massage-geraet.png', '/rf-vakuum-geraet-muenchen.png', '/renew-rf-vakuum-vorher.webp', '/renew-professional-konzentrat.webp', '/renew-rf-vakuum-ergebnis.webp', '/renew-rf-vakuum-nachher.webp', '/renew-rf-vakuum-detail.webp', '/renew-rf-vakuum-behandlung.webp']}
        title={language === 'de' ? 'Unsere Arbeiten' : language === 'ru' ? 'Наши работы' : 'Наші роботи'}
      />
      <div className="mt-12">
        <h2 className="text-2xl md:text-3xl font-heading font-semibold text-brand-espresso mb-6 text-center">
          {language === 'de' ? 'Empfohlene Kombinationen' : language === 'ru' ? 'Рекомендуемые комбинации' : 'Рекомендовані комбінації'}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ServiceCard
            title={language === 'de' ? 'Kavitation' : language === 'ru' ? 'Кавитация' : 'Кавітація'}
            description={language === 'de' ? 'Ultraschall für Fettreduktion' : language === 'ru' ? 'Ультразвук для уменьшения жира' : 'Ультразвук для зменшення жиру'}
            icon={Waves}
            href="/services/koerperbehandlungen/kavitation"
            image="/rf-vakuum-koerperbehandlung-muenchen.jpg"
          />
          <ServiceCard
            title="RF-Lifting"
            description={language === 'de' ? 'Radiofrequenz für Gesichtsstraffung' : language === 'ru' ? 'Радиочастоты для подтяжки лица' : 'Радіочастоти для підтяжки обличчя'}
            icon={Zap}
            href="/services/apparative-anti-aging/rf-lifting"
            image="/rf-lifting-behandlung-muenchen.jpeg"
          />
          <ServiceCard
            title={language === 'de' ? 'Biostrom' : language === 'ru' ? 'Биотоки' : 'Біотоки'}
            description={language === 'de' ? 'Mikrostrom für Lifting-Effekt' : language === 'ru' ? 'Микротоки для лифтинг-эффекта' : 'Мікрострум для ліфтинг-ефекту'}
            icon={Activity}
            href="/services/apparative-anti-aging/biostrom"
            image="/apparative-anti-aging-geraet-muenchen.webp"
          />
        </div>
      </div>
    </>
  );

  return (
    <ServicePageLayout
      icon={Star}
      title={language === 'de' ? "RF-Vakuum" : language === 'ru' ? "RF-вакуум" : "RF-вакуум"}
      subtitle={language === 'de'
        ? "Radiofrequenz mit Vakuum für Straffung und Cellulite-Reduktion"
        : language === 'ru'
          ? "Радиочастоты с вакуумом для подтяжки и уменьшения целлюлита"
          : "Радіочастоти з вакуумом для підтяжки та зменшення целюліту"}
      aboutTitle={language === 'de' ? "Was ist RF-Vakuum?" : language === 'ru' ? "Что такое RF-вакуум?" : "Що таке RF-вакуум?"}
      aboutDescription={language === 'de' ? [
        'RF-Vakuum kombiniert zwei hochwirksame Technologien: Radiofrequenz-Wellen zur Hautstraffung und Vakuum-Massage zur Cellulite-Reduktion und Lymphdrainage.',
        'Die Radiofrequenz erwärmt die tiefen Hautschichten und regt die Kollagenproduktion an, während die Vakuum-Massage die Durchblutung fördert, Fettgewebe mobilisiert und Cellulite sichtbar reduziert.',
        'Perfekt für Problemzonen wie Bauch, Gesäß, Oberschenkel und Arme. Die Kombination beider Technologien liefert schnelle, sichtbare Ergebnisse!'
      ] : language === 'ru' ? [
        'RF-вакуум сочетает две высокоэффективные технологии: радиочастотные волны для подтяжки кожи и вакуумный массаж для уменьшения целлюлита и лимфодренажа.',
        'Радиочастоты нагревают глубокие слои кожи и стимулируют выработку коллагена, а вакуумный массаж улучшает кровообращение, мобилизует жировую ткань и заметно уменьшает целлюлит.',
        'Идеально для проблемных зон: живот, ягодицы, бёдра и руки. Комбинация обеих технологий даёт быстрые, видимые результаты!'
      ] : [
        'RF-вакуум поєднує дві високоефективні технології: радіочастотні хвилі для підтяжки шкіри та вакуумний масаж для зменшення целюліту та лімфодренажу.',
        'Радіочастоти нагрівають глибокі шари шкіри та стимулюють вироблення колагену, а вакуумний масаж покращує кровообіг, мобілізує жирову тканину та помітно зменшує целюліт.',
        'Ідеально для проблемних зон: живіт, сідниці, стегна та руки. Поєднання обох технологій дає швидкі, видимі результати!'
      ]}
      benefits={language === 'de' ? [
        'Sichtbare Cellulite-Reduktion',
        'Hautstraffung und Konturierung',
        'Lymphdrainage und Entgiftung',
        'Verbesserung der Durchblutung',
        'Mobilisierung von Fettgewebe',
        'Glattere, festere Haut',
        'Reduzierung von Umfang',
        'Keine Ausfallzeit',
        'Schmerzfreie Behandlung'
      ] : language === 'ru' ? [
        'Видимое уменьшение целлюлита',
        'Подтяжка и контурирование кожи',
        'Лимфодренаж и детоксикация',
        'Улучшение кровообращения',
        'Мобилизация жировой ткани',
        'Более гладкая, упругая кожа',
        'Уменьшение объёмов',
        'Без периода восстановления',
        'Безболезненная процедура'
      ] : [
        'Видиме зменшення целюліту',
        'Підтяжка та контурування шкіри',
        'Лімфодренаж та детоксикація',
        'Покращення кровообігу',
        'Мобілізація жирової тканини',
        'Більш гладка, пружна шкіра',
        'Зменшення об\'ємів',
        'Без періоду відновлення',
        'Безболісна процедура'
      ]}
      steps={language === 'de' ? [
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
      ] : language === 'ru' ? [
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
      ] : [
        {
          title: 'Консультація',
          description: 'Аналіз тіла та визначення зон обробки.'
        },
        {
          title: 'Підготовка',
          description: 'Нанесення гелю для оптимального ковзання.'
        },
        {
          title: 'Процедура RF-вакуум',
          description: 'Цілеспрямована обробка проблемних зон з RF та вакуумом 30-60 хвилин.'
        },
        {
          title: 'Догляд після процедури',
          description: 'Підтягуючий догляд та рекомендації для дому.'
        }
      ]}
      procedureSchema={<SchemaSection />}
      additionalSections={<AdditionalSections />}
      priceSection="body-treatments"
      contraindications={language === 'de' ? [
        'Schwangerschaft und Stillzeit',
        'Herzschrittmacher oder Metallimplantate',
        'Thrombose oder Krampfadern',
        'Aktive Hautinfektionen',
        'Krebs oder Chemotherapie',
        'Frische Operationen (mind. 6 Monate Abstand)',
        'Menstruation (keine Bauchbehandlung)'
      ] : language === 'ru' ? [
        'Беременность и период кормления',
        'Кардиостимулятор или металлические имплантаты',
        'Тромбоз или варикозное расширение вен',
        'Активные кожные инфекции',
        'Онкология или химиотерапия',
        'Недавние операции (минимум 6 месяцев перерыва)',
        'Менструация (нет обработки живота)'
      ] : [
        'Вагітність та період годування',
        'Кардіостимулятор або металеві імплантати',
        'Тромбоз або варикозне розширення вен',
        'Активні шкірні інфекції',
        'Онкологія або хіміотерапія',
        'Нещодавні операції (мінімум 6 місяців перерви)',
        'Менструація (немає обробки живота)'
      ]}
      faq={language === 'de' ? [
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
      ] : language === 'ru' ? [
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
      ] : [
        {
          q: 'Скільки сеансів мені потрібно?',
          a: 'Для видимих результатів рекомендуємо 10-15 сеансів, 2 рази на тиждень. Результати накопичуються.'
        },
        {
          q: 'Чи болісна процедура?',
          a: 'Ні, процедура приємна. Ви відчуваєте тепло та масажний ефект, схоже на інтенсивний масаж.'
        },
        {
          q: 'Коли я побачу результати?',
          a: 'Після 3-4 сеансів помітні перші покращення. Повний ефект проявляється після 10-12 сеансів.'
        },
        {
          q: 'Чи можу я схуднути з цим?',
          a: 'RF-вакуум підтримує зменшення жиру, але не замінює здорове харчування та рух. Він контурує та підтягує проблемні зони.'
        },
        {
          q: 'Чи є період відновлення?',
          a: 'Ні, ви можете одразу повернутися до звичайної діяльності. Шкіра може бути злегка почервонілою, що проходить через 1-2 години.'
        }
      ]}
      ctaTitle={language === 'de' ? "Bereit für straffere, glattere Haut?" : language === 'ru' ? "Готовы к более упругой, гладкой коже?" : "Готові до більш пружної, гладкої шкіри?"}
      ctaDescription={language === 'de'
        ? "Buchen Sie jetzt Ihre RF-Vakuum Behandlung und verabschieden Sie sich von Cellulite!"
        : language === 'ru'
          ? "Запишитесь на процедуру RF-вакуум и попрощайтесь с целлюлитом!"
          : "Запишіться на процедуру RF-вакуум та попрощайтеся з целюлітом!"}
    />
  );
};

export default RFVakuum;
