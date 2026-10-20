'use client'

import { ServicePageLayout } from '@/components/ServicePageLayout';
import { Droplet, Activity, Sun, Zap } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { ServiceCard } from '@/components/ServiceCard';
import { ProcedureSchema } from '@/components/ProcedureSchema';

const Phonophorese = () => {
  const { language } = useLanguage();

  // Schema section
  const SchemaSection = () => (
    <ProcedureSchema
      germanImages={['/phonophorese-behandlung.jpg']}
      russianImages={['/phonophorese-zertifikat-muenchen.jpg']}
      altTextGerman="Ultraschall-Phonophorese Schema"
      altTextRussian="Схема ультразвукового фонофореза"
      scale={0.5}
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
          title={language === 'de' ? 'Biostrom' : language === 'ru' ? 'Биотоки' : 'Біотоки'}
          description={language === 'de' ? 'Mikrostrom für zusätzlichen Lifting-Effekt' : language === 'ru' ? 'Микротоки для дополнительного лифтинг-эффекта' : 'Мікрострум для додаткового ліфтинг-ефекту'}
          icon={Activity}
          href="/services/apparative-anti-aging/biostrom"
          image="/apparative-anti-aging-geraet-muenchen.webp"
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
          description={language === 'de' ? 'Radiofrequenz für Straffung' : language === 'ru' ? 'Радиочастоты для подтяжки' : 'Радіочастоти для підтяжки'}
          icon={Zap}
          href="/services/apparative-anti-aging/rf-lifting"
          image="/rf-lifting-behandlung-muenchen.jpeg"
        />
      </div>
    </div>
  );

  return (
    <ServicePageLayout
      icon={Droplet}
      title={language === 'de' ? "Ultraschall-Phonophorese in München" : language === 'ru' ? "Ультразвуковой фонофорез в Мюнхене" : "Ультразвуковий фонофорез у Мюнхені"}
      subtitle={language === 'de'
        ? "Tiefenwirksame Wirkstoffeinschleusung mit Ultraschall – Intensive Hautpflege in München-Haidhausen"
        : language === 'ru'
          ? "Глубокое проникновение активных веществ с помощью ультразвука – Интенсивный уход за кожей в Мюнхене-Хайдхаузен"
          : "Глибоке проникнення активних речовин за допомогою ультразвуку – Інтенсивний догляд за шкірою у Мюнхені-Хайдхаузен"
      }
      aboutTitle={language === 'de' ? "Was ist Ultraschall-Phonophorese?" : language === 'ru' ? "Что такое ультразвуковой фонофорез?" : "Що таке ультразвуковий фонофорез?"}
      aboutDescription={[
        language === 'de'
          ? 'Die Ultraschall-Phonophorese (auch Ultraphonophorese oder Sonophorese genannt) ist eine moderne, nicht-invasive Methode der ästhetischen Kosmetik, bei der hochwertige kosmetische Wirkstoffe mithilfe von Ultraschallwellen in die Haut eingeschleust werden. In unserem Kosmetikstudio in München-Haidhausen arbeiten wir mit modernen Ultraschallgeräten und professionellen, hochwertigen Präparaten.'
          : language === 'ru'
            ? 'Ультразвуковой фонофорез (также называемый ультрафонофорезом или сонофорезом) — это современный неинвазивный метод эстетической косметологии, при котором высококачественные косметические активные вещества проникают в кожу с помощью ультразвуковых волн. В нашей косметологической студии в Мюнхене-Хайдхаузен мы работаем с современными ультразвуковыми аппаратами и профессиональными препаратами высокого качества.'
            : 'Ультразвуковий фонофорез (також називається ультрафонофорезом або сонофорезом) — це сучасний неінвазивний метод естетичної косметології, при якому високоякісні косметичні активні речовини проникають у шкіру за допомогою ультразвукових хвиль. У нашій косметологічній студії у Мюнхені-Хайдхаузен ми працюємо із сучасними ультразвуковими апаратами та професійними препаратами високої якості.',
        language === 'de'
          ? 'Die Ultraschallwellen erzeugen Mikrovibrationen, die die Aufnahmefähigkeit der Haut erhöhen und eine deutlich bessere Aufnahme von Pflegewirkstoffen ermöglichen. Dadurch können Hyaluronsäure, Kollagen, Vitamine, Öle, Peptide oder moderne Exosomen ihre pflegende Wirkung besonders gut entfalten.'
          : language === 'ru'
            ? 'Ультразвуковые волны создают микровибрации, которые повышают восприимчивость кожи и обеспечивают значительно лучшее проникновение ухаживающих активных веществ. Благодаря этому гиалуроновая кислота, коллаген, витамины, масла, пептиды или современные экзосомы особенно хорошо раскрывают своё ухаживающее действие.'
            : 'Ультразвукові хвилі створюють мікровібрації, які підвищують сприйнятливість шкіри та забезпечують значно краще проникнення доглядових активних речовин. Завдяки цьому гіалуронова кислота, колаген, вітаміни, олії, пептиди або сучасні екзосоми особливо добре розкривають свою доглядову дію.',
        language === 'de'
          ? 'Gleichzeitig wirkt der Ultraschall wie eine sanfte Mikromassage, die die Mikrozirkulation anregt und den Hautstoffwechsel belebt. Das Ergebnis: intensiv durchfeuchtete, genährte, straffer wirkende und strahlende Haut – ganz ohne Nadeln oder Injektionen.'
          : language === 'ru'
            ? 'Одновременно ультразвук действует как мягкий микромассаж, стимулирующий микроциркуляцию и активизирующий обмен веществ в коже. Результат: интенсивно увлажнённая, напитанная, более упругая на вид и сияющая кожа — совершенно без игл и инъекций.'
            : 'Одночасно ультразвук діє як м’який мікромасаж, що стимулює мікроциркуляцію та активізує обмін речовин у шкірі. Результат: інтенсивно зволожена, напоєна, пружніша на вигляд та сяюча шкіра — зовсім без голок та ін’єкцій.',
        language === 'de'
          ? 'Die Phonophorese in München eignet sich ideal bei trockener und feuchtigkeitsarmer Haut, ersten Zeichen der Hautalterung, Pigmentflecken, zu Rötungen neigender oder unreiner Haut sowie nachlassender Spannkraft. Viele unserer Kunden aus München und Umgebung schätzen diese Behandlung als sanfte, nadelfreie Pflege und genießen das Gefühl tief durchfeuchteter, vitalisierter Haut bereits nach der ersten Sitzung.'
          : language === 'ru'
            ? 'Фонофорез в Мюнхене идеально подходит при сухой и обезвоженной коже, первых признаках старения, пигментных пятнах, коже, склонной к покраснениям или высыпаниям, а также при снижении упругости. Многие наши клиенты из Мюнхена и окрестностей ценят эту процедуру как мягкий уход без игл и наслаждаются ощущением глубоко увлажненной, оживленной кожи уже после первого сеанса.'
            : 'Фонофорез у Мюнхені ідеально підходить при сухій та зневодненій шкірі, перших ознаках старіння, пігментних плямах, шкірі, схильній до почервонінь або висипань, а також при зниженні пружності. Багато наших клієнтів з Мюнхена та околиць цінують цю процедуру як м’який догляд без голок та насолоджуються відчуттям глибоко зволоженої, оживленої шкіри вже після першого сеансу.',
        language === 'de'
          ? 'Ob als eigenständige Behandlung oder in Kombination mit Mikrostromtherapie, RF-Lifting oder LED-Lichttherapie – die Ultraschall-Phonophorese ist eine vielseitige Methode für intensive Hautpflege und Anti-Aging-Pflege in der modernen ästhetischen Kosmetik.'
          : language === 'ru'
            ? 'Как самостоятельная процедура или в сочетании с микротоковой терапией, RF-лифтингом или LED-светотерапией — ультразвуковой фонофорез является универсальным методом интенсивного ухода за кожей и anti-age ухода в современной эстетической косметологии.'
            : 'Як самостійна процедура або у поєднанні з мікрострумовою терапією, RF-ліфтингом або LED-світлотерапією — ультразвуковий фонофорез є універсальним методом інтенсивного догляду за шкірою та anti-age догляду у сучасній естетичній косметології.'
      ]}
      benefits={language === 'de' ? [
        'Deutlich verbesserte Aufnahme von Pflegewirkstoffen',
        'Intensive Tiefenhydratation der Haut',
        'Natürlicher Lifting-Effekt ohne Injektionen',
        'Kann Fältchen und Schwellungen optisch mildern',
        'Kann Pigmentflecken optisch aufhellen',
        'Kann die Kollagen- und Elastinbildung anregen',
        'Pflege bei Narben und Dehnungsstreifen',
        'Angenehm und ohne Ausfallzeiten',
        'Kombinierbar mit anderen Behandlungen',
        'Für viele Hauttypen geeignet'
      ] : language === 'ru' ? [
        'Значительно лучшее проникновение ухаживающих веществ',
        'Интенсивное глубокое увлажнение кожи',
        'Естественный лифтинг без инъекций',
        'Может визуально смягчить морщины и отёчность',
        'Может визуально осветлить пигментные пятна',
        'Может стимулировать выработку коллагена и эластина',
        'Уход при рубцах и растяжках',
        'Комфортно и без восстановления',
        'Комбинируется с другими процедурами',
        'Подходит для многих типов кожи'
      ] : [
        'Значно краще проникнення доглядових речовин',
        'Інтенсивне глибоке зволоження шкіри',
        'Природний ліфтинг без ін\'єкцій',
        'Може візуально пом’якшити зморшки та набряклість',
        'Може візуально освітлити пігментні плями',
        'Може стимулювати вироблення колагену та еластину',
        'Догляд при рубцях та розтяжках',
        'Комфортно та без відновлення',
        'Поєднується з іншими процедурами',
        'Підходить для багатьох типів шкіри'
      ]}
      steps={language === 'de' ? [
        {
          title: '1. Kostenlose Beratung und Hautanalyse',
          description: 'Zu Beginn analysieren wir Ihren Hauttyp und Ihre individuellen Bedürfnisse. Wir besprechen Ihre Hautbedürfnisse (Trockenheit, Fältchen, Pigmentierung, Narben etc.) und legen gemeinsam die Behandlungsziele fest. Auf Basis dieser Analyse wählen wir die optimal geeigneten Wirkstoffe für Ihre Haut aus.'
        },
        {
          title: '2. Gründliche Hautreinigung und Vorbereitung',
          description: 'Die Haut wird sanft aber gründlich von Make-up, Talg, Schmutz und abgestorbenen Hautzellen befreit. Eine saubere Haut ist essentiell für die optimale Aufnahme der Wirkstoffe. Anschließend wird ein Tonic aufgetragen, um den pH-Wert auszugleichen und die Haut auf die Behandlung vorzubereiten.'
        },
        {
          title: '3. Auswahl und Auftragen der hochwertigen Wirkstoffe',
          description: 'Je nach Hautbedürfnis tragen wir hochkonzentrierte professionelle Seren auf: Hyaluronsäure für intensive Feuchtigkeit, Kollagen für ein strafferes Hautgefühl, Vitamine (A, C, E) für ein frisches Hautbild, klärende Wirkstoffe bei unreiner Haut, aufhellende Wirkstoffe bei Pigmentflecken oder moderne Exosomen für die intensive Anti-Aging-Pflege. In unserem Studio in München arbeiten wir mit Premium-Marken wie Renew, Derma Series und weiteren professionellen Kosmetikmarken.'
        },
        {
          title: '4. Ultraschall-Phonophorese (60-75 Minuten)',
          description: 'Mit einem speziellen Ultraschallkopf werden die aufgetragenen Wirkstoffe sanft in die Haut einmassiert. Die Ultraschallwellen erzeugen Mikrovibrationen (ca. 1-3 MHz), die die Aufnahme der Wirkstoffe in die Haut deutlich verbessern. Gleichzeitig wirkt der Ultraschall wie eine Mikromassage, die die Mikrozirkulation fördert und den Hautstoffwechsel belebt. Die Behandlung ist sehr angenehm und entspannend – viele Kunden beschreiben ein leichtes Kribbeln oder Wärmegefühl.'
        },
        {
          title: '5. Abschlusspflege und optionale Zusatzbehandlungen',
          description: 'Nach der Ultraschallbehandlung tragen wir eine beruhigende, nährende Maske auf, um die Wirkstoffe zu versiegeln und die Regeneration zu unterstützen. Optional kann die Phonophorese mit LED-Lichttherapie (zur Beruhigung und Kollagenstimulation), Mikrostromtherapie (für zusätzlichen Lifting-Effekt) oder hochwertigen Ampullen kombiniert werden. Zum Abschluss erfolgt eine Abschlusspflege mit SPF bei Tagesbehandlungen.'
        },
        {
          title: '6. Pflegeempfehlungen für zu Hause',
          description: 'Sie erhalten individuelle Empfehlungen für Ihre häusliche Pflege und einen Plan für Folgebehandlungen. Für langanhaltende Ergebnisse empfehlen wir eine Kur von 8-10 Behandlungen sowie anschließend regelmäßige Erhaltungsbehandlungen.'
        }
      ] : language === 'ru' ? [
        {
          title: '1. Бесплатная консультация и анализ кожи',
          description: 'В начале мы анализируем ваш тип кожи и индивидуальные потребности. Мы обсуждаем потребности вашей кожи (сухость, морщины, пигментация, рубцы и т.д.) и совместно определяем цели процедуры. На основе этого анализа мы выбираем оптимально подходящие активные вещества для вашей кожи.'
        },
        {
          title: '2. Тщательное очищение и подготовка кожи',
          description: 'Кожа мягко, но тщательно очищается от макияжа, кожного сала, загрязнений и омертвевших клеток. Чистая кожа необходима для оптимального поглощения активных веществ. Затем наносится тоник для выравнивания pH-баланса и подготовки кожи к процедуре.'
        },
        {
          title: '3. Выбор и нанесение высококачественных активных веществ',
          description: 'В зависимости от потребностей кожи мы наносим высококонцентрированные профессиональные сыворотки: гиалуроновую кислоту для интенсивного увлажнения, коллаген для ощущения упругости, витамины (A, C, E) для свежего вида кожи, очищающие компоненты для проблемной кожи, осветляющие компоненты при пигментации или современные экзосомы для интенсивного anti-age ухода. В нашей студии в Мюнхене мы работаем с премиальными брендами, такими как Renew, Derma Series, и другими профессиональными косметическими марками.'
        },
        {
          title: '4. Ультразвуковой фонофорез (60-75 минут)',
          description: 'С помощью специальной ультразвуковой насадки нанесенные активные вещества мягко вмассируются в кожу. Ультразвуковые волны создают микровибрации (примерно 1-3 МГц), которые значительно улучшают проникновение активных веществ в кожу. Одновременно ультразвук действует как микромассаж, который стимулирует микроциркуляцию и активизирует обмен веществ в коже. Процедура очень комфортна и приятно расслабляет – многие клиенты описывают легкое покалывание или приятное ощущение тепла.'
        },
        {
          title: '5. Завершающий уход и дополнительные процедуры',
          description: 'После ультразвуковой обработки мы наносим успокаивающую, питательную маску для закрепления активных веществ и поддержки регенерации. По желанию фонофорез можно комбинировать с LED-светотерапией (для успокоения и стимуляции коллагена), микротоковой терапией (для дополнительного лифтинг-эффекта) или высококачественными ампулами. В завершение наносится финальный уход с SPF при дневных процедурах.'
        },
        {
          title: '6. Рекомендации по домашнему уходу',
          description: 'Вы получите индивидуальные рекомендации по домашнему уходу и план последующих процедур. Для долговременных результатов мы рекомендуем курс из 8-10 процедур, а затем регулярные поддерживающие сеансы.'
        }
      ] : [
        {
          title: '1. Безкоштовна консультація та аналіз шкіри',
          description: 'На початку ми аналізуємо ваш тип шкіри та індивідуальні потреби. Ми обговорюємо потреби вашої шкіри (сухість, зморшки, пігментація, рубці тощо) та спільно визначаємо цілі процедури. На основі цього аналізу ми обираємо оптимально підходящі активні речовини для вашої шкіри.'
        },
        {
          title: '2. Ретельне очищення та підготовка шкіри',
          description: 'Шкіра м\'яко, але ретельно очищується від макіяжу, шкірного сала, забруднень та відмерлих клітин. Чиста шкіра необхідна для оптимального поглинання активних речовин. Потім наноситься тонік для вирівнювання pH-балансу та підготовки шкіри до процедури.'
        },
        {
          title: '3. Вибір та нанесення високоякісних активних речовин',
          description: 'Залежно від потреб шкіри ми наносимо висококонцентровані професійні сироватки: гіалуронову кислоту для інтенсивного зволоження, колаген для відчуття пружності, вітаміни (A, C, E) для свіжого вигляду шкіри, очищувальні компоненти для проблемної шкіри, освітлювальні компоненти при пігментації або сучасні екзосоми для інтенсивного anti-age догляду. У нашій студії у Мюнхені ми працюємо з преміальними брендами, такими як Renew, Derma Series, та іншими професійними косметичними марками.'
        },
        {
          title: '4. Ультразвуковий фонофорез (60-75 хвилин)',
          description: 'За допомогою спеціальної ультразвукової насадки нанесені активні речовини м\'яко вмасовуються у шкіру. Ультразвукові хвилі створюють мікровібрації (приблизно 1-3 МГц), які значно покращують проникнення активних речовин у шкіру. Одночасно ультразвук діє як мікромасаж, який стимулює мікроциркуляцію та активізує обмін речовин у шкірі. Процедура дуже комфортна та приємно розслаблює — багато клієнтів описують легке поколювання або приємне відчуття тепла.'
        },
        {
          title: '5. Завершальний догляд та додаткові процедури',
          description: 'Після ультразвукової обробки ми наносимо заспокійливу, живильну маску для закріплення активних речовин та підтримки регенерації. За бажанням фонофорез можна поєднувати з LED-світлотерапією (для заспокоєння та стимуляції колагену), мікрострумовою терапією (для додаткового ліфтинг-ефекту) або високоякісними ампулами. На завершення наноситься фінальний догляд з SPF при денних процедурах.'
        },
        {
          title: '6. Рекомендації щодо домашнього догляду',
          description: 'Ви отримаєте індивідуальні рекомендації щодо домашнього догляду та план подальших процедур. Для довготривалих результатів ми рекомендуємо курс із 8-10 процедур, а потім регулярні підтримуючі сеанси.'
        }
      ]}
      priceSection="facial-care"
      contraindications={language === 'de' ? [
        'Schwangerschaft',
        'Herzschrittmacher oder Metallimplantate im Gesicht',
        'Aktive Hautinfektionen oder Herpes',
        'Thrombose',
        'Epilepsie',
        'Frische Operationen oder Injektionen (mind. 2 Wochen Abstand)'
      ] : language === 'ru' ? [
        'Беременность',
        'Кардиостимулятор или металлические имплантаты на лице',
        'Активные кожные инфекции или герпес',
        'Тромбоз',
        'Эпилепсия',
        'Недавние операции или инъекции (минимум 2 недели перерыва)'
      ] : [
        'Вагітність',
        'Кардіостимулятор або металеві імплантати на обличчі',
        'Активні шкірні інфекції або герпес',
        'Тромбоз',
        'Епілепсія',
        'Нещодавні операції або ін\'єкції (мінімум 2 тижні перерви)'
      ]}
      faq={language === 'de' ? [
        {
          q: 'Wie oft sollte ich die Ultraschall-Phonophorese machen?',
          a: 'In der Regel empfehlen wir eine Kur von 8–10 Behandlungen, idealerweise 1–2 Mal pro Woche. Nach Abschluss der Kur genügt eine Erhaltungsbehandlung 1× pro Monat, um den Anti-Aging-Effekt zu bewahren und die Haut kontinuierlich mit hochwertigen Wirkstoffen zu versorgen. Bei akuten Problemen wie starker Trockenheit oder nach ästhetischen Eingriffen können auch intensivere Kurse sinnvoll sein – wir beraten Sie gerne individuell.'
        },
        {
          q: 'Wann sehe ich erste Ergebnisse der Phonophorese?',
          a: 'Erste Ergebnisse sind bereits direkt nach der ersten Behandlung sichtbar: Die Haut wirkt praller, straffer, strahlender und intensiv durchfeuchtet. Dieser Sofort-Effekt hält mehrere Tage an. Nachhaltigere Effekte wie ein strafferes Hautbild, optisch gemilderte Fältchen und eine verfeinerte Hautstruktur zeigen sich meist nach 6–10 Sitzungen und lassen sich durch regelmäßige Erhaltungsbehandlungen bewahren. Ergebnisse sind individuell verschieden.'
        },
        {
          q: 'Ist die Ultraschall-Phonophorese schmerzhaft?',
          a: 'Nein, die Phonophorese wird als sehr angenehm und entspannend empfunden. Sie spüren lediglich eine sanfte Massage mit dem Ultraschallkopf und eventuell ein leichtes Kribbeln oder angenehmes Wärmegefühl. Die Behandlung ist so relaxend, dass viele Kunden dabei einschlafen. Es gibt keine Nadeln, keine Injektionen und keine unangenehmen Empfindungen.'
        },
        {
          q: 'Was sind Exosomen und warum werden sie eingesetzt?',
          a: 'Exosomen sind winzige extrazelluläre Vesikel (Nanopartikel), die u. a. Proteine und Botenstoffe enthalten. In der Kosmetik werden sie als moderner Pflegewirkstoff eingesetzt, der die natürliche Erneuerung der Haut unterstützen soll. Exosomen gehören zu den neuesten Trends in der Anti-Aging-Pflege. In Kombination mit der Ultraschall-Phonophorese können sie besonders gut von der Haut aufgenommen werden.'
        },
        {
          q: 'Kann ich Phonophorese mit anderen Behandlungen kombinieren?',
          a: 'Ja, die Ultraschall-Phonophorese lässt sich hervorragend mit anderen Behandlungen kombinieren und ergänzt diese ideal. Besonders empfehlenswert sind Kombinationen mit: Mikrostromtherapie (für zusätzlichen Lifting-Effekt), LED-Lichttherapie (zur Beruhigung und Kollagenstimulation), RF-Lifting (für Straffung), Gesichtsreinigung (als Vorbereitung) oder hochwertigen Ampullen und Masken. Wir beraten Sie gerne zu den besten Kombinationen für Ihre individuellen Hautbedürfnisse.'
        },
        {
          q: 'Gibt es Ausfallzeiten oder Nebenwirkungen?',
          a: 'Nein, es gibt keine Ausfallzeiten. Die Haut kann unmittelbar nach der Behandlung leicht gerötet sein, was aber innerhalb von 1-2 Stunden abklingt. Sie können direkt danach Make-up auftragen, arbeiten gehen oder Sport treiben. Nebenwirkungen sind extrem selten – in sehr seltenen Fällen kann es bei empfindlicher Haut zu leichten Irritationen kommen, die aber schnell abklingen. Das macht die Phonophorese ideal für Menschen mit vollem Terminkalender.'
        },
        {
          q: 'Für welche Hautbedürfnisse ist Phonophorese geeignet?',
          a: 'Die Ultraschall-Phonophorese ist vielseitig einsetzbar und eignet sich bei: trockener, dehydrierter Haut | feinen Linien, Falten und Alterungserscheinungen | Pigmentflecken, Altersflecken und Hyperpigmentierung | unreiner, zu Pickeln neigender Haut | Aknenarben, Narben und Dehnungsstreifen (pflegend) | zu Rötungen und Couperose neigender Haut | nachlassender Spannkraft | müdem, fahlem Teint | Vorbereitung auf besondere Events (z.B. Hochzeit) | Pflege nach ästhetischen Behandlungen.'
        },
        {
          q: 'Unterschied zwischen Phonophorese und Ultraschall-Gesichtsbehandlung?',
          a: 'Bei der reinen Ultraschall-Gesichtsbehandlung (Sonophorese) wird der Ultraschall hauptsächlich zur Tiefenreinigung, zum Peeling und zur Massage eingesetzt. Bei der Phonophorese hingegen steht die tiefe Einschleusung von hochwertigen Wirkstoffen (Hyaluron, Kollagen, Vitamine, Exosomen etc.) im Vordergrund. Der Ultraschall verbessert dabei die Aufnahme der Wirkstoffe in die Haut. Die Phonophorese eignet sich daher besonders für Anti-Aging-Pflege und intensive Feuchtigkeit.'
        }
      ] : language === 'ru' ? [
        {
          q: 'Как часто нужно делать ультразвуковой фонофорез?',
          a: 'Обычно мы рекомендуем курс из 8–10 процедур, в идеале 1–2 раза в неделю. После завершения курса достаточно поддерживающей процедуры 1× в месяц, чтобы сохранить anti-age эффект и постоянно снабжать кожу высококачественными активными веществами. При острых проблемах, таких как сильная сухость или после эстетических процедур, могут быть полезны и более интенсивные курсы — мы с радостью проконсультируем вас индивидуально.'
        },
        {
          q: 'Когда я увижу первые результаты фонофореза?',
          a: 'Первые результаты видны уже непосредственно после первой процедуры: кожа выглядит более упругой, подтянутой, сияющей и интенсивно увлажненной. Этот мгновенный эффект сохраняется несколько дней. Более стойкие эффекты, такие как более подтянутый вид кожи, визуально смягчённые морщины и более ровный рельеф, обычно проявляются после 6–10 сеансов и поддерживаются регулярными процедурами. Результаты индивидуальны.'
        },
        {
          q: 'Болезненен ли ультразвуковой фонофорез?',
          a: 'Нет, фонофорез воспринимается как очень приятный и расслабляющий. Вы ощущаете только легкий массаж ультразвуковой насадкой и, возможно, легкое покалывание или приятное тепло. Процедура настолько расслабляющая, что многие клиенты засыпают во время нее. Нет игл, инъекций и неприятных ощущений.'
        },
        {
          q: 'Что такое экзосомы и зачем их используют?',
          a: 'Экзосомы — это крошечные внеклеточные везикулы (наночастицы), содержащие, в частности, белки и сигнальные молекулы. В косметологии они используются как современный ухаживающий компонент, призванный поддерживать естественное обновление кожи. Экзосомы — один из новейших трендов anti-age ухода. В сочетании с ультразвуковым фонофорезом они особенно хорошо усваиваются кожей.'
        },
        {
          q: 'Можно ли комбинировать фонофорез с другими процедурами?',
          a: 'Да, ультразвуковой фонофорез отлично комбинируется с другими процедурами и идеально их дополняет. Особенно рекомендуются комбинации с: микротоковой терапией (для дополнительного лифтинг-эффекта), LED-светотерапией (для успокоения и стимуляции коллагена), RF-лифтингом (для подтяжки), чисткой лица (в качестве подготовки) или высококачественными ампулами и масками. Мы с радостью проконсультируем вас о лучших комбинациях для ваших индивидуальных потребностей кожи.'
        },
        {
          q: 'Есть ли период восстановления или побочные эффекты?',
          a: 'Нет, периода восстановления нет. Кожа может быть слегка покрасневшей сразу после процедуры, но это проходит в течение 1-2 часов. Вы можете сразу после процедуры наносить макияж, идти на работу или заниматься спортом. Побочные эффекты крайне редки — в очень редких случаях у чувствительной кожи могут возникнуть легкие раздражения, которые быстро проходят. Это делает фонофорез идеальным для людей с плотным графиком.'
        },
        {
          q: 'Для каких потребностей кожи подходит фонофорез?',
          a: 'Ультразвуковой фонофорез универсален и подходит при: сухой, обезвоженной коже | мелких морщинах, складках и признаках старения | пигментных пятнах, возрастных пятнах и гиперпигментации | проблемной коже, склонной к высыпаниям | следах постакне, рубцах и растяжках (уход) | коже, склонной к покраснениям и куперозу | снижении упругости кожи | усталом, тусклом цвете лица | подготовке к особым событиям (например, свадьбе) | последующем уходе после эстетических процедур.'
        },
        {
          q: 'Разница между фонофорезом и ультразвуковой чисткой лица?',
          a: 'При обычной ультразвуковой чистке лица (сонофорезе) ультразвук используется в основном для глубокой очистки, пилинга и массажа. При фонофорезе же основное внимание уделяется глубокому проникновению высококачественных активных веществ (гиалурон, коллаген, витамины, экзосомы и т.д.). Ультразвук при этом улучшает проникновение активных веществ в кожу. Поэтому фонофорез особенно подходит для anti-age ухода и интенсивного увлажнения.'
        }
      ] : [
        {
          q: 'Як часто потрібно робити ультразвуковий фонофорез?',
          a: 'Зазвичай ми рекомендуємо курс із 8–10 процедур, в ідеалі 1–2 рази на тиждень. Після завершення курсу достатньо підтримуючої процедури 1× на місяць, щоб зберегти anti-age ефект та постійно постачати шкіру високоякісними активними речовинами. При гострих проблемах, таких як сильна сухість або після естетичних процедур, можуть бути корисні й більш інтенсивні курси — ми з радістю проконсультуємо вас індивідуально.'
        },
        {
          q: 'Коли я побачу перші результати фонофорезу?',
          a: 'Перші результати видимі вже безпосередньо після першої процедури: шкіра виглядає більш пружною, підтягнутою, сяючою та інтенсивно зволоженою. Цей миттєвий ефект зберігається кілька днів. Стійкіші ефекти, такі як підтягнутіший вигляд шкіри, візуально пом’якшені зморшки та рівніший рельєф, зазвичай проявляються після 6–10 сеансів і підтримуються регулярними процедурами. Результати індивідуальні.'
        },
        {
          q: 'Чи болісний ультразвуковий фонофорез?',
          a: 'Ні, фонофорез сприймається як дуже приємний та розслаблюючий. Ви відчуваєте лише легкий масаж ультразвуковою насадкою та, можливо, легке поколювання або приємне тепло. Процедура настільки розслаблююча, що багато клієнтів засинають під час неї. Немає голок, ін\'єкцій та неприємних відчуттів.'
        },
        {
          q: 'Що таке екзосоми і навіщо їх використовують?',
          a: 'Екзосоми — це крихітні позаклітинні везикули (наночастинки), що містять, зокрема, білки та сигнальні молекули. У косметології вони використовуються як сучасний доглядовий компонент, покликаний підтримувати природне оновлення шкіри. Екзосоми — один із найновіших трендів anti-age догляду. У поєднанні з ультразвуковим фонофорезом вони особливо добре засвоюються шкірою.'
        },
        {
          q: 'Чи можна поєднувати фонофорез з іншими процедурами?',
          a: 'Так, ультразвуковий фонофорез чудово поєднується з іншими процедурами та ідеально їх доповнює. Особливо рекомендуються поєднання з: мікрострумовою терапією (для додаткового ліфтинг-ефекту), LED-світлотерапією (для заспокоєння та стимуляції колагену), RF-ліфтингом (для підтяжки), чисткою обличчя (як підготовка) або високоякісними ампулами та масками. Ми з радістю проконсультуємо вас щодо найкращих комбінацій для ваших індивідуальних потреб шкіри.'
        },
        {
          q: 'Чи є період відновлення або побічні ефекти?',
          a: 'Ні, періоду відновлення немає. Шкіра може бути злегка почервонілою одразу після процедури, але це проходить протягом 1-2 годин. Ви можете одразу після процедури наносити макіяж, йти на роботу або займатися спортом. Побічні ефекти вкрай рідкісні — у дуже рідкісних випадках у чутливої шкіри можуть виникнути легкі подразнення, які швидко проходять. Це робить фонофорез ідеальним для людей з щільним графіком.'
        },
        {
          q: 'Для яких потреб шкіри підходить фонофорез?',
          a: 'Ультразвуковий фонофорез універсальний та підходить при: сухій, зневодненій шкірі | дрібних зморшках, складках та ознаках старіння | пігментних плямах, вікових плямах та гіперпігментації | проблемній шкірі, схильній до висипань | слідах постакне, рубцях та розтяжках (догляд) | шкірі, схильній до почервонінь та куперозу | зниженні пружності шкіри | втомленому, тьмяному кольорі обличчя | підготовці до особливих подій (наприклад, весілля) | подальшому догляді після естетичних процедур.'
        },
        {
          q: 'Різниця між фонофорезом та ультразвуковою чисткою обличчя?',
          a: 'При звичайній ультразвуковій чистці обличчя (сонофорезі) ультразвук використовується переважно для глибокого очищення, пілінгу та масажу. При фонофорезі ж основна увага приділяється глибокому проникненню високоякісних активних речовин (гіалурон, колаген, вітаміни, екзосоми тощо). Ультразвук при цьому покращує проникнення активних речовин у шкіру. Тому фонофорез особливо підходить для anti-age догляду та інтенсивного зволоження.'
        }
      ]}
      procedureSchema={<SchemaSection />}
      additionalSections={<RecommendedServices />}
      ctaTitle={language === 'de' ? "Bereit für tiefenwirksame Hautpflege in München?" : language === 'ru' ? "Готовы к глубокому уходу за кожей в Мюнхене?" : "Готові до глибокого догляду за шкірою у Мюнхені?"}
      ctaDescription={language === 'de'
        ? "Buchen Sie jetzt Ihre Ultraschall-Phonophorese in unserem Studio in München-Haidhausen und erleben Sie den Unterschied: intensiv durchfeuchtete, strahlende und frisch wirkende Haut – ohne Nadeln, angenehm und oft schon nach der ersten Sitzung spürbar. Kostenlose Beratung inklusive!"
        : language === 'ru'
          ? "Забронируйте сейчас ваш ультразвуковой фонофорез в нашей студии в Мюнхене-Хайдхаузен и ощутите разницу: интенсивно увлажнённая, сияющая и свежая на вид кожа – без игл, комфортно и часто ощутимо уже после первого сеанса. Бесплатная консультация включена!"
          : "Запишіться зараз на ультразвуковий фонофорез у нашій студії у Мюнхені-Хайдхаузен та відчуйте різницю: інтенсивно зволожена, сяюча та свіжа на вигляд шкіра — без голок, комфортно та часто відчутно вже після першого сеансу. Безкоштовна консультація включена!"
      }
    />
  );
};

export default Phonophorese;
