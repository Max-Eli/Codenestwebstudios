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
