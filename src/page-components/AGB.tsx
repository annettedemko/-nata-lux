'use client'

import { useLanguage } from '@/contexts/LanguageContext';
import { FileText, Calendar, CreditCard, AlertTriangle, Scale, Clock } from 'lucide-react';

const AGB = () => {
  const { language } = useLanguage();

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
                <h1 className="text-3xl md:text-5xl font-heading font-semibold text-brand-espresso">
                  {language === 'de' ? 'Allgemeine Geschäftsbedingungen' : language === 'ru' ? 'Общие условия и положения' : 'Загальні умови та положення'}
                </h1>
              </div>
              <p className="text-brand-coffee/70">
                {language === 'de'
                  ? 'Gültig für alle Dienstleistungen von NataLux'
                  : language === 'ru'
                  ? 'Действительны для всех услуг NataLux'
                  : 'Дійсні для всіх послуг NataLux'}
              </p>
            </div>

            {/* AGB Content */}
            <div className="space-y-8 text-brand-coffee/80">
              {/* Scope */}
              <section>
                <h2 className="text-2xl font-heading font-semibold text-brand-espresso mb-4">
                  {language === 'de' ? '1. Geltungsbereich' : language === 'ru' ? '1. Область применения' : '1. Область застосування'}
                </h2>
                <p className="leading-relaxed mb-4">
                  {language === 'de'
                    ? 'Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Verträge über Beauty-Dienstleistungen, die zwischen NataLux, Inhaberin Nataliia Koziukevych, und Kunden geschlossen werden.'
                    : language === 'ru'
                    ? 'Эти Общие условия и положения (AGB) применяются ко всем контрактам на услуги красоты, заключенным между NataLux, владелец Наталия Козюкевич, и клиентами.'
                    : 'Ці Загальні умови та положення (AGB) застосовуються до всіх контрактів на послуги краси, укладених між NataLux, власник Наталія Козюкевич, та клієнтами.'}
                </p>
                <div className="bg-brand-gold/5 p-4 rounded-xl">
                  <p className="font-semibold text-brand-espresso mb-2">
                    {language === 'de' ? 'Anbieter:' : language === 'ru' ? 'Провайдер:' : 'Провайдер:'}
                  </p>
                  <p className="text-sm">
                    {language === 'de' ? 'Nataliia Koziukevych' : language === 'ru' ? 'Наталия Козюкевич' : 'Наталія Козюкевич'}
                  </p>
                  <p className="text-sm">NataLux</p>
                  <p className="text-sm">Rosenheimerstraße 159, 81671 München</p>
                </div>
              </section>

              {/* Services */}
              <section>
                <h2 className="text-2xl font-heading font-semibold text-brand-espresso mb-4">
                  {language === 'de' ? '2. Leistungsumfang' : language === 'ru' ? '2. Объем услуг' : '2. Обсяг послуг'}
                </h2>
                <p className="leading-relaxed mb-4">
                  {language === 'de'
                    ? 'NataLux bietet professionelle Beauty-Dienstleistungen in folgenden Bereichen:'
                    : language === 'ru'
                    ? 'NataLux предлагает профессиональные услуги красоты в следующих областях:'
                    : 'NataLux пропонує професійні послуги краси в наступних галузях:'}
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>
                    {language === 'de' ? 'Permanent Make-Up (Augenbrauen, Lippen, Augen)' : language === 'ru' ? 'Перманентный макияж (брови, губы, глаза)' : 'Перманентний макіяж (брови, губи, очі)'}
                  </li>
                  <li>
                    {language === 'de'
                      ? 'Wimpernverlängerung und Laminierung'
                      : language === 'ru'
                      ? 'Наращивание и ламинирование ресниц'
                      : 'Нарощування та ламінування вій'}
                  </li>
                  <li>
                    {language === 'de'
                      ? 'Gesichtsbehandlungen und Anti-Aging'
                      : language === 'ru'
                      ? 'Процедуры для лица и антивозрастной уход'
                      : 'Процедури для обличчя та антивіковий догляд'}
                  </li>
                  <li>
                    {language === 'de'
                      ? 'Laser-Haarentfernung'
                      : language === 'ru'
                      ? 'Лазерная эпиляция'
                      : 'Лазерна епіляція'}
                  </li>
                  <li>
                    {language === 'de'
                      ? 'Apparative Kosmetik (RF-Lifting, Ultraschall, etc.)'
                      : language === 'ru'
                      ? 'Аппаратная косметология (RF-лифтинг, ультразвук и т.д.)'
                      : 'Апаратна косметологія (RF-ліфтинг, ультразвук тощо)'}
                  </li>
                  <li>
                    {language === 'de'
                      ? 'Körperbehandlungen (Kavitation, RF-Vakuum)'
                      : language === 'ru'
                      ? 'Процедуры для тела (кавитация, RF-вакуум)'
                      : 'Процедури для тіла (кавітація, RF-вакуум)'}
                  </li>
                  <li>
                    {language === 'de' ? 'Schulungen und Beratung' : language === 'ru' ? 'Обучение и консультации' : 'Навчання та консультації'}
                  </li>
                </ul>
                <p className="leading-relaxed mt-4">
                  {language === 'de'
                    ? 'Die genaue Leistungsbeschreibung ergibt sich aus der jeweiligen Terminvereinbarung. Alle Preise sind in unserer aktuellen Preisliste aufgeführt.'
                    : language === 'ru'
                    ? 'Точное описание услуги вытекает из соответствующей записи на прием. Все цены указаны в нашем актуальном прайс-листе.'
                    : 'Точний опис послуги випливає з відповідного запису на прийом. Всі ціни вказані в нашому актуальному прайс-листі.'}
                </p>
              </section>

              {/* Appointments */}
              <section>
                <h2 className="text-2xl font-heading font-semibold text-brand-espresso mb-4 flex items-center gap-2">
                  <Calendar className="w-6 h-6 text-brand-gold" />
                  {language === 'de' ? '3. Terminvereinbarung und Stornierung' : language === 'ru' ? '3. Запись и отмена' : '3. Запис та скасування'}
                </h2>

                <h3 className="text-xl font-semibold text-brand-espresso mb-3 mt-6">
                  {language === 'de' ? 'Terminvereinbarung' : language === 'ru' ? 'Запись на прием' : 'Запис на прийом'}
                </h3>
                <p className="leading-relaxed mb-4">
                  {language === 'de'
                    ? 'Termine können telefonisch, per E-Mail, WhatsApp oder Telegram vereinbart werden. Ein Vertrag kommt durch die Bestätigung des Termins durch NataLux zustande.'
                    : language === 'ru'
                    ? 'Записи могут быть сделаны по телефону, электронной почте, WhatsApp или Telegram. Контракт заключается путем подтверждения записи со стороны NataLux.'
                    : 'Записи можуть бути зроблені телефоном, електронною поштою, WhatsApp або Telegram. Контракт укладається шляхом підтвердження запису з боку NataLux.'}
                </p>

                <h3 className="text-xl font-semibold text-brand-espresso mb-3 mt-6">
                  {language === 'de' ? 'Stornierung durch den Kunden' : language === 'ru' ? 'Отмена клиентом' : 'Скасування клієнтом'}
                </h3>
                <div className="bg-brand-gold/10 p-5 rounded-xl mb-4">
                  <p className="leading-relaxed mb-3">
                    {language === 'de'
                      ? 'Termine können kostenfrei storniert oder verschoben werden:'
                      : language === 'ru'
                      ? 'Записи могут быть отменены или перенесены бесплатно:'
                      : 'Записи можуть бути скасовані або перенесені безкоштовно:'}
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-sm">
                    <li>
                      {language === 'de'
                        ? 'Bis zu 24 Stunden vor dem vereinbarten Termin: kostenfreie Stornierung'
                        : language === 'ru'
                        ? 'До 24 часов до назначенного времени: бесплатная отмена'
                        : 'До 24 годин до призначеного часу: безкоштовне скасування'}
                    </li>
                    <li>
                      {language === 'de'
                        ? 'Bei einer Absage weniger als 24 Stunden vor dem Termin oder bei Nichterscheinen behalten wir uns vor, eine Ausfallpauschale in Höhe von bis zu 50 % des Behandlungspreises zu berechnen, sofern kein geringerer Schaden nachgewiesen wird. Dem Kunden bleibt der Nachweis vorbehalten, dass kein oder ein geringerer Schaden entstanden ist.'
                        : language === 'ru'
                        ? 'При отмене менее чем за 24 часа до назначенного времени или при неявке мы оставляем за собой право взимать компенсацию за простой в размере до 50% стоимости процедуры, если не будет доказан меньший ущерб. За клиентом остается право доказать, что ущерб не возник или был меньше.'
                        : 'При скасуванні менш ніж за 24 години до призначеного часу або при неявці ми залишаємо за собою право стягувати компенсацію за простій у розмірі до 50% вартості процедури, якщо не буде доведено меншу шкоду. За клієнтом залишається право довести, що збиток не виник або був меншим.'}
                    </li>
                  </ul>
                </div>
                <p className="leading-relaxed text-sm">
                  {language === 'de'
                    ? 'Bei wiederholtem Nichterscheinen ohne Absage behalten wir uns vor, zukünftige Termine nur noch gegen Vorauszahlung zu vereinbaren.'
                    : language === 'ru'
                    ? 'При повторной неявке без отмены мы оставляем за собой право назначать будущие встречи только при предоплате.'
                    : 'При повторній неявці без скасування ми залишаємо за собою право призначати майбутні зустрічі тільки при передоплаті.'}
                </p>

                <h3 className="text-xl font-semibold text-brand-espresso mb-3 mt-6">
                  {language === 'de' ? 'Verspätung' : language === 'ru' ? 'Опоздание' : 'Запізнення'}
                </h3>
                <p className="leading-relaxed">
                  {language === 'de'
                    ? 'Bei Verspätung von mehr als 15 Minuten kann die Behandlungszeit entsprechend verkürzt werden. Ein Anspruch auf Preisreduzierung besteht in diesem Fall nicht.'
                    : language === 'ru'
                    ? 'При опоздании более чем на 15 минут время процедуры может быть соответственно сокращено. Право на снижение цены в этом случае не предусмотрено.'
                    : 'При запізненні більш ніж на 15 хвилин час процедури може бути відповідно скорочено. Право на зниження ціни в цьому випадку не передбачено.'}
                </p>
              </section>

              {/* Payment */}
              <section>
                <h2 className="text-2xl font-heading font-semibold text-brand-espresso mb-4 flex items-center gap-2">
                  <CreditCard className="w-6 h-6 text-brand-gold" />
                  {language === 'de' ? '4. Zahlung' : language === 'ru' ? '4. Оплата' : '4. Оплата'}
                </h2>
                <p className="leading-relaxed mb-4">
                  {language === 'de'
                    ? 'Die Zahlung erfolgt direkt nach Erbringung der Dienstleistung. Folgende Zahlungsmethoden werden akzeptiert:'
                    : language === 'ru'
                    ? 'Оплата производится непосредственно после оказания услуги. Принимаются следующие способы оплаты:'
                    : 'Оплата здійснюється безпосередньо після надання послуги. Приймаються наступні способи оплати:'}
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>{language === 'de' ? 'Barzahlung' : language === 'ru' ? 'Наличные' : 'Готівка'}</li>
                  <li>{language === 'de' ? 'EC-Karte' : language === 'ru' ? 'EC-карта' : 'EC-картка'}</li>
                  <li>{language === 'de' ? 'Überweisung (nach Vereinbarung)' : language === 'ru' ? 'Банковский перевод (по договоренности)' : 'Банківський переказ (за домовленістю)'}</li>
                </ul>
                <p className="leading-relaxed mt-4 mb-4">
                  {language === 'de'
                    ? 'Bei mehrteiligen Behandlungen (z.B. Permanent Make-Up mit Nachbehandlung) ist die Zahlung nach jeder Sitzung fällig, sofern nicht anders vereinbart.'
                    : language === 'ru'
                    ? 'При многоэтапных процедурах (например, перманентный макияж с последующей коррекцией) оплата производится после каждого сеанса, если не согласовано иное.'
                    : 'При багатоетапних процедурах (наприклад, перманентний макіяж з подальшою корекцією) оплата здійснюється після кожного сеансу, якщо не узгоджено інакше.'}
                </p>
                <p className="leading-relaxed">
                  {language === 'de'
                    ? 'Alle Preise verstehen sich inklusive der gesetzlichen Mehrwertsteuer, sofern diese anfällt.'
                    : language === 'ru'
                    ? 'Все цены указаны с включенным законным НДС, если он применяется.'
                    : 'Всі ціни вказані з включеним законним ПДВ, якщо він застосовується.'}
                </p>
              </section>

              {/* Customer Obligations */}
              <section>
                <h2 className="text-2xl font-heading font-semibold text-brand-espresso mb-4 flex items-center gap-2">
                  <AlertTriangle className="w-6 h-6 text-brand-gold" />
                  {language === 'de' ? '5. Pflichten des Kunden' : language === 'ru' ? '5. Обязанности клиента' : '5. Обов\'язки клієнта'}
                </h2>

                <h3 className="text-xl font-semibold text-brand-espresso mb-3">
                  {language === 'de' ? 'Gesundheitsangaben' : language === 'ru' ? 'Информация о здоровье' : 'Інформація про здоров\'я'}
                </h3>
                <p className="leading-relaxed mb-4">
                  {language === 'de'
                    ? 'Der Kunde ist verpflichtet, vor Beginn der Behandlung wahrheitsgemäß alle gesundheitsrelevanten Informationen anzugeben, insbesondere:'
                    : language === 'ru'
                    ? 'Клиент обязан перед началом процедуры правдиво предоставить всю информацию о здоровье, особенно:'
                    : 'Клієнт зобов\'язаний перед початком процедури правдиво надати всю інформацію про здоров\'я, особливо:'}
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
                  <li>{language === 'de' ? 'Allergien und Unverträglichkeiten' : language === 'ru' ? 'Аллергии и непереносимости' : 'Алергії та непереносимості'}</li>
                  <li>{language === 'de' ? 'Hauterkrankungen' : language === 'ru' ? 'Кожные заболевания' : 'Шкірні захворювання'}</li>
                  <li>{language === 'de' ? 'Einnahme von Medikamenten' : language === 'ru' ? 'Прием лекарств' : 'Прийом ліків'}</li>
                  <li>{language === 'de' ? 'Schwangerschaft oder Stillzeit' : language === 'ru' ? 'Беременность или грудное вскармливание' : 'Вагітність або грудне вигодовування'}</li>
                  <li>
                    {language === 'de' ? 'Vorherige kosmetische Behandlungen' : language === 'ru' ? 'Предыдущие косметические процедуры' : 'Попередні косметичні процедури'}
                  </li>
                </ul>
                <p className="leading-relaxed mb-4">
                  {language === 'de'
                    ? 'Der Kunde ist verpflichtet, bestehende Kontraindikationen vor der Behandlung mitzuteilen. Unterbleibt eine entsprechende Mitteilung, ist eine Haftung ausgeschlossen, soweit gesetzlich zulässig.'
                    : language === 'ru'
                    ? 'Клиент обязан сообщить о существующих противопоказаниях до процедуры. В случае отсутствия соответствующего уведомления ответственность исключается в пределах, допустимых законом.'
                    : 'Клієнт зобов\'язаний повідомити про наявні протипоказання до процедури. У разі відсутності відповідного повідомлення відповідальність виключається в межах, допустимих законом.'}
                </p>

                <h3 className="text-xl font-semibold text-brand-espresso mb-3 mt-6">
                  {language === 'de' ? 'Nachsorge' : language === 'ru' ? 'Последующий уход' : 'Подальший догляд'}
                </h3>
                <p className="leading-relaxed mb-4">
                  {language === 'de'
                    ? 'Der Kunde verpflichtet sich, die vereinbarten Nachsorgeanweisungen gewissenhaft zu befolgen. Bei Nichteinhaltung der Pflegehinweise können keine Gewährleistungsansprüche geltend gemacht werden.'
                    : language === 'ru'
                    ? 'Клиент обязуется добросовестно следовать согласованным инструкциям по последующему уходу. При несоблюдении рекомендаций по уходу гарантийные претензии не могут быть предъявлены.'
                    : 'Клієнт зобов\'язується сумлінно дотримуватися узгоджених інструкцій з подальшого догляду. При недотриманні рекомендацій з догляду гарантійні претензії не можуть бути пред\'явлені.'}
                </p>

                <h3 className="text-xl font-semibold text-brand-espresso mb-3 mt-6">
                  {language === 'de' ? 'Altersbeschränkung' : language === 'ru' ? 'Возрастное ограничение' : 'Вікове обмеження'}
                </h3>
                <p className="leading-relaxed">
                  {language === 'de'
                    ? 'Für bestimmte Behandlungen (z.B. Permanent Make-Up) ist ein Mindestalter von 18 Jahren erforderlich. Bei Minderjährigen ist die schriftliche Einwilligung eines Erziehungsberechtigten notwendig.'
                    : language === 'ru'
                    ? 'Для определенных процедур (например, перманентного макияжа) требуется минимальный возраст 18 лет. Для несовершеннолетних необходимо письменное согласие родителя или опекуна.'
                    : 'Для певних процедур (наприклад, перманентного макіяжу) потрібен мінімальний вік 18 років. Для неповнолітніх необхідна письмова згода батька або опікуна.'}
                </p>
              </section>

              {/* Liability */}
              <section>
                <h2 className="text-2xl font-heading font-semibold text-brand-espresso mb-4 flex items-center gap-2">
                  <Scale className="w-6 h-6 text-brand-gold" />
                  {language === 'de' ? '6. Haftung' : language === 'ru' ? '6. Ответственность' : '6. Відповідальність'}
                </h2>
                <p className="leading-relaxed mb-4">
                  {language === 'de'
                    ? 'NataLux haftet für Schäden nur bei Vorsatz und grober Fahrlässigkeit. Dies gilt nicht für die Verletzung von Leben, Körper und Gesundheit.'
                    : language === 'ru'
                    ? 'NataLux несет ответственность за ущерб только в случае умысла и грубой небрежности. Это не относится к повреждениям жизни, тела и здоровья.'
                    : 'NataLux несе відповідальність за збиток тільки у випадку умислу та грубої недбалості. Це не стосується пошкодження життя, тіла та здоров\'я.'}
                </p>
                <p className="leading-relaxed mb-4">
                  {language === 'de'
                    ? 'Alle Behandlungen werden nach bestem Wissen und Gewissen sowie nach dem aktuellen Stand der Technik durchgeführt. Individuelle Reaktionen des Körpers können jedoch nicht ausgeschlossen werden.'
                    : language === 'ru'
                    ? 'Все процедуры проводятся с лучшим знанием и совестью, а также в соответствии с текущим состоянием технологии. Однако индивидуальные реакции организма не могут быть исключены.'
                    : 'Всі процедури проводяться з найкращим знанням та совістю, а також відповідно до поточного стану технології. Однак індивідуальні реакції організму не можуть бути виключені.'}
                </p>
                <p className="leading-relaxed mb-4">
                  {language === 'de'
                    ? 'Die Haftung nach dem Produkthaftungsgesetz bleibt unberührt.'
                    : language === 'ru'
                    ? 'Ответственность в соответствии с законом об ответственности за продукцию остается неизменной.'
                    : 'Відповідальність відповідно до закону про відповідальність за продукцію залишається незмінною.'}
                </p>
                <div className="bg-amber-50/50 border-l-4 border-amber-500 p-4 rounded">
                  <p className="text-sm font-semibold text-amber-900 mb-2">
                    {language === 'de' ? 'Wichtiger Hinweis:' : language === 'ru' ? 'Важное замечание:' : 'Важливе зауваження:'}
                  </p>
                  <p className="text-sm text-amber-800">
                    {language === 'de'
                      ? 'Bei Auftreten unerwarteter Reaktionen oder Komplikationen ist NataLux unverzüglich zu informieren. Eine Haftung für Folgeschäden, die durch eine verspätete Meldung entstehen, ist ausgeschlossen, soweit gesetzlich zulässig.'
                      : language === 'ru'
                      ? 'При возникновении неожиданных реакций или осложнений необходимо немедленно сообщить в NataLux. Ответственность за косвенный ущерб, возникший из-за позднего уведомления, исключается в пределах, допустимых законом.'
                      : 'При виникненні несподіваних реакцій або ускладнень необхідно негайно повідомити в NataLux. Відповідальність за побічний збиток, що виник через пізнє повідомлення, виключається в межах, допустимих законом.'}
                  </p>
                </div>
              </section>

              {/* Warranty */}
              <section>
                <h2 className="text-2xl font-heading font-semibold text-brand-espresso mb-4 flex items-center gap-2">
                  <Clock className="w-6 h-6 text-brand-gold" />
                  {language === 'de' ? '7. Gewährleistung' : language === 'ru' ? '7. Гарантия' : '7. Гарантія'}
                </h2>
                <p className="leading-relaxed mb-4">
                  {language === 'de'
                    ? 'Bei Permanent Make-Up kann je nach Hauttyp und individuellen Faktoren eine Nachbehandlung sinnvoll sein. Diese erfolgt gegen gesonderte Vergütung gemäß der aktuellen Preisliste.'
                    : language === 'ru'
                    ? 'При перманентном макияже в зависимости от типа кожи и индивидуальных факторов может быть целесообразна коррекция. Она проводится за отдельную плату согласно актуальному прайс-листу.'
                    : 'При перманентному макіяжі залежно від типу шкіри та індивідуальних факторів може бути доцільна корекція. Вона проводиться за окрему плату згідно з актуальним прайс-листом.'}
                </p>
                <p className="leading-relaxed mb-4">
                  {language === 'de'
                    ? 'Das Ergebnis von Beauty-Behandlungen kann individuell variieren und hängt von verschiedenen Faktoren ab (Hauttyp, Stoffwechsel, Lebensweise, Nachsorge). Eine Garantie für ein bestimmtes Ergebnis kann daher nicht gegeben werden.'
                    : language === 'ru'
                    ? 'Результат косметических процедур может варьироваться индивидуально и зависит от различных факторов (тип кожи, метаболизм, образ жизни, последующий уход). Поэтому гарантия конкретного результата не может быть дана.'
                    : 'Результат косметичних процедур може варіюватися індивідуально та залежить від різних факторів (тип шкіри, метаболізм, спосіб життя, подальший догляд). Тому гарантія конкретного результату не може бути дана.'}
                </p>
                <p className="leading-relaxed">
                  {language === 'de'
                    ? 'Bei berechtigten Reklamationen wird eine kostenfreie Nachbehandlung angeboten. Weitergehende Ansprüche sind ausgeschlossen, sofern keine grobe Fahrlässigkeit oder Vorsatz vorliegt.'
                    : language === 'ru'
                    ? 'При обоснованных жалобах предлагается бесплатная дополнительная процедура. Дальнейшие претензии исключаются, если не было грубой небрежности или умысла.'
                    : 'При обґрунтованих скаргах пропонується безкоштовна додаткова процедура. Подальші претензії виключаються, якщо не було грубої недбалості або умислу.'}
                </p>
              </section>

              {/* Photos and Marketing */}
              <section>
                <h2 className="text-2xl font-heading font-semibold text-brand-espresso mb-4">
                  {language === 'de' ? '8. Foto- und Videoaufnahmen' : language === 'ru' ? '8. Фото и видео' : '8. Фото та відео'}
                </h2>
                <p className="leading-relaxed mb-4">
                  {language === 'de'
                    ? 'Foto- und Videoaufnahmen von Behandlungsergebnissen erfolgen nur mit vorheriger ausdrücklicher schriftlicher Einwilligung des Kunden.'
                    : language === 'ru'
                    ? 'Фото и видео результатов процедур делаются только с предварительного явного письменного согласия клиента.'
                    : 'Фото та відео результатів процедур робляться тільки з попередньої явної письмової згоди клієнта.'}
                </p>
                <p className="leading-relaxed mb-4">
                  {language === 'de'
                    ? 'Die Einwilligung kann jederzeit für die Zukunft widerrufen werden.'
                    : language === 'ru'
                    ? 'Согласие может быть отозвано в любое время на будущее.'
                    : 'Згода може бути відкликана в будь-який час на майбутнє.'}
                </p>
                <p className="leading-relaxed">
                  {language === 'de'
                    ? 'Ein Widerruf berührt nicht die Rechtmäßigkeit der bis zum Widerruf erfolgten Veröffentlichung.'
                    : language === 'ru'
                    ? 'Отзыв не влияет на правомерность публикаций, сделанных до отзыва.'
                    : 'Відкликання не впливає на правомірність публікацій, зроблених до відкликання.'}
                </p>
              </section>

              {/* Data Protection */}
              <section>
                <h2 className="text-2xl font-heading font-semibold text-brand-espresso mb-4">
                  {language === 'de' ? '9. Datenschutz' : language === 'ru' ? '9. Защита данных' : '9. Захист даних'}
                </h2>
                <p className="leading-relaxed">
                  {language === 'de'
                    ? 'Die Erhebung und Verarbeitung personenbezogener Daten erfolgt gemäß unserer Datenschutzerklärung und den Bestimmungen der DSGVO. Weitere Informationen finden Sie in unserer '
                    : language === 'ru'
                    ? 'Сбор и обработка персональных данных осуществляются в соответствии с нашей политикой конфиденциальности и положениями GDPR. Дополнительную информацию вы найдете в нашей '
                    : 'Збір та обробка персональних даних здійснюються відповідно до нашої політики конфіденційності та положень GDPR. Додаткову інформацію ви знайдете в нашій '}
                  <a href="/datenschutz" className="text-brand-gold hover:underline font-medium">
                    {language === 'de' ? 'Datenschutzerklärung' : language === 'ru' ? 'политике конфиденциальности' : 'політиці конфіденційності'}
                  </a>
                  .
                </p>
              </section>

              {/* Hygiene */}
              <section>
                <h2 className="text-2xl font-heading font-semibold text-brand-espresso mb-4">
                  {language === 'de' ? '10. Hygiene und Sicherheit' : language === 'ru' ? '10. Гигиена и безопасность' : '10. Гігієна та безпека'}
                </h2>
                <p className="leading-relaxed">
                  {language === 'de'
                    ? 'Alle Behandlungen werden unter Einhaltung höchster Hygiene- und Sicherheitsstandards durchgeführt. Es werden ausschließlich hochwertige, geprüfte Produkte und sterile Einmalprodukte verwendet.'
                    : language === 'ru'
                    ? 'Все процедуры проводятся с соблюдением высочайших стандартов гигиены и безопасности. Используются исключительно качественные, проверенные продукты и стерильные одноразовые изделия.'
                    : 'Всі процедури проводяться з дотриманням найвищих стандартів гігієни та безпеки. Використовуються виключно якісні, перевірені продукти та стерильні одноразові вироби.'}
                </p>
              </section>

              {/* Severability */}
              <section>
                <h2 className="text-2xl font-heading font-semibold text-brand-espresso mb-4">
                  {language === 'de' ? '11. Salvatorische Klausel' : language === 'ru' ? '11. Сохранение действия' : '11. Збереження дії'}
                </h2>
                <p className="leading-relaxed">
                  {language === 'de'
                    ? 'Sollten einzelne Bestimmungen dieser AGB ganz oder teilweise unwirksam sein oder werden, bleibt die Wirksamkeit der übrigen Bestimmungen unberührt.'
                    : language === 'ru'
                    ? 'Если отдельные положения этих Общих условий полностью или частично являются или станут недействительными, это не влияет на действительность остальных положений.'
                    : 'Якщо окремі положення цих Загальних умов повністю або частково є або стануть недійсними, це не впливає на дійсність решти положень.'}
                </p>
              </section>

              {/* Applicable Law */}
              <section>
                <h2 className="text-2xl font-heading font-semibold text-brand-espresso mb-4">
                  {language === 'de' ? '12. Anwendbares Recht und Gerichtsstand' : language === 'ru' ? '12. Применимое право и юрисдикция' : '12. Застосовне право та юрисдикція'}
                </h2>
                <p className="leading-relaxed">
                  {language === 'de'
                    ? 'Es gilt das Recht der Bundesrepublik Deutschland. Gerichtsstand ist München, sofern der Kunde Kaufmann, juristische Person des öffentlichen Rechts oder öffentlich-rechtliches Sondervermögen ist.'
                    : language === 'ru'
                    ? 'Применяется законодательство Федеративной Республики Германия. Местом юрисдикции является Мюнхен, если клиент является коммерсантом, юридическим лицом публичного права или государственным специальным фондом.'
                    : 'Застосовується законодавство Федеративної Республіки Німеччина. Місцем юрисдикції є Мюнхен, якщо клієнт є комерсантом, юридичною особою публічного права або державним спеціальним фондом.'}
                </p>
              </section>

              {/* Dispute Resolution -- § 36 VSBG */}
              <section>
                <h2 className="text-2xl font-heading font-semibold text-brand-espresso mb-4">
                  {language === 'de'
                    ? '13. Streitbeilegung (§ 36 VSBG)'
                    : language === 'ru'
                    ? '13. Разрешение споров (§ 36 VSBG)'
                    : '13. Вирішення спорів (§ 36 VSBG)'}
                </h2>
                <p className="leading-relaxed">
                  {language === 'de'
                    ? 'Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.'
                    : language === 'ru'
                    ? 'Мы не готовы и не обязаны участвовать в процедурах разрешения споров перед комиссией по урегулированию споров потребителей.'
                    : 'Ми не готові і не зобов\'язані брати участь у процедурах вирішення спорів перед комісією з врегулювання спорів споживачів.'}
                </p>
              </section>

              {/* Contact */}
              <section className="bg-brand-gold/5 p-6 rounded-2xl">
                <h2 className="text-2xl font-heading font-semibold text-brand-espresso mb-4">
                  {language === 'de' ? '14. Fragen zu den AGB?' : language === 'ru' ? '14. Вопросы об условиях?' : '14. Питання про умови?'}
                </h2>
                <p className="leading-relaxed mb-4">
                  {language === 'de'
                    ? 'Bei Fragen zu unseren Allgemeinen Geschäftsbedingungen stehen wir Ihnen gerne zur Verfügung:'
                    : language === 'ru'
                    ? 'При вопросах о наших Общих условиях мы с удовольствием будем к вашим услугам:'
                    : 'При питаннях про наші Загальні умови ми з задоволенням будемо до ваших послуг:'}
                </p>
                <div className="space-y-2">
                  <p className="font-medium">
                    {language === 'de' ? 'Nataliia Koziukevych' : language === 'ru' ? 'Наталия Козюкевич' : 'Наталія Козюкевич'}
                  </p>
                  <p className="text-sm">natali.lux@web.de</p>
                  <p className="text-sm">+49 176 77267269</p>
                </div>
              </section>

              {/* Last Updated */}
              <section className="text-sm text-brand-coffee/60 pt-4 border-t border-brand-gold/10">
                <p>
                  {language === 'de' ? 'Stand: Februar 2026' : language === 'ru' ? 'Состояние: февраль 2026 года' : 'Стан: лютий 2026 року'}
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
