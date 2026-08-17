import { ArrowDownRight, Download, Github, Linkedin, Mail, Mic2, Radio, Sparkles } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const VoiceWaveform = ({ isArabic }: { isArabic: boolean }) => {
  const bars = [32, 52, 76, 44, 92, 62, 108, 78, 46, 88, 120, 68, 52, 100, 74, 38, 64, 96, 58, 78, 42, 66, 88, 54, 34, 72, 48, 94, 62, 40, 76, 52];

  return (
    <div className="relative h-[310px] overflow-hidden rounded-[1.6rem] signal-surface p-6 md:h-[380px] md:p-8">
      <div className="absolute inset-0 signal-grid" /><div className="signal-orb -right-44 -top-44" /><div className="signal-ring -right-20 -top-20 h-80 w-80" /><div className="signal-ring -right-2 top-0 h-56 w-56" />
      <div className="relative flex items-center justify-between"><div className="flex items-center gap-2 rounded-full border border-cyan-300/15 bg-cyan-300/5 px-3 py-1.5"><span className="pulse-dot h-2 w-2 rounded-full bg-emerald-400" /><span className="font-mono text-[10px] tracking-[0.15em] text-cyan-100/80">{isArabic ? 'خط صوتي مباشر' : 'LIVE VOICE PIPELINE'}</span></div><Radio className="h-5 w-5 text-cyan-300/60" /></div>
      <div dir="ltr" className="relative mt-12 flex h-[150px] items-center justify-center gap-[5px] md:mt-16 md:h-[170px] md:gap-[7px]">{bars.map((height, index) => <span key={`${height}-${index}`} className="wave-bar w-1 rounded-full bg-gradient-to-b from-cyan-200 via-cyan-400 to-sky-600 md:w-1.5" style={{ height: `${height}px`, animationDelay: `${(index % 8) * 0.12}s` }} />)}</div>
      <div className="relative mt-5 flex items-end justify-between border-t border-cyan-100/10 pt-4"><div><p className="font-mono text-[10px] uppercase tracking-[0.15em] text-slate-500">{isArabic ? 'الإشارة الحالية' : 'Current Signal'}</p><p className="mt-1 font-display text-sm font-semibold text-slate-100">{isArabic ? <><span className="keep-ltr">Saudi Arabic TTS</span> · بث مباشر</> : 'Saudi Arabic TTS · Streaming'}</p></div><div className="text-end"><p className="font-mono text-[10px] uppercase tracking-[0.15em] text-slate-500">{isArabic ? 'زمن أول صوت' : 'Time to first audio'}</p><p dir="ltr" className="mt-1 font-display text-xl font-bold text-cyan-200">154 ms</p></div></div>
    </div>
  );
};

