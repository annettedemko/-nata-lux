'use client'

;
import { Link } from '@/components/LinkAdapter'
import { ArrowRight, LucideIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
  image?: string;
}

export const ServiceCard = ({ title, description, icon: Icon, href, image }: ServiceCardProps) => {
  return (
    <Link to={href} className="group">
      <div className="glass rounded-2xl overflow-hidden hover-lift h-full">
        {image && (
          <div className="h-48 overflow-hidden">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
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
          <Button
            variant="ghost"
            className="text-brand-gold hover:text-brand-gold/80 p-0 h-auto group/btn"
          >
            <span>Mehr erfahren</span>
            <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </Link>
  );
};
