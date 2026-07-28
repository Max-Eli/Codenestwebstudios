/**
 * SINGLE SOURCE OF TRUTH FOR EVERY FACTUAL CLAIM ON THE SITE.
 *
 * Nothing in this file is invented about your business. Two rules were applied
 * when porting the design:
 *
 *   1. Anything naming a real person or a real client company was CUT. The
 *      mockup shipped four team members and three testimonials with names and
 *      job titles, plus four named client case studies. Publishing invented
 *      testimonials carries civil penalties under the FTC's Rule on Consumer
 *      Reviews and Testimonials (16 CFR Part 465, in force since Oct 2024), so
 *      those arrays start empty and their sections hide until you fill them in.
 *
 *   2. Anything numeric is marked PLACEHOLDER and carries the mockup's figure
 *      so the layout stays intact. Search this file for "PLACEHOLDER" to find
 *      every one. See CONTENT-TODO.md for the checklist.
 */

export const site = {
  name: "Codenest Web Studios",
  shortName: "Codenest",
  url: "https://codenestwebstudios.com",
  email: "hello@codenestwebstudios.com",
  /** PLACEHOLDER — set a real number or leave "" to hide it everywhere. */
  phone: "" as string,
  description:
    "We design, build and maintain custom apps, CRMs and AI automation for companies that have outgrown spreadsheets and off-the-shelf tools. Fixed scope, fixed estimate, no surprises.",
  /** Shown under the hero. Each entry is a claim — delete any you can't stand behind. */
  heroFacts: [
    "Fixed scope, fixed estimate",
    "You own the code",
    "Remote-first",
    "NDA friendly",
  ],
} as const;

/** Tech marquee under the hero. Purely descriptive — no claims. */
export const stack = [
  "TypeScript",
  "React",
  "Node",
  "Postgres",
  "Swift",
  "Kotlin",
  "Python",
  "AWS",
  "Next.js",
  "React Native",
] as const;

/**
 * PLACEHOLDER — the four-stat band on the homepage.
 * Every figure below came from the mockup and is NOT about your business.
 * Replace the numbers, or set this to [] to hide the band entirely.
 */
export const stats: { value: number; suffix: string; label: string }[] = [];

// The mockup's values, kept so you can restore the band in one paste:
//   { value: 120, suffix: "+",    label: "Projects shipped" },
//   { value: 94,  suffix: "%",    label: "Clients who come back" },
//   { value: 6,   suffix: " wks", label: "Median to first release" },
//   { value: 9,   suffix: " yrs", label: "Building for operators" },

