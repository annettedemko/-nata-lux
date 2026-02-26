'use client'

import { ServicePageLayout } from '@/components/ServicePageLayout';
import { Eye, Palette, Heart, Sparkles } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { PremiumGallery } from '@/components/PremiumGallery';
import { ServiceCard } from '@/components/ServiceCard';

const Wimpernkranz = () => {
  const { language } = useLanguage();

  const galleryImages = ['/56.jpg', '/68.jpg', '/69.jpg', '/114.jpg', '/150.jpeg', '/143.jpeg'];

  const photoGallery = (
    <PremiumGallery images={galleryImages} />
  );

  // Recommended PMU and lash services
  const RecommendedServices = () => (
    <div className="mt-12">
      <h2 className="text-2xl md:text-3xl font-heading font-semibold text-brand-espresso mb-6 text-center">
        {language === 'de' ? 'Weitere Behandlungen' : language === 'ru' ? 'Другие процедуры' : 'Інші процедури'}
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
          title={language === 'de' ? 'Aquarell Lips' : language === 'ru' ? 'Акварельные губы' : 'Акварельні губи'}
          description={language === 'de' ? 'Natürliche Lippenpigmentierung' : language === 'ru' ? 'Естественная пигментация губ' : 'Природна пігментація губ'}
          icon={Heart}
          href="/services/aquarell-lips"
          image="/138.jpeg"
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
      icon={Eye}
      title={language === 'de' ? "Wimpernkranz (Eyeliner PMU)" : language === 'ru' ? "Межресничка (Eyeliner PMU)" : "Міжвійка (Eyeliner PMU)"}
      subtitle={language === 'de'
        ? "Permanent Make-up Wimpernkranzverdichtung – klassisch oder intensiv"
        : language === 'ru'
        ? "Перманентный макияж межресничного пространства – классический или интенсивный"
        : "Перманентний макіяж міжвійкового простору – класичний або інтенсивний"}
      aboutTitle={language === 'de' ? "Was ist ein Wimpernkranz?" : language === 'ru' ? "Что такое межресничка?" : "Що таке міжвійка?"}
      aboutDescription={language === 'de' ? [
        'Der Wimpernkranz (auch Lid-Strich oder Eyeliner PMU genannt) ist eine Permanent Make-up Behandlung, bei der Pigmente direkt am Wimpernkranz eingearbeitet werden.',
        'Das Ergebnis ist eine optisch dichtere Wimpernlinie, die Ihre Augen ausdrucksstärker wirken lässt – ganz ohne tägliches Eyeliner auftragen.',
        'Sie haben die Wahl zwischen einem dezenten Wimpernkranz (nur zwischen den Wimpern) oder einem intensiveren Lid-Strich mit sichtbarer Linie. Perfekt für alle, die sich ein dauerhaft definiertes Auge wünschen.'
      ] : language === 'ru' ? [
        'Межресничка (также называемая татуаж века или Eyeliner PMU) – это процедура перманентного макияжа, при которой пигменты вводятся непосредственно в межресничное пространство.',
        'Результат – визуально более густая линия ресниц, которая делает ваши глаза более выразительными – без ежедневного нанесения подводки.',
        'Вы можете выбрать между деликатной межресничкой (только между ресницами) или более интенсивной стрелкой с видимой линией. Идеально для тех, кто хочет постоянно выразительный взгляд.'
      ] : [
        'Міжвійка (також називається татуаж повіки або Eyeliner PMU) — це процедура перманентного макіяжу, при якій пігменти вводяться безпосередньо у міжвійковий простір.',
        'Результат — візуально більш густа лінія вій, яка робить ваші очі більш виразними — без щоденного нанесення підводки.',
        'Ви можете обрати між делікатною міжвійкою (тільки між віями) або більш інтенсивною стрілкою з видимою лінією. Ідеально для тих, хто хоче постійно виразний погляд.'
      ]}
      benefits={language === 'de' ? [
        'Optisch dichtere, vollere Wimpern',
        'Ausdrucksstarke Augen ohne Make-up',
        'Kein tägliches Eyeliner ziehen mehr',
        'Wasserfest und wischfest',
        'Spart Zeit beim Schminken',
        'Perfekt symmetrische Linie',
        'Langlebig: 2-4 Jahre haltbar',
        'Individuell anpassbar (dezent bis intensiv)'
      ] : language === 'ru' ? [
        'Визуально более густые, объёмные ресницы',
        'Выразительные глаза без макияжа',
        'Больше не нужно рисовать подводку каждый день',
        'Водостойкий и стойкий к смазыванию',
        'Экономит время на макияж',
        'Идеально симметричная линия',
        'Долговечность: 2-4 года',
        'Индивидуальная настройка (от деликатной до интенсивной)'
      ] : [
        'Візуально більш густі, об\'ємні вії',
        'Виразні очі без макіяжу',
        'Більше не потрібно малювати підводку щодня',
        'Водостійкий та стійкий до розмазування',
        'Економить час на макіяж',
        'Ідеально симетрична лінія',
        'Довговічність: 2-4 роки',
        'Індивідуальне налаштування (від делікатної до інтенсивної)'
      ]}
      steps={language === 'de' ? [
        {
          title: 'Beratung & Vorzeichnung',
          description: 'Wir besprechen Ihre Wünsche: dezenter Wimpernkranz oder sichtbarer Lid-Strich.'
        },
        {
          title: 'Farbauswahl',
          description: 'Auswahl der passenden Farbe (meist Schwarz oder Dunkelbraun).'
        },
        {
          title: 'Pigmentierung',
          description: 'Präzises Einarbeiten der Pigmente am Wimpernkranz oder als Lid-Strich.'
        },
        {
          title: 'Nachbehandlung',
          description: 'Nach 4-6 Wochen erfolgt die Nachbehandlung für optimale Deckkraft.'
        }
      ] : language === 'ru' ? [
        {
          title: 'Консультация и эскиз',
          description: 'Обсуждаем ваши пожелания: деликатная межресничка или видимая стрелка.'
        },
        {
          title: 'Выбор цвета',
          description: 'Подбор подходящего цвета (обычно чёрный или тёмно-коричневый).'
        },
        {
          title: 'Пигментация',
          description: 'Точное введение пигментов в межресничное пространство или в виде стрелки.'
        },
        {
          title: 'Коррекция',
          description: 'Через 4-6 недель проводится коррекция для оптимальной насыщенности.'
        }
      ] : [
        {
          title: 'Консультація та ескіз',
          description: 'Обговорюємо ваші побажання: делікатна міжвійка або видима стрілка.'
        },
        {
          title: 'Вибір кольору',
          description: 'Підбір відповідного кольору (зазвичай чорний або темно-коричневий).'
        },
        {
          title: 'Пігментація',
          description: 'Точне введення пігментів у міжвійковий простір або у вигляді стрілки.'
        },
        {
          title: 'Корекція',
          description: 'Через 4-6 тижнів проводиться корекція для оптимальної насиченості.'
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
        'Aktive Augeninfektionen',
        'Sehr empfindliche oder trockene Augen',
        'Einnahme von Blutverdünnern',
        'Chemotherapie oder Bestrahlung',
        'Neigung zu Keloiden'
      ] : language === 'ru' ? [
        'Беременность и период лактации',
        'Активные инфекции глаз',
        'Очень чувствительные или сухие глаза',
        'Приём препаратов, разжижающих кровь',
        'Химиотерапия или облучение',
        'Склонность к келоидным рубцам'
      ] : [
        'Вагітність та період лактації',
        'Активні інфекції очей',
        'Дуже чутливі або сухі очі',
        'Прийом препаратів, що розріджують кров',
        'Хіміотерапія або опромінення',
        'Схильність до келоїдних рубців'
      ]}
      faq={language === 'de' ? [
        {
          q: 'Wie lange hält der Wimpernkranz?',
          a: '2-4 Jahre, abhängig von Hauttyp und Lebensstil. Eine Auffrischung ist nach 2-3 Jahren empfohlen.'
        },
        {
          q: 'Ist die Behandlung schmerzhaft?',
          a: 'Mit betäubender Creme ist die Behandlung gut erträglich. Die Augen können leicht tränen, was völlig normal ist.'
        },
        {
          q: 'Was ist der Unterschied zwischen Wimpernkranz und Lid-Strich?',
          a: 'Der Wimpernkranz ist dezent und nur zwischen den Wimpern sichtbar. Der Lid-Strich ist eine sichtbare Linie wie Eyeliner.'
        },
        {
          q: 'Kann ich mit Kontaktlinsen zur Behandlung kommen?',
          a: 'Nein, bitte kommen Sie ohne Kontaktlinsen. Bringen Sie ggf. Ihre Brille mit.'
        }
      ] : language === 'ru' ? [
        {
          q: 'Как долго держится межресничка?',
          a: '2-4 года, в зависимости от типа кожи и образа жизни. Обновление рекомендуется через 2-3 года.'
        },
        {
          q: 'Больно ли делать процедуру?',
          a: 'С анестезирующим кремом процедура хорошо переносится. Глаза могут немного слезиться, что совершенно нормально.'
        },
        {
          q: 'В чём разница между межресничкой и стрелкой?',
          a: 'Межресничка деликатная и видна только между ресницами. Стрелка – это видимая линия как подводка.'
        },
        {
          q: 'Можно ли прийти на процедуру в контактных линзах?',
          a: 'Нет, пожалуйста, приходите без контактных линз. При необходимости возьмите с собой очки.'
        }
      ] : [
        {
          q: 'Як довго тримається міжвійка?',
          a: '2-4 роки, залежно від типу шкіри та способу життя. Оновлення рекомендується через 2-3 роки.'
        },
        {
          q: 'Чи боляче робити процедуру?',
          a: 'Зі знеболюючим кремом процедура добре переноситься. Очі можуть трохи сльозитися, що цілком нормально.'
        },
        {
          q: 'Яка різниця між міжвійкою та стрілкою?',
          a: 'Міжвійка делікатна і видна тільки між віями. Стрілка — це видима лінія як підводка.'
        },
        {
          q: 'Чи можна прийти на процедуру в контактних лінзах?',
          a: 'Ні, будь ласка, приходьте без контактних лінз. За необхідності візьміть із собою окуляри.'
        }
      ]}
      ctaTitle={language === 'de' ? "Bereit für ausdrucksstarke Augen?" : language === 'ru' ? "Готовы к выразительному взгляду?" : "Готові до виразного погляду?"}
      ctaDescription={language === 'de'
        ? "Buchen Sie jetzt Ihren Wimpernkranz Termin oder lassen Sie sich kostenlos beraten."
        : language === 'ru'
        ? "Запишитесь на процедуру межреснички или получите бесплатную консультацию."
        : "Запишіться на процедуру міжвійки або отримайте безкоштовну консультацію."}
    />
  );
};

export default Wimpernkranz;
