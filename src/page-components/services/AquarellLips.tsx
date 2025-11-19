'use client'

import { ServicePageLayout } from '@/components/ServicePageLayout';
import { Heart } from 'lucide-react';

const AquarellLips = () => {
  return (
    <ServicePageLayout
      icon={Heart}
      title="Aquarell Lips"
      subtitle="Natürliche Lippenpigmentierung mit Aquarell & Velvet Techniken"
      aboutTitle="Was sind Aquarell Lips?"
      aboutDescription={[
        'Aquarell Lips ist eine sanfte Permanent Make-up Technik für die Lippen, die einen natürlichen, zarten Farbton verleiht – wie ein Hauch von Farbe, der Ihre natürliche Lippenfarbe betont.',
        'Die Aquarell-Technik erzeugt einen weichen, transparenten Effekt, während die Velvet-Technik für etwas mehr Deckkraft sorgt. Beide Techniken verleihen Ihren Lippen eine schöne Definition und optisch mehr Volumen.',
        'Das Ergebnis ist absolut natürlich, hält 1-3 Jahre und spart Ihnen das tägliche Nachziehen der Lippen.'
      ]}
      benefits={[
        'Natürlicher, zarter Farbton',
        'Optisch vollere, definierte Lippen',
        'Korrektur von Asymmetrien',
        'Langlebig: 1-3 Jahre haltbar',
        'Kein Lippenstift mehr nötig',
        'Wasserfest und wischfest',
        'Perfekt für jeden Alltag',
        'Kaschiert blasse oder ungleichmäßige Lippenfarbe'
      ]}
      steps={[
        {
          title: 'Beratung & Formgebung',
          description: 'Wir analysieren Ihre Lippenform und zeichnen die gewünschte Kontur vor.'
        },
        {
          title: 'Farbauswahl',
          description: 'Gemeinsam wählen wir den perfekten Farbton für einen natürlichen Look.'
        },
        {
          title: 'Pigmentierung',
          description: 'Sanftes Einarbeiten der Farbe mit Aquarell- oder Velvet-Technik.'
        },
        {
          title: 'Nachbehandlung',
          description: 'Nach 4-6 Wochen perfektionieren wir das Ergebnis für optimale Haltbarkeit.'
        }
      ]}
      priceTable={[
        { service: 'Aquarell Lips (Erstbehandlung)', duration: '2,5 Std.', price: '400€' },
        { service: 'Velvet Lips (Erstbehandlung)', duration: '2,5 Std.', price: '420€' },
        { service: 'Nachbehandlung (4-6 Wochen)', duration: '1,5 Std.', price: 'Inklusive' },
        { service: 'Auffrischung (nach 1-2 Jahren)', duration: '2 Std.', price: '220€' },
        { service: 'Korrektur Fremdarbeit', duration: '3 Std.', price: 'ab 450€' }
      ]}
      contraindications={[
        'Schwangerschaft und Stillzeit',
        'Aktiver Herpes (mind. 2 Wochen vorher behandeln)',
        'Einnahme von Blutverdünnern',
        'Lippenfillerbehandlung (mind. 4 Wochen Abstand)',
        'Diabetes (nur mit ärztlicher Erlaubnis)',
        'Chemotherapie oder Bestrahlung'
      ]}
      faq={[
        {
          q: 'Wie lange halten Aquarell Lips?',
          a: '1-3 Jahre, abhängig von Hauttyp und Lebensstil. Die Lippenfarbe verblasst sanft und natürlich.'
        },
        {
          q: 'Ist die Behandlung schmerzhaft?',
          a: 'Mit betäubender Creme ist die Behandlung gut erträglich. Die Lippen können etwas empfindlicher sein als andere Bereiche.'
        },
        {
          q: 'Was ist der Unterschied zwischen Aquarell und Velvet?',
          a: 'Aquarell ist transparenter und natürlicher, Velvet bietet mehr Deckkraft und intensivere Farbe – ähnlich wie ein matter Lippenstift.'
        },
        {
          q: 'Was muss ich bei Herpes beachten?',
          a: 'Bei Neigung zu Lippenherpes empfehlen wir eine prophylaktische Einnahme von Aciclovir 3 Tage vor bis 5 Tage nach der Behandlung.'
        }
      ]}
      ctaTitle="Bereit für natürlich schöne Lippen?"
      ctaDescription="Buchen Sie jetzt Ihre Aquarell Lips Behandlung oder vereinbaren Sie eine kostenlose Beratung."
    />
  );
};

export default AquarellLips;
