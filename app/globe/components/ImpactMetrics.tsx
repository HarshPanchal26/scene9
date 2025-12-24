'use client';

const ImpactMetrics = () => {
  const globalContributions = [
    {
      title: 'Hollywood Collaboration',
      stat: '200+',
      description: 'Major Hollywood productions featuring Indian VFX and animation work',
      details: 'From Oscar-winning films to blockbuster franchises, Indian artists contribute to global cinema'
    },
    {
      title: 'Streaming Content',
      stat: '30%',
      description: 'Of global animated content outsourced to Indian studios',
      details: 'Netflix, Amazon Prime, Disney+ rely heavily on Indian animation production capabilities'
    },
    {
      title: 'Global Workforce',
      stat: '15%',
      description: 'Of world\'s animation professionals are Indian',
      details: 'Indian talent powers animation industries across continents, from studios to freelancing'
    },
    {
      title: 'Cost Advantage',
      stat: '50-60%',
      description: 'Lower production costs compared to Western markets',
      details: 'Without compromising quality, making premium animation accessible globally'
    }
  ];

  const futureOutlook = [
    {
      year: '2025',
      prediction: 'AI-Powered Pipelines Mainstream',
      impact: 'Indian studios lead in AI-human hybrid workflows, reducing production time by 40%'
    },
    {
      year: '2027',
      prediction: 'Virtual Production Hubs',
      impact: 'India becomes Asia\'s virtual production center with 50+ LED volume stages'
    },
    {
      year: '2030',
      prediction: 'Original IP Dominance',
      impact: 'Indian animated franchises generate $2B+ annually in global markets'
    },
    {
      year: '2047',
      prediction: 'Global Animation Capital',
      impact: 'India establishes itself as the world\'s premier animation and VFX destination'
    }
  ];

  return (
    <section className="py-16 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Global Contributions */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              India's Global Animation Footprint
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Quantifying India's contribution to the worldwide animation ecosystem
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {globalContributions?.map((item) => (
              <div
                key={item?.title}
                className="bg-gradient-to-br from-surface/50 to-surface/30 backdrop-blur-sm border border-border rounded-xl p-6 hover:border-accent/50 hover:shadow-lg transition-all duration-300"
              >
                <div className="text-4xl font-bold text-accent mb-3">{item?.stat}</div>
                <h3 className="text-lg font-bold text-foreground mb-3">{item?.title}</h3>
                <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                  {item?.description}
                </p>
                <p className="text-xs text-muted-foreground/80 leading-relaxed italic">
                  {item?.details}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Future Outlook */}
        <div className="bg-gradient-to-br from-accent/5 to-surface/30 border border-accent/20 rounded-xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Vision 2047: India's Animation Future
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Roadmap to becoming the world's animation and VFX capital
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-accent via-accent/50 to-accent/20 hidden lg:block" />

            <div className="space-y-8">
              {futureOutlook?.map((milestone, index) => (
                <div key={milestone?.year} className="relative flex items-start gap-6">
                  {/* Year Badge */}
                  <div className="flex-shrink-0 w-16 h-16 bg-accent text-accent-foreground rounded-full flex items-center justify-center font-bold text-sm shadow-glow-cyan z-10">
                    {milestone?.year}
                  </div>

                  {/* Content */}
                  <div className="flex-1 bg-surface/50 border border-border rounded-xl p-6 hover:border-accent/50 transition-all duration-300">
                    <h3 className="text-xl font-bold text-foreground mb-3">
                      {milestone?.prediction}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {milestone?.impact}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 text-center">
            <div className="inline-block bg-surface/70 border border-border rounded-xl p-8">
              <h3 className="text-xl font-bold text-foreground mb-3">
                The Next Chapter
              </h3>
              <p className="text-muted-foreground leading-relaxed max-w-2xl">
                India's animation journey from humble beginnings to global powerhouse demonstrates the power of talent, technology, and vision. As we move toward 2047, Indian creativity will not just participate in global animation—it will define it. The best is yet to come.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
            Ready to Leverage Animation for Your Business?
          </h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Whether you're in entertainment, healthcare, education, or any industry in between, animation can transform how you communicate, engage, and grow. Let's explore what's possible.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/home"
              className="px-8 py-3 bg-accent text-accent-foreground font-semibold rounded-lg hover:bg-accent/90 hover:shadow-glow-cyan transition-all duration-300"
            >
              Start Your Project
            </a>
            <a
              href="/vision"
              className="px-8 py-3 bg-surface text-foreground font-semibold rounded-lg border border-border hover:border-accent/50 transition-all duration-300"
            >
              Learn Our Approach
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactMetrics;