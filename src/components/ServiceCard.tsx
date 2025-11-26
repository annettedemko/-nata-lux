'use client'

import { Link } from '@/components/LinkAdapter'
import { ArrowRight, LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
  image?: string;
  imageScale?: number;
  imagePosition?: string;
}

export const ServiceCard = ({ title, description, icon: Icon, href, image, imageScale, imagePosition }: ServiceCardProps) => {
  return (
    <Link to={href} className="group block cursor-pointer">
      <div className="glass rounded-2xl overflow-hidden hover-lift h-full pointer-events-none">
        {image && (
          <div className="h-40 md:h-48 overflow-hidden">
            <img
              src={image}
              alt={title}
              className={`w-full h-full object-cover transition-transform duration-500 ${!imageScale ? 'group-hover:scale-105' : ''}`}
              style={{
                transform: imageScale ? `scale(${imageScale})` : undefined,
                objectPosition: imagePosition || 'center',
              }}
              loading="lazy"
            />
          </div>
        )}
        <div className="p-6">
          <div className="w-12 h-12 rounded-xl bg-brand-gold/10 flex items-center justify-center mb-4 group-hover:bg-brand-gold/20 transition-colors">
            <Icon className="w-6 h-6 text-brand-gold" />
          </div>
          <h3 className="text-xl font-heading font-semibold text-brand-espresso mb-2">
            {title}
          </h3>
          <p className="text-brand-coffee/70 mb-4 leading-relaxed">
            {description}
          </p>
          <div className="flex items-center text-brand-gold hover:text-brand-gold/80 font-medium">
            <span>Mehr erfahren</span>
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </div>
    </Link>
  );
};
