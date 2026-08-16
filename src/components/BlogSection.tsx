import { useEffect, useState } from 'react';
import { ArrowUpRight, AudioLines, BookOpen, CalendarDays, Clock3, X } from 'lucide-react';
import { blogPosts, type BlogPost } from '@/content/blogPosts';

const BlogSection = () => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setSelectedPost(null);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  useEffect(() => {
    document.body.style.overflow = selectedPost ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [selectedPost]);

  const featured = blogPosts.find((post) => post.featured) ?? blogPosts[0];
  const remainingPosts = blogPosts.filter((post) => post.slug !== featured.slug);

  return (
    <section id="blog" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="eyebrow">05 · Field notes</p>
            <h2 className="section-heading mt-4">Notes from building Arabic Voice AI systems.</h2>
            <p className="section-copy mt-5">Practical thoughts on speech data, low-latency inference, real-time agents, and the work between research and deployment.</p>
          </div>
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-cyan-100/10 px-4 py-2 text-xs text-slate-400"><AudioLines className="h-3.5 w-3.5 text-cyan-200" /> New notes will appear here</span>
        </div>

        <article className="signal-card mt-12 grid overflow-hidden rounded-3xl md:grid-cols-[1.05fr_.95fr]">
          <div className="relative min-h-60 overflow-hidden bg-gradient-to-br from-cyan-300/20 via-sky-500/10 to-transparent p-7 md:min-h-full md:p-9">
            <div className="signal-ring -left-12 -top-16 h-72 w-72" />
            <div className="signal-ring left-10 top-10 h-44 w-44 border-cyan-200/20" />
            <div className="relative flex h-full flex-col justify-between">
              <span className="inline-flex w-fit rounded-full border border-cyan-100/15 bg-slate-950/20 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.13em] text-cyan-100">Featured note</span>
              <div className="mt-16 flex items-end gap-1.5">
                {[24, 52, 38, 76, 48, 92, 55, 31, 67, 43, 82, 36, 58, 28].map((height, index) => <span key={index} className="wave-bar w-1.5 rounded-full bg-cyan-200" style={{ height: `${height}px`, animationDelay: `${index * 0.09}s` }} />)}
              </div>
            </div>
          </div>
          <div className="p-7 md:p-9">
            <div className="flex flex-wrap gap-3 text-xs text-slate-500"><span className="text-cyan-200">{featured.category}</span><span>·</span><span>{featured.publishedAt}</span><span>·</span><span>{featured.readingTime}</span></div>
            <h3 className="mt-5 font-display text-2xl font-bold tracking-[-0.04em] text-slate-50 md:text-3xl">{featured.title}</h3>
            <p className="mt-4 text-sm leading-7 text-slate-400">{featured.excerpt}</p>
            <button onClick={() => setSelectedPost(featured)} className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-cyan-100 transition-colors hover:text-cyan-200">Read note <ArrowUpRight className="h-4 w-4" /></button>
          </div>
        </article>

        <div className="mt-5 grid gap-5 md:grid-cols-2">
          {remainingPosts.map((post) => (
            <article key={post.slug} className="signal-card flex flex-col rounded-3xl p-6 md:p-7">
              <div className="flex items-center justify-between text-xs"><span className="rounded-full bg-cyan-300/10 px-3 py-1.5 text-cyan-100">{post.category}</span><span className="text-slate-500">{post.readingTime}</span></div>
              <h3 className="mt-7 font-display text-xl font-bold tracking-[-0.035em] text-slate-50">{post.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-400">{post.excerpt}</p>
              <div className="mt-auto flex items-center justify-between pt-7"><span className="text-xs text-slate-500">{post.publishedAt}</span><button onClick={() => setSelectedPost(post)} className="inline-flex items-center gap-1.5 text-sm font-semibold text-cyan-100 transition-colors hover:text-cyan-200">Read <ArrowUpRight className="h-4 w-4" /></button></div>
            </article>
          ))}
        </div>

        <div className="mt-7 flex items-center gap-3 rounded-2xl border border-cyan-100/10 bg-cyan-300/[0.035] px-5 py-4 text-sm leading-6 text-slate-400"><BookOpen className="h-5 w-5 shrink-0 text-cyan-200" /> Posts are stored in a single editable content file, so new writing can be added without changing the layout.</div>
      </div>

      {selectedPost && (
        <div className="fixed inset-0 z-[100] flex items-end bg-slate-950/75 p-0 backdrop-blur-sm md:items-center md:justify-center md:p-6" role="dialog" aria-modal="true" aria-label={selectedPost.title}>
          <button className="absolute inset-0 cursor-default" aria-label="Close article" onClick={() => setSelectedPost(null)} />
          <article className="relative max-h-[92vh] w-full max-w-3xl overflow-y-auto rounded-t-3xl border border-cyan-100/15 bg-[#0d2238] p-6 shadow-2xl md:rounded-3xl md:p-10">
            <button onClick={() => setSelectedPost(null)} className="absolute right-5 top-5 rounded-full border border-cyan-100/10 p-2 text-slate-400 transition-colors hover:text-cyan-100" aria-label="Close article"><X className="h-4 w-4" /></button>
            <div className="pr-10"><p className="eyebrow">{selectedPost.category}</p><h3 className="mt-4 font-display text-3xl font-bold tracking-[-0.05em] text-slate-50 md:text-4xl">{selectedPost.title}</h3></div>
            <div className="mt-6 flex flex-wrap items-center gap-3 text-xs text-slate-500"><span className="inline-flex items-center gap-1.5"><CalendarDays className="h-3.5 w-3.5" />{selectedPost.publishedAt}</span><span className="inline-flex items-center gap-1.5"><Clock3 className="h-3.5 w-3.5" />{selectedPost.readingTime}</span></div>
            <div className="mt-9 space-y-8">
              {selectedPost.sections.map((section) => <div key={section.heading}><h4 className="font-display text-xl font-bold tracking-[-0.03em] text-cyan-100">{section.heading}</h4><div className="mt-3 space-y-4 text-[15px] leading-7 text-slate-300">{section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div></div>)}
            </div>
          </article>
        </div>
      )}
    </section>
  );
};

export default BlogSection;
