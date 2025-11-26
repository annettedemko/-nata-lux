'use client'

import { Link } from '@/components/LinkAdapter'
import { useLanguage } from '@/contexts/LanguageContext';
import Image from 'next/image';

const Hydration = () => {
  const { language } = useLanguage();
  const isGerman = language === 'de';

  const products = [
    // Aqualia Line
    {
      id: "fresh-calming-foam",
      name: "Fresh Calming Skin Foam",
      line: "Aqualia",
      description: isGerman
        ? "Reinigungsschaum für jeden Hauttyp mit tiefenwirksamer Feuchtigkeitspflege. Enthält PHA-Säure Gluconolacton für sanfte Hauterneuerung ohne Reizung mit sofortigem Lifting-Effekt nach der Reinigung"
        : "Пенка для очищения кожи любого типа с эффектом глубокого увлажнения. Содержит РНА-кислоту глюконолактон, которая бережно восстанавливает кожу без раздражения, оказывая эффект лифтинга сразу после умывания",
      image: "/Renew/61.jpeg",
      variants: [{ volume: "200ml" }]
    },
    {
      id: "eye-lip-makeup-remover",
      name: isGerman ? "Augen & Lippen Make-up Entferner" : "Средство для снятия макияжа с глаз и губ",
      line: "Aqualia",
      description: isGerman
        ? "Speziell entwickeltes Mittel zur Make-up-Entfernung und Hautreinigung. Reizt nicht die empfindliche Haut um die Augen und entfernt effektiv Kosmetik sowie Verschmutzungen"
        : "Специально разработанное средство для снятия макияжа и очищения кожи. Не раздражает чувствительную кожу вокруг глаз и эффективно удаляет косметику, а также загрязнения с поверхности кожи",
      image: "/Renew/62.jpeg",
      hoverImage: "/Renew/62.1.jpeg",
      variants: [{ volume: "200ml" }]
    },
    {
      id: "pha-refining-tonic",
      name: "PHA Refining Skin Tonic",
      line: "Aqualia",
      description: isGerman
        ? "Feuchtigkeitsspendendes Tonikum mit ausgeprägter antioxidativer Wirkung für jeden Hauttyp. Enthält 5% PHA-Gluconsäure für Hauterneuerung mit strahlendem, gesundem Aussehen"
        : "Увлажняющий тоник с выраженным антиоксидантным действием для кожи любого типа. Содержит 5% РНА-глюконовой кислоты для обновления кожи, придавая ей сияние и здоровый вид",
      image: "/Renew/63.jpeg",
      hoverImage: "/Renew/63.1.jpeg",
      variants: [{ volume: "200ml" }]
    },
    {
      id: "soft-peeling-gel",
      name: "Soft Peeling Gel",
      line: "Aqualia",
      description: isGerman
        ? "Abrollendes Gel zur sanften Reinigung jeden Hauttyps. Einzigartige Synergie von Hyaluronsäure mit Pflanzenextrakten sättigt die Haut mit Mikroelementen und Vitaminen"
        : "Скатывающийся гель для мягкого очищения кожи любого типа. Уникальная синергия гиалуроновой кислоты с растительными экстрактами насыщает кожу микроэлементами и витаминами",
      image: "/Renew/64.jpeg",
      variants: [{ volume: "70ml" }]
    },
    {
      id: "skin-repair-moisturizing-mask",
      name: isGerman ? "Reparierende Feuchtigkeitsmaske" : "Восстанавливающая увлажняющая маска",
      line: "Aqualia",
      description: isGerman
        ? "Angenehme Gelmaske mit aktiven Komponenten zur Normalisierung physiologischer Prozesse in der Epidermis, Aufrechterhaltung des Wasserhaushalts und Hautverjüngung"
        : "Приятная гелевая маска с активными компонентами, нормализующими физиологические процессы в эпидермисе, поддерживающими водный баланс и способствующими омоложению кожи",
      image: "/Renew/65.jpeg",
      hoverImage: "/Renew/65.1.jpeg",
      variants: [{ volume: "70ml" }]
    },
    {
      id: "hydro-comfort-glow",
      name: "Hydro Comfort Glow Moisturizer",
      line: "Aqualia",
      description: isGerman
        ? "Feuchtigkeitscreme verleiht der Haut sofort Ausstrahlung und gesundes Aussehen. Erhält den Feuchtigkeitshaushalt, stellt Barriereeigenschaften wieder her, verbessert die Durchblutung. SPF 25"
        : "Увлажняющий крем мгновенно придает коже сияние и здоровый вид. Поддерживает баланс увлажненности, восстанавливает барьерные свойства эпидермиса, улучшает кровообращение. SPF 25",
      image: "/Renew/66.png",
      hoverImage: "/Renew/66.1.jpeg",
      variants: [{ volume: "50ml" }]
    },
    {
      id: "eye-contour-gel",
      name: isGerman ? "Augenkontur-Gel" : "Гель для контура глаз",
      line: "Aqualia",
      description: isGerman
        ? "Gel mit leichter Textur und starker Wirkung glättet und hellt die Haut um die Augen auf. Spezieller Peptidkomplex BIO-Placenta reguliert Wachstum und Teilung der Epidermiszellen"
        : "Гель легкой текстуры и мощного действия разглаживает и осветляет кожу вокруг глаз. Специальный комплекс пептидов BIO-Placenta регулирует рост и деление клеток эпидермиса",
      image: "/Renew/67.jpeg",
      hoverImage: "/Renew/67.1.jpeg",
      variants: [{ volume: "30ml" }]
    },
    {
      id: "antistress-nourishing-cream",
      name: isGerman ? "Antistress Nährcreme" : "Антистресс питательный крем",
      line: "Aqualia",
      description: isGerman
        ? "Zarte Creme mit nährenden Eigenschaften bildet ein Schutzsystem gegen äußere Aggressionen. Babassuöl beruhigt gereizte und empfindliche Haut, AQUAXYL spendet Feuchtigkeit"
        : "Нежный крем с питательными свойствами формирует защитную систему для сопротивления внешней агрессии. Масло бабассу смягчает раздраженную и чувствительную кожу, AQUAXYL увлажняет",
      image: "/Renew/68.jpeg",
      hoverImage: "/Renew/68.1.jpeg",
      variants: [{ volume: "50ml" }]
    },
    // Vitamin C Line
    {
      id: "vitamin-c-gentle-foam",
      name: "Vitamin C Gentle Foam",
      line: "Vitamin C",
      description: isGerman
        ? "Zarter Schaum ideal zur Reinigung jeden Hauttyps. Reinigt sanft und effektiv, entfernt Make-up ohne die Haut auszutrocknen oder zu reizen. Enthält 3-O-Ethyl-Ascorbinsäure"
        : "Деликатная пенка идеально подходит для умывания кожи любого типа. Мягко и эффективно очищает, снимает макияж, не пересушивая и не раздражая кожу. Содержит 3-О-Ethyl аскорбиновую кислоту",
      image: "/Renew/69.jpeg",
      variants: [{ volume: "200ml" }]
    },
    {
      id: "vitamin-c-peel-lotion",
      name: "Vitamin C Peel Lotion",
      line: "Vitamin C",
      description: isGerman
        ? "Lotion mit pH 3,5 und 4% AHA-Säuren, 2% Salicylsäure zur effektiven Gesichtsreinigung und Vorbereitung auf weitere Produkte. Peelt sanft abgestorbene Hautzellen"
        : "Лосьон с рН 3,5 и содержанием АНА кислот 4%, салициловой кислоты 2% для эффективного очищения кожи лица и подготовки её к нанесению других препаратов. Мягко отшелушивает мертвые клетки",
      image: "/Renew/70.jpeg",
      hoverImage: "/Renew/70.1.jpeg",
      variants: [{ volume: "200ml" }]
    },
    {
      id: "age-reverse-mask",
      name: "Age Reverse Mask",
      line: "Vitamin C",
      description: isGerman
        ? "Cremige Maske mit hoher Konzentration an stabilem Vitamin C in Kombination mit Silizium für normale Kollagensynthese und Schutz vor schädlichen Umwelteinflüssen"
        : "Маска приятной кремообразной текстуры с высокой концентрацией витамина С в стабильной форме в сочетании с кремнием для нормального синтеза коллагена и защиты от вредного воздействия",
      image: "/Renew/71.webp",
      hoverImage: "/Renew/71.1.jpeg",
      variants: [{ volume: "70ml" }]
    },
    {
      id: "age-reverse-serum",
      name: "Age Reverse Serum",
      line: "Vitamin C",
      description: isGerman
        ? "Reichhaltiger Komplex natürlicher Extrakte und Öle mit reinem Vitamin C. Schützt die Haut vor schädlichen Umwelteinflüssen, neutralisiert freie Radikale, fördert die Kollagenproduktion"
        : "Богатый комплекс натуральных экстрактов и масел, содержащих чистый витамин С. Защищает кожу от вредного воздействия окружающей среды, нейтрализует свободные радикалы, способствует выработке коллагена",
      image: "/Renew/72.jpeg",
      hoverImage: "/Renew/72.1.jpeg",
      variants: [{ volume: "30ml" }]
    },
    {
      id: "age-reverse-cream",
      name: "Age Reverse Cream",
      line: "Vitamin C",
      description: isGerman
        ? "Nährende Creme mit Vitamin C enthält einzigartige Kombination aktiver Inhaltsstoffe zur schnellen Regeneration und Pflege ohne komedogene Wirkung. Erneuert die Haut, gleicht Ton und Relief aus"
        : "Питательный крем с витамином С содержит уникальную композицию активных ингредиентов, способных быстро восстанавливать кожу и питать её без комедогенного воздействия. Обновляет кожу, выравнивает тон и рельеф",
      image: "/Renew/73.jpeg",
      hoverImage: "/Renew/73.1.jpeg",
      variants: [{ volume: "50ml" }]
    },
    {
      id: "shining-eyes",
      name: "Shining Eyes",
      line: "Vitamin C",
      description: isGerman
        ? "Einzigartige Formel mit ausgewogener Zusammensetzung und idealer Textur. Leichte Textur hinterlässt keine Spuren, perfekte Make-up-Grundlage. Enthält stabiles fettlösliches Vitamin C und Peptidkomplex"
        : "Уникальная формула крема имеет сбалансированный состав и идеальную текстуру. Легкая текстура не оставляет следа после нанесения, отличная основа под макияж. Содержит витамин С в стабильной жирорастворимой форме и комплекс пептидов",
      image: "/Renew/74.jpeg",
      hoverImage: "/Renew/74.1.jpeg",
      variants: [{ volume: "30ml" }]
    },
    {
      id: "moisturizing-cream-spf25",
      name: isGerman ? "Feuchtigkeitscreme SPF-25" : "Увлажняющий крем SPF-25",
      line: "Vitamin C",
      description: isGerman
        ? "Zarte Feuchtigkeitscreme mit angenehmem Zitrusduft zieht schnell ein ohne Fettgefühl. Hohe Konzentration an stabilem fettlöslichem Vitamin C als starkes Antioxidans. SPF-25"
        : "Нежный увлажняющий крем с приятным цитрусовым ароматом быстро впитывается, не оставляя ощущения жирности. Высокая концентрация витамина С в стабильной жирорастворимой форме как мощный антиоксидант. SPF-25",
      image: "/Renew/75.png",
      hoverImage: "/Renew/75.1.jpeg",
      variants: [{ volume: "50ml" }]
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
              {isGerman ? "Feuchtigkeit & Ausstrahlung" : "Увлажнение и сияние"}
            </h1>
            <p className="text-lg text-brand-coffee/80 max-w-2xl mx-auto">
              {isGerman
                ? "RENEW Aqualia & Vitamin C - Intensive Feuchtigkeit für strahlende Haut"
                : "RENEW Aqualia & Vitamin C - Интенсивное увлажнение для сияющей кожи"}
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
