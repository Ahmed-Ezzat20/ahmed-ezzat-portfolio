import { AudioLines, BookOpen, Globe2, Layers3 } from 'lucide-react';

const AboutSection = () => {
  const focusAreas = [
    { icon: AudioLines, title: 'Arabic voice systems', copy: 'Dialect-specific TTS and ASR across Saudi, Egyptian, and Modern Standard Arabic.' },
    { icon: Layers3, title: 'Production ML', copy: 'Data curation, model tuning, TensorRT optimization, streaming inference, and reliable GPU deployment.' },
    { icon: Globe2, title: 'Community building', copy: 'Manus Fellow and MIE 2026 Chairman, creating hands-on opportunities for Egypt’s AI community.' },
  ];

  return (
    <section id="about" className="px-6 py-24 md:py-32">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[.85fr_1.15fr] lg:gap-20">
        <div>
          <p className="eyebrow">01 · Overview</p>
          <h2 className="section-heading mt-4">An engineer focused on speech that feels immediate, reliable, and local.</h2>
          <div className="mt-7 h-px w-24 bg-cyan-300/50" />
        </div>

        <div>
          <p className="section-copy text-base md:text-lg">
            I build Voice AI systems for Arabic-speaking users, translating research into dependable products. My work brings together speech data, model adaptation, low-latency inference, and deployment engineering rather than treating them as separate problems.
          </p>
          <p className="section-copy mt-5 text-base md:text-lg">
            At hams.ai, I lead TTS work for real-time Saudi Arabic voice agents. Earlier roles across GenArabia, Andalusi, E Connect Africa, and TensorGraph gave me experience spanning large-model fine-tuning, speech pipelines, edge optimization, and applied ML products.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {focusAreas.map((area) => {
              const Icon = area.icon;
              return (
                <article key={area.title} className="signal-card rounded-2xl p-5">
                  <span className="inline-flex rounded-xl bg-cyan-300/10 p-2.5 text-cyan-200"><Icon className="h-4 w-4" /></span>
                  <h3 className="mt-4 font-display text-sm font-bold text-slate-100">{area.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">{area.copy}</p>
                </article>
              );
            })}
          </div>

          <div className="mt-8 flex items-center gap-3 rounded-2xl border border-cyan-100/10 bg-cyan-300/[0.035] px-5 py-4">
            <BookOpen className="h-5 w-5 shrink-0 text-cyan-200" />
            <p className="text-sm leading-6 text-slate-400">BS in Computer Science, Helwan University · GPA 3.27 · IEEE publication in lightweight computer vision.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
