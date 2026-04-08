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
        ink: "#f7f4ef",
        parchment: "#1c1814",
        "parchment-dim": "#6e6560",
        gold: "#9a7840",
        "gold-light": "#b89050",
        "surface": "#eeead3",
        "surface-2": "#e8e3d8",
        "border": "#d8d0c4",
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
