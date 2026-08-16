const ExperienceTimeline = () => {
  const experience = [
    {
      date: 'Feb 2026 — Present',
      role: 'AI Engineer · TTS Lead, Voice AI Team',
      company: 'hams.ai',
      status: 'RUNNING',
      points: [
        'Built and operate Hams Turbo TTS, a real-time Saudi Arabic text-to-speech system for enterprise voice agents.',
        'Fine-tuned F5-TTS across multiple model generations on approximately 13,600 hours of Saudi Arabic speech.',
        'Delivered approximately 9× combined inference speedup through pruned-step sampling and a custom TensorRT FP16 backend.',
        'Achieved 154ms mean and 253ms p95 time-to-first-audio in production, with RTF 0.03–0.05.',
        'Own production infrastructure including Docker, TensorRT, NVIDIA L4 and zero-downtime deployment cutovers.',
      ],
    },
    {
      date: 'Sep 2025 — Jan 2026',
      role: 'AI Engineer',
      company: 'GenArabia',
      status: 'COMPLETED',
      points: [
        'Fine-tuned Spark-TTS for Arabic on a 150-hour dataset using H100 GPUs, including diacritic handling and publishing.',
        'Fine-tuned Whisper Large V3 and NVIDIA Parakeet-TDT for air-traffic-control communication, reducing WER by 60%.',
        'Designed a synthetic speech-data pipeline for telecom use cases including telephone-code simulation and domain-specific training.',
        'Engineered production speech-processing pipelines for TTS and STT systems with serverless deployment and Modal FastAPI endpoints.',
      ],
    },
    {
      date: 'Jun 2025 — Aug 2025',
      role: 'AI Engineer',
      company: 'Andalusi',
      status: 'COMPLETED',
      points: [
        'Delivered a quantized background-removal model with a 75% size reduction for mobile and edge deployment.',
        'Shipped a serverless object-removal endpoint that contributed to premium-tier subscription growth.',
      ],
    },
    {
      date: 'Jun 2024 — May 2025',
      role: 'AI Engineer',
      company: 'E Connect Africa',
      status: 'COMPLETED',
      points: [
        'Owned the full TTS lifecycle for a course-generation product, from data preparation to model deployment.',
        'Built end-to-end audio-visual synchronization pipelines using SadTalker, Wav2Lip and LatentSync for interactive learning.',
      ],
    },
    {
      date: 'Jul 2023 — Aug 2023',
      role: 'Machine Learning Intern',
      company: 'TensorGraph',
      status: 'COMPLETED',
      points: [
        'Built a BERT-based entity-recognition system for restaurant phone-order automation and used GPT for synthetic data generation.',
        'Reduced annotation costs by 80% through a synthetic-data workflow.',
      ],
    },
  ];

  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <p className="text-gray-500 font-mono text-sm mb-2">
            <span className="text-green-400">$</span> git log --experience --oneline
          </p>
          <h2 className="text-3xl md:text-4xl font-mono font-bold neon-text">
            # Experience Log
          </h2>
        </div>

        <div className="relative border-l border-green-900/70 ml-3 md:ml-5 space-y-8">
          {experience.map((item, index) => (
            <article key={`${item.company}-${item.date}`} className="relative pl-7 md:pl-10">
              <span className={`absolute -left-[5px] top-6 h-2.5 w-2.5 rounded-full ${index === 0 ? 'bg-green-400 shadow-[0_0_12px_hsl(120_100%_50%)]' : 'bg-green-900'}`} />
              <div className="code-block card-glow">
                <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                  <div>
                    <p className="font-mono text-xs text-gray-500 mb-2">commit {String(experience.length - index).padStart(7, '0')}</p>
                    <h3 className="font-mono text-base md:text-lg text-green-300">{item.role}</h3>
                    <p className="font-mono text-sm text-cyan-400 mt-1">@ {item.company}</p>
                  </div>
                  <div className="md:text-right shrink-0">
                    <p className="font-mono text-xs text-gray-500">{item.date}</p>
                    <span className={`inline-block mt-2 px-2 py-0.5 rounded border text-[10px] font-mono ${item.status === 'RUNNING' ? 'border-green-500/40 text-green-400 bg-green-500/10' : 'border-gray-700 text-gray-500'}`}>
                      {item.status === 'RUNNING' ? '● ' : ''}{item.status}
                    </span>
                  </div>
                </div>
                <ul className="mt-5 space-y-2">
                  {item.points.map((point) => (
                    <li key={point} className="flex gap-3 font-mono text-xs md:text-sm leading-relaxed text-gray-400">
                      <span className="text-green-600 shrink-0">›</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceTimeline;
