import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-montserrat)", "system-ui", "sans-serif"],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        brand: {
          "50": "#f0f7ff",
          "100": "#e0eefe",
          "200": "#bae0fd",
          "300": "#7cc8fb",
          "400": "#36aaf5",
          "500": "#0c8de0",
          "600": "#0170bd",
          "700": "#015999",
          "800": "#064b7f",
          "900": "#0a406a",
          "950": "#072a49",
        },
        accent1: {
          "50": "#f5f3ff",
          "100": "#ede8ff",
          "200": "#dcd5ff",
          "300": "#c3b2ff",
          "400": "#a584ff",
          "500": "#8a55ff",
          "600": "#7c33f6",
          "700": "#6b21dd",
          "800": "#581cb3",
          "900": "#491a91",
          "950": "#2e0e69",
        },
        accent2: {
          "50": "#f0fdf6",
          "100": "#dcfceb",
          "200": "#bbf6d9",
          "300": "#86eabe",
          "400": "#4ad69c",
          "500": "#22bd7d",
          "600": "#149865",
          "700": "#137a53",
          "800": "#136145",
          "900": "#11503a",
          "950": "#072d21",
        },
        chart: {
          "1": "221.2 83.2% 53.3%",
          "2": "262.1 83.3% 57.8%",
          "3": "316.6 73.2% 52.4%",
          "4": "175.9 84.8% 35.9%",
          "5": "47.7 95.8% 53.1%",
          "6": "26.8 83.3% 52.9%",
          "7": "334.3 84.4% 46.3%",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        xl: "1rem",
        "2xl": "1.5rem",
        "3xl": "2rem",
      },
      boxShadow: {
        soft: "0 2px 10px rgba(0, 0, 0, 0.05)",
        "soft-lg": "0 10px 25px -5px rgba(0, 0, 0, 0.05)",
        brand: "0 4px 14px 0 rgba(12, 141, 224, 0.39)",
        "brand-lg": "0 10px 25px -5px rgba(12, 141, 224, 0.4)",
        accent: "0 4px 14px 0 rgba(138, 85, 255, 0.39)",
        "accent-lg": "0 10px 25px -5px rgba(138, 85, 255, 0.4)",
        glow: "0 0 15px rgba(12, 141, 224, 0.5)",
        "glow-accent": "0 0 15px rgba(138, 85, 255, 0.5)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "pulse-soft": {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0.8 },
        },
        "gradient-x": {
          "0%, 100%": {
            "background-position": "0% 50%",
          },
          "50%": {
            "background-position": "100% 50%",
          },
        },
        shimmer: {
          "0%": {
            "background-position": "-1000px 0",
          },
          "100%": {
            "background-position": "1000px 0",
          },
        },
        "animation-delay-6000": {
          "0%, 100%": {
            "animation-delay": "6000ms",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        float: "float 3s ease-in-out infinite",
        "pulse-soft": "pulse-soft 2s ease-in-out infinite",
        "gradient-x": "gradient-x 15s ease infinite",
        shimmer: "shimmer 2s infinite linear",
        blob: "blob 7s infinite",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-mesh":
          "radial-gradient(at 40% 20%, rgba(12, 141, 224, 0.1) 0px, transparent 50%), radial-gradient(at 80% 0%, rgba(138, 85, 255, 0.1) 0px, transparent 50%), radial-gradient(at 0% 50%, rgba(12, 141, 224, 0.1) 0px, transparent 50%), radial-gradient(at 80% 50%, rgba(138, 85, 255, 0.1) 0px, transparent 50%), radial-gradient(at 0% 100%, rgba(12, 141, 224, 0.1) 0px, transparent 50%), radial-gradient(at 80% 100%, rgba(138, 85, 255, 0.1) 0px, transparent 50%), radial-gradient(at 0% 0%, rgba(12, 141, 224, 0.1) 0px, transparent 50%)",
      },
      textShadow: {
        sm: "0 1px 2px rgba(0, 0, 0, 0.1)",
        DEFAULT: "0 2px 4px rgba(0, 0, 0, 0.1)",
        lg: "0 8px 16px rgba(0, 0, 0, 0.1)",
        glow: "0 0 10px rgba(12, 141, 224, 0.5)",
      },
      backdropFilter: {
        none: "none",
        blur: "blur(8px)",
      },
      screens: {
        "3xl": "1920px",
        "4xl": "2560px",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require("tailwindcss-textshadow"),
    require("tailwindcss-filters"),
    // Add PurgeCSS for production builds
    process.env.NODE_ENV === "production"
      ? require("@fullhuman/postcss-purgecss")({
          content: [
            "./pages/**/*.{js,jsx,ts,tsx}",
            "./components/**/*.{js,jsx,ts,tsx}",
            "./app/**/*.{js,jsx,ts,tsx}",
            "*.{js,ts,jsx,tsx,mdx}",
          ],
          defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
          safelist: [
            /^bg-/,
            /^text-/,
            /^border-/,
            /^hover:/,
            /^focus:/,
            /^dark:/,
            /^sm:/,
            /^md:/,
            /^lg:/,
            /^xl:/,
            /^2xl:/,
          ],
        })
      : undefined,
  ].filter(Boolean),
} satisfies Config

export default config
