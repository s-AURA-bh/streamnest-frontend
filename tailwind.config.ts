import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#09090c",
        foreground: "#f4f4f5",
        card: "#111116",
        muted: "#18181e",
        border: "#24242c",
        primary: "#8b83ff",
        "primary-foreground": "#ffffff",
        secondary: "#15151b",
        "secondary-foreground": "#e4e4e7"
      },
      fontFamily: {
        sans: [
          "Inter",
          "SF Pro Display",
          "SF Pro Text",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "sans-serif"
        ]
      },
      boxShadow: {
        card: "0 1px 0 rgba(255,255,255,.035) inset, 0 18px 50px rgba(0,0,0,.22)",
        glow: "0 0 44px rgba(121,108,255,.16)"
      },
      backgroundImage: {
        "hero-grid":
          "linear-gradient(rgba(255,255,255,.028) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.028) 1px, transparent 1px)"
      }
    }
  },
  plugins: []
};

export default config;
