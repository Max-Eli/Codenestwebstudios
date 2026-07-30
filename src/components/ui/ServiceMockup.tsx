/**
 * Product mockups for the six service sections.
 *
 * Drawn as inline SVG rather than raster images: they stay crisp at any size,
 * read the live design tokens (so they can never drift from the palette), add
 * no network requests, and contain no fake body text — text runs are abstracted
 * to bars, and only real, short labels are rendered as type.
 *
 * All six share a 800×600 viewBox to match the 4/3 slots on /services.
 */

const MONO = "var(--font-jetbrains-mono), ui-monospace, monospace";
const SURFACE = "#0a0b0e";
const PANEL = "#101319";
const PANEL_2 = "#15191f";
const LINE = "rgba(255,255,255,0.09)";
const LINE_STRONG = "rgba(255,255,255,0.16)";
const BAR = "rgba(255,255,255,0.14)";
const BAR_DIM = "rgba(255,255,255,0.08)";
const BAR_BRIGHT = "rgba(255,255,255,0.32)";

export type MockupVariant =
  | "web-apps"
  | "mobile"
  | "crm"
  | "ai"
  | "integrations"
  | "cloud"
  | "seo";

const TITLES: Record<MockupVariant, string> = {
  "web-apps": "Illustration of a custom web application dashboard",
  mobile: "Illustration of a field-service mobile app on two phones",
  crm: "Illustration of a CRM deal pipeline board",
  ai: "Illustration of a document extraction and review pipeline",
  integrations: "Illustration of systems syncing through a central hub",
  cloud: "Illustration of an uptime and deployment monitoring dashboard",
  seo: "Illustration of a blog post moving through research, draft and critique before publishing",
};

/** Horizontal bar standing in for a run of text. */
function Bar({
  x,
  y,
  w,
  h = 6,
  fill = BAR,
  r = 1,
}: {
  x: number;
  y: number;
  w: number;
  h?: number;
  fill?: string;
  r?: number;
}) {
  return <rect x={x} y={y} width={w} height={h} rx={r} fill={fill} />;
}

function Label({
  x,
  y,
  children,
  fill = "rgba(255,255,255,0.42)",
  size = 11,
  anchor = "start",
}: {
  x: number;
  y: number;
  children: string;
  fill?: string;
  size?: number;
  anchor?: "start" | "middle" | "end";
}) {
  return (
    <text
      x={x}
      y={y}
      fill={fill}
      fontSize={size}
      fontFamily={MONO}
      letterSpacing="0.08em"
      textAnchor={anchor}
    >
      {children}
    </text>
  );
}

