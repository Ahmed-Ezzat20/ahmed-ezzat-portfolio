import { Github, Linkedin, Mail, Phone, MapPin, GraduationCap, Send } from 'lucide-react';

const ContactSection = () => {
  const contacts = [
    { icon: Mail, label: 'email', value: 'ahmedezzat0247@gmail.com', href: 'mailto:ahmedezzat0247@gmail.com' },
    { icon: Phone, label: 'phone', value: '+20 109 163 8280', href: 'tel:+201091638280' },
    { icon: MapPin, label: 'location', value: 'Cairo, Egypt', href: undefined },
  ];

  const socials = [
    { icon: Github, label: 'GitHub', href: 'https://github.com/Ahmed-Ezzat20' },
    { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/mrezzat/' },
    { icon: GraduationCap, label: 'Google Scholar', href: 'https://scholar.google.com/citations?user=5OHfOSgAAAAJ&hl=en' },
  ];

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <p className="text-gray-500 font-mono text-sm mb-2">
            <span className="text-green-400">$</span> ./contact.sh --open
          </p>
          <h2 className="text-3xl md:text-4xl font-mono font-bold neon-text">
            # Open a Channel
          </h2>
        </div>

        <div className="grid md:grid-cols-5 gap-6">
          <div className="md:col-span-3 terminal-window">
            <div className="terminal-header">
              <div className="terminal-dot bg-red-500" />
              <div className="terminal-dot bg-yellow-500" />
              <div className="terminal-dot bg-green-500" />
              <span className="ml-3 text-xs text-gray-500 font-mono">contact@ahmed:~</span>
            </div>
            <div className="p-6 md:p-8">
              <p className="text-green-400 font-mono text-sm">$ echo $AVAILABILITY</p>
              <p className="mt-3 text-gray-300 leading-relaxed text-sm">
                Available for Voice AI, Arabic TTS/STT, real-time agent, and production ML infrastructure collaborations.
                For project discussions, the fastest route is email.
              </p>

              <div className="mt-7 space-y-4">
                {contacts.map((contact) => {
                  const Icon = contact.icon;
                  const content = (
                    <>
                      <Icon className="w-4 h-4 text-green-500 shrink-0" />
                      <span className="font-mono text-xs text-gray-600 w-16">{contact.label}</span>
                      <span className="font-mono text-sm text-gray-300">{contact.value}</span>
                    </>
                  );

                  return contact.href ? (
                    <a key={contact.label} href={contact.href} className="flex items-center gap-3 hover:bg-green-500/5 -mx-2 px-2 py-2 rounded transition-colors group">
                      {content}
                    </a>
                  ) : (
                    <div key={contact.label} className="flex items-center gap-3 px-2 py-2">
                      {content}
                    </div>
                  );
                })}
              </div>

              <a
                href="mailto:ahmedezzat0247@gmail.com?subject=Portfolio%20Inquiry"
                className="mt-8 inline-flex items-center gap-2 px-5 py-2.5 bg-green-500/10 border border-green-500 text-green-400 font-mono text-sm rounded hover:bg-green-500/20 hover:shadow-[0_0_20px_hsl(120_100%_50%/0.2)] transition-all"
              >
                <Send className="w-4 h-4" /> compose --email
              </a>
            </div>
          </div>

          <aside className="md:col-span-2 code-block flex flex-col justify-between">
            <div>
              <p className="text-gray-500 text-xs font-mono">$ links --external</p>
              <div className="mt-5 space-y-3">
                {socials.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-sm font-mono text-gray-400 hover:text-green-400 transition-colors group"
                    >
                      <Icon className="w-4 h-4 text-gray-600 group-hover:text-green-400 transition-colors" />
                      <span>{social.label}</span>
                      <span className="ml-auto text-gray-700 group-hover:text-green-600">↗</span>
                    </a>
                  );
                })}
              </div>
            </div>
            <div className="mt-8 pt-5 border-t border-green-900/50">
              <p className="font-mono text-xs text-green-500">status: <span className="text-gray-400">open_to_collaborate</span></p>
              <p className="font-mono text-xs text-gray-600 mt-2">response_time: &lt; 24 hours</p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
