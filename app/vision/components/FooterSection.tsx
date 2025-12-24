import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

export default function FooterSection() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    explore: [
      { label: 'Home', href: '/home' },
      { label: 'Vision', href: '/vision' },
      { label: 'Globe', href: '/globe' },
      { label: 'Insights', href: '/blog-article' }
    ],
    connect: [
      { label: 'LinkedIn', href: '#', icon: 'LinkIcon' },
      { label: 'Twitter', href: '#', icon: 'LinkIcon' },
      { label: 'Instagram', href: '#', icon: 'LinkIcon' },
      { label: 'YouTube', href: '#', icon: 'LinkIcon' }
    ]
  };

  return (
    <footer className="relative bg-primary border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="lg:col-span-2">
            <Link href="/home" className="flex items-center space-x-3 mb-6 group">
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
            <p className="text-text-secondary leading-relaxed mb-6 max-w-md">
              We design worlds before they exist—positioning animation as a transformative tool for India's creative economy and cultural storytelling.
            </p>
            <p className="text-sm text-muted-foreground font-mono">
              Made in India. Built for 2047 and beyond.
            </p>
          </div>

          <div>
            <h3 className="text-foreground font-bold mb-6 text-lg">Explore</h3>
            <ul className="space-y-4">
              {footerLinks.explore.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-text-secondary hover:text-accent transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-foreground font-bold mb-6 text-lg">Connect</h3>
            <ul className="space-y-4">
              {footerLinks.connect.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text-secondary hover:text-accent transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <Icon name={link.icon as any} size={16} variant="outline" />
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      {link.label}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              &copy; {currentYear} Framecraft Studio. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link
                href="#"
                className="text-sm text-muted-foreground hover:text-accent transition-colors duration-300"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="text-sm text-muted-foreground hover:text-accent transition-colors duration-300"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}