/** What we build. Descriptive copy — no factual claims. Pricing is flagged below. */
export const services = [
  {
    id: "web-apps",
    index: "01",
    code: "A—01",
    title: "Custom web applications",
    short:
      "Portals, dashboards and workflow tools that replace the spreadsheet everyone secretly runs the business on.",
    long: "Portals, dashboards and workflow tools that replace the spreadsheet everyone secretly runs the business on. Built for the people who use it eight hours a day, not for a demo.",
    tags: ["React", "Node", "Postgres"],
    points: [
      "Role-based access, audit trails and approvals",
      "Reporting your finance team will actually trust",
      "Migration of the data you already have",
      "Training and documentation for your team",
    ],
    timeline: "Typical: 10–20 weeks",
    price: "From $45k", // PLACEHOLDER — mockup figure
    placeholderImage: "web app screenshot",
  },
  {
    id: "mobile",
    index: "02",
    code: "A—02",
    title: "Mobile apps",
    short:
      "iOS and Android apps for field crews, technicians and customers — offline-first when the signal drops.",
    long: "iOS and Android apps for field crews, technicians and customers. They keep working in a basement with no signal and sync when they surface.",
    tags: ["Swift", "Kotlin", "React Native"],
    points: [
      "Offline-first data with conflict handling",
      "Photo, signature and barcode capture",
      "App Store and Play submission handled for you",
      "Device management for company-owned hardware",
    ],
    timeline: "Typical: 12–22 weeks",
    price: "From $60k", // PLACEHOLDER — mockup figure
    placeholderImage: "mobile app screens",
  },
  {
    id: "crm",
    index: "03",
    code: "A—03",
    title: "CRMs & internal tools",
    short:
      "A CRM shaped like your sales process instead of someone else's. Quoting, dispatch, inventory, billing.",
    long: "A CRM shaped like your sales process instead of someone else's. Quoting, dispatch, inventory and billing that match the words your team already uses.",
    tags: ["Workflow", "Roles", "Reporting"],
    points: [
      "Pipeline, quoting and job scheduling",
      "Email, calendar and phone-system hooks",
      "Invoicing into your accounting package",
      "Import from the CRM you're leaving",
    ],
    timeline: "Typical: 8–18 weeks",
    price: "From $38k", // PLACEHOLDER — mockup figure
    placeholderImage: "CRM pipeline view",
  },
  {
    id: "ai",
    index: "04",
    code: "A—04",
    title: "AI & automation",
    short:
      "Document extraction, support triage, quote drafting. We automate the specific hour your team keeps losing.",
    long: "We start from the hour your team keeps losing, not from the technology. Document extraction, support triage, quote drafting — measured against a human baseline before it goes live.",
    tags: ["LLM APIs", "RAG", "Evals"],
    points: [
      "Document and email extraction pipelines",
      "Search and answering over your own documents",
      "Accuracy testing and human review steps",
      "Cost per document, monitored monthly",
    ],
    timeline: "Typical: 6–14 weeks",
    price: "From $32k", // PLACEHOLDER — mockup figure
    placeholderImage: "automation flow diagram",
  },
  {
    id: "integrations",
    index: "05",
    code: "A—05",
    title: "Integrations & data",
    short:
      "Make your ERP, accounting, warehouse and website agree on one version of the truth — automatically.",
    long: "Make your ERP, accounting, warehouse and website agree on one version of the truth, automatically, with alerts when they don't.",
    tags: ["APIs", "ETL", "Webhooks"],
    points: [
      "Two-way sync with retry and reconciliation",
      "Legacy systems, including the ones without APIs",
      "One warehouse for reporting across systems",
      "Failure alerts that name the record, not a code",
    ],
    timeline: "Typical: 4–10 weeks",
    price: "From $22k", // PLACEHOLDER — mockup figure
    placeholderImage: "integration map",
  },
  {
    id: "cloud",
    index: "06",
    code: "A—06",
    title: "Cloud, DevOps & care",
    short:
      "Hosting, monitoring, security patching and steady improvement after launch. Software is never finished.",
    long: "Hosting, monitoring, security patching and steady improvement after launch — including for software someone else built.",
    tags: ["AWS", "CI/CD", "Uptime"],
    points: [
      "Infrastructure as code, in your cloud account",
      "Uptime monitoring with a named person on call",
      "Dependency and security patching every month",
      "Rescue work on inherited codebases",
    ],
    timeline: "Ongoing",
    price: "From $4.5k / month", // PLACEHOLDER — mockup figure
    placeholderImage: "monitoring dashboard",
  },
] as const;

/** How we work. Process description — no factual claims. */
export const process = [
  {
    step: "Discovery",
    when: "01 — Week 1",
    title: "Discovery workshop",
    body: "We sit with the people who do the work, map the current process, and find where time and money leak.",
  },
  {
    step: "Scope",
    when: "02 — Week 2",
    title: "Scope & fixed estimate",
    body: "A written scope, a phased plan, and a price you can take to your board. If we can't do it well, we say so.",
  },
  {
    step: "Design",
    when: "03 — Weeks 3–4",
    title: "Design & clickable prototype",
    body: "You click through the real screens before a line of production code is written. Changes are cheap here.",
  },
  {
    step: "Build",
    when: "04 — Ongoing",
    title: "Build in two-week increments",
    body: "Working software every two weeks on your own staging site, plus a short demo and a plain-English update.",
  },
  {
    step: "Care",
    when: "05 — After launch",
    title: "Launch & long-term care",
    body: "Training, handover documentation, monitoring and a roadmap for the next six months. You own the code.",
  },
] as const;

/** Sectors you're willing to take work in. Not a claim of past clients. */
export const industries = [
  "Logistics & freight",
  "Healthcare",
  "Field services",
  "Manufacturing",
  "Professional services",
  "Retail & e-commerce",
  "Fintech & insurance",
  "Construction",
] as const;

