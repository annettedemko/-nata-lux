'use client'

import { Link } from '@/components/LinkAdapter'
import { useLanguage } from '@/contexts/LanguageContext';
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
      variants: [{ article: "1901250", volume: "250ml" }, { article: "1901070", volume: "70ml" }]
    },
    {
      id: "purifying-mask",
      name: isGerman ? "Reinigende Maske" : "Очищающая маска",
      description: isGerman
        ? "Tiefenreinigende Maske mit Kaolin und grünem Tee. Entgiftet die Haut, absorbiert überschüssigen Talg und verfeinert die Poren. Für ein klares, mattes Hautbild."
        : "Глубоко очищающая маска с каолином и зеленым чаем. Детоксифицирует кожу, абсорбирует избыток кожного сала и сужает поры. Для чистого матового цвета лица.",
      image: "/Renew/48.png",
      hoverImage: "/Renew/48.1.jpeg",
      variants: [{ article: "1902250", volume: "250ml" }, { article: "1902070", volume: "70ml" }]
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
              <div
                key={product.id}
                className="glass rounded-2xl overflow-hidden hover:shadow-luxury transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
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

export default Masks;
