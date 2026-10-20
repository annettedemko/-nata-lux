'use client'

import { Link } from '@/components/LinkAdapter'
import { useLanguage } from '@/contexts/LanguageContext';
import { ProductCard } from '@/components/ProductCard';
import Image from 'next/image';
import { ProductLineSchema } from '@/components/ProductLineSchema';

const Retinol = () => {
  const { language } = useLanguage();
  const isGerman = language === 'de';

  const products = [
    {
      id: "rejuvenating-serum-retinol",
      name: language === 'de' ? "Verjüngendes Retinol Serum" : language === 'ru' ? "Омолаживающая сыворотка с ретинолом" : "Омолоджувальна сироватка з ретинолом",
      description: language === 'de'
        ? "Hochdosiertes Retinol-Serum. Beschleunigt die Zellerneuerung, glättet Falten und verfeinert die Poren. Abends auf die gereinigte Haut auftragen."
        : language === 'ru' ? "Высокодозированная сыворотка с ретинолом. Ускоряет обновление клеток, разглаживает морщины и сужает поры. Наносить вечером на очищенную кожу."
        : "Високодозована сироватка з ретинолом. Прискорює оновлення клітин, розгладжує зморшки та звужує пори. Наносити ввечері на очищену шкіру.",
      image: "/Renew/renew-anti-aging-produkt-11.jpeg",
      hoverImage: "/Renew/renew-anti-aging-produkt-11-detail.jpeg",
      variants: [{ volume: "30ml" }, { volume: "50ml" }]
    },
    {
      id: "rejuvenating-cream-retinol",
      name: language === 'de' ? "Verjüngende Retinol Creme" : language === 'ru' ? "Омолаживающий крем с ретинолом" : "Омолоджувальний крем з ретинолом",
      description: language === 'de'
        ? "Retinol-Creme für die Nacht. Mildert Pigmentflecken, verbessert die Hautstruktur und reduziert feine Linien. Mit Vitamin E für zusätzliche Pflege."
        : language === 'ru' ? "Ночной крем с ретинолом. Осветляет пигментные пятна, улучшает текстуру кожи и уменьшает мелкие морщинки. С витамином Е для дополнительного ухода."
        : "Нічний крем з ретинолом. Освітлює пігментні плями, покращує текстуру шкіри та зменшує дрібні зморшки. З вітаміном Е для додаткового догляду.",
      image: "/Renew/renew-anti-aging-produkt-12.jpeg",
      hoverImage: "/Renew/renew-anti-aging-produkt-12-detail.jpeg",
      variants: [{ volume: "50ml" }]
    }
  ];

  return (
    <div className="relative min-h-screen">
      <ProductLineSchema lineName="Retinol" products={products.map(p => ({ name: p.name, image: p.image }))} />
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
              Retinol
            </h1>
            <p className="text-lg text-brand-coffee/80 max-w-3xl mx-auto leading-relaxed">
              {language === 'de'
                ? "Intensive Zellerneuerung mit Retinol. Beschleunigt die Hauterneuerung, glättet Falten, verfeinert Poren und mildert Pigmentflecken."
                : language === 'ru' ? "Интенсивное обновление клеток с ретинолом. Ускоряет обновление кожи, разглаживает морщины, сужает поры и осветляет пигментные пятна."
                : "Інтенсивне оновлення клітин з ретинолом. Прискорює оновлення шкіри, розгладжує зморшки, звужує пори та освітлює пігментні плями."}
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
