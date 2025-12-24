import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import HomepageInteractive from './components/HomepageInteractive';

export const metadata: Metadata = {
  title: 'Framecraft Studio - Designing Worlds Before They Exist',
  description: 'Animation as a tool for compressing time and expanding imagination. We design worlds before they exist, helping India imagine its future through cinematic storytelling, 3D visualization, and transformative animation.',
};

export default function Homepage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HomepageInteractive />
    </main>
  );
}