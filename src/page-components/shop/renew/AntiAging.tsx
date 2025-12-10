'use client'

import { Link } from '@/components/LinkAdapter'
import { useLanguage } from '@/contexts/LanguageContext';
import Image from 'next/image';

const AntiAging = () => {
  const { language } = useLanguage();
  const isGerman = language === 'de';

  const products = [
    // Golden Age Line
    {
      id: "massage-multivitamin-serum",
      name: "Massage Multivitamin Serum",
      line: "Golden Age",
      description: isGerman
        ? "Reichhaltiges Massageserum mit Vitaminen A, C, E. Nährt die Haut während der Massage und fördert die Durchblutung. Ideal für Anti-Aging Gesichtsmassagen."
        : "Богатая массажная сыворотка с витаминами A, C, E. Питает кожу во время массажа и улучшает кровообращение. Идеально для антивозрастного массажа лица.",
      image: "/Renew/5.jpeg",
      variants: [{ volume: "250ml" }]
    },
    {
      id: "multivitamin-serum",
      name: "Multivitamin Serum",
      line: "Golden Age",
      description: isGerman
        ? "Konzentriertes Anti-Aging Serum mit Multivitaminkomplex. Strafft die Haut, reduziert Falten und verbessert die Hautelastizität. Für reife Haut 50+."
        : "Концентрированная антивозрастная сыворотка с мультивитаминным комплексом. Подтягивает кожу, уменьшает морщины и улучшает эластичность. Для зрелой кожи 50+.",
      image: "/Renew/6.png",
      variants: [{ volume: "30ml" }]
    },
    {
      id: "eye-contour-cream-golden",
      name: language === 'de' ? "Augenkonturcreme" : language === 'ru' ? "Крем для контура глаз" : "Крем для контура глаз",
      line: "Golden Age",
      description: isGerman
        ? "Spezielle Augenpflege mit Peptiden und Hyaluronsäure. Reduziert Schwellungen, dunkle Augenringe und Krähenfüße. Strafft die empfindliche Augenpartie."
        : "Специальный уход за глазами с пептидами и гиалуроновой кислотой. Уменьшает отечность, темные круги и гусиные лапки. Подтягивает нежную кожу вокруг глаз.",
      image: "/Renew/7.png",
      hoverImage: "/Renew/7.1.jpeg",
      variants: [{ volume: "30ml" }]
    },
    {
      id: "night-active-cream",
      name: language === 'de' ? "Nachtaktive Creme" : language === 'ru' ? "Ночной активный крем" : "Ночной активный крем",
      line: "Golden Age",
      description: isGerman
        ? "Intensive Nachtcreme mit Retinol und Kollagen. Regeneriert die Haut während des Schlafs, glättet Falten und verbessert die Hautstruktur."
        : "Интенсивный ночной крем с ретинолом и коллагеном. Восстанавливает кожу во время сна, разглаживает морщины и улучшает текстуру кожи.",
      image: "/Renew/8.png",
      hoverImage: "/Renew/8.1.jpeg",
      variants: [{ volume: "50ml" }]
    },
    {
      id: "lifting-moisturizing-cream",
      name: language === 'de' ? "Lifting Feuchtigkeitscreme" : language === 'ru' ? "Лифтинг увлажняющий крем" : "Лифтинг увлажняющий крем",
      line: "Golden Age",
      description: isGerman
        ? "Tagescreme mit sofortigem Lifting-Effekt. Spendet Feuchtigkeit, strafft die Gesichtskonturen und schützt vor Umwelteinflüssen."
        : "Дневной крем с мгновенным лифтинг-эффектом. Увлажняет, подтягивает контуры лица и защищает от воздействия окружающей среды.",
      image: "/Renew/9.png",
      hoverImage: "/Renew/9.1.jpeg",
      variants: [{ volume: "50ml" }]
    },
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
      variants: [{ volume: "250ml" }, { volume: "70ml" }]
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
      variants: [{ volume: "30ml" }]
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
      variants: [{ volume: "50ml" }]
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
      variants: [{ volume: "50ml" }]
    },
    // Retinol Line
    {
      id: "rejuvenating-serum-retinol",
      name: language === 'de' ? "Verjüngendes Retinol Serum" : language === 'ru' ? "Омолаживающая сыворотка с ретинолом" : "Омолаживающая сыворотка с ретинолом",
      line: "Retinol",
      description: isGerman
        ? "Hochdosiertes Retinol-Serum. Beschleunigt die Zellerneuerung, glättet Falten und verfeinert die Poren. Abends auf die gereinigte Haut auftragen."
        : "Высокодозированная сыворотка с ретинолом. Ускоряет обновление клеток, разглаживает морщины и сужает поры. Наносить вечером на очищенную кожу.",
      image: "/Renew/15.jpeg",
      hoverImage: "/Renew/15.1.jpeg",
      variants: [{ volume: "30ml" }]
    },
    {
      id: "rejuvenating-cream-retinol",
      name: language === 'de' ? "Verjüngende Retinol Creme" : language === 'ru' ? "Омолаживающий крем с ретинолом" : "Омолаживающий крем с ретинолом",
      line: "Retinol",
      description: isGerman
        ? "Retinol-Creme für die Nacht. Mildert Pigmentflecken, verbessert die Hautstruktur und reduziert feine Linien. Mit Vitamin E für zusätzliche Pflege."
        : "Ночной крем с ретинолом. Осветляет пигментные пятна, улучшает текстуру кожи и уменьшает мелкие морщинки. С витамином Е для дополнительного ухода.",
      image: "/Renew/16.jpeg",
      hoverImage: "/Renew/16.1.jpeg",
      variants: [{ volume: "50ml" }]
    },
    // Biorepair Pro Line
    {
      id: "aczen",
      name: "Aczen",
      line: "Biorepair Pro",
      description: isGerman
        ? "Anti-Akne Konzentrat mit Azelainsäure und Salicylsäure. Reguliert Talgproduktion, bekämpft Entzündungen und verhindert neue Unreinheiten."
        : "Концентрат против акне с азелаиновой и салициловой кислотами. Регулирует выработку кожного сала, борется с воспалениями и предотвращает новые высыпания.",
      image: "/Renew/17.png",
      variants: [{ volume: "10ml" }]
    },
    {
      id: "biolumine",
      name: "Biolumine",
      line: "Biorepair Pro",
      description: isGerman
        ? "Aufhellendes Konzentrat mit Tranexamsäure. Hemmt Melaninbildung, reduziert Pigmentflecken und sorgt für strahlenden, ebenmäßigen Teint."
        : "Осветляющий концентрат с транексамовой кислотой. Подавляет образование меланина, уменьшает пигментные пятна и придает сияющий ровный тон.",
      image: "/Renew/18.png",
      variants: [{ volume: "10ml" }]
    },
    {
      id: "bioreparant",
      name: "Bioreparant",
      line: "Biorepair Pro",
      description: isGerman
        ? "Regenerierendes Konzentrat mit Wachstumsfaktoren. Beschleunigt Wundheilung, fördert Hauterneuerung und repariert geschädigte Haut."
        : "Регенерирующий концентрат с факторами роста. Ускоряет заживление, способствует обновлению кожи и восстанавливает поврежденную кожу.",
      image: "/Renew/19.jpeg",
      variants: [{ volume: "10ml" }]
    },
    {
      id: "botopeptide",
      name: "Botopeptide",
      line: "Biorepair Pro",
      description: isGerman
        ? "Peptid-Konzentrat mit Botox-ähnlicher Wirkung. Entspannt mimische Falten ohne Injektion, glättet Stirnfalten und Krähenfüße."
        : "Пептидный концентрат с ботокс-подобным эффектом. Расслабляет мимические морщины без инъекций, разглаживает морщины на лбу и гусиные лапки.",
      image: "/Renew/20.png",
      variants: [{ volume: "10ml" }]
    },
    {
      id: "dermacell",
      name: "Dermacell",
      line: "Biorepair Pro",
      description: isGerman
        ? "Stammzellen-Konzentrat. Aktiviert hauteigene Regenerationsprozesse, verjüngt tiefgreifend und verbessert die Hautdichte."
        : "Концентрат стволовых клеток. Активирует собственные регенерационные процессы кожи, глубоко омолаживает и улучшает плотность кожи.",
      image: "/Renew/21.png",
      variants: [{ volume: "10ml" }]
    },
    {
      id: "eyessence",
      name: "Eyessence",
      line: "Biorepair Pro",
      description: isGerman
        ? "Spezielles Augenkonzentrat mit Peptiden und Koffein. Reduziert Tränensäcke, dunkle Ringe und glättet feine Fältchen um die Augen."
        : "Специальный концентрат для глаз с пептидами и кофеином. Уменьшает мешки под глазами, темные круги и разглаживает мелкие морщинки вокруг глаз.",
      image: "/Renew/22.png",
      variants: [{ volume: "10ml" }]
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
              {language === 'de' ? "Anti-Aging Pflege" : language === 'ru' ? "Антивозрастной уход" : "Антивозрастной уход"}
            </h1>
            <p className="text-lg text-brand-coffee/80 max-w-3xl mx-auto leading-relaxed">
              {isGerman
                ? "Komplexe Verjüngung mit vier spezialisierten Linien: Golden Age für reife Haut 50+, Anti Age für erste Zeichen der Hautalterung 35+, Retinol für intensive Zellerneuerung und Biorepair Pro - professionelle Meso-Konzentrate für gezielte Behandlungen."
                : "Комплексное омоложение с четырьмя специализированными линиями: Golden Age для зрелой кожи 50+, Anti Age для первых признаков старения 35+, Retinol для интенсивного обновления клеток и Biorepair Pro - профессиональные мезо-концентраты для целевых процедур."}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div
                key={product.id}
                className="glass rounded-2xl overflow-hidden hover:shadow-luxury transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 50}ms` }}
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
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AntiAging;
