"use client";

import { motion } from "framer-motion";

type Variant = "about" | "portfolio" | "blog" | "services" | "contact";

// ─── Center SVG content per variant ────────────────────────────────────────

function AboutCenter() {
  return (
    <>
      {/* Central hub */}
      <circle cx="210" cy="210" r="28" stroke="rgba(126,184,212,0.3)" strokeWidth="1.5" fill="rgba(12,12,12,0.95)" />
      <text x="210" y="214" textAnchor="middle" fill="rgba(126,184,212,0.65)" fontSize="9" fontFamily="monospace" letterSpacing="0.05em">CN</text>
      <circle cx="210" cy="210" r="34" stroke="rgba(126,184,212,0.08)" strokeWidth="1" fill="none" />

      {/* Spokes from hub to team nodes */}
      <line x1="188" y1="190" x2="152" y2="158" stroke="rgba(126,184,212,0.14)" strokeWidth="0.75" strokeDasharray="3 5" />
      <line x1="232" y1="190" x2="268" y2="158" stroke="rgba(126,184,212,0.14)" strokeWidth="0.75" strokeDasharray="3 5" />
      <line x1="188" y1="230" x2="152" y2="262" stroke="rgba(126,184,212,0.1)" strokeWidth="0.75" strokeDasharray="3 5" />
      <line x1="232" y1="230" x2="268" y2="262" stroke="rgba(126,184,212,0.1)" strokeWidth="0.75" strokeDasharray="3 5" />

      {/* Faint cross connections */}
      <line x1="162" y1="152" x2="258" y2="152" stroke="rgba(255,255,255,0.025)" strokeWidth="0.5" />
      <line x1="162" y1="268" x2="258" y2="268" stroke="rgba(255,255,255,0.025)" strokeWidth="0.5" />
      <line x1="142" y1="168" x2="142" y2="252" stroke="rgba(255,255,255,0.025)" strokeWidth="0.5" />
      <line x1="278" y1="168" x2="278" y2="252" stroke="rgba(255,255,255,0.025)" strokeWidth="0.5" />

      {/* Team node: AM (top-left) */}
      <circle cx="142" cy="152" r="22" stroke="rgba(255,255,255,0.07)" strokeWidth="1" fill="rgba(14,14,14,0.95)" />
      <text x="142" y="156" textAnchor="middle" fill="rgba(255,255,255,0.25)" fontSize="8" fontFamily="monospace">AM</text>

      {/* Team node: SN (top-right) */}
      <circle cx="278" cy="152" r="22" stroke="rgba(255,255,255,0.07)" strokeWidth="1" fill="rgba(14,14,14,0.95)" />
      <text x="278" y="156" textAnchor="middle" fill="rgba(255,255,255,0.25)" fontSize="8" fontFamily="monospace">SN</text>

      {/* Team node: KO (bottom-left) */}
      <circle cx="142" cy="268" r="22" stroke="rgba(255,255,255,0.07)" strokeWidth="1" fill="rgba(14,14,14,0.95)" />
      <text x="142" y="272" textAnchor="middle" fill="rgba(255,255,255,0.25)" fontSize="8" fontFamily="monospace">KO</text>

      {/* Team node: ML (bottom-right) */}
      <circle cx="278" cy="268" r="22" stroke="rgba(255,255,255,0.07)" strokeWidth="1" fill="rgba(14,14,14,0.95)" />
      <text x="278" y="272" textAnchor="middle" fill="rgba(255,255,255,0.25)" fontSize="8" fontFamily="monospace">ML</text>

      {/* Role labels */}
      <rect x="106" y="178" width="36" height="10" rx="3" fill="rgba(255,255,255,0.03)" />
      <text x="124" y="186" textAnchor="middle" fill="rgba(255,255,255,0.12)" fontSize="5.5" fontFamily="monospace">Founder</text>
      <rect x="278" y="178" width="36" height="10" rx="3" fill="rgba(255,255,255,0.03)" />
      <text x="296" y="186" textAnchor="middle" fill="rgba(255,255,255,0.12)" fontSize="5.5" fontFamily="monospace">Mobile</text>
      <rect x="106" y="272" width="36" height="10" rx="3" fill="rgba(255,255,255,0.03)" />
      <text x="124" y="280" textAnchor="middle" fill="rgba(255,255,255,0.12)" fontSize="5.5" fontFamily="monospace">Backend</text>
      <rect x="278" y="272" width="36" height="10" rx="3" fill="rgba(255,255,255,0.03)" />
      <text x="296" y="280" textAnchor="middle" fill="rgba(255,255,255,0.12)" fontSize="5.5" fontFamily="monospace">Design</text>
    </>
  );
}

