'use client'

import { ServicePageLayout } from '@/components/ServicePageLayout';
import { Activity } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Biostrom = () => {
  const { language } = useLanguage();
  const isGerman = language === 'de';

  return (
    <ServicePageLayout
      icon={Activity}
      title={isGerman ? "Mikrostromtherapie (Biostrom) in München" : "Микротоковая терапия (биотоки) в Мюнхене"}
      subtitle={isGerman
        ? "Natürliches Lifting und Hautregeneration ohne Injektionen – Ihre Kosmetik in München-Haidhausen"
        : "Естественный лифтинг и регенерация кожи без инъекций – Ваша косметология в Мюнхене-Хайдхаузен"}
      aboutTitle={isGerman ? "Was ist Mikrostromtherapie (Biostrom)?" : "Что такое микротоковая терапия (биотоки)?"}
      aboutDescription={isGerman ? [
        'Die Mikrostromtherapie, auch als Biostrom oder Biolifting bekannt, ist eine moderne nicht-invasive Anti-Aging-Methode aus der ästhetischen Kosmetik. In unserem Studio in München-Haidhausen arbeiten wir mit professionellen, medizinisch zertifizierten Geräten, die sehr schwache elektrische Impulse aussenden – ähnlich den natürlichen Strömen des Körpers.',
        'Diese Mikroströme aktivieren den Zellstoffwechsel, verbessern die Mikrozirkulation von Blut und Lymphe und stimulieren die körpereigene Produktion von Kollagen und Elastin. Das Ergebnis: ein natürlicher Lifting-Effekt, straffere Haut und ein frisches, erholtes Hautbild – ganz ohne Schmerzen, Nadeln oder Ausfallzeiten.',
        'Die Behandlung eignet sich ideal für alle Hauttypen und ist besonders effektiv bei Elastizitätsverlust, Schwellungen, müdem Teint und feinen Linien. Viele unserer Kunden aus München und Umgebung schätzen die Mikrostromtherapie als sanfte Alternative zu invasiven Behandlungen wie Botox oder Fillern.',
        'Ob als regelmäßige Anti-Age-Pflege, nach ästhetischen Eingriffen oder zur Regeneration gestresster Haut – die Mikrostromtherapie in München bietet eine sichere, schmerzfreie und hochwirksame Lösung für natürliche Hautverjüngung.'
      ] : [
        'Микротоковая терапия, также известная как биотоки или биолифтинг, — это современный неинвазивный anti-age метод эстетической косметологии. В нашей студии в Мюнхене-Хайдхаузен мы работаем с профессиональным медицински сертифицированным оборудованием, которое посылает очень слабые электрические импульсы — подобные естественным токам тела.',
        'Эти микротоки активизируют клеточный метаболизм, улучшают микроциркуляцию крови и лимфы и стимулируют собственную выработку коллагена и эластина. Результат: естественный лифтинг-эффект, более упругая кожа и свежий, отдохнувший вид — совершенно без боли, игл и периода восстановления.',
        'Процедура идеально подходит для всех типов кожи и особенно эффективна при потере эластичности, отёках, усталом цвете лица и мелких морщинах. Многие наши клиенты из Мюнхена и окрестностей ценят микротоковую терапию как мягкую альтернативу инвазивным процедурам вроде ботокса или филлеров.',
        'Как регулярный anti-age уход, после эстетических процедур или для регенерации уставшей кожи — микротоковая терапия в Мюнхене предлагает безопасное, безболезненное и высокоэффективное решение для естественного омоложения кожи.'
      ]}
      benefits={isGerman ? [
        'Natürlicher Lifting-Effekt ohne Injektionen oder Skalpell',
        'Straffung der Gesichtsmuskulatur und Verbesserung der Gesichtskonturen',
        'Aktivierung der Kollagen- und Elastinproduktion',
        'Verbesserung der Mikrozirkulation und Sauerstoffversorgung',
        'Reduzierung von feinen Linien, Falten und Schwellungen',
        'Straffung erschlaffter Haut und Verbesserung der Hautstruktur',
        'Lymphdrainage und Entgiftung für ein frisches Hautbild',
        'Reduzierung von Augenringen und Tränensäcken',
        'Strahlender, erholter Teint – ideal nach Stress oder Schlafmangel',
        'Völlig schmerzfrei, entspannend und ohne Ausfallzeiten',
        'Kombinierbar mit anderen Behandlungen (Phonophorese, Ultraschall, LED-Therapie)',
        'Geeignet für alle Hauttypen und jedes Alter'
      ] : [
        'Естественный лифтинг-эффект без инъекций и скальпеля',
        'Подтяжка лицевых мышц и улучшение контуров лица',
        'Активация выработки коллагена и эластина',
        'Улучшение микроциркуляции и снабжения кислородом',
        'Уменьшение мелких морщин, складок и отёков',
        'Подтяжка дряблой кожи и улучшение её структуры',
        'Лимфодренаж и детоксикация для свежего вида кожи',
        'Уменьшение тёмных кругов и мешков под глазами',
        'Сияющий, отдохнувший цвет лица – идеально после стресса или недосыпа',
        'Полностью безболезненно, расслабляюще и без периода восстановления',
        'Комбинируется с другими процедурами (фонофорез, ультразвук, LED-терапия)',
        'Подходит для всех типов кожи и любого возраста'
      ]}
      steps={isGerman ? [
        {
          title: '1. Kostenlose Beratung und Hautanalyse',
          description: 'Wir besprechen Ihre Hautbedürfnisse, analysieren Ihren Hauttyp und legen die Behandlungszonen fest. Dabei klären wir alle Fragen zu Ablauf, Wirkung und empfohlener Anzahl der Sitzungen.'
        },
        {
          title: '2. Gründliche Reinigung der Haut',
          description: 'Die Haut wird sanft gereinigt und von Make-up, Talg und Unreinheiten befreit. Anschließend wird ein spezielles leitfähiges Gel aufgetragen, das die Mikroströme optimal übertragen kann.'
        },
        {
          title: '3. Mikrostrom-Behandlung (45-90 Minuten)',
          description: 'Mit speziellen Elektroden werden sanfte Mikroströme entlang der Gesichtsmuskulatur und Lymphbahnen geführt. Die Behandlung ist völlig schmerzfrei und angenehm entspannend – viele Kunden schlafen dabei sogar ein. Die Mikroimpulse stimulieren die Zellen, fördern die Durchblutung und aktivieren die Kollagenproduktion.'
        },
        {
          title: '4. Abschlusspflege und Nachbehandlung',
          description: 'Nach der Mikrostromtherapie tragen wir eine beruhigende Maske und pflegende Produkte auf, um die Regeneration zu unterstützen und den Effekt zu verstärken. Optional kann die Behandlung mit Phonophorese, LED-Lichttherapie oder hochwertigen Seren kombiniert werden.'
        },
        {
          title: '5. Empfehlungen für zu Hause',
          description: 'Für optimale und langanhaltende Ergebnisse erhalten Sie individuelle Pflegeempfehlungen für zu Hause sowie einen Plan für Folgebehandlungen.'
        }
      ] : [
        {
          title: '1. Бесплатная консультация и анализ кожи',
          description: 'Мы обсуждаем ваши потребности кожи, анализируем тип кожи и определяем зоны обработки. Отвечаем на все вопросы о процедуре, эффекте и рекомендуемом количестве сеансов.'
        },
        {
          title: '2. Тщательное очищение кожи',
          description: 'Кожа мягко очищается от макияжа, кожного сала и загрязнений. Затем наносится специальный проводящий гель для оптимальной передачи микротоков.'
        },
        {
          title: '3. Микротоковая процедура (45-90 минут)',
          description: 'Специальными электродами мягкие микротоки проводятся вдоль лицевых мышц и лимфатических путей. Процедура полностью безболезненна и приятно расслабляет – многие клиенты даже засыпают. Микроимпульсы стимулируют клетки, улучшают кровообращение и активируют выработку коллагена.'
        },
        {
          title: '4. Завершающий уход',
          description: 'После микротоковой терапии наносим успокаивающую маску и питательные средства для поддержки регенерации и усиления эффекта. По желанию процедуру можно комбинировать с фонофорезом, LED-терапией или сыворотками.'
        },
        {
          title: '5. Рекомендации для дома',
          description: 'Для оптимальных и долговременных результатов вы получите индивидуальные рекомендации по уходу дома и план последующих процедур.'
        }
      ]}
      priceSection="apparative-antiaging"
      contraindications={isGerman ? [
        'Schwangerschaft',
        'Herzschrittmacher',
        'Epilepsie',
        'Metallimplantate im Gesicht',
        'Krebs oder Chemotherapie',
        'Thrombose',
        'Frische Filler oder Botox (mind. 2 Wochen Abstand)'
      ] : [
        'Беременность',
        'Кардиостимулятор',
        'Эпилепсия',
        'Металлические имплантаты на лице',
        'Онкология или химиотерапия',
        'Тромбоз',
        'Свежие филлеры или ботокс (минимум 2 недели перерыва)'
      ]}
      faq={isGerman ? [
        {
          q: 'Wie oft sollte ich die Mikrostromtherapie machen?',
          a: 'Für optimale Anti-Aging-Ergebnisse empfehlen wir einen Kur von 8–12 Behandlungen, idealerweise 1–2 Mal pro Woche. Nach Abschluss der Kur genügt eine Erhaltungsbehandlung alle 3–4 Wochen, um den Lifting-Effekt langfristig zu bewahren.'
        },
        {
          q: 'Spürt man die Mikroströme während der Behandlung?',
          a: 'Nein, die Mikroströme sind so schwach, dass sie in der Regel nicht spürbar sind. Die Behandlung ist völlig schmerzfrei und wird von den meisten Kunden als sehr entspannend empfunden – viele schlafen sogar dabei ein.'
        },
        {
          q: 'Wann sehe ich erste Ergebnisse der Mikrostromtherapie?',
          a: 'Viele Kunden bemerken bereits nach der ersten Behandlung ein frischeres, strafferes Hautbild. Der volle Lifting-Effekt zeigt sich nach 6–10 Sitzungen.'
        },
        {
          q: 'Ist Mikrostromtherapie vergleichbar mit Botox oder Fillern?',
          a: 'Nein, die Wirkungsweise ist völlig unterschiedlich. Mikrostromtherapie trainiert die Gesichtsmuskulatur natürlich und stimuliert Kollagen – ganz ohne Injektionen.'
        }
      ] : [
        {
          q: 'Как часто нужно делать микротоковую терапию?',
          a: 'Для оптимальных anti-age результатов рекомендуем курс из 8–12 процедур, в идеале 1–2 раза в неделю. После курса достаточно поддерживающей процедуры раз в 3–4 недели для сохранения лифтинг-эффекта.'
        },
        {
          q: 'Чувствуются ли микротоки во время процедуры?',
          a: 'Нет, микротоки настолько слабые, что обычно не ощущаются. Процедура полностью безболезненна и очень расслабляет – многие клиенты даже засыпают.'
        },
        {
          q: 'Когда я увижу первые результаты микротоковой терапии?',
          a: 'Многие клиенты замечают более свежий, подтянутый вид кожи уже после первой процедуры. Полный лифтинг-эффект проявляется после 6–10 сеансов.'
        },
        {
          q: 'Сравнима ли микротоковая терапия с ботоксом или филлерами?',
          a: 'Нет, механизм действия совершенно разный. Микротоки тренируют лицевые мышцы естественным образом и стимулируют коллаген – без инъекций.'
        }
      ]}
      ctaTitle={isGerman ? "Bereit für natürliches Face-Lifting in München?" : "Готовы к естественному лифтингу лица в Мюнхене?"}
      ctaDescription={isGerman
        ? "Buchen Sie jetzt Ihre Mikrostromtherapie in unserem Studio in München-Haidhausen und erleben Sie den Lifting-Effekt ohne Nadeln, ohne Schmerzen und ohne Ausfallzeiten. Kostenlose Beratung inklusive!"
        : "Запишитесь на микротоковую терапию в нашей студии в Мюнхене-Хайдхаузен и ощутите лифтинг-эффект без игл, без боли и без периода восстановления. Бесплатная консультация включена!"}
    />
  );
};

export default Biostrom;
