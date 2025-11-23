'use client'

import { Link } from '@/components/LinkAdapter'
import { useLanguage } from '@/contexts/LanguageContext';
import Image from 'next/image';

const Whitening = () => {
  const { language } = useLanguage();
  const isGerman = language === 'de';

  const products = [
    {
      id: "aha-bha-lotion",
      name: "AHA & BHA Lotion",
      description: isGerman
        ? "Aufhellende Lotion mit AHA- und BHA-Säuren. Entfernt abgestorbene Hautzellen, hellt Pigmentflecken auf und sorgt für einen ebenmäßigen Teint. Wirkstoffe: Glykolsäure, Salicylsäure, Arbutin."
        : "Осветляющий лосьон с AHA и BHA кислотами. Удаляет омертвевшие клетки кожи, осветляет пигментные пятна и выравнивает тон кожи. Активные ингредиенты: гликолевая кислота, салициловая кислота, арбутин.",
      image: "/Renew/1.png",
      hoverImage: "/Renew/1.1.jpeg",
      variants: [
        { article: "1202200", volume: "200ml" },
        { article: "1202500", volume: "500ml" }
      ]
    },
    {
      id: "depigmenting-mask",
      name: isGerman ? "Depigmentierende Maske" : "Депигментирующая маска",
      description: isGerman
        ? "Intensive Maske mit Arbutin und Vitamin C. Reduziert Hyperpigmentierung und verleiht der Haut Ausstrahlung. Ideal bei Altersflecken, Melasma und ungleichmäßigem Teint."
        : "Интенсивная маска с арбутином и витамином С. Уменьшает гиперпигментацию и придает коже сияние. Идеально при возрастных пятнах, мелазме и неровном тоне кожи.",
      image: "/Renew/2.png",
      hoverImage: "/Renew/2.1.jpeg",
      variants: [
        { article: "1203250", volume: "250ml" },
        { article: "1203070", volume: "70ml" }
      ]
    },
    {
      id: "depigmenting-serum",
      name: isGerman ? "Depigmentierendes Serum" : "Депигментирующая сыворотка",
      description: isGerman
        ? "Hochkonzentriertes Serum mit Kojisäure und Niacinamid. Hemmt die Melaninproduktion und hellt bestehende Pigmentflecken auf. Für sichtbare Ergebnisse in 4-6 Wochen."
        : "Высококонцентрированная сыворотка с койевой кислотой и ниацинамидом. Подавляет выработку меланина и осветляет существующие пигментные пятна. Видимые результаты через 4-6 недель.",
      image: "/Renew/3.png",
      variants: [
        { article: "1204030", volume: "30ml" }
      ]
    },
    {
      id: "depigmenting-cream",
      name: isGerman ? "Depigmentierende Creme" : "Депигментирующий крем",
      description: isGerman
        ? "Tägliche Pflegecreme mit aufhellenden Wirkstoffen. Schützt vor neuer Pigmentierung und pflegt die Haut intensiv. Mit Vitamin C, Arbutin und Süßholzwurzelextrakt."
        : "Ежедневный крем с осветляющими компонентами. Защищает от новой пигментации и интенсивно ухаживает за кожей. С витамином С, арбутином и экстрактом корня солодки.",
      image: "/Renew/4.png",
      variants: [
        { article: "1206050", volume: "50ml" }
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
              ← {isGerman ? "Zurück zum Shop" : "Назад в магазин"}
            </Link>
            <h1 className="text-4xl md:text-5xl font-heading font-semibold text-brand-espresso mb-4">
              {isGerman ? "Aufhellung & Pigmentierung" : "Осветление и пигментация"}
            </h1>
            <p className="text-lg text-brand-coffee/80 max-w-3xl mx-auto leading-relaxed">
              {isGerman
                ? "RENEW Whitening - Professionelle Produkte gegen Pigmentflecken, Altersflecken und Hyperpigmentierung. Die Linie enthält hochwirksame aufhellende Wirkstoffe wie Arbutin, Kojisäure, Vitamin C und Niacinamid für einen ebenmäßigen, strahlenden Teint."
                : "RENEW Whitening - Профессиональные средства против пигментных пятен, возрастных пятен и гиперпигментации. Линия содержит высокоэффективные осветляющие компоненты: арбутин, койевую кислоту, витамин С и ниацинамид для ровного сияющего тона кожи."}
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

export default Whitening;
