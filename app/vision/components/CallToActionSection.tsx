'use client';

import { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

export default function CallToActionSection() {
  const [isHydrated, setIsHydrated] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setTimeout(() => {
        setEmail('');
        setIsSubmitted(false);
      }, 3000);
    }
  };

  if (!isHydrated) {
    return (
      <section className="relative py-24 lg:py-32 bg-gradient-to-b from-secondary to-background">
        <div className="max-w-5xl mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Join the Movement
          </h2>
        </div>
      </section>
    );
  }

  return (
    <section className="relative py-24 lg:py-32 bg-gradient-to-b from-secondary to-background overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-purple rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="max-w-5xl mx-auto px-6 lg:px-12 text-center relative z-10">
        <div className="inline-block px-6 py-2 bg-surface/50 backdrop-blur-sm rounded-full border border-border mb-8">
          <span className="text-sm font-mono text-brand-purple tracking-wider">BE PART OF THE FUTURE</span>
        </div>

        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
          Join the Movement
        </h2>

        <p className="text-xl md:text-2xl text-text-secondary max-w-3xl mx-auto mb-12 leading-relaxed">
          Whether you're a founder with a vision, an educator shaping minds, or a creative seeking meaningful work—let's design India's future together.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-surface/30 backdrop-blur-sm rounded-xl p-8 border border-border hover:border-accent/50 transition-all duration-300 hover:shadow-glow-cyan">
            <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Icon name="DocumentArrowDownIcon" size={32} className="text-accent" variant="outline" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">Vision Document</h3>
            <p className="text-text-secondary mb-6">Download our complete manifesto exploring animation's role in India 2047</p>
            <button className="px-6 py-3 bg-accent text-accent-foreground rounded-md font-semibold hover:bg-accent/90 transition-all duration-300 w-full">
              Download PDF
            </button>
          </div>

          <div className="bg-surface/30 backdrop-blur-sm rounded-xl p-8 border border-border hover:border-accent/50 transition-all duration-300 hover:shadow-glow-cyan">
            <div className="w-16 h-16 bg-brand-purple/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Icon name="VideoCameraIcon" size={32} className="text-brand-purple" variant="outline" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">Webinar Series</h3>
            <p className="text-text-secondary mb-6">Join our monthly discussions on animation, creativity, and India's future</p>
            <button className="px-6 py-3 bg-surface text-foreground rounded-md font-semibold border border-border hover:bg-surface/80 transition-all duration-300 w-full">
              Register Now
            </button>
          </div>

          <div className="bg-surface/30 backdrop-blur-sm rounded-xl p-8 border border-border hover:border-accent/50 transition-all duration-300 hover:shadow-glow-cyan">
            <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Icon name="ChatBubbleLeftRightIcon" size={32} className="text-success" variant="outline" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">Strategy Session</h3>
            <p className="text-text-secondary mb-6">Book a consultation to explore how animation can transform your vision</p>
            <button className="px-6 py-3 bg-surface text-foreground rounded-md font-semibold border border-border hover:bg-surface/80 transition-all duration-300 w-full">
              Book Session
            </button>
          </div>
        </div>

        <div className="max-w-2xl mx-auto bg-surface/50 backdrop-blur-sm rounded-2xl p-8 border border-border">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Stay Connected
          </h3>
          <p className="text-text-secondary mb-6">
            Receive monthly insights on animation, creativity, and India's evolving creative economy.
          </p>

          {isSubmitted ? (
            <div className="flex items-center justify-center gap-3 py-4 text-success">
              <Icon name="CheckCircleIcon" size={24} variant="solid" />
              <span className="font-semibold">Thank you! Check your inbox for confirmation.</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your.email@example.com"
                required
                className="flex-1 px-6 py-4 bg-input text-foreground rounded-md border border-border focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all duration-300"
              />
              <button
                type="submit"
                className="px-8 py-4 bg-accent text-accent-foreground rounded-md font-semibold hover:bg-accent/90 hover:shadow-glow-cyan transition-all duration-300 hover:-translate-y-1 whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          )}

          <p className="text-xs text-text-secondary mt-4">
            We respect your privacy. Unsubscribe anytime. No spam, just meaningful insights.
          </p>
        </div>
      </div>
    </section>
  );
}