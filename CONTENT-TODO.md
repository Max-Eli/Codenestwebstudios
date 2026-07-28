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

## 2. Placeholder numbers that ARE live on the site

These render right now with the mockup's figures. Search `src/content/site.ts`
for `PLACEHOLDER` to find every one.

- `services[].price` — six figures, `$22k` to `$60k`, shown on `/services`
- `engagements[].price` — `from $28k` / `from $18k` / `from $4.5k`, shown on
  `/engagements` and the homepage
- `discovery.price` — `$4,800` for the discovery week, on `/engagements`
- `site.phone` — empty; set it and it appears in the contact block, leave it
  and every phone reference stays hidden

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
