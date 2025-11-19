'use client'

import { ServicePageLayout } from '@/components/ServicePageLayout';
import { Eye } from 'lucide-react';

const Wimpernkranz = () => {
  return (
    <ServicePageLayout
      icon={Eye}
      title="Wimpernkranz (Eyeliner PMU)"
      subtitle="Permanent Make-up Wimpernkranzverdichtung – klassisch oder intensiv"
      aboutTitle="Was ist ein Wimpernkranz?"
      aboutDescription={[
        'Der Wimpernkranz (auch Lid-Strich oder Eyeliner PMU genannt) ist eine Permanent Make-up Behandlung, bei der Pigmente direkt am Wimpernkranz eingearbeitet werden.',
        'Das Ergebnis ist eine optisch dichtere Wimpernlinie, die Ihre Augen ausdrucksstärker wirken lässt – ganz ohne tägliches Eyeliner auftragen.',
        'Sie haben die Wahl zwischen einem dezenten Wimpernkranz (nur zwischen den Wimpern) oder einem intensiveren Lid-Strich mit sichtbarer Linie. Perfekt für alle, die sich ein dauerhaft definiertes Auge wünschen.'
      ]}
      benefits={[
        'Optisch dichtere, vollere Wimpern',
        'Ausdrucksstarke Augen ohne Make-up',
        'Kein tägliches Eyeliner ziehen mehr',
        'Wasserfest und wischfest',
        'Spart Zeit beim Schminken',
        'Perfekt symmetrische Linie',
        'Langlebig: 2-4 Jahre haltbar',
        'Individuell anpassbar (dezent bis intensiv)'
      ]}
      steps={[
        {
          title: 'Beratung & Vorzeichnung',
          description: 'Wir besprechen Ihre Wünsche: dezenter Wimpernkranz oder sichtbarer Lid-Strich.'
        },
        {
          title: 'Farbauswahl',
          description: 'Auswahl der passenden Farbe (meist Schwarz oder Dunkelbraun).'
        },
        {
          title: 'Pigmentierung',
          description: 'Präzises Einarbeiten der Pigmente am Wimpernkranz oder als Lid-Strich.'
        },
        {
          title: 'Nachbehandlung',
          description: 'Nach 4-6 Wochen erfolgt die Nachbehandlung für optimale Deckkraft.'
        }
      ]}
      priceTable={[
        { service: 'Wimpernkranz dezent (nur zwischen Wimpern)', duration: '2 Std.', price: '280€' },
        { service: 'Lid-Strich dünn', duration: '2,5 Std.', price: '320€' },
        { service: 'Lid-Strich mit Flügel (Eyeliner)', duration: '3 Std.', price: '380€' },
        { service: 'Nachbehandlung (4-6 Wochen)', duration: '1,5 Std.', price: 'Inklusive' },
        { service: 'Auffrischung (nach 2-3 Jahren)', duration: '2 Std.', price: '180€' }
      ]}
      contraindications={[
        'Schwangerschaft und Stillzeit',
        'Aktive Augeninfektionen',
        'Sehr empfindliche oder trockene Augen',
        'Einnahme von Blutverdünnern',
        'Chemotherapie oder Bestrahlung',
        'Neigung zu Keloiden'
      ]}
      faq={[
        {
          q: 'Wie lange hält der Wimpernkranz?',
          a: '2-4 Jahre, abhängig von Hauttyp und Lebensstil. Eine Auffrischung ist nach 2-3 Jahren empfohlen.'
        },
        {
          q: 'Ist die Behandlung schmerzhaft?',
          a: 'Mit betäubender Creme ist die Behandlung gut erträglich. Die Augen können leicht tränen, was völlig normal ist.'
        },
        {
          q: 'Was ist der Unterschied zwischen Wimpernkranz und Lid-Strich?',
          a: 'Der Wimpernkranz ist dezent und nur zwischen den Wimpern sichtbar. Der Lid-Strich ist eine sichtbare Linie wie Eyeliner.'
        },
        {
          q: 'Kann ich mit Kontaktlinsen zur Behandlung kommen?',
          a: 'Nein, bitte kommen Sie ohne Kontaktlinsen. Bringen Sie ggf. Ihre Brille mit.'
        }
      ]}
      ctaTitle="Bereit für ausdrucksstarke Augen?"
      ctaDescription="Buchen Sie jetzt Ihren Wimpernkranz Termin oder lassen Sie sich kostenlos beraten."
    />
  );
};

export default Wimpernkranz;
