"use client";

import { motion } from "framer-motion";

type Variant = "web" | "mobile" | "software";

function WebCenter() {
  return (
    <>
      {/* Code editor card */}
      <rect x="110" y="148" width="200" height="148" rx="9" stroke="rgba(255,255,255,0.08)" strokeWidth="1" fill="rgba(12,12,12,0.96)" />
      {/* Title bar */}
      <rect x="110" y="148" width="200" height="28" rx="9" fill="rgba(255,255,255,0.025)" />
      <rect x="110" y="167" width="200" height="9" fill="rgba(255,255,255,0.025)" />
      {/* Dots */}
      <circle cx="126" cy="162" r="3" fill="rgba(255,255,255,0.12)" />
      <circle cx="138" cy="162" r="3" fill="rgba(255,255,255,0.12)" />
      <circle cx="150" cy="162" r="3" fill="rgba(255,255,255,0.12)" />
      {/* Tab labels */}
      <rect x="166" y="156" width="44" height="12" rx="3" fill="rgba(255,255,255,0.04)" />
      {/* Line numbers column */}
      <rect x="120" y="186" width="12" height="4" rx="1.5" fill="rgba(255,255,255,0.06)" />
      <rect x="120" y="196" width="12" height="4" rx="1.5" fill="rgba(255,255,255,0.06)" />
      <rect x="120" y="206" width="12" height="4" rx="1.5" fill="rgba(255,255,255,0.06)" />
      <rect x="120" y="216" width="12" height="4" rx="1.5" fill="rgba(255,255,255,0.06)" />
      <rect x="120" y="226" width="12" height="4" rx="1.5" fill="rgba(255,255,255,0.06)" />
      <rect x="120" y="236" width="12" height="4" rx="1.5" fill="rgba(255,255,255,0.06)" />
      <rect x="120" y="246" width="12" height="4" rx="1.5" fill="rgba(255,255,255,0.06)" />
      {/* Vertical line separator */}
      <line x1="137" y1="178" x2="137" y2="296" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
      {/* Code lines — varying widths/colors */}
      <rect x="143" y="186" width="32" height="4" rx="1.5" fill="rgba(126,184,212,0.55)" />
      <rect x="179" y="186" width="18" height="4" rx="1.5" fill="rgba(255,255,255,0.18)" />
      <rect x="201" y="186" width="48" height="4" rx="1.5" fill="rgba(255,255,255,0.07)" />

      <rect x="151" y="196" width="50" height="4" rx="1.5" fill="rgba(255,255,255,0.14)" />
      <rect x="205" y="196" width="30" height="4" rx="1.5" fill="rgba(126,184,212,0.35)" />
      <rect x="239" y="196" width="24" height="4" rx="1.5" fill="rgba(255,255,255,0.07)" />

      {/* Highlighted line */}
      <rect x="138" y="204" width="160" height="12" rx="1" fill="rgba(126,184,212,0.05)" />
      <rect x="143" y="206" width="24" height="4" rx="1.5" fill="rgba(126,184,212,0.5)" />
      <rect x="171" y="206" width="60" height="4" rx="1.5" fill="rgba(255,255,255,0.18)" />
      <rect x="235" y="206" width="36" height="4" rx="1.5" fill="rgba(255,255,255,0.08)" />

      <rect x="151" y="216" width="40" height="4" rx="1.5" fill="rgba(255,200,120,0.3)" />
      <rect x="195" y="216" width="56" height="4" rx="1.5" fill="rgba(255,255,255,0.07)" />

      <rect x="143" y="226" width="28" height="4" rx="1.5" fill="rgba(126,184,212,0.4)" />
      <rect x="175" y="226" width="44" height="4" rx="1.5" fill="rgba(255,255,255,0.14)" />
      <rect x="223" y="226" width="22" height="4" rx="1.5" fill="rgba(255,255,255,0.06)" />

      <rect x="151" y="236" width="72" height="4" rx="1.5" fill="rgba(255,255,255,0.1)" />

      <rect x="143" y="246" width="30" height="4" rx="1.5" fill="rgba(126,184,212,0.4)" />
      <rect x="177" y="246" width="38" height="4" rx="1.5" fill="rgba(255,255,255,0.07)" />

      {/* Cursor blink indicator */}
      <rect x="143" y="256" width="2" height="12" rx="1" fill="rgba(126,184,212,0.7)" />

      {/* Bottom status bar */}
      <rect x="110" y="278" width="200" height="18" rx="0" fill="rgba(255,255,255,0.02)" />
      <rect x="110" y="278" width="200" height="1" fill="rgba(255,255,255,0.05)" />
      <rect x="120" y="285" width="28" height="4" rx="1.5" fill="rgba(126,184,212,0.3)" />
      <rect x="154" y="285" width="20" height="4" rx="1.5" fill="rgba(255,255,255,0.06)" />
    </>
  );
}