function PortfolioCenter() {
  return (
    <>
      {/* Back card (offset left) */}
      <rect x="118" y="182" width="164" height="108" rx="9" stroke="rgba(255,255,255,0.04)" strokeWidth="1" fill="rgba(10,10,10,0.9)" />
      <rect x="118" y="182" width="164" height="24" rx="9" fill="rgba(255,255,255,0.02)" />
      <rect x="118" y="198" width="164" height="8" fill="rgba(255,255,255,0.02)" />

      {/* Middle card (slight offset) */}
      <rect x="126" y="174" width="164" height="108" rx="9" stroke="rgba(255,255,255,0.055)" strokeWidth="1" fill="rgba(12,12,12,0.95)" />
      <rect x="126" y="174" width="164" height="24" rx="9" fill="rgba(255,255,255,0.025)" />
      <rect x="126" y="190" width="164" height="8" fill="rgba(255,255,255,0.025)" />
      <rect x="135" y="205" width="48" height="4" rx="2" fill="rgba(255,255,255,0.06)" />
      <rect x="135" y="214" width="100" height="3.5" rx="1.5" fill="rgba(255,255,255,0.04)" />
      <rect x="135" y="222" width="80" height="3.5" rx="1.5" fill="rgba(255,255,255,0.03)" />

      {/* Front card */}
      <rect x="134" y="166" width="164" height="110" rx="9" stroke="rgba(255,255,255,0.09)" strokeWidth="1" fill="rgba(14,14,14,0.98)" />
      {/* Title bar */}
      <rect x="134" y="166" width="164" height="26" rx="9" fill="rgba(255,255,255,0.03)" />
      <rect x="134" y="184" width="164" height="8" fill="rgba(255,255,255,0.03)" />
      {/* Dots */}
      <circle cx="148" cy="179" r="3" fill="rgba(255,255,255,0.12)" />
      <circle cx="160" cy="179" r="3" fill="rgba(255,255,255,0.12)" />
      <circle cx="172" cy="179" r="3" fill="rgba(255,255,255,0.12)" />
      {/* Project name */}
      <rect x="148" y="200" width="72" height="7" rx="3.5" fill="rgba(255,255,255,0.1)" />
      {/* Type badge */}
      <rect x="148" y="213" width="44" height="10" rx="4" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.06)" strokeWidth="0.5" />
      <text x="170" y="221" textAnchor="middle" fill="rgba(255,255,255,0.2)" fontSize="5.5" fontFamily="monospace">Web App</text>
      {/* Description lines */}
      <rect x="148" y="229" width="136" height="3.5" rx="1.5" fill="rgba(255,255,255,0.05)" />
      <rect x="148" y="237" width="110" height="3.5" rx="1.5" fill="rgba(255,255,255,0.04)" />
      {/* Outcome */}
      <rect x="148" y="248" width="80" height="14" rx="4" fill="rgba(126,184,212,0.12)" stroke="rgba(126,184,212,0.18)" strokeWidth="0.5" />
      <text x="188" y="258" textAnchor="middle" fill="rgba(126,184,212,0.65)" fontSize="5.5" fontFamily="monospace">$2M+ monthly</text>

      {/* Page indicator dots */}
      <circle cx="196" cy="288" r="3" fill="rgba(126,184,212,0.5)" />
      <circle cx="207" cy="288" r="2.5" fill="rgba(255,255,255,0.08)" />
      <circle cx="217" cy="288" r="2.5" fill="rgba(255,255,255,0.08)" />
      <circle cx="227" cy="288" r="2.5" fill="rgba(255,255,255,0.08)" />
    </>
  );
}

