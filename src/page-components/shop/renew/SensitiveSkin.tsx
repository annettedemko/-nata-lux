'use client'

import { Link } from '@/components/LinkAdapter'
import { useLanguage } from '@/contexts/LanguageContext';
import Image from 'next/image';

const SensitiveSkin = () => {
  const { language } = useLanguage();
  const isGerman = language === 'de';

  const products = [
    {
      id: "redness-concentrate",
      name: isGerman ? "Rötungen Konzentrat" : "Концентрат против покраснений",
      description: isGerman
        ? "Konzentrat mit Vitamin K und Arnika. Stärkt die Kapillarwände, reduziert Rötungen und Couperose. Verbessert sichtbar das Erscheinungsbild von erweiterten Äderchen."
        : "Концентрат с витамином К и арникой. Укрепляет стенки капилляров, уменьшает покраснения и купероз. Заметно улучшает вид расширенных сосудов.",
      image: "/Renew/57.png",
      hoverImage: "/Renew/57.1.jpeg",
      variants: [{ article: "2201030", volume: "30ml" }]
    },
    {
      id: "redness-gentle-peel",
      name: isGerman ? "Sanftes Peeling für Rötungen" : "Мягкий пилинг для чувствительной кожи",
      description: isGerman
        ? "Extra sanftes Peeling speziell für empfindliche Haut mit Rötungen. Mit beruhigenden Wirkstoffen wie Bisabolol und Allantoin. Erneuert die Haut ohne Irritation."
        : "Экстра мягкий пилинг специально для чувствительной кожи с покраснениями. С успокаивающими компонентами: бисабололом и аллантоином. Обновляет кожу без раздражения.",
      image: "/Renew/58.jpg",
      variants: [{ article: "2202070", volume: "70ml" }]
    },
    {
      id: "redness-balm",
      name: isGerman ? "Beruhigender Balsam" : "Успокаивающий бальзам",
      description: isGerman
        ? "Beruhigender Balsam mit Centella Asiatica für gerötete und irritierte Haut. Lindert Irritationen, stärkt die Hautbarriere und reduziert Empfindlichkeit langfristig."
        : "Успокаивающий бальзам с центеллой азиатской для покрасневшей и раздраженной кожи. Снимает раздражение, укрепляет кожный барьер и долгосрочно уменьшает чувствительность.",
      image: "/Renew/59.jpg",
      hoverImage: "/Renew/59.png",
      hoverFitContain: true,
      variants: [{ article: "2203050", volume: "50ml" }]
    },
    {
      id: "redness-mask",
      name: isGerman ? "Anti-Rötungen Maske" : "Маска против покраснений",
      description: isGerman
        ? "Kühlende Maske mit Aloe und Kamille. Sofortige Beruhigung bei Rötungen, Reizungen und Sonnenbrand. Spendet Feuchtigkeit und lindert Spannungsgefühl."
        : "Охлаждающая маска с алоэ и ромашкой. Мгновенное успокоение при покраснениях, раздражениях и солнечных ожогах. Увлажняет и снимает чувство стянутости.",
      image: "/Renew/60.png",
      hoverImage: "/Renew/60.1.jpeg",
      variants: [{ article: "2204070", volume: "70ml" }]
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
              {isGerman ? "Empfindliche Haut & Couperose" : "Чувствительная кожа и купероз"}
            </h1>
            <p className="text-lg text-brand-coffee/80 max-w-3xl mx-auto leading-relaxed">
              {isGerman
                ? "Spezialisierte Pflege für empfindliche Haut mit Rötungen und Couperose. Mit beruhigenden Wirkstoffen wie Vitamin K, Centella Asiatica und Kamille. Stärkt die Kapillaren, reduziert Rötungen und beruhigt irritierte Haut nachhaltig."
                : "Специализированный уход для чувствительной кожи с покраснениями и куперозом. С успокаивающими компонентами: витамином К, центеллой азиатской и ромашкой. Укрепляет капилляры, уменьшает покраснения и надолго успокаивает раздраженную кожу."}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div
                key={product.id}
                className="glass rounded-2xl overflow-hidden hover:shadow-luxury transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="aspect-square overflow-hidden relative group bg-white">
                  <img
                    src={product.image}
                    alt={product.name}
                    className={`w-full h-full transition-opacity duration-300 ${product.fitContain ? 'object-contain' : 'object-cover'} ${product.hoverImage ? 'group-hover:opacity-0' : ''}`}
                  />
                  {product.hoverImage && (
                    <img
                      src={product.hoverImage}
                      alt={product.name}
                      className={`absolute inset-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${product.hoverFitContain ? 'object-contain' : 'object-cover'}`}
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

export default SensitiveSkin;