/* ------------------------------------------------------------------ 01 */
function WebApps() {
  const nav = ["Overview", "Jobs", "Customers", "Invoices", "Reports", "Settings"];
  return (
    <>
      <rect x="40" y="40" width="720" height="520" rx="3" fill={SURFACE} stroke={LINE_STRONG} />

      {/* Title bar */}
      <path d="M40 43a3 3 0 0 1 3-3h714a3 3 0 0 1 3 3v41H40Z" fill={PANEL} />
      <line x1="40" y1="84" x2="760" y2="84" stroke={LINE_STRONG} />
      {[62, 80, 98].map((cx) => (
        <circle key={cx} cx={cx} cy="62" r="4" fill="rgba(255,255,255,0.18)" />
      ))}
      <rect x="130" y="51" width="200" height="22" rx="2" fill={SURFACE} stroke={LINE} />
      <Bar x={142} y={59} w={70} h={6} fill={BAR_DIM} />
      <rect x="690" y="51" width="54" height="22" rx="2" fill="var(--accent)" opacity="0.9" />

      {/* Sidebar */}
      <line x1="196" y1="84" x2="196" y2="560" stroke={LINE_STRONG} />
      {nav.map((item, i) => {
        const y = 108 + i * 34;
        const active = i === 1;
        return (
          <g key={item}>
            {active && <rect x="41" y={y - 10} width="155" height="28" fill="rgba(255,255,255,0.04)" />}
            {active && <rect x="41" y={y - 10} width="2" height="28" fill="var(--accent)" />}
            <rect
              x="60"
              y={y - 3}
              width="10"
              height="10"
              rx="1"
              fill={active ? "var(--accent)" : "rgba(255,255,255,0.2)"}
            />
            <Bar x={82} y={y - 1} w={i % 2 ? 62 : 78} fill={active ? BAR_BRIGHT : BAR_DIM} />
          </g>
        );
      })}

      {/* KPI row */}
      {[0, 1, 2].map((i) => {
        const x = 220 + i * 178;
        return (
          <g key={i}>
            <rect x={x} y="108" width="158" height="76" rx="2" fill={PANEL} stroke={LINE} />
            <Bar x={x + 16} y={126} w={54} h={5} fill={BAR_DIM} />
            <text
              x={x + 16}
              y={162}
              fill={i === 0 ? "var(--accent)" : "rgba(255,255,255,0.75)"}
              fontSize="24"
              fontFamily={MONO}
              letterSpacing="-0.02em"
            >
              {["1,284", "96.2%", "$48k"][i]}
            </text>
          </g>
        );
      })}

      {/* Area chart */}
      <rect x="220" y="200" width="336" height="184" rx="2" fill={PANEL} stroke={LINE} />
      <Label x={236} y={222}>
        REVENUE / 30D
      </Label>
      {[260, 292, 324, 356].map((y) => (
        <line key={y} x1="236" y1={y} x2="540" y2={y} stroke="rgba(255,255,255,0.05)" />
      ))}
      <defs>
        <linearGradient id="mk-area" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.28" />
          <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path
        d="M236 344 L272 322 L308 330 L344 296 L380 306 L416 268 L452 278 L488 246 L524 236 L540 240 L540 368 L236 368 Z"
        fill="url(#mk-area)"
      />
      <path
        d="M236 344 L272 322 L308 330 L344 296 L380 306 L416 268 L452 278 L488 246 L524 236 L540 240"
        fill="none"
        stroke="var(--accent)"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
      <circle cx="524" cy="236" r="3.5" fill="var(--accent)" />

      {/* Side panel */}
      <rect x="572" y="200" width="164" height="184" rx="2" fill={PANEL} stroke={LINE} />
      <Label x={588} y={222}>
        BY REGION
      </Label>
      {[[86, 0.9], [62, 0.55], [44, 0.4], [30, 0.28]].map(([w, o], i) => (
        <g key={i}>
          <Bar x={588} y={244 + i * 30} w={40} h={5} fill={BAR_DIM} />
          <rect
            x={588}
            y={256 + i * 30}
            width={w as number}
            height="7"
            rx="1"
            fill="var(--accent)"
            opacity={o as number}
          />
        </g>
      ))}

      {/* Table */}
      <rect x="220" y="400" width="516" height="140" rx="2" fill={PANEL} stroke={LINE} />
      <line x1="220" y1="430" x2="736" y2="430" stroke={LINE} />
      {["JOB", "CLIENT", "STATUS", "VALUE"].map((h, i) => (
        <Label key={h} x={238 + i * 128} y={421} size={9.5}>
          {h}
        </Label>
      ))}
      {[0, 1, 2, 3].map((r) => (
        <g key={r}>
          {r > 0 && <line x1="220" y1={430 + r * 28} x2="736" y2={430 + r * 28} stroke="rgba(255,255,255,0.05)" />}
          <Bar x={238} y={445 + r * 28} w={52} fill={BAR} />
          <Bar x={366} y={445 + r * 28} w={72} fill={BAR_DIM} />
          <rect
            x={494}
            y={442 + r * 28}
            width={r === 0 ? 46 : 38}
            height="13"
            rx="1"
            fill={r === 0 ? "var(--accent)" : "rgba(255,255,255,0.1)"}
            opacity={r === 0 ? 0.85 : 1}
          />
          <Bar x={622} y={445 + r * 28} w={44} fill={BAR_BRIGHT} />
        </g>
      ))}
    </>
  );
}

/* ------------------------------------------------------------------ 02 */
function Phone({
  x,
  y,
  w,
  h,
  children,
  dim = false,
}: {
  x: number;
  y: number;
  w: number;
  h: number;
  children: React.ReactNode;
  dim?: boolean;
}) {
  return (
    <g opacity={dim ? 0.55 : 1}>
      <rect x={x} y={y} width={w} height={h} rx="22" fill={PANEL} stroke={LINE_STRONG} strokeWidth="1.5" />
      <rect x={x + 7} y={y + 7} width={w - 14} height={h - 14} rx="16" fill={SURFACE} stroke={LINE} />
      <rect x={x + w / 2 - 22} y={y + 13} width="44" height="5" rx="2.5" fill="rgba(255,255,255,0.16)" />
      {children}
    </g>
  );
}

