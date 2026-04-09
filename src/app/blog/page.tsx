import { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageHeader from "@/components/ui/PageHeader";
import PageGraphic from "@/components/ui/PageGraphic";
import { Stagger, StaggerItem, DrawLine, FadeUp } from "@/components/ui/Motion";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog",
  description: "Practical writing on web development, mobile apps, and software architecture.",
};

const posts = [
  { slug: "nextjs-14-vs-remix-which-to-choose", date: "Dec 12, 2024", title: "Next.js 14 vs Remix: Which to Choose in 2024?", category: "Web Dev", time: "12 min", excerpt: "A practical comparison of both frameworks — server components, routing, DX, and deployment." },
  { slug: "react-native-vs-flutter-2024", date: "Nov 28, 2024", title: "React Native vs Flutter: The Honest Breakdown", category: "Mobile", time: "15 min", excerpt: "After shipping 15+ apps in both, here's what we actually think about performance, ecosystem, and hiring." },
  { slug: "saas-architecture-patterns", date: "Nov 15, 2024", title: "5 Architecture Patterns Every SaaS Should Know", category: "Architecture", time: "18 min", excerpt: "Multi-tenancy, feature flags, background jobs, webhooks, audit logging — the patterns that matter." },
  { slug: "core-web-vitals-guide-2024", date: "Oct 30, 2024", title: "The Complete Core Web Vitals Optimization Guide", category: "Performance", time: "10 min", excerpt: "LCP, FID, CLS — what they mean and the exact techniques that improved our clients from 40s to 90s." },
  { slug: "design-systems-from-scratch", date: "Oct 14, 2024", title: "Building a Design System From Scratch", category: "Design", time: "14 min", excerpt: "Figma tokens, Tailwind CSS, and Storybook — lessons from building a scalable system." },
  { slug: "api-security-best-practices", date: "Sep 25, 2024", title: "API Security: The Checklist You Actually Need", category: "Security", time: "11 min", excerpt: "Rate limiting, JWTs, input validation, and the 12 other concerns every API must address before production." },
];

export default function BlogPage() {
  return (
    <>
      <Header />
      <main>
        <PageHeader
          label="Blog"
          title="Writing"
          subtitle="Practical articles on development, architecture, and product engineering."
          graphic={<PageGraphic variant="blog" />}
        />

        {/* Stats bar */}
        <section className="py-8 border-b" style={{ background: "#111111", borderColor: "#1A1A1A" }}>
          <div className="container-site">
            <FadeUp>
              <div className="flex flex-wrap gap-x-10 gap-y-3">
                {[
                  { n: "6", label: "Articles" },
                  { n: "4", label: "Topics covered" },
                  { n: "~13 min", label: "Average read" },
                ].map(({ n, label }) => (
                  <div key={label} className="flex items-center gap-3">
                    <span className="font-display font-semibold text-snow" style={{ fontSize: "1.1rem", letterSpacing: "-0.02em" }}>{n}</span>
                    <span className="text-sm" style={{ color: "#444444" }}>{label}</span>
                  </div>
                ))}
              </div>
            </FadeUp>
          </div>
        </section>

        <section className="section" style={{ background: "#0C0C0C" }}>
          <div className="container-site">
            <DrawLine />
            <Stagger>
              {posts.map((post) => (
                <StaggerItem key={post.slug}>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="group flex flex-col sm:flex-row sm:items-start gap-5 py-9 border-b block"
                    style={{ borderColor: "#1A1A1A" }}
                  >
                    {/* Date */}
                    <span className="text-xs font-mono flex-shrink-0 pt-1" style={{ color: "#333333", minWidth: "6rem" }}>
                      {post.date}
                    </span>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-xs px-2 py-0.5 rounded" style={{ color: "#555555", background: "#111111", border: "1px solid #1A1A1A" }}>
                          {post.category}
                        </span>
                        <span className="text-xs" style={{ color: "#333333" }}>{post.time} read</span>
                      </div>
                      <h2
                        className="heading-sm text-snow mb-2 group-hover:text-blue transition-colors duration-200"
                        style={{ transitionProperty: "color" }}
                      >
                        {post.title}
                      </h2>
                      <p className="text-sm leading-relaxed max-w-xl" style={{ color: "#555555" }}>
                        {post.excerpt}
                      </p>
                    </div>

                    <ArrowUpRight
                      className="w-4 h-4 flex-shrink-0 sm:mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                      style={{ color: "#555555" }}
                    />
                  </Link>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
