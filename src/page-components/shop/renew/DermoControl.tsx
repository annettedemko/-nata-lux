'use client'

import { Link } from '@/components/LinkAdapter'
import { useLanguage } from '@/contexts/LanguageContext';
import Image from 'next/image';

const DermoControl = () => {
  const { language } = useLanguage();
  const isGerman = language === 'de';

  const products = [
    {
      id: "cleansing-gel",
      name: "Cleansing Gel",
      description: isGerman
        ? "Reinigungsgel mit Salicylsäure und Teebaumöl. Entfernt überschüssigen Talg ohne auszutrocknen, reinigt die Poren und beugt Unreinheiten vor."
        : "Очищающий гель с салициловой кислотой и маслом чайного дерева. Удаляет избыток кожного сала не пересушивая, очищает поры и предотвращает высыпания.",
      image: "/Renew/23.png",
      hoverImage: "/Renew/23.1.jpeg",
      variants: [{ article: "1601250", volume: "250ml" }]
    },
    {
      id: "hydration-gel",
      name: "Hydration Gel",
      description: isGerman
        ? "Leichtes Feuchtigkeitsgel ohne Öl. Mattiert die Haut und spendet Feuchtigkeit ohne zu fetten. Ideal für fettige und Mischhaut."
        : "Легкий увлажняющий гель без масла. Матирует кожу и увлажняет без жирности. Идеально для жирной и комбинированной кожи.",
      image: "/Renew/24.jpeg",
      variants: [{ article: "1602050", volume: "250ml" }]
    },
    {
      id: "dermo-control-mask",
      name: isGerman ? "Dermo Control Maske" : "Маска Дермо Контроль",
      description: isGerman
        ? "Reinigende Maske mit Kaolin und Zink. Absorbiert überschüssigen Talg, verfeinert die Poren und beruhigt entzündete Haut."
        : "Очищающая маска с каолином и цинком. Абсорбирует избыток кожного сала, сужает поры и успокаивает воспаленную кожу.",
      image: "/Renew/25.png",
      hoverImage: "/Renew/25.1.jpeg",
      variants: [{ article: "1603070", volume: "70ml" }]
    },
    {
      id: "dermo-control-lotion",
      name: isGerman ? "Dermo Control Lotion" : "Лосьон Дермо Контроль",
      description: isGerman
        ? "Ausgleichende Lotion mit BHA. Klärt die Haut, reguliert die Talgproduktion und beugt Unreinheiten vor. Täglich nach der Reinigung anwenden."
        : "Балансирующий лосьон с BHA. Очищает кожу, регулирует выработку себума и предотвращает высыпания. Применять ежедневно после очищения.",
      image: "/Renew/26.png",
      hoverImage: "/Renew/26.1.jpeg",
      variants: [{ article: "1604250", volume: "250ml" }]
    },
    {
      id: "balance-recovery-peeling",
      name: "Balance Recovery Peeling",
      description: isGerman
        ? "Sanftes Enzympeeling zur Wiederherstellung des Hautgleichgewichts. Entfernt Verhornungen und reguliert die Talgproduktion ohne zu reizen."
        : "Мягкий энзимный пилинг для восстановления баланса кожи. Удаляет ороговевшие клетки и регулирует выработку себума без раздражения.",
      image: "/Renew/27.jpeg",
      variants: [{ article: "1605070", volume: "70ml" }]
    },
    {
      id: "moisturizing-cream-spf15",
      name: isGerman ? "Feuchtigkeitscreme SPF-15" : "Увлажняющий крем SPF-15",
      description: isGerman
        ? "Leichte Tagescreme mit Sonnenschutz für fettige Haut. Mattiert, schützt vor UV-Strahlung und spendet Feuchtigkeit ohne zu glänzen."
        : "Легкий дневной крем с защитой от солнца для жирной кожи. Матирует, защищает от УФ-излучения и увлажняет без жирного блеска.",
      image: "/Renew/28.png",
      hoverImage: "/Renew/28.1.jpeg",
      variants: [{ article: "1606050", volume: "50ml" }]
    },
    {
      id: "moisturizing-cream-oil-free",
      name: isGerman ? "Feuchtigkeitscreme Oil-Free" : "Увлажняющий крем без масла",
      description: isGerman
        ? "Ölfreie Feuchtigkeitscreme für fettige Haut. Versorgt mit Feuchtigkeit ohne zu fetten und hinterlässt ein mattes Finish."
        : "Безмасляный увлажняющий крем для жирной кожи. Увлажняет без жирности и оставляет матовый финиш.",
      image: "/Renew/29.png",
      hoverImage: "/Renew/29.1.jpeg",
      variants: [{ article: "1607050", volume: "50ml" }]
    },
    {
      id: "phyto-complex",
      name: "Phyto Complex",
      description: isGerman
        ? "Pflanzliches Konzentrat mit Teebaumöl und Salbei. Beruhigt Entzündungen, klärt Unreinheiten und reguliert die Talgproduktion."
        : "Растительный концентрат с маслом чайного дерева и шалфеем. Успокаивает воспаления, очищает несовершенства и регулирует выработку себума.",
      image: "/Renew/30.jpeg",
      variants: [{ article: "1608030", volume: "30ml" }]
    },
    {
      id: "drying-treatment",
      name: "Drying Treatment",
      description: isGerman
        ? "Lokale SOS-Behandlung zum Austrocknen von Unreinheiten. Punktgenau auf Pickel auftragen für schnelle Reduzierung von Rötungen und Schwellungen."
        : "Локальное SOS-средство для подсушивания воспалений. Точечно наносить на прыщи для быстрого уменьшения покраснений и отечности.",
      image: "/Renew/31.jpeg",
      variants: [{ article: "1609030", volume: "30ml" }]
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
              Dermo Control
            </h1>
            <p className="text-lg text-brand-coffee/80 max-w-3xl mx-auto leading-relaxed">
              {isGerman
                ? "Spezialisierte Linie für fettige und problematische Haut. Reguliert die Talgproduktion, mattiert und beugt Unreinheiten vor. Mit Salicylsäure, Teebaumöl und beruhigenden Pflanzenextrakten."
                : "Специализированная линия для жирной и проблемной кожи. Регулирует выработку себума, матирует и предотвращает высыпания. С салициловой кислотой, маслом чайного дерева и успокаивающими растительными экстрактами."}
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
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DermoControl;
