import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import TechStackSection from '@/components/TechStackSection';
import ExperienceTimeline from '@/components/ExperienceTimeline';
import PortfolioSection from '@/components/PortfolioSection';
import ContactSection from '@/components/ContactSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-foreground overflow-x-hidden relative scanlines">
      <Navigation />

      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <TechStackSection />
        <ExperienceTimeline />
        <PortfolioSection />
        <ContactSection />
      </main>

      <footer className="relative z-10 border-t border-green-900/50 px-6 py-8">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between gap-3 font-mono text-xs text-gray-600">
          <p><span className="text-green-500">$</span> echo "© 2026 Ahmed Ezzat"</p>
          <p>built_with: React + TypeScript + Tailwind CSS</p>
          <p className="text-green-700">system_status: online</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
