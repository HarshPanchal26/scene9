'use client';

import { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

interface TOCItem {
  id: string;
  title: string;
  level: number;
}

interface TableOfContentsProps {
  items: TOCItem[];
}

export default function TableOfContents({ items }: TableOfContentsProps) {
  const [isHydrated, setIsHydrated] = useState(false);
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  useEffect(() => {
    if (!isHydrated) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0px -80% 0px' }
    );

    items.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [items, isHydrated]);

  const handleClick = (id: string) => {
    if (!isHydrated) return;
    
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="sticky top-24 bg-surface rounded-xl p-6 border border-border">
      <div className="flex items-center gap-2 mb-4">
        <Icon name="ListBulletIcon" size={20} variant="outline" className="text-accent" />
        <h3 className="text-lg font-bold text-foreground">Table of Contents</h3>
      </div>
      
      <nav className="space-y-2">
        {items.map((item) => (
          <button
            key={item.id}
            onClick={() => handleClick(item.id)}
            className={`block w-full text-left text-sm py-2 px-3 rounded-lg transition-all duration-300 ${
              activeId === item.id
                ? 'bg-accent/10 text-accent font-semibold' :'text-text-secondary hover:text-foreground hover:bg-surface-foreground/5'
            } ${item.level === 2 ? 'pl-6' : ''}`}
          >
            {item.title}
          </button>
        ))}
      </nav>
    </div>
  );
}