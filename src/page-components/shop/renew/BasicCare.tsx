'use client'

import { Link } from '@/components/LinkAdapter'
import { useLanguage } from '@/contexts/LanguageContext';
import { ProductCard } from '@/components/ProductCard';
import Image from 'next/image';
import { ProductLineSchema } from '@/components/ProductLineSchema';

const BasicCare = () => {
  const { language } = useLanguage();

  const products = [
    {
      id: "enriched-moisturizing-cream",
      name: language === 'de' ? "Reichhaltige Feuchtigkeitscreme" : language === 'ru' ? "Обогащенный увлажняющий крем" : "Збагачений зволожувальний крем",
      description: language === 'de'
        ? "Nährende Creme mit Sheabutter und Jojobaöl für intensive Feuchtigkeit. Ideal für trockene und normale Haut. Stärkt die Hautbarriere und hinterlässt die Haut weich und geschmeidig."
        : language === 'ru' ? "Питательный крем с маслом ши и жожоба для интенсивного увлажнения. Идеально для сухой и нормальной кожи. Укрепляет кожный барьер и оставляет кожу мягкой и эластичной."
        : "Поживний крем з олією ши та жожоба для інтенсивного зволоження. Ідеально для сухої та нормальної шкіри. Зміцнює шкірний бар'єр та залишає шкіру м'якою та еластичною.",
      image: "/Renew/49.png",
      hoverImage: "/Renew/49.1.jpeg",
      variants: [{ volume: "50ml" }, { volume: "250ml" }]
    },
    {
      id: "aha-skin-repair",
      name: "AHA Skin Repair",
      description: language === 'de'
        ? "Reparierende Pflege mit Fruchtsäuren. Glättet raue Haut, verbessert die Textur und fördert die Zellerneuerung. Für ein ebenmäßiges, strahlendes Hautbild."
        : language === 'ru' ? "Восстанавливающий уход с фруктовыми кислотами. Разглаживает грубую кожу, улучшает текстуру и способствует обновлению клеток. Для ровного сияющего цвета лица."
        : "Відновлювальний догляд з фруктовими кислотами. Розгладжує грубу шкіру, покращує текстуру та сприяє оновленню клітин. Для рівного сяючого кольору обличчя.",
      image: "/Renew/50.png",
      variants: [{ volume: "50ml" }]
    },
    {
      id: "neck-decollete-cream",
      name: language === 'de' ? "Hals & Dekolleté Straffungscreme" : language === 'ru' ? "Укрепляющий крем для шеи и декольте" : "Зміцнювальний крем для шиї та декольте",
      description: language === 'de'
        ? "Spezielle Pflege für Hals und Dekolleté mit Peptiden und Vitamin E. Strafft erschlaffte Haut, reduziert Falten und verbessert die Hautelastizität in diesen empfindlichen Bereichen."
        : language === 'ru' ? "Специальный уход за шеей и декольте с пептидами и витамином Е. Подтягивает дряблую кожу, уменьшает морщины и улучшает эластичность в этих деликатных зонах."
        : "Спеціальний догляд за шиєю та декольте з пептидами та вітаміном Е. Підтягує в'ялу шкіру, зменшує зморшки та покращує еластичність у цих делікатних зонах.",
      image: "/Renew/51.png",
      hoverImage: "/Renew/51.1.jpeg",
      variants: [{ volume: "50ml" }, { volume: "250ml" }]
    },
    {
      id: "restructuring-cream",
      name: language === 'de' ? "Restrukturierende Creme" : language === 'ru' ? "Реструктурирующий крем" : "Реструктурувальний крем",
      description: language === 'de'
        ? "Creme mit Ceramiden zur Wiederherstellung der Hautstruktur. Stärkt die Hautbarriere, repariert geschädigte Haut und schützt vor Feuchtigkeitsverlust."
        : language === 'ru' ? "Крем с церамидами для восстановления структуры кожи. Укрепляет кожный барьер, восстанавливает поврежденную кожу и защищает от потери влаги."
        : "Крем з церамідами для відновлення структури шкіри. Зміцнює шкірний бар'єр, відновлює пошкоджену шкіру та захищає від втрати вологи.",
      image: "/Renew/52.jpeg",
      hoverImage: "/Renew/52.1.jpeg",
      variants: [{ volume: "50ml" }, { volume: "250ml" }]
    },
    {
      id: "multifruit-peel-soap",
      name: "Multifruit Peel Soap",
      description: language === 'de'
        ? "Peelingseife mit Mehrfachfruchtsäuren für die tägliche sanfte Hauterneuerung. Reinigt, peelt und verfeinert die Haut bei jeder Anwendung ohne zu reizen."
        : language === 'ru' ? "Пилинг-мыло с мультифруктовыми кислотами для ежедневного мягкого обновления кожи. Очищает, отшелушивает и улучшает кожу при каждом применении без раздражения."
        : "Пілінг-мило з мультифруктовими кислотами для щоденного м'якого оновлення шкіри. Очищує, відлущує та покращує шкіру при кожному застосуванні без подразнення.",
      image: "/Renew/53.jpeg",
      hoverImage: "/Renew/53.1.jpeg",
      variants: [{ volume: "250ml" }, { volume: "500ml" }]
    }
  ];

  return (
    <div className="relative min-h-screen">
      <ProductLineSchema lineName="Basic Care" products={products.map(p => ({ name: p.name, image: p.image }))} />
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
              {language === 'de' ? "Basispflege" : language === 'ru' ? "Базовый уход" : "Базовий догляд"}
            </h1>
            <p className="text-lg text-brand-coffee/80 max-w-3xl mx-auto leading-relaxed">
              {language === 'de'
                ? "Grundlegende Pflegeprodukte für die tägliche Routine. Feuchtigkeitscremes, reparierende Pflege und spezielle Behandlungen für Hals und Dekolleté. Mit hochwertigen Inhaltsstoffen wie Ceramiden, Sheabutter und Fruchtsäuren für gesunde, gepflegte Haut."
                : language === 'ru' ? "Базовые средства ухода для ежедневной рутины. Увлажняющие кремы, восстанавливающий уход и специальные процедуры для шеи и декольте. С качественными ингредиентами: церамидами, маслом ши и фруктовыми кислотами для здоровой ухоженной кожи."
                : "Базові засоби догляду для щоденної рутини. Зволожувальні креми, відновлювальний догляд та спеціальні процедури для шиї та декольте. З якісними інгредієнтами: церамідами, олією ши та фруктовими кислотами для здорової доглянутої шкіри."}
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

export default BasicCare;
