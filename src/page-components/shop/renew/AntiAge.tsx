'use client'

import { Link } from '@/components/LinkAdapter'
import { useLanguage } from '@/contexts/LanguageContext';
import { ProductCard } from '@/components/ProductCard';
import Image from 'next/image';

const AntiAge = () => {
  const { language } = useLanguage();
  const isGerman = language === 'de';

  const products = [
    // Anti Age Line
    {
      id: "anti-aging-firming-mask",
      name: language === 'de' ? "Anti-Aging Straffende Maske" : language === 'ru' ? "Антивозрастная укрепляющая маска" : "Антивозрастная укрепляющая маска",
      line: "Anti Age",
      description: isGerman
        ? "Straffende Maske mit Kollagen und Elastin. Sofortiger Lifting-Effekt und intensive Feuchtigkeitsversorgung. Ideal vor besonderen Anlässen."
        : "Укрепляющая маска с коллагеном и эластином. Мгновенный лифтинг-эффект и интенсивное увлажнение. Идеально перед особыми мероприятиями.",
      image: "/Renew/10.png",
      hoverImage: "/Renew/10.1.jpeg",
      variants: [{ volume: "50ml" }, { volume: "250ml" }]
    },
    {
      id: "intense-skin-revitalizer",
      name: "Intense Skin Revitalizer",
      line: "Anti Age",
      description: isGerman
        ? "Intensivserum mit Stammzellen-Extrakt. Stimuliert die Zellerneuerung und verjüngt die Haut von innen. Sichtbare Ergebnisse nach 2 Wochen."
        : "Интенсивная сыворотка с экстрактом стволовых клеток. Стимулирует обновление клеток и омолаживает кожу изнутри. Видимые результаты через 2 недели.",
      image: "/Renew/11.png",
      variants: [{ volume: "30ml" }]
    },
    {
      id: "restoring-eye-cream",
      name: language === 'de' ? "Regenerierende Augencreme" : language === 'ru' ? "Восстанавливающий крем для глаз" : "Восстанавливающий крем для глаз",
      line: "Anti Age",
      description: isGerman
        ? "Regenerierende Augencreme mit Peptiden. Glättet Fältchen, festigt die empfindliche Augenpartie und reduziert Anzeichen von Müdigkeit."
        : "Восстанавливающий крем для глаз с пептидами. Разглаживает морщинки, укрепляет нежную кожу вокруг глаз и уменьшает признаки усталости.",
      image: "/Renew/12.png",
      hoverImage: "/Renew/12.1.jpeg",
      variants: [{ volume: "30ml" }, { volume: "250ml" }]
    },
    {
      id: "aqua-vital-cream",
      name: "Aqua Vital Revitalizing Cream",
      line: "Anti Age",
      description: isGerman
        ? "Revitalisierende Creme mit Hyaluronsäure. Durchfeuchtet alle Hautschichten, polstert Falten auf und verleiht der Haut neue Vitalität."
        : "Ревитализирующий крем с гиалуроновой кислотой. Увлажняет все слои кожи, заполняет морщины и придает коже новую жизненную силу.",
      image: "/Renew/13.png",
      hoverImage: "/Renew/13.1.jpeg",
      variants: [{ volume: "50ml" }, { volume: "250ml" }]
    },
    {
      id: "energy-refill-cream",
      name: "Energy Refill Anti Aging Cream",
      line: "Anti Age",
      description: isGerman
        ? "Energiespendende Creme mit Coenzym Q10. Belebt müde Haut, schützt vor freien Radikalen und verleiht neue Energie und Ausstrahlung."
        : "Энергетический крем с коэнзимом Q10. Оживляет уставшую кожу, защищает от свободных радикалов и придает новую энергию и сияние.",
      image: "/Renew/14.png",
      hoverImage: "/Renew/14.1.jpeg",
      variants: [{ volume: "50ml" }, { volume: "250ml" }]
    },
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
              Anti Age
            </h1>
            <p className="text-lg text-brand-coffee/80 max-w-3xl mx-auto leading-relaxed">
              {isGerman
                ? "Verjüngung für erste Zeichen der Hautalterung 35+. Mit Kollagen, Elastin, Stammzellen-Extrakt und Coenzym Q10."
                : "Омоложение для первых признаков старения 35+. С коллагеном, эластином, экстрактом стволовых клеток и коэнзимом Q10."}
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
                <span className="text-xs font-medium text-brand-rose uppercase tracking-wider">
                  {product.line}
                </span>
                <h3 className="text-xl font-heading font-semibold text-brand-espresso mb-2 mt-1">
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

export default AntiAge;
