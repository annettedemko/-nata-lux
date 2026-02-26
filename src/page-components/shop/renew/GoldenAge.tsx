'use client'

import { Link } from '@/components/LinkAdapter'
import { useLanguage } from '@/contexts/LanguageContext';
import { ProductCard } from '@/components/ProductCard';
import Image from 'next/image';
import { ProductLineSchema } from '@/components/ProductLineSchema';

const GoldenAge = () => {
  const { language } = useLanguage();
  const isGerman = language === 'de';

  const products = [
    {
      id: "massage-multivitamin-serum",
      name: "Massage Multivitamin Serum",
      description: language === 'de'
        ? "Reichhaltiges Massageserum mit Vitaminen A, C, E. Nährt die Haut während der Massage und fördert die Durchblutung. Ideal für Anti-Aging Gesichtsmassagen."
        : language === 'ru'
        ? "Богатая массажная сыворотка с витаминами A, C, E. Питает кожу во время массажа и улучшает кровообращение. Идеально для антивозрастного массажа лица."
        : "Багата масажна сироватка з вітамінами A, C, E. Живить шкіру під час масажу та покращує кровообіг. Ідеально для антивікового масажу обличчя.",
      image: "/Renew/5.jpeg",
      variants: [{ volume: "100ml" }]
    },
    {
      id: "multivitamin-serum",
      name: "Multivitamin Serum",
      description: language === 'de'
        ? "Konzentriertes Anti-Aging Serum mit Multivitaminkomplex. Strafft die Haut, reduziert Falten und verbessert die Hautelastizität. Für reife Haut 50+."
        : language === 'ru'
        ? "Концентрированная антивозрастная сыворотка с мультивитаминным комплексом. Подтягивает кожу, уменьшает морщины и улучшает эластичность. Для зрелой кожи 50+."
        : "Концентрована антивікова сироватка з мультивітамінним комплексом. Підтягує шкіру, зменшує зморшки та покращує еластичність. Для зрілої шкіри 50+.",
      image: "/Renew/6.png",
      variants: [{ volume: "30ml" }]
    },
    {
      id: "eye-contour-cream-golden",
      name: language === 'de' ? "Augenkonturcreme" : language === 'ru' ? "Крем для контура глаз" : "Крем для контуру очей",
      description: language === 'de'
        ? "Spezielle Augenpflege mit Peptiden und Hyaluronsäure. Reduziert Schwellungen, dunkle Augenringe und Krähenfüße. Strafft die empfindliche Augenpartie."
        : language === 'ru'
        ? "Специальный уход за глазами с пептидами и гиалуроновой кислотой. Уменьшает отечность, темные круги и гусиные лапки. Подтягивает нежную кожу вокруг глаз."
        : "Спеціальний догляд за очима з пептидами та гіалуроновою кислотою. Зменшує набряклість, темні кола та гусячі лапки. Підтягує ніжну шкіру навколо очей.",
      image: "/Renew/7.png",
      hoverImage: "/Renew/7.1.jpeg",
      variants: [
        { volume: "30ml" },
        { volume: "250ml" }
      ]
    },
    {
      id: "night-active-cream",
      name: language === 'de' ? "Nachtaktive Creme" : language === 'ru' ? "Ночной активный крем" : "Нічний активний крем",
      description: language === 'de'
        ? "Intensive Nachtcreme mit Retinol und Kollagen. Regeneriert die Haut während des Schlafs, glättet Falten und verbessert die Hautstruktur."
        : language === 'ru'
        ? "Интенсивный ночной крем с ретинолом и коллагеном. Восстанавливает кожу во время сна, разглаживает морщины и улучшает текстуру кожи."
        : "Інтенсивний нічний крем з ретинолом та колагеном. Відновлює шкіру під час сну, розгладжує зморшки та покращує текстуру шкіри.",
      image: "/Renew/8.png",
      hoverImage: "/Renew/8.1.jpeg",
      variants: [
        { volume: "50ml" },
        { volume: "250ml" }
      ]
    },
    {
      id: "lifting-moisturizing-cream",
      name: language === 'de' ? "Lifting Feuchtigkeitscreme" : language === 'ru' ? "Лифтинг увлажняющий крем" : "Ліфтинг зволожувальний крем",
      description: language === 'de'
        ? "Tagescreme mit sofortigem Lifting-Effekt. Spendet Feuchtigkeit, strafft die Gesichtskonturen und schützt vor Umwelteinflüssen."
        : language === 'ru'
        ? "Дневной крем с мгновенным лифтинг-эффектом. Увлажняет, подтягивает контуры лица и защищает от воздействия окружающей среды."
        : "Денний крем з миттєвим ліфтинг-ефектом. Зволожує, підтягує контури обличчя та захищає від впливу навколишнього середовища.",
      image: "/Renew/9.png",
      hoverImage: "/Renew/9.1.jpeg",
      variants: [
        { volume: "50ml" },
        { volume: "250ml" }
      ]
    }
  ];

  return (
    <div className="relative min-h-screen">
      <ProductLineSchema lineName="Golden Age" products={products.map(p => ({ name: p.name, image: p.image }))} />
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
              ← {language === 'de' ? "Zurück zum Shop" : language === 'ru' ? "Назад в магазин" : "Назад до магазину"}
            </Link>
            <h1 className="text-4xl md:text-5xl font-heading font-semibold text-brand-espresso mb-4">
              Golden Age
            </h1>
            <p className="text-lg text-brand-coffee/80 max-w-3xl mx-auto leading-relaxed">
              {language === 'de'
                ? "Premium Anti-Aging Linie für reife Haut 50+. Mit Gold, Peptiden und Multivitaminkomplex für intensive Verjüngung, Straffung und Lifting-Effekt."
                : language === 'ru'
                ? "Премиум антивозрастная линия для зрелой кожи 50+. С золотом, пептидами и мультивитаминным комплексом для интенсивного омоложения, подтяжки и лифтинг-эффекта."
                : "Преміум антивікова лінія для зрілої шкіри 50+. Із золотом, пептидами та мультивітамінним комплексом для інтенсивного омолодження, підтяжки та ліфтинг-ефекту."}
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

export default GoldenAge;
