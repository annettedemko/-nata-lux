'use client'

import { ServicePageLayout } from '@/components/ServicePageLayout';
import { Waves, Star, Zap, Droplet } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { ServiceCard } from '@/components/ServiceCard';
import { ProcedureSchema } from '@/components/ProcedureSchema';
import { PremiumGallery } from '@/components/PremiumGallery';

const Kavitation = () => {
  const { language } = useLanguage();
  const isGerman = language === 'de';

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
        title={language === 'de' ? 'Unsere Arbeiten' : language === 'ru' ? 'Наши работы' : 'Наши работы'}
      />
      <div className="mt-12">
        <h2 className="text-2xl md:text-3xl font-heading font-semibold text-brand-espresso mb-6 text-center">
          {language === 'de' ? 'Empfohlene Kombinationen' : language === 'ru' ? 'Рекомендуемые комбинации' : 'Рекомендуемые комбинации'}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ServiceCard
            title="RF-Vakuum"
            description={language === 'de' ? 'Radiofrequenz mit Vakuum für Cellulite-Reduktion' : language === 'ru' ? 'Радиочастоты с вакуумом для уменьшения целлюлита' : 'Радиочастоты с вакуумом для уменьшения целлюлита'}
            icon={Star}
            href="/services/koerperbehandlungen/rf-vakuum"
            image="/83.jpg"
          />
          <ServiceCard
            title="RF-Lifting"
            description={language === 'de' ? 'Radiofrequenz für Hautstraffung' : language === 'ru' ? 'Радиочастоты для подтяжки кожи' : 'Радиочастоты для подтяжки кожи'}
            icon={Zap}
            href="/services/apparative-anti-aging/rf-lifting"
            image="/162.jpeg"
          />
          <ServiceCard
            title={language === 'de' ? 'Ultraschall' : language === 'ru' ? 'Ультразвук' : 'Ультразвук'}
            description={language === 'de' ? 'Tiefenwirksame Hautpflege' : language === 'ru' ? 'Глубокий уход за кожей' : 'Глубокий уход за кожей'}
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
      title={isGerman ? "Ultraschallkavitation in München — sicheres Body-Contouring ohne Operation" : "Кавитация в Мюнхене — безопасное моделирование тела с помощью ультразвука"}
      subtitle={isGerman ? "Effektive Fettreduktion und Körperformung mit modernster Ultraschalltechnologie in München-Haidhausen" : "Эффективная коррекция фигуры и моделирование тела с помощью современной ультразвуковой технологии в Мюнхене-Хайдхаузен"}
      aboutTitle={isGerman ? "Was ist Ultraschallkavitation?" : "Что такое ультразвуковая кавитация"}
      aboutDescription={[
        isGerman
          ? 'Ultraschallkavitation ist eine nicht-invasive Methode zur gezielten Fettreduktion mit niederfrequentem Ultraschall (28–40 kHz). Die Ultraschallwellen erzeugen Kavitationsblasen, die Fettzellen sanft zerstören — ohne Operation, ohne Schnitte, ohne Ausfallzeiten.'
          : 'Ультразвуковая кавитация — это неинвазивный метод целенаправленного уменьшения жира с помощью низкочастотного ультразвука (28–40 кГц). Ультразвуковые волны создают кавитационные пузырьки, которые мягко разрушают жировые клетки — без операции, без разрезов, без реабилитации.',

        isGerman
          ? 'Das freigesetzte Fett wird vom Körper natürlich über Lymphe, Leber und Nieren ausgeschieden (3–7 Tage). Wichtig: viel Wasser trinken, moderate Bewegung, gesunde Ernährung.'
          : 'Высвобожденный жир естественным образом выводится организмом через лимфу, печень и почки (3–7 дней). Важно: пить много воды, умеренное движение, здоровое питание.',

        isGerman
          ? 'Ideal für hartnäckige Problemzonen bei BMI 18–30. Typische Zonen: Bauch, Hüften, Oberschenkel, Gesäß, Arme. Kombinierbar mit RF-Lifting, Vakuum-Therapie und Lymphdrainage.'
          : 'Идеально для упорных проблемных зон при ИМТ 18–30. Типичные зоны: живот, бёдра, галифе, ягодицы, руки. Можно комбинировать с RF-лифтингом, вакуумной терапией и лимфодренажем.'
      ]}
      benefits={[
        isGerman ? 'Gezielte Fettreduktion ohne Operation' : 'Целенаправленное уменьшение жира без операции',
        isGerman ? 'Umfangsreduktion 2–6 cm pro Zone' : 'Уменьшение объёмов 2–6 см за зону',
        isGerman ? 'Reduzierung von Cellulite' : 'Уменьшение целлюлита',
        isGerman ? 'Völlig schmerzfrei und entspannend' : 'Абсолютно безболезненно',
        isGerman ? 'Keine Ausfallzeiten' : 'Без реабилитации',
        isGerman ? 'Sichere Alternative zur Liposuktion' : 'Безопасная альтернатива липосакции',
        isGerman ? 'Sichtbare Ergebnisse nach 3–4 Behandlungen' : 'Видимые результаты после 3–4 процедур'
      ]}
      steps={[
        {
          title: isGerman ? '1. Beratung und Vermessung' : '1. Консультация и замеры',
          description: isGerman
            ? 'Analyse der Problemzonen, Messung der Umfänge, Besprechung der Ziele.'
            : 'Анализ проблемных зон, измерение объёмов, обсуждение целей.'
        },
        {
          title: isGerman ? '2. Vorbereitung' : '2. Подготовка',
          description: isGerman
            ? 'Reinigung der Zone und Auftragen des Ultraschall-Gels.'
            : 'Очищение зоны и нанесение ультразвукового геля.'
        },
        {
          title: isGerman ? '3. Kavitation (30-60 Min.)' : '3. Кавитация (30-60 мин.)',
          description: isGerman
            ? 'Sanfte Behandlung mit Ultraschall. Völlig schmerzfrei.'
            : 'Мягкая обработка ультразвуком. Абсолютно безболезненно.'
        },
        {
          title: isGerman ? '4. Nachbehandlung' : '4. Последующий уход',
          description: isGerman
            ? 'Optional Kombination mit Lymphdrainage, RF-Lifting oder Vakuum-Therapie.'
            : 'Опционально комбинация с лимфодренажем, RF-лифтингом или вакуумной терапией.'
        },
        {
          title: isGerman ? '5. Empfehlungen' : '5. Рекомендации',
          description: isGerman
            ? 'Viel Wasser, Bewegung, gesunde Ernährung. Kur: 8–12 Behandlungen, 1× pro Woche.'
            : 'Много воды, движение, здоровое питание. Курс: 8–12 процедур, 1× в неделю.'
        }
      ]}
      procedureSchema={<SchemaSection />}
      additionalSections={<AdditionalSections />}
      priceSection="body-treatments"
      contraindications={[
        isGerman ? 'Schwangerschaft und Stillzeit' : 'Беременность и кормление грудью',
        isGerman ? 'Herzschrittmacher oder implantierte elektronische Geräte' : 'Кардиостимулятор или имплантированные электронные устройства',
        isGerman ? 'Leber- oder Nierenerkrankungen (Fettstoffwechsel wird über Leber/Nieren abgebaut)' : 'Заболевания печени или почек (метаболизм жиров происходит через печень/почки)',
        isGerman ? 'Diabetes oder schwere Stoffwechselerkrankungen' : 'Диабет или тяжёлые метаболические заболевания',
        isGerman ? 'Thrombose, Krampfadern oder schwere Venenerkrankungen im Behandlungsbereich' : 'Тромбоз, варикоз или тяжёлые заболевания вен в зоне обработки',
        isGerman ? 'Krebs, Chemotherapie oder Strahlentherapie' : 'Онкология, химиотерапия или лучевая терапия',
        isGerman ? 'Epilepsie oder neurologische Erkrankungen' : 'Эпилепсия или неврологические заболевания',
        isGerman ? 'Frische Operationen im Behandlungsbereich (mind. 6 Monate Abstand)' : 'Недавние операции в зоне обработки (мин. 6 месяцев после)',
        isGerman ? 'Metallimplantate, Spirale oder andere Fremdkörper im Behandlungsbereich' : 'Металлические имплантаты, спираль или другие инородные тела в зоне обработки',
        isGerman ? 'Hautinfektionen, Entzündungen oder offene Wunden' : 'Кожные инфекции, воспаления или открытые раны',
        isGerman ? 'BMI über 30 (Kavitation ist keine Methode zur Gewichtsreduktion bei Adipositas)' : 'ИМТ выше 30 (кавитация не является методом похудения при ожирении)'
      ]}
      faq={[
        {
          q: isGerman ? 'Wie viele Kavitationsbehandlungen brauche ich für sichtbare Ergebnisse?' : 'Сколько процедур кавитации нужно для видимого результата?',
          a: isGerman
            ? 'Für optimale und langanhaltende Ergebnisse empfehlen wir eine Kur von 8–12 Behandlungen, idealerweise 1× pro Woche (mind. 5–7 Tage Abstand zwischen den Sitzungen). Erste sichtbare Ergebnisse (Umfangsreduktion) zeigen sich oft bereits nach 3–4 Behandlungen — die Haut wirkt straffer, glatter und die Problemzone kleiner. Die volle Wirkung entfaltet sich über die gesamte Kur: Im Durchschnitt können Sie mit einer Umfangsreduktion von 2–6 cm pro Behandlungszone rechnen (abhängig von Ausgangsvolumen, Hauttyp, Lebensweise). Die Ergebnisse sind kumulativ — je mehr Behandlungen, desto mehr Fettreduktion. Nach Abschluss der Kur empfehlen wir Erhaltungsbehandlungen alle 2–3 Monate, um das Ergebnis langfristig zu bewahren (besonders wichtig bei genetisch bedingten Problemzonen).'
            : 'Для оптимального и долговременного результата мы рекомендуем курс из 8–12 процедур, в идеале 1× в неделю (мин. 5–7 дней перерыв между сеансами). Первые видимые результаты (уменьшение объёмов) часто заметны уже после 3–4 процедур — кожа выглядит более упругой, гладкой, а проблемная зона меньше. Полный эффект развивается в течение всего курса: в среднем вы можете рассчитывать на уменьшение объёмов на 2–6 см за зону обработки (в зависимости от начального объёма, типа кожи, образа жизни). Результаты кумулятивные — чем больше процедур, тем больше уменьшение жира. После завершения курса рекомендуем поддерживающие сеансы каждые 2–3 месяца для долгосрочного сохранения результата (особенно важно при генетически обусловленных проблемных зонах).'
        },
        {
          q: isGerman ? 'Ist die Ultraschallkavitation schmerzhaft?' : 'Ультразвуковая кавитация болезненна?',
          a: isGerman
            ? 'Nein, die Ultraschallkavitation ist völlig schmerzfrei und wird von den meisten Kunden als angenehm und entspannend empfunden. Während der Behandlung spüren Sie lediglich ein leichtes Summen oder Vibrieren des Ultraschallkopfes, eventuell eine sanfte Wärme im Gewebe — aber keine Schmerzen, kein Brennen, kein Stechen. Manche Kunden berichten von einem leichten Kribbeln oder „innerlichen Vibrieren" — dies ist völlig normal und zeigt, dass die Kavitation wirkt. Im Vergleich zu invasiven Methoden (Liposuktion mit Anästhesie, Schmerzen, Schwellungen) ist die Kavitation deutlich angenehmer und stressfreier. Es gibt keine Nadeln, keine Schnitte, keine Blutergüsse. Die Behandlung ist so komfortabel, dass viele Kunden dabei entspannen oder sogar schlafen.'
            : 'Нет, ультразвуковая кавитация абсолютно безболезненна и большинством клиентов воспринимается как приятная и расслабляющая. Во время процедуры вы чувствуете лишь лёгкое жужжание или вибрацию ультразвуковой насадки, возможно лёгкое тепло в ткани — но без боли, без жжения, без покалывания. Некоторые клиенты отмечают лёгкое покалывание или «внутреннюю вибрацию» — это совершенно нормально и показывает, что кавитация работает. По сравнению с инвазивными методами (липосакция с анестезией, болями, отёками) кавитация значительно приятнее и менее стрессовая. Нет игл, разрезов, синяков. Процедура настолько комфортна, что многие клиенты расслабляются или даже спят.'
        },
        {
          q: isGerman ? 'Wohin geht das Fett nach der Kavitation?' : 'Куда девается жир после кавитации?',
          a: isGerman
            ? 'Das durch die Kavitation freigesetzte Fett (Triglyceride werden in Fettsäuren und Glycerin zerlegt) wird vom Körper auf natürlichem Wege verarbeitet und ausgeschieden: Die Fettsäuren und Glycerin werden über das Lymphsystem abtransportiert, gelangen über die Blutbahn in die Leber, werden dort verstoffwechselt (in Energie umgewandelt oder zur Ausscheidung vorbereitet) und schließlich über die Nieren (Urin) und den Darm ausgeschieden. Dieser Prozess dauert 3–7 Tage nach jeder Behandlung. Daher ist es wichtig, nach der Kavitation ausreichend Wasser zu trinken (mind. 2–3 Liter täglich), sich moderat zu bewegen (um Lymphe und Kreislauf anzuregen) und Alkohol 48 Stunden zu meiden (Alkohol verlangsamt den Fettabbau in der Leber). Je besser Sie diese Empfehlungen befolgen, desto schneller und effektiver wird das Fett ausgeschieden.'
            : 'Высвобожденный в результате кавитации жир (триглицериды расщепляются на жирные кислоты и глицерин) естественным образом перерабатывается и выводится организмом: жирные кислоты и глицерин транспортируются через лимфатическую систему, попадают через кровоток в печень, там метаболизируются (превращаются в энергию или готовятся к выведению) и в конечном итоге выводятся через почки (моча) и кишечник. Этот процесс занимает 3–7 дней после каждой процедуры. Поэтому важно после кавитации пить достаточно воды (мин. 2–3 литра в день), умеренно двигаться (чтобы стимулировать лимфу и кровообращение) и избегать алкоголя 48 часов (алкоголь замедляет липолиз в печени). Чем лучше вы следуете этим рекомендациям, тем быстрее и эффективнее выводится жир.'
        },
        {
          q: isGerman ? 'Nehme ich durch Kavitation ab (verliere ich Gewicht)?' : 'Я похудею с помощью кавитации (потеряю вес)?',
          a: isGerman
            ? 'Kavitation ist keine Methode zur allgemeinen Gewichtsreduktion, sondern eine Methode zur gezielten Körperkonturierung und Formung. Sie verlieren an Umfang und Volumen in den behandelten Zonen (2–6 cm pro Zone möglich), aber nicht unbedingt viel Gewicht auf der Waage (typischerweise 1–3 kg nach einer kompletten Kur). Der Grund: Fett ist leichter als Muskeln — wenn Sie Fettvolumen verlieren, aber gleichzeitig Muskeln aufbauen (durch Sport), kann Ihr Gewicht gleich bleiben oder sogar leicht steigen, obwohl Sie schlanker und straffer aussehen. Kavitation ist ideal für Menschen mit normalem oder leicht erhöhtem BMI (18–30), die hartnäckige „Problemzonen" haben, die sich trotz gesunder Ernährung und Sport nicht reduzieren lassen. Wenn Ihr Ziel allgemeine Gewichtsabnahme bei starkem Übergewicht ist, empfehlen wir zunächst eine Ernährungsumstellung und Sport — Kavitation kann dann später zur Feinmodellierung eingesetzt werden.'
            : 'Кавитация — это не метод общего похудения, а метод целенаправленной коррекции контуров тела и формирования. Вы теряете объёмы в обработанных зонах (возможно 2–6 см на зону), но не обязательно много веса на весах (обычно 1–3 кг после полного курса). Причина: жир легче мышц — если вы теряете объём жира, но одновременно наращиваете мышцы (через спорт), ваш вес может оставаться прежним или даже слегка увеличиваться, хотя вы выглядите стройнее и подтянутее. Кавитация идеальна для людей с нормальным или слегка повышенным ИМТ (18–30), у которых есть упорные «проблемные зоны», которые не уменьшаются несмотря на здоровое питание и спорт. Если ваша цель — общее похудение при сильном избыточном весе, мы рекомендуем сначала изменить питание и заняться спортом — кавитация может затем использоваться для точной коррекции.'
        },
        {
          q: isGerman ? 'Was ist der Unterschied zwischen Kavitation und Liposuktion (Fettabsaugung)?' : 'В чём разница между кавитацией и липосакцией?',
          a: isGerman
            ? 'Der Unterschied ist grundlegend: 🔹 Liposuktion (Fettabsaugung) ist eine invasive chirurgische Operation unter Vollnarkose oder lokaler Betäubung, bei der mit Kanülen Fettzellen mechanisch abgesaugt werden. Es gibt Schnitte, Narben, Blutergüsse, Schwellungen, Schmerzen, Infektionsrisiken und 2–4 Wochen Ausfallzeit. Die Ergebnisse sind sofort sichtbar, aber radikal. 🔸 Kavitation ist eine völlig nicht-invasive, schmerzfreie Behandlung ohne Anästhesie, ohne Schnitte, ohne Nadeln, bei der Fettzellen mit Ultraschall sanft zerstört und vom Körper natürlich ausgeschieden werden. Es gibt keine Narben, keine Blutergüsse, keine Ausfallzeiten. Die Ergebnisse entwickeln sich graduell über 3–7 Tage nach jeder Sitzung. Kavitation ist die ideale Alternative für Menschen, die keine Operation wollen, keine Risiken eingehen wollen und eine natürlichere, sanftere Methode zur Körperformung suchen. Beide Methoden haben ihren Platz — bei sehr großen Fettmengen ist Liposuktion effektiver, bei lokalen Problemzonen ist Kavitation sicherer und komfortabler.'
            : 'Разница фундаментальная: 🔹 Липосакция — это инвазивная хирургическая операция под общим наркозом или местной анестезией, при которой канюлями механически отсасываются жировые клетки. Есть разрезы, рубцы, синяки, отёки, боли, риски инфекций и 2–4 недели реабилитации. Результаты видны сразу, но радикальны. 🔸 Кавитация — это полностью неинвазивная, безболезненная процедура без анестезии, без разрезов, без игл, при которой жировые клетки мягко разрушаются ультразвуком и естественным образом выводятся организмом. Нет рубцов, синяков, реабилитации. Результаты развиваются постепенно в течение 3–7 дней после каждого сеанса. Кавитация — идеальная альтернатива для тех, кто не хочет операцию, не хочет рисков и ищет более естественный, мягкий метод коррекции фигуры. Оба метода имеют своё место — при очень больших объёмах жира липосакция эффективнее, при локальных проблемных зонах кавитация безопаснее и комфортнее.'
        },
        {
          q: isGerman ? 'Kann ich Kavitation mit anderen Behandlungen kombinieren?' : 'Можно ли комбинировать кавитацию с другими процедурами?',
          a: isGerman
            ? 'Ja, Kavitation lässt sich hervorragend mit anderen Behandlungen kombinieren und die Kombination verstärkt die Wirkung erheblich! Besonders empfehlenswerte Kombinationen: 🔸 Kavitation + Lymphdrainage-Massage = beschleunigte Ausscheidung der Fettsäuren über die Lymphe, Entgiftung und Entstauung. 🔸 Kavitation + RF-Lifting Körper = Fettreduktion + Hautstraffung für optimale Körperkonturierung, besonders nach Gewichtsverlust oder Schwangerschaft. 🔸 Kavitation + Vakuum-Therapie = verstärkte Durchblutung, Anti-Cellulite-Wirkung und Lymphdrainage. 🔸 Kavitation + Kryotherapie = Verstärkung des Fettabbaus durch Kälte und zusätzliche Straffung. Die Kombinationen können individuell auf Ihre Body-Sculpting-Ziele abgestimmt werden. Wir beraten Sie gerne in unserem Studio in München-Haidhausen zu den besten Synergien für maximale Ergebnisse.'
            : 'Да, кавитацию можно отлично комбинировать с другими процедурами, и комбинация значительно усиливает эффект! Особенно рекомендуемые комбинации: 🔸 Кавитация + лимфодренажный массаж = ускоренное выведение жирных кислот через лимфу, детоксикация и снятие застоя. 🔸 Кавитация + RF-лифтинг тела = уменьшение жира + подтяжка кожи для оптимальной коррекции контуров тела, особенно после похудения или беременности. 🔸 Кавитация + вакуумная терапия = усиленное кровообращение, антицеллюлитный эффект и лимфодренаж. 🔸 Кавитация + криотерапия = усиление липолиза через холод и дополнительная подтяжка. Комбинации могут быть индивидуально адаптированы к вашим целям body-sculpting. Мы с радостью проконсультируем вас в нашей студии в Мюнхене-Хайдхаузен по лучшим синергиям для максимальных результатов.'
        },
        {
          q: isGerman ? 'Gibt es Ausfallzeiten nach der Kavitation?' : 'Есть ли период реабилитации после кавитации?',
          a: isGerman
            ? 'Nein, es gibt absolut keine Ausfallzeiten nach der Kavitation! Anders als bei der Liposuktion (2–4 Wochen Ausfallzeit mit Schmerzen, Schwellungen, Kompressionskleidung) können Sie sofort nach der Behandlung Ihrem normalen Alltag nachgehen, arbeiten gehen, Auto fahren oder leichten Sport treiben. Die Haut kann unmittelbar nach der Behandlung leicht gerötet sein oder sich warm anfühlen, was aber innerhalb von 30–60 Minuten vollständig abklingt. Es gibt keine Narben, keine Blutergüsse, keine Schwellungen, keine Schmerzen. Manche Kunden berichten von einem leichten „Druck- oder Völlegefühl" in der behandelten Zone, was durch die freigesetzten Fettsäuren verursacht wird — dies ist normal und verschwindet innerhalb von 24 Stunden. Das macht Kavitation ideal für berufstätige Menschen und alle, die eine effektive Body-Contouring-Methode ohne Einschränkungen suchen.'
            : 'Нет, абсолютно никакого периода реабилитации после кавитации! В отличие от липосакции (2–4 недели реабилитации с болями, отёками, компрессионной одеждой), вы можете сразу после процедуры вернуться к обычной жизни, идти на работу, водить машину или заниматься лёгким спортом. Кожа сразу после процедуры может быть слегка покрасневшей или тёплой на ощупь, но это полностью проходит в течение 30–60 минут. Нет рубцов, синяков, отёков, болей. Некоторые клиенты отмечают лёгкое «чувство давления или наполненности» в обработанной зоне, которое вызвано высвобожденными жирными кислотами — это нормально и исчезает в течение 24 часов. Это делает кавитацию идеальной для работающих людей и всех, кто ищет эффективный метод body-contouring без ограничений.'
        },
        {
          q: isGerman ? 'Für wen ist Kavitation geeignet?' : 'Для кого подходит кавитация?',
          a: isGerman
            ? 'Kavitation ist geeignet für Frauen und Männer mit normalem oder leicht erhöhtem BMI (18–30), die hartnäckige Fettpolster („Problemzonen") haben, die sich trotz gesunder Ernährung und regelmäßigem Sport nicht reduzieren lassen. Typische Problemzonen: Bauch (Unterbauch, „Love Handles"), Hüften („Reiterhosen"), Oberschenkel (Innen- und Außenseite), Gesäß, Oberarme, Knie, unterer Rücken. Kavitation ist auch ideal nach Schwangerschaft oder Gewichtsverlust zur Feinmodellierung. Nicht geeignet ist Kavitation bei starkem Übergewicht (BMI > 30), Schwangerschaft, Leber-/Nierenerkrankungen, Herzschrittmachern, Thrombose/Krampfadern und einigen anderen medizinischen Zuständen (siehe Kontraindikationen). Wir besprechen alle Kontraindikationen in der kostenlosen Beratung in unserem Kosmetikstudio in München.'
            : 'Кавитация подходит для женщин и мужчин с нормальным или слегка повышенным ИМТ (18–30), у которых есть упорные жировые отложения («проблемные зоны»), которые не уменьшаются несмотря на здоровое питание и регулярные занятия спортом. Типичные проблемные зоны: живот (нижний живот, «ушки»), бёдра («галифе»), бедра (внутренняя и наружная сторона), ягодицы, плечи, колени, нижняя часть спины. Кавитация также идеальна после беременности или похудения для точной коррекции. Не подходит кавитация при сильном избыточном весе (ИМТ > 30), беременности, заболеваниях печени/почек, кардиостимуляторе, тромбозе/варикозе и некоторых других медицинских состояниях (см. противопоказания). Мы обсуждаем все противопоказания на бесплатной консультации в нашей косметологической студии в Мюнхене.'
        }
      ]}
      ctaTitle={isGerman ? "Bereit für eine schlanke, definierte Silhouette in München?" : "Готовы к стройному, очерченному силуэту в Мюнхене?"}
      ctaDescription={isGerman
        ? "Buchen Sie jetzt Ihre Ultraschallkavitation in unserem Kosmetikstudio in München-Haidhausen und verabschieden Sie sich von hartnäckigen Fettpolstern — effektiv, schmerzfrei, ohne Operation und mit wissenschaftlich bewährter Wirkung. Kostenlose Beratung inklusive!"
        : "Запишитесь сейчас на ультразвуковую кавитацию в нашей косметологической студии в Мюнхене-Хайдхаузен и попрощайтесь с упорными жировыми отложениями — эффективно, безболезненно, без операции и с научно доказанной эффективностью. Бесплатная консультация включена!"
      }
    />
  );
};

export default Kavitation;
