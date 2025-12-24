'use client';

import { useState } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface CapabilityCardProps {
  title: string;
  description: string;
  impact: string;
  image: string;
  alt: string;
  icon: string;
  gradient: string;
}

const CapabilityCard = ({
  title,
  description,
  impact,
  image,
  alt,
  icon,
  gradient,
}: CapabilityCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group relative overflow-hidden rounded-xl bg-surface border border-border transition-all duration-500 hover:border-accent hover:shadow-glow-cyan"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-64 overflow-hidden">
        <AppImage
          src={image}
          alt={alt}
          className={`w-full h-full object-cover transition-transform duration-700 ${
            isHovered ? 'scale-110' : 'scale-100'
          }`}
        />
        <div className={`absolute inset-0 bg-gradient-to-t ${gradient} transition-opacity duration-500 ${
          isHovered ? 'opacity-90' : 'opacity-70'
        }`} />
        
        <div className="absolute top-6 left-6">
          <div className="w-12 h-12 rounded-lg bg-accent/20 backdrop-blur-sm flex items-center justify-center">
            <Icon name={icon as any} size={24} className="text-accent" />
          </div>
        </div>
      </div>

      <div className="p-6 space-y-4">
        <h3 className="text-2xl font-bold text-foreground group-hover:text-accent transition-colors duration-300">
          {title}
        </h3>
        
        <p className="text-text-secondary leading-relaxed">
          {description}
        </p>

        <div
          className={`overflow-hidden transition-all duration-500 ${
            isHovered ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="pt-4 border-t border-border/50">
            <p className="text-sm font-mono text-accent uppercase tracking-wider mb-2">
              Impact
            </p>
            <p className="text-text-secondary text-sm leading-relaxed">
              {impact}
            </p>
          </div>
        </div>

        <div className="flex items-center text-accent font-medium text-sm group-hover:translate-x-2 transition-transform duration-300">
          <span>Explore possibilities</span>
          <Icon name="ArrowRightIcon" size={16} className="ml-2" />
        </div>
      </div>
    </div>
  );
};

export default CapabilityCard;