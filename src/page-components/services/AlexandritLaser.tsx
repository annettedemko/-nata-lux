'use client'

import { ServicePageLayout } from '@/components/ServicePageLayout';
import { Zap } from 'lucide-react';

const AlexandritLaser = () => {
  return (
    <ServicePageLayout
      icon={Zap}
      title="Alexandrit Laser Haarentfernung"
      subtitle="Ideal für helle Haut und dunkles Haar – Schnell, effektiv und dauerhaft"
      aboutTitle="Was ist der Alexandrit Laser?"
      aboutDescription={[
        'Der Alexandrit Laser ist der Goldstandard für dauerhafte Haarentfernung bei hellen bis mittleren Hauttönen. Mit einer Wellenlänge von 755 nm zielt er präzise auf das Melanin im Haarfollikel ab und zerstört diesen nachhaltig.',
        'Diese Technologie ist besonders effektiv bei dunklen Haaren auf heller Haut (Hauttyp I-IV nach Fitzpatrick). Die Behandlung ist schnell, nahezu schmerzfrei dank integriertem Kühlsystem und liefert langanhaltende Ergebnisse.',
        'Im Vergleich zu anderen Lasern ist der Alexandrit Laser durch seine kurze Wellenlänge besonders präzise und erzielt bereits nach wenigen Sitzungen sichtbare Ergebnisse.'
      ]}
      benefits={[
        'Dauerhafte Haarentfernung – für immer glatte Haut',
        'Besonders effektiv bei dunklen Haaren',
        'Schnelle Behandlung großer Flächen',
        'Integrierte Kühlung für mehr Komfort',
        'Deutlich weniger schmerzhaft als Waxing',
        'Sichtbare Ergebnisse nach 1-2 Sitzungen',
        'Kein Einwachsen der Haare mehr',
        'Sehr präzise und effektiv',
        'FDA-zugelassen und sicher'
      ]}
      steps={[
        {
          title: 'Kostenlose Beratung',
          description: 'Hauttyp-Analyse und Bestimmung der optimalen Behandlungsparameter.'
        },
        {
          title: 'Vorbereitung',
          description: 'Die Behandlungszone wird rasiert und desinfiziert. Ein Kühlgel wird aufgetragen.'
        },
        {
          title: 'Laser-Behandlung',
          description: 'Gezielte Laserimpulse zerstören die Haarfollikel. Die integrierte Kühlung sorgt für Komfort.'
        },
        {
          title: 'Nachpflege',
          description: 'Beruhigende Pflege und Sonnenschutz-Empfehlungen für optimale Heilung.'
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
        { service: 'Brust (Herren)', duration: '30 Min.', price: 'ab 100€' }
      ]}
      contraindications={[
        'Gebräunte oder sehr dunkle Haut (Hauttyp V-VI)',
        'Schwangerschaft und Stillzeit',
        'Aktive Hautinfektionen oder Herpes im Behandlungsbereich',
        'Einnahme von photosensibilisierenden Medikamenten',
        'Frische Tätowierungen im Behandlungsbereich',
        'Sehr helle oder graue Haare (kein Melanin)'
      ]}
      faq={[
        {
          q: 'Wie viele Sitzungen brauche ich?',
          a: '6-8 Sitzungen im Abstand von 4-8 Wochen, abhängig vom Körperbereich. Der Haarwachstumszyklus erfordert mehrere Behandlungen für optimale Ergebnisse.'
        },
        {
          q: 'Ist die Behandlung schmerzhaft?',
          a: 'Dank der integrierten Kühlung ist die Behandlung gut erträglich. Die meisten Kunden beschreiben es als leichtes Ziepen, vergleichbar mit einem Gummiband.'
        },
        {
          q: 'Für welche Hauttöne ist der Alexandrit Laser geeignet?',
          a: 'Ideal für helle bis mittlere Hauttöne (Hauttyp I-IV). Bei dunkler Haut empfehlen wir den Dioden Laser.'
        },
        {
          q: 'Wann sehe ich erste Ergebnisse?',
          a: 'Nach der ersten Sitzung fallen die Haare innerhalb von 2-3 Wochen aus. Mit jeder Sitzung wachsen weniger und feinere Haare nach.'
        },
        {
          q: 'Was muss ich vor der Behandlung beachten?',
          a: 'Nicht waxen, zupfen oder epilieren – nur rasieren! 4 Wochen vor der Behandlung keine Sonne oder Solarium. Am Tag der Behandlung die Zone frisch rasieren.'
        }
      ]}
      ctaTitle="Bereit für dauerhaft glatte Haut?"
      ctaDescription="Buchen Sie jetzt Ihre kostenlose Beratung und starten Sie Ihre Laser-Haarentfernung."
    />
  );
};

export default AlexandritLaser;
