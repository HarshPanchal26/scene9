import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import IndiaAnimationShowcase from './components/IndiaAnimationShowcase';

export const metadata: Metadata = {
  title: 'India\'s Animation Journey - Framecraft Studio',
  description: 'Discover India\'s remarkable contribution to the global animation industry. Explore how Indian creativity and innovation are transforming animation and related fields, creating meaningful impact across industries worldwide.',
};

export default function GlobePage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      <div className="pt-20">
        <IndiaAnimationShowcase />
      </div>

      <footer className="bg-surface/50 border-t border-border py-12 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-4">Framecraft Studio</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Designing worlds before they exist. Made in India. Built for 2047 and beyond.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-4">Explore</h3>
              <ul className="space-y-2">
                <li>
                  <a href="/home" className="text-sm text-muted-foreground hover:text-accent transition-colors duration-300">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/vision" className="text-sm text-muted-foreground hover:text-accent transition-colors duration-300">
                    Vision
                  </a>
                </li>
                <li>
                  <a href="/blog-article" className="text-sm text-muted-foreground hover:text-accent transition-colors duration-300">
                    Insights
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-4">Connect</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Let's collaborate on projects that matter.
              </p>
              <a
                href="mailto:hello@framecraft.studio"
                className="text-sm text-accent hover:text-accent/80 transition-colors duration-300"
              >
                hello@framecraft.studio
              </a>
            </div>
          </div>
          <div className="pt-8 border-t border-border text-center">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Framecraft Studio. Animation as a tool for compressing time and expanding imagination.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}