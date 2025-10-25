import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1200px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      fontFamily: {
        heading: ["var(--font-sora)", "sans-serif"],
        body: ["var(--font-space-grotesk)", "sans-serif"],
        barlow: ["Barlow", "sans-serif"],
        "barlow-semi-condensed": ["Barlow Semi Condensed", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          lg: "2rem",
        },
      },
      gap: {
        18: "4.5rem",
      },
      inset: {
        18: "4.5rem",
      },
      height: {
        18: "4.5rem",
      },
      padding: {
        18: "4.5rem",
      },
      rotate: {
        135: "135deg",
        225: "225deg",
        270: "270deg",
        315: "315deg",
      },
      keyframes: {
        "cursor-blink": {
          "0%": { opacity: "1" },
          "50%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      animation: {
        "cursor-blink": "cursor-blink 1s step-start infinite",
        marquee: "marquee var(--duration, 40s) linear infinite",
      },
      colors: {
        "10002B": "#10002B",
        "240046": "#240046",
        "3C096C": "#3C096C",
        "5A189A": "#5A189A",
        "7B2CBF": "#7B2CBF",
        "9D4EDD": "#9D4EDD",
        C77DFF: "#C77DFF",
        E0AAFF: "#E0AAFF",
        primary: "#3B82F6",
      },
    },
  },
  plugins: [],
};
export default config;
