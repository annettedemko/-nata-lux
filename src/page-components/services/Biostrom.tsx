'use client'

import { ServicePageLayout } from '@/components/ServicePageLayout';
import { Activity } from 'lucide-react';

const Biostrom = () => {
  return (
    <ServicePageLayout
      icon={Activity}
      title="Mikrostromtherapie (Biostrom) in München"
      subtitle="Natürliches Lifting und Hautregeneration ohne Injektionen – Ihre Kosmetik in München-Haidhausen"
      aboutTitle="Was ist Mikrostromtherapie (Biostrom)?"
      aboutDescription={[
        'Die Mikrostromtherapie, auch als Biostrom oder Biolifting bekannt, ist eine moderne nicht-invasive Anti-Aging-Methode aus der ästhetischen Kosmetik. In unserem Studio in München-Haidhausen arbeiten wir mit professionellen, medizinisch zertifizierten Geräten, die sehr schwache elektrische Impulse aussenden – ähnlich den natürlichen Strömen des Körpers.',
        'Diese Mikroströme aktivieren den Zellstoffwechsel, verbessern die Mikrozirkulation von Blut und Lymphe und stimulieren die körpereigene Produktion von Kollagen und Elastin. Das Ergebnis: ein natürlicher Lifting-Effekt, straffere Haut und ein frisches, erholtes Hautbild – ganz ohne Schmerzen, Nadeln oder Ausfallzeiten.',
        'Die Behandlung eignet sich ideal für alle Hauttypen und ist besonders effektiv bei Elastizitätsverlust, Schwellungen, müdem Teint und feinen Linien. Viele unserer Kunden aus München und Umgebung schätzen die Mikrostromtherapie als sanfte Alternative zu invasiven Behandlungen wie Botox oder Fillern.',
        'Ob als regelmäßige Anti-Age-Pflege, nach ästhetischen Eingriffen oder zur Regeneration gestresster Haut – die Mikrostromtherapie in München bietet eine sichere, schmerzfreie und hochwirksame Lösung für natürliche Hautverjüngung.'
      ]}
      benefits={[
        'Natürlicher Lifting-Effekt ohne Injektionen oder Skalpell',
        'Straffung der Gesichtsmuskulatur und Verbesserung der Gesichtskonturen',
        'Aktivierung der Kollagen- und Elastinproduktion',
        'Verbesserung der Mikrozirkulation und Sauerstoffversorgung',
        'Reduzierung von feinen Linien, Falten und Schwellungen',
        'Straffung erschlaffter Haut und Verbesserung der Hautstruktur',
        'Lymphdrainage und Entgiftung für ein frisches Hautbild',
        'Reduzierung von Augenringen und Tränensäcken',
        'Strahlender, erholter Teint – ideal nach Stress oder Schlafmangel',
        'Völlig schmerzfrei, entspannend und ohne Ausfallzeiten',
        'Kombinierbar mit anderen Behandlungen (Phonophorese, Ultraschall, LED-Therapie)',
        'Geeignet für alle Hauttypen und jedes Alter'
      ]}
      steps={[
        {
          title: '1. Kostenlose Beratung und Hautanalyse',
          description: 'Wir besprechen Ihre Hautbedürfnisse, analysieren Ihren Hauttyp und legen die Behandlungszonen fest. Dabei klären wir alle Fragen zu Ablauf, Wirkung und empfohlener Anzahl der Sitzungen.'
        },
        {
          title: '2. Gründliche Reinigung der Haut',
          description: 'Die Haut wird sanft gereinigt und von Make-up, Talg und Unreinheiten befreit. Anschließend wird ein spezielles leitfähiges Gel aufgetragen, das die Mikroströme optimal übertragen kann.'
        },
        {
          title: '3. Mikrostrom-Behandlung (45-90 Minuten)',
          description: 'Mit speziellen Elektroden werden sanfte Mikroströme entlang der Gesichtsmuskulatur und Lymphbahnen geführt. Die Behandlung ist völlig schmerzfrei und angenehm entspannend – viele Kunden schlafen dabei sogar ein. Die Mikroimpulse stimulieren die Zellen, fördern die Durchblutung und aktivieren die Kollagenproduktion.'
        },
        {
          title: '4. Abschlusspflege und Nachbehandlung',
          description: 'Nach der Mikrostromtherapie tragen wir eine beruhigende Maske und pflegende Produkte auf, um die Regeneration zu unterstützen und den Effekt zu verstärken. Optional kann die Behandlung mit Phonophorese, LED-Lichttherapie oder hochwertigen Seren kombiniert werden.'
        },
        {
          title: '5. Empfehlungen für zu Hause',
          description: 'Für optimale und langanhaltende Ergebnisse erhalten Sie individuelle Pflegeempfehlungen für zu Hause sowie einen Plan für Folgebehandlungen.'
        }
      ]}
      priceTable={[
        { service: 'Biostrom Gesicht', duration: '60 Min.', price: '85€' },
        { service: 'Biostrom Gesicht + Hals', duration: '75 Min.', price: '105€' },
        { service: 'Biostrom Deluxe (mit Maske)', duration: '90 Min.', price: '130€' },
        { service: '5er-Kur Biostrom', duration: '5x 60 Min.', price: '380€' },
        { service: '10er-Kur Biostrom', duration: '10x 60 Min.', price: '720€' }
      ]}
      contraindications={[
        'Schwangerschaft',
        'Herzschrittmacher',
        'Epilepsie',
        'Metallimplantate im Gesicht',
        'Krebs oder Chemotherapie',
        'Thrombose',
        'Frische Filler oder Botox (mind. 2 Wochen Abstand)'
      ]}
      faq={[
        {
          q: 'Wie oft sollte ich die Mikrostromtherapie machen?',
          a: 'Für optimale Anti-Aging-Ergebnisse empfehlen wir einen Kur von 8–12 Behandlungen, idealerweise 1–2 Mal pro Woche. Nach Abschluss der Kur genügt eine Erhaltungsbehandlung alle 3–4 Wochen, um den Lifting-Effekt langfristig zu bewahren. Bei akuten Problemen wie Schwellungen oder nach ästhetischen Eingriffen können auch weniger Sitzungen ausreichend sein.'
        },
        {
          q: 'Spürt man die Mikroströme während der Behandlung?',
          a: 'Nein, die Mikroströme sind so schwach, dass sie in der Regel nicht spürbar sind. Die Behandlung ist völlig schmerzfrei und wird von den meisten Kunden als sehr entspannend empfunden – viele schlafen sogar dabei ein. In seltenen Fällen kann ein leichtes Kribbeln auftreten, das aber nicht unangenehm ist.'
        },
        {
          q: 'Wann sehe ich erste Ergebnisse der Mikrostromtherapie?',
          a: 'Viele Kunden bemerken bereits nach der ersten Behandlung ein frischeres, strafferes Hautbild und eine Reduzierung von Schwellungen. Der volle Lifting-Effekt mit sichtbarer Straffung der Gesichtskonturen und Reduzierung von Falten zeigt sich in der Regel nach 6–10 Sitzungen. Die Ergebnisse sind langanhaltend, besonders bei regelmäßigen Erhaltungsbehandlungen.'
        },
        {
          q: 'Ist Mikrostromtherapie vergleichbar mit Botox oder Fillern?',
          a: 'Nein, die Wirkungsweise ist völlig unterschiedlich. Während Botox die Muskeln lähmt und Filler Volumen auffüllen, trainiert die Mikrostromtherapie die Gesichtsmuskulatur und strafft sie auf natürliche Weise. Die Biostrom-Behandlung stimuliert die körpereigene Kollagen- und Elastinproduktion, verbessert die Durchblutung und sorgt für einen natürlichen Lifting-Effekt – ganz ohne Injektionen, Nebenwirkungen oder künstliches Aussehen.'
        },
        {
          q: 'Kann ich Mikrostromtherapie mit anderen Behandlungen kombinieren?',
          a: 'Ja, die Mikrostromtherapie lässt sich hervorragend mit anderen Behandlungen kombinieren, z.B. mit Phonophorese (Ultraschall), LED-Lichttherapie, RF-Lifting oder hochwertigen Seren und Masken. Die Kombination verstärkt den Anti-Aging-Effekt und kann individuell auf Ihre Hautbedürfnisse abgestimmt werden. Wir beraten Sie gerne zu den besten Kombinationsmöglichkeiten.'
        },
        {
          q: 'Gibt es Ausfallzeiten nach der Behandlung?',
          a: 'Nein, es gibt keine Ausfallzeiten. Sie können direkt nach der Mikrostromtherapie Ihren normalen Alltag fortsetzen, Make-up auftragen und auch Sport treiben. Die Haut kann leicht gerötet sein, was aber nach kurzer Zeit abklingt. Das macht die Behandlung ideal für berufstätige Menschen und alle, die eine schnelle, effektive Anti-Aging-Lösung ohne Einschränkungen suchen.'
        },
        {
          q: 'Für wen ist die Mikrostromtherapie geeignet?',
          a: 'Die Mikrostromtherapie ist für fast alle Hauttypen und Altersgruppen geeignet – von präventiver Anti-Aging-Pflege ab Mitte 20 bis hin zur intensiven Hautverjüngung im fortgeschrittenen Alter. Besonders empfehlenswert ist sie bei Elastizitätsverlust, feinen Linien, Schwellungen, müder Haut und nach ästhetischen Eingriffen. Nicht geeignet ist die Behandlung bei Schwangerschaft, Herzschrittmachern, Epilepsie oder Metallimplantaten im Gesicht.'
        },
        {
          q: 'Was kostet eine Mikrostromtherapie in München?',
          a: 'Die Preise variieren je nach Behandlungsumfang: Eine Gesichtsbehandlung (60 Min.) kostet 85€, Gesicht + Hals (75 Min.) 105€ und die Deluxe-Variante mit Maske (90 Min.) 130€. Wir bieten auch attraktive Kur-Pakete an: 5er-Kur für 380€ und 10er-Kur für 720€. Damit sparen Sie gegenüber Einzelbehandlungen und sichern sich langfristige Ergebnisse.'
        }
      ]}
      ctaTitle="Bereit für natürliches Face-Lifting in München?"
      ctaDescription="Buchen Sie jetzt Ihre Mikrostromtherapie in unserem Studio in München-Haidhausen und erleben Sie den Lifting-Effekt ohne Nadeln, ohne Schmerzen und ohne Ausfallzeiten. Kostenlose Beratung inklusive!"
    />
  );
};

export default Biostrom;
