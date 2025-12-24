'use client';

import { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

interface NewsletterSectionProps {
  className?: string;
}

const NewsletterSection = ({ className = '' }: NewsletterSectionProps) => {
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
        setIsSubmitted(false);
        setEmail('');
      }, 3000);
    }
  };

  if (!isHydrated) {
    return (
      <section className={`py-24 px-6 lg:px-12 bg-gradient-to-b from-background to-surface ${className}`}>
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Join the future of animation
            </h2>
            <p className="text-xl text-text-secondary leading-relaxed">
              Subscribe to receive insights on animation, creativity, and India's journey to 2047
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={`py-24 px-6 lg:px-12 bg-gradient-to-b from-background to-surface ${className}`}>
      <div className="max-w-4xl mx-auto">
        <div className="relative rounded-2xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-consciousness opacity-10" />
          
          <div className="relative p-12 md:p-16 text-center space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/20 mb-4">
                <Icon name="EnvelopeIcon" size={32} className="text-accent" />
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                Join the future of animation
              </h2>
              
              <p className="text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed">
                Subscribe to receive insights on animation, creativity, and India's journey to 2047
              </p>
            </div>

            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                <div className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="flex-1 px-6 py-4 rounded-lg bg-background border border-border text-foreground placeholder:text-text-secondary focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300"
                  />
                  <button
                    type="submit"
                    className="px-8 py-4 text-base font-semibold text-accent-foreground bg-accent rounded-lg hover:bg-accent/90 hover:shadow-glow-cyan transition-all duration-300 ease-out-custom hover:-translate-y-1 whitespace-nowrap"
                  >
                    Subscribe
                  </button>
                </div>
                <p className="text-sm text-text-secondary mt-4">
                  We respect your privacy. Unsubscribe anytime.
                </p>
              </form>
            ) : (
              <div className="flex items-center justify-center gap-3 text-success">
                <Icon name="CheckCircleIcon" size={24} variant="solid" />
                <span className="text-lg font-medium">
                  Thank you for subscribing!
                </span>
              </div>
            )}

            <div className="flex flex-wrap items-center justify-center gap-6 pt-8 border-t border-border/50">
              <p className="text-sm text-text-secondary">Follow us:</p>
              {['twitter', 'linkedin', 'instagram', 'youtube'].map((platform) => (
                <button
                  key={platform}
                  onClick={() => {}}
                  className="w-10 h-10 rounded-full bg-surface border border-border flex items-center justify-center hover:border-accent hover:bg-accent/10 transition-all duration-300"
                  aria-label={`Follow us on ${platform}`}
                >
                  <Icon
                    name={
                      platform === 'twitter' ?'ChatBubbleLeftIcon'
                        : platform === 'linkedin' ?'BriefcaseIcon'
                        : platform === 'instagram' ?'CameraIcon' :'PlayIcon'
                    }
                    size={18}
                    className="text-text-secondary group-hover:text-accent"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;