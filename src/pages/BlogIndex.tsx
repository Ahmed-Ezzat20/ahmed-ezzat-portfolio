import { useEffect } from 'react';
import { ArrowUpRight, BookOpen, ChevronRight, Mic2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { blogPosts } from '@/content/blogPosts';

const BlogIndex = () => {
  useEffect(() => { document.title = 'Field Notes | Ahmed Ezzat'; }, []);
  const featured = blogPosts.find((post) => post.featured) ?? blogPosts[0];
  const remaining = blogPosts.filter((post) => post.slug !== featured.slug);

  return (
    <div className="min-h-screen bg-[#fcfcf9] text-[#242424]">
      <header className="border-b border-black/10 bg-[#fcfcf9]/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <Link to="/" className="flex items-center gap-2.5 text-[#242424]"><span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#0b3346] text-cyan-100"><Mic2 className="h-4 w-4" /></span><span className="font-display text-sm font-bold tracking-[-0.03em]">Ahmed Ezzat</span></Link>
          <Link to="/" className="text-sm font-medium text-[#555] transition-colors hover:text-[#0b3346]">Portfolio</Link>
        </div>
      </header>

      <main>
        <section className="border-b border-black/10 px-6 py-16 md:py-24">
          <div className="mx-auto max-w-6xl">
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-[#0b7f95]">Ahmed Ezzat’s publication</p>
            <div className="mt-6 flex flex-col gap-6 md:flex-row md:items-end md:justify-between"><div><h1 className="font-[Georgia,serif] text-5xl leading-[.98] tracking-[-0.055em] text-[#1c1c1c] md:text-7xl">Field Notes</h1><p className="mt-5 max-w-2xl text-lg leading-8 text-[#555]">Thoughtful engineering notes on Arabic Voice AI, real-time systems, and the work required to ship speech technology people can trust.</p></div><span className="inline-flex w-fit items-center gap-2 rounded-full border border-black/10 px-3 py-1.5 text-xs text-[#666]"><BookOpen className="h-3.5 w-3.5" /> {blogPosts.length} published stories</span></div>
          </div>
        </section>

        <section className="px-6 py-12 md:py-16">
          <div className="mx-auto max-w-6xl">
            <p className="font-mono text-[10px] uppercase tracking-[0.13em] text-[#777]">Featured story</p>
            <Link to={`/blog/${featured.slug}`} className="group mt-5 grid overflow-hidden border-y border-black/15 py-8 md:grid-cols-[.95fr_1.05fr] md:gap-14 md:py-10">
              <div className="relative min-h-60 overflow-hidden bg-[#0b3346] p-7 md:min-h-full md:p-10">
                <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'linear-gradient(rgba(146,232,255,.35) 1px, transparent 1px), linear-gradient(90deg, rgba(146,232,255,.35) 1px, transparent 1px)', backgroundSize: '36px 36px' }} />
                <div className="relative flex h-full flex-col justify-between"><span className="w-fit rounded-full border border-cyan-100/20 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.13em] text-cyan-100">Voice AI</span><div className="flex items-end gap-1.5">{[28, 55, 35, 82, 48, 102, 67, 39, 76, 46, 93, 58, 29, 68].map((height, index) => <span key={index} className="w-1.5 rounded-full bg-cyan-200" style={{ height: `${height}px` }} />)}</div></div>
              </div>
              <div className="flex flex-col py-1 md:py-2"><p className="text-sm text-[#777]">{featured.publishedAt} · {featured.readingTime}</p><h2 className="mt-4 max-w-xl font-[Georgia,serif] text-3xl leading-[1.1] tracking-[-0.035em] text-[#202020] transition-colors group-hover:text-[#0b7f95] md:text-4xl">{featured.title}</h2><p className="mt-5 max-w-lg text-base leading-7 text-[#555]">{featured.excerpt}</p><span className="mt-auto inline-flex items-center gap-2 pt-8 text-sm font-semibold text-[#1c1c1c]">Read story <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></span></div>
            </Link>
          </div>
        </section>

        <section className="px-6 pb-20 md:pb-28">
          <div className="mx-auto max-w-6xl"><div className="flex items-center gap-3"><span className="h-px flex-1 bg-black/10" /><span className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#777]">Latest stories</span><span className="h-px flex-1 bg-black/10" /></div>
            <div className="mt-9 divide-y divide-black/10">
              {remaining.map((post, index) => <Link key={post.slug} to={`/blog/${post.slug}`} className="group grid gap-4 py-7 transition-colors md:grid-cols-[72px_1fr_auto] md:items-center"><span className="font-[Georgia,serif] text-4xl text-[#b4b4ae]">0{index + 1}</span><div><p className="text-xs font-medium text-[#0b7f95]">{post.category} · {post.publishedAt}</p><h2 className="mt-2 font-[Georgia,serif] text-2xl tracking-[-0.025em] text-[#242424] transition-colors group-hover:text-[#0b7f95]">{post.title}</h2><p className="mt-2 max-w-2xl text-sm leading-6 text-[#666]">{post.excerpt}</p></div><span className="inline-flex w-fit items-center gap-1 text-sm text-[#555] transition-colors group-hover:text-[#0b7f95]">{post.readingTime}<ChevronRight className="h-4 w-4" /></span></Link>)}
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-black/10 px-6 py-8 text-center text-xs text-[#777]">© 2026 Ahmed Ezzat · Field Notes on Voice AI</footer>
    </div>
  );
};

export default BlogIndex;
