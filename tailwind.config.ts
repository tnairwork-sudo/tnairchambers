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
        ink: "#faf9f6",
        parchment: "#0f0d0a",
        "parchment-dim": "#6b6460",
        gold: "#c4a55a",
        "gold-light": "#b8943f",
        "surface": "#f3efe8",
        "surface-2": "#ece7de",
        "border": "#dcd7cc",
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
        "ultra": "0.35em",
      },
      maxWidth: {
        "prose-tight": "58ch",
        "hero": "900px",
      },
    },
  },
  plugins: [],
};

export default config;
