'use client'

import { Link } from '@/components/LinkAdapter'
import { useLanguage } from '@/contexts/LanguageContext';
import { ProductCard } from '@/components/ProductCard';
import Image from 'next/image';

const BiorepairPro = () => {
  const { language } = useLanguage();
  const isGerman = language === 'de';

  const products = [
    {
      id: "aczen",
      name: "Aczen",
      description: isGerman
        ? "Anti-Akne Konzentrat mit Azelainsäure und Salicylsäure. Reguliert Talgproduktion, bekämpft Entzündungen und verhindert neue Unreinheiten."
        : "Концентрат против акне с азелаиновой и салициловой кислотами. Регулирует выработку кожного сала, борется с воспалениями и предотвращает новые высыпания.",
      image: "/Renew/17.png",
      variants: [{ volume: "10ml" }]
    },
    {
      id: "biolumine",
      name: "Biolumine",
      description: isGerman
        ? "Aufhellendes Konzentrat mit Tranexamsäure. Hemmt Melaninbildung, reduziert Pigmentflecken und sorgt für strahlenden, ebenmäßigen Teint."
        : "Осветляющий концентрат с транексамовой кислотой. Подавляет образование меланина, уменьшает пигментные пятна и придает сияющий ровный тон.",
      image: "/Renew/18.png",
      variants: [{ volume: "10ml" }]
    },
    {
      id: "bioreparant",
      name: "Bioreparant",
      description: isGerman
        ? "Regenerierendes Konzentrat mit Wachstumsfaktoren. Beschleunigt Wundheilung, fördert Hauterneuerung und repariert geschädigte Haut."
        : "Регенерирующий концентрат с факторами роста. Ускоряет заживление, способствует обновлению кожи и восстанавливает поврежденную кожу.",
      image: "/Renew/19.jpeg",
      variants: [{ volume: "10ml" }]
    },
    {
      id: "botopeptide",
      name: "Botopeptide",
      description: isGerman
        ? "Peptid-Konzentrat mit Botox-ähnlicher Wirkung. Entspannt mimische Falten ohne Injektion, glättet Stirnfalten und Krähenfüße."
        : "Пептидный концентрат с ботокс-подобным эффектом. Расслабляет мимические морщины без инъекций, разглаживает морщины на лбу и гусиные лапки.",
      image: "/Renew/20.png",
      variants: [{ volume: "10ml" }]
    },
    {
      id: "dermacell",
      name: "Dermacell",
      description: isGerman
        ? "Stammzellen-Konzentrat. Aktiviert hauteigene Regenerationsprozesse, verjüngt tiefgreifend und verbessert die Hautdichte."
        : "Концентрат стволовых клеток. Активирует собственные регенерационные процессы кожи, глубоко омолаживает и улучшает плотность кожи.",
      image: "/Renew/21.png",
      variants: [{ volume: "10ml" }]
    },
    {
      id: "eyessence",
      name: "Eyessence",
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
              ← {isGerman ? "Zurück zum Shop" : "Назад в магазин"}
            </Link>
            <h1 className="text-4xl md:text-5xl font-heading font-semibold text-brand-espresso mb-4">
              Biorepair Pro
            </h1>
            <p className="text-lg text-brand-coffee/80 max-w-3xl mx-auto leading-relaxed">
              {isGerman
                ? "Professionelle Meso-Konzentrate für gezielte Behandlungen. Hochkonzentrierte Wirkstoffe für spezifische Hautprobleme: Anti-Akne, Aufhellung, Regeneration, Anti-Falten und Augenpflege."
                : "Профессиональные мезо-концентраты для целевых процедур. Высококонцентрированные активные ингредиенты для специфических проблем кожи: анти-акне, осветление, регенерация, анти-морщины и уход за глазами."}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <ProductCard
                key={product.id}
                image={product.image}
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

export default BiorepairPro;
