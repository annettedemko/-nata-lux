'use client'

import { ServicePageLayout } from '@/components/ServicePageLayout';
import { Shield, Palette, Heart, Eye } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { PremiumGallery } from '@/components/PremiumGallery';
import { ServiceCard } from '@/components/ServiceCard';

const PMURemover = () => {
  const { language } = useLanguage();

  const galleryImages = ['/pmu-remover-behandlung.jpg', '/pmu-remover-ergebnis.jpg', '/pmu-remover-resultat.jpg', '/pmu-remover-vorher.jpg', '/pmu-remover-nachher.jpg'];

  const photoGallery = (
    <PremiumGallery images={galleryImages} />
  );

  // Recommended PMU services after removal
  const RecommendedServices = () => (
    <div className="mt-12">
      <h2 className="text-2xl md:text-3xl font-heading font-semibold text-brand-espresso mb-6 text-center">
        {language === 'de' ? 'Neues PMU nach Entfernung' : language === 'ru' ? 'Новый PMU после удаления' : 'Новий PMU після видалення'}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <ServiceCard
          title={language === 'de' ? 'Powder Brows' : language === 'ru' ? 'Пудровые брови' : 'Пудрові брови'}
          description={language === 'de' ? 'Moderne Pudertechnik für natürliche Augenbrauen' : language === 'ru' ? 'Современная пудровая техника для естественных бровей' : 'Сучасна пудрова техніка для природних брів'}
          icon={Palette}
          href="/services/powder-brows"
          image="/powder-brows-permanent-makeup-muenchen.jpg"
        />
        <ServiceCard
          title={language === 'de' ? 'Aquarell Lips' : language === 'ru' ? 'Акварельные губы' : 'Акварельні губи'}
          description={language === 'de' ? 'Natürliche Lippenpigmentierung' : language === 'ru' ? 'Естественная пигментация губ' : 'Природна пігментація губ'}
          icon={Heart}
          href="/services/aquarell-lips"
          image="/permanent-makeup-behandlung.jpeg"
        />
        <ServiceCard
          title={language === 'de' ? 'Wimpernkranz' : language === 'ru' ? 'Межресничка' : 'Міжвійка'}
          description={language === 'de' ? 'Permanent Make-up Wimpernkranz' : language === 'ru' ? 'Перманентный макияж межресничного пространства' : 'Перманентний макіяж міжвійкового простору'}
          icon={Eye}
          href="/services/wimpernkranz"
          image="/permanent-makeup-ergebnis-muenchen.jpg"
        />
      </div>
    </div>
  );

  return (
    <ServicePageLayout
      icon={Shield}
      title={language === 'de' ? "PMU Remover" : language === 'ru' ? "Удаление ПМ" : "Видалення ПМ"}
      subtitle={language === 'de'
        ? "Sichere Entfernung von Permanent Make-up – Professionell und schonend"
        : language === 'ru'
        ? "Безопасное удаление перманентного макияжа – Профессионально и щадяще"
        : "Безпечне видалення перманентного макіяжу – Професійно та щадно"}
      aboutTitle={language === 'de' ? "Was ist PMU Remover?" : language === 'ru' ? "Что такое PMU Remover?" : "Що таке PMU Remover?"}
      aboutDescription={language === 'de' ? [
        'PMU Remover ist eine professionelle Methode zur Entfernung von unerwünschtem oder veraltetem Permanent Make-up. Anders als Laserbehandlungen arbeitet der Remover mit speziellen Lösungen, die die Pigmente schonend aus der Haut lösen.',
        'Diese Methode ist besonders effektiv bei Fremdarbeiten, verblassten Farben oder wenn Sie einfach einen Neuanfang wünschen. Der Remover kann für Augenbrauen, Lippen und Eyeliner eingesetzt werden.',
        'Die Behandlung erfolgt in 2 Schritten: erst im Salon, dann mit Heimpflege für optimale Ergebnisse. Je nach Pigmentierung sind 1-3 Sitzungen nötig.'
      ] : language === 'ru' ? [
        'PMU Remover — это профессиональный метод удаления нежелательного или устаревшего перманентного макияжа. В отличие от лазерных процедур, ремувер работает со специальными растворами, которые мягко выводят пигменты из кожи.',
        'Этот метод особенно эффективен при неудачных работах, выцветших цветах или когда вы просто хотите начать заново. Ремувер можно использовать для бровей, губ и стрелок.',
        'Процедура проходит в 2 этапа: сначала в салоне, затем домашний уход для оптимальных результатов. В зависимости от пигментации требуется 1-3 сеанса.'
      ] : [
        'PMU Remover — це професійний метод видалення небажаного або застарілого перманентного макіяжу. На відміну від лазерних процедур, ремувер працює зі спеціальними розчинами, які м\'яко виводять пігменти зі шкіри.',
        'Цей метод особливо ефективний при невдалих роботах, вицвілих кольорах або коли ви просто хочете почати заново. Ремувер можна використовувати для брів, губ та стрілок.',
        'Процедура проходить у 2 етапи: спочатку в салоні, потім домашній догляд для оптимальних результатів. Залежно від пігментації потрібно 1-3 сеанси.'
      ]}
      benefits={language === 'de' ? [
        'Schonender als Laserbehandlung',
        'Funktioniert bei allen Farben (auch bei hellen Pigmenten)',
        'Keine Narbenbildung',
        'Präzise Entfernung möglich',
        'Kombinierbar mit Nachkorrektur',
        '2-Stufen-Verfahren für beste Ergebnisse',
        'Auch für empfindliche Haut geeignet',
        'Professionelle Betreuung während des gesamten Prozesses'
      ] : language === 'ru' ? [
        'Более щадящий, чем лазерная процедура',
        'Работает со всеми цветами (включая светлые пигменты)',
        'Без образования рубцов',
        'Возможно точечное удаление',
        'Совместим с последующей коррекцией',
        '2-этапная процедура для лучших результатов',
        'Подходит для чувствительной кожи',
        'Профессиональное сопровождение на протяжении всего процесса'
      ] : [
        'Більш щадний, ніж лазерна процедура',
        'Працює з усіма кольорами (включаючи світлі пігменти)',
        'Без утворення рубців',
        'Можливе точкове видалення',
        'Сумісний з подальшою корекцією',
        '2-етапна процедура для кращих результатів',
        'Підходить для чутливої шкіри',
        'Професійний супровід протягом усього процесу'
      ]}
      steps={language === 'de' ? [
        {
          title: 'Analyse & Beratung',
          description: 'Wir begutachten Ihr PMU und erstellen einen individuellen Behandlungsplan.'
        },
        {
          title: 'Salon-Behandlung',
          description: 'Auftragen der Remover-Lösung im Studio – präzise und kontrolliert.'
        },
        {
          title: 'Heimpflege',
          description: 'Sie erhalten spezielle Pflegeprodukte für die Nachbehandlung zu Hause.'
        },
        {
          title: 'Kontrolltermin',
          description: 'Nach 6-8 Wochen beurteilen wir das Ergebnis und entscheiden über weitere Sitzungen.'
        }
      ] : language === 'ru' ? [
        {
          title: 'Анализ и консультация',
          description: 'Мы оцениваем ваш перманентный макияж и составляем индивидуальный план процедур.'
        },
        {
          title: 'Процедура в салоне',
          description: 'Нанесение раствора ремувера в студии — точно и контролируемо.'
        },
        {
          title: 'Домашний уход',
          description: 'Вы получаете специальные средства для ухода дома.'
        },
        {
          title: 'Контрольный визит',
          description: 'Через 6-8 недель оцениваем результат и решаем о дальнейших сеансах.'
        }
      ] : [
        {
          title: 'Аналіз та консультація',
          description: 'Ми оцінюємо ваш перманентний макіяж та складаємо індивідуальний план процедур.'
        },
        {
          title: 'Процедура в салоні',
          description: 'Нанесення розчину ремувера у студії — точно та контрольовано.'
        },
        {
          title: 'Домашній догляд',
          description: 'Ви отримуєте спеціальні засоби для догляду вдома.'
        },
        {
          title: 'Контрольний візит',
          description: 'Через 6-8 тижнів оцінюємо результат та вирішуємо щодо подальших сеансів.'
        }
      ]}
      additionalSections={
        <>
          {photoGallery}
          <RecommendedServices />
        </>
      }
      priceSection="pmu"
      contraindications={language === 'de' ? [
        'Schwangerschaft und Stillzeit',
        'Aktive Hautinfektionen im Behandlungsbereich',
        'Einnahme von Blutverdünnern',
        'Sehr empfindliche oder zu Narbenbildung neigende Haut',
        'Chemotherapie oder Bestrahlung',
        'Diabetes (nur nach ärztlicher Abklärung)'
      ] : language === 'ru' ? [
        'Беременность и период кормления',
        'Активные кожные инфекции в зоне обработки',
        'Приём препаратов, разжижающих кровь',
        'Очень чувствительная кожа или склонность к рубцеванию',
        'Химиотерапия или облучение',
        'Диабет (только после консультации врача)'
      ] : [
        'Вагітність та період годування',
        'Активні шкірні інфекції в зоні обробки',
        'Прийом препаратів, що розріджують кров',
        'Дуже чутлива шкіра або схильність до рубцювання',
        'Хіміотерапія або опромінення',
        'Діабет (тільки після консультації лікаря)'
      ]}
      faq={language === 'de' ? [
        {
          q: 'Wie viele Sitzungen brauche ich?',
          a: 'Das hängt von der Intensität und Tiefe der Pigmentierung ab. Meist sind 1-3 Sitzungen nötig, mit 6-8 Wochen Abstand.'
        },
        {
          q: 'Ist die Entfernung schmerzhaft?',
          a: 'Die Behandlung ist mit betäubender Creme gut erträglich. Während der Heilungsphase kann leichtes Jucken auftreten.'
        },
        {
          q: 'Kann ich danach neues PMU machen lassen?',
          a: 'Ja, nach vollständiger Abheilung (ca. 8-12 Wochen nach der letzten Sitzung) kann neues PMU aufgetragen werden.'
        },
        {
          q: 'Warum ist Remover besser als Laser?',
          a: 'Der Remover funktioniert bei allen Farben (auch Rot, Orange, Weiß), während Laser nur dunkle Pigmente entfernt. Zudem ist er schonender zur Haut.'
        }
      ] : language === 'ru' ? [
        {
          q: 'Сколько сеансов мне нужно?',
          a: 'Это зависит от интенсивности и глубины пигментации. Обычно требуется 1-3 сеанса с интервалом 6-8 недель.'
        },
        {
          q: 'Болезненно ли удаление?',
          a: 'Процедура хорошо переносится с анестезирующим кремом. В период заживления может появиться лёгкий зуд.'
        },
        {
          q: 'Можно ли потом сделать новый перманент?',
          a: 'Да, после полного заживления (примерно 8-12 недель после последнего сеанса) можно нанести новый перманентный макияж.'
        },
        {
          q: 'Почему ремувер лучше лазера?',
          a: 'Ремувер работает со всеми цветами (включая красный, оранжевый, белый), тогда как лазер удаляет только тёмные пигменты. К тому же он более щадящий для кожи.'
        }
      ] : [
        {
          q: 'Скільки сеансів мені потрібно?',
          a: 'Це залежить від інтенсивності та глибини пігментації. Зазвичай потрібно 1-3 сеанси з інтервалом 6-8 тижнів.'
        },
        {
          q: 'Чи болісне видалення?',
          a: 'Процедура добре переноситься зі знеболюючим кремом. У період загоєння може з\'явитися легкий свербіж.'
        },
        {
          q: 'Чи можна потім зробити новий перманент?',
          a: 'Так, після повного загоєння (приблизно 8-12 тижнів після останнього сеансу) можна нанести новий перманентний макіяж.'
        },
        {
          q: 'Чому ремувер кращий за лазер?',
          a: 'Ремувер працює з усіма кольорами (включаючи червоний, оранжевий, білий), тоді як лазер видаляє лише темні пігменти. До того ж він більш щадний для шкіри.'
        }
      ]}
      ctaTitle={language === 'de' ? "Bereit für einen Neuanfang?" : language === 'ru' ? "Готовы к новому началу?" : "Готові до нового початку?"}
      ctaDescription={language === 'de'
        ? "Buchen Sie jetzt eine kostenlose Beratung und wir erstellen Ihren individuellen Behandlungsplan."
        : language === 'ru'
        ? "Запишитесь на бесплатную консультацию, и мы составим ваш индивидуальный план процедур."
        : "Запишіться на безкоштовну консультацію, і ми складемо ваш індивідуальний план процедур."}
    />
  );
};

export default PMURemover;