function BlogCenter() {
  return (
    <>
      {/* Document card */}
      <rect x="135" y="142" width="150" height="182" rx="10" stroke="rgba(255,255,255,0.08)" strokeWidth="1" fill="rgba(12,12,12,0.96)" />
      {/* Top accent bar */}
      <rect x="135" y="142" width="150" height="4" rx="2" fill="rgba(126,184,212,0.35)" />
      {/* Category + time row */}
      <rect x="148" y="158" width="36" height="11" rx="4" fill="rgba(126,184,212,0.12)" stroke="rgba(126,184,212,0.18)" strokeWidth="0.5" />
      <text x="166" y="167" textAnchor="middle" fill="rgba(126,184,212,0.55)" fontSize="5.5" fontFamily="monospace">Web Dev</text>
      <rect x="192" y="160" width="36" height="7" rx="2.5" fill="rgba(255,255,255,0.04)" />
      <text x="210" y="166" textAnchor="middle" fill="rgba(255,255,255,0.2)" fontSize="5.5" fontFamily="monospace">12 min</text>

      {/* Article title lines */}
      <rect x="148" y="178" width="124" height="7" rx="3.5" fill="rgba(255,255,255,0.1)" />
      <rect x="148" y="190" width="96" height="7" rx="3.5" fill="rgba(255,255,255,0.08)" />

      {/* Divider */}
      <line x1="148" y1="205" x2="272" y2="205" stroke="rgba(255,255,255,0.04)" strokeWidth="0.5" />

      {/* Body paragraph lines */}
      <rect x="148" y="214" width="124" height="3.5" rx="1.5" fill="rgba(255,255,255,0.06)" />
      <rect x="148" y="222" width="118" height="3.5" rx="1.5" fill="rgba(255,255,255,0.05)" />
      <rect x="148" y="230" width="124" height="3.5" rx="1.5" fill="rgba(255,255,255,0.05)" />
      <rect x="148" y="238" width="100" height="3.5" rx="1.5" fill="rgba(255,255,255,0.04)" />

      {/* Section heading */}
      <rect x="148" y="250" width="72" height="5.5" rx="2.5" fill="rgba(255,255,255,0.08)" />

      {/* More body lines */}
      <rect x="148" y="263" width="124" height="3.5" rx="1.5" fill="rgba(255,255,255,0.05)" />
      <rect x="148" y="271" width="110" height="3.5" rx="1.5" fill="rgba(255,255,255,0.04)" />
      <rect x="148" y="279" width="124" height="3.5" rx="1.5" fill="rgba(255,255,255,0.04)" />

      {/* Author row at bottom */}
      <rect x="135" y="302" width="150" height="22" rx="0" fill="rgba(255,255,255,0.02)" />
      <rect x="135" y="302" width="150" height="1" fill="rgba(255,255,255,0.05)" />
      <circle cx="150" cy="313" r="6" fill="rgba(255,255,255,0.06)" stroke="rgba(126,184,212,0.2)" strokeWidth="0.5" />
      <rect x="162" y="308" width="30" height="4" rx="2" fill="rgba(255,255,255,0.07)" />
      <rect x="162" y="316" width="48" height="3" rx="1.5" fill="rgba(255,255,255,0.04)" />

      {/* Reading progress bar on right edge */}
      <rect x="280" y="142" width="3" height="182" rx="1.5" fill="rgba(255,255,255,0.03)" />
      <rect x="280" y="142" width="3" height="80" rx="1.5" fill="rgba(126,184,212,0.3)" />
    </>
  );
}

