'use client'

import { ServicePageLayout } from '@/components/ServicePageLayout';
import { Zap, Droplet, Activity, Star } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { ServiceCard } from '@/components/ServiceCard';
import { ProcedureSchema } from '@/components/ProcedureSchema';
import { PremiumGallery } from '@/components/PremiumGallery';

const RFLifting = () => {
  const { language } = useLanguage();
  // Schema section
  const SchemaSection = () => (
    <ProcedureSchema
      germanImages={['/rf-lifting-zertifikat-muenchen.jpg']}
      russianImages={['/rf-lifting-gesicht.jpg']}
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
              {language === 'de' ? 'Ergebnisse' : language === 'ru' ? 'Результаты' : 'Результати'}
            </h4>
            <ul className="space-y-2">
              <li className="flex items-start gap-2 text-brand-espresso/80">
                <span className="text-brand-gold mt-1">✓</span>
                <span>{language === 'de' ? 'Straffung des Gesichtsovals' : language === 'ru' ? 'Подтяжка овала лица' : 'Подтяжка овала обличчя'}</span>
              </li>
              <li className="flex items-start gap-2 text-brand-espresso/80">
                <span className="text-brand-gold mt-1">✓</span>
                <span>{language === 'de' ? 'Reduzierung des Doppelkinns' : language === 'ru' ? 'Уменьшение второго подбородка' : 'Зменшення другого підборіддя'}</span>
              </li>
              <li className="flex items-start gap-2 text-brand-espresso/80">
                <span className="text-brand-gold mt-1">✓</span>
                <span>{language === 'de' ? 'Glättung von Falten und Linien' : language === 'ru' ? 'Разглаживание морщин' : 'Розгладження зморшок'}</span>
              </li>
              <li className="flex items-start gap-2 text-brand-espresso/80">
                <span className="text-brand-gold mt-1">✓</span>
                <span>{language === 'de' ? 'Verbesserung der Hauttextur' : language === 'ru' ? 'Улучшение текстуры кожи' : 'Покращення текстури шкіри'}</span>
              </li>
              <li className="flex items-start gap-2 text-brand-espresso/80">
                <span className="text-brand-gold mt-1">✓</span>
                <span>{language === 'de' ? 'Effekt eines erholten Gesichts' : language === 'ru' ? 'Эффект отдохнувшего лица' : 'Эффект отдохнувшего обличчя'}</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-brand-gold mb-3">
              {language === 'de' ? 'Vorteile' : language === 'ru' ? 'Преимущества' : 'Переваги'}
            </h4>
            <ul className="space-y-2">
              <li className="flex items-start gap-2 text-brand-espresso/80">
                <span className="text-brand-gold">→</span>
                <span>{language === 'de' ? 'Sichtbarer Effekt nach 1 Behandlung' : language === 'ru' ? 'Видимый эффект после 1 процедуры' : 'Видимий ефект після 1 процедури'}</span>
              </li>
              <li className="flex items-start gap-2 text-brand-espresso/80">
                <span className="text-brand-gold">→</span>
                <span>{language === 'de' ? 'Ohne Schmerzen und Injektionen' : language === 'ru' ? 'Без боли и инъекций' : 'Без болю та ін\'єкцій'}</span>
              </li>
              <li className="flex items-start gap-2 text-brand-espresso/80">
                <span className="text-brand-gold">→</span>
                <span>{language === 'de' ? 'Keine Ausfallzeiten' : language === 'ru' ? 'Без реабилитации' : 'Без реабілітації'}</span>
              </li>
              <li className="flex items-start gap-2 text-brand-espresso/80">
                <span className="text-brand-gold">→</span>
                <span>{language === 'de' ? 'Ganzjährig möglich' : language === 'ru' ? 'Можно проводить круглый год' : 'Можна проводити цілий рік'}</span>
              </li>
              <li className="flex items-start gap-2 text-brand-espresso/80">
                <span className="text-brand-gold">→</span>
                <span>{language === 'de' ? 'Für Frauen und Männer' : language === 'ru' ? 'Для женщин и мужчин' : 'Для жінок та чоловіків'}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Ideal Combinations */}
      <div className="glass rounded-2xl p-8">
        <h3 className="text-2xl font-heading font-semibold text-brand-espresso mb-4">
          {language === 'de' ? 'Ideale Kombinationen' : language === 'ru' ? 'Идеальные сочетания' : 'Ідеальні поєднання'}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-start gap-3">
            <span className="text-brand-gold text-xl">•</span>
            <div>
              <p className="font-semibold text-brand-espresso">
                {language === 'de' ? 'RF + Mikrostromtherapie' : language === 'ru' ? 'RF + микротоки' : 'RF + мікроструми'}
              </p>
              <p className="text-sm text-brand-espresso/70">
                {language === 'de' ? 'Verstärkter Lifting-Effekt' : language === 'ru' ? 'Усиленный лифтинг-эффект' : 'Посилений ліфтинг-ефект'}
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
                {language === 'de' ? 'Tiefe Hydratation' : language === 'ru' ? 'Глубокое увлажнение' : 'Глибоке зволоження'}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Gallery */}
      <PremiumGallery
        images={['/rf-lifting-behandlung-muenchen.jpeg', '/rf-lifting-ergebnis.jpg', '/rf-lifting-vorher-nachher.jpg']}
        title={language === 'de' ? 'Vorher-Nachher Ergebnisse' : language === 'ru' ? 'Результаты до и после' : 'Результати до та після'}
      />

      {/* Related Services */}
      <div className="mt-12">
        <h2 className="text-2xl md:text-3xl font-heading font-semibold text-brand-espresso mb-6 text-center">
          {language === 'de' ? 'Weitere empfohlene Behandlungen' : language === 'ru' ? 'Рекомендуемые процедуры' : 'Рекомендовані процедури'}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ServiceCard
            title={language === 'de' ? 'Phonophorese' : language === 'ru' ? 'Фонофорез' : 'Фонофорез'}
            description={language === 'de' ? 'Ultraschall für tiefe Wirkstoffeinschleusung' : language === 'ru' ? 'Ультразвук для глубокого введения активных веществ' : 'Ультразвук для глибокого введення активних речовин'}
            icon={Droplet}
            href="/services/phonophorese"
            image="/ultraschall-gesichtsbehandlung-muenchen.jpeg"
          />
          <ServiceCard
            title={language === 'de' ? 'RF-Vakuum (Körper)' : language === 'ru' ? 'RF-вакуум (тело)' : 'RF-вакуум (тіло)'}
            description={language === 'de' ? 'Radiofrequenz mit Vakuum für Körperstraffung' : language === 'ru' ? 'Радиочастоты с вакуумом для подтяжки тела' : 'Радіочастоти з вакуумом для підтяжки тіла'}
            icon={Star}
            href="/services/koerperbehandlungen/rf-vakuum"
            image="/rf-vakuum-koerperbehandlung-muenchen.jpg"
          />
          <ServiceCard
            title={language === 'de' ? 'Biostrom' : language === 'ru' ? 'Биотоки' : 'Біоструми'}
            description={language === 'de' ? 'Mikrostrom für Muskelstimulation und Lifting' : language === 'ru' ? 'Микротоки для стимуляции мышц и лифтинга' : 'Мікроструми для стимуляції м\'язів та ліфтингу'}
            icon={Activity}
            href="/services/apparative-anti-aging/biostrom"
            image="/apparative-anti-aging-geraet-muenchen.webp"
          />
        </div>
      </div>
    </div>
  );

  return (
    <ServicePageLayout
      icon={Zap}
      title={language === 'de' ? "RF-Lifting Gesicht in München — Hautverjüngung und Straffung ohne Operation" : language === 'ru' ? "RF-лифтинг лица в Мюнхене — омоложение и подтяжка без операции" : "RF-ліфтинг обличчя у Мюнхені — омолодження та підтяжка без операції"}
      subtitle={language === 'de' ? "Radiofrequenztherapie für natürliches Gesichts-Lifting in München-Haidhausen" : language === 'ru' ? "Радиочастотная терапия для натурального лифтинга лица в Мюнхене-Хайдхаузен" : "Радіочастотна терапія для натурального ліфтингу обличчя у Мюнхені-Хайдхаузен"}
      aboutTitle={language === 'de' ? "Was ist RF-Lifting (Radiofrequenz-Lifting)?" : language === 'ru' ? "Что такое RF-лифтинг" : "Що таке RF-ліфтинг"}
      aboutDescription={[
        language === 'de'
          ? 'RF-Lifting Gesicht ist eine nicht-invasive Anti-Aging-Behandlung mit Radiofrequenz-Technologie. Die Radiowellen erwärmen die tieferen Hautschichten kontrolliert auf 40–45°C, wodurch Kollagen- und Elastinfasern sofort gestrafft werden und die Neubildung angeregt wird.'
          : language === 'ru' ? 'RF-лифтинг лица — это неинвазивная anti-age процедура с использованием радиочастотной технологии. Радиоволны контролируемо прогревают глубокие слои кожи до 40–45°C, что мгновенно подтягивает коллагеновые и эластиновые волокна и стимулирует их обновление.'
          : 'RF-ліфтинг обличчя — це неінвазивна anti-age процедура з використанням радіочастотної технології. Радіохвилі контрольовано прогрівають глибокі шари шкіри до 40–45°C, що миттєво підтягує колагенові та еластинові волокна і стимулює їх оновлення.',

        language === 'de'
          ? 'Anders als Botox oder Filler arbeitet RF-Lifting von innen — ohne Nadeln, ohne Ausfallzeiten, völlig schmerzfrei. Ideal für Gesicht, Hals und Dekolleté.'
          : language === 'ru' ? 'В отличие от ботокса или филлеров, RF-лифтинг работает изнутри — без игл, без реабилитации, абсолютно безболезненно. Идеально для лица, шеи и декольте.'
          : 'На відміну від ботоксу або філерів, RF-ліфтинг працює зсередини — без голок, без реабілітації, абсолютно безболісно. Ідеально для обличчя, шиї та декольте.'
      ]}
      benefits={[
        language === 'de' ? 'Sofortige Straffung nach der ersten Behandlung' : language === 'ru' ? 'Моментальная подтяжка после первой процедуры' : 'Миттєва підтяжка після першої процедури',
        language === 'de' ? 'Kollagen-Neubildung für langfristige Verjüngung' : language === 'ru' ? 'Стимуляция коллагена для долгосрочного омоложения' : 'Стимуляція колагену для довготривалого омолодження',
        language === 'de' ? 'Ohne Injektionen, ohne OP, ohne Ausfallzeiten' : language === 'ru' ? 'Без инъекций, без операции, без реабилитации' : 'Без ін\'єкцій, без операції, без реабілітації',
        language === 'de' ? 'Straffung Gesichtsoval, Doppelkinn, Falten' : language === 'ru' ? 'Подтяжка овала, второго подбородка, морщин' : 'Підтяжка овалу, другого підборіддя, зморшок',
        language === 'de' ? 'Schmerzfrei — nur angenehme Wärme' : language === 'ru' ? 'Безболезненно — только приятное тепло' : 'Безболісно — лише приємне тепло',
        language === 'de' ? 'Für alle Hauttypen ab 25 Jahren' : language === 'ru' ? 'Для всех типов кожи от 25 лет' : 'Для всіх типів шкіри від 25 років'
      ]}
      steps={[
        {
          title: language === 'de' ? '1. Beratung' : language === 'ru' ? '1. Консультация' : '1. Консультація',
          description: language === 'de'
            ? 'Analyse Ihres Hauttyps und Behandlungsziele. Klärung aller Fragen.'
            : language === 'ru' ? 'Анализ типа кожи и целей. Ответы на все вопросы.'
            : 'Аналіз типу шкіри та цілей. Відповіді на всі питання.'
        },
        {
          title: language === 'de' ? '2. Vorbereitung' : language === 'ru' ? '2. Подготовка' : '2. Підготовка',
          description: language === 'de'
            ? 'Reinigung und Auftragen des Kontaktgels.'
            : language === 'ru' ? 'Очищение и нанесение контактного геля.'
            : 'Очищення та нанесення контактного гелю.'
        },
        {
          title: language === 'de' ? '3. Behandlung (60 Min.)' : language === 'ru' ? '3. Процедура (60 мин.)' : '3. Процедура (60 хв.)',
          description: language === 'de'
            ? 'Sanfte RF-Behandlung mit angenehmer Wärme. Die Gesamtbehandlungsdauer beträgt ca. 60 Min.: Gesicht 30 Min., Hals 15 Min., Dekolleté 15 Min.'
            : language === 'ru' ? 'Мягкая RF-обработка с приятным теплом. Общая продолжительность процедуры около 60 мин.: лицо 30 мин., шея 15 мин., декольте 15 мин.'
            : 'М\'яка RF-обробка з приємним теплом. Загальна тривалість процедури близько 60 хв.: обличчя 30 хв., шия 15 хв., декольте 15 хв.'
        },
        {
          title: language === 'de' ? '4. Empfehlung' : language === 'ru' ? '4. Рекомендации' : '4. Рекомендації',
          description: language === 'de'
            ? '8–12 Behandlungen, 1–2× pro Woche. Erhaltung: 1× pro Monat.'
            : language === 'ru' ? '8–12 процедур, 1–2× в неделю. Поддержание: 1× в месяц.'
            : '8–12 процедур, 1–2× на тиждень. Підтримка: 1× на місяць.'
        }
      ]}
      procedureSchema={<SchemaSection />}
      // Add custom section for Face vs Body RF
      additionalSections={<RFApplications />}
      priceSection="apparative-antiaging"
      contraindications={[
        language === 'de' ? 'Schwangerschaft und Stillzeit' : language === 'ru' ? 'Беременность и кормление грудью' : 'Вагітність та годування груддю',
        language === 'de' ? 'Herzschrittmacher oder implantierte elektronische Geräte (ICD, Insulinpumpe)' : language === 'ru' ? 'Кардиостимулятор или имплантированные электронные устройства (ИКД, инсулиновая помпа)' : 'Кардіостимулятор або імплантовані електронні пристрої (ІКД, інсулінова помпа)',
        language === 'de' ? 'Metallimplantate im Behandlungsbereich (Platten, Schrauben, Zahnimplantate)' : language === 'ru' ? 'Металлические имплантаты в зоне обработки (пластины, винты, зубные имплантаты)' : 'Металеві імплантати в зоні обробки (пластини, гвинти, зубні імплантати)',
        language === 'de' ? 'Aktive Hautinfektionen, Herpes, offene Wunden oder Entzündungen' : language === 'ru' ? 'Активные кожные инфекции, герпес, открытые раны или воспаления' : 'Активні шкірні інфекції, герпес, відкриті рани або запалення',
        language === 'de' ? 'Frische Filler oder Botox im Behandlungsbereich (mind. 2 Wochen Abstand)' : language === 'ru' ? 'Недавние филлеры или ботокс в зоне обработки (мин. 2 недели после)' : 'Нещодавні філери або ботокс у зоні обробки (мін. 2 тижні після)',
        language === 'de' ? 'Autoimmunerkrankungen (Lupus, Sklerodermie)' : language === 'ru' ? 'Аутоиммунные заболевания (волчанка, склеродермия)' : 'Автоімунні захворювання (вовчак, склеродермія)',
        language === 'de' ? 'Krebs, Chemotherapie oder Strahlentherapie' : language === 'ru' ? 'Онкология, химиотерапия или лучевая терапия' : 'Онкологія, хіміотерапія або променева терапія',
        language === 'de' ? 'Epilepsie oder neurologische Erkrankungen' : language === 'ru' ? 'Эпилепсия или неврологические заболевания' : 'Епілепсія або неврологічні захворювання',
        language === 'de' ? 'Schwere Herz-Kreislauf-Erkrankungen' : language === 'ru' ? 'Тяжёлые сердечно-сосудистые заболевания' : 'Тяжкі серцево-судинні захворювання',
        language === 'de' ? 'Thrombose oder schwere Venenerkrankungen im Behandlungsbereich' : language === 'ru' ? 'Тромбоз или тяжёлые заболевания вен в зоне обработки' : 'Тромбоз або тяжкі захворювання вен у зоні обробки'
      ]}
      faq={[
        {
          q: language === 'de' ? 'Wie viele Behandlungen brauche ich?' : language === 'ru' ? 'Сколько процедур нужно?' : 'Скільки процедур потрібно?',
          a: language === 'de'
            ? '8–12 Behandlungen, 1–2× pro Woche. Erste Straffung sofort sichtbar, voller Effekt nach 2–3 Monaten. Ergebnis hält 6–12 Monate. Erhaltung: 1× monatlich.'
            : language === 'ru' ? '8–12 процедур, 1–2× в неделю. Первая подтяжка видна сразу, полный эффект через 2–3 месяца. Результат держится 6–12 месяцев. Поддержание: 1× в месяц.'
            : '8–12 процедур, 1–2× на тиждень. Перша підтяжка видна одразу, повний ефект через 2–3 місяці. Результат тримається 6–12 місяців. Підтримка: 1× на місяць.'
        },
        {
          q: language === 'de' ? 'Ist RF-Lifting schmerzhaft?' : language === 'ru' ? 'Это болезненно?' : 'Це болісно?',
          a: language === 'de'
            ? 'Nein, völlig schmerzfrei. Sie spüren nur angenehme Wärme — viele Kunden entspannen sich so sehr, dass sie einschlafen.'
            : language === 'ru' ? 'Нет, абсолютно безболезненно. Вы чувствуете только приятное тепло — многие клиенты расслабляются так, что засыпают.'
            : 'Ні, абсолютно безболісно. Ви відчуваєте лише приємне тепло — багато клієнтів розслабляються так, що засинають.'
        },
        {
          q: language === 'de' ? 'Gibt es Ausfallzeiten?' : language === 'ru' ? 'Нужна реабилитация?' : 'Потрібна реабілітація?',
          a: language === 'de'
            ? 'Keine! Sofort zurück zum Alltag. Leichte Rötung verschwindet in 1–3 Stunden.'
            : language === 'ru' ? 'Нет! Сразу возврат к жизни. Лёгкое покраснение проходит за 1–3 часа.'
            : 'Ні! Одразу повернення до життя. Легке почервоніння зникає за 1–3 години.'
        },
        {
          q: language === 'de' ? 'Für wen ist RF-Lifting geeignet?' : language === 'ru' ? 'Для кого подходит?' : 'Для кого підходить?',
          a: language === 'de'
            ? 'Für alle Hauttypen ab 25 Jahren. Ideal bei Doppelkinn, erschlafften Wangen, Falten, müder Haut. Für Frauen und Männer.'
            : language === 'ru' ? 'Для всех типов кожи от 25 лет. Идеально при втором подбородке, обвисших щеках, морщинах, усталой коже. Для женщин и мужчин.'
            : 'Для всіх типів шкіри від 25 років. Ідеально при другому підборідді, обвислих щоках, зморшках, втомленій шкірі. Для жінок та чоловіків.'
        },
      ]}
      ctaTitle={language === 'de' ? "Bereit für natürliches Gesichts-Lifting in München?" : language === 'ru' ? "Готовы к натуральному лифтингу лица в Мюнхене?" : "Готові до натурального ліфтингу обличчя у Мюнхені?"}
      ctaDescription={language === 'de'
        ? "Buchen Sie jetzt Ihre RF-Lifting Gesicht Behandlung in München-Haidhausen — straffe, jugendliche Haut ohne Operation und ohne Schmerzen. Kostenlose Beratung inklusive!"
        : language === 'ru' ? "Запишитесь на RF-лифтинг лица в Мюнхене-Хайдхаузен — упругая, молодая кожа без операции и без боли. Бесплатная консультация включена!"
        : "Запишіться на RF-ліфтинг обличчя у Мюнхені-Хайдхаузен — пружна, молода шкіра без операції та без болю. Безкоштовна консультація включена!"
      }
    />
  );
};

export default RFLifting;
