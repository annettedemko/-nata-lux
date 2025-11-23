'use client'

import { Link } from '@/components/LinkAdapter'
import { useLanguage } from '@/contexts/LanguageContext';
import { ProductCard } from '@/components/ProductCard';
import Image from 'next/image';

const Aqualia = () => {
  const { language } = useLanguage();
  const isGerman = language === 'de';

  const products = [
    {
      id: "fresh-calming-foam",
      name: "Fresh Calming Skin Foam",
      description: isGerman
        ? "Reinigungsschaum für jeden Hauttyp mit tiefenwirksamer Feuchtigkeitspflege. Enthält PHA-Säure Gluconolacton für sanfte Hauterneuerung ohne Reizung mit sofortigem Lifting-Effekt nach der Reinigung"
        : "Пенка для очищения кожи любого типа с эффектом глубокого увлажнения. Содержит РНА-кислоту глюконолактон, которая бережно восстанавливает кожу без раздражения, оказывая эффект лифтинга сразу после умывания",
      image: "/Renew/61.jpeg",
      variants: [{ article: "2301200", volume: "200ml" }]
    },
    {
      id: "eye-lip-makeup-remover",
      name: isGerman ? "Augen & Lippen Make-up Entferner" : "Средство для снятия макияжа с глаз и губ",
      description: isGerman
        ? "Speziell entwickeltes Mittel zur Make-up-Entfernung und Hautreinigung. Reizt nicht die empfindliche Haut um die Augen und entfernt effektiv Kosmetik sowie Verschmutzungen"
        : "Специально разработанное средство для снятия макияжа и очищения кожи. Не раздражает чувствительную кожу вокруг глаз и эффективно удаляет косметику, а также загрязнения с поверхности кожи",
      image: "/Renew/62.jpeg",
      hoverImage: "/Renew/62.1.jpeg",
      variants: [{ article: "2302200", volume: "200ml" }]
    },
    {
      id: "pha-refining-tonic",
      name: "PHA Refining Skin Tonic",
      description: isGerman
        ? "Feuchtigkeitsspendendes Tonikum mit ausgeprägter antioxidativer Wirkung für jeden Hauttyp. Enthält 5% PHA-Gluconsäure für Hauterneuerung mit strahlendem, gesundem Aussehen"
        : "Увлажняющий тоник с выраженным антиоксидантным действием для кожи любого типа. Содержит 5% РНА-глюконовой кислоты для обновления кожи, придавая ей сияние и здоровый вид",
      image: "/Renew/63.jpeg",
      hoverImage: "/Renew/63.1.jpeg",
      variants: [{ article: "2303200", volume: "200ml" }]
    },
    {
      id: "soft-peeling-gel",
      name: "Soft Peeling Gel",
      description: isGerman
        ? "Abrollendes Gel zur sanften Reinigung jeden Hauttyps. Einzigartige Synergie von Hyaluronsäure mit Pflanzenextrakten sättigt die Haut mit Mikroelementen und Vitaminen"
        : "Скатывающийся гель для мягкого очищения кожи любого типа. Уникальная синергия гиалуроновой кислоты с растительными экстрактами насыщает кожу микроэлементами и витаминами",
      image: "/Renew/64.jpeg",
      variants: [{ article: "2304070", volume: "70ml" }]
    },
    {
      id: "skin-repair-moisturizing-mask",
      name: isGerman ? "Reparierende Feuchtigkeitsmaske" : "Восстанавливающая увлажняющая маска",
      description: isGerman
        ? "Angenehme Gelmaske mit aktiven Komponenten zur Normalisierung physiologischer Prozesse in der Epidermis, Aufrechterhaltung des Wasserhaushalts und Hautverjüngung"
        : "Приятная гелевая маска с активными компонентами, нормализующими физиологические процессы в эпидермисе, поддерживающими водный баланс и способствующими омоложению кожи",
      image: "/Renew/65.jpeg",
      hoverImage: "/Renew/65.1.jpeg",
      variants: [{ article: "2305070", volume: "70ml" }]
    },
    {
      id: "hydro-comfort-glow",
      name: "Hydro Comfort Glow Moisturizer",
      description: isGerman
        ? "Feuchtigkeitscreme verleiht der Haut sofort Ausstrahlung und gesundes Aussehen. Erhält den Feuchtigkeitshaushalt, stellt Barriereeigenschaften wieder her, verbessert die Durchblutung. SPF 25"
        : "Увлажняющий крем мгновенно придает коже сияние и здоровый вид. Поддерживает баланс увлажненности, восстанавливает барьерные свойства эпидермиса, улучшает кровообращение. SPF 25",
      image: "/Renew/66.png",
      hoverImage: "/Renew/66.1.jpeg",
      variants: [{ article: "2306050", volume: "50ml" }],
      fitContain: true
    },
    {
      id: "eye-contour-gel",
      name: isGerman ? "Augenkontur-Gel" : "Гель для контура глаз",
      description: isGerman
        ? "Gel mit leichter Textur und starker Wirkung glättet und hellt die Haut um die Augen auf. Spezieller Peptidkomplex BIO-Placenta reguliert Wachstum und Teilung der Epidermiszellen"
        : "Гель легкой текстуры и мощного действия разглаживает и осветляет кожу вокруг глаз. Специальный комплекс пептидов BIO-Placenta регулирует рост и деление клеток эпидермиса",
      image: "/Renew/67.jpeg",
      hoverImage: "/Renew/67.1.jpeg",
      variants: [{ article: "2307030", volume: "30ml" }]
    },
    {
      id: "antistress-nourishing-cream",
      name: isGerman ? "Antistress Nährcreme" : "Антистресс питательный крем",
      description: isGerman
        ? "Zarte Creme mit nährenden Eigenschaften bildet ein Schutzsystem gegen äußere Aggressionen. Babassuöl beruhigt gereizte und empfindliche Haut, AQUAXYL spendet Feuchtigkeit"
        : "Нежный крем с питательными свойствами формирует защитную систему для сопротивления внешней агрессии. Масло бабассу смягчает раздраженную и чувствительную кожу, AQUAXYL увлажняет",
      image: "/Renew/68.jpeg",
      hoverImage: "/Renew/68.1.jpeg",
      variants: [{ article: "2308050", volume: "50ml" }]
    }
  ];

  return (
    <div className="relative min-h-screen">
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
              ← {isGerman ? "Zurück zum Shop" : "Назад в магазин"}
            </Link>
            <h1 className="text-4xl md:text-5xl font-heading font-semibold text-brand-espresso mb-4">
              Aqualia
            </h1>
            <p className="text-lg text-brand-coffee/80 max-w-3xl mx-auto leading-relaxed">
              {isGerman
                ? "Intensive Feuchtigkeitslinie für jeden Hauttyp. Mit PHA-Säuren, Hyaluronsäure und aktiven Pflanzenextrakten für tiefenwirksame Hydratation und strahlende Haut."
                : "Интенсивная увлажняющая линия для любого типа кожи. С РНА-кислотами, гиалуроновой кислотой и активными растительными экстрактами для глубокого увлажнения и сияния кожи."}
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
                  {product.variants.map((variant) => (
                    <p key={variant.article} className="text-sm text-brand-coffee/60">
                      Art. {variant.article} • {variant.volume}
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