/** Engagement models. All three prices are PLACEHOLDER figures from the mockup. */
export const engagements = [
  {
    id: "fixed",
    title: "Fixed-scope project",
    price: "from $28k", // PLACEHOLDER — mockup figure
    cadence: "per phase, billed on milestones",
    body: "Best when the outcome is clear: one app, one integration, one manual process to replace.",
    featured: false,
    cta: "Scope a project",
    includes: [
      "Written scope and phase plan",
      "Fixed price per phase",
      "Design, build, test, launch",
      "30 days of post-launch fixes",
    ],
  },
  {
    id: "squad",
    title: "Dedicated squad",
    price: "from $18k", // PLACEHOLDER — mockup figure
    cadence: "per month, rolling 3-month terms",
    body: "For roadmaps rather than single deliverables, where priorities will change as you learn.",
    featured: true,
    cta: "Check squad availability",
    includes: [
      "One designer, two engineers, one lead",
      "Two-week increments, demo every second Friday",
      "Re-prioritise at any sprint boundary",
      "Hosting and monitoring included",
    ],
  },
  {
    id: "care",
    title: "Care & improvement",
    price: "from $4.5k", // PLACEHOLDER — mockup figure
    cadence: "per month, cancel with 30 days' notice",
    body: "For software already live — ours or inherited from someone else.",
    featured: false,
    cta: "Hand over an existing system",
    includes: [
      "Uptime monitoring and named on-call",
      "Monthly security and dependency patching",
      "A pool of hours for small improvements",
      "Quarterly health and roadmap review",
    ],
  },
] as const;

/** The paid discovery week. `price` is a PLACEHOLDER figure from the mockup. */
export const discovery = {
  price: "$4,800", // PLACEHOLDER — mockup figure
  intro:
    "Five days with your team, ending in a written scope, an architecture sketch and a fixed estimate. Credited back in full if you continue with us.",
  caveat:
    "If we conclude you shouldn't build anything, you still keep the document — and we'll name the off-the-shelf tool we'd use instead.",
  days: [
    { when: "Day 1–2", what: "Process mapping with the people doing the work" },
    { when: "Day 3", what: "Systems audit: what you already own and what it can do" },
    { when: "Day 4", what: "Options, trade-offs and a recommended phase plan" },
    { when: "Day 5", what: "Written scope, estimate and timeline, presented live" },
  ],
} as const;

/** Comparison matrix on /engagements. `strong: true` renders the accent colour. */
export const comparison = {
  columns: ["Fixed project", "Squad", "Care"],
  rows: [
    {
      label: "Discovery week",
      cells: [
        { text: "Required", strong: true },
        { text: "Required", strong: true },
        { text: "Audit instead", strong: false },
      ],
    },
    {
      label: "Product design & prototype",
      cells: [
        { text: "Included", strong: true },
        { text: "Included", strong: true },
        { text: "Hourly", strong: false },
      ],
    },
    {
      label: "Two-week demos",
      cells: [
        { text: "Included", strong: true },
        { text: "Included", strong: true },
        { text: "Monthly report", strong: false },
      ],
    },
    {
      label: "Hosting & monitoring",
      cells: [
        { text: "Add-on", strong: false },
        { text: "Included", strong: true },
        { text: "Included", strong: true },
      ],
    },
    {
      label: "Priority changes mid-flight",
      cells: [
        { text: "Change order", strong: false },
        { text: "Any sprint", strong: true },
        { text: "Any month", strong: true },
      ],
    },
    {
      label: "Code ownership",
      cells: [
        { text: "Yours", strong: true },
        { text: "Yours", strong: true },
        { text: "Yours", strong: true },
      ],
    },
  ],
} as const;

/** Money-and-risk questions on /engagements. Policy statements, not claims. */
export const moneyFaqs = [
  {
    q: "What happens if the estimate turns out to be wrong?",
    a: "On fixed-scope work, an underestimate on our side is our cost, not yours. If you change or add scope, we price the change and you approve it before we start.",
  },
  {
    q: "Can we start small?",
    a: "Most clients do. The discovery week is deliberately cheap and self-contained, and the first build phase is usually the one process that hurts most.",
  },
  {
    q: "How do you bill?",
    a: "Fixed projects bill on milestones — typically 30% at kickoff, then on phase acceptance. Squads and care retainers bill monthly in advance. Net 14.",
  },
  {
    q: "Who owns the code and the infrastructure?",
    a: "You do, from day one. Repositories live in your organisation and infrastructure runs in your cloud account, with us as a named collaborator.",
  },
  {
    q: "Do you take equity or offer deferred payment?",
    a: "No. It muddies the relationship and it has never once made the software better. Cash, milestones, clear scope.",
  },
] as const;

/**
 * Common questions. Policy statements about how you work — safe to publish —
 * EXCEPT the two flagged below, which assert things you must actually do.
 */
