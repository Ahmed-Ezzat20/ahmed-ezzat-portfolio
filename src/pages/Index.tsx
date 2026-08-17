import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import TechStackSection from '@/components/TechStackSection';
import ExperienceTimeline from '@/components/ExperienceTimeline';
import PortfolioSection from '@/components/PortfolioSection';
import BlogSection from '@/components/BlogSection';
import ContactSection from '@/components/ContactSection';
import { useLanguage } from '@/contexts/LanguageContext';

const Index = () => {
  const { tr } = useLanguage();
  return <div className="min-h-screen overflow-x-hidden bg-background text-foreground"><Navigation /><main><HeroSection /><AboutSection /><TechStackSection /><ExperienceTimeline /><PortfolioSection /><BlogSection /><ContactSection /></main><footer className="px-6 pb-8"><div className="mx-auto flex max-w-6xl flex-col justify-between gap-3 border-t border-cyan-100/10 pt-7 text-xs text-slate-500 md:flex-row"><p>© 2026 Ahmed Ezzat Ahmed. {tr('Crafted for clear voice systems.', 'مصمم لأنظمة صوتية واضحة.')}</p><p dir="ltr">React · TypeScript · Tailwind CSS</p></div></footer></div>;
};

export default Index;
