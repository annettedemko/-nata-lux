'use client'

import { ServicePageLayout } from '@/components/ServicePageLayout';
import { Shield } from 'lucide-react';

const PMURemover = () => {
  return (
    <ServicePageLayout
      icon={Shield}
      title="PMU Remover"
      subtitle="Sichere Entfernung von Permanent Make-up – Professionell und schonend"
      aboutTitle="Was ist PMU Remover?"
      aboutDescription={[
        'PMU Remover ist eine professionelle Methode zur Entfernung von unerwünschtem oder veraltetem Permanent Make-up. Anders als Laserbehandlungen arbeitet der Remover mit speziellen Lösungen, die die Pigmente schonend aus der Haut lösen.',
        'Diese Methode ist besonders effektiv bei Fremdarbeiten, verblassten Farben oder wenn Sie einfach einen Neuanfang wünschen. Der Remover kann für Augenbrauen, Lippen und Eyeliner eingesetzt werden.',
        'Die Behandlung erfolgt in 2 Schritten: erst im Salon, dann mit Heimpflege für optimale Ergebnisse. Je nach Pigmentierung sind 1-3 Sitzungen nötig.'
      ]}
      benefits={[
        'Schonender als Laserbehandlung',
        'Funktioniert bei allen Farben (auch bei hellen Pigmenten)',
        'Keine Narbenbildung',
        'Präzise Entfernung möglich',
        'Kombinierbar mit Nachkorrektur',
        '2-Stufen-Verfahren für beste Ergebnisse',
        'Auch für empfindliche Haut geeignet',
        'Professionelle Betreuung während des gesamten Prozesses'
      ]}
      steps={[
        {
          title: 'Analyse & Beratung',
          description: 'Wir begutachten Ihr PMU und erstellen einen individuellen Behandlungsplan.'
        },
        {
          title: 'Salon-Behandlung',
          description: 'Auftragen der Remover-Lösung im Studio – präzise und kontrolliert.'
        },
        {
          title: 'Heimpflege',
          description: 'Sie erhalten spezielle Pflegeprodukte für die Nachbehandlung zu Hause.'
        },
        {
          title: 'Kontrolltermin',
          description: 'Nach 6-8 Wochen beurteilen wir das Ergebnis und entscheiden über weitere Sitzungen.'
        }
      ]}
      priceTable={[
        { service: 'PMU Remover Augenbrauen (1 Sitzung)', duration: '1,5 Std.', price: '180€' },
        { service: 'PMU Remover Lippen (1 Sitzung)', duration: '2 Std.', price: '220€' },
        { service: 'PMU Remover Eyeliner (1 Sitzung)', duration: '1,5 Std.', price: '180€' },
        { service: '3er-Paket Augenbrauen', duration: '3x 1,5 Std.', price: '450€' },
        { service: 'Beratungstermin', duration: '30 Min.', price: 'Kostenlos' }
      ]}
      contraindications={[
        'Schwangerschaft und Stillzeit',
        'Aktive Hautinfektionen im Behandlungsbereich',
        'Einnahme von Blutverdünnern',
        'Sehr empfindliche oder zu Narbenbildung neigende Haut',
        'Chemotherapie oder Bestrahlung',
        'Diabetes (nur nach ärztlicher Abklärung)'
      ]}
      faq={[
        {
          q: 'Wie viele Sitzungen brauche ich?',
          a: 'Das hängt von der Intensität und Tiefe der Pigmentierung ab. Meist sind 1-3 Sitzungen nötig, mit 6-8 Wochen Abstand.'
        },
        {
          q: 'Ist die Entfernung schmerzhaft?',
          a: 'Die Behandlung ist mit betäubender Creme gut erträglich. Während der Heilungsphase kann leichtes Jucken auftreten.'
        },
        {
          q: 'Kann ich danach neues PMU machen lassen?',
          a: 'Ja, nach vollständiger Abheilung (ca. 8-12 Wochen nach der letzten Sitzung) kann neues PMU aufgetragen werden.'
        },
        {
          q: 'Warum ist Remover besser als Laser?',
          a: 'Der Remover funktioniert bei allen Farben (auch Rot, Orange, Weiß), während Laser nur dunkle Pigmente entfernt. Zudem ist er schonender zur Haut.'
        }
      ]}
      ctaTitle="Bereit für einen Neuanfang?"
      ctaDescription="Buchen Sie jetzt eine kostenlose Beratung und wir erstellen Ihren individuellen Behandlungsplan."
    />
  );
};

export default PMURemover;
