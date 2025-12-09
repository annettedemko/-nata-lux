'use client'

import { useLanguage } from '@/contexts/LanguageContext';
import { Shield, Mail, Lock, Eye, FileText, AlertCircle } from 'lucide-react';

const Datenschutz = () => {
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
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="w-10 h-10 text-brand-gold" />
                <h1 className="text-4xl md:text-5xl font-heading font-semibold text-brand-espresso">
                  {isGerman ? 'Datenschutzerklärung' : 'Политика конфиденциальности'}
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
                  {isGerman ? '1. Datenschutz auf einen Blick' : '1. Защита данных с первого взгляда'}
                </h2>
                <h3 className="text-xl font-semibold text-brand-espresso mb-3">
                  {isGerman ? 'Allgemeine Hinweise' : 'Общая информация'}
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
                  {isGerman ? '2. Datenerfassung auf dieser Website' : '2. Сбор данных на этом сайте'}
                </h2>
                <h3 className="text-xl font-semibold text-brand-espresso mb-3">
                  {isGerman
                    ? 'Wer ist verantwortlich für die Datenerfassung auf dieser Website?'
                    : 'Кто несет ответственность за сбор данных на этом сайте?'}
                </h3>
                <div className="mb-4">
                  <p className="font-medium mb-2">Nataliia Koziukevych</p>
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
                      Natali.lux@web.de
                    </button>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-brand-espresso mb-3 mt-6">
                  {isGerman ? 'Wie erfassen wir Ihre Daten?' : 'Как мы собираем ваши данные?'}
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
                  {isGerman ? '3. Wofür nutzen wir Ihre Daten?' : '3. Для чего мы используем ваши данные?'}
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
                  {isGerman ? '4. Welche Rechte haben Sie?' : '4. Какие у вас есть права?'}
                </h2>
                <div className="space-y-3">
                  <p className="leading-relaxed">
                    {isGerman
                      ? 'Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen.'
                      : 'Вы имеете право в любое время получить бесплатную информацию о происхождении, получателях и целях ваших сохраненных персональных данных. Вы также имеете право требовать исправления или удаления этих данных.'}
                  </p>
                  <div className="bg-brand-gold/10 p-4 rounded-xl">
                    <p className="font-semibold text-brand-espresso mb-2">
                      {isGerman ? 'Ihre Rechte im Überblick:' : 'Ваши права в обзоре:'}
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      <li>{isGerman ? 'Recht auf Auskunft' : 'Право на информацию'}</li>
                      <li>{isGerman ? 'Recht auf Berichtigung' : 'Право на исправление'}</li>
                      <li>{isGerman ? 'Recht auf Löschung' : 'Право на удаление'}</li>
                      <li>
                        {isGerman
                          ? 'Recht auf Einschränkung der Verarbeitung'
                          : 'Право на ограничение обработки'}
                      </li>
                      <li>
                        {isGerman ? 'Recht auf Datenübertragbarkeit' : 'Право на переносимость данных'}
                      </li>
                      <li>{isGerman ? 'Widerspruchsrecht' : 'Право на возражение'}</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Server Data */}
              <section>
                <h2 className="text-2xl font-heading font-semibold text-brand-espresso mb-4 flex items-center gap-2">
                  <Lock className="w-6 h-6 text-brand-gold" />
                  {isGerman ? '5. Server-Log-Dateien' : '5. Файлы журналов сервера'}
                </h2>
                <p className="leading-relaxed mb-4">
                  {isGerman
                    ? 'Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind:'
                    : 'Провайдер страниц автоматически собирает и сохраняет информацию в так называемых файлах журналов сервера, которые ваш браузер автоматически передает нам. Это:'}
                </p>
                <ul className="list-disc list-inside space-y-2 mb-4">
                  <li>{isGerman ? 'Browsertyp und Browserversion' : 'Тип и версия браузера'}</li>
                  <li>{isGerman ? 'Verwendetes Betriebssystem' : 'Используемая операционная система'}</li>
                  <li>{isGerman ? 'Referrer URL' : 'Реферальный URL'}</li>
                  <li>{isGerman ? 'Hostname des zugreifenden Rechners' : 'Имя хоста компьютера'}</li>
                  <li>{isGerman ? 'Uhrzeit der Serveranfrage' : 'Время запроса к серверу'}</li>
                  <li>{isGerman ? 'IP-Adresse' : 'IP-адрес'}</li>
                </ul>
                <p className="leading-relaxed">
                  {isGerman
                    ? 'Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen. Die Erfassung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO.'
                    : 'Объединение этих данных с другими источниками данных не производится. Сбор этих данных осуществляется на основании Art. 6 Abs. 1 lit. f GDPR.'}
                </p>
              </section>

              {/* Contact Form */}
              <section>
                <h2 className="text-2xl font-heading font-semibold text-brand-espresso mb-4">
                  {isGerman ? '6. Kontaktformular' : '6. Контактная форма'}
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

              {/* Email Contact */}
              <section>
                <h2 className="text-2xl font-heading font-semibold text-brand-espresso mb-4">
                  {isGerman ? '7. Anfrage per E-Mail oder Telefon' : '7. Запрос по электронной почте или телефону'}
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
                  {isGerman ? '8. SSL- bzw. TLS-Verschlüsselung' : '8. SSL/TLS-шифрование'}
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
                  {isGerman ? '9. Speicherdauer' : '9. Срок хранения'}
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
                  {isGerman ? '10. Fragen zum Datenschutz?' : '10. Вопросы о защите данных?'}
                </h2>
                <p className="leading-relaxed mb-4">
                  {isGerman
                    ? 'Wenn Sie Fragen zum Datenschutz haben, schreiben Sie uns bitte eine E-Mail oder wenden Sie sich direkt an die für den Datenschutz verantwortliche Person in unserer Organisation:'
                    : 'Если у вас есть вопросы о защите данных, пожалуйста, напишите нам по электронной почте или свяжитесь напрямую с ответственным за защиту данных в нашей организации:'}
                </p>
                <div className="space-y-2">
                  <p className="font-medium">Nataliia Koziukevych</p>
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-brand-gold" />
                    <button
                      onClick={handleEmailClick}
                      className="hover:text-brand-gold transition-colors"
                    >
                      Natali.lux@web.de
                    </button>
                  </div>
                </div>
              </section>

              {/* Last Updated */}
              <section className="text-sm text-brand-coffee/60 pt-4 border-t border-brand-gold/10">
                <p>
                  {isGerman ? 'Stand: Dezember 2024' : 'Состояние: декабрь 2024 года'}
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
