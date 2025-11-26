'use client'

import { Link } from '@/components/LinkAdapter'
import { useLanguage } from '@/contexts/LanguageContext';
import { ProductCard } from '@/components/ProductCard';
import Image from 'next/image';

const Retinol = () => {
  const { language } = useLanguage();
  const isGerman = language === 'de';

  const products = [
    {
      id: "rejuvenating-serum-retinol",
      name: isGerman ? "Verjüngendes Retinol Serum" : "Омолаживающая сыворотка с ретинолом",
      description: isGerman
        ? "Hochdosiertes Retinol-Serum. Beschleunigt die Zellerneuerung, glättet Falten und verfeinert die Poren. Abends auf die gereinigte Haut auftragen."
        : "Высокодозированная сыворотка с ретинолом. Ускоряет обновление клеток, разглаживает морщины и сужает поры. Наносить вечером на очищенную кожу.",
      image: "/Renew/15.jpeg",
      hoverImage: "/Renew/15.1.jpeg",
      variants: [{ volume: "30ml" }, { volume: "50ml" }]
    },
    {
      id: "rejuvenating-cream-retinol",
      name: isGerman ? "Verjüngende Retinol Creme" : "Омолаживающий крем с ретинолом",
      description: isGerman
        ? "Retinol-Creme für die Nacht. Mildert Pigmentflecken, verbessert die Hautstruktur und reduziert feine Linien. Mit Vitamin E für zusätzliche Pflege."
        : "Ночной крем с ретинолом. Осветляет пигментные пятна, улучшает текстуру кожи и уменьшает мелкие морщинки. С витамином Е для дополнительного ухода.",
      image: "/Renew/16.jpeg",
      hoverImage: "/Renew/16.1.jpeg",
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
              Retinol
            </h1>
            <p className="text-lg text-brand-coffee/80 max-w-3xl mx-auto leading-relaxed">
              {isGerman
                ? "Intensive Zellerneuerung mit Retinol. Beschleunigt die Hauterneuerung, glättet Falten, verfeinert Poren und mildert Pigmentflecken."
                : "Интенсивное обновление клеток с ретинолом. Ускоряет обновление кожи, разглаживает морщины, сужает поры и осветляет пигментные пятна."}
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

export default Retinol;
