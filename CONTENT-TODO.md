# Content to replace before launch

Everything listed here lives in **`src/content/site.ts`**. No other file needs
editing — sections appear, hide and repopulate automatically from that one file.

## 1. Sections currently hidden (they need real content to appear)

These were cut rather than shipped with the mockup's invented people and
clients. Publishing fabricated testimonials carries civil penalties under the
FTC's Rule on Consumer Reviews and Testimonials (16 CFR Part 465, in force
since October 2024), so none of it was carried over.

| Export | What it drives | Currently |
|---|---|---|
| `caseStudies` | Homepage scroll-pinned carousel, `/work` grid, `/work/[slug]` pages | empty → both show an "not published yet" panel |
| `testimonials` | Homepage "What clients say" | empty → section hidden |
| `team` | Homepage + `/about` team grids | empty → section hidden |
| `insights` | `/insights` list, `/insights/[slug]`, homepage sidebar | empty → list shows empty state, FAQ goes full-width |
| `stats` | Homepage four-stat counter band | empty → band hidden |
| `about.stats` | `/about` four-stat band | empty → band hidden |
| `about.locations` | `/about` office cards | empty → section hidden |

The mockup's original values are preserved in comments next to each export, so
restoring the layout is a copy-paste once you have real equivalents.

## 2. Pricing is hidden site-wide

`showPricing = false` in `src/content/site.ts`. No figure of yours appears
anywhere public. The numbers are still in the file, so flipping the flag to
`true` restores all of it — but note the surrounding copy switches too:

| Where | With pricing off | With pricing on |
|---|---|---|
| `/services` price row | "Quoted after discovery" | `From $45k` etc. |
| Engagement cards | "Fixed price per phase" / "Monthly, rolling terms" / "Monthly, cancel anytime" | `from $28k` / `from $18k` / `from $4.5k` |
| `/engagements` headline | "A fixed number you can take to your board." | "Prices you can take to your board." |
| `/engagements` lede | argues *against* rate cards | argues *for* published numbers |
| Discovery week | "One fixed fee." | "A flat $4,800." |
| Contact form dropdown | asks what you need (no money) | asks budget range (`$25k – $60k` …) |

Before flipping it on, replace the figures — they are the mockup's, sized for a
40-person studio. Search for `PLACEHOLDER`.

**Still visible:** the sample deal values inside the CRM mockup on `/services`
(`$4,200`, `$18,900` …) and the `$48k` KPI in the dashboard mockup. Those are a
fictional customer's records inside a depicted app screen, not your rates. Say
the word if you'd rather they were abstracted to bars.

`site.phone` is empty — set it and it appears in the contact block; leave it and
every phone reference stays hidden.

## 2b. Work and Insights are hidden from navigation

Because `caseStudies` and `insights` are empty, `hasWork` / `hasInsights` are
false, which removes those items from the header, the footer, and every
secondary CTA (the hero button becomes "See what we build" → `/services`). The
routes stay live so external links don't 404, but they're `noindex` and dropped
from the sitemap.

Both come back automatically the moment either array gets an entry — there is
no switch to remember.

If client consent is the blocker, an anonymised case study usually isn't: "a
dispatch CRM for a 90-van plumbing operation" identifies nobody, and most NDAs
permit describing work without naming the client. Set `client` to the sector
instead of a company name.

## 3. Claims that were softened

Three statements in the mockup asserted things that would need to be true and
defensible. They were rewritten to make the same point without the assertion:

- **"9 in 10 of our projects land inside the quoted range"** → now explains
  *why* estimates hold (they come after discovery) without the statistic.
- **"can meet SOC 2 and HIPAA controls"** → now says NDAs and vendor security
  questionnaires only. Put the original back if you can actually meet those.
- **"a named lead with at least eight years of production experience"** and
  **"twice a year we turn down projects"** → both kept as policy, without the
  specific numbers.

Also removed from the hero: `120+ projects shipped`, `40 engineers, designers &
PMs`, `Austin · Lisbon`, `NDA & SOC 2 friendly`. `site.heroFacts` now holds four
non-quantified replacements — edit or extend that array.

## 4. Images

Every image is a hatched `[ placeholder ]` block, matching the mockup. To swap
one in, drop a file in `public/` and set the `image` field:

- `caseStudies[].image` — card and case-study hero
- `team[].image` — portraits
- `services[].placeholderImage` — the label text inside the hatch, until real
  screenshots exist

There is no Open Graph share image yet. Add `public/og.png` (1200×630) and
reference it in `openGraph.images` in `src/app/layout.tsx`.

## 5. Environment

`RESEND_API_KEY` must be set for the contact form to send. Optional overrides:
`CONTACT_TO_EMAIL` (defaults to codenestwebstudios@gmail.com) and
`CONTACT_FROM_EMAIL`.
