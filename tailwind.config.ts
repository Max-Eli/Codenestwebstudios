import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/content/**/*.{js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        // Surfaces
        bg: "var(--bg)",
        "bg-2": "var(--bg-2)",
        "bg-3": "var(--bg-3)",
        // Foreground ramp
        fg: "var(--fg)",
        "fg-2": "var(--fg-2)",
        "fg-3": "var(--fg-3)",
        "fg-4": "var(--fg-4)",
        "fg-5": "var(--fg-5)",
        "fg-6": "var(--fg-6)",
        "fg-7": "var(--fg-7)",
        // Accent
        accent: {
          DEFAULT: "var(--accent)",
          bright: "var(--accent-bright)",
          dim: "var(--accent-dim)",
          soft: "var(--accent-soft)",
        },
      },
      borderColor: {
        DEFAULT: "var(--line-3)",
        line: "var(--line)",
        "line-2": "var(--line-2)",
        "line-3": "var(--line-3)",
        "line-4": "var(--line-4)",
        "line-5": "var(--line-5)",
        "line-6": "var(--line-6)",
      },
      fontFamily: {
        sans: ["var(--font-space-grotesk)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "ui-monospace", "monospace"],
      },
      maxWidth: {
        measure: "1240px",
      },
      animation: {
        marquee: "marquee 34s linear infinite",
        "pulse-dot": "pulse-dot 2.4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
