'use client'

;
import { Link } from '@/components/LinkAdapter'
import { ArrowRight, LucideIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { useState } from 'react';

interface CategoryCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
  image?: string;
  hoverImage?: string;
  delay?: number;
}

export const CategoryCard = ({
  title,
  description,
  icon: Icon,
  href,
  image,
  hoverImage,
  delay = 0
}: CategoryCardProps) => {
  const { t, language } = useLanguage();
  const [isHovered, setIsHovered] = useState(false);

  // Build the full path with language prefix
  const fullPath = language === 'ru' ? `/ru${href}` : href;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
    >
      <Link to={fullPath} className="group block h-full">
        <div
          className="glass rounded-3xl overflow-hidden hover-lift h-full flex flex-col transition-all duration-300 hover:shadow-medium"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Image Section */}
          {image ? (
            <div className="relative h-56 md:h-64 lg:h-72 overflow-hidden">
              {/* Main image */}
              <img
                src={image}
                alt={title}
                className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
                loading="lazy"
              />

              {/* Dark overlay with title - appears on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br from-brand-espresso/70 via-brand-espresso/60 to-black/70 flex items-center justify-center transition-opacity duration-500 ${
                isHovered ? 'opacity-100' : 'opacity-0'
              }`}>
                <h3 className="text-xl md:text-2xl lg:text-3xl font-heading font-medium text-white text-center px-4 md:px-6 transform transition-all duration-500 tracking-wide">
                  {title}
                </h3>
              </div>

              {/* Default gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-t from-brand-espresso/60 via-brand-espresso/20 to-transparent transition-opacity duration-500 ${
                isHovered ? 'opacity-0' : 'opacity-80'
              }`} />

              {/* Icon overlay */}
              <div className={`absolute top-4 right-4 w-14 h-14 rounded-2xl bg-white/95 backdrop-blur-sm flex items-center justify-center transition-all duration-300 shadow-soft ${
                isHovered ? 'scale-0 opacity-0' : 'scale-100 opacity-100'
              }`}>
                <Icon className="w-7 h-7 text-brand-gold" />
              </div>
            </div>
          ) : (
            <div className="relative h-56 bg-gradient-to-br from-brand-latte to-brand-cream flex items-center justify-center">
              <div className="w-20 h-20 rounded-3xl bg-white/80 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Icon className="w-10 h-10 text-brand-gold" />
              </div>
            </div>
          )}

          {/* Content Section */}
          <div className="p-4 md:p-5 lg:p-6 flex-grow flex flex-col">
            <h3 className="text-xl md:text-2xl font-heading font-semibold text-brand-espresso mb-2 md:mb-3 group-hover:text-brand-gold transition-colors">
              {title}
            </h3>
            <p className="text-sm md:text-base text-brand-coffee/70 mb-4 md:mb-6 leading-relaxed flex-grow">
              {description}
            </p>

            {/* Button */}
            <Button
              variant="ghost"
              className="text-brand-gold hover:text-brand-gold/80 hover:bg-brand-gold/5 p-0 h-auto group/btn self-start"
            >
              <span className="font-medium">{t('common.learnMore')}</span>
              <ArrowRight className="w-5 h-5 ml-2 group-hover/btn:translate-x-2 transition-transform duration-300" />
            </Button>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};
