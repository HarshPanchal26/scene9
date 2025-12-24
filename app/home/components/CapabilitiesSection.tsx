import CapabilityCard from './CapabilityCard';

interface Capability {
  title: string;
  description: string;
  impact: string;
  image: string;
  alt: string;
  icon: string;
  gradient: string;
}

interface CapabilitiesSectionProps {
  className?: string;
}

const CapabilitiesSection = ({ className = '' }: CapabilitiesSectionProps) => {
  const capabilities: Capability[] = [
  {
    title: 'Strategic Storytelling',
    description: 'Transform complex business visions into compelling visual narratives that resonate with stakeholders and drive decision-making.',
    impact: 'Help founders compress years of vision into minutes of clarity, enabling faster buy-in and strategic alignment across teams and investors.',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_147ac1c79-1764502433078.png",
    alt: 'Creative professional working on digital animation storyboard with colorful sketches on large monitor in modern studio',
    icon: 'SparklesIcon',
    gradient: 'from-primary/80 via-brand-purple/60 to-transparent'
  },
  {
    title: 'Product Visualization',
    description: 'Bring products to life before they exist, showcasing features, functionality, and user experiences with photorealistic 3D rendering.',
    impact: 'Enable startups to secure funding and pre-orders by demonstrating product value before manufacturing, reducing time-to-market by months.',
    image: "https://images.unsplash.com/photo-1634861989899-47478ff0dee3",
    alt: 'Detailed 3D rendered product visualization showing sleek modern device with metallic finish on dark background',
    icon: 'CubeIcon',
    gradient: 'from-primary/80 via-accent/60 to-transparent'
  },
  {
    title: 'Educational Content',
    description: 'Make complex concepts accessible through animated explanations that engage learners and improve knowledge retention across all age groups.',
    impact: 'Transform education delivery for institutions and EdTech platforms, increasing student engagement by 300% and comprehension by 85%.',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_155847762-1764502440848.png",
    alt: 'Animated educational content showing colorful molecular structures and scientific diagrams on digital screen',
    icon: 'AcademicCapIcon',
    gradient: 'from-primary/80 via-brand-coral/60 to-transparent'
  },
  {
    title: 'Brand Experiences',
    description: 'Create immersive brand worlds that go beyond logos and taglines, building emotional connections through cinematic storytelling.',
    impact: 'Elevate brand perception for ambitious companies, creating memorable experiences that increase brand recall by 400% and social sharing by 250%.',
    image: "https://images.unsplash.com/photo-1735192395661-9358e7d8cb75",
    alt: 'Abstract brand experience visualization with flowing neon lights and geometric shapes in purple and cyan',
    icon: 'StarIcon',
    gradient: 'from-primary/80 via-brand-neon-cyan/60 to-transparent'
  },
  {
    title: 'Architectural Visualization',
    description: 'Showcase spaces before construction begins, allowing clients to experience and refine designs through immersive 3D walkthroughs.',
    impact: 'Accelerate real estate sales and architectural approvals, reducing revision cycles by 60% and increasing pre-construction sales by 180%.',
    image: "https://images.unsplash.com/photo-1669863094797-208a65cf16ef",
    alt: 'Photorealistic architectural rendering of modern glass building with reflective surfaces at sunset',
    icon: 'BuildingOfficeIcon',
    gradient: 'from-primary/80 via-brand-purple/60 to-transparent'
  },
  {
    title: 'Cultural Narratives',
    description: 'Preserve and reimagine cultural stories through animation, making heritage accessible to global audiences while maintaining authenticity.',
    impact: 'Support cultural organizations and nonprofits in reaching younger audiences, increasing engagement with traditional stories by 500%.',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1fb58322e-1764502431341.png",
    alt: 'Artistic animation frame showing traditional Indian cultural motifs blended with modern digital art style',
    icon: 'GlobeAltIcon',
    gradient: 'from-primary/80 via-accent/60 to-transparent'
  }];


  return (
    <section id="capabilities" className={`py-24 px-6 lg:px-12 bg-background ${className}`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-6">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
            What animation can do
            <span className="block text-accent mt-2">for your vision</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            We don't just create animations. We compress time, visualize the impossible, and help you imagine futures that don't yet exist.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilities.map((capability, index) =>
          <CapabilityCard
            key={index}
            title={capability.title}
            description={capability.description}
            impact={capability.impact}
            image={capability.image}
            alt={capability.alt}
            icon={capability.icon}
            gradient={capability.gradient} />

          )}
        </div>
      </div>
    </section>);

};

export default CapabilitiesSection;