export const faqs = [
  {
    q: "Who owns the code?",
    a: "You do — outright, from day one. Repositories are in your organisation and we hand over infrastructure, documentation and credentials at launch.",
  },
  {
    q: "How accurate are your estimates?",
    // PLACEHOLDER — the mockup claimed "9 in 10 projects land inside the quoted
    // range". That's a measurable claim; this rewrite makes the same point
    // without asserting a statistic you'd have to defend.
    a: "We estimate after discovery rather than before it, which is why the number holds. If scope grows, we price the change before starting the work — never after.",
  },
  {
    q: "Can you work with our in-house team?",
    a: "Often. We can embed alongside your developers, follow your review process, or take a self-contained slice and stay out of the way.",
  },
  {
    q: "What happens if we stop working together?",
    a: "You keep everything and we run a handover: architecture walkthrough, runbooks, and two weeks of support for whoever takes over.",
  },
  {
    q: "Do you sign NDAs and security reviews?",
    // PLACEHOLDER — the mockup asserted SOC 2 and HIPAA capability. Only put
    // those back if you can actually meet those controls on request.
    a: "Yes. We work under NDA by default and complete vendor security questionnaires as part of onboarding.",
  },
] as const;

/**
 * The About page.
 *
 * The mockup's version was almost entirely invented: "Forty people who like
 * unglamorous problems", founded 2016 with two engineers, 40 staff, studios in
 * Austin and Lisbon with street addresses, a five-year median client
 * relationship, and eight named team members. All of that is cut.
 *
 * `headline` and `intro` below are rewritten to make the same argument without
 * asserting size, age or location. Replace them with your real story.
 */
export const about = {
  headline: "We like unglamorous problems.",
  intro: [
    "The software that runs a business rarely makes it into a magazine. It's the dispatch board, the quoting tool, the intake form, the nightly reconciliation — the things that break quietly and cost real money when they do. That's the work we take.",
    "Small enough that the person who scopes your project is the person who ships it. Experienced enough to cover design, build, cloud and AI without handing you off between vendors.",
  ],
  /**
   * PLACEHOLDER — the About stat band. Mockup values were 40 people, 9 yrs in
   * business, 2 studios (Austin, Lisbon), 5 yrs median client relationship.
   * Fill in real figures or leave empty to hide the band.
   */
  stats: [] as { value: number; suffix: string; label: string }[],
  /** Operating principles. Statements of policy — safe to publish. */
  rules: [
    {
      step: "Plain language",
      title: "Plain language, always",
      body: "If an update needs translating before you can forward it, we wrote it badly. No velocity charts, no acronyms you didn't ask for.",
    },
    {
      step: "Senior only",
      title: "The people who sell it, build it",
      // Softened: the mockup asserted "at least eight years of production
      // experience" for every lead — a staffing claim, not a policy.
      body: "No handover to a junior team after signature. Every project has a named lead who stays with it from the first scoping call through to launch.",
    },
    {
      step: "Say no",
      title: "We say no to work we'd do badly",
      // Softened: the mockup claimed a specific frequency ("twice a year").
      body: "We turn down projects a specialist would do better, or that an existing product already solves for a tenth of the price. You'll hear that in the first call, not the third.",
    },
    {
      step: "Boring tech",
      title: "Boring technology, on purpose",
      body: "We choose the stack your next developer can hire for. Novelty is a cost you pay every year after launch, and you pay it, not us.",
    },
  ],
  /**
   * CUT — the mockup invented two studios with street addresses.
   * Add real ones to make the locations section appear.
   */
  locations: [] as { city: string; blurb: string; address: string }[],
} as const;

/**
 * CUT — see rule 1 at the top of this file.
 * Add real, permissioned client quotes here and the homepage section appears.
 */
export const testimonials: {
  quote: string;
  author: string;
  role: string;
}[] = [];

/**
 * CUT — see rule 1. Add real people here and the team grid appears.
 * `image` is a path under /public; leave "" for the hatched placeholder.
 */
export const team: {
  name: string;
  role: string;
  image: string;
}[] = [];

/**
 * CUT — see rule 1. The mockup shipped four invented clients with invented
 * metrics (Ledgerline, Corva Health, Halden Freight, Brightloom).
 * Add real projects here and both the homepage carousel and /work populate.
 */
export type CaseStudy = {
  slug: string;
  client: string;
  sector: string;
  title: string;
  summary: string;
  image: string;
  placeholderImage: string;
  metrics: { value: string; label: string }[];
  year?: string;
  services?: string[];
  body?: { type: "h2" | "p"; text: string }[];
};

export const caseStudies: CaseStudy[] = [];

/**
 * Insight articles. These are your own writing — nothing to verify — but the
 * three below are titles only, carried over from the mockup as a starting
 * point. Each needs a real body before /insights is worth publishing.
 */
export type Insight = {
  slug: string;
  title: string;
  date: string;
  readingTime: string;
  category: string;
  excerpt: string;
  body: { type: "h2" | "p"; text: string }[];
};

export const insights: Insight[] = [];
