import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun, faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { href: '#home', label: 'Home', number: '1' },
    { href: '#about', label: 'About', number: '2' },
    { href: '#skills', label: 'Skills', number: '3' },
    { href: '#experiences', label: 'Experience', number: '4' },
    { href: '#portfolio', label: 'Portfolio', number: '5' },
    { href: '#contact', label: 'Contact', number: '6' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = navItems.map(item => item.href.substring(1));
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] md:w-auto max-w-5xl transition-smooth duration-300
        ${isScrolled ? 'opacity-100 translate-y-0 bg-background/90 backdrop-blur-md shadow-elegant border border-border rounded-lg md:rounded-full' : 'opacity-0 -translate-y-4 pointer-events-none'}
      `}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">

          {/* Mobile Menu Toggle */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden rounded-lg md:rounded-full mr-4"
          >
            {isMobileMenuOpen ? <FontAwesomeIcon icon={faXmark} className="h-5 w-5" /> : <FontAwesomeIcon icon={faBars} className="h-5 w-5" />}
          </Button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className={`relative px-4 py-2 text-sm font-medium transition-smooth rounded-lg border-2 flex items-center gap-2 ${
                  activeSection === item.href.substring(1)
                    ? 'border-green-500 bg-green-500/10 text-green-400'
                    : 'border-gray-600 text-foreground/80 hover:border-gray-500 hover:text-accent'
                }`}
              >
                <span className={`w-6 h-6 rounded text-xs flex items-center justify-center font-bold ${
                  activeSection === item.href.substring(1)
                    ? 'bg-green-500 text-black'
                    : 'bg-gray-600 text-white'
                }`}>
                  {item.number}
                </span>
                {item.label}
              </button>
            ))}
          </div>

          {/* Theme Toggle & Mobile Menu */}
          <div className="flex items-center space-x-4 md:space-x-6 md:ml-8">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="rounded-lg md:rounded-full"
            >
              {isDark ? <FontAwesomeIcon icon={faSun} className="h-5 w-5" /> : <FontAwesomeIcon icon={faMoon} className="h-5 w-5" />}
            </Button>


          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-border animate-slide-up">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className={`text-left py-2 px-4 text-sm font-medium transition-smooth rounded-lg border-2 flex items-center gap-2 ${
                    activeSection === item.href.substring(1)
                      ? 'border-green-500 bg-green-500/10 text-green-400'
                      : 'border-gray-600 text-foreground/80 hover:border-gray-500 hover:text-accent'
                  }`}
                >
                  <span className={`w-6 h-6 rounded text-xs flex items-center justify-center font-bold ${
                    activeSection === item.href.substring(1)
                      ? 'bg-green-500 text-black'
                      : 'bg-gray-600 text-white'
                  }`}>
                    {item.number}
                  </span>
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;