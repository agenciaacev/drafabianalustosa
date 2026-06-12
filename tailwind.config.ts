import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#fcefe1",
        gold: "#cab195",
        taupe: "#8f857d",
        ink: "#2b2622",
        "ink-soft": "#4a433d",
      },
      fontFamily: {
        display: ['"ivypresto-display"', "serif"],
        body: ['"Libre Franklin"', "system-ui", "sans-serif"],
      },
      letterSpacing: {
        eyebrow: "0.32em",
      },
      maxWidth: {
        content: "1240px",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "slow-zoom": {
          "0%": { transform: "scale(1.08)" },
          "100%": { transform: "scale(1)" },
        },
      },
      animation: {
        "fade-up": "fade-up 1s cubic-bezier(0.22,1,0.36,1) forwards",
        "slow-zoom": "slow-zoom 8s ease-out forwards",
      },
    },
  },
  plugins: [],
};

export default config;