function MobileCenter() {
  return (
    <>
      {/* Phone body */}
      <rect x="160" y="118" width="100" height="188" rx="20" stroke="rgba(255,255,255,0.09)" strokeWidth="1.5" fill="rgba(12,12,12,0.96)" />
      {/* Side buttons */}
      <rect x="157" y="162" width="3" height="24" rx="1.5" fill="rgba(255,255,255,0.08)" />
      <rect x="157" y="192" width="3" height="24" rx="1.5" fill="rgba(255,255,255,0.08)" />
      <rect x="260" y="170" width="3" height="30" rx="1.5" fill="rgba(255,255,255,0.08)" />
      {/* Notch */}
      <rect x="194" y="118" width="32" height="16" rx="8" fill="rgba(12,12,12,0.96)" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
      <circle cx="214" cy="126" r="3" fill="rgba(255,255,255,0.06)" />
      {/* Status bar */}
      <rect x="172" y="142" width="20" height="3" rx="1.5" fill="rgba(255,255,255,0.08)" />
      <rect x="227" y="142" width="18" height="3" rx="1.5" fill="rgba(255,255,255,0.06)" />
      {/* App grid */}
      <rect x="174" y="154" width="28" height="28" rx="7" fill="rgba(126,184,212,0.18)" stroke="rgba(126,184,212,0.2)" strokeWidth="0.5" />
      <rect x="208" y="154" width="28" height="28" rx="7" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.06)" strokeWidth="0.5" />
      <rect x="242" y="154" width="28" height="28" rx="7" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.06)" strokeWidth="0.5" />
      <rect x="174" y="190" width="28" height="28" rx="7" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.06)" strokeWidth="0.5" />
      <rect x="208" y="190" width="28" height="28" rx="7" fill="rgba(126,184,212,0.12)" stroke="rgba(126,184,212,0.15)" strokeWidth="0.5" />
      <rect x="242" y="190" width="28" height="28" rx="7" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.06)" strokeWidth="0.5" />
      {/* Icon accent in first app */}
      <rect x="181" y="165" width="14" height="2" rx="1" fill="rgba(126,184,212,0.8)" />
      <rect x="181" y="170" width="10" height="2" rx="1" fill="rgba(126,184,212,0.5)" />
      {/* Content card in phone */}
      <rect x="172" y="228" width="76" height="44" rx="6" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.05)" strokeWidth="0.5" />
      <rect x="180" y="236" width="44" height="4" rx="2" fill="rgba(255,255,255,0.08)" />
      <rect x="180" y="246" width="56" height="3" rx="1.5" fill="rgba(255,255,255,0.04)" />
      <rect x="180" y="256" width="36" height="10" rx="3" fill="rgba(126,184,212,0.18)" />
      {/* Tab bar */}
      <rect x="160" y="280" width="100" height="26" rx="0" fill="rgba(255,255,255,0.025)" />
      <rect x="160" y="280" width="100" height="1" fill="rgba(255,255,255,0.06)" />
      <circle cx="185" cy="293" r="3.5" fill="rgba(126,184,212,0.6)" />
      <circle cx="210" cy="293" r="3.5" fill="rgba(255,255,255,0.08)" />
      <circle cx="235" cy="293" r="3.5" fill="rgba(255,255,255,0.08)" />
      {/* Home indicator */}
      <rect x="198" y="298" width="24" height="3" rx="1.5" fill="rgba(255,255,255,0.12)" />
    </>
  );
}

