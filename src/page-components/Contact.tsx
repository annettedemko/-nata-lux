'use client'

import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { MapPin, Phone, Mail, Clock, Car, Train, Instagram } from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';
import { GoogleMapsEmbed } from '@/components/GoogleMapsEmbed';

const Contact = () => {
  const { t, language } = useLanguage();
  const isGerman = language === 'de';
  const [agreed, setAgreed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    const formData = new FormData(e.currentTarget);

    // Add Web3Forms access key from environment variable
    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;
    if (!accessKey) {
      console.error('Web3Forms access key is not configured');
      setSubmitStatus('error');
      setIsSubmitting(false);
      return;
    }
    formData.append('access_key', accessKey);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setSubmitStatus('success');
        e.currentTarget.reset();
        setAgreed(false);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
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
            {language === 'de'
              ? 'Haben Sie Fragen oder möchten einen Termin vereinbaren? Kontaktieren Sie uns – wir freuen uns auf Sie!'
              : language === 'ru'
              ? 'Есть вопросы или хотите записаться? Свяжитесь с нами – мы будем рады вам помочь!'
              : 'Маєте запитання або хочете записатися? Зв\'яжіться з нами – ми будемо раді вам допомогти!'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8 animate-slide-up">
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-heading font-semibold text-brand-espresso mb-6">
                {language === 'de' ? 'Kontaktinformationen' : language === 'ru' ? 'Контактная информация' : 'Контактна інформація'}
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-brand-gold/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-brand-gold" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-brand-espresso mb-1">{language === 'de' ? 'Adresse' : language === 'ru' ? 'Адрес' : 'Адреса'}</h3>
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
                    <h3 className="font-semibold text-brand-espresso mb-1">{language === 'de' ? 'Telefon / WhatsApp / Telegram' : language === 'ru' ? 'Телефон / WhatsApp / Telegram' : 'Телефон / WhatsApp / Telegram'}</h3>
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
                      <h3 className="font-semibold text-brand-espresso mb-2">{language === 'de' ? 'Anfahrt & Parken' : language === 'ru' ? 'Как добраться и парковка' : 'Як дістатися та парковка'}</h3>
                      <p className="text-sm text-brand-coffee/70 mb-2">{language === 'de' ? 'Zu Fuß: 5–7 Min. vom Ostbahnhof/Orleansplatz' : language === 'ru' ? 'Пешком: 5–7 мин. от Ostbahnhof/Orleansplatz' : 'Пішки: 5–7 хв. від Ostbahnhof/Orleansplatz'}</p>
                      <ul className="text-sm text-brand-coffee/70 space-y-1">
                        <li>
                          • <a
                              href="https://maps.app.goo.gl/aamBNHd7cQLSozwt7"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:text-brand-gold transition-colors underline"
                            >
                              Parkhaus am Ostbahnhof
                            </a> ({language === 'de' ? '6 Min. Fußweg' : language === 'ru' ? '6 мин. пешком' : '6 хв. пішки'})
                        </li>
                        <li>
                          • <a
                              href="https://maps.app.goo.gl/RkUPoRsZS3BNMPQy7"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:text-brand-gold transition-colors underline"
                            >
                              Motel One Parkplatz
                            </a> ({language === 'de' ? '5 Min. Fußweg' : language === 'ru' ? '5 мин. пешком' : '5 хв. пішки'})
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-xl bg-brand-gold/10 flex items-center justify-center flex-shrink-0">
                      <Train className="w-6 h-6 text-brand-gold" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-brand-espresso mb-2">{language === 'de' ? 'ÖPNV' : language === 'ru' ? 'Общественный транспорт' : 'Громадський транспорт'}</h3>
                      <ul className="text-sm text-brand-coffee/70 space-y-1">
                        <li>• S-Bahn München Ost ({language === 'de' ? '5–7 Min. Fußweg' : language === 'ru' ? '5–7 мин. пешком' : '5–7 хв. пішки'})</li>
                        <li>• U5 Ostbahnhof ({language === 'de' ? '5–7 Min. Fußweg' : language === 'ru' ? '5–7 мин. пешком' : '5–7 хв. пішки'})</li>
                        <li>• Tram/Bus Orleansplatz</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Map with Consent + Address Card */}
            <div className="space-y-4">
              <div className="glass rounded-2xl overflow-hidden relative">
                <GoogleMapsEmbed
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2662.8!2d11.603257!3d48.129653!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479e7534ffb1bdb1%3A0x751e036a37717a9f!2s%E2%80%9ENataLux%E2%80%9C%20Permanent%20Make%20Up%20Studio!5e0!3m2!1sde!2sde!4v1709000000000!5m2!1sde!2sde"
                  className="rounded-xl"
                  height="320"
                />
              </div>
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=NataLux+Permanent+Make+Up+Studio+Elsässer+Straße+33+81667+München"
                target="_blank"
                rel="noopener noreferrer"
                className="glass rounded-2xl px-6 py-4 flex items-center justify-between group hover:border-brand-gold/30 border border-transparent transition-colors duration-300 block"
              >
                <div>
                  <p className="text-brand-espresso font-bold text-lg flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-brand-gold" />
                    NataLux Studio
                  </p>
                  <p className="text-brand-coffee/70 text-sm ml-7">Elsässer Straße 33, 81667 München-Haidhausen</p>
                </div>
                <p className="text-brand-gold text-sm font-semibold whitespace-nowrap">
                  {language === 'de' ? 'Route →' : language === 'ru' ? 'Маршрут →' : 'Маршрут →'}
                </p>
              </a>

              {/* Quick Transport Info under Map */}
              <div className="glass rounded-2xl px-6 py-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Car className="w-4 h-4 text-brand-gold" />
                      <span className="font-semibold text-brand-espresso">{language === 'de' ? 'Parkplätze:' : language === 'ru' ? 'Парковки:' : 'Паркування:'}</span>
                    </div>
                    <ul className="text-brand-coffee/70 space-y-1 ml-6">
                      <li>• <a href="https://maps.app.goo.gl/aamBNHd7cQLSozwt7" target="_blank" rel="noopener noreferrer" className="hover:text-brand-gold transition-colors underline">Parkhaus Ostbahnhof</a> ({language === 'de' ? '6 Min.' : language === 'ru' ? '6 мин.' : '6 хв.'})</li>
                      <li>• <a href="https://maps.app.goo.gl/RkUPoRsZS3BNMPQy7" target="_blank" rel="noopener noreferrer" className="hover:text-brand-gold transition-colors underline">Motel One</a> ({language === 'de' ? '5 Min.' : language === 'ru' ? '5 мин.' : '5 хв.'})</li>
                    </ul>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Train className="w-4 h-4 text-brand-gold" />
                      <span className="font-semibold text-brand-espresso">{language === 'de' ? 'ÖPNV:' : language === 'ru' ? 'Общественный транспорт:' : 'Громадський транспорт:'}</span>
                    </div>
                    <ul className="text-brand-coffee/70 space-y-1 ml-6">
                      <li>• S-Bahn München Ost ({language === 'de' ? '5–7 Min.' : language === 'ru' ? '5–7 мин.' : '5–7 хв.'})</li>
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
              {language === 'de' ? 'Nachricht senden' : language === 'ru' ? 'Отправить сообщение' : 'Надіслати повідомлення'}
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Success Message */}
              {submitStatus === 'success' && (
                <div className="p-4 rounded-xl bg-green-50 border border-green-200 text-green-800">
                  {language === 'de' ? '✓ Nachricht erfolgreich gesendet!' : language === 'ru' ? '✓ Сообщение успешно отправлено!' : '✓ Повідомлення успішно надіслано!'}
                </div>
              )}

              {/* Error Message */}
              {submitStatus === 'error' && (
                <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-800">
                  {language === 'de' ? '✗ Fehler beim Senden. Bitte versuchen Sie es erneut.' : language === 'ru' ? '✗ Ошибка отправки. Попробуйте снова.' : '✗ Помилка відправки. Спробуйте ще раз.'}
                </div>
              )}

              <div>
                <label htmlFor="name" className="block text-sm font-medium text-brand-espresso mb-2">
                  {t('contact.name')}
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  disabled={isSubmitting}
                  className="bg-white/50 border-brand-gold/20 focus:border-brand-gold"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-brand-espresso mb-2">
                  {t('contact.email')}
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  disabled={isSubmitting}
                  className="bg-white/50 border-brand-gold/20 focus:border-brand-gold"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-brand-espresso mb-2">
                  {t('contact.phone')}
                </label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  disabled={isSubmitting}
                  className="bg-white/50 border-brand-gold/20 focus:border-brand-gold"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-brand-espresso mb-2">
                  {t('contact.message')}
                </label>
                <Textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  disabled={isSubmitting}
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
                disabled={!agreed || isSubmitting}
                className="w-full bg-brand-gold hover:bg-brand-gold/90 text-white font-medium rounded-xl text-lg py-6 disabled:opacity-50"
              >
                {isSubmitting
                  ? (language === 'de' ? 'Wird gesendet...' : language === 'ru' ? 'Отправка...' : 'Відправка...')
                  : t('contact.submit')}
              </Button>
            </form>

            {/* Studio Photo */}
            <div className="mt-6 rounded-xl overflow-hidden">
              <Image
                src="/193.jpeg"
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
