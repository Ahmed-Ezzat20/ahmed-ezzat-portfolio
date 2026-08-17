import { useEffect, useState } from 'react';
import { ArrowLeft, Check, Clock3, Linkedin, Share2 } from 'lucide-react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { blogPosts } from '@/content/blogPosts';

const BlogArticle = () => {
  const { slug } = useParams();
  const post = blogPosts.find((item) => item.slug === slug);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (import.meta.env.MODE !== 'test') window.scrollTo(0, 0);
    if (post) document.title = `${post.title} | Ahmed Ezzat`;
  }, [slug, post]);

  if (!post) return <Navigate to="/blog" replace />;

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      window.prompt('Copy this article URL:', window.location.href);
    }
  };

  return (
    <div className="min-h-screen bg-[#fcfcf9] text-[#242424]">
      <header className="border-b border-black/10 bg-[#fcfcf9]/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <Link to="/blog" className="inline-flex items-center gap-2 text-sm font-medium text-[#555] transition-colors hover:text-[#0b7f95]"><ArrowLeft className="h-4 w-4" /> Field Notes</Link>
          <Link to="/" className="font-display text-sm font-bold tracking-[-0.03em] text-[#242424]">Ahmed Ezzat</Link>
        </div>
      </header>

      <main className="px-6 pb-20 pt-14 md:pb-28 md:pt-20">
        <article className="mx-auto max-w-[720px]">
          <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-[#0b7f95]">{post.category}</p>
          <h1 className="mt-5 font-[Georgia,serif] text-4xl leading-[1.05] tracking-[-0.045em] text-[#1c1c1c] md:text-6xl">{post.title}</h1>
          <p className="mt-6 font-[Georgia,serif] text-xl leading-8 text-[#666] md:text-2xl md:leading-9">{post.excerpt}</p>

          <div className="mt-9 flex items-center justify-between border-y border-black/10 py-5">
            <div className="flex items-center gap-3"><span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0b3346] font-display text-sm font-bold text-cyan-100">AE</span><div><p className="text-sm font-semibold text-[#333]">Ahmed Ezzat</p><p className="mt-0.5 text-xs text-[#777]">Voice AI Engineer · {post.publishedAt}</p></div></div>
            <div className="flex items-center gap-4 text-xs text-[#777]"><span className="inline-flex items-center gap-1.5"><Clock3 className="h-3.5 w-3.5" />{post.readingTime}</span><button onClick={copyLink} className="inline-flex items-center gap-1.5 rounded-full border border-black/10 px-3 py-1.5 transition-colors hover:border-[#0b7f95] hover:text-[#0b7f95]">{copied ? <Check className="h-3.5 w-3.5" /> : <Share2 className="h-3.5 w-3.5" />}{copied ? 'Copied' : 'Share'}</button></div>
          </div>

          <div className="mt-10 space-y-10 font-[Georgia,serif] text-[19px] leading-[1.72] text-[#313131] md:text-[21px]">
            {post.sections.map((section, index) => (
              <section key={section.heading}>
                {index === 0 && <p className="float-left mr-2 mt-[-7px] font-[Georgia,serif] text-7xl leading-none text-[#0b3346]">{section.paragraphs[0].charAt(0)}</p>}
                <h2 className={`font-[Georgia,serif] text-2xl font-bold leading-tight tracking-[-0.025em] text-[#202020] md:text-3xl ${index === 0 ? 'sr-only' : 'mt-12'}`}>{section.heading}</h2>
                <div className={index === 0 ? 'space-y-6' : 'mt-5 space-y-6'}>
                  {section.paragraphs.map((paragraph, paragraphIndex) => <p key={paragraph}>{index === 0 && paragraphIndex === 0 ? paragraph.slice(1) : paragraph}</p>)}
                </div>
              </section>
            ))}
          </div>

          <div className="mt-14 border-t border-black/10 pt-8"><p className="font-[Georgia,serif] text-2xl tracking-[-0.03em] text-[#242424]">Enjoyed this note?</p><p className="mt-2 text-sm leading-6 text-[#666]">Follow Ahmed for future writing on Arabic Voice AI, low-latency systems, and applied ML engineering.</p><a href="https://www.linkedin.com/in/mrezzat/" target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#0b3346] px-4 py-2.5 text-sm font-semibold text-cyan-50 transition-colors hover:bg-[#0b7f95]"><Linkedin className="h-4 w-4" /> Follow on LinkedIn</a></div>
        </article>
      </main>

      <footer className="border-t border-black/10 px-6 py-8 text-center text-xs text-[#777]"><Link to="/blog" className="hover:text-[#0b7f95]">More stories in Field Notes</Link></footer>
    </div>
  );
};

export default BlogArticle;
