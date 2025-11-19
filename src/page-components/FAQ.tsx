'use client'

import { useLanguage } from '@/contexts/LanguageContext';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const FAQ = () => {
  const { t } = useLanguage();

  const faqCategories = [
    {
      category: 'Wimpernverlängerung',
      questions: [
        {
          q: 'Wie lange dauert eine Wimpernverlängerung?',
          a: 'Eine vollständige Wimpernverlängerung (Neuanlage) dauert je nach gewünschtem Look zwischen 60 und 150 Minuten. Classic Lashes benötigen etwa 60-90 Minuten, während 3D Volume bis zu 150 Minuten dauern kann.',
        },
        {
          q: 'Wie lange halten die Wimpern?',
          a: 'Die Wimpernverlängerung hält 3-4 Wochen. Da unsere natürlichen Wimpern einem Wachstumszyklus unterliegen, empfehlen wir ein Auffüllen alle 2-3 Wochen, um das volle Aussehen zu bewahren.',
        },
        {
          q: 'Kann ich mit Wimpernverlängerungen schwimmen gehen?',
          a: 'Ja! Nach den ersten 24-48 Stunden, in denen der Kleber vollständig aushärtet, können Sie normal schwimmen, duschen und Sport treiben. Vermeiden Sie jedoch starkes Reiben.',
        },
        {
          q: 'Tut die Behandlung weh?',
          a: 'Nein, die Behandlung ist schmerzfrei. Die meisten Kunden entspannen sich so sehr, dass sie einschlafen. Nur bei sehr empfindlichen Augen kann es zu leichtem Kribbeln kommen.',
        },
      ],
    },
    {
      category: 'Permanent Make-up',
      questions: [
        {
          q: 'Wie lange hält Permanent Make-up?',
          a: 'Je nach Technik und Hauttyp hält PMU 1-3 Jahre. Powder Brows halten meist länger als Microblading. Eine Auffrischung alle 12-18 Monate erhält die Farbintensität.',
        },
        {
          q: 'Ist PMU schmerzhaft?',
          a: 'Wir arbeiten mit betäubender Creme, sodass die Behandlung nur minimal unangenehm ist. Die meisten Kunden empfinden es als leichtes Kratzen oder Kribbeln.',
        },
        {
          q: 'Kann ich die Form und Farbe selbst wählen?',
          a: 'Absolut! Bei der Beratung besprechen wir gemeinsam Form, Farbe und Technik. Wir zeichnen die Form vor und Sie geben die finale Zustimmung, bevor wir beginnen.',
        },
        {
          q: 'Was ist nach der Behandlung zu beachten?',
          a: 'Die ersten 7-10 Tage sind wichtig für die Heilung. Vermeiden Sie Wasser, Schwitzen, Sonne und Makeup auf der behandelten Stelle. Wir geben Ihnen detaillierte Pflegehinweise.',
        },
      ],
    },
    {
      category: 'Laser Haarentfernung',
      questions: [
        {
          q: 'Wie viele Sitzungen brauche ich?',
          a: 'In der Regel sind 6-10 Sitzungen nötig für ein optimales Ergebnis. Der genaue Bedarf hängt von Ihrer Haarstruktur, Hauttyp und behandelten Bereich ab.',
        },
        {
          q: 'Ist die Behandlung schmerzhaft?',
          a: 'Die meisten Kunden beschreiben es als leichtes Kribbeln oder warmes Gummiband-Gefühl. Wir verwenden moderne Geräte mit Kühlsystem für maximalen Komfort.',
        },
        {
          q: 'Für welche Hauttypen ist Laser geeignet?',
          a: 'Unsere Alexandrit- und Dioden-Laser sind für die meisten Haut- und Haartypen geeignet. Bei der Erstberatung prüfen wir, welches Gerät optimal für Sie ist.',
        },
        {
          q: 'Wann sehe ich erste Ergebnisse?',
          a: 'Nach 2-3 Sitzungen werden Sie bereits eine deutliche Reduktion bemerken. Die Haare wachsen dünner und langsamer nach.',
        },
      ],
    },
    {
      category: 'Schulungen',
      questions: [
        {
          q: 'Brauche ich Vorkenntnisse?',
          a: 'Nein! Unsere Kurse beginnen bei den Grundlagen. Wir schulen sowohl Anfänger als auch Fortgeschrittene, die ihre Technik verbessern möchten.',
        },
        {
          q: 'Bekomme ich ein Zertifikat?',
          a: 'Ja, nach erfolgreichem Abschluss erhalten Sie ein offizielles Zertifikat, das Ihre Qualifikation bestätigt.',
        },
        {
          q: 'Was ist im Kurspreis enthalten?',
          a: 'Je nach Kurs sind Modelle, Starter-Kit mit Produkten, Arbeitsunterlagen, Zertifikat und lebenslange Nachbetreuung enthalten.',
        },
        {
          q: 'Kann ich nach dem Kurs direkt arbeiten?',
          a: 'Nach dem Kurs haben Sie das theoretische und praktische Wissen. Für bestimmte Behandlungen (z.B. Laser) benötigen Sie zusätzlich ein NiSV-Zertifikat.',
        },
      ],
    },
    {
      category: 'Allgemein',
      questions: [
        {
          q: 'Wie buche ich einen Termin?',
          a: 'Am einfachsten über WhatsApp, telefonisch oder über das Kontaktformular. Wir melden uns zeitnah zurück.',
        },
        {
          q: 'Welche Zahlungsmethoden akzeptieren Sie?',
          a: 'Wir akzeptieren Bargeld, EC-Karte und Kreditkarte. Für größere Behandlungen oder Kurse bieten wir auch Ratenzahlung an.',
        },
        {
          q: 'Kann ich einen Termin absagen?',
          a: 'Ja, bitte informieren Sie uns mindestens 24 Stunden vorher. Bei kurzfristigen Absagen behalten wir uns eine Stornogebühr vor.',
        },
        {
          q: 'Bieten Sie Geschenkgutscheine an?',
          a: 'Ja! Unsere Gutscheine sind das perfekte Geschenk und für alle Behandlungen einlösbar.',
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-heading font-semibold text-brand-espresso mb-6">
            {t('faq.title')}
          </h1>
          <p className="text-lg text-brand-coffee/80 leading-relaxed">
            Hier finden Sie Antworten auf die häufigsten Fragen zu unseren Behandlungen und Services.
          </p>
        </div>

        {/* FAQ Sections */}
        <div className="space-y-12 max-w-4xl mx-auto">
          {faqCategories.map((category, index) => (
            <div 
              key={category.category}
              className="animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <h2 className="text-2xl font-heading font-semibold text-brand-espresso mb-6">
                {category.category}
              </h2>
              
              <Accordion type="single" collapsible className="space-y-4">
                {category.questions.map((item, qIndex) => (
                  <AccordionItem 
                    key={qIndex} 
                    value={`${category.category}-${qIndex}`}
                    className="glass rounded-xl px-6 border-0"
                  >
                    <AccordionTrigger className="text-left font-semibold text-brand-espresso hover:text-brand-gold py-4">
                      {item.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-brand-coffee/70 leading-relaxed pb-4">
                      {item.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="glass rounded-2xl p-8 md:p-12 max-w-2xl mx-auto mt-16 text-center">
          <h2 className="text-2xl font-heading font-semibold text-brand-espresso mb-4">
            Noch Fragen?
          </h2>
          <p className="text-brand-coffee/70 mb-6 leading-relaxed">
            Wenn Sie weitere Fragen haben, kontaktieren Sie uns gerne direkt.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/4917677267269"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-brand-gold hover:bg-brand-gold/90 text-white font-medium rounded-xl transition-all shadow-medium hover:shadow-glow inline-block"
            >
              WhatsApp
            </a>
            <a
              href="tel:+4917677267269"
              className="px-8 py-3 border-2 border-brand-gold text-brand-espresso hover:bg-brand-gold/10 font-medium rounded-xl transition-all inline-block"
            >
              Anrufen
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