function Mobile() {
  return (
    <>
      {/* Back phone — job list */}
      <Phone x={92} y={96} w={232} h={430} dim>
        <Bar x={116} y={140} w={78} h={9} fill={BAR_BRIGHT} />
        <Label x={116} y={168} size={10}>
          TODAY · 6 JOBS
        </Label>
        {[0, 1, 2, 3, 4].map((i) => {
          const y = 190 + i * 60;
          return (
            <g key={i}>
              <rect x="116" y={y} width="184" height="48" rx="2" fill={PANEL_2} stroke={LINE} />
              <circle cx="132" cy={y + 16} r="4" fill={i < 2 ? "var(--accent)" : "rgba(255,255,255,0.22)"} />
              <Bar x={144} y={y + 12} w={i % 2 ? 92 : 116} h={7} />
              <Bar x={144} y={y + 28} w={64} h={5} fill={BAR_DIM} />
            </g>
          );
        })}
      </Phone>

      {/* Front phone — capture screen */}
      <Phone x={356} y={60} w={264} h={490}>
        <path d="M368 67h240v46H368z" fill={PANEL} />
        <Bar x={382} y={124} w={96} h={10} fill={BAR_BRIGHT} />
        <Label x={382} y={152} size={10}>
          JOB #4821 · CAPTURE
        </Label>

        {/* Photo capture tile */}
        <rect x="382" y="168" width="212" height="122" rx="2" fill={PANEL_2} stroke={LINE} />
        <circle cx="488" cy="229" r="21" fill="none" stroke="var(--accent)" strokeWidth="1.5" />
        <circle cx="488" cy="229" r="8" fill="var(--accent)" opacity="0.75" />
        <path d="M400 186h14M400 186v14" stroke={LINE_STRONG} strokeWidth="1.5" />
        <path d="M576 272h-14M576 272v-14" stroke={LINE_STRONG} strokeWidth="1.5" />

        {/* Signature */}
        <Label x={382} y={318} size={10}>
          SIGNATURE
        </Label>
        <rect x="382" y="328" width="212" height="72" rx="2" fill={PANEL_2} stroke={LINE} />
        <path
          d="M400 380c14-30 22 4 32-12s16 18 28-6 20 14 34-8 22 10 34-4"
          fill="none"
          stroke="var(--accent)"
          strokeWidth="1.75"
          strokeLinecap="round"
        />
        <line x1="398" y1="390" x2="578" y2="390" stroke={LINE} />

        {/* Primary action */}
        <rect x="382" y="418" width="212" height="40" rx="2" fill="var(--accent)" />
        <rect x="452" y="435" width="72" height="7" rx="1" fill={SURFACE} opacity="0.85" />
      </Phone>

      {/* Offline sync chip */}
      <g>
        <rect x="560" y="452" width="176" height="52" rx="3" fill={PANEL} stroke="var(--accent)" strokeOpacity="0.4" />
        <circle cx="584" cy="478" r="5" fill="var(--accent)" />
        <Label x={600} y={474} size={10} fill="rgba(255,255,255,0.7)">
          OFFLINE
        </Label>
        <Label x={600} y={490} size={9.5}>
          3 QUEUED · WILL SYNC
        </Label>
      </g>
    </>
  );
}

