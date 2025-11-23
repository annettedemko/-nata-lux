'use client'

import { Link } from '@/components/LinkAdapter'
import { useLanguage } from '@/contexts/LanguageContext';
import Image from 'next/image';

const Shop = () => {
  const { t, language } = useLanguage();
  const isGerman = language === 'de';

  // RENEW Professional Cosmetics - Categories by skin concerns/goals
  const renewCategories = [
    {
      id: "whitening",
      name: isGerman ? "Aufhellung & Pigmentierung" : "Осветление и пигментация",
      description: isGerman
        ? "Produkte gegen Pigmentflecken und für einen ebenmäßigen Teint"
        : "Средства против пигментных пятен и для ровного тона кожи",
      image: "/placeholder.svg",
      link: "/shop/renew/whitening",
      lines: ["Whitening"]
    },
    {
      id: "anti-aging",
      name: isGerman ? "Anti-Aging Pflege" : "Антивозрастной уход",
      description: isGerman
        ? "Komplexe Verjüngung und Faltenkorrektur"
        : "Комплексное омоложение и коррекция морщин",
      image: "/placeholder.svg",
      link: "/shop/renew/anti-aging",
      lines: ["Golden Age", "Anti Age", "Retinol", "Biorepair Pro"]
    },
    {
      id: "problem-skin",
      name: isGerman ? "Problemhaut & Akne" : "Проблемная кожа и акне",
      description: isGerman
        ? "Behandlung von Akne, Entzündungen und fettiger Haut"
        : "Лечение акне, воспалений и жирной кожи",
      image: "/placeholder.svg",
      link: "/shop/renew/problem-skin",
      lines: ["Dermo Control", "Propioguard"]
    },
    {
      id: "peelings",
      name: isGerman ? "Peelings & Erneuerung" : "Пилинги и обновление",
      description: isGerman
        ? "Professionelle Peelings für Hauterneuerung"
        : "Профессиональные пилинги для обновления кожи",
      image: "/placeholder.svg",
      link: "/shop/renew/peelings",
      lines: ["Peelings"]
    },
    {
      id: "masks",
      name: isGerman ? "Masken & Intensivpflege" : "Маски и интенсивный уход",
      description: isGerman
        ? "Intensive Masken für tiefe Pflege"
        : "Интенсивные маски для глубокого ухода",
      image: "/placeholder.svg",
      link: "/shop/renew/masks",
      lines: ["Masks"]
    },
    {
      id: "basic-care",
      name: isGerman ? "Basispflege" : "Базовый уход",
      description: isGerman
        ? "Gele und Cremes für die tägliche Pflege"
        : "Гели и кремы для ежедневного ухода",
      image: "/placeholder.svg",
      link: "/shop/renew/basic-care",
      lines: ["Gels & Creams"]
    },
    {
      id: "sun-protection",
      name: isGerman ? "Sonnenschutz" : "Защита от солнца",
      description: isGerman
        ? "Schutz vor UV-Strahlung und Photoaging"
        : "Защита от УФ-излучения и фотостарения",
      image: "/placeholder.svg",
      link: "/shop/renew/sun-protection",
      lines: ["Sunscreen"]
    },
    {
      id: "sensitive-skin",
      name: isGerman ? "Empfindliche Haut & Couperose" : "Чувствительная кожа и купероз",
      description: isGerman
        ? "Beruhigende Pflege für empfindliche Haut und Rötungen"
        : "Успокаивающий уход для чувствительной кожи и покраснений",
      image: "/placeholder.svg",
      link: "/shop/renew/sensitive-skin",
      lines: ["Redness"]
    },
    {
      id: "hydration",
      name: isGerman ? "Feuchtigkeit & Ausstrahlung" : "Увлажнение и сияние",
      description: isGerman
        ? "Intensive Feuchtigkeit und Vitamin C für strahlende Haut"
        : "Интенсивное увлажнение и витамин С для сияющей кожи",
      image: "/placeholder.svg",
      link: "/shop/renew/hydration",
      lines: ["Aqualia", "Vitamin C"]
    },
    {
      id: "professional",
      name: isGerman ? "Professionelle Behandlungen" : "Профессиональные процедуры",
      description: isGerman
        ? "Spezielle Produkte für professionelle Anwendungen"
        : "Специальные средства для профессиональных процедур",
      image: "/placeholder.svg",
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
          src="/48.png"
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

            {/* RENEW Brand Section */}
            <div className="glass rounded-2xl p-6 max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-heading font-semibold text-brand-espresso mb-3">
                RENEW Professional Cosmetics
              </h2>
              <p className="text-brand-coffee/70">
                {isGerman
                  ? "Israelische Profi-Kosmetik für Kosmetologen. Wählen Sie eine Kategorie nach Ihrem Hautproblem."
                  : "Израильская профессиональная косметика для косметологов. Выберите категорию по вашей проблеме кожи."}
              </p>
            </div>
          </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Link
              key={product.id}
              to={product.link}
              className="group glass rounded-2xl overflow-hidden hover:shadow-luxury transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
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
