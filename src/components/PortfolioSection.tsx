import { ExternalLink, Github, Database, Radio, Eye, FileText } from 'lucide-react';

const PortfolioSection = () => {
  const projects = [
    {
      type: 'DATASET / 2026',
      title: 'Large-Scale Saudi Arabic Speech Corpus',
      description: 'Designed and executed the full data pipeline for a 1,368-hour Saudi/Khaleeji Arabic corpus. Built for TTS and ASR with source curation, multi-engine transcription with CER-based quality control, diacritization, and dialect annotation.',
      stack: ['Arabic Speech', 'ASR', 'TTS', 'Quality Control', 'Diacritization'],
      metric: '1,368h',
      metricLabel: 'curated speech',
      icon: Database,
      accent: 'text-green-400',
    },
    {
      type: 'APPLICATION / 2025',
      title: 'Real-Time Audio Chat with Voice AI',
      description: 'Production-ready voice agent integrating VAD, Whisper Large v3 Turbo for STT, Qwen 3 for LLM reasoning, and Resemble AI Chatterbox for TTS over WebRTC—plus low-latency streaming and barge-in for natural interruption handling.',
      stack: ['WebRTC', 'VAD', 'Whisper', 'Qwen 3', 'Chatterbox TTS'],
      metric: 'Real-time',
      metricLabel: 'voice interaction',
      icon: Radio,
      accent: 'text-cyan-400',
    },
    {
      type: 'RESEARCH / 2025',
      title: 'EgyLens — VQA for Egyptian Arabic',
      description: 'Fine-tuned Google’s Gemma 3n on Egyptian Arabic visual-question-answering datasets to enable on-device, privacy-preserving visual understanding with offline inference.',
      stack: ['Gemma 3n', 'VQA', 'Egyptian Arabic', 'On-device AI'],
      metric: 'Offline',
      metricLabel: 'private inference',
      icon: Eye,
      accent: 'text-purple-400',
    },
    {
      type: 'PUBLICATION / 2024',
      title: 'Lightweight Plant Leaf Classification',
      description: 'IEEE publication evaluating lightweight transfer-learning models for on-device plant species identification, designed for practical, resource-aware deployment.',
      stack: ['Transfer Learning', 'Computer Vision', 'Edge AI', 'IEEE'],
      metric: 'IEEE',
      metricLabel: 'JAC-ECC 2024',
      icon: FileText,
      accent: 'text-yellow-400',
      href: 'https://doi.org/10.1109/JAC-ECC64419.2024.11061212',
    },
  ];

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <p className="text-gray-500 font-mono text-sm mb-2">
            <span className="text-green-400">$</span> find ./projects -type f -maxdepth 2
          </p>
          <h2 className="text-3xl md:text-4xl font-mono font-bold neon-text">
            # Selected Projects
          </h2>
        </div>

        <div className="grid gap-5">
          {projects.map((project) => {
            const Icon = project.icon;
            return (
              <article key={project.title} className="code-block card-glow group">
                <div className="flex flex-col gap-5 md:flex-row md:justify-between">
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <Icon className={`w-4 h-4 ${project.accent}`} />
                      <p className="text-[11px] tracking-wider text-gray-500 font-mono">{project.type}</p>
                    </div>
                    <h3 className="font-mono text-lg md:text-xl text-gray-100 group-hover:text-green-300 transition-colors">
                      {project.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-gray-400">
                      {project.description}
                    </p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.stack.map((item) => (
                        <span key={item} className="px-2 py-1 rounded text-[11px] font-mono bg-black/60 border border-gray-800 text-gray-400">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="shrink-0 md:text-right">
                    <p className={`text-xl font-mono font-bold ${project.accent}`}>{project.metric}</p>
                    <p className="mt-1 text-[10px] uppercase tracking-wider text-gray-600">{project.metricLabel}</p>
                    {project.href && (
                      <a
                        href={project.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 mt-5 font-mono text-xs text-gray-500 hover:text-green-400 transition-colors"
                      >
                        view_paper <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="https://github.com/Ahmed-Ezzat20"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 border border-green-700 text-green-400 font-mono text-sm rounded hover:bg-green-500/10 hover:border-green-400 transition-all"
          >
            <Github className="w-4 h-4" /> git clone github.com/Ahmed-Ezzat20
          </a>
          <a
            href="https://scholar.google.com/citations?user=5OHfOSgAAAAJ&hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 border border-gray-700 text-gray-400 font-mono text-sm rounded hover:border-cyan-500 hover:text-cyan-400 transition-all"
          >
            <ExternalLink className="w-4 h-4" /> open publications
          </a>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