/* ------------------------------------------------------------------ 03 */
function Crm() {
  // Values vary per column as well as per row — a repeated ladder down every
  // column is the tell that gives a fake screenshot away.
  const cols = [
    { name: "NEW", n: "8", accent: false, values: ["$4,200", "$9,800", "$2,150"] },
    { name: "QUOTED", n: "5", accent: true, values: ["$18,900", "$6,400"] },
    { name: "SCHEDULED", n: "4", accent: false, values: ["$12,750", "$3,900", "$27,300"] },
    { name: "WON", n: "12", accent: false, values: ["$8,600", "$41,200"] },
  ];
  return (
    <>
      <rect x="40" y="40" width="720" height="520" rx="3" fill={SURFACE} stroke={LINE_STRONG} />
      <path d="M40 43a3 3 0 0 1 3-3h714a3 3 0 0 1 3 3v37H40Z" fill={PANEL} />
      <line x1="40" y1="80" x2="760" y2="80" stroke={LINE_STRONG} />
      <Bar x={62} y={56} w={84} h={8} fill={BAR_BRIGHT} />
      <rect x="668" y="49" width="76" height="22" rx="2" fill="var(--accent)" opacity="0.9" />

      {cols.map((col, ci) => {
        const x = 62 + ci * 172;
        return (
          <g key={col.name}>
            <Label x={x} y={112} size={10} fill={col.accent ? "var(--accent)" : "rgba(255,255,255,0.42)"}>
              {col.name}
            </Label>
            <rect x={x + col.name.length * 7.4 + 8} y="102" width="26" height="14" rx="7" fill="rgba(255,255,255,0.08)" />
            <text
              x={x + col.name.length * 7.4 + 21}
              y={112}
              fill="rgba(255,255,255,0.5)"
              fontSize="9.5"
              fontFamily={MONO}
              textAnchor="middle"
            >
              {col.n}
            </text>
            <line x1={x} y1="126" x2={x + 148} y2="126" stroke={col.accent ? "var(--accent)" : LINE_STRONG} strokeOpacity={col.accent ? 0.6 : 1} />

            {col.values.map((value, i) => {
              const y = 144 + i * 104;
              return (
                <g key={value}>
                  <rect x={x} y={y} width="148" height="88" rx="2" fill={PANEL} stroke={LINE} />
                  <Bar x={x + 14} y={y + 16} w={[106, 82, 94][(ci + i) % 3]} h={7} fill={BAR} />
                  <Bar x={x + 14} y={y + 32} w={[62, 74, 52][(ci + i) % 3]} h={5} fill={BAR_DIM} />
                  <line x1={x + 14} y1={y + 52} x2={x + 134} y2={y + 52} stroke="rgba(255,255,255,0.06)" />
                  <text
                    x={x + 14}
                    y={y + 72}
                    fill={col.accent ? "var(--accent)" : "rgba(255,255,255,0.6)"}
                    fontSize="13"
                    fontFamily={MONO}
                  >
                    {value}
                  </text>
                  <circle cx={x + 124} cy={y + 68} r="8" fill="rgba(255,255,255,0.08)" stroke={LINE} />
                </g>
              );
            })}
          </g>
        );
      })}

      {/* Card mid-drag */}
      <g transform="rotate(-3 470 400)">
        <rect x="396" y="356" width="148" height="88" rx="2" fill={PANEL_2} stroke="var(--accent)" strokeDasharray="4 3" />
        <Bar x={410} y={372} w={98} h={7} fill={BAR_BRIGHT} />
        <Bar x={410} y={388} w={58} h={5} fill={BAR_DIM} />
        <text x="410" y="428" fill="var(--accent)" fontSize="13" fontFamily={MONO}>
          $12,600
        </text>
      </g>
    </>
  );
}