function SoftwareCenter() {
  return (
    <>
      {/* Central API node */}
      <rect x="162" y="188" width="96" height="44" rx="8" stroke="rgba(126,184,212,0.25)" strokeWidth="1" fill="rgba(12,12,12,0.96)" />
      <rect x="172" y="200" width="24" height="4" rx="2" fill="rgba(126,184,212,0.5)" />
      <rect x="172" y="210" width="50" height="3" rx="1.5" fill="rgba(255,255,255,0.06)" />
      <rect x="172" y="218" width="38" height="3" rx="1.5" fill="rgba(255,255,255,0.04)" />
      <rect x="230" y="202" width="20" height="7" rx="3" fill="rgba(126,184,212,0.15)" stroke="rgba(126,184,212,0.2)" strokeWidth="0.5" />
      {/* Label */}
      <text x="210" y="214" textAnchor="middle" fill="rgba(126,184,212,0.5)" fontSize="7" fontFamily="monospace" letterSpacing="0.08em">API</text>

      {/* Lines from API to satellite nodes */}
      <line x1="258" y1="198" x2="290" y2="140" stroke="rgba(126,184,212,0.12)" strokeWidth="0.75" strokeDasharray="3 5" />
      <line x1="162" y1="220" x2="122" y2="268" stroke="rgba(126,184,212,0.1)" strokeWidth="0.75" strokeDasharray="3 5" />
      <line x1="258" y1="222" x2="290" y2="280" stroke="rgba(126,184,212,0.1)" strokeWidth="0.75" strokeDasharray="3 5" />
      <line x1="210" y1="188" x2="210" y2="120" stroke="rgba(126,184,212,0.08)" strokeWidth="0.75" strokeDasharray="3 5" />

      {/* Node: Cache/CDN — top right */}
      <rect x="286" y="112" width="76" height="38" rx="7" stroke="rgba(255,255,255,0.06)" strokeWidth="1" fill="rgba(14,14,14,0.95)" />
      <rect x="294" y="121" width="20" height="3.5" rx="1.5" fill="rgba(255,255,255,0.1)" />
      <rect x="294" y="130" width="36" height="3" rx="1.5" fill="rgba(255,255,255,0.05)" />
      <text x="324" y="144" textAnchor="middle" fill="rgba(255,255,255,0.15)" fontSize="6" fontFamily="monospace" letterSpacing="0.08em">CACHE</text>

      {/* Node: Database — bottom left */}
      <rect x="58" y="264" width="76" height="38" rx="7" stroke="rgba(255,255,255,0.06)" strokeWidth="1" fill="rgba(14,14,14,0.95)" />
      <rect x="66" y="273" width="20" height="3.5" rx="1.5" fill="rgba(255,255,255,0.1)" />
      <rect x="66" y="282" width="40" height="3" rx="1.5" fill="rgba(255,255,255,0.05)" />
      <text x="96" y="296" textAnchor="middle" fill="rgba(255,255,255,0.15)" fontSize="6" fontFamily="monospace" letterSpacing="0.08em">DB</text>

      {/* Node: Auth — bottom right */}
      <rect x="286" y="272" width="76" height="38" rx="7" stroke="rgba(255,255,255,0.06)" strokeWidth="1" fill="rgba(14,14,14,0.95)" />
      <rect x="294" y="281" width="20" height="3.5" rx="1.5" fill="rgba(255,255,255,0.1)" />
      <rect x="294" y="290" width="32" height="3" rx="1.5" fill="rgba(255,255,255,0.05)" />
      <text x="324" y="304" textAnchor="middle" fill="rgba(255,255,255,0.15)" fontSize="6" fontFamily="monospace" letterSpacing="0.08em">AUTH</text>

      {/* Node: Client — top center */}
      <rect x="172" y="96" width="76" height="34" rx="7" stroke="rgba(255,255,255,0.05)" strokeWidth="1" fill="rgba(14,14,14,0.95)" />
      <rect x="180" y="106" width="28" height="3.5" rx="1.5" fill="rgba(255,255,255,0.08)" />
      <rect x="180" y="115" width="42" height="3" rx="1.5" fill="rgba(255,255,255,0.04)" />
      <text x="210" y="124" textAnchor="middle" fill="rgba(255,255,255,0.12)" fontSize="6" fontFamily="monospace" letterSpacing="0.08em">CLIENT</text>

      {/* Accent dots at line endpoints on API box */}
      <circle cx="258" cy="198" r="2" fill="#7EB8D4" opacity="0.5" />
      <circle cx="162" cy="220" r="2" fill="#7EB8D4" opacity="0.4" />
      <circle cx="258" cy="222" r="2" fill="#7EB8D4" opacity="0.4" />
      <circle cx="210" cy="188" r="2" fill="#7EB8D4" opacity="0.35" />
    </>
  );
}

const statsByVariant: Record<Variant, { cards: { label: string; value: string; pos: React.CSSProperties; float: number; delay?: number }[] }> = {
  web: {
    cards: [
      { label: "Perf score", value: "97", pos: { top: 92, right: 14 }, float: -6, delay: 0 },
      { label: "TypeScript", value: "100%", pos: { bottom: 108, left: 12 }, float: 6, delay: 1 },
      { label: "Load time", value: "0.8s", pos: { top: 268, right: 4 }, float: -4, delay: 2.5 },
    ],
  },
  mobile: {
    cards: [
      { label: "App rating", value: "4.9★", pos: { top: 80, right: 22 }, float: -6, delay: 0 },
      { label: "Platforms", value: "iOS + Android", pos: { bottom: 118, left: 8 }, float: 5, delay: 1 },
      { label: "Approval", value: "100%", pos: { top: 272, right: 4 }, float: -4, delay: 2.5 },
    ],
  },
  software: {
    cards: [
      { label: "Protocol", value: "REST + GQL", pos: { top: 58, right: 10 }, float: -6, delay: 0 },
      { label: "Uptime", value: "99.9%", pos: { bottom: 100, left: 10 }, float: 5, delay: 1 },
      { label: "Latency", value: "<50ms", pos: { top: 260, right: 4 }, float: -4, delay: 2.5 },
    ],
  },
};

