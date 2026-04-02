'use client'

import { Link } from '@/components/LinkAdapter'
import { useLanguage } from '@/contexts/LanguageContext';
import { ProductCard } from '@/components/ProductCard';
import Image from 'next/image';
import { ProductLineSchema } from '@/components/ProductLineSchema';

const SensitiveSkin = () => {
  const { language } = useLanguage();
  const isGerman = language === 'de';

  const products = [
    {
      id: "redness-concentrate",
      name: language === 'de' ? "Rötungen Konzentrat" : language === 'ru' ? "Концентрат против покраснений" : "Концентрат проти почервонінь",
      description: language === 'de'
        ? "Konzentrat mit Vitamin K und Arnika. Stärkt die Kapillarwände, reduziert Rötungen und Couperose. Verbessert sichtbar das Erscheinungsbild von erweiterten Äderchen."
        : language === 'ru' ? "Концентрат с витамином К и арникой. Укрепляет стенки капилляров, уменьшает покраснения и купероз. Заметно улучшает вид расширенных сосудов."
        : "Концентрат з вітаміном К та арнікою. Зміцнює стінки капілярів, зменшує почервоніння та купероз. Помітно покращує вигляд розширених судин.",
      image: "/Renew/57.png",
      hoverImage: "/Renew/57.1.jpeg",
      variants: [{ volume: "30ml" }]
    },
    {
      id: "redness-gentle-peel",
      name: language === 'de' ? "Sanftes Peeling für Rötungen" : language === 'ru' ? "Мягкий пилинг для чувствительной кожи" : "М'який пілінг для чутливої шкіри",
      description: language === 'de'
        ? "Extra sanftes Peeling speziell für empfindliche Haut mit Rötungen. Mit beruhigenden Wirkstoffen wie Bisabolol und Allantoin. Erneuert die Haut ohne Irritation."
        : language === 'ru' ? "Экстра мягкий пилинг специально для чувствительной кожи с покраснениями. С успокаивающими компонентами: бисабололом и аллантоином. Обновляет кожу без раздражения."
        : "Екстра м'який пілінг спеціально для чутливої шкіри з почервоніннями. З заспокійливими компонентами: бісабололом та алантоїном. Оновлює шкіру без подразнення.",
      image: "/Renew/58.jpg",
      variants: [{ volume: "50ml" }]
    },
    {
      id: "redness-balm",
      name: language === 'de' ? "Beruhigender Balsam" : language === 'ru' ? "Успокаивающий бальзам" : "Заспокійливий бальзам",
      description: language === 'de'
        ? "Beruhigender Balsam mit Centella Asiatica für gerötete und irritierte Haut. Lindert Irritationen, stärkt die Hautbarriere und reduziert Empfindlichkeit langfristig."
        : language === 'ru' ? "Успокаивающий бальзам с центеллой азиатской для покрасневшей и раздраженной кожи. Снимает раздражение, укрепляет кожный барьер и долгосрочно уменьшает чувствительность."
        : "Заспокійливий бальзам з центелою азіатською для почервонілої та подразненої шкіри. Знімає подразнення, зміцнює шкірний бар'єр та довгостроково зменшує чутливість.",
      image: "/Renew/59.jpg",
      hoverImage: "/Renew/59.png",
      hoverFitContain: true,
      variants: [{ volume: "50ml" }]
    },
    {
      id: "redness-mask",
      name: language === 'de' ? "Anti-Rötungen Maske" : language === 'ru' ? "Маска против покраснений" : "Маска проти почервонінь",
      description: language === 'de'
        ? "Kühlende Maske mit Aloe und Kamille. Sofortige Beruhigung bei Rötungen, Reizungen und Sonnenbrand. Spendet Feuchtigkeit und lindert Spannungsgefühl."
        : language === 'ru' ? "Охлаждающая маска с алоэ и ромашкой. Мгновенное успокоение при покраснениях, раздражениях и солнечных ожогах. Увлажняет и снимает чувство стянутости."
        : "Охолоджувальна маска з алое та ромашкою. Миттєве заспокоєння при почервоніннях, подразненнях та сонячних опіках. Зволожує та знімає відчуття стягнутості.",
      image: "/Renew/60.png",
      hoverImage: "/Renew/60.1.jpeg",
      variants: [{ volume: "70ml" }, { volume: "250ml" }]
    }
  ];

  return (
    <div className="relative min-h-screen">
      <ProductLineSchema lineName="Sensitive Skin" products={products.map(p => ({ name: p.name, image: p.image }))} />
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
              {language === 'de' ? "Empfindliche Haut & Couperose" : language === 'ru' ? "Чувствительная кожа и купероз" : "Чутлива шкіра та купероз"}
            </h1>
            <p className="text-lg text-brand-coffee/80 max-w-3xl mx-auto leading-relaxed">
              {language === 'de'
                ? "Spezialisierte Pflege für empfindliche Haut mit Rötungen und Couperose. Mit beruhigenden Wirkstoffen wie Vitamin K, Centella Asiatica und Kamille. Stärkt die Kapillaren, reduziert Rötungen und beruhigt irritierte Haut nachhaltig."
                : language === 'ru' ? "Специализированный уход для чувствительной кожи с покраснениями и куперозом. С успокаивающими компонентами: витамином К, центеллой азиатской и ромашкой. Укрепляет капилляры, уменьшает покраснения и надолго успокаивает раздраженную кожу."
                : "Спеціалізований догляд для чутливої шкіри з почервоніннями та куперозом. З заспокійливими компонентами: вітаміном К, центелою азіатською та ромашкою. Зміцнює капіляри, зменшує почервоніння та надовго заспокоює подразнену шкіру."}
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