/* ------------------------------------------------------------------ 04 */
function Ai() {
  const fields = [
    { label: "INVOICE NO", w: 96, conf: 0.98 },
    { label: "SUPPLIER", w: 124, conf: 0.96 },
    { label: "LINE TOTAL", w: 78, conf: 0.99 },
    { label: "TAX CODE", w: 64, conf: 0.71 },
  ];
  return (
    <>
      {/* Incoming documents */}
      <g>
        <Label x={64} y={118} size={10}>
          INBOX
        </Label>
        {[0, 1, 2].map((i) => (
          <rect
            key={i}
            x={64 + i * 8}
            y={140 + i * 10}
            width="132"
            height="168"
            rx="2"
            fill={i === 2 ? PANEL : SURFACE}
            stroke={i === 2 ? LINE_STRONG : LINE}
          />
        ))}
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <Bar key={i} x={96} y={182 + i * 20} w={i === 5 ? 48 : i % 2 ? 84 : 68} h={5} fill={BAR_DIM} />
        ))}
        <rect x="96" y="158" width="42" height="10" rx="1" fill="rgba(255,255,255,0.2)" />
      </g>

      {/* Connector 1 */}
      <path d="M224 224 H288" stroke={LINE_STRONG} strokeWidth="1.5" />
      <path d="M282 219l7 5-7 5z" fill="var(--accent)" />

      {/* Extraction node */}
      <rect x="296" y="150" width="196" height="148" rx="3" fill={PANEL} stroke="var(--accent)" strokeOpacity="0.45" />
      <line x1="296" y1="186" x2="492" y2="186" stroke={LINE} />
      <circle cx="318" cy="168" r="5" fill="var(--accent)" />
      <Label x={332} y={172} size={10} fill="rgba(255,255,255,0.72)">
        EXTRACT
      </Label>
      {[0, 1, 2].map((i) => (
        <g key={i}>
          <rect x="316" y={204 + i * 30} width="156" height="20" rx="2" fill={PANEL_2} stroke={LINE} />
          <rect x="324" y={211 + i * 30} width="7" height="7" rx="1" fill="var(--accent)" opacity={0.8 - i * 0.2} />
          <Bar x={340} y={210.5 + i * 30} w={i === 1 ? 96 : 74} h={5} fill={BAR_DIM} />
        </g>
      ))}

      {/* Connector 2 */}
      <path d="M492 224 H556" stroke={LINE_STRONG} strokeWidth="1.5" />
      <path d="M550 219l7 5-7 5z" fill="var(--accent)" />

      {/* Extracted fields with confidence */}
      <rect x="564" y="122" width="180" height="204" rx="3" fill={PANEL} stroke={LINE} />
      <Label x={580} y={148} size={10}>
        FIELDS
      </Label>
      {fields.map((f, i) => {
        const y = 168 + i * 40;
        const low = f.conf < 0.8;
        return (
          <g key={f.label}>
            <Label x={580} y={y} size={8.5} fill="rgba(255,255,255,0.34)">
              {f.label}
            </Label>
            <Bar x={580} y={y + 8} w={f.w} h={6} fill={BAR_BRIGHT} />
            <rect x={580} y={y + 20} width="148" height="3" rx="1.5" fill="rgba(255,255,255,0.07)" />
            <rect
              x={580}
              y={y + 20}
              width={148 * f.conf}
              height="3"
              rx="1.5"
              fill={low ? "#e0a35f" : "var(--accent)"}
            />
          </g>
        );
      })}

      {/* Human review branch */}
      <path d="M654 326 V378 H492" stroke={LINE_STRONG} strokeWidth="1.5" strokeDasharray="4 4" fill="none" />
      <path d="M498 373l-7 5 7 5z" fill="#e0a35f" />
      <rect x="296" y="356" width="196" height="46" rx="3" fill={PANEL} stroke="#e0a35f" strokeOpacity="0.45" />
      <circle cx="318" cy="379" r="5" fill="#e0a35f" />
      <Label x={332} y={375} size={9.5} fill="rgba(255,255,255,0.7)">
        HUMAN REVIEW
      </Label>
      <Label x={332} y={391} size={9} fill="rgba(255,255,255,0.36)">
        1 FIELD BELOW 80%
      </Label>

      {/* Pipeline stages.
          Deliberately not a throughput/accuracy stat row: standing outside any
          app frame, numbers here read as a claim about the business rather than
          sample data inside a depicted screen. */}
      <line x1="64" y1="452" x2="744" y2="452" stroke={LINE} />
      <line x1="88" y1="502" x2="712" y2="502" stroke={LINE_STRONG} />
      {[
        { l: "INGEST", c: "var(--accent)" },
        { l: "EXTRACT", c: "var(--accent)" },
        { l: "VALIDATE", c: "var(--accent)" },
        { l: "REVIEW", c: "#e0a35f" },
        { l: "SYNC", c: "rgba(255,255,255,0.28)" },
      ].map((s, i) => {
        const x = 88 + i * 156;
        return (
          <g key={s.l}>
            <circle cx={x} cy="502" r="9" fill={SURFACE} stroke={s.c} strokeWidth="1.5" />
            <circle cx={x} cy="502" r="3.5" fill={s.c} />
            <Label x={x} y={534} size={9.5} anchor="middle" fill="rgba(255,255,255,0.44)">
              {s.l}
            </Label>
          </g>
        );
      })}
    </>
  );
}

