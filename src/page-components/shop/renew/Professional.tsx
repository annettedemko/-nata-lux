'use client'

import { Link } from '@/components/LinkAdapter'
import { useLanguage } from '@/contexts/LanguageContext';
import { ProductCard } from '@/components/ProductCard';
import Image from 'next/image';
import { ProductLineSchema } from '@/components/ProductLineSchema';

const Professional = () => {
  const { language } = useLanguage();
  const isGerman = language === 'de';

  const products = [
    {
      id: "hydrofresh-lotion",
      name: "Hydrofresh Lotion",
      description: language === 'de'
        ? "Erfrischende feuchtigkeitsspendende Lotion"
        : language === 'ru'
        ? "Освежающий увлажняющий лосьон"
        : "Освіжальний зволожувальний лосьйон",
      image: "/Renew/76.png",
      hoverImage: "/Renew/76.1.png",
      variants: [{ volume: "250ml" }, { volume: "500ml" }],
      fitContain: true,
      hoverFitContain: true
    },
    {
      id: "dermakey-cleanser",
      name: "Dermakey Cleanser",
      description: language === 'de'
        ? "Professionelles Reinigungsmittel für alle Hauttypen"
        : language === 'ru'
        ? "Профессиональное очищающее средство для всех типов кожи"
        : "Професійний очищувальний засіб для всіх типів шкіри",
      image: "/Renew/77.webp",
      hoverImage: "/Renew/77.1.png",
      variants: [{ volume: "250ml" }, { volume: "500ml" }],
      hoverFitContain: true
    },
    {
      id: "azelaic-acid-cream-20",
      name: "Azelaic Acid Cream 20%",
      description: language === 'de'
        ? "Hochkonzentrierte Azelainsäure-Creme für professionelle Anwendung"
        : language === 'ru'
        ? "Высококонцентрированный крем с азелаиновой кислотой для профессионального применения"
        : "Висококонцентрований крем з азелаїновою кислотою для професійного застосування",
      image: "/Renew/78.jpeg",
      variants: [{ volume: "50ml" }]
    },
    {
      id: "spot-local-gel",
      name: "Spot Local Gel",
      description: language === 'de'
        ? "Lokale Behandlung für punktuelle Anwendung"
        : language === 'ru'
        ? "Локальное средство для точечного применения"
        : "Локальний засіб для точкового застосування",
      image: "/Renew/79.jpeg",
      variants: [{ volume: "30ml" }],
      fitContain: true
    },
    {
      id: "skin-recover-cream",
      name: "Skin Recover Cream",
      description: language === 'de'
        ? "Regenerierende Creme für geschädigte Haut"
        : language === 'ru'
        ? "Восстанавливающий крем для поврежденной кожи"
        : "Відновлювальний крем для пошкодженої шкіри",
      image: "/Renew/80.png",
      hoverImage: "/Renew/80.1.png",
      variants: [{ volume: "100ml" }, { volume: "250ml" }],
      fitContain: true
    },
    {
      id: "smart-matt-fluid",
      name: "Smart Matt Fluid",
      description: language === 'de'
        ? "Mattierendes Fluid für ölige Hautpartien"
        : language === 'ru'
        ? "Матирующий флюид для жирных участков кожи"
        : "Матувальний флюїд для жирних ділянок шкіри",
      image: "/Renew/81.jpeg",
      variants: [{ volume: "50ml" }]
    },
    {
      id: "aloevend-gel",
      name: "Aloevend Gel",
      description: language === 'de'
        ? "Beruhigendes Aloe Vera Gel für gereizte Haut"
        : language === 'ru'
        ? "Успокаивающий гель с алоэ вера для раздраженной кожи"
        : "Заспокійливий гель з алое вера для подразненої шкіри",
      image: "/Renew/82.webp",
      hoverImage: "/Renew/82.1.png",
      variants: [{ volume: "100ml" }, { volume: "250ml" }],
      fitContain: true,
      hoverFitContain: true
    },
    {
      id: "dew-drops-ha",
      name: "Dew Drops + HA",
      description: language === 'de'
        ? "Hyaluronsäure-Serum für intensive Feuchtigkeit"
        : language === 'ru'
        ? "Сыворотка с гиалуроновой кислотой для интенсивного увлажнения"
        : "Сироватка з гіалуроновою кислотою для інтенсивного зволоження",
      image: "/Renew/83.webp",
      hoverImage: "/Renew/83.1.jpeg",
      variants: [{ volume: "30ml" }, { volume: "100ml" }]
    }
  ];

  return (
    <div className="relative min-h-screen">
      <ProductLineSchema lineName="Professional" products={products.map(p => ({ name: p.name, image: p.image }))} />
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
              {language === 'de' ? "Professionelle Behandlungen" : language === 'ru' ? "Профессиональные процедуры" : "Професійні процедури"}
            </h1>
            <p className="text-lg text-brand-coffee/80 max-w-2xl mx-auto">
              {language === 'de'
                ? "RENEW Dermakey - Spezielle Produkte für professionelle Anwendungen"
                : language === 'ru'
                ? "RENEW Dermakey - Специальные средства для профессиональных процедур"
                : "RENEW Dermakey - Спеціальні засоби для професійних процедур"}
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
