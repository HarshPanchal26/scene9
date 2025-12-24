interface IdentityBandProps {
  className?: string;
}

const IdentityBand = ({ className = '' }: IdentityBandProps) => {
  const identityPoints = [
    'Made in India',
    'Built for 2047 and beyond',
    'Global collaboration',
    'Cultural storytelling',
    'Technical excellence',
  ];

  return (
    <section className={`relative py-4 bg-surface border-y border-border overflow-hidden ${className}`}>
      <div className="relative z-10">
        <div className="flex animate-scroll-infinite">
          {[...identityPoints, ...identityPoints, ...identityPoints].map((point, index) => (
            <div
              key={index}
              className="flex items-center whitespace-nowrap px-8"
            >
              <span className="text-sm font-mono text-text-secondary tracking-wider uppercase">
                {point}
              </span>
              <span className="mx-8 text-accent">•</span>
            </div>
          ))}
        </div>
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-r from-surface via-transparent to-surface pointer-events-none" />
    </section>
  );
};

export default IdentityBand;