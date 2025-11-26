'use client'

import { Link } from '@/components/LinkAdapter'
import { useLanguage } from '@/contexts/LanguageContext';
import { ProductCard } from '@/components/ProductCard';
import Image from 'next/image';

const Peelings = () => {
  const { language } = useLanguage();
  const isGerman = language === 'de';

  const products = [
    {
      id: "cream-peeling-gommage",
      name: "Cream Peeling Gommage",
      description: isGerman
        ? "Cremiges Gommage-Peeling für sanfte Hauterneuerung. Mechanisches Peeling mit feinen Partikeln, das abgestorbene Hautzellen entfernt und die Haut glättet. Für alle Hauttypen geeignet."
        : "Кремовый гоммаж-пилинг для мягкого обновления кожи. Механический пилинг с мелкими частицами, удаляет омертвевшие клетки и разглаживает кожу. Подходит для всех типов кожи.",
      image: "/Renew/38.jpeg",
      hoverImage: "/Renew/38.1.jpeg",
      variants: [{ volume: "70ml" }, { volume: "250ml" }]
    },
    {
      id: "azelaic-acid-peeling",
      name: "Azelaic Acid Peeling",
      description: isGerman
        ? "Peeling mit 15% Azelainsäure. Wirksam gegen Pigmentierung, Akne und Rosazea. Antibakteriell und entzündungshemmend, verfeinert die Hautstruktur."
        : "Пилинг с 15% азелаиновой кислотой. Эффективен против пигментации, акне и розацеа. Антибактериальный и противовоспалительный, улучшает текстуру кожи.",
      image: "/Renew/39.jpeg",
      variants: [{ volume: "150ml" }]
    },
    {
      id: "aha-bha-peeling",
      name: "AHA & BHA Peeling",
      description: isGerman
        ? "Kombiniertes Säurepeeling mit Glykolsäure und Salicylsäure. Tiefe Hauterneuerung, Porenreinigung und Verfeinerung der Hautstruktur in einem Produkt."
        : "Комбинированный кислотный пилинг с гликолевой и салициловой кислотами. Глубокое обновление кожи, очищение пор и улучшение текстуры в одном продукте.",
      image: "/Renew/40.jpeg",
      variants: [{ volume: "250ml" }]
    },
    {
      id: "aha-peeling",
      name: "AHA Peeling",
      description: isGerman
        ? "Fruchtsäurepeeling mit Glykolsäure. Glättet die Haut, verbessert die Textur und verleiht Ausstrahlung. Ideal bei fahlem Teint und feinen Linien."
        : "Фруктовый кислотный пилинг с гликолевой кислотой. Разглаживает кожу, улучшает текстуру и придает сияние. Идеально при тусклом цвете лица и мелких морщинках.",
      image: "/Renew/41.jpeg",
      hoverImage: "/Renew/41.1.jpeg",
      variants: [
        { volume: "70ml" },
        { volume: "250ml" }
      ]
    },
    {
      id: "aha-refreshing-exfoliator",
      name: "AHA Refreshing Exfoliator",
      description: isGerman
        ? "Erfrischendes AHA-Peeling für die tägliche Anwendung. Milde Konzentration für kontinuierliche Hauterneuerung ohne Irritation."
        : "Освежающий AHA-эксфолиант для ежедневного применения. Мягкая концентрация для постоянного обновления кожи без раздражения.",
      image: "/Renew/42.jpeg",
      hoverImage: "/Renew/42.1.jpeg",
      variants: [
        { volume: "70ml" },
        { volume: "250ml" }
      ]
    },
    {
      id: "intensive-repair-peel",
      name: "Intensive Repair Peel",
      description: isGerman
        ? "Intensives Reparatur-Peeling für beschädigte und sonnengeschädigte Haut. Regeneriert, glättet Narben und verbessert den Gesamtteint."
        : "Интенсивный восстанавливающий пилинг для поврежденной и фотоповрежденной кожи. Регенерирует, разглаживает рубцы и улучшает общий тон.",
      image: "/Renew/43.jpeg",
      variants: [{ volume: "30ml" }]
    },
    {
      id: "enzyme-exfoliator",
      name: "Enzyme Exfoliator",
      description: isGerman
        ? "Sanftes Enzympeeling mit Papain und Bromelain. Ideal für empfindliche Haut, löst abgestorbene Zellen ohne mechanische Reibung oder Säuren."
        : "Мягкий энзимный пилинг с папаином и бромелаином. Идеален для чувствительной кожи, растворяет омертвевшие клетки без механического трения или кислот.",
      image: "/Renew/44.jpeg",
      hoverImage: "/Renew/44.1.jpeg",
      variants: [
        { volume: "70ml" },
        { volume: "250ml" }
      ]
    },
    {
      id: "pro-glow-foaming-peeling",
      name: "Pro Glow Foaming Peeling",
      description: isGerman
        ? "Schäumendes Peeling für professionellen Glow. Sofortige Ausstrahlung durch Kombination von Säuren und Sauerstoff-Technologie."
        : "Пенящийся пилинг для профессионального сияния. Мгновенный эффект благодаря комбинации кислот и кислородной технологии.",
      image: "/Renew/45.png",
      variants: [{ volume: "150ml" }]
    },
    {
      id: "bioenzyme-therapy",
      name: "Bioenzyme Therapy",
      description: isGerman
        ? "Bioenzym-Therapie mit Probiotika. Stärkt die Hautbarriere, erneuert sanft und fördert ein gesundes Hautmikrobiom."
        : "Биоэнзимная терапия с пробиотиками. Укрепляет кожный барьер, мягко обновляет и способствует здоровому микробиому кожи.",
      image: "/Renew/46.png",
      variants: [{ volume: "70ml" }]
    },
    {
      id: "redness-gentle-peel",
      name: "Redness Gentle Peel",
      description: isGerman
        ? "Sanftes Peeling speziell für empfindliche Haut mit Rötungen und Couperose. Enthält beruhigende Wirkstoffe und milde Fruchtsäuren für schonende Hauterneuerung."
        : "Мягкий пилинг специально для чувствительной кожи с покраснениями и куперозом. Содержит успокаивающие компоненты и мягкие фруктовые кислоты для бережного обновления кожи.",
      image: "/Renew/58.jpg",
      variants: [{ volume: "50ml" }]
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
              {isGerman ? "Peelings & Erneuerung" : "Пилинги и обновление"}
            </h1>
            <p className="text-lg text-brand-coffee/80 max-w-3xl mx-auto leading-relaxed">
              {isGerman
                ? "Professionelle Peelings für alle Hautbedürfnisse: von sanften Enzympeelings für empfindliche Haut bis zu intensiven Säurepeelings für tiefe Hauterneuerung. Mit AHA, BHA, Azelainsäure und Bioenzym-Technologie für strahlende, erneuerte Haut."
                : "Профессиональные пилинги для всех потребностей кожи: от мягких энзимных пилингов для чувствительной кожи до интенсивных кислотных пилингов для глубокого обновления. С AHA, BHA, азелаиновой кислотой и биоэнзимной технологией для сияющей обновленной кожи."}
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

export default Peelings;
