'use client'

import { Link } from '@/components/LinkAdapter'
import { useLanguage } from '@/contexts/LanguageContext';
import { ProductCard } from '@/components/ProductCard';
import Image from 'next/image';
import { ProductLineSchema } from '@/components/ProductLineSchema';

const Aqualia = () => {
  const { language } = useLanguage();

  const products = [
    {
      id: "fresh-calming-foam",
      name: "Fresh Calming Skin Foam",
      description: language === 'de'
        ? "Reinigungsschaum für jeden Hauttyp mit tiefenwirksamer Feuchtigkeitspflege. Enthält PHA-Säure Gluconolacton für sanfte Hauterneuerung ohne Reizung mit sofortigem Lifting-Effekt nach der Reinigung"
        : language === 'ru' ? "Пенка для очищения кожи любого типа с эффектом глубокого увлажнения. Содержит РНА-кислоту глюконолактон, которая бережно восстанавливает кожу без раздражения, оказывая эффект лифтинга сразу после умывания"
        : "Пінка для очищення шкіри будь-якого типу з ефектом глибокого зволоження. Містить РНА-кислоту глюконолактон, яка дбайливо відновлює шкіру без подразнення, забезпечуючи ефект ліфтингу одразу після вмивання",
      image: "/Renew/61.jpeg",
      variants: [{ volume: "220ml" }]
    },
    {
      id: "eye-lip-makeup-remover",
      name: language === 'de' ? "Augen & Lippen Make-up Entferner" : language === 'ru' ? "Средство для снятия макияжа с глаз и губ" : "Засіб для зняття макіяжу з очей та губ",
      description: language === 'de'
        ? "Speziell entwickeltes Mittel zur Make-up-Entfernung und Hautreinigung. Reizt nicht die empfindliche Haut um die Augen und entfernt effektiv Kosmetik sowie Verschmutzungen"
        : language === 'ru' ? "Специально разработанное средство для снятия макияжа и очищения кожи. Не раздражает чувствительную кожу вокруг глаз и эффективно удаляет косметику, а также загрязнения с поверхности кожи"
        : "Спеціально розроблений засіб для зняття макіяжу та очищення шкіри. Не подразнює чутливу шкіру навколо очей та ефективно видаляє косметику, а також забруднення з поверхні шкіри",
      image: "/Renew/62.jpeg",
      hoverImage: "/Renew/62.1.jpeg",
      variants: [{ volume: "250ml" }, { volume: "500ml" }]
    },
    {
      id: "pha-refining-tonic",
      name: "PHA Refining Skin Tonic",
      description: language === 'de'
        ? "Feuchtigkeitsspendendes Tonikum mit ausgeprägter antioxidativer Wirkung für jeden Hauttyp. Enthält 5% PHA-Gluconsäure für Hauterneuerung mit strahlendem, gesundem Aussehen"
        : language === 'ru' ? "Увлажняющий тоник с выраженным антиоксидантным действием для кожи любого типа. Содержит 5% РНА-глюконовой кислоты для обновления кожи, придавая ей сияние и здоровый вид"
        : "Зволожувальний тонік з вираженою антиоксидантною дією для шкіри будь-якого типу. Містить 5% РНА-глюконової кислоти для оновлення шкіри, надаючи їй сяйво та здоровий вигляд",
      image: "/Renew/63.jpeg",
      hoverImage: "/Renew/63.1.jpeg",
      variants: [{ volume: "250ml" }, { volume: "500ml" }]
    },
    {
      id: "soft-peeling-gel",
      name: "Soft Peeling Gel",
      description: language === 'de'
        ? "Abrollendes Gel zur sanften Reinigung jeden Hauttyps. Einzigartige Synergie von Hyaluronsäure mit Pflanzenextrakten sättigt die Haut mit Mikroelementen und Vitaminen"
        : language === 'ru' ? "Скатывающийся гель для мягкого очищения кожи любого типа. Уникальная синергия гиалуроновой кислоты с растительными экстрактами насыщает кожу микроэлементами и витаминами"
        : "Скатувальний гель для м'якого очищення шкіри будь-якого типу. Унікальна синергія гіалуронової кислоти з рослинними екстрактами насичує шкіру мікроелементами та вітамінами",
      image: "/Renew/64.jpeg",
      variants: [{ volume: "150ml" }]
    },
    {
      id: "skin-repair-moisturizing-mask",
      name: language === 'de' ? "Reparierende Feuchtigkeitsmaske" : language === 'ru' ? "Восстанавливающая увлажняющая маска" : "Відновлювальна зволожувальна маска",
      description: language === 'de'
        ? "Angenehme Gelmaske mit aktiven Komponenten zur Normalisierung physiologischer Prozesse in der Epidermis, Aufrechterhaltung des Wasserhaushalts und Hautverjüngung"
        : language === 'ru' ? "Приятная гелевая маска с активными компонентами, нормализующими физиологические процессы в эпидермисе, поддерживающими водный баланс и способствующими омоложению кожи"
        : "Приємна гелева маска з активними компонентами, що нормалізують фізіологічні процеси в епідермісі, підтримують водний баланс та сприяють омолодженню шкіри",
      image: "/Renew/65.jpeg",
      hoverImage: "/Renew/65.1.jpeg",
      variants: [{ volume: "70ml" }, { volume: "250ml" }]
    },
    {
      id: "hydro-comfort-glow",
      name: "Hydro Comfort Glow Moisturizer",
      description: language === 'de'
        ? "Feuchtigkeitscreme verleiht der Haut sofort Ausstrahlung und gesundes Aussehen. Erhält den Feuchtigkeitshaushalt, stellt Barriereeigenschaften wieder her, verbessert die Durchblutung. SPF 25"
        : language === 'ru' ? "Увлажняющий крем мгновенно придает коже сияние и здоровый вид. Поддерживает баланс увлажненности, восстанавливает барьерные свойства эпидермиса, улучшает кровообращение. SPF 25"
        : "Зволожувальний крем миттєво надає шкірі сяйво та здоровий вигляд. Підтримує баланс зволоженості, відновлює бар'єрні властивості епідермісу, покращує кровообіг. SPF 25",
      image: "/Renew/66.png",
      hoverImage: "/Renew/66.1.jpeg",
      variants: [{ volume: "50ml" }, { volume: "250ml" }],
      fitContain: true
    },
    {
      id: "eye-contour-gel",
      name: language === 'de' ? "Augenkontur-Gel" : language === 'ru' ? "Гель для контура глаз" : "Гель для контуру очей",
      description: language === 'de'
        ? "Gel mit leichter Textur und starker Wirkung glättet und hellt die Haut um die Augen auf. Spezieller Peptidkomplex BIO-Placenta reguliert Wachstum und Teilung der Epidermiszellen"
        : language === 'ru' ? "Гель легкой текстуры и мощного действия разглаживает и осветляет кожу вокруг глаз. Специальный комплекс пептидов BIO-Placenta регулирует рост и деление клеток эпидермиса"
        : "Гель легкої текстури та потужної дії розгладжує та освітлює шкіру навколо очей. Спеціальний комплекс пептидів BIO-Placenta регулює ріст та поділ клітин епідермісу",
      image: "/Renew/67.jpeg",
      hoverImage: "/Renew/67.1.jpeg",
      variants: [{ volume: "30ml" }, { volume: "100ml" }]
    },
    {
      id: "antistress-nourishing-cream",
      name: language === 'de' ? "Antistress Nährcreme" : language === 'ru' ? "Антистресс питательный крем" : "Антистрес поживний крем",
      description: language === 'de'
        ? "Zarte Creme mit nährenden Eigenschaften bildet ein Schutzsystem gegen äußere Aggressionen. Babassuöl beruhigt gereizte und empfindliche Haut, AQUAXYL spendet Feuchtigkeit"
        : language === 'ru' ? "Нежный крем с питательными свойствами формирует защитную систему для сопротивления внешней агрессии. Масло бабассу смягчает раздраженную и чувствительную кожу, AQUAXYL увлажняет"
        : "Ніжний крем з поживними властивостями формує захисну систему для протистояння зовнішній агресії. Олія бабассу пом'якшує подразнену та чутливу шкіру, AQUAXYL зволожує",
      image: "/Renew/68.jpeg",
      hoverImage: "/Renew/68.1.jpeg",
      variants: [{ volume: "50ml" }, { volume: "250ml" }]
    }
  ];

  return (
    <div className="relative min-h-screen">
      <ProductLineSchema lineName="Aqualia" products={products.map(p => ({ name: p.name, image: p.image }))} />
      <div className="fixed inset-0 z-0">
        <Image
          src="/renew-kosmetik-shop-hintergrund.png"
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
              Aqualia
            </h1>
            <p className="text-lg text-brand-coffee/80 max-w-3xl mx-auto leading-relaxed">
              {language === 'de'
                ? "Intensive Feuchtigkeitslinie für jeden Hauttyp. Mit PHA-Säuren, Hyaluronsäure und aktiven Pflanzenextrakten für tiefenwirksame Hydratation und strahlende Haut."
                : language === 'ru' ? "Интенсивная увлажняющая линия для любого типа кожи. С РНА-кислотами, гиалуроновой кислотой и активными растительными экстрактами для глубокого увлажнения и сияния кожи."
                : "Інтенсивна зволожувальна лінія для будь-якого типу шкіри. З РНА-кислотами, гіалуроновою кислотою та активними рослинними екстрактами для глибокого зволоження та сяйва шкіри."}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <ProductCard
                key={product.id}
                image={product.image}
                hoverImage={product.hoverImage}
                name={product.name}
                fitContain={product.fitContain}
                delay={index * 50}
              >
                <h3 className="text-xl font-heading font-semibold text-brand-espresso mb-2">
                  {product.name}
                </h3>
                <p className="text-brand-coffee/70 mb-4 text-sm leading-relaxed">
                  {product.description}
                </p>
                <div className="space-y-1">
                  {product.variants.map((variant, idx) => (
                    <p key={idx} className="text-sm text-brand-coffee/60">
                      {variant.volume}
                    </p>
                  ))}
                </div>
              </ProductCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aqualia;