/* ------------------------------------------------------------------ 05 */
function Integrations() {
  const nodes = [
    { label: "ERP", x: 132, y: 132 },
    { label: "POS", x: 132, y: 468 },
    { label: "ACCOUNTING", x: 668, y: 132 },
    { label: "WAREHOUSE", x: 668, y: 468 },
    { label: "WEB SHOP", x: 668, y: 300 },
    { label: "CRM", x: 132, y: 300 },
  ];
  return (
    <>
      {/* Connectors */}
      {nodes.map((n) => (
        <path
          key={n.label}
          d={`M${n.x} ${n.y} Q ${(n.x + 400) / 2} ${(n.y + 300) / 2} 400 300`}
          fill="none"
          stroke={n.label === "WAREHOUSE" ? "#e0a35f" : "var(--accent)"}
          strokeOpacity={n.label === "WAREHOUSE" ? 0.5 : 0.3}
          strokeWidth="1.5"
          strokeDasharray={n.label === "WAREHOUSE" ? "5 4" : undefined}
        />
      ))}

      {/* Satellite systems */}
      {nodes.map((n) => {
        const retry = n.label === "WAREHOUSE";
        return (
          <g key={n.label}>
            <rect x={n.x - 76} y={n.y - 30} width="152" height="60" rx="3" fill={PANEL} stroke={retry ? "#e0a35f" : LINE_STRONG} strokeOpacity={retry ? 0.5 : 1} />
            <circle cx={n.x - 58} cy={n.y - 8} r="4.5" fill={retry ? "#e0a35f" : "var(--accent)"} />
            <Label x={n.x - 46} y={n.y - 4} size={9.5} fill="rgba(255,255,255,0.72)">
              {n.label}
            </Label>
            <Bar x={n.x - 58} y={n.y + 8} w={retry ? 64 : 46} h={5} fill={BAR_DIM} />
            {retry && (
              <Label x={n.x + 14} y={n.y + 14} size={8.5} fill="#e0a35f">
                RETRY 2/5
              </Label>
            )}
          </g>
        );
      })}

      {/* Central hub */}
      <circle cx="400" cy="300" r="86" fill="var(--accent)" opacity="0.05" />
      <circle cx="400" cy="300" r="86" fill="none" stroke="var(--accent)" strokeOpacity="0.22" />
      <rect x="332" y="256" width="136" height="88" rx="3" fill={PANEL_2} stroke="var(--accent)" strokeOpacity="0.55" />
      <rect
        x="400"
        y="272"
        width="19"
        height="19"
        rx="1"
        transform="rotate(45 400 272)"
        fill="var(--accent)"
      />
      <Label x={400} y={318} size={10} anchor="middle" fill="rgba(255,255,255,0.72)">
        SYNC HUB
      </Label>
      <Label x={400} y={334} size={9} anchor="middle">
        EVERY 5 MIN
      </Label>

      {/* Footer status */}
      <line x1="64" y1="546" x2="736" y2="546" stroke={LINE} />
      <circle cx="72" cy="572" r="4" fill="var(--accent)" />
      <Label x={86} y={576} size={9.5}>
        LAST FULL SYNC 00:04:12 AGO
      </Label>
      <Label x={736} y={576} size={9.5} anchor="end">
        5 OF 6 HEALTHY
      </Label>
    </>
  );
}

