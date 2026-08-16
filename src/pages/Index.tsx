import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import TechStackSection from '@/components/TechStackSection';
import ExperienceTimeline from '@/components/ExperienceTimeline';
import PortfolioSection from '@/components/PortfolioSection';
import ContactSection from '@/components/ContactSection';

const Index = () => {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <TechStackSection />
        <ExperienceTimeline />
        <PortfolioSection />
        <ContactSection />
      </main>
      <footer className="px-6 pb-8">
        <div className="mx-auto flex max-w-6xl flex-col justify-between gap-3 border-t border-cyan-100/10 pt-7 text-xs text-slate-500 md:flex-row">
          <p>© 2026 Ahmed Ezzat Ahmed. Crafted for clear voice systems.</p>
          <p>React · TypeScript · Tailwind CSS</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
