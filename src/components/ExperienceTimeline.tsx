import { ArrowUpRight } from 'lucide-react';

const ExperienceTimeline = () => {
  const roles = [
    {
      period: 'Feb 2026 — Present',
      title: 'AI Engineer · TTS Lead, Voice AI Team',
      company: 'hams.ai',
      highlight: 'Production Saudi Arabic TTS',
      summary: 'Leading the development and operation of Hams Turbo TTS, a production streaming system for live enterprise voice agents.',
      outcomes: ['Fine-tuned F5-TTS on approximately 13,600 hours of speech.', 'Achieved 154ms mean time-to-first-audio with RTF 0.03–0.05.', 'Delivered ~9× combined speedup through pruned sampling and TensorRT FP16.'],
    },
    {
      period: 'Sep 2025 — Jan 2026',
      title: 'AI Engineer',
      company: 'GenArabia',
      highlight: 'Arabic TTS & ATC transcription',
      summary: 'Built production speech workflows for Arabic model adaptation, telecom data generation, and air-traffic-control transcription.',
      outcomes: ['Fine-tuned Spark-TTS for Arabic on a 150-hour curated dataset.', 'Reduced ATC word error rate by 60% with Whisper Large V3 and NVIDIA Parakeet.', 'Designed synthetic speech-data pipelines and deployable FastAPI endpoints.'],
    },
    {
      period: 'Jun 2025 — Aug 2025',
      title: 'AI Engineer',
      company: 'Andalusi',
      highlight: 'Edge computer vision',
      summary: 'Delivered computer vision capabilities focused on practical deployment and premium product impact.',
      outcomes: ['Reduced a background-removal model by 75% through quantization.', 'Shipped an object-removal endpoint for premium users.'],
    },
    {
      period: 'Jun 2024 — May 2025',
      title: 'AI Engineer',
      company: 'E Connect Africa',
      highlight: 'Learning experience generation',
      summary: 'Owned speech and audio-visual elements of an AI-powered course-generation product.',
      outcomes: ['Managed TTS from data preparation to delivery.', 'Built synchronized character-animation pipelines using SadTalker, Wav2Lip, and LatentSync.'],
    },
  ];

  return (
    <section id="experience" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:gap-20">
          <div>
            <p className="eyebrow">03 · Experience</p>
            <h2 className="section-heading mt-4">Work that connects model research to real-world speech products.</h2>
            <p className="section-copy mt-5">I’ve worked across fine-tuning, deployment, and applied product delivery — with a current focus on Arabic voice systems that operate under real-time constraints.</p>
          </div>

          <div className="space-y-4">
            {roles.map((role, index) => (
              <article key={role.company} className="signal-card rounded-2xl p-6 md:p-7">
                <div className="flex flex-col justify-between gap-5 sm:flex-row">
                  <div>
                    <p className="font-mono text-[11px] text-cyan-300">{role.period}</p>
                    <h3 className="mt-3 font-display text-lg font-bold tracking-[-0.03em] text-slate-50">{role.title}</h3>
                    <p className="mt-1 text-sm font-medium text-cyan-100">{role.company}</p>
                  </div>
                  <span className="h-fit rounded-full border border-cyan-100/10 bg-cyan-300/5 px-3 py-1.5 text-[11px] font-medium text-slate-400">{role.highlight}</span>
                </div>
                <p className="mt-5 text-sm leading-6 text-slate-400">{role.summary}</p>
                <ul className="mt-5 space-y-2.5">
                  {role.outcomes.map((outcome) => (
                    <li key={outcome} className="flex gap-3 text-sm leading-6 text-slate-300"><ArrowUpRight className={`mt-1 h-3.5 w-3.5 shrink-0 ${index === 0 ? 'text-cyan-200' : 'text-slate-500'}`} />{outcome}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceTimeline;
