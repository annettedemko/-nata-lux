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
        ? "Aufhellung und Entfernung von Permanent Make-up – Professionell und schonend"
        : language === 'ru'
        ? "Осветление и удаление перманентного макияжа – Профессионально и щадяще"
        : "Освітлення та видалення перманентного макіяжу – Професійно та щадно"}
      aboutTitle={language === 'de' ? "Was ist PMU Remover?" : language === 'ru' ? "Что такое PMU Remover?" : "Що таке PMU Remover?"}
      aboutDescription={language === 'de' ? [
        'PMU Remover ist eine professionelle Methode zur Entfernung von unerwünschtem oder veraltetem Permanent Make-up. Anders als Laserbehandlungen arbeitet der Remover mit speziellen Lösungen, die die Pigmente schonend und schrittweise aus der Haut lösen können.',
        'Diese Methode eignet sich besonders bei Fremdarbeiten, verblassten Farben oder wenn Sie einfach einen Neuanfang wünschen. Der Remover kann für Augenbrauen, Lippen und Eyeliner eingesetzt werden.',
        'Die Behandlung erfolgt in 2 Schritten: erst im Salon, dann mit Heimpflege. Die Anzahl der Sitzungen ist individuell – je nach Pigmentierung in der Regel 1-3.'
      ] : language === 'ru' ? [
        'PMU Remover — это профессиональный метод удаления нежелательного или устаревшего перманентного макияжа. В отличие от лазерных процедур, ремувер работает со специальными растворами, которые могут мягко и постепенно выводить пигменты из кожи.',
        'Этот метод особенно подходит при неудачных работах, выцветших цветах или когда вы просто хотите начать заново. Ремувер можно использовать для бровей, губ и стрелок.',
        'Процедура проходит в 2 этапа: сначала в салоне, затем домашний уход. Количество сеансов индивидуально — в зависимости от пигментации обычно 1-3.'
      ] : [
        'PMU Remover — це професійний метод видалення небажаного або застарілого перманентного макіяжу. На відміну від лазерних процедур, ремувер працює зі спеціальними розчинами, які можуть м\'яко та поступово виводити пігменти зі шкіри.',
        'Цей метод особливо підходить при невдалих роботах, вицвілих кольорах або коли ви просто хочете почати заново. Ремувер можна використовувати для брів, губ та стрілок.',
        'Процедура проходить у 2 етапи: спочатку в салоні, потім домашній догляд. Кількість сеансів індивідуальна — залежно від пігментації зазвичай 1-3.'
      ]}
      benefits={language === 'de' ? [
        'In vielen Fällen schonender als Laserbehandlung',
        'Für verschiedene Farben geeignet (auch für helle Pigmente)',
        'Geringes Narbenrisiko bei fachgerechter Anwendung',
        'Präzise, punktuelle Behandlung möglich',
        'Kombinierbar mit Nachkorrektur',
        'Durchdachtes 2-Stufen-Verfahren',
        'Nach Absprache auch bei empfindlicher Haut möglich',
        'Professionelle Betreuung während des gesamten Prozesses'
      ] : language === 'ru' ? [
        'Во многих случаях более щадящий, чем лазерная процедура',
        'Подходит для разных цветов (включая светлые пигменты)',
        'Низкий риск рубцов при профессиональном применении',
        'Возможна точечная обработка',
        'Совместим с последующей коррекцией',
        'Продуманная 2-этапная процедура',
        'После консультации возможно и при чувствительной коже',
        'Профессиональное сопровождение на протяжении всего процесса'
      ] : [
        'У багатьох випадках більш щадний, ніж лазерна процедура',
        'Підходить для різних кольорів (включаючи світлі пігменти)',
        'Низький ризик рубців при професійному застосуванні',
        'Можлива точкова обробка',
        'Сумісний з подальшою корекцією',
        'Продумана 2-етапна процедура',
        'Після консультації можливо і при чутливій шкірі',
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
          q: 'Worin unterscheidet sich der Remover vom Laser?',
          a: 'Der Remover kann bei allen Farben eingesetzt werden (auch Rot, Orange, Weiß), während Laser vor allem bei dunklen Pigmenten wirkt. Zudem gilt er als hautschonender. Das individuelle Ergebnis hängt von Pigment und Haut ab.'
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
          q: 'Чем ремувер отличается от лазера?',
          a: 'Ремувер можно применять при любых цветах (включая красный, оранжевый, белый), тогда как лазер действует в основном на тёмные пигменты. Кроме того, он считается более щадящим для кожи. Индивидуальный результат зависит от пигмента и кожи.'
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
          q: 'Чим ремувер відрізняється від лазера?',
          a: 'Ремувер можна застосовувати за будь-яких кольорів (включаючи червоний, оранжевий, білий), тоді як лазер діє переважно на темні пігменти. Крім того, він вважається більш щадним для шкіри. Індивідуальний результат залежить від пігменту та шкіри.'
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
