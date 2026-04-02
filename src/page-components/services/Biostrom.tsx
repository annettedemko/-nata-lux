'use client'

import { ServicePageLayout } from '@/components/ServicePageLayout';
import { Activity, Droplet, Sun, Zap } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { ServiceCard } from '@/components/ServiceCard';
import { ProcedureSchema } from '@/components/ProcedureSchema';

const Biostrom = () => {
  const { language } = useLanguage();
  // Schema section
  const SchemaSection = () => (
    <ProcedureSchema
      germanImages={['/182 1.jpg']}
      russianImages={['/biostrom-lichttherapie.jpg']}
      altTextGerman="Mikrostromtherapie Schema"
      altTextRussian="Схема микротоковой терапии"
      scale={0.67}
    />
  );

  // Custom section for recommended combinations
  const RecommendedServices = () => (
    <div className="mt-12">
      <h2 className="text-2xl md:text-3xl font-heading font-semibold text-brand-espresso mb-6 text-center">
        {language === 'de' ? 'Empfohlene Kombinationen' : language === 'ru' ? 'Рекомендуемые комбинации' : 'Рекомендовані комбінації'}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <ServiceCard
          title={language === 'de' ? 'Phonophorese' : language === 'ru' ? 'Фонофорез' : 'Фонофорез'}
          description={language === 'de' ? 'Ultraschall für Wirkstoffeinschleusung' : language === 'ru' ? 'Ультразвук для введения активных веществ' : 'Ультразвук для введення активних речовин'}
          icon={Droplet}
          href="/services/phonophorese"
          image="/ultraschall-gesichtsbehandlung-muenchen.jpeg"
        />
        <ServiceCard
          title={language === 'de' ? 'Lichttherapie' : language === 'ru' ? 'Светотерапия' : 'Світлотерапія'}
          description={language === 'de' ? 'LED-Licht für Beruhigung und Kollagenstimulation' : language === 'ru' ? 'LED-свет для успокоения и стимуляции коллагена' : 'LED-світло для заспокоєння та стимуляції колагену'}
          icon={Sun}
          href="/services/apparative-anti-aging/lichttherapie"
          image="/biostrom-behandlung-muenchen.jpeg"
        />
        <ServiceCard
          title="RF-Lifting"
          description={language === 'de' ? 'Radiofrequenz für intensive Straffung' : language === 'ru' ? 'Радиочастоты для интенсивной подтяжки' : 'Радіочастоти для інтенсивної підтяжки'}
          icon={Zap}
          href="/services/apparative-anti-aging/rf-lifting"
          image="/rf-lifting-behandlung-muenchen.jpeg"
        />
      </div>
    </div>
  );

  return (
    <ServicePageLayout
      icon={Activity}
      title={language === 'de' ? "Mikrostromtherapie (Biostrom) in München" : language === 'ru' ? "Микротоковая терапия (биотоки) в Мюнхене" : "Мікрострумова терапія (біоструми) у Мюнхені"}
      subtitle={language === 'de'
        ? "Natürliches Lifting und Hautregeneration ohne Injektionen – Ihre Kosmetik in München-Haidhausen"
        : language === 'ru' ? "Естественный лифтинг и регенерация кожи без инъекций – Ваша косметология в Мюнхене-Хайдхаузен"
        : "Природний ліфтинг та регенерація шкіри без ін'єкцій – Ваша косметологія у Мюнхені-Хайдхаузен"}
      aboutTitle={language === 'de' ? "Was ist Mikrostromtherapie (Biostrom)?" : language === 'ru' ? "Что такое микротоковая терапия (биотоки)?" : "Що таке мікрострумова терапія (біоструми)?"}
      aboutDescription={language === 'de' ? [
        'Die Mikrostromtherapie, auch als Biostrom oder Biolifting bekannt, ist eine moderne nicht-invasive Anti-Aging-Methode aus der ästhetischen Kosmetik. In unserem Studio in München-Haidhausen arbeiten wir mit professionellen, medizinisch zertifizierten Geräten, die sehr schwache elektrische Impulse aussenden – ähnlich den natürlichen Strömen des Körpers.',
        'Diese Mikroströme aktivieren den Zellstoffwechsel, verbessern die Mikrozirkulation von Blut und Lymphe und stimulieren die körpereigene Produktion von Kollagen und Elastin. Das Ergebnis: ein natürlicher Lifting-Effekt, straffere Haut und ein frisches, erholtes Hautbild – ganz ohne Schmerzen, Nadeln oder Ausfallzeiten.',
        'Die Behandlung eignet sich ideal für alle Hauttypen und ist besonders effektiv bei Elastizitätsverlust, Schwellungen, müdem Teint und feinen Linien. Viele unserer Kunden aus München und Umgebung schätzen die Mikrostromtherapie als sanfte Alternative zu invasiven Behandlungen wie Botox oder Fillern.',
        'Ob als regelmäßige Anti-Age-Pflege, nach ästhetischen Eingriffen oder zur Regeneration gestresster Haut – die Mikrostromtherapie in München bietet eine sichere, schmerzfreie und hochwirksame Lösung für natürliche Hautverjüngung.'
      ] : language === 'ru' ? [
        'Микротоковая терапия, также известная как биотоки или биолифтинг, — это современный неинвазивный anti-age метод эстетической косметологии. В нашей студии в Мюнхене-Хайдхаузен мы работаем с профессиональным медицински сертифицированным оборудованием, которое посылает очень слабые электрические импульсы — подобные естественным токам тела.',
        'Эти микротоки активизируют клеточный метаболизм, улучшают микроциркуляцию крови и лимфы и стимулируют собственную выработку коллагена и эластина. Результат: естественный лифтинг-эффект, более упругая кожа и свежий, отдохнувший вид — совершенно без боли, игл и периода восстановления.',
        'Процедура идеально подходит для всех типов кожи и особенно эффективна при потере эластичности, отёках, усталом цвете лица и мелких морщинах. Многие наши клиенты из Мюнхена и окрестностей ценят микротоковую терапию как мягкую альтернативу инвазивным процедурам вроде ботокса или филлеров.',
        'Как регулярный anti-age уход, после эстетических процедур или для регенерации уставшей кожи — микротоковая терапия в Мюнхене предлагает безопасное, безболезненное и высокоэффективное решение для естественного омоложения кожи.'
      ] : [
        'Мікрострумова терапія, також відома як біоструми або біоліфтинг, — це сучасний неінвазивний anti-age метод естетичної косметології. У нашій студії у Мюнхені-Хайдхаузен ми працюємо з професійним медично сертифікованим обладнанням, яке посилає дуже слабкі електричні імпульси — подібні до природних струмів тіла.',
        'Ці мікроструми активізують клітинний метаболізм, покращують мікроциркуляцію крові та лімфи і стимулюють власне вироблення колагену та еластину. Результат: природний ліфтинг-ефект, пружніша шкіра та свіжий, відпочилий вигляд — абсолютно без болю, голок та періоду відновлення.',
        'Процедура ідеально підходить для всіх типів шкіри і особливо ефективна при втраті еластичності, набряках, втомленому кольорі обличчя та дрібних зморшках. Багато наших клієнтів з Мюнхена та околиць цінують мікрострумову терапію як м\'яку альтернативу інвазивним процедурам на кшталт ботоксу або філерів.',
        'Як регулярний anti-age догляд, після естетичних процедур або для регенерації втомленої шкіри — мікрострумова терапія у Мюнхені пропонує безпечне, безболісне та високоефективне рішення для природного омолодження шкіри.'
      ]}
      benefits={language === 'de' ? [
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
      ] : language === 'ru' ? [
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
      ] : [
        'Природний ліфтинг-ефект без ін\'єкцій та скальпеля',
        'Підтяжка лицьових м\'язів та покращення контурів обличчя',
        'Активація вироблення колагену та еластину',
        'Покращення мікроциркуляції та постачання киснем',
        'Зменшення дрібних зморшок, складок та набряків',
        'Підтяжка в\'ялої шкіри та покращення її структури',
        'Лімфодренаж та детоксикація для свіжого вигляду шкіри',
        'Зменшення темних кіл та мішків під очима',
        'Сяючий, відпочилий колір обличчя – ідеально після стресу або недосипання',
        'Повністю безболісно, розслаблююче та без періоду відновлення',
        'Поєднується з іншими процедурами (фонофорез, ультразвук, LED-терапія)',
        'Підходить для всіх типів шкіри та будь-якого віку'
      ]}
      steps={language === 'de' ? [
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
      ] : language === 'ru' ? [
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
      ] : [
        {
          title: '1. Безкоштовна консультація та аналіз шкіри',
          description: 'Ми обговорюємо ваші потреби шкіри, аналізуємо тип шкіри та визначаємо зони обробки. Відповідаємо на всі питання про процедуру, ефект та рекомендовану кількість сеансів.'
        },
        {
          title: '2. Ретельне очищення шкіри',
          description: 'Шкіра м\'яко очищується від макіяжу, шкірного сала та забруднень. Потім наноситься спеціальний провідний гель для оптимальної передачі мікрострумів.'
        },
        {
          title: '3. Мікрострумова процедура (45-90 хвилин)',
          description: 'Спеціальними електродами м\'які мікроструми проводяться вздовж лицьових м\'язів та лімфатичних шляхів. Процедура повністю безболісна та приємно розслаблює – багато клієнтів навіть засинають. Мікроімпульси стимулюють клітини, покращують кровообіг та активують вироблення колагену.'
        },
        {
          title: '4. Завершальний догляд',
          description: 'Після мікрострумової терапії наносимо заспокійливу маску та поживні засоби для підтримки регенерації та посилення ефекту. За бажанням процедуру можна поєднувати з фонофорезом, LED-терапією або сироватками.'
        },
        {
          title: '5. Рекомендації для дому',
          description: 'Для оптимальних та довготривалих результатів ви отримаєте індивідуальні рекомендації з догляду вдома та план наступних процедур.'
        }
      ]}
      procedureSchema={<SchemaSection />}
      priceSection="apparative-antiaging"
      contraindications={language === 'de' ? [
        'Schwangerschaft',
        'Herzschrittmacher',
        'Epilepsie',
        'Metallimplantate im Gesicht',
        'Krebs oder Chemotherapie',
        'Thrombose',
        'Frische Filler oder Botox (mind. 2 Wochen Abstand)'
      ] : language === 'ru' ? [
        'Беременность',
        'Кардиостимулятор',
        'Эпилепсия',
        'Металлические имплантаты на лице',
        'Онкология или химиотерапия',
        'Тромбоз',
        'Свежие филлеры или ботокс (минимум 2 недели перерыва)'
      ] : [
        'Вагітність',
        'Кардіостимулятор',
        'Епілепсія',
        'Металеві імплантати на обличчі',
        'Онкологія або хіміотерапія',
        'Тромбоз',
        'Нещодавні філери або ботокс (мінімум 2 тижні перерви)'
      ]}
      faq={language === 'de' ? [
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
      ] : language === 'ru' ? [
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
      ] : [
        {
          q: 'Як часто потрібно робити мікрострумову терапію?',
          a: 'Для оптимальних anti-age результатів рекомендуємо курс із 8–12 процедур, в ідеалі 1–2 рази на тиждень. Після курсу достатньо підтримуючої процедури раз на 3–4 тижні для збереження ліфтинг-ефекту.'
        },
        {
          q: 'Чи відчуваються мікроструми під час процедури?',
          a: 'Ні, мікроструми настільки слабкі, що зазвичай не відчуваються. Процедура повністю безболісна та дуже розслаблює – багато клієнтів навіть засинають.'
        },
        {
          q: 'Коли я побачу перші результати мікрострумової терапії?',
          a: 'Багато клієнтів помічають свіжіший, підтягнутіший вигляд шкіри вже після першої процедури. Повний ліфтинг-ефект проявляється після 6–10 сеансів.'
        },
        {
          q: 'Чи порівнянна мікрострумова терапія з ботоксом або філерами?',
          a: 'Ні, механізм дії зовсім різний. Мікроструми тренують лицьові м\'язи природним чином та стимулюють колаген – без ін\'єкцій.'
        }
      ]}
      additionalSections={<RecommendedServices />}
      ctaTitle={language === 'de' ? "Bereit für natürliches Face-Lifting in München?" : language === 'ru' ? "Готовы к естественному лифтингу лица в Мюнхене?" : "Готові до природного ліфтингу обличчя у Мюнхені?"}
      ctaDescription={language === 'de'
        ? "Buchen Sie jetzt Ihre Mikrostromtherapie in unserem Studio in München-Haidhausen und erleben Sie den Lifting-Effekt ohne Nadeln, ohne Schmerzen und ohne Ausfallzeiten. Kostenlose Beratung inklusive!"
        : language === 'ru' ? "Запишитесь на микротоковую терапию в нашей студии в Мюнхене-Хайдхаузен и ощутите лифтинг-эффект без игл, без боли и без периода восстановления. Бесплатная консультация включена!"
        : "Запишіться на мікрострумову терапію в нашій студії у Мюнхені-Хайдхаузен та відчуйте ліфтинг-ефект без голок, без болю та без періоду відновлення. Безкоштовна консультація включена!"}
    />
  );
};

export default Biostrom;
