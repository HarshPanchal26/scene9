import AppImage from '@/components/ui/AppImage';

interface ThoughtLeader {
  id: number;
  name: string;
  role: string;
  quote: string;
  image: string;
  alt: string;
}

const thoughtLeaders: ThoughtLeader[] = [
{
  id: 1,
  name: "Dr. Priya Sharma",
  role: "Animation Educator & Cultural Researcher",
  quote: "Framecraft's vision aligns perfectly with India's need to preserve cultural narratives while embracing technological innovation. Their work demonstrates that animation can be both commercially viable and culturally significant.",
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_14bd1d466-1763295184837.png",
  alt: "Professional Indian woman with long dark hair wearing traditional kurta in modern office setting with warm lighting"
},
{
  id: 2,
  name: "Rajesh Kumar",
  role: "Founder, EdTech Startup",
  quote: "Working with Framecraft changed how we think about educational content. They don't just create animations—they help us compress complex concepts into visual stories that resonate with students across India's diverse learning environments.",
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_113a43fa5-1763296366390.png",
  alt: "Indian businessman in navy blue suit with short black hair smiling confidently in contemporary office with glass walls"
},
{
  id: 3,
  name: "Ananya Desai",
  role: "Creative Director, Global Agency",
  quote: "India's animation industry is at an inflection point. Studios like Framecraft are proving that we can compete globally not by imitating Western styles, but by bringing our unique cultural perspective and technical excellence to the world stage.",
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_14c723b92-1763293896787.png",
  alt: "Young Indian creative professional woman with shoulder-length hair in casual blazer working on laptop in bright modern workspace"
}];


export default function ThoughtLeadershipSection() {
  return (
    <section className="relative py-24 lg:py-32 bg-gradient-to-b from-background to-secondary">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-20">
          <div className="inline-block px-6 py-2 bg-surface/50 backdrop-blur-sm rounded-full border border-border mb-6">
            <span className="text-sm font-mono text-accent tracking-wider">VOICES OF CHANGE</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Industry Perspectives
          </h2>
          <p className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto">
            Leaders across education, technology, and creative industries share their vision for animation's role in India's future.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {thoughtLeaders.map((leader, index) =>
          <div
            key={leader.id}
            className="group relative bg-surface/30 backdrop-blur-sm rounded-xl overflow-hidden border border-border hover:border-accent/50 transition-all duration-500 hover:shadow-glow-cyan hover:-translate-y-2"
            style={{ animationDelay: `${index * 100}ms` }}>

              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent via-brand-purple to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent z-10" />
                <AppImage
                src={leader.image}
                alt={leader.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />

              </div>
              
              <div className="p-8">
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors duration-300">
                    {leader.name}
                  </h3>
                  <p className="text-sm text-text-secondary font-mono">
                    {leader.role}
                  </p>
                </div>
                
                <blockquote className="relative">
                  <div className="absolute -top-2 -left-2 text-5xl text-accent/20 font-serif">"</div>
                  <p className="text-text-secondary leading-relaxed relative z-10 italic">
                    {leader.quote}
                  </p>
                </blockquote>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>);

}