/* ------------------------------------------------------------------ 06 */
function Cloud() {
  const tiles = [
    { v: "99.98%", l: "UPTIME / 90D", accent: true },
    { v: "184ms", l: "P95 LATENCY", accent: false },
    { v: "0", l: "OPEN INCIDENTS", accent: false },
    { v: "37", l: "DEPLOYS / MO", accent: false },
  ];
  const log = [
    { t: "14:02", m: "Deploy v2.8.1 · passed", ok: true },
    { t: "11:47", m: "Dependency patch · 6 updated", ok: true },
    { t: "09:15", m: "Latency spike · auto-recovered", ok: false },
    { t: "02:30", m: "Nightly backup · verified", ok: true },
  ];
  return (
    <>
      <rect x="40" y="40" width="720" height="520" rx="3" fill={SURFACE} stroke={LINE_STRONG} />

      {/* Tiles */}
      {tiles.map((t, i) => {
        const x = 64 + i * 174;
        return (
          <g key={t.l}>
            <rect x={x} y="72" width="154" height="82" rx="2" fill={PANEL} stroke={LINE} />
            <text
              x={x + 16}
              y={118}
              fill={t.accent ? "var(--accent)" : "rgba(255,255,255,0.78)"}
              fontSize="23"
              fontFamily={MONO}
              letterSpacing="-0.02em"
            >
              {t.v}
            </text>
            <Label x={x + 16} y={138} size={9}>
              {t.l}
            </Label>
          </g>
        );
      })}

      {/* Latency chart with spike */}
      <rect x="64" y="176" width="672" height="196" rx="2" fill={PANEL} stroke={LINE} />
      <Label x={80} y={200} size={10}>
        RESPONSE TIME / 24H
      </Label>
      <Label x={720} y={200} size={9} anchor="end">
        P50 · P95
      </Label>
      {[236, 276, 316].map((y) => (
        <line key={y} x1="80" y1={y} x2="720" y2={y} stroke="rgba(255,255,255,0.05)" />
      ))}
      <defs>
        <linearGradient id="mk-lat" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.22" />
          <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path
        d="M80 330 L128 322 L176 328 L224 318 L272 324 L320 312 L368 216 L392 306 L440 316 L488 308 L536 318 L584 310 L632 316 L680 306 L720 312 L720 352 L80 352 Z"
        fill="url(#mk-lat)"
      />
      <path
        d="M80 330 L128 322 L176 328 L224 318 L272 324 L320 312 L368 216 L392 306 L440 316 L488 308 L536 318 L584 310 L632 316 L680 306 L720 312"
        fill="none"
        stroke="var(--accent)"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
      <line x1="368" y1="216" x2="368" y2="352" stroke="#e0a35f" strokeOpacity="0.5" strokeDasharray="3 3" />
      <circle cx="368" cy="216" r="4" fill="#e0a35f" />
      <path d="M80 344 L720 340" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1.25" strokeDasharray="4 4" />

      {/* Event log */}
      <rect x="64" y="392" width="672" height="144" rx="2" fill={PANEL} stroke={LINE} />
      {log.map((row, i) => {
        const y = 392 + i * 36;
        return (
          <g key={row.t}>
            {i > 0 && <line x1="64" y1={y} x2="736" y2={y} stroke="rgba(255,255,255,0.05)" />}
            <circle cx="88" cy={y + 18} r="4" fill={row.ok ? "var(--accent)" : "#e0a35f"} />
            <Label x={106} y={y + 22} size={9.5} fill="rgba(255,255,255,0.34)">
              {row.t}
            </Label>
            <Label x={166} y={y + 22} size={10} fill="rgba(255,255,255,0.62)">
              {row.m}
            </Label>
            <rect
              x="656"
              y={y + 10}
              width="60"
              height="16"
              rx="1"
              fill={row.ok ? "rgba(255,255,255,0.07)" : "rgba(224,163,95,0.14)"}
            />
          </g>
        );
      })}
    </>
  );
}

