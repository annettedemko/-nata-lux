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
      germanImages={['/biostrom-zertifikat-muenchen.jpg']}
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
          description={language === 'de' ? 'Radiofrequenz für ein strafferes Hautbild' : language === 'ru' ? 'Радиочастоты для более подтянутого вида кожи' : 'Радіочастоти для підтягнутішого вигляду шкіри'}
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
        ? "Natürlicher Lifting-Effekt und frisches Hautbild ohne Injektionen – Ihre Kosmetik in München-Haidhausen"
        : language === 'ru' ? "Естественный лифтинг-эффект и свежий вид кожи без инъекций – Ваша косметология в Мюнхене-Хайдхаузен"
        : "Природний ліфтинг-ефект та свіжий вигляд шкіри без ін’єкцій – Ваша косметологія у Мюнхені-Хайдхаузен"}
      aboutTitle={language === 'de' ? "Was ist Mikrostromtherapie (Biostrom)?" : language === 'ru' ? "Что такое микротоковая терапия (биотоки)?" : "Що таке мікрострумова терапія (біоструми)?"}
      aboutDescription={language === 'de' ? [
        'Die Mikrostromtherapie, auch als Biostrom oder Biolifting bekannt, ist eine moderne nicht-invasive Anti-Aging-Methode aus der ästhetischen Kosmetik. In unserem Studio in München-Haidhausen arbeiten wir mit professionellen Geräten, die sehr schwache elektrische Impulse aussenden – ähnlich den natürlichen Strömen des Körpers.',
        'Diese Mikroströme regen den Hautstoffwechsel an, fördern die Mikrozirkulation und können die körpereigene Kollagen- und Elastinbildung unterstützen. Das Ergebnis: ein natürlicher Lifting-Effekt, ein strafferes Hautgefühl und ein frisches, erholtes Hautbild – angenehm, ohne Nadeln und ohne Ausfallzeiten.',
        'Die Behandlung eignet sich für viele Hauttypen und ist besonders beliebt bei nachlassender Elastizität, geschwollen wirkender Haut, müdem Teint und feinen Linien. Viele unserer Kunden aus München und Umgebung schätzen die Mikrostromtherapie als sanfte, nadelfreie Pflegebehandlung – ganz ohne Botox oder Filler.',
        'Ob als regelmäßige Anti-Age-Pflege, nach ästhetischen Eingriffen oder zur Pflege gestresster Haut – die Mikrostromtherapie in München ist eine sanfte, angenehme Behandlung für ein natürlich frisches, jugendliches Hautbild.'
      ] : language === 'ru' ? [
        'Микротоковая терапия, также известная как биотоки или биолифтинг, — это современный неинвазивный anti-age метод эстетической косметологии. В нашей студии в Мюнхене-Хайдхаузен мы работаем с профессиональным оборудованием, которое посылает очень слабые электрические импульсы — подобные естественным токам тела.',
        'Эти микротоки активизируют обмен веществ в коже, улучшают микроциркуляцию и могут поддерживать собственную выработку коллагена и эластина. Результат: естественный лифтинг-эффект, ощущение более упругой кожи и свежий, отдохнувший вид — комфортно, без игл и без периода восстановления.',
        'Процедура подходит для многих типов кожи и особенно популярна при снижении эластичности, отёчности, усталом цвете лица и мелких морщинах. Многие наши клиенты из Мюнхена и окрестностей ценят микротоковую терапию как мягкий уход без игл — без ботокса и филлеров.',
        'Как регулярный anti-age уход, после эстетических процедур или для ухода за уставшей кожей — микротоковая терапия в Мюнхене — это мягкая, комфортная процедура для естественно свежего, молодого вида кожи.'
      ] : [
        'Мікрострумова терапія, також відома як біоструми або біоліфтинг, — це сучасний неінвазивний anti-age метод естетичної косметології. У нашій студії у Мюнхені-Хайдхаузен ми працюємо з професійним обладнанням, яке посилає дуже слабкі електричні імпульси — подібні до природних струмів тіла.',
        'Ці мікроструми активізують обмін речовин у шкірі, покращують мікроциркуляцію та можуть підтримувати власне вироблення колагену та еластину. Результат: природний ліфтинг-ефект, відчуття пружнішої шкіри та свіжий, відпочилий вигляд — комфортно, без голок і без періоду відновлення.',
        'Процедура підходить для багатьох типів шкіри і особливо популярна при зниженні еластичності, набряклості, втомленому кольорі обличчя та дрібних зморшках. Багато наших клієнтів з Мюнхена та околиць цінують мікрострумову терапію як м’який догляд без голок — без ботоксу та філерів.',
        'Як регулярний anti-age догляд, після естетичних процедур або для догляду за втомленою шкірою — мікрострумова терапія у Мюнхені — це м’яка, комфортна процедура для природно свіжого, молодого вигляду шкіри.'
      ]}
      benefits={language === 'de' ? [
        'Natürlicher Lifting-Effekt ohne Injektionen oder Skalpell',
        'Aktiviert die Gesichtsmuskulatur – für definiertere Gesichtskonturen',
        'Kann die Kollagen- und Elastinbildung anregen',
        'Fördert die Mikrozirkulation',
        'Kann feine Linien und Fältchen mildern und Schwellungen optisch reduzieren',
        'Für ein strafferes Hautgefühl und ein verfeinertes Hautbild',
        'Drainierender Effekt für ein frisches Hautbild',
        'Die Augenpartie kann frischer und weniger geschwollen wirken',
        'Strahlender, erholter Teint – ideal nach Stress oder Schlafmangel',
        'Angenehm, entspannend und ohne Ausfallzeiten',
        'Kombinierbar mit anderen Behandlungen (Phonophorese, Ultraschall, LED-Therapie)',
        'Geeignet für viele Hauttypen und jedes Alter'
      ] : language === 'ru' ? [
        'Естественный лифтинг-эффект без инъекций и скальпеля',
        'Тонизирует лицевые мышцы — для более чётких контуров лица',
        'Может стимулировать выработку коллагена и эластина',
        'Улучшение микроциркуляции',
        'Может смягчить мелкие морщины и визуально уменьшить отёчность',
        'Для ощущения более упругой кожи и более ровного рельефа',
        'Дренажный эффект для свежего вида кожи',
        'Зона вокруг глаз может выглядеть свежее и менее отёчной',
        'Сияющий, отдохнувший цвет лица – идеально после стресса или недосыпа',
        'Комфортно, расслабляюще и без периода восстановления',
        'Комбинируется с другими процедурами (фонофорез, ультразвук, LED-терапия)',
        'Подходит для многих типов кожи и любого возраста'
      ] : [
        'Природний ліфтинг-ефект без ін\'єкцій та скальпеля',
        'Тонізує лицьові м’язи — для чіткіших контурів обличчя',
        'Може стимулювати вироблення колагену та еластину',
        'Покращення мікроциркуляції',
        'Може пом’якшити дрібні зморшки та візуально зменшити набряклість',
        'Для відчуття пружнішої шкіри та рівнішого рельєфу',
        'Дренажний ефект для свіжого вигляду шкіри',
        'Зона навколо очей може виглядати свіжішою та менш набряклою',
        'Сяючий, відпочилий колір обличчя – ідеально після стресу або недосипання',
        'Комфортно, розслаблююче та без періоду відновлення',
        'Поєднується з іншими процедурами (фонофорез, ультразвук, LED-терапія)',
        'Підходить для багатьох типів шкіри та будь-якого віку'
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
          description: 'Mit speziellen Elektroden werden sanfte Mikroströme entlang der Gesichtsmuskulatur und Lymphbahnen geführt. Die Behandlung ist sehr angenehm und entspannend – viele Kunden schlafen dabei sogar ein. Die Mikroimpulse beleben die Haut, fördern die Mikrozirkulation und können die Kollagenbildung anregen.'
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
          description: 'Специальными электродами мягкие микротоки проводятся вдоль лицевых мышц и лимфатических путей. Процедура очень комфортна и приятно расслабляет – многие клиенты даже засыпают. Микроимпульсы тонизируют кожу, улучшают микроциркуляцию и могут стимулировать выработку коллагена.'
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
          description: 'Спеціальними електродами м\'які мікроструми проводяться вздовж лицьових м\'язів та лімфатичних шляхів. Процедура дуже комфортна та приємно розслаблює – багато клієнтів навіть засинають. Мікроімпульси тонізують шкіру, покращують мікроциркуляцію та можуть стимулювати вироблення колагену.'
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
          a: 'In der Regel empfehlen wir eine Kur von 8–12 Behandlungen, idealerweise 1–2 Mal pro Woche. Nach Abschluss der Kur genügt eine Erhaltungsbehandlung alle 3–4 Wochen, um den Lifting-Effekt zu erhalten.'
        },
        {
          q: 'Spürt man die Mikroströme während der Behandlung?',
          a: 'Nein, die Mikroströme sind so schwach, dass sie in der Regel nicht spürbar sind. Die Behandlung ist sehr angenehm und wird von den meisten Kunden als sehr entspannend empfunden – viele schlafen sogar dabei ein.'
        },
        {
          q: 'Wann sehe ich erste Ergebnisse der Mikrostromtherapie?',
          a: 'Viele Kunden bemerken bereits nach der ersten Behandlung ein frischeres, strafferes Hautbild. Der volle Lifting-Effekt zeigt sich meist nach 6–10 Sitzungen – Ergebnisse sind individuell verschieden.'
        },
        {
          q: 'Ist Mikrostromtherapie vergleichbar mit Botox oder Fillern?',
          a: 'Nein, die Wirkungsweise ist völlig unterschiedlich. Mikrostrom aktiviert die Gesichtsmuskulatur auf natürliche Weise und kann die Kollagenbildung anregen – ganz ohne Injektionen.'
        }
      ] : language === 'ru' ? [
        {
          q: 'Как часто нужно делать микротоковую терапию?',
          a: 'Обычно рекомендуем курс из 8–12 процедур, в идеале 1–2 раза в неделю. После курса достаточно поддерживающей процедуры раз в 3–4 недели для сохранения лифтинг-эффекта.'
        },
        {
          q: 'Чувствуются ли микротоки во время процедуры?',
          a: 'Нет, микротоки настолько слабые, что обычно не ощущаются. Процедура очень комфортна и расслабляет – многие клиенты даже засыпают.'
        },
        {
          q: 'Когда я увижу первые результаты микротоковой терапии?',
          a: 'Многие клиенты замечают более свежий, подтянутый вид кожи уже после первой процедуры. Полный лифтинг-эффект обычно проявляется после 6–10 сеансов — результаты индивидуальны.'
        },
        {
          q: 'Сравнима ли микротоковая терапия с ботоксом или филлерами?',
          a: 'Нет, механизм действия совершенно разный. Микротоки естественным образом тонизируют лицевые мышцы и могут стимулировать выработку коллагена – без инъекций.'
        }
      ] : [
        {
          q: 'Як часто потрібно робити мікрострумову терапію?',
          a: 'Зазвичай рекомендуємо курс із 8–12 процедур, в ідеалі 1–2 рази на тиждень. Після курсу достатньо підтримуючої процедури раз на 3–4 тижні для збереження ліфтинг-ефекту.'
        },
        {
          q: 'Чи відчуваються мікроструми під час процедури?',
          a: 'Ні, мікроструми настільки слабкі, що зазвичай не відчуваються. Процедура дуже комфортна та розслаблює – багато клієнтів навіть засинають.'
        },
        {
          q: 'Коли я побачу перші результати мікрострумової терапії?',
          a: 'Багато клієнтів помічають свіжіший, підтягнутіший вигляд шкіри вже після першої процедури. Повний ліфтинг-ефект зазвичай проявляється після 6–10 сеансів — результати індивідуальні.'
        },
        {
          q: 'Чи порівнянна мікрострумова терапія з ботоксом або філерами?',
          a: 'Ні, механізм дії зовсім різний. Мікроструми природним чином тонізують лицьові м’язи та можуть стимулювати вироблення колагену – без ін’єкцій.'
        }
      ]}
      additionalSections={<RecommendedServices />}
      ctaTitle={language === 'de' ? "Bereit für natürliches Face-Lifting in München?" : language === 'ru' ? "Готовы к естественному лифтингу лица в Мюнхене?" : "Готові до природного ліфтингу обличчя у Мюнхені?"}
      ctaDescription={language === 'de'
        ? "Buchen Sie jetzt Ihre Mikrostromtherapie in unserem Studio in München-Haidhausen und erleben Sie den Lifting-Effekt – ohne Nadeln, angenehm und ohne Ausfallzeiten. Kostenlose Beratung inklusive!"
        : language === 'ru' ? "Запишитесь на микротоковую терапию в нашей студии в Мюнхене-Хайдхаузен и ощутите лифтинг-эффект — без игл, комфортно и без периода восстановления. Бесплатная консультация включена!"
        : "Запишіться на мікрострумову терапію в нашій студії у Мюнхені-Хайдхаузен та відчуйте ліфтинг-ефект — без голок, комфортно та без періоду відновлення. Безкоштовна консультація включена!"}
    />
  );
};

export default Biostrom;
