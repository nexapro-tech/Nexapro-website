/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#00B8E6",
        "primary-deep": "#0077B6",
        ink: "#05070C",
        navy: "#0A1220",
        surface: "#101A2C",
        line: "rgba(0, 184, 230, 0.22)",
        muted: "#8EA0B8",
        secondary: "#070B14",
        dark: "#F4F7FB",
        light: "#F4F7FB",
        accent: "#00E5FF",
      },
      fontFamily: {
        sans: ["Outfit", "Montserrat", "sans-serif"],
        display: ["Outfit", "Montserrat", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 40px rgba(0, 184, 230, 0.18)",
        card: "0 24px 60px rgba(0, 0, 0, 0.35)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        "spin-slow": {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        "pulse-ring": {
          "0%": { transform: "scale(0.92)", opacity: "0.7" },
          "100%": { transform: "scale(1.18)", opacity: "0" },
        },
        orbit: {
          from: { transform: "rotate(0deg) translateX(var(--orbit-r)) rotate(0deg)" },
          to: { transform: "rotate(360deg) translateX(var(--orbit-r)) rotate(-360deg)" },
        },
        "glow-shift": {
          "0%, 100%": { opacity: "0.55", transform: "translate3d(0, 0, 0) scale(1)" },
          "50%": { opacity: "0.9", transform: "translate3d(24px, -16px, 0) scale(1.08)" },
        },
        "gradient-flow": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        "dot-pulse": {
          "0%, 100%": { opacity: "0.35", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.35)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "spin-slow": "spin-slow 28s linear infinite",
        "spin-reverse": "spin-slow 40s linear infinite reverse",
        marquee: "marquee 32s linear infinite",
        shimmer: "shimmer 3s linear infinite",
        "pulse-ring": "pulse-ring 2.4s ease-out infinite",
        orbit: "orbit 18s linear infinite",
        "glow-shift": "glow-shift 10s ease-in-out infinite",
        "gradient-flow": "gradient-flow 8s ease infinite",
        "dot-pulse": "dot-pulse 3.6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
