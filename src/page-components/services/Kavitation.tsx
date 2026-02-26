'use client'

import { ServicePageLayout } from '@/components/ServicePageLayout';
import { Waves, Star, Zap, Droplet } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { ServiceCard } from '@/components/ServiceCard';
import { ProcedureSchema } from '@/components/ProcedureSchema';
import { PremiumGallery } from '@/components/PremiumGallery';

const Kavitation = () => {
  const { language } = useLanguage();

  // Schema section with 2 images
  const SchemaSection = () => (
    <ProcedureSchema
      germanImages={['/188.jpg', '/189 1.jpg']}
      russianImages={['/188 1.jpg', '/189.jpg']}
      altTextGerman="Kavitation Schema"
      altTextRussian="Схема кавитации"
      scale={0.25}
    />
  );

  // Additional sections with gallery and recommended services
  const AdditionalSections = () => (
    <>
      <PremiumGallery
        images={['/173.jpeg', '/171.jpeg', '/172.jpeg']}
        title={language === 'de' ? 'Unsere Arbeiten' : language === 'ru' ? 'Наши работы' : 'Наші роботи'}
      />
      <div className="mt-12">
        <h2 className="text-2xl md:text-3xl font-heading font-semibold text-brand-espresso mb-6 text-center">
          {language === 'de' ? 'Empfohlene Kombinationen' : language === 'ru' ? 'Рекомендуемые комбинации' : 'Рекомендовані комбінації'}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ServiceCard
            title="RF-Vakuum"
            description={language === 'de' ? 'Radiofrequenz mit Vakuum für Cellulite-Reduktion' : language === 'ru' ? 'Радиочастоты с вакуумом для уменьшения целлюлита' : 'Радіочастоти з вакуумом для зменшення целюліту'}
            icon={Star}
            href="/services/koerperbehandlungen/rf-vakuum"
            image="/83.jpg"
          />
          <ServiceCard
            title="RF-Lifting"
            description={language === 'de' ? 'Radiofrequenz für Hautstraffung' : language === 'ru' ? 'Радиочастоты для подтяжки кожи' : 'Радіочастоти для підтяжки шкіри'}
            icon={Zap}
            href="/services/apparative-anti-aging/rf-lifting"
            image="/162.jpeg"
          />
          <ServiceCard
            title={language === 'de' ? 'Ultraschall' : language === 'ru' ? 'Ультразвук' : 'Ультразвук'}
            description={language === 'de' ? 'Tiefenwirksame Hautpflege' : language === 'ru' ? 'Глубокий уход за кожей' : 'Глибокий догляд за шкірою'}
            icon={Droplet}
            href="/services/apparative-anti-aging/ultraschall"
            image="/126.jpeg"
          />
        </div>
      </div>
    </>
  );

  return (
    <ServicePageLayout
      icon={Waves}
      title={language === 'de' ? "Ultraschallkavitation in München — sicheres Body-Contouring ohne Operation" : language === 'ru' ? "Кавитация в Мюнхене — безопасное моделирование тела с помощью ультразвука" : "Кавітація у Мюнхені — безпечне моделювання тіла за допомогою ультразвуку"}
      subtitle={language === 'de' ? "Effektive Fettreduktion und Körperformung mit modernster Ultraschalltechnologie in München-Haidhausen" : language === 'ru' ? "Эффективная коррекция фигуры и моделирование тела с помощью современной ультразвуковой технологии в Мюнхене-Хайдхаузен" : "Ефективна корекція фігури та моделювання тіла за допомогою сучасної ультразвукової технології у Мюнхені-Хайдхаузен"}
      aboutTitle={language === 'de' ? "Was ist Ultraschallkavitation?" : language === 'ru' ? "Что такое ультразвуковая кавитация" : "Що таке ультразвукова кавітація"}
      aboutDescription={[
        language === 'de'
          ? 'Ultraschallkavitation ist eine nicht-invasive Methode zur gezielten Fettreduktion mit niederfrequentem Ultraschall (28–40 kHz). Die Ultraschallwellen erzeugen Kavitationsblasen, die Fettzellen sanft zerstören — ohne Operation, ohne Schnitte, ohne Ausfallzeiten.'
          : language === 'ru'
            ? 'Ультразвуковая кавитация — это неинвазивный метод целенаправленного уменьшения жира с помощью низкочастотного ультразвука (28–40 кГц). Ультразвуковые волны создают кавитационные пузырьки, которые мягко разрушают жировые клетки — без операции, без разрезов, без реабилитации.'
            : 'Ультразвукова кавітація — це неінвазивний метод цілеспрямованого зменшення жиру за допомогою низькочастотного ультразвуку (28–40 кГц). Ультразвукові хвилі створюють кавітаційні бульбашки, які м\'яко руйнують жирові клітини — без операції, без розрізів, без реабілітації.',

        language === 'de'
          ? 'Das freigesetzte Fett wird vom Körper natürlich über Lymphe, Leber und Nieren ausgeschieden (3–7 Tage). Wichtig: viel Wasser trinken, moderate Bewegung, gesunde Ernährung.'
          : language === 'ru'
            ? 'Высвобожденный жир естественным образом выводится организмом через лимфу, печень и почки (3–7 дней). Важно: пить много воды, умеренное движение, здоровое питание.'
            : 'Вивільнений жир природним чином виводиться організмом через лімфу, печінку та нирки (3–7 днів). Важливо: пити багато води, помірний рух, здорове харчування.',

        language === 'de'
          ? 'Ideal für hartnäckige Problemzonen bei BMI 18–30. Typische Zonen: Bauch, Hüften, Oberschenkel, Gesäß, Arme. Kombinierbar mit RF-Lifting, Vakuum-Therapie und Lymphdrainage.'
          : language === 'ru'
            ? 'Идеально для упорных проблемных зон при ИМТ 18–30. Типичные зоны: живот, бёдра, галифе, ягодицы, руки. Можно комбинировать с RF-лифтингом, вакуумной терапией и лимфодренажем.'
            : 'Ідеально для наполегливих проблемних зон при ІМТ 18–30. Типові зони: живіт, стегна, галіфе, сідниці, руки. Можна поєднувати з RF-ліфтингом, вакуумною терапією та лімфодренажем.'
      ]}
      benefits={[
        language === 'de' ? 'Gezielte Fettreduktion ohne Operation' : language === 'ru' ? 'Целенаправленное уменьшение жира без операции' : 'Цілеспрямоване зменшення жиру без операції',
        language === 'de' ? 'Umfangsreduktion 2–6 cm pro Zone' : language === 'ru' ? 'Уменьшение объёмов 2–6 см за зону' : 'Зменшення об\'ємів 2–6 см за зону',
        language === 'de' ? 'Reduzierung von Cellulite' : language === 'ru' ? 'Уменьшение целлюлита' : 'Зменшення целюліту',
        language === 'de' ? 'Völlig schmerzfrei und entspannend' : language === 'ru' ? 'Абсолютно безболезненно' : 'Абсолютно безболісно',
        language === 'de' ? 'Keine Ausfallzeiten' : language === 'ru' ? 'Без реабилитации' : 'Без реабілітації',
        language === 'de' ? 'Sichere Alternative zur Liposuktion' : language === 'ru' ? 'Безопасная альтернатива липосакции' : 'Безпечна альтернатива ліпосакції',
        language === 'de' ? 'Sichtbare Ergebnisse nach 3–4 Behandlungen' : language === 'ru' ? 'Видимые результаты после 3–4 процедур' : 'Видимі результати після 3–4 процедур'
      ]}
      steps={[
        {
          title: language === 'de' ? '1. Beratung und Vermessung' : language === 'ru' ? '1. Консультация и замеры' : '1. Консультація та заміри',
          description: language === 'de'
            ? 'Analyse der Problemzonen, Messung der Umfänge, Besprechung der Ziele.'
            : language === 'ru'
              ? 'Анализ проблемных зон, измерение объёмов, обсуждение целей.'
              : 'Аналіз проблемних зон, вимірювання об\'ємів, обговорення цілей.'
        },
        {
          title: language === 'de' ? '2. Vorbereitung' : language === 'ru' ? '2. Подготовка' : '2. Підготовка',
          description: language === 'de'
            ? 'Reinigung der Zone und Auftragen des Ultraschall-Gels.'
            : language === 'ru'
              ? 'Очищение зоны и нанесение ультразвукового геля.'
              : 'Очищення зони та нанесення ультразвукового гелю.'
        },
        {
          title: language === 'de' ? '3. Kavitation (30-60 Min.)' : language === 'ru' ? '3. Кавитация (30-60 мин.)' : '3. Кавітація (30-60 хв.)',
          description: language === 'de'
            ? 'Sanfte Behandlung mit Ultraschall. Völlig schmerzfrei.'
            : language === 'ru'
              ? 'Мягкая обработка ультразвуком. Абсолютно безболезненно.'
              : 'М\'яка обробка ультразвуком. Абсолютно безболісно.'
        },
        {
          title: language === 'de' ? '4. Nachbehandlung' : language === 'ru' ? '4. Последующий уход' : '4. Подальший догляд',
          description: language === 'de'
            ? 'Optional Kombination mit Lymphdrainage, RF-Lifting oder Vakuum-Therapie.'
            : language === 'ru'
              ? 'Опционально комбинация с лимфодренажем, RF-лифтингом или вакуумной терапией.'
              : 'За бажанням поєднання з лімфодренажем, RF-ліфтингом або вакуумною терапією.'
        },
        {
          title: language === 'de' ? '5. Empfehlungen' : language === 'ru' ? '5. Рекомендации' : '5. Рекомендації',
          description: language === 'de'
            ? 'Viel Wasser, Bewegung, gesunde Ernährung. Kur: 8–12 Behandlungen, 1× pro Woche.'
            : language === 'ru'
              ? 'Много воды, движение, здоровое питание. Курс: 8–12 процедур, 1× в неделю.'
              : 'Багато води, рух, здорове харчування. Курс: 8–12 процедур, 1× на тиждень.'
        }
      ]}
      procedureSchema={<SchemaSection />}
      additionalSections={<AdditionalSections />}
      priceSection="body-treatments"
      contraindications={[
        language === 'de' ? 'Schwangerschaft und Stillzeit' : language === 'ru' ? 'Беременность и кормление грудью' : 'Вагітність та годування грудьми',
        language === 'de' ? 'Herzschrittmacher oder implantierte elektronische Geräte' : language === 'ru' ? 'Кардиостимулятор или имплантированные электронные устройства' : 'Кардіостимулятор або імплантовані електронні пристрої',
        language === 'de' ? 'Leber- oder Nierenerkrankungen (Fettstoffwechsel wird über Leber/Nieren abgebaut)' : language === 'ru' ? 'Заболевания печени или почек (метаболизм жиров происходит через печень/почки)' : 'Захворювання печінки або нирок (метаболізм жирів відбувається через печінку/нирки)',
        language === 'de' ? 'Diabetes oder schwere Stoffwechselerkrankungen' : language === 'ru' ? 'Диабет или тяжёлые метаболические заболевания' : 'Діабет або тяжкі метаболічні захворювання',
        language === 'de' ? 'Thrombose, Krampfadern oder schwere Venenerkrankungen im Behandlungsbereich' : language === 'ru' ? 'Тромбоз, варикоз или тяжёлые заболевания вен в зоне обработки' : 'Тромбоз, варикоз або тяжкі захворювання вен у зоні обробки',
        language === 'de' ? 'Krebs, Chemotherapie oder Strahlentherapie' : language === 'ru' ? 'Онкология, химиотерапия или лучевая терапия' : 'Онкологія, хіміотерапія або променева терапія',
        language === 'de' ? 'Epilepsie oder neurologische Erkrankungen' : language === 'ru' ? 'Эпилепсия или неврологические заболевания' : 'Епілепсія або неврологічні захворювання',
        language === 'de' ? 'Frische Operationen im Behandlungsbereich (mind. 6 Monate Abstand)' : language === 'ru' ? 'Недавние операции в зоне обработки (мин. 6 месяцев после)' : 'Нещодавні операції в зоні обробки (мін. 6 місяців після)',
        language === 'de' ? 'Metallimplantate, Spirale oder andere Fremdkörper im Behandlungsbereich' : language === 'ru' ? 'Металлические имплантаты, спираль или другие инородные тела в зоне обработки' : 'Металеві імплантати, спіраль або інші сторонні тіла в зоні обробки',
        language === 'de' ? 'Hautinfektionen, Entzündungen oder offene Wunden' : language === 'ru' ? 'Кожные инфекции, воспаления или открытые раны' : 'Шкірні інфекції, запалення або відкриті рани',
        language === 'de' ? 'BMI über 30 (Kavitation ist keine Methode zur Gewichtsreduktion bei Adipositas)' : language === 'ru' ? 'ИМТ выше 30 (кавитация не является методом похудения при ожирении)' : 'ІМТ вище 30 (кавітація не є методом схуднення при ожирінні)'
      ]}
      faq={[
        {
          q: language === 'de' ? 'Wie viele Kavitationsbehandlungen brauche ich für sichtbare Ergebnisse?' : language === 'ru' ? 'Сколько процедур кавитации нужно для видимого результата?' : 'Скільки процедур кавітації потрібно для видимого результату?',
          a: language === 'de'
            ? 'Für optimale und langanhaltende Ergebnisse empfehlen wir eine Kur von 8–12 Behandlungen, idealerweise 1× pro Woche (mind. 5–7 Tage Abstand zwischen den Sitzungen). Erste sichtbare Ergebnisse (Umfangsreduktion) zeigen sich oft bereits nach 3–4 Behandlungen — die Haut wirkt straffer, glatter und die Problemzone kleiner. Die volle Wirkung entfaltet sich über die gesamte Kur: Im Durchschnitt können Sie mit einer Umfangsreduktion von 2–6 cm pro Behandlungszone rechnen (abhängig von Ausgangsvolumen, Hauttyp, Lebensweise). Die Ergebnisse sind kumulativ — je mehr Behandlungen, desto mehr Fettreduktion. Nach Abschluss der Kur empfehlen wir Erhaltungsbehandlungen alle 2–3 Monate, um das Ergebnis langfristig zu bewahren (besonders wichtig bei genetisch bedingten Problemzonen).'
            : language === 'ru'
              ? 'Для оптимального и долговременного результата мы рекомендуем курс из 8–12 процедур, в идеале 1× в неделю (мин. 5–7 дней перерыв между сеансами). Первые видимые результаты (уменьшение объёмов) часто заметны уже после 3–4 процедур — кожа выглядит более упругой, гладкой, а проблемная зона меньше. Полный эффект развивается в течение всего курса: в среднем вы можете рассчитывать на уменьшение объёмов на 2–6 см за зону обработки (в зависимости от начального объёма, типа кожи, образа жизни). Результаты кумулятивные — чем больше процедур, тем больше уменьшение жира. После завершения курса рекомендуем поддерживающие сеансы каждые 2–3 месяца для долгосрочного сохранения результата (особенно важно при генетически обусловленных проблемных зонах).'
              : 'Для оптимального та тривалого результату ми рекомендуємо курс із 8–12 процедур, в ідеалі 1× на тиждень (мін. 5–7 днів перерва між сеансами). Перші видимі результати (зменшення об\'ємів) часто помітні вже після 3–4 процедур — шкіра виглядає більш пружною, гладкою, а проблемна зона меншою. Повний ефект розвивається протягом усього курсу: в середньому ви можете розраховувати на зменшення об\'ємів на 2–6 см за зону обробки (залежно від початкового об\'єму, типу шкіри, способу життя). Результати кумулятивні — чим більше процедур, тим більше зменшення жиру. Після завершення курсу рекомендуємо підтримуючі сеанси кожні 2–3 місяці для довгострокового збереження результату (особливо важливо при генетично обумовлених проблемних зонах).'
        },
        {
          q: language === 'de' ? 'Ist die Ultraschallkavitation schmerzhaft?' : language === 'ru' ? 'Ультразвуковая кавитация болезненна?' : 'Ультразвукова кавітація болісна?',
          a: language === 'de'
            ? 'Nein, die Ultraschallkavitation ist völlig schmerzfrei und wird von den meisten Kunden als angenehm und entspannend empfunden. Während der Behandlung spüren Sie lediglich ein leichtes Summen oder Vibrieren des Ultraschallkopfes, eventuell eine sanfte Wärme im Gewebe — aber keine Schmerzen, kein Brennen, kein Stechen. Manche Kunden berichten von einem leichten Kribbeln oder „innerlichen Vibrieren" — dies ist völlig normal und zeigt, dass die Kavitation wirkt. Im Vergleich zu invasiven Methoden (Liposuktion mit Anästhesie, Schmerzen, Schwellungen) ist die Kavitation deutlich angenehmer und stressfreier. Es gibt keine Nadeln, keine Schnitte, keine Blutergüsse. Die Behandlung ist so komfortabel, dass viele Kunden dabei entspannen oder sogar schlafen.'
            : language === 'ru'
              ? 'Нет, ультразвуковая кавитация абсолютно безболезненна и большинством клиентов воспринимается как приятная и расслабляющая. Во время процедуры вы чувствуете лишь лёгкое жужжание или вибрацию ультразвуковой насадки, возможно лёгкое тепло в ткани — но без боли, без жжения, без покалывания. Некоторые клиенты отмечают лёгкое покалывание или «внутреннюю вибрацию» — это совершенно нормально и показывает, что кавитация работает. По сравнению с инвазивными методами (липосакция с анестезией, болями, отёками) кавитация значительно приятнее и менее стрессовая. Нет игл, разрезов, синяков. Процедура настолько комфортна, что многие клиенты расслабляются или даже спят.'
              : 'Ні, ультразвукова кавітація абсолютно безболісна і більшістю клієнтів сприймається як приємна та розслаблююча. Під час процедури ви відчуваєте лише легке гудіння або вібрацію ультразвукової насадки, можливо легке тепло у тканині — але без болю, без печіння, без поколювання. Деякі клієнти відзначають легке поколювання або «внутрішню вібрацію» — це цілком нормально і показує, що кавітація працює. Порівняно з інвазивними методами (ліпосакція з анестезією, болем, набряками) кавітація значно приємніша та менш стресова. Немає голок, розрізів, синців. Процедура настільки комфортна, що багато клієнтів розслаблюються або навіть засинають.'
        },
        {
          q: language === 'de' ? 'Wohin geht das Fett nach der Kavitation?' : language === 'ru' ? 'Куда девается жир после кавитации?' : 'Куди дівається жир після кавітації?',
          a: language === 'de'
            ? 'Das durch die Kavitation freigesetzte Fett (Triglyceride werden in Fettsäuren und Glycerin zerlegt) wird vom Körper auf natürlichem Wege verarbeitet und ausgeschieden: Die Fettsäuren und Glycerin werden über das Lymphsystem abtransportiert, gelangen über die Blutbahn in die Leber, werden dort verstoffwechselt (in Energie umgewandelt oder zur Ausscheidung vorbereitet) und schließlich über die Nieren (Urin) und den Darm ausgeschieden. Dieser Prozess dauert 3–7 Tage nach jeder Behandlung. Daher ist es wichtig, nach der Kavitation ausreichend Wasser zu trinken (mind. 2–3 Liter täglich), sich moderat zu bewegen (um Lymphe und Kreislauf anzuregen) und Alkohol 48 Stunden zu meiden (Alkohol verlangsamt den Fettabbau in der Leber). Je besser Sie diese Empfehlungen befolgen, desto schneller und effektiver wird das Fett ausgeschieden.'
            : language === 'ru'
              ? 'Высвобожденный в результате кавитации жир (триглицериды расщепляются на жирные кислоты и глицерин) естественным образом перерабатывается и выводится организмом: жирные кислоты и глицерин транспортируются через лимфатическую систему, попадают через кровоток в печень, там метаболизируются (превращаются в энергию или готовятся к выведению) и в конечном итоге выводятся через почки (моча) и кишечник. Этот процесс занимает 3–7 дней после каждой процедуры. Поэтому важно после кавитации пить достаточно воды (мин. 2–3 литра в день), умеренно двигаться (чтобы стимулировать лимфу и кровообращение) и избегать алкоголя 48 часов (алкоголь замедляет липолиз в печени). Чем лучше вы следуете этим рекомендациям, тем быстрее и эффективнее выводится жир.'
              : 'Вивільнений внаслідок кавітації жир (тригліцериди розщеплюються на жирні кислоти та гліцерин) природним чином переробляється та виводиться організмом: жирні кислоти та гліцерин транспортуються через лімфатичну систему, потрапляють через кровотік у печінку, там метаболізуються (перетворюються на енергію або готуються до виведення) і зрештою виводяться через нирки (сеча) та кишечник. Цей процес займає 3–7 днів після кожної процедури. Тому важливо після кавітації пити достатньо води (мін. 2–3 літри на день), помірно рухатися (щоб стимулювати лімфу та кровообіг) та уникати алкоголю 48 годин (алкоголь уповільнює ліполіз у печінці). Чим краще ви дотримуєтесь цих рекомендацій, тим швидше та ефективніше виводиться жир.'
        },
        {
          q: language === 'de' ? 'Nehme ich durch Kavitation ab (verliere ich Gewicht)?' : language === 'ru' ? 'Я похудею с помощью кавитации (потеряю вес)?' : 'Чи схудну я за допомогою кавітації (чи втрачу вагу)?',
          a: language === 'de'
            ? 'Kavitation ist keine Methode zur allgemeinen Gewichtsreduktion, sondern eine Methode zur gezielten Körperkonturierung und Formung. Sie verlieren an Umfang und Volumen in den behandelten Zonen (2–6 cm pro Zone möglich), aber nicht unbedingt viel Gewicht auf der Waage (typischerweise 1–3 kg nach einer kompletten Kur). Der Grund: Fett ist leichter als Muskeln — wenn Sie Fettvolumen verlieren, aber gleichzeitig Muskeln aufbauen (durch Sport), kann Ihr Gewicht gleich bleiben oder sogar leicht steigen, obwohl Sie schlanker und straffer aussehen. Kavitation ist ideal für Menschen mit normalem oder leicht erhöhtem BMI (18–30), die hartnäckige „Problemzonen" haben, die sich trotz gesunder Ernährung und Sport nicht reduzieren lassen. Wenn Ihr Ziel allgemeine Gewichtsabnahme bei starkem Übergewicht ist, empfehlen wir zunächst eine Ernährungsumstellung und Sport — Kavitation kann dann später zur Feinmodellierung eingesetzt werden.'
            : language === 'ru'
              ? 'Кавитация — это не метод общего похудения, а метод целенаправленной коррекции контуров тела и формирования. Вы теряете объёмы в обработанных зонах (возможно 2–6 см на зону), но не обязательно много веса на весах (обычно 1–3 кг после полного курса). Причина: жир легче мышц — если вы теряете объём жира, но одновременно наращиваете мышцы (через спорт), ваш вес может оставаться прежним или даже слегка увеличиваться, хотя вы выглядите стройнее и подтянутее. Кавитация идеальна для людей с нормальным или слегка повышенным ИМТ (18–30), у которых есть упорные «проблемные зоны», которые не уменьшаются несмотря на здоровое питание и спорт. Если ваша цель — общее похудение при сильном избыточном весе, мы рекомендуем сначала изменить питание и заняться спортом — кавитация может затем использоваться для точной коррекции.'
              : 'Кавітація — це не метод загального схуднення, а метод цілеспрямованої корекції контурів тіла та формування. Ви втрачаєте об\'єми в оброблених зонах (можливо 2–6 см на зону), але не обов\'язково багато ваги на вагах (зазвичай 1–3 кг після повного курсу). Причина: жир легший за м\'язи — якщо ви втрачаєте об\'єм жиру, але одночасно нарощуєте м\'язи (через спорт), ваша вага може залишатися попередньою або навіть злегка збільшуватися, хоча ви виглядаєте стрункіше та підтягнутіше. Кавітація ідеальна для людей з нормальним або злегка підвищеним ІМТ (18–30), у яких є наполегливі «проблемні зони», які не зменшуються попри здорове харчування та спорт. Якщо ваша мета — загальне схуднення при значній надмірній вазі, ми рекомендуємо спочатку змінити харчування та зайнятися спортом — кавітація може потім використовуватися для точної корекції.'
        },
        {
          q: language === 'de' ? 'Was ist der Unterschied zwischen Kavitation und Liposuktion (Fettabsaugung)?' : language === 'ru' ? 'В чём разница между кавитацией и липосакцией?' : 'У чому різниця між кавітацією та ліпосакцією?',
          a: language === 'de'
            ? 'Der Unterschied ist grundlegend: 🔹 Liposuktion (Fettabsaugung) ist eine invasive chirurgische Operation unter Vollnarkose oder lokaler Betäubung, bei der mit Kanülen Fettzellen mechanisch abgesaugt werden. Es gibt Schnitte, Narben, Blutergüsse, Schwellungen, Schmerzen, Infektionsrisiken und 2–4 Wochen Ausfallzeit. Die Ergebnisse sind sofort sichtbar, aber radikal. 🔸 Kavitation ist eine völlig nicht-invasive, schmerzfreie Behandlung ohne Anästhesie, ohne Schnitte, ohne Nadeln, bei der Fettzellen mit Ultraschall sanft zerstört und vom Körper natürlich ausgeschieden werden. Es gibt keine Narben, keine Blutergüsse, keine Ausfallzeiten. Die Ergebnisse entwickeln sich graduell über 3–7 Tage nach jeder Sitzung. Kavitation ist die ideale Alternative für Menschen, die keine Operation wollen, keine Risiken eingehen wollen und eine natürlichere, sanftere Methode zur Körperformung suchen. Beide Methoden haben ihren Platz — bei sehr großen Fettmengen ist Liposuktion effektiver, bei lokalen Problemzonen ist Kavitation sicherer und komfortabler.'
            : language === 'ru'
              ? 'Разница фундаментальная: 🔹 Липосакция — это инвазивная хирургическая операция под общим наркозом или местной анестезией, при которой канюлями механически отсасываются жировые клетки. Есть разрезы, рубцы, синяки, отёки, боли, риски инфекций и 2–4 недели реабилитации. Результаты видны сразу, но радикальны. 🔸 Кавитация — это полностью неинвазивная, безболезненная процедура без анестезии, без разрезов, без игл, при которой жировые клетки мягко разрушаются ультразвуком и естественным образом выводятся организмом. Нет рубцов, синяков, реабилитации. Результаты развиваются постепенно в течение 3–7 дней после каждого сеанса. Кавитация — идеальная альтернатива для тех, кто не хочет операцию, не хочет рисков и ищет более естественный, мягкий метод коррекции фигуры. Оба метода имеют своё место — при очень больших объёмах жира липосакция эффективнее, при локальных проблемных зонах кавитация безопаснее и комфортнее.'
              : 'Різниця фундаментальна: 🔹 Ліпосакція — це інвазивна хірургічна операція під загальним наркозом або місцевою анестезією, при якій канюлями механічно відсмоктуються жирові клітини. Є розрізи, рубці, синці, набряки, болі, ризики інфекцій та 2–4 тижні реабілітації. Результати видимі одразу, але радикальні. 🔸 Кавітація — це повністю неінвазивна, безболісна процедура без анестезії, без розрізів, без голок, при якій жирові клітини м\'яко руйнуються ультразвуком та природним чином виводяться організмом. Немає рубців, синців, реабілітації. Результати розвиваються поступово протягом 3–7 днів після кожного сеансу. Кавітація — ідеальна альтернатива для тих, хто не хоче операцію, не хоче ризиків та шукає більш природний, м\'який метод корекції фігури. Обидва методи мають своє місце — при дуже великих об\'ємах жиру ліпосакція ефективніша, при локальних проблемних зонах кавітація безпечніша та комфортніша.'
        },
        {
          q: language === 'de' ? 'Kann ich Kavitation mit anderen Behandlungen kombinieren?' : language === 'ru' ? 'Можно ли комбинировать кавитацию с другими процедурами?' : 'Чи можна поєднувати кавітацію з іншими процедурами?',
          a: language === 'de'
            ? 'Ja, Kavitation lässt sich hervorragend mit anderen Behandlungen kombinieren und die Kombination verstärkt die Wirkung erheblich! Besonders empfehlenswerte Kombinationen: 🔸 Kavitation + Lymphdrainage-Massage = beschleunigte Ausscheidung der Fettsäuren über die Lymphe, Entgiftung und Entstauung. 🔸 Kavitation + RF-Lifting Körper = Fettreduktion + Hautstraffung für optimale Körperkonturierung, besonders nach Gewichtsverlust oder Schwangerschaft. 🔸 Kavitation + Vakuum-Therapie = verstärkte Durchblutung, Anti-Cellulite-Wirkung und Lymphdrainage. 🔸 Kavitation + Kryotherapie = Verstärkung des Fettabbaus durch Kälte und zusätzliche Straffung. Die Kombinationen können individuell auf Ihre Body-Sculpting-Ziele abgestimmt werden. Wir beraten Sie gerne in unserem Studio in München-Haidhausen zu den besten Synergien für maximale Ergebnisse.'
            : language === 'ru'
              ? 'Да, кавитацию можно отлично комбинировать с другими процедурами, и комбинация значительно усиливает эффект! Особенно рекомендуемые комбинации: 🔸 Кавитация + лимфодренажный массаж = ускоренное выведение жирных кислот через лимфу, детоксикация и снятие застоя. 🔸 Кавитация + RF-лифтинг тела = уменьшение жира + подтяжка кожи для оптимальной коррекции контуров тела, особенно после похудения или беременности. 🔸 Кавитация + вакуумная терапия = усиленное кровообращение, антицеллюлитный эффект и лимфодренаж. 🔸 Кавитация + криотерапия = усиление липолиза через холод и дополнительная подтяжка. Комбинации могут быть индивидуально адаптированы к вашим целям body-sculpting. Мы с радостью проконсультируем вас в нашей студии в Мюнхене-Хайдхаузен по лучшим синергиям для максимальных результатов.'
              : 'Так, кавітацію можна чудово поєднувати з іншими процедурами, і поєднання значно підсилює ефект! Особливо рекомендовані комбінації: 🔸 Кавітація + лімфодренажний масаж = прискорене виведення жирних кислот через лімфу, детоксикація та зняття застою. 🔸 Кавітація + RF-ліфтинг тіла = зменшення жиру + підтяжка шкіри для оптимальної корекції контурів тіла, особливо після схуднення або вагітності. 🔸 Кавітація + вакуумна терапія = посилений кровообіг, антицелюлітний ефект та лімфодренаж. 🔸 Кавітація + кріотерапія = посилення ліполізу через холод та додаткова підтяжка. Комбінації можуть бути індивідуально адаптовані до ваших цілей body-sculpting. Ми з радістю проконсультуємо вас у нашій студії у Мюнхені-Хайдхаузен щодо найкращих синергій для максимальних результатів.'
        },
        {
          q: language === 'de' ? 'Gibt es Ausfallzeiten nach der Kavitation?' : language === 'ru' ? 'Есть ли период реабилитации после кавитации?' : 'Чи є період реабілітації після кавітації?',
          a: language === 'de'
            ? 'Nein, es gibt absolut keine Ausfallzeiten nach der Kavitation! Anders als bei der Liposuktion (2–4 Wochen Ausfallzeit mit Schmerzen, Schwellungen, Kompressionskleidung) können Sie sofort nach der Behandlung Ihrem normalen Alltag nachgehen, arbeiten gehen, Auto fahren oder leichten Sport treiben. Die Haut kann unmittelbar nach der Behandlung leicht gerötet sein oder sich warm anfühlen, was aber innerhalb von 30–60 Minuten vollständig abklingt. Es gibt keine Narben, keine Blutergüsse, keine Schwellungen, keine Schmerzen. Manche Kunden berichten von einem leichten „Druck- oder Völlegefühl" in der behandelten Zone, was durch die freigesetzten Fettsäuren verursacht wird — dies ist normal und verschwindet innerhalb von 24 Stunden. Das macht Kavitation ideal für berufstätige Menschen und alle, die eine effektive Body-Contouring-Methode ohne Einschränkungen suchen.'
            : language === 'ru'
              ? 'Нет, абсолютно никакого периода реабилитации после кавитации! В отличие от липосакции (2–4 недели реабилитации с болями, отёками, компрессионной одеждой), вы можете сразу после процедуры вернуться к обычной жизни, идти на работу, водить машину или заниматься лёгким спортом. Кожа сразу после процедуры может быть слегка покрасневшей или тёплой на ощупь, но это полностью проходит в течение 30–60 минут. Нет рубцов, синяков, отёков, болей. Некоторые клиенты отмечают лёгкое «чувство давления или наполненности» в обработанной зоне, которое вызвано высвобожденными жирными кислотами — это нормально и исчезает в течение 24 часов. Это делает кавитацию идеальной для работающих людей и всех, кто ищет эффективный метод body-contouring без ограничений.'
              : 'Ні, абсолютно жодного періоду реабілітації після кавітації! На відміну від ліпосакції (2–4 тижні реабілітації з болями, набряками, компресійним одягом), ви можете одразу після процедури повернутися до звичайного життя, йти на роботу, водити машину або займатися легким спортом. Шкіра одразу після процедури може бути злегка почервонілою або теплою на дотик, але це повністю проходить протягом 30–60 хвилин. Немає рубців, синців, набряків, болю. Деякі клієнти відзначають легке «відчуття тиску або наповненості» в обробленій зоні, яке викликане вивільненими жирними кислотами — це нормально і зникає протягом 24 годин. Це робить кавітацію ідеальною для працюючих людей та всіх, хто шукає ефективний метод body-contouring без обмежень.'
        },
        {
          q: language === 'de' ? 'Für wen ist Kavitation geeignet?' : language === 'ru' ? 'Для кого подходит кавитация?' : 'Для кого підходить кавітація?',
          a: language === 'de'
            ? 'Kavitation ist geeignet für Frauen und Männer mit normalem oder leicht erhöhtem BMI (18–30), die hartnäckige Fettpolster („Problemzonen") haben, die sich trotz gesunder Ernährung und regelmäßigem Sport nicht reduzieren lassen. Typische Problemzonen: Bauch (Unterbauch, „Love Handles"), Hüften („Reiterhosen"), Oberschenkel (Innen- und Außenseite), Gesäß, Oberarme, Knie, unterer Rücken. Kavitation ist auch ideal nach Schwangerschaft oder Gewichtsverlust zur Feinmodellierung. Nicht geeignet ist Kavitation bei starkem Übergewicht (BMI > 30), Schwangerschaft, Leber-/Nierenerkrankungen, Herzschrittmachern, Thrombose/Krampfadern und einigen anderen medizinischen Zuständen (siehe Kontraindikationen). Wir besprechen alle Kontraindikationen in der kostenlosen Beratung in unserem Kosmetikstudio in München.'
            : language === 'ru'
              ? 'Кавитация подходит для женщин и мужчин с нормальным или слегка повышенным ИМТ (18–30), у которых есть упорные жировые отложения («проблемные зоны»), которые не уменьшаются несмотря на здоровое питание и регулярные занятия спортом. Типичные проблемные зоны: живот (нижний живот, «ушки»), бёдра («галифе»), бедра (внутренняя и наружная сторона), ягодицы, плечи, колени, нижняя часть спины. Кавитация также идеальна после беременности или похудения для точной коррекции. Не подходит кавитация при сильном избыточном весе (ИМТ > 30), беременности, заболеваниях печени/почек, кардиостимуляторе, тромбозе/варикозе и некоторых других медицинских состояниях (см. противопоказания). Мы обсуждаем все противопоказания на бесплатной консультации в нашей косметологической студии в Мюнхене.'
              : 'Кавітація підходить для жінок та чоловіків з нормальним або злегка підвищеним ІМТ (18–30), у яких є наполегливі жирові відкладення («проблемні зони»), які не зменшуються попри здорове харчування та регулярні заняття спортом. Типові проблемні зони: живіт (нижній живіт, «вушка»), стегна («галіфе»), стегна (внутрішня та зовнішня сторона), сідниці, плечі, коліна, нижня частина спини. Кавітація також ідеальна після вагітності або схуднення для точної корекції. Не підходить кавітація при значній надмірній вазі (ІМТ > 30), вагітності, захворюваннях печінки/нирок, кардіостимуляторі, тромбозі/варикозі та деяких інших медичних станах (див. протипоказання). Ми обговорюємо всі протипоказання на безкоштовній консультації в нашій косметологічній студії у Мюнхені.'
        }
      ]}
      ctaTitle={language === 'de' ? "Bereit für eine schlanke, definierte Silhouette in München?" : language === 'ru' ? "Готовы к стройному, очерченному силуэту в Мюнхене?" : "Готові до стрункого, окресленого силуету у Мюнхені?"}
      ctaDescription={language === 'de'
        ? "Buchen Sie jetzt Ihre Ultraschallkavitation in unserem Kosmetikstudio in München-Haidhausen und verabschieden Sie sich von hartnäckigen Fettpolstern — effektiv, schmerzfrei, ohne Operation und mit wissenschaftlich bewährter Wirkung. Kostenlose Beratung inklusive!"
        : language === 'ru'
          ? "Запишитесь сейчас на ультразвуковую кавитацию в нашей косметологической студии в Мюнхене-Хайдхаузен и попрощайтесь с упорными жировыми отложениями — эффективно, безболезненно, без операции и с научно доказанной эффективностью. Бесплатная консультация включена!"
          : "Запишіться зараз на ультразвукову кавітацію в нашій косметологічній студії у Мюнхені-Хайдхаузен та попрощайтеся з наполегливими жировими відкладеннями — ефективно, безболісно, без операції та з науково доведеною ефективністю. Безкоштовна консультація включена!"
      }
    />
  );
};

export default Kavitation;
