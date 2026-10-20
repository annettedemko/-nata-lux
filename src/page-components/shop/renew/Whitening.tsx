'use client'

import { Link } from '@/components/LinkAdapter'
import { useLanguage } from '@/contexts/LanguageContext';
import { ProductCard } from '@/components/ProductCard';
import Image from 'next/image';
import { ProductLineSchema } from '@/components/ProductLineSchema';

const Whitening = () => {
  const { language } = useLanguage();
  const isGerman = language === 'de';

  const products = [
    {
      id: "aha-bha-lotion",
      name: "AHA & BHA Lotion",
      description: language === 'de'
        ? "Aufhellende Lotion mit AHA- und BHA-Säuren. Entfernt abgestorbene Hautzellen, hellt Pigmentflecken auf und sorgt für einen ebenmäßigen Teint. Wirkstoffe: Glykolsäure, Salicylsäure, Arbutin."
        : language === 'ru' ? "Осветляющий лосьон с AHA и BHA кислотами. Удаляет омертвевшие клетки кожи, осветляет пигментные пятна и выравнивает тон кожи. Активные ингредиенты: гликолевая кислота, салициловая кислота, арбутин."
        : "Освітлювальний лосьйон з AHA та BHA кислотами. Видаляє омертвілі клітини шкіри, освітлює пігментні плями та вирівнює тон шкіри. Активні інгредієнти: гліколева кислота, саліцилова кислота, арбутин.",
      image: "/Renew/renew-whitening-produkt-1.png",
      hoverImage: "/Renew/renew-whitening-produkt-1-detail.jpeg",
      variants: [
        { volume: "250ml" },
        { volume: "500ml" }
      ]
    },
    {
      id: "depigmenting-mask",
      name: language === 'de' ? "Depigmentierende Maske" : language === 'ru' ? "Депигментирующая маска" : "Депігментувальна маска",
      description: language === 'de'
        ? "Intensive Maske mit Arbutin und Vitamin C. Reduziert Hyperpigmentierung und verleiht der Haut Ausstrahlung. Ideal bei Altersflecken, Melasma und ungleichmäßigem Teint."
        : language === 'ru' ? "Интенсивная маска с арбутином и витамином С. Уменьшает гиперпигментацию и придает коже сияние. Идеально при возрастных пятнах, мелазме и неровном тоне кожи."
        : "Інтенсивна маска з арбутином та вітаміном С. Зменшує гіперпігментацію та надає шкірі сяйво. Ідеально при вікових плямах, мелазмі та нерівному тоні шкіри.",
      image: "/Renew/renew-whitening-produkt-2.png",
      hoverImage: "/Renew/renew-whitening-produkt-2-detail.jpeg",
      variants: [
        { volume: "70ml" },
        { volume: "250ml" }
      ]
    },
    {
      id: "depigmenting-serum",
      name: language === 'de' ? "Depigmentierendes Serum" : language === 'ru' ? "Депигментирующая сыворотка" : "Депігментувальна сироватка",
      description: language === 'de'
        ? "Hochkonzentriertes Serum mit Kojisäure und Niacinamid. Hemmt die Melaninproduktion und hellt bestehende Pigmentflecken auf. Für sichtbare Ergebnisse in 4-6 Wochen."
        : language === 'ru' ? "Высококонцентрированная сыворотка с койевой кислотой и ниацинамидом. Подавляет выработку меланина и осветляет существующие пигментные пятна. Видимые результаты через 4-6 недель."
        : "Висококонцентрована сироватка з коєвою кислотою та ніацинамідом. Пригнічує вироблення меланіну та освітлює наявні пігментні плями. Видимі результати через 4-6 тижнів.",
      image: "/Renew/renew-whitening-produkt-3.png",
      variants: [
        { volume: "30ml" }
      ]
    },
    {
      id: "depigmenting-cream",
      name: language === 'de' ? "Depigmentierende Creme" : language === 'ru' ? "Депигментирующий крем" : "Депігментувальний крем",
      description: language === 'de'
        ? "Tägliche Pflegecreme mit aufhellenden Wirkstoffen. Schützt vor neuer Pigmentierung und pflegt die Haut intensiv. Mit Vitamin C, Arbutin und Süßholzwurzelextrakt."
        : language === 'ru' ? "Ежедневный крем с осветляющими компонентами. Защищает от новой пигментации и интенсивно ухаживает за кожей. С витамином С, арбутином и экстрактом корня солодки."
        : "Щоденний крем з освітлювальними компонентами. Захищає від нової пігментації та інтенсивно доглядає за шкірою. З вітаміном С, арбутином та екстрактом кореня солодки.",
      image: "/Renew/renew-whitening-produkt-4.png",
      variants: [
        { volume: "50ml" }
      ]
    }
  ];

  return (
    <div className="relative min-h-screen">
      <ProductLineSchema lineName="Whitening" products={products.map(p => ({ name: p.name, image: p.image }))} />
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
              {language === 'de' ? "Aufhellung & Pigmentierung" : language === 'ru' ? "Осветление и пигментация" : "Освітлення та пігментація"}
            </h1>
            <p className="text-lg text-brand-coffee/80 max-w-3xl mx-auto leading-relaxed">
              {language === 'de'
                ? "RENEW Whitening - Professionelle Produkte gegen Pigmentflecken, Altersflecken und Hyperpigmentierung. Die Linie enthält hochwirksame aufhellende Wirkstoffe wie Arbutin, Kojisäure, Vitamin C und Niacinamid für einen ebenmäßigen, strahlenden Teint."
                : language === 'ru' ? "RENEW Whitening - Профессиональные средства против пигментных пятен, возрастных пятен и гиперпигментации. Линия содержит высокоэффективные осветляющие компоненты: арбутин, койевую кислоту, витамин С и ниацинамид для ровного сияющего тона кожи."
                : "RENEW Whitening - Професійні засоби проти пігментних плям, вікових плям та гіперпігментації. Лінія містить високоефективні освітлювальні компоненти: арбутин, коєву кислоту, вітамін С та ніацинамід для рівного сяючого тону шкіри."}
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

export default Whitening;
