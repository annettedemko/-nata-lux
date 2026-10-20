'use client'

import { ServicePageLayout } from '@/components/ServicePageLayout';
import { Waves, Droplet, Zap, Sparkles } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { ServiceCard } from '@/components/ServiceCard';

const Ultraschall = () => {
  const { language } = useLanguage();
  // Custom sections component for procedure links
  const UltraschallProcedures = () => (
    <div className="space-y-6">
      <h2 className="text-3xl font-heading font-bold text-brand-espresso mb-8">
        {language === 'de' ? 'Unsere Ultraschall-Behandlungen in München' : language === 'ru' ? 'Наши ультразвуковые процедуры в Мюнхене' : 'Наші ультразвукові процедури у Мюнхені'}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <ServiceCard
          title={language === 'de' ? 'Phonophorese' : language === 'ru' ? 'Фонофорез' : 'Фонофорез'}
          description={language === 'de'
            ? 'Tiefe Einschleusung von Wirkstoffen mit Ultraschall'
            : language === 'ru' ? 'Глубокое введение активных веществ ультразвуком'
            : 'Глибоке введення активних речовин ультразвуком'}
          icon={Droplet}
          href="/services/phonophorese"
          image="/ultraschall-gesichtsbehandlung-muenchen.jpeg"
        />
        <ServiceCard
          title={language === 'de' ? 'Kavitation' : language === 'ru' ? 'Кавитация' : 'Кавітація'}
          description={language === 'de'
            ? 'Nicht-invasive Behandlung zur Körperkonturierung'
            : language === 'ru' ? 'Неинвазивная процедура для коррекции контуров тела'
            : 'Неінвазивна процедура для корекції контурів тіла'}
          icon={Zap}
          href="/services/koerperbehandlungen/kavitation"
          image="/ultraschall-kavitation-muenchen.jpeg"
        />
        <ServiceCard
          title={language === 'de' ? 'Gesichtsreinigung' : language === 'ru' ? 'Чистка лица' : 'Чистка обличчя'}
          description={language === 'de'
            ? 'Sanfte Tiefenreinigung mit Ultraschall'
            : language === 'ru' ? 'Мягкое глубокое очищение ультразвуком'
            : 'М\'яке глибоке очищення ультразвуком'}
          icon={Sparkles}
          href="/services/gesichtsreinigung"
          image="/gesichtsbehandlung-apparativ.jpg"
        />
      </div>

      <div className="mt-8 p-6 bg-brand-gold/5 rounded-lg border border-brand-gold/20">
        <p className="text-brand-espresso/90 leading-relaxed">
          {language === 'de'
            ? '💡 Alle drei Verfahren nutzen die gleiche physikalische Grundlage — die Wirkung von Ultraschallwellen — unterscheiden sich jedoch in der Frequenz, Intensität, Tiefe, Behandlungszielen und verwendeten Präparaten. Während Phonophorese auf intensive Wirkstoffeinschleusung und Anti-Aging-Pflege abzielt, dient Kavitation der Körperkonturierung, und Ultraschall-Gesichtsreinigung der gründlichen, aber sanften Hautreinigung und Porenverfeinerung.'
            : language === 'ru' ? '💡 Все три метода используют одну и ту же физическую основу — действие ультразвуковых волн, но различаются по частоте, интенсивности, глубине, целям воздействия и применяемым препаратам. В то время как фонофорез направлен на интенсивное введение активных веществ и anti-age уход, кавитация служит для коррекции контуров тела, а ультразвуковая чистка лица — для глубокого, но деликатного очищения и сужения пор.'
            : '💡 Усі три методи використовують одну й ту саму фізичну основу — дію ультразвукових хвиль, але відрізняються за частотою, інтенсивністю, глибиною, цілями впливу та застосовуваними препаратами. В той час як фонофорез спрямований на інтенсивне введення активних речовин та anti-age догляд, кавітація слугує для корекції контурів тіла, а ультразвукове чищення обличчя — для глибокого, але делікатного очищення та звуження пор.'
          }
        </p>
      </div>
    </div>
  );

  return (
    <ServicePageLayout
      icon={Waves}
      title={language === 'de' ? "Ultraschalltherapie in München — Moderne Technologien für Hautpflege und Regeneration" : language === 'ru' ? "Ультразвуковая терапия в Мюнхене — Современные технологии ухода и восстановления" : "Ультразвукова терапія у Мюнхені — Сучасні технології догляду та відновлення"}
      subtitle={language === 'de' ? "Moderne, nicht-invasive Behandlungen für Gesicht und Körper in München-Haidhausen" : language === 'ru' ? "Современные неинвазивные процедуры для лица и тела в Мюнхене-Хайдхаузен" : "Сучасні неінвазивні процедури для обличчя та тіла у Мюнхені-Хайдхаузен"}
      aboutTitle={language === 'de' ? "Was ist Ultraschalltherapie und wie funktioniert sie?" : language === 'ru' ? "Что такое ультразвуковая терапия и как она работает?" : "Що таке ультразвукова терапія та як вона працює?"}
      aboutDescription={[
        language === 'de'
          ? 'Ultraschalltherapie nutzt hochfrequente Schallwellen, die sanfte Mikrovibrationen in den Hautschichten erzeugen. Diese regen den Hautstoffwechsel an, können die Kollagenbildung unterstützen und fördern die natürliche Erneuerung der Haut — sanft und angenehm.'
          : language === 'ru' ? 'Ультразвуковая терапия использует высокочастотные волны, создающие микровибрации в коже. Они активизируют обмен веществ в коже, могут поддерживать выработку коллагена и естественное обновление кожи — мягко и комфортно.'
          : 'Ультразвукова терапія використовує високочастотні хвилі, що створюють мікровібрації в шкірі. Вони активізують обмін речовин у шкірі, можуть підтримувати вироблення колагену та природне оновлення шкіри — м’яко та комфортно.',

        language === 'de'
          ? 'Wir bieten drei Arten: Phonophorese (Anti-Aging), Kavitation (Körperformung) und Gesichtsreinigung (Tiefenreinigung).'
          : language === 'ru' ? 'Мы предлагаем три вида: фонофорез (anti-age уход), кавитация (коррекция фигуры) и чистка лица (глубокое очищение).'
          : 'Ми пропонуємо три види: фонофорез (anti-age догляд), кавітація (корекція фігури) та чищення обличчя (глибоке очищення).'
      ]}
      benefits={[
        language === 'de' ? 'Fördert die Mikrozirkulation der Haut' : language === 'ru' ? 'Улучшение микроциркуляции кожи' : 'Покращення мікроциркуляції шкіри',
        language === 'de' ? 'Kann die Kollagen- und Elastinbildung anregen – für ein strafferes, frischeres Hautbild' : language === 'ru' ? 'Может стимулировать выработку коллагена и эластина — для более упругой, свежей кожи' : 'Може стимулювати вироблення колагену та еластину — для пружнішої, свіжішої шкіри',
        language === 'de' ? 'Verbesserte Aufnahme von Pflegewirkstoffen bei Phonophorese' : language === 'ru' ? 'Улучшенное проникновение ухаживающих веществ при фонофорезе' : 'Покращене проникнення доглядових речовин при фонофорезі',
        language === 'de' ? 'Belebt den Hautstoffwechsel und unterstützt die natürliche Erneuerung' : language === 'ru' ? 'Активизирует обмен веществ в коже и поддерживает её естественное обновление' : 'Активізує обмін речовин у шкірі та підтримує її природне оновлення',
        language === 'de' ? 'Drainierender Effekt – das Gesicht kann weniger geschwollen wirken' : language === 'ru' ? 'Дренажный эффект — лицо может выглядеть менее отёчным' : 'Дренажний ефект — обличчя може виглядати менш набряклим',
        language === 'de' ? 'Sanfte Mikromassage zur Entspannung der Gesichtsmuskulatur' : language === 'ru' ? 'Мягкий микромассаж для расслабления лицевых мышц' : 'М\'який мікромасаж для розслаблення лицьових м\'язів',
        language === 'de' ? 'Beruhigt das Hautgefühl' : language === 'ru' ? 'Успокаивает кожу' : 'Заспокоює шкіру',
        language === 'de' ? 'Porenverfeinerung und Verbesserung der Hautstruktur' : language === 'ru' ? 'Сужение пор и улучшение текстуры кожи' : 'Звуження пор та покращення текстури шкіри',
        language === 'de' ? 'Nicht-invasive Körperkonturierung bei Kavitation' : language === 'ru' ? 'Неинвазивная коррекция контуров тела при кавитации' : 'Неінвазивна корекція контурів тіла при кавітації',
        language === 'de' ? 'Tiefenreinigung ohne mechanische Belastung der Haut' : language === 'ru' ? 'Глубокое очищение без механического травмирования кожи' : 'Глибоке очищення без механічного травмування шкіри',
        language === 'de' ? 'Angenehm, schonend und entspannend' : language === 'ru' ? 'Приятно, бережно и расслабляюще' : 'Приємно, дбайливо та розслаблююче',
        language === 'de' ? 'In der Regel keine Ausfallzeiten — sofort gesellschaftsfähig' : language === 'ru' ? 'Как правило, без периода восстановления — сразу готовы к общению' : 'Як правило, без періоду відновлення — одразу готові до спілкування',
        language === 'de' ? 'Kombinierbar mit anderen Behandlungen (Mikrostrom, RF, LED-Lichttherapie)' : language === 'ru' ? 'Можно комбинировать с другими процедурами (микротоки, RF, светотерапия)' : 'Можна поєднувати з іншими процедурами (мікроструми, RF, світлотерапія)',
        language === 'de' ? 'Geeignet für viele Hauttypen und Altersgruppen' : language === 'ru' ? 'Подходит для многих типов кожи и возрастов' : 'Підходить для багатьох типів шкіри та віку',
        language === 'de' ? 'Seit Jahrzehnten bewährte Technologie in der Kosmetik' : language === 'ru' ? 'Технология, десятилетиями применяемая в косметологии' : 'Технологія, що десятиліттями застосовується в косметології',
        language === 'de' ? 'Sanfte, nicht-invasive Pflege – ganz ohne Injektionen' : language === 'ru' ? 'Мягкий, неинвазивный уход — без инъекций' : 'М’який, неінвазивний догляд — без ін’єкцій'
      ]}
      steps={[
        {
          title: language === 'de' ? '1. Kostenlose Beratung und Hautanalyse' : language === 'ru' ? '1. Бесплатная консультация и анализ кожи' : '1. Безкоштовна консультація та аналіз шкіри',
          description: language === 'de'
            ? 'Analyse von Hauttyp, Problemen und Zielen. Empfehlung der optimalen Ultraschall-Behandlung.'
            : language === 'ru' ? 'Анализ типа кожи, проблем и целей. Рекомендация оптимальной ультразвуковой процедуры.'
            : 'Аналіз типу шкіри, проблем та цілей. Рекомендація оптимальної ультразвукової процедури.'
        },
        {
          title: language === 'de' ? '2. Vorbereitung der Haut' : language === 'ru' ? '2. Подготовка кожи' : '2. Підготовка шкіри',
          description: language === 'de'
            ? 'Gründliche Reinigung und Auftragen des Kontaktgels. Bei Phonophorese zusätzlich Auftragen hochwertiger Wirkstoffe.'
            : language === 'ru' ? 'Тщательное очищение и нанесение контактного геля. При фонофорезе дополнительно нанесение активных веществ.'
            : 'Ретельне очищення та нанесення контактного гелю. При фонофорезі додатково нанесення активних речовин.'
        },
        {
          title: language === 'de' ? '3. Ultraschall-Behandlung (30-60 Minuten)' : language === 'ru' ? '3. Ультразвуковая процедура (30-60 минут)' : '3. Ультразвукова процедура (30-60 хвилин)',
          description: language === 'de'
            ? 'Sanfte Behandlung mit Ultraschallkopf. Angenehm und entspannend.'
            : language === 'ru' ? 'Мягкая обработка ультразвуковым датчиком. Комфортно и расслабляюще.'
            : 'М\'яка обробка ультразвуковим датчиком. Комфортно та розслаблююче.'
        },
        {
          title: language === 'de' ? '4. Abschlusspflege' : language === 'ru' ? '4. Завершающий уход' : '4. Завершальний догляд',
          description: language === 'de'
            ? 'Beruhigende Maske und Serum. Optional Kombination mit anderen Behandlungen.'
            : language === 'ru' ? 'Успокаивающая маска и сыворотка. Опционально комбинация с другими процедурами.'
            : 'Заспокійлива маска та сироватка. За бажанням комбінація з іншими процедурами.'
        },
        {
          title: language === 'de' ? '5. Pflegeempfehlungen' : language === 'ru' ? '5. Рекомендации' : '5. Рекомендації',
          description: language === 'de'
            ? 'Individuelle Pflegetipps und Behandlungsplan für optimale Ergebnisse.'
            : language === 'ru' ? 'Индивидуальные рекомендации по уходу и план процедур для оптимального результата.'
            : 'Індивідуальні рекомендації з догляду та план процедур для оптимального результату.'
        }
      ]}
      // Add custom section for procedures
      additionalSections={<UltraschallProcedures />}
      // No price table - redirect to individual services
      priceSection="apparative-antiaging"
      contraindications={[
        language === 'de' ? 'Schwangerschaft' : language === 'ru' ? 'Беременность' : 'Вагітність',
        language === 'de' ? 'Herzschrittmacher oder Metallimplantate im Behandlungsbereich' : language === 'ru' ? 'Кардиостимулятор или металлические имплантаты в зоне воздействия' : 'Кардіостимулятор або металеві імплантати в зоні впливу',
        language === 'de' ? 'Thrombose oder schwere Venenerkrankungen' : language === 'ru' ? 'Тромбоз или тяжёлые заболевания вен' : 'Тромбоз або тяжкі захворювання вен',
        language === 'de' ? 'Krebs oder Chemotherapie' : language === 'ru' ? 'Онкология или химиотерапия' : 'Онкологія або хіміотерапія',
        language === 'de' ? 'Epilepsie' : language === 'ru' ? 'Эпилепсия' : 'Епілепсія',
        language === 'de' ? 'Aktive Hautinfektionen, Herpes oder offene Wunden' : language === 'ru' ? 'Активные кожные инфекции, герпес или открытые раны' : 'Активні шкірні інфекції, герпес або відкриті рани',
        language === 'de' ? 'Frische Operationen (mind. 3-6 Monate Abstand)' : language === 'ru' ? 'Недавние операции (мин. 3-6 месяцев после)' : 'Нещодавні операції (мін. 3-6 місяців після)',
        language === 'de' ? 'Frische Filler oder Botox (mind. 2 Wochen Abstand)' : language === 'ru' ? 'Недавние филлеры или ботокс (мин. 2 недели после)' : 'Нещодавні філери або ботокс (мін. 2 тижні після)'
      ]}
      faq={[
        {
          q: language === 'de' ? 'Was ist der Unterschied zwischen Phonophorese, Kavitation und Ultraschall-Gesichtsreinigung?' : language === 'ru' ? 'В чём разница между фонофорезом, кавитацией и ультразвуковой чисткой лица?' : 'У чому різниця між фонофорезом, кавітацією та ультразвуковим чищенням обличчя?',
          a: language === 'de'
            ? `Alle drei Verfahren nutzen Ultraschallwellen, unterscheiden sich jedoch in Frequenz, Intensität und Zielsetzung:

🔹 Ultraschall-Phonophorese (1-3 MHz) schleust hochwertige Wirkstoffe (Hyaluronsäure, Kollagen, Vitamine, Exosomen) gezielt in die Haut ein — ideal für Anti-Aging-Pflege, intensive Feuchtigkeit und ein frisches Hautbild.

🔹 Ultraschall-Kavitation (40 kHz) erzeugt Mikrobläschen im Unterhautgewebe — ideal für eine nicht-invasive Körperkonturierung an Bauch, Hüften und Oberschenkeln.

🔹 Ultraschall-Gesichtsreinigung (20-30 kHz) entfernt sanft abgestorbene Hautzellen, Talg und Unreinheiten — ideal für gründliche, aber schonende Tiefenreinigung und Porenverfeinerung.`
            : language === 'ru' ? `Все три метода используют ультразвуковые волны, но различаются по частоте, интенсивности и целям:

🔹 Ультразвуковой фонофорез (1-3 МГц) вводит высококачественные активные вещества (гиалуроновая кислота, коллаген, витамины, экзосомы) направленно в кожу — идеально для anti-age ухода, интенсивного увлажнения и свежего вида кожи.

🔹 Ультразвуковая кавитация (40 кГц) создаёт микропузырьки в подкожной ткани — идеально для неинвазивной коррекции контуров тела на животе, бёдрах, галифе.

🔹 Ультразвуковая чистка лица (20-30 кГц) деликатно удаляет ороговевшие клетки, кожное сало и загрязнения — идеально для глубокого, но щадящего очищения и сужения пор.`
            : `Усі три методи використовують ультразвукові хвилі, але відрізняються за частотою, інтенсивністю та цілями:

🔹 Ультразвуковий фонофорез (1-3 МГц) вводить високоякісні активні речовини (гіалуронова кислота, колаген, вітаміни, екзосоми) спрямовано в шкіру — ідеально для anti-age догляду, інтенсивного зволоження та свіжого вигляду шкіри.

🔹 Ультразвукова кавітація (40 кГц) створює мікробульбашки в підшкірній тканині — ідеально для неінвазивної корекції контурів тіла на животі, стегнах, галіфе.

🔹 Ультразвукове чищення обличчя (20-30 кГц) делікатно видаляє ороговілі клітини, шкірне сало та забруднення — ідеально для глибокого, але щадного очищення та звуження пор.`
        },
        {
          q: language === 'de' ? 'Ist Ultraschalltherapie schmerzhaft oder gefährlich?' : language === 'ru' ? 'Ультразвуковая терапия болезненна или опасна?' : 'Ультразвукова терапія болісна або небезпечна?',
          a: language === 'de'
            ? 'Nein, die Ultraschallbehandlung ist schmerzarm, schonend und wird von den meisten Kunden als sehr angenehm und entspannend empfunden. Sie spüren lediglich eine sanfte Wärme und leichte Vibrationen auf der Haut. Die Technologie wird seit Jahrzehnten in der ästhetischen Kosmetik eingesetzt. Anders als invasive Verfahren gibt es keine Injektionen, keine Schnitte und in der Regel keine Ausfallzeiten. Zu den Kontraindikationen zählen Schwangerschaft, Herzschrittmacher, Thrombose und einige andere gesundheitliche Zustände, die wir in der Beratung besprechen.'
            : language === 'ru' ? 'Нет, ультразвуковая процедура комфортна, бережна и большинством клиентов воспринимается как очень приятная и расслабляющая. Вы чувствуете лишь мягкое тепло и лёгкие вибрации на коже. Технология десятилетиями применяется в эстетической косметологии. В отличие от инвазивных процедур, здесь нет инъекций, разрезов и, как правило, периода восстановления. К противопоказаниям относятся беременность, кардиостимулятор, тромбоз и некоторые другие состояния здоровья, которые мы обсуждаем на консультации.'
            : 'Ні, ультразвукова процедура комфортна, дбайлива і більшістю клієнтів сприймається як дуже приємна та розслаблююча. Ви відчуваєте лише м’яке тепло та легкі вібрації на шкірі. Технологія десятиліттями застосовується в естетичній косметології. На відміну від інвазивних процедур, тут немає ін’єкцій, розрізів і, як правило, періоду відновлення. До протипоказань належать вагітність, кардіостимулятор, тромбоз та деякі інші стани здоров’я, які ми обговорюємо на консультації.'
        },
        {
          q: language === 'de' ? 'Wie viele Behandlungen brauche ich für sichtbare Ergebnisse?' : language === 'ru' ? 'Сколько процедур нужно для видимого результата?' : 'Скільки процедур потрібно для видимого результату?',
          a: language === 'de'
            ? `Die Anzahl der Behandlungen hängt von der gewählten Methode und Ihren individuellen Zielen ab:

✅ Phonophorese: Erste Ergebnisse (prallere, strahlendere Haut) bereits nach 1-2 Behandlungen sichtbar. Für einen nachhaltigeren Anti-Aging-Effekt empfehlen wir eine Kur von 8-10 Behandlungen, 1-2× pro Woche, gefolgt von Erhaltungsbehandlungen 1× pro Monat.

✅ Kavitation: Erste Verbesserungen nach 3-4 Behandlungen spürbar. Für die Körperkonturierung empfehlen wir in der Regel 8-12 Behandlungen, 1× pro Woche, ggf. gefolgt von Erhaltungsbehandlungen alle 2-3 Monate.

✅ Gesichtsreinigung: Die Haut wirkt direkt nach jeder Behandlung frischer und reiner. Für ein dauerhaft gepflegtes, verfeinertes Hautbild empfehlen wir 1× alle 4-6 Wochen. Ergebnisse sind individuell verschieden.`
            : language === 'ru' ? `Количество процедур зависит от выбранного метода и ваших индивидуальных целей:

✅ Фонофорез: Первые результаты (более упругая, сияющая кожа) видны уже после 1-2 процедур. Для более стойкого anti-age эффекта мы рекомендуем курс из 8-10 процедур, 1-2× в неделю, после чего поддерживающие сеансы 1× в месяц.

✅ Кавитация: Первые улучшения ощутимы после 3-4 процедур. Для коррекции контуров тела мы обычно рекомендуем 8-12 процедур, 1× в неделю, при необходимости с последующими поддерживающими сеансами каждые 2-3 месяца.

✅ Чистка лица: Кожа выглядит свежее и чище сразу после каждой процедуры. Для поддержания ухоженной кожи с более ровным рельефом мы рекомендуем 1× каждые 4-6 недель. Результаты индивидуальны.`
            : `Кількість процедур залежить від обраного методу та ваших індивідуальних цілей:

✅ Фонофорез: Перші результати (пружніша, сяюча шкіра) видні вже після 1-2 процедур. Для стійкішого anti-age ефекту ми рекомендуємо курс із 8-10 процедур, 1-2× на тиждень, після чого підтримуючі сеанси 1× на місяць.

✅ Кавітація: Перші покращення відчутні після 3-4 процедур. Для корекції контурів тіла ми зазвичай рекомендуємо 8-12 процедур, 1× на тиждень, за необхідності з наступними підтримуючими сеансами кожні 2-3 місяці.

✅ Чищення обличчя: Шкіра виглядає свіжішою та чистішою одразу після кожної процедури. Для підтримання доглянутої шкіри з рівнішим рельєфом ми рекомендуємо 1× кожні 4-6 тижнів. Результати індивідуальні.`
        }
      ]}
      ctaTitle={language === 'de' ? "Bereit für moderne Ultraschalltherapie in München?" : language === 'ru' ? "Готовы к современной ультразвуковой терапии в Мюнхене?" : "Готові до сучасної ультразвукової терапії у Мюнхені?"}
      ctaDescription={language === 'de'
        ? "Entdecken Sie die vielfältigen Möglichkeiten der Ultraschalltherapie in unserem Kosmetikstudio in München-Haidhausen: intensive Anti-Aging-Pflege mit Phonophorese, nicht-invasive Körperkonturierung mit Kavitation oder gründliche Gesichtsreinigung — sanft, angenehm und individuell auf Sie abgestimmt. Kostenlose Beratung inklusive!"
        : language === 'ru' ? "Откройте для себя разнообразные возможности ультразвуковой терапии в нашей косметологической студии в Мюнхене-Хайдхаузен: интенсивный anti-age уход с фонофорезом, неинвазивная коррекция контуров тела с кавитацией или глубокая чистка лица — мягко, комфортно и индивидуально. Бесплатная консультация включена!"
        : "Відкрийте для себе різноманітні можливості ультразвукової терапії в нашій косметологічній студії у Мюнхені-Хайдхаузен: інтенсивний anti-age догляд з фонофорезом, неінвазивна корекція контурів тіла з кавітацією або глибоке чищення обличчя — м’яко, комфортно та індивідуально. Безкоштовна консультація включена!"
      }
    />
  );
};

export default Ultraschall;
