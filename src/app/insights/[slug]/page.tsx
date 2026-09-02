import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CtaSection from "@/components/sections/CtaSection";
import { Reveal } from "@/components/ui/Motion";
import { insights } from "@/content/site";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return insights.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const post = insights.find((p) => p.slug === params.slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/insights/${post.slug}` },
    openGraph: { title: post.title, description: post.excerpt, type: "article" },
  };
}

export default function InsightPage({ params }: Props) {
  const post = insights.find((p) => p.slug === params.slug);
  if (!post) notFound();

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: { "@type": "Organization", name: "CodeNest Web Studios", url: "https://codenestwebstudios.com" },
    publisher: { "@type": "Organization", name: "CodeNest Web Studios", url: "https://codenestwebstudios.com" },
    mainEntityOfPage: { "@type": "WebPage", "@id": `https://codenestwebstudios.com/insights/${post.slug}` },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }}
      />
      <Header />
      <main>
        <section className="pb-12 pt-32 md:pt-[150px]">
          <div className="container-site">
            <Reveal>
              <Link
                href="/insights"
                className="mono mb-10 inline-flex text-[11.5px] uppercase tracking-[0.1em] transition-colors hover:text-[var(--accent-bright)]"
                style={{ color: "var(--fg-5)" }}
              >
                ← Insights
              </Link>
              <div className="mono mb-5 flex flex-wrap gap-4 text-[11px] uppercase tracking-[0.09em]" style={{ color: "var(--fg-5)" }}>
                <span style={{ color: "var(--accent)" }}>{post.category}</span>
                <span>{post.date}</span>
                <span>{post.readingTime}</span>
              </div>
              <h1 className="display-2 max-w-[22ch]">{post.title}</h1>
              <p className="lede mt-7 max-w-[52ch]">{post.excerpt}</p>
            </Reveal>
          </div>
        </section>

        <section className="section rule-top">
          <div className="container-site">
            <div className="prose-content max-w-[68ch]">
              {post.body.map((block, i) => (
                <Reveal key={i} index={i}>
                  {block.type === "h2" ? <h2>{block.text}</h2> : <p>{block.text}</p>}
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <CtaSection
          title="Want this applied to your business?"
          body="Describe the process that's hurting. You'll get a real reply from an engineer."
          primary={{ label: "Request a scoping estimate", href: "/contact" }}
          secondary={{ label: "Read more insights", href: "/insights" }}
        />
      </main>
      <Footer />
    </>
  );
}
