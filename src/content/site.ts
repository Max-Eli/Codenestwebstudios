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

/**
 * MASTER SWITCH FOR PUBLIC PRICING.
 *
 * false → every figure is hidden across /services, /engagements and the
 * homepage, and the surrounding copy switches to the "quoted after discovery"
 * argument instead of the "we publish our numbers" one. The numbers themselves
 * stay in this file, so flipping this back to true restores everything.
 *
 * Not affected: the budget-range dropdown on the contact form (that asks the
 * visitor's budget, it doesn't state yours) and the billing terms in the
 * /engagements FAQ (milestones, Net 14 — terms, not prices).
 */
export const showPricing = false;

/**
 * The contact form's qualifying dropdown.
 *
 * With pricing hidden it asks about the shape of the work rather than money —
 * a "$25k – $60k" first option tells every visitor the floor is $25k, which is
 * a louder price signal than anything on /services. Still qualifies the lead.
 */
export const budgetOptions = [
  "Not sure yet",
  "$25k – $60k",
  "$60k – $150k",
  "$150k+",
  "Monthly retainer",
] as const;

export const engagementOptions = [
  "Not sure yet",
  "One well-defined piece of work",
  "A full project, start to launch",
  "Ongoing support for something live",
  "Taking over software someone else built",
] as const;

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
  {
    // Copy here describes the actual agent in ~/Github/ai seo bot: a four-stage
    // pipeline (research → outline → draft → critique/rewrite) publishing to
    // WordPress. Deliberately claims no rankings or traffic outcomes, and does
    // not mention Shopify/Webflow/Ghost, keyword planning or internal linking —
    // those are on that project's "not built yet" list.
    id: "seo",
    index: "07",
    code: "A—07",
    title: "AI SEO agent",
    short:
      "Blog posts that read like the owner wrote them — researched, drafted and published on a schedule.",
    long: "An agent that writes your blog in your voice instead of in the flat register everyone recognises by now. It reads what currently ranks for the topic, picks an angle those pages aren't taking, and writes against your real prices, real jobs and real opinions.",
    tags: ["Claude", "WordPress", "Live research"],
    points: [
      "Voice profile built by crawling the writing you already have",
      "Every post researched against the pages currently ranking",
      "A separate critique pass rewrites the AI tells back out",
      "A post missing a real fact refuses to publish rather than guessing",
      "Straight into WordPress — as a draft if you'd rather read it first",
    ],
    timeline: "Setup: 1–2 weeks, then ongoing",
    price: "From $1.5k / month", // PLACEHOLDER — set your own rate
    placeholderImage: "generated post and critique trail",
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
    priceAlt: "Fixed price per phase",
    cadence: "per phase, billed on milestones",
    body: "Best when the outcome is clear: one app, one integration, one manual process to replace.",
    featured: false,
    cta: "Scope a project",
    includes: [
      // "Fixed price per phase" lives in the card headline, so it isn't
      // repeated here.
      "Written scope and phase plan",
      "Design, build, test, launch",
      "Any change order priced before work starts",
      "30 days of post-launch fixes",
    ],
  },
  {
    id: "squad",
    title: "Dedicated squad",
    price: "from $18k", // PLACEHOLDER — mockup figure
    priceAlt: "Monthly, rolling terms",
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
    priceAlt: "Monthly, cancel anytime",
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
  /** Used in place of `price` when showPricing is false. */
  priceAlt: "One fixed fee",
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

export const insights: Insight[] = [
  {
    slug: 'saas-development-agency-might-be-the-wrong-search',
    title: '"SaaS Development Agency" Might Be the Wrong Search',
    date: 'Aug 12, 2026',
    readingTime: '5 min read',
    category: 'Strategy',
    excerpt: 'Most "SaaS development agency" guides assume you\'re building a product to sell. If you\'re actually fixing your own dispatch board or quoting tool, here\'s the honest distinction — and how to tell which one you are.',
    body: [
      { type: 'p', text: 'Type "SaaS development agency" into Google and most of what comes back is written for someone building a product to sell. That phrase, in that world, means an agency that helps a founder build a SaaS product, launch it, and sign up paying customers. That\'s a real business. It\'s just not the one most people typing that phrase are actually running.' },
      { type: 'p', text: 'If you\'re trying to fix the dispatch board that only one person on staff understands, or a quoting process that lives half in a spreadsheet and half in someone\'s head, none of those search results are written with you in mind. This page is.' },
      { type: 'h2', text: 'What a SaaS development agency actually builds' },
      { type: 'p', text: 'A SaaS product is built once and sold to many. It\'s multi-tenant by design: the same codebase serving customers who\'ve never met each other. It needs pricing tiers, self-serve signup, onboarding, and support that scales with the number of accounts, not the number of people on your payroll. Building one is a real discipline. If that\'s the job, you want people who do that job every day.' },
      { type: 'h2', text: 'What we build instead' },
      { type: 'p', text: 'We build software for one company to run its own operations. One tenant. One set of users, all on your payroll or your roster. No pricing tiers, because nothing\'s being sold. The thing being built is the tool, not the product.' },
      { type: 'p', text: 'That\'s the dispatch board. The quoting tool. The spreadsheet everyone secretly runs the business on, the one nobody wants to touch because it\'ll break if you look at it wrong. We work with logistics and freight companies, healthcare operations, field service outfits, manufacturers, professional services firms, retail and e-commerce operators, fintech and insurance companies, and construction firms — mid-sized companies that have outgrown what a spreadsheet or an off-the-shelf tool can do for them.' },
      { type: 'p', text: 'The work usually falls into custom web applications — portals, dashboards, approval workflows — or CRMs and internal tools covering quoting, dispatch, and billing, or integrations that get two systems talking to each other after years of manual re-entry, or AI and automation that pulls structured data out of documents and email nobody has time to read anymore.' },
      { type: 'p', text: 'None of it gets sold to outside customers. All of it gets used by your own team, every day, to do the job faster than the spreadsheet lets them.' },
      { type: 'h2', text: 'Which one are you' },
      { type: 'p', text: 'Who pays for this, and who logs in besides your own team?' },
      { type: 'p', text: 'If the answer is strangers, on a monthly plan you set up yourselves — pricing tiers, a signup page, users you\'ll never meet — you\'re building a SaaS product. Go find a shop that lives and breathes SaaS. That\'s genuinely not us, and pretending otherwise would waste your time and theirs.' },
      { type: 'p', text: 'If the answer is "our dispatch team" or "the three people who fight with this spreadsheet every Friday," you\'re fixing an internal system. That\'s the kind of work we do.' },
      { type: 'p', text: 'The search term doesn\'t help you tell the difference. It uses the same three words for both.' },
      { type: 'h2', text: 'We\'ll tell you if you\'re in the wrong place — in the first call' },
      { type: 'p', text: 'We turn down projects a specialist would do better. We also turn down projects that an existing off-the-shelf product already solves for a tenth of the price. If you need a SaaS product built to sell, we\'ll say so and point you elsewhere. If an off-the-shelf tool already handles your problem, we\'ll tell you that too.' },
      { type: 'p', text: 'You\'ll hear it in the first call, not the third.' },
      { type: 'h2', text: 'How discovery week works, if you\'re in the right place' },
      { type: 'p', text: 'We don\'t quote off a sales call. We run a discovery week first: a flat $4,800, credited back in full if you continue with us. It ends with a written scope, an architecture sketch, and a fixed estimate. Not a range. A number.' },
      { type: 'p', text: 'Estimates come after discovery, not before. That\'s why the number holds once we start. We\'ve already looked at your data, your existing systems, and the parts of the job that are going to be hard, before we promise you a price. We\'d rather spend a week finding the messy part before either of us has committed to anything.' },
      { type: 'h2', text: 'Boring technology, on purpose' },
      { type: 'p', text: 'Our web applications run on React, Node, and Postgres. Mobile builds use Swift, Kotlin, and React Native. Not because these are new — they\'re not — but because they\'re proven, well-documented, and easy for the next developer to pick up after us.' },
      { type: 'p', text: 'Novelty is a cost paid every year after launch, by the client. We\'d rather hand you something that still works in five years than something that needs a rewrite in two.' },
      { type: 'h2', text: 'Who holds the keys' },
      { type: 'p', text: 'Your repos live in your own organization\'s account, not ours. Your infrastructure runs in your own cloud account from day one, not a shared environment we hand over later if things go well.' },
      { type: 'p', text: 'You own the code outright from day one. If we ever stop working together, you keep everything. We do a full handover: architecture walkthrough, runbooks, two weeks of support.' },
      { type: 'h2', text: 'NDAs and security questionnaires, before you ask' },
      { type: 'p', text: 'We work under NDA by default. If your industry requires a vendor security questionnaire before onboarding — and in healthcare, fintech, and insurance, it usually does — we complete it as a standard part of getting started. We don\'t hold formal certifications like HIPAA, PCI-DSS, or SOC 2, and we won\'t tell you we do.' },
      { type: 'h2', text: 'If you\'re building a product to sell, go find that shop' },
      { type: 'p', text: 'If the project in front of you is a SaaS product meant for resale — multi-tenant, priced per seat, sold to people outside your company — go find a shop that specializes in that.' },
      { type: 'p', text: 'If it\'s the dispatch board, the quoting tool, or the system your own team is quietly working around every day, that\'s the call worth starting. Discovery week is where it begins.' },
    ],
  },
  {
    slug: 'how-to-vet-a-crm-development-company-without-getting-sold-a-',
    title: 'How to Vet a CRM Development Company Without Getting Sold a Guess',
    date: 'Aug 10, 2026',
    readingTime: '4 min read',
    category: 'Product',
    excerpt: 'A plain buyer\'s checklist for vetting a CRM development company: what they actually build, four questions to ask before signing, real pricing, and when to just buy off the shelf instead.',
    body: [
      { type: 'p', text: 'Ask this before you ask anything else: do you actually need one built?' },
      { type: 'p', text: 'For a lot of businesses, an off-the-shelf tool already covers quoting, dispatch, inventory and billing with a bit of configuration. If your process fits inside a general-purpose product, buy the license. Don\'t build.' },
      { type: 'p', text: 'We turn down projects like that regularly. Cases where a specialist would do better, or where an existing product already solves it for a tenth of the price. We say so on the first call, not the third.' },
      { type: 'p', text: 'The honest starting point for this conversation isn\'t the CRM. It\'s the spreadsheet everyone secretly runs the business on right now, the one with the tabs nobody wants to explain to a new hire. If that spreadsheet is genuinely bespoke, tracking things a general-purpose tool can\'t, that\'s a real signal. If it\'s a workaround for a tool your team never learned properly, that\'s a different problem. And a cheaper one to fix.' },
      { type: 'h2', text: 'What a CRM development company actually builds, versus what you\'re buying with a license' },
      { type: 'p', text: 'A license gets you someone else\'s idea of how a sales pipeline should look, with configuration options around the edges. A custom build gets you quoting, dispatch, inventory, billing, workflow, roles and reporting built to match how your business actually runs. Not the other way around.' },
      { type: 'p', text: 'A build worth paying for also includes the parts vendors like to treat as extras. Importing data from your prior CRM should be part of the scope, not a change order two months in. So should integrating with the email, calendar, phone system and accounting software you already use, as part of the same project, not a separate negotiation once you\'re already committed.' },
      { type: 'p', text: 'Our own version of this, CRMs & internal tools, runs 8 to 18 weeks and starts at $38k.' },
      { type: 'h2', text: 'Four questions to ask any CRM development company before you sign' },
      { type: 'p', text: 'Who owns the code? Ask exactly where the repository lives and whose cloud account the infrastructure runs in. Our answer: you own the code outright from day one, the repos sit in your organisation, and infrastructure runs in your cloud account, not ours. If a vendor\'s answer involves the words "shared" or "licensed back to you," keep asking.' },
      { type: 'p', text: 'How was this estimate built? If a number gets handed to you on a sales call before anyone has documented your workflows, ask what work happened before the number was written down. Usually the honest answer is: none yet.' },
      { type: 'p', text: 'Then there\'s the harder question, the one vendors dodge. What happens if the estimate turns out to be wrong? Scope changes should be priced before the work starts, not billed as an overage after the fact. If a vendor can\'t describe that moment concretely, assume you\'ll be arguing about an invoice later.' },
      { type: 'p', text: 'Last one. What happens if we stop working together? You should get a full handover — architecture walkthrough, runbooks, a support window with an end date you were told up front. For us, that\'s two weeks. Not a login that quietly stops working.' },
      { type: 'h2', text: 'Why the number on a sales call usually isn\'t real' },
      { type: 'p', text: 'A number given before anyone has documented your workflows isn\'t an estimate. It\'s a placeholder that happens to have a dollar sign in front of it.' },
      { type: 'p', text: 'We run a discovery week before we quote anything real: a flat $4,800, credited back in full if you continue with us. It ends in a written scope, an architecture sketch, and a fixed estimate — not a range, a number. Estimates come after discovery, not before. That\'s the only reason ours holds once work starts. You can read what\'s actually in that week here.' },
      { type: 'h2', text: 'What CRM & internal tools actually cost here, and how it\'s billed' },
      { type: 'p', text: 'CRM & internal tools run from $38k, typically 8 to 18 weeks, billed on milestones: 30% at kickoff, the remainder on phase acceptance, Net 14. Fixed-scope work includes 30 days of post-launch fixes, so the thing you signed off on gets a month of us watching it before you\'re on your own. You can see the full structure on the fixed-scope project page.' },
      { type: 'p', text: 'If the need isn\'t a single build but ongoing feature work, we also run a dedicated squad — one designer, two engineers, one lead — from $18k a month on rolling three-month terms.' },
      { type: 'p', text: 'Hold any vendor you\'re evaluating to this same standard: milestone billing, a stated post-launch window, terms you can read in one sitting.' },
      { type: 'h2', text: 'Ownership, exit terms, and the security paperwork nobody wants to chase down later' },
      { type: 'p', text: 'We sign NDAs by default and complete vendor security questionnaires as part of onboarding, because in logistics, healthcare, fintech and insurance, someone on your side has to check that box before a contract moves. We don\'t hold formal compliance certifications. We\'d rather tell you that plainly now than have it surface awkwardly during your own vendor review.' },
      { type: 'p', text: 'Code lives in your organisation from day one. Infrastructure runs in your own cloud account, not ours. If the relationship ends, you get the same handover regardless: architecture walkthrough, runbooks, two weeks of support. Not a scramble to find someone who understands what was built.' },
      { type: 'p', text: 'A named lead stays with the project from the first scoping call through launch. No handoff to whoever\'s free that sprint.' },
    ],
  },
  {
    slug: 'how-to-choose-a-mobile-app-development-company-without-getti',
    title: 'How to Choose a Mobile App Development Company Without Getting Burned',
    date: 'Aug 7, 2026',
    readingTime: '6 min read',
    category: 'Strategy',
    excerpt: 'A buyer\'s guide to choosing a mobile app development company: what discovery should lock down, why offline-first matters for field crews, and who should own your code.',
    body: [
      { type: 'p', text: 'If a vendor gives you a number in the first call, before they\'ve asked how many workflows your techs run offline, before they\'ve asked what happens when two people edit the same job record at once, that number is a guess wearing a suit.' },
      { type: 'p', text: 'Estimates should come after discovery, not before. That\'s why the number holds. A mobile build for field crews or customer-facing use typically runs from $60k and takes 12–22 weeks, and where you land in that range depends on facts nobody can know before they\'ve actually looked at your workflows. Before price, the person signing the cheque should get straight answers on three things: who owns what gets built, how the vendor arrives at the estimate, and what they\'ll admit they can\'t do — including whether you should build an app at all.' },
      { type: 'h2', text: 'Who owns the code and the infrastructure — get this in writing first' },
      { type: 'p', text: 'Ask this before price, before timeline, before you\'ve decided whether you like the portfolio. Vendor lock-in doesn\'t show up in the sales call. It shows up eighteen months later, when you want to switch vendors or bring the work in-house and find the repos live somewhere you can\'t reach and the infrastructure runs on an account you don\'t control.' },
      { type: 'p', text: 'The fix is contractual, not aspirational. You own the code outright from day one. The repos live in your organization. The infrastructure runs in your cloud account. Ask for this in writing before you sign, and be suspicious of any vendor who treats the question as unusual.' },
      { type: 'p', text: 'Watch how a vendor talks about payment, too. If anyone offers to take equity or defer payment for a better rate, that\'s not generosity. It muddies the relationship, and it has never once made the software better. Cash, milestones, clear scope. Anything else means someone\'s incentives point somewhere other than shipping what you asked for.' },
      { type: 'h2', text: 'What a discovery week is actually supposed to lock down' },
      { type: 'p', text: 'Most vendors ask for a feature list and hand back a free estimate. That produces a number built on guesses. The order is backwards — you can\'t price scope you haven\'t defined.' },
      { type: 'p', text: 'A discovery week fixes the order. It\'s a flat, priced engagement, $4,800, credited back in full if you continue, that exists to answer what a feature list can\'t: which workflows have to survive without signal, what your existing systems look like underneath, where the data currently lives, who needs what level of access. It ends with three things: a written scope, an architecture sketch, and a fixed estimate. Not a range.' },
      { type: 'p', text: 'This is also where scope changes get handled honestly. If something changes mid-project, it gets priced before the work starts, not found on an invoice after.' },
      { type: 'h2', text: 'What a mobile build costs and how long it takes' },
      { type: 'p', text: 'Mobile apps for field crews, technicians, or customers typically run from $60k and take 12–22 weeks, native iOS and Android or React Native depending on what the job needs.' },
      { type: 'p', text: 'What moves you inside that range is workflow count and complexity. An app that captures a signature and marks a job done is a different build than one that also tracks parts inventory, syncs barcode scans, and handles four crew roles with different permissions. Platform choice matters too. Building native for both iOS and Android costs more than a single cross-platform codebase, but buys tighter control over camera, GPS, and barcode hardware — which matters more for field work than for a customer-facing app.' },
      { type: 'p', text: 'Billing on a fixed-scope project runs on milestones: 30% at kickoff, then payment as each phase is accepted. That includes 30 days of post-launch fixes, so you\'re not paying separately to catch the bugs that only show up once real people are using the thing.' },
      { type: 'h2', text: 'Offline-first isn\'t a checkbox' },
      { type: 'p', text: 'Offline-first data with conflict handling means every write happens locally first. The server is where things end up, not where things have to happen. That only works if someone decided, before writing a line of code, what happens when two technicians edit the same job while both are offline: does the last save win, does the app merge specific fields, or does it flag the conflict for a person to resolve by hand. A vendor who\'s actually built this will have an opinion on which rule applies where.' },
      { type: 'p', text: 'This is the hour your team keeps losing: the tech who finishes a job with no signal, assumes it\'s saved, and finds out at the shop that it never synced. Ask a vendor to walk you through exactly what happens in that scenario, start to finish. The answer tells you whether they\'ve solved it or just described it.' },
      { type: 'h2', text: 'The deliverables to ask about by name' },
      { type: 'p', text: 'Photo, signature, and barcode capture — can they show it working on the actual hardware your crews carry, not a simulator. App Store and Play submission — is that on them, account setup and review process included, or does it land in your lap at the end as a surprise. And if your crews use company-owned phones or tablets, ask about device management specifically: how new hires get provisioned, how a lost device gets locked, how the app gets pushed to fifty devices at once instead of one at a time. If a vendor can\'t speak to these by name, they haven\'t built one of these before. Worth knowing now, not in week fourteen.' },
      { type: 'h2', text: 'Boring technology, on purpose' },
      { type: 'p', text: 'We build these apps in Swift, Kotlin, and React Native, not because they\'re exciting, but because they\'re not going anywhere. Novelty is a cost paid every year after launch, and it\'s paid by the client, not the vendor who talked you into it.' },
      { type: 'p', text: 'We\'re not choosing boring technology because we lack ideas. We\'re choosing it because you\'re the one who has to live with the app after we\'ve moved to the next thing.' },
      { type: 'h2', text: 'When the right answer is not to build an app' },
      { type: 'p', text: 'Sometimes the honest answer is: don\'t. If an off-the-shelf field service tool already does what you need — scheduling, dispatch, basic job tracking — for a tenth of what a custom build costs, building one from scratch is a bad use of your money, even if we\'re capable of doing it. We turn down projects a specialist would do better, or that an existing product already solves. You\'ll hear that in the first call, not the third, after a discovery fee has already changed hands.' },
      { type: 'h2', text: 'Who stays on after kickoff, and what happens if you leave' },
      { type: 'p', text: 'A named lead stays from the scoping call through launch. Not a salesperson who disappears after signature, handing you off to whoever\'s free.' },
      { type: 'p', text: 'If you leave, whether the project ends or the ongoing care and improvement work stops, you get a full handover: an architecture walkthrough, runbooks, and two weeks of support. Ongoing work cancels with 30 days\' notice. No long tail, no penalty. If a vendor won\'t commit to what handover looks like before you sign, that\'s your answer for what it\'ll look like after.' },
    ],
  },
  {
    slug: 'do-you-actually-need-a-custom-crm-or-just-a-better-spreadshe',
    title: 'Do You Actually Need a Custom CRM, or Just a Better Spreadsheet?',
    date: 'Aug 5, 2026',
    readingTime: '6 min read',
    category: 'Product',
    excerpt: 'How to tell if you\'ve outgrown off-the-shelf CRM, what a custom build actually costs, and why we turn down projects Salesforce or HubSpot already solve.',
    body: [
      { type: 'p', text: 'Most companies asking this question already know the answer and are looking for permission to skip the harder path. That\'s fine. We\'ll give you the test first.' },
      { type: 'h2', text: 'The test to run before you call anyone' },
      { type: 'p', text: 'Here\'s the honest version of the question, not the marketing version: are you outgrowing your process, or just outgrowing a piece of software?' },
      { type: 'p', text: 'Three signals actually mean something. First, the spreadsheet everyone secretly runs the business on. It lives outside the CRM because the CRM couldn\'t handle whatever quirky thing your business does, and now it\'s the real system of record. Second, workarounds bolted onto a CRM that wasn\'t built for your workflow: extra fields nobody trusts, a Zapier chain three people understand, a "process" that\'s really tribal knowledge about which button not to press. Third, a process that off-the-shelf tools force you to bend to fit, instead of the other way around. Not "it\'s a little clunky." Bent. You\'ve changed how the business runs because the software insisted on it.' },
      { type: 'p', text: 'One of these, mildly present, probably means tighten up your setup and move on. All three, chronically, means the tool is costing you more than it saves. You\'re the one supplying the labor to keep the illusion running.' },
      { type: 'p', text: 'If none of that describes you, stop reading this and go fix your field mappings. Seriously. That\'s cheaper.' },
      { type: 'h2', text: 'If Salesforce or HubSpot already does it, say so' },
      { type: 'p', text: 'We turn down projects a specialist would do better, or that an existing product already solves for a tenth of the price. You\'ll hear that in the first call, not the third.' },
      { type: 'p', text: 'This isn\'t modesty. Off-the-shelf CRMs are genuinely good at the thing most companies need: pipeline, contacts, a calendar, some reporting. If your quoting is standard, your workflow is standard, and your team size doesn\'t justify a build, buying is the right call and we\'ll tell you that.' },
      { type: 'h2', text: 'What a CRM development company actually builds' },
      { type: 'p', text: 'When the fit really isn\'t there, here\'s the work in plain terms, not a features list from a pitch deck.' },
      { type: 'p', text: 'It covers pipeline, quoting and job scheduling — the actual sequence your team runs a deal or a job through. Dispatch, inventory, billing, workflow, roles and reporting get built around how your operation splits responsibility, not how a generic sales team does. It hooks into email, calendar and phone systems so activity gets logged without someone re-typing it. And it pushes invoicing into your accounting package. A CRM that stops at "deal won" and hands you a manual re-entry step afterward hasn\'t solved the problem, it\'s moved it. More on how we scope this is on the CRMs & internal tools page.' },
      { type: 'h2', text: 'How pricing actually works here' },
      { type: 'p', text: 'We don\'t quote from a features list. We run a discovery week first, flat $4,800, credited back in full if you continue. It ends in a written scope, an architecture sketch and a fixed estimate. Not a range. A number.' },
      { type: 'p', text: 'For a CRM build, that number typically lands from $38k, over 8–18 weeks, depending on how much of dispatch, billing and reporting is in scope alongside the pipeline itself. Billing runs on milestones under a fixed-scope project: 30% at kickoff, then payment on phase acceptance as work is delivered and signed off. Not a lump sum up front, not open-ended hours. The engagement includes 30 days of post-launch fixes, so launch week isn\'t when support quietly disappears.' },
      { type: 'p', text: 'Net 14 on invoices. No equity, no deferred payment. We\'ve never seen that arrangement make the software better, only the relationship murkier.' },
      { type: 'h2', text: 'Why the estimate holds' },
      { type: 'p', text: 'The number is set after discovery, not before. That ordering is the whole point.' },
      { type: 'p', text: 'If something changes mid-build — new requirement, new integration, a workflow that turns out messier than described — scope changes get priced before work starts, not after. You get a number and a choice, not an invoice explaining what already happened.' },
      { type: 'h2', text: 'Migrating off your old CRM' },
      { type: 'p', text: 'Your existing pipeline data doesn\'t get left behind. Import from a prior CRM is part of the scoping conversation, not a surprise line item discovered in week twelve. Contacts, deal history, whatever your team actually trusts today gets planned as part of the build, so the new system launches with history in it instead of launching empty and asking your sales team to start over.' },
      { type: 'h2', text: 'Who owns the code — you do, from day one' },
      { type: 'p', text: 'This gets skipped in most quotes and it shouldn\'t be. You own the code outright from day one.' },
      { type: 'p', text: 'The repos live in your organization\'s account, not ours. The infrastructure runs in your own cloud account, not a shared environment we hold the keys to. If we disappeared tomorrow, you\'d still have the code, the repo, and the infrastructure it runs on. That\'s the actual test of lock-in.' },
      { type: 'h2', text: 'If it ends' },
      { type: 'p', text: 'Contracts end. Priorities change. Here\'s what that looks like on our side: full handover with an architecture walkthrough, so whoever inherits the system understands how it\'s built, not just what it does. Runbooks, so the operational knowledge doesn\'t leave with us. Two weeks of support on top of that, for the questions that only surface once someone else is actually running it.' },
      { type: 'p', text: 'No scramble, no ransom.' },
      { type: 'h2', text: 'Boring technology, on purpose' },
      { type: 'p', text: 'We build CRMs on React, Node and Postgres. Not because it\'s exciting. It isn\'t. Because it\'s well understood, well documented, and easy for the next developer to pick up, whether that\'s us in three years or someone else next month.' },
      { type: 'p', text: 'Novelty is a cost paid every year after launch, by the client. The trendy framework that made the pitch deck exciting is also the one with fewer people who can maintain it and thinner documentation. We\'d rather hand you something unremarkable that still runs in five years than something impressive that needs rebuilding in two.' },
      { type: 'h2', text: 'NDAs and security questionnaires, before scoping starts' },
      { type: 'p', text: 'We work under NDA by default. This doesn\'t wait for you to ask. And we complete vendor security questionnaires as part of onboarding, because it\'s easier to get that paperwork done early than to backfill it once real data is already moving.' },
      { type: 'p', text: 'Worth saying plainly: we don\'t hold formal compliance certifications, and we won\'t claim ones we don\'t have. What we do is show up ready for the questionnaire your team already sends every vendor, and get through it without becoming the bottleneck.' },
      { type: 'h2', text: 'Starting small' },
      { type: 'p', text: 'If you\'ve read this far and you\'re still not sure, the discovery week is the honest next step, not a sales tactic dressed up as one. It\'s flat-fee, credited back if you continue, and it ends with a scope and a real number instead of a vague sense of "it depends." Worst case, you spend $4,800 to learn the answer is "tighten up the tool you\'ve already got," which is a genuinely useful thing to know for that price.' },
      { type: 'p', text: 'But we\'ll say it again on the way out: custom CRM for a small business is rarely the right call. The test at the top of this piece is the filter, not the pitch. If your team is small, your process is standard, and none of the three signals fit, save the discovery fee and go fix your field mappings instead. We\'d rather tell you that than build you something you didn\'t need.' },
    ],
  },
  {
    slug: 'custom-web-app-development-the-real-numbers-and-when-to-skip',
    title: 'Custom Web App Development: The Real Numbers, and When to Skip It',
    date: 'Aug 3, 2026',
    readingTime: '7 min read',
    category: 'Engineering',
    excerpt: 'What a custom web app actually costs, how long it takes, and when off-the-shelf is the smarter call — with real numbers, not a teaser range.',
    body: [
      { type: 'p', text: 'Most "custom software" quotes are template configuration with a different logo. You can tell within the first call — if someone can give you a number before asking what your approval process looks like, they\'re not scoping your business. They\'re scoping a category.' },
      { type: 'h2', text: 'What we actually mean by "custom"' },
      { type: 'p', text: 'A custom web app is a portal, dashboard, or workflow tool built around how your business actually runs — not a template with your logo dropped on it. The features that make it custom aren\'t the color scheme. They\'re role-based access so a dispatcher sees something different than a controller. Audit trails so you can answer "who approved this" six months later without guessing. Approval chains that match how your team actually signs off on things, not a generic workflow someone else designed for a different industry. It also includes moving your existing data in and training your team to use it, because a system nobody can operate is just a more expensive spreadsheet.' },
      { type: 'h2', text: 'The real signal that you need one' },
      { type: 'p', text: 'Every business we talk to has a version of the spreadsheet everyone secretly runs the business on. It started as one tab. Now it\'s forty, three people maintain it by hand, and someone emails a copy around every Friday because the "real" system doesn\'t do what the business actually needs.' },
      { type: 'p', text: 'The signal isn\'t "we\'ve outgrown spreadsheets" — that\'s true of almost every company we talk to and it\'s too vague to act on. The real signal is narrower: when the workarounds cost more than the build would. That\'s the double data entry between two systems that don\'t talk to each other. It\'s the person who spends six hours a week reconciling a spreadsheet against an invoicing tool. It\'s the dispatcher who calls three people to find out if a job is done because nothing tracks it in real time.' },
      { type: 'p', text: 'We see this most in logistics and freight, healthcare, field services, manufacturing, professional services, retail, fintech and insurance, and construction — industries where the core business runs on operations, not software, and the software was always an afterthought bolted on later. If you can put a dollar figure on the hour your team keeps losing, you\'re probably past the point where a better spreadsheet fixes it.' },
      { type: 'h2', text: 'When we\'ll talk you out of it' },
      { type: 'p', text: 'Here\'s the part most vendors won\'t say: we turn down projects a specialist would do better. If you need a piece of e-commerce infrastructure that a mature platform already does well, we\'re not going to build you a worse version of it from scratch to bill more hours. We also turn down projects an existing off-the-shelf product already solves for a tenth of the price — plenty of good software already exists, and building a custom version of something that isn\'t actually specific to you is just an expensive way to reinvent a wheel.' },
      { type: 'p', text: 'You\'ll hear that in the first call, not the third, after we\'ve already sent a proposal. If your problem is genuinely off-the-shelf, we\'d rather tell you now than string out a discovery week to get to the same answer.' },
      { type: 'h2', text: 'What actually drives the cost and the timeline' },
      { type: 'p', text: 'Our custom web applications start at $45k and typically run 10 to 20 weeks. That\'s the real number, not a teaser — it\'s what it costs to build a portal or dashboard with role-based access, audit trails and approvals, reporting built for a finance team rather than a generic export button, migration of your existing data, and training and documentation so the system survives staff turnover.' },
      { type: 'p', text: 'What moves you up from that floor is usually one of three things. First, the number of distinct roles and approval paths — a system with two user types and one approval chain is a different build than one with five roles and conditional routing. Second, reporting complexity — a finance team that needs reconciled, auditable numbers takes more work than a dashboard that just needs to look right. Third, how messy the data migration is. Moving clean records from one modern system to another is straightforward. Moving fifteen years of inconsistent spreadsheets, each with its own quirks and exceptions someone remembers but nobody documented, is the part that actually eats weeks.' },
      { type: 'p', text: 'What moves you down: fewer roles, simpler reporting, and data that\'s already reasonably clean. None of this is exotic. It\'s the same three variables on every project, in different proportions.' },
      { type: 'h2', text: 'Why the estimate comes after a discovery week, not before' },
      { type: 'p', text: 'We don\'t quote cold. Every fixed-scope project starts with a discovery week — flat $4,800, credited back in full if you continue. It ends in a written scope, an architecture sketch, and a fixed estimate. Not a range. A number.' },
      { type: 'p', text: 'The opinion behind this, and we\'ll say it plainly: estimates should come after discovery, not before, which is why the number holds. A quote given before anyone has looked at your data, your approval chains, or the mess behind your current spreadsheet isn\'t an estimate. It\'s a guess with a dollar sign in front of it. Once scope is written down and both sides have signed off on it, scope and the fixed estimate are locked. If something changes after that — and things do change — it gets priced before the work starts, not billed after the fact as a surprise on an invoice.' },
      { type: 'h2', text: 'Boring technology, on purpose' },
      { type: 'p', text: 'We build on React, Node, and Postgres. Not because it\'s exciting — it isn\'t — but because it\'s boring on purpose. Novelty is a cost paid every year after launch, and it\'s the client who pays it, not us. A newer framework might save a few weeks on the build. It also means fewer developers who can maintain it in three years, fewer answers when something breaks at 2 a.m., and a slower hiring pool if you ever want to bring the work in-house. We\'d rather hand you something a competent engineer can pick up cold five years from now than something clever that only we understand.' },
      { type: 'h2', text: 'Who owns what, in practice' },
      { type: 'p', text: 'You own the code outright from day one. Not a license to use it, not a dependency on us to keep running it — ownership. The repos live in your organisation\'s accounts, not ours. The infrastructure runs in your own cloud account, not a shared environment we control and could, in theory, hold hostage.' },
      { type: 'p', text: 'This is the direct answer to the lock-in worry, and it\'s worth being blunt about: plenty of vendors keep the keys as informal leverage to keep you paying. We don\'t, because a client who feels trapped isn\'t a client who stays for the right reasons. If you want to walk away, walk away. The code is already yours.' },
      { type: 'h2', text: 'How this actually gets billed' },
      { type: 'p', text: 'Fixed-scope projects bill on milestones — typically 30% at kickoff, then the rest on phase acceptance as work is delivered and signed off, not on a calendar. Every fixed-scope project includes 30 days of post-launch fixes, because software that\'s just shipped always surfaces a few things nobody caught in testing. Billing terms are Net 14.' },
      { type: 'p', text: 'One thing we don\'t do: equity or deferred payment. It muddies the relationship, and it has never once made the software better. We\'d rather be paid in cash on clear milestones than have a stake in your company clouding whether we\'re building what you need or what protects our upside. Straightforward billing keeps the incentives straight too.' },
      { type: 'h2', text: 'What the first conversation actually covers' },
      { type: 'p', text: 'The first call is about your spreadsheet, your workarounds, and whether this is actually a custom-software problem or something a specialist or an existing product already solves better. No pitch deck, no pressure to sign anything on the spot.' },
      { type: 'p', text: 'If it makes sense to move forward, we work under NDA by default — your data doesn\'t need to wait for you to ask. If you\'re in healthcare, fintech, insurance, or anywhere else with a vendor security review, we complete that as part of onboarding, not as an afterthought once we\'re already three weeks into the build.' },
      { type: 'p', text: 'From there it\'s the discovery week, ending in a written scope, an architecture sketch, and a fixed estimate. The same named lead who takes that first call stays with the project through scoping, build, and launch — no handoff to a junior team once the contract\'s signed. If you\'ve been burned by that before, it\'s usually the first thing worth asking any vendor about, including us.' },
    ],
  },
  {
    slug: 'in-house-freelancer-or-squad-three-ways-to-hire-developers-a',
    title: 'In-House, Freelancer, or Squad: Three Ways to Hire Developers (and When Each One Is Wrong)',
    date: 'Jul 31, 2026',
    readingTime: '6 min read',
    category: 'Strategy',
    excerpt: 'In-house hire, freelancer, or dedicated squad? A plain breakdown of when each fits, what a squad actually costs, and why we sometimes say don\'t hire us.',
    body: [
      { type: 'p', text: 'The person signing the cheque almost never has a hiring problem. They have a workload problem that\'s been mistranslated into a hiring problem, and by the time it reaches us it\'s already been framed as a two-way fight: build a team or hire an agency. That framing skips the option most mid-sized companies actually need to weigh.' },
      { type: 'p', text: 'There\'s a third choice most people don\'t put on the list until someone else makes them. A contractor for a single job. An in-house hire for the long haul. Or a squad that does the design, the build, and the cloud work without you having to become a software employer to get it. The trigger is usually the same: the spreadsheet everyone secretly runs the business on has finally broken something expensive, and the off-the-shelf tool bought to replace it doesn\'t fit how the business actually works.' },
      { type: 'h2', text: 'Which one actually fits your project' },
      { type: 'p', text: 'Match the hire to the shape of the work, not to your budget or whoever pitched you last.' },
      { type: 'p', text: 'A single well-defined task suits a contractor. You know exactly what needs building, you can write the spec in a page, and you don\'t need it touched again in six months. A one-off integration, a script, a report nobody else understands. Hire a contractor, get it done, part ways. Running an ongoing product this way just means re-explaining your business to a new person every few months.' },
      { type: 'p', text: 'Ongoing core product work suits an in-house hire. If the thing you\'re building is the product — the software your customers actually touch, the system your revenue depends on — you want someone who accumulates context and stays. That\'s a hiring decision, not a project decision. It comes with a hiring decision\'s timeline and cost: headcount, benefits, the whole apparatus.' },
      { type: 'p', text: 'A project that needs design plus build plus cloud, without four separate hires to get it, suits a squad engagement. This is the shape most of our clients are actually in: a company that needs a dispatch tool built, hosted, and kept running, but has no interest in becoming a software employer to get there. They don\'t want to hire a designer for six months and a DevOps person forever. They want the thing built and looked after.' },
      { type: 'p', text: 'None of these is the right answer in the abstract. A five-person freight company patching together a quoting workflow needs a contractor for a weekend, not a squad. A 400-person manufacturer replacing its core ERP probably needs both an in-house owner of that system long-term and a squad to build it. The mistake is picking based on which vendor called first.' },
      { type: 'h2', text: 'What a dedicated squad actually looks like' },
      { type: 'p', text: 'Strip away the pitch and a dedicated squad is a specific, countable thing: one designer, two engineers, one lead. Not a rotating cast. Not "access to our bench." From $18k a month, billed monthly in advance, on rolling three-month terms.' },
      { type: 'p', text: 'Compare that against building the equivalent team yourself, and you\'re not just comparing two monthly numbers. You\'re comparing our monthly number against recruiting, onboarding, and managing four full hires — before anyone has written a line of code.' },
      { type: 'p', text: 'The part that actually matters isn\'t the composition. It\'s who stays. The named lead stays on the project from the scoping call through launch. No handoff to a junior team once the contract\'s signed. No new face on month four asking you to re-explain the business.' },
      { type: 'p', text: 'Three-month rolling terms also mean you\'re not locked into a year because a sales rep needed the contract value to look bigger. If the work dries up or priorities shift, the term ends on a sprint boundary, not a legal negotiation.' },
      { type: 'h2', text: 'Who owns the code — no matter which one you pick' },
      { type: 'p', text: '"You own the code" is easy to write into an agreement. What it actually means, mechanically, is where the repository lives and whose cloud account the app runs in. If the code sits in the vendor\'s GitHub organisation and the app runs in the vendor\'s AWS account, you don\'t own the code. You own a promise about the code.' },
      { type: 'p', text: 'We build in the client\'s organisation from day one. Repos live there. Infrastructure runs in the client\'s own cloud account, not ours. No exceptions, and no separate tier where this becomes true only if you ask for it.' },
      { type: 'p', text: 'If a vendor tells you that you\'ll own everything but can\'t explain where the repository and the infrastructure sit today, ask again before you sign anything. That\'s the whole question.' },
      { type: 'h2', text: 'How we bill, and how the estimate stays honest' },
      { type: 'p', text: 'The honest version of "how much will this cost" starts with admitting nobody can price a project accurately before they understand it. So we don\'t try to.' },
      { type: 'p', text: 'A discovery week comes first: a flat $4,800, credited back in full if you continue into the project. It ends in a written scope, an architecture sketch, and a fixed estimate. Not a range. Not a "roughly." A number, because by that point we\'ve actually looked at what you\'re asking us to build.' },
      { type: 'p', text: 'From there, a fixed-scope project is billed on milestones. Typically 30% at kickoff, then payments tied to phase acceptance, so you\'re never paying for work you haven\'t seen. Every project includes 30 days of post-launch fixes. Billing runs Net 14.' },
      { type: 'p', text: 'The "what if the estimate is wrong" fear is fair. The honest answer: scope changes get priced before the work starts, not billed as a surprise after. If something changes mid-project, you get a number for the change before anyone touches it — not a bigger invoice at the end explaining why.' },
      { type: 'h2', text: 'No, we don\'t take equity or defer payment' },
      { type: 'p', text: 'This gets asked, and the answer is no. It muddies the relationship, and it has never once made the software better. We\'d rather keep it simple: cash, milestones, clear scope. You know what you owe and when. We know what we\'re accountable for.' },
      { type: 'h2', text: 'Sometimes the answer is: don\'t hire a studio' },
      { type: 'p', text: 'We turn down projects a specialist would build better, or that an existing off-the-shelf product already solves for a tenth of the price. You\'ll hear that in the first call, not the third.' },
      { type: 'p', text: 'A niche compliance workflow that three vendors already sell as a subscription doesn\'t need a custom build. It needs a purchase order. A single automation that a no-code tool handles fine doesn\'t need engineers at all. And plenty of work genuinely is a one-person, single-skill job that a contractor will do faster and cheaper than a four-person squad standing around a problem sized for one.' },
      { type: 'p', text: 'Not every project needs a squad. Sometimes a contractor, sometimes an in-house hire, sometimes nothing more than a better-configured version of the tool you already bought. That\'s the honest answer, and it costs us a sale often enough that we\'ve stopped pretending otherwise.' },
      { type: 'h2', text: 'Start with discovery week, not a hiring decision' },
      { type: 'p', text: 'You don\'t have to know which of the three you need before you talk to us. That\'s what discovery week is for. We work under NDA by default and complete vendor security questionnaires as part of onboarding, so buyers in regulated industries don\'t have to raise it separately.' },
      { type: 'p', text: 'Figure out the shape of the work first. The hiring decision follows from that, not the other way around.' },
    ],
  },
  {
    slug: 'how-to-choose-a-custom-software-development-company-what-a-g',
    title: 'How to Choose a Custom Software Development Company: What a Good Answer Actually Sounds Like',
    date: 'Jul 30, 2026',
    readingTime: '5 min read',
    category: 'Strategy',
    excerpt: 'A plain-language guide to vetting a custom software development company — real questions on code ownership, estimates, billing, and what happens if it ends.',
    body: [
      { type: 'h2', text: 'The Three Questions That Matter More Than the Rest of the List' },
      { type: 'p', text: 'Vendor-selection checklists tend to pile up questions: portfolio, tech stack, team size, process, references. Ask enough of them and you\'ll get smooth answers to all of them, because any vendor who\'s done this a few times has smooth answers ready. What\'s harder to fake is the mechanics underneath three specific questions: who owns the code, how the estimate was built, and what happens when the relationship ends.' },
      { type: 'p', text: 'If you\'re the person signing the cheque at a mid-sized company that\'s outgrown the spreadsheet everyone secretly runs the business on, those three questions will tell you more than the rest of the checklist combined.' },
      { type: 'h2', text: 'An Estimate Given Before Discovery Is a Guess' },
      { type: 'p', text: 'If a company quotes you a fixed price on the first call, before anyone has looked at your data, your integrations, or the exceptions your ops team handles by hand, that number wasn\'t built. It was guessed. It might land close. It might not. Either way you didn\'t pay for accuracy, because nothing was measured yet.' },
      { type: 'p', text: 'We run a discovery week for a flat $4,800. If you continue into the build, that fee is credited back in full. You\'re not paying twice. You\'re paying to find the real shape of the problem before either of us commits to a number. It ends with a written scope, an architecture sketch, and a fixed estimate built from what your systems actually do.' },
      { type: 'p', text: 'Estimates should come after discovery, not before. That\'s the whole reason ours holds once it\'s written down.' },
      { type: 'h2', text: 'Who Owns the Code — and Who Owns the Servers It Runs On' },
      { type: 'p', text: '"Make sure you own the code" is common advice. You can own every line in a repo and still be stuck, if the infrastructure it runs on sits in someone else\'s cloud account, under someone else\'s login.' },
      { type: 'p', text: 'You own the code outright from day one. The repos live in your organisation, not ours. The infrastructure runs in your own AWS account, built as infrastructure as code — servers, pipelines, environment, all of it. If we disappeared tomorrow, you\'d have the code, the infrastructure, and the ability to hand both to someone else without asking us for anything. Ask any vendor where the cloud account lives, not just where the code lives.' },
      { type: 'h2', text: 'If They Want Equity Instead of Cash, End the Call' },
      { type: 'p', text: 'Some vendors will offer to take part of the fee in equity, or defer payment against future revenue, and call it a partnership.' },
      { type: 'p', text: 'We don\'t. It muddies the relationship, and it has never once made the software better. Cash, milestones, clear scope. That\'s the whole structure, and it keeps everyone pointed at the same target.' },
      { type: 'h2', text: 'A Good Vendor Says No Sometimes' },
      { type: 'p', text: 'Not every problem needs custom software. Some need a specialist who does nothing but that one kind of build. Some are already solved off the shelf, for a tenth of what a custom build would cost.' },
      { type: 'p', text: 'We turn down projects a specialist would do better, or that an existing off-the-shelf product already solves for a tenth of the price. If that\'s true of your project, you\'ll hear it in the first call, not the third, and not after a discovery fee has changed hands.' },
      { type: 'h2', text: 'Boring Technology, on Purpose' },
      { type: 'p', text: 'A vendor showing off an unusual stack is not necessarily showing you something good. Novelty in a production system gets paid for every year after launch, by whoever inherits it: scarcer hires, thinner documentation, more things breaking in ways nobody\'s seen before.' },
      { type: 'p', text: 'For custom web applications, we build on React, Node and Postgres. For mobile, Swift and Kotlin natively, React Native where it fits. None of that will impress anyone at a conference. That\'s the point.' },
      { type: 'h2', text: 'What Sane Billing Looks Like' },
      { type: 'p', text: 'A fixed-scope project starts from $28k per phase, billed on milestones: typically 30% at kickoff, then the rest tied to phase acceptance. That includes 30 days of post-launch fixes. A dedicated squad — one designer, two engineers, one lead — starts from $18k a month, on rolling three-month terms, billed monthly in advance. Ongoing care and improvement starts from $4.5k a month, cancel with 30 days\' notice. Everything runs on Net 14 terms.' },
      { type: 'p', text: 'See the pricing page for the full breakdown by project type.' },
      { type: 'h2', text: 'What Happens When You Stop Working Together' },
      { type: 'p', text: 'Ours is a full handover. Architecture walkthrough, runbooks, two weeks of support on the other side. The person who does the walkthrough is the same person who scoped the project in the first place. A named lead stays with you from the first scoping call through launch. No handoff to a junior team partway through.' },
      { type: 'h2', text: 'NDAs and Security Questionnaires Should Be Boring' },
      { type: 'p', text: 'If you\'re in healthcare, fintech or insurance, a vendor should expect a security review as a normal part of getting hired, not treat it as a favor. We work under NDA by default, and we complete vendor security questionnaires as part of onboarding.' },
      { type: 'h2', text: 'Start Smaller Than You Think You Need To' },
      { type: 'p', text: 'A discovery week costs a flat $4,800, credited back in full if you continue. It\'s a small, bounded way to find out how a vendor thinks before committing to anything larger.' },
      { type: 'p', text: 'If the real problem is narrower than a full platform rebuild — two systems that don\'t talk to each other, a report someone rebuilds by hand every week — integrations and data work starts from $22k, typically 4 to 10 weeks, and stands on its own as a first phase, not a down payment on something bigger. A phased plan lets you see the work before you\'re committed to all of it. Check the discovery workshop process and how we turn scope into a fixed estimate before deciding how big a first step you want to take.' },
    ],
  },
];

/**
 * Derived navigation visibility.
 *
 * /work and /insights are hidden from the header, footer and every secondary
 * CTA while they have nothing published — sending a prospect to an empty page
 * from your main nav costs more than the missing link does. The routes stay
 * live (so external links don't 404) but are marked noindex and dropped from
 * the sitemap until there's content.
 *
 * Both flip back on their own the moment `caseStudies` or `insights` gets an
 * entry — there's no switch to remember.
 */
export const hasWork = caseStudies.length > 0;
export const hasInsights = insights.length > 0;
