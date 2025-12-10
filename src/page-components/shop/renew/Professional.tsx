'use client'

import { Link } from '@/components/LinkAdapter'
import { useLanguage } from '@/contexts/LanguageContext';
import { ProductCard } from '@/components/ProductCard';
import Image from 'next/image';

const Professional = () => {
  const { language } = useLanguage();
  const isGerman = language === 'de';

  const products = [
    {
      id: "hydrofresh-lotion",
      name: "Hydrofresh Lotion",
      description: isGerman
        ? "Erfrischende feuchtigkeitsspendende Lotion"
        : "Освежающий увлажняющий лосьон",
      image: "/Renew/76.png",
      hoverImage: "/Renew/76.1.png",
      variants: [{ volume: "250ml" }, { volume: "500ml" }],
      fitContain: true,
      hoverFitContain: true
    },
    {
      id: "dermakey-cleanser",
      name: "Dermakey Cleanser",
      description: isGerman
        ? "Professionelles Reinigungsmittel für alle Hauttypen"
        : "Профессиональное очищающее средство для всех типов кожи",
      image: "/Renew/77.webp",
      hoverImage: "/Renew/77.1.png",
      variants: [{ volume: "250ml" }, { volume: "500ml" }],
      hoverFitContain: true
    },
    {
      id: "azelaic-acid-cream-20",
      name: "Azelaic Acid Cream 20%",
      description: isGerman
        ? "Hochkonzentrierte Azelainsäure-Creme für professionelle Anwendung"
        : "Высококонцентрированный крем с азелаиновой кислотой для профессионального применения",
      image: "/Renew/78.jpeg",
      variants: [{ volume: "50ml" }]
    },
    {
      id: "spot-local-gel",
      name: "Spot Local Gel",
      description: isGerman
        ? "Lokale Behandlung für punktuelle Anwendung"
        : "Локальное средство для точечного применения",
      image: "/Renew/79.jpeg",
      variants: [{ volume: "30ml" }],
      fitContain: true
    },
    {
      id: "skin-recover-cream",
      name: "Skin Recover Cream",
      description: isGerman
        ? "Regenerierende Creme für geschädigte Haut"
        : "Восстанавливающий крем для поврежденной кожи",
      image: "/Renew/80.png",
      hoverImage: "/Renew/80.1.png",
      variants: [{ volume: "100ml" }, { volume: "250ml" }],
      fitContain: true
    },
    {
      id: "smart-matt-fluid",
      name: "Smart Matt Fluid",
      description: isGerman
        ? "Mattierendes Fluid für ölige Hautpartien"
        : "Матирующий флюид для жирных участков кожи",
      image: "/Renew/81.jpeg",
      variants: [{ volume: "50ml" }]
    },
    {
      id: "aloevend-gel",
      name: "Aloevend Gel",
      description: isGerman
        ? "Beruhigendes Aloe Vera Gel für gereizte Haut"
        : "Успокаивающий гель с алоэ вера для раздраженной кожи",
      image: "/Renew/82.webp",
      hoverImage: "/Renew/82.1.png",
      variants: [{ volume: "100ml" }, { volume: "250ml" }],
      fitContain: true,
      hoverFitContain: true
    },
    {
      id: "dew-drops-ha",
      name: "Dew Drops + HA",
      description: isGerman
        ? "Hyaluronsäure-Serum für intensive Feuchtigkeit"
        : "Сыворотка с гиалуроновой кислотой для интенсивного увлажнения",
      image: "/Renew/83.webp",
      hoverImage: "/Renew/83.1.jpeg",
      variants: [{ volume: "30ml" }, { volume: "100ml" }]
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
              {language === 'de' ? "Professionelle Behandlungen" : language === 'ru' ? "Профессиональные процедуры" : "Профессиональные процедуры"}
            </h1>
            <p className="text-lg text-brand-coffee/80 max-w-2xl mx-auto">
              {isGerman
                ? "RENEW Dermakey - Spezielle Produkte für professionelle Anwendungen"
                : "RENEW Dermakey - Специальные средства для профессиональных процедур"}
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
                hoverFitContain={product.hoverFitContain}
                delay={index * 100}
              >
                <h3 className="text-xl font-heading font-semibold text-brand-espresso mb-2">
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
              </ProductCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Professional;
