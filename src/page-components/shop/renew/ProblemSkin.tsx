'use client'

import { Link } from '@/components/LinkAdapter'
import { useLanguage } from '@/contexts/LanguageContext';
import Image from 'next/image';
import { ProductLineSchema } from '@/components/ProductLineSchema';

const ProblemSkin = () => {
  const { language } = useLanguage();
  const isGerman = language === 'de';

  const products = [
    // Dermo Control Line
    {
      id: "cleansing-gel",
      name: "Cleansing Gel",
      line: "Dermo Control",
      description: language === 'de'
        ? "Reinigungsgel mit Salicylsäure und Teebaumöl. Entfernt überschüssigen Talg ohne auszutrocknen, reinigt die Poren und beugt Unreinheiten vor."
        : language === 'ru'
        ? "Очищающий гель с салициловой кислотой и маслом чайного дерева. Удаляет избыток кожного сала не пересушивая, очищает поры и предотвращает высыпания."
        : "Очищувальний гель із саліциловою кислотою та олією чайного дерева. Видаляє надлишок шкірного сала не пересушуючи, очищує пори та запобігає висипанням.",
      image: "/Renew/23.png",
      hoverImage: "/Renew/23.1.jpeg",
      variants: [{ volume: "250ml" }]
    },
    {
      id: "hydration-gel",
      name: "Hydration Gel",
      line: "Dermo Control",
      description: language === 'de'
        ? "Leichtes Feuchtigkeitsgel ohne Öl. Mattiert die Haut und spendet Feuchtigkeit ohne zu fetten. Ideal für fettige und Mischhaut."
        : language === 'ru'
        ? "Легкий увлажняющий гель без масла. Матирует кожу и увлажняет без жирности. Идеально для жирной и комбинированной кожи."
        : "Легкий зволожувальний гель без олії. Матує шкіру та зволожує без жирності. Ідеально для жирної та комбінованої шкіри.",
      image: "/Renew/24.jpeg",
      variants: [{ volume: "250ml" }]
    },
    {
      id: "dermo-control-mask",
      name: language === 'de' ? "Dermo Control Maske" : language === 'ru' ? "Маска Дермо Контроль" : "Маска Дермо Контроль",
      line: "Dermo Control",
      description: language === 'de'
        ? "Reinigende Maske mit Kaolin und Zink. Absorbiert überschüssigen Talg, verfeinert die Poren und beruhigt entzündete Haut."
        : language === 'ru'
        ? "Очищающая маска с каолином и цинком. Абсорбирует избыток кожного сала, сужает поры и успокаивает воспаленную кожу."
        : "Очищувальна маска з каоліном та цинком. Абсорбує надлишок шкірного сала, звужує пори та заспокоює запалену шкіру.",
      image: "/Renew/25.png",
      hoverImage: "/Renew/25.1.jpeg",
      variants: [{ volume: "70ml" }]
    },
    {
      id: "dermo-control-lotion",
      name: language === 'de' ? "Dermo Control Lotion" : language === 'ru' ? "Лосьон Дермо Контроль" : "Лосьйон Дермо Контроль",
      line: "Dermo Control",
      description: language === 'de'
        ? "Ausgleichende Lotion mit BHA. Klärt die Haut, reguliert die Talgproduktion und beugt Unreinheiten vor. Täglich nach der Reinigung anwenden."
        : language === 'ru'
        ? "Балансирующий лосьон с BHA. Очищает кожу, регулирует выработку себума и предотвращает высыпания. Применять ежедневно после очищения."
        : "Балансувальний лосьйон з BHA. Очищує шкіру, регулює вироблення себуму та запобігає висипанням. Застосовувати щоденно після очищення.",
      image: "/Renew/26.png",
      hoverImage: "/Renew/26.1.jpeg",
      variants: [{ volume: "250ml" }]
    },
    {
      id: "balance-recovery-peeling",
      name: "Balance Recovery Peeling",
      line: "Dermo Control",
      description: language === 'de'
        ? "Sanftes Enzympeeling zur Wiederherstellung des Hautgleichgewichts. Entfernt Verhornungen und reguliert die Talgproduktion ohne zu reizen."
        : language === 'ru'
        ? "Мягкий энзимный пилинг для восстановления баланса кожи. Удаляет ороговевшие клетки и регулирует выработку себума без раздражения."
        : "М'який ензимний пілінг для відновлення балансу шкіри. Видаляє зроговілі клітини та регулює вироблення себуму без подразнення.",
      image: "/Renew/27.jpeg",
      variants: [{ volume: "70ml" }]
    },
    {
      id: "moisturizing-cream-spf15",
      name: language === 'de' ? "Feuchtigkeitscreme SPF-15" : language === 'ru' ? "Увлажняющий крем SPF-15" : "Зволожувальний крем SPF-15",
      line: "Dermo Control",
      description: language === 'de'
        ? "Leichte Tagescreme mit Sonnenschutz für fettige Haut. Mattiert, schützt vor UV-Strahlung und spendet Feuchtigkeit ohne zu glänzen."
        : language === 'ru'
        ? "Легкий дневной крем с защитой от солнца для жирной кожи. Матирует, защищает от УФ-излучения и увлажняет без жирного блеска."
        : "Легкий денний крем із захистом від сонця для жирної шкіри. Матує, захищає від УФ-випромінювання та зволожує без жирного блиску.",
      image: "/Renew/28.png",
      hoverImage: "/Renew/28.1.jpeg",
      variants: [{ volume: "50ml" }]
    },
    {
      id: "moisturizing-cream-oil-free",
      name: language === 'de' ? "Feuchtigkeitscreme Oil-Free" : language === 'ru' ? "Увлажняющий крем без масла" : "Зволожувальний крем без олії",
      line: "Dermo Control",
      description: language === 'de'
        ? "Ölfreie Feuchtigkeitscreme für fettige Haut. Versorgt mit Feuchtigkeit ohne zu fetten und hinterlässt ein mattes Finish."
        : language === 'ru'
        ? "Безмасляный увлажняющий крем для жирной кожи. Увлажняет без жирности и оставляет матовый финиш."
        : "Безолійний зволожувальний крем для жирної шкіри. Зволожує без жирності та залишає матовий фініш.",
      image: "/Renew/29.png",
      hoverImage: "/Renew/29.1.jpeg",
      variants: [{ volume: "50ml" }]
    },
    {
      id: "phyto-complex",
      name: "Phyto Complex",
      line: "Dermo Control",
      description: language === 'de'
        ? "Pflanzliches Konzentrat mit Teebaumöl und Salbei. Beruhigt Entzündungen, klärt Unreinheiten und reguliert die Talgproduktion."
        : language === 'ru'
        ? "Растительный концентрат с маслом чайного дерева и шалфеем. Успокаивает воспаления, очищает несовершенства и регулирует выработку себума."
        : "Рослинний концентрат з олією чайного дерева та шавлією. Заспокоює запалення, очищує недосконалості та регулює вироблення себуму.",
      image: "/Renew/30.jpeg",
      variants: [{ volume: "30ml" }]
    },
    {
      id: "drying-treatment",
      name: "Drying Treatment",
      line: "Dermo Control",
      description: language === 'de'
        ? "Lokale SOS-Behandlung zum Austrocknen von Unreinheiten. Punktgenau auf Pickel auftragen für schnelle Reduzierung von Rötungen und Schwellungen."
        : language === 'ru'
        ? "Локальное SOS-средство для подсушивания воспалений. Точечно наносить на прыщи для быстрого уменьшения покраснений и отечности."
        : "Локальний SOS-засіб для підсушування запалень. Точково наносити на прищі для швидкого зменшення почервонінь та набряклості.",
      image: "/Renew/31.jpeg",
      variants: [{ volume: "30ml" }]
    },
    // Propioguard Line
    {
      id: "deep-lathering-abstergent",
      name: "Deep Lathering Abstergent",
      line: "Propioguard",
      description: language === 'de'
        ? "Tiefenreinigender Schaum mit Propolis und Zink. Bekämpft Akne-Bakterien, beruhigt die Haut und verhindert neue Entzündungen."
        : language === 'ru'
        ? "Глубоко очищающая пена с прополисом и цинком. Борется с бактериями акне, успокаивает кожу и предотвращает новые воспаления."
        : "Глибоко очищувальна піна з прополісом та цинком. Бореться з бактеріями акне, заспокоює шкіру та запобігає новим запаленням.",
      image: "/Renew/32.png",
      variants: [{ volume: "200ml" }]
    },
    {
      id: "make-up-treatment-cream",
      name: "Make-Up Treatment Cream",
      line: "Propioguard",
      description: language === 'de'
        ? "Getönte Behandlungscreme mit antibakterieller Wirkung. Kaschiert Unreinheiten, pflegt und behandelt problematische Haut gleichzeitig."
        : language === 'ru'
        ? "Тонирующий лечебный крем с антибактериальным действием. Маскирует несовершенства, ухаживает и лечит проблемную кожу одновременно."
        : "Тонувальний лікувальний крем з антибактеріальною дією. Маскує недосконалості, доглядає та лікує проблемну шкіру одночасно.",
      image: "/Renew/33.png",
      variants: [{ volume: "50ml" }]
    },
    {
      id: "complex-peel-solution",
      name: "Complex Peel Solution",
      line: "Propioguard",
      description: language === 'de'
        ? "Komplexes Peeling mit Mandel- und Salicylsäure. Öffnet verstopfte Poren, bekämpft Akne und verhindert neue Unreinheiten."
        : language === 'ru'
        ? "Комплексный пилинг с миндальной и салициловой кислотами. Открывает закупоренные поры, борется с акне и предотвращает новые высыпания."
        : "Комплексний пілінг з мигдальною та саліциловою кислотами. Відкриває закупорені пори, бореться з акне та запобігає новим висипанням.",
      image: "/Renew/34.png",
      variants: [{ volume: "70ml" }]
    },
    {
      id: "sunscreen-triple-active",
      name: "Sunscreen Triple Active Day Cream",
      line: "Propioguard",
      description: language === 'de'
        ? "Dreifach aktive Tagescreme mit SPF. Schützt vor UV-Strahlung, mattiert fettige Haut und behandelt Akne gleichzeitig."
        : language === 'ru'
        ? "Тройной активный дневной крем с SPF. Защищает от УФ-излучения, матирует жирную кожу и лечит акне одновременно."
        : "Потрійний активний денний крем з SPF. Захищає від УФ-випромінювання, матує жирну шкіру та лікує акне одночасно.",
      image: "/Renew/35.png",
      hoverImage: "/Renew/35.1.jpeg",
      variants: [{ volume: "50ml" }]
    },
    {
      id: "charcoal-soothing-mask",
      name: language === 'de' ? "Beruhigende Kohlemaske" : language === 'ru' ? "Успокаивающая угольная маска" : "Заспокійлива вугільна маска",
      line: "Propioguard",
      description: language === 'de'
        ? "Tiefenreinigende Maske mit Aktivkohle. Entgiftet die Haut, absorbiert Unreinheiten und beruhigt Entzündungen."
        : language === 'ru'
        ? "Глубоко очищающая маска с активированным углем. Детоксифицирует кожу, абсорбирует загрязнения и успокаивает воспаления."
        : "Глибоко очищувальна маска з активованим вугіллям. Детоксифікує шкіру, абсорбує забруднення та заспокоює запалення.",
      image: "/Renew/36.png",
      hoverImage: "/Renew/36.1.jpeg",
      variants: [{ volume: "70ml" }]
    },
    {
      id: "multifunctional-accelerative-cream",
      name: "Multifunctional Accelerative Cream",
      line: "Propioguard",
      description: language === 'de'
        ? "Multifunktionale Creme zur Beschleunigung der Hautregeneration. Verhindert Narbenbildung und beschleunigt die Heilung von Akne-Läsionen."
        : language === 'ru'
        ? "Мультифункциональный крем для ускорения регенерации кожи. Предотвращает образование рубцов и ускоряет заживление акне."
        : "Мультифункціональний крем для прискорення регенерації шкіри. Запобігає утворенню рубців та прискорює загоєння акне.",
      image: "/Renew/37.png",
      hoverImage: "/Renew/37.1.jpeg",
      variants: [{ volume: "50ml" }]
    }
  ];

  return (
    <div className="relative min-h-screen">
      <ProductLineSchema lineName="Problem Skin" products={products.map(p => ({ name: p.name, image: p.image }))} />
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
              {language === 'de' ? "Problemhaut & Akne" : language === 'ru' ? "Проблемная кожа и акне" : "Проблемна шкіра та акне"}
            </h1>
            <p className="text-lg text-brand-coffee/80 max-w-3xl mx-auto leading-relaxed">
              {language === 'de'
                ? "Zwei spezialisierte Linien für fettige und problematische Haut: Dermo Control reguliert die Talgproduktion und mattiert, Propioguard bekämpft aktiv Akne und Entzündungen. Mit antibakteriellen Wirkstoffen, Salicylsäure und beruhigenden Pflanzenextrakten."
                : language === 'ru'
                ? "Две специализированные линии для жирной и проблемной кожи: Dermo Control регулирует выработку себума и матирует, Propioguard активно борется с акне и воспалениями. С антибактериальными компонентами, салициловой кислотой и успокаивающими растительными экстрактами."
                : "Дві спеціалізовані лінії для жирної та проблемної шкіри: Dermo Control регулює вироблення себуму та матує, Propioguard активно бореться з акне та запаленнями. З антибактеріальними компонентами, саліциловою кислотою та заспокійливими рослинними екстрактами."}
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

export default ProblemSkin;
