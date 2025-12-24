'use client';

import { useState } from 'react';
import IndustryTimeline from './IndustryTimeline';
import ImpactMetrics from './ImpactMetrics';
import IndustrySectors from './IndustrySectors';
import GrowthVisualization from './GrowthVisualization';

const IndiaAnimationShowcase = () => {
  const [selectedDecade, setSelectedDecade] = useState<string>('2020s');

  return (
    <>
      {/* Hero Section */}
      <section className="py-16 px-6 lg:px-12 bg-gradient-to-br from-surface/30 via-background to-surface/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block mb-6 px-6 py-2 bg-accent/10 border border-accent/30 rounded-full">
              <span className="text-accent font-semibold text-sm tracking-wide">
                INDIA'S ANIMATION LEGACY
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Transforming the World Through
              <span className="block text-accent mt-2">Indian Animation Excellence</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              From traditional storytelling to cutting-edge digital innovation, India's animation industry has evolved into a global powerhouse. Discover how Indian creativity, technical expertise, and cultural richness are reshaping the animation landscape and creating unprecedented business value across industries worldwide.
            </p>
          </div>

          {/* Key Stats Overview */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-surface/50 backdrop-blur-sm border border-border rounded-xl p-6 hover:border-accent/50 transition-all duration-300">
              <div className="flex items-center justify-between mb-3">
                <div className="p-3 bg-accent/10 rounded-lg">
                  <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <span className="text-2xl font-bold text-accent">$1.5B+</span>
              </div>
              <h3 className="text-sm font-semibold text-foreground mb-1">Market Size (2024)</h3>
              <p className="text-xs text-muted-foreground">Growing at 12% CAGR annually</p>
            </div>

            <div className="bg-surface/50 backdrop-blur-sm border border-border rounded-xl p-6 hover:border-accent/50 transition-all duration-300">
              <div className="flex items-center justify-between mb-3">
                <div className="p-3 bg-accent/10 rounded-lg">
                  <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <span className="text-2xl font-bold text-accent">300K+</span>
              </div>
              <h3 className="text-sm font-semibold text-foreground mb-1">Animation Professionals</h3>
              <p className="text-xs text-muted-foreground">Skilled workforce across India</p>
            </div>

            <div className="bg-surface/50 backdrop-blur-sm border border-border rounded-xl p-6 hover:border-accent/50 transition-all duration-300">
              <div className="flex items-center justify-between mb-3">
                <div className="p-3 bg-accent/10 rounded-lg">
                  <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className="text-2xl font-bold text-accent">50+</span>
              </div>
              <h3 className="text-sm font-semibold text-foreground mb-1">Global Markets Served</h3>
              <p className="text-xs text-muted-foreground">Exporting creativity worldwide</p>
            </div>

            <div className="bg-surface/50 backdrop-blur-sm border border-border rounded-xl p-6 hover:border-accent/50 transition-all duration-300">
              <div className="flex items-center justify-between mb-3">
                <div className="p-3 bg-accent/10 rounded-lg">
                  <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <span className="text-2xl font-bold text-accent">1000+</span>
              </div>
              <h3 className="text-sm font-semibold text-foreground mb-1">Studios & Companies</h3>
              <p className="text-xs text-muted-foreground">From startups to enterprises</p>
            </div>
          </div>
        </div>
      </section>

      {/* Historical Timeline */}
      <IndustryTimeline selectedDecade={selectedDecade} onDecadeChange={setSelectedDecade} />

      {/* Growth Visualization */}
      <GrowthVisualization />

      {/* Industry Impact Across Sectors */}
      <IndustrySectors />

      {/* Impact Metrics */}
      <ImpactMetrics />

      {/* Call to Action */}
      <section className="py-16 px-6 lg:px-12 bg-gradient-to-br from-accent/5 via-background to-surface/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Be Part of India's Animation Revolution
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            India's animation industry is not just growing—it's redefining what's possible. From Hollywood blockbusters to cutting-edge VFX, from educational content to immersive experiences, Indian artists and studios are at the forefront of global innovation. Join us in shaping the future of visual storytelling.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/vision"
              className="px-8 py-3 bg-accent text-accent-foreground font-semibold rounded-lg hover:bg-accent/90 hover:shadow-glow-cyan transition-all duration-300"
            >
              Explore Our Vision
            </a>
            <a
              href="/blog-article"
              className="px-8 py-3 bg-surface text-foreground font-semibold rounded-lg border border-border hover:border-accent/50 transition-all duration-300"
            >
              Read Industry Insights
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default IndiaAnimationShowcase;