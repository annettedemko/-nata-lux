'use client'

import { ServicePageLayout } from '@/components/ServicePageLayout';
import { Droplet, Activity, Sun, Zap } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { ServiceCard } from '@/components/ServiceCard';
import { ProcedureSchema } from '@/components/ProcedureSchema';

const Phonophorese = () => {
  const { isGerman } = useLanguage();

  // Schema section
  const SchemaSection = () => (
    <ProcedureSchema
      germanImages={['/186.jpg']}
      russianImages={['/186 1.jpg']}
      altTextGerman="Ultraschall-Phonophorese Schema"
      altTextRussian="Схема ультразвукового фонофореза"
      scale={0.5}
    />
  );

  // Custom section for recommended combinations
  const RecommendedServices = () => (
    <div className="mt-12">
      <h2 className="text-2xl md:text-3xl font-heading font-semibold text-brand-espresso mb-6 text-center">
        {isGerman ? 'Empfohlene Kombinationen' : 'Рекомендуемые комбинации'}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <ServiceCard
          title={isGerman ? 'Biostrom' : 'Биотоки'}
          description={isGerman ? 'Mikrostrom für zusätzlichen Lifting-Effekt' : 'Микротоки для дополнительного лифтинг-эффекта'}
          icon={Activity}
          href="/services/apparative-anti-aging/biostrom"
          image="/125.webp"
        />
        <ServiceCard
          title={isGerman ? 'Lichttherapie' : 'Светотерапия'}
          description={isGerman ? 'LED-Licht für Beruhigung und Kollagenstimulation' : 'LED-свет для успокоения и стимуляции коллагена'}
          icon={Sun}
          href="/services/apparative-anti-aging/lichttherapie"
          image="/124.jpeg"
        />
        <ServiceCard
          title="RF-Lifting"
          description={isGerman ? 'Radiofrequenz für Straffung' : 'Радиочастоты для подтяжки'}
          icon={Zap}
          href="/services/apparative-anti-aging/rf-lifting"
          image="/162.jpeg"
        />
      </div>
    </div>
  );

  return (
    <ServicePageLayout
      icon={Droplet}
      title={isGerman ? "Ultraschall-Phonophorese in München" : "Ультразвуковой фонофорез в Мюнхене"}
      subtitle={isGerman
        ? "Tiefenwirksame Wirkstoffeinschleusung mit Ultraschall – Intensive Hautpflege in München-Haidhausen"
        : "Глубокое проникновение активных веществ с помощью ультразвука – Интенсивный уход за кожей в Мюнхене-Хайдхаузен"
      }
      aboutTitle={isGerman ? "Was ist Ultraschall-Phonophorese?" : "Что такое ультразвуковой фонофорез?"}
      aboutDescription={[
        isGerman
          ? 'Die Ultraschall-Phonophorese (auch Ultraphonophorese oder Sonophorese genannt) ist eine innovative nicht-invasive Methode der ästhetischen Kosmetik, bei der hochwertige kosmetische oder medizinische Wirkstoffe mithilfe von Ultraschallwellen tief in die Haut eingeschleust werden. In unserem Kosmetikstudio in München-Haidhausen arbeiten wir mit modernsten zertifizierten Ultraschallgeräten und professionellen Präparaten höchster Qualität.'
          : 'Ультразвуковой фонофорез (также называемый ультрафонофорезом или сонофорезом) — это инновационный неинвазивный метод эстетической косметологии, при котором высококачественные косметические или медицинские активные вещества глубоко проникают в кожу с помощью ультразвуковых волн. В нашей косметологической студии в Мюнхене-Хайдхаузен мы работаем с самыми современными сертифицированными ультразвуковыми аппаратами и профессиональными препаратами высочайшего качества.',
        isGerman
          ? 'Die Ultraschallwellen erzeugen Mikrovibrationen, die die Zellmembranen durchlässiger machen und eine bis zu 10-mal tiefere Penetration von Wirkstoffen ermöglichen – weit über die oberste Hautschicht hinaus, direkt in die tiefen Schichten der Dermis. Dadurch können Hyaluronsäure, Kollagen, Vitamine, Öle, Peptide oder hochmoderne Exosomen dort wirken, wo sie am dringendsten benötigt werden.'
          : 'Ультразвуковые волны создают микровибрации, которые делают клеточные мембраны более проницаемыми и обеспечивают проникновение активных веществ в 10 раз глубже — далеко за пределы верхнего слоя кожи, непосредственно в глубокие слои дермы. Благодаря этому гиалуроновая кислота, коллаген, витамины, масла, пептиды или современные экзосомы действуют там, где они необходимы больше всего.',
        isGerman
          ? 'Gleichzeitig wirkt der Ultraschall wie eine sanfte Mikromassage, die die Durchblutung anregt, den Lymphfluss verbessert und den Zellstoffwechsel aktiviert. Das Ergebnis: intensiv durchfeuchtete, genährte, straffe und strahlende Haut mit sichtbarem Anti-Aging-Effekt – ganz ohne Nadeln, Injektionen oder Schmerzen.'
          : 'Одновременно ультразвук действует как мягкий микромассаж, стимулирующий кровообращение, улучшающий лимфоток и активизирующий клеточный метаболизм. Результат: интенсивно увлажненная, питательная, упругая и сияющая кожа с видимым anti-age эффектом — совершенно без игл, инъекций и боли.',
        isGerman
          ? 'Die Phonophorese in München eignet sich ideal bei trockener und dehydrierter Haut, ersten Alterungserscheinungen, Pigmentflecken, Couperose, Akne, Entzündungen, Narben und schlaffer Haut. Viele unserer Kunden aus München und Umgebung schätzen diese Behandlung als sanfte, natürliche Alternative zu Injektionen und genießen das Gefühl tief durchfeuchteter, vitalisierter Haut bereits nach der ersten Sitzung.'
          : 'Фонофорез в Мюнхене идеально подходит при сухой и обезвоженной коже, первых признаках старения, пигментных пятнах, куперозе, акне, воспалениях, рубцах и дряблой коже. Многие наши клиенты из Мюнхена и окрестностей ценят эту процедуру как мягкую, натуральную альтернативу инъекциям и наслаждаются ощущением глубоко увлажненной, оживленной кожи уже после первого сеанса.',
        isGerman
          ? 'Ob als eigenständige Behandlung oder in Kombination mit Mikrostromtherapie, RF-Lifting oder LED-Lichttherapie – die Ultraschall-Phonophorese ist eine der effektivsten Methoden für intensive Hautpflege, Regeneration und Anti-Aging in der modernen ästhetischen Kosmetologie.'
          : 'Как самостоятельная процедура или в сочетании с микротоковой терапией, RF-лифтингом или LED-светотерапией — ультразвуковой фонофорез является одним из самых эффективных методов интенсивного ухода за кожей, регенерации и anti-age в современной эстетической косметологии.'
      ]}
      benefits={isGerman ? [
        'Bis zu 10-fach tiefere Wirkstoffpenetration im Vergleich zu herkömmlichen Methoden',
        'Intensive Tiefenhydratation und Nährstoffversorgung der Haut',
        'Natürlicher Straffungs- und Lifting-Effekt ohne Injektionen',
        'Verbesserung der Hautelastizität und Spannkraft',
        'Sichtbare Reduzierung von feinen Linien, Falten und Schwellungen',
        'Aufhellung von Pigmentflecken, Altersflecken und Hyperpigmentierung',
        'Verbesserung des Hautbildes bei Aknenarben, Operationsnarben und Dehnungsstreifen',
        'Anregung der körpereigenen Kollagen- und Elastinproduktion',
        'Verbesserung der Mikrozirkulation und Sauerstoffversorgung',
        'Lymphdrainage-Effekt für ein frisches, entgiftetes Hautbild',
        'Linderung von Rötungen und Couperose',
        'Sofort sichtbare Ergebnisse – prallere, strahlendere Haut direkt nach der Behandlung',
        'Völlig schmerzfrei, entspannend und ohne Ausfallzeiten',
        'Kombinierbar mit Mikrostromtherapie, RF-Lifting oder LED-Lichttherapie',
        'Geeignet für alle Hauttypen, auch für empfindliche und zu Irritationen neigende Haut'
      ] : [
        'Проникновение активных веществ в 10 раз глубже по сравнению с традиционными методами',
        'Интенсивное глубокое увлажнение и питание кожи',
        'Естественный эффект подтяжки и лифтинга без инъекций',
        'Улучшение эластичности и упругости кожи',
        'Видимое уменьшение мелких морщин, складок и отеков',
        'Осветление пигментных пятен, возрастных пятен и гиперпигментации',
        'Улучшение состояния кожи при акне-рубцах, послеоперационных рубцах и растяжках',
        'Стимуляция собственной выработки коллагена и эластина',
        'Улучшение микроциркуляции и снабжения кожи кислородом',
        'Лимфодренажный эффект для свежего, детоксицированного вида кожи',
        'Уменьшение покраснений и купероза',
        'Мгновенно видимые результаты – более упругая, сияющая кожа сразу после процедуры',
        'Полностью безболезненно, расслабляюще и без периода восстановления',
        'Комбинируется с микротоковой терапией, RF-лифтингом или LED-светотерапией',
        'Подходит для всех типов кожи, в том числе для чувствительной и склонной к раздражениям'
      ]}
      steps={isGerman ? [
        {
          title: '1. Kostenlose Beratung und Hautanalyse',
          description: 'Zu Beginn analysieren wir Ihren Hauttyp und Ihre individuellen Bedürfnisse. Wir besprechen Ihre Hautprobleme (Trockenheit, Falten, Pigmentierung, Narben etc.) und legen gemeinsam die Behandlungsziele fest. Auf Basis dieser Analyse wählen wir die optimal geeigneten Wirkstoffe für Ihre Haut aus.'
        },
        {
          title: '2. Gründliche Hautreinigung und Vorbereitung',
          description: 'Die Haut wird sanft aber gründlich von Make-up, Talg, Schmutz und abgestorbenen Hautzellen befreit. Eine saubere Haut ist essentiell für die optimale Aufnahme der Wirkstoffe. Anschließend wird ein Tonic aufgetragen, um den pH-Wert auszugleichen und die Haut auf die Behandlung vorzubereiten.'
        },
        {
          title: '3. Auswahl und Auftragen der hochwertigen Wirkstoffe',
          description: 'Je nach Hautbedürfnis tragen wir hochkonzentrierte professionelle Seren auf: Hyaluronsäure für intensive Feuchtigkeit, Kollagen für Straffung, Vitamine (A, C, E) für Regeneration, entzündungshemmende Substanzen bei Akne, aufhellende Wirkstoffe bei Pigmentierung oder hochmoderne Exosomen für maximale Anti-Aging-Wirkung. In unserem Studio in München arbeiten wir nur mit Premium-Marken wie Renew, Derma Series und anderen zertifizierten medizinischen Präparaten.'
        },
        {
          title: '4. Ultraschall-Phonophorese (60-75 Minuten)',
          description: 'Mit einem speziellen Ultraschallkopf werden die aufgetragenen Wirkstoffe sanft in die Haut einmassiert. Die Ultraschallwellen erzeugen Mikrovibrationen (ca. 1-3 MHz), die die Zellmembranen durchlässiger machen und die Wirkstoffe bis zu 10-fach tiefer in die Dermis transportieren. Gleichzeitig wirkt der Ultraschall wie eine Mikromassage, die die Durchblutung fördert, den Lymphfluss anregt und den Stoffwechsel aktiviert. Die Behandlung ist völlig schmerzfrei und angenehm entspannend – viele Kunden beschreiben ein leichtes Kribbeln oder Wärmegefühl.'
        },
        {
          title: '5. Abschlusspflege und optionale Zusatzbehandlungen',
          description: 'Nach der Ultraschallbehandlung tragen wir eine beruhigende, nährende Maske auf, um die Wirkstoffe zu versiegeln und die Regeneration zu unterstützen. Optional kann die Phonophorese mit LED-Lichttherapie (zur Beruhigung und Kollagenstimulation), Mikrostromtherapie (für zusätzlichen Lifting-Effekt) oder hochwertigen Ampullen kombiniert werden. Zum Abschluss erfolgt eine Abschlusspflege mit SPF bei Tagesbehandlungen.'
        },
        {
          title: '6. Pflegeempfehlungen für zu Hause',
          description: 'Sie erhalten individuelle Empfehlungen für Ihre häusliche Pflege und einen Plan für Folgebehandlungen. Für langanhaltende Ergebnisse empfehlen wir eine Kur von 8-10 Behandlungen sowie anschließend regelmäßige Erhaltungsbehandlungen.'
        }
      ] : [
        {
          title: '1. Бесплатная консультация и анализ кожи',
          description: 'В начале мы анализируем ваш тип кожи и индивидуальные потребности. Мы обсуждаем ваши проблемы с кожей (сухость, морщины, пигментация, рубцы и т.д.) и совместно определяем цели процедуры. На основе этого анализа мы выбираем оптимально подходящие активные вещества для вашей кожи.'
        },
        {
          title: '2. Тщательное очищение и подготовка кожи',
          description: 'Кожа мягко, но тщательно очищается от макияжа, кожного сала, загрязнений и омертвевших клеток. Чистая кожа необходима для оптимального поглощения активных веществ. Затем наносится тоник для выравнивания pH-баланса и подготовки кожи к процедуре.'
        },
        {
          title: '3. Выбор и нанесение высококачественных активных веществ',
          description: 'В зависимости от потребностей кожи мы наносим высококонцентрированные профессиональные сыворотки: гиалуроновую кислоту для интенсивного увлажнения, коллаген для подтяжки, витамины (A, C, E) для регенерации, противовоспалительные вещества при акне, осветляющие компоненты при пигментации или современные экзосомы для максимального anti-age эффекта. В нашей студии в Мюнхене мы работаем только с премиальными брендами, такими как Renew, Derma Series и другими сертифицированными медицинскими препаратами.'
        },
        {
          title: '4. Ультразвуковой фонофорез (60-75 минут)',
          description: 'С помощью специальной ультразвуковой насадки нанесенные активные вещества мягко вмассируются в кожу. Ультразвуковые волны создают микровибрации (примерно 1-3 МГц), которые делают клеточные мембраны более проницаемыми и транспортируют активные вещества в 10 раз глубже в дерму. Одновременно ультразвук действует как микромассаж, который стимулирует кровообращение, активизирует лимфоток и метаболизм. Процедура полностью безболезненна и приятно расслабляет – многие клиенты описывают легкое покалывание или приятное ощущение тепла.'
        },
        {
          title: '5. Завершающий уход и дополнительные процедуры',
          description: 'После ультразвуковой обработки мы наносим успокаивающую, питательную маску для закрепления активных веществ и поддержки регенерации. По желанию фонофорез можно комбинировать с LED-светотерапией (для успокоения и стимуляции коллагена), микротоковой терапией (для дополнительного лифтинг-эффекта) или высококачественными ампулами. В завершение наносится финальный уход с SPF при дневных процедурах.'
        },
        {
          title: '6. Рекомендации по домашнему уходу',
          description: 'Вы получите индивидуальные рекомендации по домашнему уходу и план последующих процедур. Для долговременных результатов мы рекомендуем курс из 8-10 процедур, а затем регулярные поддерживающие сеансы.'
        }
      ]}
      priceSection="facial-care"
      contraindications={isGerman ? [
        'Schwangerschaft',
        'Herzschrittmacher oder Metallimplantate im Gesicht',
        'Aktive Hautinfektionen oder Herpes',
        'Thrombose',
        'Epilepsie',
        'Frische Operationen oder Injektionen (mind. 2 Wochen Abstand)'
      ] : [
        'Беременность',
        'Кардиостимулятор или металлические имплантаты на лице',
        'Активные кожные инфекции или герпес',
        'Тромбоз',
        'Эпилепсия',
        'Недавние операции или инъекции (минимум 2 недели перерыва)'
      ]}
      faq={isGerman ? [
        {
          q: 'Wie oft sollte ich die Ultraschall-Phonophorese machen?',
          a: 'Für optimale und langanhaltende Ergebnisse empfehlen wir eine Kur von 8–10 Behandlungen, idealerweise 1–2 Mal pro Woche. Nach Abschluss der Kur genügt eine Erhaltungsbehandlung 1× pro Monat, um den Anti-Aging-Effekt zu bewahren und die Haut kontinuierlich mit hochwertigen Wirkstoffen zu versorgen. Bei akuten Problemen wie starker Trockenheit oder nach ästhetischen Eingriffen können auch intensivere Kurse sinnvoll sein – wir beraten Sie gerne individuell.'
        },
        {
          q: 'Wann sehe ich erste Ergebnisse der Phonophorese?',
          a: 'Erste Ergebnisse sind bereits direkt nach der ersten Behandlung sichtbar: Die Haut wirkt praller, straffer, strahlender und intensiv durchfeuchtet. Dieser Sofort-Effekt hält mehrere Tage an. Langfristige, nachhaltige Effekte wie sichtbare Straffung, Reduzierung von Falten und Verbesserung der Hautstruktur zeigen sich nach 6–10 Sitzungen und halten bei regelmäßigen Erhaltungsbehandlungen dauerhaft an.'
        },
        {
          q: 'Ist die Ultraschall-Phonophorese schmerzhaft?',
          a: 'Nein, die Phonophorese ist völlig schmerzfrei und wird als sehr angenehm und entspannend empfunden. Sie spüren lediglich eine sanfte Massage mit dem Ultraschallkopf und eventuell ein leichtes Kribbeln oder angenehmes Wärmegefühl. Die Behandlung ist so relaxend, dass viele Kunden dabei einschlafen. Es gibt keine Nadeln, keine Injektionen und keine unangenehmen Empfindungen.'
        },
        {
          q: 'Was sind Exosomen und warum sind sie so wirksam?',
          a: 'Exosomen sind winzige extrazelluläre Vesikel (Nanopartikel), die von Stammzellen produziert werden und hochkonzentrierte Wachstumsfaktoren, Proteine, RNA und Botenstoffe enthalten. Sie wirken als natürliche Zell-Kommunikatoren und stimulieren die Hautzellen zur Regeneration, Kollagenproduktion und Erneuerung. Exosomen gelten als das Neueste und Effektivste in der Anti-Aging-Pflege – sie sind bis zu 1000-mal potenter als herkömmliche Wachstumsfaktoren! In Kombination mit Ultraschall-Phonophorese dringen sie besonders tief in die Haut ein und entfalten ihre maximale Wirkung.'
        },
        {
          q: 'Kann ich Phonophorese mit anderen Behandlungen kombinieren?',
          a: 'Ja, die Ultraschall-Phonophorese lässt sich hervorragend mit anderen Behandlungen kombinieren und verstärkt deren Wirkung erheblich. Besonders empfehlenswert sind Kombinationen mit: Mikrostromtherapie (für zusätzlichen Lifting-Effekt), LED-Lichttherapie (zur Beruhigung und Kollagenstimulation), RF-Lifting (für Straffung), Gesichtsreinigung (als Vorbereitung) oder hochwertigen Ampullen und Masken. Wir beraten Sie gerne zu den besten Kombinationen für Ihre individuellen Hautbedürfnisse.'
        },
        {
          q: 'Gibt es Ausfallzeiten oder Nebenwirkungen?',
          a: 'Nein, es gibt keine Ausfallzeiten. Die Haut kann unmittelbar nach der Behandlung leicht gerötet sein, was aber innerhalb von 1-2 Stunden abklingt. Sie können direkt danach Make-up auftragen, arbeiten gehen oder Sport treiben. Nebenwirkungen sind extrem selten – in sehr seltenen Fällen kann es bei empfindlicher Haut zu leichten Irritationen kommen, die aber schnell abklingen. Das macht die Phonophorese ideal für Menschen mit vollem Terminkalender.'
        },
        {
          q: 'Für welche Hautprobleme ist Phonophorese geeignet?',
          a: 'Die Ultraschall-Phonophorese ist vielseitig einsetzbar und eignet sich bei: trockener, dehydrierter Haut | feinen Linien, Falten und Alterungserscheinungen | Pigmentflecken, Altersflecken und Hyperpigmentierung | Akne, Entzündungen und Unreinheiten | Aknenarben, Operationsnarben und Dehnungsstreifen | Couperose und Rötungen | schlaffer, erschlaffter Haut | müdem, fahlem Teint | Vorbereitung auf besondere Events (z.B. Hochzeit) | Nachbehandlung nach ästhetischen Eingriffen.'
        },
        {
          q: 'Was kostet eine Phonophorese-Behandlung in München?',
          a: 'Die Preise variieren je nach Behandlungsumfang: Phonophorese Gesicht (60 Min.) kostet 85€, Gesicht + Hals + Dekolleté (75 Min.) 105€ und die Premium-Variante mit Exosomen (75 Min.) 150€. Wir bieten attraktive Kur-Pakete: 3er-Karte für 230€ (spart 25€) und 5er-Karte für 360€ (spart 65€). Damit sichern Sie sich nicht nur bessere Preise, sondern auch nachhaltige, langfristige Ergebnisse. Die Investition lohnt sich – viele Kunden berichten, dass die Phonophorese ihre teuren Cremes und Seren ersetzen konnte.'
        },
        {
          q: 'Unterschied zwischen Phonophorese und Ultraschall-Gesichtsbehandlung?',
          a: 'Bei der reinen Ultraschall-Gesichtsbehandlung (Sonophorese) wird der Ultraschall hauptsächlich zur Tiefenreinigung, zum Peeling und zur Massage eingesetzt. Bei der Phonophorese hingegen steht die tiefe Einschleusung von hochwertigen Wirkstoffen (Hyaluron, Kollagen, Vitamine, Exosomen etc.) im Vordergrund. Der Ultraschall öffnet dabei die Zellmembranen und transportiert die Wirkstoffe bis zu 10× tiefer in die Haut. Die Phonophorese ist somit deutlich effektiver für Anti-Aging, intensive Feuchtigkeit und Regeneration.'
        }
      ] : [
        {
          q: 'Как часто нужно делать ультразвуковой фонофорез?',
          a: 'Для оптимальных и долговременных результатов мы рекомендуем курс из 8–10 процедур, в идеале 1–2 раза в неделю. После завершения курса достаточно поддерживающей процедуры 1× в месяц, чтобы сохранить anti-age эффект и постоянно снабжать кожу высококачественными активными веществами. При острых проблемах, таких как сильная сухость или после эстетических процедур, могут быть полезны и более интенсивные курсы — мы с радостью проконсультируем вас индивидуально.'
        },
        {
          q: 'Когда я увижу первые результаты фонофореза?',
          a: 'Первые результаты видны уже непосредственно после первой процедуры: кожа выглядит более упругой, подтянутой, сияющей и интенсивно увлажненной. Этот мгновенный эффект сохраняется несколько дней. Долгосрочные, устойчивые эффекты, такие как видимая подтяжка, уменьшение морщин и улучшение структуры кожи, проявляются после 6–10 сеансов и сохраняются надолго при регулярных поддерживающих процедурах.'
        },
        {
          q: 'Болезненна ли ультразвуковая фонофорез?',
          a: 'Нет, фонофорез полностью безболезненный и воспринимается как очень приятный и расслабляющий. Вы ощущаете только легкий массаж ультразвуковой насадкой и, возможно, легкое покалывание или приятное тепло. Процедура настолько расслабляющая, что многие клиенты засыпают во время нее. Нет игл, инъекций и неприятных ощущений.'
        },
        {
          q: 'Что такое экзосомы и почему они так эффективны?',
          a: 'Экзосомы — это крошечные внеклеточные везикулы (наночастицы), которые производятся стволовыми клетками и содержат высококонцентрированные факторы роста, белки, РНК и сигнальные молекулы. Они действуют как естественные коммуникаторы между клетками и стимулируют клетки кожи к регенерации, выработке коллагена и обновлению. Экзосомы считаются новейшим и наиболее эффективным средством anti-age ухода — они в 1000 раз мощнее обычных факторов роста! В сочетании с ультразвуковым фонофорезом они проникают особенно глубоко в кожу и раскрывают свое максимальное действие.'
        },
        {
          q: 'Можно ли комбинировать фонофорез с другими процедурами?',
          a: 'Да, ультразвуковой фонофорез отлично комбинируется с другими процедурами и значительно усиливает их действие. Особенно рекомендуются комбинации с: микротоковой терапией (для дополнительного лифтинг-эффекта), LED-светотерапией (для успокоения и стимуляции коллагена), RF-лифтингом (для подтяжки), чисткой лица (в качестве подготовки) или высококачественными ампулами и масками. Мы с радостью проконсультируем вас о лучших комбинациях для ваших индивидуальных потребностей кожи.'
        },
        {
          q: 'Есть ли период восстановления или побочные эффекты?',
          a: 'Нет, периода восстановления нет. Кожа может быть слегка покрасневшей сразу после процедуры, но это проходит в течение 1-2 часов. Вы можете сразу после процедуры наносить макияж, идти на работу или заниматься спортом. Побочные эффекты крайне редки — в очень редких случаях у чувствительной кожи могут возникнуть легкие раздражения, которые быстро проходят. Это делает фонофорез идеальным для людей с плотным графиком.'
        },
        {
          q: 'При каких проблемах кожи подходит фонофорез?',
          a: 'Ультразвуковой фонофорез универсален и подходит при: сухой, обезвоженной коже | мелких морщинах, складках и признаках старения | пигментных пятнах, возрастных пятнах и гиперпигментации | акне, воспалениях и несовершенствах | рубцах от акне, послеоперационных рубцах и растяжках | куперозе и покраснениях | дряблой, обвисшей коже | усталом, тусклом цвете лица | подготовке к особым событиям (например, свадьбе) | последующем уходе после эстетических процедур.'
        },
        {
          q: 'Сколько стоит процедура фонофореза в Мюнхене?',
          a: 'Цены варьируются в зависимости от объема процедуры: фонофорез лица (60 мин.) стоит 85€, лицо + шея + декольте (75 мин.) 105€, а премиум-вариант с экзосомами (75 мин.) 150€. Мы предлагаем привлекательные курсовые пакеты: карта на 3 процедуры за 230€ (экономия 25€) и карта на 5 процедур за 360€ (экономия 65€). Так вы получаете не только лучшие цены, но и устойчивые, долгосрочные результаты. Инвестиция того стоит — многие клиенты сообщают, что фонофорез смог заменить их дорогие кремы и сыворотки.'
        },
        {
          q: 'Разница между фонофорезом и ультразвуковой чисткой лица?',
          a: 'При обычной ультразвуковой чистке лица (сонофорезе) ультразвук используется в основном для глубокой очистки, пилинга и массажа. При фонофорезе же основное внимание уделяется глубокому проникновению высококачественных активных веществ (гиалурон, коллаген, витамины, экзосомы и т.д.). Ультразвук открывает клеточные мембраны и транспортирует активные вещества в 10× глубже в кожу. Таким образом, фонофорез значительно эффективнее для anti-age, интенсивного увлажнения и регенерации.'
        }
      ]}
      procedureSchema={<SchemaSection />}
      additionalSections={<RecommendedServices />}
      ctaTitle={isGerman ? "Bereit für tiefenwirksame Hautpflege in München?" : "Готовы к глубокому уходу за кожей в Мюнхене?"}
      ctaDescription={isGerman
        ? "Buchen Sie jetzt Ihre Ultraschall-Phonophorese in unserem Studio in München-Haidhausen und erleben Sie den Unterschied: intensiv durchfeuchtete, strahlende und verjüngte Haut – ohne Nadeln, ohne Schmerzen, mit sofort sichtbaren Ergebnissen. Kostenlose Beratung inklusive!"
        : "Забронируйте сейчас ваш ультразвуковой фонофорез в нашей студии в Мюнхене-Хайдхаузен и ощутите разницу: интенсивно увлажненная, сияющая и омолодившаяся кожа – без игл, без боли, с мгновенно видимыми результатами. Бесплатная консультация включена!"
      }
    />
  );
};

export default Phonophorese;
