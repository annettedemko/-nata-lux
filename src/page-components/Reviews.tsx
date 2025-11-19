'use client'

import { useLanguage } from '@/contexts/LanguageContext';
import { Star, Quote } from 'lucide-react';

const Reviews = () => {
  const { t } = useLanguage();

  const reviews = [
    {
      name: 'Anna M.',
      rating: 5,
      date: '2 Wochen her',
      text: 'Ich bin absolut begeistert von meinen neuen Wimpern! Das Team ist super professionell und die Atmosphäre im Salon ist sehr angenehm. Die Behandlung war schmerzfrei und das Ergebnis übertrifft alle meine Erwartungen. Natürlich, voluminös und einfach perfekt!',
      service: 'Wimpernverlängerung',
    },
    {
      name: 'Maria Schmidt',
      rating: 5,
      date: '3 Wochen her',
      text: 'Die beste PMU-Behandlung, die ich je hatte! Die Beratung war ausführlich und ich fühlte mich sehr gut aufgehoben. Meine Augenbrauen sehen jetzt jeden Tag perfekt aus, ohne dass ich Zeit mit Schminken verbringen muss. Absolut empfehlenswert!',
      service: 'Permanent Make-up',
    },
    {
      name: 'Julia K.',
      rating: 5,
      date: '1 Monat her',
      text: 'Nach nur 3 Sitzungen sehe ich bereits deutliche Ergebnisse bei der Laser-Haarentfernung. Die Behandlung war viel angenehmer als erwartet. Das Personal ist sehr freundlich und kompetent. Preis-Leistung stimmt definitiv!',
      service: 'Laser Haarentfernung',
    },
    {
      name: 'Sophie Weber',
      rating: 5,
      date: '1 Monat her',
      text: 'Die Augenbrauen-Laminierung hält schon über 5 Wochen und sieht immer noch top aus! Endlich habe ich die gepflegten, gleichmäßigen Brauen, die ich mir immer gewünscht habe. Der Salon ist modern und sehr sauber.',
      service: 'Laminierung',
    },
    {
      name: 'Elena P.',
      rating: 5,
      date: '2 Monate her',
      text: 'Ich habe den Anti-Aging-Kurs gemacht und bin mehr als zufrieden. Meine Haut ist straffer und frischer. Die Behandlungen waren entspannend und die Ergebnisse sprechen für sich. Gerne wieder!',
      service: 'Anti-Aging',
    },
    {
      name: 'Natalia H.',
      rating: 5,
      date: '2 Monate her',
      text: 'Tolle Erfahrung! Ich habe hier den Wimpernverlängerungs-Kurs gemacht und kann es nur empfehlen. Die Trainerin war sehr geduldig und hat alles super erklärt. Jetzt arbeite ich selbst als Lash-Stylistin!',
      service: 'Schulung',
    },
    {
      name: 'Lisa M.',
      rating: 5,
      date: '3 Monate her',
      text: 'Hygiene und Professionalität auf höchstem Niveau. Ich fühle mich hier immer gut aufgehoben. Die Preise sind fair und die Qualität der Arbeit ist ausgezeichnet. Mein Stammsalon!',
      service: 'Verschiedene Behandlungen',
    },
    {
      name: 'Christina B.',
      rating: 5,
      date: '3 Monate her',
      text: 'Die Gesichtsbehandlung war fantastisch! Meine Haut fühlt sich so weich und erfrischt an. Die Produkte, die verwendet wurden, sind hochwertig und man merkt den Unterschied sofort.',
      service: 'Gesichtspflege',
    },
    {
      name: 'Olga K.',
      rating: 5,
      date: '4 Monate her',
      text: 'Ich kann NATA LUX nur wärmstens empfehlen! Besonders die PMU-Entfernung war ein Erfolg. Professionell, sauber und mit tollem Ergebnis. Das Team nimmt sich wirklich Zeit für jeden Kunden.',
      service: 'PMU Entfernung',
    },
  ];

  const averageRating = reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length;
  const totalReviews = reviews.length;

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-heading font-semibold text-brand-espresso mb-6">
            {t('reviews.title')}
          </h1>
          
          {/* Rating Summary */}
          <div className="glass rounded-2xl p-8 max-w-md mx-auto mb-8">
            <div className="flex justify-center mb-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-8 h-8 fill-brand-gold text-brand-gold" />
              ))}
            </div>
            <div className="text-4xl font-heading font-semibold text-brand-gold mb-2">
              {averageRating.toFixed(1)}
            </div>
            <p className="text-brand-coffee/70">
              Basierend auf {totalReviews} Bewertungen
            </p>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {reviews.map((review, index) => (
            <div 
              key={index}
              className="glass rounded-2xl p-6 hover-lift animate-slide-up relative"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-brand-gold/20" />
              
              <div className="flex items-center justify-between mb-4">
                <div className="flex">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-brand-gold text-brand-gold" />
                  ))}
                </div>
                <span className="text-sm text-brand-coffee/60">{review.date}</span>
              </div>
              
              <p className="text-brand-coffee/80 mb-4 leading-relaxed italic">
                "{review.text}"
              </p>
              
              <div className="border-t border-brand-gold/10 pt-4">
                <p className="font-semibold text-brand-espresso mb-1">
                  {review.name}
                </p>
                <p className="text-sm text-brand-gold">
                  {review.service}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="glass rounded-2xl p-8 md:p-12 max-w-2xl mx-auto mt-16 text-center">
          <h2 className="text-2xl font-heading font-semibold text-brand-espresso mb-4">
            Teilen Sie Ihre Erfahrung
          </h2>
          <p className="text-brand-coffee/70 mb-6 leading-relaxed">
            Waren Sie zufrieden mit unserer Behandlung? Wir freuen uns über Ihr Feedback!
          </p>
          <a
            href="https://g.page/r/..."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-brand-gold hover:bg-brand-gold/90 text-white font-medium rounded-xl transition-all shadow-medium hover:shadow-glow"
          >
            Bewertung auf Google schreiben
          </a>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
