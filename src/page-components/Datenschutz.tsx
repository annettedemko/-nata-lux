'use client'

import { useLanguage } from '@/contexts/LanguageContext';
import { Shield, Mail, Lock, Eye, FileText, AlertCircle } from 'lucide-react';

const Datenschutz = () => {
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
            <div className="mb-8">
              <div className="flex items-start gap-2 md:gap-3 mb-4">
                <Shield className="w-7 h-7 md:w-10 md:h-10 text-brand-gold flex-shrink-0 mt-1" />
                <h1 className="text-2xl md:text-5xl font-heading font-semibold text-brand-espresso break-words hyphens-auto leading-tight">
                  {language === 'de' ? 'Datenschutzerklärung' : language === 'ru' ? 'Политика конфиденциальности' : 'Політика конфіденційності'}
                </h1>
              </div>
              <p className="text-brand-coffee/70">
                {language === 'de'
                  ? 'Informationen zum Datenschutz gemäß DSGVO'
                  : language === 'ru'
                  ? 'Информация о защите данных в соответствии с GDPR'
                  : 'Інформація про захист даних згідно з GDPR'}
              </p>
            </div>

            {/* Privacy Policy Content */}
            <div className="space-y-8 text-brand-coffee/80">
              {/* Introduction */}
              <section>
                <h2 className="text-2xl font-heading font-semibold text-brand-espresso mb-4">
                  {language === 'de' ? '1. Datenschutz auf einen Blick' : language === 'ru' ? '1. Защита данных с первого взгляда' : '1. Захист даних з першого погляду'}
                </h2>
                <h3 className="text-xl font-semibold text-brand-espresso mb-3">
                  {language === 'de' ? 'Allgemeine Hinweise' : language === 'ru' ? 'Общая информация' : 'Загальна інформація'}
                </h3>
                <p className="leading-relaxed mb-4">
                  {language === 'de'
                    ? 'Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.'
                    : language === 'ru'
                    ? 'Следующая информация дает простой обзор того, что происходит с вашими личными данными, когда вы посещаете этот веб-сайт. Персональные данные - это все данные, с помощью которых вас можно идентифицировать лично.'
                    : 'Наступна інформація дає простий огляд того, що відбувається з вашими особистими даними, коли ви відвідуєте цей веб-сайт. Персональні дані - це всі дані, за допомогою яких вас можна ідентифікувати особисто.'}
                </p>
              </section>

              {/* Data Collection */}
              <section>
                <h2 className="text-2xl font-heading font-semibold text-brand-espresso mb-4 flex items-center gap-2">
                  <FileText className="w-6 h-6 text-brand-gold" />
                  {language === 'de' ? '2. Datenerfassung auf dieser Website' : language === 'ru' ? '2. Сбор данных на этом сайте' : '2. Збір даних на цьому сайті'}
                </h2>
                <h3 className="text-xl font-semibold text-brand-espresso mb-3">
                  {language === 'de'
                    ? 'Wer ist verantwortlich für die Datenerfassung auf dieser Website?'
                    : language === 'ru'
                    ? 'Кто несет ответственность за сбор данных на этом сайте?'
                    : 'Хто несе відповідальність за збір даних на цьому сайті?'}
                </h3>
                <div className="mb-4">
                  <p className="font-medium mb-2">
                    {language === 'de' ? 'Nataliia Koziukevych' : language === 'ru' ? 'Наталия Козюкевич' : 'Наталія Козюкевич'}
                  </p>
                  <p>NataLux</p>
                  <p>Rosenheimerstraße 159</p>
                  <p>81671 München</p>
                  <p>Deutschland</p>
                  <div className="mt-3 flex items-center gap-2">
                    <Mail className="w-4 h-4 text-brand-gold" />
                    <button
                      onClick={handleEmailClick}
                      className="hover:text-brand-gold transition-colors"
                    >
                      natali.lux@web.de
                    </button>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-brand-espresso mb-3 mt-6">
                  {language === 'de' ? 'Wie erfassen wir Ihre Daten?' : language === 'ru' ? 'Как мы собираем ваши данные?' : 'Як ми збираємо ваші дані?'}
                </h3>
                <p className="leading-relaxed mb-4">
                  {language === 'de'
                    ? 'Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z.B. um Daten handeln, die Sie in ein Kontaktformular eingeben.'
                    : language === 'ru'
                    ? 'Ваши данные собираются, с одной стороны, когда вы сообщаете их нам. Это могут быть данные, которые вы вводите в контактную форму.'
                    : 'Ваші дані збираються, з одного боку, коли ви повідомляєте їх нам. Це можуть бути дані, які ви вводите в контактну форму.'}
                </p>
                <p className="leading-relaxed">
                  {language === 'de'
                    ? 'Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z.B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs).'
                    : language === 'ru'
                    ? 'Другие данные собираются автоматически или после вашего согласия при посещении сайта нашими ИТ-системами. Это в основном технические данные (например, интернет-браузер, операционная система или время посещения страницы).'
                    : 'Інші дані збираються автоматично або після вашої згоди при відвідуванні сайту нашими ІТ-системами. Це в основному технічні дані (наприклад, інтернет-браузер, операційна система або час відвідування сторінки).'}
                </p>
              </section>

              {/* Data Usage */}
              <section>
                <h2 className="text-2xl font-heading font-semibold text-brand-espresso mb-4 flex items-center gap-2">
                  <Eye className="w-6 h-6 text-brand-gold" />
                  {language === 'de' ? '3. Wofür nutzen wir Ihre Daten?' : language === 'ru' ? '3. Для чего мы используем ваши данные?' : '3. Для чого ми використовуємо ваші дані?'}
                </h2>
                <p className="leading-relaxed mb-4">
                  {language === 'de'
                    ? 'Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.'
                    : language === 'ru'
                    ? 'Часть данных собирается для обеспечения безошибочной работы сайта. Другие данные могут использоваться для анализа вашего поведения пользователя.'
                    : 'Частина даних збирається для забезпечення безпомилкової роботи сайту. Інші дані можуть використовуватися для аналізу вашої поведінки користувача.'}
                </p>
                <p className="leading-relaxed">
                  {language === 'de'
                    ? 'Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben zur Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert.'
                    : language === 'ru'
                    ? 'Если вы отправляете нам запросы через контактную форму, ваша информация будет сохранена для обработки запроса и на случай дополнительных вопросов.'
                    : 'Якщо ви надсилаєте нам запити через контактну форму, ваша інформація буде збережена для обробки запиту та на випадок додаткових питань.'}
                </p>
              </section>

              {/* User Rights */}
              <section>
                <h2 className="text-2xl font-heading font-semibold text-brand-espresso mb-4 flex items-center gap-2">
                  <AlertCircle className="w-6 h-6 text-brand-gold" />
                  {language === 'de' ? '4. Welche Rechte haben Sie?' : language === 'ru' ? '4. Какие у вас есть права?' : '4. Які у вас є права?'}
                </h2>
                <div className="space-y-3">
                  <p className="leading-relaxed">
                    {language === 'de'
                      ? 'Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen.'
                      : language === 'ru'
                      ? 'Вы имеете право в любое время получить бесплатную информацию о происхождении, получателях и целях ваших сохраненных персональных данных. Вы также имеете право требовать исправления или удаления этих данных.'
                      : 'Ви маєте право в будь-який час отримати безкоштовну інформацію про походження, отримувачів та цілі ваших збережених персональних даних. Ви також маєте право вимагати виправлення або видалення цих даних.'}
                  </p>
                  <div className="bg-brand-gold/10 p-4 rounded-xl">
                    <p className="font-semibold text-brand-espresso mb-2">
                      {language === 'de' ? 'Ihre Rechte im Überblick:' : language === 'ru' ? 'Ваши права в обзоре:' : 'Ваші права в огляді:'}
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      <li>{language === 'de' ? 'Recht auf Auskunft' : language === 'ru' ? 'Право на информацию' : 'Право на інформацію'}</li>
                      <li>{language === 'de' ? 'Recht auf Berichtigung' : language === 'ru' ? 'Право на исправление' : 'Право на виправлення'}</li>
                      <li>{language === 'de' ? 'Recht auf Löschung' : language === 'ru' ? 'Право на удаление' : 'Право на видалення'}</li>
                      <li>
                        {language === 'de'
                          ? 'Recht auf Einschränkung der Verarbeitung'
                          : language === 'ru'
                          ? 'Право на ограничение обработки'
                          : 'Право на обмеження обробки'}
                      </li>
                      <li>
                        {language === 'de' ? 'Recht auf Datenübertragbarkeit' : language === 'ru' ? 'Право на переносимость данных' : 'Право на переносимість даних'}
                      </li>
                      <li>{language === 'de' ? 'Widerspruchsrecht' : language === 'ru' ? 'Право на возражение' : 'Право на заперечення'}</li>
                    </ul>
                  </div>

                  <h3 className="text-xl font-semibold text-brand-espresso mb-3 mt-6">
                    {language === 'de' ? 'Recht auf Widerruf der Einwilligung' : language === 'ru' ? 'Право на отзыв согласия' : 'Право на відкликання згоди'}
                  </h3>
                  <p className="leading-relaxed mb-4">
                    {language === 'de'
                      ? 'Sie haben das Recht, eine bereits erteilte Einwilligung zur Verarbeitung Ihrer personenbezogenen Daten jederzeit zu widerrufen. Der Widerruf berührt nicht die Rechtmäßigkeit der bis zum Widerruf erfolgten Verarbeitung.'
                      : language === 'ru'
                      ? 'Вы имеете право в любое время отозвать уже данное согласие на обработку ваших персональных данных. Отзыв не влияет на законность обработки, проведенной до отзыва.'
                      : 'Ви маєте право в будь-який час відкликати вже надану згоду на обробку ваших персональних даних. Відкликання не впливає на законність обробки, проведеної до відкликання.'}
                  </p>

                  <h3 className="text-xl font-semibold text-brand-espresso mb-3 mt-6">
                    {language === 'de' ? 'Beschwerderecht bei der Aufsichtsbehörde' : language === 'ru' ? 'Право на жалобу в надзорный орган' : 'Право на скаргу до наглядового органу'}
                  </h3>
                  <p className="leading-relaxed">
                    {language === 'de'
                      ? 'Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde zu beschweren, insbesondere in dem Mitgliedstaat Ihres gewöhnlichen Aufenthaltsortes, Ihres Arbeitsplatzes oder des Ortes des mutmaßlichen Verstoßes.'
                      : language === 'ru'
                      ? 'Вы имеете право подать жалобу в надзорный орган по защите данных, особенно в государстве-члене вашего обычного места жительства, вашего места работы или места предполагаемого нарушения.'
                      : 'Ви маєте право подати скаргу до наглядового органу із захисту даних, особливо в державі-члені вашого звичайного місця проживання, вашого місця роботи або місця передбачуваного порушення.'}
                  </p>
                </div>
              </section>

              {/* Server Data */}
              <section>
                <h2 className="text-2xl font-heading font-semibold text-brand-espresso mb-4 flex items-center gap-2">
                  <Lock className="w-6 h-6 text-brand-gold" />
                  {language === 'de' ? '5. Server-Log-Dateien' : language === 'ru' ? '5. Файлы журналов сервера' : '5. Файли журналів сервера'}
                </h2>
                <p className="leading-relaxed mb-4">
                  {language === 'de'
                    ? 'Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind:'
                    : language === 'ru'
                    ? 'Провайдер страниц автоматически собирает и сохраняет информацию в так называемых файлах журналов сервера, которые ваш браузер автоматически передает нам. Это:'
                    : 'Провайдер сторінок автоматично збирає та зберігає інформацію в так званих файлах журналів сервера, які ваш браузер автоматично передає нам. Це:'}
                </p>
                <ul className="list-disc list-inside space-y-2 mb-4">
                  <li>{language === 'de' ? 'Browsertyp und Browserversion' : language === 'ru' ? 'Тип и версия браузера' : 'Тип та версія браузера'}</li>
                  <li>{language === 'de' ? 'Verwendetes Betriebssystem' : language === 'ru' ? 'Используемая операционная система' : 'Використовувана операційна система'}</li>
                  <li>{language === 'de' ? 'Referrer URL' : language === 'ru' ? 'Реферальный URL' : 'Реферальний URL'}</li>
                  <li>{language === 'de' ? 'Hostname des zugreifenden Rechners' : language === 'ru' ? 'Имя хоста компьютера' : 'Ім\'я хоста комп\'ютера'}</li>
                  <li>{language === 'de' ? 'Uhrzeit der Serveranfrage' : language === 'ru' ? 'Время запроса к серверу' : 'Час запиту до сервера'}</li>
                  <li>{language === 'de' ? 'IP-Adresse' : language === 'ru' ? 'IP-адрес' : 'IP-адреса'}</li>
                </ul>
                <p className="leading-relaxed mb-4">
                  {language === 'de'
                    ? 'Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen.'
                    : language === 'ru'
                    ? 'Объединение этих данных с другими источниками данных не производится.'
                    : 'Об\'єднання цих даних з іншими джерелами даних не проводиться.'}
                </p>
                <p className="leading-relaxed">
                  {language === 'de'
                    ? 'Die Verarbeitung erfolgt zur Gewährleistung der Sicherheit und Stabilität der Website. Die Erfassung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO.'
                    : language === 'ru'
                    ? 'Обработка осуществляется для обеспечения безопасности и стабильности сайта. Сбор этих данных осуществляется на основании Art. 6 Abs. 1 lit. f GDPR.'
                    : 'Обробка здійснюється для забезпечення безпеки та стабільності сайту. Збір цих даних здійснюється на підставі Art. 6 Abs. 1 lit. f GDPR.'}
                </p>
              </section>

              {/* Cookies */}
              <section>
                <h2 className="text-2xl font-heading font-semibold text-brand-espresso mb-4 flex items-center gap-2">
                  <Lock className="w-6 h-6 text-brand-gold" />
                  {language === 'de' ? '6. Cookies' : language === 'ru' ? '6. Файлы Cookie' : '6. Файли Cookie'}
                </h2>

                <h3 className="text-xl font-semibold text-brand-espresso mb-3 mt-4">
                  {language === 'de' ? 'Was sind Cookies?' : language === 'ru' ? 'Что такое Cookie?' : 'Що таке Cookie?'}
                </h3>
                <p className="leading-relaxed mb-4">
                  {language === 'de'
                    ? 'Cookies sind kleine Textdateien, die auf Ihrem Endgerät gespeichert werden und die Ihr Browser speichert. Sie dienen dazu, unser Angebot nutzerfreundlicher, effektiver und sicherer zu machen.'
                    : language === 'ru'
                    ? 'Cookie — это небольшие текстовые файлы, которые сохраняются на вашем устройстве и которые хранит ваш браузер. Они служат для того, чтобы сделать наше предложение более удобным, эффективным и безопасным.'
                    : 'Cookie — це невеликі текстові файли, які зберігаються на вашому пристрої та які зберігає ваш браузер. Вони служать для того, щоб зробити нашу пропозицію більш зручною, ефективною та безпечною.'}
                </p>

                <h3 className="text-xl font-semibold text-brand-espresso mb-3 mt-6">
                  {language === 'de' ? 'Welche Cookies verwenden wir?' : language === 'ru' ? 'Какие Cookie мы используем?' : 'Які Cookie ми використовуємо?'}
                </h3>

                <div className="bg-brand-gold/10 p-5 rounded-xl mb-4">
                  <p className="font-semibold text-brand-espresso mb-3">
                    {language === 'de' ? 'Technisch notwendige Cookies:' : language === 'ru' ? 'Технически необходимые Cookie:' : 'Технічно необхідні Cookie:'}
                  </p>
                  <p className="text-sm leading-relaxed mb-3">
                    {language === 'de'
                      ? 'Diese Cookies sind erforderlich, damit die Website ordnungsgemäß funktioniert. Sie ermöglichen grundlegende Funktionen wie die Seitennavigation und den Zugriff auf sichere Bereiche der Website.'
                      : language === 'ru'
                      ? 'Эти Cookie необходимы для правильной работы сайта. Они обеспечивают базовые функции, такие как навигация по страницам и доступ к защищенным разделам сайта.'
                      : 'Ці Cookie необхідні для правильної роботи сайту. Вони забезпечують базові функції, такі як навігація по сторінках та доступ до захищених розділів сайту.'}
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-sm ml-4">
                    <li>
                      {language === 'de' ? 'Speicherung der Cookie-Einwilligung' : language === 'ru' ? 'Сохранение согласия на Cookie' : 'Збереження згоди на Cookie'}
                    </li>
                    <li>
                      {language === 'de' ? 'Spracheinstellungen' : language === 'ru' ? 'Языковые настройки' : 'Мовні налаштування'}
                    </li>
                    <li>
                      {language === 'de' ? 'Session-Verwaltung' : language === 'ru' ? 'Управление сессиями' : 'Управління сесіями'}
                    </li>
                  </ul>
                </div>

                <div className="bg-blue-50/50 border-l-4 border-blue-500 p-4 rounded mb-4">
                  <p className="font-semibold text-blue-900 mb-2">
                    {language === 'de' ? 'Analyse-Cookies:' : language === 'ru' ? 'Аналитические Cookie:' : 'Аналітичні Cookie:'}
                  </p>
                  <p className="text-sm text-blue-800 mb-3">
                    {language === 'de'
                      ? 'Mit Ihrer Einwilligung verwenden wir folgende Analyse-Tools:'
                      : language === 'ru'
                      ? 'С вашего согласия мы используем следующие инструменты анализа:'
                      : 'З вашої згоди ми використовуємо наступні інструменти аналізу:'}
                  </p>
                  <ul className="list-disc list-inside space-y-3 text-sm text-blue-800 ml-4">
                    <li>
                      <span className="font-medium">Google Analytics:</span>{' '}
                      {language === 'de'
                        ? 'Zur Analyse des Nutzerverhaltens und Verbesserung unserer Website. Die IP-Anonymisierung ist auf dieser Website aktiviert. Es kann nicht ausgeschlossen werden, dass Daten an Server von Google in den USA übertragen werden. Google ist nach dem EU-U.S. Data Privacy Framework zertifiziert.'
                        : language === 'ru'
                        ? 'Для анализа поведения пользователей и улучшения нашего сайта. На этом сайте активирована анонимизация IP. Не исключается передача данных на серверы Google в США. Google сертифицирован в соответствии с EU-U.S. Data Privacy Framework.'
                        : 'Для аналізу поведінки користувачів та покращення нашого сайту. На цьому сайті активовано анонімізацію IP. Не виключається передача даних на сервери Google в США. Google сертифіковано відповідно до EU-U.S. Data Privacy Framework.'}
                    </li>
                    <li>
                      <span className="font-medium">Ahrefs:</span>{' '}
                      {language === 'de'
                        ? 'Zur Analyse der Website-Performance und SEO-Optimierung. Es kann hierbei zu einer Übertragung von Daten in Drittstaaten kommen.'
                        : language === 'ru'
                        ? 'Для анализа производительности сайта и SEO-оптимизации. При этом может происходить передача данных в третьи страны.'
                        : 'Для аналізу продуктивності сайту та SEO-оптимізації. При цьому може відбуватися передача даних до третіх країн.'}
                    </li>
                  </ul>
                </div>

                <h3 className="text-xl font-semibold text-brand-espresso mb-3 mt-6">
                  {language === 'de' ? 'Rechtsgrundlage' : language === 'ru' ? 'Правовая основа' : 'Правова основа'}
                </h3>
                <p className="leading-relaxed mb-4">
                  {language === 'de'
                    ? 'Technisch notwendige Cookies werden auf Grundlage von Art. 6 Abs. 1 lit. c DSGVO gespeichert. Analyse-Cookies werden nur mit Ihrer ausdrücklichen Einwilligung gemäß Art. 6 Abs. 1 lit. a DSGVO gesetzt.'
                    : language === 'ru'
                    ? 'Технически необходимые Cookie сохраняются на основании Art. 6 Abs. 1 lit. c GDPR. Аналитические Cookie устанавливаются только с вашего явного согласия в соответствии с Art. 6 Abs. 1 lit. a GDPR.'
                    : 'Технічно необхідні Cookie зберігаються на підставі Art. 6 Abs. 1 lit. c GDPR. Аналітичні Cookie встановлюються тільки з вашої явної згоди відповідно до Art. 6 Abs. 1 lit. a GDPR.'}
                </p>
                <p className="leading-relaxed mb-4">
                  {language === 'de'
                    ? 'Nicht notwendige Cookies und Analyse-Tools werden erst nach Ihrer aktiven Einwilligung über das Cookie-Banner gesetzt.'
                    : language === 'ru'
                    ? 'Необязательные файлы Cookie и инструменты анализа устанавливаются только после вашего активного согласия через баннер Cookie.'
                    : 'Необов\'язкові файли Cookie та інструменти аналізу встановлюються тільки після вашої активної згоди через банер Cookie.'}
                </p>

                <h3 className="text-xl font-semibold text-brand-espresso mb-3 mt-6">
                  {language === 'de' ? 'Cookies verwalten' : language === 'ru' ? 'Управление Cookie' : 'Управління Cookie'}
                </h3>
                <p className="leading-relaxed mb-3">
                  {language === 'de'
                    ? 'Sie können Ihre Cookie-Einstellungen jederzeit ändern:'
                    : language === 'ru'
                    ? 'Вы можете в любое время изменить настройки Cookie:'
                    : 'Ви можете в будь-який час змінити налаштування Cookie:'}
                </p>
                <ul className="list-disc list-inside space-y-2 mb-4 ml-4">
                  <li>
                    {language === 'de'
                      ? 'Über unseren Cookie-Banner auf der Website'
                      : language === 'ru'
                      ? 'Через наш баннер Cookie на сайте'
                      : 'Через наш банер Cookie на сайті'}
                  </li>
                  <li>
                    {language === 'de'
                      ? 'In den Einstellungen Ihres Browsers (alle Cookies löschen/blockieren)'
                      : language === 'ru'
                      ? 'В настройках вашего браузера (удалить/заблокировать все Cookie)'
                      : 'У налаштуваннях вашого браузера (видалити/заблокувати всі Cookie)'}
                  </li>
                </ul>
                <p className="text-sm text-brand-coffee/60">
                  {language === 'de'
                    ? 'Bitte beachten Sie: Das Deaktivieren von Cookies kann die Funktionalität unserer Website einschränken.'
                    : language === 'ru'
                    ? 'Обратите внимание: отключение Cookie может ограничить функциональность нашего сайта.'
                    : 'Зверніть увагу: відключення Cookie може обмежити функціональність нашого сайту.'}
                </p>

                <h3 className="text-xl font-semibold text-brand-espresso mb-3 mt-6">
                  {language === 'de' ? 'Speicherdauer' : language === 'ru' ? 'Срок хранения' : 'Термін зберігання'}
                </h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>
                    <span className="font-medium">
                      {language === 'de' ? 'Session-Cookies:' : language === 'ru' ? 'Session-Cookie:' : 'Session-Cookie:'}
                    </span>{' '}
                    {language === 'de'
                      ? 'werden nach Schließen des Browsers gelöscht'
                      : language === 'ru'
                      ? 'удаляются после закрытия браузера'
                      : 'видаляються після закриття браузера'}
                  </li>
                  <li>
                    <span className="font-medium">
                      {language === 'de' ? 'Permanente Cookies:' : language === 'ru' ? 'Постоянные Cookie:' : 'Постійні Cookie:'}
                    </span>{' '}
                    {language === 'de'
                      ? 'werden nach maximal 13 Monaten automatisch gelöscht'
                      : language === 'ru'
                      ? 'автоматически удаляются максимум через 13 месяцев'
                      : 'автоматично видаляються максимум через 13 місяців'}
                  </li>
                </ul>
              </section>

              {/* Right to Object to Tracking */}
              <section>
                <h2 className="text-2xl font-heading font-semibold text-brand-espresso mb-4 flex items-center gap-2">
                  <AlertCircle className="w-6 h-6 text-brand-gold" />
                  {language === 'de' ? '6a. Widerspruch gegen Tracking und Analyse' : language === 'ru' ? '6a. Возражение против отслеживания и анализа' : '6a. Заперечення проти відстеження та аналізу'}
                </h2>
                <div className="bg-blue-50/50 border-l-4 border-blue-500 p-5 rounded-xl">
                  <p className="leading-relaxed text-blue-900">
                    {language === 'de'
                      ? 'Sie können der Verarbeitung Ihrer Daten für Analyse- oder Tracking-Zwecke jederzeit widersprechen, indem Sie Ihre Cookie-Einstellungen entsprechend anpassen. Über unseren Cookie-Banner auf der Website können Sie Ihre Einwilligung verwalten und jederzeit ändern.'
                      : language === 'ru'
                      ? 'Вы можете в любое время возразить против обработки ваших данных для целей анализа или отслеживания, соответствующим образом настроив параметры Cookie. Через наш баннер Cookie на сайте вы можете управлять своим согласием и изменять его в любое время.'
                      : 'Ви можете в будь-який час заперечити проти обробки ваших даних для цілей аналізу або відстеження, відповідним чином налаштувавши параметри Cookie. Через наш банер Cookie на сайті ви можете керувати своєю згодою та змінювати її в будь-який час.'}
                  </p>
                </div>
              </section>

              {/* Contact Form */}
              <section>
                <h2 className="text-2xl font-heading font-semibold text-brand-espresso mb-4">
                  {language === 'de' ? '7. Kontaktformular' : language === 'ru' ? '7. Контактная форма' : '7. Контактна форма'}
                </h2>
                <p className="leading-relaxed mb-4">
                  {language === 'de'
                    ? 'Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert.'
                    : language === 'ru'
                    ? 'Если вы отправляете нам запросы через контактную форму, ваша информация из формы запроса, включая указанные вами контактные данные, будет сохранена у нас для обработки запроса и на случай дополнительных вопросов.'
                    : 'Якщо ви надсилаєте нам запити через контактну форму, ваша інформація з форми запиту, включаючи вказані вами контактні дані, буде збережена у нас для обробки запиту та на випадок додаткових питань.'}
                </p>
                <p className="leading-relaxed">
                  {language === 'de'
                    ? 'Diese Daten geben wir nicht ohne Ihre Einwilligung weiter. Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO).'
                    : language === 'ru'
                    ? 'Мы не передаем эти данные без вашего согласия. Обработка этих данных осуществляется на основании Art. 6 Abs. 1 lit. b GDPR, если ваш запрос связан с выполнением контракта или необходим для выполнения предконтрактных мер. Во всех остальных случаях обработка основывается на вашем согласии (Art. 6 Abs. 1 lit. a GDPR).'
                    : 'Ми не передаємо ці дані без вашої згоди. Обробка цих даних здійснюється на підставі Art. 6 Abs. 1 lit. b GDPR, якщо ваш запит пов\'язаний з виконанням контракту або необхідний для виконання передконтрактних заходів. У всіх інших випадках обробка базується на вашій згоді (Art. 6 Abs. 1 lit. a GDPR).'}
                </p>
              </section>

              {/* Online Booking - DIKIDI */}
              <section>
                <h2 className="text-2xl font-heading font-semibold text-brand-espresso mb-4">
                  {language === 'de' ? '8. Online-Terminbuchung über DIKIDI' : language === 'ru' ? '8. Онлайн-запись через DIKIDI' : '8. Онлайн-запис через DIKIDI'}
                </h2>
                <p className="leading-relaxed mb-4">
                  {language === 'de'
                    ? 'Die Online-Terminbuchung erfolgt teilweise über den externen Dienst DIKIDI. Bei der Nutzung des Buchungssystems werden personenbezogene Daten wie Name, Telefonnummer, E-Mail-Adresse sowie Terminwünsche verarbeitet.'
                    : language === 'ru'
                    ? 'Онлайн-запись осуществляется частично через внешний сервис DIKIDI. При использовании системы бронирования обрабатываются персональные данные, такие как имя, номер телефона, адрес электронной почты и желаемое время записи.'
                    : 'Онлайн-запис здійснюється частково через зовнішній сервіс DIKIDI. При використанні системи бронювання обробляються персональні дані, такі як ім\'я, номер телефону, адреса електронної пошти та бажаний час запису.'}
                </p>
                <p className="leading-relaxed mb-4">
                  {language === 'de'
                    ? 'Die Verarbeitung der Daten erfolgt zum Zweck der Terminverwaltung und -organisation auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung bzw. vorvertragliche Maßnahmen).'
                    : language === 'ru'
                    ? 'Обработка данных осуществляется с целью управления и организации записей на основании Art. 6 Abs. 1 lit. b DSGVO (выполнение договора или предконтрактные меры).'
                    : 'Обробка даних здійснюється з метою управління та організації записів на підставі Art. 6 Abs. 1 lit. b DSGVO (виконання договору або передконтрактні заходи).'}
                </p>
                <p className="leading-relaxed">
                  {language === 'de'
                    ? 'Die Datenverarbeitung im Rahmen der Online-Terminbuchung erfolgt in der Verantwortung des jeweiligen Anbieters. Es gelten die Datenschutzbestimmungen von DIKIDI: '
                    : language === 'ru'
                    ? 'Обработка данных в рамках онлайн-записи осуществляется под ответственностью соответствующего поставщика. Применяются положения о защите данных DIKIDI: '
                    : 'Обробка даних в рамках онлайн-запису здійснюється під відповідальністю відповідного постачальника. Застосовуються положення про захист даних DIKIDI: '}
                  <a
                    href="https://support.dikidi.net/en/knowledge-bases/6/articles/648-privacy-policy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-gold hover:underline break-all"
                  >
                    https://support.dikidi.net/en/knowledge-bases/6/articles/648-privacy-policy
                  </a>
                </p>
              </section>

              {/* Email Contact */}
              <section>
                <h2 className="text-2xl font-heading font-semibold text-brand-espresso mb-4">
                  {language === 'de' ? '9. Anfrage per E-Mail oder Telefon' : language === 'ru' ? '9. Запрос по электронной почте или телефону' : '9. Запит електронною поштою або телефоном'}
                </h2>
                <p className="leading-relaxed mb-4">
                  {language === 'de'
                    ? 'Wenn Sie uns per E-Mail oder Telefon kontaktieren, wird Ihre Anfrage inklusive aller daraus hervorgehenden personenbezogenen Daten (Name, Anfrage) zum Zwecke der Bearbeitung Ihres Anliegens bei uns gespeichert und verarbeitet. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.'
                    : language === 'ru'
                    ? 'Если вы свяжетесь с нами по электронной почте или телефону, ваш запрос, включая все полученные из него персональные данные (имя, запрос), будет сохранен и обработан нами для обработки вашего запроса. Мы не передаем эти данные без вашего согласия.'
                    : 'Якщо ви зв\'яжетесь з нами електронною поштою або телефоном, ваш запит, включаючи всі отримані з нього персональні дані (ім\'я, запит), буде збережений та оброблений нами для обробки вашого запиту. Ми не передаємо ці дані без вашої згоди.'}
                </p>
                <p className="leading-relaxed">
                  {language === 'de'
                    ? 'Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO (Bearbeitung Ihrer Anfrage) oder Art. 6 Abs. 1 lit. a DSGVO (Einwilligung).'
                    : language === 'ru'
                    ? 'Обработка этих данных осуществляется на основании Art. 6 Abs. 1 lit. b GDPR (обработка вашего запроса) или Art. 6 Abs. 1 lit. a GDPR (согласие).'
                    : 'Обробка цих даних здійснюється на підставі Art. 6 Abs. 1 lit. b GDPR (обробка вашого запиту) або Art. 6 Abs. 1 lit. a GDPR (згода).'}
                </p>
              </section>

              {/* SSL Encryption */}
              <section>
                <h2 className="text-2xl font-heading font-semibold text-brand-espresso mb-4">
                  {language === 'de' ? '10. SSL- bzw. TLS-Verschlüsselung' : language === 'ru' ? '10. SSL/TLS-шифрование' : '10. SSL/TLS-шифрування'}
                </h2>
                <p className="leading-relaxed">
                  {language === 'de'
                    ? 'Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von "http://" auf "https://" wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.'
                    : language === 'ru'
                    ? 'Этот сайт использует SSL/TLS-шифрование по соображениям безопасности и для защиты передачи конфиденциального контента. Зашифрованное соединение можно узнать по тому, что адресная строка браузера меняется с "http://" на "https://" и по символу замка в строке браузера.'
                    : 'Цей сайт використовує SSL/TLS-шифрування з міркувань безпеки та для захисту передачі конфіденційного контенту. Зашифроване з\'єднання можна розпізнати за тим, що адресний рядок браузера змінюється з "http://" на "https://" та за символом замка в рядку браузера.'}
                </p>
              </section>

              {/* Data Deletion */}
              <section>
                <h2 className="text-2xl font-heading font-semibold text-brand-espresso mb-4">
                  {language === 'de' ? '11. Speicherdauer' : language === 'ru' ? '11. Срок хранения' : '11. Термін зберігання'}
                </h2>
                <p className="leading-relaxed mb-4">
                  {language === 'de'
                    ? 'Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt wurde, verbleiben Ihre personenbezogenen Daten bei uns, bis der Zweck für die Datenverarbeitung entfällt. Wenn Sie ein berechtigtes Löschersuchen geltend machen oder eine Einwilligung zur Datenverarbeitung widerrufen, werden Ihre Daten gelöscht, sofern wir keine anderen rechtlich zulässigen Gründe für die Speicherung Ihrer personenbezogenen Daten haben.'
                    : language === 'ru'
                    ? 'Если в этой политике конфиденциальности не указан более конкретный срок хранения, ваши персональные данные остаются у нас до тех пор, пока не отпадет цель обработки данных. Если вы подадите обоснованный запрос на удаление или отзовете согласие на обработку данных, ваши данные будут удалены, если у нас нет других законных оснований для хранения ваших персональных данных.'
                    : 'Якщо в цій політиці конфіденційності не вказано більш конкретний термін зберігання, ваші персональні дані залишаються у нас до тих пір, поки не відпаде мета обробки даних. Якщо ви подасте обґрунтований запит на видалення або відкличете згоду на обробку даних, ваші дані будуть видалені, якщо у нас немає інших законних підстав для зберігання ваших персональних даних.'}
                </p>
                <div className="bg-brand-gold/10 p-5 rounded-xl">
                  <p className="font-semibold text-brand-espresso mb-3">
                    {language === 'de' ? 'Konkrete Speicherfristen:' : language === 'ru' ? 'Конкретные сроки хранения:' : 'Конкретні терміни зберігання:'}
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-sm">
                    <li>
                      <span className="font-medium">
                        {language === 'de' ? 'Kontaktanfragen (E-Mail, Telefon):' : language === 'ru' ? 'Контактные запросы (E-Mail, телефон):' : 'Контактні запити (E-Mail, телефон):'}
                      </span>{' '}
                      {language === 'de' ? '6–12 Monate nach Bearbeitung der Anfrage' : language === 'ru' ? '6–12 месяцев после обработки запроса' : '6–12 місяців після обробки запиту'}
                    </li>
                    <li>
                      <span className="font-medium">
                        {language === 'de' ? 'DIKIDI Buchungsdaten:' : language === 'ru' ? 'Данные бронирования DIKIDI:' : 'Дані бронювання DIKIDI:'}
                      </span>{' '}
                      {language === 'de'
                        ? 'gemäß DIKIDI Datenschutzerklärung'
                        : language === 'ru'
                        ? 'согласно политике конфиденциальности DIKIDI'
                        : 'згідно з політикою конфіденційності DIKIDI'}
                    </li>
                  </ul>
                </div>
              </section>

              {/* Contact for Questions */}
              <section className="bg-brand-gold/5 p-6 rounded-2xl">
                <h2 className="text-2xl font-heading font-semibold text-brand-espresso mb-4">
                  {language === 'de' ? '12. Fragen zum Datenschutz?' : language === 'ru' ? '12. Вопросы о защите данных?' : '12. Питання про захист даних?'}
                </h2>
                <p className="leading-relaxed mb-4">
                  {language === 'de'
                    ? 'Wenn Sie Fragen zum Datenschutz haben, schreiben Sie uns bitte eine E-Mail oder wenden Sie sich direkt an die für den Datenschutz verantwortliche Person in unserer Organisation:'
                    : language === 'ru'
                    ? 'Если у вас есть вопросы о защите данных, пожалуйста, напишите нам по электронной почте или свяжитесь напрямую с ответственным за защиту данных в нашей организации:'
                    : 'Якщо у вас є питання про захист даних, будь ласка, напишіть нам електронною поштою або зв\'яжіться безпосередньо з відповідальним за захист даних в нашій організації:'}
                </p>
                <div className="space-y-2">
                  <p className="font-medium">
                    {language === 'de' ? 'Nataliia Koziukevych' : language === 'ru' ? 'Наталия Козюкевич' : 'Наталія Козюкевич'}
                  </p>
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-brand-gold" />
                    <button
                      onClick={handleEmailClick}
                      className="hover:text-brand-gold transition-colors"
                    >
                      natali.lux@web.de
                    </button>
                  </div>
                </div>
              </section>

              {/* Last Updated */}
              <section className="text-sm text-brand-coffee/60 pt-4 border-t border-brand-gold/10">
                <p>
                  {language === 'de' ? 'Stand: Dezember 2024' : language === 'ru' ? 'Состояние: декабрь 2024 года' : 'Стан: грудень 2024 року'}
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Datenschutz;
