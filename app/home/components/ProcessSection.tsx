import Icon from '@/components/ui/AppIcon';

interface ProcessSectionProps {
  className?: string;
}

const ProcessSection = ({ className = '' }: ProcessSectionProps) => {
  const processSteps = [
    {
      number: '01',
      title: 'Understand',
      description: 'We dive deep into your vision, challenges, and aspirations to understand what truly matters.',
      icon: 'MagnifyingGlassIcon',
    },
    {
      number: '02',
      title: 'Imagine',
      description: 'Together, we explore possibilities and craft narratives that bring your ideas to life.',
      icon: 'LightBulbIcon',
    },
    {
      number: '03',
      title: 'Create',
      description: 'Our team transforms concepts into cinematic experiences with technical excellence.',
      icon: 'PaintBrushIcon',
    },
    {
      number: '04',
      title: 'Evolve',
      description: 'We refine and iterate based on feedback, ensuring every frame serves your purpose.',
      icon: 'ArrowPathIcon',
    },
  ];

  return (
    <section className={`py-24 px-6 lg:px-12 bg-surface ${className}`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-6">
          <p className="text-sm font-mono text-accent uppercase tracking-wider">
            Our Approach
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Collaborative creation
            <span className="block text-accent mt-2">from vision to reality</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            We don't just execute projects—we partner with you to explore possibilities and create experiences that matter.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step, index) => (
            <div
              key={index}
              className="relative group"
            >
              <div className="relative p-8 rounded-xl bg-background border border-border hover:border-accent transition-all duration-300 hover:shadow-glow-cyan h-full">
                <div className="absolute top-0 left-8 transform -translate-y-1/2">
                  <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center text-2xl font-bold text-accent-foreground">
                    {step.number}
                  </div>
                </div>

                <div className="pt-8 space-y-4">
                  <div className="w-12 h-12 rounded-lg bg-surface flex items-center justify-center">
                    <Icon name={step.icon as any} size={24} className="text-accent" />
                  </div>

                  <h3 className="text-2xl font-bold text-foreground group-hover:text-accent transition-colors duration-300">
                    {step.title}
                  </h3>

                  <p className="text-text-secondary leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <Icon name="ArrowRightIcon" size={24} className="text-border" />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;