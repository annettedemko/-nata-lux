'use client'

import { ServicePageLayout } from '@/components/ServicePageLayout';
import { Shield } from 'lucide-react';

const HautveraenderungenEntfernen = () => {
  return (
    <ServicePageLayout
      icon={Shield}
      title="Hautveränderungen entfernen"
      subtitle="Sichere Entfernung von Papillomen und Warzen in Zusammenarbeit mit Dermatologen"
      aboutTitle="Was sind Hautveränderungen?"
      aboutDescription={[
        'Hautveränderungen wie Papillome (Hautanhängsel, Fibrome), Warzen und andere gutartige Wucherungen sind häufig und meist harmlos, können aber kosmetisch störend sein.',
        'Wir bieten die professionelle Entfernung solcher Hautveränderungen in enger Zusammenarbeit mit erfahrenen Dermatologen an. Vor jeder Behandlung erfolgt eine dermatologische Untersuchung zur Abklärung.',
        'Die Entfernung erfolgt mittels modernster Methoden wie Elektrokoagulation oder Laser – schnell, präzise und mit minimaler Narbenbildung.'
      ]}
      benefits={[
        'Professionelle Entfernung unter dermatologischer Aufsicht',
        'Schnelle, präzise Behandlung',
        'Minimale Narbenbildung',
        'Lokale Betäubung für schmerzfreie Behandlung',
        'Sofortige Ergebnisse',
        'Sichere Methoden mit modernen Geräten',
        'Histologische Untersuchung bei Bedarf möglich',
        'Verbesserung des Hautbildes'
      ]}
      steps={[
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
      ]}
      priceTable={[
        { service: 'Dermatologische Beratung', duration: '30 Min.', price: '50€' },
        { service: 'Entfernung klein (1-3 mm)', duration: '15 Min.', price: 'ab 40€' },
        { service: 'Entfernung mittel (3-5 mm)', duration: '20 Min.', price: 'ab 60€' },
        { service: 'Entfernung groß (>5 mm)', duration: '30 Min.', price: 'ab 90€' },
        { service: 'Mehrere Hautveränderungen (Paket)', duration: 'variabel', price: 'ab 150€' },
        { service: 'Histologische Untersuchung', duration: '-', price: '+ 80€' }
      ]}
      contraindications={[
        'Schwangerschaft (nur nach Rücksprache)',
        'Einnahme von Blutverdünnern (bitte vorab mitteilen)',
        'Herzschrittmacher bei Elektrokoagulation',
        'Verdacht auf maligne Veränderungen (erfordert Biopsie)',
        'Aktive Hautinfektionen im Behandlungsbereich',
        'Keloidneigung'
      ]}
      faq={[
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
      ]}
      ctaTitle="Bereit für ein makelloses Hautbild?"
      ctaDescription="Vereinbaren Sie jetzt eine dermatologische Beratung und lassen Sie Hautveränderungen professionell entfernen."
    />
  );
};

export default HautveraenderungenEntfernen;
