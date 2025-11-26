'use client'

import { Link } from '@/components/LinkAdapter'
import { useLanguage } from '@/contexts/LanguageContext';
import { ProductCard } from '@/components/ProductCard';
import Image from 'next/image';

const VitaminC = () => {
  const { language } = useLanguage();
  const isGerman = language === 'de';

  const products = [
    {
      id: "vitamin-c-gentle-foam",
      name: "Vitamin C Gentle Foam",
      description: isGerman
        ? "Zarter Schaum ideal zur Reinigung jeden Hauttyps. Reinigt sanft und effektiv, entfernt Make-up ohne die Haut auszutrocknen oder zu reizen. Enthält 3-O-Ethyl-Ascorbinsäure"
        : "Деликатная пенка идеально подходит для умывания кожи любого типа. Мягко и эффективно очищает, снимает макияж, не пересушивая и не раздражая кожу. Содержит 3-О-Ethyl аскорбиновую кислоту",
      image: "/Renew/69.jpeg",
      variants: [{ volume: "220ml" }]
    },
    {
      id: "vitamin-c-peel-lotion",
      name: "Vitamin C Peel Lotion",
      description: isGerman
        ? "Lotion mit pH 3,5 und 4% AHA-Säuren, 2% Salicylsäure zur effektiven Gesichtsreinigung und Vorbereitung auf weitere Produkte. Peelt sanft abgestorbene Hautzellen"
        : "Лосьон с рН 3,5 и содержанием АНА кислот 4%, салициловой кислоты 2% для эффективного очищения кожи лица и подготовки её к нанесению других препаратов. Мягко отшелушивает мертвые клетки",
      image: "/Renew/70.jpeg",
      hoverImage: "/Renew/70.1.jpeg",
      variants: [{ volume: "250ml" }, { volume: "500ml" }]
    },
    {
      id: "age-reverse-mask",
      name: "Age Reverse Mask",
      description: isGerman
        ? "Cremige Maske mit hoher Konzentration an stabilem Vitamin C in Kombination mit Silizium für normale Kollagensynthese und Schutz vor schädlichen Umwelteinflüssen"
        : "Маска приятной кремообразной текстуры с высокой концентрацией витамина С в стабильной форме в сочетании с кремнием для нормального синтеза коллагена и защиты от вредного воздействия",
      image: "/Renew/71.webp",
      hoverImage: "/Renew/71.1.jpeg",
      variants: [{ volume: "70ml" }, { volume: "250ml" }]
    },
    {
      id: "age-reverse-serum",
      name: "Age Reverse Serum",
      description: isGerman
        ? "Reichhaltiger Komplex natürlicher Extrakte und Öle mit reinem Vitamin C. Schützt die Haut vor schädlichen Umwelteinflüssen, neutralisiert freie Radikale, fördert die Kollagenproduktion"
        : "Богатый комплекс натуральных экстрактов и масел, содержащих чистый витамин С. Защищает кожу от вредного воздействия окружающей среды, нейтрализует свободные радикалы, способствует выработке коллагена",
      image: "/Renew/72.jpeg",
      hoverImage: "/Renew/72.1.jpeg",
      variants: [{ volume: "30ml" }, { volume: "100ml" }]
    },
    {
      id: "age-reverse-cream",
      name: "Age Reverse Cream",
      description: isGerman
        ? "Nährende Creme mit Vitamin C enthält einzigartige Kombination aktiver Inhaltsstoffe zur schnellen Regeneration und Pflege ohne komedogene Wirkung. Erneuert die Haut, gleicht Ton und Relief aus"
        : "Питательный крем с витамином С содержит уникальную композицию активных ингредиентов, способных быстро восстанавливать кожу и питать её без комедогенного воздействия. Обновляет кожу, выравнивает тон и рельеф",
      image: "/Renew/73.jpeg",
      hoverImage: "/Renew/73.1.jpeg",
      variants: [{ volume: "50ml" }, { volume: "250ml" }]
    },
    {
      id: "shining-eyes",
      name: "Shining Eyes",
      description: isGerman
        ? "Einzigartige Formel mit ausgewogener Zusammensetzung und idealer Textur. Leichte Textur hinterlässt keine Spuren, perfekte Make-up-Grundlage. Enthält stabiles fettlösliches Vitamin C und Peptidkomplex"
        : "Уникальная формула крема имеет сбалансированный состав и идеальную текстуру. Легкая текстура не оставляет следа после нанесения, отличная основа под макияж. Содержит витамин С в стабильной жирорастворимой форме и комплекс пептидов",
      image: "/Renew/74.jpeg",
      hoverImage: "/Renew/74.1.jpeg",
      hoverImagePosition: "center 25%",
      variants: [{ volume: "30ml" }, { volume: "150ml" }]
    },
    {
      id: "moisturizing-cream-spf25",
      name: isGerman ? "Feuchtigkeitscreme SPF-25" : "Увлажняющий крем SPF-25",
      description: isGerman
        ? "Zarte Feuchtigkeitscreme mit angenehmem Zitrusduft zieht schnell ein ohne Fettgefühl. Hohe Konzentration an stabilem fettlöslichem Vitamin C als starkes Antioxidans. SPF-25"
        : "Нежный увлажняющий крем с приятным цитрусовым ароматом быстро впитывается, не оставляя ощущения жирности. Высокая концентрация витамина С в стабильной жирорастворимой форме как мощный антиоксидант. SPF-25",
      image: "/Renew/75.png",
      hoverImage: "/Renew/75.1.jpeg",
      variants: [{ volume: "50ml" }, { volume: "250ml" }]
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
              Vitamin C
            </h1>
            <p className="text-lg text-brand-coffee/80 max-w-3xl mx-auto leading-relaxed">
              {isGerman
                ? "Antioxidative Linie mit stabilem Vitamin C für strahlende Haut. Schützt vor schädlichen Umwelteinflüssen, fördert die Kollagenproduktion und gleicht den Hautton aus."
                : "Антиоксидантная линия со стабильным витамином С для сияющей кожи. Защищает от вредного воздействия окружающей среды, стимулирует выработку коллагена и выравнивает тон кожи."}
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

export default VitaminC;
