'use client'

import { ServicePageLayout } from '@/components/ServicePageLayout';
import { Palette, Heart, Eye, Sparkles } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { PremiumGallery } from '@/components/PremiumGallery';
import { ServiceCard } from '@/components/ServiceCard';

const PowderBrows = () => {
  const { language } = useLanguage();

  const galleryImages = ['/powder-brows-detail.jpeg', '/powder-brows-ergebnis-nah.jpeg', '/powder-brows-permanent-makeup-muenchen.jpg', '/wimpernverlaengerung-ergebnis-muenchen.png', '/powder-brows-vorher-nachher.jpeg', '/powder-brows-arbeit.jpeg', '/powder-brows-resultat.jpeg', '/powder-brows-vorher.jpeg', '/powder-brows-nachher.jpeg', '/powder-brows-fertig.jpeg'];

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
          title={language === 'de' ? 'Aquarell Lips' : language === 'ru' ? 'Акварельные губы' : 'Акварельні губи'}
          description={language === 'de' ? 'Natürliche Lippenpigmentierung' : language === 'ru' ? 'Естественная пигментация губ' : 'Природна пігментація губ'}
          icon={Heart}
          href="/services/aquarell-lips"
          image="/permanent-makeup-behandlung.jpeg"
        />
        <ServiceCard
          title={language === 'de' ? 'Wimpernkranz' : language === 'ru' ? 'Межресничка' : 'Міжвійка'}
          description={language === 'de' ? 'Permanent Make-up Wimpernkranz' : language === 'ru' ? 'Перманентный макияж межресничного пространства' : 'Перманентний макіяж міжвійкового простору'}
          icon={Eye}
          href="/services/wimpernkranz"
          image="/permanent-makeup-ergebnis-muenchen.jpg"
        />
        <ServiceCard
          title={language === 'de' ? 'Wimpernlaminierung' : language === 'ru' ? 'Ламинирование ресниц' : 'Ламінування вій'}
          description={language === 'de' ? 'Lash Lift für natürlich geschwungene Wimpern' : language === 'ru' ? 'Lash Lift для естественно изогнутых ресниц' : 'Lash Lift для природно підкручених вій'}
          icon={Sparkles}
          href="/services/wimpern-augenbrauen-laminierung"
          image="/wimpernverlaengerung-behandlung.jpeg"
        />
      </div>
    </div>
  );

  return (
    <ServicePageLayout
      icon={Palette}
      title={language === 'de' ? "Powder Brows" : language === 'ru' ? "Пудровые брови" : "Пудрові брови"}
      subtitle={language === 'de'
        ? "Pudertechnik für natürliche, perfekt definierte Augenbrauen"
        : language === 'ru'
        ? "Пудровая техника для естественных, идеально очерченных бровей"
        : "Пудрова техніка для природних, ідеально окреслених брів"}
      aboutTitle={language === 'de' ? "Was sind Powder Brows?" : language === 'ru' ? "Что такое Powder Brows?" : "Що таке Powder Brows?"}
      aboutDescription={language === 'de' ? [
        'Powder Brows sind eine moderne Permanent Make-up Technik, die Ihren Augenbrauen einen soften, pudrigen Look verleiht – ähnlich wie mit Augenbrauenpuder geschminkt.',
        'Anders als bei der Microblading-Technik werden hier keine Härchen nachgezeichnet, sondern die Farbe wird in feinen Punkten eingebracht. Das Ergebnis ist ein natürlicher, weicher Verlauf mit mehr Intensität im hinteren Bereich der Braue.',
        'Powder Brows sind besonders langlebig und halten 1-3 Jahre. Sie eignen sich perfekt für alle Hauttypen, auch für ölige Haut.'
      ] : language === 'ru' ? [
        'Powder Brows — это современная техника перманентного макияжа, которая придаёт бровям мягкий, пудровый вид — как будто подкрашенные тенями для бровей.',
        'В отличие от микроблейдинга, здесь не прорисовываются отдельные волоски, а цвет наносится мелкими точками. Результат — естественный, мягкий переход с большей интенсивностью в задней части брови.',
        'Powder Brows особенно долговечны и держатся 1-3 года. Они идеально подходят для всех типов кожи, в том числе для жирной.'
      ] : [
        'Powder Brows — це сучасна техніка перманентного макіяжу, яка надає бровам м\'який, пудровий вигляд — ніби підфарбовані тінями для брів.',
        'На відміну від мікроблейдингу, тут не промальовуються окремі волоски, а колір наноситься дрібними крапками. Результат — природний, м\'який перехід з більшою інтенсивністю у задній частині брови.',
        'Powder Brows особливо довговічні та тримаються 1-3 роки. Вони ідеально підходять для всіх типів шкіри, у тому числі для жирної.'
      ]}
      benefits={language === 'de' ? [
        'Natürlicher, weicher Puder-Effekt',
        'Langlebig: 1-3 Jahre haltbar',
        'Für alle Hauttypen geeignet (auch ölige Haut)',
        'Wasserfest und wischfest',
        'Kein tägliches Nachschminken nötig',
        'Individuell angepasste Form und Farbe',
        'Schonender als Microblading'
      ] : language === 'ru' ? [
        'Естественный, мягкий пудровый эффект',
        'Долговечность: 1-3 года',
        'Подходит для всех типов кожи (включая жирную)',
        'Водостойкость и устойчивость к смазыванию',
        'Не нужно ежедневно подкрашивать',
        'Индивидуально подобранная форма и цвет',
        'Более щадящий метод, чем микроблейдинг'
      ] : [
        'Природний, м\'який пудровий ефект',
        'Довговічність: 1-3 роки',
        'Підходить для всіх типів шкіри (включаючи жирну)',
        'Водостійкість та стійкість до розмазування',
        'Не потрібно щодня підфарбовувати',
        'Індивідуально підібрана форма та колір',
        'Більш щадний метод, ніж мікроблейдинг'
      ]}
      steps={language === 'de' ? [
        {
          title: 'Beratung & Vermessung',
          description: 'Wir analysieren Ihre Gesichtsform und zeichnen die perfekte Augenbrauenform vor.'
        },
        {
          title: 'Farbauswahl',
          description: 'Gemeinsam wählen wir den perfekten Farbton für Ihren Hauttyp und Haarfarbe.'
        },
        {
          title: 'Pigmentierung',
          description: 'Präzises Einarbeiten der Farbe mit der Powder-Technik für einen weichen Verlauf.'
        },
        {
          title: 'Nachbehandlung',
          description: 'Nach 4-6 Wochen erfolgt die Nachbehandlung für ein perfektes, langanhaltendes Ergebnis.'
        }
      ] : language === 'ru' ? [
        {
          title: 'Консультация и измерение',
          description: 'Мы анализируем форму вашего лица и предварительно рисуем идеальную форму бровей.'
        },
        {
          title: 'Подбор цвета',
          description: 'Вместе выбираем идеальный оттенок для вашего типа кожи и цвета волос.'
        },
        {
          title: 'Пигментация',
          description: 'Точное нанесение цвета с помощью пудровой техники для мягкого перехода.'
        },
        {
          title: 'Коррекция',
          description: 'Через 4-6 недель проводится коррекция для идеального, долговременного результата.'
        }
      ] : [
        {
          title: 'Консультація та вимірювання',
          description: 'Ми аналізуємо форму вашого обличчя та попередньо малюємо ідеальну форму брів.'
        },
        {
          title: 'Підбір кольору',
          description: 'Разом обираємо ідеальний відтінок для вашого типу шкіри та кольору волосся.'
        },
        {
          title: 'Пігментація',
          description: 'Точне нанесення кольору за допомогою пудрової техніки для м\'якого переходу.'
        },
        {
          title: 'Корекція',
          description: 'Через 4-6 тижнів проводиться корекція для ідеального, довготривалого результату.'
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
        'Einnahme von Blutverdünnern',
        'Diabetes (nur mit ärztlicher Erlaubnis)',
        'Aktive Hauterkrankungen im Behandlungsbereich',
        'Chemotherapie oder Bestrahlung',
        'Keloidneigung'
      ] : language === 'ru' ? [
        'Беременность и период кормления',
        'Приём препаратов, разжижающих кровь',
        'Диабет (только с разрешения врача)',
        'Активные кожные заболевания в зоне обработки',
        'Химиотерапия или облучение',
        'Склонность к образованию келоидных рубцов'
      ] : [
        'Вагітність та період годування',
        'Прийом препаратів, що розріджують кров',
        'Діабет (тільки з дозволу лікаря)',
        'Активні шкірні захворювання в зоні обробки',
        'Хіміотерапія або опромінення',
        'Схильність до утворення келоїдних рубців'
      ]}
      faq={language === 'de' ? [
        {
          q: 'Wie lange halten Powder Brows?',
          a: '1-3 Jahre, abhängig von Hauttyp, Lebensstil und Sonneneinstrahlung. Bei öliger Haut kann eine frühere Auffrischung nötig sein.'
        },
        {
          q: 'Ist die Behandlung schmerzhaft?',
          a: 'Die Behandlung ist mit einer betäubenden Creme nahezu schmerzfrei. Die meisten Kunden empfinden nur ein leichtes Kratzen.'
        },
        {
          q: 'Wie lange dauert die Heilung?',
          a: '7-10 Tage. In dieser Zeit können die Brauen etwas dunkler wirken und leicht schuppen. Danach erscheint die finale Farbe.'
        },
        {
          q: 'Warum brauche ich eine Nachbehandlung?',
          a: 'Die Nachbehandlung nach 4-6 Wochen perfektioniert das Ergebnis und sorgt für optimale Haltbarkeit.'
        }
      ] : language === 'ru' ? [
        {
          q: 'Как долго держатся Powder Brows?',
          a: '1-3 года, в зависимости от типа кожи, образа жизни и воздействия солнца. При жирной коже может потребоваться более ранняя коррекция.'
        },
        {
          q: 'Болезненна ли процедура?',
          a: 'Процедура почти безболезненна благодаря анестезирующему крему. Большинство клиентов ощущают лишь лёгкое покалывание.'
        },
        {
          q: 'Как долго длится заживление?',
          a: '7-10 дней. В это время брови могут выглядеть немного темнее и слегка шелушиться. После этого проявится окончательный цвет.'
        },
        {
          q: 'Зачем нужна коррекция?',
          a: 'Коррекция через 4-6 недель совершенствует результат и обеспечивает оптимальную стойкость.'
        }
      ] : [
        {
          q: 'Як довго тримаються Powder Brows?',
          a: '1-3 роки, залежно від типу шкіри, способу життя та впливу сонця. При жирній шкірі може знадобитися більш рання корекція.'
        },
        {
          q: 'Чи болісна процедура?',
          a: 'Процедура майже безболісна завдяки знеболюючому крему. Більшість клієнтів відчувають лише легке поколювання.'
        },
        {
          q: 'Як довго триває загоєння?',
          a: '7-10 днів. У цей час брови можуть виглядати трохи темнішими та злегка лущитися. Після цього проявиться остаточний колір.'
        },
        {
          q: 'Навіщо потрібна корекція?',
          a: 'Корекція через 4-6 тижнів вдосконалює результат та забезпечує оптимальну стійкість.'
        }
      ]}
      ctaTitle={language === 'de' ? "Bereit für perfekte Augenbrauen?" : language === 'ru' ? "Готовы к идеальным бровям?" : "Готові до ідеальних брів?"}
      ctaDescription={language === 'de'
        ? "Buchen Sie jetzt Ihre Powder Brows Behandlung oder vereinbaren Sie einen kostenlosen Beratungstermin."
        : language === 'ru'
        ? "Запишитесь на процедуру Powder Brows или договоритесь о бесплатной консультации."
        : "Запишіться на процедуру Powder Brows або домовтеся про безкоштовну консультацію."}
    />
  );
};

export default PowderBrows;
