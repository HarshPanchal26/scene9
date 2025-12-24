'use client';

import { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';

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
  image: string;
  alt: string;
  metrics: {
    reach: string;
    duration: string;
    team: string;
  };
}

interface ProjectDetailsProps {
  project: Project | null;
  onClose: () => void;
}

const ProjectDetails = ({ project, onClose }: ProjectDetailsProps) => {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  if (!project || !isHydrated) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-primary/95 backdrop-blur-lg">
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-surface rounded-xl shadow-cinematic">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-primary/80 backdrop-blur-sm rounded-lg hover:bg-primary transition-colors duration-300"
          aria-label="Close project details"
        >
          <Icon name="XMarkIcon" size={24} className="text-foreground" />
        </button>

        <div className="relative h-64 sm:h-80 overflow-hidden rounded-t-xl">
          <AppImage
            src={project.image}
            alt={project.alt}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-overlay" />
          <div className="absolute bottom-6 left-6 right-6">
            <div className="flex items-center space-x-2 mb-3">
              <span className="px-3 py-1 text-sm font-semibold bg-accent text-accent-foreground rounded-md">
                {project.type}
              </span>
              <span className="px-3 py-1 text-sm font-medium bg-surface/80 backdrop-blur-sm text-foreground rounded-md">
                {project.year}
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
              {project.title}
            </h2>
            <div className="flex items-center space-x-2 text-muted-foreground">
              <Icon name="MapPinIcon" size={16} />
              <span className="text-sm">{project.location}, {project.country}</span>
            </div>
          </div>
        </div>

        <div className="p-6 sm:p-8 space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center">
              <Icon name="DocumentTextIcon" size={20} className="text-accent mr-2" />
              Project Overview
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              {project.description}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-primary/50 rounded-lg p-4">
              <div className="flex items-center space-x-2 mb-2">
                <Icon name="UsersIcon" size={18} className="text-accent" />
                <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                  Reach
                </span>
              </div>
              <p className="text-xl font-bold text-foreground">{project.metrics.reach}</p>
            </div>
            <div className="bg-primary/50 rounded-lg p-4">
              <div className="flex items-center space-x-2 mb-2">
                <Icon name="ClockIcon" size={18} className="text-accent" />
                <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                  Duration
                </span>
              </div>
              <p className="text-xl font-bold text-foreground">{project.metrics.duration}</p>
            </div>
            <div className="bg-primary/50 rounded-lg p-4">
              <div className="flex items-center space-x-2 mb-2">
                <Icon name="UserGroupIcon" size={18} className="text-accent" />
                <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                  Team Size
                </span>
              </div>
              <p className="text-xl font-bold text-foreground">{project.metrics.team}</p>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center">
              <Icon name="SparklesIcon" size={20} className="text-accent mr-2" />
              Cultural Impact
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              {project.impact}
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center">
              <Icon name="GlobeAltIcon" size={20} className="text-accent mr-2" />
              Collaboration Model
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              {project.collaboration}
            </p>
          </div>

          <div className="pt-4 border-t border-border">
            <button
              onClick={onClose}
              className="w-full sm:w-auto px-6 py-3 bg-accent text-accent-foreground font-semibold rounded-lg hover:bg-accent/90 hover:shadow-glow-cyan transition-all duration-300"
            >
              Explore More Projects
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;