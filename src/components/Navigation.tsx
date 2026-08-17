import { useEffect, useState } from 'react';
import { Menu, Mic2, X } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const items = [
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Expertise' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'blog', label: 'Blog' },
    { id: 'contact', label: 'Contact' },
  ];

  useEffect(() => {
    const updateState = () => {
      setIsScrolled(window.scrollY > 20);
      const position = window.scrollY + 180;
      const sectionIds = ['home', ...items.map((item) => item.id)];
      const current = [...sectionIds].reverse().find((id) => {
        const element = document.getElementById(id);
        return element && element.offsetTop <= position;
      });
      if (current) setActiveSection(current);
    };

    updateState();
    window.addEventListener('scroll', updateState, { passive: true });
    return () => window.removeEventListener('scroll', updateState);
  }, []);

  const goTo = (id: string) => {
    if (id === 'blog') {
      window.location.href = `${import.meta.env.BASE_URL}blog`;
      return;
    }
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${isScrolled ? 'border-b border-cyan-100/10 bg-[#091727]/80 backdrop-blur-xl' : ''}`}>
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <button onClick={() => goTo('home')} className="flex items-center gap-2 text-slate-100">
          <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-cyan-300/10 text-cyan-200"><Mic2 className="h-4 w-4" /></span>
          <span className="font-display text-sm font-bold tracking-[-0.03em]">Ahmed Ezzat</span>
        </button>

        <div className="hidden items-center gap-1 md:flex">
          {items.map((item) => (
            <button key={item.id} onClick={() => goTo(item.id)} className={`rounded-full px-3.5 py-2 text-sm transition-colors ${activeSection === item.id ? 'nav-active' : 'text-slate-400 hover:text-cyan-100'}`}>
              {item.label}
            </button>
          ))}
          <a href="#contact" className="ml-3 rounded-full border border-cyan-200/25 px-4 py-2 text-sm font-medium text-cyan-100 transition-colors hover:border-cyan-200/50 hover:bg-cyan-300/10">Let’s talk</a>
        </div>

        <button className="rounded-lg p-2 text-cyan-100 md:hidden" onClick={() => setIsMenuOpen((open) => !open)} aria-label="Toggle navigation">
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {isMenuOpen && (
        <div className="border-t border-cyan-100/10 bg-[#091727]/95 px-6 pb-5 pt-2 backdrop-blur-xl md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-1">
            {items.map((item) => (
              <button key={item.id} onClick={() => goTo(item.id)} className={`rounded-xl px-3 py-3 text-left text-sm ${activeSection === item.id ? 'bg-cyan-300/10 text-cyan-100' : 'text-slate-400'}`}>{item.label}</button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navigation;
