'use client';

import { useState, useEffect } from 'react';

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  category: 'past' | 'present' | 'future';
}

const timelineEvents: TimelineEvent[] = [
  {
    year: "2020",
    title: "Foundation & Philosophy",
    description: "Framecraft Studio established with a vision to position India as a global animation powerhouse. We began with a simple question: What if animation could change how India sees itself?",
    category: "past"
  },
  {
    year: "2023",
    title: "Industry Recognition",
    description: "Our work gained recognition for blending technical excellence with cultural storytelling. We proved that Indian studios can compete globally while maintaining authentic creative voices.",
    category: "past"
  },
  {
    year: "2025",
    title: "Present Momentum",
    description: "Today, we're expanding our capabilities in 3D rendering, VFX, and immersive experiences. Our team collaborates with visionary founders, educators, and cultural organizations across India and beyond.",
    category: "present"
  },
  {
    year: "2030",
    title: "Creative Economy Leadership",
    description: "India's animation industry becomes a ₹50,000 crore sector. Framecraft leads in establishing quality standards, training next-generation artists, and creating globally competitive original content.",
    category: "future"
  },
  {
    year: "2040",
    title: "Global Collaboration Hub",
    description: "Indian animation studios are preferred partners for international productions. Our cultural storytelling expertise and technical mastery make India the go-to destination for meaningful animated content.",
    category: "future"
  },
  {
    year: "2047",
    title: "Vision Realized",
    description: "On India's centenary of independence, animation is recognized as a cornerstone of cultural expression and economic growth. Framecraft's philosophy of 'designing worlds before they exist' has helped shape this reality.",
    category: "future"
  }
];

export default function TimelineSection() {
  const [isHydrated, setIsHydrated] = useState(false);
  const [activeYear, setActiveYear] = useState<string>('2025');

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  if (!isHydrated) {
    return (
      <section className="relative py-24 lg:py-32 bg-gradient-to-b from-background to-secondary">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Journey to 2047
            </h2>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative py-24 lg:py-32 bg-gradient-to-b from-background to-secondary overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-accent to-transparent" />
        <div className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-transparent via-brand-purple to-transparent" />
        <div className="absolute top-0 left-3/4 w-px h-full bg-gradient-to-b from-transparent via-accent to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block px-6 py-2 bg-surface/50 backdrop-blur-sm rounded-full border border-border mb-6">
            <span className="text-sm font-mono text-accent tracking-wider">TIMELINE</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Journey to 2047
          </h2>
          <p className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto">
            Tracing our path from foundation to India's creative future—a roadmap of transformation through animation.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent via-brand-purple to-accent transform -translate-x-1/2 hidden lg:block" />

          <div className="space-y-16">
            {timelineEvents.map((event, index) => (
              <div
                key={event.year}
                className={`relative flex flex-col lg:flex-row items-center gap-8 ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                <div className={`flex-1 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                  <div
                    className={`inline-block bg-surface/50 backdrop-blur-sm rounded-xl p-8 border transition-all duration-500 cursor-pointer ${
                      activeYear === event.year
                        ? 'border-accent shadow-glow-cyan scale-105'
                        : 'border-border hover:border-accent/50 hover:shadow-lg'
                    }`}
                    onClick={() => setActiveYear(event.year)}
                  >
                    <div className={`inline-block px-4 py-1 rounded-full mb-4 ${
                      event.category === 'past' ? 'bg-text-secondary/20 text-text-secondary' :
                      event.category === 'present'? 'bg-accent/20 text-accent' : 'bg-brand-purple/20 text-brand-purple'
                    }`}>
                      <span className="text-xs font-mono uppercase tracking-wider">
                        {event.category}
                      </span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                      {event.title}
                    </h3>
                    <p className="text-text-secondary leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                </div>

                <div className="relative flex-shrink-0">
                  <div className={`w-20 h-20 rounded-full flex items-center justify-center border-4 transition-all duration-500 ${
                    activeYear === event.year
                      ? 'bg-accent border-accent shadow-glow-cyan scale-125'
                      : 'bg-surface border-border'
                  }`}>
                    <span className={`text-lg font-bold ${
                      activeYear === event.year ? 'text-accent-foreground' : 'text-foreground'
                    }`}>
                      {event.year.slice(-2)}
                    </span>
                  </div>
                </div>

                <div className="flex-1 hidden lg:block" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}