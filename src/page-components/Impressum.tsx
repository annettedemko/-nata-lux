'use client'

import { useLanguage } from '@/contexts/LanguageContext';
import { Mail, MapPin, Phone } from 'lucide-react';

const Impressum = () => {
  const { language } = useLanguage();
  const isGerman = language === 'de';

  const handleEmailClick = () => {
    const email = 'Natali.lux@web.de';
    const cc = 'natalux878@gmail.com';
    window.location.href = `mailto:${email}?cc=${cc}`;
  };

  return (
    <div className="relative min-h-screen">
      {/* Background */}
      <div className="fixed inset-0 z-0">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'url(/45.webp)',
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="glass rounded-3xl p-8 md:p-12 animate-fade-in">
            {/* Header */}
            <h1 className="text-4xl md:text-5xl font-heading font-semibold text-brand-espresso mb-8">
              {isGerman ? 'Impressum' : 'Выходные данные'}
            </h1>

            {/* Legal Notice Content */}
            <div className="space-y-8 text-brand-coffee/80">
              {/* Company Information */}
              <section>
                <h2 className="text-2xl font-heading font-semibold text-brand-espresso mb-4">
                  {isGerman ? 'Angaben gemäß § 5 TMG' : 'Информация согласно § 5 TMG'}
                </h2>
                <div className="space-y-3">
                  <p className="text-lg font-medium text-brand-espresso">
                    Nataliia Koziukevych
                  </p>
                  <p className="text-lg font-medium text-brand-espresso">
                    {isGerman ? 'Наталия Козюкевич' : 'Nataliia Koziukevych'}
                  </p>
                  <p className="font-medium">NataLux</p>
                  <p className="text-sm text-brand-coffee/60">
                    {isGerman ? 'Gewerbebetrieb' : 'Предприятие торговли'}
                  </p>
                </div>
              </section>

              {/* Address */}
              <section>
                <h3 className="text-xl font-heading font-semibold text-brand-espresso mb-3 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-brand-gold" />
                  {isGerman ? 'Anschrift' : 'Адрес'}
                </h3>
                <div className="pl-7">
                  <p>Rosenheimerstraße 159</p>
                  <p>81671 München</p>
                  <p>Deutschland</p>
                </div>
              </section>

              {/* Contact */}
              <section>
                <h3 className="text-xl font-heading font-semibold text-brand-espresso mb-3">
                  {isGerman ? 'Kontakt' : 'Контакты'}
                </h3>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-brand-gold" />
                    <a href="tel:+4917677267269" className="hover:text-brand-gold transition-colors">
                      +49 176 77267269
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-brand-gold" />
                    <button
                      onClick={handleEmailClick}
                      className="hover:text-brand-gold transition-colors text-left"
                    >
                      Natali.lux@web.de
                    </button>
                  </div>
                </div>
              </section>

              {/* Tax Information */}
              <section>
                <h3 className="text-xl font-heading font-semibold text-brand-espresso mb-3">
                  {isGerman ? 'Umsatzsteuer-Identifikationsnummer' : 'Налоговая информация'}
                </h3>
                <div className="space-y-2">
                  <p>
                    <span className="font-medium">
                      {isGerman ? 'Steuernummer:' : 'Налоговый номер:'}
                    </span>{' '}
                    145/144/40930
                  </p>
                  <p>
                    <span className="font-medium">
                      {isGerman ? 'Identifikationsnummer:' : 'Идентификационный номер:'}
                    </span>{' '}
                    82143363058
                  </p>
                </div>
              </section>

              {/* Responsible for Content */}
              <section>
                <h3 className="text-xl font-heading font-semibold text-brand-espresso mb-3">
                  {isGerman
                    ? 'Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV'
                    : 'Ответственность за контент согласно § 55 Abs. 2 RStV'}
                </h3>
                <p>Nataliia Koziukevych</p>
                <p>Rosenheimerstraße 159</p>
                <p>81671 München</p>
              </section>

              {/* Dispute Resolution */}
              <section>
                <h3 className="text-xl font-heading font-semibold text-brand-espresso mb-3">
                  {isGerman
                    ? 'Verbraucherstreitbeilegung/Universalschlichtungsstelle'
                    : 'Разрешение споров потребителей'}
                </h3>
                <p className="leading-relaxed">
                  {isGerman
                    ? 'Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.'
                    : 'Мы не готовы и не обязаны участвовать в процедурах разрешения споров перед комиссией по урегулированию споров потребителей.'}
                </p>
              </section>

              {/* Liability for Content */}
              <section>
                <h3 className="text-xl font-heading font-semibold text-brand-espresso mb-3">
                  {isGerman ? 'Haftung für Inhalte' : 'Ответственность за контент'}
                </h3>
                <p className="leading-relaxed">
                  {isGerman
                    ? 'Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.'
                    : 'Как поставщик услуг, мы несем ответственность за собственный контент на этих страницах в соответствии с § 7 абз. 1 TMG согласно общим законам. Однако согласно §§ 8-10 TMG мы, как поставщик услуг, не обязаны контролировать переданную или сохраненную стороннюю информацию или расследовать обстоятельства, указывающие на незаконную деятельность.'}
                </p>
              </section>

              {/* Liability for Links */}
              <section>
                <h3 className="text-xl font-heading font-semibold text-brand-espresso mb-3">
                  {isGerman ? 'Haftung für Links' : 'Ответственность за ссылки'}
                </h3>
                <p className="leading-relaxed">
                  {isGerman
                    ? 'Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.'
                    : 'Наше предложение содержит ссылки на внешние сайты третьих лиц, на содержание которых мы не можем влиять. Поэтому мы не можем нести ответственность за этот сторонний контент. За содержание связанных страниц всегда несет ответственность соответствующий поставщик или оператор страниц.'}
                </p>
              </section>

              {/* Copyright */}
              <section>
                <h3 className="text-xl font-heading font-semibold text-brand-espresso mb-3">
                  {isGerman ? 'Urheberrecht' : 'Авторское право'}
                </h3>
                <p className="leading-relaxed">
                  {isGerman
                    ? 'Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.'
                    : 'Контент и работы, созданные операторами этих страниц, подпадают под действие немецкого закона об авторском праве. Воспроизведение, редактирование, распространение и любое использование за пределами авторского права требуют письменного согласия соответствующего автора или создателя.'}
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Impressum;
