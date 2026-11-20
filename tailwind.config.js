/** @type {import('tailwindcss').Config} */
// NexaPro design system — palette drawn from the logo's cyan arc (#00B8E6 → #0077B6)
// set against a deep ink base, with a paper tone for light editorial sections and a
// restrained phosphor green reserved for the legacy / green-screen division.
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#00B8E6",
        "primary-deep": "#0077B6",
        "primary-soft": "#7FDBF5",
        accent: "#00E5FF",
        ink: "#060A12",
        navy: "#0A1220",
        surface: "#0F1A2B",
        "surface-2": "#14223A",
        line: "rgba(127, 219, 245, 0.14)",
        muted: "#8EA0B8",
        paper: "#F3F6F9",
        "paper-2": "#E7EDF3",
        graphite: "#0B1524",
        phosphor: "#3DDC97",
        amber: "#F5B547",
        secondary: "#070B14",
        dark: "#F4F7FB",
        light: "#F4F7FB",
      },
      fontFamily: {
        sans: ['"IBM Plex Sans"', "system-ui", "sans-serif"],
        display: ["Sora", '"IBM Plex Sans"', "sans-serif"],
        mono: ['"IBM Plex Mono"', "ui-monospace", "monospace"],
      },
      fontSize: {
        "display-xl": ["clamp(2.6rem, 5.2vw, 4.6rem)", { lineHeight: "1.04", letterSpacing: "-0.03em" }],
        "display-lg": ["clamp(2rem, 3.6vw, 3.2rem)", { lineHeight: "1.1", letterSpacing: "-0.025em" }],
        "display-md": ["clamp(1.5rem, 2.4vw, 2.1rem)", { lineHeight: "1.2", letterSpacing: "-0.02em" }],
      },
      boxShadow: {
        glow: "0 0 40px rgba(0, 184, 230, 0.18)",
        card: "0 24px 60px rgba(0, 0, 0, 0.35)",
        lift: "0 30px 80px -30px rgba(0, 20, 40, 0.55)",
      },
      maxWidth: {
        site: "82rem",
      },
    },
  },
  plugins: [],
};
