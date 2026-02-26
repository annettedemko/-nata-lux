'use client'

import { useLanguage } from '@/contexts/LanguageContext';
import { Mail, MapPin, Phone } from 'lucide-react';

const Impressum = () => {
  const { language } = useLanguage();

  const handleEmailClick = () => {
    const email = 'natali.lux@web.de';
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
              {language === 'de' ? 'Impressum' : language === 'ru' ? 'Выходные данные' : 'Вихідні дані'}
            </h1>

            {/* Legal Notice Content */}
            <div className="space-y-8 text-brand-coffee/80">
              {/* Company Information */}
              <section>
                <h2 className="text-2xl font-heading font-semibold text-brand-espresso mb-4">
                  {language === 'de' ? 'Angaben gemäß § 5 DDG' : language === 'ru' ? 'Информация согласно § 5 DDG' : 'Інформація згідно § 5 DDG'}
                </h2>
                <div className="space-y-3">
                  <p className="text-lg font-medium text-brand-espresso">
                    {language === 'de' ? 'Nataliia Koziukevych' : language === 'ru' ? 'Наталия Козюкевич' : 'Наталія Козюкевич'}
                  </p>
                  <p className="font-medium">NataLux</p>
                  <p className="font-medium text-brand-espresso">
                    {language === 'de' ? 'Einzelunternehmen (Gewerbebetrieb)' : language === 'ru' ? 'Индивидуальное предприятие' : 'Індивідуальне підприємство'}
                  </p>
                  <p>
                    <span className="font-medium">
                      {language === 'de' ? 'Berufsbezeichnung:' : language === 'ru' ? 'Профессия:' : 'Професія:'}
                    </span>{' '}
                    {language === 'de' ? 'Kosmetikerin' : language === 'ru' ? 'Косметолог' : 'Косметолог'}
                  </p>
                </div>
              </section>

              {/* Address */}
              <section>
                <h3 className="text-xl font-heading font-semibold text-brand-espresso mb-3 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-brand-gold" />
                  {language === 'de' ? 'Anschrift' : language === 'ru' ? 'Адрес' : 'Адреса'}
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
                  {language === 'de' ? 'Kontakt' : language === 'ru' ? 'Контакты' : 'Контакти'}
                </h3>
                <div className="space-y-2">
                  <p className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-brand-gold" />
                    <span className="font-medium">{language === 'de' ? 'Telefon:' : 'Телефон:'}</span>
                    <a href="tel:+4917677267269" className="hover:text-brand-gold transition-colors">
                      +49 176 77267269
                    </a>
                  </p>
                  <p className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-brand-gold" />
                    <span className="font-medium">E-Mail:</span>
                    <button
                      onClick={handleEmailClick}
                      className="hover:text-brand-gold transition-colors text-left"
                    >
                      natali.lux@web.de
                    </button>
                  </p>
                </div>
              </section>

              {/* Tax Information */}
              <section>
                <h3 className="text-xl font-heading font-semibold text-brand-espresso mb-3">
                  {language === 'de' ? 'Umsatzsteuer' : language === 'ru' ? 'Налог с оборота' : 'Податок з обороту'}
                </h3>
                <p className="leading-relaxed">
                  {language === 'de'
                    ? 'Gemäß § 19 UStG wird keine Umsatzsteuer berechnet.'
                    : language === 'ru'
                    ? 'Согласно § 19 UStG (Закон об НДС) налог с оборота не взимается.'
                    : 'Згідно § 19 UStG (Закон про ПДВ) податок з обороту не стягується.'}
                </p>
              </section>

              {/* Supervisory Authority */}
              <section>
                <h3 className="text-xl font-heading font-semibold text-brand-espresso mb-3">
                  {language === 'de' ? 'Zuständige Aufsichtsbehörde' : language === 'ru' ? 'Контролирующий орган' : 'Контролюючий орган'}
                </h3>
                <div className="space-y-1">
                  <p className="font-medium">Landeshauptstadt München</p>
                  <p>Kreisverwaltungsreferat (KVR)</p>
                  <p>Ruppertstraße 19</p>
                  <p>80466 München</p>
                </div>
              </section>

              {/* Professional Liability Insurance */}
              <section>
                <h3 className="text-xl font-heading font-semibold text-brand-espresso mb-3">
                  {language === 'de' ? 'Berufshaftpflichtversicherung' : language === 'ru' ? 'Страхование профессиональной ответственности' : 'Страхування професійної відповідальності'}
                </h3>
                <div className="space-y-1">
                  <p>
                    {language === 'de'
                      ? 'Es besteht eine Berufshaftpflichtversicherung.'
                      : language === 'ru'
                      ? 'Имеется страхование профессиональной ответственности.'
                      : 'Наявне страхування професійної відповідальності.'}
                  </p>
                  <p>
                    <span className="font-medium">
                      {language === 'de' ? 'Geltungsbereich:' : language === 'ru' ? 'Сфера действия:' : 'Сфера дії:'}
                    </span>{' '}
                    {language === 'de' ? 'Deutschland' : language === 'ru' ? 'Германия' : 'Німеччина'}
                  </p>
                </div>
              </section>

              {/* Responsible for Content */}
              <section>
                <h3 className="text-xl font-heading font-semibold text-brand-espresso mb-3">
                  {language === 'de'
                    ? 'Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV'
                    : language === 'ru'
                    ? 'Ответственность за контент согласно § 18 Abs. 2 MStV'
                    : 'Відповідальність за контент згідно § 18 Abs. 2 MStV'}
                </h3>
                <p>Nataliia Koziukevych</p>
                <p>Rosenheimerstraße 159</p>
                <p>81671 München</p>
              </section>

              {/* Dispute Resolution */}
              <section>
                <h3 className="text-xl font-heading font-semibold text-brand-espresso mb-3">
                  {language === 'de'
                    ? 'Verbraucherstreitbeilegung/ Universalschlichtungsstelle'
                    : language === 'ru'
                    ? 'Разрешение споров потребителей'
                    : 'Вирішення спорів споживачів'}
                </h3>
                <p className="leading-relaxed">
                  {language === 'de'
                    ? 'Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.'
                    : language === 'ru'
                    ? 'Мы не готовы и не обязаны участвовать в процедурах разрешения споров перед комиссией по урегулированию споров потребителей.'
                    : 'Ми не готові і не зобов\'язані брати участь у процедурах вирішення спорів перед комісією з врегулювання спорів споживачів.'}
                </p>
              </section>

              {/* Liability for Content */}
              <section>
                <h3 className="text-xl font-heading font-semibold text-brand-espresso mb-3">
                  {language === 'de' ? 'Haftung für Inhalte' : language === 'ru' ? 'Ответственность за контент' : 'Відповідальність за контент'}
                </h3>
                <p className="leading-relaxed">
                  {language === 'de'
                    ? 'Als Diensteanbieter sind wir gemäß § 7 Abs.1 DDG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 DDG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.'
                    : language === 'ru'
                    ? 'Как поставщик услуг, мы несем ответственность за собственный контент на этих страницах в соответствии с § 7 абз. 1 DDG согласно общим законам. Однако согласно §§ 8-10 DDG мы, как поставщик услуг, не обязаны контролировать переданную или сохраненную стороннюю информацию или расследовать обстоятельства, указывающие на незаконную деятельность.'
                    : 'Як постачальник послуг, ми несемо відповідальність за власний контент на цих сторінках відповідно до § 7 абз. 1 DDG згідно з загальними законами. Однак згідно §§ 8-10 DDG ми, як постачальник послуг, не зобов\'язані контролювати передану або збережену сторонню інформацію або розслідувати обставини, що вказують на незаконну діяльність.'}
                </p>
              </section>

              {/* Liability for Links */}
              <section>
                <h3 className="text-xl font-heading font-semibold text-brand-espresso mb-3">
                  {language === 'de' ? 'Haftung für Links' : language === 'ru' ? 'Ответственность за ссылки' : 'Відповідальність за посилання'}
                </h3>
                <p className="leading-relaxed">
                  {language === 'de'
                    ? 'Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.'
                    : language === 'ru'
                    ? 'Наше предложение содержит ссылки на внешние сайты третьих лиц, на содержание которых мы не можем влиять. Поэтому мы не можем нести ответственность за этот сторонний контент. За содержание связанных страниц всегда несет ответственность соответствующий поставщик или оператор страниц.'
                    : 'Наша пропозиція містить посилання на зовнішні сайти третіх осіб, на зміст яких ми не можемо впливати. Тому ми не можемо нести відповідальність за цей сторонній контент. За зміст пов\'язаних сторінок завжди несе відповідальність відповідний постачальник або оператор сторінок.'}
                </p>
              </section>

              {/* Copyright */}
              <section>
                <h3 className="text-xl font-heading font-semibold text-brand-espresso mb-3">
                  {language === 'de' ? 'Urheberrecht' : language === 'ru' ? 'Авторское право' : 'Авторське право'}
                </h3>
                <p className="leading-relaxed">
                  {language === 'de'
                    ? 'Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.'
                    : language === 'ru'
                    ? 'Контент и работы, созданные операторами этих страниц, подпадают под действие немецкого закона об авторском праве. Воспроизведение, редактирование, распространение и любое использование за пределами авторского права требуют письменного согласия соответствующего автора или создателя.'
                    : 'Контент і роботи, створені операторами цих сторінок, підпадають під дію німецького закону про авторське право. Відтворення, редагування, розповсюдження та будь-яке використання за межами авторського права потребують письмової згоди відповідного автора або створювача.'}
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
