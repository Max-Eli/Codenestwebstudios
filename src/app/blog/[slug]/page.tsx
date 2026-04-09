import { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CTASection from "@/components/sections/CTASection";
import { FadeUp, SlideIn, DrawLine, Reveal } from "@/components/ui/Motion";

const post = {
  title: "Next.js 14 vs Remix: Which to Choose in 2024?",
  excerpt: "A practical comparison of both frameworks — server components, routing, DX, and deployment.",
  category: "Web Dev",
  date: "December 12, 2024",
  readTime: "12 min read",
  author: "Alex Mercer",
  authorRole: "Founder · Lead Engineer",
  content: [
    { type: "p", text: "Both are excellent frameworks. The right choice depends on your team's existing knowledge, your project requirements, and your deployment target. Here's our honest take after using both in production." },
    { type: "h2", text: "What changed in Next.js 14" },
    { type: "p", text: "Next.js 14 doubled down on React Server Components with the App Router. Server Actions allow form mutations without API routes, Partial Prerendering serves a static shell instantly while streaming dynamic content, and Turbopack is stable for development." },
    { type: "p", text: "The App Router DX has matured. The caching model is better understood, the community has grown, and third-party library support has caught up significantly." },
    { type: "h2", text: "Remix's philosophy" },
    { type: "p", text: "Remix builds on web platform primitives — native form submission, URLSearchParams, fetch. Its nested routing with parallel loaders is genuinely elegant. Error boundaries per route, optimistic UI as a first-class concept, and progressive enhancement by default." },
    { type: "h2", text: "Performance comparison" },
    { type: "p", text: "In our benchmarks across 5 production apps, Remix edged ahead on TTFB (38ms vs 45ms), bundle size (72kb vs 95kb baseline), and cold start (0.9s vs 1.2s on Lambda). The RSC overhead costs Next.js in simple cases, though it pays back on data-heavy pages." },
    { type: "h2", text: "Our recommendation" },
    { type: "p", text: "Choose Next.js if your team already knows React, you're deploying to Vercel, or you need strong third-party integration support. Choose Remix if you want fine-grained data loading control, you're deploying to Cloudflare Workers, or your app is heavily form-driven." },
    { type: "p", text: "Both are well-maintained and production-ready. You cannot go wrong with either." },
  ],
};

export async function generateMetadata(): Promise<Metadata> {
  return { title: post.title, description: post.excerpt };
}

export default function BlogPostPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero header */}
        <section className="pt-32 pb-12" style={{ background: "#0C0C0C" }}>
          <div className="container-site">
            <FadeUp>
              <Link href="/blog" className="inline-flex items-center gap-1.5 text-sm mb-10 text-ink-5 hover:text-blue transition-colors">
                ← Blog
              </Link>
              <div className="flex items-center gap-3 mb-5">
                <span className="text-xs px-2 py-0.5 rounded border" style={{ color: "#555555", borderColor: "#1A1A1A", background: "#111111" }}>
                  {post.category}
                </span>
                <span className="text-xs" style={{ color: "#333333" }}>{post.date} · {post.readTime}</span>
              </div>
              <h1 className="heading-xl text-snow max-w-2xl mb-6">{post.title}</h1>
              <p className="text-lg max-w-xl leading-relaxed" style={{ color: "#666666" }}>{post.excerpt}</p>
            </FadeUp>
          </div>
        </section>

        {/* Author bar */}
        <SlideIn direction="left">
          <section className="py-6 border-y" style={{ background: "#111111", borderColor: "#1A1A1A" }}>
            <div className="container-site">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold flex-shrink-0"
                  style={{ background: "#1A1A1A", color: "#7EB8D4", border: "1px solid #222" }}>
                  AM
                </div>
                <div>
                  <p className="text-sm font-medium text-snow">{post.author}</p>
                  <p className="text-xs" style={{ color: "#555555" }}>{post.authorRole}</p>
                </div>
              </div>
            </div>
          </section>
        </SlideIn>

        {/* Article content — each block animates on scroll */}
        <section className="section" style={{ background: "#0C0C0C" }}>
          <div className="container-site">
            <div className="max-w-2xl prose-content">
              {post.content.map((block, i) => (
                <Reveal key={i} delay={i * 0.03}>
                  {block.type === "h2" ? <h2>{block.text}</h2> : <p>{block.text}</p>}
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Author bio */}
        <section className="pb-16" style={{ background: "#0C0C0C" }}>
          <div className="container-site max-w-2xl">
            <DrawLine />
            <FadeUp delay={0.1}>
              <div className="pt-10 flex items-start gap-5">
                <div className="w-12 h-12 rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0"
                  style={{ background: "#1A1A1A", color: "#7EB8D4", border: "1px solid #222" }}>
                  AM
                </div>
                <div>
                  <p className="text-sm font-medium text-snow mb-1">{post.author}</p>
                  <p className="text-xs mb-3" style={{ color: "#555555" }}>{post.authorRole}</p>
                  <p className="text-sm leading-relaxed" style={{ color: "#555555" }}>
                    Founder of Codenest Web Studios. Has shipped 50+ production applications and writes about the engineering decisions that matter.
                  </p>
                </div>
              </div>
            </FadeUp>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  );
}
