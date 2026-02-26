'use client'

import { Link } from '@/components/LinkAdapter'
import { useLanguage } from '@/contexts/LanguageContext';
import Image from 'next/image';
import { ProductLineSchema } from '@/components/ProductLineSchema';

const Hydration = () => {
  const { language } = useLanguage();
  const isGerman = language === 'de';

  const products = [
    // Aqualia Line
    {
      id: "fresh-calming-foam",
      name: "Fresh Calming Skin Foam",
      line: "Aqualia",
      description: language === 'de'
        ? "Reinigungsschaum für jeden Hauttyp mit tiefenwirksamer Feuchtigkeitspflege. Enthält PHA-Säure Gluconolacton für sanfte Hauterneuerung ohne Reizung mit sofortigem Lifting-Effekt nach der Reinigung"
        : language === 'ru'
        ? "Пенка для очищения кожи любого типа с эффектом глубокого увлажнения. Содержит РНА-кислоту глюконолактон, которая бережно восстанавливает кожу без раздражения, оказывая эффект лифтинга сразу после умывания"
        : "Пінка для очищення шкіри будь-якого типу з ефектом глибокого зволоження. Містить РНА-кислоту глюконолактон, яка дбайливо відновлює шкіру без подразнення, надаючи ефект ліфтингу одразу після вмивання",
      image: "/Renew/61.jpeg",
      variants: [{ volume: "200ml" }]
    },
    {
      id: "eye-lip-makeup-remover",
      name: language === 'de' ? "Augen & Lippen Make-up Entferner" : language === 'ru' ? "Средство для снятия макияжа с глаз и губ" : "Засіб для зняття макіяжу з очей та губ",
      line: "Aqualia",
      description: language === 'de'
        ? "Speziell entwickeltes Mittel zur Make-up-Entfernung und Hautreinigung. Reizt nicht die empfindliche Haut um die Augen und entfernt effektiv Kosmetik sowie Verschmutzungen"
        : language === 'ru'
        ? "Специально разработанное средство для снятия макияжа и очищения кожи. Не раздражает чувствительную кожу вокруг глаз и эффективно удаляет косметику, а также загрязнения с поверхности кожи"
        : "Спеціально розроблений засіб для зняття макіяжу та очищення шкіри. Не подразнює чутливу шкіру навколо очей та ефективно видаляє косметику, а також забруднення з поверхні шкіри",
      image: "/Renew/62.jpeg",
      hoverImage: "/Renew/62.1.jpeg",
      variants: [{ volume: "200ml" }]
    },
    {
      id: "pha-refining-tonic",
      name: "PHA Refining Skin Tonic",
      line: "Aqualia",
      description: language === 'de'
        ? "Feuchtigkeitsspendendes Tonikum mit ausgeprägter antioxidativer Wirkung für jeden Hauttyp. Enthält 5% PHA-Gluconsäure für Hauterneuerung mit strahlendem, gesundem Aussehen"
        : language === 'ru'
        ? "Увлажняющий тоник с выраженным антиоксидантным действием для кожи любого типа. Содержит 5% РНА-глюконовой кислоты для обновления кожи, придавая ей сияние и здоровый вид"
        : "Зволожувальний тонік з вираженою антиоксидантною дією для шкіри будь-якого типу. Містить 5% РНА-глюконової кислоти для оновлення шкіри, надаючи їй сяйво та здоровий вигляд",
      image: "/Renew/63.jpeg",
      hoverImage: "/Renew/63.1.jpeg",
      variants: [{ volume: "200ml" }]
    },
    {
      id: "soft-peeling-gel",
      name: "Soft Peeling Gel",
      line: "Aqualia",
      description: language === 'de'
        ? "Abrollendes Gel zur sanften Reinigung jeden Hauttyps. Einzigartige Synergie von Hyaluronsäure mit Pflanzenextrakten sättigt die Haut mit Mikroelementen und Vitaminen"
        : language === 'ru'
        ? "Скатывающийся гель для мягкого очищения кожи любого типа. Уникальная синергия гиалуроновой кислоты с растительными экстрактами насыщает кожу микроэлементами и витаминами"
        : "Скатний гель для м'якого очищення шкіри будь-якого типу. Унікальна синергія гіалуронової кислоти з рослинними екстрактами насичує шкіру мікроелементами та вітамінами",
      image: "/Renew/64.jpeg",
      variants: [{ volume: "70ml" }]
    },
    {
      id: "skin-repair-moisturizing-mask",
      name: language === 'de' ? "Reparierende Feuchtigkeitsmaske" : language === 'ru' ? "Восстанавливающая увлажняющая маска" : "Відновлювальна зволожувальна маска",
      line: "Aqualia",
      description: language === 'de'
        ? "Angenehme Gelmaske mit aktiven Komponenten zur Normalisierung physiologischer Prozesse in der Epidermis, Aufrechterhaltung des Wasserhaushalts und Hautverjüngung"
        : language === 'ru'
        ? "Приятная гелевая маска с активными компонентами, нормализующими физиологические процессы в эпидермисе, поддерживающими водный баланс и способствующими омоложению кожи"
        : "Приємна гелева маска з активними компонентами, що нормалізують фізіологічні процеси в епідермісі, підтримують водний баланс та сприяють омолодженню шкіри",
      image: "/Renew/65.jpeg",
      hoverImage: "/Renew/65.1.jpeg",
      variants: [{ volume: "70ml" }]
    },
    {
      id: "hydro-comfort-glow",
      name: "Hydro Comfort Glow Moisturizer",
      line: "Aqualia",
      description: language === 'de'
        ? "Feuchtigkeitscreme verleiht der Haut sofort Ausstrahlung und gesundes Aussehen. Erhält den Feuchtigkeitshaushalt, stellt Barriereeigenschaften wieder her, verbessert die Durchblutung. SPF 25"
        : language === 'ru'
        ? "Увлажняющий крем мгновенно придает коже сияние и здоровый вид. Поддерживает баланс увлажненности, восстанавливает барьерные свойства эпидермиса, улучшает кровообращение. SPF 25"
        : "Зволожувальний крем миттєво надає шкірі сяйво та здоровий вигляд. Підтримує баланс зволоженості, відновлює бар'єрні властивості епідермісу, покращує кровообіг. SPF 25",
      image: "/Renew/66.png",
      hoverImage: "/Renew/66.1.jpeg",
      variants: [{ volume: "50ml" }]
    },
    {
      id: "eye-contour-gel",
      name: language === 'de' ? "Augenkontur-Gel" : language === 'ru' ? "Гель для контура глаз" : "Гель для контуру очей",
      line: "Aqualia",
      description: language === 'de'
        ? "Gel mit leichter Textur und starker Wirkung glättet und hellt die Haut um die Augen auf. Spezieller Peptidkomplex BIO-Placenta reguliert Wachstum und Teilung der Epidermiszellen"
        : language === 'ru'
        ? "Гель легкой текстуры и мощного действия разглаживает и осветляет кожу вокруг глаз. Специальный комплекс пептидов BIO-Placenta регулирует рост и деление клеток эпидермиса"
        : "Гель легкої текстури та потужної дії розгладжує та освітлює шкіру навколо очей. Спеціальний комплекс пептидів BIO-Placenta регулює ріст та поділ клітин епідермісу",
      image: "/Renew/67.jpeg",
      hoverImage: "/Renew/67.1.jpeg",
      variants: [{ volume: "30ml" }]
    },
    {
      id: "antistress-nourishing-cream",
      name: language === 'de' ? "Antistress Nährcreme" : language === 'ru' ? "Антистресс питательный крем" : "Антистрес поживний крем",
      line: "Aqualia",
      description: language === 'de'
        ? "Zarte Creme mit nährenden Eigenschaften bildet ein Schutzsystem gegen äußere Aggressionen. Babassuöl beruhigt gereizte und empfindliche Haut, AQUAXYL spendet Feuchtigkeit"
        : language === 'ru'
        ? "Нежный крем с питательными свойствами формирует защитную систему для сопротивления внешней агрессии. Масло бабассу смягчает раздраженную и чувствительную кожу, AQUAXYL увлажняет"
        : "Ніжний крем з поживними властивостями формує захисну систему для протидії зовнішній агресії. Олія бабасу пом'якшує подразнену та чутливу шкіру, AQUAXYL зволожує",
      image: "/Renew/68.jpeg",
      hoverImage: "/Renew/68.1.jpeg",
      variants: [{ volume: "50ml" }]
    },
    // Vitamin C Line
    {
      id: "vitamin-c-gentle-foam",
      name: "Vitamin C Gentle Foam",
      line: "Vitamin C",
      description: language === 'de'
        ? "Zarter Schaum ideal zur Reinigung jeden Hauttyps. Reinigt sanft und effektiv, entfernt Make-up ohne die Haut auszutrocknen oder zu reizen. Enthält 3-O-Ethyl-Ascorbinsäure"
        : language === 'ru'
        ? "Деликатная пенка идеально подходит для умывания кожи любого типа. Мягко и эффективно очищает, снимает макияж, не пересушивая и не раздражая кожу. Содержит 3-О-Ethyl аскорбиновую кислоту"
        : "Делікатна пінка ідеально підходить для вмивання шкіри будь-якого типу. М'яко та ефективно очищує, знімає макіяж, не пересушуючи та не подразнюючи шкіру. Містить 3-О-Ethyl аскорбінову кислоту",
      image: "/Renew/69.jpeg",
      variants: [{ volume: "200ml" }]
    },
    {
      id: "vitamin-c-peel-lotion",
      name: "Vitamin C Peel Lotion",
      line: "Vitamin C",
      description: language === 'de'
        ? "Lotion mit pH 3,5 und 4% AHA-Säuren, 2% Salicylsäure zur effektiven Gesichtsreinigung und Vorbereitung auf weitere Produkte. Peelt sanft abgestorbene Hautzellen"
        : language === 'ru'
        ? "Лосьон с рН 3,5 и содержанием АНА кислот 4%, салициловой кислоты 2% для эффективного очищения кожи лица и подготовки её к нанесению других препаратов. Мягко отшелушивает мертвые клетки"
        : "Лосьйон з рН 3,5 та вмістом АНА кислот 4%, саліцилової кислоти 2% для ефективного очищення шкіри обличчя та підготовки її до нанесення інших препаратів. М'яко відлущує мертві клітини",
      image: "/Renew/70.jpeg",
      hoverImage: "/Renew/70.1.jpeg",
      variants: [{ volume: "200ml" }]
    },
    {
      id: "age-reverse-mask",
      name: "Age Reverse Mask",
      line: "Vitamin C",
      description: language === 'de'
        ? "Cremige Maske mit hoher Konzentration an stabilem Vitamin C in Kombination mit Silizium für normale Kollagensynthese und Schutz vor schädlichen Umwelteinflüssen"
        : language === 'ru'
        ? "Маска приятной кремообразной текстуры с высокой концентрацией витамина С в стабильной форме в сочетании с кремнием для нормального синтеза коллагена и защиты от вредного воздействия"
        : "Маска приємної кремоподібної текстури з високою концентрацією вітаміну С у стабільній формі в поєднанні з кремнієм для нормального синтезу колагену та захисту від шкідливого впливу",
      image: "/Renew/71.webp",
      hoverImage: "/Renew/71.1.jpeg",
      variants: [{ volume: "70ml" }]
    },
    {
      id: "age-reverse-serum",
      name: "Age Reverse Serum",
      line: "Vitamin C",
      description: language === 'de'
        ? "Reichhaltiger Komplex natürlicher Extrakte und Öle mit reinem Vitamin C. Schützt die Haut vor schädlichen Umwelteinflüssen, neutralisiert freie Radikale, fördert die Kollagenproduktion"
        : language === 'ru'
        ? "Богатый комплекс натуральных экстрактов и масел, содержащих чистый витамин С. Защищает кожу от вредного воздействия окружающей среды, нейтрализует свободные радикалы, способствует выработке коллагена"
        : "Багатий комплекс натуральних екстрактів та олій, що містять чистий вітамін С. Захищає шкіру від шкідливого впливу навколишнього середовища, нейтралізує вільні радикали, сприяє виробленню колагену",
      image: "/Renew/72.jpeg",
      hoverImage: "/Renew/72.1.jpeg",
      variants: [{ volume: "30ml" }]
    },
    {
      id: "age-reverse-cream",
      name: "Age Reverse Cream",
      line: "Vitamin C",
      description: language === 'de'
        ? "Nährende Creme mit Vitamin C enthält einzigartige Kombination aktiver Inhaltsstoffe zur schnellen Regeneration und Pflege ohne komedogene Wirkung. Erneuert die Haut, gleicht Ton und Relief aus"
        : language === 'ru'
        ? "Питательный крем с витамином С содержит уникальную композицию активных ингредиентов, способных быстро восстанавливать кожу и питать её без комедогенного воздействия. Обновляет кожу, выравнивает тон и рельеф"
        : "Поживний крем з вітаміном С містить унікальну композицію активних інгредієнтів, здатних швидко відновлювати шкіру та живити її без комедогенного впливу. Оновлює шкіру, вирівнює тон та рельєф",
      image: "/Renew/73.jpeg",
      hoverImage: "/Renew/73.1.jpeg",
      variants: [{ volume: "50ml" }]
    },
    {
      id: "shining-eyes",
      name: "Shining Eyes",
      line: "Vitamin C",
      description: language === 'de'
        ? "Einzigartige Formel mit ausgewogener Zusammensetzung und idealer Textur. Leichte Textur hinterlässt keine Spuren, perfekte Make-up-Grundlage. Enthält stabiles fettlösliches Vitamin C und Peptidkomplex"
        : language === 'ru'
        ? "Уникальная формула крема имеет сбалансированный состав и идеальную текстуру. Легкая текстура не оставляет следа после нанесения, отличная основа под макияж. Содержит витамин С в стабильной жирорастворимой форме и комплекс пептидов"
        : "Унікальна формула крему має збалансований склад та ідеальну текстуру. Легка текстура не залишає сліду після нанесення, відмінна основа під макіяж. Містить вітамін С у стабільній жиророзчинній формі та комплекс пептидів",
      image: "/Renew/74.jpeg",
      hoverImage: "/Renew/74.1.jpeg",
      variants: [{ volume: "30ml" }]
    },
    {
      id: "moisturizing-cream-spf25",
      name: language === 'de' ? "Feuchtigkeitscreme SPF-25" : language === 'ru' ? "Увлажняющий крем SPF-25" : "Зволожувальний крем SPF-25",
      line: "Vitamin C",
      description: language === 'de'
        ? "Zarte Feuchtigkeitscreme mit angenehmem Zitrusduft zieht schnell ein ohne Fettgefühl. Hohe Konzentration an stabilem fettlöslichem Vitamin C als starkes Antioxidans. SPF-25"
        : language === 'ru'
        ? "Нежный увлажняющий крем с приятным цитрусовым ароматом быстро впитывается, не оставляя ощущения жирности. Высокая концентрация витамина С в стабильной жирорастворимой форме как мощный антиоксидант. SPF-25"
        : "Ніжний зволожувальний крем з приємним цитрусовим ароматом швидко вбирається, не залишаючи відчуття жирності. Висока концентрація вітаміну С у стабільній жиророзчинній формі як потужний антиоксидант. SPF-25",
      image: "/Renew/75.png",
      hoverImage: "/Renew/75.1.jpeg",
      variants: [{ volume: "50ml" }]
    }
  ];

  return (
    <div className="relative min-h-screen">
      <ProductLineSchema lineName="Hydration" products={products.map(p => ({ name: p.name, image: p.image }))} />
      <div className="fixed inset-0 z-0">
        <Image
          src="/48.png"
          alt="Background"
          fill
          priority
          quality={75}
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      <div className="relative z-10 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <Link to="/shop" className="text-brand-rose hover:text-brand-espresso transition-colors mb-4 inline-block">
              ← {language === 'de' ? "Zurück zum Shop" : language === 'ru' ? "Назад в магазин" : "Назад до магазину"}
            </Link>
            <h1 className="text-4xl md:text-5xl font-heading font-semibold text-brand-espresso mb-4">
              {language === 'de' ? "Feuchtigkeit & Ausstrahlung" : language === 'ru' ? "Увлажнение и сияние" : "Зволоження та сяйво"}
            </h1>
            <p className="text-lg text-brand-coffee/80 max-w-2xl mx-auto">
              {language === 'de'
                ? "RENEW Aqualia & Vitamin C - Intensive Feuchtigkeit für strahlende Haut"
                : language === 'ru'
                ? "RENEW Aqualia & Vitamin C - Интенсивное увлажнение для сияющей кожи"
                : "RENEW Aqualia & Vitamin C - Інтенсивне зволоження для сяючої шкіри"}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div
                key={product.id}
                className="glass rounded-2xl overflow-hidden hover:shadow-luxury transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="aspect-square overflow-hidden relative group">
                  <img
                    src={product.image}
                    alt={product.name}
                    className={`w-full h-full object-cover transition-opacity duration-300 ${product.hoverImage ? 'group-hover:opacity-0' : ''}`}
                  />
                  {product.hoverImage && (
                    <img
                      src={product.hoverImage}
                      alt={product.name}
                      className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    />
                  )}
                </div>
                <div className="p-6">
                  <span className="text-xs font-medium text-brand-rose uppercase tracking-wider">
                    {product.line}
                  </span>
                  <h3 className="text-xl font-heading font-semibold text-brand-espresso mb-2 mt-1">
                    {product.name}
                  </h3>
                  <p className="text-brand-coffee/70 mb-4 text-sm">
                    {product.description}
                  </p>
                  <div className="space-y-1">
                    {product.variants.map((variant, idx) => (
                      <p key={idx} className="text-sm text-brand-coffee/60">
                        {variant.volume}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hydration;
