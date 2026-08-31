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
    slug: 'web-development-company-is-two-different-businesses-wearing-',
    title: '"Web Development Company" Is Two Different Businesses Wearing One Name',
    date: 'Aug 31, 2026',
    readingTime: '6 min read',
    category: 'Engineering',
    excerpt: '"Web development company" covers two unrelated trades. Here\'s how to tell a marketing-site shop from a custom software studio — and which one you actually need.',
    body: [
      { type: 'p', text: 'Ask ten agencies what they build and you\'ll get ten confident answers that mean almost nothing. The term covers two unrelated trades wearing the same job title. On one end: marketing-site and storefront shops. Brochure sites, landing pages, Shopify builds, the stuff a customer sees before they buy something. On the other end: studios that build the internal systems a company runs on. The dispatch board, the quoting tool, the intake form, the nightly reconciliation that breaks quietly and costs real money when it does. Both call themselves web development companies. Both will take your call.' },
      { type: 'p', text: 'The problem isn\'t that one is better than the other. The problem is mismatched expectations. That\'s where projects go sideways: the client asks for role-based permissions and an audit trail, and the vendor has never built either, because they\'ve spent their career making sites that don\'t need them.' },
      { type: 'h2', text: 'What we actually build' },
      { type: 'p', text: 'We build the software a company runs on, not the site a customer looks at before they call. That means custom web applications: portals, dashboards, workflow tools. Role-based access so the warehouse manager sees something different than the CFO. Audit trails and approvals, because someone will eventually ask who changed a number and when. Reporting built for finance teams, not just for engineers who think a spreadsheet export counts as reporting.' },
      { type: 'p', text: 'We migrate existing data. Usually out of the spreadsheet everyone secretly runs the business on. Sometimes out of a prior system nobody trusts anymore.' },
      { type: 'p', text: 'The stack is React, Node, and Postgres. Typical timeline runs 10 to 20 weeks. Pricing starts at $45k. If that number made you flinch, good. It means you now know roughly what this category costs, which is more than most pages on the internet will tell you.' },
      { type: 'p', text: 'If what you actually need is a website that explains what your company does and takes a form submission, this isn\'t the section for you, and we\'d rather tell you that now, not after you\'ve signed something.' },
      { type: 'h2', text: 'If you need a marketing site, say so — we\'ll tell you to go elsewhere' },
      { type: 'p', text: 'We turn down projects a specialist would do better, or that an existing product already solves for a tenth of the price. A marketing website or storefront is not our work. A specialist will do it faster and cheaper, with better instincts for conversion copy and page speed than we have. We\'d be learning on your budget. You\'ll hear that in the first call, not the third, and not after you\'ve paid a deposit.' },
      { type: 'h2', text: 'Three questions that sort a marketing vendor from a software studio' },
      { type: 'p', text: 'You don\'t need to know our stack to sort vendors. Three questions expose the difference fast.' },
      { type: 'p', text: 'Can you show audit trails and role-based access? A marketing shop will ask what you mean. A software studio has an answer before you finish the sentence.' },
      { type: 'p', text: 'How do you handle migrating our existing data? If the answer is "we\'ll figure that out," that\'s a real answer, just not a reassuring one. You want a process, not an improvisation.' },
      { type: 'p', text: 'Who owns the code when we\'re done? Ask this even if it sounds obvious. Most vendors give you a vaguer answer than you\'d expect.' },
      { type: 'h2', text: 'The discovery week, and why the estimate holds' },
      { type: 'p', text: 'Most advice on the internet says "get a detailed scope before you sign." Nobody says who pays for producing that scope, or what happens to the number if it\'s wrong. We do it as a discrete, paid step: discovery week, flat $4,800, credited back in full if you continue with us. It ends in a written scope, an architecture sketch, and a fixed estimate. Not a range. Not a "typically."' },
      { type: 'p', text: 'The reason the number holds afterward is structural, not a promise. Estimates come after discovery, not before, which is why we can stand behind them. A vendor who quotes you a fixed price on a first call is guessing. You\'re the one who eats the guess when it\'s wrong.' },
      { type: 'p', text: 'Discovery week is the part of the process that turns a guess into a number we\'re willing to bill against.' },
      { type: 'h2', text: 'Who owns the code — and why that has to be written down' },
      { type: 'p', text: 'Client owns the code outright from day one. Repos live in your organisation, not ours. Infrastructure runs in your cloud account, not a shared one we control. No vendor lock-in by design. Not a marketing line. A practice we set up before a single line of code exists.' },
      { type: 'p', text: '"You own the code" is a sentence a lot of vendors say and fewer actually structure for. If the agreement doesn\'t put that in writing from the start, you\'re trusting a handshake to hold up the day you switch vendors or bring the work in-house. We\'d rather you never have to test that trust. Set it up right at kickoff and the question never comes up again.' },
      { type: 'h2', text: 'Boring technology, on purpose' },
      { type: 'p', text: 'We build in React, Node, and Postgres, and we don\'t rotate off that stack because something newer showed up at a conference. This is boring technology, on purpose. Novelty is a cost paid every year after launch, and the client pays it: whoever has to hire for the stack, patch it, and keep a developer around who still understands it three years from now. Boring means hireable and documented, long after we\'ve handed you the runbooks.' },
      { type: 'p', text: 'Excitement is a fine quality in a hobby project. In something your finance team depends on, we\'ll take predictable every time.' },
      { type: 'h2', text: 'How the money actually moves' },
      { type: 'p', text: 'A fixed-scope project runs from $28k per phase, billed on milestones — roughly 30% at kickoff, then on phase acceptance. That\'s it. No hourly surprise line items, no invoice that reads differently than the conversation that preceded it. Terms are Net 14. Every fixed-scope project includes 30 days of post-launch fixes, because the first month after launch is when real usage finds the edges a demo never touched, and we\'d rather fix those on our clock than yours.' },
      { type: 'p', text: 'Software is never finished. That\'s why care and improvement afterward is its own line item, not a footnote.' },
      { type: 'p', text: 'If you want ongoing work past launch — patching, monitoring, a named on-call person — that\'s a separate, plainly priced arrangement under cloud, DevOps and care, not something buried inside the build.' },
      { type: 'h2', text: 'If this is your project, here\'s the next step' },
      { type: 'p', text: 'If what you need is a portal, a dashboard, or a workflow tool with real permissions and a paper trail, start with discovery week. It\'s the entry point for a reason: it turns "we think we need something custom" into a written scope, an architecture sketch, and a fixed number, before either of us commits to more.' },
      { type: 'p', text: 'A named lead stays with you from that first scoping call through launch. No handoff to whoever\'s free that sprint.' },
      { type: 'p', text: 'Typical timeline is 10 to 20 weeks, from $45k. If that\'s the shape of your problem, we\'re the right call to make. If it isn\'t, we\'ll say so before you spend the $4,800 finding out.' },
    ],
  },
  {
    slug: 'what-custom-web-development-actually-costs-and-when-you-shou',
    title: 'What Custom Web Development Actually Costs (And When You Shouldn\'t Buy It)',
    date: 'Aug 28, 2026',
    readingTime: '5 min read',
    category: 'Strategy',
    excerpt: 'What\'s really included in custom web development services: scope, stack, price, timeline, billing terms, code ownership — and when an off-the-shelf tool is the better answer.',
    body: [
      { type: 'p', text: 'Most people asking "how much does custom web development cost" don\'t need custom web development. They need to stop running the business out of a spreadsheet with fourteen tabs and a macro nobody understands anymore, and they\'ve correctly guessed that the fix involves software. That\'s a good instinct. It\'s just aimed at the wrong first question.' },
      { type: 'h2', text: 'Do you actually need custom, or do you need a better spreadsheet?' },
      { type: 'p', text: 'Here\'s the test. If your process is one team, one workflow, and a shape a thousand other companies share (quoting, basic scheduling, simple invoicing), an off-the-shelf tool solves that for a tenth of the price of building it yourself. Companies in logistics, healthcare, field services, manufacturing, professional services, retail, fintech, and construction come to us because they\'ve already tried that route and outgrown it. The spreadsheet everyone secretly runs the business on started as a smart shortcut. Then it became the system nobody can replace, with a macro one person understands and no audit trail when something goes wrong.' },
      { type: 'p', text: 'If your workflow is genuinely specific to how you operate — your dispatch logic, your approval chain, your particular pile of systems that don\'t talk to each other — that\'s when custom earns its price.' },
      { type: 'p', text: 'Not before.' },
      { type: 'h2', text: 'What\'s actually in a custom web build' },
      { type: 'p', text: 'A real engagement isn\'t "a website, but fancier." It\'s the operational core of the business, built to fit. That means portals and dashboards that match how your team actually works, not a generic template. Role-based access, so a dispatcher sees what a dispatcher needs and a controller sees what a controller needs. Audit trails and approvals, so when someone asks "who signed off on this" six months from now, there\'s an answer. Reporting built for finance teams specifically, not a dashboard that looks good in a demo and gets exported to Excel anyway. Migration of whatever data you\'re already sitting on, so day one isn\'t day zero. Training and documentation, because software nobody knows how to use is just an expensive UI on top of the old problem.' },
      { type: 'p', text: 'If a proposal doesn\'t name most of these, ask why.' },
      { type: 'h2', text: 'The stack, and why it\'s deliberately boring' },
      { type: 'p', text: 'We build on React, Node, and Postgres. Not because it\'s exciting. Because it isn\'t.' },
      { type: 'p', text: 'Boring technology, on purpose: novelty is a cost paid every year after launch, and the client pays it, not the vendor. A framework that\'s three years old and fashionable today is a hiring problem and a migration project down the road. A stack with a decade of production use behind it has known failure modes, a deep hiring pool, and no surprises waiting in year three. We\'re not choosing the interesting tool. We\'re choosing the one that still works when nobody\'s excited about it anymore.' },
      { type: 'h2', text: 'Price, timeline, and how discovery turns a guess into a number' },
      { type: 'p', text: 'Custom web applications start from $45k, typically 10–20 weeks depending on scope. That\'s a real starting point, not a headline number that quietly excludes the project you\'re actually asking about.' },
      { type: 'p', text: 'We don\'t quote off a phone call. We start with a discovery week: flat $4,800, credited back in full if you continue with us. It ends in a written scope, an architecture sketch, and a fixed estimate. Not a range. A number.' },
      { type: 'p', text: 'Most estimates in this industry get built backwards. A salesperson gives you a range before anyone\'s mapped your actual workflow, then the number moves once the engineers see what\'s really involved. We do it the other order. Estimates come after discovery, not before, which is why the number holds. It\'s a week of real work, not a sales call dressed up as one — and it\'s the reason we don\'t have a change-order conversation three months in that starts with "so, it turns out."' },
      { type: 'h2', text: 'How billing actually works' },
      { type: 'p', text: 'A fixed-scope project starts at $28k per phase, billed on milestones: roughly 30% at kickoff, the rest on phase acceptance. You\'re not funding six months of work on faith, and we\'re not funding it either. Every fixed-scope project includes 30 days of post-launch fixes, so launch isn\'t the day support ends and problems become your problem alone. Invoices run Net 14. No surprise invoicing, no hourly overage line item you didn\'t see coming.' },
      { type: 'h2', text: 'Who owns the code when it\'s done' },
      { type: 'p', text: 'You do. Outright, from day one. This isn\'t a license, and it isn\'t something we hold over you to keep the relationship going. The repos live in your organisation, not ours. The infrastructure runs in your own cloud account, not a shared environment we control.' },
      { type: 'p', text: 'If you ever want to walk away, you get a full handover: an architecture walkthrough, runbooks, and two weeks of support to make the transition real instead of theoretical.' },
      { type: 'h2', text: 'When we say no' },
      { type: 'p', text: 'We turn down projects a specialist would do better, or that an existing product already solves for a tenth of the price. You\'ll hear that in the first call, not the third. If your quoting problem is a Salesforce configuration issue, we\'ll say so. Building custom software you don\'t need isn\'t a favor to anyone, including us.' },
      { type: 'h2', text: 'What a pure web build doesn\'t cover' },
      { type: 'p', text: 'A web application engagement is a web application engagement. It doesn\'t include a mobile app for your field crews. That\'s its own build, on Swift, Kotlin, and React Native, from $60k over 12–22 weeks, because offline data handling and device management are a different set of problems. It doesn\'t include AI and automation work — document extraction, search over your own records, accuracy testing against real cases — which starts from $32k over 6–14 weeks. And it doesn\'t include what happens after launch: ongoing cloud, DevOps, and care is a separate arrangement, from $4.5k a month, cancel with 30 days\' notice.' },
      { type: 'p', text: 'Software is never finished. We\'d rather say that upfront than let a launch date imply otherwise.' },
      { type: 'h2', text: 'NDAs and security questionnaires — handled before you ask' },
      { type: 'p', text: 'We work under NDA by default. We complete vendor security questionnaires as part of onboarding, not as a special accommodation for the client who happens to ask. For a company in healthcare, fintech, or insurance, that\'s usually the first real question in the room — we\'d rather have it settled in week one than negotiated in week six.' },
    ],
  },
  {
    slug: 'you-don-t-need-a-saas-development-agency-you-need-one-workin',
    title: 'You Don\'t Need a SaaS Development Agency. You Need One Working Application.',
    date: 'Aug 26, 2026',
    readingTime: '5 min read',
    category: 'Strategy',
    excerpt: 'Most companies searching "SaaS development agency" need one internal application, not a multi-tenant product. Here\'s how to tell which one you\'re building, and what it actually costs.',
    body: [
      { type: 'p', text: 'Two people type "SaaS development agency" into a search bar, and they want different things.' },
      { type: 'p', text: 'One of them runs operations, or finance, or IT, at a mid-sized company in logistics, healthcare, field services, manufacturing, professional services, retail, fintech, or construction. They have outgrown the spreadsheet everyone secretly runs the business on, or they\'re stuck with an off-the-shelf tool that fights them every week. They need one working application for their own team. Nobody outside their company is ever going to log into it.' },
      { type: 'p', text: 'The other person is building a product to sell to other companies. Multiple customers, multiple accounts, a subscription, maybe investors asking about growth. That\'s a real job. It is not the same job as the first one, and it doesn\'t get solved by the same architecture, the same price, or the same timeline.' },
      { type: 'p', text: 'Figure out which one you are before you take a call with anyone pitching "SaaS development." It\'ll save you a few conversations.' },
      { type: 'h2', text: 'If you\'re running your own company, you want a custom web application' },
      { type: 'p', text: 'A SaaS platform is built to serve many separate customers who don\'t know about each other — each with their own account, their own data walled off, their own billing. A custom web application is built to serve your company. One organization, one set of users, roles inside that one organization.' },
      { type: 'p', text: 'If that\'s you, what you actually want is a custom web application — a portal, a dashboard, a workflow tool. Role-based access so a dispatcher sees different things than a controller. Audit trails and approvals so finance can trust what\'s in the system. Built on React, Node, and Postgres, typically 10 to 20 weeks, starting from $45k.' },
      { type: 'p', text: 'None of that needs multi-tenant infrastructure. Multi-tenant architecture exists to isolate customer A\'s data from customer B\'s data, at scale, with billing attached to each account. If you have one customer — your own company — you\'re paying to build a wall with nothing on the other side of it. That\'s not caution. That\'s money spent once at launch and spent again every year it needs patching.' },
      { type: 'h2', text: 'If you\'re building a product to sell, that\'s a different conversation' },
      { type: 'p', text: 'If you\'re building something meant to be sold to other companies, multi-tenant architecture and account isolation aren\'t extras. They\'re part of the shape of the thing from day one.' },
      { type: 'p', text: 'We build custom web applications, mobile apps, CRMs, and automation for companies running their own operations. That\'s the work we take. If your project is a commercial SaaS product for resale, you should be talking to someone who lives in that world day to day, not us. We\'d rather say that on the first call than take your money for a job we\'re not built for.' },
      { type: 'h2', text: 'What actually determines the price and the timeline' },
      { type: 'p', text: 'The price isn\'t driven by how sophisticated the software looks. It\'s driven by a handful of concrete things: how many roles need different access, how strict the audit trail needs to be for finance and compliance, whether you\'re migrating years of data out of the old spreadsheet or the old CRM, and whether your team needs training and documentation to actually adopt what you build.' },
      { type: 'p', text: 'A custom web application with role-based access, reporting for finance, and a real data migration runs from $45k, typically 10 to 20 weeks.' },
      { type: 'p', text: 'Sometimes the honest answer is that you don\'t need a bespoke application at all. If what you\'re missing is pipeline tracking, quoting, dispatch, or billing that talks to your accounting package, that\'s a CRM or internal tool problem, not a from-scratch build. Those run from $38k, typically 8 to 18 weeks, and they get you there faster because most of the shape of the problem is already known.' },
      { type: 'h2', text: 'Why the estimate only means something after discovery week' },
      { type: 'p', text: 'A number given before anyone has looked at your data or your existing systems isn\'t an estimate. It\'s a guess.' },
      { type: 'p', text: 'That\'s why we don\'t quote a fixed number until after discovery week: a flat $4,800, credited back in full if you continue with us. It ends in a written scope, an architecture sketch, and a fixed estimate. Not a range. A number.' },
      { type: 'p', text: 'Once that scope is written down, changes get priced before work starts, not billed after as a surprise. A fixed-scope project then starts from $28k per phase, billed on milestones — 30% at kickoff, then the rest as each phase is accepted. You always know what the next payment is for.' },
      { type: 'h2', text: 'Who owns the code, and where it lives' },
      { type: 'p', text: 'You own the code. Not a license, not a right to export it if things go sideways. Outright ownership, from day one. The repositories live in your organization\'s account. The infrastructure runs in your cloud account, not one we control.' },
      { type: 'p', text: 'We work under NDA by default, and we complete vendor security questionnaires as part of onboarding, before code gets written.' },
      { type: 'p', text: 'If the relationship ends, you get a full handover: an architecture walkthrough, runbooks written so someone new can pick it up, and two weeks of support while your team gets its footing.' },
      { type: 'h2', text: 'We turn work away' },
      { type: 'p', text: 'We turn down projects a specialist would do better, or that an existing off-the-shelf product already solves for a tenth of the price. If your problem is already solved by something on the market, we\'ll say so on the first call. It costs us the project. It\'s still the right answer.' },
      { type: 'h2', text: 'Boring technology, on purpose' },
      { type: 'p', text: 'React, Node, Postgres, AWS — chosen deliberately. None of it is exciting, and that\'s the point. Novelty is a cost paid every year after launch, by you, in the form of hiring for a rare skill or patching something nobody else has seen fail before. Infrastructure as code, running in your own cloud account, means the thing that keeps it alive isn\'t a person who might leave. It\'s a file anyone competent can read. See cloud, DevOps & care for what that looks like month to month.' },
      { type: 'h2', text: 'Before you sign anything' },
      { type: 'p', text: 'Ask two things. Does the architecture being quoted assume multiple customer accounts you don\'t actually have? And did the number on the table come before or after a paid discovery phase with a written scope, or is it a guess from the first call dressed up as a quote?' },
      { type: 'p', text: 'If either answer makes you uneasy, that\'s worth sitting with.' },
    ],
  },
  {
    slug: 'you-searched-saas-development-agency-you-might-need-somethin',
    title: 'You Searched "SaaS Development Agency." You Might Need Something Else.',
    date: 'Aug 24, 2026',
    readingTime: '5 min read',
    category: 'Strategy',
    excerpt: 'Searching \'SaaS development agency\' but really need to kill a spreadsheet? Here\'s the plain difference between SaaS and custom software, and what each actually costs.',
    body: [
      { type: 'p', text: 'You typed "SaaS development agency" into a search bar because that\'s the phrase everyone uses. It\'s in the ads, the LinkedIn posts, your last vendor\'s homepage. But a lot of companies search that term when what they actually need is an internal tool — something to replace the spreadsheet everyone secretly runs the business on, the one with too many tabs and a macro nobody remembers writing.' },
      { type: 'p', text: 'If that\'s you, you\'re not shopping for the wrong reason. You\'re just shopping with the wrong noun.' },
      { type: 'h2', text: 'SaaS and custom software aren\'t the same question' },
      { type: 'p', text: 'SaaS means software built once and sold to many customers. Multi-tenant architecture. Self-serve signup. Subscription billing. A pricing page with tiers. It\'s a product business — the software is the thing you sell.' },
      { type: 'p', text: 'Custom software is built for one company, to run that company\'s own operations. Nobody signs up for it. Nobody sees a pricing page. It replaces the quoting spreadsheet, the dispatch whiteboard, the intake form that gets emailed around as a PDF.' },
      { type: 'p', text: 'This is a different question than custom vs. off-the-shelf, even though people mix the two up constantly. Off-the-shelf vs. custom is about whether you build or buy. SaaS vs. internal tool is about whether the software is meant to be sold at all. You can build a custom internal tool instead of buying an off-the-shelf one. You can also build a SaaS product that becomes off-the-shelf for someone else. Two separate forks.' },
      { type: 'h2', text: 'We\'re not a SaaS product studio, and we\'ll say so before you waste a call' },
      { type: 'p', text: 'If you need multi-tenant architecture, self-serve onboarding, and subscription billing built for resale, look for a shop that specializes in that. Tenant isolation and a signup flow that has to work for a stranger with no hand-holding are a different discipline. We don\'t do that work, and pretending otherwise on a discovery call would waste your time and ours.' },
      { type: 'p', text: 'We turn down projects a specialist would do better, or that an existing product already solves for a tenth of the price. You\'ll hear that in the first call, not the third, after we\'ve taken a deposit and started sketching wireframes. If your business plan is to sell this software to other companies, we\'re the wrong studio.' },
      { type: 'h2', text: 'What we build instead' },
      { type: 'p', text: 'We build the tool that sits between your team and the spreadsheet they\'ve outgrown. Portals, dashboards, workflow tools. CRMs and internal systems that cover quoting, dispatch, inventory, billing, workflow, roles and reporting in one place instead of four disconnected ones.' },
      { type: 'p', text: 'Role-based access, so the warehouse team doesn\'t see finance\'s numbers and finance doesn\'t have to run on an honor system. Audit trails and approvals, so a job doesn\'t get invoiced twice or approved by someone who shouldn\'t have the authority. Migration of your existing data, off the spreadsheet or the prior CRM that never quite fit, so day one doesn\'t start with everyone re-entering six months of history by hand. Training and documentation, because a tool nobody knows how to use is just a more expensive spreadsheet.' },
      { type: 'p', text: 'None of it needs to work for a stranger who found you through a signup page. It only needs to work for the people who already work for you. Details on how we scope and build these live on our custom web applications and CRMs & internal tools pages.' },
      { type: 'h2', text: 'A question to ask yourself before you keep shopping' },
      { type: 'p', text: 'Are you trying to sell this software to other companies, or are you trying to stop running your own company on spreadsheets and email?' },
      { type: 'p', text: 'If it\'s the first, you need multi-tenant architecture, subscription billing, and self-serve onboarding, and you should be shopping for a studio that names those things on its homepage. If it\'s the second, none of that complexity applies to you, and you shouldn\'t pay for it. Get this question right before build-vs-buy — it changes who you should even be talking to.' },
      { type: 'h2', text: 'What the internal-tool path costs' },
      { type: 'p', text: 'Custom web applications start from $45k, with a typical build running 10 to 20 weeks. We build on React, Node and Postgres — boring technology, on purpose. A dispatch board doesn\'t need to be interesting. It needs to still be running in four years, after the person who commissioned it has moved to a different role.' },
      { type: 'p', text: 'A custom internal tool doesn\'t need multi-tenant complexity, so it doesn\'t get billed for it. No tenant isolation. No plan-tiering logic. No signup flow built to handle a stranger walking in cold. That\'s real engineering work in a SaaS build, and your project doesn\'t need it if the only users are your own employees.' },
      { type: 'h2', text: 'Discovery week is where this gets settled, not guessed' },
      { type: 'p', text: 'We don\'t quote a number on the first call, because we don\'t know enough yet to quote one honestly. Discovery week is a flat $4,800, credited back in full if you continue with us, and it ends in a written scope, an architecture sketch, and a fixed estimate.' },
      { type: 'p', text: 'Estimates should come after discovery, not before. That\'s the whole reason ours hold. A number given on a sales call, before anyone has looked at your data or your existing systems, is a guess wearing a suit. Ours comes after we\'ve actually looked. More on how that week runs is on the discovery week page.' },
      { type: 'p', text: 'If you came here looking for a SaaS development agency because you\'re building a product to sell, keep looking. But if you\'re trying to kill a spreadsheet, that\'s a conversation worth having, and it starts with a week, not a guess.' },
    ],
  },
  {
    slug: 'fixed-price-or-time-and-materials-the-real-question-is-who-e',
    title: 'Fixed Price or Time and Materials? The Real Question Is Who Eats the Risk',
    date: 'Aug 21, 2026',
    readingTime: '6 min read',
    category: 'Strategy',
    excerpt: 'Fixed price vs time and materials, explained without the sales pitch: who holds the risk, how discovery sets an honest number, and what our own milestone billing looks like.',
    body: [
      { type: 'p', text: 'Every pricing conversation eventually comes down to two sentences. Time and materials puts the risk of scope creep on the client — the meter runs whether or not the plan was solid. And a number given before anyone has looked at the mess is a guess wearing a suit.' },
      { type: 'p', text: 'Everything else — the hourly rate, the total contract value, whether someone calls it "agile pricing" — is decoration on top of that. Before you sign anything, figure out which one of you is holding the bag if the estimate turns out to be wrong. Then get the mechanics for that, not just the number, in writing.' },
      { type: 'h2', text: 'The Two Models, No Jargon' },
      { type: 'p', text: 'Fixed price is one number for a defined piece of work, agreed before the work starts. You know the total before anyone opens a laptop. Time and materials is billed for the hours and materials actually used, with no ceiling unless one is written in. You find out the total when the work is done.' },
      { type: 'p', text: 'That\'s the whole fixed bid vs hourly software development debate, stripped of the branding. Everything you\'ll read about "hybrid" or "agile pricing" is one of these two things wearing a costume. If a vendor tells you their pricing model is Agile, ask them to point to the number. Agile is how the work gets organized. It is not how the invoice gets calculated. The real time and materials vs fixed price contract choice is a choice about who absorbs a bad guess, not which one sounds more modern.' },
      { type: 'h2', text: 'Time and Materials: Flexible for Whom?' },
      { type: 'p', text: 'T&M gets sold as flexibility. It is — for the person billing it. The meter runs whether or not the plan was solid, and that risk sits with whoever\'s paying the invoice. If the requirements were vague going in, T&M doesn\'t punish the vagueness. It bills it, hour by hour, for as long as it takes to notice.' },
      { type: 'p', text: 'Here\'s the part vendors don\'t say out loud: T&M rewards a vendor for finding more work, not for finishing faster. There\'s no structural reason for a team billed hourly to move quickly. Some do anyway, because they\'re good people or they want the referral. But the contract itself isn\'t pulling in that direction. It\'s pulling toward more hours, billed at the same rate, for as long as the client keeps paying.' },
      { type: 'p', text: 'That doesn\'t make T&M dishonest. It makes it a bet you\'re placing on the vendor\'s discipline rather than on the contract\'s structure. Fine, if you know that going in. Not fine if you thought you were buying a number.' },
      { type: 'h2', text: 'Fixed Price Only Holds If It\'s Set After the Mess Is Understood' },
      { type: 'p', text: 'Here\'s the limitation of fixed price, including ours: a number given before anyone has looked at the mess is a guess wearing a suit. A fixed price quoted on a sales call is really a T&M bet wearing a fixed-price label — someone pads it to cover the unknowns, or someone eats the surprise later and starts cutting corners to make the number still work. Either way, the client just doesn\'t see it happening.' },
      { type: 'p', text: 'We don\'t quote a fixed number off a first call, on purpose. Not because we\'re being cautious for the sake of it, but because a number from a first call is a guess, and we don\'t like putting a client\'s budget behind a guess we made. The spreadsheet everyone secretly runs the business on has years of undocumented exceptions built into it. You can\'t price replacing it until you\'ve actually opened it up.' },
      { type: 'h2', text: 'How We Actually Set the Number' },
      { type: 'p', text: 'So we do a discovery week first. Flat $4,800. It\'s credited back in full if the client continues, so it isn\'t a toll for the privilege of getting a quote — it\'s the work that makes the quote real.' },
      { type: 'p', text: 'Discovery week ends in written scope, an architecture sketch, and a fixed estimate. At that point the number isn\'t a guess anymore. It\'s based on someone having actually looked at your data, your integrations, and the exceptions nobody wrote down. If you walk away after discovery, you keep the scope document and the architecture sketch. You paid for something real either way.' },
      { type: 'h2', text: 'What a Fixed-Scope Project Actually Bills Like' },
      { type: 'p', text: 'Once scope is locked, a fixed-scope project runs from $28k per phase. It\'s billed on milestones: 30% at kickoff, the rest on phase acceptance. Net 14 terms on everything.' },
      { type: 'p', text: '"Phase acceptance" isn\'t a vague checkpoint — it means the thing in the scope document actually works, in your environment, with your data, and someone on your side has signed off on it. Not a demo. Not a beta link. Acceptance. That\'s the moment the next chunk of money moves.' },
      { type: 'p', text: 'The project also includes 30 days of post-launch fixes, so acceptance isn\'t the finish line where we disappear and you discover the edge cases alone. If something the scope covered breaks in that window, it\'s on us to fix it, not on you to negotiate it.' },
      { type: 'h2', text: 'Scope Changes: Priced, Not Snuck In' },
      { type: 'p', text: 'Scope changes happen. Someone remembers a reporting requirement in week six, or the accounting package changes its API. Fine. Scope changes are priced before work starts, not slipped into an invoice afterward. You\'ll know the cost and the timeline impact before we touch it, and you decide whether it\'s worth doing now, later, or not at all. No invoice should ever be the first time you hear about a change.' },
      { type: 'h2', text: 'When Something Like Time and Materials Is the Honest Answer' },
      { type: 'p', text: 'Fixed price works when the destination is known. It stops making sense when the work is genuinely ongoing — a product that keeps evolving, a backlog that grows as the business grows, priorities that shift by quarter. Pretending that\'s a fixed-scope project just means renegotiating the "fixed" price every few months, which is worse than admitting it\'s ongoing from the start.' },
      { type: 'p', text: 'That\'s what a dedicated squad is for. From $18k a month, rolling 3-month terms, one designer, two engineers, one lead, billed monthly in advance. This is the honest version of "flexible," not open-ended hours with no shape. You get a consistent team who knows your codebase, a fixed monthly number, and the ability to redirect their attention as priorities shift — without a change order every time something moves.' },
      { type: 'h2', text: 'What We Won\'t Do to Make a Number Look Better' },
      { type: 'p', text: 'We do not take equity or offer deferred payment. It muddies the relationship and it has never once made the software better. Cash, milestones, clear scope. If a vendor is willing to defer payment or take a stake instead, ask yourself why they\'d rather be paid in outcomes they don\'t control than dollars they do.' },
      { type: 'p', text: 'And we don\'t blend billing models without writing down what changed. If a fixed-scope project turns into ongoing care after launch, that\'s a new agreement with its own number, not a quiet drift from milestone billing into open hours nobody agreed to.' },
      { type: 'h2', text: 'Ask This Before You Sign Either Contract' },
      { type: 'p', text: 'Skip the pros-and-cons chart. Ask who holds the risk if the estimate is wrong, and ask for that answer in writing before the number, not after. If the answer is "you do, and here\'s how we\'ll handle it if it happens," you\'re looking at a real contract. If the answer is a shrug, or a hybrid model nobody can quite explain, you already know who\'s going to be eating the surprise.' },
    ],
  },
  {
    slug: 'typed-web-development-company-into-google-read-this-before-y',
    title: 'Typed \'Web Development Company\' Into Google? Read This Before You Book a Call',
    date: 'Aug 19, 2026',
    readingTime: '5 min read',
    category: 'Engineering',
    excerpt: 'Searching \'web development company\'? Most people want a website. If you need internal software — a portal, CRM, or dashboard — here\'s how to tell, and what it costs.',
    body: [
      { type: 'h2', text: 'You typed \'web development company.\' You might want a web design company.' },
      { type: 'p', text: 'Most people who type that phrase into Google are looking for someone to build them a marketing website or an online store. That\'s a legitimate industry, and it\'s not what we do. If you need a homepage, a few product pages, and a contact form that emails your sales inbox, keep scrolling past us.' },
      { type: 'p', text: 'We build custom web applications. Software your team logs into every day to run part of the business — the dispatch board, the quoting tool, the thing that replaced the spreadsheet six people were all editing at once. If that\'s your problem, keep reading. If it\'s a website, this article isn\'t wasting your time, but the rest of our site might.' },
      { type: 'h2', text: 'What we actually build' },
      { type: 'p', text: 'Portals, dashboards, quoting tools. Internal software that replaces the spreadsheet everyone secretly runs the business on.' },
      { type: 'p', text: 'Beyond custom web applications, that includes CRMs and internal tools for pipeline, quoting, dispatch, and invoicing. AI and automation for pulling data out of documents and emails, or letting your team search and get answers over your own files instead of digging through folders. Integrations that keep two systems in sync without someone manually re-entering the same order. Mobile apps for field crews and technicians that keep working when a job site has no signal.' },
      { type: 'p', text: 'None of this shows up in a portfolio the way a nice website does. It\'s not designed to be looked at. It\'s designed to survive Tuesday.' },
      { type: 'h2', text: 'If it\'s a website you need, say so — we\'ll say so too' },
      { type: 'p', text: 'We turn down work a specialist would do better. If you need a marketing site or an online store, that\'s the one thing a web design or e-commerce shop does all day, every day. We\'d be learning on your dime, and you\'d be paying for our education.' },
      { type: 'p', text: 'Same principle has us walking away from projects an off-the-shelf tool already solves for a tenth of the price. We\'d rather say that on the first call than bill you for discovering it later.' },
      { type: 'h2', text: 'The signals you\'re actually looking for a custom web application' },
      { type: 'p', text: 'There\'s a pattern, and most readers already know which side of it they\'re on. You\'re probably looking at custom software, not a website, if:' },
      { type: 'p', text: 'More than one person needs to use the thing, and they don\'t all need to see the same data — role-based access, not one shared login. There\'s an approval step somewhere that currently happens over email or a sticky note, and nobody can prove it happened after the fact. Finance needs a report that currently gets built by hand at the end of the month. Data is trapped in a spreadsheet, or in a system you\'ve outgrown, and it needs to move without anyone retyping three years of history.' },
      { type: 'p', text: 'If two or more of those are true, you\'re not shopping for a website. You\'re shopping for the thing we build.' },
      { type: 'h2', text: 'Why we don\'t quote it on the first call' },
      { type: 'p', text: 'We don\'t give a price on the first call. Nobody honestly can. A number given before anyone has looked at your data, your existing systems, and your approval chain isn\'t an estimate — it\'s a placeholder that moves later, and it always moves up.' },
      { type: 'p', text: 'So we start with a discovery week. Flat $4,800, credited back in full if you continue into the build. Discovery ends in a written scope, an architecture sketch, and a fixed estimate you can actually hold us to.' },
      { type: 'p', text: 'Ask any vendor at what point their estimate gets pinned down. If the answer is "the first call," ask what happens when it\'s wrong six weeks in. Ours gets pinned down after discovery, not before. That\'s the only reason it holds.' },
      { type: 'h2', text: 'What it actually costs and takes' },
      { type: 'p', text: 'Custom web applications typically run from $45,000, over 10 to 20 weeks, depending on what discovery finds. That covers portals, dashboards, and workflow tools built with role-based access, audit trails and approvals, reporting for finance, and migration of your existing data — plus training so your team can run it without calling us.' },
      { type: 'p', text: 'Billing runs on milestones: 30% at kickoff, then payments tied to phase acceptance, not to the calendar. Every fixed-scope project includes 30 days of post-launch fixes, because the first month after launch is when real users find the things nobody tested for. Standard terms are Net 14.' },
      { type: 'h2', text: 'Why the stack is boring, on purpose' },
      { type: 'p', text: 'We build on React, Node, and Postgres. Not because it\'s exciting. Because it isn\'t.' },
      { type: 'p', text: 'Novelty is a cost, paid every year after launch, by the client, not by us. Boring technology, on purpose, isn\'t a lack of imagination. It\'s what happens when you plan to still be running this software years from now instead of rebuilding it.' },
      { type: 'h2', text: 'Who owns it when it\'s done' },
      { type: 'p', text: 'You own the code outright from day one. Not a license, not a "you can keep using it as long as you keep paying us" arrangement. The code is yours.' },
      { type: 'p', text: 'The repos live in your organisation, not ours. The infrastructure runs in your own cloud account, not a shared environment we control. That\'s just how we think ownership should work when someone else paid for it.' },
      { type: 'h2', text: 'Software is never finished' },
      { type: 'p', text: 'Launch isn\'t the end of the relationship. It\'s the start of the part that matters. Every fixed-scope project comes with 30 days of post-launch fixes, because that\'s when real usage surfaces the edge cases nobody wrote a test for.' },
      { type: 'p', text: 'After that, care and improvement runs from $4,500 a month, cancel with 30 days\' notice. It covers infrastructure as code in your own cloud account, uptime monitoring with a named person on call, and monthly patching, so the thing you paid to build doesn\'t quietly rot. Treating that as part of the product, not an afterthought tacked onto an invoice later, is the only version of this we think is honest.' },
      { type: 'h2', text: 'If this sounds like your problem' },
      { type: 'p', text: 'If you read the checklist above and recognized your own spreadsheet, start with a discovery week. It\'s $4,800, credited back in full if you continue, and it ends with a scope, an architecture sketch, and a number you can actually plan around. The named lead who scopes it with you is the same person who stays through launch.' },
    ],
  },
  {
    slug: 'you-probably-don-t-need-a-saas-development-agency',
    title: 'You Probably Don\'t Need a SaaS Development Agency',
    date: 'Aug 17, 2026',
    readingTime: '5 min read',
    category: 'Strategy',
    excerpt: 'Searching \'SaaS development agency\'? Most mid-sized companies actually need a custom internal tool, not a resale product. Here\'s the honest breakdown — cost, timeline, and ownership.',
    body: [
      { type: 'h2', text: '"SaaS Development Agency" Means Two Different Things' },
      { type: 'p', text: 'The phrase gets typed into a search bar by two completely different people, and almost nobody sorting the results bothers to split them apart.' },
      { type: 'p', text: 'One person is building a multi-tenant product, something sold to other companies on a subscription, with logins, billing, and a roadmap driven by a market. The other person runs operations somewhere. They\'ve outgrown the spreadsheet or the off-the-shelf tool taped to their process, and they want something built for their company to run on. Nobody else will ever log into it. Nobody\'s paying a monthly fee for a seat.' },
      { type: 'p', text: 'Both people search the same three words. They need different things, from different kinds of shop. We work with decision-makers in the second camp: the ones who\'ve outgrown spreadsheets or off-the-shelf tools and need something built around how they actually work, not how a market of buyers might.' },
      { type: 'p', text: 'Most mid-sized companies typing "SaaS development agency" into Google aren\'t trying to launch a product. They\'re trying to fix the spreadsheet everyone secretly runs the business on. We see this across logistics and freight, healthcare, field services, manufacturing, professional services, retail and e-commerce, fintech and insurance, and construction. A dispatcher tracking jobs in a shared sheet. A quoting process that lives in someone\'s email drafts. A finance team reconciling three systems by hand at month-end because none of them talk to each other.' },
      { type: 'p', text: 'None of that is a SaaS product. It\'s a custom web application, a portal, a dashboard, a workflow tool built for one company\'s process, not a thousand companies\' average process. That distinction should decide who you call next, before pricing or timelines come up.' },
      { type: 'h2', text: 'We Don\'t Build Multi-Tenant SaaS Products' },
      { type: 'p', text: 'If you\'re genuinely building a product to sell as SaaS to other companies, go find a specialist in that. Tenant isolation and billing infrastructure are a different discipline, and we don\'t do that work. Pretending otherwise to win the call would waste your time and ours.' },
      { type: 'p', text: 'What we build is custom web applications for internal use, the tools a company runs on, not the product it sells. We say this upfront because we turn down projects a specialist would do better, or that an existing off-the-shelf product already solves for a tenth of the price. You\'ll hear that in the first call, not the third, after you\'ve already sat through a proposal.' },
      { type: 'h2', text: 'Boring Technology, On Purpose' },
      { type: 'p', text: 'For the internal tools we build, the stack is deliberately unexciting: React, Node, Postgres. Not because it\'s all we know. Novelty is a cost paid every year after launch, and the client is the one who pays it.' },
      { type: 'p', text: 'Software is never finished. A workflow tool that ships and then gets ignored starts rotting the day it launches. That\'s why we treat ongoing care as part of the product, not an afterthought bolted on later. Our cloud, DevOps and care work covers infrastructure as code in your own cloud account, plus monthly dependency and security patching, from $4.5k a month. Boring technology is what makes that maintenance predictable instead of a rescue job three years in.' },
      { type: 'h2', text: 'Who Owns the Code and the Infrastructure' },
      { type: 'p', text: 'You own the code outright from day one. Not eventually, not after a buyout clause. The repositories live in your organisation\'s account, not ours. The infrastructure runs in your own cloud account, not one we control and rent back to you.' },
      { type: 'p', text: 'There\'s no handoff to a junior team either. The named lead who scopes the project stays through launch. The person who understood your dispatch process in week one is the same person answering questions in week fourteen.' },
      { type: 'p', text: 'And if the relationship ends, whether by plan or otherwise, you get a full handover: an architecture walkthrough, runbooks written in plain language, and two weeks of support. None of this is a negotiation at offboarding. It\'s decided before the first line of code gets written.' },
      { type: 'h2', text: 'How the Estimate Actually Gets Built' },
      { type: 'p', text: 'We don\'t quote off a first call. We don\'t know enough yet to make the number hold.' },
      { type: 'p', text: 'Instead there\'s a discovery week, flat $4,800, credited back in full if you continue with us. It ends in a written scope, an architecture sketch, and a fixed estimate, not a range with an asterisk. Estimates should come after discovery, not before. That\'s the only reason the number holds once work starts.' },
      { type: 'p', text: 'If scope changes mid-project, and it sometimes does once you see the thing working, that gets priced before the work starts. Not billed after the fact as a surprise on an invoice. It\'s a small thing to promise and an easy one to break, which is exactly why we write it down.' },
      { type: 'h2', text: 'What a Custom Web Application Actually Costs' },
      { type: 'p', text: 'For the internal tools most readers here actually need, portals, dashboards, workflow tools, pricing starts at $45k, with a typical timeline of 10 to 20 weeks. That covers role-based access, audit trails and approvals, reporting built for your finance team, migration of your existing data, and training and documentation so the tool doesn\'t die the day your one power user goes on vacation.' },
      { type: 'p', text: 'Billing runs on milestones, typically 30% at kickoff, then the remainder as phases are accepted, so you\'re never paying in full for work you haven\'t seen. Every project includes 30 days of post-launch fixes. Invoices are Net 14.' },
      { type: 'p', text: 'You can find the fuller breakdown on the custom web applications page. Short version: it\'s a real number, attached to a real scope, before any work begins.' },
      { type: 'h2', text: 'The Honest Disqualifier' },
      { type: 'p', text: 'If an off-the-shelf tool already covers what you need, or the workflow isn\'t complex enough to justify a custom build, that should come out in the first conversation, not after a contract\'s signed and a deposit\'s cleared. We turn down projects an existing off-the-shelf product already solves for a tenth of the price. Building it anyway wouldn\'t make us right, just paid.' },
      { type: 'p', text: 'If you\'re not sure which camp you\'re in, that\'s a fine reason to start small. Discovery week is a bounded, refundable first step. One paid week, ending in a document you can take anywhere.' },
    ],
  },
  {
    slug: 'you-searched-web-development-company-you-probably-need-somet',
    title: 'You Searched "Web Development Company." You Probably Need Something Else.',
    date: 'Aug 14, 2026',
    readingTime: '5 min read',
    category: 'Engineering',
    excerpt: 'Most \'web development company\' results are marketing agencies. Here\'s how to tell if you need one, or a custom software studio, plus real pricing and terms.',
    body: [
      { type: 'p', text: 'Type "web development company" into a search bar and you\'ll get a wall of agencies talking about SEO, brand, conversion rate, and CMS platforms. That\'s not wrong. It\'s just answering a different question than the one most people typing that phrase actually have.' },
      { type: 'p', text: 'Most of the pages ranking for this term assume you need a website. Something visitors see. Something that has to load fast, rank well, convert. If that\'s you, fine. But a lot of the people searching this phrase aren\'t trying to fix a homepage. They\'re trying to fix the dispatch board that three people update by hand. The quoting process that lives in someone\'s inbox. The intake form that gets re-typed into a second system every morning. That\'s not a marketing problem. It\'s an engineering problem, and it needs a different vendor.' },
      { type: 'p', text: 'We build portals, dashboards, workflow tools, CRMs, mobile apps for field crews, and AI automation that reads documents nobody wants to read manually. We don\'t build brochure sites. If that\'s what you need, we\'re the wrong call to make.' },
      { type: 'h2', text: 'Two different problems, wearing the same search term' },
      { type: 'p', text: '"Our website doesn\'t look right, doesn\'t rank, or doesn\'t convert visitors into leads." That\'s a web agency problem. Go talk to one of the design and SEO shops that dominate the search results. They\'re good at that, and it\'s a real specialty.' },
      { type: 'p', text: '"We run the business on a spreadsheet, three logins, and someone\'s memory." That\'s the spreadsheet everyone secretly runs the business on. That one\'s ours, or one like it.' },
      { type: 'p', text: 'We see the second version constantly in logistics and freight, healthcare, field services, manufacturing, professional services, retail and e-commerce, fintech and insurance, and construction. Industries where the operational tooling never caught up to the size of the business. Nobody built you a homepage problem. They built you a "the person who understood the dispatch board just quit" problem.' },
      { type: 'h2', text: 'What a custom web application actually means here' },
      { type: 'p', text: 'A portal, a dashboard, or a workflow tool. Software your team logs into every day to do their job, not something a customer stumbles onto from a Google search.' },
      { type: 'p', text: 'Role-based access, so the warehouse crew doesn\'t see what finance sees. Audit trails and approvals, so you can answer "who changed this and when" without guessing. Reporting built for finance teams, not just an activity feed. Migration of your existing data out of whatever you\'re running now, so you\'re not starting from zero. Training and documentation, so the software outlives whoever happened to be in the room when it launched.' },
      { type: 'p', text: 'None of that shows up on a page selling you a homepage. More on the custom web applications page if that\'s closer to what you\'re dealing with.' },
      { type: 'h2', text: 'The stack, so you can sanity-check a quote' },
      { type: 'p', text: 'React, Node, and Postgres. Nothing exotic. Typical timeline runs 10 to 20 weeks depending on scope, and fixed-scope custom web applications start from $45k.' },
      { type: 'p', text: 'We pick boring technology on purpose. Novelty is a cost paid every year after launch, not just on delivery day, and it\'s usually your team paying it after we\'ve moved on to the next project. That\'s the trade we\'re making on your behalf.' },
      { type: 'h2', text: 'How the estimate gets locked before anyone touches code' },
      { type: 'p', text: 'Most of what passes for a quote in this industry is a number someone guessed on a sales call. We run a discovery week instead: a flat $4,800, credited back in full if you continue with us. It ends in a written scope, an architecture sketch, and a fixed estimate. Not a ballpark.' },
      { type: 'p', text: 'The number holds because it comes after discovery, not before. We\'re not pricing a phone call. We\'re pricing a document we\'ve already written together. If something changes mid-project, and things do, that change gets priced before the work starts, not folded into an invoice after the fact.' },
      { type: 'h2', text: 'When the honest answer is: don\'t hire us' },
      { type: 'p', text: 'Some discovery weeks end with us telling you not to build anything. We turn down projects a specialist would do better, a pure design agency, a vertical SaaS company, whoever\'s actually built for the problem in front of you. We also turn down projects that an existing off-the-shelf product already solves for a tenth of the price. Custom software is the right answer when off-the-shelf doesn\'t fit, not by default.' },
      { type: 'p', text: 'You\'ll hear that in the first call, not the third.' },
      { type: 'h2', text: 'Who owns the code and the servers it runs on' },
      { type: 'p', text: 'You own the code outright from day one. Not a license, not a build we host and rent back to you. Ownership. The repositories live in your organization\'s account, not ours. The infrastructure runs in your cloud account, not a shared environment we control.' },
      { type: 'p', text: 'That matters because plenty of vendors quietly keep the keys. If the relationship ends, you get a full handover: an architecture walkthrough, runbooks explaining how the thing actually works, and two weeks of support to answer the questions that come up once we\'re not in the room. No dependency by design.' },
      { type: 'h2', text: 'What billing looks like once you\'re past discovery' },
      { type: 'p', text: 'A fixed-scope project bills on milestones: 30% at kickoff, then the rest as each phase is accepted. That includes 30 days of post-launch fixes, so you\'re not immediately paying for bugs that show up the first week real users touch the thing. Billing terms are Net 14.' },
      { type: 'p', text: 'We don\'t take equity and we don\'t offer deferred payment. No. It muddies the relationship, and it has never once made the software better. Cash, milestones, clear scope. Details on how a fixed-scope engagement is structured live on the pricing page, if you want the specifics before you call anyone.' },
    ],
  },
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
