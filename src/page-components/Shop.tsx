'use client'

import { Link } from '@/components/LinkAdapter'
import { useLanguage } from '@/contexts/LanguageContext';

const Shop = () => {
  const { t } = useLanguage();

  const products = [
    {
      id: "renew-bio-repair-pro",
      name: "Renew Bio Repair Pro",
      description: "Professional care for lashes and brows",
      image: "/placeholder.svg",
      link: "/shop/renew-bio-repair-pro"
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-heading font-semibold text-brand-espresso mb-6">
            {t('shop.title')}
          </h1>
          <p className="text-lg text-brand-coffee/80 max-w-2xl mx-auto leading-relaxed">
            {t('shop.subtitle')}
          </p>
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
  );
};

export default Shop;
