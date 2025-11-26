'use client'

import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import { ReactNode } from 'react';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  hover?: boolean;
}

export const GlassCard = ({ children, className = '', delay = 0, hover = true }: GlassCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 0.6,
        delay: delay,
        ease: [0.16, 1, 0.3, 1]
      }}
      whileHover={hover ? {
        y: -8,
        transition: { duration: 0.3 }
      } : {}}
      className={`glass rounded-2xl backdrop-blur-md ${className}`}
    >
      {children}
    </motion.div>
  );
};

interface GlassServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  href?: string;
  delay?: number;
  image?: string;
}

export const GlassServiceCard = ({ title, description, icon: Icon, delay = 0, image }: GlassServiceCardProps) => {
  return (
    <GlassCard delay={delay} className="overflow-hidden group">
      {/* Image */}
      {image && (
        <div className="relative h-40 md:h-48 overflow-hidden">
          <motion.img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-brand-cream/90 via-brand-cream/40 to-transparent" />
        </div>
      )}

      <div className="p-4 sm:p-6 md:p-8">
        {/* Icon if no image */}
        {!image && (
          <motion.div
            className="relative w-16 h-16 mb-6"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="absolute inset-0 bg-gold-gradient rounded-2xl opacity-10 group-hover:opacity-20 transition-opacity" />
            <div className="relative w-full h-full flex items-center justify-center">
              <Icon className="w-8 h-8 text-brand-gold" strokeWidth={1.5} />
            </div>
          </motion.div>
        )}

        {/* Title */}
        <h3 className="text-lg md:text-xl font-heading font-semibold text-brand-espresso mb-3 group-hover:text-brand-gold transition-colors leading-tight">
          {title}
        </h3>

        {/* Description */}
        <p className="text-sm md:text-base text-brand-coffee/70 leading-relaxed">
          {description}
        </p>

        {/* Hover accent line */}
        <motion.div
          className="h-1 bg-gold-gradient rounded-full mt-6 origin-left"
          initial={{ scaleX: 0 }}
          whileHover={{ scaleX: 1 }}
          transition={{ duration: 0.3 }}
        />
      </div>
    </GlassCard>
  );
};

interface GlassFeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  delay?: number;
}

export const GlassFeatureCard = ({ title, description, icon: Icon, delay = 0 }: GlassFeatureCardProps) => {
  return (
    <GlassCard delay={delay} className="p-8 text-center">
      {/* Icon with circular background */}
      <motion.div
        className="w-20 h-20 mx-auto rounded-full bg-brand-gold/10 flex items-center justify-center mb-6 relative overflow-hidden"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <motion.div
          className="absolute inset-0 bg-gold-gradient opacity-0"
          whileHover={{ opacity: 0.2 }}
          transition={{ duration: 0.3 }}
        />
        <Icon className="w-10 h-10 text-brand-gold relative z-10" strokeWidth={1.5} />
      </motion.div>

      {/* Title */}
      <h3 className="text-xl font-heading font-semibold text-brand-espresso mb-3">
        {title}
      </h3>

      {/* Description */}
      <p className="text-brand-coffee/70 leading-relaxed">
        {description}
      </p>
    </GlassCard>
  );
};

interface GlassReviewCardProps {
  name: string;
  rating: number;
  text: string;
  delay?: number;
}

export const GlassReviewCard = ({ name, rating, text, delay = 0 }: GlassReviewCardProps) => {
  return (
    <GlassCard delay={delay} className="p-8 h-full flex flex-col">
      {/* Stars */}
      <div className="flex gap-1 mb-4">
        {[...Array(rating)].map((_, i) => (
          <motion.svg
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              delay: delay + (i * 0.1),
              type: "spring",
              stiffness: 200
            }}
            className="w-5 h-5 fill-brand-gold text-brand-gold"
            viewBox="0 0 24 24"
          >
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </motion.svg>
        ))}
      </div>

      {/* Review text */}
      <p className="text-brand-coffee/80 italic leading-relaxed mb-6 flex-grow">
        "{text}"
      </p>

      {/* Name */}
      <p className="text-brand-espresso font-semibold font-heading">
        {name}
      </p>
    </GlassCard>
  );
};
