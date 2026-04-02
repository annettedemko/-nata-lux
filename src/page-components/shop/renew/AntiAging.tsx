'use client'

import { Link } from '@/components/LinkAdapter'
import { useLanguage } from '@/contexts/LanguageContext';
import Image from 'next/image';
import { ProductLineSchema } from '@/components/ProductLineSchema';

const AntiAging = () => {
  const { language } = useLanguage();

  const products = [
    // Golden Age Line
    {
      id: "massage-multivitamin-serum",
      name: "Massage Multivitamin Serum",
      line: "Golden Age",
      description: language === 'de'
        ? "Reichhaltiges Massageserum mit Vitaminen A, C, E. Nährt die Haut während der Massage und fördert die Durchblutung. Ideal für Anti-Aging Gesichtsmassagen."
        : language === 'ru' ? "Богатая массажная сыворотка с витаминами A, C, E. Питает кожу во время массажа и улучшает кровообращение. Идеально для антивозрастного массажа лица."
        : "Багата масажна сироватка з вітамінами A, C, E. Живить шкіру під час масажу та покращує кровообіг. Ідеально для антивікового масажу обличчя.",
      image: "/Renew/5.jpeg",
      variants: [{ volume: "250ml" }]
    },
    {
      id: "multivitamin-serum",
      name: "Multivitamin Serum",
      line: "Golden Age",
      description: language === 'de'
        ? "Konzentriertes Anti-Aging Serum mit Multivitaminkomplex. Strafft die Haut, reduziert Falten und verbessert die Hautelastizität. Für reife Haut 50+."
        : language === 'ru' ? "Концентрированная антивозрастная сыворотка с мультивитаминным комплексом. Подтягивает кожу, уменьшает морщины и улучшает эластичность. Для зрелой кожи 50+."
        : "Концентрована антивікова сироватка з мультивітамінним комплексом. Підтягує шкіру, зменшує зморшки та покращує еластичність. Для зрілої шкіри 50+.",
      image: "/Renew/6.png",
      variants: [{ volume: "30ml" }]
    },
    {
      id: "eye-contour-cream-golden",
      name: language === 'de' ? "Augenkonturcreme" : language === 'ru' ? "Крем для контура глаз" : "Крем для контуру очей",
      line: "Golden Age",
      description: language === 'de'
        ? "Spezielle Augenpflege mit Peptiden und Hyaluronsäure. Reduziert Schwellungen, dunkle Augenringe und Krähenfüße. Strafft die empfindliche Augenpartie."
        : language === 'ru' ? "Специальный уход за глазами с пептидами и гиалуроновой кислотой. Уменьшает отечность, темные круги и гусиные лапки. Подтягивает нежную кожу вокруг глаз."
        : "Спеціальний догляд за очима з пептидами та гіалуроновою кислотою. Зменшує набряклість, темні кола та гусячі лапки. Підтягує ніжну шкіру навколо очей.",
      image: "/Renew/7.png",
      hoverImage: "/Renew/7.1.jpeg",
      variants: [{ volume: "30ml" }]
    },
    {
      id: "night-active-cream",
      name: language === 'de' ? "Nachtaktive Creme" : language === 'ru' ? "Ночной активный крем" : "Нічний активний крем",
      line: "Golden Age",
      description: language === 'de'
        ? "Intensive Nachtcreme mit Retinol und Kollagen. Regeneriert die Haut während des Schlafs, glättet Falten und verbessert die Hautstruktur."
        : language === 'ru' ? "Интенсивный ночной крем с ретинолом и коллагеном. Восстанавливает кожу во время сна, разглаживает морщины и улучшает текстуру кожи."
        : "Інтенсивний нічний крем з ретинолом та колагеном. Відновлює шкіру під час сну, розгладжує зморшки та покращує текстуру шкіри.",
      image: "/Renew/8.png",
      hoverImage: "/Renew/8.1.jpeg",
      variants: [{ volume: "50ml" }]
    },
    {
      id: "lifting-moisturizing-cream",
      name: language === 'de' ? "Lifting Feuchtigkeitscreme" : language === 'ru' ? "Лифтинг увлажняющий крем" : "Ліфтинг зволожувальний крем",
      line: "Golden Age",
      description: language === 'de'
        ? "Tagescreme mit sofortigem Lifting-Effekt. Spendet Feuchtigkeit, strafft die Gesichtskonturen und schützt vor Umwelteinflüssen."
        : language === 'ru' ? "Дневной крем с мгновенным лифтинг-эффектом. Увлажняет, подтягивает контуры лица и защищает от воздействия окружающей среды."
        : "Денний крем з миттєвим ліфтинг-ефектом. Зволожує, підтягує контури обличчя та захищає від впливу навколишнього середовища.",
      image: "/Renew/9.png",
      hoverImage: "/Renew/9.1.jpeg",
      variants: [{ volume: "50ml" }]
    },
    // Anti Age Line
    {
      id: "anti-aging-firming-mask",
      name: language === 'de' ? "Anti-Aging Straffende Maske" : language === 'ru' ? "Антивозрастная укрепляющая маска" : "Антивікова зміцнювальна маска",
      line: "Anti Age",
      description: language === 'de'
        ? "Straffende Maske mit Kollagen und Elastin. Sofortiger Lifting-Effekt und intensive Feuchtigkeitsversorgung. Ideal vor besonderen Anlässen."
        : language === 'ru' ? "Укрепляющая маска с коллагеном и эластином. Мгновенный лифтинг-эффект и интенсивное увлажнение. Идеально перед особыми мероприятиями."
        : "Зміцнювальна маска з колагеном та еластином. Миттєвий ліфтинг-ефект та інтенсивне зволоження. Ідеально перед особливими заходами.",
      image: "/Renew/10.png",
      hoverImage: "/Renew/10.1.jpeg",
      variants: [{ volume: "250ml" }, { volume: "70ml" }]
    },
    {
      id: "intense-skin-revitalizer",
      name: "Intense Skin Revitalizer",
      line: "Anti Age",
      description: language === 'de'
        ? "Intensivserum mit Stammzellen-Extrakt. Stimuliert die Zellerneuerung und verjüngt die Haut von innen. Sichtbare Ergebnisse nach 2 Wochen."
        : language === 'ru' ? "Интенсивная сыворотка с экстрактом стволовых клеток. Стимулирует обновление клеток и омолаживает кожу изнутри. Видимые результаты через 2 недели."
        : "Інтенсивна сироватка з екстрактом стовбурових клітин. Стимулює оновлення клітин та омолоджує шкіру зсередини. Видимі результати через 2 тижні.",
      image: "/Renew/11.png",
      variants: [{ volume: "30ml" }]
    },
    {
      id: "restoring-eye-cream",
      name: language === 'de' ? "Regenerierende Augencreme" : language === 'ru' ? "Восстанавливающий крем для глаз" : "Відновлювальний крем для очей",
      line: "Anti Age",
      description: language === 'de'
        ? "Regenerierende Augencreme mit Peptiden. Glättet Fältchen, festigt die empfindliche Augenpartie und reduziert Anzeichen von Müdigkeit."
        : language === 'ru' ? "Восстанавливающий крем для глаз с пептидами. Разглаживает морщинки, укрепляет нежную кожу вокруг глаз и уменьшает признаки усталости."
        : "Відновлювальний крем для очей з пептидами. Розгладжує зморшки, зміцнює ніжну шкіру навколо очей та зменшує ознаки втоми.",
      image: "/Renew/12.png",
      hoverImage: "/Renew/12.1.jpeg",
      variants: [{ volume: "30ml" }]
    },
    {
      id: "aqua-vital-cream",
      name: "Aqua Vital Revitalizing Cream",
      line: "Anti Age",
      description: language === 'de'
        ? "Revitalisierende Creme mit Hyaluronsäure. Durchfeuchtet alle Hautschichten, polstert Falten auf und verleiht der Haut neue Vitalität."
        : language === 'ru' ? "Ревитализирующий крем с гиалуроновой кислотой. Увлажняет все слои кожи, заполняет морщины и придает коже новую жизненную силу."
        : "Ревіталізувальний крем з гіалуроновою кислотою. Зволожує всі шари шкіри, заповнює зморшки та надає шкірі нову життєву силу.",
      image: "/Renew/13.png",
      hoverImage: "/Renew/13.1.jpeg",
      variants: [{ volume: "50ml" }]
    },
    {
      id: "energy-refill-cream",
      name: "Energy Refill Anti Aging Cream",
      line: "Anti Age",
      description: language === 'de'
        ? "Energiespendende Creme mit Coenzym Q10. Belebt müde Haut, schützt vor freien Radikalen und verleiht neue Energie und Ausstrahlung."
        : language === 'ru' ? "Энергетический крем с коэнзимом Q10. Оживляет уставшую кожу, защищает от свободных радикалов и придает новую энергию и сияние."
        : "Енергетичний крем з коензимом Q10. Оживлює втомлену шкіру, захищає від вільних радикалів та надає нову енергію та сяйво.",
      image: "/Renew/14.png",
      hoverImage: "/Renew/14.1.jpeg",
      variants: [{ volume: "50ml" }]
    },
    // Retinol Line
    {
      id: "rejuvenating-serum-retinol",
      name: language === 'de' ? "Verjüngendes Retinol Serum" : language === 'ru' ? "Омолаживающая сыворотка с ретинолом" : "Омолоджувальна сироватка з ретинолом",
      line: "Retinol",
      description: language === 'de'
        ? "Hochdosiertes Retinol-Serum. Beschleunigt die Zellerneuerung, glättet Falten und verfeinert die Poren. Abends auf die gereinigte Haut auftragen."
        : language === 'ru' ? "Высокодозированная сыворотка с ретинолом. Ускоряет обновление клеток, разглаживает морщины и сужает поры. Наносить вечером на очищенную кожу."
        : "Високодозована сироватка з ретинолом. Прискорює оновлення клітин, розгладжує зморшки та звужує пори. Наносити ввечері на очищену шкіру.",
      image: "/Renew/15.jpeg",
      hoverImage: "/Renew/15.1.jpeg",
      variants: [{ volume: "30ml" }]
    },
    {
      id: "rejuvenating-cream-retinol",
      name: language === 'de' ? "Verjüngende Retinol Creme" : language === 'ru' ? "Омолаживающий крем с ретинолом" : "Омолоджувальний крем з ретинолом",
      line: "Retinol",
      description: language === 'de'
        ? "Retinol-Creme für die Nacht. Mildert Pigmentflecken, verbessert die Hautstruktur und reduziert feine Linien. Mit Vitamin E für zusätzliche Pflege."
        : language === 'ru' ? "Ночной крем с ретинолом. Осветляет пигментные пятна, улучшает текстуру кожи и уменьшает мелкие морщинки. С витамином Е для дополнительного ухода."
        : "Нічний крем з ретинолом. Освітлює пігментні плями, покращує текстуру шкіри та зменшує дрібні зморшки. З вітаміном Е для додаткового догляду.",
      image: "/Renew/16.jpeg",
      hoverImage: "/Renew/16.1.jpeg",
      variants: [{ volume: "50ml" }]
    },
    // Biorepair Pro Line
    {
      id: "aczen",
      name: "Aczen",
      line: "Biorepair Pro",
      description: language === 'de'
        ? "Anti-Akne Konzentrat mit Azelainsäure und Salicylsäure. Reguliert Talgproduktion, bekämpft Entzündungen und verhindert neue Unreinheiten."
        : language === 'ru' ? "Концентрат против акне с азелаиновой и салициловой кислотами. Регулирует выработку кожного сала, борется с воспалениями и предотвращает новые высыпания."
        : "Концентрат проти акне з азелаїновою та саліциловою кислотами. Регулює вироблення шкірного сала, бореться із запаленнями та запобігає новим висипанням.",
      image: "/Renew/17.png",
      variants: [{ volume: "10ml" }]
    },
    {
      id: "biolumine",
      name: "Biolumine",
      line: "Biorepair Pro",
      description: language === 'de'
        ? "Aufhellendes Konzentrat mit Tranexamsäure. Hemmt Melaninbildung, reduziert Pigmentflecken und sorgt für strahlenden, ebenmäßigen Teint."
        : language === 'ru' ? "Осветляющий концентрат с транексамовой кислотой. Подавляет образование меланина, уменьшает пигментные пятна и придает сияющий ровный тон."
        : "Освітлювальний концентрат з транексамовою кислотою. Пригнічує утворення меланіну, зменшує пігментні плями та надає сяючий рівний тон.",
      image: "/Renew/18.png",
      variants: [{ volume: "10ml" }]
    },
    {
      id: "bioreparant",
      name: "Bioreparant",
      line: "Biorepair Pro",
      description: language === 'de'
        ? "Regenerierendes Konzentrat mit Wachstumsfaktoren. Beschleunigt Wundheilung, fördert Hauterneuerung und repariert geschädigte Haut."
        : language === 'ru' ? "Регенерирующий концентрат с факторами роста. Ускоряет заживление, способствует обновлению кожи и восстанавливает поврежденную кожу."
        : "Регенерувальний концентрат з факторами росту. Прискорює загоєння, сприяє оновленню шкіри та відновлює пошкоджену шкіру.",
      image: "/Renew/19.jpeg",
      variants: [{ volume: "10ml" }]
    },
    {
      id: "botopeptide",
      name: "Botopeptide",
      line: "Biorepair Pro",
      description: language === 'de'
        ? "Peptid-Konzentrat mit Botox-ähnlicher Wirkung. Entspannt mimische Falten ohne Injektion, glättet Stirnfalten und Krähenfüße."
        : language === 'ru' ? "Пептидный концентрат с ботокс-подобным эффектом. Расслабляет мимические морщины без инъекций, разглаживает морщины на лбу и гусиные лапки."
        : "Пептидний концентрат з ботокс-подібним ефектом. Розслаблює мімічні зморшки без ін'єкцій, розгладжує зморшки на лобі та гусячі лапки.",
      image: "/Renew/20.png",
      variants: [{ volume: "10ml" }]
    },
    {
      id: "dermacell",
      name: "Dermacell",
      line: "Biorepair Pro",
      description: language === 'de'
        ? "Stammzellen-Konzentrat. Aktiviert hauteigene Regenerationsprozesse, verjüngt tiefgreifend und verbessert die Hautdichte."
        : language === 'ru' ? "Концентрат стволовых клеток. Активирует собственные регенерационные процессы кожи, глубоко омолаживает и улучшает плотность кожи."
        : "Концентрат стовбурових клітин. Активує власні регенераційні процеси шкіри, глибоко омолоджує та покращує щільність шкіри.",
      image: "/Renew/21.png",
      variants: [{ volume: "10ml" }]
    },
    {
      id: "eyessence",
      name: "Eyessence",
      line: "Biorepair Pro",
      description: language === 'de'
        ? "Spezielles Augenkonzentrat mit Peptiden und Koffein. Reduziert Tränensäcke, dunkle Ringe und glättet feine Fältchen um die Augen."
        : language === 'ru' ? "Специальный концентрат для глаз с пептидами и кофеином. Уменьшает мешки под глазами, темные круги и разглаживает мелкие морщинки вокруг глаз."
        : "Спеціальний концентрат для очей з пептидами та кофеїном. Зменшує мішки під очима, темні кола та розгладжує дрібні зморшки навколо очей.",
      image: "/Renew/22.png",
      variants: [{ volume: "10ml" }]
    }
  ];

  return (
    <div className="relative min-h-screen">
      <ProductLineSchema lineName="Anti-Aging" products={products.map(p => ({ name: p.name, image: p.image }))} />
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
              {language === 'de' ? "Anti-Aging Pflege" : language === 'ru' ? "Антивозрастной уход" : "Антивіковий догляд"}
            </h1>
            <p className="text-lg text-brand-coffee/80 max-w-3xl mx-auto leading-relaxed">
              {language === 'de'
                ? "Komplexe Verjüngung mit vier spezialisierten Linien: Golden Age für reife Haut 50+, Anti Age für erste Zeichen der Hautalterung 35+, Retinol für intensive Zellerneuerung und Biorepair Pro - professionelle Meso-Konzentrate für gezielte Behandlungen."
                : language === 'ru' ? "Комплексное омоложение с четырьмя специализированными линиями: Golden Age для зрелой кожи 50+, Anti Age для первых признаков старения 35+, Retinol для интенсивного обновления клеток и Biorepair Pro - профессиональные мезо-концентраты для целевых процедур."
                : "Комплексне омолодження з чотирма спеціалізованими лініями: Golden Age для зрілої шкіри 50+, Anti Age для перших ознак старіння 35+, Retinol для інтенсивного оновлення клітин та Biorepair Pro - професійні мезо-концентрати для цільових процедур."}
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
