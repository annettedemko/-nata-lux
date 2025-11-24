'use client'

import { ServicePageLayout } from '@/components/ServicePageLayout';
import { Zap, Droplet, Activity, Star } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { ServiceCard } from '@/components/ServiceCard';

const RFLifting = () => {
  const { language } = useLanguage();
  const isGerman = language === 'de';

  // Custom section for Face RF benefits
  const RFApplications = () => (
    <div className="space-y-8 mb-12">
      <div className="glass rounded-2xl p-8">
        <h2 className="text-2xl font-heading font-semibold text-brand-espresso mb-6">
          {isGerman ? 'Was gibt RF-Lifting Gesicht' : 'Что даёт RF-лифтинг лица'}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="text-lg font-semibold text-brand-gold mb-3">
              {isGerman ? 'Ergebnisse' : 'Результаты'}
            </h4>
            <ul className="space-y-2">
              <li className="flex items-start gap-2 text-brand-espresso/80">
                <span className="text-brand-gold mt-1">✓</span>
                <span>{isGerman ? 'Straffung des Gesichtsovals' : 'Подтяжка овала лица'}</span>
              </li>
              <li className="flex items-start gap-2 text-brand-espresso/80">
                <span className="text-brand-gold mt-1">✓</span>
                <span>{isGerman ? 'Reduzierung des Doppelkinns' : 'Уменьшение второго подбородка'}</span>
              </li>
              <li className="flex items-start gap-2 text-brand-espresso/80">
                <span className="text-brand-gold mt-1">✓</span>
                <span>{isGerman ? 'Glättung von Falten und Linien' : 'Разглаживание морщин'}</span>
              </li>
              <li className="flex items-start gap-2 text-brand-espresso/80">
                <span className="text-brand-gold mt-1">✓</span>
                <span>{isGerman ? 'Verbesserung der Hauttextur' : 'Улучшение текстуры кожи'}</span>
              </li>
              <li className="flex items-start gap-2 text-brand-espresso/80">
                <span className="text-brand-gold mt-1">✓</span>
                <span>{isGerman ? 'Effekt eines erholten Gesichts' : 'Эффект отдохнувшего лица'}</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-brand-gold mb-3">
              {isGerman ? 'Vorteile' : 'Преимущества'}
            </h4>
            <ul className="space-y-2">
              <li className="flex items-start gap-2 text-brand-espresso/80">
                <span className="text-brand-gold">→</span>
                <span>{isGerman ? 'Sichtbarer Effekt nach 1 Behandlung' : 'Видимый эффект после 1 процедуры'}</span>
              </li>
              <li className="flex items-start gap-2 text-brand-espresso/80">
                <span className="text-brand-gold">→</span>
                <span>{isGerman ? 'Ohne Schmerzen und Injektionen' : 'Без боли и инъекций'}</span>
              </li>
              <li className="flex items-start gap-2 text-brand-espresso/80">
                <span className="text-brand-gold">→</span>
                <span>{isGerman ? 'Keine Ausfallzeiten' : 'Без реабилитации'}</span>
              </li>
              <li className="flex items-start gap-2 text-brand-espresso/80">
                <span className="text-brand-gold">→</span>
                <span>{isGerman ? 'Ganzjährig möglich' : 'Можно проводить круглый год'}</span>
              </li>
              <li className="flex items-start gap-2 text-brand-espresso/80">
                <span className="text-brand-gold">→</span>
                <span>{isGerman ? 'Für Frauen und Männer' : 'Для женщин и мужчин'}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Ideal Combinations */}
      <div className="glass rounded-2xl p-8">
        <h3 className="text-2xl font-heading font-semibold text-brand-espresso mb-4">
          {isGerman ? 'Ideale Kombinationen' : 'Идеальные сочетания'}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-start gap-3">
            <span className="text-brand-gold text-xl">•</span>
            <div>
              <p className="font-semibold text-brand-espresso">
                {isGerman ? 'RF + Mikrostromtherapie' : 'RF + микротоки'}
              </p>
              <p className="text-sm text-brand-espresso/70">
                {isGerman ? 'Verstärkter Lifting-Effekt' : 'Усиленный лифтинг-эффект'}
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-brand-gold text-xl">•</span>
            <div>
              <p className="font-semibold text-brand-espresso">
                {isGerman ? 'RF + Phonophorese' : 'RF + фонофорез'}
              </p>
              <p className="text-sm text-brand-espresso/70">
                {isGerman ? 'Tiefe Hydratation' : 'Глубокое увлажнение'}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Related Services */}
      <div className="mt-12">
        <h2 className="text-2xl md:text-3xl font-heading font-semibold text-brand-espresso mb-6 text-center">
          {isGerman ? 'Weitere empfohlene Behandlungen' : 'Рекомендуемые процедуры'}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ServiceCard
            title={isGerman ? 'Phonophorese' : 'Фонофорез'}
            description={isGerman ? 'Ultraschall für tiefe Wirkstoffeinschleusung' : 'Ультразвук для глубокого введения активных веществ'}
            icon={Droplet}
            href="/services/phonophorese"
            image="/128.jpeg"
          />
          <ServiceCard
            title={isGerman ? 'RF-Vakuum (Körper)' : 'RF-вакуум (тело)'}
            description={isGerman ? 'Radiofrequenz mit Vakuum für Körperstraffung' : 'Радиочастоты с вакуумом для подтяжки тела'}
            icon={Star}
            href="/services/koerperbehandlungen/rf-vakuum"
            image="/83.jpg"
          />
          <ServiceCard
            title={isGerman ? 'Biostrom' : 'Биотоки'}
            description={isGerman ? 'Mikrostrom für Muskelstimulation und Lifting' : 'Микротоки для стимуляции мышц и лифтинга'}
            icon={Activity}
            href="/services/apparative-anti-aging/biostrom"
            image="/125.webp"
          />
        </div>
      </div>
    </div>
  );

  return (
    <ServicePageLayout
      icon={Zap}
      title={isGerman ? "RF-Lifting Gesicht in München — Hautverjüngung und Straffung ohne Operation" : "RF-лифтинг лица в Мюнхене — омоложение и подтяжка без операции"}
      subtitle={isGerman ? "Radiofrequenztherapie für natürliches Gesichts-Lifting in München-Haidhausen" : "Радиочастотная терапия для натурального лифтинга лица в Мюнхене-Хайдхаузен"}
      aboutTitle={isGerman ? "Was ist RF-Lifting (Radiofrequenz-Lifting)?" : "Что такое RF-лифтинг"}
      aboutDescription={[
        isGerman
          ? 'RF-Lifting Gesicht (Radiofrequency-Lifting, Face RF) ist eine hocheffektive, nicht-invasive apparative Methode zur tiefen Stimulation der Gesichtshaut mit Hilfe von hochfrequenten Radiowellen. In unserem Kosmetikstudio in München-Haidhausen setzen wir professionelle RF-Geräte der neuesten Generation ein, die eine sichere, kontrollierte Erwärmung der Dermis ermöglichen — ohne Beschädigung der Hautoberfläche und ohne Ausfallzeiten.'
          : 'RF-лифтинг лица (Radiofrequency-Lifting, Face RF) — это высокоэффективный неинвазивный аппаратный метод глубокой стимуляции кожи лица с помощью высокочастотных радиоволн. В нашем косметологическом салоне в Мюнхене-Хайдхаузен мы применяем профессиональное RF-оборудование нового поколения, которое обеспечивает безопасный контролируемый прогрев дермы — без повреждения поверхности кожи и без периода реабилитации.',

        isGerman
          ? 'Wie funktioniert die Radiofrequenz-Energie? Die hochfrequenten Radiowellen dringen tief in die Dermis ein und erzeugen dort eine sanfte, aber intensive Erwärmung des Gewebes (ca. 40–45°C). Diese kontrollierte Erhitzung löst eine Reihe biologischer Prozesse aus: Die Kollagen- und Elastinfasern in der Haut ziehen sich zusammen (Sofort-Effekt: Straffung), die Mikrozirkulation verbessert sich erheblich, und Fibroblasten werden stimuliert, neues Kollagen und Elastin zu produzieren.'
          : 'Как работает радиочастотная энергия? Высокочастотные радиоволны проникают глубоко в дерму и создают там мягкий, но интенсивный прогрев тканей (около 40–45°C). Этот контролируемый нагрев запускает ряд биологических процессов: волокна коллагена и эластина сжимаются (моментальный эффект: подтяжка), микроциркуляция значительно улучшается, и фибробласты стимулируются производить новый коллаген и эластин.',

        isGerman
          ? 'Im Gegensatz zu Injektionsmethoden (Botox, Filler) oder chirurgischen Eingriffen arbeitet RF-Lifting von innen: Es stellt die Dichte, Elastizität und Struktur der Gesichtshaut wieder her, ohne die Oberfläche zu beschädigen, ohne Nadeln und ohne Ausfallzeiten. Die Behandlung ist völlig schmerzfrei und ideal für Gesicht, Hals und Dekolleté.'
          : 'В отличие от инъекционных методов (ботокс, филлеры) или хирургических вмешательств, RF-лифтинг работает изнутри: восстанавливает плотность, упругость и структуру кожи лица без повреждения поверхности, без игл и без периода реабилитации. Процедура абсолютно безболезненна и идеальна для лица, шеи и декольте.',

        isGerman
          ? 'RF-Lifting Gesicht ist besonders effektiv bei: Straffung des Gesichtsovals, Reduzierung des Doppelkinns, Glättung von Falten und feinen Linien, Verbesserung der Hauttextur und -dichte, Behandlung erschlaffter Wangen und müder Haut. In München ist Face RF besonders beliebt bei Menschen, die einen natürlichen Lifting-Effekt ohne Risiken und ohne „künstliches" Aussehen wünschen.'
          : 'RF-лифтинг лица особенно эффективен при: подтяжке овала лица, уменьшении второго подбородка, разглаживании морщин и мелких линий, улучшении текстуры и плотности кожи, лечении обвисших щёк и усталой кожи. В Мюнхене Face RF особенно популярен среди людей, которые хотят получить натуральный лифтинг-эффект без рисков и без «искусственного» вида.'
      ]}
      benefits={[
        isGerman ? 'Sofortige Hautstraffung bereits nach der ersten Behandlung' : 'Моментальная подтяжка кожи уже после первой процедуры',
        isGerman ? 'Langfristige Hautverjüngung durch Kollagen-Stimulation' : 'Долгосрочное омоложение за счёт стимуляции коллагена',
        isGerman ? 'Natürlicher Lifting-Effekt ohne Injektionen und Operation' : 'Натуральный лифтинг-эффект без инъекций и операции',
        isGerman ? 'Straffung des Gesichtsovals und Reduzierung des Doppelkinns' : 'Подтяжка овала лица и уменьшение второго подбородка',
        isGerman ? 'Glättung von Falten und feinen Linien' : 'Разглаживание морщин и мелких линий',
        isGerman ? 'Verbesserung der Hauttextur, Dichte und Elastizität' : 'Улучшение текстуры, плотности и эластичности кожи',
        isGerman ? 'Behandlung erschlaffter Wangen, Hals und Dekolleté' : 'Лечение дряблости щёк, шеи и декольте',
        isGerman ? 'Verbesserung der Mikrozirkulation im Gesicht' : 'Улучшение микроциркуляции в лице',
        isGerman ? 'Völlig schmerzfrei — nur angenehme Wärme' : 'Абсолютно безболезненно — только приятное тепло',
        isGerman ? 'Keine Ausfallzeiten — sofort zurück zum Alltag' : 'Без периода реабилитации — сразу возврат к жизни',
        isGerman ? 'Kombinierbar mit Mikrostrom und Phonophorese' : 'Можно комбинировать с микротоками и фонофорезом',
        isGerman ? 'Geeignet für alle Hauttypen (ab 25 Jahren)' : 'Подходит для всех типов кожи (от 25 лет)'
      ]}
      steps={[
        {
          title: isGerman ? '1. Kostenlose Beratung und Hautanalyse' : '1. Бесплатная консультация и анализ кожи',
          description: isGerman
            ? 'Zu Beginn analysieren wir Ihren Hauttyp und Ihre Behandlungsziele. Wir besprechen, welche Gesichtszonen behandelt werden sollen (Gesicht, Hals, Dekolleté). Alle Fragen zu Ablauf, Wirkung und empfohlener Anzahl der Sitzungen werden geklärt.'
            : 'В начале мы анализируем ваш тип кожи и цели. Обсуждаем, какие зоны лица будут обработаны (лицо, шея, декольте). Отвечаем на все вопросы о процедуре, эффекте и рекомендуемом количестве сеансов.'
        },
        {
          title: isGerman ? '2. Vorbereitung der Haut' : '2. Подготовка кожи',
          description: isGerman
            ? 'Das Gesicht wird gründlich von Make-up und Unreinheiten gereinigt. Anschließend wird ein leitfähiges Kontaktgel aufgetragen, das die RF-Wellen optimal überträgt und ein angenehmes Gleiten des Applikators ermöglicht.'
            : 'Лицо тщательно очищается от макияжа и загрязнений. Затем наносится проводящий контактный гель, который оптимизирует передачу RF-волн и обеспечивает комфортное скольжение аппликатора.'
        },
        {
          title: isGerman ? '3. RF-Lifting Behandlung (45-75 Min.)' : '3. RF-лифтинг процедура (45-75 мин.)',
          description: isGerman
            ? 'Mit dem RF-Applikator werden sanfte Bewegungen über das Gesicht ausgeführt. Sie spüren eine angenehme Wärme — kein Brennen, keine Schmerzen. Die Behandlungsdauer: Gesicht 45 Min., Gesicht + Hals 60 Min., Gesicht + Hals + Dekolleté 75 Min.'
            : 'RF-аппликатором выполняются мягкие движения по лицу. Вы чувствуете приятное тепло — без жжения, без боли. Продолжительность: лицо 45 мин., лицо + шея 60 мин., лицо + шея + декольте 75 мин.'
        },
        {
          title: isGerman ? '4. Abschlusspflege' : '4. Завершающий уход',
          description: isGerman
            ? 'Nach der Behandlung tragen wir eine beruhigende Maske oder ein Serum auf. Optional kann RF-Lifting mit Mikrostromtherapie oder Phonophorese kombiniert werden für maximalen Anti-Aging-Effekt.'
            : 'После процедуры наносим успокаивающую маску или сыворотку. Опционально RF-лифтинг можно комбинировать с микротоками или фонофорезом для максимального омолаживающего эффекта.'
        },
        {
          title: isGerman ? '5. Behandlungsplan' : '5. План процедур',
          description: isGerman
            ? 'Für optimale Ergebnisse empfehlen wir 8–12 Behandlungen, 1–2× pro Woche. Der Lifting-Effekt ist sofort sichtbar, der volle Anti-Aging-Effekt entwickelt sich über 4–8 Wochen. Erhaltungsbehandlungen 1× pro Monat empfohlen.'
            : 'Для оптимального результата рекомендуем 8–12 процедур, 1–2× в неделю. Лифтинг-эффект виден сразу, полный омолаживающий эффект развивается в течение 4–8 недель. Рекомендуем поддерживающие сеансы 1× в месяц.'
        }
      ]}
      // Add custom section for Face vs Body RF
      additionalSections={<RFApplications />}
      priceSection="apparative-antiaging"
      contraindications={[
        isGerman ? 'Schwangerschaft und Stillzeit' : 'Беременность и кормление грудью',
        isGerman ? 'Herzschrittmacher oder implantierte elektronische Geräte (ICD, Insulinpumpe)' : 'Кардиостимулятор или имплантированные электронные устройства (ИКД, инсулиновая помпа)',
        isGerman ? 'Metallimplantate im Behandlungsbereich (Platten, Schrauben, Zahnimplantate)' : 'Металлические имплантаты в зоне обработки (пластины, винты, зубные имплантаты)',
        isGerman ? 'Aktive Hautinfektionen, Herpes, offene Wunden oder Entzündungen' : 'Активные кожные инфекции, герпес, открытые раны или воспаления',
        isGerman ? 'Frische Filler oder Botox im Behandlungsbereich (mind. 2 Wochen Abstand)' : 'Недавние филлеры или ботокс в зоне обработки (мин. 2 недели после)',
        isGerman ? 'Autoimmunerkrankungen (Lupus, Sklerodermie)' : 'Аутоиммунные заболевания (волчанка, склеродермия)',
        isGerman ? 'Krebs, Chemotherapie oder Strahlentherapie' : 'Онкология, химиотерапия или лучевая терапия',
        isGerman ? 'Epilepsie oder neurologische Erkrankungen' : 'Эпилепсия или неврологические заболевания',
        isGerman ? 'Schwere Herz-Kreislauf-Erkrankungen' : 'Тяжёлые сердечно-сосудистые заболевания',
        isGerman ? 'Thrombose oder schwere Venenerkrankungen im Behandlungsbereich' : 'Тромбоз или тяжёлые заболевания вен в зоне обработки'
      ]}
      faq={[
        {
          q: isGerman ? 'Wie viele RF-Lifting Behandlungen brauche ich für sichtbare Ergebnisse?' : 'Сколько процедур RF-лифтинга нужно для видимого результата?',
          a: isGerman
            ? 'Für optimale und langanhaltende Ergebnisse empfehlen wir eine Kur von 8–12 Behandlungen, idealerweise 1–2× pro Woche. Der Sofort-Effekt (Straffung durch Kollagen-Kontraktion) ist bereits nach der ersten Behandlung sichtbar — die Haut wirkt straffer, glatter und dichter. Der langfristige Anti-Aging-Effekt (neue Kollagen- und Elastinbildung) entwickelt sich über 4–8 Wochen nach jeder Sitzung und erreicht sein Maximum 2–3 Monate nach Abschluss der Kur. Die Ergebnisse sind kumulativ — je mehr Behandlungen, desto stärker und langanhaltender der Effekt. Für dauerhafte Ergebnisse empfehlen wir anschließend Erhaltungsbehandlungen 1× pro Monat oder alle 1–2 Monate.'
            : 'Для оптимального и долговременного результата мы рекомендуем курс из 8–12 процедур, в идеале 1–2× в неделю. Моментальный эффект (подтяжка за счёт сокращения коллагена) виден уже после первой процедуры — кожа выглядит более упругой, гладкой и плотной. Долгосрочный омолаживающий эффект (новый коллагеногенез и эластиногенез) развивается в течение 4–8 недель после каждого сеанса и достигает максимума через 2–3 месяца после завершения курса. Результаты кумулятивные — чем больше процедур, тем сильнее и продолжительнее эффект. Для постоянного результата рекомендуем затем поддерживающие сеансы 1× в месяц или каждые 1–2 месяца.'
        },
        {
          q: isGerman ? 'Ist RF-Lifting schmerzhaft?' : 'RF-лифтинг болезненный?',
          a: isGerman
            ? 'Nein, RF-Lifting ist völlig schmerzfrei und wird von den meisten Kunden als sehr angenehm und entspannend empfunden. Sie spüren lediglich eine tiefenwirksame, angenehme Wärme auf der Haut (ähnlich wie bei einer Warmstein-Massage) — kein Brennen, kein Stechen, keine Schmerzen. Die Temperatur wird kontinuierlich überwacht und reguliert, um maximalen Komfort und Sicherheit zu gewährleisten. Viele Kunden entspannen sich so sehr während der Behandlung, dass sie sogar einschlafen. Falls die Wärme an einer Stelle zu intensiv wird, können wir die Intensität sofort anpassen. Im Vergleich zu invasiven Methoden (Injektionen, Laser) ist RF-Lifting deutlich angenehmer und stressfreier.'
            : 'Нет, RF-лифтинг абсолютно безболезненный и большинством клиентов воспринимается как очень приятная и расслабляющая процедура. Вы чувствуете лишь глубокое приятное тепло на коже (похоже на массаж горячими камнями) — без жжения, без покалывания, без боли. Температура постоянно контролируется и регулируется для максимального комфорта и безопасности. Многие клиенты так расслабляются во время процедуры, что даже засыпают. Если тепло в какой-то точке становится слишком интенсивным, мы можем сразу отрегулировать интенсивность. По сравнению с инвазивными методами (инъекции, лазер) RF-лифтинг значительно приятнее и менее стрессовый.'
        },
        {
          q: isGerman ? 'Wann sehe ich die ersten Ergebnisse des RF-Liftings?' : 'Когда я увижу первые результаты RF-лифтинга?',
          a: isGerman
            ? 'Erste Ergebnisse sind bereits direkt nach der ersten Behandlung sichtbar: Die Haut wirkt sofort straffer, glatter, dichter und praller — dies ist der Sofort-Effekt durch die Kontraktion der Kollagen- und Elastinfasern. Dieser Effekt hält 3–7 Tage an. Der langfristige, nachhaltige Anti-Aging-Effekt entwickelt sich über die folgenden 4–8 Wochen: In dieser Zeit produzieren die Fibroblasten neues Kollagen und Elastin, wodurch die Haut kontinuierlich straffer, elastischer und jugendlicher wird. Der volle Effekt (maximale Kollagenbildung) zeigt sich 2–3 Monate nach Abschluss der Kur und hält 6–12 Monate oder länger an (abhängig von Alter, Hauttyp, Lebensstil). Bei regelmäßigen Erhaltungsbehandlungen können die Ergebnisse dauerhaft sein.'
            : 'Первые результаты видны уже сразу после первой процедуры: кожа выглядит более упругой, гладкой, плотной и наполненной — это моментальный эффект за счёт сокращения волокон коллагена и эластина. Этот эффект держится 3–7 дней. Долгосрочный, устойчивый омолаживающий эффект развивается в течение следующих 4–8 недель: в это время фибробласты производят новый коллаген и эластин, благодаря чему кожа непрерывно становится более упругой, эластичной и молодой. Полный эффект (максимальный коллагеногенез) проявляется через 2–3 месяца после завершения курса и держится 6–12 месяцев или дольше (в зависимости от возраста, типа кожи, образа жизни). При регулярных поддерживающих сеансах результаты могут быть постоянными.'
        },
        {
          q: isGerman ? 'Kann ich RF-Lifting mit anderen Behandlungen kombinieren?' : 'Можно ли комбинировать RF-лифтинг с другими процедурами?',
          a: isGerman
            ? 'Ja, RF-Lifting lässt sich hervorragend mit anderen Behandlungen kombinieren und verstärkt deren Wirkung erheblich! Besonders empfehlenswerte Kombinationen:\n\n• RF + Mikrostromtherapie = maximaler Lifting-Effekt, Straffung und Muskeltonus für Gesicht\n• RF + Phonophorese = tiefe Wirkstoffeinschleusung + Straffung für intensive Anti-Aging-Wirkung\n• RF + Vakuum-Therapie (für Körper) = verstärkte Lymphdrainage, Anti-Cellulite-Wirkung und Körperformung\n• RF + LED-Lichttherapie = Beruhigung, Kollagenstimulation und Regeneration nach RF-Behandlung\n• Kryotherapie nach RF = Reduzierung von Schwellungen, Verstärkung des Tonus und Verbesserung der Mikrozirkulation\n\nDie Kombinationen können individuell auf Ihre Hautbedürfnisse und Ziele abgestimmt werden. Wir beraten Sie gerne in unserem Studio in München-Haidhausen zu den besten Synergien.'
            : 'Да, RF-лифтинг можно отлично комбинировать с другими процедурами, что значительно усиливает их эффект! Особенно рекомендуемые комбинации:\n\n• RF + микротоки = максимальный лифтинг-эффект, подтяжка и мышечный тонус для лица\n• RF + фонофорез = глубокое введение активных веществ + подтяжка для интенсивного омоложения\n• RF + вакуумная терапия (для тела) = усиленный лимфодренаж, антицеллюлитный эффект и коррекция фигуры\n• RF + светотерапия = успокоение, стимуляция коллагена и регенерация после RF\n• Криотерапия после RF = снижение отёков, усиление тонуса и улучшение микроциркуляции\n\nКомбинации могут быть индивидуально адаптированы к вашим потребностям и целям. Мы с радостью проконсультируем вас в нашей студии в Мюнхене-Хайдхаузен по лучшим синергиям.'
        },
        {
          q: isGerman ? 'Gibt es Ausfallzeiten nach RF-Lifting?' : 'Есть ли период реабилитации после RF-лифтинга?',
          a: isGerman
            ? 'Nein, es gibt absolut keine Ausfallzeiten nach RF-Lifting Gesicht! Anders als bei invasiven Verfahren (Operation, aggressive Laser, tiefe Peelings) können Sie sofort nach der Behandlung Ihrem normalen Alltag nachgehen, Make-up auftragen, arbeiten gehen oder Sport treiben. Die Haut kann unmittelbar nach der Behandlung leicht gerötet sein und sich warm anfühlen, was aber innerhalb von 1–3 Stunden vollständig abklingt. Sehr selten kann eine leichte Schwellung auftreten, die aber innerhalb von 24 Stunden verschwindet. Es gibt keine Krusten, keine Schorfbildung, keine Blutergüsse. Das macht RF-Lifting ideal für Menschen mit vollem Terminkalender und alle, die eine effektive Anti-Aging-Behandlung ohne Einschränkungen suchen. Tipp: Nach der Behandlung ausreichend Wasser trinken und Sonnenschutz (SPF) verwenden.'
            : 'Нет, абсолютно никакого периода реабилитации после RF-лифтинга лица! В отличие от инвазивных процедур (операция, агрессивные лазеры, глубокие пилинги), вы можете сразу после процедуры вернуться к обычной жизни, наносить макияж, идти на работу или заниматься спортом. Кожа сразу после процедуры может быть слегка покрасневшей и тёплой на ощупь, но это полностью проходит в течение 1–3 часов. Очень редко может возникнуть лёгкая отёчность, которая исчезает в течение 24 часов. Нет корочек, шелушения, синяков. Это делает RF-лифтинг идеальным для людей с плотным графиком и всех, кто ищет эффективную омолаживающую процедуру без ограничений. Совет: после процедуры пить достаточно воды и использовать солнцезащиту (SPF).'
        },
        {
          q: isGerman ? 'Für wen ist RF-Lifting Gesicht geeignet?' : 'Для кого подходит RF-лифтинг лица?',
          a: isGerman
            ? 'RF-Lifting Gesicht ist für fast alle Hauttypen und Altersgruppen geeignet:\n\n• Ab 25–30 Jahren für präventives Anti-Aging und Erhalt der Hautqualität\n• Ab 35–50 Jahren für aktives Anti-Aging, Straffung, Reduzierung von Falten und Erschlaffung\n• Ab 50+ Jahren für intensive Hautverjüngung und Lifting\n• Für Frauen und Männer gleichermaßen\n• Für alle Hauttypen (auch dunkle Haut, im Gegensatz zu IPL/Laser)\n• Bei Doppelkinn, "schlaffen Wangen", müder Haut, Verlust des Gesichtsovals\n• Bei feinen Linien, Falten und erschlaffter Haut im Gesicht, Hals und Dekolleté\n\nNicht geeignet ist RF-Lifting bei Schwangerschaft, Herzschrittmachern, Metallimplantaten im Behandlungsbereich, Krebs, Epilepsie und einigen anderen medizinischen Zuständen (siehe Kontraindikationen). Wir besprechen alle Kontraindikationen in der kostenlosen Beratung in unserem Kosmetikstudio in München.'
            : 'RF-лифтинг лица подходит практически для всех типов кожи и возрастов:\n\n• С 25–30 лет для профилактического anti-aging и сохранения качества кожи\n• С 35–50 лет для активного омоложения, подтяжки, уменьшения морщин и дряблости\n• С 50+ лет для интенсивного омоложения и лифтинга\n• Для женщин и мужчин одинаково\n• Для всех типов кожи (включая тёмную кожу, в отличие от IPL/лазера)\n• При втором подбородке, "обвисших щеках", усталой коже, потере овала лица\n• При мелких линиях, морщинах и дряблости кожи лица, шеи и декольте\n\nНе подходит RF-лифтинг при беременности, кардиостимуляторе, металлических имплантатах в зоне обработки, онкологии, эпилепсии и некоторых других медицинских состояниях (см. противопоказания). Мы обсуждаем все противопоказания на бесплатной консультации в нашей косметологической студии в Мюнхене.'
        },
      ]}
      ctaTitle={isGerman ? "Bereit für natürliches Gesichts-Lifting in München?" : "Готовы к натуральному лифтингу лица в Мюнхене?"}
      ctaDescription={isGerman
        ? "Buchen Sie jetzt Ihre RF-Lifting Gesicht Behandlung in München-Haidhausen — straffe, jugendliche Haut ohne Operation und ohne Schmerzen. Kostenlose Beratung inklusive!"
        : "Запишитесь на RF-лифтинг лица в Мюнхене-Хайдхаузен — упругая, молодая кожа без операции и без боли. Бесплатная консультация включена!"
      }
    />
  );
};

export default RFLifting;
