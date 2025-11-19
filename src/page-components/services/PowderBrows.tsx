'use client'

import { ServicePageLayout } from '@/components/ServicePageLayout';
import { Palette } from 'lucide-react';

const PowderBrows = () => {
  return (
    <ServicePageLayout
      icon={Palette}
      title="Powder Brows"
      subtitle="Pudertechnik für natürliche, perfekt definierte Augenbrauen"
      aboutTitle="Was sind Powder Brows?"
      aboutDescription={[
        'Powder Brows sind eine moderne Permanent Make-up Technik, die Ihren Augenbrauen einen soften, pudrigen Look verleiht – ähnlich wie mit Augenbrauenpuder geschminkt.',
        'Anders als bei der Microblading-Technik werden hier keine Härchen nachgezeichnet, sondern die Farbe wird in feinen Punkten eingebracht. Das Ergebnis ist ein natürlicher, weicher Verlauf mit mehr Intensität im hinteren Bereich der Braue.',
        'Powder Brows sind besonders langlebig und halten 1-3 Jahre. Sie eignen sich perfekt für alle Hauttypen, auch für ölige Haut.'
      ]}
      benefits={[
        'Natürlicher, weicher Puder-Effekt',
        'Langlebig: 1-3 Jahre haltbar',
        'Für alle Hauttypen geeignet (auch ölige Haut)',
        'Wasserfest und wischfest',
        'Kein tägliches Nachschminken nötig',
        'Individuell angepasste Form und Farbe',
        'Schonender als Microblading'
      ]}
      steps={[
        {
          title: 'Beratung & Vermessung',
          description: 'Wir analysieren Ihre Gesichtsform und zeichnen die perfekte Augenbrauenform vor.'
        },
        {
          title: 'Farbauswahl',
          description: 'Gemeinsam wählen wir den perfekten Farbton für Ihren Hauttyp und Haarfarbe.'
        },
        {
          title: 'Pigmentierung',
          description: 'Präzises Einarbeiten der Farbe mit der Powder-Technik für einen weichen Verlauf.'
        },
        {
          title: 'Nachbehandlung',
          description: 'Nach 4-6 Wochen erfolgt die Nachbehandlung für ein perfektes, langanhaltendes Ergebnis.'
        }
      ]}
      priceTable={[
        { service: 'Powder Brows (Erstbehandlung)', duration: '2,5 Std.', price: '350€' },
        { service: 'Nachbehandlung (4-6 Wochen)', duration: '1,5 Std.', price: 'Inklusive' },
        { service: 'Auffrischung (nach 1-2 Jahren)', duration: '2 Std.', price: '200€' },
        { service: 'Korrektur Fremdarbeit', duration: '3 Std.', price: 'ab 400€' }
      ]}
      contraindications={[
        'Schwangerschaft und Stillzeit',
        'Einnahme von Blutverdünnern',
        'Diabetes (nur mit ärztlicher Erlaubnis)',
        'Aktive Hauterkrankungen im Behandlungsbereich',
        'Chemotherapie oder Bestrahlung',
        'Keloidneigung'
      ]}
      faq={[
        {
          q: 'Wie lange halten Powder Brows?',
          a: '1-3 Jahre, abhängig von Hauttyp, Lebensstil und Sonneneinstrahlung. Bei öliger Haut kann eine frühere Auffrischung nötig sein.'
        },
        {
          q: 'Ist die Behandlung schmerzhaft?',
          a: 'Die Behandlung ist mit einer betäubenden Creme nahezu schmerzfrei. Die meisten Kunden empfinden nur ein leichtes Kratzen.'
        },
        {
          q: 'Wie lange dauert die Heilung?',
          a: '7-10 Tage. In dieser Zeit können die Brauen etwas dunkler wirken und leicht schuppen. Danach erscheint die finale Farbe.'
        },
        {
          q: 'Warum brauche ich eine Nachbehandlung?',
          a: 'Die Nachbehandlung nach 4-6 Wochen perfektioniert das Ergebnis und sorgt für optimale Haltbarkeit.'
        }
      ]}
      ctaTitle="Bereit für perfekte Augenbrauen?"
      ctaDescription="Buchen Sie jetzt Ihre Powder Brows Behandlung oder vereinbaren Sie einen kostenlosen Beratungstermin."
    />
  );
};

export default PowderBrows;
