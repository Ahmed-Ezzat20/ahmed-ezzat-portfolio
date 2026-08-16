const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <div className="mb-12">
          <p className="text-gray-500 font-mono text-sm mb-2">
            <span className="text-green-400">$</span> cat ./about/README.md
          </p>
          <h2 className="text-3xl md:text-4xl font-mono font-bold neon-text">
            # About Me
          </h2>
        </div>

        <div className="space-y-8">
          {/* Main bio */}
          <div className="terminal-window">
            <div className="terminal-header">
              <div className="terminal-dot bg-red-500" />
              <div className="terminal-dot bg-yellow-500" />
              <div className="terminal-dot bg-green-500" />
              <span className="ml-3 text-xs text-gray-500 font-mono">about.md</span>
            </div>
            <div className="p-6 space-y-4 text-sm md:text-base">
              <p className="text-gray-300 leading-relaxed">
                I'm an <span className="text-green-400">AI Engineer</span> specializing in{' '}
                <span className="text-cyan-400">Arabic Speech & Voice AI</span>. Currently serving as{' '}
                <span className="text-green-400">TTS Lead</span> at hams.ai, where I build and operate
                a production real-time Saudi Arabic TTS system powering live enterprise voice agents.
              </p>
              <p className="text-gray-300 leading-relaxed">
                I own the stack end to end — from curating <span className="text-cyan-400">13.6k hours</span> of
                training data and fine-tuning F5-TTS models to deploying TensorRT-optimized streaming inference
                achieving <span className="text-green-400">154ms</span> time-to-first-audio with{' '}
                <span className="text-green-400">zero-downtime</span> production deployments.
              </p>
              <p className="text-gray-300 leading-relaxed">
                With 2+ years shipping dialect-specific TTS/ASR systems (Saudi, Egyptian, MSA) on production
                GPU infrastructure, I'm passionate about pushing the boundaries of Arabic voice technology.
              </p>
            </div>
          </div>

          {/* Key facts */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="code-block">
              <p className="text-gray-500 text-xs mb-3 font-mono">// current_role.json</p>
              <div className="space-y-2 text-sm font-mono">
                <p><span className="text-cyan-400">"company"</span>: <span className="text-green-300">"hams.ai"</span>,</p>
                <p><span className="text-cyan-400">"role"</span>: <span className="text-green-300">"TTS Lead, Voice AI Team"</span>,</p>
                <p><span className="text-cyan-400">"since"</span>: <span className="text-green-300">"February 2026"</span>,</p>
                <p><span className="text-cyan-400">"focus"</span>: <span className="text-green-300">"Saudi Arabic TTS"</span></p>
              </div>
            </div>

            <div className="code-block">
              <p className="text-gray-500 text-xs mb-3 font-mono">// education.json</p>
              <div className="space-y-2 text-sm font-mono">
                <p><span className="text-cyan-400">"university"</span>: <span className="text-green-300">"Helwan University"</span>,</p>
                <p><span className="text-cyan-400">"degree"</span>: <span className="text-green-300">"BS Computer Science"</span>,</p>
                <p><span className="text-cyan-400">"year"</span>: <span className="text-yellow-400">2024</span>,</p>
                <p><span className="text-cyan-400">"gpa"</span>: <span className="text-yellow-400">3.27</span></p>
              </div>
            </div>
          </div>

          {/* Community involvement */}
          <div className="code-block">
            <p className="text-gray-500 text-xs mb-3 font-mono">// community.ts</p>
            <div className="space-y-2 text-sm font-mono">
              <p className="text-gray-400">
                <span className="text-purple-400">const</span> community = {'{'}
              </p>
              <p className="pl-4"><span className="text-cyan-400">manusFellow</span>: <span className="text-green-300">"One of 20+ global Fellows"</span>,</p>
              <p className="pl-4"><span className="text-cyan-400">events</span>: <span className="text-green-300">"4 community events, 200+ participants"</span>,</p>
              <p className="pl-4"><span className="text-cyan-400">role</span>: <span className="text-green-300">"Chairman of MIE 2026 (IEEE Young Professionals Egypt)"</span>,</p>
              <p className="pl-4"><span className="text-cyan-400">mentoring</span>: <span className="text-green-300">"345 engineering project teams"</span>,</p>
              <p className="pl-4"><span className="text-cyan-400">hackathon</span>: <span className="text-green-300">"Build Your Startup in 4 Hours (July 2026)"</span>,</p>
              <p className="text-gray-400">{'}'}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