function ServicesCenter() {
  return (
    <>
      {/* Connecting lines between service boxes */}
      <line x1="178" y1="210" x2="210" y2="210" stroke="rgba(126,184,212,0.12)" strokeWidth="0.75" strokeDasharray="3 5" />
      <line x1="242" y1="210" x2="210" y2="210" stroke="rgba(126,184,212,0.12)" strokeWidth="0.75" strokeDasharray="3 5" />
      {/* Line from center up to connector */}
      <line x1="210" y1="210" x2="210" y2="170" stroke="rgba(126,184,212,0.08)" strokeWidth="0.75" strokeDasharray="3 5" />

      {/* Service box 1: Web */}
      <rect x="96" y="170" width="82" height="82" rx="10" stroke="rgba(255,255,255,0.08)" strokeWidth="1" fill="rgba(12,12,12,0.96)" />
      {/* Browser grid icon */}
      <rect x="110" y="184" width="54" height="36" rx="4" stroke="rgba(126,184,212,0.25)" strokeWidth="0.75" fill="none" />
      <line x1="110" y1="190" x2="164" y2="190" stroke="rgba(126,184,212,0.15)" strokeWidth="0.5" />
      <circle cx="115" cy="187" r="1.5" fill="rgba(126,184,212,0.4)" />
      <circle cx="121" cy="187" r="1.5" fill="rgba(126,184,212,0.25)" />
      <circle cx="127" cy="187" r="1.5" fill="rgba(126,184,212,0.2)" />
      <rect x="114" y="195" width="36" height="3" rx="1" fill="rgba(255,255,255,0.07)" />
      <rect x="114" y="202" width="28" height="3" rx="1" fill="rgba(255,255,255,0.05)" />
      <rect x="114" y="209" width="20" height="8" rx="3" fill="rgba(126,184,212,0.15)" />
      {/* Label */}
      <text x="137" y="262" textAnchor="middle" fill="rgba(255,255,255,0.2)" fontSize="6.5" fontFamily="monospace" letterSpacing="0.06em">WEB</text>

      {/* Service box 2: Mobile (taller) */}
      <rect x="169" y="160" width="82" height="100" rx="10" stroke="rgba(126,184,212,0.15)" strokeWidth="1" fill="rgba(12,12,12,0.96)" />
      {/* Phone outline */}
      <rect x="196" y="174" width="28" height="48" rx="6" stroke="rgba(126,184,212,0.3)" strokeWidth="0.75" fill="none" />
      <rect x="203" y="174" width="14" height="5" rx="2.5" fill="rgba(12,12,12,0.96)" stroke="rgba(126,184,212,0.2)" strokeWidth="0.5" />
      <circle cx="210" cy="218" r="2.5" fill="rgba(126,184,212,0.2)" />
      <rect x="200" y="183" width="20" height="3" rx="1" fill="rgba(255,255,255,0.08)" />
      <rect x="200" y="190" width="20" height="3" rx="1" fill="rgba(255,255,255,0.05)" />
      <rect x="200" y="197" width="12" height="12" rx="3" fill="rgba(126,184,212,0.15)" />
      <rect x="215" y="197" width="5" height="5" rx="1.5" fill="rgba(255,255,255,0.06)" />
      <rect x="215" y="204" width="5" height="5" rx="1.5" fill="rgba(255,255,255,0.06)" />
      {/* Label */}
      <text x="210" y="270" textAnchor="middle" fill="rgba(126,184,212,0.4)" fontSize="6.5" fontFamily="monospace" letterSpacing="0.06em">MOBILE</text>

      {/* Service box 3: Software */}
      <rect x="242" y="170" width="82" height="82" rx="10" stroke="rgba(255,255,255,0.08)" strokeWidth="1" fill="rgba(12,12,12,0.96)" />
      {/* Node diagram */}
      <circle cx="283" cy="200" r="8" stroke="rgba(126,184,212,0.22)" strokeWidth="0.75" fill="rgba(12,12,12,0.9)" />
      <text x="283" y="203" textAnchor="middle" fill="rgba(126,184,212,0.4)" fontSize="5.5" fontFamily="monospace">API</text>
      <circle cx="261" cy="218" r="5.5" stroke="rgba(255,255,255,0.07)" strokeWidth="0.75" fill="rgba(14,14,14,0.9)" />
      <text x="261" y="221" textAnchor="middle" fill="rgba(255,255,255,0.18)" fontSize="4.5" fontFamily="monospace">DB</text>
      <circle cx="305" cy="218" r="5.5" stroke="rgba(255,255,255,0.07)" strokeWidth="0.75" fill="rgba(14,14,14,0.9)" />
      <text x="305" y="221" textAnchor="middle" fill="rgba(255,255,255,0.18)" fontSize="4" fontFamily="monospace">SVC</text>
      <line x1="275" y1="206" x2="265" y2="213" stroke="rgba(126,184,212,0.12)" strokeWidth="0.5" />
      <line x1="291" y1="206" x2="300" y2="213" stroke="rgba(126,184,212,0.12)" strokeWidth="0.5" />
      {/* Label */}
      <text x="283" y="262" textAnchor="middle" fill="rgba(255,255,255,0.2)" fontSize="6.5" fontFamily="monospace" letterSpacing="0.06em">SOFTWARE</text>
    </>
  );
}

