'use client';

import { useState, useEffect } from 'react';

export default function HeroSection() {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  if (!isHydrated) {
    return (
      <section className="relative min-h-screen flex items-center justify-center bg-background overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-background opacity-90" />
        <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-12 text-center">
          <div className="space-y-8">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-foreground leading-tight">
              Designing Worlds<br />Before They Exist
            </h1>
            <p className="text-xl md:text-2xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              A manifesto for India's creative future, where animation becomes the language of imagination and transformation.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-background overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-background opacity-90" />
      
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-purple/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-12 text-center">
        <div className="space-y-8 animate-fadeIn">
          <div className="inline-block px-6 py-2 bg-surface/50 backdrop-blur-sm rounded-full border border-border mb-6">
            <span className="text-sm font-mono text-accent tracking-wider">VISION 2047</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-foreground leading-tight">
            Designing Worlds<br />Before They Exist
          </h1>
          
          <p className="text-xl md:text-2xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            A manifesto for India's creative future, where animation becomes the language of imagination and transformation.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <button className="px-8 py-4 bg-accent text-accent-foreground rounded-md font-semibold hover:bg-accent/90 hover:shadow-glow-cyan transition-all duration-300 hover:-translate-y-1">
              Download Vision Document
            </button>
            <button className="px-8 py-4 bg-surface/50 backdrop-blur-sm text-foreground rounded-md font-semibold border border-border hover:bg-surface transition-all duration-300">
              Explore Timeline
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-accent rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-accent rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}