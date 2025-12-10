'use client'

import { Link } from '@/components/LinkAdapter'
import { useLanguage } from '@/contexts/LanguageContext';
import { ProductCard } from '@/components/ProductCard';
import Image from 'next/image';

const SunProtection = () => {
  const { language } = useLanguage();
  const isGerman = language === 'de';

  const products = [
    {
      id: "sunscreen-spf30-demi-makeup",
      name: "Sunscreen SPF-30 Demi Make-Up",
      description: isGerman
        ? "Getönter Sonnenschutz mit SPF 30. Vereinheitlicht den Teint, schützt vor UVA/UVB-Strahlung und verleiht einen natürlichen, gepflegten Look. Ideal als Make-up-Basis."
        : "Тонированный солнцезащитный крем с SPF 30. Выравнивает тон кожи, защищает от UVA/UVB-излучения и придает естественный ухоженный вид. Идеально как основа под макияж.",
      image: "/Renew/54.jpeg",
      variants: [{ volume: "80ml" }]
    },
    {
      id: "sunscreen-spf50",
      name: "Sunscreen SPF-50",
      description: isGerman
        ? "Maximaler Sonnenschutz mit SPF 50 für empfindliche Haut und intensive Sonneneinstrahlung. Leichte Textur, wasserfest und nicht komedogen. Schützt vor Photoaging."
        : "Максимальная защита от солнца с SPF 50 для чувствительной кожи и интенсивного солнечного излучения. Легкая текстура, водостойкий и некомедогенный. Защищает от фотостарения.",
      image: "/Renew/55.jpeg",
      variants: [{ volume: "80ml" }]
    },
    {
      id: "sunscreen-spf30",
      name: "Sunscreen SPF-30",
      description: isGerman
        ? "Leichter täglicher Sonnenschutz mit SPF 30. Zieht schnell ein, hinterlässt keinen weißen Film und eignet sich für alle Hauttypen. Täglicher Schutz vor UV-Strahlung."
        : "Легкий ежедневный солнцезащитный крем с SPF 30. Быстро впитывается, не оставляет белых следов и подходит для всех типов кожи. Ежедневная защита от УФ-излучения.",
      image: "/Renew/56.jpeg",
      variants: [{ volume: "80ml" }]
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
              {language === 'de' ? "Sonnenschutz" : language === 'ru' ? "Защита от солнца" : "Защита от солнца"}
            </h1>
            <p className="text-lg text-brand-coffee/80 max-w-3xl mx-auto leading-relaxed">
              {isGerman
                ? "Professioneller Sonnenschutz gegen UV-Strahlung und Photoaging. SPF 30 bis SPF 50 für unterschiedliche Bedürfnisse - von leichtem täglichem Schutz bis zu maximaler Protektion. Schützt vor vorzeitiger Hautalterung, Pigmentflecken und Sonnenschäden."
                : "Профессиональная защита от солнца против УФ-излучения и фотостарения. SPF 30 до SPF 50 для разных потребностей - от легкой ежедневной защиты до максимальной протекции. Защищает от преждевременного старения кожи, пигментных пятен и солнечных повреждений."}
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

export default SunProtection;
