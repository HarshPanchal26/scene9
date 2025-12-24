'use client';

import React, { useState, useEffect } from 'react';
import GlobeVisualization from './GlobeVisualization';
import ProjectDetails from './ProjectDetails';
import FilterControls from './FilterControls';
import StatsOverview from './StatsOverview';

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

interface Stat {
  label: string;
  value: string;
  icon: string;
  description: string;
}

const GlobeInteractive = () => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedRegion, setSelectedRegion] = useState('All');
  const [selectedType, setSelectedType] = useState('All');

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const projects: Project[] = [
  {
    id: 1,
    title: "Future Cities Initiative",
    location: "Mumbai",
    country: "India",
    lat: 19.0760,
    lng: 72.8777,
    type: "3D Visualization",
    year: 2024,
    description: "A groundbreaking project visualizing Mumbai's transformation into a sustainable smart city by 2047. This comprehensive 3D animation series explores urban planning, green infrastructure, and technological integration through the lens of Indian innovation and cultural preservation.",
    impact: "Reached over 5 million viewers across digital platforms, influencing urban planning discussions at state level. The project sparked conversations about sustainable development and became a reference point for architectural firms and policy makers across India.",
    collaboration: "Partnered with leading Indian architects, urban planners from IIT Bombay, and sustainability experts to create scientifically accurate yet visually compelling narratives. The project demonstrates how animation can bridge technical expertise with public imagination.",
    image: "https://images.unsplash.com/photo-1712075934787-10bc5cb12380",
    alt: "Futuristic cityscape with sustainable green buildings and advanced transportation systems in Mumbai skyline",
    metrics: {
      reach: "5M+ Views",
      duration: "8 Months",
      team: "15 Artists"
    }
  },
  {
    id: 2,
    title: "Heritage Reimagined",
    location: "Jaipur",
    country: "India",
    lat: 26.9124,
    lng: 75.7873,
    type: "VFX & Animation",
    year: 2023,
    description: "An immersive VFX experience bringing Rajasthan's architectural heritage to life through time-lapse animations spanning centuries. The project reconstructs historical monuments in their original glory while showcasing the craftsmanship and cultural significance of each era.",
    impact: "Featured in international heritage conservation conferences and adopted by Rajasthan Tourism for educational programs. The work demonstrates how animation can preserve and celebrate cultural heritage while making it accessible to global audiences.",
    collaboration: "Collaborated with Archaeological Survey of India, heritage conservation experts, and local artisans to ensure historical accuracy. This project exemplifies cross-disciplinary collaboration where technology meets traditional knowledge.",
    image: "https://images.unsplash.com/photo-1604158156476-81244a8c4b7f",
    alt: "Ancient Rajasthani palace with intricate architectural details and traditional pink sandstone walls",
    metrics: {
      reach: "3M+ Views",
      duration: "6 Months",
      team: "12 Artists"
    }
  },
  {
    id: 3,
    title: "Ocean Conservation Series",
    location: "Kochi",
    country: "India",
    lat: 9.9312,
    lng: 76.2673,
    type: "Educational Animation",
    year: 2024,
    description: "A powerful educational animation series highlighting marine biodiversity along India's coastline and the urgent need for ocean conservation. The project combines scientific accuracy with emotional storytelling to inspire action among diverse audiences.",
    impact: "Integrated into school curricula across Kerala and Karnataka, reaching 500,000+ students. The series has been recognized by environmental organizations and sparked youth-led conservation initiatives in coastal communities.",
    collaboration: "Developed in partnership with marine biologists from CMFRI, environmental NGOs, and coastal communities. The project showcases how animation can translate complex ecological concepts into accessible narratives that drive behavioral change.",
    image: "https://images.unsplash.com/photo-1660151184606-6adcda96bcea",
    alt: "Vibrant underwater coral reef ecosystem with diverse marine life and colorful tropical fish",
    metrics: {
      reach: "500K+ Students",
      duration: "5 Months",
      team: "10 Artists"
    }
  },
  {
    id: 4,
    title: "Tech Startup Explainers",
    location: "Bangalore",
    country: "India",
    lat: 12.9716,
    lng: 77.5946,
    type: "Motion Graphics",
    year: 2024,
    description: "A series of dynamic motion graphics projects for India's leading tech startups, translating complex technological innovations into compelling visual narratives. Each project balances technical accuracy with creative storytelling to help startups communicate their vision effectively.",
    impact: "Helped 25+ startups secure funding by clearly communicating their value propositions to investors. The work demonstrates animation's role in India's startup ecosystem, where clear communication can be the difference between success and obscurity.",
    collaboration: "Working directly with founders, product teams, and investors to understand both technical details and business objectives. This collaborative approach ensures animations serve strategic business goals while maintaining creative excellence.",
    image: "https://images.unsplash.com/photo-1690192078982-d3d2f89059ee",
    alt: "Modern tech office space with digital screens displaying data visualizations and startup team collaborating",
    metrics: {
      reach: "25+ Startups",
      duration: "12 Months",
      team: "8 Artists"
    }
  },
  {
    id: 5,
    title: "Cultural Exchange Project",
    location: "Tokyo",
    country: "Japan",
    lat: 35.6762,
    lng: 139.6503,
    type: "Cross-Cultural Animation",
    year: 2023,
    description: "A collaborative animation project exploring the intersection of Indian and Japanese storytelling traditions. The work blends visual styles, narrative techniques, and cultural motifs to create something entirely new while respecting both traditions.",
    impact: "Screened at international film festivals and cultural centers across Asia, fostering dialogue between creative communities. The project demonstrates how animation can serve as a universal language for cultural exchange and mutual understanding.",
    collaboration: "Co-created with Japanese animation studios, involving artists from both countries in every stage of production. This true collaboration model showcases how Indian studios can engage globally while maintaining cultural authenticity.",
    image: "https://images.unsplash.com/photo-1675695062959-0e862dda07e7",
    alt: "Traditional Japanese temple with cherry blossoms and modern Tokyo skyline in background",
    metrics: {
      reach: "2M+ Views",
      duration: "10 Months",
      team: "20 Artists"
    }
  },
  {
    id: 6,
    title: "Healthcare Innovation Series",
    location: "Singapore",
    country: "Singapore",
    lat: 1.3521,
    lng: 103.8198,
    type: "Medical Animation",
    year: 2024,
    description: "Cutting-edge medical animations explaining breakthrough healthcare technologies and treatments for a leading Singapore-based healthtech company. The project makes complex medical concepts accessible to patients, healthcare providers, and investors.",
    impact: "Used in medical conferences across Southeast Asia and integrated into patient education programs in 50+ hospitals. The work demonstrates how Indian animation expertise can contribute to global healthcare communication.",
    collaboration: "Partnered with medical professionals, researchers, and healthcare communication experts to ensure scientific accuracy. The project exemplifies how animation can bridge the gap between medical expertise and public understanding.",
    image: "https://images.unsplash.com/photo-1636973879067-9404573bdc78",
    alt: "Modern medical facility with advanced healthcare technology and clean minimalist design",
    metrics: {
      reach: "50+ Hospitals",
      duration: "7 Months",
      team: "14 Artists"
    }
  }];


  const stats: Stat[] = [
  {
    label: "Countries Reached",
    value: "12+",
    icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
    description: "Global collaborations spanning Asia, Europe, and beyond"
  },
  {
    label: "Projects Delivered",
    value: "150+",
    icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
    description: "Diverse projects across industries and creative disciplines"
  },
  {
    label: "Cultural Impact",
    value: "10M+",
    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
    description: "People reached through our storytelling and visual narratives"
  },
  {
    label: "Industry Recognition",
    value: "25+",
    icon: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z",
    description: "Awards and recognitions from international creative communities"
  }];


  const regions = ['Asia', 'Europe', 'Americas'];
  const types = ['3D Visualization', 'VFX & Animation', 'Educational Animation', 'Motion Graphics', 'Cross-Cultural Animation', 'Medical Animation'];

  const filteredProjects = projects.filter((project) => {
    const regionMatch = selectedRegion === 'All' ||
    selectedRegion === 'Asia' && ['India', 'Japan', 'Singapore'].includes(project.country) ||
    selectedRegion === 'Europe' && project.country === 'Europe' ||
    selectedRegion === 'Americas' && project.country === 'Americas';

    const typeMatch = selectedType === 'All' || project.type === selectedType;

    return regionMatch && typeMatch;
  });

  if (!isHydrated) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="w-16 h-16 border-4 border-accent border-t-transparent rounded-full animate-spin" />
      </div>);

  }

  return (
    <>
      <section className="py-16 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Global Impact from India's Creative Center
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Explore our worldwide collaborations and cultural contributions. Each project represents a unique partnership, blending Indian creative excellence with global perspectives to create meaningful impact.
            </p>
          </div>

          <StatsOverview stats={stats} />
        </div>
      </section>

      <section className="py-16 px-6 lg:px-12 bg-surface/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-1">
              <FilterControls
                regions={regions}
                types={types}
                selectedRegion={selectedRegion}
                selectedType={selectedType}
                onRegionChange={setSelectedRegion}
                onTypeChange={setSelectedType} />

            </div>

            <div className="lg:col-span-3">
              <GlobeVisualization
                projects={filteredProjects}
                onProjectSelect={setSelectedProject as any} //TODO : type mismatch fix
                selectedProject={selectedProject} />


              <div className="mt-8 text-center">
                <p className="text-sm text-muted-foreground">
                  Showing {filteredProjects.length} of {projects.length} projects
                  {(selectedRegion !== 'All' || selectedType !== 'All') && ' (filtered)'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Building Bridges Through Animation
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Our global collaborations demonstrate that great animation transcends borders. From India to the world, we're creating visual narratives that resonate across cultures while maintaining authentic local perspectives. Each project is a testament to the power of creative partnership and shared vision.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/vision"
              className="px-8 py-3 bg-accent text-accent-foreground font-semibold rounded-lg hover:bg-accent/90 hover:shadow-glow-cyan transition-all duration-300">

              Explore Our Vision
            </a>
            <a
              href="/blog-article"
              className="px-8 py-3 bg-surface text-foreground font-semibold rounded-lg hover:bg-surface/80 transition-all duration-300">

              Read Our Insights
            </a>
          </div>
        </div>
      </section>

      <ProjectDetails project={selectedProject} onClose={() => setSelectedProject(null)} />
    </>);

};

export default GlobeInteractive;