'use client';

const GrowthVisualization = () => {
  const growthData = [
    {
      year: '2015',
      marketSize: '₹4,950 Cr',
      professionals: '80,000',
      studios: '300',
      percentage: 30
    },
    {
      year: '2018',
      marketSize: '₹7,500 Cr',
      professionals: '150,000',
      studios: '500',
      percentage: 50
    },
    {
      year: '2021',
      marketSize: '₹10,250 Cr',
      professionals: '220,000',
      studios: '750',
      percentage: 70
    },
    {
      year: '2024',
      marketSize: '₹13,500 Cr',
      professionals: '300,000',
      studios: '1,000+',
      percentage: 100
    }
  ];

  const keyMetrics = [
    {
      metric: 'Export Revenue',
      value: '60%',
      description: 'Of total revenue comes from international markets',
      trend: '+15% YoY'
    },
    {
      metric: 'Employment Growth',
      value: '18%',
      description: 'Annual growth in animation jobs across India',
      trend: 'Consistent'
    },
    {
      metric: 'Studio Expansion',
      value: '12%',
      description: 'New studios established annually',
      trend: 'Accelerating'
    },
    {
      metric: 'Technology Adoption',
      value: '85%',
      description: 'Studios using advanced AI/ML tools',
      trend: 'Rapid'
    }
  ];

  return (
    <section className="py-16 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Exponential Growth Story
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            India's animation industry has transformed from a nascent sector to a global powerhouse, showing consistent double-digit growth
          </p>
        </div>

        {/* Growth Chart Visualization */}
        <div className="bg-surface/30 border border-border rounded-xl p-8 mb-12">
          <div className="mb-8">
            <h3 className="text-xl font-bold text-foreground mb-2">Market Evolution (2015-2024)</h3>
            <p className="text-sm text-muted-foreground">Tracking market size, workforce, and studio growth</p>
          </div>

          <div className="space-y-8">
            {growthData?.map((data, index) => (
              <div key={data?.year} className="relative">
                <div className="flex items-center justify-between mb-2">
                  <div className="text-lg font-bold text-foreground">{data?.year}</div>
                  <div className="flex items-center gap-6 text-sm">
                    <div>
                      <span className="text-muted-foreground">Market Size: </span>
                      <span className="font-semibold text-accent">{data?.marketSize}</span>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Workforce: </span>
                      <span className="font-semibold text-foreground">{data?.professionals}</span>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Studios: </span>
                      <span className="font-semibold text-foreground">{data?.studios}</span>
                    </div>
                  </div>
                </div>
                
                {/* Progress Bar */}
                <div className="relative h-12 bg-surface/50 rounded-lg overflow-hidden">
                  <div
                    className="absolute inset-y-0 left-0 bg-gradient-to-r from-accent/80 to-accent transition-all duration-1000 ease-out"
                    style={{ width: `${data?.percentage}%` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
                  </div>
                  <div className="absolute inset-0 flex items-center px-4">
                    <div className="text-xs font-semibold text-foreground/70">
                      {index === growthData?.length - 1 ? 'Current Industry Scale' : 'Historical Growth'}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-8 border-t border-border">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm text-muted-foreground mb-1">Projected 2027</div>
                <div className="text-2xl font-bold text-accent">₹20,000+ Cr</div>
              </div>
              <div className="text-right">
                <div className="text-sm text-muted-foreground mb-1">CAGR (2015-2024)</div>
                <div className="text-2xl font-bold text-accent">12.2%</div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {keyMetrics?.map((item) => (
            <div
              key={item?.metric}
              className="bg-surface/50 backdrop-blur-sm border border-border rounded-xl p-6 hover:border-accent/50 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="text-3xl font-bold text-accent">{item?.value}</div>
                <div className="px-3 py-1 bg-accent/10 text-accent text-xs font-semibold rounded-full">
                  {item?.trend}
                </div>
              </div>
              <h3 className="text-sm font-bold text-foreground mb-2">{item?.metric}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{item?.description}</p>
            </div>
          ))}
        </div>

        {/* Growth Insights */}
        <div className="mt-12 bg-gradient-to-br from-accent/5 to-surface/30 border border-accent/20 rounded-xl p-8">
          <h3 className="text-xl font-bold text-foreground mb-4">Growth Drivers</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-accent/10 rounded-lg">
                  <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-foreground">Technology Advancement</h4>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Adoption of AI, cloud rendering, and real-time engines democratizing high-quality production
              </p>
            </div>
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-accent/10 rounded-lg">
                  <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-foreground">Talent Pool Expansion</h4>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                World-class animation schools and online education creating skilled professionals at scale
              </p>
            </div>
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-accent/10 rounded-lg">
                  <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-foreground">Global Demand Surge</h4>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Streaming platforms and digital transformation creating insatiable content appetite globally
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GrowthVisualization;