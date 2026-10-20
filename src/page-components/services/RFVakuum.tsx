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
            description={language === 'de' ? 'Ultraschall zur Unterstützung der Körperformung' : language === 'ru' ? 'Ультразвук для моделирования фигуры' : 'Ультразвук для моделювання фігури'}
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
        ? "Radiofrequenz mit Vakuum für ein strafferes, glatteres Hautbild"
        : language === 'ru'
          ? "Радиочастоты с вакуумом для более подтянутой и гладкой кожи"
          : "Радіочастоти з вакуумом для більш підтягнутої та гладкої шкіри"}
      aboutTitle={language === 'de' ? "Was ist RF-Vakuum?" : language === 'ru' ? "Что такое RF-вакуум?" : "Що таке RF-вакуум?"}
      aboutDescription={language === 'de' ? [
        'RF-Vakuum kombiniert zwei bewährte Technologien: Radiofrequenz-Wellen für ein strafferes Hautgefühl und Vakuum-Massage, die das Erscheinungsbild von Cellulite mildern und den Lymphfluss anregen kann.',
        'Die Radiofrequenz erwärmt die tiefen Hautschichten und kann die Kollagenbildung anregen, während die Vakuum-Massage die Durchblutung fördert, das Gewebe mobilisiert und das Hautbild bei Cellulite sichtbar glätten kann.',
        'Geeignet für Problemzonen wie Bauch, Gesäß, Oberschenkel und Arme. Die Kombination beider Technologien kann bereits nach wenigen Sitzungen sichtbare Ergebnisse ermöglichen.'
      ] : language === 'ru' ? [
        'RF-вакуум сочетает две проверенные технологии: радиочастотные волны для более подтянутой кожи и вакуумный массаж, который может сделать проявления целлюлита менее заметными и стимулировать лимфоток.',
        'Радиочастоты прогревают глубокие слои кожи и могут стимулировать выработку коллагена, а вакуумный массаж улучшает кровообращение, мобилизует ткани и может заметно выровнять рельеф кожи при целлюлите.',
        'Подходит для проблемных зон: живот, ягодицы, бёдра и руки. Сочетание обеих технологий может дать видимый результат уже после нескольких сеансов.'
      ] : [
        'RF-вакуум поєднує дві перевірені технології: радіочастотні хвилі для більш підтягнутої шкіри та вакуумний масаж, який може зробити прояви целюліту менш помітними та стимулювати лімфотік.',
        'Радіочастоти прогрівають глибокі шари шкіри та можуть стимулювати вироблення колагену, а вакуумний масаж покращує кровообіг, мобілізує тканини та може помітно вирівняти рельєф шкіри при целюліті.',
        'Підходить для проблемних зон: живіт, сідниці, стегна та руки. Поєднання обох технологій може дати видимий результат уже після кількох сеансів.'
      ]}
      benefits={language === 'de' ? [
        'Kann das Erscheinungsbild von Cellulite sichtbar mildern',
        'Hautstraffung und Konturierung',
        'Anregung des Lymphflusses',
        'Verbesserung der Durchblutung',
        'Mobilisierung des Gewebes',
        'Glattere, festere Haut',
        'Kann die Konturen sichtbar modellieren',
        'Keine Ausfallzeit',
        'In der Regel schmerzfreie Behandlung'
      ] : language === 'ru' ? [
        'Может заметно сгладить проявления целлюлита',
        'Подтяжка и контурирование кожи',
        'Стимуляция лимфотока',
        'Улучшение кровообращения',
        'Мобилизация тканей',
        'Более гладкая, упругая кожа',
        'Может заметно смоделировать контуры',
        'Без периода восстановления',
        'Как правило, безболезненная процедура'
      ] : [
        'Може помітно згладити прояви целюліту',
        'Підтяжка та контурування шкіри',
        'Стимуляція лімфотоку',
        'Покращення кровообігу',
        'Мобілізація тканин',
        'Більш гладка, пружна шкіра',
        'Може помітно змоделювати контури',
        'Без періоду відновлення',
        'Як правило, безболісна процедура'
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
          a: 'Für sichtbare Ergebnisse empfehlen wir 10-15 Sitzungen, 2x pro Woche. Die Effekte bauen sich über die Kur hinweg auf; das Ergebnis ist individuell unterschiedlich.'
        },
        {
          q: 'Ist die Behandlung schmerzhaft?',
          a: 'Nein, die Behandlung ist angenehm. Sie spüren Wärme und eine Massage-Wirkung, ähnlich wie eine intensive Massage.'
        },
        {
          q: 'Wann sehe ich Ergebnisse?',
          a: 'Erste Verbesserungen sind oft nach 3-4 Sitzungen sichtbar. Die volle Wirkung zeigt sich in der Regel nach 10-12 Sitzungen.'
        },
        {
          q: 'Kann ich damit abnehmen?',
          a: 'RF-Vakuum ist keine Methode zur Gewichtsreduktion und ersetzt keine gesunde Ernährung und Bewegung. Es kann jedoch helfen, Problemzonen sichtbar zu konturieren und das Hautbild zu straffen.'
        },
        {
          q: 'Gibt es Ausfallzeiten?',
          a: 'Nein, Sie können sofort wieder Ihren normalen Aktivitäten nachgehen. Die Haut kann leicht gerötet sein, was nach 1-2 Stunden verschwindet.'
        }
      ] : language === 'ru' ? [
        {
          q: 'Сколько сеансов мне нужно?',
          a: 'Для видимых результатов рекомендуем 10-15 сеансов, 2 раза в неделю. Эффект накапливается в течение курса; результат индивидуален.'
        },
        {
          q: 'Болезненна ли процедура?',
          a: 'Нет, процедура приятная. Вы ощущаете тепло и массажный эффект, похоже на интенсивный массаж.'
        },
        {
          q: 'Когда я увижу результаты?',
          a: 'Первые улучшения часто заметны после 3-4 сеансов. Полный эффект, как правило, проявляется после 10-12 сеансов.'
        },
        {
          q: 'Могу ли я похудеть с этим?',
          a: 'RF-вакуум не является методом снижения веса и не заменяет здоровое питание и движение. Однако он может помочь заметно смоделировать контуры проблемных зон и подтянуть кожу.'
        },
        {
          q: 'Есть ли период восстановления?',
          a: 'Нет, вы можете сразу вернуться к обычной деятельности. Кожа может быть слегка покрасневшей, что проходит через 1-2 часа.'
        }
      ] : [
        {
          q: 'Скільки сеансів мені потрібно?',
          a: 'Для видимих результатів рекомендуємо 10-15 сеансів, 2 рази на тиждень. Ефект накопичується протягом курсу; результат індивідуальний.'
        },
        {
          q: 'Чи болісна процедура?',
          a: 'Ні, процедура приємна. Ви відчуваєте тепло та масажний ефект, схоже на інтенсивний масаж.'
        },
        {
          q: 'Коли я побачу результати?',
          a: 'Перші покращення часто помітні після 3-4 сеансів. Повний ефект, як правило, проявляється після 10-12 сеансів.'
        },
        {
          q: 'Чи можу я схуднути з цим?',
          a: 'RF-вакуум не є методом зниження ваги і не замінює здорове харчування та рух. Однак він може допомогти помітно змоделювати контури проблемних зон і підтягнути шкіру.'
        },
        {
          q: 'Чи є період відновлення?',
          a: 'Ні, ви можете одразу повернутися до звичайної діяльності. Шкіра може бути злегка почервонілою, що проходить через 1-2 години.'
        }
      ]}
      ctaTitle={language === 'de' ? "Bereit für straffere, glattere Haut?" : language === 'ru' ? "Готовы к более упругой, гладкой коже?" : "Готові до більш пружної, гладкої шкіри?"}
      ctaDescription={language === 'de'
        ? "Buchen Sie jetzt Ihre RF-Vakuum Behandlung für ein sichtbar glatteres Hautbild!"
        : language === 'ru'
          ? "Запишитесь на процедуру RF-вакуум для заметно более гладкой кожи!"
          : "Запишіться на процедуру RF-вакуум для помітно більш гладкої шкіри!"}
    />
  );
};

export default RFVakuum;
