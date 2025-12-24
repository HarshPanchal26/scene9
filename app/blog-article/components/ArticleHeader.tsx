'use client';

import { useEffect, useState } from 'react';
import Icon from '@/components/ui/AppIcon';

interface ArticleHeaderProps {
  title: string;
  author: {
    name: string;
    role: string;
  };
  publishDate: string;
  readTime: number;
  category: string;
}

export default function ArticleHeader({ title, author, publishDate, readTime, category }: ArticleHeaderProps) {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  return (
    <div className="space-y-6">
      <div className="inline-flex items-center px-4 py-2 bg-accent/10 rounded-full">
        <span className="text-sm font-semibold text-accent uppercase tracking-wider">{category}</span>
      </div>
      
      <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground leading-tight">
        {title}
      </h1>
      
      <div className="flex flex-wrap items-center gap-6 text-text-secondary">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-gradient-consciousness flex items-center justify-center">
            <span className="text-lg font-bold text-foreground">{author.name.charAt(0)}</span>
          </div>
          <div>
            <p className="text-sm font-semibold text-foreground">{author.name}</p>
            <p className="text-xs text-text-secondary">{author.role}</p>
          </div>
        </div>
        
        <div className="flex items-center gap-6 text-sm">
          <div className="flex items-center gap-2">
            <Icon name="CalendarIcon" size={16} variant="outline" className="text-accent" />
            <span>{isHydrated ? publishDate : 'Loading...'}</span>
          </div>
          <div className="flex items-center gap-2">
            <Icon name="ClockIcon" size={16} variant="outline" className="text-accent" />
            <span>{readTime} min read</span>
          </div>
        </div>
      </div>
    </div>
  );
}