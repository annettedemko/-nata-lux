'use client'

import { Link } from '@/components/LinkAdapter'
import { useLanguage } from '@/contexts/LanguageContext';
import { ProductCard } from '@/components/ProductCard';
import Image from 'next/image';

const Masks = () => {
  const { language } = useLanguage();
  const isGerman = language === 'de';

  const products = [
    {
      id: "gentle-mask-passiflora",
      name: "Gentle Mask Passiflora",
      description: isGerman
        ? "Beruhigende Maske mit Passionsblume und Aloe Vera. Ideal für empfindliche und gereizte Haut. Lindert Rötungen, spendet Feuchtigkeit und beruhigt gestresste Haut sofort."
        : "Успокаивающая маска с пассифлорой и алоэ вера. Идеально для чувствительной и раздраженной кожи. Снимает покраснения, увлажняет и мгновенно успокаивает стрессовую кожу.",
      image: "/Renew/47.png",
      hoverImage: "/Renew/47.1.jpeg",
      variants: [{ volume: "250ml" }, { volume: "70ml" }]
    },
    {
      id: "purifying-mask",
      name: isGerman ? "Reinigende Maske" : "Очищающая маска",
      description: isGerman
        ? "Tiefenreinigende Maske mit Kaolin und grünem Tee. Entgiftet die Haut, absorbiert überschüssigen Talg und verfeinert die Poren. Für ein klares, mattes Hautbild."
        : "Глубоко очищающая маска с каолином и зеленым чаем. Детоксифицирует кожу, абсорбирует избыток кожного сала и сужает поры. Для чистого матового цвета лица.",
      image: "/Renew/48.png",
      hoverImage: "/Renew/48.1.jpeg",
      variants: [{ volume: "250ml" }, { volume: "70ml" }]
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
              {isGerman ? "Masken & Intensivpflege" : "Маски и интенсивный уход"}
            </h1>
            <p className="text-lg text-brand-coffee/80 max-w-3xl mx-auto leading-relaxed">
              {isGerman
                ? "Intensive Gesichtsmasken für gezielte Hautpflege. Beruhigende Masken mit Passionsblume für empfindliche Haut und tiefenreinigende Masken mit Kaolin für Porenverfeinerung. Professionelle Ergebnisse für zu Hause."
                : "Интенсивные маски для лица для целевого ухода за кожей. Успокаивающие маски с пассифлорой для чувствительной кожи и глубоко очищающие маски с каолином для сужения пор. Профессиональные результаты в домашних условиях."}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <ProductCard
                key={product.id}
                image={product.image}
                hoverImage={product.hoverImage}
                name={product.name}
                delay={index * 100}
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

export default Masks;
