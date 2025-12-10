'use client'

import { ServicePageLayout } from '@/components/ServicePageLayout';
import { Waves, Droplet, Zap, Sparkles } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { ServiceCard } from '@/components/ServiceCard';

const Ultraschall = () => {
  const { language } = useLanguage();
  const isGerman = language === 'de';

  // Custom sections component for procedure links
  const UltraschallProcedures = () => (
    <div className="space-y-6">
      <h2 className="text-3xl font-heading font-bold text-brand-espresso mb-8">
        {language === 'de' ? 'Unsere Ultraschall-Behandlungen in München' : language === 'ru' ? 'Наши ультразвуковые процедуры в Мюнхене' : 'Наши ультразвуковые процедуры в Мюнхене'}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <ServiceCard
          title={language === 'de' ? 'Phonophorese' : language === 'ru' ? 'Фонофорез' : 'Фонофорез'}
          description={isGerman
            ? 'Tiefe Einschleusung von Wirkstoffen mit Ultraschall'
            : 'Глубокое введение активных веществ ультразвуком'}
          icon={Droplet}
          href="/services/phonophorese"
          image="/128.jpeg"
        />
        <ServiceCard
          title={language === 'de' ? 'Kavitation' : language === 'ru' ? 'Кавитация' : 'Кавитация'}
          description={isGerman
            ? 'Nicht-invasive Körperformung und Fettreduktion'
            : 'Неинвазивная коррекция фигуры и липолиз'}
          icon={Zap}
          href="/services/koerperbehandlungen/kavitation"
          image="/173.jpeg"
        />
        <ServiceCard
          title={language === 'de' ? 'Gesichtsreinigung' : language === 'ru' ? 'Чистка лица' : 'Чистка обличчя'}
          description={isGerman
            ? 'Sanfte Tiefenreinigung mit Ultraschall'
            : 'Мягкое глубокое очищение ультразвуком'}
          icon={Sparkles}
          href="/services/gesichtsreinigung"
          image="/51.jpg"
        />
      </div>

      <div className="mt-8 p-6 bg-brand-gold/5 rounded-lg border border-brand-gold/20">
        <p className="text-brand-espresso/90 leading-relaxed">
          {isGerman
            ? '💡 Alle drei Verfahren nutzen die gleiche physikalische Grundlage — die Wirkung von Ultraschallwellen — unterscheiden sich jedoch in der Frequenz, Intensität, Tiefe, Behandlungszielen und verwendeten Präparaten. Während Phonophorese auf intensive Wirkstoffeinschleusung und Anti-Aging abzielt, dient Kavitation der Körperformung und Fettreduktion, und Ultraschall-Gesichtsreinigung der gründlichen, aber sanften Hautreinigung und Porenverfeinerung.'
            : '💡 Все три метода используют одну и ту же физическую основу — действие ультразвуковых волн, но различаются по частоте, интенсивности, глубине, целям воздействия и применяемым препаратам. В то время как фонофорез направлен на интенсивное введение активных веществ и омоложение, кавитация служит для коррекции фигуры и липолиза, а ультразвуковая чистка лица — для глубокого, но деликатного очищения и сужения пор.'
          }
        </p>
      </div>
    </div>
  );

  return (
    <ServicePageLayout
      icon={Waves}
      title={language === 'de' ? "Ultraschalltherapie in München — Moderne Technologien für Hautpflege und Regeneration" : language === 'ru' ? "Ультразвуковая терапия в Мюнхене — Современные технологии ухода и восстановления" : "Ультразвуковая терапия в Мюнхене — Современные технологии ухода и восстановления"}
      subtitle={language === 'de' ? "Wissenschaftlich bewährte, nicht-invasive Behandlungen für Gesicht und Körper in München-Haidhausen" : language === 'ru' ? "Научно обоснованные, неинвазивные процедуры для лица и тела в Мюнхене-Хайдхаузен" : "Научно обоснованные, неинвазивные процедуры для лица и тела в Мюнхене-Хайдхаузен"}
      aboutTitle={language === 'de' ? "Was ist Ultraschalltherapie und wie funktioniert sie?" : language === 'ru' ? "Что такое ультразвуковая терапия и как она работает?" : "Что такое ультразвуковая терапия и как она работает?"}
      aboutDescription={[
        isGerman
          ? 'Ultraschalltherapie nutzt hochfrequente Schallwellen, die sanfte Mikrovibrationen in den Hautschichten erzeugen. Diese aktivieren den Stoffwechsel, stimulieren Kollagen und fördern die Regeneration — völlig schmerzfrei.'
          : 'Ультразвуковая терапия использует высокочастотные волны, создающие микровибрации в коже. Они активируют метаболизм, стимулируют коллаген и способствуют регенерации — абсолютно безболезненно.',

        isGerman
          ? 'Wir bieten drei Arten: Phonophorese (Anti-Aging), Kavitation (Körperformung) und Gesichtsreinigung (Tiefenreinigung).'
          : 'Мы предлагаем три вида: фонофорез (омоложение), кавитация (коррекция фигуры) и чистка лица (глубокое очищение).'
      ]}
      benefits={[
        language === 'de' ? 'Verbesserung der Mikrozirkulation und Sauerstoffversorgung der Haut' : language === 'ru' ? 'Улучшение микроциркуляции и снабжения кожи кислородом' : 'Улучшение микроциркуляции и снабжения кожи кислородом',
        language === 'de' ? 'Stimulation der Kollagen- und Elastinproduktion für straffere, jugendlichere Haut' : language === 'ru' ? 'Стимуляция производства коллагена и эластина для более упругой, молодой кожи' : 'Стимуляция производства коллагена и эластина для более упругой, молодой кожи',
        language === 'de' ? 'Bis zu 10-fach tiefere Wirkstoffpenetration bei Phonophorese' : language === 'ru' ? 'Проникновение активных веществ в 10 раз глубже при фонофорезе' : 'Проникновение активных веществ в 10 раз глубже при фонофорезе',
        language === 'de' ? 'Aktivierung des Zellstoffwechsels und Beschleunigung der Regeneration' : language === 'ru' ? 'Активация клеточного метаболизма и ускорение регенерации' : 'Активация клеточного метаболизма и ускорение регенерации',
        language === 'de' ? 'Lymphdrainage-Effekt für Entgiftung und Reduzierung von Schwellungen' : language === 'ru' ? 'Лимфодренажный эффект для детоксикации и уменьшения отёков' : 'Лимфодренажный эффект для детоксикации и уменьшения отёков',
        language === 'de' ? 'Sanfte Mikromassage zur Entspannung der Gesichtsmuskulatur' : language === 'ru' ? 'Мягкий микромассаж для расслабления лицевых мышц' : 'Мягкий микромассаж для расслабления лицевых мышц',
        language === 'de' ? 'Entzündungshemmende und schmerzlindernde Wirkung' : language === 'ru' ? 'Противовоспалительное и обезболивающее действие' : 'Противовоспалительное и обезболивающее действие',
        language === 'de' ? 'Porenverfeinerung und Verbesserung der Hautstruktur' : language === 'ru' ? 'Сужение пор и улучшение текстуры кожи' : 'Сужение пор и улучшение текстуры кожи',
        language === 'de' ? 'Nicht-invasive Körperformung und Fettreduktion bei Kavitation' : language === 'ru' ? 'Неинвазивная коррекция фигуры и липолиз при кавитации' : 'Неинвазивная коррекция фигуры и липолиз при кавитации',
        language === 'de' ? 'Tiefenreinigung ohne mechanische Belastung der Haut' : language === 'ru' ? 'Глубокое очищение без механического травмирования кожи' : 'Глубокое очищение без механического травмирования кожи',
        language === 'de' ? 'Völlig schmerzfrei, sicher und entspannend' : language === 'ru' ? 'Абсолютно безболезненно, безопасно и расслабляюще' : 'Абсолютно безболезненно, безопасно и расслабляюще',
        language === 'de' ? 'Keine Ausfallzeiten — sofort gesellschaftsfähig' : language === 'ru' ? 'Без периода реабилитации — сразу готовы к общению' : 'Без периода реабилитации — сразу готовы к общению',
        language === 'de' ? 'Kombinierbar mit anderen Behandlungen (Mikrostrom, RF, LED-Lichttherapie)' : language === 'ru' ? 'Можно комбинировать с другими процедурами (микротоки, RF, светотерапия)' : 'Можно комбинировать с другими процедурами (микротоки, RF, светотерапия)',
        language === 'de' ? 'Geeignet für alle Hauttypen und Altersgruppen' : language === 'ru' ? 'Подходит для всех типов кожи и возрастов' : 'Подходит для всех типов кожи и возрастов',
        language === 'de' ? 'Wissenschaftlich bewährte Methode mit Jahrzehnten klinischer Erfahrung' : language === 'ru' ? 'Научно обоснованный метод с десятилетиями клинического опыта' : 'Научно обоснованный метод с десятилетиями клинического опыта',
        language === 'de' ? 'Natürliche, nicht-invasive Alternative zu Injektionen und operativen Eingriffen' : language === 'ru' ? 'Естественная, неинвазивная альтернатива инъекциям и операциям' : 'Естественная, неинвазивная альтернатива инъекциям и операциям'
      ]}
      steps={[
        {
          title: language === 'de' ? '1. Kostenlose Beratung und Hautanalyse' : language === 'ru' ? '1. Бесплатная консультация и анализ кожи' : '1. Бесплатная консультація и анализ кожи',
          description: isGerman
            ? 'Analyse von Hauttyp, Problemen und Zielen. Empfehlung der optimalen Ultraschall-Behandlung.'
            : 'Анализ типа кожи, проблем и целей. Рекомендация оптимальной ультразвуковой процедуры.'
        },
        {
          title: language === 'de' ? '2. Vorbereitung der Haut' : language === 'ru' ? '2. Подготовка кожи' : '2. Подготовка кожи',
          description: isGerman
            ? 'Gründliche Reinigung und Auftragen des Kontaktgels. Bei Phonophorese zusätzlich Auftragen hochwertiger Wirkstoffe.'
            : 'Тщательное очищение и нанесение контактного геля. При фонофорезе дополнительно нанесение активных веществ.'
        },
        {
          title: language === 'de' ? '3. Ultraschall-Behandlung (30-60 Minuten)' : language === 'ru' ? '3. Ультразвуковая процедура (30-60 минут)' : '3. Ультразвуковая процедура (30-60 хвилин)',
          description: isGerman
            ? 'Sanfte Behandlung mit Ultraschallkopf. Völlig schmerzfrei und entspannend.'
            : 'Мягкая обработка ультразвуковым датчиком. Абсолютно безболезненно и расслабляюще.'
        },
        {
          title: language === 'de' ? '4. Abschlusspflege' : language === 'ru' ? '4. Завершающий уход' : '4. Завершающий уход',
          description: isGerman
            ? 'Beruhigende Maske und Serum. Optional Kombination mit anderen Behandlungen.'
            : 'Успокаивающая маска и сыворотка. Опционально комбинация с другими процедурами.'
        },
        {
          title: language === 'de' ? '5. Pflegeempfehlungen' : language === 'ru' ? '5. Рекомендации' : '5. Рекомендации',
          description: isGerman
            ? 'Individuelle Pflegetipps und Behandlungsplan für optimale Ergebnisse.'
            : 'Индивидуальные рекомендации по уходу и план процедур для оптимального результата.'
        }
      ]}
      // Add custom section for procedures
      additionalSections={<UltraschallProcedures />}
      // No price table - redirect to individual services
      priceSection="apparative-antiaging"
      contraindications={[
        language === 'de' ? 'Schwangerschaft' : language === 'ru' ? 'Беременность' : 'Беременность',
        language === 'de' ? 'Herzschrittmacher oder Metallimplantate im Behandlungsbereich' : language === 'ru' ? 'Кардиостимулятор или металлические имплантаты в зоне воздействия' : 'Кардиостимулятор или металлические имплантаты в зоне воздействия',
        language === 'de' ? 'Thrombose oder schwere Venenerkrankungen' : language === 'ru' ? 'Тромбоз или тяжёлые заболевания вен' : 'Тромбоз или тяжёлые заболевания вен',
        language === 'de' ? 'Krebs oder Chemotherapie' : language === 'ru' ? 'Онкология или химиотерапия' : 'Онкология или химиотерапия',
        language === 'de' ? 'Epilepsie' : language === 'ru' ? 'Эпилепсия' : 'Эпилепсия',
        language === 'de' ? 'Aktive Hautinfektionen, Herpes oder offene Wunden' : language === 'ru' ? 'Активные кожные инфекции, герпес или открытые раны' : 'Активные кожные инфекции, герпес или открытые раны',
        language === 'de' ? 'Frische Operationen (mind. 3-6 Monate Abstand)' : language === 'ru' ? 'Недавние операции (мин. 3-6 месяцев после)' : 'Недавние операции (хв. 3-6 месяцев после)',
        language === 'de' ? 'Frische Filler oder Botox (mind. 2 Wochen Abstand)' : language === 'ru' ? 'Недавние филлеры или ботокс (мин. 2 недели после)' : 'Недавние филлеры или ботокс (хв. 2 недели после)'
      ]}
      faq={[
        {
          q: language === 'de' ? 'Was ist der Unterschied zwischen Phonophorese, Kavitation und Ultraschall-Gesichtsreinigung?' : language === 'ru' ? 'В чём разница между фонофорезом, кавитацией и ультразвуковой чисткой лица?' : 'В чём разница между фонофорезом, кавитацией и ультразвуковой чисткой лица?',
          a: isGerman
            ? `Alle drei Verfahren nutzen Ultraschallwellen, unterscheiden sich jedoch in Frequenz, Intensität und Zielsetzung:

🔹 Ultraschall-Phonophorese (1-3 MHz) schleust hochwertige Wirkstoffe (Hyaluronsäure, Kollagen, Vitamine, Exosomen) bis zu 10-mal tiefer in die Haut ein — ideal für Anti-Aging, intensive Hydratation und Hautregeneration.

🔹 Ultraschall-Kavitation (40 kHz) erzeugt Mikroblasen im Fettgewebe, die Fettzellen sanft auflösen — ideal für nicht-invasive Körperformung und Fettreduktion an Bauch, Hüften, Oberschenkeln.

🔹 Ultraschall-Gesichtsreinigung (20-30 kHz) entfernt sanft abgestorbene Hautzellen, Talg und Unreinheiten — ideal für gründliche, aber schonende Tiefenreinigung und Porenverfeinerung.`
            : `Все три метода используют ультразвуковые волны, но различаются по частоте, интенсивности и целям:

🔹 Ультразвуковая фонофорез (1-3 МГц) вводит высококачественные активные вещества (гиалуроновая кислота, коллаген, витамины, экзосомы) в 10 раз глубже в кожу — идеально для омоложения, интенсивного увлажнения и регенерации кожи.

🔹 Ультразвуковая кавитация (40 кГц) создаёт микропузырьки в жировой ткани, которые мягко растворяют жировые клетки — идеально для неинвазивной коррекции фигуры и липолиза на животе, бёдрах, галифе.

🔹 Ультразвуковая чистка лица (20-30 кГц) деликатно удаляет ороговевшие клетки, кожное сало и загрязнения — идеально для глубокого, но щадящего очищения и сужения пор.`
        },
        {
          q: language === 'de' ? 'Ist Ultraschalltherapie schmerzhaft oder gefährlich?' : language === 'ru' ? 'Ультразвуковая терапия болезненна или опасна?' : 'Ультразвуковая терапия болезненна или опасна?',
          a: isGerman
            ? 'Nein, die Ultraschalltherapie ist völlig schmerzfrei, sicher und wird von den meisten Kunden als sehr angenehm und entspannend empfunden. Sie spüren lediglich eine sanfte Wärme und leichte Vibrationen auf der Haut. Die Methode wird seit Jahrzehnten in der Medizin und ästhetischen Kosmetik eingesetzt und hat ihre Sicherheit in zahlreichen wissenschaftlichen Studien bewiesen. Anders als invasive Verfahren gibt es keine Injektionen, keine Schnitte, keine Ausfallzeiten und kein Risiko für Komplikationen. Die einzigen Kontraindikationen sind Schwangerschaft, Herzschrittmacher, Thrombose und einige andere medizinische Zustände, die wir in der Beratung besprechen.'
            : 'Нет, ультразвуковая терапия абсолютно безболезненна, безопасна и большинством клиентов воспринимается как очень приятная и расслабляющая. Вы чувствуете лишь мягкое тепло и лёгкие вибрации на коже. Метод применяется десятилетиями в медицине и эстетической косметологии и доказал свою безопасность в многочисленных научных исследованиях. В отличие от инвазивных процедур, здесь нет инъекций, разрезов, периода реабилитации и риска осложнений. Единственные противопоказания — беременность, кардиостимулятор, тромбоз и некоторые другие медицинские состояния, которые мы обсуждаем на консультации.'
        },
        {
          q: language === 'de' ? 'Wie viele Behandlungen brauche ich für sichtbare Ergebnisse?' : language === 'ru' ? 'Сколько процедур нужно для видимого результата?' : 'Сколько процедур нужно для видимого результата?',
          a: isGerman
            ? `Die Anzahl der Behandlungen hängt von der gewählten Methode und Ihren individuellen Zielen ab:

✅ Phonophorese: Erste Ergebnisse (prallere, strahlendere Haut) bereits nach 1-2 Behandlungen sichtbar. Für nachhaltige Anti-Aging-Effekte empfehlen wir eine Kur von 8-10 Behandlungen, 1-2× pro Woche, gefolgt von Erhaltungsbehandlungen 1× pro Monat.

✅ Kavitation: Erste Verbesserungen nach 3-4 Behandlungen spürbar. Für optimale Körperformung und Fettreduktion empfehlen wir 8-12 Behandlungen, 1× pro Woche, ggf. gefolgt von Erhaltungsbehandlungen alle 2-3 Monate.

✅ Gesichtsreinigung: Sofortiger Effekt nach jeder Behandlung (frischere, reinere Haut). Für langfristig reine, porenverfeinerung Haut empfehlen wir 1× alle 4-6 Wochen.`
            : `Количество процедур зависит от выбранного метода и ваших индивидуальных целей:

✅ Фонофорез: Первые результаты (более упругая, сияющая кожа) видны уже после 1-2 процедур. Для устойчивого омолаживающего эффекта мы рекомендуем курс из 8-10 процедур, 1-2× в неделю, после чего поддерживающие сеансы 1× в месяц.

✅ Кавитация: Первые улучшения ощутимы после 3-4 процедур. Для оптимальной коррекции фигуры и липолиза мы рекомендуем 8-12 процедур, 1× в неделю, при необходимости с последующими поддерживающими сеансами каждые 2-3 месяца.

✅ Чистка лица: Мгновенный эффект после каждой процедуры (более свежая, чистая кожа). Для долгосрочной чистой кожи с суженными порами мы рекомендуем 1× каждые 4-6 недель.`
        }
      ]}
      ctaTitle={language === 'de' ? "Bereit für moderne Ultraschalltherapie in München?" : language === 'ru' ? "Готовы к современной ультразвуковой терапии в Мюнхене?" : "Готовы к современной ультразвуковой терапии в Мюнхене?"}
      ctaDescription={isGerman
        ? "Entdecken Sie die vielfältigen Möglichkeiten der Ultraschalltherapie in unserem Kosmetikstudio in München-Haidhausen: intensive Anti-Aging-Pflege mit Phonophorese, nicht-invasive Körperformung mit Kavitation oder gründliche Gesichtsreinigung — alles schmerzfrei, sicher und mit wissenschaftlich bewährter Wirkung. Kostenlose Beratung inklusive!"
        : "Откройте для себя разнообразные возможности ультразвуковой терапии в нашей косметологической студии в Мюнхене-Хайдхаузен: интенсивный омолаживающий уход с фонофорезом, неинвазивная коррекция фигуры с кавитацией или глубокая чистка лица — всё безболезненно, безопасно и с научно доказанной эффективностью. Бесплатная консультация включена!"
      }
    />
  );
};

export default Ultraschall;
