'use client'

import { ServicePageLayout } from '@/components/ServicePageLayout';
import { Sun, Zap, Droplet, Activity } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { ServiceCard } from '@/components/ServiceCard';
import { ProcedureSchema } from '@/components/ProcedureSchema';

const Lichttherapie = () => {
  const { language } = useLanguage();
  const isGerman = language === 'de';

  // Schema section with 2 images
  const SchemaSection = () => (
    <ProcedureSchema
      germanImages={['/182%201.jpg', '/166%201.jpg']}
      russianImages={['/182.jpg', '/166.jpeg']}
      altTextGerman="LED-Lichttherapie Schema"
      altTextRussian="Схема LED-светотерапии"
      scale={0.5}
    />
  );

  // Custom section for recommended combinations
  const RecommendedServices = () => (
    <div className="mt-12">
      <h2 className="text-2xl md:text-3xl font-heading font-semibold text-brand-espresso mb-6 text-center">
        {language === 'de' ? 'Empfohlene Kombinationen' : language === 'ru' ? 'Рекомендуемые комбинации' : 'Рекомендуемые комбинации'}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <ServiceCard
          title={language === 'de' ? 'Biostrom' : language === 'ru' ? 'Биотоки' : 'Биотоки'}
          description={language === 'de' ? 'Mikrostrom für zusätzlichen Lifting-Effekt' : language === 'ru' ? 'Микротоки для дополнительного лифтинг-эффекта' : 'Микротоки для дополнительного лифтинг-эффекта'}
          icon={Activity}
          href="/services/apparative-anti-aging/biostrom"
          image="/125.webp"
        />
        <ServiceCard
          title={language === 'de' ? 'Phonophorese' : language === 'ru' ? 'Фонофорез' : 'Фонофорез'}
          description={language === 'de' ? 'Ultraschall für tiefe Wirkstoffeinschleusung' : language === 'ru' ? 'Ультразвук для глубокого введения активных веществ' : 'Ультразвук для глубокого введения активных веществ'}
          icon={Droplet}
          href="/services/phonophorese"
          image="/128.jpeg"
        />
        <ServiceCard
          title="RF-Lifting"
          description={language === 'de' ? 'Radiofrequenz für intensive Straffung' : language === 'ru' ? 'Радиочастоты для интенсивной подтяжки' : 'Радиочастоты для интенсивной подтяжки'}
          icon={Zap}
          href="/services/apparative-anti-aging/rf-lifting"
          image="/162.jpeg"
        />
      </div>
    </div>
  );

  return (
    <ServicePageLayout
      icon={Sun}
      title={isGerman ? "LED-Lichttherapie (Photonentherapie) in München" : "LED-светотерапия (фототерапия) в Мюнхене"}
      subtitle={isGerman
        ? "Sanfte Hautverjüngung und Regeneration mit Lichtenergie – Ihre Kosmetik in München-Haidhausen"
        : "Мягкое омоложение и регенерация кожи с помощью световой энергии – Ваша косметология в Мюнхене-Хайдхаузен"}
      aboutTitle={isGerman ? "Was ist LED-Lichttherapie (Photonentherapie)?" : "Что такое LED-светотерапия (фототерапия)?"}
      aboutDescription={isGerman ? [
        'Die LED-Lichttherapie, auch Photonentherapie oder Photobiomodulation genannt, ist eine innovative nicht-invasive Methode der modernen ästhetischen Kosmetik, bei der Licht unterschiedlicher Wellenlängen gezielt eingesetzt wird, um verschiedene Hautprobleme zu behandeln und die natürliche Regeneration der Haut zu fördern. In unserem Kosmetikstudio in München-Haidhausen arbeiten wir mit professionellen LED-Systemen medizinischer Qualität, die eine präzise Dosierung der Lichtenergie ermöglichen.',
        'Die Behandlung basiert auf wissenschaftlich fundierter Photomedizin. Jede Lichtfarbe dringt unterschiedlich tief in die Haut ein und hat spezifische Wirkungen:',
        '🔴 Rotes Licht (620-750 nm) — stimuliert die Produktion von Kollagen und Elastin, verbessert die Durchblutung und fördert die Zellregeneration. Ideal für Anti-Aging, Faltenreduktion und Hautstraffung.',
        '🔵 Blaues Licht (405-470 nm) — wirkt antibakteriell gegen Akne-verursachende Bakterien und reduziert Entzündungen. Perfekt für unreine Haut, Akne und zur Vorbeugung von Pickeln.',
        '🟢 Grünes Licht (495-570 nm) — gleicht Hautverfärbungen aus, reduziert Pigmentflecken und Altersflecken und verbessert den gesamten Teint für ein ebenmäßigeres Hautbild.',
        '🟡 Gelbes Licht (570-620 nm) — wirkt beruhigend, entzündungshemmend und regenerierend. Ideal für empfindliche Haut, Rosacea und zur Beruhigung gereizter Haut.',
        'Die LED-Lichttherapie ist völlig schmerzfrei, entspannend und sicher – sie erzeugt keine UV-Strahlung, keine Hitze und keine Hautschäden. Anders als bei IPL (Intense Pulsed Light) oder Laser-Behandlungen gibt es keine Ausfallzeiten, keine Rötungen und kein Risiko für Verbrennungen oder Pigmentveränderungen. Die Behandlung ist für alle Hauttypen (auch dunkle Haut) und alle Altersgruppen geeignet.',
        'Viele unserer Kunden aus München und Umgebung schätzen die LED-Lichttherapie als sanfte, natürliche und wissenschaftlich bewiesene Methode für strahlende, gesunde Haut – ob bei Akne, ersten Alterungserscheinungen, Pigmentierung, Rosacea oder einfach zur Erhaltung eines frischen, ebenmäßigen Teints.',
        'Ob als eigenständige Behandlung oder in Kombination mit Mikrostromtherapie, Phonophorese, RF-Lifting oder Gesichtsreinigung – die LED-Lichttherapie in München ist eine der vielseitigsten und wirksamsten Methoden für Hautverjüngung, Hautgesundheit und natürliche Schönheit ohne Risiken und Nebenwirkungen.'
      ] : [
        'LED-светотерапия, также называемая фототерапией или фотобиомодуляцией — это инновационный неинвазивный метод современной эстетической косметологии, при котором свет разных длин волн используется для лечения различных проблем кожи и стимуляции её естественной регенерации. В нашей косметологической студии в Мюнхене-Хайдхаузен мы работаем с профессиональными LED-системами медицинского качества.',
        'Процедура основана на научно обоснованной фотомедицине. Каждый цвет света проникает на разную глубину и имеет специфическое действие:',
        '🔴 Красный свет (620-750 нм) — стимулирует выработку коллагена и эластина, улучшает кровообращение и способствует регенерации клеток. Идеален для anti-age, уменьшения морщин и подтяжки кожи.',
        '🔵 Синий свет (405-470 нм) — оказывает антибактериальное действие против бактерий, вызывающих акне, и уменьшает воспаления. Идеален для проблемной кожи, акне и профилактики высыпаний.',
        '🟢 Зелёный свет (495-570 нм) — выравнивает пигментацию, уменьшает пигментные и возрастные пятна и улучшает общий цвет лица для более ровного тона кожи.',
        '🟡 Жёлтый свет (570-620 нм) — успокаивает, снимает воспаления и восстанавливает кожу. Идеален для чувствительной кожи, розацеа и успокоения раздражённой кожи.',
        'LED-светотерапия полностью безболезненна, расслабляет и безопасна — без УФ-излучения, без нагрева и без повреждения кожи. В отличие от IPL или лазера, нет периода восстановления, покраснений и риска ожогов. Подходит для всех типов кожи и возрастов.',
        'Многие наши клиенты из Мюнхена ценят LED-светотерапию как мягкий, естественный и научно доказанный метод для сияющей, здоровой кожи — при акне, признаках старения, пигментации или розацеа.',
        'Как самостоятельная процедура или в комбинации с микротоками, фонофорезом, RF-лифтингом — LED-светотерапия в Мюнхене является одним из самых универсальных методов омоложения кожи без рисков и побочных эффектов.'
      ]}
      benefits={isGerman ? [
        'Stimulation der Kollagen- und Elastinproduktion für straffere, jugendlichere Haut',
        'Sichtbare Reduktion von feinen Linien, Falten und Alterungserscheinungen',
        'Antibakterielle Wirkung gegen Akne, Pickel und Unreinheiten (blaues Licht)',
        'Reduzierung von Entzündungen, Rötungen und Post-Akne-Flecken',
        'Aufhellung von Pigmentflecken, Altersflecken und Hyperpigmentierung',
        'Verbesserung des Hautbildes bei Rosacea, Couperose und empfindlicher Haut',
        'Beschleunigung der Wundheilung und Regeneration nach ästhetischen Eingriffen',
        'Verbesserung der Durchblutung und Sauerstoffversorgung der Haut',
        'Gleichmäßiger, strahlender Teint und "Glow-Effekt"',
        'Straffung und Verbesserung der Hautelastizität',
        'Reduzierung von Schwellungen und dunklen Augenringen',
        'Beruhigung gereizter, gestresster Haut',
        'Völlig schmerzfrei, entspannend und angenehm',
        'Keine UV-Strahlung, keine Hitze, keine Hautschäden',
        'Keine Ausfallzeiten – sofort gesellschaftsfähig',
        'Kombinierbar mit Mikrostromtherapie, Phonophorese, RF-Lifting',
        'Geeignet für alle Hauttypen und Altersgruppen, auch für dunkle Haut',
        'Wissenschaftlich bewiesene Wirksamkeit durch zahlreiche Studien'
      ] : [
        'Стимуляция выработки коллагена и эластина для упругой, молодой кожи',
        'Видимое уменьшение морщин и признаков старения',
        'Антибактериальное действие против акне и воспалений (синий свет)',
        'Уменьшение воспалений, покраснений и пост-акне следов',
        'Осветление пигментных и возрастных пятен',
        'Улучшение состояния кожи при розацеа и куперозе',
        'Ускорение заживления и регенерации после процедур',
        'Улучшение кровообращения и снабжения кожи кислородом',
        'Ровный, сияющий цвет лица и "glow-эффект"',
        'Подтяжка и улучшение эластичности кожи',
        'Уменьшение отёков и тёмных кругов под глазами',
        'Успокоение раздражённой, уставшей кожи',
        'Полностью безболезненно, расслабляюще и приятно',
        'Без УФ-излучения, без нагрева, без повреждения кожи',
        'Без периода восстановления',
        'Комбинируется с микротоками, фонофорезом, RF-лифтингом',
        'Подходит для всех типов кожи и возрастов',
        'Научно доказанная эффективность'
      ]}
      steps={isGerman ? [
        {
          title: '1. Kostenlose Beratung und Hautanalyse',
          description: 'Zu Beginn analysieren wir Ihren Hauttyp, Ihre Hautprobleme (Akne, Falten, Pigmentierung, Rosacea etc.) und Ihre individuellen Behandlungsziele. Basierend darauf wählen wir die optimale Lichtfarbe bzw. Lichtfarbenkombination für Sie aus.'
        },
        {
          title: '2. Gründliche Hautreinigung und Vorbereitung',
          description: 'Die Haut wird sanft aber gründlich von Make-up, Talg, Schmutz und abgestorbenen Hautzellen befreit. Eine saubere Haut ist essentiell, damit das Licht optimal in die Haut eindringen und seine Wirkung entfalten kann.'
        },
        {
          title: '3. Schutzbrille anlegen',
          description: 'Sie erhalten eine spezielle Schutzbrille, um Ihre Augen vor dem hellen LED-Licht zu schützen. Die Brille ist angenehm zu tragen und ermöglicht es Ihnen, während der Behandlung zu entspannen.'
        },
        {
          title: '4. LED-Lichtbehandlung (20-40 Minuten)',
          description: 'Sie liegen bequem auf unserer Behandlungsliege, während das LED-Panel über Ihr Gesicht positioniert wird. Die Behandlung ist völlig schmerzfrei – Sie spüren lediglich eine angenehme, sanfte Wärme. Viele Kunden schlafen dabei ein.'
        },
        {
          title: '5. Abschlusspflege und optionale Zusatzbehandlungen',
          description: 'Nach der Lichtbehandlung tragen wir eine beruhigende Maske oder hochwertiges Serum auf. Optional kann die LED-Lichttherapie mit Mikrostromtherapie, Phonophorese oder RF-Lifting kombiniert werden.'
        },
        {
          title: '6. Pflegeempfehlungen und Behandlungsplan',
          description: 'Sie erhalten individuelle Empfehlungen für Ihre häusliche Pflege sowie einen Plan für Folgebehandlungen. Für optimale Ergebnisse empfehlen wir 8-10 Behandlungen, 1-3× pro Woche.'
        }
      ] : [
        {
          title: '1. Бесплатная консультация и анализ кожи',
          description: 'В начале мы анализируем ваш тип кожи, проблемы (акне, морщины, пигментация, розацеа) и цели. На основе этого подбираем оптимальный цвет или комбинацию цветов света.'
        },
        {
          title: '2. Тщательное очищение и подготовка кожи',
          description: 'Кожа мягко, но тщательно очищается от макияжа, кожного сала и загрязнений. Чистая кожа необходима для оптимального проникновения света.'
        },
        {
          title: '3. Защитные очки',
          description: 'Вы получаете специальные защитные очки для защиты глаз от яркого LED-света. Очки удобные и позволяют расслабиться во время процедуры.'
        },
        {
          title: '4. LED-светотерапия (20-40 минут)',
          description: 'Вы удобно лежите, пока LED-панель располагается над вашим лицом. Процедура полностью безболезненна — вы ощущаете только приятное мягкое тепло. Многие клиенты засыпают.'
        },
        {
          title: '5. Завершающий уход',
          description: 'После светотерапии наносим успокаивающую маску или сыворотку. По желанию LED-терапию можно комбинировать с микротоками, фонофорезом или RF-лифтингом.'
        },
        {
          title: '6. Рекомендации по уходу и план процедур',
          description: 'Вы получите индивидуальные рекомендации по домашнему уходу и план последующих процедур. Для оптимальных результатов рекомендуем 8-10 процедур, 1-3 раза в неделю.'
        }
      ]}
      priceSection="apparative-antiaging"
      contraindications={isGerman ? [
        'Schwangerschaft',
        'Einnahme von photosensibilisierenden Medikamenten',
        'Epilepsie',
        'Aktive Hautinfektionen',
        'Frische Bräune oder Solarium',
        'Hautkrebs'
      ] : [
        'Беременность',
        'Приём фотосенсибилизирующих препаратов',
        'Эпилепсия',
        'Активные кожные инфекции',
        'Свежий загар или солярий',
        'Рак кожи'
      ]}
      faq={isGerman ? [
        {
          q: 'Welche Lichtfarbe ist für mein Hautproblem richtig?',
          a: `🔴 Rotes Licht für Anti-Aging, Faltenreduktion und Kollagenstimulation.

🔵 Blaues Licht für Akne und Entzündungen.

🟢 Grünes Licht für Pigmentflecken.

🟡 Gelbes Licht für empfindliche Haut und Rosacea.

Oft kombinieren wir mehrere Farben für maximale Wirkung.`
        },
        {
          q: 'Wie viele Sitzungen brauche ich für sichtbare Ergebnisse?',
          a: 'Für optimale Ergebnisse empfehlen wir 8–10 Behandlungen, 1–3× pro Woche. Erste Verbesserungen sind oft nach 4-6 Sitzungen sichtbar. Für dauerhafte Ergebnisse empfehlen wir Erhaltungsbehandlungen alle 2-4 Wochen.'
        },
        {
          q: 'Ist die LED-Lichttherapie schmerzhaft?',
          a: 'Nein, völlig schmerzfrei. Sie spüren nur sanfte Wärme – kein Stechen, kein Brennen. Viele Kunden schlafen dabei ein. Keine UV-Strahlung, keine Hitze wie bei IPL oder Laser.'
        },
        {
          q: 'Wann sehe ich erste Ergebnisse?',
          a: 'Bei Akne: nach 2-4 Behandlungen. Bei Anti-Aging: die Haut wirkt nach der ersten Behandlung frischer, Straffung nach 6-8 Behandlungen. Bei Pigmentierung: nach 4-6 Behandlungen.'
        },
        {
          q: 'Gibt es Ausfallzeiten oder Nebenwirkungen?',
          a: 'Nein, keine Ausfallzeiten! Keine Rötungen, Schwellungen oder Hautschäden. Sie können sofort Make-up auftragen und arbeiten gehen. Ideal für Menschen mit vollem Terminkalender.'
        },
        {
          q: 'Ist LED-Lichttherapie das gleiche wie IPL oder Laser?',
          a: 'Nein. LED ist kaltes, sanftes Licht ohne Hitze und Ausfallzeiten. IPL und Laser arbeiten mit intensiver Hitze. LED ist sicherer und für alle Hauttypen geeignet.'
        },
        {
          q: 'Kann ich LED-Lichttherapie mit anderen Behandlungen kombinieren?',
          a: 'Ja! Besonders empfehlenswert mit Mikrostromtherapie für Lifting-Effekt, Phonophorese für Wirkstoffeinschleusung, RF-Lifting für Straffung oder Gesichtsreinigung.'
        },
        {
          q: 'Ist LED-Lichttherapie für alle Hauttypen geeignet?',
          a: 'Ja, für alle Hauttypen und -töne (auch dunkle Haut), anders als IPL/Laser. Auch ideal für empfindliche Haut und Rosacea.'
        }
      ] : [
        {
          q: 'Какой цвет света подходит для моей проблемы?',
          a: `🔴 Красный свет для anti-age, морщин и коллагена.

🔵 Синий свет для акне и воспалений.

🟢 Зелёный свет для пигментации.

🟡 Жёлтый свет для чувствительной кожи и розацеа.

Часто комбинируем несколько цветов.`
        },
        {
          q: 'Сколько сеансов нужно для видимых результатов?',
          a: 'Для оптимальных результатов рекомендуем 8–10 процедур, 1–3 раза в неделю. Первые улучшения заметны после 4-6 сеансов. Для долговременных результатов — поддерживающие процедуры каждые 2-4 недели.'
        },
        {
          q: 'Болезненна ли LED-светотерапия?',
          a: 'Нет, полностью безболезненна. Вы ощущаете только мягкое тепло — без покалывания, без жжения. Многие клиенты засыпают. Без УФ-излучения, без нагрева как при IPL или лазере.'
        },
        {
          q: 'Когда я увижу первые результаты?',
          a: 'При акне: после 2-4 процедур. При anti-age: кожа выглядит свежее после первой процедуры, подтяжка после 6-8. При пигментации: после 4-6 процедур.'
        },
        {
          q: 'Есть ли период восстановления или побочные эффекты?',
          a: 'Нет периода восстановления! Нет покраснений, отёков или повреждений кожи. Можно сразу наносить макияж и идти на работу. Идеально для занятых людей.'
        },
        {
          q: 'LED-светотерапия — это то же самое, что IPL или лазер?',
          a: 'Нет. LED — это холодный, мягкий свет без нагрева и периода восстановления. IPL и лазер работают с интенсивным нагревом. LED безопаснее и подходит для всех типов кожи.'
        },
        {
          q: 'Можно ли комбинировать LED-терапию с другими процедурами?',
          a: 'Да! Особенно рекомендуем с микротоками для лифтинг-эффекта, фонофорезом для введения сывороток, RF-лифтингом для подтяжки или чисткой лица.'
        },
        {
          q: 'Подходит ли LED-светотерапия для всех типов кожи?',
          a: 'Да, для всех типов и оттенков кожи (включая тёмную), в отличие от IPL/лазера. Также идеальна для чувствительной кожи и розацеа.'
        }
      ]}
      procedureSchema={<SchemaSection />}
      additionalSections={<RecommendedServices />}
      ctaTitle={isGerman ? "Bereit für strahlende, gesunde Haut in München?" : "Готовы к сияющей, здоровой коже в Мюнхене?"}
      ctaDescription={isGerman
        ? "Buchen Sie jetzt Ihre LED-Lichttherapie in unserem Studio in München-Haidhausen und erleben Sie die heilende Kraft des Lichts – wissenschaftlich bewährt, schmerzfrei und für alle Hauttypen geeignet. Kostenlose Beratung inklusive!"
        : "Запишитесь на LED-светотерапию в нашей студии в Мюнхене-Хайдхаузен и ощутите целебную силу света — научно доказано, безболезненно и подходит для всех типов кожи. Бесплатная консультация включена!"}
    />
  );
};

export default Lichttherapie;
