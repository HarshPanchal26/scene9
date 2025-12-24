'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

interface HeaderProps {
  className?: string;
}

const Header = ({ className = '' }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { label: 'Home', href: '/home' },
    { label: 'Vision', href: '/vision' },
    { label: 'Globe', href: '/globe' },
    // { label: 'Blog', href: '/blog-article' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-primary/95 backdrop-blur-md shadow-cinematic' : 'bg-transparent'
      } ${className}`}
    >
      <div className="w-full">
        <div className="flex items-center justify-between h-20 px-6 lg:px-12">
          <Link
            href="/home"
            className="flex items-center space-x-3 group transition-transform duration-300 hover:scale-105"
          >
            <div className="relative w-10 h-10 flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-consciousness opacity-20 rounded-lg animate-morph" />
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="relative z-10"
              >
                <path
                  d="M16 4L4 10V22L16 28L28 22V10L16 4Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-accent"
                />
                <path
                  d="M16 16L4 10M16 16L28 10M16 16V28"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-brand-purple"
                />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold text-foreground tracking-tight">
                Framecraft Studio
              </span>
              <span className="text-xs font-mono text-muted-foreground tracking-wider">
                DESIGNING WORLDS
              </span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center space-x-1">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative px-5 py-2 text-sm font-medium text-text-secondary hover:text-foreground transition-colors duration-300 group"
              >
                <span className="relative z-10">{item.label}</span>
                <span className="absolute inset-0 bg-surface/50 rounded-md scale-0 group-hover:scale-100 transition-transform duration-300 ease-out-custom" />
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center space-x-4">
            <Link
              href="/vision"
              className="px-6 py-2.5 text-sm font-semibold text-accent-foreground bg-accent rounded-md hover:bg-accent/90 hover:shadow-glow-cyan transition-all duration-300 ease-out-custom hover:-translate-y-0.5"
            >
              Explore Our Vision
            </Link>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-foreground hover:text-accent transition-colors duration-300"
            aria-label="Toggle mobile menu"
          >
            <Icon
              name={isMobileMenuOpen ? 'XMarkIcon' : 'Bars3Icon'}
              size={24}
              variant="outline"
            />
          </button>
        </div>
      </div>

      <div
        className={`lg:hidden fixed inset-0 top-20 bg-primary/98 backdrop-blur-lg transition-all duration-400 ease-out-custom ${
          isMobileMenuOpen
            ? 'opacity-100 pointer-events-auto' :'opacity-0 pointer-events-none'
        }`}
      >
        <nav className="flex flex-col p-6 space-y-2">
          {navigationItems.map((item, index) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="px-4 py-3 text-base font-medium text-text-secondary hover:text-foreground hover:bg-surface/50 rounded-md transition-all duration-300"
              style={{
                animationDelay: `${index * 50}ms`,
                animation: isMobileMenuOpen ? 'slideUp 400ms ease-out-custom forwards' : 'none',
              }}
            >
              {item.label}
            </Link>
          ))}
          <div className="pt-4 border-t border-border">
            <Link
              href="/vision"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block w-full px-4 py-3 text-center text-sm font-semibold text-accent-foreground bg-accent rounded-md hover:bg-accent/90 transition-all duration-300"
            >
              Explore Our Vision
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;