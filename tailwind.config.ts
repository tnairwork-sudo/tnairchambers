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
        ink: "#080806",
        parchment: "#f0ede6",
        "parchment-dim": "#9a9088",
        gold: "#c4a55a",
        "gold-light": "#d8bc7a",
        "surface": "#0f0e0b",
        "surface-2": "#181612",
        "border": "#2a2620",
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
