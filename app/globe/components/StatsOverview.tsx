interface Stat {
  label: string;
  value: string;
  icon: string;
  description: string;
}

interface StatsOverviewProps {
  stats: Stat[];
}

const StatsOverview = ({ stats }: StatsOverviewProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="bg-surface rounded-xl p-6 shadow-cinematic hover:shadow-glow-cyan transition-all duration-300 group"
        >
          <div className="flex items-start justify-between mb-4">
            <div className="p-3 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors duration-300">
              <svg
                className="w-6 h-6 text-accent"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={stat.icon}
                />
              </svg>
            </div>
          </div>
          <h3 className="text-3xl font-bold text-foreground mb-2">{stat.value}</h3>
          <p className="text-sm font-medium text-muted-foreground mb-1">{stat.label}</p>
          <p className="text-xs text-muted-foreground/80 leading-relaxed">
            {stat.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default StatsOverview;