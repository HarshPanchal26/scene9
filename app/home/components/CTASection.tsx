import Icon from '@/components/ui/AppIcon';

interface CTASectionProps {
  className?: string;
}

const CTASection = ({ className = '' }: CTASectionProps) => {
  const ctaCards = [
    {
      title: 'Explore Our Vision',
      description: 'Discover how we see animation shaping India\'s future by 2047',
      icon: 'EyeIcon',
      link: '/vision',
      gradient: 'from-brand-purple/20 to-transparent',
    },
    {
      title: 'See Global Impact',
      description: 'View our collaborative approach from India to the world',
      icon: 'GlobeAltIcon',
      link: '/globe',
      gradient: 'from-accent/20 to-transparent',
    },
    {
      title: 'Read Our Insights',
      description: 'Explore thought leadership on animation and creativity',
      icon: 'BookOpenIcon',
      link: '/blog-article',
      gradient: 'from-brand-coral/20 to-transparent',
    },
  ];

  return (
    <section className={`py-24 px-6 lg:px-12 bg-background ${className}`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Ready to explore
            <span className="block text-accent mt-2">what's possible?</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Dive deeper into our world and discover how we're shaping the future of animation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ctaCards.map((card, index) => (
            <button
              key={index}
              onClick={() => {
                window.location.href = card.link;
              }}
              className="group relative p-8 rounded-xl bg-surface border border-border hover:border-accent transition-all duration-300 hover:shadow-glow-cyan text-left h-full"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl`} />
              
              <div className="relative space-y-6">
                <div className="w-16 h-16 rounded-lg bg-accent/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Icon name={card.icon as any} size={32} className="text-accent" />
                </div>

                <div className="space-y-3">
                  <h3 className="text-2xl font-bold text-foreground group-hover:text-accent transition-colors duration-300">
                    {card.title}
                  </h3>
                  <p className="text-text-secondary leading-relaxed">
                    {card.description}
                  </p>
                </div>

                <div className="flex items-center text-accent font-medium text-sm group-hover:translate-x-2 transition-transform duration-300">
                  <span>Learn more</span>
                  <Icon name="ArrowRightIcon" size={16} className="ml-2" />
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CTASection;