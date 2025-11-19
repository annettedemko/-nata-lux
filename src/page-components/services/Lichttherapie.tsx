'use client'

import { ServicePageLayout } from '@/components/ServicePageLayout';
import { Sun } from 'lucide-react';

const Lichttherapie = () => {
  return (
    <ServicePageLayout
      icon={Sun}
      title="LED-Lichttherapie (Photonentherapie) in München"
      subtitle="Sanfte Hautverjüngung und Regeneration mit Lichtenergie – Ihre Kosmetik in München-Haidhausen"
      aboutTitle="Was ist LED-Lichttherapie (Photonentherapie)?"
      aboutDescription={[
        'Die LED-Lichttherapie, auch Photonentherapie oder Photobiomodulation genannt, ist eine innovative nicht-invasive Methode der modernen ästhetischen Kosmetik, bei der Licht unterschiedlicher Wellenlängen gezielt eingesetzt wird, um verschiedene Hautprobleme zu behandeln und die natürliche Regeneration der Haut zu fördern. In unserem Kosmetikstudio in München-Haidhausen arbeiten wir mit professionellen LED-Systemen medizinischer Qualität, die eine präzise Dosierung der Lichtenergie ermöglichen.',
        'Die Behandlung basiert auf wissenschaftlich fundierter Photomedizin: Jede Lichtfarbe (Wellenlänge) dringt unterschiedlich tief in die Haut ein und aktiviert spezifische Hautprozesse: 🔴 Rotes Licht (620-750 nm) stimuliert die Kollagen- und Elastinproduktion, verbessert die Durchblutung und wirkt straffend – ideal für Anti-Aging, Faltenreduktion und Hautstraffung. 🔵 Blaues Licht (405-470 nm) wirkt antibakteriell gegen Akne-Bakterien (Propionibacterium acnes), reduziert Entzündungen und Unreinheiten – perfekt für Akne, Pickel und unreine Haut. 🟢 Grünes Licht (495-570 nm) gleicht Hautverfärbungen aus, reduziert Pigmentflecken und Hyperpigmentierung und verbessert den Teint. 🟡 Gelbes Licht (570-620 nm) wirkt entzündungshemmend, beruhigend und regenerierend – ideal für empfindliche, gereizte oder zu Rosacea neigende Haut.',
        'Die LED-Lichttherapie ist völlig schmerzfrei, entspannend und sicher – sie erzeugt keine UV-Strahlung, keine Hitze und keine Hautschäden. Anders als bei IPL (Intense Pulsed Light) oder Laser-Behandlungen gibt es keine Ausfallzeiten, keine Rötungen und kein Risiko für Verbrennungen oder Pigmentveränderungen. Die Behandlung ist für alle Hauttypen (auch dunkle Haut) und alle Altersgruppen geeignet.',
        'Viele unserer Kunden aus München und Umgebung schätzen die LED-Lichttherapie als sanfte, natürliche und wissenschaftlich bewiesene Methode für strahlende, gesunde Haut – ob bei Akne, ersten Alterungserscheinungen, Pigmentierung, Rosacea oder einfach zur Erhaltung eines frischen, ebenmäßigen Teints. Die Behandlung wird auch häufig von Dermatologen und Ärzten empfohlen und gilt als eine der sichersten und effektivsten nicht-invasiven Hautbehandlungen.',
        'Ob als eigenständige Behandlung oder in Kombination mit Mikrostromtherapie, Phonophorese, RF-Lifting oder Gesichtsreinigung – die LED-Lichttherapie in München ist eine der vielseitigsten und wirksamsten Methoden für Hautverjüngung, Hautgesundheit und natürliche Schönheit ohne Risiken und Nebenwirkungen.'
      ]}
      benefits={[
        'Stimulation der Kollagen- und Elastinproduktion für straffere, jugendlichere Haut',
        'Sichtbare Reduktion von feinen Linien, Falten und Alterungserscheinungen',
        'Antibakterielle Wirkung gegen Akne, Pickel und Unreinheiten (blaues Licht)',
        'Reduzierung von Entzündungen, Rötungen und Post-Akne-Flecken',
        'Aufhellung von Pigmentflecken, Altersflecken und Hyperpigmentierung',
        'Verbesserung des Hautbildes bei Rosacea, Couperose und empfindlicher Haut',
        'Beschleunigung der Wundheilung und Regeneration nach ästhetischen Eingriffen',
        'Verbesserung der Durchblutung und Sauerstoffversorgung der Haut',
        'Gleichmäßiger, strahlender Teint und "Glow-Effekt"',
        'Straffung und Verbesserung der Hautelastizität',
        'Reduzierung von Schwellungen und dunklen Augenringen',
        'Beruhigung gereizter, gestresster Haut',
        'Völlig schmerzfrei, entspannend und angenehm',
        'Keine UV-Strahlung, keine Hitze, keine Hautschäden',
        'Keine Ausfallzeiten – sofort gesellschaftsfähig',
        'Kombinierbar mit Mikrostromtherapie, Phonophorese, RF-Lifting',
        'Geeignet für alle Hauttypen und Altersgruppen, auch für dunkle Haut',
        'Wissenschaftlich bewiesene Wirksamkeit durch zahlreiche Studien'
      ]}
      steps={[
        {
          title: '1. Kostenlose Beratung und Hautanalyse',
          description: 'Zu Beginn analysieren wir Ihren Hauttyp, Ihre Hautprobleme (Akne, Falten, Pigmentierung, Rosacea etc.) und Ihre individuellen Behandlungsziele. Basierend darauf wählen wir die optimale Lichtfarbe bzw. Lichtfarbenkombination für Sie aus: Rotes Licht für Anti-Aging und Straffung, Blaues Licht für Akne und Unreinheiten, Grünes Licht für Pigmentierung, Gelbes Licht für empfindliche Haut – oder eine Kombination mehrerer Farben für maximale Wirkung.'
        },
        {
          title: '2. Gründliche Hautreinigung und Vorbereitung',
          description: 'Die Haut wird sanft aber gründlich von Make-up, Talg, Schmutz und abgestorbenen Hautzellen befreit. Eine saubere Haut ist essentiell, damit das Licht optimal in die Haut eindringen und seine Wirkung entfalten kann. Bei Bedarf wird auch ein Tonic oder leichtes Serum aufgetragen, um die Lichtaufnahme zu verbessern.'
        },
        {
          title: '3. Schutzbrille anlegen',
          description: 'Sie erhalten eine spezielle Schutzbrille, um Ihre Augen vor dem hellen LED-Licht zu schützen. Die Brille ist angenehm zu tragen und ermöglicht es Ihnen, während der Behandlung zu entspannen oder sogar die Augen zu schließen.'
        },
        {
          title: '4. LED-Lichtbehandlung (20-40 Minuten)',
          description: 'Sie liegen bequem auf unserer Behandlungsliege, während das LED-Panel in einem optimalen Abstand über Ihr Gesicht positioniert wird. Die Behandlung ist völlig schmerzfrei und entspannend – Sie spüren lediglich eine angenehme, sanfte Wärme. Die Behandlungsdauer variiert je nach gewählter Lichtfarbe und Behandlungsziel: Eine einzelne Farbe dauert ca. 20-30 Minuten, Kombinations-Behandlungen mit mehreren Farben dauern 30-40 Minuten. Während der Behandlung können Sie entspannen, meditieren oder sogar schlafen – viele Kunden empfinden die Behandlung als sehr beruhigend und erholsam.'
        },
        {
          title: '5. Abschlusspflege und optionale Zusatzbehandlungen',
          description: 'Nach der Lichtbehandlung tragen wir eine beruhigende, pflegende Maske oder ein hochwertiges Serum auf, um die Regeneration zu unterstützen und den Effekt zu verstärken. Optional kann die LED-Lichttherapie mit anderen Behandlungen kombiniert werden: mit Mikrostromtherapie (für zusätzlichen Lifting-Effekt), Phonophorese (für tiefe Wirkstoffeinschleusung), Gesichtsreinigung (als Vorbereitung) oder hochwertigen Ampullen. Die Kombination verstärkt die Anti-Aging-Wirkung erheblich.'
        },
        {
          title: '6. Pflegeempfehlungen und Behandlungsplan',
          description: 'Sie erhalten individuelle Empfehlungen für Ihre häusliche Pflege sowie einen Plan für Folgebehandlungen. Für optimale und langanhaltende Ergebnisse empfehlen wir eine Kur von 8-10 Behandlungen, 1-3× pro Woche, gefolgt von regelmäßigen Erhaltungsbehandlungen alle 2-4 Wochen.'
        }
      ]}
      priceTable={[
        { service: 'Lichttherapie Gesicht (eine Farbe)', duration: '30 Min.', price: '55€' },
        { service: 'Lichttherapie Kombi (mehrere Farben)', duration: '40 Min.', price: '75€' },
        { service: 'Lichttherapie + Gesichtsreinigung', duration: '120 Min.', price: '135€' },
        { service: '5er-Kur Lichttherapie', duration: '5x 30 Min.', price: '240€' },
        { service: '10er-Kur Lichttherapie', duration: '10x 30 Min.', price: '450€' }
      ]}
      contraindications={[
        'Schwangerschaft',
        'Einnahme von photosensibilisierenden Medikamenten',
        'Epilepsie',
        'Aktive Hautinfektionen',
        'Frische Bräune oder Solarium',
        'Hautkrebs'
      ]}
      faq={[
        {
          q: 'Welche Lichtfarbe ist für mein Hautproblem richtig?',
          a: '🔴 Rotes Licht (620-750 nm) für Anti-Aging, Faltenreduktion, Straffung, Kollagenstimulation und Verbesserung der Hautelastizität. 🔵 Blaues Licht (405-470 nm) für Akne, Pickel, Unreinheiten, Entzündungen und antibakterielle Wirkung gegen Akne-Bakterien. 🟢 Grünes Licht (495-570 nm) für Pigmentflecken, Altersflecken, Hyperpigmentierung und ungleichmäßigen Teint. 🟡 Gelbes Licht (570-620 nm) für empfindliche Haut, Rosacea, Couperose, Rötungen und Beruhigung. Oft kombinieren wir mehrere Farben in einer Behandlung für maximale Wirkung – wir beraten Sie gerne individuell basierend auf Ihrer Hautanalyse.'
        },
        {
          q: 'Wie viele Sitzungen brauche ich für sichtbare Ergebnisse?',
          a: 'Für optimale und langanhaltende Ergebnisse empfehlen wir eine Kur von 8–10 Behandlungen, idealerweise 1–3× pro Woche (bei Akne 2-3×, bei Anti-Aging 1-2×). Erste Verbesserungen sind oft bereits nach 4-6 Sitzungen sichtbar: bei Akne reduzieren sich Entzündungen und Unreinheiten, bei Anti-Aging wirkt die Haut straffer und frischer, bei Pigmentierung hellen sich die Flecken auf. Die volle Wirkung entfaltet sich nach der kompletten Kur. Für dauerhafte Ergebnisse empfehlen wir anschließend Erhaltungsbehandlungen 1× alle 2-4 Wochen.'
        },
        {
          q: 'Ist die LED-Lichttherapie schmerzhaft?',
          a: 'Nein, die LED-Lichttherapie ist völlig schmerzfrei und wird als sehr angenehm und entspannend empfunden. Sie spüren lediglich eine sanfte, angenehme Wärme auf der Haut – kein Stechen, kein Brennen, keine Schmerzen. Die Behandlung ist so relaxend, dass viele Kunden dabei einschalten oder sogar einschlafen. Es gibt keine UV-Strahlung, keine Hitze wie bei IPL oder Laser und kein Risiko für Verbrennungen oder Hautschäden. Die Behandlung ist absolut sicher und angenehm.'
        },
        {
          q: 'Wann sehe ich erste Ergebnisse der Lichttherapie?',
          a: 'Die Ergebnisse variieren je nach Hautproblem und Behandlungsziel: Bei Akne: Erste Verbesserungen (weniger Entzündungen, weniger neue Pickel) oft schon nach 2-4 Behandlungen sichtbar. Bei Anti-Aging: Die Haut wirkt bereits nach der ersten Behandlung frischer und strahlender. Sichtbare Straffung und Faltenreduktion zeigen sich nach 6-8 Behandlungen. Bei Pigmentierung: Aufhellung der Flecken nach 4-6 Behandlungen sichtbar, volle Wirkung nach 8-10 Behandlungen. Bei Rosacea/Rötungen: Beruhigung und Reduzierung der Rötungen oft schon nach 3-5 Behandlungen. Die Ergebnisse sind kumulativ – je mehr Behandlungen, desto besser und langanhaltender die Wirkung.'
        },
        {
          q: 'Gibt es Ausfallzeiten oder Nebenwirkungen nach der LED-Lichttherapie?',
          a: 'Nein, es gibt absolut keine Ausfallzeiten! Die LED-Lichttherapie ist eine der sanftesten Hautbehandlungen überhaupt – es gibt keine Rötungen, keine Schwellungen, keine Hautschäden, keine Krusten oder Schorfbildung. Sie können sofort nach der Behandlung Make-up auftragen, arbeiten gehen, Sport treiben oder in die Sonne gehen (mit SPF natürlich). Die Haut kann maximal leicht gerötet sein, was aber innerhalb von 30 Minuten abklingt. Nebenwirkungen sind extrem selten und beschränken sich auf gelegentliche leichte Trockenheit, die mit Pflege leicht behoben wird. Das macht die LED-Lichttherapie ideal für Menschen mit vollem Terminkalender und alle, die keine Ausfallzeiten in Kauf nehmen können oder wollen.'
        },
        {
          q: 'Ist LED-Lichttherapie das gleiche wie IPL oder Laser?',
          a: 'Nein, LED-Lichttherapie ist völlig anders als IPL (Intense Pulsed Light) oder Laser-Behandlungen. LED-Licht ist ein kaltes, nicht-thermisches Licht, das sanft und schmerzfrei in die Haut eindringt und zelluläre Prozesse aktiviert – ohne Hitze, ohne Hautschäden, ohne Ausfallzeiten. IPL und Laser hingegen arbeiten mit intensiver, konzentrierter Lichtenergie oder Hitze, die gezielt Gewebe zerstört (z.B. Haarfollikel, Pigmente, Blutgefäße) – das ist effektiv, aber mit Schmerzen, Rötungen, Krusten und Ausfallzeiten verbunden. LED ist sanfter, sicherer und für alle Hauttypen (auch dunkle Haut) geeignet, während IPL/Laser bei dunkler Haut riskant sind. LED ist ideal für Prävention, Regeneration und sanftes Anti-Aging, IPL/Laser für gezielte Problembehandlungen.'
        },
        {
          q: 'Kann ich LED-Lichttherapie mit anderen Behandlungen kombinieren?',
          a: 'Ja, die LED-Lichttherapie lässt sich hervorragend mit anderen Behandlungen kombinieren und verstärkt deren Wirkung erheblich! Besonders empfehlenswert: Kombiniert mit Mikrostromtherapie für maximalen Lifting-Effekt und Straffung | Mit Phonophorese für tiefe Wirkstoffeinschleusung und intensive Hydratation | Mit RF-Lifting für Straffung und Kollagenstimulation | Mit Gesichtsreinigung als Vorbereitung für optimale Lichtaufnahme | Mit hochwertigen Masken und Ampullen für maximale Regeneration. Viele unserer Kunden buchen Kombinations-Behandlungen, da die Synergie-Effekte beeindruckend sind. Wir beraten Sie gerne zu den besten Kombinationen für Ihre Hautbedürfnisse.'
        },
        {
          q: 'Ist LED-Lichttherapie für alle Hauttypen geeignet?',
          a: 'Ja, die LED-Lichttherapie ist für absolut alle Hauttypen geeignet – von sehr heller bis sehr dunkler Haut (Fitzpatrick Typ I-VI), von trockener bis öliger Haut, von junger bis reifer Haut. Anders als IPL oder Laser, die bei dunkler Haut zu Pigmentveränderungen oder Verbrennungen führen können, ist LED-Licht völlig sicher für alle Hauttöne. Die Behandlung ist auch ideal für empfindliche Haut, zu Rosacea neigende Haut oder Haut mit Couperose. Selbst bei Schwangerschaft ist LED-Lichttherapie grundsätzlich unbedenklich (bitte vorher mit Ihrem Arzt absprechen). Die einzigen Kontraindikationen sind: Epilepsie, Einnahme photosensibilisierender Medikamente, aktive Hautinfektionen und Hautkrebs.'
        },
        {
          q: 'Was kostet eine LED-Lichttherapie in München?',
          a: 'Die Preise variieren je nach Behandlungsumfang: LED-Lichttherapie Gesicht mit einer Farbe (30 Min.) kostet 55€, Kombinations-Behandlung mit mehreren Farben (40 Min.) 75€ und LED-Lichttherapie kombiniert mit Gesichtsreinigung (120 Min.) 135€. Wir bieten attraktive Kur-Pakete: 5er-Kur für 240€ (spart 35€) und 10er-Kur für 450€ (spart 100€). Mit den Kur-Paketen sparen Sie nicht nur Geld, sondern sichern sich auch nachhaltige, langfristige Ergebnisse. Die Investition lohnt sich – LED-Lichttherapie ist eine der kosteneffektivsten Anti-Aging- und Hautpflege-Behandlungen mit wissenschaftlich bewiesener Wirkung.'
        },
        {
          q: 'Wie funktioniert LED-Lichttherapie wissenschaftlich?',
          a: 'LED-Lichttherapie basiert auf dem wissenschaftlichen Prinzip der Photobiomodulation: Lichtphotonen dringen in die Haut ein und werden von den Mitochondrien (den "Kraftwerken" der Zellen) absorbiert. Dies stimuliert die ATP-Produktion (zelluläre Energie), aktiviert Fibroblasten (Kollagen-produzierende Zellen), verbessert die Durchblutung und reduziert oxidativen Stress. Je nach Wellenlänge (Farbe) werden unterschiedliche Tiefen und zelluläre Prozesse aktiviert. Die Wirksamkeit ist durch über 4000 wissenschaftliche Studien belegt und die Methode wird von NASA, Dermatologen und ästhetischen Ärzten weltweit eingesetzt. LED-Lichttherapie ist evidenzbasierte Medizin – keine Esoterik, sondern pure Wissenschaft.'
        }
      ]}
      ctaTitle="Bereit für strahlende, gesunde Haut in München?"
      ctaDescription="Buchen Sie jetzt Ihre LED-Lichttherapie in unserem Studio in München-Haidhausen und erleben Sie die heilende Kraft des Lichts – wissenschaftlich bewährt, schmerzfrei und für alle Hauttypen geeignet. Kostenlose Beratung inklusive!"
    />
  );
};

export default Lichttherapie;
