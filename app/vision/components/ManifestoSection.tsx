interface ManifestoPoint {
  id: number;
  title: string;
  description: string;
  icon: string;
}

const manifestoPoints: ManifestoPoint[] = [
  {
    id: 1,
    title: "Animation as Time Compression",
    description: "We compress decades of progress into minutes of visual storytelling. Animation allows us to show the future before it arrives, helping India's innovators visualize possibilities that don't yet exist in the physical world.",
    icon: "⏱️"
  },
  {
    id: 2,
    title: "Universal Language of Imagination",
    description: "In a nation of 22 official languages and countless dialects, animation transcends linguistic barriers. It speaks directly to the imagination, making complex ideas accessible to every Indian, from metropolitan centers to rural villages.",
    icon: "🌐"
  },
  {
    id: 3,
    title: "Cultural Storytelling Reimagined",
    description: "India's rich heritage of mythology, folklore, and contemporary narratives finds new life through animation. We preserve tradition while propelling it into the future, creating stories that resonate globally while remaining authentically Indian.",
    icon: "📖"
  },
  {
    id: 4,
    title: "Economic Transformation Tool",
    description: "By 2047, India's creative economy will be a cornerstone of national growth. Animation isn't just entertainment—it's education, marketing, visualization, and innovation combined. We're building the infrastructure for this transformation.",
    icon: "💡"
  },
  {
    id: 5,
    title: "Global Collaboration Hub",
    description: "Made in India doesn't mean made only for India. Our work connects Indian creativity with global audiences, establishing India as a premier destination for animation excellence that rivals any creative capital worldwide.",
    icon: "🤝"
  },
  {
    id: 6,
    title: "Technology Meets Philosophy",
    description: "We don't just master rendering engines and 3D software—we understand why animation matters. Technical excellence serves deeper purpose: helping humanity imagine better futures and inspiring action toward those visions.",
    icon: "🎯"
  }
];

export default function ManifestoSection() {
  return (
    <section className="relative py-24 lg:py-32 bg-gradient-to-b from-background via-secondary to-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-20">
          <div className="inline-block px-6 py-2 bg-surface/50 backdrop-blur-sm rounded-full border border-border mb-6">
            <span className="text-sm font-mono text-brand-purple tracking-wider">OUR MANIFESTO</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Six Pillars of Our Vision
          </h2>
          <p className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto">
            These principles guide every frame we create, every story we tell, and every partnership we forge.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {manifestoPoints.map((point, index) => (
            <div
              key={point.id}
              className="group relative bg-surface/30 backdrop-blur-sm rounded-xl p-8 border border-border hover:border-accent/50 transition-all duration-500 hover:shadow-glow-cyan hover:-translate-y-2"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent via-brand-purple to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-t-xl" />
              
              <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
                {point.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-accent transition-colors duration-300">
                {point.title}
              </h3>
              
              <p className="text-text-secondary leading-relaxed">
                {point.description}
              </p>
              
              <div className="absolute bottom-4 right-4 w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-accent text-xl">→</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}