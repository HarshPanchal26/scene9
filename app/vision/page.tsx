import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import HeroSection from './components/HeroSection';
import ManifestoSection from './components/ManifestoSection';
import TimelineSection from './components/TimelineSection';
import ImpactSection from './components/ImpactSection';
import ThoughtLeadershipSection from './components/ThoughtLeadershipSection';
import CallToActionSection from './components/CallToActionSection';
import FooterSection from './components/FooterSection';

export const metadata: Metadata = {
  title: 'Vision - Framecraft Studio',
  description: 'Explore our manifesto for India 2047 and animation\'s transformative role in the future. Discover how we\'re positioning animation as a tool for imagination, cultural storytelling, and India\'s creative economy.',
};

export default function VisionPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <ManifestoSection />
      <TimelineSection />
      <ImpactSection />
      <ThoughtLeadershipSection />
      <CallToActionSection />
      <FooterSection />
    </main>
  );
}