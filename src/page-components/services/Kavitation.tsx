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
      germanImages={['/kavitation-behandlung.jpg', '/189 1.jpg']}
      russianImages={['/kavitation-zertifikat-muenchen.jpg', '/kavitation-vorher-nachher.jpg']}
      altTextGerman="Kavitation Schema"
      altTextRussian="Схема кавитации"
      scale={0.25}
    />
  );

  // Additional sections with gallery and recommended services
  const AdditionalSections = () => (
    <>
      <PremiumGallery
        images={['/ultraschall-kavitation-muenchen.jpeg', '/kavitation-fettreduktion.jpeg', '/kavitation-ergebnis.jpeg']}
        title={language === 'de' ? 'Unsere Arbeiten' : language === 'ru' ? 'Наши работы' : 'Наші роботи'}
      />
      <div className="mt-12">
        <h2 className="text-2xl md:text-3xl font-heading font-semibold text-brand-espresso mb-6 text-center">
          {language === 'de' ? 'Empfohlene Kombinationen' : language === 'ru' ? 'Рекомендуемые комбинации' : 'Рекомендовані комбінації'}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ServiceCard
            title="RF-Vakuum"
            description={language === 'de' ? 'Radiofrequenz mit Vakuum für ein glatteres Hautbild bei Cellulite' : language === 'ru' ? 'Радиочастоты с вакуумом для более гладкого вида кожи при целлюлите' : 'Радіочастоти з вакуумом для більш гладкого вигляду шкіри при целюліті'}
            icon={Star}
            href="/services/koerperbehandlungen/rf-vakuum"
            image="/rf-vakuum-koerperbehandlung-muenchen.jpg"
          />
          <ServiceCard
            title="RF-Lifting"
            description={language === 'de' ? 'Radiofrequenz für Hautstraffung' : language === 'ru' ? 'Радиочастоты для подтяжки кожи' : 'Радіочастоти для підтяжки шкіри'}
            icon={Zap}
            href="/services/apparative-anti-aging/rf-lifting"
            image="/rf-lifting-behandlung-muenchen.jpeg"
          />
          <ServiceCard
            title={language === 'de' ? 'Ultraschall' : language === 'ru' ? 'Ультразвук' : 'Ультразвук'}
            description={language === 'de' ? 'Tiefenwirksame Hautpflege' : language === 'ru' ? 'Глубокий уход за кожей' : 'Глибокий догляд за шкірою'}
            icon={Droplet}
            href="/services/apparative-anti-aging/ultraschall"
            image="/kavitation-behandlung-muenchen.jpeg"
          />
        </div>
      </div>
    </>
  );

  return (
    <ServicePageLayout
      icon={Waves}
      title={language === 'de' ? "Ultraschallkavitation in München — schonendes Body-Contouring ohne Operation" : language === 'ru' ? "Кавитация в Мюнхене — бережное моделирование тела с помощью ультразвука" : "Кавітація у Мюнхені — дбайливе моделювання тіла за допомогою ультразвуку"}
      subtitle={language === 'de' ? "Nicht-invasive Körperformung und Silhouetten-Modellierung mit moderner Ultraschalltechnologie in München-Haidhausen" : language === 'ru' ? "Неинвазивная коррекция фигуры и моделирование силуэта с помощью современной ультразвуковой технологии в Мюнхене-Хайдхаузен" : "Неінвазивна корекція фігури та моделювання силуету за допомогою сучасної ультразвукової технології у Мюнхені-Хайдхаузен"}
      aboutTitle={language === 'de' ? "Was ist Ultraschallkavitation?" : language === 'ru' ? "Что такое ультразвуковая кавитация" : "Що таке ультразвукова кавітація"}
      aboutDescription={[
        language === 'de'
          ? 'Ultraschallkavitation ist eine nicht-invasive kosmetische Methode mit niederfrequentem Ultraschall (28–40 kHz), die die gezielte Formung lokaler Problemzonen unterstützen kann. Die Ultraschallwellen erzeugen im Gewebe Kavitationseffekte, die auf das Unterhautfettgewebe einwirken — ohne Operation, ohne Schnitte, ohne Ausfallzeiten.'
          : language === 'ru'
            ? 'Ультразвуковая кавитация — это неинвазивный косметический метод с использованием низкочастотного ультразвука (28–40 кГц), который может способствовать целенаправленному моделированию локальных проблемных зон. Ультразвуковые волны создают в тканях кавитационный эффект, воздействующий на подкожно-жировую клетчатку, — без операции, без разрезов, без реабилитации.'
            : 'Ультразвукова кавітація — це неінвазивний косметичний метод із використанням низькочастотного ультразвуку (28–40 кГц), який може сприяти цілеспрямованому моделюванню локальних проблемних зон. Ультразвукові хвилі створюють у тканинах кавітаційний ефект, що впливає на підшкірну жирову клітковину, — без операції, без розрізів, без реабілітації.',

        language === 'de'
          ? 'Nach dem Wirkprinzip der Kavitation werden dabei gelöste Fettbestandteile über die natürlichen Stoffwechselwege des Körpers verarbeitet. Unterstützend empfehlen wir: viel Wasser trinken, moderate Bewegung, gesunde Ernährung.'
          : language === 'ru'
            ? 'Согласно принципу действия кавитации, высвобожденные жировые компоненты перерабатываются организмом естественным путём обмена веществ. Для поддержки результата рекомендуем: пить много воды, умеренно двигаться, правильно питаться.'
            : 'Згідно з принципом дії кавітації, вивільнені жирові компоненти переробляються організмом природним шляхом обміну речовин. Для підтримки результату рекомендуємо: пити багато води, помірно рухатися, правильно харчуватися.',

        language === 'de'
          ? 'Geeignet für hartnäckige Problemzonen bei BMI 18–30. Typische Zonen: Bauch, Hüften, Oberschenkel, Gesäß, Arme. Kombinierbar mit RF-Lifting, Vakuum-Massage und Lymphdrainage.'
          : language === 'ru'
            ? 'Подходит для упорных проблемных зон при ИМТ 18–30. Типичные зоны: живот, бёдра, галифе, ягодицы, руки. Можно комбинировать с RF-лифтингом, вакуумным массажем и лимфодренажем.'
            : 'Підходить для наполегливих проблемних зон при ІМТ 18–30. Типові зони: живіт, стегна, галіфе, сідниці, руки. Можна поєднувати з RF-ліфтингом, вакуумним масажем та лімфодренажем.'
      ]}
      benefits={[
        language === 'de' ? 'Kann die gezielte Figurformung ohne Operation unterstützen' : language === 'ru' ? 'Может способствовать моделированию фигуры без операции' : 'Може сприяти моделюванню фігури без операції',
        language === 'de' ? 'Umfang der behandelten Zonen kann sich sichtbar verringern' : language === 'ru' ? 'Объёмы в обработанных зонах могут заметно уменьшиться' : 'Об\'єми в оброблених зонах можуть помітно зменшитися',
        language === 'de' ? 'Kann das Erscheinungsbild von Cellulite mildern' : language === 'ru' ? 'Может сделать проявления целлюлита менее заметными' : 'Може зробити прояви целюліту менш помітними',
        language === 'de' ? 'In der Regel schmerzfrei und entspannend' : language === 'ru' ? 'Как правило, безболезненно' : 'Як правило, безболісно',
        language === 'de' ? 'Keine Ausfallzeiten' : language === 'ru' ? 'Без реабилитации' : 'Без реабілітації',
        language === 'de' ? 'Schonende, nicht-invasive Option ohne Operation' : language === 'ru' ? 'Бережный неинвазивный вариант без операции' : 'Дбайливий неінвазивний варіант без операції',
        language === 'de' ? 'Erste Veränderungen oft nach 3–4 Behandlungen sichtbar' : language === 'ru' ? 'Первые изменения часто заметны после 3–4 процедур' : 'Перші зміни часто помітні після 3–4 процедур'
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
            ? 'Sanfte Behandlung mit Ultraschall. In der Regel schmerzfrei.'
            : language === 'ru'
              ? 'Мягкая обработка ультразвуком. Как правило, безболезненно.'
              : 'М\'яка обробка ультразвуком. Як правило, безболісно.'
        },
        {
          title: language === 'de' ? '4. Nachbehandlung' : language === 'ru' ? '4. Последующий уход' : '4. Подальший догляд',
          description: language === 'de'
            ? 'Optional Kombination mit Lymphdrainage, RF-Lifting oder Vakuum-Massage.'
            : language === 'ru'
              ? 'Опционально комбинация с лимфодренажем, RF-лифтингом или вакуумным массажем.'
              : 'За бажанням поєднання з лімфодренажем, RF-ліфтингом або вакуумним масажем.'
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
            ? 'Für bestmögliche und langanhaltende Ergebnisse empfehlen wir eine Kur von 8–12 Behandlungen, idealerweise 1× pro Woche (mind. 5–7 Tage Abstand zwischen den Sitzungen). Erste sichtbare Veränderungen zeigen sich oft bereits nach 3–4 Behandlungen — die Haut kann straffer und glatter wirken, die Problemzone definierter. Die volle Wirkung entfaltet sich über die gesamte Kur; wie stark sich der Umfang der behandelten Zonen verändert, ist individuell sehr unterschiedlich (abhängig von Ausgangsvolumen, Hauttyp, Lebensweise) und kann nicht garantiert werden. Die Effekte bauen sich über die Kur hinweg auf. Nach Abschluss der Kur empfehlen wir Erhaltungsbehandlungen alle 2–3 Monate, um das Ergebnis möglichst lange zu bewahren (besonders sinnvoll bei genetisch bedingten Problemzonen).'
            : language === 'ru'
              ? 'Для наилучшего и стойкого результата мы рекомендуем курс из 8–12 процедур, в идеале 1× в неделю (мин. 5–7 дней перерыв между сеансами). Первые видимые изменения часто заметны уже после 3–4 процедур — кожа может выглядеть более упругой и гладкой, а проблемная зона — более очерченной. Полный эффект развивается в течение всего курса; насколько изменятся объёмы в обработанных зонах, очень индивидуально (зависит от исходного объёма, типа кожи, образа жизни) и не может быть гарантировано. Эффект накапливается на протяжении курса. После завершения курса рекомендуем поддерживающие сеансы каждые 2–3 месяца, чтобы как можно дольше сохранить результат (особенно целесообразно при генетически обусловленных проблемных зонах).'
              : 'Для найкращого та стійкого результату ми рекомендуємо курс із 8–12 процедур, в ідеалі 1× на тиждень (мін. 5–7 днів перерва між сеансами). Перші видимі зміни часто помітні вже після 3–4 процедур — шкіра може виглядати більш пружною та гладкою, а проблемна зона — більш окресленою. Повний ефект розвивається протягом усього курсу; наскільки зміняться об\'єми в оброблених зонах, дуже індивідуально (залежить від початкового об\'єму, типу шкіри, способу життя) і не може бути гарантовано. Ефект накопичується протягом курсу. Після завершення курсу рекомендуємо підтримуючі сеанси кожні 2–3 місяці, щоб якомога довше зберегти результат (особливо доцільно при генетично обумовлених проблемних зонах).'
        },
        {
          q: language === 'de' ? 'Ist die Ultraschallkavitation schmerzhaft?' : language === 'ru' ? 'Ультразвуковая кавитация болезненна?' : 'Ультразвукова кавітація болісна?',
          a: language === 'de'
            ? 'Nein, die Ultraschallkavitation ist in der Regel schmerzfrei und wird von den meisten Kunden als angenehm und entspannend empfunden. Während der Behandlung spüren Sie lediglich ein leichtes Summen oder Vibrieren des Ultraschallkopfes, eventuell eine sanfte Wärme im Gewebe — normalerweise aber keine Schmerzen, kein Brennen, kein Stechen. Manche Kunden berichten von einem leichten Kribbeln oder „innerlichen Vibrieren" — dies ist völlig normal und eine typische Begleiterscheinung der Kavitation. Im Vergleich zu invasiven Methoden (Liposuktion mit Anästhesie, Schmerzen, Schwellungen) ist die Kavitation deutlich angenehmer und stressfreier. Es gibt keine Nadeln, keine Schnitte, keine Blutergüsse. Die Behandlung ist so komfortabel, dass viele Kunden dabei entspannen oder sogar schlafen.'
            : language === 'ru'
              ? 'Нет, ультразвуковая кавитация, как правило, безболезненна и большинством клиентов воспринимается как приятная и расслабляющая. Во время процедуры вы чувствуете лишь лёгкое жужжание или вибрацию ультразвуковой насадки, возможно лёгкое тепло в ткани — но обычно без боли, без жжения, без покалывания. Некоторые клиенты отмечают лёгкое покалывание или «внутреннюю вибрацию» — это совершенно нормально и типично для кавитации. По сравнению с инвазивными методами (липосакция с анестезией, болями, отёками) кавитация значительно приятнее и менее стрессовая. Нет игл, разрезов, синяков. Процедура настолько комфортна, что многие клиенты расслабляются или даже спят.'
              : 'Ні, ультразвукова кавітація, як правило, безболісна і більшістю клієнтів сприймається як приємна та розслаблююча. Під час процедури ви відчуваєте лише легке гудіння або вібрацію ультразвукової насадки, можливо легке тепло у тканині — але зазвичай без болю, без печіння, без поколювання. Деякі клієнти відзначають легке поколювання або «внутрішню вібрацію» — це цілком нормально і типово для кавітації. Порівняно з інвазивними методами (ліпосакція з анестезією, болем, набряками) кавітація значно приємніша та менш стресова. Немає голок, розрізів, синців. Процедура настільки комфортна, що багато клієнтів розслаблюються або навіть засинають.'
        },
        {
          q: language === 'de' ? 'Wohin geht das Fett nach der Kavitation?' : language === 'ru' ? 'Куда девается жир после кавитации?' : 'Куди дівається жир після кавітації?',
          a: language === 'de'
            ? 'Nach dem Wirkprinzip der Kavitation werden gelöste Fettbestandteile (Triglyceride, die in Fettsäuren und Glycerin zerlegt werden) vom Körper auf natürlichem Wege verarbeitet: Sie werden über das Lymphsystem abtransportiert, gelangen über die Blutbahn in die Leber, werden dort verstoffwechselt (in Energie umgewandelt oder zur Ausscheidung vorbereitet) und schließlich über die körpereigenen Ausscheidungswege abgebaut. Dieser Prozess erstreckt sich typischerweise über einige Tage nach jeder Behandlung. Daher empfehlen wir, nach der Kavitation ausreichend Wasser zu trinken (mind. 2–3 Liter täglich), sich moderat zu bewegen (um Lymphe und Kreislauf anzuregen) und Alkohol 48 Stunden zu meiden (Alkohol belastet den Fettstoffwechsel in der Leber). Diese Empfehlungen können dazu beitragen, das Behandlungsergebnis zu unterstützen.'
            : language === 'ru'
              ? 'Согласно принципу действия кавитации, высвобожденные жировые компоненты (триглицериды, расщепляющиеся на жирные кислоты и глицерин) естественным образом перерабатываются организмом: они транспортируются через лимфатическую систему, попадают через кровоток в печень, там метаболизируются (превращаются в энергию или готовятся к выведению) и в итоге утилизируются естественными путями выведения. Этот процесс, как правило, занимает несколько дней после каждой процедуры. Поэтому после кавитации мы рекомендуем пить достаточно воды (мин. 2–3 литра в день), умеренно двигаться (чтобы стимулировать лимфу и кровообращение) и избегать алкоголя 48 часов (алкоголь нагружает жировой обмен в печени). Соблюдение этих рекомендаций может помочь поддержать результат процедуры.'
              : 'Згідно з принципом дії кавітації, вивільнені жирові компоненти (тригліцериди, що розщеплюються на жирні кислоти та гліцерин) природним чином переробляються організмом: вони транспортуються через лімфатичну систему, потрапляють через кровотік у печінку, там метаболізуються (перетворюються на енергію або готуються до виведення) і зрештою утилізуються природними шляхами виведення. Цей процес, як правило, триває кілька днів після кожної процедури. Тому після кавітації ми рекомендуємо пити достатньо води (мін. 2–3 літри на день), помірно рухатися (щоб стимулювати лімфу та кровообіг) та уникати алкоголю 48 годин (алкоголь навантажує жировий обмін у печінці). Дотримання цих рекомендацій може допомогти підтримати результат процедури.'
        },
        {
          q: language === 'de' ? 'Nehme ich durch Kavitation ab (verliere ich Gewicht)?' : language === 'ru' ? 'Я похудею с помощью кавитации (потеряю вес)?' : 'Чи схудну я за допомогою кавітації (чи втрачу вагу)?',
          a: language === 'de'
            ? 'Nein — Kavitation ist keine Methode zur Gewichtsreduktion, sondern eine kosmetische Behandlung, die die gezielte Körperkonturierung und Formung unterstützen kann. Veränderungen zeigen sich, wenn überhaupt, am Umfang der behandelten Zonen und fallen individuell unterschiedlich aus — nicht auf der Waage. Hinzu kommt: Fett ist leichter als Muskeln — wer gleichzeitig Muskeln aufbaut (durch Sport), kann gleich viel oder sogar etwas mehr wiegen und dennoch straffer wirken. Kavitation ist ideal für Menschen mit normalem oder leicht erhöhtem BMI (18–30), die hartnäckige „Problemzonen" haben, die sich trotz gesunder Ernährung und Sport nicht reduzieren lassen. Wenn Ihr Ziel allgemeine Gewichtsabnahme bei starkem Übergewicht ist, empfehlen wir zunächst eine Ernährungsumstellung und Sport — Kavitation kann dann später zur Feinmodellierung eingesetzt werden.'
            : language === 'ru'
              ? 'Нет — кавитация не является методом снижения веса, это косметическая процедура, которая может способствовать целенаправленной коррекции контуров тела. Изменения, если они наступают, проявляются в объёмах обработанных зон и индивидуальны — а не в показаниях весов. Кроме того, жир легче мышц — тот, кто одновременно наращивает мышцы (через спорт), может весить столько же или даже чуть больше и при этом выглядеть подтянутее. Кавитация идеальна для людей с нормальным или слегка повышенным ИМТ (18–30), у которых есть упорные «проблемные зоны», которые не уменьшаются несмотря на здоровое питание и спорт. Если ваша цель — общее похудение при сильном избыточном весе, мы рекомендуем сначала изменить питание и заняться спортом — кавитация может затем использоваться для точной коррекции.'
              : 'Ні — кавітація не є методом зниження ваги, це косметична процедура, яка може сприяти цілеспрямованій корекції контурів тіла. Зміни, якщо вони настають, проявляються в об\'ємах оброблених зон та є індивідуальними — а не в показниках ваг. Крім того, жир легший за м\'язи — хто одночасно нарощує м\'язи (через спорт), може важити стільки ж або навіть трохи більше і при цьому виглядати підтягнутіше. Кавітація ідеальна для людей з нормальним або злегка підвищеним ІМТ (18–30), у яких є наполегливі «проблемні зони», які не зменшуються попри здорове харчування та спорт. Якщо ваша мета — загальне схуднення при значній надмірній вазі, ми рекомендуємо спочатку змінити харчування та зайнятися спортом — кавітація може потім використовуватися для точної корекції.'
        },
        {
          q: language === 'de' ? 'Was ist der Unterschied zwischen Kavitation und Liposuktion (Fettabsaugung)?' : language === 'ru' ? 'В чём разница между кавитацией и липосакцией?' : 'У чому різниця між кавітацією та ліпосакцією?',
          a: language === 'de'
            ? 'Der Unterschied ist grundlegend: 🔹 Liposuktion (Fettabsaugung) ist eine invasive chirurgische Operation unter Vollnarkose oder lokaler Betäubung, bei der mit Kanülen Fettzellen mechanisch abgesaugt werden. Es gibt Schnitte, Narben, Blutergüsse, Schwellungen, Schmerzen, Infektionsrisiken und 2–4 Wochen Ausfallzeit. Die Ergebnisse sind sofort sichtbar, aber radikal. 🔸 Kavitation ist eine nicht-invasive, in der Regel schmerzfreie kosmetische Behandlung ohne Anästhesie, ohne Schnitte, ohne Nadeln, bei der Ultraschall auf das Unterhautfettgewebe einwirkt und die Körperformung unterstützen kann. Es gibt keine Narben, keine Blutergüsse, keine Ausfallzeiten. Mögliche Veränderungen entwickeln sich graduell über die Kur hinweg und sind deutlich sanfter als bei einem chirurgischen Eingriff. Kavitation ist eine Option für Menschen, die keine Operation wünschen und eine sanftere Methode zur Körperformung suchen. Beide Methoden haben ihren Platz — bei sehr großen Fettmengen ist ein ärztlicher Eingriff wie die Liposuktion das Mittel der Wahl, bei lokalen Problemzonen ist Kavitation eine schonende, komfortable kosmetische Alternative.'
            : language === 'ru'
              ? 'Разница фундаментальная: 🔹 Липосакция — это инвазивная хирургическая операция под общим наркозом или местной анестезией, при которой канюлями механически отсасываются жировые клетки. Есть разрезы, рубцы, синяки, отёки, боли, риски инфекций и 2–4 недели реабилитации. Результаты видны сразу, но радикальны. 🔸 Кавитация — это неинвазивная, как правило, безболезненная косметическая процедура без анестезии, без разрезов, без игл, при которой ультразвук воздействует на подкожно-жировую клетчатку и может способствовать коррекции фигуры. Нет рубцов, синяков, реабилитации. Возможные изменения развиваются постепенно в течение курса и значительно мягче, чем после хирургического вмешательства. Кавитация — вариант для тех, кто не хочет операции и ищет более мягкий метод коррекции фигуры. Оба метода имеют своё место — при очень больших объёмах жира методом выбора является врачебное вмешательство, например липосакция, а при локальных проблемных зонах кавитация — бережная и комфортная косметическая альтернатива.'
              : 'Різниця фундаментальна: 🔹 Ліпосакція — це інвазивна хірургічна операція під загальним наркозом або місцевою анестезією, при якій канюлями механічно відсмоктуються жирові клітини. Є розрізи, рубці, синці, набряки, болі, ризики інфекцій та 2–4 тижні реабілітації. Результати видимі одразу, але радикальні. 🔸 Кавітація — це неінвазивна, як правило, безболісна косметична процедура без анестезії, без розрізів, без голок, при якій ультразвук впливає на підшкірну жирову клітковину та може сприяти корекції фігури. Немає рубців, синців, реабілітації. Можливі зміни розвиваються поступово протягом курсу і значно м\'якші, ніж після хірургічного втручання. Кавітація — варіант для тих, хто не хоче операції та шукає більш м\'який метод корекції фігури. Обидва методи мають своє місце — при дуже великих об\'ємах жиру методом вибору є лікарське втручання, наприклад ліпосакція, а при локальних проблемних зонах кавітація — дбайлива та комфортна косметична альтернатива.'
        },
        {
          q: language === 'de' ? 'Kann ich Kavitation mit anderen Behandlungen kombinieren?' : language === 'ru' ? 'Можно ли комбинировать кавитацию с другими процедурами?' : 'Чи можна поєднувати кавітацію з іншими процедурами?',
          a: language === 'de'
            ? 'Ja, Kavitation lässt sich hervorragend mit anderen Behandlungen kombinieren — die Kombination kann die Wirkung sinnvoll ergänzen. Besonders empfehlenswerte Kombinationen: 🔸 Kavitation + Lymphdrainage-Massage = unterstützt den Lymphfluss und sorgt für ein leichteres Körpergefühl. 🔸 Kavitation + RF-Lifting Körper = Körperformung + Hautstraffung für eine harmonischere Kontur, besonders nach Gewichtsverlust oder Schwangerschaft. 🔸 Kavitation + Vakuum-Massage = fördert die Durchblutung, kann das Erscheinungsbild von Cellulite mildern und unterstützt den Lymphfluss. 🔸 Kavitation + Kryotherapie = Kälteanwendung zur Unterstützung der Körperformung und für ein strafferes Hautgefühl. Die Kombinationen können individuell auf Ihre Body-Sculpting-Ziele abgestimmt werden. Wir beraten Sie gerne in unserem Studio in München-Haidhausen zu den passenden Kombinationen für Ihre Ziele.'
            : language === 'ru'
              ? 'Да, кавитацию можно отлично комбинировать с другими процедурами — комбинация может удачно дополнить эффект. Особенно рекомендуемые комбинации: 🔸 Кавитация + лимфодренажный массаж = поддержка лимфотока и ощущение лёгкости в теле. 🔸 Кавитация + RF-лифтинг тела = моделирование фигуры + подтяжка кожи для более гармоничного контура, особенно после снижения веса или беременности. 🔸 Кавитация + вакуумный массаж = улучшение кровообращения, может сделать проявления целлюлита менее заметными и поддерживает лимфоток. 🔸 Кавитация + криотерапия = воздействие холодом для поддержки моделирования фигуры и ощущения более подтянутой кожи. Комбинации могут быть индивидуально адаптированы к вашим целям body-sculpting. Мы с радостью проконсультируем вас в нашей студии в Мюнхене-Хайдхаузен и подберём подходящие комбинации под ваши цели.'
              : 'Так, кавітацію можна чудово поєднувати з іншими процедурами — поєднання може вдало доповнити ефект. Особливо рекомендовані комбінації: 🔸 Кавітація + лімфодренажний масаж = підтримка лімфотоку та відчуття легкості в тілі. 🔸 Кавітація + RF-ліфтинг тіла = моделювання фігури + підтяжка шкіри для більш гармонійного контуру, особливо після зниження ваги або вагітності. 🔸 Кавітація + вакуумний масаж = покращення кровообігу, може зробити прояви целюліту менш помітними та підтримує лімфотік. 🔸 Кавітація + кріотерапія = вплив холодом для підтримки моделювання фігури та відчуття більш підтягнутої шкіри. Комбінації можуть бути індивідуально адаптовані до ваших цілей body-sculpting. Ми з радістю проконсультуємо вас у нашій студії у Мюнхені-Хайдхаузен та підберемо відповідні комбінації під ваші цілі.'
        },
        {
          q: language === 'de' ? 'Gibt es Ausfallzeiten nach der Kavitation?' : language === 'ru' ? 'Есть ли период реабилитации после кавитации?' : 'Чи є період реабілітації після кавітації?',
          a: language === 'de'
            ? 'Nein, in der Regel gibt es keine Ausfallzeiten nach der Kavitation! Anders als bei der Liposuktion (2–4 Wochen Ausfallzeit mit Schmerzen, Schwellungen, Kompressionskleidung) können Sie sofort nach der Behandlung Ihrem normalen Alltag nachgehen, arbeiten gehen, Auto fahren oder leichten Sport treiben. Die Haut kann unmittelbar nach der Behandlung leicht gerötet sein oder sich warm anfühlen, was meist innerhalb von 30–60 Minuten abklingt. Narben, Blutergüsse, Schwellungen oder Schmerzen treten normalerweise nicht auf. Manche Kunden berichten von einem leichten „Druck- oder Völlegefühl" in der behandelten Zone, was durch die freigesetzten Fettsäuren verursacht wird — dies ist normal und verschwindet innerhalb von 24 Stunden. Das macht Kavitation ideal für berufstätige Menschen und alle, die eine effektive Body-Contouring-Methode ohne Einschränkungen suchen.'
            : language === 'ru'
              ? 'Нет, как правило, никакого периода реабилитации после кавитации нет! В отличие от липосакции (2–4 недели реабилитации с болями, отёками, компрессионной одеждой), вы можете сразу после процедуры вернуться к обычной жизни, идти на работу, водить машину или заниматься лёгким спортом. Кожа сразу после процедуры может быть слегка покрасневшей или тёплой на ощупь, но обычно это проходит в течение 30–60 минут. Рубцов, синяков, отёков или болей, как правило, не бывает. Некоторые клиенты отмечают лёгкое «чувство давления или наполненности» в обработанной зоне, которое вызвано высвобожденными жирными кислотами — это нормально и исчезает в течение 24 часов. Это делает кавитацию идеальной для работающих людей и всех, кто ищет эффективный метод body-contouring без ограничений.'
              : 'Ні, як правило, жодного періоду реабілітації після кавітації немає! На відміну від ліпосакції (2–4 тижні реабілітації з болями, набряками, компресійним одягом), ви можете одразу після процедури повернутися до звичайного життя, йти на роботу, водити машину або займатися легким спортом. Шкіра одразу після процедури може бути злегка почервонілою або теплою на дотик, але зазвичай це проходить протягом 30–60 хвилин. Рубців, синців, набряків чи болю, як правило, не буває. Деякі клієнти відзначають легке «відчуття тиску або наповненості» в обробленій зоні, яке викликане вивільненими жирними кислотами — це нормально і зникає протягом 24 годин. Це робить кавітацію ідеальною для працюючих людей та всіх, хто шукає ефективний метод body-contouring без обмежень.'
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
      ctaTitle={language === 'de' ? "Bereit für eine definiertere Silhouette in München?" : language === 'ru' ? "Готовы к более очерченному силуэту в Мюнхене?" : "Готові до більш окресленого силуету у Мюнхені?"}
      ctaDescription={language === 'de'
        ? "Buchen Sie jetzt Ihre Ultraschallkavitation in unserem Kosmetikstudio in München-Haidhausen und unterstützen Sie die Formung hartnäckiger Problemzonen — sanft, in der Regel schmerzfrei und ohne Operation. Kostenlose Beratung inklusive!"
        : language === 'ru'
          ? "Запишитесь сейчас на ультразвуковую кавитацию в нашей косметологической студии в Мюнхене-Хайдхаузен и поддержите моделирование упорных проблемных зон — мягко, как правило, безболезненно и без операции. Бесплатная консультация включена!"
          : "Запишіться зараз на ультразвукову кавітацію в нашій косметологічній студії у Мюнхені-Хайдхаузен та підтримайте моделювання наполегливих проблемних зон — м'яко, як правило, безболісно та без операції. Безкоштовна консультація включена!"
      }
    />
  );
};

export default Kavitation;
