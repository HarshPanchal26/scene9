'use client';

import { useEffect, useState } from 'react';

interface HeroSectionProps {
  className?: string;
}

const HeroSection = ({ className = '' }: HeroSectionProps) => {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  if (!isHydrated) {
    return (
      <section className={`relative h-screen w-full overflow-hidden ${className}`}>
        <div className="absolute inset-0 bg-gradient-to-b from-background via-primary to-background" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center">
          <div className="max-w-5xl mx-auto space-y-8">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-foreground tracking-tight">
              We design worlds
              <br />
              <span className="text-accent">before they exist</span>
            </h1>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={`relative h-screen w-full overflow-hidden ${className}`}>
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          poster="https://images.pexels.com/photos/3945683/pexels-photo-3945683.jpeg"
        >
          <source
            src="https://cdn.coverr.co/videos/coverr-abstract-digital-particles-7525/1080p.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-primary/60 to-background/90" />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center">
        <div className="max-w-5xl mx-auto space-y-8 animate-fade-in">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-foreground tracking-tight leading-tight">
            We design worlds
            <br />
            <span className="text-accent">before they exist</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-text-secondary max-w-3xl mx-auto font-light leading-relaxed">
            Animation as a tool for compressing time and expanding imagination
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <button
              onClick={() => {
                const capabilitiesSection = document.getElementById('capabilities');
                capabilitiesSection?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-8 py-4 text-base font-semibold text-accent-foreground bg-accent rounded-md hover:bg-accent/90 hover:shadow-glow-cyan transition-all duration-300 ease-out-custom hover:-translate-y-1"
            >
              Explore Capabilities
            </button>
            <button
              onClick={() => {
                window.location.href = '/vision';
              }}
              className="px-8 py-4 text-base font-semibold text-foreground bg-surface border border-border rounded-md hover:bg-surface/80 hover:border-accent transition-all duration-300 ease-out-custom hover:-translate-y-1"
            >
              Our Vision for 2047
            </button>
          </div>
        </div>

        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-accent"
          >
            <path
              d="M12 5V19M12 19L5 12M12 19L19 12"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;