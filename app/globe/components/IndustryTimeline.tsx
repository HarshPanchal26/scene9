'use client';

interface TimelineProps {
  selectedDecade: string;
  onDecadeChange: (decade: string) => void;
}

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  impact: string;
  icon: string;
}

const IndustryTimeline = ({ selectedDecade, onDecadeChange }: TimelineProps) => {
  const decades = ['1960s-1980s', '1990s', '2000s', '2010s', '2020s'];

  const timelineData: Record<string, TimelineEvent[]> = {
    '1960s-1980s': [
      {
        year: '1974',
        title: 'The Pioneering Era',
        description: 'Ram Mohan establishes Ram Mohan Biographics, creating India\'s first animated commercial for Amul. This marks the birth of modern Indian animation industry.',
        impact: 'Established animation as a viable commercial medium in India, inspiring the first generation of Indian animators.',
        icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z'
      },
      {
        year: '1987',
        title: 'Doordarshan Revolution',
        description: 'Ramayana animated series becomes a cultural phenomenon, reaching millions of Indian households and proving animation\'s mass appeal.',
        impact: 'Demonstrated animation\'s power for cultural storytelling, creating India\'s largest animated audience to date.',
        icon: 'M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z'
      }
    ],
    '1990s': [
      {
        year: '1992',
        title: 'Digital Transformation Begins',
        description: 'Pentamedia Graphics established, becoming one of India\'s first fully digital animation studios, adopting cutting-edge technology.',
        impact: 'Shifted Indian animation from traditional to digital, positioning India as a technology-ready animation hub.',
        icon: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
      },
      {
        year: '1998',
        title: 'Global Outsourcing Emerges',
        description: 'Indian studios begin working on international projects, providing animation services for Disney, Warner Bros, and other major studios.',
        impact: 'Established India as a cost-effective, high-quality outsourcing destination, creating thousands of jobs.',
        icon: 'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
      }
    ],
    '2000s': [
      {
        year: '2002',
        title: 'Feature Film Breakthrough',
        description: 'Pandavas: The Five Warriors becomes India\'s first 3D animated feature film, showcasing indigenous storytelling capabilities.',
        impact: 'Proved Indian studios could produce full-length animated features, inspiring investment in animation education.',
        icon: 'M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z'
      },
      {
        year: '2008',
        title: 'VFX Recognition',
        description: 'Indian VFX artists work on Hollywood blockbusters including Life of Pi (won Oscar), establishing India\'s VFX credentials globally.',
        impact: 'Positioned India as a serious player in high-end VFX, attracting international collaborations and investments.',
        icon: 'M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z'
      }
    ],
    '2010s': [
      {
        year: '2013',
        title: 'Streaming Era Begins',
        description: 'Rise of streaming platforms creates unprecedented demand for animated content. Indian studios scale up to meet global content needs.',
        impact: 'Multiplied opportunities for Indian animators, creating sustainable careers and diverse project types.',
        icon: 'M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
      },
      {
        year: '2017',
        title: 'Original IP Success',
        description: 'Chhota Bheem becomes India\'s most successful animated franchise, proving viability of indigenous IP and character-driven content.',
        impact: 'Demonstrated that Indian characters and stories could achieve massive commercial success and cultural impact.',
        icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'
      }
    ],
    '2020s': [
      {
        year: '2021',
        title: 'Gaming-Animation Convergence',
        description: 'Indian studios expand into gaming, leveraging animation expertise for interactive media. Real-time rendering becomes mainstream.',
        impact: 'Opened new revenue streams and positioned Indian talent for the metaverse and Web3 opportunities.',
        icon: 'M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z'
      },
      {
        year: '2024',
        title: 'AI-Powered Innovation',
        description: 'Indian studios adopt AI tools for animation, leading in AI-human collaboration workflows. Virtual production becomes accessible.',
        impact: 'Positioned India at the forefront of animation technology, creating new competitive advantages globally.',
        icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z'
      }
    ]
  };

  const currentEvents = timelineData[selectedDecade] || [];

  return (
    <section className="py-16 px-6 lg:px-12 bg-surface/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            India's Animation Evolution
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            From pioneering commercials to cutting-edge AI-powered workflows, trace India's remarkable journey in animation and VFX
          </p>
        </div>

        {/* Decade Selector */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {decades.map((decade) => (
            <button
              key={decade}
              onClick={() => onDecadeChange(decade)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                selectedDecade === decade
                  ? 'bg-accent text-accent-foreground shadow-glow-cyan'
                  : 'bg-surface text-muted-foreground hover:bg-surface/80 hover:text-foreground border border-border'
              }`}
            >
              {decade}
            </button>
          ))}
        </div>

        {/* Timeline Events */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-accent/50 via-accent/30 to-accent/10 hidden lg:block" />

          <div className="space-y-12">
            {currentEvents.map((event, index) => (
              <div
                key={event.year}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } flex-col`}
              >
                {/* Content Card */}
                <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'}`}>
                  <div className="bg-surface border border-border rounded-xl p-6 hover:border-accent/50 transition-all duration-300 hover:shadow-lg">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="p-3 bg-accent/10 rounded-lg flex-shrink-0">
                        <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={event.icon} />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-bold text-accent mb-1">{event.year}</div>
                        <h3 className="text-xl font-bold text-foreground mb-2">{event.title}</h3>
                      </div>
                    </div>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {event.description}
                    </p>
                    <div className="pt-4 border-t border-border">
                      <div className="text-xs font-semibold text-accent mb-2">IMPACT</div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {event.impact}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Timeline Dot */}
                <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-accent rounded-full border-4 border-background shadow-glow-cyan z-10" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustryTimeline;