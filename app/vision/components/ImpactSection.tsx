import AppImage from '@/components/ui/AppImage';

interface ImpactMetric {
  id: number;
  value: string;
  label: string;
  description: string;
}

const impactMetrics: ImpactMetric[] = [
{
  id: 1,
  value: "₹50,000 Cr",
  label: "Target Industry Size by 2030",
  description: "India's animation sector projected growth, creating opportunities for millions of creative professionals"
},
{
  id: 2,
  value: "22+",
  label: "Languages Transcended",
  description: "Animation as universal language reaching every corner of India's linguistic diversity"
},
{
  id: 3,
  value: "1.4B",
  label: "Stories Waiting to Be Told",
  description: "Every Indian has a story—animation gives voice to narratives that shape our collective future"
},
{
  id: 4,
  value: "2047",
  label: "Vision Horizon",
  description: "India's centenary of independence—when creative economy becomes cornerstone of national identity"
}];


export default function ImpactSection() {
  return (
    <section className="relative py-24 lg:py-32 bg-gradient-to-b from-secondary via-background to-secondary">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <div className="inline-block px-6 py-2 bg-surface/50 backdrop-blur-sm rounded-full border border-border mb-6">
              <span className="text-sm font-mono text-brand-purple tracking-wider">IMPACT & REACH</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Measuring What Matters
            </h2>
            <p className="text-lg text-text-secondary leading-relaxed mb-8">
              Our vision isn't just aspirational—it's grounded in tangible goals that will transform India's creative landscape. These metrics represent our commitment to building an animation ecosystem that serves every Indian.
            </p>
            <p className="text-lg text-text-secondary leading-relaxed">
              By 2047, animation won't be a niche industry—it will be a fundamental tool for education, communication, cultural preservation, and economic growth. We're building the foundation for this transformation today.
            </p>
          </div>

          <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-cinematic">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-brand-purple/20 z-10" />
            <AppImage
              src="https://images.unsplash.com/photo-1714976327248-935ac2568c1d"
              alt="Diverse team of Indian creative professionals collaborating on animation project in modern studio with multiple screens showing 3D renders"
              className="w-full h-full object-cover" />

          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {impactMetrics.map((metric, index) =>
          <div
            key={metric.id}
            className="group relative bg-surface/30 backdrop-blur-sm rounded-xl p-8 border border-border hover:border-accent/50 transition-all duration-500 hover:shadow-glow-cyan hover:-translate-y-2"
            style={{ animationDelay: `${index * 100}ms` }}>

              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent to-brand-purple opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-t-xl" />
              
              <div className="text-4xl md:text-5xl font-bold text-accent mb-4 group-hover:scale-110 transition-transform duration-300">
                {metric.value}
              </div>
              
              <h3 className="text-lg font-semibold text-foreground mb-3">
                {metric.label}
              </h3>
              
              <p className="text-sm text-text-secondary leading-relaxed">
                {metric.description}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>);

}