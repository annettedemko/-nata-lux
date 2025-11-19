'use client'

import { ServicePageLayout } from '@/components/ServicePageLayout';
import { Zap } from 'lucide-react';

const DiodenLaser = () => {
  return (
    <ServicePageLayout
      icon={Zap}
      title="Dioden Laser Haarentfernung"
      subtitle="Für alle Hauttypen geeignet – Schonend, effektiv und dauerhaft"
      aboutTitle="Was ist der Dioden Laser?"
      aboutDescription={[
        'Der Dioden Laser ist eine vielseitige Laser-Technologie zur dauerhaften Haarentfernung, die für ALLE Hauttypen geeignet ist – von sehr hell bis dunkel (Hauttyp I-VI nach Fitzpatrick).',
        'Mit einer Wellenlänge von 808 nm dringt der Dioden Laser tiefer in die Haut ein als andere Laser und ist dadurch besonders effektiv bei dickeren, stärkeren Haaren. Gleichzeitig ist er schonend zur Haut und verursacht kaum Schmerzen.',
        'Dank moderner Kühlsysteme ist die Behandlung angenehm und sicher. Der Dioden Laser ist die erste Wahl für dunkle Hauttöne, empfindliche Bereiche und alle, die Wert auf Komfort legen.'
      ]}
      benefits={[
        'Für ALLE Hauttypen geeignet (auch dunkle Haut)',
        'Besonders effektiv bei dicken, starken Haaren',
        'Schonend und nahezu schmerzfrei',
        'Schnelle Behandlung großer Flächen',
        'Dauerhafte Haarentfernung',
        'Sicher auch für empfindliche Bereiche',
        'Modernste Kühltechnologie',
        'Klinisch getestet und FDA-zugelassen',
        'Weniger Nebenwirkungen als andere Methoden'
      ]}
      steps={[
        {
          title: 'Kostenlose Beratung',
          description: 'Hauttyp-Bestimmung und individueller Behandlungsplan.'
        },
        {
          title: 'Vorbereitung',
          description: 'Rasur und Desinfektion der Behandlungszone. Auftragen von Kühlgel.'
        },
        {
          title: 'Laser-Behandlung',
          description: 'Gezielte Laserimpulse zerstören die Haarwurzeln dauerhaft. Integrierte Kühlung sorgt für Komfort.'
        },
        {
          title: 'Nachpflege',
          description: 'Beruhigende Pflege und Empfehlungen für die nächsten Tage.'
        }
      ]}
      priceTable={[
        { service: 'Oberlippe', duration: '10 Min.', price: 'ab 30€' },
        { service: 'Achseln', duration: '15 Min.', price: 'ab 50€' },
        { service: 'Bikinizone klassisch', duration: '20 Min.', price: 'ab 60€' },
        { service: 'Bikinizone komplett (Brazilian)', duration: '30 Min.', price: 'ab 90€' },
        { service: 'Unterschenkel', duration: '30 Min.', price: 'ab 120€' },
        { service: 'Ganzbein', duration: '60 Min.', price: 'ab 200€' },
        { service: 'Rücken (Herren)', duration: '45 Min.', price: 'ab 150€' },
        { service: 'Brust (Herren)', duration: '30 Min.', price: 'ab 100€' },
        { service: 'Gesicht komplett', duration: '30 Min.', price: 'ab 80€' }
      ]}
      contraindications={[
        'Schwangerschaft und Stillzeit',
        'Aktive Hautinfektionen oder Herpes',
        'Einnahme von photosensibilisierenden Medikamenten',
        'Frische Tätowierungen im Behandlungsbereich',
        'Sehr helle oder graue Haare',
        'Aktive Bräune (2 Wochen Abstand zu Sonne/Solarium)'
      ]}
      faq={[
        {
          q: 'Wie viele Sitzungen brauche ich?',
          a: '6-10 Sitzungen im Abstand von 4-8 Wochen. Bei dickeren Haaren oder hormonell bedingtem Haarwuchs können mehr Sitzungen nötig sein.'
        },
        {
          q: 'Ist der Dioden Laser auch für dunkle Haut geeignet?',
          a: 'Ja! Der Dioden Laser ist die sicherste Option für dunkle Hauttöne (Hauttyp V-VI), da er tiefer eindringt und die Hautoberfläche schont.'
        },
        {
          q: 'Tut die Behandlung weh?',
          a: 'Die Behandlung ist mit moderner Kühlung sehr gut erträglich. Die meisten Kunden empfinden nur ein leichtes Wärmegefühl.'
        },
        {
          q: 'Was ist der Unterschied zum Alexandrit Laser?',
          a: 'Der Dioden Laser ist vielseitiger und für alle Hauttypen geeignet, während der Alexandrit Laser speziell für helle Haut optimiert ist.'
        },
        {
          q: 'Wie bereite ich mich auf die Behandlung vor?',
          a: 'Rasieren Sie die Zone am Tag der Behandlung. Vermeiden Sie 4 Wochen vorher Sonne, Solarium und Selbstbräuner. Nicht waxen oder epilieren!'
        }
      ]}
      ctaTitle="Bereit für dauerhaft glatte Haut?"
      ctaDescription="Buchen Sie jetzt Ihre kostenlose Beratung und profitieren Sie von modernster Laser-Technologie."
    />
  );
};

export default DiodenLaser;
