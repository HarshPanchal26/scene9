'use client';

import { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

interface FilterControlsProps {
  regions: string[];
  types: string[];
  selectedRegion: string;
  selectedType: string;
  onRegionChange: (region: string) => void;
  onTypeChange: (type: string) => void;
}

const FilterControls = ({
  regions,
  types,
  selectedRegion,
  selectedType,
  onRegionChange,
  onTypeChange,
}: FilterControlsProps) => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  if (!isHydrated) {
    return (
      <div className="bg-surface rounded-xl p-6 shadow-cinematic">
        <div className="h-8 bg-primary/50 rounded animate-pulse" />
      </div>
    );
  }

  return (
    <div className="bg-surface rounded-xl p-6 shadow-cinematic">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <Icon name="FunnelIcon" size={24} className="text-accent" />
          <h3 className="text-lg font-semibold text-foreground">Filter Projects</h3>
        </div>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="lg:hidden p-2 hover:bg-primary rounded-lg transition-colors duration-300"
          aria-label="Toggle filters"
        >
          <Icon
            name={isExpanded ? 'ChevronUpIcon' : 'ChevronDownIcon'}
            size={20}
            className="text-muted-foreground"
          />
        </button>
      </div>

      <div className={`space-y-6 ${isExpanded ? 'block' : 'hidden lg:block'}`}>
        <div>
          <label className="block text-sm font-medium text-muted-foreground mb-3">
            Region
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 gap-2">
            <button
              onClick={() => onRegionChange('All')}
              className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                selectedRegion === 'All' ?'bg-accent text-accent-foreground shadow-glow-cyan' :'bg-primary text-muted-foreground hover:bg-primary/80'
              }`}
            >
              All Regions
            </button>
            {regions.map((region) => (
              <button
                key={region}
                onClick={() => onRegionChange(region)}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                  selectedRegion === region
                    ? 'bg-accent text-accent-foreground shadow-glow-cyan'
                    : 'bg-primary text-muted-foreground hover:bg-primary/80'
                }`}
              >
                {region}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-muted-foreground mb-3">
            Project Type
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 gap-2">
            <button
              onClick={() => onTypeChange('All')}
              className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                selectedType === 'All' ?'bg-accent text-accent-foreground shadow-glow-cyan' :'bg-primary text-muted-foreground hover:bg-primary/80'
              }`}
            >
              All Types
            </button>
            {types.map((type) => (
              <button
                key={type}
                onClick={() => onTypeChange(type)}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                  selectedType === type
                    ? 'bg-accent text-accent-foreground shadow-glow-cyan'
                    : 'bg-primary text-muted-foreground hover:bg-primary/80'
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        <div className="pt-4 border-t border-border">
          <button
            onClick={() => {
              onRegionChange('All');
              onTypeChange('All');
            }}
            className="w-full px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground bg-primary hover:bg-primary/80 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2"
          >
            <Icon name="ArrowPathIcon" size={16} />
            <span>Reset Filters</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterControls;