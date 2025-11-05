import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import professionalHeadshot from '@/assets/ahmed-headshot.png';
import { socialLinks } from '@/constants/socialLinks';

const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);
  const [typedText, setTypedText] = useState('');
  const fullText = 'AI Engineer';
  const typingSpeed = 150; // milliseconds per character

  // Typing animation effect
  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setTypedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, typingSpeed);

    return () => clearInterval(typingInterval);
  }, []);

  // Parallax effect on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToPortfolio = () => {
    document.querySelector('#portfolio')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden py-24 sm:py-24 md:py-28 lg:py-0">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-subtle opacity-50" />

      <div
        className="container mx-auto px-6 relative z-10"
        style={{
          transform: `translateY(${scrollY * 0.3}px)`,
          transition: 'transform 0.1s ease-out',
        }}
      >
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">

          {/* Content */}
          <div className="flex-1 text-center lg:text-left animate-slide-up">
            <div className="mb-6">
              <h1 className="text-5xl lg:text-7xl font-serif font-bold mb-4">
                <span className="text-slate-800 dark:text-slate-100">
                  Ahmed Ezzat
                </span>
              </h1>
              <h2 className="text-4xl lg:text-5xl font-serif font-bold mb-4">
                <span className="text-slate-600 dark:text-slate-300">
                  {typedText}
                  <span className="animate-pulse text-accent">|</span>
                </span>
              </h2>
              <p className="text-xl lg:text-2xl text-muted-foreground mb-8 max-w-2xl">
                Building Voice AI Solutions and specializing in Computer Vision & Generative AI. 
                Manus Fellow passionate about translating cutting-edge research into production-level 
                solutions that create real impact.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8 justify-center lg:justify-start">

              <Button
                variant="hero"
                size="lg"
                onClick={scrollToPortfolio}
                className="text-lg px-8 py-6"
              >
                View My Work
                <FontAwesomeIcon icon={faArrowDown} className="h-5 w-5 ml-2" />
              </Button>
              <Button
                variant="elegant"
                size="lg"
                onClick={scrollToContact}
                className="text-lg px-8 py-6"
              >
                Let's Connect
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center lg:justify-start">
              {socialLinks.map((social, index) => {
                const linkProps = social.type === 'external'
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {};

                return (
                  <Button
                    key={index}
                    variant="ghost"
                    size="icon"
                    className="rounded-full hover:shadow-glow"
                    asChild
                  >
                    <a href={social.href} aria-label={social.label} {...linkProps}>
                      <FontAwesomeIcon icon={social.icon} className="h-5 w-5" />
                    </a>
                  </Button>
                );
              })}
            </div>
          </div>

          {/* Professional Image */}
          <div className="flex-shrink-0 flex justify-center">
            <div className="relative">
              {/* Floating geometric background */}
              <div className="absolute -inset-4 bg-gradient-accent rounded-full opacity-20 animate-float" />
              <div className="absolute -inset-8 bg-gradient-primary rounded-full opacity-10 animate-float" style={{ animationDelay: '2s' }} />

              {/* Image container */}
              <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-elegant hover:shadow-glow transition-smooth animate-pulse-glow">
                <img
                  src={professionalHeadshot}
                  alt="Professional headshot"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center gap-2">
          <p className="text-sm text-muted-foreground font-medium">Scroll to explore</p>
          <Button
            variant="ghost"
            size="icon"
            onClick={scrollToPortfolio}
            className="rounded-full hover:shadow-glow hover:bg-accent/10 transition-all duration-300 w-12 h-12"
          >
            <FontAwesomeIcon icon={faArrowDown} className="h-5 w-5 text-accent" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;