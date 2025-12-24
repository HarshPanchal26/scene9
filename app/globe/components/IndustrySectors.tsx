'use client';

import { useState } from 'react';

const IndustrySectors = () => {
  const [selectedSector, setSelectedSector] = useState<string | null>(null);

  const sectors = [
  {
    id: 'entertainment',
    name: 'Entertainment & Media',
    icon: 'M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z',
    description: 'Films, TV shows, OTT content, and streaming platforms',
    impact: 'Indian animation powers 40% of global animation outsourcing, contributing to blockbusters and binge-worthy series worldwide.',
    examples: ['Feature films & series', 'VFX for movies', 'OTT platform content', 'Music videos'],
    businessValue: 'Reduces production costs by 50-60% while maintaining Hollywood-quality standards',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1bd7fa338-1764989519299.png",
    alt: 'Film production set with cameras and professional lighting equipment'
  },
  {
    id: 'gaming',
    name: 'Gaming & Interactive',
    icon: 'M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z',
    description: 'Video games, mobile games, and immersive experiences',
    impact: 'Indian studios create characters, environments, and cinematics for AAA games and mobile hits, reaching billions of players.',
    examples: ['Character design', '3D environment art', 'Game cinematics', 'Mobile game assets'],
    businessValue: 'Accelerates game development timelines by 30-40% with high-quality art production',
    image: "https://images.unsplash.com/photo-1632222294783-ed61bd9e6ed7",
    alt: 'Gaming controller with colorful neon lighting and digital screen in background'
  },
  {
    id: 'education',
    name: 'Education & E-Learning',
    icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253',
    description: 'Educational content, explainer videos, and training materials',
    impact: 'Animation makes complex concepts accessible to millions of students, revolutionizing how India and the world learns.',
    examples: ['STEM education videos', 'Corporate training', 'Medical education', 'Online courses'],
    businessValue: 'Improves learning retention by 80% compared to traditional methods while scaling infinitely',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1e398f1c3-1765060796077.png",
    alt: 'Modern classroom with digital screens showing educational animated content'
  },
  {
    id: 'advertising',
    name: 'Advertising & Marketing',
    icon: 'M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z',
    description: 'Brand campaigns, product launches, and social media content',
    impact: 'Animated ads cut through noise, delivering 3x better engagement than static content across digital platforms.',
    examples: ['TV commercials', 'Social media campaigns', 'Product explainers', 'Brand storytelling'],
    businessValue: 'Increases brand recall by 65% and conversion rates by 35% through compelling visual narratives',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1eb918af9-1764668059026.png",
    alt: 'Creative marketing team reviewing animated advertising content on large display'
  },
  {
    id: 'architecture',
    name: 'Architecture & Real Estate',
    icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4',
    description: 'Architectural visualization and real estate presentations',
    impact: 'Photo-realistic renderings help sell properties before construction, transforming real estate marketing and reducing sales cycles.',
    examples: ['3D walkthroughs', 'Interior design visualization', 'Urban planning', 'Project presentations'],
    businessValue: 'Accelerates sales by 40% and reduces client revision cycles by 60% through clear visualization',
    image: "https://images.unsplash.com/photo-1647007746180-ec37b6f7193b",
    alt: 'Modern architectural building with glass facade and futuristic design elements'
  },
  {
    id: 'healthcare',
    name: 'Healthcare & Medical',
    icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
    description: 'Medical education, patient communication, and surgical planning',
    impact: 'Medical animations simplify complex procedures, improving patient understanding and surgical outcomes across healthcare.',
    examples: ['Surgical simulations', 'Patient education', 'Pharmaceutical MOA', 'Medical device demos'],
    businessValue: 'Improves patient compliance by 75% and reduces medical errors through better communication',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_15af4787e-1764671673883.png",
    alt: 'Medical professional reviewing anatomical 3D animation on digital tablet'
  }];


  return (
    <section className="py-16 px-6 lg:px-12 bg-surface/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Animation's Business Impact Across Industries
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            From entertainment to healthcare, Indian animation expertise is solving real business challenges and creating measurable value
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sectors?.map((sector) =>
          <div
            key={sector?.id}
            onClick={() => setSelectedSector(sector?.id === selectedSector ? null : sector?.id)}
            className={`group cursor-pointer bg-surface border rounded-xl overflow-hidden transition-all duration-300 ${
            selectedSector === sector?.id ?
            'border-accent shadow-glow-cyan' :
            'border-border hover:border-accent/50'}`
            }>

              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                src={sector?.image}
                alt={sector?.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />

                <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/50 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-accent/90 rounded-lg backdrop-blur-sm">
                      <svg className="w-5 h-5 text-accent-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={sector?.icon} />
                      </svg>
                    </div>
                    <h3 className="text-lg font-bold text-foreground">{sector?.name}</h3>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {sector?.description}
                </p>

                {selectedSector === sector?.id &&
              <div className="mt-4 pt-4 border-t border-border space-y-4 animate-fadeIn">
                    <div>
                      <h4 className="text-xs font-semibold text-accent mb-2">BUSINESS IMPACT</h4>
                      <p className="text-sm text-foreground leading-relaxed">{sector?.impact}</p>
                    </div>

                    <div>
                      <h4 className="text-xs font-semibold text-accent mb-2">KEY APPLICATIONS</h4>
                      <div className="flex flex-wrap gap-2">
                        {sector?.examples?.map((example) =>
                    <span
                      key={example}
                      className="px-3 py-1 bg-accent/10 text-accent text-xs font-medium rounded-full">

                            {example}
                          </span>
                    )}
                      </div>
                    </div>

                    <div className="pt-4 border-t border-border">
                      <h4 className="text-xs font-semibold text-accent mb-2">VALUE PROPOSITION</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">{sector?.businessValue}</p>
                    </div>
                  </div>
              }

                <button className="mt-4 text-sm text-accent hover:text-accent/80 font-semibold flex items-center gap-2 transition-colors duration-300">
                  {selectedSector === sector?.id ? 'Show Less' : 'Learn More'}
                  <svg
                  className={`w-4 h-4 transition-transform duration-300 ${
                  selectedSector === sector?.id ? 'rotate-180' : ''}`
                  }
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">

                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Bottom Insight */}
        <div className="mt-12 text-center">
          <div className="inline-block bg-gradient-to-r from-accent/10 to-surface/30 border border-accent/30 rounded-xl p-8 max-w-4xl">
            <h3 className="text-xl font-bold text-foreground mb-3">
              The Universal Language of Business
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Animation transcends language barriers, making it the perfect tool for global businesses. Indian studios combine technical excellence with cost-efficiency, delivering world-class animation that drives measurable ROI across industries. Whether you're educating customers, visualizing products, or creating entertainment, Indian animation expertise makes the impossible, possible.
            </p>
          </div>
        </div>
      </div>
    </section>);

};

export default IndustrySectors;