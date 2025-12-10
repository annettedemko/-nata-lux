'use client'

import { Link } from '@/components/LinkAdapter'
import { useLanguage } from '@/contexts/LanguageContext';
import { ProductCard } from '@/components/ProductCard';
import Image from 'next/image';

const SensitiveSkin = () => {
  const { language } = useLanguage();
  const isGerman = language === 'de';

  const products = [
    {
      id: "redness-concentrate",
      name: language === 'de' ? "Rötungen Konzentrat" : language === 'ru' ? "Концентрат против покраснений" : "Концентрат против покраснений",
      description: isGerman
        ? "Konzentrat mit Vitamin K und Arnika. Stärkt die Kapillarwände, reduziert Rötungen und Couperose. Verbessert sichtbar das Erscheinungsbild von erweiterten Äderchen."
        : "Концентрат с витамином К и арникой. Укрепляет стенки капилляров, уменьшает покраснения и купероз. Заметно улучшает вид расширенных сосудов.",
      image: "/Renew/57.png",
      hoverImage: "/Renew/57.1.jpeg",
      variants: [{ volume: "30ml" }]
    },
    {
      id: "redness-gentle-peel",
      name: language === 'de' ? "Sanftes Peeling für Rötungen" : language === 'ru' ? "Мягкий пилинг для чувствительной кожи" : "Мягкий пилинг для чувствительной кожи",
      description: isGerman
        ? "Extra sanftes Peeling speziell für empfindliche Haut mit Rötungen. Mit beruhigenden Wirkstoffen wie Bisabolol und Allantoin. Erneuert die Haut ohne Irritation."
        : "Экстра мягкий пилинг специально для чувствительной кожи с покраснениями. С успокаивающими компонентами: бисабололом и аллантоином. Обновляет кожу без раздражения.",
      image: "/Renew/58.jpg",
      variants: [{ volume: "50ml" }]
    },
    {
      id: "redness-balm",
      name: language === 'de' ? "Beruhigender Balsam" : language === 'ru' ? "Успокаивающий бальзам" : "Успокаивающий бальзам",
      description: isGerman
        ? "Beruhigender Balsam mit Centella Asiatica für gerötete und irritierte Haut. Lindert Irritationen, stärkt die Hautbarriere und reduziert Empfindlichkeit langfristig."
        : "Успокаивающий бальзам с центеллой азиатской для покрасневшей и раздраженной кожи. Снимает раздражение, укрепляет кожный барьер и долгосрочно уменьшает чувствительность.",
      image: "/Renew/59.jpg",
      hoverImage: "/Renew/59.png",
      hoverFitContain: true,
      variants: [{ volume: "50ml" }]
    },
    {
      id: "redness-mask",
      name: language === 'de' ? "Anti-Rötungen Maske" : language === 'ru' ? "Маска против покраснений" : "Маска против покраснений",
      description: isGerman
        ? "Kühlende Maske mit Aloe und Kamille. Sofortige Beruhigung bei Rötungen, Reizungen und Sonnenbrand. Spendet Feuchtigkeit und lindert Spannungsgefühl."
        : "Охлаждающая маска с алоэ и ромашкой. Мгновенное успокоение при покраснениях, раздражениях и солнечных ожогах. Увлажняет и снимает чувство стянутости.",
      image: "/Renew/60.png",
      hoverImage: "/Renew/60.1.jpeg",
      variants: [{ volume: "70ml" }, { volume: "250ml" }]
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
              {language === 'de' ? "Empfindliche Haut & Couperose" : language === 'ru' ? "Чувствительная кожа и купероз" : "Чувствительная кожа и купероз"}
            </h1>
            <p className="text-lg text-brand-coffee/80 max-w-3xl mx-auto leading-relaxed">
              {isGerman
                ? "Spezialisierte Pflege für empfindliche Haut mit Rötungen und Couperose. Mit beruhigenden Wirkstoffen wie Vitamin K, Centella Asiatica und Kamille. Stärkt die Kapillaren, reduziert Rötungen und beruhigt irritierte Haut nachhaltig."
                : "Специализированный уход для чувствительной кожи с покраснениями и куперозом. С успокаивающими компонентами: витамином К, центеллой азиатской и ромашкой. Укрепляет капилляры, уменьшает покраснения и надолго успокаивает раздраженную кожу."}
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

export default SensitiveSkin;
