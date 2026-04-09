"use client";

import { motion } from "framer-motion";

export default function HeroGraphic() {
  return (
    <motion.div
      className="relative w-full max-w-[460px] aspect-square mx-auto"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
    >
      {/* Outer dashed ring — slow clockwise */}
      <motion.div
        className="absolute inset-0"
        animate={{ rotate: 360 }}
        transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
      >
        <svg viewBox="0 0 460 460" fill="none" className="w-full h-full">
          <circle cx="230" cy="230" r="215" stroke="rgba(255,255,255,0.03)" strokeWidth="1" strokeDasharray="3 10" />
        </svg>
      </motion.div>

      {/* Middle ring — slow counter-clockwise, blue tint */}
      <motion.div
        className="absolute inset-0"
        animate={{ rotate: -360 }}
        transition={{ duration: 70, repeat: Infinity, ease: "linear" }}
      >
        <svg viewBox="0 0 460 460" fill="none" className="w-full h-full">
          <circle cx="230" cy="230" r="158" stroke="rgba(126,184,212,0.07)" strokeWidth="1" strokeDasharray="2 14" />
        </svg>
      </motion.div>

      {/* Static base layer */}
      <svg viewBox="0 0 460 460" fill="none" className="absolute inset-0 w-full h-full">
        {/* Crosshairs */}
        <line x1="230" y1="15" x2="230" y2="445" stroke="rgba(255,255,255,0.02)" strokeWidth="1" />
        <line x1="15" y1="230" x2="445" y2="230" stroke="rgba(255,255,255,0.02)" strokeWidth="1" />
        {/* Diagonals */}
        <line x1="72" y1="72" x2="388" y2="388" stroke="rgba(255,255,255,0.012)" strokeWidth="1" />
        <line x1="388" y1="72" x2="72" y2="388" stroke="rgba(255,255,255,0.012)" strokeWidth="1" />
        {/* Inner solid ring */}
        <circle cx="230" cy="230" r="100" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />

        {/* Cardinal accent dots on outer ring */}
        <circle cx="230" cy="15" r="2.5" fill="#7EB8D4" opacity="0.6" />
        <circle cx="445" cy="230" r="2.5" fill="#7EB8D4" opacity="0.3" />
        <circle cx="230" cy="445" r="2.5" fill="#7EB8D4" opacity="0.2" />
        <circle cx="15" cy="230" r="2.5" fill="#7EB8D4" opacity="0.15" />

        {/* Dashed connector: top dot → browser title bar */}
        <line x1="230" y1="15" x2="230" y2="165" stroke="rgba(126,184,212,0.1)" strokeWidth="0.5" strokeDasharray="3 6" />

        {/* Browser window card */}
        <rect x="130" y="165" width="200" height="138" rx="9" stroke="rgba(255,255,255,0.08)" strokeWidth="1" fill="rgba(12,12,12,0.96)" />
        {/* Title bar */}
        <rect x="130" y="165" width="200" height="30" rx="9" fill="rgba(255,255,255,0.025)" />
        <rect x="130" y="186" width="200" height="9" fill="rgba(255,255,255,0.025)" />
        {/* Window dots */}
        <circle cx="146" cy="180" r="3" fill="rgba(255,255,255,0.12)" />
        <circle cx="158" cy="180" r="3" fill="rgba(255,255,255,0.12)" />
        <circle cx="170" cy="180" r="3" fill="rgba(255,255,255,0.12)" />
        {/* URL bar */}
        <rect x="186" y="173" width="90" height="14" rx="3.5" fill="rgba(255,255,255,0.04)" />

        {/* Content lines */}
        <rect x="147" y="208" width="84" height="6" rx="3" fill="rgba(255,255,255,0.07)" />
        <rect x="147" y="221" width="140" height="4" rx="2" fill="rgba(255,255,255,0.04)" />
        <rect x="147" y="231" width="120" height="4" rx="2" fill="rgba(255,255,255,0.04)" />
        <rect x="147" y="241" width="105" height="4" rx="2" fill="rgba(255,255,255,0.03)" />

        {/* Button row */}
        <rect x="147" y="256" width="56" height="22" rx="5" fill="rgba(126,184,212,0.16)" stroke="rgba(126,184,212,0.28)" strokeWidth="0.5" />
        <rect x="210" y="256" width="40" height="22" rx="5" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.06)" strokeWidth="0.5" />

        {/* Connector lines to stat cards */}
        <line x1="330" y1="234" x2="374" y2="188" stroke="rgba(126,184,212,0.08)" strokeWidth="0.5" strokeDasharray="3 6" />
        <line x1="130" y1="244" x2="88" y2="298" stroke="rgba(126,184,212,0.07)" strokeWidth="0.5" strokeDasharray="3 6" />
      </svg>

      {/* Pulsing center dot */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: 5,
          height: 5,
          background: "#7EB8D4",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
        animate={{ scale: [1, 2.2, 1], opacity: [0.35, 0.08, 0.35] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Stat card: Uptime — upper-right, floats up */}
      <motion.div
        className="absolute rounded-xl border"
        style={{
          top: 96,
          right: 18,
          background: "rgba(11,11,11,0.93)",
          borderColor: "rgba(255,255,255,0.07)",
          padding: "9px 13px",
          backdropFilter: "blur(8px)",
        }}
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <p style={{ fontSize: "0.5rem", color: "#3a3a3a", letterSpacing: "0.09em", textTransform: "uppercase", marginBottom: 3 }}>
          Uptime
        </p>
        <p className="font-display font-semibold" style={{ color: "#7EB8D4", fontSize: "1rem", letterSpacing: "-0.02em", lineHeight: 1 }}>
          99.9%
        </p>
      </motion.div>

      {/* Stat card: Shipped — lower-left, floats down */}
      <motion.div
        className="absolute rounded-xl border"
        style={{
          bottom: 108,
          left: 12,
          background: "rgba(11,11,11,0.93)",
          borderColor: "rgba(255,255,255,0.07)",
          padding: "9px 13px",
          backdropFilter: "blur(8px)",
        }}
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        <p style={{ fontSize: "0.5rem", color: "#3a3a3a", letterSpacing: "0.09em", textTransform: "uppercase", marginBottom: 3 }}>
          Shipped
        </p>
        <p className="font-display font-semibold" style={{ color: "#7EB8D4", fontSize: "1rem", letterSpacing: "-0.02em", lineHeight: 1 }}>
          150+
        </p>
      </motion.div>

      {/* Stat card: Score — center-right, gentle float */}
      <motion.div
        className="absolute rounded-xl border"
        style={{
          top: 268,
          right: 4,
          background: "rgba(11,11,11,0.93)",
          borderColor: "rgba(255,255,255,0.07)",
          padding: "9px 13px",
          backdropFilter: "blur(8px)",
        }}
        animate={{ y: [0, -4, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2.5 }}
      >
        <p style={{ fontSize: "0.5rem", color: "#3a3a3a", letterSpacing: "0.09em", textTransform: "uppercase", marginBottom: 3 }}>
          Perf score
        </p>
        <p className="font-display font-semibold" style={{ color: "#7EB8D4", fontSize: "1rem", letterSpacing: "-0.02em", lineHeight: 1 }}>
          95+
        </p>
      </motion.div>
    </motion.div>
  );
}
