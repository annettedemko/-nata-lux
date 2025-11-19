'use client'

import { ServicePageLayout } from '@/components/ServicePageLayout';
import { Star } from 'lucide-react';

const RFVakuum = () => {
  return (
    <ServicePageLayout
      icon={Star}
      title="RF-Vakuum"
      subtitle="Radiofrequenz mit Vakuum für Straffung und Cellulite-Reduktion"
      aboutTitle="Was ist RF-Vakuum?"
      aboutDescription={[
        'RF-Vakuum kombiniert zwei hochwirksame Technologien: Radiofrequenz-Wellen zur Hautstraffung und Vakuum-Massage zur Cellulite-Reduktion und Lymphdrainage.',
        'Die Radiofrequenz erwärmt die tiefen Hautschichten und regt die Kollagenproduktion an, während die Vakuum-Massage die Durchblutung fördert, Fettgewebe mobilisiert und Cellulite sichtbar reduziert.',
        'Perfekt für Problemzonen wie Bauch, Gesäß, Oberschenkel und Arme. Die Kombination beider Technologien liefert schnelle, sichtbare Ergebnisse!'
      ]}
      benefits={[
        'Sichtbare Cellulite-Reduktion',
        'Hautstraffung und Konturierung',
        'Lymphdrainage und Entgiftung',
        'Verbesserung der Durchblutung',
        'Mobilisierung von Fettgewebe',
        'Glattere, festere Haut',
        'Reduzierung von Umfang',
        'Keine Ausfallzeit',
        'Schmerzfreie Behandlung'
      ]}
      steps={[
        {
          title: 'Beratung',
          description: 'Körperanalyse und Festlegung der Behandlungszonen.'
        },
        {
          title: 'Vorbereitung',
          description: 'Auftragen von Gel für optimale Gleiteigenschaften.'
        },
        {
          title: 'RF-Vakuum Behandlung',
          description: 'Gezielte Behandlung der Problemzonen mit RF und Vakuum für 30-60 Minuten.'
        },
        {
          title: 'Nachpflege',
          description: 'Straffende Körperpflege und Empfehlungen für zu Hause.'
        }
      ]}
      priceTable={[
        { service: 'RF-Vakuum eine Zone (Bauch oder Gesäß)', duration: '30 Min.', price: '85€' },
        { service: 'RF-Vakuum zwei Zonen', duration: '45 Min.', price: '120€' },
        { service: 'RF-Vakuum drei Zonen (Bauch, Gesäß, Oberschenkel)', duration: '60 Min.', price: '150€' },
        { service: '5er-Kur RF-Vakuum (eine Zone)', duration: '5x 30 Min.', price: '380€' },
        { service: '10er-Kur RF-Vakuum (eine Zone)', duration: '10x 30 Min.', price: '720€' }
      ]}
      contraindications={[
        'Schwangerschaft und Stillzeit',
        'Herzschrittmacher oder Metallimplantate',
        'Thrombose oder Krampfadern',
        'Aktive Hautinfektionen',
        'Krebs oder Chemotherapie',
        'Frische Operationen (mind. 6 Monate Abstand)',
        'Menstruation (keine Bauchbehandlung)'
      ]}
      faq={[
        {
          q: 'Wie viele Sitzungen brauche ich?',
          a: 'Für sichtbare Ergebnisse empfehlen wir 10-15 Sitzungen, 2x pro Woche. Die Ergebnisse sind kumulativ.'
        },
        {
          q: 'Ist die Behandlung schmerzhaft?',
          a: 'Nein, die Behandlung ist angenehm. Sie spüren Wärme und eine Massage-Wirkung, ähnlich wie eine intensive Massage.'
        },
        {
          q: 'Wann sehe ich Ergebnisse?',
          a: 'Nach 3-4 Sitzungen werden erste Verbesserungen sichtbar. Die volle Wirkung zeigt sich nach 10-12 Sitzungen.'
        },
        {
          q: 'Kann ich damit abnehmen?',
          a: 'RF-Vakuum unterstützt die Fettreduktion, ersetzt aber keine gesunde Ernährung und Bewegung. Es konturiert und strafft Problemzonen.'
        },
        {
          q: 'Gibt es Ausfallzeiten?',
          a: 'Nein, Sie können sofort wieder Ihren normalen Aktivitäten nachgehen. Die Haut kann leicht gerötet sein, was nach 1-2 Stunden verschwindet.'
        }
      ]}
      ctaTitle="Bereit für straffere, glattere Haut?"
      ctaDescription="Buchen Sie jetzt Ihre RF-Vakuum Behandlung und verabschieden Sie sich von Cellulite!"
    />
  );
};

export default RFVakuum;
