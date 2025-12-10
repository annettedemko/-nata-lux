'use client'

import { ServicePageLayout } from '@/components/ServicePageLayout';
import { Zap, Droplet, Activity, Star } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { ServiceCard } from '@/components/ServiceCard';
import { ProcedureSchema } from '@/components/ProcedureSchema';
import { PremiumGallery } from '@/components/PremiumGallery';

const RFLifting = () => {
  const { language } = useLanguage();
  const isGerman = language === 'de';

  // Schema section
  const SchemaSection = () => (
    <ProcedureSchema
      germanImages={['/181 1.jpg']}
      russianImages={['/181.jpg']}
      altTextGerman="RF-Lifting Gesicht Schema"
      altTextRussian="Схема RF-лифтинга лица"
      scale={0.67}
    />
  );

  // Custom section for Face RF benefits
  const RFApplications = () => (
    <div className="space-y-6 mb-12">
      <div className="glass rounded-2xl p-8">
        <h2 className="text-2xl font-heading font-semibold text-brand-espresso mb-6">
          {language === 'de' ? 'Was gibt RF-Lifting Gesicht' : language === 'ru' ? 'Что даёт RF-лифтинг лица' : 'Что даёт RF-лифтинг обличчя'}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="text-lg font-semibold text-brand-gold mb-3">
              {language === 'de' ? 'Ergebnisse' : language === 'ru' ? 'Результаты' : 'Результаты'}
            </h4>
            <ul className="space-y-2">
              <li className="flex items-start gap-2 text-brand-espresso/80">
                <span className="text-brand-gold mt-1">✓</span>
                <span>{language === 'de' ? 'Straffung des Gesichtsovals' : language === 'ru' ? 'Подтяжка овала лица' : 'Подтяжка овала обличчя'}</span>
              </li>
              <li className="flex items-start gap-2 text-brand-espresso/80">
                <span className="text-brand-gold mt-1">✓</span>
                <span>{language === 'de' ? 'Reduzierung des Doppelkinns' : language === 'ru' ? 'Уменьшение второго подбородка' : 'Уменьшение второго подбородка'}</span>
              </li>
              <li className="flex items-start gap-2 text-brand-espresso/80">
                <span className="text-brand-gold mt-1">✓</span>
                <span>{language === 'de' ? 'Glättung von Falten und Linien' : language === 'ru' ? 'Разглаживание морщин' : 'Разглаживание морщин'}</span>
              </li>
              <li className="flex items-start gap-2 text-brand-espresso/80">
                <span className="text-brand-gold mt-1">✓</span>
                <span>{language === 'de' ? 'Verbesserung der Hauttextur' : language === 'ru' ? 'Улучшение текстуры кожи' : 'Улучшение текстуры кожи'}</span>
              </li>
              <li className="flex items-start gap-2 text-brand-espresso/80">
                <span className="text-brand-gold mt-1">✓</span>
                <span>{language === 'de' ? 'Effekt eines erholten Gesichts' : language === 'ru' ? 'Эффект отдохнувшего лица' : 'Эффект отдохнувшего обличчя'}</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-brand-gold mb-3">
              {language === 'de' ? 'Vorteile' : language === 'ru' ? 'Преимущества' : 'Преимущества'}
            </h4>
            <ul className="space-y-2">
              <li className="flex items-start gap-2 text-brand-espresso/80">
                <span className="text-brand-gold">→</span>
                <span>{language === 'de' ? 'Sichtbarer Effekt nach 1 Behandlung' : language === 'ru' ? 'Видимый эффект после 1 процедуры' : 'Видимый эффект после 1 процедуры'}</span>
              </li>
              <li className="flex items-start gap-2 text-brand-espresso/80">
                <span className="text-brand-gold">→</span>
                <span>{language === 'de' ? 'Ohne Schmerzen und Injektionen' : language === 'ru' ? 'Без боли и инъекций' : 'Без боли и инъекций'}</span>
              </li>
              <li className="flex items-start gap-2 text-brand-espresso/80">
                <span className="text-brand-gold">→</span>
                <span>{language === 'de' ? 'Keine Ausfallzeiten' : language === 'ru' ? 'Без реабилитации' : 'Без реабилитации'}</span>
              </li>
              <li className="flex items-start gap-2 text-brand-espresso/80">
                <span className="text-brand-gold">→</span>
                <span>{language === 'de' ? 'Ganzjährig möglich' : language === 'ru' ? 'Можно проводить круглый год' : 'Можно проводить круглый год'}</span>
              </li>
              <li className="flex items-start gap-2 text-brand-espresso/80">
                <span className="text-brand-gold">→</span>
                <span>{language === 'de' ? 'Für Frauen und Männer' : language === 'ru' ? 'Для женщин и мужчин' : 'Для женщин и мужчин'}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Ideal Combinations */}
      <div className="glass rounded-2xl p-8">
        <h3 className="text-2xl font-heading font-semibold text-brand-espresso mb-4">
          {language === 'de' ? 'Ideale Kombinationen' : language === 'ru' ? 'Идеальные сочетания' : 'Идеальные сочетания'}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-start gap-3">
            <span className="text-brand-gold text-xl">•</span>
            <div>
              <p className="font-semibold text-brand-espresso">
                {language === 'de' ? 'RF + Mikrostromtherapie' : language === 'ru' ? 'RF + микротоки' : 'RF + микротоки'}
              </p>
              <p className="text-sm text-brand-espresso/70">
                {language === 'de' ? 'Verstärkter Lifting-Effekt' : language === 'ru' ? 'Усиленный лифтинг-эффект' : 'Усиленный лифтинг-эффект'}
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-brand-gold text-xl">•</span>
            <div>
              <p className="font-semibold text-brand-espresso">
                {language === 'de' ? 'RF + Phonophorese' : language === 'ru' ? 'RF + фонофорез' : 'RF + фонофорез'}
              </p>
              <p className="text-sm text-brand-espresso/70">
                {language === 'de' ? 'Tiefe Hydratation' : language === 'ru' ? 'Глубокое увлажнение' : 'Глубокое увлажнение'}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Gallery */}
      <PremiumGallery
        images={['/162.jpeg', '/183.jpg', '/184.jpg']}
        title={language === 'de' ? 'Vorher-Nachher Ergebnisse' : language === 'ru' ? 'Результаты до и после' : 'Результаты до и после'}
      />

      {/* Related Services */}
      <div className="mt-12">
        <h2 className="text-2xl md:text-3xl font-heading font-semibold text-brand-espresso mb-6 text-center">
          {language === 'de' ? 'Weitere empfohlene Behandlungen' : language === 'ru' ? 'Рекомендуемые процедуры' : 'Рекомендуемые процедуры'}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ServiceCard
            title={language === 'de' ? 'Phonophorese' : language === 'ru' ? 'Фонофорез' : 'Фонофорез'}
            description={language === 'de' ? 'Ultraschall für tiefe Wirkstoffeinschleusung' : language === 'ru' ? 'Ультразвук для глубокого введения активных веществ' : 'Ультразвук для глубокого введения активных веществ'}
            icon={Droplet}
            href="/services/phonophorese"
            image="/128.jpeg"
          />
          <ServiceCard
            title={language === 'de' ? 'RF-Vakuum (Körper)' : language === 'ru' ? 'RF-вакуум (тело)' : 'RF-вакуум (тело)'}
            description={language === 'de' ? 'Radiofrequenz mit Vakuum für Körperstraffung' : language === 'ru' ? 'Радиочастоты с вакуумом для подтяжки тела' : 'Радиочастоты с вакуумом для подтяжки тела'}
            icon={Star}
            href="/services/koerperbehandlungen/rf-vakuum"
            image="/83.jpg"
          />
          <ServiceCard
            title={language === 'de' ? 'Biostrom' : language === 'ru' ? 'Биотоки' : 'Биотоки'}
            description={language === 'de' ? 'Mikrostrom für Muskelstimulation und Lifting' : language === 'ru' ? 'Микротоки для стимуляции мышц и лифтинга' : 'Микротоки для стимуляции мышц и лифтинга'}
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
          ? 'RF-Lifting Gesicht ist eine nicht-invasive Anti-Aging-Behandlung mit Radiofrequenz-Technologie. Die Radiowellen erwärmen die tieferen Hautschichten kontrolliert auf 40–45°C, wodurch Kollagen- und Elastinfasern sofort gestrafft werden und die Neubildung angeregt wird.'
          : 'RF-лифтинг лица — это неинвазивная anti-age процедура с использованием радиочастотной технологии. Радиоволны контролируемо прогревают глубокие слои кожи до 40–45°C, что мгновенно подтягивает коллагеновые и эластиновые волокна и стимулирует их обновление.',

        isGerman
          ? 'Anders als Botox oder Filler arbeitet RF-Lifting von innen — ohne Nadeln, ohne Ausfallzeiten, völlig schmerzfrei. Ideal für Gesicht, Hals und Dekolleté.'
          : 'В отличие от ботокса или филлеров, RF-лифтинг работает изнутри — без игл, без реабилитации, абсолютно безболезненно. Идеально для лица, шеи и декольте.'
      ]}
      benefits={[
        isGerman ? 'Sofortige Straffung nach der ersten Behandlung' : 'Моментальная подтяжка после первой процедуры',
        isGerman ? 'Kollagen-Neubildung für langfristige Verjüngung' : 'Стимуляция коллагена для долгосрочного омоложения',
        isGerman ? 'Ohne Injektionen, ohne OP, ohne Ausfallzeiten' : 'Без инъекций, без операции, без реабилитации',
        isGerman ? 'Straffung Gesichtsoval, Doppelkinn, Falten' : 'Подтяжка овала, второго подбородка, морщин',
        isGerman ? 'Schmerzfrei — nur angenehme Wärme' : 'Безболезненно — только приятное тепло',
        isGerman ? 'Für alle Hauttypen ab 25 Jahren' : 'Для всех типов кожи от 25 лет'
      ]}
      steps={[
        {
          title: isGerman ? '1. Beratung' : '1. Консультация',
          description: isGerman
            ? 'Analyse Ihres Hauttyps und Behandlungsziele. Klärung aller Fragen.'
            : 'Анализ типа кожи и целей. Ответы на все вопросы.'
        },
        {
          title: isGerman ? '2. Vorbereitung' : '2. Подготовка',
          description: isGerman
            ? 'Reinigung und Auftragen des Kontaktgels.'
            : 'Очищение и нанесение контактного геля.'
        },
        {
          title: isGerman ? '3. Behandlung (60 Min.)' : '3. Процедура (60 мин.)',
          description: isGerman
            ? 'Sanfte RF-Behandlung mit angenehmer Wärme. Die Gesamtbehandlungsdauer beträgt ca. 60 Min.: Gesicht 30 Min., Hals 15 Min., Dekolleté 15 Min.'
            : 'Мягкая RF-обработка с приятным теплом. Общая продолжительность процедуры около 60 мин.: лицо 30 мин., шея 15 мин., декольте 15 мин.'
        },
        {
          title: isGerman ? '4. Empfehlung' : '4. Рекомендации',
          description: isGerman
            ? '8–12 Behandlungen, 1–2× pro Woche. Erhaltung: 1× pro Monat.'
            : '8–12 процедур, 1–2× в неделю. Поддержание: 1× в месяц.'
        }
      ]}
      procedureSchema={<SchemaSection />}
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
          q: isGerman ? 'Wie viele Behandlungen brauche ich?' : 'Сколько процедур нужно?',
          a: isGerman
            ? '8–12 Behandlungen, 1–2× pro Woche. Erste Straffung sofort sichtbar, voller Effekt nach 2–3 Monaten. Ergebnis hält 6–12 Monate. Erhaltung: 1× monatlich.'
            : '8–12 процедур, 1–2× в неделю. Первая подтяжка видна сразу, полный эффект через 2–3 месяца. Результат держится 6–12 месяцев. Поддержание: 1× в месяц.'
        },
        {
          q: isGerman ? 'Ist RF-Lifting schmerzhaft?' : 'Это болезненно?',
          a: isGerman
            ? 'Nein, völlig schmerzfrei. Sie spüren nur angenehme Wärme — viele Kunden entspannen sich so sehr, dass sie einschlafen.'
            : 'Нет, абсолютно безболезненно. Вы чувствуете только приятное тепло — многие клиенты расслабляются так, что засыпают.'
        },
        {
          q: isGerman ? 'Gibt es Ausfallzeiten?' : 'Нужна реабилитация?',
          a: isGerman
            ? 'Keine! Sofort zurück zum Alltag. Leichte Rötung verschwindet in 1–3 Stunden.'
            : 'Нет! Сразу возврат к жизни. Лёгкое покраснение проходит за 1–3 часа.'
        },
        {
          q: isGerman ? 'Für wen ist RF-Lifting geeignet?' : 'Для кого подходит?',
          a: isGerman
            ? 'Für alle Hauttypen ab 25 Jahren. Ideal bei Doppelkinn, erschlafften Wangen, Falten, müder Haut. Für Frauen und Männer.'
            : 'Для всех типов кожи от 25 лет. Идеально при втором подбородке, обвисших щеках, морщинах, усталой коже. Для женщин и мужчин.'
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
