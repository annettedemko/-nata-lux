'use client'

import { Link } from '@/components/LinkAdapter'
import { useLanguage } from '@/contexts/LanguageContext';
import Image from 'next/image';

const Shop = () => {
  const { t, language } = useLanguage();

  // RENEW Professional Cosmetics - Categories by skin concerns/goals
  const renewCategories = [
    {
      id: "whitening",
      name: language === 'de' ? "Aufhellung & Pigmentierung" : language === 'ru' ? "Осветление и пигментация" : "Освітлення та пігментація",
      description: language === 'de'
        ? "Produkte gegen Pigmentflecken und für einen ebenmäßigen Teint"
        : language === 'ru' ? "Средства против пигментных пятен и для ровного тона кожи"
        : "Засоби проти пігментних плям та для рівного тону шкіри",
      image: "/Renew/renew-shop-whitening-vorschau.jpeg",
      link: "/shop/renew/whitening",
      lines: ["Whitening"]
    },
    {
      id: "golden-age",
      name: "Golden Age",
      description: language === 'de'
        ? "Premium Anti-Aging mit Gold und Peptiden"
        : language === 'ru' ? "Премиум антивозрастной уход с золотом и пептидами"
        : "Преміум антивіковий догляд із золотом та пептидами",
      image: "/Renew/renew-shop-golden-age-vorschau.jpg",
      link: "/shop/renew/golden-age",
      lines: ["Golden Age"]
    },
    {
      id: "anti-age",
      name: "Anti Age",
      description: language === 'de'
        ? "Verjüngung und Faltenkorrektur"
        : language === 'ru' ? "Омоложение и коррекция морщин"
        : "Омолодження та корекція зморшок",
      image: "/Renew/renew-shop-anti-age-vorschau.jpeg",
      link: "/shop/renew/anti-age",
      lines: ["Anti Age"]
    },
    {
      id: "retinol",
      name: "Retinol",
      description: language === 'de'
        ? "Intensive Zellerneuerung"
        : language === 'ru' ? "Интенсивное обновление клеток"
        : "Інтенсивне оновлення клітин",
      image: "/Renew/renew-shop-retinol-vorschau.jpg",
      link: "/shop/renew/retinol",
      lines: ["Retinol"]
    },
    {
      id: "biorepair-pro",
      name: "Biorepair Pro",
      description: language === 'de'
        ? "Professionelle Meso-Konzentrate"
        : language === 'ru' ? "Профессиональные мезо-концентраты"
        : "Професійні мезо-концентрати",
      image: "/Renew/renew-shop-biorepair-pro-vorschau.jpg",
      link: "/shop/renew/biorepair-pro",
      lines: ["Biorepair Pro"]
    },
    {
      id: "dermo-control",
      name: "Dermo Control",
      description: language === 'de'
        ? "Regulierung der Talgproduktion und Mattierung für fettige Haut"
        : language === 'ru' ? "Регуляция себума и матирование для жирной кожи"
        : "Регуляція себуму та матування для жирної шкіри",
      image: "/Renew/renew-shop-dermo-control-vorschau.jpeg",
      link: "/shop/renew/dermo-control",
      lines: ["Dermo Control"]
    },
    {
      id: "propioguard",
      name: "Propioguard",
      description: language === 'de'
        ? "Aktive Bekämpfung von Akne und Entzündungen"
        : language === 'ru' ? "Активная борьба с акне и воспалениями"
        : "Активна боротьба з акне та запаленнями",
      image: "/Renew/renew-shop-propioguard-vorschau.jpeg",
      link: "/shop/renew/propioguard",
      lines: ["Propioguard"]
    },
    {
      id: "peelings",
      name: language === 'de' ? "Peelings & Erneuerung" : language === 'ru' ? "Пилинги и обновление" : "Пілінги та оновлення",
      description: language === 'de'
        ? "Professionelle Peelings für Hauterneuerung"
        : language === 'ru' ? "Профессиональные пилинги для обновления кожи"
        : "Професійні пілінги для оновлення шкіри",
      image: "/Renew/renew-shop-masken-vorschau.jpg",
      link: "/shop/renew/peelings",
      lines: ["Peelings"]
    },
    {
      id: "masks",
      name: language === 'de' ? "Masken & Intensivpflege" : language === 'ru' ? "Маски и интенсивный уход" : "Маски та інтенсивний догляд",
      description: language === 'de'
        ? "Intensive Masken für tiefe Pflege"
        : language === 'ru' ? "Интенсивные маски для глубокого ухода"
        : "Інтенсивні маски для глибокого догляду",
      image: "/Renew/renew-shop-peelings-vorschau.jpeg",
      link: "/shop/renew/masks",
      lines: ["Masks"]
    },
    {
      id: "basic-care",
      name: language === 'de' ? "Basispflege" : language === 'ru' ? "Базовый уход" : "Базовий догляд",
      description: language === 'de'
        ? "Gele und Cremes für die tägliche Pflege"
        : language === 'ru' ? "Гели и кремы для ежедневного ухода"
        : "Гелі та креми для щоденного догляду",
      image: "/Renew/renew-shop-sensitive-skin-vorschau.jpeg",
      link: "/shop/renew/basic-care",
      lines: ["Gels & Creams"]
    },
    {
      id: "sun-protection",
      name: language === 'de' ? "Sonnenschutz" : language === 'ru' ? "Защита от солнца" : "Захист від сонця",
      description: language === 'de'
        ? "Schutz vor UV-Strahlung und Photoaging"
        : language === 'ru' ? "Защита от УФ-излучения и фотостарения"
        : "Захист від УФ-випромінювання та фотостаріння",
      image: "/Renew/renew-shop-professional-vorschau.webp",
      link: "/shop/renew/sun-protection",
      lines: ["Sunscreen"]
    },
    {
      id: "sensitive-skin",
      name: language === 'de' ? "Empfindliche Haut & Couperose" : language === 'ru' ? "Чувствительная кожа и купероз" : "Чутлива шкіра та купероз",
      description: language === 'de'
        ? "Beruhigende Pflege für empfindliche Haut und Rötungen"
        : language === 'ru' ? "Успокаивающий уход для чувствительной кожи и покраснений"
        : "Заспокійливий догляд для чутливої шкіри та почервонінь",
      image: "/Renew/renew-shop-basic-care-vorschau.jpg",
      link: "/shop/renew/sensitive-skin",
      lines: ["Redness"]
    },
    {
      id: "aqualia",
      name: "Aqualia",
      description: language === 'de'
        ? "Intensive Feuchtigkeit für jeden Hauttyp"
        : language === 'ru' ? "Интенсивное увлажнение для любого типа кожи"
        : "Інтенсивне зволоження для будь-якого типу шкіри",
      image: "/Renew/renew-shop-aqualia-vorschau.webp",
      link: "/shop/renew/aqualia",
      lines: ["Aqualia"]
    },
    {
      id: "vitamin-c",
      name: "Vitamin C",
      description: language === 'de'
        ? "Antioxidativer Schutz und strahlende Haut"
        : language === 'ru' ? "Антиоксидантная защита и сияние кожи"
        : "Антиоксидантний захист та сяйво шкіри",
      image: "/Renew/renew-shop-vitamin-c-vorschau.jpg",
      link: "/shop/renew/vitamin-c",
      lines: ["Vitamin C"]
    },
    {
      id: "professional",
      name: language === 'de' ? "Professionelle Behandlungen" : language === 'ru' ? "Профессиональные процедуры" : "Професійні процедури",
      description: language === 'de'
        ? "Spezielle Produkte für professionelle Anwendungen"
        : language === 'ru' ? "Специальные средства для профессиональных процедур"
        : "Спеціальні засоби для професійних процедур",
      image: "/Renew/renew-shop-sonnenschutz-vorschau.webp",
      link: "/shop/renew/professional",
      lines: ["Dermakey"]
    }
  ];

  const products = renewCategories;

  return (
    <div className="relative min-h-screen">
      {/* Background Image */}
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

      {/* Content */}
      <div className="relative z-10 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-heading font-semibold text-brand-espresso mb-6">
              {t('shop.title')}
            </h1>
            <p className="text-lg text-brand-coffee/80 max-w-2xl mx-auto leading-relaxed mb-8">
              {t('shop.subtitle')}
            </p>

            {/* Shop Section */}
            <div className="glass rounded-2xl p-6 max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-heading font-semibold text-brand-espresso mb-3">
                {language === 'de' ? "RENEW — Professionelle Hautpflege" : language === 'ru' ? "RENEW — Профессиональный уход за кожей" : "RENEW — Професійний догляд за шкірою"}
              </h2>
              <p className="text-brand-coffee/70 mb-3">
                {language === 'de'
                  ? "Premium-Produkte für zu Hause und professionelle Anwendung. Wählen Sie eine Kategorie nach Ihrem Hautproblem."
                  : language === 'ru' ? "Премиум-продукты для дома и профессионального использования. Выберите категорию по вашей проблеме кожи."
                  : "Преміум-продукти для дому та професійного використання. Оберіть категорію за вашою проблемою шкіри."}
              </p>
              <div className="inline-block bg-brand-gold/10 border border-brand-gold/20 rounded-lg px-4 py-2">
                <p className="text-sm font-medium text-brand-espresso">
                  {language === 'de'
                    ? "✨ Für Privatpersonen, Kosmetologen und B2B"
                    : language === 'ru' ? "✨ Для частных лиц, косметологов и B2B"
                    : "✨ Для приватних осіб, косметологів та B2B"}
                </p>
              </div>
            </div>
          </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {products.map((product, index) => (
            <Link
              key={product.id}
              to={product.link}
              className="group glass rounded-2xl overflow-hidden hover:shadow-luxury transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="aspect-square overflow-hidden bg-white">
                <img
                  src={product.image}
                  alt={product.name}
                  className={`w-full h-full group-hover:scale-105 transition-transform duration-500 ${product.fitContain ? 'object-contain' : 'object-cover'}`}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-heading font-semibold text-brand-espresso mb-2">
                  {product.name}
                </h3>
                <p className="text-brand-coffee/70">
                  {product.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
