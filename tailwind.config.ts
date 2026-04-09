import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Core palette — monochrome
        ink: "#0C0C0C",        // near-black background
        "ink-1": "#111111",    // card background
        "ink-2": "#1A1A1A",    // elevated surface
        "ink-3": "#222222",    // border/divider
        "ink-4": "#333333",    // disabled / very muted
        "ink-5": "#555555",    // muted text
        "ink-6": "#888888",    // secondary text
        snow: "#F5F5F3",       // off-white primary text
        "snow-2": "#C8C8C4",   // slightly dimmed text
        // Accent — single soft blue
        blue: {
          DEFAULT: "#7EB8D4",  // baby blue accent
          dim: "#4A8AA8",      // darker blue
          muted: "rgba(126,184,212,0.12)", // very subtle bg tint
          border: "rgba(126,184,212,0.25)", // accent border
        },
      },
      fontFamily: {
        sans: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-bricolage)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-2xl": ["clamp(3rem, 7vw, 6rem)", { lineHeight: "1.05", letterSpacing: "-0.03em" }],
        "display-xl": ["clamp(2.5rem, 5.5vw, 4.5rem)", { lineHeight: "1.06", letterSpacing: "-0.025em" }],
        "display-lg": ["clamp(2rem, 4vw, 3.25rem)", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "display-md": ["clamp(1.5rem, 2.5vw, 2rem)", { lineHeight: "1.2", letterSpacing: "-0.015em" }],
      },
      spacing: {
        "section": "7rem",
        "section-sm": "5rem",
      },
      borderColor: {
        DEFAULT: "#1A1A1A",
      },
      boxShadow: {
        "card": "0 1px 0 0 rgba(255,255,255,0.04), 0 4px 24px rgba(0,0,0,0.3)",
        "elevated": "0 8px 48px rgba(0,0,0,0.5), 0 1px 0 0 rgba(255,255,255,0.06)",
      },
      animation: {
        "spin-slow": "spin 12s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