function ContactCenter() {
  return (
    <>
      {/* Message thread container */}
      <rect x="128" y="148" width="164" height="154" rx="12" stroke="rgba(255,255,255,0.07)" strokeWidth="1" fill="rgba(12,12,12,0.96)" />
      {/* Header bar */}
      <rect x="128" y="148" width="164" height="32" rx="12" fill="rgba(255,255,255,0.025)" />
      <rect x="128" y="168" width="164" height="12" fill="rgba(255,255,255,0.025)" />
      {/* Status dot */}
      <circle cx="143" cy="164" r="4" fill="rgba(126,184,212,0.6)" />
      <circle cx="143" cy="164" r="7" stroke="rgba(126,184,212,0.15)" strokeWidth="0.75" fill="none" />
      <rect x="154" y="159" width="40" height="4" rx="2" fill="rgba(255,255,255,0.1)" />
      <rect x="154" y="167" width="28" height="3" rx="1.5" fill="rgba(255,255,255,0.05)" />

      {/* Sent message 1 (left) */}
      <rect x="138" y="192" width="110" height="30" rx="7" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.06)" strokeWidth="0.5" />
      <rect x="146" y="200" width="80" height="3.5" rx="1.5" fill="rgba(255,255,255,0.09)" />
      <rect x="146" y="208" width="62" height="3.5" rx="1.5" fill="rgba(255,255,255,0.06)" />
      {/* Sent message 2 (left) */}
      <rect x="138" y="228" width="80" height="22" rx="7" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.06)" strokeWidth="0.5" />
      <rect x="146" y="236" width="58" height="3.5" rx="1.5" fill="rgba(255,255,255,0.08)" />
      <rect x="146" y="243" width="42" height="3.5" rx="1.5" fill="rgba(255,255,255,0.05)" />

      {/* Reply bubble (right-aligned) */}
      <rect x="162" y="258" width="120" height="36" rx="7" fill="rgba(126,184,212,0.1)" stroke="rgba(126,184,212,0.22)" strokeWidth="0.75" />
      <rect x="172" y="266" width="88" height="3.5" rx="1.5" fill="rgba(126,184,212,0.4)" />
      <rect x="172" y="274" width="70" height="3.5" rx="1.5" fill="rgba(126,184,212,0.25)" />
      <rect x="172" y="282" width="50" height="3.5" rx="1.5" fill="rgba(126,184,212,0.18)" />

      {/* Input bar at bottom */}
      <rect x="128" y="284" width="164" height="18" rx="0" fill="rgba(255,255,255,0.02)" />
      <rect x="128" y="284" width="164" height="1" fill="rgba(255,255,255,0.05)" />
      <rect x="136" y="289" width="100" height="7" rx="3.5" fill="rgba(255,255,255,0.04)" />
      <rect x="270" y="288" width="16" height="9" rx="4" fill="rgba(126,184,212,0.2)" />
    </>
  );
}

// ─── Stat cards per variant ─────────────────────────────────────────────────

const statsByVariant: Record<Variant, { label: string; value: string; pos: React.CSSProperties; float: number; delay?: number }[]> = {
  about: [
    { label: "Experience", value: "8 years", pos: { top: 78, right: 18 }, float: -6, delay: 0 },
    { label: "Team size", value: "Senior", pos: { bottom: 110, left: 12 }, float: 5, delay: 1 },
    { label: "Model", value: "Remote-first", pos: { top: 272, right: 4 }, float: -4, delay: 2.5 },
  ],
  portfolio: [
    { label: "Projects", value: "150+", pos: { top: 82, right: 18 }, float: -6, delay: 0 },
    { label: "Industries", value: "6+", pos: { bottom: 104, left: 10 }, float: 5, delay: 1 },
    { label: "Since", value: "2016", pos: { top: 268, right: 4 }, float: -4, delay: 2.5 },
  ],
  blog: [
    { label: "Articles", value: "6", pos: { top: 88, right: 18 }, float: -6, delay: 0 },
    { label: "Avg read", value: "~13 min", pos: { bottom: 108, left: 10 }, float: 5, delay: 1 },
    { label: "Topics", value: "4", pos: { top: 268, right: 4 }, float: -4, delay: 2.5 },
  ],
  services: [
    { label: "Disciplines", value: "3", pos: { top: 80, right: 18 }, float: -6, delay: 0 },
    { label: "Stack", value: "Full-stack", pos: { bottom: 100, left: 8 }, float: 5, delay: 1 },
    { label: "Delivery", value: "2-wk sprints", pos: { top: 264, right: 2 }, float: -4, delay: 2.5 },
  ],
  contact: [
    { label: "Response", value: "<24h", pos: { top: 82, right: 18 }, float: -6, delay: 0 },
    { label: "First call", value: "30 min", pos: { bottom: 110, left: 10 }, float: 5, delay: 1 },
    { label: "No pitch", value: "Just talk", pos: { top: 266, right: 4 }, float: -4, delay: 2.5 },
  ],
};

// ─── Main component ──────────────────────────────────────────────────────────

export default function PageGraphic({ variant }: { variant: Variant }) {
  const cards = statsByVariant[variant];

  return (
    <motion.div
      className="relative w-full max-w-[420px] aspect-square mx-auto"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
    >
      {/* Outer ring — slow clockwise */}
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
        {/* Connector from top dot */}
        <line x1="210" y1="14" x2="210" y2="148" stroke="rgba(126,184,212,0.09)" strokeWidth="0.5" strokeDasharray="3 6" />

        {/* Variant center content */}
        {variant === "about"     && <AboutCenter />}
        {variant === "portfolio" && <PortfolioCenter />}
        {variant === "blog"      && <BlogCenter />}
        {variant === "services"  && <ServicesCenter />}
        {variant === "contact"   && <ContactCenter />}
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
