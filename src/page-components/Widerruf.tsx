'use client'

import { useLanguage } from '@/contexts/LanguageContext';
import { RotateCcw } from 'lucide-react';

const Widerruf = () => {
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
                <RotateCcw className="w-10 h-10 text-brand-gold" />
                <h1 className="text-3xl md:text-5xl font-heading font-semibold text-brand-espresso">
                  {language === 'de' ? 'Widerrufsbelehrung' : language === 'ru' ? 'Информация о праве на отзыв' : 'Інформація про право на відкликання'}
                </h1>
              </div>
              <p className="text-brand-coffee/70">
                {language === 'de'
                  ? 'Gültig für Warenbestellungen bei NataLux'
                  : language === 'ru'
                  ? 'Действительно для заказов товаров в NataLux'
                  : 'Дійсно для замовлень товарів у NataLux'}
              </p>
            </div>

            {/* Content */}
            <div className="space-y-8 text-brand-coffee/80">
              {/* Widerrufsrecht */}
              <section>
                <h2 className="text-2xl font-heading font-semibold text-brand-espresso mb-4">
                  {language === 'de' ? '1. Widerrufsrecht' : language === 'ru' ? '1. Право на отзыв' : '1. Право на відкликання'}
                </h2>
                <p className="leading-relaxed mb-4">
                  {language === 'de'
                    ? 'Sie haben das Recht, binnen vierzehn Tagen ohne Angabe von Gründen diesen Vertrag zu widerrufen. Die Widerrufsfrist beträgt vierzehn Tage ab dem Tag, an dem Sie oder ein von Ihnen benannter Dritter, der nicht der Beförderer ist, die Waren in Besitz genommen haben bzw. hat.'
                    : language === 'ru'
                    ? 'Вы имеете право отозвать настоящий договор в течение четырнадцати дней без указания причин. Срок для отзыва составляет четырнадцать дней с момента, когда вы или указанное вами третье лицо, не являющееся перевозчиком, вступили во владение товаром.'
                    : 'Ви маєте право відкликати цей договір протягом чотирнадцяти днів без зазначення причин. Строк для відкликання становить чотирнадцять днів з моменту, коли ви або вказана вами третя особа, яка не є перевізником, вступили у володіння товаром.'}
                </p>
                <p className="leading-relaxed mb-4">
                  {language === 'de'
                    ? 'Um Ihr Widerrufsrecht auszuüben, müssen Sie uns'
                    : language === 'ru'
                    ? 'Для осуществления права на отзыв вы должны уведомить нас'
                    : 'Для здійснення права на відкликання ви повинні повідомити нас'}
                </p>
                <div className="bg-brand-gold/10 p-4 rounded-xl mb-4">
                  <p className="font-semibold text-brand-espresso">NataLux – Nataliia Koziukevych</p>
                  <p className="text-sm">Rosenheimerstraße 159, 81671 München</p>
                  <p className="text-sm">E-Mail: natali.lux@web.de</p>
                  <p className="text-sm">Telefon: +49 176 77267269</p>
                </div>
                <p className="leading-relaxed mb-4">
                  {language === 'de'
                    ? 'mittels einer eindeutigen Erklärung (z.B. ein mit der Post versandter Brief oder E-Mail) über Ihren Entschluss, diesen Vertrag zu widerrufen, informieren. Sie können dafür das beigefügte Muster-Widerrufsformular verwenden, das jedoch nicht vorgeschrieben ist.'
                    : language === 'ru'
                    ? 'посредством однозначного заявления (например, письмом, отправленным по почте, или электронным письмом) о вашем решении отозвать настоящий договор. Для этого вы можете использовать прилагаемый образец формы отзыва, который, однако, не является обязательным.'
                    : 'за допомогою однозначної заяви (наприклад, листом, надісланим поштою, або електронним листом) про ваше рішення відкликати цей договір. Для цього ви можете використати доданий зразок форми відкликання, який, однак, не є обов\'язковим.'}
                </p>
                <p className="leading-relaxed">
                  {language === 'de'
                    ? 'Zur Wahrung der Widerrufsfrist reicht es aus, dass Sie die Mitteilung über die Ausübung des Widerrufsrechts vor Ablauf der Widerrufsfrist absenden.'
                    : language === 'ru'
                    ? 'Для соблюдения срока отзыва достаточно, чтобы вы отправили уведомление об осуществлении права на отзыв до истечения срока отзыва.'
                    : 'Для дотримання строку відкликання достатньо, щоб ви надіслали повідомлення про здійснення права на відкликання до закінчення строку відкликання.'}
                </p>
              </section>

              {/* Folgen des Widerrufs */}
              <section>
                <h2 className="text-2xl font-heading font-semibold text-brand-espresso mb-4">
                  {language === 'de' ? '2. Folgen des Widerrufs' : language === 'ru' ? '2. Последствия отзыва' : '2. Наслідки відкликання'}
                </h2>
                <p className="leading-relaxed mb-4">
                  {language === 'de'
                    ? 'Wenn Sie diesen Vertrag widerrufen, haben wir Ihnen alle Zahlungen, die wir von Ihnen erhalten haben, einschließlich der Lieferkosten (mit Ausnahme der zusätzlichen Kosten, die sich daraus ergeben, dass Sie eine andere Art der Lieferung als die von uns angebotene, günstigste Standardlieferung gewählt haben), unverzüglich und spätestens binnen vierzehn Tagen ab dem Tag zurückzuzahlen, an dem die Mitteilung über Ihren Widerruf dieses Vertrags bei uns eingegangen ist.'
                    : language === 'ru'
                    ? 'Если вы отзовёте настоящий договор, мы обязаны возвратить вам все платежи, которые мы получили от вас, включая стоимость доставки (за исключением дополнительных расходов, возникших в результате того, что вы выбрали способ доставки, отличный от предложенной нами наиболее выгодной стандартной доставки), незамедлительно и не позднее четырнадцати дней с момента получения нами уведомления о вашем отзыве настоящего договора.'
                    : 'Якщо ви відкликаєте цей договір, ми зобов\'язані повернути вам усі платежі, які ми отримали від вас, включаючи вартість доставки (за винятком додаткових витрат, що виникли внаслідок того, що ви обрали спосіб доставки, відмінний від запропонованої нами найвигіднішої стандартної доставки), негайно і не пізніше чотирнадцяти днів з моменту отримання нами повідомлення про ваше відкликання цього договору.'}
                </p>
                <p className="leading-relaxed mb-4">
                  {language === 'de'
                    ? 'Für diese Rückzahlung verwenden wir dasselbe Zahlungsmittel, das Sie bei der ursprünglichen Transaktion eingesetzt haben, es sei denn, mit Ihnen wurde ausdrücklich etwas anderes vereinbart; in keinem Fall werden Ihnen wegen dieser Rückzahlung Entgelte berechnet.'
                    : language === 'ru'
                    ? 'Для возврата мы используем тот же способ оплаты, который вы использовали при первоначальной транзакции, если только с вами явно не было согласовано иное; в любом случае вам не будут начислены комиссии за этот возврат.'
                    : 'Для повернення ми використовуємо той самий спосіб оплати, який ви використовували при початковій транзакції, якщо тільки з вами явно не було узгоджено інше; у жодному разі вам не будуть нараховані комісії за це повернення.'}
                </p>
                <p className="leading-relaxed">
                  {language === 'de'
                    ? 'Sie haben die Waren unverzüglich und in jedem Fall spätestens binnen vierzehn Tagen ab dem Tag, an dem Sie uns über den Widerruf dieses Vertrags unterrichten, an uns zurückzusenden oder zu übergeben. Die Frist ist gewahrt, wenn Sie die Waren vor Ablauf der Frist von vierzehn Tagen absenden. Sie tragen die unmittelbaren Kosten der Rücksendung der Waren.'
                    : language === 'ru'
                    ? 'Вы обязаны вернуть или передать нам товар незамедлительно и в любом случае не позднее четырнадцати дней со дня, когда вы уведомили нас об отзыве настоящего договора. Срок считается соблюдённым, если вы отправите товар до истечения четырнадцатидневного срока. Вы несёте непосредственные расходы по возврату товара.'
                    : 'Ви зобов\'язані повернути або передати нам товар негайно і в будь-якому разі не пізніше чотирнадцяти днів з дня, коли ви повідомили нас про відкликання цього договору. Строк вважається дотриманим, якщо ви відправите товар до закінчення чотирнадцятиденного строку. Ви несете безпосередні витрати з повернення товару.'}
                </p>
              </section>

              {/* Ausnahmen vom Widerrufsrecht */}
              <section>
                <h2 className="text-2xl font-heading font-semibold text-brand-espresso mb-4">
                  {language === 'de' ? '3. Ausnahmen vom Widerrufsrecht' : language === 'ru' ? '3. Исключения из права на отзыв' : '3. Винятки з права на відкликання'}
                </h2>

                <div className="space-y-4">
                  {/* Versiegelte Hygieneprodukte */}
                  <div className="bg-brand-gold/10 p-5 rounded-xl">
                    <h3 className="text-lg font-semibold text-brand-espresso mb-2">
                      {language === 'de'
                        ? 'a) Versiegelte Hygieneprodukte (§ 312g Abs. 2 Nr. 3 BGB)'
                        : language === 'ru'
                        ? 'a) Запечатанные гигиенические товары (§ 312g Abs. 2 Nr. 3 BGB)'
                        : 'a) Запечатані гігієнічні товари (§ 312g Abs. 2 Nr. 3 BGB)'}
                    </h3>
                    <p className="leading-relaxed text-sm">
                      {language === 'de'
                        ? 'Das Widerrufsrecht besteht nicht bei Verträgen zur Lieferung versiegelter Waren, die aus Gründen des Gesundheitsschutzes oder der Hygiene nicht zur Rückgabe geeignet sind, wenn ihre Versiegelung nach der Lieferung entfernt wurde. Dies gilt insbesondere für geöffnete Kosmetikprodukte.'
                        : language === 'ru'
                        ? 'Право на отзыв не распространяется на договоры поставки запечатанных товаров, которые по соображениям охраны здоровья или гигиены не подлежат возврату, если их упаковка была вскрыта после доставки. Это относится, в частности, к вскрытым косметическим продуктам.'
                        : 'Право на відкликання не поширюється на договори постачання запечатаних товарів, які з міркувань охорони здоров\'я або гігієни не підлягають поверненню, якщо їх упаковку було розкрито після доставки. Це стосується, зокрема, розкритих косметичних продуктів.'}
                    </p>
                  </div>

                  {/* Termingebundene Dienstleistungen */}
                  <div className="bg-brand-gold/10 p-5 rounded-xl">
                    <h3 className="text-lg font-semibold text-brand-espresso mb-2">
                      {language === 'de'
                        ? 'b) Termingebundene Dienstleistungen (§ 312g Abs. 2 Nr. 9 BGB)'
                        : language === 'ru'
                        ? 'b) Услуги с фиксированной датой (§ 312g Abs. 2 Nr. 9 BGB)'
                        : 'b) Послуги з фіксованою датою (§ 312g Abs. 2 Nr. 9 BGB)'}
                    </h3>
                    <p className="leading-relaxed text-sm">
                      {language === 'de'
                        ? 'Das Widerrufsrecht besteht nicht bei Verträgen zur Erbringung von Dienstleistungen im Zusammenhang mit Freizeitbetätigungen, wenn der Vertrag für die Erbringung einen bestimmten Termin vorsieht. Dies gilt für alle gebuchten Behandlungstermine in unserem Studio (Wimpernverlängerung, Permanent Make-up, Laserbehandlungen, Anti-Aging-Behandlungen etc.). Für die Stornierung gebuchter Termine gelten unsere AGB.'
                        : language === 'ru'
                        ? 'Право на отзыв не распространяется на договоры об оказании услуг, связанных с проведением досуга, если договор предусматривает определённую дату оказания услуги. Это относится ко всем забронированным процедурам в нашей студии (наращивание ресниц, перманентный макияж, лазерные процедуры, процедуры anti-aging и др.). Для отмены забронированных процедур действуют наши Общие условия.'
                        : 'Право на відкликання не поширюється на договори про надання послуг, пов\'язаних із проведенням дозвілля, якщо договір передбачає певну дату надання послуги. Це стосується всіх заброньованих процедур у нашій студії (нарощування вій, перманентний макіяж, лазерні процедури, процедури anti-aging тощо). Для скасування заброньованих процедур діють наші Загальні умови.'}
                    </p>
                  </div>
                </div>
              </section>

              {/* Muster-Widerrufsformular */}
              <section>
                <h2 className="text-2xl font-heading font-semibold text-brand-espresso mb-4">
                  {language === 'de'
                    ? '4. Muster-Widerrufsformular'
                    : language === 'ru'
                    ? '4. Образец формы отзыва'
                    : '4. Зразок форми відкликання'}
                </h2>
                <p className="leading-relaxed mb-4 text-sm italic">
                  {language === 'de'
                    ? '(Wenn Sie den Vertrag widerrufen wollen, dann füllen Sie bitte dieses Formular aus und senden Sie es zurück.)'
                    : language === 'ru'
                    ? '(Если вы хотите отозвать договор, пожалуйста, заполните эту форму и отправьте её обратно.)'
                    : '(Якщо ви хочете відкликати договір, будь ласка, заповніть цю форму і надішліть її назад.)'}
                </p>
                <div className="bg-white/80 border border-brand-gold/20 p-6 rounded-xl space-y-3">
                  <p className="font-semibold text-brand-espresso">
                    {language === 'de' ? 'An:' : language === 'ru' ? 'Кому:' : 'Кому:'}
                  </p>
                  <p className="text-sm">
                    NataLux – Nataliia Koziukevych<br />
                    Rosenheimerstraße 159, 81671 München<br />
                    E-Mail: natali.lux@web.de
                  </p>
                  <div className="border-t border-brand-gold/10 pt-3 space-y-2 text-sm">
                    <p>
                      {language === 'de'
                        ? 'Hiermit widerrufe(n) ich/wir (*) den von mir/uns (*) abgeschlossenen Vertrag über den Kauf der folgenden Waren (*)/ die Erbringung der folgenden Dienstleistung (*)'
                        : language === 'ru'
                        ? 'Настоящим я/мы (*) отзываю(ем) заключённый мною/нами (*) договор о покупке следующих товаров (*) / оказании следующей услуги (*)'
                        : 'Цим я/ми (*) відкликаю(ємо) укладений мною/нами (*) договір про купівлю наступних товарів (*) / надання наступної послуги (*)'}
                    </p>
                    <p className="text-brand-coffee/50">_______________________________________________</p>
                    <p>
                      {language === 'de'
                        ? 'Bestellt am (*) / erhalten am (*)'
                        : language === 'ru'
                        ? 'Заказано (*) / получено (*)'
                        : 'Замовлено (*) / отримано (*)'}
                    </p>
                    <p className="text-brand-coffee/50">_______________________________________________</p>
                    <p>
                      {language === 'de'
                        ? 'Name des/der Verbraucher(s)'
                        : language === 'ru'
                        ? 'Имя потребителя(ей)'
                        : 'Ім\'я споживача(ів)'}
                    </p>
                    <p className="text-brand-coffee/50">_______________________________________________</p>
                    <p>
                      {language === 'de'
                        ? 'Anschrift des/der Verbraucher(s)'
                        : language === 'ru'
                        ? 'Адрес потребителя(ей)'
                        : 'Адреса споживача(ів)'}
                    </p>
                    <p className="text-brand-coffee/50">_______________________________________________</p>
                    <p>
                      {language === 'de'
                        ? 'Unterschrift des/der Verbraucher(s) (nur bei Mitteilung auf Papier)'
                        : language === 'ru'
                        ? 'Подпись потребителя(ей) (только при уведомлении на бумаге)'
                        : 'Підпис споживача(ів) (тільки при повідомленні на папері)'}
                    </p>
                    <p className="text-brand-coffee/50">_______________________________________________</p>
                    <p>
                      {language === 'de' ? 'Datum' : language === 'ru' ? 'Дата' : 'Дата'}
                    </p>
                    <p className="text-brand-coffee/50">_______________________________________________</p>
                    <p className="text-xs italic text-brand-coffee/50 mt-2">
                      {language === 'de'
                        ? '(*) Unzutreffendes streichen.'
                        : language === 'ru'
                        ? '(*) Ненужное зачеркнуть.'
                        : '(*) Непотрібне закреслити.'}
                    </p>
                  </div>
                </div>
              </section>

              {/* Hinweis */}
              <section className="bg-brand-gold/5 p-6 rounded-2xl">
                <h2 className="text-2xl font-heading font-semibold text-brand-espresso mb-4">
                  {language === 'de' ? '5. Fragen zum Widerruf?' : language === 'ru' ? '5. Вопросы об отзыве?' : '5. Питання про відкликання?'}
                </h2>
                <p className="leading-relaxed mb-4">
                  {language === 'de'
                    ? 'Bei Fragen zum Widerrufsrecht wenden Sie sich bitte an uns:'
                    : language === 'ru'
                    ? 'По вопросам права на отзыв обращайтесь к нам:'
                    : 'З питань права на відкликання звертайтеся до нас:'}
                </p>
                <div className="flex flex-col gap-2">
                  <a href="mailto:natali.lux@web.de" className="text-brand-gold hover:underline">
                    natali.lux@web.de
                  </a>
                  <a href="tel:+4917677267269" className="text-brand-gold hover:underline">
                    +49 176 77267269
                  </a>
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

export default Widerruf;
