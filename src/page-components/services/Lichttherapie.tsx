'use client'

import { ServicePageLayout } from '@/components/ServicePageLayout';
import { Sun, Zap, Droplet, Activity } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { ServiceCard } from '@/components/ServiceCard';
import { ProcedureSchema } from '@/components/ProcedureSchema';

const Lichttherapie = () => {
  const { language } = useLanguage();
  // Schema section with 2 images
  const SchemaSection = () => (
    <ProcedureSchema
      germanImages={['/biostrom-zertifikat-muenchen.jpg', '/lichttherapie-zertifikat-muenchen.jpg']}
      russianImages={['/biostrom-lichttherapie.jpg', '/lichttherapie-led-muenchen.jpeg']}
      altTextGerman="LED-Lichttherapie Schema"
      altTextRussian="Схема LED-светотерапии"
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
          title={language === 'de' ? 'Biostrom' : language === 'ru' ? 'Биотоки' : 'Біоструми'}
          description={language === 'de' ? 'Mikrostrom für einen zusätzlichen Lifting-Effekt' : language === 'ru' ? 'Микротоки для дополнительного лифтинг-эффекта' : 'Мікроструми для додаткового ліфтинг-ефекту'}
          icon={Activity}
          href="/services/apparative-anti-aging/biostrom"
          image="/apparative-anti-aging-geraet-muenchen.webp"
        />
        <ServiceCard
          title={language === 'de' ? 'Phonophorese' : language === 'ru' ? 'Фонофорез' : 'Фонофорез'}
          description={language === 'de' ? 'Ultraschall für tiefe Wirkstoffeinschleusung' : language === 'ru' ? 'Ультразвук для глубокого введения активных веществ' : 'Ультразвук для глибокого введення активних речовин'}
          icon={Droplet}
          href="/services/phonophorese"
          image="/ultraschall-gesichtsbehandlung-muenchen.jpeg"
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
      icon={Sun}
      title={language === 'de' ? "LED-Lichttherapie (Photonentherapie) in München" : language === 'ru' ? "LED-светотерапия (фототерапия) в Мюнхене" : "LED-світлотерапія (фототерапія) у Мюнхені"}
      subtitle={language === 'de'
        ? "Sanfte Pflege für ein frisches, jugendliches Hautbild mit Lichtenergie – Ihre Kosmetik in München-Haidhausen"
        : language === 'ru' ? "Мягкий уход для свежего, молодого вида кожи с помощью световой энергии – Ваша косметология в Мюнхене-Хайдхаузен"
        : "М’який догляд для свіжого, молодого вигляду шкіри за допомогою світлової енергії – Ваша косметологія у Мюнхені-Хайдхаузен"}
      aboutTitle={language === 'de' ? "Was ist LED-Lichttherapie (Photonentherapie)?" : language === 'ru' ? "Что такое LED-светотерапия (фототерапия)?" : "Що таке LED-світлотерапія (фототерапія)?"}
      aboutDescription={language === 'de' ? [
        'Die LED-Lichttherapie, auch Photonentherapie oder Photobiomodulation genannt, ist eine moderne, nicht-invasive Methode der ästhetischen Kosmetik, bei der Licht unterschiedlicher Wellenlängen gezielt eingesetzt wird, um das Hautbild zu pflegen und die natürliche Erneuerung der Haut zu unterstützen. In unserem Kosmetikstudio in München-Haidhausen arbeiten wir mit professionellen LED-Systemen, die eine präzise Dosierung der Lichtenergie ermöglichen.',
        'Jede Lichtfarbe dringt unterschiedlich tief in die Haut ein und wird für unterschiedliche kosmetische Ziele eingesetzt:',
        '🔴 Rotes Licht (620-750 nm) — kann die hauteigene Kollagen- und Elastinbildung anregen, fördert die Mikrozirkulation und unterstützt die natürliche Erneuerung der Haut. Ideal für die Anti-Aging-Pflege und ein glatteres, strafferes Hautbild.',
        '🔵 Blaues Licht (405-470 nm) — wirkt klärend und wird zur Pflege unreiner, zu Pickeln neigender Haut eingesetzt. Perfekt für ein reineres, ausgeglicheneres Hautbild.',
        '🟢 Grünes Licht (495-570 nm) — kann Pigment- und Altersflecken optisch mildern und unterstützt einen gleichmäßigeren Teint für ein ebenmäßigeres Hautbild.',
        '🟡 Gelbes Licht (570-620 nm) — wirkt beruhigend und ausgleichend. Ideal für empfindliche, zu Rötungen neigende Haut und zur Beruhigung gereizter Haut.',
        'Die LED-Lichttherapie ist angenehm, entspannend und besonders schonend – sie arbeitet ohne UV-Strahlung und ohne nennenswerte Wärmeentwicklung. Anders als bei IPL (Intense Pulsed Light) oder Laser-Behandlungen gibt es in der Regel keine Ausfallzeiten. Die Behandlung ist für viele Hauttypen (auch dunkle Haut) und Altersgruppen geeignet.',
        'Viele unserer Kunden aus München und Umgebung schätzen die LED-Lichttherapie als sanfte, natürliche Methode für ein strahlendes, gepflegtes Hautbild – ob bei unreiner Haut, ersten Zeichen der Hautalterung, Pigmentflecken, Rötungen oder einfach zur Erhaltung eines frischen, ebenmäßigen Teints.',
        'Ob als eigenständige Behandlung oder in Kombination mit Mikrostromtherapie, Phonophorese, RF-Lifting oder Gesichtsreinigung – die LED-Lichttherapie in München ist eine vielseitige und besonders schonende Methode für ein frisches, gepflegtes Hautbild und natürliche Schönheit.'
      ] : language === 'ru' ? [
        'LED-светотерапия, также называемая фототерапией или фотобиомодуляцией — это современный неинвазивный метод эстетической косметологии, при котором свет разных длин волн используется для ухода за кожей и поддержки её естественного обновления. В нашей косметологической студии в Мюнхене-Хайдхаузен мы работаем с профессиональными LED-системами.',
        'Каждый цвет света проникает на разную глубину и используется для разных косметических задач:',
        '🔴 Красный свет (620-750 нм) — может стимулировать выработку коллагена и эластина, улучшает микроциркуляцию и поддерживает естественное обновление кожи. Идеален для anti-age ухода и более гладкого, подтянутого вида кожи.',
        '🔵 Синий свет (405-470 нм) — оказывает очищающее действие и применяется для ухода за проблемной кожей, склонной к высыпаниям. Идеален для более чистого и ровного вида кожи.',
        '🟢 Зелёный свет (495-570 нм) — может визуально смягчить пигментные и возрастные пятна и способствует более ровному тону кожи.',
        '🟡 Жёлтый свет (570-620 нм) — успокаивает и выравнивает состояние кожи. Идеален для чувствительной кожи, склонной к покраснениям, и успокоения раздражённой кожи.',
        'LED-светотерапия — приятная, расслабляющая и особенно бережная процедура: без УФ-излучения и без заметного нагрева. В отличие от IPL или лазера, как правило, не требует периода восстановления. Подходит для многих типов кожи и возрастов.',
        'Многие наши клиенты из Мюнхена ценят LED-светотерапию как мягкий, естественный метод для сияющей, ухоженной кожи — при проблемной коже, признаках старения, пигментации или покраснениях.',
        'Как самостоятельная процедура или в комбинации с микротоками, фонофорезом, RF-лифтингом — LED-светотерапия в Мюнхене является универсальным и особенно бережным методом ухода для свежего, ухоженного вида кожи.'
      ] : [
        'LED-світлотерапія, також називана фототерапією або фотобіомодуляцією — це сучасний неінвазивний метод естетичної косметології, при якому світло різних довжин хвиль використовується для догляду за шкірою та підтримки її природного оновлення. У нашій косметологічній студії у Мюнхені-Хайдхаузен ми працюємо з професійними LED-системами.',
        'Кожен колір світла проникає на різну глибину і використовується для різних косметичних завдань:',
        '🔴 Червоне світло (620-750 нм) — може стимулювати вироблення колагену та еластину, покращує мікроциркуляцію та підтримує природне оновлення шкіри. Ідеальне для anti-age догляду та гладшого, підтягнутішого вигляду шкіри.',
        '🔵 Синє світло (405-470 нм) — має очищувальну дію та застосовується для догляду за проблемною шкірою, схильною до висипань. Ідеальне для чистішого та рівнішого вигляду шкіри.',
        '🟢 Зелене світло (495-570 нм) — може візуально пом’якшити пігментні та вікові плями і сприяє рівнішому тону шкіри.',
        '🟡 Жовте світло (570-620 нм) — заспокоює та вирівнює стан шкіри. Ідеальне для чутливої шкіри, схильної до почервонінь, та заспокоєння подразненої шкіри.',
        'LED-світлотерапія — приємна, розслаблююча та особливо дбайлива процедура: без УФ-випромінювання та без помітного нагріву. На відміну від IPL або лазера, як правило, не потребує періоду відновлення. Підходить для багатьох типів шкіри та віку.',
        'Багато наших клієнтів з Мюнхена цінують LED-світлотерапію як м’який, природний метод для сяючої, доглянутої шкіри — при проблемній шкірі, ознаках старіння, пігментації або почервоніннях.',
        'Як самостійна процедура або в комбінації з мікрострумами, фонофорезом, RF-ліфтингом — LED-світлотерапія у Мюнхені є універсальним та особливо дбайливим методом догляду для свіжого, доглянутого вигляду шкіри.'
      ]}
      benefits={language === 'de' ? [
        'Kann die Kollagen- und Elastinbildung anregen – für ein strafferes, frischeres Hautbild',
        'Kann feine Linien, Fältchen und Zeichen der Hautalterung optisch mildern',
        'Klärende Pflege für unreine, zu Pickeln neigende Haut (blaues Licht)',
        'Kann Rötungen und Post-Akne-Flecken optisch mildern',
        'Kann Pigment- und Altersflecken optisch aufhellen',
        'Pflege für empfindliche, zu Rötungen und Couperose neigende Haut',
        'Unterstützt die Hautberuhigung nach ästhetischen Behandlungen',
        'Fördert die Mikrozirkulation der Haut',
        'Gleichmäßiger, strahlender Teint und "Glow-Effekt"',
        'Für ein strafferes, elastischeres Hautgefühl',
        'Kann die Augenpartie frischer und weniger müde wirken lassen',
        'Beruhigung gereizter, gestresster Haut',
        'Angenehm, entspannend und schonend',
        'Ohne UV-Strahlung und ohne Hitzeentwicklung',
        'In der Regel keine Ausfallzeiten – sofort gesellschaftsfähig',
        'Kombinierbar mit Mikrostromtherapie, Phonophorese, RF-Lifting',
        'Geeignet für viele Hauttypen und Altersgruppen, auch für dunkle Haut',
        'Bewährte Methode der apparativen Kosmetik'
      ] : language === 'ru' ? [
        'Может стимулировать выработку коллагена и эластина — для более упругой, свежей кожи',
        'Может визуально смягчить морщины и признаки старения',
        'Очищающий уход для проблемной кожи, склонной к высыпаниям (синий свет)',
        'Может визуально уменьшить покраснения и следы постакне',
        'Может визуально осветлить пигментные и возрастные пятна',
        'Уход за чувствительной кожей, склонной к покраснениям и куперозу',
        'Поддерживает успокоение кожи после косметических процедур',
        'Улучшение микроциркуляции кожи',
        'Ровный, сияющий цвет лица и "glow-эффект"',
        'Для ощущения более подтянутой, эластичной кожи',
        'Зона вокруг глаз может выглядеть свежее и менее уставшей',
        'Успокоение раздражённой, уставшей кожи',
        'Приятно, расслабляюще и бережно',
        'Без УФ-излучения и без нагрева',
        'Как правило, без периода восстановления',
        'Комбинируется с микротоками, фонофорезом, RF-лифтингом',
        'Подходит для многих типов кожи и возрастов',
        'Проверенный метод аппаратной косметологии'
      ] : [
        'Може стимулювати вироблення колагену та еластину — для пружнішої, свіжішої шкіри',
        'Може візуально пом’якшити зморшки та ознаки старіння',
        'Очищувальний догляд за проблемною шкірою, схильною до висипань (синє світло)',
        'Може візуально зменшити почервоніння та сліди постакне',
        'Може візуально освітлити пігментні та вікові плями',
        'Догляд за чутливою шкірою, схильною до почервонінь та куперозу',
        'Підтримує заспокоєння шкіри після косметичних процедур',
        'Покращення мікроциркуляції шкіри',
        'Рівний, сяючий колір обличчя та "glow-ефект"',
        'Для відчуття підтягнутішої, еластичнішої шкіри',
        'Зона навколо очей може виглядати свіжішою та менш втомленою',
        'Заспокоєння подразненої, втомленої шкіри',
        'Приємно, розслаблююче та дбайливо',
        'Без УФ-випромінювання та без нагріву',
        'Як правило, без періоду відновлення',
        'Поєднується з мікрострумами, фонофорезом, RF-ліфтингом',
        'Підходить для багатьох типів шкіри та віку',
        'Перевірений метод апаратної косметології'
      ]}
      steps={language === 'de' ? [
        {
          title: '1. Kostenlose Beratung und Hautanalyse',
          description: 'Zu Beginn analysieren wir Ihren Hauttyp, Ihre Hautbedürfnisse (Unreinheiten, Fältchen, Pigmentierung, Rötungen etc.) und Ihre individuellen Behandlungsziele. Basierend darauf wählen wir die optimale Lichtfarbe bzw. Lichtfarbenkombination für Sie aus.'
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
          description: 'Sie liegen bequem auf unserer Behandlungsliege, während das LED-Panel über Ihr Gesicht positioniert wird. Die Behandlung ist sehr angenehm – Sie spüren lediglich eine angenehme, sanfte Wärme. Viele Kunden schlafen dabei ein.'
        },
        {
          title: '5. Abschlusspflege und optionale Zusatzbehandlungen',
          description: 'Nach der Lichtbehandlung tragen wir eine beruhigende Maske oder hochwertiges Serum auf. Optional kann die LED-Lichttherapie mit Mikrostromtherapie, Phonophorese oder RF-Lifting kombiniert werden.'
        },
        {
          title: '6. Pflegeempfehlungen und Behandlungsplan',
          description: 'Sie erhalten individuelle Empfehlungen für Ihre häusliche Pflege sowie einen Plan für Folgebehandlungen. Je nach Ziel empfehlen wir in der Regel 8-10 Behandlungen, 1-3× pro Woche.'
        }
      ] : language === 'ru' ? [
        {
          title: '1. Бесплатная консультация и анализ кожи',
          description: 'В начале мы анализируем ваш тип кожи, потребности (высыпания, морщинки, пигментация, покраснения) и цели. На основе этого подбираем оптимальный цвет или комбинацию цветов света.'
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
          description: 'Вы удобно лежите, пока LED-панель располагается над вашим лицом. Процедура очень приятна — вы ощущаете только приятное мягкое тепло. Многие клиенты засыпают.'
        },
        {
          title: '5. Завершающий уход',
          description: 'После светотерапии наносим успокаивающую маску или сыворотку. По желанию LED-терапию можно комбинировать с микротоками, фонофорезом или RF-лифтингом.'
        },
        {
          title: '6. Рекомендации по уходу и план процедур',
          description: 'Вы получите индивидуальные рекомендации по домашнему уходу и план последующих процедур. В зависимости от цели обычно рекомендуем 8-10 процедур, 1-3 раза в неделю.'
        }
      ] : [
        {
          title: '1. Безкоштовна консультація та аналіз шкіри',
          description: 'На початку ми аналізуємо ваш тип шкіри, потреби (висипання, зморшки, пігментація, почервоніння) та цілі. На основі цього підбираємо оптимальний колір або комбінацію кольорів світла.'
        },
        {
          title: '2. Ретельне очищення та підготовка шкіри',
          description: 'Шкіра м\'яко, але ретельно очищується від макіяжу, шкірного сала та забруднень. Чиста шкіра необхідна для оптимального проникнення світла.'
        },
        {
          title: '3. Захисні окуляри',
          description: 'Ви отримуєте спеціальні захисні окуляри для захисту очей від яскравого LED-світла. Окуляри зручні та дозволяють розслабитися під час процедури.'
        },
        {
          title: '4. LED-світлотерапія (20-40 хвилин)',
          description: 'Ви зручно лежите, поки LED-панель розташовується над вашим обличчям. Процедура дуже приємна — ви відчуваєте лише приємне м\'яке тепло. Багато клієнтів засинають.'
        },
        {
          title: '5. Завершальний догляд',
          description: 'Після світлотерапії наносимо заспокійливу маску або сироватку. За бажанням LED-терапію можна поєднувати з мікрострумами, фонофорезом або RF-ліфтингом.'
        },
        {
          title: '6. Рекомендації з догляду та план процедур',
          description: 'Ви отримаєте індивідуальні рекомендації з домашнього догляду та план наступних процедур. Залежно від мети зазвичай рекомендуємо 8-10 процедур, 1-3 рази на тиждень.'
        }
      ]}
      priceSection="apparative-antiaging"
      contraindications={language === 'de' ? [
        'Schwangerschaft',
        'Einnahme von photosensibilisierenden Medikamenten',
        'Epilepsie',
        'Aktive Hautinfektionen',
        'Frische Bräune oder Solarium',
        'Hautkrebs'
      ] : language === 'ru' ? [
        'Беременность',
        'Приём фотосенсибилизирующих препаратов',
        'Эпилепсия',
        'Активные кожные инфекции',
        'Свежий загар или солярий',
        'Рак кожи'
      ] : [
        'Вагітність',
        'Прийом фотосенсибілізуючих препаратів',
        'Епілепсія',
        'Активні шкірні інфекції',
        'Свіжа засмага або солярій',
        'Рак шкіри'
      ]}
      faq={language === 'de' ? [
        {
          q: 'Welche Lichtfarbe ist für mein Hautproblem richtig?',
          a: `🔴 Rotes Licht für die Anti-Aging-Pflege und ein glatteres, strafferes Hautbild.

🔵 Blaues Licht für unreine, zu Pickeln neigende Haut.

🟢 Grünes Licht für Pigmentflecken.

🟡 Gelbes Licht für empfindliche, zu Rötungen neigende Haut.

Oft kombinieren wir mehrere Farben – individuell auf Ihre Haut abgestimmt.`
        },
        {
          q: 'Wie viele Sitzungen brauche ich für sichtbare Ergebnisse?',
          a: 'Wir empfehlen in der Regel eine Kur von 8–10 Behandlungen, 1–3× pro Woche. Erste Veränderungen sind oft nach 4-6 Sitzungen sichtbar. Um das Ergebnis zu erhalten, empfehlen wir Erhaltungsbehandlungen alle 2-4 Wochen. Ergebnisse sind individuell verschieden.'
        },
        {
          q: 'Ist die LED-Lichttherapie schmerzhaft?',
          a: 'Nein. Sie spüren höchstens eine sanfte Wärme – kein Stechen, kein Brennen. Viele Kunden schlafen dabei ein. Keine UV-Strahlung und keine intensive Hitze wie bei IPL oder Laser.'
        },
        {
          q: 'Wann sehe ich erste Ergebnisse?',
          a: 'Das ist individuell verschieden. Bei unreiner Haut oft nach 2-4 Behandlungen. Bei der Anti-Aging-Pflege wirkt die Haut häufig schon nach der ersten Behandlung frischer, ein strafferes Hautbild zeigt sich meist nach 6-8 Behandlungen. Bei Pigmentflecken oft nach 4-6 Behandlungen.'
        },
        {
          q: 'Gibt es Ausfallzeiten oder Nebenwirkungen?',
          a: 'In der Regel nicht. Die Behandlung ist sehr gut verträglich, Rötungen oder Schwellungen treten kaum auf. Sie können sofort Make-up auftragen und arbeiten gehen. Ideal für Menschen mit vollem Terminkalender.'
        },
        {
          q: 'Ist LED-Lichttherapie das gleiche wie IPL oder Laser?',
          a: 'Nein. LED ist kaltes, sanftes Licht ohne Hitze und Ausfallzeiten. IPL und Laser arbeiten mit intensiver Hitze. LED ist besonders schonend und für viele Hauttypen geeignet.'
        },
        {
          q: 'Kann ich LED-Lichttherapie mit anderen Behandlungen kombinieren?',
          a: 'Ja! Besonders empfehlenswert mit Mikrostromtherapie für Lifting-Effekt, Phonophorese für Wirkstoffeinschleusung, RF-Lifting für Straffung oder Gesichtsreinigung.'
        },
        {
          q: 'Ist LED-Lichttherapie für alle Hauttypen geeignet?',
          a: 'Ja, für nahezu alle Hauttypen und -töne (auch dunkle Haut), anders als IPL/Laser. Auch ideal für empfindliche, zu Rötungen neigende Haut.'
        }
      ] : language === 'ru' ? [
        {
          q: 'Какой цвет света подходит для моей проблемы?',
          a: `🔴 Красный свет для anti-age ухода и более подтянутого вида кожи.

🔵 Синий свет для проблемной кожи, склонной к высыпаниям.

🟢 Зелёный свет для пигментации.

🟡 Жёлтый свет для чувствительной кожи, склонной к покраснениям.

Часто комбинируем несколько цветов.`
        },
        {
          q: 'Сколько сеансов нужно для видимых результатов?',
          a: 'Обычно рекомендуем курс из 8–10 процедур, 1–3 раза в неделю. Первые изменения часто заметны после 4-6 сеансов. Для сохранения результата — поддерживающие процедуры каждые 2-4 недели. Результаты индивидуальны.'
        },
        {
          q: 'Болезненна ли LED-светотерапия?',
          a: 'Нет. Вы ощущаете максимум мягкое тепло — без покалывания, без жжения. Многие клиенты засыпают. Без УФ-излучения и без интенсивного нагрева, как при IPL или лазере.'
        },
        {
          q: 'Когда я увижу первые результаты?',
          a: 'Это индивидуально. При проблемной коже — часто после 2-4 процедур. При anti-age уходе кожа нередко выглядит свежее уже после первой процедуры, более подтянутый вид — обычно после 6-8. При пигментации — часто после 4-6 процедур.'
        },
        {
          q: 'Есть ли период восстановления или побочные эффекты?',
          a: 'Как правило, нет. Процедура очень хорошо переносится, покраснения или отёки возникают крайне редко. Можно сразу наносить макияж и идти на работу. Идеально для занятых людей.'
        },
        {
          q: 'LED-светотерапия — это то же самое, что IPL или лазер?',
          a: 'Нет. LED — это холодный, мягкий свет без нагрева и периода восстановления. IPL и лазер работают с интенсивным нагревом. LED особенно бережен и подходит для многих типов кожи.'
        },
        {
          q: 'Можно ли комбинировать LED-терапию с другими процедурами?',
          a: 'Да! Особенно рекомендуем с микротоками для лифтинг-эффекта, фонофорезом для введения сывороток, RF-лифтингом для подтяжки или чисткой лица.'
        },
        {
          q: 'Подходит ли LED-светотерапия для всех типов кожи?',
          a: 'Да, практически для всех типов и оттенков кожи (включая тёмную), в отличие от IPL/лазера. Также идеальна для чувствительной кожи, склонной к покраснениям.'
        }
      ] : [
        {
          q: 'Який колір світла підходить для моєї проблеми?',
          a: `🔴 Червоне світло для anti-age догляду та підтягнутішого вигляду шкіри.

🔵 Синє світло для проблемної шкіри, схильної до висипань.

🟢 Зелене світло для пігментації.

🟡 Жовте світло для чутливої шкіри, схильної до почервонінь.

Часто поєднуємо кілька кольорів.`
        },
        {
          q: 'Скільки сеансів потрібно для видимих результатів?',
          a: 'Зазвичай рекомендуємо курс із 8–10 процедур, 1–3 рази на тиждень. Перші зміни часто помітні після 4-6 сеансів. Для збереження результату — підтримуючі процедури кожні 2-4 тижні. Результати індивідуальні.'
        },
        {
          q: 'Чи болісна LED-світлотерапія?',
          a: 'Ні. Ви відчуваєте щонайбільше м\'яке тепло — без поколювання, без печіння. Багато клієнтів засинають. Без УФ-випромінювання та без інтенсивного нагріву, як при IPL або лазері.'
        },
        {
          q: 'Коли я побачу перші результати?',
          a: 'Це індивідуально. При проблемній шкірі — часто після 2-4 процедур. При anti-age догляді шкіра нерідко виглядає свіжішою вже після першої процедури, підтягнутіший вигляд — зазвичай після 6-8. При пігментації — часто після 4-6 процедур.'
        },
        {
          q: 'Чи є період відновлення або побічні ефекти?',
          a: 'Як правило, ні. Процедура дуже добре переноситься, почервоніння чи набряки виникають вкрай рідко. Можна одразу наносити макіяж та йти на роботу. Ідеально для зайнятих людей.'
        },
        {
          q: 'LED-світлотерапія — це те саме, що IPL або лазер?',
          a: 'Ні. LED — це холодне, м\'яке світло без нагріву та періоду відновлення. IPL та лазер працюють з інтенсивним нагрівом. LED особливо дбайливий та підходить для багатьох типів шкіри.'
        },
        {
          q: 'Чи можна поєднувати LED-терапію з іншими процедурами?',
          a: 'Так! Особливо рекомендуємо з мікрострумами для ліфтинг-ефекту, фонофорезом для введення сироваток, RF-ліфтингом для підтяжки або чисткою обличчя.'
        },
        {
          q: 'Чи підходить LED-світлотерапія для всіх типів шкіри?',
          a: 'Так, практично для всіх типів та відтінків шкіри (включно з темною), на відміну від IPL/лазера. Також ідеальна для чутливої шкіри, схильної до почервонінь.'
        }
      ]}
      procedureSchema={<SchemaSection />}
      additionalSections={<RecommendedServices />}
      ctaTitle={language === 'de' ? "Bereit für ein strahlendes, gepflegtes Hautbild in München?" : language === 'ru' ? "Готовы к сияющей, ухоженной коже в Мюнхене?" : "Готові до сяючої, доглянутої шкіри у Мюнхені?"}
      ctaDescription={language === 'de'
        ? "Buchen Sie jetzt Ihre LED-Lichttherapie in unserem Studio in München-Haidhausen und erleben Sie die pflegende Kraft des Lichts – sanft, angenehm und für viele Hauttypen geeignet. Kostenlose Beratung inklusive!"
        : language === 'ru' ? "Запишитесь на LED-светотерапию в нашей студии в Мюнхене-Хайдхаузен и ощутите ухаживающую силу света — мягко, приятно и подходит для многих типов кожи. Бесплатная консультация включена!"
        : "Запишіться на LED-світлотерапію в нашій студії у Мюнхені-Хайдхаузен та відчуйте доглядову силу світла — м’яко, приємно та підходить для багатьох типів шкіри. Безкоштовна консультація включена!"}
    />
  );
};

export default Lichttherapie;
