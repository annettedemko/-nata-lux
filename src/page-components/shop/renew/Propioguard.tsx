'use client'

import { Link } from '@/components/LinkAdapter'
import { useLanguage } from '@/contexts/LanguageContext';
import { ProductCard } from '@/components/ProductCard';
import Image from 'next/image';

const Propioguard = () => {
  const { language } = useLanguage();
  const isGerman = language === 'de';

  const products = [
    {
      id: "deep-lathering-abstergent",
      name: "Deep Lathering Abstergent",
      description: isGerman
        ? "Tiefenreinigender Schaum mit Propolis und Zink. Bekämpft Akne-Bakterien, beruhigt die Haut und verhindert neue Entzündungen."
        : "Глубоко очищающая пена с прополисом и цинком. Борется с бактериями акне, успокаивает кожу и предотвращает новые воспаления.",
      image: "/Renew/32.png",
      variants: [{ volume: "250ml" }]
    },
    {
      id: "make-up-treatment-cream",
      name: "Make-Up Treatment Cream",
      description: isGerman
        ? "Getönte Behandlungscreme mit antibakterieller Wirkung. Kaschiert Unreinheiten, pflegt und behandelt problematische Haut gleichzeitig."
        : "Тонирующий лечебный крем с антибактериальным действием. Маскирует несовершенства, ухаживает и лечит проблемную кожу одновременно.",
      image: "/Renew/33.png",
      variants: [{ volume: "50ml" }]
    },
    {
      id: "complex-peel-solution",
      name: "Complex Peel Solution",
      description: isGerman
        ? "Komplexes Peeling mit Mandel- und Salicylsäure. Öffnet verstopfte Poren, bekämpft Akne und verhindert neue Unreinheiten."
        : "Комплексный пилинг с миндальной и салициловой кислотами. Открывает закупоренные поры, борется с акне и предотвращает новые высыпания.",
      image: "/Renew/34.png",
      variants: [{ volume: "250ml" }]
    },
    {
      id: "sunscreen-triple-active",
      name: "Sunscreen Triple Active Day Cream",
      description: isGerman
        ? "Dreifach aktive Tagescreme mit SPF. Schützt vor UV-Strahlung, mattiert fettige Haut und behandelt Akne gleichzeitig."
        : "Тройной активный дневной крем с SPF. Защищает от УФ-излучения, матирует жирную кожу и лечит акне одновременно.",
      image: "/Renew/35.png",
      hoverImage: "/Renew/35.1.jpeg",
      variants: [{ volume: "50ml" }]
    },
    {
      id: "charcoal-soothing-mask",
      name: language === 'de' ? "Beruhigende Kohlemaske" : language === 'ru' ? "Успокаивающая угольная маска" : "Успокаивающая угольная маска",
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
      description: isGerman
        ? "Multifunktionale Creme zur Beschleunigung der Hautregeneration. Verhindert Narbenbildung und beschleunigt die Heilung von Akne-Läsionen."
        : "Мультифункциональный крем для ускорения регенерации кожи. Предотвращает образование рубцов и ускоряет заживление акне.",
      image: "/Renew/37.png",
      hoverImage: "/Renew/37.1.jpeg",
      variants: [
        { volume: "50ml" },
        { volume: "250ml" }
      ]
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
              ← {language === 'de' ? "Zurück zum Shop" : language === 'ru' ? "Назад в магазин" : "Назад в магазин"}
            </Link>
            <h1 className="text-4xl md:text-5xl font-heading font-semibold text-brand-espresso mb-4">
              Propioguard
            </h1>
            <p className="text-lg text-brand-coffee/80 max-w-3xl mx-auto leading-relaxed">
              {isGerman
                ? "Professionelle Linie zur aktiven Bekämpfung von Akne und Entzündungen. Mit Propolis, Zink und antibakteriellen Wirkstoffen. Verhindert Narbenbildung und beschleunigt die Hautregeneration."
                : "Профессиональная линия для активной борьбы с акне и воспалениями. С прополисом, цинком и антибактериальными компонентами. Предотвращает образование рубцов и ускоряет регенерацию кожи."}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <ProductCard
                key={product.id}
                image={product.image}
                hoverImage={product.hoverImage}
                name={product.name}
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

export default Propioguard;
