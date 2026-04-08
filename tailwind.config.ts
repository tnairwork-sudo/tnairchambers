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
        ink: "#080808",
        parchment: "#f0ede6",
        "parchment-dim": "#a09890",
        gold: "#b89a5a",
        "gold-light": "#d4b47a",
        "surface": "#111111",
        "surface-2": "#1a1a1a",
        "border": "#242424",
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
