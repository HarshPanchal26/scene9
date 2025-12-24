import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface PhilosophySectionProps {
  className?: string;
}

const PhilosophySection = ({ className = '' }: PhilosophySectionProps) => {
  const philosophyPoints = [
  {
    icon: 'ClockIcon',
    title: 'Compressing Time',
    description: 'Animation allows us to show years of progress in minutes, helping stakeholders understand complex journeys instantly.'
  },
  {
    icon: 'LightBulbIcon',
    title: 'Visualizing the Impossible',
    description: 'We make abstract concepts tangible, turning ideas that exist only in minds into experiences that move hearts.'
  },
  {
    icon: 'GlobeAsiaAustraliaIcon',
    title: 'India to the World',
    description: 'Built in India with a global perspective, we contribute to positioning Indian creativity on the world stage by 2047.'
  }];


  return (
    <section className={`py-24 px-6 lg:px-12 bg-gradient-to-b from-background via-surface to-background ${className}`}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-sm font-mono text-accent uppercase tracking-wider">
                Our Philosophy
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
                Animation as a tool for
                <span className="block text-accent mt-2">expanding imagination</span>
              </h2>
            </div>

            <p className="text-lg text-text-secondary leading-relaxed">
              We believe animation is more than moving images—it's a medium for compressing time, visualizing impossible ideas, and helping India imagine its future. Every frame we create is an investment in possibility.
            </p>

            <div className="space-y-6">
              {philosophyPoints.map((point, index) =>
              <div
                key={index}
                className="flex gap-4 p-6 rounded-lg bg-surface/50 border border-border/50 hover:border-accent/50 transition-all duration-300 hover:translate-x-2">

                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center">
                      <Icon name={point.icon as any} size={24} className="text-accent" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-foreground">
                      {point.title}
                    </h3>
                    <p className="text-text-secondary leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                </div>
              )}
            </div>

            <button
              onClick={() => {
                window.location.href = '/vision';
              }}
              className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-accent-foreground bg-accent rounded-md hover:bg-accent/90 hover:shadow-glow-cyan transition-all duration-300 ease-out-custom hover:-translate-y-1">

              <span>Read our full vision</span>
              <Icon name="ArrowRightIcon" size={20} />
            </button>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-cinematic">
              <AppImage
                src="https://img.rocket.new/generatedImages/rocket_gen_img_1ba5e8c5a-1764502431940.png"
                alt="Futuristic 3D rendered workspace showing holographic displays with animation timelines and creative tools"
                className="w-full h-full object-cover" />

              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent" />
            </div>

            <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
            <div className="absolute -top-8 -left-8 w-64 h-64 bg-brand-purple/10 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>);

};

export default PhilosophySection;