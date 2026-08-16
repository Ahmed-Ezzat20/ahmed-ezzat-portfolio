import { ArrowUpRight, Github, GraduationCap, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

const ContactSection = () => {
  const socialLinks = [
    { label: 'GitHub', href: 'https://github.com/Ahmed-Ezzat20', icon: Github },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/mrezzat/', icon: Linkedin },
    { label: 'Google Scholar', href: 'https://scholar.google.com/citations?user=5OHfOSgAAAAJ&hl=en', icon: GraduationCap },
  ];

  return (
    <section id="contact" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl rounded-[2rem] signal-surface p-7 md:p-12">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_.9fr] lg:gap-16">
          <div>
            <p className="eyebrow">05 · Contact</p>
            <h2 className="section-heading mt-4 max-w-xl">Let’s build useful, natural voice experiences in Arabic.</h2>
            <p className="section-copy mt-5 max-w-xl">I’m open to Voice AI, Arabic TTS/STT, real-time agent, and production ML infrastructure collaborations. For a project discussion, email is the fastest channel.</p>
            <a href="mailto:ahmedezzat0247@gmail.com?subject=Portfolio%20Inquiry" className="mt-8 inline-flex items-center gap-2 rounded-full bg-cyan-300 px-5 py-3 text-sm font-semibold text-slate-950 transition-transform hover:-translate-y-0.5 hover:bg-cyan-200">
              Start a conversation <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>

          <div className="rounded-3xl border border-cyan-100/10 bg-slate-950/20 p-6">
            <div className="space-y-5">
              <a href="mailto:ahmedezzat0247@gmail.com" className="flex items-center gap-4 text-sm text-slate-300 transition-colors hover:text-cyan-100"><Mail className="h-4 w-4 text-cyan-300" /><span>ahmedezzat0247@gmail.com</span></a>
              <a href="tel:+201091638280" className="flex items-center gap-4 text-sm text-slate-300 transition-colors hover:text-cyan-100"><Phone className="h-4 w-4 text-cyan-300" /><span>+20 109 163 8280</span></a>
              <div className="flex items-center gap-4 text-sm text-slate-300"><MapPin className="h-4 w-4 text-cyan-300" /><span>Cairo, Egypt</span></div>
            </div>
            <div className="my-7 h-px bg-cyan-100/10" />
            <p className="font-mono text-[10px] uppercase tracking-[0.13em] text-slate-500">Elsewhere</p>
            <div className="mt-4 flex flex-wrap gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-cyan-100/10 px-3 py-2 text-xs font-medium text-slate-400 transition-colors hover:border-cyan-200/35 hover:text-cyan-100"><Icon className="h-3.5 w-3.5" />{social.label}</a>;
              })}
            </div>
            <p className="mt-7 text-xs text-slate-500">Usually replies within 24 hours.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
