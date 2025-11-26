'use client'

import { ServicePageLayout } from '@/components/ServicePageLayout';
import { Shield, Palette, Heart, Eye } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { PremiumGallery } from '@/components/PremiumGallery';
import { ServiceCard } from '@/components/ServiceCard';

const PMURemover = () => {
  const { language } = useLanguage();
  const isGerman = language === 'de';

  const galleryImages = ['/103.jpg', '/111.jpg', '/115.jpg', '/109.jpg', '/110.jpg'];

  const photoGallery = (
    <PremiumGallery images={galleryImages} />
  );

  // Recommended PMU services after removal
  const RecommendedServices = () => (
    <div className="mt-12">
      <h2 className="text-2xl md:text-3xl font-heading font-semibold text-brand-espresso mb-6 text-center">
        {isGerman ? 'Neues PMU nach Entfernung' : 'Новый PMU после удаления'}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <ServiceCard
          title="Powder Brows"
          description={isGerman ? 'Moderne Pudertechnik für natürliche Augenbrauen' : 'Современная пудровая техника для естественных бровей'}
          icon={Palette}
          href="/services/powder-brows"
          image="/147.jpeg"
        />
        <ServiceCard
          title="Aquarell Lips"
          description={isGerman ? 'Natürliche Lippenpigmentierung' : 'Естественная пигментация губ'}
          icon={Heart}
          href="/services/aquarell-lips"
          image="/52.jpg"
        />
        <ServiceCard
          title={isGerman ? 'Wimpernkranz' : 'Межресничка'}
          description={isGerman ? 'Permanent Make-up Wimpernkranz' : 'Перманентный макияж межресничного пространства'}
          icon={Eye}
          href="/services/wimpernkranz"
          image="/56.jpg"
        />
      </div>
    </div>
  );

  return (
    <ServicePageLayout
      icon={Shield}
      title="PMU Remover"
      subtitle={isGerman
        ? "Sichere Entfernung von Permanent Make-up – Professionell und schonend"
        : "Безопасное удаление перманентного макияжа – Профессионально и щадяще"}
      aboutTitle={isGerman ? "Was ist PMU Remover?" : "Что такое PMU Remover?"}
      aboutDescription={isGerman ? [
        'PMU Remover ist eine professionelle Methode zur Entfernung von unerwünschtem oder veraltetem Permanent Make-up. Anders als Laserbehandlungen arbeitet der Remover mit speziellen Lösungen, die die Pigmente schonend aus der Haut lösen.',
        'Diese Methode ist besonders effektiv bei Fremdarbeiten, verblassten Farben oder wenn Sie einfach einen Neuanfang wünschen. Der Remover kann für Augenbrauen, Lippen und Eyeliner eingesetzt werden.',
        'Die Behandlung erfolgt in 2 Schritten: erst im Salon, dann mit Heimpflege für optimale Ergebnisse. Je nach Pigmentierung sind 1-3 Sitzungen nötig.'
      ] : [
        'PMU Remover — это профессиональный метод удаления нежелательного или устаревшего перманентного макияжа. В отличие от лазерных процедур, ремувер работает со специальными растворами, которые мягко выводят пигменты из кожи.',
        'Этот метод особенно эффективен при неудачных работах, выцветших цветах или когда вы просто хотите начать заново. Ремувер можно использовать для бровей, губ и стрелок.',
        'Процедура проходит в 2 этапа: сначала в салоне, затем домашний уход для оптимальных результатов. В зависимости от пигментации требуется 1-3 сеанса.'
      ]}
      benefits={isGerman ? [
        'Schonender als Laserbehandlung',
        'Funktioniert bei allen Farben (auch bei hellen Pigmenten)',
        'Keine Narbenbildung',
        'Präzise Entfernung möglich',
        'Kombinierbar mit Nachkorrektur',
        '2-Stufen-Verfahren für beste Ergebnisse',
        'Auch für empfindliche Haut geeignet',
        'Professionelle Betreuung während des gesamten Prozesses'
      ] : [
        'Более щадящий, чем лазерная процедура',
        'Работает со всеми цветами (включая светлые пигменты)',
        'Без образования рубцов',
        'Возможно точечное удаление',
        'Совместим с последующей коррекцией',
        '2-этапная процедура для лучших результатов',
        'Подходит для чувствительной кожи',
        'Профессиональное сопровождение на протяжении всего процесса'
      ]}
      steps={isGerman ? [
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
      ] : [
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
      ]}
      additionalSections={
        <>
          {photoGallery}
          <RecommendedServices />
        </>
      }
      priceSection="pmu"
      contraindications={isGerman ? [
        'Schwangerschaft und Stillzeit',
        'Aktive Hautinfektionen im Behandlungsbereich',
        'Einnahme von Blutverdünnern',
        'Sehr empfindliche oder zu Narbenbildung neigende Haut',
        'Chemotherapie oder Bestrahlung',
        'Diabetes (nur nach ärztlicher Abklärung)'
      ] : [
        'Беременность и период кормления',
        'Активные кожные инфекции в зоне обработки',
        'Приём препаратов, разжижающих кровь',
        'Очень чувствительная кожа или склонность к рубцеванию',
        'Химиотерапия или облучение',
        'Диабет (только после консультации врача)'
      ]}
      faq={isGerman ? [
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
      ] : [
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
      ]}
      ctaTitle={isGerman ? "Bereit für einen Neuanfang?" : "Готовы к новому началу?"}
      ctaDescription={isGerman
        ? "Buchen Sie jetzt eine kostenlose Beratung und wir erstellen Ihren individuellen Behandlungsplan."
        : "Запишитесь на бесплатную консультацию, и мы составим ваш индивидуальный план процедур."}
    />
  );
};

export default PMURemover;
