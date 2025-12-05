'use client'

import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { MapPin, Phone, Mail, Clock, Car, Train, Instagram } from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';

const Contact = () => {
  const { t, language } = useLanguage();
  const isGerman = language === 'de';
  const [agreed, setAgreed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="relative min-h-screen">
      {/* Background Image */}
      <div className="fixed inset-0 z-0">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'url(/17.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 py-20">
        <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-semibold text-brand-espresso mb-6">
            {t('contact.title')}
          </h1>
          <p className="text-lg text-brand-coffee/80 max-w-2xl mx-auto leading-relaxed">
            {isGerman
              ? 'Haben Sie Fragen oder möchten einen Termin vereinbaren? Kontaktieren Sie uns – wir freuen uns auf Sie!'
              : 'Есть вопросы или хотите записаться? Свяжитесь с нами – мы будем рады вам помочь!'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8 animate-slide-up">
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-heading font-semibold text-brand-espresso mb-6">
                {isGerman ? 'Kontaktinformationen' : 'Контактная информация'}
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-brand-gold/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-brand-gold" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-brand-espresso mb-1">{isGerman ? 'Adresse' : 'Адрес'}</h3>
                    <a
                      href="https://maps.google.com/?q=Elsässer+Straße+33+81667+München"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-brand-coffee/70 hover:text-brand-gold transition-colors block"
                    >
                      NataLux Studio<br />
                      Elsässer Straße 33<br />
                      81667 München-Haidhausen
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-brand-gold/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-brand-gold" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-brand-espresso mb-1">{isGerman ? 'Telefon / WhatsApp / Telegram' : 'Телефон / WhatsApp / Telegram'}</h3>
                    <a href="tel:+4917677267269" className="text-brand-coffee/70 hover:text-brand-gold transition-colors block mb-2">
                      +49 176 77267269
                    </a>
                    <div className="flex gap-3 mt-2">
                      <a
                        href="https://wa.me/4917677267269"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-3 py-1 bg-green-500 hover:bg-green-600 text-white rounded-lg text-sm transition-colors"
                      >
                        WhatsApp
                      </a>
                      <a
                        href="https://t.me/+4917677267269"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-3 py-1 bg-blue-500 hover:bg-blue-600 text-white rounded-lg text-sm transition-colors"
                      >
                        Telegram
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-brand-gold/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-brand-gold" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-brand-espresso mb-1">E-Mail</h3>
                    <a href="mailto:natali.lux@web.de" className="text-brand-coffee/70 hover:text-brand-gold transition-colors">
                      natali.lux@web.de
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-brand-gold/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-brand-gold" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-brand-espresso mb-1">{t('footer.hours')}</h3>
                    <div className="text-brand-coffee/70 space-y-1">
                      <p>{t('footer.hours.weekdays')}</p>
                      <p>{t('footer.hours.saturday')}</p>
                      <p>{t('footer.hours.sunday')}</p>
                    </div>
                  </div>
                </div>

                {/* Instagram */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-brand-gold/10 flex items-center justify-center flex-shrink-0">
                    <Instagram className="w-6 h-6 text-brand-gold" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-brand-espresso mb-1">Instagram</h3>
                    <a
                      href="https://www.instagram.com/nata_lux_pm?igsh=bnluOTNuZ2RsNnp2"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-brand-coffee/70 hover:text-brand-gold transition-colors"
                    >
                      @nata_lux_pm
                    </a>
                  </div>
                </div>

                {/* Transportation */}
                <div className="pt-4 border-t border-brand-gold/20">
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-brand-gold/10 flex items-center justify-center flex-shrink-0">
                      <Car className="w-6 h-6 text-brand-gold" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-brand-espresso mb-2">{isGerman ? 'Anfahrt & Parken' : 'Как добраться и парковка'}</h3>
                      <p className="text-sm text-brand-coffee/70 mb-2">{isGerman ? 'Zu Fuß: 5–7 Min. vom Ostbahnhof/Orleansplatz' : 'Пешком: 5–7 мин. от Ostbahnhof/Orleansplatz'}</p>
                      <ul className="text-sm text-brand-coffee/70 space-y-1">
                        <li>
                          • <a
                              href="https://maps.app.goo.gl/aamBNHd7cQLSozwt7"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:text-brand-gold transition-colors underline"
                            >
                              Parkhaus am Ostbahnhof
                            </a> (6 Min. Fußweg)
                        </li>
                        <li>
                          • <a
                              href="https://maps.app.goo.gl/RkUPoRsZS3BNMPQy7"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:text-brand-gold transition-colors underline"
                            >
                              Motel One Parkplatz
                            </a> (5 Min. Fußweg)
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-xl bg-brand-gold/10 flex items-center justify-center flex-shrink-0">
                      <Train className="w-6 h-6 text-brand-gold" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-brand-espresso mb-2">{isGerman ? 'ÖPNV' : 'Общественный транспорт'}</h3>
                      <ul className="text-sm text-brand-coffee/70 space-y-1">
                        <li>• S-Bahn München Ost (5–7 Min. Fußweg)</li>
                        <li>• U5 Ostbahnhof (5–7 Min. Fußweg)</li>
                        <li>• Tram/Bus Orleansplatz</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Map - Clickable with Full Address & Transport Info */}
            <div className="space-y-4">
              <div className="glass rounded-2xl overflow-hidden h-64 md:h-80 relative group">
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=Elsässer+Straße+33+81667+München"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 z-10 cursor-pointer"
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent flex items-end justify-center pb-6 opacity-100 group-hover:opacity-95 transition-opacity">
                    <div className="bg-white/98 backdrop-blur-md px-6 py-4 rounded-xl shadow-2xl border-2 border-brand-gold/30">
                      <p className="text-brand-espresso font-bold text-xl flex items-center gap-3 mb-2">
                        <MapPin className="w-6 h-6 text-brand-gold" />
                        NataLux Studio
                      </p>
                      <p className="text-brand-coffee/80 text-base font-medium">
                        Elsässer Straße 33
                      </p>
                      <p className="text-brand-coffee/70 text-sm mb-3">
                        81667 München-Haidhausen
                      </p>
                      <p className="text-brand-gold text-sm font-semibold flex items-center gap-2">
                        {isGerman ? 'Route in Google Maps öffnen →' : 'Открыть маршрут в Google Maps →'}
                      </p>
                    </div>
                  </div>
                </a>
                <iframe
                  src="https://www.google.com/maps?q=Elsässer+Straße+33,+81667+München&output=embed&z=17"
                  width="100%"
                  height="100%"
                  style={{ border: 0, pointerEvents: 'none' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="NataLux Studio - Elsässer Straße 33, 81667 München-Haidhausen"
                ></iframe>
              </div>

              {/* Quick Transport Info under Map */}
              <div className="glass rounded-2xl px-6 py-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Car className="w-4 h-4 text-brand-gold" />
                      <span className="font-semibold text-brand-espresso">{isGerman ? 'Parkplätze:' : 'Парковки:'}</span>
                    </div>
                    <ul className="text-brand-coffee/70 space-y-1 ml-6">
                      <li>• <a href="https://maps.app.goo.gl/aamBNHd7cQLSozwt7" target="_blank" rel="noopener noreferrer" className="hover:text-brand-gold transition-colors underline">Parkhaus Ostbahnhof</a> (6 Min.)</li>
                      <li>• <a href="https://maps.app.goo.gl/RkUPoRsZS3BNMPQy7" target="_blank" rel="noopener noreferrer" className="hover:text-brand-gold transition-colors underline">Motel One</a> (5 Min.)</li>
                    </ul>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Train className="w-4 h-4 text-brand-gold" />
                      <span className="font-semibold text-brand-espresso">ÖPNV:</span>
                    </div>
                    <ul className="text-brand-coffee/70 space-y-1 ml-6">
                      <li>• S-Bahn München Ost (5–7 Min.)</li>
                      <li>• U5 Ostbahnhof, Tram/Bus Orleansplatz</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass rounded-2xl p-8 animate-slide-up" style={{ animationDelay: '100ms' }}>
            <h2 className="text-2xl font-heading font-semibold text-brand-espresso mb-6">
              {isGerman ? 'Nachricht senden' : 'Отправить сообщение'}
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-brand-espresso mb-2">
                  {t('contact.name')}
                </label>
                <Input
                  id="name"
                  type="text"
                  required
                  className="bg-white/50 border-brand-gold/20 focus:border-brand-gold"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-brand-espresso mb-2">
                  {t('contact.email')}
                </label>
                <Input
                  id="email"
                  type="email"
                  required
                  className="bg-white/50 border-brand-gold/20 focus:border-brand-gold"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-brand-espresso mb-2">
                  {t('contact.phone')}
                </label>
                <Input
                  id="phone"
                  type="tel"
                  className="bg-white/50 border-brand-gold/20 focus:border-brand-gold"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-brand-espresso mb-2">
                  {t('contact.message')}
                </label>
                <Textarea
                  id="message"
                  rows={5}
                  required
                  className="bg-white/50 border-brand-gold/20 focus:border-brand-gold resize-none"
                />
              </div>

              <div className="flex items-start space-x-3">
                <Checkbox
                  id="privacy"
                  checked={agreed}
                  onCheckedChange={(checked) => setAgreed(checked as boolean)}
                  className="mt-1"
                />
                <label htmlFor="privacy" className="text-sm text-brand-coffee/70 leading-relaxed cursor-pointer">
                  {t('contact.privacy')}
                </label>
              </div>

              <Button
                type="submit"
                disabled={!agreed}
                className="w-full bg-brand-gold hover:bg-brand-gold/90 text-white font-medium rounded-xl text-lg py-6 disabled:opacity-50"
              >
                {t('contact.submit')}
              </Button>
            </form>

            {/* Studio Photo */}
            <div className="mt-6 rounded-xl overflow-hidden">
              <Image
                src="/133.jpeg"
                alt="NataLux Studio"
                width={800}
                height={600}
                className="w-full h-auto object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