/* ------------------------------------------------------------------ 07 */
function Seo() {
  const stages = ["RESEARCH", "OUTLINE", "DRAFT", "CRITIQUE", "PUBLISH"];
  // The critique pass hunts structural tells, not vocabulary — shown as caught.
  const tells = [
    { t: "Uniform paragraph length", caught: true },
    { t: "Triads (“X, Y and Z”)", caught: true },
    { t: "“Not only… but also”", caught: true },
    { t: "Paragraph with no fact", caught: true },
    { t: "Summary paragraph", caught: false },
  ];
  return (
    <>
      {/* Pipeline rail */}
      <Label x={64} y={92} size={10}>
        PIPELINE
      </Label>
      <line x1="88" y1="132" x2="672" y2="132" stroke={LINE_STRONG} />
      {stages.map((s, i) => {
        const x = 88 + i * 146;
        const done = i < 3;
        const active = i === 3;
        const colour = active ? "#e0a35f" : done ? "var(--accent)" : "rgba(255,255,255,0.28)";
        return (
          <g key={s}>
            <circle cx={x} cy="132" r={active ? 11 : 9} fill={SURFACE} stroke={colour} strokeWidth="1.5" />
            <circle cx={x} cy="132" r="3.5" fill={colour} />
            <Label x={x} y={164} size={9} anchor="middle" fill={active ? "#e0a35f" : "rgba(255,255,255,0.44)"}>
              {s}
            </Label>
          </g>
        );
      })}
      {/* Critique loops back to draft */}
      <path
        d="M526 116 C526 84 380 84 380 116"
        fill="none"
        stroke="#e0a35f"
        strokeOpacity="0.6"
        strokeWidth="1.5"
        strokeDasharray="4 3"
      />
      <path d="M385 111l-6 6-5-6z" fill="#e0a35f" />
      <Label x={453} y={80} size={8.5} anchor="middle" fill="#e0a35f">
        REWRITE ×2
      </Label>

      {/* Generated post */}
      <rect x="64" y="200" width="376" height="300" rx="3" fill={PANEL} stroke={LINE_STRONG} />
      <line x1="64" y1="240" x2="440" y2="240" stroke={LINE} />
      <Label x={84} y={226} size={9.5}>
        DRAFT · IN YOUR VOICE
      </Label>
      <Bar x={84} y={266} w={280} h={11} fill={BAR_BRIGHT} r={1} />
      <Bar x={84} y={286} w={190} h={11} fill={BAR_BRIGHT} r={1} />
      {[0, 1, 2, 3].map((i) => (
        <Bar key={i} x={84} y={324 + i * 17} w={[336, 316, 340, 246][i]} h={5} fill={BAR_DIM} />
      ))}
      {/* A held fact, rendered as the agent's own marker */}
      <rect x="84" y="404" width="212" height="22" rx="2" fill="rgba(224,163,95,0.12)" stroke="#e0a35f" strokeOpacity="0.5" />
      <text x="94" y="419" fill="#e0a35f" fontSize="10.5" fontFamily={MONO}>
        [NEEDS: call-out fee]
      </text>
      {[0, 1].map((i) => (
        <Bar key={i} x={84} y={442 + i * 17} w={[330, 268][i]} h={5} fill={BAR_DIM} />
      ))}

      {/* Critique findings */}
      <rect x="464" y="200" width="272" height="300" rx="3" fill={PANEL} stroke={LINE} />
      <line x1="464" y1="240" x2="736" y2="240" stroke={LINE} />
      <circle cx="486" cy="221" r="5" fill="#e0a35f" />
      <Label x={500} y={226} size={9.5} fill="rgba(255,255,255,0.72)">
        AI TELLS CAUGHT
      </Label>
      {tells.map((row, i) => {
        const y = 268 + i * 40;
        return (
          <g key={row.t}>
            <rect
              x={484}
              y={y - 14}
              width="14"
              height="14"
              rx="2"
              fill={row.caught ? "var(--accent)" : "transparent"}
              stroke={row.caught ? "var(--accent)" : LINE_STRONG}
            />
            {row.caught && (
              <path
                d={`M${487.5} ${y - 7.5} l3 3 l5.5 -5.5`}
                fill="none"
                stroke={SURFACE}
                strokeWidth="1.75"
                strokeLinecap="round"
              />
            )}
            <text
              x={508}
              y={y - 2}
              fill={row.caught ? "rgba(255,255,255,0.4)" : "rgba(255,255,255,0.72)"}
              fontSize="11.5"
              fontFamily={MONO}
              textDecoration={row.caught ? "line-through" : undefined}
            >
              {row.t}
            </text>
          </g>
        );
      })}

      {/* Publish gate */}
      <line x1="64" y1="530" x2="736" y2="530" stroke={LINE} />
      <circle cx="72" cy="562" r="5" fill="#e0a35f" />
      <Label x={88} y={566} size={9.5} fill="rgba(255,255,255,0.62)">
        PUBLISH HELD · 1 FACT MISSING
      </Label>
      <Label x={736} y={566} size={9.5} anchor="end">
        WORDPRESS · DRAFT
      </Label>
    </>
  );
}

const VARIANTS: Record<MockupVariant, () => JSX.Element> = {
  "web-apps": WebApps,
  mobile: Mobile,
  crm: Crm,
  ai: Ai,
  integrations: Integrations,
  cloud: Cloud,
  seo: Seo,
};

export default function ServiceMockup({
  variant,
  className,
}: {
  variant: MockupVariant;
  className?: string;
}) {
  const Art = VARIANTS[variant];
  return (
    <div
      className={className}
      style={{ background: SURFACE, border: "1px solid var(--line-3)" }}
    >
      <svg
        viewBox="0 0 800 600"
        role="img"
        aria-label={TITLES[variant]}
        className="block h-full w-full"
      >
        <Art />
      </svg>
    </div>
  );
}
