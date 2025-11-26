'use client'

import { Link } from '@/components/LinkAdapter'
import { useLanguage } from '@/contexts/LanguageContext';
import Image from 'next/image';

const ProblemSkin = () => {
  const { language } = useLanguage();
  const isGerman = language === 'de';

  const products = [
    // Dermo Control Line
    {
      id: "cleansing-gel",
      name: "Cleansing Gel",
      line: "Dermo Control",
      description: isGerman
        ? "Reinigungsgel mit Salicylsäure und Teebaumöl. Entfernt überschüssigen Talg ohne auszutrocknen, reinigt die Poren und beugt Unreinheiten vor."
        : "Очищающий гель с салициловой кислотой и маслом чайного дерева. Удаляет избыток кожного сала не пересушивая, очищает поры и предотвращает высыпания.",
      image: "/Renew/23.png",
      hoverImage: "/Renew/23.1.jpeg",
      variants: [{ volume: "250ml" }]
    },
    {
      id: "hydration-gel",
      name: "Hydration Gel",
      line: "Dermo Control",
      description: isGerman
        ? "Leichtes Feuchtigkeitsgel ohne Öl. Mattiert die Haut und spendet Feuchtigkeit ohne zu fetten. Ideal für fettige und Mischhaut."
        : "Легкий увлажняющий гель без масла. Матирует кожу и увлажняет без жирности. Идеально для жирной и комбинированной кожи.",
      image: "/Renew/24.jpeg",
      variants: [{ volume: "250ml" }]
    },
    {
      id: "dermo-control-mask",
      name: isGerman ? "Dermo Control Maske" : "Маска Дермо Контроль",
      line: "Dermo Control",
      description: isGerman
        ? "Reinigende Maske mit Kaolin und Zink. Absorbiert überschüssigen Talg, verfeinert die Poren und beruhigt entzündete Haut."
        : "Очищающая маска с каолином и цинком. Абсорбирует избыток кожного сала, сужает поры и успокаивает воспаленную кожу.",
      image: "/Renew/25.png",
      hoverImage: "/Renew/25.1.jpeg",
      variants: [{ volume: "70ml" }]
    },
    {
      id: "dermo-control-lotion",
      name: isGerman ? "Dermo Control Lotion" : "Лосьон Дермо Контроль",
      line: "Dermo Control",
      description: isGerman
        ? "Ausgleichende Lotion mit BHA. Klärt die Haut, reguliert die Talgproduktion und beugt Unreinheiten vor. Täglich nach der Reinigung anwenden."
        : "Балансирующий лосьон с BHA. Очищает кожу, регулирует выработку себума и предотвращает высыпания. Применять ежедневно после очищения.",
      image: "/Renew/26.png",
      hoverImage: "/Renew/26.1.jpeg",
      variants: [{ volume: "250ml" }]
    },
    {
      id: "balance-recovery-peeling",
      name: "Balance Recovery Peeling",
      line: "Dermo Control",
      description: isGerman
        ? "Sanftes Enzympeeling zur Wiederherstellung des Hautgleichgewichts. Entfernt Verhornungen und reguliert die Talgproduktion ohne zu reizen."
        : "Мягкий энзимный пилинг для восстановления баланса кожи. Удаляет ороговевшие клетки и регулирует выработку себума без раздражения.",
      image: "/Renew/27.jpeg",
      variants: [{ volume: "70ml" }]
    },
    {
      id: "moisturizing-cream-spf15",
      name: isGerman ? "Feuchtigkeitscreme SPF-15" : "Увлажняющий крем SPF-15",
      line: "Dermo Control",
      description: isGerman
        ? "Leichte Tagescreme mit Sonnenschutz für fettige Haut. Mattiert, schützt vor UV-Strahlung und spendet Feuchtigkeit ohne zu glänzen."
        : "Легкий дневной крем с защитой от солнца для жирной кожи. Матирует, защищает от УФ-излучения и увлажняет без жирного блеска.",
      image: "/Renew/28.png",
      hoverImage: "/Renew/28.1.jpeg",
      variants: [{ volume: "50ml" }]
    },
    {
      id: "moisturizing-cream-oil-free",
      name: isGerman ? "Feuchtigkeitscreme Oil-Free" : "Увлажняющий крем без масла",
      line: "Dermo Control",
      description: isGerman
        ? "Ölfreie Feuchtigkeitscreme für fettige Haut. Versorgt mit Feuchtigkeit ohne zu fetten und hinterlässt ein mattes Finish."
        : "Безмасляный увлажняющий крем для жирной кожи. Увлажняет без жирности и оставляет матовый финиш.",
      image: "/Renew/29.png",
      hoverImage: "/Renew/29.1.jpeg",
      variants: [{ volume: "50ml" }]
    },
    {
      id: "phyto-complex",
      name: "Phyto Complex",
      line: "Dermo Control",
      description: isGerman
        ? "Pflanzliches Konzentrat mit Teebaumöl und Salbei. Beruhigt Entzündungen, klärt Unreinheiten und reguliert die Talgproduktion."
        : "Растительный концентрат с маслом чайного дерева и шалфеем. Успокаивает воспаления, очищает несовершенства и регулирует выработку себума.",
      image: "/Renew/30.jpeg",
      variants: [{ volume: "30ml" }]
    },
    {
      id: "drying-treatment",
      name: "Drying Treatment",
      line: "Dermo Control",
      description: isGerman
        ? "Lokale SOS-Behandlung zum Austrocknen von Unreinheiten. Punktgenau auf Pickel auftragen für schnelle Reduzierung von Rötungen und Schwellungen."
        : "Локальное SOS-средство для подсушивания воспалений. Точечно наносить на прыщи для быстрого уменьшения покраснений и отечности.",
      image: "/Renew/31.jpeg",
      variants: [{ volume: "30ml" }]
    },
    // Propioguard Line
    {
      id: "deep-lathering-abstergent",
      name: "Deep Lathering Abstergent",
      line: "Propioguard",
      description: isGerman
        ? "Tiefenreinigender Schaum mit Propolis und Zink. Bekämpft Akne-Bakterien, beruhigt die Haut und verhindert neue Entzündungen."
        : "Глубоко очищающая пена с прополисом и цинком. Борется с бактериями акне, успокаивает кожу и предотвращает новые воспаления.",
      image: "/Renew/32.png",
      variants: [{ volume: "200ml" }]
    },
    {
      id: "make-up-treatment-cream",
      name: "Make-Up Treatment Cream",
      line: "Propioguard",
      description: isGerman
        ? "Getönte Behandlungscreme mit antibakterieller Wirkung. Kaschiert Unreinheiten, pflegt und behandelt problematische Haut gleichzeitig."
        : "Тонирующий лечебный крем с антибактериальным действием. Маскирует несовершенства, ухаживает и лечит проблемную кожу одновременно.",
      image: "/Renew/33.png",
      variants: [{ volume: "50ml" }]
    },
    {
      id: "complex-peel-solution",
      name: "Complex Peel Solution",
      line: "Propioguard",
      description: isGerman
        ? "Komplexes Peeling mit Mandel- und Salicylsäure. Öffnet verstopfte Poren, bekämpft Akne und verhindert neue Unreinheiten."
        : "Комплексный пилинг с миндальной и салициловой кислотами. Открывает закупоренные поры, борется с акне и предотвращает новые высыпания.",
      image: "/Renew/34.png",
      variants: [{ volume: "70ml" }]
    },
    {
      id: "sunscreen-triple-active",
      name: "Sunscreen Triple Active Day Cream",
      line: "Propioguard",
      description: isGerman
        ? "Dreifach aktive Tagescreme mit SPF. Schützt vor UV-Strahlung, mattiert fettige Haut und behandelt Akne gleichzeitig."
        : "Тройной активный дневной крем с SPF. Защищает от УФ-излучения, матирует жирную кожу и лечит акне одновременно.",
      image: "/Renew/35.png",
      hoverImage: "/Renew/35.1.jpeg",
      variants: [{ volume: "50ml" }]
    },
    {
      id: "charcoal-soothing-mask",
      name: isGerman ? "Beruhigende Kohlemaske" : "Успокаивающая угольная маска",
      line: "Propioguard",
      description: isGerman
        ? "Tiefenreinigende Maske mit Aktivkohle. Entgiftet die Haut, absorbiert Unreinheiten und beruhigt Entzündungen."
        : "Глубоко очищающая маска с активированным углем. Детоксифицирует кожу, абсорбирует загрязнения и успокаивает воспаления.",
      image: "/Renew/36.png",
      hoverImage: "/Renew/36.1.jpeg",
      variants: [{ volume: "70ml" }]
    },
    {
      id: "multifunctional-accelerative-cream",
      name: "Multifunctional Accelerative Cream",
      line: "Propioguard",
      description: isGerman
        ? "Multifunktionale Creme zur Beschleunigung der Hautregeneration. Verhindert Narbenbildung und beschleunigt die Heilung von Akne-Läsionen."
        : "Мультифункциональный крем для ускорения регенерации кожи. Предотвращает образование рубцов и ускоряет заживление акне.",
      image: "/Renew/37.png",
      hoverImage: "/Renew/37.1.jpeg",
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
              {isGerman ? "Problemhaut & Akne" : "Проблемная кожа и акне"}
            </h1>
            <p className="text-lg text-brand-coffee/80 max-w-3xl mx-auto leading-relaxed">
              {isGerman
                ? "Zwei spezialisierte Linien für fettige und problematische Haut: Dermo Control reguliert die Talgproduktion und mattiert, Propioguard bekämpft aktiv Akne und Entzündungen. Mit antibakteriellen Wirkstoffen, Salicylsäure und beruhigenden Pflanzenextrakten."
                : "Две специализированные линии для жирной и проблемной кожи: Dermo Control регулирует выработку себума и матирует, Propioguard активно борется с акне и воспалениями. С антибактериальными компонентами, салициловой кислотой и успокаивающими растительными экстрактами."}
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
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProblemSkin;
