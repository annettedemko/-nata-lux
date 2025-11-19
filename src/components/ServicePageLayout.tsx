'use client'

import { Link } from '@/components/LinkAdapter'
import { Button } from '@/components/ui/button';
import { CheckCircle2, Clock, LucideIcon } from 'lucide-react';
import { ReactNode } from 'react';

export interface ServicePageProps {
  // Hero section
  icon: LucideIcon;
  title: string;
  subtitle: string;

  // About section
  aboutTitle: string;
  aboutDescription: string[];

  // Benefits
  benefits: string[];

  // Process steps
  steps?: {
    title: string;
    description: string;
  }[];

  // Price table
  priceTable?: {
    service: string;
    duration: string;
    price: string;
  }[];

  // Contraindications
  contraindications?: string[];

  // FAQ
  faq?: {
    q: string;
    a: string;
  }[];

  // Additional sections (для уникального контента)
  additionalSections?: ReactNode;

  // CTA
  ctaTitle: string;
  ctaDescription: string;
}

export const ServicePageLayout = ({
  icon: Icon,
  title,
  subtitle,
  aboutTitle,
  aboutDescription,
  benefits,
  steps,
  priceTable,
  contraindications,
  faq,
  additionalSections,
  ctaTitle,
  ctaDescription,
}: ServicePageProps) => {
  return (
    <div className="min-h-screen py-20 bg-brand-cream">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Hero */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-brand-gold/10 mb-6">
            <Icon className="w-10 h-10 text-brand-gold" />
          </div>
          <h1 className="text-4xl md:text-5xl font-heading font-semibold text-brand-espresso mb-6">
            {title}
          </h1>
          <p className="text-xl text-brand-gold font-heading mb-4">
            {subtitle}
          </p>
        </div>

        {/* About Service */}
        <section className="glass rounded-2xl p-8 mb-12 animate-slide-up">
          <h2 className="text-2xl font-heading font-semibold text-brand-espresso mb-4">
            {aboutTitle}
          </h2>
          {aboutDescription.map((paragraph, index) => (
            <p key={index} className="text-brand-coffee/80 leading-relaxed mb-4 last:mb-0">
              {paragraph}
            </p>
          ))}
        </section>

        {/* Benefits */}
        <section className="glass rounded-2xl p-8 mb-12 animate-slide-up" style={{ animationDelay: '100ms' }}>
          <h2 className="text-2xl font-heading font-semibold text-brand-espresso mb-6">
            Ihre Vorteile
          </h2>
          <div className="space-y-3">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start">
                <CheckCircle2 className="w-5 h-5 text-brand-gold mr-3 mt-1 flex-shrink-0" />
                <span className="text-brand-coffee/80">{benefit}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Steps (optional) */}
        {steps && steps.length > 0 && (
          <section className="glass rounded-2xl p-8 mb-12 animate-slide-up" style={{ animationDelay: '200ms' }}>
            <h2 className="text-2xl font-heading font-semibold text-brand-espresso mb-6">
              Wie läuft die Behandlung ab?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {steps.map((step, index) => (
                <div key={index} className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-brand-gold/10 flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="font-heading font-semibold text-brand-gold">{index + 1}</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-brand-espresso mb-1">{step.title}</h3>
                    <p className="text-brand-coffee/70 text-sm leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Additional Sections */}
        {additionalSections}

        {/* Price Table (optional) */}
        {priceTable && priceTable.length > 0 && (
          <section className="glass rounded-2xl p-8 mb-12 animate-slide-up" style={{ animationDelay: '300ms' }}>
            <h2 className="text-2xl font-heading font-semibold text-brand-espresso mb-6">
              Preise & Dauer
            </h2>
            <div className="space-y-4">
              {priceTable.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between py-4 border-b border-brand-gold/10 last:border-0"
                >
                  <div>
                    <h3 className="font-semibold text-brand-espresso mb-1">{item.service}</h3>
                    <div className="flex items-center text-sm text-brand-coffee/60">
                      <Clock className="w-4 h-4 mr-1" />
                      {item.duration}
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-heading font-semibold text-brand-gold">{item.price}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <Button
                size="lg"
                className="bg-brand-gold hover:bg-brand-gold/90 text-white font-medium rounded-xl"
              >
                Jetzt buchen
              </Button>
            </div>
          </section>
        )}

        {/* Contraindications (optional) */}
        {contraindications && contraindications.length > 0 && (
          <section className="glass rounded-2xl p-8 mb-12 animate-slide-up" style={{ animationDelay: '400ms' }}>
            <h2 className="text-2xl font-heading font-semibold text-brand-espresso mb-4">
              Kontraindikationen
            </h2>
            <p className="text-brand-coffee/70 mb-4 leading-relaxed">
              In folgenden Fällen raten wir von dieser Behandlung ab:
            </p>
            <ul className="space-y-2">
              {contraindications.map((item, index) => (
                <li key={index} className="text-brand-coffee/70 pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-brand-gold">
                  {item}
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* FAQ (optional) */}
        {faq && faq.length > 0 && (
          <section className="glass rounded-2xl p-8 mb-12 animate-slide-up" style={{ animationDelay: '500ms' }}>
            <h2 className="text-2xl font-heading font-semibold text-brand-espresso mb-6">
              Häufige Fragen
            </h2>
            <div className="space-y-6">
              {faq.map((item, index) => (
                <div key={index}>
                  <h3 className="font-semibold text-brand-espresso mb-2">{item.q}</h3>
                  <p className="text-brand-coffee/70 leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* CTA */}
        <div className="bg-gold-gradient rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-heading font-semibold text-white mb-4">
            {ctaTitle}
          </h2>
          <p className="text-white/90 mb-6">
            {ctaDescription}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white hover:bg-brand-cream text-brand-espresso font-medium rounded-xl"
            >
              Termin buchen
            </Button>
            <Link to="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white/10 font-medium rounded-xl"
              >
                Beratung anfragen
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
