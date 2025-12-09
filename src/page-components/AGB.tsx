'use client'

import { useLanguage } from '@/contexts/LanguageContext';
import { FileText, Calendar, CreditCard, AlertTriangle, Scale, Clock } from 'lucide-react';

const AGB = () => {
  const { language } = useLanguage();
  const isGerman = language === 'de';

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
                <FileText className="w-10 h-10 text-brand-gold" />
                <h1 className="text-4xl md:text-5xl font-heading font-semibold text-brand-espresso">
                  {isGerman ? 'Allgemeine Geschäftsbedingungen' : 'Общие условия и положения'}
                </h1>
              </div>
              <p className="text-brand-coffee/70">
                {isGerman
                  ? 'Gültig für alle Dienstleistungen von NataLux'
                  : 'Действительны для всех услуг NataLux'}
              </p>
            </div>

            {/* AGB Content */}
            <div className="space-y-8 text-brand-coffee/80">
              {/* Scope */}
              <section>
                <h2 className="text-2xl font-heading font-semibold text-brand-espresso mb-4">
                  {isGerman ? '1. Geltungsbereich' : '1. Область применения'}
                </h2>
                <p className="leading-relaxed mb-4">
                  {isGerman
                    ? 'Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Verträge über Beauty-Dienstleistungen, die zwischen NataLux, Inhaberin Nataliia Koziukevych, und Kunden geschlossen werden.'
                    : 'Эти Общие условия и положения (AGB) применяются ко всем контрактам на услуги красоты, заключенным между NataLux, владелец Наталия Козюкевич, и клиентами.'}
                </p>
                <div className="bg-brand-gold/5 p-4 rounded-xl">
                  <p className="font-semibold text-brand-espresso mb-2">
                    {isGerman ? 'Anbieter:' : 'Провайдер:'}
                  </p>
                  <p className="text-sm">
                    {isGerman ? 'Nataliia Koziukevych' : 'Наталия Козюкевич'}
                  </p>
                  <p className="text-sm">NataLux</p>
                  <p className="text-sm">Rosenheimerstraße 159, 81671 München</p>
                </div>
              </section>

              {/* Services */}
              <section>
                <h2 className="text-2xl font-heading font-semibold text-brand-espresso mb-4">
                  {isGerman ? '2. Leistungsumfang' : '2. Объем услуг'}
                </h2>
                <p className="leading-relaxed mb-4">
                  {isGerman
                    ? 'NataLux bietet professionelle Beauty-Dienstleistungen in folgenden Bereichen:'
                    : 'NataLux предлагает профессиональные услуги красоты в следующих областях:'}
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>
                    {isGerman ? 'Permanent Make-Up (Augenbrauen, Lippen, Augen)' : 'Перманентный макияж (брови, губы, глаза)'}
                  </li>
                  <li>
                    {isGerman
                      ? 'Wimpernverlängerung und Laminierung'
                      : 'Наращивание и ламинирование ресниц'}
                  </li>
                  <li>
                    {isGerman
                      ? 'Gesichtsbehandlungen und Anti-Aging'
                      : 'Процедуры для лица и антивозрастной уход'}
                  </li>
                  <li>
                    {isGerman
                      ? 'Laser-Haarentfernung'
                      : 'Лазерная эпиляция'}
                  </li>
                  <li>
                    {isGerman
                      ? 'Apparative Kosmetik (RF-Lifting, Ultraschall, etc.)'
                      : 'Аппаратная косметология (RF-лифтинг, ультразвук и т.д.)'}
                  </li>
                  <li>
                    {isGerman
                      ? 'Körperbehandlungen (Kavitation, RF-Vakuum)'
                      : 'Процедуры для тела (кавитация, RF-вакуум)'}
                  </li>
                  <li>
                    {isGerman ? 'Schulungen und Beratung' : 'Обучение и консультации'}
                  </li>
                </ul>
                <p className="leading-relaxed mt-4">
                  {isGerman
                    ? 'Die genaue Leistungsbeschreibung ergibt sich aus der jeweiligen Terminvereinbarung. Alle Preise sind in unserer aktuellen Preisliste aufgeführt.'
                    : 'Точное описание услуги вытекает из соответствующей записи на прием. Все цены указаны в нашем актуальном прайс-листе.'}
                </p>
              </section>

              {/* Appointments */}
              <section>
                <h2 className="text-2xl font-heading font-semibold text-brand-espresso mb-4 flex items-center gap-2">
                  <Calendar className="w-6 h-6 text-brand-gold" />
                  {isGerman ? '3. Terminvereinbarung und Stornierung' : '3. Запись и отмена'}
                </h2>

                <h3 className="text-xl font-semibold text-brand-espresso mb-3 mt-6">
                  {isGerman ? 'Terminvereinbarung' : 'Запись на прием'}
                </h3>
                <p className="leading-relaxed mb-4">
                  {isGerman
                    ? 'Termine können telefonisch, per E-Mail, WhatsApp oder Telegram vereinbart werden. Ein Vertrag kommt durch die Bestätigung des Termins durch NataLux zustande.'
                    : 'Записи могут быть сделаны по телефону, электронной почте, WhatsApp или Telegram. Контракт заключается путем подтверждения записи со стороны NataLux.'}
                </p>

                <h3 className="text-xl font-semibold text-brand-espresso mb-3 mt-6">
                  {isGerman ? 'Stornierung durch den Kunden' : 'Отмена клиентом'}
                </h3>
                <div className="bg-brand-gold/10 p-5 rounded-xl mb-4">
                  <p className="leading-relaxed mb-3">
                    {isGerman
                      ? 'Termine können kostenfrei storniert oder verschoben werden:'
                      : 'Записи могут быть отменены или перенесены бесплатно:'}
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-sm">
                    <li>
                      {isGerman
                        ? 'Bis zu 24 Stunden vor dem vereinbarten Termin: kostenfreie Stornierung'
                        : 'До 24 часов до назначенного времени: бесплатная отмена'}
                    </li>
                    <li>
                      {isGerman
                        ? 'Weniger als 24 Stunden oder bei Nichterscheinen: 50% des Behandlungspreises werden berechnet'
                        : 'Менее чем за 24 часа или при неявке: взимается 50% стоимости процедуры'}
                    </li>
                  </ul>
                </div>
                <p className="leading-relaxed text-sm">
                  {isGerman
                    ? 'Bei wiederholtem Nichterscheinen ohne Absage behalten wir uns vor, zukünftige Termine nur noch gegen Vorauszahlung zu vereinbaren.'
                    : 'При повторной неявке без отмены мы оставляем за собой право назначать будущие встречи только при предоплате.'}
                </p>

                <h3 className="text-xl font-semibold text-brand-espresso mb-3 mt-6">
                  {isGerman ? 'Verspätung' : 'Опоздание'}
                </h3>
                <p className="leading-relaxed">
                  {isGerman
                    ? 'Bei Verspätung des Kunden von mehr als 15 Minuten kann die Behandlung nicht mehr in vollem Umfang durchgeführt werden. Der volle Behandlungspreis bleibt dennoch bestehen.'
                    : 'При опоздании клиента более чем на 15 минут процедура не может быть проведена в полном объеме. Однако полная стоимость процедуры остается.'}
                </p>
              </section>

              {/* Payment */}
              <section>
                <h2 className="text-2xl font-heading font-semibold text-brand-espresso mb-4 flex items-center gap-2">
                  <CreditCard className="w-6 h-6 text-brand-gold" />
                  {isGerman ? '4. Zahlung' : '4. Оплата'}
                </h2>
                <p className="leading-relaxed mb-4">
                  {isGerman
                    ? 'Die Zahlung erfolgt direkt nach Erbringung der Dienstleistung. Folgende Zahlungsmethoden werden akzeptiert:'
                    : 'Оплата производится непосредственно после оказания услуги. Принимаются следующие способы оплаты:'}
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>{isGerman ? 'Barzahlung' : 'Наличные'}</li>
                  <li>{isGerman ? 'EC-Karte' : 'EC-карта'}</li>
                  <li>{isGerman ? 'Überweisung (nach Vereinbarung)' : 'Банковский перевод (по договоренности)'}</li>
                </ul>
                <p className="leading-relaxed mt-4">
                  {isGerman
                    ? 'Bei mehrteiligen Behandlungen (z.B. Permanent Make-Up mit Nachbehandlung) ist die Zahlung nach jeder Sitzung fällig, sofern nicht anders vereinbart.'
                    : 'При многоэтапных процедурах (например, перманентный макияж с последующей коррекцией) оплата производится после каждого сеанса, если не согласовано иное.'}
                </p>
              </section>

              {/* Customer Obligations */}
              <section>
                <h2 className="text-2xl font-heading font-semibold text-brand-espresso mb-4 flex items-center gap-2">
                  <AlertTriangle className="w-6 h-6 text-brand-gold" />
                  {isGerman ? '5. Pflichten des Kunden' : '5. Обязанности клиента'}
                </h2>

                <h3 className="text-xl font-semibold text-brand-espresso mb-3">
                  {isGerman ? 'Gesundheitsangaben' : 'Информация о здоровье'}
                </h3>
                <p className="leading-relaxed mb-4">
                  {isGerman
                    ? 'Der Kunde ist verpflichtet, vor Beginn der Behandlung wahrheitsgemäß alle gesundheitsrelevanten Informationen anzugeben, insbesondere:'
                    : 'Клиент обязан перед началом процедуры правдиво предоставить всю информацию о здоровье, особенно:'}
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
                  <li>{isGerman ? 'Allergien und Unverträglichkeiten' : 'Аллергии и непереносимости'}</li>
                  <li>{isGerman ? 'Hauterkrankungen' : 'Кожные заболевания'}</li>
                  <li>{isGerman ? 'Einnahme von Medikamenten' : 'Прием лекарств'}</li>
                  <li>{isGerman ? 'Schwangerschaft oder Stillzeit' : 'Беременность или грудное вскармливание'}</li>
                  <li>
                    {isGerman ? 'Vorherige kosmetische Behandlungen' : 'Предыдущие косметические процедуры'}
                  </li>
                </ul>

                <h3 className="text-xl font-semibold text-brand-espresso mb-3 mt-6">
                  {isGerman ? 'Nachsorge' : 'Последующий уход'}
                </h3>
                <p className="leading-relaxed mb-4">
                  {isGerman
                    ? 'Der Kunde verpflichtet sich, die vereinbarten Nachsorgeanweisungen gewissenhaft zu befolgen. Bei Nichteinhaltung der Pflegehinweise können keine Gewährleistungsansprüche geltend gemacht werden.'
                    : 'Клиент обязуется добросовестно следовать согласованным инструкциям по последующему уходу. При несоблюдении рекомендаций по уходу гарантийные претензии не могут быть предъявлены.'}
                </p>

                <h3 className="text-xl font-semibold text-brand-espresso mb-3 mt-6">
                  {isGerman ? 'Altersbeschränkung' : 'Возрастное ограничение'}
                </h3>
                <p className="leading-relaxed">
                  {isGerman
                    ? 'Für bestimmte Behandlungen (z.B. Permanent Make-Up) ist ein Mindestalter von 18 Jahren erforderlich. Bei Minderjährigen ist die schriftliche Einwilligung eines Erziehungsberechtigten notwendig.'
                    : 'Для определенных процедур (например, перманентного макияжа) требуется минимальный возраст 18 лет. Для несовершеннолетних необходимо письменное согласие родителя или опекуна.'}
                </p>
              </section>

              {/* Liability */}
              <section>
                <h2 className="text-2xl font-heading font-semibold text-brand-espresso mb-4 flex items-center gap-2">
                  <Scale className="w-6 h-6 text-brand-gold" />
                  {isGerman ? '6. Haftung' : '6. Ответственность'}
                </h2>
                <p className="leading-relaxed mb-4">
                  {isGerman
                    ? 'NataLux haftet für Schäden nur bei Vorsatz und grober Fahrlässigkeit. Dies gilt nicht für die Verletzung von Leben, Körper und Gesundheit.'
                    : 'NataLux несет ответственность за ущерб только в случае умысла и грубой небрежности. Это не относится к повреждениям жизни, тела и здоровья.'}
                </p>
                <p className="leading-relaxed mb-4">
                  {isGerman
                    ? 'Alle Behandlungen werden nach bestem Wissen und Gewissen sowie nach dem aktuellen Stand der Technik durchgeführt. Individuelle Reaktionen des Körpers können jedoch nicht ausgeschlossen werden.'
                    : 'Все процедуры проводятся с лучшим знанием и совестью, а также в соответствии с текущим состоянием технологии. Однако индивидуальные реакции организма не могут быть исключены.'}
                </p>
                <div className="bg-amber-50/50 border-l-4 border-amber-500 p-4 rounded">
                  <p className="text-sm font-semibold text-amber-900 mb-2">
                    {isGerman ? 'Wichtiger Hinweis:' : 'Важное замечание:'}
                  </p>
                  <p className="text-sm text-amber-800">
                    {isGerman
                      ? 'Bei Auftreten unerwarteter Reaktionen oder Komplikationen ist NataLux unverzüglich zu informieren. Eine Haftung für Folgeschäden, die durch verspätete Meldung entstehen, ist ausgeschlossen.'
                      : 'При возникновении неожиданных реакций или осложнений необходимо немедленно сообщить в NataLux. Ответственность за косвенный ущерб, возникший из-за поздного уведомления, исключается.'}
                  </p>
                </div>
              </section>

              {/* Warranty */}
              <section>
                <h2 className="text-2xl font-heading font-semibold text-brand-espresso mb-4 flex items-center gap-2">
                  <Clock className="w-6 h-6 text-brand-gold" />
                  {isGerman ? '7. Gewährleistung' : '7. Гарантия'}
                </h2>
                <p className="leading-relaxed mb-4">
                  {isGerman
                    ? 'Bei Permanent Make-Up wird eine kostenfreie Nachbehandlung innerhalb von 4-8 Wochen nach der Erstbehandlung angeboten. Diese dient zur Optimierung des Ergebnisses und ist im Preis inbegriffen.'
                    : 'При перманентном макияже предлагается бесплатная коррекция в течение 4-8 недель после первой процедуры. Это служит для оптимизации результата и включено в цену.'}
                </p>
                <p className="leading-relaxed mb-4">
                  {isGerman
                    ? 'Das Ergebnis von Beauty-Behandlungen kann individuell variieren und hängt von verschiedenen Faktoren ab (Hauttyp, Stoffwechsel, Lebensweise, Nachsorge). Eine Garantie für ein bestimmtes Ergebnis kann daher nicht gegeben werden.'
                    : 'Результат косметических процедур может варьироваться индивидуально и зависит от различных факторов (тип кожи, метаболизм, образ жизни, последующий уход). Поэтому гарантия конкретного результата не может быть дана.'}
                </p>
                <p className="leading-relaxed">
                  {isGerman
                    ? 'Bei berechtigten Reklamationen wird eine kostenfreie Nachbehandlung angeboten. Weitergehende Ansprüche sind ausgeschlossen, sofern keine grobe Fahrlässigkeit oder Vorsatz vorliegt.'
                    : 'При обоснованных жалобах предлагается бесплатная дополнительная процедура. Дальнейшие претензии исключаются, если не было грубой небрежности или умысла.'}
                </p>
              </section>

              {/* Photos and Marketing */}
              <section>
                <h2 className="text-2xl font-heading font-semibold text-brand-espresso mb-4">
                  {isGerman ? '8. Foto- und Videoaufnahmen' : '8. Фото и видео'}
                </h2>
                <p className="leading-relaxed">
                  {isGerman
                    ? 'Foto- und Videoaufnahmen von Behandlungsergebnissen erfolgen nur mit ausdrücklicher schriftlicher Einwilligung des Kunden. Die Einwilligung kann jederzeit widerrufen werden. Bereits veröffentlichte Aufnahmen werden dann entfernt.'
                    : 'Фото и видео результатов процедур делаются только с явного письменного согласия клиента. Согласие может быть отозвано в любое время. Уже опубликованные материалы будут удалены.'}
                </p>
              </section>

              {/* Data Protection */}
              <section>
                <h2 className="text-2xl font-heading font-semibold text-brand-espresso mb-4">
                  {isGerman ? '9. Datenschutz' : '9. Защита данных'}
                </h2>
                <p className="leading-relaxed">
                  {isGerman
                    ? 'Die Erhebung und Verarbeitung personenbezogener Daten erfolgt gemäß unserer Datenschutzerklärung und den Bestimmungen der DSGVO. Weitere Informationen finden Sie in unserer '
                    : 'Сбор и обработка персональных данных осуществляются в соответствии с нашей политикой конфиденциальности и положениями GDPR. Дополнительную информацию вы найдете в нашей '}
                  <a href="/datenschutz" className="text-brand-gold hover:underline font-medium">
                    {isGerman ? 'Datenschutzerklärung' : 'политике конфиденциальности'}
                  </a>
                  .
                </p>
              </section>

              {/* Hygiene */}
              <section>
                <h2 className="text-2xl font-heading font-semibold text-brand-espresso mb-4">
                  {isGerman ? '10. Hygiene und Sicherheit' : '10. Гигиена и безопасность'}
                </h2>
                <p className="leading-relaxed">
                  {isGerman
                    ? 'Alle Behandlungen werden unter Einhaltung höchster Hygiene- und Sicherheitsstandards durchgeführt. Es werden ausschließlich hochwertige, geprüfte Produkte und sterile Einmalprodukte verwendet.'
                    : 'Все процедуры проводятся с соблюдением высочайших стандартов гигиены и безопасности. Используются исключительно качественные, проверенные продукты и стерильные одноразовые изделия.'}
                </p>
              </section>

              {/* Severability */}
              <section>
                <h2 className="text-2xl font-heading font-semibold text-brand-espresso mb-4">
                  {isGerman ? '11. Salvatorische Klausel' : '11. Сохранение действия'}
                </h2>
                <p className="leading-relaxed">
                  {isGerman
                    ? 'Sollten einzelne Bestimmungen dieser AGB unwirksam sein oder werden, bleibt die Wirksamkeit der übrigen Bestimmungen hiervon unberührt. An die Stelle der unwirksamen Bestimmung tritt eine Regelung, die dem wirtschaftlichen Zweck der unwirksamen Bestimmung am nächsten kommt.'
                    : 'Если отдельные положения этих Общих условий являются или станут недействительными, это не влияет на действительность остальных положений. Вместо недействительного положения вступает правило, которое наиболее близко соответствует экономической цели недействительного положения.'}
                </p>
              </section>

              {/* Applicable Law */}
              <section>
                <h2 className="text-2xl font-heading font-semibold text-brand-espresso mb-4">
                  {isGerman ? '12. Anwendbares Recht und Gerichtsstand' : '12. Применимое право и юрисдикция'}
                </h2>
                <p className="leading-relaxed">
                  {isGerman
                    ? 'Es gilt das Recht der Bundesrepublik Deutschland. Gerichtsstand ist München, sofern der Kunde Kaufmann, juristische Person des öffentlichen Rechts oder öffentlich-rechtliches Sondervermögen ist.'
                    : 'Применяется законодательство Федеративной Республики Германия. Местом юрисдикции является Мюнхен, если клиент является коммерсантом, юридическим лицом публичного права или государственным специальным фондом.'}
                </p>
              </section>

              {/* Contact */}
              <section className="bg-brand-gold/5 p-6 rounded-2xl">
                <h2 className="text-2xl font-heading font-semibold text-brand-espresso mb-4">
                  {isGerman ? '13. Fragen zu den AGB?' : '13. Вопросы об условиях?'}
                </h2>
                <p className="leading-relaxed mb-4">
                  {isGerman
                    ? 'Bei Fragen zu unseren Allgemeinen Geschäftsbedingungen stehen wir Ihnen gerne zur Verfügung:'
                    : 'При вопросах о наших Общих условиях мы с удовольствием будем к вашим услугам:'}
                </p>
                <div className="space-y-2">
                  <p className="font-medium">
                    {isGerman ? 'Nataliia Koziukevych' : 'Наталия Козюкевич'}
                  </p>
                  <p className="text-sm">Natali.lux@web.de</p>
                  <p className="text-sm">+49 176 77267269</p>
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

export default AGB;
