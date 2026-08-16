const TechStackSection = () => {
  const capabilityGroups = [
    {
      number: '01',
      title: 'Speech & Voice AI',
      description: 'A dialect-aware toolkit for Arabic text-to-speech, transcription, alignment, and audio processing.',
      tools: ['F5-TTS', 'Spark-TTS', 'XTTSv2', 'Whisper', 'NVIDIA Parakeet', 'NeMo', 'Silero VAD', 'pyannote'],
    },
    {
      number: '02',
      title: 'Real-time voice agents',
      description: 'Low-latency orchestration for conversational systems that listen, reason, and respond naturally.',
      tools: ['Pipecat', 'LiveKit', 'WebRTC', 'WebSocket', 'FastAPI', 'Barge-in', 'VAD / STT / LLM / TTS'],
    },
    {
      number: '03',
      title: 'ML deployment & optimization',
      description: 'Infrastructure and optimization practices for shipping models onto cost-aware GPU production stacks.',
      tools: ['PyTorch', 'TensorRT', 'Docker', 'GCP', 'Modal', 'RunPod', 'Hugging Face Hub', 'LoRA / PEFT'],
    },
  ];

  return (
    <section id="skills" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="eyebrow">02 · Expertise</p>
          <h2 className="section-heading mt-4">Technical depth across the entire voice stack.</h2>
          <p className="section-copy mt-5">From preparing Arabic speech corpora to deploying optimized models, I build the systems surrounding the model as carefully as the model itself.</p>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {capabilityGroups.map((group) => (
            <article key={group.number} className="signal-card rounded-3xl p-6 md:p-7">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-cyan-300">{group.number}</span>
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-300" />
              </div>
              <h3 className="mt-8 font-display text-xl font-bold tracking-[-0.03em] text-slate-50">{group.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-400">{group.description}</p>
              <div className="mt-7 flex flex-wrap gap-2">
                {group.tools.map((tool) => <span key={tool} className="rounded-full border border-cyan-100/10 bg-slate-950/20 px-2.5 py-1.5 text-[11px] font-medium text-slate-300">{tool}</span>)}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
