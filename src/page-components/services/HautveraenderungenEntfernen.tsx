'use client'

import { ServicePageLayout } from '@/components/ServicePageLayout';
import { Shield, Droplet, Sun, Zap } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import Image from 'next/image';
import { ServiceCard } from '@/components/ServiceCard';

const HautveraenderungenEntfernen = () => {
  const { language } = useLanguage();
  const isGerman = language === 'de';

  const beforeAfterSection = (
    <section className="glass rounded-2xl p-8 mb-12 animate-slide-up" style={{ animationDelay: '250ms' }}>
      <h2 className="text-2xl font-heading font-semibold text-brand-espresso mb-6 text-center">
        {language === 'de' ? 'Vorher / Nachher' : language === 'ru' ? 'До / После' : 'До / После'}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
        <div className="text-center">
          <div className="relative aspect-square rounded-xl overflow-hidden mb-2">
            <Image
              src="/66.jpeg"
              alt={language === 'de' ? 'Vorher' : language === 'ru' ? 'До' : 'До'}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <p className="text-brand-coffee/70 font-medium">{language === 'de' ? 'Vorher' : language === 'ru' ? 'До' : 'До'}</p>
        </div>
        <div className="text-center">
          <div className="relative aspect-square rounded-xl overflow-hidden mb-2">
            <Image
              src="/67.jpeg"
              alt={language === 'de' ? 'Nachher' : language === 'ru' ? 'После' : 'После'}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <p className="text-brand-coffee/70 font-medium">{language === 'de' ? 'Nachher' : language === 'ru' ? 'После' : 'После'}</p>
        </div>
      </div>
    </section>
  );

  // Recommended facial care services
  const RecommendedServices = () => (
    <div className="mt-12">
      <h2 className="text-2xl md:text-3xl font-heading font-semibold text-brand-espresso mb-6 text-center">
        {language === 'de' ? 'Hautpflege nach der Behandlung' : language === 'ru' ? 'Уход за кожей после процедуры' : 'Догляд за кожей после процедуры'}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <ServiceCard
          title={language === 'de' ? 'Gesichtsreinigung' : language === 'ru' ? 'Чистка лица' : 'Чистка обличчя'}
          description={language === 'de' ? 'Tiefenreinigung für reine Haut' : language === 'ru' ? 'Глубокое очищение для чистой кожи' : 'Глубокое очищение для чистой кожи'}
          icon={Droplet}
          href="/services/gesichtsreinigung"
          image="/51.jpg"
        />
        <ServiceCard
          title={language === 'de' ? 'Lichttherapie' : language === 'ru' ? 'Светотерапия' : 'Светотерапия'}
          description={language === 'de' ? 'LED-Licht für Regeneration' : language === 'ru' ? 'LED-свет для регенерации' : 'LED-свет для регенерации'}
          icon={Sun}
          href="/services/apparative-anti-aging/lichttherapie"
          image="/124.jpeg"
        />
        <ServiceCard
          title={language === 'de' ? 'Phonophorese' : language === 'ru' ? 'Фонофорез' : 'Фонофорез'}
          description={language === 'de' ? 'Tiefenwirksame Hautpflege' : language === 'ru' ? 'Глубокий уход за кожей' : 'Глубокий уход за кожей'}
          icon={Zap}
          href="/services/phonophorese"
          image="/128.jpeg"
        />
      </div>
    </div>
  );

  return (
    <ServicePageLayout
      icon={Shield}
      title={language === 'de' ? "Hautveränderungen entfernen" : language === 'ru' ? "Удаление новообразований кожи" : "Видалення новообразований кожи"}
      subtitle={isGerman
        ? "Sichere Entfernung von Papillomen und Warzen in Zusammenarbeit mit Dermatologen"
        : "Безопасное удаление папиллом и бородавок в сотрудничестве с дерматологами"}
      aboutTitle={language === 'de' ? "Was sind Hautveränderungen?" : language === 'ru' ? "Что такое новообразования кожи?" : "Что такое новообразования кожи?"}
      aboutDescription={isGerman ? [
        'Hautveränderungen wie Papillome (Hautanhängsel, Fibrome), Warzen und andere gutartige Wucherungen sind häufig und meist harmlos, können aber kosmetisch störend sein.',
        'Wir bieten die professionelle Entfernung solcher Hautveränderungen in enger Zusammenarbeit mit erfahrenen Dermatologen an. Vor jeder Behandlung erfolgt eine dermatologische Untersuchung zur Abklärung.',
        'Die Entfernung erfolgt mittels modernster Methoden wie Elektrokoagulation oder Laser – schnell, präzise und mit minimaler Narbenbildung.'
      ] : [
        'Новообразования кожи, такие как папилломы, фибромы, бородавки и другие доброкачественные образования, встречаются часто и обычно безвредны, но могут доставлять косметический дискомфорт.',
        'Мы предлагаем профессиональное удаление таких образований в тесном сотрудничестве с опытными дерматологами. Перед каждой процедурой проводится дерматологическое обследование.',
        'Удаление проводится современными методами, такими как электрокоагуляция или лазер — быстро, точно и с минимальным рубцеванием.'
      ]}
      benefits={isGerman ? [
        'Professionelle Entfernung unter dermatologischer Aufsicht',
        'Schnelle, präzise Behandlung',
        'Minimale Narbenbildung',
        'Lokale Betäubung für schmerzfreie Behandlung',
        'Sofortige Ergebnisse',
        'Sichere Methoden mit modernen Geräten',
        'Histologische Untersuchung bei Bedarf möglich',
        'Verbesserung des Hautbildes'
      ] : [
        'Профессиональное удаление под наблюдением дерматолога',
        'Быстрая, точная процедура',
        'Минимальное рубцевание',
        'Местная анестезия для безболезненной процедуры',
        'Мгновенные результаты',
        'Безопасные методы с современным оборудованием',
        'Возможность гистологического исследования',
        'Улучшение состояния кожи'
      ]}
      steps={isGerman ? [
        {
          title: 'Dermatologische Konsultation',
          description: 'Ein Dermatologe untersucht die Hautveränderung und stellt die Diagnose.'
        },
        {
          title: 'Behandlungsplan',
          description: 'Gemeinsam legen wir die optimale Entfernungsmethode fest.'
        },
        {
          title: 'Entfernung',
          description: 'Präzise Entfernung mit Elektrokoagulation oder Laser unter lokaler Betäubung.'
        },
        {
          title: 'Nachsorge',
          description: 'Pflegeanweisungen und bei Bedarf Kontrolltermin.'
        }
      ] : [
        {
          title: 'Консультация дерматолога',
          description: 'Дерматолог осматривает образование и ставит диагноз.'
        },
        {
          title: 'План лечения',
          description: 'Вместе определяем оптимальный метод удаления.'
        },
        {
          title: 'Удаление',
          description: 'Точное удаление электрокоагуляцией или лазером под местной анестезией.'
        },
        {
          title: 'Уход после процедуры',
          description: 'Инструкции по уходу и при необходимости контрольный визит.'
        }
      ]}
      additionalSections={
        <>
          {beforeAfterSection}
          <RecommendedServices />
        </>
      }
      priceSection="skin-changes"
      contraindications={isGerman ? [
        'Schwangerschaft (nur nach Rücksprache)',
        'Einnahme von Blutverdünnern (bitte vorab mitteilen)',
        'Herzschrittmacher bei Elektrokoagulation',
        'Verdacht auf maligne Veränderungen (erfordert Biopsie)',
        'Aktive Hautinfektionen im Behandlungsbereich',
        'Keloidneigung'
      ] : [
        'Беременность (только после консультации)',
        'Приём препаратов, разжижающих кровь (сообщите заранее)',
        'Кардиостимулятор при электрокоагуляции',
        'Подозрение на злокачественные изменения (требует биопсии)',
        'Активные кожные инфекции в зоне обработки',
        'Склонность к образованию келоидных рубцов'
      ]}
      faq={isGerman ? [
        {
          q: 'Ist die Entfernung schmerzhaft?',
          a: 'Nein, wir verwenden lokale Betäubung. Sie spüren nur einen kleinen Pieks beim Setzen der Betäubung, die Entfernung selbst ist schmerzfrei.'
        },
        {
          q: 'Bleiben Narben zurück?',
          a: 'Bei professioneller Durchführung sind Narben minimal und oft kaum sichtbar. Die Heilung dauert ca. 7-14 Tage.'
        },
        {
          q: 'Muss ich zur Kontrolle zum Dermatologen?',
          a: 'Ja, vor jeder Entfernung ist eine dermatologische Abklärung notwendig, um sicherzustellen, dass es sich um gutartige Veränderungen handelt.'
        },
        {
          q: 'Können Hautveränderungen wiederkommen?',
          a: 'Nach vollständiger Entfernung an derselben Stelle eher selten, aber neue Papillome oder Warzen können an anderen Stellen entstehen.'
        },
        {
          q: 'Übernimmt die Krankenkasse die Kosten?',
          a: 'Nur bei medizinischer Indikation. Rein kosmetische Entfernungen sind Selbstzahlerleistungen.'
        }
      ] : [
        {
          q: 'Болезненно ли удаление?',
          a: 'Нет, мы используем местную анестезию. Вы почувствуете только лёгкий укол при введении анестетика, само удаление безболезненно.'
        },
        {
          q: 'Остаются ли рубцы?',
          a: 'При профессиональном выполнении рубцы минимальны и часто практически незаметны. Заживление длится около 7-14 дней.'
        },
        {
          q: 'Нужно ли проходить осмотр у дерматолога?',
          a: 'Да, перед каждым удалением необходима дерматологическая диагностика, чтобы убедиться, что образования доброкачественные.'
        },
        {
          q: 'Могут ли образования появиться снова?',
          a: 'После полного удаления на том же месте редко, но новые папилломы или бородавки могут появиться в других местах.'
        },
        {
          q: 'Покрывает ли страховка расходы?',
          a: 'Только при медицинских показаниях. Чисто косметические удаления оплачиваются пациентом.'
        }
      ]}
      ctaTitle={language === 'de' ? "Bereit für ein makelloses Hautbild?" : language === 'ru' ? "Готовы к безупречной коже?" : "Готовы к безупречной коже?"}
      ctaDescription={isGerman
        ? "Vereinbaren Sie jetzt eine dermatologische Beratung und lassen Sie Hautveränderungen professionell entfernen."
        : "Запишитесь на дерматологическую консультацию и удалите образования профессионально."}
    />
  );
};

export default HautveraenderungenEntfernen;
