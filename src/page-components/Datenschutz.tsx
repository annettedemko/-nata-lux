'use client'

import { useLanguage } from '@/contexts/LanguageContext';
import { Shield, Mail, Lock, Eye, FileText, AlertCircle } from 'lucide-react';

const Datenschutz = () => {
  const { language } = useLanguage();
  const isGerman = language === 'de';

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
                  {language === 'de' ? 'Datenschutzerklärung' : language === 'ru' ? 'Политика конфиденциальности' : 'Политика конфіденційності'}
                </h1>
              </div>
              <p className="text-brand-coffee/70">
                {isGerman
                  ? 'Informationen zum Datenschutz gemäß DSGVO'
                  : 'Информация о защите данных в соответствии с GDPR'}
              </p>
            </div>

            {/* Privacy Policy Content */}
            <div className="space-y-8 text-brand-coffee/80">
              {/* Introduction */}
              <section>
                <h2 className="text-2xl font-heading font-semibold text-brand-espresso mb-4">
                  {language === 'de' ? '1. Datenschutz auf einen Blick' : language === 'ru' ? '1. Защита данных с первого взгляда' : '1. Защита данных с первого взгляда'}
                </h2>
                <h3 className="text-xl font-semibold text-brand-espresso mb-3">
                  {language === 'de' ? 'Allgemeine Hinweise' : language === 'ru' ? 'Общая информация' : 'Общая информация'}
                </h3>
                <p className="leading-relaxed mb-4">
                  {isGerman
                    ? 'Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.'
                    : 'Следующая информация дает простой обзор того, что происходит с вашими личными данными, когда вы посещаете этот веб-сайт. Персональные данные - это все данные, с помощью которых вас можно идентифицировать лично.'}
                </p>
              </section>

              {/* Data Collection */}
              <section>
                <h2 className="text-2xl font-heading font-semibold text-brand-espresso mb-4 flex items-center gap-2">
                  <FileText className="w-6 h-6 text-brand-gold" />
                  {language === 'de' ? '2. Datenerfassung auf dieser Website' : language === 'ru' ? '2. Сбор данных на этом сайте' : '2. Сбор данных на этом сайте'}
                </h2>
                <h3 className="text-xl font-semibold text-brand-espresso mb-3">
                  {isGerman
                    ? 'Wer ist verantwortlich für die Datenerfassung auf dieser Website?'
                    : 'Кто несет ответственность за сбор данных на этом сайте?'}
                </h3>
                <div className="mb-4">
                  <p className="font-medium mb-2">
                    {language === 'de' ? 'Nataliia Koziukevych' : language === 'ru' ? 'Наталия Козюкевич' : 'Наталия Козюкевич'}
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
                  {language === 'de' ? 'Wie erfassen wir Ihre Daten?' : language === 'ru' ? 'Как мы собираем ваши данные?' : 'Как мы собираем ваши данные?'}
                </h3>
                <p className="leading-relaxed mb-4">
                  {isGerman
                    ? 'Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z.B. um Daten handeln, die Sie in ein Kontaktformular eingeben.'
                    : 'Ваши данные собираются, с одной стороны, когда вы сообщаете их нам. Это могут быть данные, которые вы вводите в контактную форму.'}
                </p>
                <p className="leading-relaxed">
                  {isGerman
                    ? 'Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z.B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs).'
                    : 'Другие данные собираются автоматически или после вашего согласия при посещении сайта нашими ИТ-системами. Это в основном технические данные (например, интернет-браузер, операционная система или время посещения страницы).'}
                </p>
              </section>

              {/* Data Usage */}
              <section>
                <h2 className="text-2xl font-heading font-semibold text-brand-espresso mb-4 flex items-center gap-2">
                  <Eye className="w-6 h-6 text-brand-gold" />
                  {language === 'de' ? '3. Wofür nutzen wir Ihre Daten?' : language === 'ru' ? '3. Для чего мы используем ваши данные?' : '3. Для чего мы используем ваши данные?'}
                </h2>
                <p className="leading-relaxed mb-4">
                  {isGerman
                    ? 'Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.'
                    : 'Часть данных собирается для обеспечения безошибочной работы сайта. Другие данные могут использоваться для анализа вашего поведения пользователя.'}
                </p>
                <p className="leading-relaxed">
                  {isGerman
                    ? 'Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben zur Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert.'
                    : 'Если вы отправляете нам запросы через контактную форму, ваша информация будет сохранена для обработки запроса и на случай дополнительных вопросов.'}
                </p>
              </section>

              {/* User Rights */}
              <section>
                <h2 className="text-2xl font-heading font-semibold text-brand-espresso mb-4 flex items-center gap-2">
                  <AlertCircle className="w-6 h-6 text-brand-gold" />
                  {language === 'de' ? '4. Welche Rechte haben Sie?' : language === 'ru' ? '4. Какие у вас есть права?' : '4. Какие у вас есть права?'}
                </h2>
                <div className="space-y-3">
                  <p className="leading-relaxed">
                    {isGerman
                      ? 'Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen.'
                      : 'Вы имеете право в любое время получить бесплатную информацию о происхождении, получателях и целях ваших сохраненных персональных данных. Вы также имеете право требовать исправления или удаления этих данных.'}
                  </p>
                  <div className="bg-brand-gold/10 p-4 rounded-xl">
                    <p className="font-semibold text-brand-espresso mb-2">
                      {language === 'de' ? 'Ihre Rechte im Überblick:' : language === 'ru' ? 'Ваши права в обзоре:' : 'Ваши права в обзоре:'}
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      <li>{language === 'de' ? 'Recht auf Auskunft' : language === 'ru' ? 'Право на информацию' : 'Право на информацию'}</li>
                      <li>{language === 'de' ? 'Recht auf Berichtigung' : language === 'ru' ? 'Право на исправление' : 'Право на исправление'}</li>
                      <li>{language === 'de' ? 'Recht auf Löschung' : language === 'ru' ? 'Право на удаление' : 'Право на удаление'}</li>
                      <li>
                        {isGerman
                          ? 'Recht auf Einschränkung der Verarbeitung'
                          : 'Право на ограничение обработки'}
                      </li>
                      <li>
                        {language === 'de' ? 'Recht auf Datenübertragbarkeit' : language === 'ru' ? 'Право на переносимость данных' : 'Право на переносимость данных'}
                      </li>
                      <li>{language === 'de' ? 'Widerspruchsrecht' : language === 'ru' ? 'Право на возражение' : 'Право на возражение'}</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Server Data */}
              <section>
                <h2 className="text-2xl font-heading font-semibold text-brand-espresso mb-4 flex items-center gap-2">
                  <Lock className="w-6 h-6 text-brand-gold" />
                  {language === 'de' ? '5. Server-Log-Dateien' : language === 'ru' ? '5. Файлы журналов сервера' : '5. Файлы журналов сервера'}
                </h2>
                <p className="leading-relaxed mb-4">
                  {isGerman
                    ? 'Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind:'
                    : 'Провайдер страниц автоматически собирает и сохраняет информацию в так называемых файлах журналов сервера, которые ваш браузер автоматически передает нам. Это:'}
                </p>
                <ul className="list-disc list-inside space-y-2 mb-4">
                  <li>{language === 'de' ? 'Browsertyp und Browserversion' : language === 'ru' ? 'Тип и версия браузера' : 'Тип и версия браузера'}</li>
                  <li>{language === 'de' ? 'Verwendetes Betriebssystem' : language === 'ru' ? 'Используемая операционная система' : 'Используемая операционная система'}</li>
                  <li>{language === 'de' ? 'Referrer URL' : language === 'ru' ? 'Реферальный URL' : 'Реферальный URL'}</li>
                  <li>{language === 'de' ? 'Hostname des zugreifenden Rechners' : language === 'ru' ? 'Имя хоста компьютера' : 'Имя хоста компьютера'}</li>
                  <li>{language === 'de' ? 'Uhrzeit der Serveranfrage' : language === 'ru' ? 'Время запроса к серверу' : 'Время запроса к серверу'}</li>
                  <li>{language === 'de' ? 'IP-Adresse' : language === 'ru' ? 'IP-адрес' : 'IP-адрес'}</li>
                </ul>
                <p className="leading-relaxed">
                  {isGerman
                    ? 'Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen. Die Erfassung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO.'
                    : 'Объединение этих данных с другими источниками данных не производится. Сбор этих данных осуществляется на основании Art. 6 Abs. 1 lit. f GDPR.'}
                </p>
              </section>

              {/* Cookies */}
              <section>
                <h2 className="text-2xl font-heading font-semibold text-brand-espresso mb-4 flex items-center gap-2">
                  <Lock className="w-6 h-6 text-brand-gold" />
                  {language === 'de' ? '6. Cookies' : language === 'ru' ? '6. Файлы Cookie' : '6. Файлы Cookie'}
                </h2>

                <h3 className="text-xl font-semibold text-brand-espresso mb-3 mt-4">
                  {language === 'de' ? 'Was sind Cookies?' : language === 'ru' ? 'Что такое Cookie?' : 'Что такое Cookie?'}
                </h3>
                <p className="leading-relaxed mb-4">
                  {isGerman
                    ? 'Cookies sind kleine Textdateien, die auf Ihrem Endgerät gespeichert werden und die Ihr Browser speichert. Sie dienen dazu, unser Angebot nutzerfreundlicher, effektiver und sicherer zu machen.'
                    : 'Cookie — это небольшие текстовые файлы, которые сохраняются на вашем устройстве и которые хранит ваш браузер. Они служат для того, чтобы сделать наше предложение более удобным, эффективным и безопасным.'}
                </p>

                <h3 className="text-xl font-semibold text-brand-espresso mb-3 mt-6">
                  {language === 'de' ? 'Welche Cookies verwenden wir?' : language === 'ru' ? 'Какие Cookie мы используем?' : 'Какие Cookie мы используем?'}
                </h3>

                <div className="bg-brand-gold/10 p-5 rounded-xl mb-4">
                  <p className="font-semibold text-brand-espresso mb-3">
                    {language === 'de' ? 'Technisch notwendige Cookies:' : language === 'ru' ? 'Технически необходимые Cookie:' : 'Технически необходимые Cookie:'}
                  </p>
                  <p className="text-sm leading-relaxed mb-3">
                    {isGerman
                      ? 'Diese Cookies sind erforderlich, damit die Website ordnungsgemäß funktioniert. Sie ermöglichen grundlegende Funktionen wie die Seitennavigation und den Zugriff auf sichere Bereiche der Website.'
                      : 'Эти Cookie необходимы для правильной работы сайта. Они обеспечивают базовые функции, такие как навигация по страницам и доступ к защищенным разделам сайта.'}
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-sm ml-4">
                    <li>
                      {language === 'de' ? 'Speicherung der Cookie-Einwilligung' : language === 'ru' ? 'Сохранение согласия на Cookie' : 'Сохранение согласия на Cookie'}
                    </li>
                    <li>
                      {language === 'de' ? 'Spracheinstellungen' : language === 'ru' ? 'Языковые настройки' : 'Языковые настройки'}
                    </li>
                    <li>
                      {language === 'de' ? 'Session-Verwaltung' : language === 'ru' ? 'Управление сессиями' : 'Управление сессиями'}
                    </li>
                  </ul>
                </div>

                <div className="bg-blue-50/50 border-l-4 border-blue-500 p-4 rounded mb-4">
                  <p className="font-semibold text-blue-900 mb-2">
                    {language === 'de' ? 'Analyse-Cookies:' : language === 'ru' ? 'Аналитические Cookie:' : 'Аналитические Cookie:'}
                  </p>
                  <p className="text-sm text-blue-800 mb-3">
                    {isGerman
                      ? 'Mit Ihrer Einwilligung verwenden wir folgende Analyse-Tools:'
                      : 'С вашего согласия мы используем следующие инструменты анализа:'}
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-sm text-blue-800 ml-4">
                    <li>
                      <span className="font-medium">Google Analytics:</span>{' '}
                      {isGerman
                        ? 'Zur Analyse des Nutzerverhaltens und Verbesserung unserer Website. Die Daten werden anonymisiert erfasst.'
                        : 'Для анализа поведения пользователей и улучшения нашего сайта. Данные собираются анонимно.'}
                    </li>
                    <li>
                      <span className="font-medium">Ahrefs:</span>{' '}
                      {isGerman
                        ? 'Zur Analyse der Website-Performance und SEO-Optimierung.'
                        : 'Для анализа производительности сайта и SEO-оптимизации.'}
                    </li>
                  </ul>
                </div>

                <h3 className="text-xl font-semibold text-brand-espresso mb-3 mt-6">
                  {language === 'de' ? 'Rechtsgrundlage' : language === 'ru' ? 'Правовая основа' : 'Правовая основа'}
                </h3>
                <p className="leading-relaxed mb-4">
                  {isGerman
                    ? 'Technisch notwendige Cookies werden auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO gespeichert. Analyse-Cookies werden nur mit Ihrer ausdrücklichen Einwilligung gemäß Art. 6 Abs. 1 lit. a DSGVO gesetzt.'
                    : 'Технически необходимые Cookie сохраняются на основании Art. 6 Abs. 1 lit. f GDPR. Аналитические Cookie устанавливаются только с вашего явного согласия в соответствии с Art. 6 Abs. 1 lit. a GDPR.'}
                </p>

                <h3 className="text-xl font-semibold text-brand-espresso mb-3 mt-6">
                  {language === 'de' ? 'Cookies verwalten' : language === 'ru' ? 'Управление Cookie' : 'Управление Cookie'}
                </h3>
                <p className="leading-relaxed mb-3">
                  {isGerman
                    ? 'Sie können Ihre Cookie-Einstellungen jederzeit ändern:'
                    : 'Вы можете в любое время изменить настройки Cookie:'}
                </p>
                <ul className="list-disc list-inside space-y-2 mb-4 ml-4">
                  <li>
                    {isGerman
                      ? 'Über unseren Cookie-Banner auf der Website'
                      : 'Через наш баннер Cookie на сайте'}
                  </li>
                  <li>
                    {isGerman
                      ? 'In den Einstellungen Ihres Browsers (alle Cookies löschen/blockieren)'
                      : 'В настройках вашего браузера (удалить/заблокировать все Cookie)'}
                  </li>
                </ul>
                <p className="text-sm text-brand-coffee/60">
                  {isGerman
                    ? 'Bitte beachten Sie: Das Deaktivieren von Cookies kann die Funktionalität unserer Website einschränken.'
                    : 'Обратите внимание: отключение Cookie может ограничить функциональность нашего сайта.'}
                </p>

                <h3 className="text-xl font-semibold text-brand-espresso mb-3 mt-6">
                  {language === 'de' ? 'Speicherdauer' : language === 'ru' ? 'Срок хранения' : 'Срок хранения'}
                </h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>
                    <span className="font-medium">
                      {language === 'de' ? 'Session-Cookies:' : language === 'ru' ? 'Session-Cookie:' : 'Session-Cookie:'}
                    </span>{' '}
                    {isGerman
                      ? 'werden nach Schließen des Browsers gelöscht'
                      : 'удаляются после закрытия браузера'}
                  </li>
                  <li>
                    <span className="font-medium">
                      {language === 'de' ? 'Permanente Cookies:' : language === 'ru' ? 'Постоянные Cookie:' : 'Постоянные Cookie:'}
                    </span>{' '}
                    {isGerman
                      ? 'werden nach maximal 13 Monaten automatisch gelöscht'
                      : 'автоматически удаляются максимум через 13 месяцев'}
                  </li>
                </ul>
              </section>

              {/* Contact Form */}
              <section>
                <h2 className="text-2xl font-heading font-semibold text-brand-espresso mb-4">
                  {language === 'de' ? '7. Kontaktformular' : language === 'ru' ? '7. Контактная форма' : '7. Контактная форма'}
                </h2>
                <p className="leading-relaxed mb-4">
                  {isGerman
                    ? 'Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert.'
                    : 'Если вы отправляете нам запросы через контактную форму, ваша информация из формы запроса, включая указанные вами контактные данные, будет сохранена у нас для обработки запроса и на случай дополнительных вопросов.'}
                </p>
                <p className="leading-relaxed">
                  {isGerman
                    ? 'Diese Daten geben wir nicht ohne Ihre Einwilligung weiter. Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist.'
                    : 'Мы не передаем эти данные без вашего согласия. Обработка этих данных осуществляется на основании Art. 6 Abs. 1 lit. b GDPR, если ваш запрос связан с выполнением контракта или необходим для выполнения предконтрактных мер.'}
                </p>
              </section>

              {/* Online Booking - DIKIDI */}
              <section>
                <h2 className="text-2xl font-heading font-semibold text-brand-espresso mb-4">
                  {language === 'de' ? '8. Online-Terminbuchung über DIKIDI' : language === 'ru' ? '8. Онлайн-запись через DIKIDI' : '8. Онлайн-запись через DIKIDI'}
                </h2>
                <p className="leading-relaxed mb-4">
                  {isGerman
                    ? 'Die Online-Terminbuchung erfolgt teilweise über den externen Dienst DIKIDI. Bei der Nutzung des Buchungssystems werden personenbezogene Daten wie Name, Telefonnummer, E-Mail-Adresse sowie Terminwünsche verarbeitet.'
                    : 'Онлайн-запись осуществляется частично через внешний сервис DIKIDI. При использовании системы бронирования обрабатываются персональные данные, такие как имя, номер телефона, адрес электронной почты и желаемое время записи.'}
                </p>
                <p className="leading-relaxed mb-4">
                  {isGerman
                    ? 'Die Verarbeitung der Daten erfolgt zum Zweck der Terminverwaltung und -organisation auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung bzw. vorvertragliche Maßnahmen).'
                    : 'Обработка данных осуществляется с целью управления и организации записей на основании Art. 6 Abs. 1 lit. b DSGVO (выполнение договора или предконтрактные меры).'}
                </p>
                <p className="leading-relaxed">
                  {isGerman
                    ? 'Die Datenverarbeitung im Rahmen der Online-Terminbuchung erfolgt in der Verantwortung des jeweiligen Anbieters. Es gelten die Datenschutzbestimmungen von DIKIDI: '
                    : 'Обработка данных в рамках онлайн-записи осуществляется под ответственностью соответствующего поставщика. Применяются положения о защите данных DIKIDI: '}
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
                  {language === 'de' ? '9. Anfrage per E-Mail oder Telefon' : language === 'ru' ? '9. Запрос по электронной почте или телефону' : '9. Запрос по электронной почте или телефону'}
                </h2>
                <p className="leading-relaxed">
                  {isGerman
                    ? 'Wenn Sie uns per E-Mail oder Telefon kontaktieren, wird Ihre Anfrage inklusive aller daraus hervorgehenden personenbezogenen Daten (Name, Anfrage) zum Zwecke der Bearbeitung Ihres Anliegens bei uns gespeichert und verarbeitet. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.'
                    : 'Если вы свяжетесь с нами по электронной почте или телефону, ваш запрос, включая все полученные из него персональные данные (имя, запрос), будет сохранен и обработан нами для обработки вашего запроса. Мы не передаем эти данные без вашего согласия.'}
                </p>
              </section>

              {/* SSL Encryption */}
              <section>
                <h2 className="text-2xl font-heading font-semibold text-brand-espresso mb-4">
                  {language === 'de' ? '10. SSL- bzw. TLS-Verschlüsselung' : language === 'ru' ? '10. SSL/TLS-шифрование' : '10. SSL/TLS-шифрование'}
                </h2>
                <p className="leading-relaxed">
                  {isGerman
                    ? 'Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von "http://" auf "https://" wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.'
                    : 'Этот сайт использует SSL/TLS-шифрование по соображениям безопасности и для защиты передачи конфиденциального контента. Зашифрованное соединение можно узнать по тому, что адресная строка браузера меняется с "http://" на "https://" и по символу замка в строке браузера.'}
                </p>
              </section>

              {/* Data Deletion */}
              <section>
                <h2 className="text-2xl font-heading font-semibold text-brand-espresso mb-4">
                  {language === 'de' ? '11. Speicherdauer' : language === 'ru' ? '11. Срок хранения' : '11. Срок хранения'}
                </h2>
                <p className="leading-relaxed">
                  {isGerman
                    ? 'Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt wurde, verbleiben Ihre personenbezogenen Daten bei uns, bis der Zweck für die Datenverarbeitung entfällt. Wenn Sie ein berechtigtes Löschersuchen geltend machen oder eine Einwilligung zur Datenverarbeitung widerrufen, werden Ihre Daten gelöscht, sofern wir keine anderen rechtlich zulässigen Gründe für die Speicherung Ihrer personenbezogenen Daten haben.'
                    : 'Если в этой политике конфиденциальности не указан более конкретный срок хранения, ваши персональные данные остаются у нас до тех пор, пока не отпадет цель обработки данных. Если вы подадите обоснованный запрос на удаление или отзовете согласие на обработку данных, ваши данные будут удалены, если у нас нет других законных оснований для хранения ваших персональных данных.'}
                </p>
              </section>

              {/* Contact for Questions */}
              <section className="bg-brand-gold/5 p-6 rounded-2xl">
                <h2 className="text-2xl font-heading font-semibold text-brand-espresso mb-4">
                  {language === 'de' ? '12. Fragen zum Datenschutz?' : language === 'ru' ? '12. Вопросы о защите данных?' : '12. Вопросы о защите данных?'}
                </h2>
                <p className="leading-relaxed mb-4">
                  {isGerman
                    ? 'Wenn Sie Fragen zum Datenschutz haben, schreiben Sie uns bitte eine E-Mail oder wenden Sie sich direkt an die für den Datenschutz verantwortliche Person in unserer Organisation:'
                    : 'Если у вас есть вопросы о защите данных, пожалуйста, напишите нам по электронной почте или свяжитесь напрямую с ответственным за защиту данных в нашей организации:'}
                </p>
                <div className="space-y-2">
                  <p className="font-medium">
                    {language === 'de' ? 'Nataliia Koziukevych' : language === 'ru' ? 'Наталия Козюкевич' : 'Наталия Козюкевич'}
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
                  {language === 'de' ? 'Stand: Dezember 2024' : language === 'ru' ? 'Состояние: декабрь 2024 года' : 'Состояние: декабрь 2024 года'}
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
