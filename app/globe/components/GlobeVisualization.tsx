'use client';

import { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

interface Project {
  id: number;
  title: string;
  location: string;
  country: string;
  lat: number;
  lng: number;
  type: string;
  year: number;
  description: string;
  impact: string;
  collaboration: string;
}

interface GlobeVisualizationProps {
  projects: Project[];
  onProjectSelect: (project: Project | null) => void;
  selectedProject: Project | null;
}

const GlobeVisualization = ({ projects, onProjectSelect, selectedProject }: GlobeVisualizationProps) => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  if (!isHydrated) {
    return (
      <div className="relative w-full h-[600px] bg-surface rounded-xl overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 border-4 border-accent border-t-transparent rounded-full animate-spin" />
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-[600px] bg-surface rounded-xl overflow-hidden shadow-cinematic">
      <div className="absolute inset-0">
        <iframe
          width="100%"
          height="100%"
          loading="lazy"
          title="Global Project Locations"
          referrerPolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps?q=20.5937,78.9629&z=2&output=embed"
          className="w-full h-full"
        />
      </div>

      <div className="absolute top-6 left-6 right-6 z-10">
        <div className="bg-primary/95 backdrop-blur-md rounded-lg p-4 shadow-cinematic">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Icon name="GlobeAltIcon" size={24} className="text-accent" />
              <div>
                <h3 className="text-sm font-semibold text-foreground">Global Impact</h3>
                <p className="text-xs text-muted-foreground">
                  {projects.length} Projects Across {new Set(projects.map(p => p.country)).size} Countries
                </p>
              </div>
            </div>
            {selectedProject && (
              <button
                onClick={() => onProjectSelect(null)}
                className="p-2 hover:bg-surface rounded-lg transition-colors duration-300"
                aria-label="Close project details"
              >
                <Icon name="XMarkIcon" size={20} className="text-muted-foreground" />
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-6 right-6 z-10 max-h-[200px] overflow-y-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {projects.map((project) => (
            <button
              key={project.id}
              onClick={() => onProjectSelect(project)}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              className={`bg-primary/95 backdrop-blur-md rounded-lg p-3 text-left transition-all duration-300 ${
                selectedProject?.id === project.id
                  ? 'ring-2 ring-accent shadow-glow-cyan'
                  : 'hover:bg-surface/80'
              }`}
            >
              <div className="flex items-start justify-between mb-2">
                <div className="flex-1">
                  <h4 className="text-sm font-semibold text-foreground line-clamp-1">
                    {project.title}
                  </h4>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    {project.location}, {project.country}
                  </p>
                </div>
                <Icon
                  name={hoveredProject === project.id ? 'ChevronRightIcon' : 'MapPinIcon'}
                  size={16}
                  className="text-accent flex-shrink-0 ml-2"
                />
              </div>
              <div className="flex items-center space-x-2">
                <span className="px-2 py-0.5 text-xs font-medium bg-accent/20 text-accent rounded">
                  {project.type}
                </span>
                <span className="text-xs text-muted-foreground">{project.year}</span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GlobeVisualization;