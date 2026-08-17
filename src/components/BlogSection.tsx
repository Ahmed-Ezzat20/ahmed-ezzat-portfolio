import { ArrowUpRight, AudioLines, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
import { blogPosts } from '@/content/blogPosts';

const BlogSection = () => {
  const featured = blogPosts.find((post) => post.featured) ?? blogPosts[0];
  const recent = blogPosts.filter((post) => post.slug !== featured.slug).slice(0, 2);

  return (
    <section id="blog" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="eyebrow">05 · Field notes</p>
            <h2 className="section-heading mt-4">Writing from the voice AI engineering field.</h2>
            <p className="section-copy mt-5">Long-form articles on real-time speech systems, Arabic data, and building useful conversational experiences.</p>
          </div>
          <Link to="/blog" className="inline-flex w-fit items-center gap-2 rounded-full border border-cyan-100/15 px-4 py-2.5 text-sm font-semibold text-cyan-100 transition-colors hover:border-cyan-200/50 hover:bg-cyan-300/10">View all articles <ArrowUpRight className="h-4 w-4" /></Link>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-[1.25fr_.75fr]">
          <Link to={`/blog/${featured.slug}`} className="signal-card group relative overflow-hidden rounded-3xl p-7 md:p-9">
            <div className="signal-ring -left-24 -top-24 h-72 w-72" />
            <div className="relative">
              <div className="flex items-center justify-between"><span className="inline-flex items-center gap-2 rounded-full bg-cyan-300/10 px-3 py-1.5 text-[11px] font-medium text-cyan-100"><AudioLines className="h-3.5 w-3.5" /> Featured article</span><span className="text-xs text-slate-500">{featured.readingTime}</span></div>
              <p className="mt-14 text-xs font-medium text-cyan-200">{featured.category} · {featured.publishedAt}</p>
              <h3 className="mt-3 max-w-2xl font-display text-2xl font-bold tracking-[-0.045em] text-slate-50 transition-colors group-hover:text-cyan-100 md:text-3xl">{featured.title}</h3>
              <p className="mt-4 max-w-xl text-sm leading-7 text-slate-400">{featured.excerpt}</p>
              <span className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-cyan-100">Read article <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></span>
            </div>
          </Link>

          <div className="flex flex-col gap-5">
            {recent.map((post) => (
              <Link key={post.slug} to={`/blog/${post.slug}`} className="signal-card group flex flex-1 flex-col justify-between rounded-3xl p-6">
                <div><div className="flex justify-between text-xs"><span className="text-cyan-200">{post.category}</span><span className="text-slate-500">{post.readingTime}</span></div><h3 className="mt-5 font-display text-lg font-bold tracking-[-0.035em] text-slate-50 transition-colors group-hover:text-cyan-100">{post.title}</h3></div>
                <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-slate-400 transition-colors group-hover:text-cyan-100">Open story <ArrowUpRight className="h-3.5 w-3.5" /></span>
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-7 flex items-center gap-3 rounded-2xl border border-cyan-100/10 bg-cyan-300/[0.035] px-5 py-4 text-sm leading-6 text-slate-400"><BookOpen className="h-5 w-5 shrink-0 text-cyan-200" /> The publication has its own shareable blog URLs, optimized for focused long-form reading.</div>
      </div>
    </section>
  );
};

export default BlogSection;
