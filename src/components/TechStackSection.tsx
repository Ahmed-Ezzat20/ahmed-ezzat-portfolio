const TechStackSection = () => {
  const skillCategories = [
    {
      title: 'Speech & Voice AI',
      color: 'text-green-400',
      borderColor: 'border-green-900 hover:border-green-500',
      skills: ['F5-TTS', 'Kokoro', 'Chatterbox', 'XTTSv2', 'Spark-TTS', 'RVC', 'Whisper', 'NVIDIA Parakeet-TDT', 'NeMo', 'Silero VAD', 'pyannote', 'MFA', 'CTC', 'librosa', 'torchaudio', 'KenLM'],
    },
    {
      title: 'Voice Agents & Pipelines',
      color: 'text-cyan-400',
      borderColor: 'border-cyan-900 hover:border-cyan-500',
      skills: ['pipecat', 'LiveKit', 'WebRTC', 'WebSocket', 'FastAPI', 'VAD/STT/LLM/TTS orchestration', 'barge-in', 'end-of-utterance detection'],
    },
    {
      title: 'Machine Learning',
      color: 'text-purple-400',
      borderColor: 'border-purple-900 hover:border-purple-500',
      skills: ['PyTorch', 'TensorFlow', 'fine-tuning', 'flow-matching', 'Diffusion Models', 'model distillation', 'State Space Models', 'Transformers', 'LoRA/PEFT', 'quantization'],
    },
    {
      title: 'Deployment & Infrastructure',
      color: 'text-yellow-400',
      borderColor: 'border-yellow-900 hover:border-yellow-500',
      skills: ['GCP (L4/A100/H100/B200)', 'TensorRT', 'Docker', 'Modal', 'RunPod', 'Nginx', 'Hugging Face Hub', 'zero-downtime pipelines', 'on-prem GPU'],
    },
    {
      title: 'Languages & Tools',
      color: 'text-orange-400',
      borderColor: 'border-orange-900 hover:border-orange-500',
      skills: ['Python', 'JavaScript/TypeScript', 'Bash', 'Git/GitHub', 'WSL'],
    },
  ];

  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <p className="text-gray-500 font-mono text-sm mb-2">
            <span className="text-green-400">$</span> ls -la ./skills/
          </p>
          <h2 className="text-3xl md:text-4xl font-mono font-bold neon-text">
            # Tech Stack
          </h2>
        </div>

        <div className="space-y-6">
          {skillCategories.map((category) => (
            <div key={category.title} className={`code-block border ${category.borderColor} transition-all duration-300`}>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-gray-500 font-mono text-xs">{'>'}</span>
                <h3 className={`font-mono font-bold ${category.color}`}>
                  {category.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 text-xs font-mono bg-black/50 border border-gray-800 rounded text-gray-300 hover:text-green-400 hover:border-green-800 transition-all duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 code-block">
          <p className="text-gray-500 text-xs mb-3 font-mono">$ neofetch</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-1 text-sm font-mono text-gray-300">
            <p><span className="text-green-400">OS</span>: Ubuntu 22.04 / WSL2</p>
            <p><span className="text-green-400">GPU</span>: NVIDIA L4 / A100 / H100</p>
            <p><span className="text-green-400">Editor</span>: VS Code + Vim</p>
            <p><span className="text-green-400">Shell</span>: Bash / Zsh</p>
            <p><span className="text-green-400">Cloud</span>: GCP / Modal / RunPod</p>
            <p><span className="text-green-400">ML Framework</span>: PyTorch</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