export default function ServiceGraphic({ variant }: { variant: Variant }) {
  const { cards } = statsByVariant[variant];

  return (
    <motion.div
      className="relative w-full max-w-[420px] aspect-square mx-auto"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
    >
      {/* Outer dashed ring — slow clockwise */}
      <motion.div
        className="absolute inset-0"
        animate={{ rotate: 360 }}
        transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
      >
        <svg viewBox="0 0 420 420" fill="none" className="w-full h-full">
          <circle cx="210" cy="210" r="196" stroke="rgba(255,255,255,0.03)" strokeWidth="1" strokeDasharray="3 10" />
        </svg>
      </motion.div>

      {/* Middle ring — slow counter-clockwise */}
      <motion.div
        className="absolute inset-0"
        animate={{ rotate: -360 }}
        transition={{ duration: 70, repeat: Infinity, ease: "linear" }}
      >
        <svg viewBox="0 0 420 420" fill="none" className="w-full h-full">
          <circle cx="210" cy="210" r="144" stroke="rgba(126,184,212,0.07)" strokeWidth="1" strokeDasharray="2 14" />
        </svg>
      </motion.div>

      {/* Static base */}
      <svg viewBox="0 0 420 420" fill="none" className="absolute inset-0 w-full h-full">
        {/* Crosshairs */}
        <line x1="210" y1="14" x2="210" y2="406" stroke="rgba(255,255,255,0.02)" strokeWidth="1" />
        <line x1="14" y1="210" x2="406" y2="210" stroke="rgba(255,255,255,0.02)" strokeWidth="1" />
        {/* Inner ring */}
        <circle cx="210" cy="210" r="92" stroke="rgba(255,255,255,0.035)" strokeWidth="1" />
        {/* Cardinal dots */}
        <circle cx="210" cy="14" r="2.5" fill="#7EB8D4" opacity="0.55" />
        <circle cx="406" cy="210" r="2.5" fill="#7EB8D4" opacity="0.28" />
        <circle cx="210" cy="406" r="2.5" fill="#7EB8D4" opacity="0.18" />
        <circle cx="14" cy="210" r="2.5" fill="#7EB8D4" opacity="0.14" />
        {/* Connector from top dot to center element */}
        <line x1="210" y1="14" x2="210" y2="148" stroke="rgba(126,184,212,0.09)" strokeWidth="0.5" strokeDasharray="3 6" />

        {/* Variant-specific center content */}
        {variant === "web" && <WebCenter />}
        {variant === "mobile" && <MobileCenter />}
        {variant === "software" && <SoftwareCenter />}
      </svg>

      {/* Pulsing center dot */}
      <motion.div
        className="absolute rounded-full"
        style={{ width: 5, height: 5, background: "#7EB8D4", top: "50%", left: "50%", transform: "translate(-50%,-50%)" }}
        animate={{ scale: [1, 2.2, 1], opacity: [0.3, 0.08, 0.3] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Floating stat cards */}
      {cards.map(({ label, value, pos, float, delay = 0 }) => (
        <motion.div
          key={label}
          className="absolute rounded-xl border"
          style={{ ...pos, background: "rgba(11,11,11,0.93)", borderColor: "rgba(255,255,255,0.07)", padding: "9px 13px", backdropFilter: "blur(8px)" }}
          animate={{ y: [0, float, 0] }}
          transition={{ duration: 4.5 + delay * 0.4, repeat: Infinity, ease: "easeInOut", delay }}
        >
          <p style={{ fontSize: "0.5rem", color: "#3a3a3a", letterSpacing: "0.09em", textTransform: "uppercase", marginBottom: 3 }}>
            {label}
          </p>
          <p className="font-display font-semibold" style={{ color: "#7EB8D4", fontSize: "0.95rem", letterSpacing: "-0.02em", lineHeight: 1, whiteSpace: "nowrap" }}>
            {value}
          </p>
        </motion.div>
      ))}
    </motion.div>
  );
}
