'use client'

import { ServicePageLayout } from '@/components/ServicePageLayout';
import { Eye, Palette, Heart, Sparkles } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { PremiumGallery } from '@/components/PremiumGallery';
import { ServiceCard } from '@/components/ServiceCard';

const WimpernAugenbrauenLaminierung = () => {
  const { language } = useLanguage();

  const galleryImages = ['/wimpern-laminierung-muenchen.jpg', '/wimpernverlaengerung-volume-muenchen.jpg', '/augenbrauen-laminierung-muenchen.jpg', '/wimpern-laminierung-ergebnis.jpg'];

  const photoGallery = (
    <PremiumGallery images={galleryImages} />
  );

  // Recommended related services
  const RecommendedServices = () => (
    <div className="mt-12">
      <h2 className="text-2xl md:text-3xl font-heading font-semibold text-brand-espresso mb-6 text-center">
        {language === 'de' ? 'Weitere Beauty-Behandlungen' : language === 'ru' ? 'Другие бьюти-процедуры' : 'Інші б\'юті-процедури'}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <ServiceCard
          title={language === 'de' ? 'Wimpernverlängerung' : language === 'ru' ? 'Наращивание ресниц' : 'Нарощування вій'}
          description={language === 'de' ? 'Klassisch oder Volumentechnik' : language === 'ru' ? 'Классика или объём' : 'Класика або об\'єм'}
          icon={Sparkles}
          href="/services/wimpernverlaengerung"
          image="/wimpernverlaengerung-ergebnis-muenchen.png"
        />
        <ServiceCard
          title="Powder Brows"
          description={language === 'de' ? 'Permanent Make-up für perfekte Augenbrauen' : language === 'ru' ? 'Перманентный макияж для идеальных бровей' : 'Перманентний макіяж для ідеальних брів'}
          icon={Palette}
          href="/services/powder-brows"
          image="/powder-brows-permanent-makeup-muenchen.jpg"
        />
        <ServiceCard
          title={language === 'de' ? 'Wimpernkranz' : language === 'ru' ? 'Межресничка' : 'Міжвійковий простір'}
          description={language === 'de' ? 'Permanent Make-up Wimpernkranz' : language === 'ru' ? 'Перманентный макияж межресничного пространства' : 'Перманентний макіяж міжвійкового простору'}
          icon={Eye}
          href="/services/wimpernkranz"
          image="/permanent-makeup-ergebnis-muenchen.jpg"
        />
      </div>
    </div>
  );

  return (
    <ServicePageLayout
      icon={Eye}
      title={language === 'de' ? "Wimpern- & Augenbrauenlaminierung in München" : language === 'ru' ? "Ламинирование ресниц и бровей в Мюнхене" : "Ламінування вій та брів у Мюнхені"}
      subtitle={language === 'de'
        ? "Lash Lifting & Brow Lamination – natürlicher Curl, Volumen und gepflegte Form für 6-8 Wochen"
        : language === 'ru' ? "Lash Lifting & Brow Lamination – естественный изгиб, объём и ухоженная форма на 6-8 недель"
        : "Lash Lifting & Brow Lamination – природний вигин, об'єм та доглянута форма на 6-8 тижнів"}
      aboutTitle={language === 'de' ? "Was ist Wimpern- und Augenbrauenlaminierung?" : language === 'ru' ? "Что такое ламинирование ресниц и бровей?" : "Що таке ламінування вій та брів?"}
      aboutDescription={language === 'de' ? [
        'Die Wimpern- und Augenbrauenlaminierung (auch Lash Lifting und Brow Lamination genannt) ist eine der beliebtesten Beauty-Behandlungen in München für einen natürlichen, ausdrucksstarken Look ohne tägliches Styling. In unserem Studio in München-Haidhausen bieten wir beide Behandlungen mit hochwertigen Produkten und professioneller Technik an.',
        'Bei der Wimpernlaminierung (Lash Lifting) werden Ihre natürlichen Wimpern sanft von der Wurzel an nach oben gebogen und mit einer speziellen Lösung fixiert. Das Ergebnis: ein natürlicher, offener Blick mit optisch längeren und volleren Wimpern – ganz ohne Wimpernzange oder Extensions. Ideal für alle, die ihre natürlichen Wimpern betonen möchten.',
        'Die Augenbrauenlaminierung (Brow Lamination) ist die perfekte Lösung für widerspenstige, dünne oder ungleichmäßige Augenbrauen. Jedes Härchen wird in die gewünschte Richtung gebürstet und fixiert, sodass ein voller, gepflegter "Soap Brows"-Look entsteht – der aktuelle Trend für natürlich aussehende, definierte Augenbrauen.',
        'Beide Behandlungen können einzeln oder als Kombi-Paket gebucht werden. Das Ergebnis hält 6-8 Wochen und ist wasserfest, schweißresistent und pflegeleicht. Perfekt für Alltag, Sport, Urlaub oder besondere Anlässe.',
        'Ob Sie mehr Volumen und Curl für Ihre Wimpern wünschen oder endlich gebändigte, perfekt geformte Augenbrauen haben möchten – die Laminierung in München ist die schonende, natürliche Alternative zu Extensions und Permanent Make-up.'
      ] : language === 'ru' ? [
        'Ламинирование ресниц и бровей (также известное как Lash Lifting и Brow Lamination) — одна из самых популярных бьюти-процедур в Мюнхене для естественного, выразительного образа без ежедневной укладки. В нашей студии в Мюнхене-Хайдхаузен мы предлагаем обе процедуры с использованием высококачественных продуктов и профессиональной техники.',
        'При ламинировании ресниц (Lash Lifting) ваши натуральные ресницы мягко поднимаются от корня вверх и фиксируются специальным составом. Результат: естественный, открытый взгляд с визуально более длинными и объёмными ресницами — без щипцов и наращивания. Идеально для тех, кто хочет подчеркнуть свои натуральные ресницы.',
        'Ламинирование бровей (Brow Lamination) — идеальное решение для непослушных, тонких или неравномерных бровей. Каждый волосок укладывается в нужном направлении и фиксируется, создавая объёмный, ухоженный вид "Soap Brows" — актуальный тренд на естественно выглядящие, чётко очерченные брови.',
        'Обе процедуры можно заказать отдельно или комбо-пакетом. Результат держится 6-8 недель, водостойкий, устойчивый к поту и не требует особого ухода. Идеально для повседневной жизни, спорта, отпуска или особых случаев.',
        'Хотите больше объёма и изгиба для ресниц или наконец-то укрощённые, идеально оформленные брови — ламинирование в Мюнхене является бережной, естественной альтернативой наращиванию и перманентному макияжу.'
      ] : [
        'Ламінування вій та брів (також відоме як Lash Lifting та Brow Lamination) — одна з найпопулярніших б\'юті-процедур у Мюнхені для природного, виразного образу без щоденного укладання. У нашій студії в Мюнхені-Хайдхаузен ми пропонуємо обидві процедури з використанням високоякісних продуктів та професійної техніки.',
        'При ламінуванні вій (Lash Lifting) ваші натуральні вії м\'яко піднімаються від кореня вгору та фіксуються спеціальним складом. Результат: природний, відкритий погляд з візуально довшими та об\'ємнішими віями — без щипців та нарощування. Ідеально для тих, хто хоче підкреслити свої натуральні вії.',
        'Ламінування брів (Brow Lamination) — ідеальне рішення для неслухняних, тонких або нерівномірних брів. Кожна волосинка укладається в потрібному напрямку та фіксується, створюючи об\'ємний, доглянутий вигляд "Soap Brows" — актуальний тренд на природно виглядаючі, чітко окреслені брови.',
        'Обидві процедури можна замовити окремо або комбо-пакетом. Результат тримається 6-8 тижнів, водостійкий, стійкий до поту та не потребує особливого догляду. Ідеально для повсякденного життя, спорту, відпустки або особливих подій.',
        'Хочете більше об\'єму та вигину для вій або нарешті приборкані, ідеально оформлені брови — ламінування у Мюнхені є дбайливою, природною альтернативою нарощуванню та перманентному макіяжу.'
      ]}
      benefits={language === 'de' ? [
        'Natürlicher Wimpern-Curl ohne tägliche Wimpernzange',
        'Optisch längere, vollere und dunklere Wimpern',
        'Offener, wacher Blick durch angehobene Wimpern',
        'Gebändigte, perfekt geformte Augenbrauen',
        'Voller "Soap Brows"-Look für dünne Augenbrauen',
        'Korrektur von Wuchsrichtung und Asymmetrien',
        'Wasserfest, schweißresistent und langanhaltend (6-8 Wochen)',
        'Keine tägliche Styling-Zeit mehr nötig',
        'Schonend für natürliche Härchen – keine Schädigung',
        'Keratin- und Pflegestoffe stärken die Härchen',
        'Perfekt kombinierbar: Wimpern + Augenbrauen zusammen',
        'Optional mit Färbung für intensiveren Effekt',
        'Ideal vor Urlaub, Hochzeit oder besonderen Anlässen',
        'Natürliche Alternative zu Extensions und Permanent Make-up'
      ] : language === 'ru' ? [
        'Естественный изгиб ресниц без ежедневных щипцов',
        'Визуально более длинные, объёмные и тёмные ресницы',
        'Открытый, бодрый взгляд благодаря приподнятым ресницам',
        'Укрощённые, идеально оформленные брови',
        'Объёмный эффект "Soap Brows" для тонких бровей',
        'Коррекция направления роста и асимметрии',
        'Водостойкость, устойчивость к поту и долговременность (6-8 недель)',
        'Больше не нужно время на ежедневную укладку',
        'Бережное отношение к натуральным волоскам — без повреждений',
        'Кератин и ухаживающие вещества укрепляют волоски',
        'Идеально комбинируется: ресницы + брови вместе',
        'Опционально с окрашиванием для более интенсивного эффекта',
        'Идеально перед отпуском, свадьбой или особыми случаями',
        'Естественная альтернатива наращиванию и перманентному макияжу'
      ] : [
        'Природний вигин вій без щоденних щипців',
        'Візуально довші, об\'ємніші та темніші вії',
        'Відкритий, бадьорий погляд завдяки піднятим віям',
        'Приборкані, ідеально оформлені брови',
        'Об\'ємний ефект "Soap Brows" для тонких брів',
        'Корекція напрямку росту та асиметрії',
        'Водостійкість, стійкість до поту та довготривалість (6-8 тижнів)',
        'Більше не потрібен час на щоденне укладання',
        'Дбайливе ставлення до натуральних волосинок — без пошкоджень',
        'Кератин та доглядові речовини зміцнюють волосинки',
        'Ідеально комбінується: вії + брови разом',
        'За бажанням з фарбуванням для інтенсивнішого ефекту',
        'Ідеально перед відпусткою, весіллям або особливими подіями',
        'Природна альтернатива нарощуванню та перманентному макіяжу'
      ]}
      steps={language === 'de' ? [
        {
          title: '1. Beratung und Vorbereitung',
          description: 'Wir besprechen Ihre Wünsche, analysieren Ihre natürlichen Wimpern/Augenbrauen und wählen die optimale Curl-Stärke bzw. Formgebung. Die Härchen werden gereinigt und entfettet.'
        },
        {
          title: '2. Formgebung und Fixierung',
          description: 'Bei Wimpern: Aufkleben auf Silikonpads und sanftes Biegen nach oben. Bei Augenbrauen: Bürsten in die gewünschte Richtung und Fixierung der Form.'
        },
        {
          title: '3. Laminierungslösung',
          description: 'Auftragen der Laminierungslösung, die die Härchen in der neuen Form fixiert. Einwirkzeit je nach Haarstruktur 8-12 Minuten.'
        },
        {
          title: '4. Neutralisierung und Pflege',
          description: 'Neutralisierende Lösung stoppt den Prozess. Anschließend Keratin- und Pflegebehandlung für Glanz, Stärke und Geschmeidigkeit.'
        },
        {
          title: '5. Optional: Färbung',
          description: 'Für einen intensiveren Effekt können Wimpern und/oder Augenbrauen gefärbt werden – für mehr Tiefe und Definition.'
        }
      ] : language === 'ru' ? [
        {
          title: '1. Консультация и подготовка',
          description: 'Обсуждаем ваши пожелания, анализируем натуральные ресницы/брови и выбираем оптимальную степень изгиба или форму. Волоски очищаются и обезжириваются.'
        },
        {
          title: '2. Формирование и фиксация',
          description: 'Для ресниц: фиксация на силиконовых подушечках и мягкий подъём вверх. Для бровей: укладка в нужном направлении и фиксация формы.'
        },
        {
          title: '3. Ламинирующий состав',
          description: 'Нанесение ламинирующего состава, который фиксирует волоски в новой форме. Время воздействия 8-12 минут в зависимости от структуры волос.'
        },
        {
          title: '4. Нейтрализация и уход',
          description: 'Нейтрализующий состав останавливает процесс. Затем кератиновая и ухаживающая обработка для блеска, прочности и мягкости.'
        },
        {
          title: '5. Опционально: окрашивание',
          description: 'Для более интенсивного эффекта ресницы и/или брови можно окрасить — для большей глубины и чёткости.'
        }
      ] : [
        {
          title: '1. Консультація та підготовка',
          description: 'Обговорюємо ваші побажання, аналізуємо натуральні вії/брови та обираємо оптимальний ступінь вигину або форму. Волосинки очищуються та знежирюються.'
        },
        {
          title: '2. Формування та фіксація',
          description: 'Для вій: фіксація на силіконових подушечках та м\'який підйом вгору. Для брів: укладання в потрібному напрямку та фіксація форми.'
        },
        {
          title: '3. Ламінувальний склад',
          description: 'Нанесення ламінувального складу, який фіксує волосинки у новій формі. Час впливу 8-12 хвилин залежно від структури волосся.'
        },
        {
          title: '4. Нейтралізація та догляд',
          description: 'Нейтралізувальний склад зупиняє процес. Потім кератинова та доглядова обробка для блиску, міцності та м\'якості.'
        },
        {
          title: '5. За бажанням: фарбування',
          description: 'Для інтенсивнішого ефекту вії та/або брови можна пофарбувати — для більшої глибини та чіткості.'
        }
      ]}
      additionalSections={
        <>
          {photoGallery}
          <RecommendedServices />
        </>
      }
      priceSection="lashes-brows"
      contraindications={language === 'de' ? [
        'Aktive Augeninfektionen (Bindehautentzündung, Gerstenkorn)',
        'Allergien gegen Laminierungsprodukte (Patch-Test möglich)',
        'Sehr kurze, spärliche oder stark geschädigte Härchen',
        'Schwangerschaft und Stillzeit (nach Rücksprache möglich)',
        'Kürzliche Augenoperationen oder Laserbehandlungen',
        'Einnahme von Retinoiden oder starken Medikamenten'
      ] : language === 'ru' ? [
        'Активные глазные инфекции (конъюнктивит, ячмень)',
        'Аллергия на средства для ламинирования (возможен патч-тест)',
        'Очень короткие, редкие или сильно повреждённые волоски',
        'Беременность и период кормления (возможно после консультации)',
        'Недавние операции на глазах или лазерные процедуры',
        'Приём ретиноидов или сильных медикаментов'
      ] : [
        'Активні очні інфекції (кон\'юнктивіт, ячмінь)',
        'Алергія на засоби для ламінування (можливий патч-тест)',
        'Дуже короткі, рідкі або сильно пошкоджені волосинки',
        'Вагітність та період годування (можливо після консультації)',
        'Нещодавні операції на очах або лазерні процедури',
        'Прийом ретиноїдів або сильних медикаментів'
      ]}
      faq={language === 'de' ? [
        {
          q: 'Was ist der Unterschied zwischen Wimpern- und Augenbrauenlaminierung?',
          a: 'Bei der Wimpernlaminierung (Lash Lifting) werden die Wimpern nach oben gebogen für einen offenen Blick. Bei der Augenbrauenlaminierung (Brow Lamination) werden die Brauen in Form gebürstet und fixiert für einen vollen, gepflegten Look. Beide nutzen ähnliche Produkte, aber verschiedene Techniken.'
        },
        {
          q: 'Wie lange hält die Laminierung?',
          a: 'Das Ergebnis hält 6-8 Wochen, abhängig von Ihrem natürlichen Haarwachstumszyklus und der Pflege. Bei Wimpern entspricht dies einem kompletten Wimpernzyklus, bei Augenbrauen ähnlich.'
        },
        {
          q: 'Ist Laminierung schädlich für meine natürlichen Härchen?',
          a: 'Nein, bei professioneller Anwendung ist die Laminierung schonend. Wir verwenden hochwertige Produkte mit Keratin und Pflegestoffen, die Ihre Härchen sogar stärken und pflegen.'
        },
        {
          q: 'Kann ich nach der Laminierung schwimmen und Sport treiben?',
          a: 'Ja! Nach 24 Stunden Aushärtezeit ist das Ergebnis wasserfest, schweißresistent und hitzebeständig. Perfekt für Sport, Schwimmen, Sauna und Urlaub.'
        },
        {
          q: 'Lohnt sich das Kombi-Paket (Wimpern + Augenbrauen)?',
          a: 'Auf jeden Fall! Das Kombi-Paket spart Zeit und Geld, und das Ergebnis ist harmonisch aufeinander abgestimmt. Besonders empfehlenswert vor besonderen Anlässen oder dem Urlaub.'
        },
        {
          q: 'Brauche ich zusätzlich eine Färbung?',
          a: 'Die Färbung ist optional, aber empfehlenswert für einen intensiveren Effekt – besonders bei hellen Wimpern oder Augenbrauen. Die Farbe hält genauso lange wie die Laminierung.'
        },
        {
          q: 'Wie pflege ich meine laminierten Wimpern/Augenbrauen?',
          a: 'Die ersten 24 Stunden kein Wasser, danach normale Pflege. Augenbrauen täglich mit einem Bürstchen in Form bürsten. Keine ölhaltigen Produkte im Augenbereich verwenden.'
        },
        {
          q: 'Ist Laminierung besser als Wimpernverlängerung?',
          a: 'Es sind unterschiedliche Behandlungen: Laminierung betont Ihre natürlichen Wimpern, Verlängerung fügt künstliche hinzu. Laminierung ist pflegeleichter und natürlicher, Verlängerung gibt mehr Volumen und Drama.'
        }
      ] : language === 'ru' ? [
        {
          q: 'В чём разница между ламинированием ресниц и бровей?',
          a: 'При ламинировании ресниц (Lash Lifting) ресницы поднимаются вверх для открытого взгляда. При ламинировании бровей (Brow Lamination) брови укладываются в форму и фиксируются для объёмного, ухоженного вида. Оба используют похожие продукты, но разные техники.'
        },
        {
          q: 'Как долго держится ламинирование?',
          a: 'Результат держится 6-8 недель, в зависимости от вашего естественного цикла роста волос и ухода. Для ресниц это соответствует полному циклу роста, для бровей аналогично.'
        },
        {
          q: 'Вредно ли ламинирование для натуральных волосков?',
          a: 'Нет, при профессиональном применении ламинирование бережное. Мы используем качественные продукты с кератином и ухаживающими веществами, которые даже укрепляют и питают ваши волоски.'
        },
        {
          q: 'Можно ли после ламинирования плавать и заниматься спортом?',
          a: 'Да! После 24 часов застывания результат водостойкий, устойчивый к поту и теплу. Идеально для спорта, плавания, сауны и отпуска.'
        },
        {
          q: 'Стоит ли брать комбо-пакет (ресницы + брови)?',
          a: 'Однозначно! Комбо-пакет экономит время и деньги, а результат гармонично согласован. Особенно рекомендуем перед особыми случаями или отпуском.'
        },
        {
          q: 'Нужно ли дополнительное окрашивание?',
          a: 'Окрашивание опционально, но рекомендуется для более интенсивного эффекта — особенно при светлых ресницах или бровях. Цвет держится столько же, сколько ламинирование.'
        },
        {
          q: 'Как ухаживать за ламинированными ресницами/бровями?',
          a: 'Первые 24 часа без воды, затем обычный уход. Брови ежедневно расчёсывать щёточкой. Не использовать масляные средства в области глаз.'
        },
        {
          q: 'Ламинирование лучше наращивания ресниц?',
          a: 'Это разные процедуры: ламинирование подчёркивает ваши натуральные ресницы, наращивание добавляет искусственные. Ламинирование проще в уходе и естественнее, наращивание даёт больше объёма и драматичности.'
        }
      ] : [
        {
          q: 'У чому різниця між ламінуванням вій та брів?',
          a: 'При ламінуванні вій (Lash Lifting) вії піднімаються вгору для відкритого погляду. При ламінуванні брів (Brow Lamination) брови укладаються у форму та фіксуються для об\'ємного, доглянутого вигляду. Обидві процедури використовують схожі продукти, але різні техніки.'
        },
        {
          q: 'Як довго тримається ламінування?',
          a: 'Результат тримається 6-8 тижнів, залежно від вашого природного циклу росту волосся та догляду. Для вій це відповідає повному циклу росту, для брів аналогічно.'
        },
        {
          q: 'Чи шкідливе ламінування для натуральних волосинок?',
          a: 'Ні, при професійному застосуванні ламінування дбайливе. Ми використовуємо якісні продукти з кератином та доглядовими речовинами, які навіть зміцнюють та живлять ваші волосинки.'
        },
        {
          q: 'Чи можна після ламінування плавати та займатися спортом?',
          a: 'Так! Після 24 годин затвердіння результат водостійкий, стійкий до поту та тепла. Ідеально для спорту, плавання, сауни та відпустки.'
        },
        {
          q: 'Чи варто брати комбо-пакет (вії + брови)?',
          a: 'Однозначно! Комбо-пакет економить час та гроші, а результат гармонійно узгоджений. Особливо рекомендуємо перед особливими подіями або відпусткою.'
        },
        {
          q: 'Чи потрібне додаткове фарбування?',
          a: 'Фарбування за бажанням, але рекомендується для інтенсивнішого ефекту — особливо при світлих віях або бровах. Колір тримається стільки ж, скільки ламінування.'
        },
        {
          q: 'Як доглядати за ламінованими віями/бровами?',
          a: 'Перші 24 години без води, потім звичайний догляд. Брови щодня розчісувати щіточкою. Не використовувати олійні засоби в зоні очей.'
        },
        {
          q: 'Ламінування краще за нарощування вій?',
          a: 'Це різні процедури: ламінування підкреслює ваші натуральні вії, нарощування додає штучні. Ламінування простіше в догляді та природніше, нарощування дає більше об\'єму та драматичності.'
        }
      ]}
      ctaTitle={language === 'de' ? "Bereit für perfekte Wimpern und Augenbrauen in München?" : language === 'ru' ? "Готовы к идеальным ресницам и бровям в Мюнхене?" : "Готові до ідеальних вій та брів у Мюнхені?"}
      ctaDescription={language === 'de'
        ? "Buchen Sie jetzt Ihre Wimpern- und/oder Augenbrauenlaminierung in München-Haidhausen. Lash Lifting und Brow Lamination für einen natürlichen, pflegeleichten Look. Kostenlose Beratung inklusive!"
        : language === 'ru' ? "Запишитесь на ламинирование ресниц и/или бровей в Мюнхене-Хайдхаузен. Lash Lifting и Brow Lamination для естественного, неприхотливого образа. Бесплатная консультация включена!"
        : "Запишіться на ламінування вій та/або брів у Мюнхені-Хайдхаузен. Lash Lifting та Brow Lamination для природного, невибагливого образу. Безкоштовна консультація включена!"}
    />
  );
};

export default WimpernAugenbrauenLaminierung;
