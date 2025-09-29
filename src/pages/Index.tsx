import React from 'react';
import Navigation from '@/components/Navigation';
import ParticleBackground from '@/components/ParticleBackground';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import TechStackSection from '@/components/TechStackSection';
import ExperienceTimeline from '@/components/ExperienceTimeline';
import PortfolioSection from '@/components/PortfolioSection';
import BlogSection from '@/components/BlogSection';
import ContactSection from '@/components/ContactSection';

import ScrollProgress from '@/components/ScrollProgress';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Background Elements */}
      <ParticleBackground />
      <ScrollProgress />
      
      {/* Navigation */}
      <Navigation />
      
      {/* Main Content */}
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <TechStackSection />
        <ExperienceTimeline />
        <PortfolioSection />
        <BlogSection />
        <ContactSection />
      </main>
      
      {/* Footer */}
      <footer id="footer" className="bg-background border-t border-border py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-2xl font-serif font-bold">
              Ahmed Ezzat
            </div>
            
            {/* Tech Stack Used */}
            <div className="flex flex-col md:flex-row items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <span>Built with</span>
                <span className="px-2 py-1 bg-blue-500/10 text-blue-400 rounded">React</span>
              </div>
              <div className="flex items-center gap-2">
                <span>Styled with</span>
                <span className="px-2 py-1 bg-cyan-500/10 text-cyan-400 rounded">TailwindCSS</span>
              </div>
              <div className="flex items-center gap-2">
                <span>Deployed on</span>
                <span className="px-2 py-1 bg-gray-500/10 text-gray-400 rounded">Vercel</span>
              </div>
            </div>
            
            <p className="text-muted-foreground text-center md:text-right">
              © 2024 Ahmed Ezzat. AI Engineer passionate about innovation.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
