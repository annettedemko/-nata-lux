'use client'

import { ServicePageLayout } from '@/components/ServicePageLayout';
import { Heart, Palette, Eye, Sparkles } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { PremiumGallery } from '@/components/PremiumGallery';
import { ServiceCard } from '@/components/ServiceCard';

const AquarellLips = () => {
  const { language } = useLanguage();

  const galleryImages = [
    '/1.webm',
    '/52.jpg',
    '/53.jpg',
    '/54.jpg',
    '/55.jpg',
    '/93.jpg',
    '/96.jpg',
  ];

  const photoGallery = (
    <PremiumGallery images={galleryImages} />
  );

  // Recommended PMU services
  const RecommendedServices = () => (
    <div className="mt-12">
      <h2 className="text-2xl md:text-3xl font-heading font-semibold text-brand-espresso mb-6 text-center">
        {language === 'de' ? 'Weitere PMU Behandlungen' : language === 'ru' ? 'Другие PMU процедуры' : 'Інші PMU процедури'}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <ServiceCard
          title={language === 'de' ? 'Powder Brows' : language === 'ru' ? 'Пудровые брови' : 'Пудрові брови'}
          description={language === 'de' ? 'Pudertechnik für perfekte Augenbrauen' : language === 'ru' ? 'Пудровая техника для идеальных бровей' : 'Пудрова техніка для ідеальних брів'}
          icon={Palette}
          href="/services/powder-brows"
          image="/65.jpg"
        />
        <ServiceCard
          title={language === 'de' ? 'Wimpernkranz' : language === 'ru' ? 'Межресничка' : 'Міжвійка'}
          description={language === 'de' ? 'Permanent Make-up Wimpernkranz' : language === 'ru' ? 'Перманентный макияж межресничного пространства' : 'Перманентний макіяж міжвійкового простору'}
          icon={Eye}
          href="/services/wimpernkranz"
          image="/114.jpg"
        />
        <ServiceCard
          title={language === 'de' ? 'Wimpernverlängerung' : language === 'ru' ? 'Наращивание ресниц' : 'Нарощування вій'}
          description={language === 'de' ? 'Klassisch oder Volumentechnik' : language === 'ru' ? 'Классика или объём' : 'Класика або об\'єм'}
          icon={Sparkles}
          href="/services/wimpernverlaengerung"
          image="/43.png"
        />
      </div>
    </div>
  );

  return (
    <ServicePageLayout
      icon={Heart}
      title={language === 'de' ? "Aquarell Lips" : language === 'ru' ? "Акварельные губы" : "Акварельні губи"}
      subtitle={language === 'de'
        ? "Natürliche Lippenpigmentierung mit Aquarell & Velvet Techniken"
        : language === 'ru'
        ? "Естественная пигментация губ в техниках Aquarell и Velvet"
        : "Природна пігментація губ у техніках Aquarell та Velvet"}
      aboutTitle={language === 'de' ? "Was sind Aquarell Lips?" : language === 'ru' ? "Что такое Aquarell Lips?" : "Що таке Aquarell Lips?"}
      aboutDescription={language === 'de' ? [
        'Aquarell Lips ist eine sanfte Permanent Make-up Technik für die Lippen, die einen natürlichen, zarten Farbton verleiht – wie ein Hauch von Farbe, der Ihre natürliche Lippenfarbe betont.',
        'Die Aquarell-Technik erzeugt einen weichen, transparenten Effekt, während die Velvet-Technik für etwas mehr Deckkraft sorgt. Beide Techniken verleihen Ihren Lippen eine schöne Definition und optisch mehr Volumen.',
        'Das Ergebnis ist absolut natürlich, hält 1-3 Jahre und spart Ihnen das tägliche Nachziehen der Lippen.'
      ] : language === 'ru' ? [
        'Aquarell Lips — это мягкая техника перманентного макияжа губ, которая придаёт естественный, нежный оттенок — как лёгкий намёк цвета, подчёркивающий вашу натуральную окраску губ.',
        'Техника Aquarell создаёт мягкий, прозрачный эффект, тогда как техника Velvet обеспечивает большую насыщенность. Обе техники придают губам красивую чёткость и визуально больший объём.',
        'Результат абсолютно естественный, держится 1-3 года и избавляет от необходимости ежедневно подкрашивать губы.'
      ] : [
        'Aquarell Lips — це м\'яка техніка перманентного макіяжу губ, яка надає природний, ніжний відтінок — як легкий натяк кольору, що підкреслює вашу натуральну барву губ.',
        'Техніка Aquarell створює м\'який, прозорий ефект, тоді як техніка Velvet забезпечує більшу насиченість. Обидві техніки надають губам красиву чіткість та візуально більший об\'єм.',
        'Результат абсолютно природний, тримається 1-3 роки та позбавляє від необхідності щодня підфарбовувати губи.'
      ]}
      benefits={language === 'de' ? [
        'Natürlicher, zarter Farbton',
        'Optisch vollere, definierte Lippen',
        'Korrektur von Asymmetrien',
        'Langlebig: 1-3 Jahre haltbar',
        'Kein Lippenstift mehr nötig',
        'Wasserfest und wischfest',
        'Perfekt für jeden Alltag',
        'Kaschiert blasse oder ungleichmäßige Lippenfarbe'
      ] : language === 'ru' ? [
        'Естественный, нежный оттенок',
        'Визуально более полные, очерченные губы',
        'Коррекция асимметрии',
        'Долговечность: 1-3 года',
        'Не нужна помада',
        'Водостойкость и устойчивость к смазыванию',
        'Идеально для повседневной жизни',
        'Скрывает бледный или неровный цвет губ'
      ] : [
        'Природний, ніжний відтінок',
        'Візуально більш повні, окреслені губи',
        'Корекція асиметрії',
        'Довговічність: 1-3 роки',
        'Не потрібна помада',
        'Водостійкість та стійкість до розмазування',
        'Ідеально для повсякденного життя',
        'Приховує блідий або нерівний колір губ'
      ]}
      steps={language === 'de' ? [
        {
          title: 'Beratung & Formgebung',
          description: 'Wir analysieren Ihre Lippenform und zeichnen die gewünschte Kontur vor.'
        },
        {
          title: 'Farbauswahl',
          description: 'Gemeinsam wählen wir den perfekten Farbton für einen natürlichen Look.'
        },
        {
          title: 'Pigmentierung',
          description: 'Sanftes Einarbeiten der Farbe mit Aquarell- oder Velvet-Technik.'
        },
        {
          title: 'Nachbehandlung',
          description: 'Nach 4-6 Wochen perfektionieren wir das Ergebnis für optimale Haltbarkeit.'
        }
      ] : language === 'ru' ? [
        {
          title: 'Консультация и формирование',
          description: 'Мы анализируем форму ваших губ и предварительно рисуем желаемый контур.'
        },
        {
          title: 'Подбор цвета',
          description: 'Вместе выбираем идеальный оттенок для естественного образа.'
        },
        {
          title: 'Пигментация',
          description: 'Мягкое нанесение цвета в технике Aquarell или Velvet.'
        },
        {
          title: 'Коррекция',
          description: 'Через 4-6 недель совершенствуем результат для оптимальной стойкости.'
        }
      ] : [
        {
          title: 'Консультація та формування',
          description: 'Ми аналізуємо форму ваших губ та попередньо малюємо бажаний контур.'
        },
        {
          title: 'Підбір кольору',
          description: 'Разом обираємо ідеальний відтінок для природного образу.'
        },
        {
          title: 'Пігментація',
          description: 'М\'яке нанесення кольору в техніці Aquarell або Velvet.'
        },
        {
          title: 'Корекція',
          description: 'Через 4-6 тижнів вдосконалюємо результат для оптимальної стійкості.'
        }
      ]}
      additionalSections={
        <>
          {photoGallery}
          <RecommendedServices />
        </>
      }
      priceSection="pmu"
      contraindications={language === 'de' ? [
        'Schwangerschaft und Stillzeit',
        'Aktiver Herpes (mind. 2 Wochen vorher behandeln)',
        'Einnahme von Blutverdünnern',
        'Lippenfillerbehandlung (mind. 4 Wochen Abstand)',
        'Diabetes (nur mit ärztlicher Erlaubnis)',
        'Chemotherapie oder Bestrahlung'
      ] : language === 'ru' ? [
        'Беременность и период кормления',
        'Активный герпес (лечить минимум за 2 недели)',
        'Приём препаратов, разжижающих кровь',
        'Процедуры филлера губ (минимум 4 недели перерыва)',
        'Диабет (только с разрешения врача)',
        'Химиотерапия или облучение'
      ] : [
        'Вагітність та період годування',
        'Активний герпес (лікувати мінімум за 2 тижні)',
        'Прийом препаратів, що розріджують кров',
        'Процедури філера губ (мінімум 4 тижні перерви)',
        'Діабет (тільки з дозволу лікаря)',
        'Хіміотерапія або опромінення'
      ]}
      faq={language === 'de' ? [
        {
          q: 'Wie lange halten Aquarell Lips?',
          a: '1-3 Jahre, abhängig von Hauttyp und Lebensstil. Die Lippenfarbe verblasst sanft und natürlich.'
        },
        {
          q: 'Ist die Behandlung schmerzhaft?',
          a: 'Mit betäubender Creme ist die Behandlung gut erträglich. Die Lippen können etwas empfindlicher sein als andere Bereiche.'
        },
        {
          q: 'Was ist der Unterschied zwischen Aquarell und Velvet?',
          a: 'Aquarell ist transparenter und natürlicher, Velvet bietet mehr Deckkraft und intensivere Farbe – ähnlich wie ein matter Lippenstift.'
        },
        {
          q: 'Was muss ich bei Herpes beachten?',
          a: 'Bei Neigung zu Lippenherpes empfehlen wir eine prophylaktische Einnahme von Aciclovir 3 Tage vor bis 5 Tage nach der Behandlung.'
        }
      ] : language === 'ru' ? [
        {
          q: 'Как долго держатся Aquarell Lips?',
          a: '1-3 года, в зависимости от типа кожи и образа жизни. Цвет губ выцветает мягко и естественно.'
        },
        {
          q: 'Болезненна ли процедура?',
          a: 'С анестезирующим кремом процедура хорошо переносится. Губы могут быть немного более чувствительными, чем другие зоны.'
        },
        {
          q: 'В чём разница между Aquarell и Velvet?',
          a: 'Aquarell более прозрачный и естественный, Velvet обеспечивает большую насыщенность и интенсивный цвет — похоже на матовую помаду.'
        },
        {
          q: 'Что нужно учитывать при герпесе?',
          a: 'При склонности к герпесу на губах рекомендуем профилактический приём Ацикловира за 3 дня до и 5 дней после процедуры.'
        }
      ] : [
        {
          q: 'Як довго тримаються Aquarell Lips?',
          a: '1-3 роки, залежно від типу шкіри та способу життя. Колір губ вицвітає м\'яко та природно.'
        },
        {
          q: 'Чи болісна процедура?',
          a: 'Зі знеболюючим кремом процедура добре переноситься. Губи можуть бути трохи чутливішими, ніж інші зони.'
        },
        {
          q: 'Яка різниця між Aquarell та Velvet?',
          a: 'Aquarell більш прозорий та природний, Velvet забезпечує більшу насиченість та інтенсивний колір — схоже на матову помаду.'
        },
        {
          q: 'Що потрібно враховувати при герпесі?',
          a: 'При схильності до герпесу на губах рекомендуємо профілактичний прийом Ацикловіру за 3 дні до та 5 днів після процедури.'
        }
      ]}
      ctaTitle={language === 'de' ? "Bereit für natürlich schöne Lippen?" : language === 'ru' ? "Готовы к естественно красивым губам?" : "Готові до природно красивих губ?"}
      ctaDescription={language === 'de'
        ? "Buchen Sie jetzt Ihre Aquarell Lips Behandlung oder vereinbaren Sie eine kostenlose Beratung."
        : language === 'ru'
        ? "Запишитесь на процедуру Aquarell Lips или договоритесь о бесплатной консультации."
        : "Запишіться на процедуру Aquarell Lips або домовтеся про безкоштовну консультацію."}
    />
  );
};

export default AquarellLips;