const HeroSection = () => {
  const { isArabic, tr } = useLanguage();
  const socials = [{ label: 'GitHub', href: 'https://github.com/Ahmed-Ezzat20', icon: Github }, { label: 'LinkedIn', href: 'https://www.linkedin.com/in/mrezzat/', icon: Linkedin }, { label: 'Email', href: 'mailto:ahmedezzat0247@gmail.com', icon: Mail }];
  const metrics = [{ value: '13.6k', label: tr('speech hours trained', 'ساعة صوت للتدريب') }, { value: '~9×', label: tr('inference speedup', 'تسريع الاستدلال') }, { value: '0.03', label: tr('real-time factor', 'عامل الزمن الحقيقي') }];

  return (
    <section id="home" className="relative isolate overflow-hidden px-6 pb-20 pt-32 md:pb-28 md:pt-40"><div className="signal-grid absolute inset-0 -z-10" /><div className="signal-orb -left-72 top-16 -z-10" />
      <div className="mx-auto grid max-w-6xl items-start gap-14 lg:grid-cols-[1.1fr_.9fr] lg:gap-16"><div>
        <div className="fade-up flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-cyan-300" /><span className="eyebrow">{tr('Voice AI Engineer · Cairo, Egypt', 'مهندس ذكاء اصطناعي صوتي · القاهرة، مصر')}</span></div>
        <h1 className="fade-up fade-up-delay-1 mt-6 max-w-3xl font-display text-5xl font-bold leading-[1.12] tracking-[-0.065em] text-slate-50 sm:text-6xl md:text-7xl">Ahmed Ezzat<span className="mt-3 block text-cyan-200">{tr('building the signal layer for Arabic voice.', 'أبني طبقة الإشارة للصوت العربي.')}</span></h1>
        <p className="fade-up fade-up-delay-2 mt-7 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">{isArabic ? <>قائد <span className="keep-ltr">TTS</span> في <span className="keep-ltr">hams.ai</span>، أعمل على أنظمة صوت عربية سعودية جاهزة للإنتاج؛ من البيانات واسعة النطاق وتدريب النماذج إلى الاستدلال الفوري المحسّن بواسطة <span className="keep-ltr">TensorRT</span>.</> : 'TTS Lead at hams.ai, focused on production-grade Saudi Arabic speech systems — from large-scale data and model fine-tuning to real-time, TensorRT-optimized inference.'}</p>
        <div className="fade-up fade-up-delay-2 mt-8 flex flex-wrap gap-3"><a href="#experience" className="inline-flex items-center gap-2 rounded-full bg-cyan-300 px-5 py-3 text-sm font-semibold text-slate-950 transition-transform hover:-translate-y-0.5 hover:bg-cyan-200">{tr('Explore my work', 'استكشف أعمالي')}<ArrowDownRight className={`h-4 w-4 ${isArabic ? 'rotate-90' : ''}`} /></a><a href={`${import.meta.env.BASE_URL}Ahmed_Ezzat_CV.pdf`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-cyan-200/20 bg-slate-900/30 px-5 py-3 text-sm font-semibold text-cyan-100 transition-colors hover:border-cyan-200/50 hover:bg-cyan-300/10">{tr('Download CV', 'تحميل السيرة الذاتية')}<Download className="h-4 w-4" /></a></div>
        <div className="fade-up fade-up-delay-3 mt-10 flex flex-wrap items-center gap-x-5 gap-y-3"><span className="font-mono text-[11px] uppercase tracking-[0.13em] text-slate-500">{tr('Connect', 'تواصل')}</span>{socials.map((social) => { const Icon = social.icon; return <a key={social.label} href={social.href} target={social.label === 'Email' ? undefined : '_blank'} rel={social.label === 'Email' ? undefined : 'noopener noreferrer'} aria-label={social.label} className="text-slate-400 transition-colors hover:text-cyan-200"><Icon className="h-5 w-5" /></a>; })}</div>
        <div className="fade-up fade-up-delay-3 mt-12 grid max-w-xl grid-cols-3 gap-3 border-t border-cyan-100/10 pt-6">{metrics.map((metric) => <div key={metric.label}><p dir="ltr" className="metric-value text-2xl md:text-3xl">{metric.value}</p><p className="mt-1 max-w-24 text-xs leading-5 text-slate-500">{metric.label}</p></div>)}</div>
      </div>
      <div className="fade-up fade-up-delay-2 relative"><VoiceWaveform isArabic={isArabic} /><div className="signal-card absolute -bottom-8 -left-3 max-w-[260px] rounded-2xl p-4 md:-left-8"><div className="flex items-start gap-3"><div className="rounded-xl bg-cyan-300/10 p-2"><Mic2 className="h-4 w-4 text-cyan-200" /></div><div><p className="font-mono text-[10px] uppercase tracking-[0.14em] text-slate-500">{tr('Now Building', 'أعمل حالياً على')}</p><p className="mt-1 text-sm font-semibold leading-5 text-slate-100">{isArabic ? <>نظام <span className="keep-ltr">Saudi Arabic TTS</span> لوكلاء الأعمال الصوتيين المباشرين.</> : 'Production Saudi Arabic TTS for live enterprise agents.'}</p></div></div></div><div className="absolute -right-3 top-6 rounded-full border border-cyan-100/15 bg-slate-950/50 p-3 backdrop-blur md:-right-5"><Sparkles className="h-5 w-5 text-cyan-200" /></div></div>
      </div>
    </section>
  );
};

export default HeroSection;
