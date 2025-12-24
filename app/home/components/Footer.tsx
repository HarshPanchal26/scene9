'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

interface FooterProps {
  className?: string;
}

const Footer = ({ className = '' }: FooterProps) => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [currentYear, setCurrentYear] = useState('2025');

  useEffect(() => {
    setIsHydrated(true);
    setCurrentYear(new Date().getFullYear().toString());
  }, []);

  const footerLinks = {
    explore: [
      { label: 'Our Vision', href: '/vision' },
      { label: 'Global Impact', href: '/globe' },
      { label: 'Insights', href: '/blog-article' },
    ],
    connect: [
      { label: 'Start a Conversation', href: '#' },
      { label: 'Collaborate', href: '#' },
      { label: 'Join Our Team', href: '#' },
    ],
  };

  const socialLinks = [
    { name: 'Twitter', icon: 'ChatBubbleLeftIcon', href: '#' },
    { name: 'LinkedIn', icon: 'BriefcaseIcon', href: '#' },
    { name: 'Instagram', icon: 'CameraIcon', href: '#' },
    { name: 'YouTube', icon: 'PlayIcon', href: '#' },
  ];

  if (!isHydrated) {
    return (
      <footer className={`bg-primary border-t border-border ${className}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
          <div className="text-center">
            <p className="text-sm text-text-secondary">
              © 2025 Framecraft Studio. Designing worlds before they exist.
            </p>
          </div>
        </div>
      </footer>
    );
  }

  return (
    <footer className={`bg-primary border-t border-border ${className}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="space-y-6">
            <Link href="/home" className="inline-block group">
              <div className="flex items-center space-x-3">
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
              </div>
            </Link>
            <p className="text-sm text-text-secondary leading-relaxed">
              Animation as a tool for compressing time and expanding imagination. Made in India. Built for 2047 and beyond.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-mono text-accent uppercase tracking-wider">
              Explore
            </h3>
            <ul className="space-y-3">
              {footerLinks.explore.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-text-secondary hover:text-accent transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-mono text-accent uppercase tracking-wider">
              Connect
            </h3>
            <ul className="space-y-3">
              {footerLinks.connect.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-text-secondary hover:text-accent transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-mono text-accent uppercase tracking-wider">
              Follow Us
            </h3>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-surface border border-border flex items-center justify-center hover:border-accent hover:bg-accent/10 transition-all duration-300"
                  aria-label={social.name}
                >
                  <Icon
                    name={social.icon as any}
                    size={18}
                    className="text-text-secondary hover:text-accent"
                  />
                </a>
              ))}
            </div>
            <p className="text-xs text-text-secondary leading-relaxed pt-4">
              Join our community and stay updated on the future of animation
            </p>
          </div>
        </div>

        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-text-secondary">
              © {currentYear} Framecraft Studio. Designing worlds before they exist.
            </p>
            <div className="flex gap-6">
              <Link
                href="#"
                className="text-sm text-text-secondary hover:text-accent transition-colors duration-300"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="text-sm text-text-secondary hover:text-accent transition-colors duration-300"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;