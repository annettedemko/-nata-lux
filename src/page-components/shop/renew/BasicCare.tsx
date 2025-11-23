'use client'

import { Link } from '@/components/LinkAdapter'
import { useLanguage } from '@/contexts/LanguageContext';
import { ProductCard } from '@/components/ProductCard';
import Image from 'next/image';

const BasicCare = () => {
  const { language } = useLanguage();
  const isGerman = language === 'de';

  const products = [
    {
      id: "enriched-moisturizing-cream",
      name: isGerman ? "Reichhaltige Feuchtigkeitscreme" : "Обогащенный увлажняющий крем",
      description: isGerman
        ? "Nährende Creme mit Sheabutter und Jojobaöl für intensive Feuchtigkeit. Ideal für trockene und normale Haut. Stärkt die Hautbarriere und hinterlässt die Haut weich und geschmeidig."
        : "Питательный крем с маслом ши и жожоба для интенсивного увлажнения. Идеально для сухой и нормальной кожи. Укрепляет кожный барьер и оставляет кожу мягкой и эластичной.",
      image: "/Renew/49.png",
      hoverImage: "/Renew/49.1.jpeg",
      variants: [{ article: "2001050", volume: "50ml" }]
    },
    {
      id: "aha-skin-repair",
      name: "AHA Skin Repair",
      description: isGerman
        ? "Reparierende Pflege mit Fruchtsäuren. Glättet raue Haut, verbessert die Textur und fördert die Zellerneuerung. Für ein ebenmäßiges, strahlendes Hautbild."
        : "Восстанавливающий уход с фруктовыми кислотами. Разглаживает грубую кожу, улучшает текстуру и способствует обновлению клеток. Для ровного сияющего цвета лица.",
      image: "/Renew/50.png",
      variants: [{ article: "2002050", volume: "50ml" }]
    },
    {
      id: "neck-decollete-cream",
      name: isGerman ? "Hals & Dekolleté Straffungscreme" : "Укрепляющий крем для шеи и декольте",
      description: isGerman
        ? "Spezielle Pflege für Hals und Dekolleté mit Peptiden und Vitamin E. Strafft erschlaffte Haut, reduziert Falten und verbessert die Hautelastizität in diesen empfindlichen Bereichen."
        : "Специальный уход за шеей и декольте с пептидами и витамином Е. Подтягивает дряблую кожу, уменьшает морщины и улучшает эластичность в этих деликатных зонах.",
      image: "/Renew/51.png",
      hoverImage: "/Renew/51.1.jpeg",
      variants: [{ article: "2003050", volume: "50ml" }]
    },
    {
      id: "restructuring-cream",
      name: isGerman ? "Restrukturierende Creme" : "Реструктурирующий крем",
      description: isGerman
        ? "Creme mit Ceramiden zur Wiederherstellung der Hautstruktur. Stärkt die Hautbarriere, repariert geschädigte Haut und schützt vor Feuchtigkeitsverlust."
        : "Крем с церамидами для восстановления структуры кожи. Укрепляет кожный барьер, восстанавливает поврежденную кожу и защищает от потери влаги.",
      image: "/Renew/52.jpeg",
      hoverImage: "/Renew/52.1.jpeg",
      variants: [{ article: "2004050", volume: "50ml" }]
    },
    {
      id: "multifruit-peel-soap",
      name: "Multifruit Peel Soap",
      description: isGerman
        ? "Peelingseife mit Mehrfachfruchtsäuren für die tägliche sanfte Hauterneuerung. Reinigt, peelt und verfeinert die Haut bei jeder Anwendung ohne zu reizen."
        : "Пилинг-мыло с мультифруктовыми кислотами для ежедневного мягкого обновления кожи. Очищает, отшелушивает и улучшает кожу при каждом применении без раздражения.",
      image: "/Renew/53.jpeg",
      hoverImage: "/Renew/53.1.jpeg",
      variants: [{ article: "2005100", volume: "100ml" }]
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
              {isGerman ? "Basispflege" : "Базовый уход"}
            </h1>
            <p className="text-lg text-brand-coffee/80 max-w-3xl mx-auto leading-relaxed">
              {isGerman
                ? "Grundlegende Pflegeprodukte für die tägliche Routine. Feuchtigkeitscremes, reparierende Pflege und spezielle Behandlungen für Hals und Dekolleté. Mit hochwertigen Inhaltsstoffen wie Ceramiden, Sheabutter und Fruchtsäuren für gesunde, gepflegte Haut."
                : "Базовые средства ухода для ежедневной рутины. Увлажняющие кремы, восстанавливающий уход и специальные процедуры для шеи и декольте. С качественными ингредиентами: церамидами, маслом ши и фруктовыми кислотами для здоровой ухоженной кожи."}
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
                  {product.variants.map((variant) => (
                    <p key={variant.article} className="text-sm text-brand-coffee/60">
                      Art. {variant.article} • {variant.volume}
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

export default BasicCare;
