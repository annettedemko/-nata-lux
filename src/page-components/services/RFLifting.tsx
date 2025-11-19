'use client'

import { ServicePageLayout } from '@/components/ServicePageLayout';
import { Zap } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const RFLifting = () => {
  const { isGerman } = useLanguage();

  // Custom section for Face vs Body RF
  const RFApplications = () => (
    <div className="space-y-8 mb-12">
      <h2 className="text-3xl font-heading font-bold text-brand-espresso mb-6">
        {isGerman ? 'RF-Lifting für Gesicht und Körper' : 'RF-лифтинг для лица и тела'}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Face RF */}
        <div className="glass rounded-2xl p-8">
          <h3 className="text-2xl font-heading font-semibold text-brand-gold mb-4">
            {isGerman ? '🔹 RF-Lifting Gesicht (Face RF)' : '🔹 RF-лифтинг лица (Face RF)'}
          </h3>

          <h4 className="text-lg font-semibold text-brand-espresso mb-3">
            {isGerman ? 'Was gibt RF-Lifting für das Gesicht' : 'Что даёт RF-лифтинг лица'}
          </h4>
          <ul className="space-y-2 mb-6">
            <li className="flex items-start gap-2 text-brand-espresso/80">
              <span className="text-brand-gold mt-1">✓</span>
              <span>{isGerman ? 'Straffung der Gesichtskonturen und des Ovals' : 'Укрепление овала лица'}</span>
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
              <span>{isGerman ? 'Reduzierung der Erschlaffung der Wangen (Ptosis)' : 'Уменьшение дряблости щёк ("птоз")'}</span>
            </li>
            <li className="flex items-start gap-2 text-brand-espresso/80">
              <span className="text-brand-gold mt-1">✓</span>
              <span>{isGerman ? 'Verbesserung der Hauttextur und Dichte' : 'Улучшение текстуры и плотности кожи'}</span>
            </li>
            <li className="flex items-start gap-2 text-brand-espresso/80">
              <span className="text-brand-gold mt-1">✓</span>
              <span>{isGerman ? 'Effekt eines "gestrafften und erholten Gesichts"' : 'Эффект "подтянутого и отдохнувшего лица"'}</span>
            </li>
          </ul>

          <h4 className="text-lg font-semibold text-brand-espresso mb-3">
            {isGerman ? 'Warum Face RF in München wählen' : 'Почему выбирают Face RF в Мюнхене'}
          </h4>
          <ul className="space-y-2">
            <li className="flex items-start gap-2 text-brand-espresso/80">
              <span className="text-brand-gold">→</span>
              <span>{isGerman ? 'Schneller sichtbarer Effekt nach 1 Behandlung' : 'Быстрый видимый эффект после 1 процедуры'}</span>
            </li>
            <li className="flex items-start gap-2 text-brand-espresso/80">
              <span className="text-brand-gold">→</span>
              <span>{isGerman ? 'Zunehmender Lifting-Effekt nach einer Kur' : 'Нарастающий лифтинг после курса'}</span>
            </li>
            <li className="flex items-start gap-2 text-brand-espresso/80">
              <span className="text-brand-gold">→</span>
              <span>{isGerman ? 'Ohne Schmerzen, Injektionen und Ausfallzeiten' : 'Без боли, инъекций и реабилитации'}</span>
            </li>
            <li className="flex items-start gap-2 text-brand-espresso/80">
              <span className="text-brand-gold">→</span>
              <span>{isGerman ? 'Kann das ganze Jahr über durchgeführt werden' : 'Можно проводить круглый год'}</span>
            </li>
            <li className="flex items-start gap-2 text-brand-espresso/80">
              <span className="text-brand-gold">→</span>
              <span>{isGerman ? 'Geeignet für Frauen und Männer' : 'Подходит как женщинам, так и мужчинам'}</span>
            </li>
          </ul>
        </div>

        {/* Body RF */}
        <div className="glass rounded-2xl p-8">
          <h3 className="text-2xl font-heading font-semibold text-brand-gold mb-4">
            {isGerman ? '🔸 RF-Lifting Körper (Body RF)' : '🔸 RF-лифтинг тела (Body RF)'}
          </h3>

          <h4 className="text-lg font-semibold text-brand-espresso mb-3">
            {isGerman ? 'Was gibt RF-Lifting für den Körper' : 'Что даёт RF-лифтинг тела'}
          </h4>
          <ul className="space-y-2 mb-6">
            <li className="flex items-start gap-2 text-brand-espresso/80">
              <span className="text-brand-gold mt-1">✓</span>
              <span>{isGerman ? 'Verbesserung der Hautqualität nach Gewichtsverlust' : 'Улучшение качества кожи после похудания'}</span>
            </li>
            <li className="flex items-start gap-2 text-brand-espresso/80">
              <span className="text-brand-gold mt-1">✓</span>
              <span>{isGerman ? 'Reduzierung der Erschlaffung an Bauch, Oberschenkeln, Armen' : 'Уменьшение дряблости живота, бёдер, рук'}</span>
            </li>
            <li className="flex items-start gap-2 text-brand-espresso/80">
              <span className="text-brand-gold mt-1">✓</span>
              <span>{isGerman ? 'Beseitigung der "Orangenhaut" (Cellulite)' : 'Устранение "апельсиновой корки"'}</span>
            </li>
            <li className="flex items-start gap-2 text-brand-espresso/80">
              <span className="text-brand-gold mt-1">✓</span>
              <span>{isGerman ? 'Verbesserung der Lymphdrainage' : 'Улучшение лимфодренажа'}</span>
            </li>
            <li className="flex items-start gap-2 text-brand-espresso/80">
              <span className="text-brand-gold mt-1">✓</span>
              <span>{isGerman ? 'Modellierung der Körperkonturen' : 'Моделирование контуров тела'}</span>
            </li>
            <li className="flex items-start gap-2 text-brand-espresso/80">
              <span className="text-brand-gold mt-1">✓</span>
              <span>{isGerman ? 'Hautstraffung nach der Schwangerschaft' : 'Уплотнение кожи после родов'}</span>
            </li>
            <li className="flex items-start gap-2 text-brand-espresso/80">
              <span className="text-brand-gold mt-1">✓</span>
              <span>{isGerman ? 'Reduzierung lokaler Fettzonen' : 'Уменьшение локальных жировых зон'}</span>
            </li>
          </ul>

          <h4 className="text-lg font-semibold text-brand-espresso mb-3">
            {isGerman ? 'Warum Body RF besonders beliebt ist' : 'Почему Body RF особенно популярен'}
          </h4>
          <ul className="space-y-2">
            <li className="flex items-start gap-2 text-brand-espresso/80">
              <span className="text-brand-gold">→</span>
              <span>{isGerman ? 'Gewebe werden dichter und elastischer' : 'Ткани становятся плотнее и упругее'}</span>
            </li>
            <li className="flex items-start gap-2 text-brand-espresso/80">
              <span className="text-brand-gold">→</span>
              <span>{isGerman ? 'Komfortable und entspannende Behandlung' : 'Процедура комфортная и расслабляющая'}</span>
            </li>
            <li className="flex items-start gap-2 text-brand-espresso/80">
              <span className="text-brand-gold">→</span>
              <span>{isGerman ? 'Wirkt auch dort, wo Sport nicht hilft' : 'Работает даже там, где спорт не справляется'}</span>
            </li>
            <li className="flex items-start gap-2 text-brand-espresso/80">
              <span className="text-brand-gold">→</span>
              <span>{isGerman ? 'Geeignet für umfassende Body-Sculpting-Planung' : 'Подходит для комплексного body-sculpting планирования'}</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Ideal Combinations */}
      <div className="glass rounded-2xl p-8">
        <h3 className="text-2xl font-heading font-semibold text-brand-espresso mb-4">
          {isGerman ? 'Ideale Kombinationen' : 'Идеальные сочетания'}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-start gap-3">
            <span className="text-brand-gold text-xl">🔸</span>
            <div>
              <p className="font-semibold text-brand-espresso">
                {isGerman ? 'RF + Mikrostromtherapie' : 'RF + микротоковая терапия'}
              </p>
              <p className="text-sm text-brand-espresso/70">
                {isGerman ? 'Verstärkung der Hautdichte und des Lifting-Effekts' : 'Усиление плотности'}
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-brand-gold text-xl">🔸</span>
            <div>
              <p className="font-semibold text-brand-espresso">
                {isGerman ? 'RF + Phonophorese' : 'RF + фонофорез'}
              </p>
              <p className="text-sm text-brand-espresso/70">
                {isGerman ? 'Regeneration und tiefe Hydratation' : 'Восстановление и увлажнение'}
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-brand-gold text-xl">🔸</span>
            <div>
              <p className="font-semibold text-brand-espresso">
                {isGerman ? 'RF + Vakuum (für Körper)' : 'RF + вакуум (для тела)'}
              </p>
              <p className="text-sm text-brand-espresso/70">
                {isGerman ? 'Verstärkung der Lymphdrainage und Anti-Cellulite-Wirkung' : 'Усиление лимфодренажа'}
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-brand-gold text-xl">🔸</span>
            <div>
              <p className="font-semibold text-brand-espresso">
                {isGerman ? 'Kryotherapie nach RF' : 'Криотерапия после RF'}
              </p>
              <p className="text-sm text-brand-espresso/70">
                {isGerman ? 'Reduzierung von Schwellungen und Verstärkung des Tonus' : 'Для снижения отёков и усиления тонуса'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <ServicePageLayout
      icon={Zap}
      title={isGerman ? "RF-Lifting in München — Hautverjüngung und Straffung für Gesicht und Körper ohne Operation" : "RF-лифтинг в Мюнхене — омоложение и подтяжка кожи лица и тела без операции"}
      subtitle={isGerman ? "Radiofrequenztherapie für natürliches Lifting und Hautstraffung in München-Haidhausen" : "Радиочастотная терапия для натурального лифтинга и подтяжки кожи в Мюнхене-Хайдхаузен"}
      aboutTitle={isGerman ? "Was ist RF-Lifting (Radiofrequenz-Lifting)?" : "Что такое RF-лифтинг"}
      aboutDescription={[
        isGerman
          ? 'RF-Lifting (Radiofrequency-Lifting, Radiofrequenztherapie, Thermage) ist eine hocheffektive, nicht-invasive apparative Methode zur tiefen Stimulation der Haut und des Unterhautgewebes mit Hilfe von hochfrequenten Radiowellen. In unserem Kosmetikstudio in München-Haidhausen setzen wir professionelle RF-Geräte der neuesten Generation ein, die eine sichere, kontrollierte Erwärmung der Dermis und Hypodermis ermöglichen — ohne Beschädigung der Hautoberfläche und ohne Ausfallzeiten.'
          : 'RF-лифтинг (Radiofrequency-Lifting, радиочастотная терапия) — это высокоэффективный неинвазивный аппаратный метод глубокой стимуляции кожи и подкожных структур с помощью высокочастотных радиоволн. В нашем косметологическом салоне в Мюнхене-Хайдхаузен мы применяем профессиональное RF-оборудование нового поколения, которое обеспечивает безопасный контролируемый прогрев дермы и гиподермы — без повреждения поверхности кожи и без периода реабилитации.',

        isGerman
          ? 'Wie funktioniert die Radiofrequenz-Energie? Die hochfrequenten Radiowellen (typischerweise 0,3–10 MHz) dringen tief in die Dermis und Hypodermis ein und erzeugen dort eine sanfte, aber intensive Erwärmung des Gewebes (ca. 40–45°C). Diese kontrollierte Erhitzung löst eine Reihe biologischer Prozesse aus: Die Kollagen- und Elastinfasern in der Haut ziehen sich zusammen (Sofort-Effekt: Straffung), die Mikrozirkulation von Blut und Lymphe verbessert sich erheblich, der Zellstoffwechsel wird aktiviert, und vor allem — Fibroblasten (die „Bauarbeiter" der Haut) werden stimuliert und beginnen, neues Kollagen und Elastin zu produzieren. Dadurch wird die Haut von innen heraus „umgebaut" und erhält einen neuen, festen und elastischen Rahmen.'
          : 'Как работает радиочастотная энергия? Высокочастотные радиоволны (обычно 0,3–10 МГц) проникают глубоко в дерму и гиподерму и создают там мягкий, но интенсивный прогрев тканей (около 40–45°C). Этот контролируемый нагрев запускает ряд биологических процессов: волокна коллагена и эластина в коже сжимаются и уплотняются (моментальный эффект: подтяжка), микроциркуляция крови и лимфы значительно улучшается, клеточный метаболизм активируется, и самое главное — фибробласты («строители» кожи) стимулируются и начинают производить новый коллаген и эластин. Благодаря этому кожа «перестраивается» изнутри и получает новый, упругий и эластичный каркас.',

        isGerman
          ? 'Im Gegensatz zu Injektionsmethoden (Botox, Filler) oder chirurgischen Eingriffen arbeitet RF-Lifting von innen: Es stellt die Dichte, Elastizität und Struktur der Haut wieder her, ohne die Oberfläche zu beschädigen, ohne Nadeln, ohne Schnitte und ohne Ausfallzeiten. Die Behandlung ist völlig schmerzfrei (Sie spüren nur eine angenehme Wärme), sicher für alle Hauttypen und kann sowohl für das Gesicht (Gesicht, Hals, Dekolleté) als auch für den Körper (Bauch, Oberschenkel, Arme, Gesäß) angewendet werden.'
          : 'В отличие от инъекционных методов (ботокс, филлеры) или хирургических вмешательств, RF-лифтинг работает изнутри: восстанавливает плотность, упругость и структуру кожи без повреждения поверхности, без игл, без разрезов и без периода реабилитации. Процедура абсолютно безболезненна (вы чувствуете только приятное тепло), безопасна для всех типов кожи и может применяться как для лица (лицо, шея, декольте), так и для тела (живот, бёдра, руки, ягодицы).',

        isGerman
          ? 'RF-Lifting ist eine der wirksamsten nicht-invasiven Anti-Aging-Methoden, die seit Jahrzehnten in der ästhetischen Medizin und Kosmetologie weltweit erfolgreich eingesetzt wird. Die Wirksamkeit wurde in zahlreichen wissenschaftlichen Studien nachgewiesen. In München ist RF-Lifting besonders beliebt bei Menschen, die einen natürlichen Lifting-Effekt ohne Risiken, ohne „künstliches" Aussehen und ohne Ausfallzeiten wünschen.'
          : 'RF-лифтинг — это один из самых эффективных неинвазивных anti-aging методов, который уже десятилетиями успешно применяется в эстетической медицине и косметологии по всему миру. Эффективность доказана многочисленными научными исследованиями. В Мюнхене RF-лифтинг особенно популярен среди людей, которые хотят получить натуральный лифтинг-эффект без рисков, без «искусственного» вида и без периода реабилитации.',

        isGerman
          ? 'In unserem Kosmetikstudio in München bieten wir RF-Lifting sowohl für das Gesicht (Face RF) als auch für den Körper (Body RF) an. Jede Behandlung wird individuell auf Ihre Hautbedürfnisse und Ziele abgestimmt — sei es Straffung des Gesichtsovals, Reduzierung des Doppelkinns, Glättung von Falten, Verbesserung der Hautqualität nach Gewichtsverlust, Beseitigung von Cellulite oder Körperkonturierung.'
          : 'В нашей косметологической студии в Мюнхене мы предлагаем RF-лифтинг как для лица (Face RF), так и для тела (Body RF). Каждая процедура индивидуально адаптируется к вашим потребностям и целям — будь то подтяжка овала лица, уменьшение второго подбородка, разглаживание морщин, улучшение качества кожи после похудения, устранение целлюлита или коррекция контуров тела.'
      ]}
      benefits={[
        isGerman ? 'Sofortige Hautstraffung bereits nach der ersten Behandlung (Kollagen-Kontraktion)' : 'Моментальная подтяжка кожи уже после первой процедуры (сокращение коллагена)',
        isGerman ? 'Langfristige Hautverjüngung durch Stimulation der Kollagen- und Elastinproduktion' : 'Долгосрочное омоложение кожи за счёт стимуляции выработки коллагена и эластина',
        isGerman ? 'Natürlicher Lifting-Effekt ohne Injektionen, ohne Operation, ohne Skalpell' : 'Натуральный лифтинг-эффект без инъекций, без операции, без скальпеля',
        isGerman ? 'Straffung der Gesichtskonturen und des Ovals, Reduzierung des Doppelkinns' : 'Подтяжка контуров и овала лица, уменьшение второго подбородка',
        isGerman ? 'Glättung von Falten, feinen Linien und Erschlaffungsfalten' : 'Разглаживание морщин, мелких линий и заломов',
        isGerman ? 'Verbesserung der Hauttextur, Dichte und Elastizität' : 'Улучшение текстуры, плотности и эластичности кожи',
        isGerman ? 'Reduzierung der Erschlaffung der Wangen, des Halses und des Dekolletés' : 'Уменьшение дряблости щёк, шеи и декольте',
        isGerman ? 'Körperstraffung: Bauch, Oberschenkel, Arme, Gesäß nach Gewichtsverlust oder Schwangerschaft' : 'Подтяжка тела: живот, бёдра, руки, ягодицы после похудения или беременности',
        isGerman ? 'Beseitigung von Cellulite ("Orangenhaut") und Verbesserung der Hautqualität am Körper' : 'Устранение целлюлита ("апельсиновой корки") и улучшение качества кожи на теле',
        isGerman ? 'Körperkonturierung und Modellierung der Silhouette' : 'Моделирование контуров тела и коррекция силуэта',
        isGerman ? 'Verbesserung der Mikrozirkulation und Lymphdrainage' : 'Улучшение микроциркуляции и лимфодренажа',
        isGerman ? 'Aktivierung des Zellstoffwechsels und der Hautregeneration' : 'Активация клеточного метаболизма и регенерации кожи',
        isGerman ? 'Völlig schmerzfrei — nur angenehme Wärme während der Behandlung' : 'Абсолютно безболезненно — только приятное тепло во время процедуры',
        isGerman ? 'Keine Ausfallzeiten — sofort zurück zum normalen Alltag' : 'Без периода реабилитации — сразу возврат к обычной жизни',
        isGerman ? 'Keine Injektionen, keine Nadeln, keine Schnitte, kein „künstliches" Aussehen' : 'Без инъекций, без игл, без разрезов, без «искусственного» вида',
        isGerman ? 'Kombinierbar mit Mikrostrom, Phonophorese, Vakuum-Therapie für maximale Wirkung' : 'Можно комбинировать с микротоками, фонофорезом, вакуумной терапией для максимального эффекта',
        isGerman ? 'Geeignet für alle Hauttypen und Altersgruppen (ab 25 Jahren)' : 'Подходит для всех типов кожи и возрастов (от 25 лет)',
        isGerman ? 'Kann das ganze Jahr über durchgeführt werden (keine Photosensibilität)' : 'Можно проводить круглый год (нет фотосенсибилизации)',
        isGerman ? 'Wissenschaftlich bewährte Methode mit jahrzehntelanger klinischer Erfahrung' : 'Научно обоснованный метод с десятилетиями клинического опыта'
      ]}
      steps={[
        {
          title: isGerman ? '1. Kostenlose Beratung und Hautanalyse' : '1. Бесплатная консультация и анализ кожи',
          description: isGerman
            ? 'Zu Beginn analysieren wir Ihren Hauttyp, Hautzustand und Ihre individuellen Behandlungsziele. Wir besprechen, ob RF-Lifting für Gesicht, Hals, Dekolleté oder Körper (Bauch, Oberschenkel, Arme, Gesäß) am besten geeignet ist. Wir klären alle Fragen zu Ablauf, Wirkung, empfohlener Anzahl der Sitzungen und möglichen Kombinationen mit anderen Behandlungen (Mikrostrom, Phonophorese, Vakuum-Therapie). Alle Kontraindikationen werden besprochen.'
            : 'В начале мы анализируем ваш тип кожи, состояние и индивидуальные цели. Обсуждаем, подходит ли RF-лифтинг для лица, шеи, декольте или тела (живот, бёдра, руки, ягодицы). Отвечаем на все вопросы о процедуре, эффекте, рекомендуемом количестве сеансов и возможных комбинациях с другими процедурами (микротоки, фонофорез, вакуум). Обсуждаем все противопоказания.'
        },
        {
          title: isGerman ? '2. Vorbereitung der Haut' : '2. Подготовка кожи',
          description: isGerman
            ? 'Die Behandlungszone wird sanft, aber gründlich von Make-up, Talg, Schmutz und abgestorbenen Hautzellen gereinigt. Eine saubere Haut ist essentiell für die optimale Übertragung der Radiofrequenz-Energie. Anschließend wird ein spezielles leitfähiges Kontaktgel aufgetragen, das die Radiofrequenz-Wellen optimal überträgt und ein angenehmes Gleiten des RF-Applikators ermöglicht.'
            : 'Зона обработки деликатно, но тщательно очищается от макияжа, кожного сала, загрязнений и ороговевших клеток. Чистая кожа необходима для оптимальной передачи радиочастотной энергии. Затем наносится специальный проводящий контактный гель, который оптимизирует передачу радиоволн и обеспечивает комфортное скольжение RF-аппликатора.'
        },
        {
          title: isGerman ? '3. RF-Lifting Behandlung (30-75 Minuten)' : '3. RF-лифтинг процедура (30-75 минут)',
          description: isGerman
            ? 'Mit einem speziellen RF-Applikator (Handstück) werden sanfte, kreisende Bewegungen über die Haut ausgeführt. Die hochfrequenten Radiowellen dringen in die tieferen Hautschichten ein und erzeugen dort eine kontrollierte Erwärmung (ca. 40–45°C). Sie spüren eine angenehme, tiefenwirksame Wärme — kein Brennen, keine Schmerzen. Die Temperatur wird kontinuierlich überwacht, um maximale Sicherheit und Komfort zu gewährleisten. Die Behandlung ist sehr entspannend — viele Kunden schlafen sogar dabei ein. Die Behandlungsdauer variiert je nach Zone: Gesicht 45 Min., Gesicht + Hals 60 Min., Gesicht + Hals + Dekolleté 75 Min., Körperzonen (Bauch, Oberschenkel, Arme) 30-60 Min. je nach Größe.'
            : 'Специальным RF-аппликатором (манипулой) выполняются мягкие круговые движения по коже. Высокочастотные радиоволны проникают в глубокие слои кожи и создают там контролируемый нагрев (около 40–45°C). Вы чувствуете приятное глубокое тепло — без жжения, без боли. Температура постоянно контролируется для максимальной безопасности и комфорта. Процедура очень расслабляющая — многие клиенты даже засыпают. Продолжительность зависит от зоны: лицо 45 мин., лицо + шея 60 мин., лицо + шея + декольте 75 мин., зоны тела (живот, бёдра, руки) 30-60 мин. в зависимости от размера.'
        },
        {
          title: isGerman ? '4. Abschlusspflege und optionale Kombinationen' : '4. Завершающий уход и опциональные комбинации',
          description: isGerman
            ? 'Nach der RF-Behandlung tragen wir eine beruhigende, kühlende Maske oder ein hochwertiges Serum auf, um die Regeneration zu unterstützen und den Behandlungseffekt zu verstärken. Optional kann RF-Lifting mit anderen Behandlungen kombiniert werden, um den Anti-Aging-Effekt oder die Körperformung zu maximieren: Mikrostromtherapie (für zusätzlichen Lifting-Effekt und Muskeltonus), Phonophorese (für tiefe Wirkstoffeinschleusung und Hydratation), Vakuum-Therapie (für Lymphdrainage und verstärkte Anti-Cellulite-Wirkung am Körper) oder Kryotherapie (zur Reduzierung von Schwellungen und Verstärkung des Tonus). Wir beraten Sie gerne zu den besten Kombinationen für Ihre Hautbedürfnisse.'
            : 'После RF-процедуры мы наносим успокаивающую охлаждающую маску или высококачественную сыворотку, чтобы поддержать регенерацию и усилить эффект процедуры. Опционально RF-лифтинг можно комбинировать с другими процедурами для максимизации омолаживающего эффекта или коррекции фигуры: микротоки (для дополнительного лифтинга и мышечного тонуса), фонофорез (для глубокого введения активных веществ и увлажнения), вакуумная терапия (для лимфодренажа и усиленного антицеллюлитного эффекта на теле) или криотерапия (для снижения отёков и усиления тонуса). Мы с радостью проконсультируем вас по лучшим комбинациям.'
        },
        {
          title: isGerman ? '5. Pflegeempfehlungen und Behandlungsplan' : '5. Рекомендации по уходу и план процедур',
          description: isGerman
            ? 'Sie erhalten individuelle Empfehlungen für Ihre häusliche Pflege sowie einen Plan für Folgebehandlungen. Für optimale und langanhaltende Ergebnisse empfehlen wir eine Kur von 8–12 Behandlungen, idealerweise 1–2× pro Woche (je nach Intensität und Ziel). Der Lifting-Effekt ist sofort nach der ersten Behandlung sichtbar, aber der volle Anti-Aging-Effekt (neue Kollagenbildung) entwickelt sich über 4–8 Wochen nach jeder Sitzung und erreicht sein Maximum 2–3 Monate nach Abschluss der Kur. Für langanhaltende Ergebnisse empfehlen wir anschließend Erhaltungsbehandlungen 1× pro Monat oder alle 1–2 Monate. Es ist wichtig, nach der Behandlung ausreichend Wasser zu trinken, die Haut vor Sonne zu schützen (SPF) und auf eine gesunde Lebensweise zu achten.'
            : 'Вы получаете индивидуальные рекомендации по домашнему уходу и план последующих процедур. Для оптимального и долговременного результата мы рекомендуем курс из 8–12 процедур, в идеале 1–2× в неделю (в зависимости от интенсивности и целей). Лифтинг-эффект виден сразу после первой процедуры, но полный омолаживающий эффект (новый коллагеногенез) развивается в течение 4–8 недель после каждого сеанса и достигает максимума через 2–3 месяца после завершения курса. Для долговременного результата рекомендуем затем поддерживающие сеансы 1× в месяц или каждые 1–2 месяца. Важно после процедуры пить достаточно воды, защищать кожу от солнца (SPF) и придерживаться здорового образа жизни.'
        }
      ]}
      // Add custom section for Face vs Body RF
      additionalSections={<RFApplications />}
      priceTable={[
        {
          service: isGerman ? 'RF-Lifting Gesicht' : 'RF-лифтинг лица',
          duration: '45 Min.',
          price: '95€'
        },
        {
          service: isGerman ? 'RF-Lifting Gesicht + Hals' : 'RF-лифтинг лица + шеи',
          duration: '60 Min.',
          price: '120€'
        },
        {
          service: isGerman ? 'RF-Lifting Gesicht + Hals + Dekolleté' : 'RF-лифтинг лица + шеи + декольте',
          duration: '75 Min.',
          price: '150€'
        },
        {
          service: isGerman ? 'RF-Lifting Körperzone (klein: Arme, Knie)' : 'RF-лифтинг зона тела (малая: руки, колени)',
          duration: '30 Min.',
          price: '70€'
        },
        {
          service: isGerman ? 'RF-Lifting Körperzone (groß: Bauch, Oberschenkel, Gesäß)' : 'RF-лифтинг зона тела (большая: живот, бёдра, ягодицы)',
          duration: '60 Min.',
          price: '110€'
        },
        {
          service: isGerman ? '3er-Kur RF-Lifting Gesicht' : 'Курс 3 процедуры RF-лифтинг лица',
          duration: '3x 45 Min.',
          price: '255€'
        },
        {
          service: isGerman ? '5er-Kur RF-Lifting Gesicht' : 'Курс 5 процедур RF-лифтинг лица',
          duration: '5x 45 Min.',
          price: '400€'
        },
        {
          service: isGerman ? '10er-Kur RF-Lifting Gesicht' : 'Курс 10 процедур RF-лифтинг лица',
          duration: '10x 45 Min.',
          price: '750€'
        },
        {
          service: isGerman ? '8er-Kur RF-Lifting Körper (große Zone)' : 'Курс 8 процедур RF-лифтинг тела (большая зона)',
          duration: '8x 60 Min.',
          price: '790€'
        }
      ]}
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
            ? 'Für optimale und langanhaltende Ergebnisse empfehlen wir eine Kur von 8–12 Behandlungen, idealerweise 1–2× pro Woche. Der Sofort-Effekt (Straffung durch Kollagen-Kontraktion) ist bereits nach der ersten Behandlung sichtbar — die Haut wirkt straffer, glatter und dichter. Der langfristige Anti-Aging-Effekt (neue Kollagen- und Elastinbildung) entwickelt sich über 4–8 Wochen nach jeder Sitzung und erreicht sein Maximum 2–3 Monate nach Abschluss der Kur. Die Ergebnisse sind kumulativ — je mehr Behandlungen, desto stärker und langanhaltender der Effekt. Für dauerhafte Ergebnisse empfehlen wir anschließend Erhaltungsbehandlungen 1× pro Monat oder alle 1–2 Monate. Bei Körperbehandlungen (Cellulite, Erschlaffung) können 10–12 Behandlungen erforderlich sein.'
            : 'Для оптимального и долговременного результата мы рекомендуем курс из 8–12 процедур, в идеале 1–2× в неделю. Моментальный эффект (подтяжка за счёт сокращения коллагена) виден уже после первой процедуры — кожа выглядит более упругой, гладкой и плотной. Долгосрочный омолаживающий эффект (новый коллагеногенез и эластиногенез) развивается в течение 4–8 недель после каждого сеанса и достигает максимума через 2–3 месяца после завершения курса. Результаты кумулятивные — чем больше процедур, тем сильнее и продолжительнее эффект. Для постоянного результата рекомендуем затем поддерживающие сеансы 1× в месяц или каждые 1–2 месяца. При процедурах на теле (целлюлит, дряблость) может потребоваться 10–12 процедур.'
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
          q: isGerman ? 'Was ist der Unterschied zwischen RF-Lifting für Gesicht und Körper?' : 'В чём разница между RF-лифтингом для лица и тела?',
          a: isGerman
            ? 'Die Grundlage ist dieselbe (Radiofrequenz-Energie), aber die Ziele und Anwendungsbereiche unterscheiden sich: 🔹 RF-Lifting Gesicht (Face RF) konzentriert sich auf Anti-Aging, Straffung des Gesichtsovals, Reduzierung des Doppelkinns, Glättung von Falten, Verbesserung der Hauttextur und Dichte — ideal für Gesicht, Hals, Dekolleté. Die Behandlungen sind kürzer (45–75 Min.), präziser und gezielter. 🔸 RF-Lifting Körper (Body RF) konzentriert sich auf Körperformung, Beseitigung von Cellulite, Straffung nach Gewichtsverlust oder Schwangerschaft, Reduzierung lokaler Fettzonen, Verbesserung der Hautqualität am Körper — ideal für Bauch, Oberschenkel, Arme, Gesäß. Die Behandlungen sind länger (30–60 Min. pro Zone), flächiger und oft intensiver. Beide Methoden können kombiniert werden (z.B. Gesicht + Bauch) für ein ganzheitliches Anti-Aging- und Body-Sculpting-Ergebnis.'
            : 'Основа одна и та же (радиочастотная энергия), но цели и области применения различаются: 🔹 RF-лифтинг лица (Face RF) фокусируется на омоложении, подтяжке овала лица, уменьшении второго подбородка, разглаживании морщин, улучшении текстуры и плотности кожи — идеально для лица, шеи, декольте. Процедуры короче (45–75 мин.), более точные и целенаправленные. 🔸 RF-лифтинг тела (Body RF) фокусируется на коррекции фигуры, устранении целлюлита, подтяжке после похудения или беременности, уменьшении локальных жировых зон, улучшении качества кожи на теле — идеально для живота, бёдер, рук, ягодиц. Процедуры длиннее (30–60 мин. на зону), более площадные и часто более интенсивные. Оба метода можно комбинировать (например, лицо + живот) для целостного результата anti-aging и body-sculpting.'
        },
        {
          q: isGerman ? 'Kann ich RF-Lifting mit anderen Behandlungen kombinieren?' : 'Можно ли комбинировать RF-лифтинг с другими процедурами?',
          a: isGerman
            ? 'Ja, RF-Lifting lässt sich hervorragend mit anderen Behandlungen kombinieren und verstärkt deren Wirkung erheblich! Besonders empfehlenswerte Kombinationen: 🔸 RF + Mikrostromtherapie = maximaler Lifting-Effekt, Straffung und Muskeltonus für Gesicht. 🔸 RF + Phonophorese = tiefe Wirkstoffeinschleusung + Straffung für intensive Anti-Aging-Wirkung. 🔸 RF + Vakuum-Therapie (für Körper) = verstärkte Lymphdrainage, Anti-Cellulite-Wirkung und Körperformung. 🔸 RF + LED-Lichttherapie = Beruhigung, Kollagenstimulation und Regeneration nach RF-Behandlung. 🔸 Kryotherapie nach RF = Reduzierung von Schwellungen, Verstärkung des Tonus und Verbesserung der Mikrozirkulation. Die Kombinationen können individuell auf Ihre Hautbedürfnisse und Ziele abgestimmt werden. Wir beraten Sie gerne in unserem Studio in München-Haidhausen zu den besten Synergien.'
            : 'Да, RF-лифтинг можно отлично комбинировать с другими процедурами, что значительно усиливает их эффект! Особенно рекомендуемые комбинации: 🔸 RF + микротоки = максимальный лифтинг-эффект, подтяжка и мышечный тонус для лица. 🔸 RF + фонофорез = глубокое введение активных веществ + подтяжка для интенсивного омоложения. 🔸 RF + вакуумная терапия (для тела) = усиленный лимфодренаж, антицеллюлитный эффект и коррекция фигуры. 🔸 RF + светотерапия = успокоение, стимуляция коллагена и регенерация после RF. 🔸 Криотерапия после RF = снижение отёков, усиление тонуса и улучшение микроциркуляции. Комбинации могут быть индивидуально адаптированы к вашим потребностям и целям. Мы с радостью проконсультируем вас в нашей студии в Мюнхене-Хайдхаузен по лучшим синергиям.'
        },
        {
          q: isGerman ? 'Gibt es Ausfallzeiten nach RF-Lifting?' : 'Есть ли период реабилитации после RF-лифтинга?',
          a: isGerman
            ? 'Nein, es gibt absolut keine Ausfallzeiten nach RF-Lifting! Anders als bei invasiven Verfahren (Operation, aggressive Laser, tiefe Peelings) können Sie sofort nach der Behandlung Ihrem normalen Alltag nachgehen, Make-up auftragen, arbeiten gehen oder Sport treiben. Die Haut kann unmittelbar nach der Behandlung leicht gerötet sein und sich warm anfühlen, was aber innerhalb von 1–3 Stunden vollständig abklingt. Sehr selten kann eine leichte Schwellung auftreten (besonders bei intensiven Körperbehandlungen), die aber innerhalb von 24 Stunden verschwindet. Es gibt keine Krusten, keine Schorfbildung, keine Blutergüsse. Das macht RF-Lifting ideal für Menschen mit vollem Terminkalender und alle, die eine effektive Anti-Aging-Behandlung ohne Einschränkungen suchen. Tipp: Nach der Behandlung ausreichend Wasser trinken und Sonnenschutz (SPF) verwenden.'
            : 'Нет, абсолютно никакого периода реабилитации после RF-лифтинга! В отличие от инвазивных процедур (операция, агрессивные лазеры, глубокие пилинги), вы можете сразу после процедуры вернуться к обычной жизни, наносить макияж, идти на работу или заниматься спортом. Кожа сразу после процедуры может быть слегка покрасневшей и тёплой на ощупь, но это полностью проходит в течение 1–3 часов. Очень редко может возникнуть лёгкая отёчность (особенно при интенсивных процедурах на теле), которая исчезает в течение 24 часов. Нет корочек, шелушения, синяков. Это делает RF-лифтинг идеальным для людей с плотным графиком и всех, кто ищет эффективную омолаживающую процедуру без ограничений. Совет: после процедуры пить достаточно воды и использовать солнцезащиту (SPF).'
        },
        {
          q: isGerman ? 'Für wen ist RF-Lifting geeignet?' : 'Для кого подходит RF-лифтинг?',
          a: isGerman
            ? 'RF-Lifting ist für fast alle Hauttypen und Altersgruppen geeignet: ✅ Ab 25–30 Jahren für präventives Anti-Aging und Erhalt der Hautqualität. ✅ Ab 35–50 Jahren für aktives Anti-Aging, Straffung, Reduzierung von Falten und Erschlaffung. ✅ Ab 50+ Jahren für intensive Hautverjüngung und Lifting. ✅ Für Frauen und Männer gleichermaßen. ✅ Für alle Hauttypen (auch dunkle Haut, im Gegensatz zu IPL/Laser). ✅ Nach Gewichtsverlust oder Schwangerschaft (Körper). ✅ Bei Cellulite, Erschlaffung, Doppelkinn, "schlaffen Wangen", müder Haut. Nicht geeignet ist RF-Lifting bei Schwangerschaft, Herzschrittmachern, Metallimplantaten im Behandlungsbereich, Krebs, Epilepsie und einigen anderen medizinischen Zuständen (siehe Kontraindikationen). Wir besprechen alle Kontraindikationen in der kostenlosen Beratung in unserem Kosmetikstudio in München.'
            : 'RF-лифтинг подходит практически для всех типов кожи и возрастов: ✅ С 25–30 лет для профилактического anti-aging и сохранения качества кожи. ✅ С 35–50 лет для активного омоложения, подтяжки, уменьшения морщин и дряблости. ✅ С 50+ лет для интенсивного омоложения и лифтинга. ✅ Для женщин и мужчин одинаково. ✅ Для всех типов кожи (включая тёмную кожу, в отличие от IPL/лазера). ✅ После похудения или беременности (тело). ✅ При целлюлите, дряблости, втором подбородке, "обвисших щеках", усталой коже. Не подходит RF-лифтинг при беременности, кардиостимуляторе, металлических имплантатах в зоне обработки, онкологии, эпилепсии и некоторых других медицинских состояниях (см. противопоказания). Мы обсуждаем все противопоказания на бесплатной консультации в нашей косметологической студии в Мюнхене.'
        },
        {
          q: isGerman ? 'Was kostet RF-Lifting in München?' : 'Сколько стоит RF-лифтинг в Мюнхене?',
          a: isGerman
            ? 'Die Preise variieren je nach Behandlungsbereich: 🔹 RF-Lifting Gesicht (45 Min.) kostet 95€. 🔹 RF-Lifting Gesicht + Hals (60 Min.) kostet 120€. 🔹 RF-Lifting Gesicht + Hals + Dekolleté (75 Min.) kostet 150€. 🔸 RF-Lifting Körperzone klein (Arme, Knie, 30 Min.) kostet 70€. 🔸 RF-Lifting Körperzone groß (Bauch, Oberschenkel, Gesäß, 60 Min.) kostet 110€. Wir bieten attraktive Kur-Pakete an: 3er-Kur Gesicht für 255€ (spart 30€), 5er-Kur Gesicht für 400€ (spart 75€), 10er-Kur Gesicht für 750€ (spart 200€), 8er-Kur Körper (große Zone) für 790€ (spart 90€). Mit den Kur-Paketen sparen Sie nicht nur Geld, sondern sichern sich auch nachhaltige, langfristige Ergebnisse. Die Investition lohnt sich — RF-Lifting ist eine der kosteneffektivsten nicht-invasiven Anti-Aging-Methoden mit wissenschaftlich bewährter Wirkung.'
            : 'Цены варьируются в зависимости от зоны обработки: 🔹 RF-лифтинг лица (45 мин.) стоит 95€. 🔹 RF-лифтинг лица + шеи (60 мин.) стоит 120€. 🔹 RF-лифтинг лица + шеи + декольте (75 мин.) стоит 150€. 🔸 RF-лифтинг зона тела малая (руки, колени, 30 мин.) стоит 70€. 🔸 RF-лифтинг зона тела большая (живот, бёдра, ягодицы, 60 мин.) стоит 110€. Мы предлагаем выгодные курсовые пакеты: курс 3 процедуры лицо за 255€ (экономия 30€), курс 5 процедур лицо за 400€ (экономия 75€), курс 10 процедур лицо за 750€ (экономия 200€), курс 8 процедур тело (большая зона) за 790€ (экономия 90€). С курсовыми пакетами вы не только экономите деньги, но и обеспечиваете устойчивый, долговременный результат. Инвестиция оправдана — RF-лифтинг является одним из самых рентабельных неинвазивных anti-aging методов с научно доказанной эффективностью.'
        }
      ]}
      ctaTitle={isGerman ? "Bereit für natürliches Face- und Body-Lifting in München?" : "Готовы к натуральному лифтингу лица и тела в Мюнхене?"}
      ctaDescription={isGerman
        ? "Buchen Sie jetzt Ihre RF-Lifting Behandlung in unserem Kosmetikstudio in München-Haidhausen und erleben Sie die transformative Kraft der Radiofrequenztherapie — straffe, jugendliche Haut für Gesicht und Körper, ohne Operation, ohne Schmerzen, mit wissenschaftlich bewährter Wirkung. Kostenlose Beratung inklusive!"
        : "Запишитесь сейчас на RF-лифтинг в нашей косметологической студии в Мюнхене-Хайдхаузен и испытайте трансформирующую силу радиочастотной терапии — упругая, молодая кожа для лица и тела, без операции, без боли, с научно доказанной эффективностью. Бесплатная консультация включена!"
      }
    />
  );
};

export default RFLifting;
