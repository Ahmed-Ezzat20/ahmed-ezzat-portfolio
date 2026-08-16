import { ArrowUpRight, BookOpenText, FolderGit2, Headphones, MessageSquareMore } from 'lucide-react';

const PortfolioSection = () => {
  const projects = [
    {
      type: 'Dataset · 2026',
      title: 'Large-Scale Saudi Arabic Speech Corpus',
      description: 'An end-to-end 1,368-hour Saudi/Khaleeji Arabic corpus pipeline for ASR and TTS. The work spans source curation, multi-engine transcription, CER-driven QA, diacritization, and dialect annotation.',
      metric: '1,368h',
      metricLabel: 'curated speech',
      icon: Headphones,
      tags: ['Arabic speech', 'ASR', 'TTS', 'Quality control'],
    },
    {
      type: 'Application · 2025',
      title: 'Real-Time Audio Chat with Voice AI',
      description: 'A conversational voice experience combining VAD, Whisper Large v3 Turbo, Qwen 3 reasoning, and Chatterbox TTS over WebRTC, with streaming and barge-in for natural interruptions.',
      metric: 'Live',
      metricLabel: 'voice interaction',
      icon: MessageSquareMore,
      tags: ['WebRTC', 'Whisper', 'Qwen 3', 'Chatterbox TTS'],
    },
    {
      type: 'Research · 2025',
      title: 'EgyLens — VQA for Egyptian Arabic',
      description: 'Fine-tuned Google Gemma 3n for Egyptian Arabic visual question answering, with a focus on privacy-preserving, on-device visual understanding and offline inference.',
      metric: 'Offline',
      metricLabel: 'private inference',
      icon: FolderGit2,
      tags: ['Gemma 3n', 'VQA', 'Egyptian Arabic', 'Edge AI'],
    },
  ];

  return (
    <section id="projects" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="eyebrow">04 · Selected work</p>
            <h2 className="section-heading mt-4">A few systems built for Arabic intelligence in the real world.</h2>
          </div>
          <a href="https://github.com/Ahmed-Ezzat20" target="_blank" rel="noopener noreferrer" className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-cyan-100 transition-colors hover:text-cyan-200">View GitHub <ArrowUpRight className="h-4 w-4" /></a>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {projects.map((project) => {
            const Icon = project.icon;
            return (
              <article key={project.title} className="signal-card flex min-h-[350px] flex-col rounded-3xl p-6 md:p-7">
                <div className="flex items-start justify-between">
                  <span className="rounded-xl bg-cyan-300/10 p-3 text-cyan-200"><Icon className="h-5 w-5" /></span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.13em] text-slate-500">{project.type}</span>
                </div>
                <h3 className="mt-8 font-display text-xl font-bold tracking-[-0.035em] text-slate-50">{project.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-400">{project.description}</p>
                <div className="mt-auto pt-7">
                  <div className="flex items-end justify-between border-t border-cyan-100/10 pt-5">
                    <div><p className="metric-value text-2xl">{project.metric}</p><p className="mt-1 text-xs text-slate-500">{project.metricLabel}</p></div>
                    <div className="flex flex-wrap justify-end gap-1.5 max-w-[180px]">{project.tags.map((tag) => <span key={tag} className="rounded-full bg-slate-950/30 px-2 py-1 text-[10px] text-slate-400">{tag}</span>)}</div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-7 flex items-center gap-3 rounded-2xl border border-cyan-100/10 bg-cyan-300/[0.035] px-5 py-4">
          <BookOpenText className="h-5 w-5 text-cyan-200" />
          <p className="text-sm text-slate-400">Published research: <a className="text-cyan-100 underline decoration-cyan-300/30 underline-offset-4 hover:text-cyan-200" href="https://doi.org/10.1109/JAC-ECC64419.2024.11061212" target="_blank" rel="noopener noreferrer">Lightweight Plant Leaf Classification Based on Transfer Learning</a>, IEEE JAC-ECC 2024.</p>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
