import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Quiet base. Page ground.
        ink: "#faf9f6",
        // Quiet text. Headings and body on ivory. Also the dark section ground.
        parchment: "#0f0d0a",
        "parchment-dim": "#6b6460",
        // Hairlines, focus rings, nav underline. Antique gold, not red.
        accent: "#a8875a",
        // Raised panels on dark sections.
        graphite: "#1a1814",
        // Gold on dark grounds. Do not use this for text on ivory.
        gold: "#c4a55a",
        "gold-light": "#b8943f",
        // Gold text on ivory. Passes contrast. Design ink-colourway gold.
        "gold-ink": "#8a6840",
        // Logo gold. Hairlines on ivory, focus ring.
        antique: "#a8875a",
        // Logo pewter. Secondary text on dark when needed.
        silver: "#6c7178",
        surface: "#f3efe8",
        "surface-2": "#ece7de",
        border: "#dcd7cc",
      },
      spacing: {
        // One scale. 8, 16, 24, 32, 48, 64, 96, 128, 192.
        s1: "8px",
        s2: "16px",
        s3: "24px",
        s4: "32px",
        s5: "48px",
        s6: "64px",
        s7: "96px",
        s8: "128px",
        s9: "192px",
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "2xs": ["0.65rem", { lineHeight: "1rem", letterSpacing: "0.12em" }],
      },
      letterSpacing: {
        widest: "0.2em",
        ultra: "0.2em",
      },
      maxWidth: {
        "prose-tight": "58ch",
        hero: "900px",
      },
    },
  },
  plugins: [],
};

export default config;
