'use client'

import { ServicePageLayout } from '@/components/ServicePageLayout';
import { Eye } from 'lucide-react';

const WimpernAugenbrauenLaminierung = () => {
  return (
    <ServicePageLayout
      icon={Eye}
      title="Wimpern & Augenbrauen Laminierung"
      subtitle="Natürlicher Curl und Glanz für Ihre Wimpern & Gepflegte Form bis zu 6 Wochen"
      aboutTitle="Was ist Laminierung?"
      aboutDescription={[
        'Die Laminierung ist eine innovative Behandlung, die Ihren natürlichen Wimpern und Augenbrauen einen wunderschönen Curl, Glanz und Definition verleiht – ganz ohne Extensions oder tägliches Styling.',
        'Bei der Wimpernlaminierung werden Ihre natürlichen Wimpern sanft nach oben gebogen und erhalten einen intensiven Glanz. Die Augenbrauenlaminierung fixiert jedes Härchen in der gewünschten Form und sorgt für einen gepflegten, vollen Look.',
        'Das Ergebnis hält 6-8 Wochen und ist perfekt für alle, die einen natürlichen, pflegeleichten Look bevorzugen.'
      ]}
      benefits={[
        'Natürlicher Curl ohne Wimpernzange',
        'Optisch längere und vollere Wimpern',
        'Gepflegte, definierte Augenbrauen',
        'Wasserfest und langanhaltend (6-8 Wochen)',
        'Zeitersparnis beim täglichen Make-up',
        'Schonend für Ihre natürlichen Härchen',
        'Perfekt kombinierbar (Wimpern + Augenbrauen)'
      ]}
      steps={[
        {
          title: 'Beratung & Vorbereitung',
          description: 'Wir besprechen Ihre Wünsche und bereiten die Wimpern/Augenbrauen vor.'
        },
        {
          title: 'Formgebung',
          description: 'Auswahl der passenden Curl-Stärke und Fixierung der Form.'
        },
        {
          title: 'Laminierung',
          description: 'Auftragen der Laminierungslösung für langanhaltenden Glanz.'
        },
        {
          title: 'Pflege',
          description: 'Pflegende Wirkstoffe für gesunde, starke Härchen.'
        }
      ]}
      priceTable={[
        { service: 'Wimpernlaminierung', duration: '45 Min.', price: '60€' },
        { service: 'Augenbrauenlaminierung', duration: '45 Min.', price: '50€' },
        { service: 'Kombi: Wimpern + Augenbrauen', duration: '75 Min.', price: '95€' },
        { service: 'Mit Färbung (Wimpern)', duration: '60 Min.', price: '75€' },
        { service: 'Mit Färbung (Augenbrauen)', duration: '60 Min.', price: '65€' }
      ]}
      contraindications={[
        'Aktive Augeninfektionen oder Entzündungen',
        'Sehr kurze oder spärliche Härchen',
        'Allergien gegen Laminierungsprodukte',
        'Schwangerschaft (nach Rücksprache möglich)'
      ]}
      faq={[
        {
          q: 'Wie lange hält die Laminierung?',
          a: '6-8 Wochen, abhängig von Ihrem Haarwachstumszyklus und Pflege.'
        },
        {
          q: 'Kann ich danach schwimmen und duschen?',
          a: 'Ja, nach 24 Stunden ist die Behandlung wasserfest und Sie können normal schwimmen, duschen und Sport treiben.'
        },
        {
          q: 'Tut die Behandlung weh?',
          a: 'Nein, die Laminierung ist völlig schmerzfrei. Die meisten Kunden entspannen während der Behandlung.'
        },
        {
          q: 'Kann ich Wimpern und Augenbrauen zusammen machen lassen?',
          a: 'Ja, das empfehlen wir sogar! Das Kombi-Paket spart Zeit und Geld.'
        }
      ]}
      ctaTitle="Bereit für einen natürlichen, pflegeleichten Look?"
      ctaDescription="Buchen Sie jetzt Ihre Laminierung oder kontaktieren Sie uns für eine kostenlose Beratung."
    />
  );
};

export default WimpernAugenbrauenLaminierung;
