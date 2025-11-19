'use client'

import { ServicePageLayout } from '@/components/ServicePageLayout';
import { Zap } from 'lucide-react';

const DarsonvalHaare = () => {
  return (
    <ServicePageLayout
      icon={Zap}
      title="Darsonval für Haare"
      subtitle="Wachstumsstimulation und Wurzelstärkung mit Hochfrequenzstrom"
      aboutTitle="Was ist Darsonval für Haare?"
      aboutDescription={[
        'Darsonval ist eine bewährte elektrotherapeutische Behandlung mit Hochfrequenzstrom, die die Kopfhaut stimuliert und das Haarwachstum anregt.',
        'Durch die sanften elektrischen Impulse werden die Durchblutung der Kopfhaut verbessert, die Haarfollikel gestärkt und die Nährstoffversorgung optimiert. Dies führt zu kräftigerem Haarwachstum und kann Haarausfall vorbeugen.',
        'Die Behandlung ist völlig schmerzfrei, angenehm und besonders effektiv in Kombination mit pflegenden Seren oder als Kur über mehrere Wochen.'
      ]}
      benefits={[
        'Stimulation des Haarwachstums',
        'Stärkung der Haarwurzeln',
        'Verbesserte Durchblutung der Kopfhaut',
        'Vorbeugung von Haarausfall',
        'Kräftigeres, gesünderes Haar',
        'Reduzierung von Schuppen',
        'Regulierung der Talgproduktion',
        'Antibakterielle Wirkung auf die Kopfhaut',
        'Schmerzfrei und entspannend'
      ]}
      steps={[
        {
          title: 'Analyse',
          description: 'Begutachtung der Kopfhaut und Besprechung Ihrer Haarprobleme.'
        },
        {
          title: 'Vorbereitung',
          description: 'Optional: Auftragen von pflegenden Seren für bessere Wirkstoffaufnahme.'
        },
        {
          title: 'Darsonval-Behandlung',
          description: 'Sanfte Behandlung der Kopfhaut mit Hochfrequenzstrom für 15-20 Minuten.'
        },
        {
          title: 'Abschlusspflege',
          description: 'Leichte Massage und Pflegetipps für zu Hause.'
        }
      ]}
      priceTable={[
        { service: 'Darsonval Kopfhaut (einzeln)', duration: '20 Min.', price: '35€' },
        { service: 'Darsonval + Serum-Behandlung', duration: '30 Min.', price: '55€' },
        { service: '5er-Kur Darsonval', duration: '5x 20 Min.', price: '150€' },
        { service: '10er-Kur Darsonval', duration: '10x 20 Min.', price: '280€' },
        { service: 'Darsonval als Zusatz zu anderen Behandlungen', duration: '+15 Min.', price: '20€' }
      ]}
      contraindications={[
        'Schwangerschaft',
        'Herzschrittmacher',
        'Epilepsie',
        'Thrombose',
        'Aktive Kopfhautinfektionen oder offene Wunden',
        'Metallimplantate im Kopfbereich',
        'Tumorerkrankungen'
      ]}
      faq={[
        {
          q: 'Wie oft sollte ich Darsonval machen?',
          a: 'Für optimale Ergebnisse empfehlen wir eine Kur von 10-15 Sitzungen, 2-3x pro Woche. Danach als Erhaltung 1-2x monatlich.'
        },
        {
          q: 'Wann sehe ich erste Ergebnisse?',
          a: 'Nach 4-6 Wochen regelmäßiger Anwendung werden die Haare kräftiger und das Wachstum wird angeregt. Geduld ist wichtig!'
        },
        {
          q: 'Spürt man etwas bei der Behandlung?',
          a: 'Sie spüren ein leichtes Kribbeln oder Prickeln, das angenehm und entspannend ist. Die Behandlung ist völlig schmerzfrei.'
        },
        {
          q: 'Hilft Darsonval bei Haarausfall?',
          a: 'Ja, Darsonval kann bei hormonell oder stressbedingtem Haarausfall helfen, indem es die Haarfollikel stimuliert. Bei schweren Formen empfehlen wir zusätzlich einen Dermatologen zu konsultieren.'
        }
      ]}
      ctaTitle="Bereit für kräftigeres, gesünderes Haar?"
      ctaDescription="Buchen Sie jetzt Ihre Darsonval-Behandlung und starten Sie Ihre Haar-Kur."
    />
  );
};

export default DarsonvalHaare;
