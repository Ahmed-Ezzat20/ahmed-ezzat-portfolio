import { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react';

const HeroSection = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentRole, setCurrentRole] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  const roles = [
    'TTS Lead @ hams.ai',
    'Voice AI Engineer',
    'Arabic Speech Specialist',
    'Manus Fellow',
  ];

  useEffect(() => {
    const role = roles[currentRole];
    let timeout: NodeJS.Timeout;

    if (!isDeleting) {
      if (displayText.length < role.length) {
        timeout = setTimeout(() => {
          setDisplayText(role.slice(0, displayText.length + 1));
        }, 80);
      } else {
        timeout = setTimeout(() => setIsDeleting(true), 2000);
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, 40);
      } else {
        setIsDeleting(false);
        setCurrentRole((prev) => (prev + 1) % roles.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRole]);

  useEffect(() => {
    const interval = setInterval(() => setShowCursor((prev) => !prev), 530);
    return () => clearInterval(interval);
  }, []);

  const socialLinks = [
    { icon: Github, href: 'https://github.com/Ahmed-Ezzat20', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/mrezzat/', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:ahmedezzat0247@gmail.com', label: 'Email' },
    { icon: ExternalLink, href: 'https://scholar.google.com/citations?user=5OHfOSgAAAAJ&hl=en', label: 'Scholar' },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative px-6">
      {/* Subtle grid background */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(hsl(120 100% 50%) 1px, transparent 1px), linear-gradient(90deg, hsl(120 100% 50%) 1px, transparent 1px)`,
        backgroundSize: '50px 50px'
      }} />

      <div className="max-w-4xl w-full relative z-10">
        {/* Terminal window */}
        <div className="terminal-window">
          <div className="terminal-header">
            <div className="terminal-dot bg-red-500" />
            <div className="terminal-dot bg-yellow-500" />
            <div className="terminal-dot bg-green-500" />
            <span className="ml-3 text-xs text-gray-500 font-mono">ahmed@portfolio ~ </span>
          </div>

          <div className="p-6 md:p-10 space-y-6">
            {/* ASCII art name */}
            <pre className="text-[10px] sm:text-xs md:text-sm leading-tight neon-text hidden sm:block select-none">
{` █████╗ ██╗  ██╗███╗   ███╗███████╗██████╗ 
██╔══██╗██║  ██║████╗ ████║██╔════╝██╔══██╗
███████║███████║██╔████╔██║█████╗  ██║  ██║
██╔══██║██╔══██║██║╚██╔╝██║██╔══╝  ██║  ██║
██║  ██║██║  ██║██║ ╚═╝ ██║███████╗██████╔╝
╚═╝  ╚═╝╚═╝  ╚═╝╚═╝     ╚═╝╚══════╝╚═════╝`}
            </pre>

            {/* Mobile name */}
            <h1 className="sm:hidden text-3xl font-bold neon-text font-mono">
              Ahmed Ezzat
            </h1>

            {/* Role with typing effect */}
            <div className="space-y-2">
              <p className="text-gray-500 text-sm font-mono">
                <span className="text-green-400">$</span> whoami
              </p>
              <h2 className="text-xl md:text-2xl font-mono">
                <span className="text-cyan-400">&gt;</span>{' '}
                <span className="text-green-300">{displayText}</span>
                <span className={`inline-block w-2.5 h-5 bg-green-400 ml-0.5 align-text-bottom ${showCursor ? 'opacity-100' : 'opacity-0'}`} />
              </h2>
            </div>

            {/* Description */}
            <div className="space-y-3 text-sm md:text-base">
              <p className="text-gray-400 font-mono">
                <span className="text-green-400">$</span> cat about.txt
              </p>
              <p className="text-gray-300 leading-relaxed pl-4 border-l-2 border-green-900">
                AI Engineer specializing in Arabic Speech & Voice AI. Building and operating
                production real-time Saudi Arabic TTS systems — owning the stack end to end,
                from 13.6k hours of training data to TensorRT-optimized streaming inference
                at <span className="text-green-400 font-semibold">154ms</span> time-to-first-audio.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-4">
              {[
                { label: 'RTF', value: '0.03-0.05', color: 'text-green-400' },
                { label: 'Training Hours', value: '13.6k', color: 'text-cyan-400' },
                { label: 'Inference', value: '~9x faster', color: 'text-green-400' },
                { label: 'TTFA', value: '154ms', color: 'text-cyan-400' },
              ].map((stat) => (
                <div key={stat.label} className="code-block text-center py-3">
                  <div className={`text-lg font-bold font-mono ${stat.color}`}>{stat.value}</div>
                  <div className="text-xs text-gray-500 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Social links */}
            <div className="flex items-center gap-4 pt-4">
              <span className="text-gray-500 text-sm font-mono">
                <span className="text-green-400">$</span> links --social
              </span>
              <div className="flex gap-3">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 border border-green-900 rounded hover:border-green-400 hover:shadow-[0_0_10px_hsl(120_100%_50%/0.3)] transition-all duration-300 group"
                    aria-label={link.label}
                  >
                    <link.icon className="w-4 h-4 text-gray-400 group-hover:text-green-400 transition-colors" />
                  </a>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="#experience"
                className="px-6 py-2.5 bg-green-500/10 border border-green-500 text-green-400 font-mono text-sm rounded hover:bg-green-500/20 hover:shadow-[0_0_20px_hsl(120_100%_50%/0.2)] transition-all duration-300"
              >
                ./view_experience.sh
              </a>
              <a
                href="#contact"
                className="px-6 py-2.5 border border-gray-700 text-gray-400 font-mono text-sm rounded hover:border-cyan-500 hover:text-cyan-400 transition-all duration-300"
              >
                ./contact.sh
              </a>
              <a
                href={`${import.meta.env.BASE_URL}Ahmed_Ezzat_CV.pdf`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2.5 border border-gray-700 text-gray-400 font-mono text-sm rounded hover:border-green-400 hover:text-green-400 transition-all duration-300"
              >
                cat ./Ahmed_Ezzat_CV.pdf
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
