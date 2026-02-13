import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Modern Monochrome - Clean Black & White
        mono: {
          white: "#FFFFFF",
          "gray-50": "#FAFAFA",
          "gray-100": "#F5F5F5",
          "gray-200": "#E5E5E5",
          "gray-300": "#D4D4D4",
          "gray-400": "#A3A3A3",
          "gray-500": "#737373",
          "gray-600": "#525252",
          "gray-700": "#404040",
          "gray-800": "#262626",
          "gray-900": "#171717",
          black: "#000000",
        },
        // Accent colors - Minimal blue accent like GitHub
        "accent-primary": "#2563eb", // Blue (like GitHub)
        "accent-secondary": "#0070f3", // Vercel blue
        "accent-tertiary": "#3b82f6", // Light blue
        "accent-success": "#22c55e", // Green
        // Neon colors mapping (backward compatibility)
        neon: {
          cyan: "#2563eb",
          pink: "#0070f3",
          purple: "#3b82f6",
          green: "#22c55e",
          yellow: "#eab308",
          orange: "#f59e0b",
        },
        // Cyber colors mapping
        cyber: {
          dark: "#171717",
          darker: "#0a0a0a",
          blue: "#262626",
          purple: "#404040",
        },
        // Elegant alias (for existing code)
        elegant: {
          ivory: "#FFFFFF",
          cream: "#FAFAFA",
          linen: "#F5F5F5",
          sand: "#E5E5E5",
          taupe: "#A3A3A3",
          brown: "#737373",
          "deep-brown": "#404040",
          charcoal: "#171717",
        },
        // shadcn/ui colors
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
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        // Professional fonts - clean and elegant
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-playfair)", "Georgia", "serif"],
        mono: ["var(--font-fira-code)", "monospace"],
      },
      animation: {
        // Subtle, professional animations
        "fade-in": "fadeIn 0.6s ease-out",
        "fade-up": "fadeUp 0.6s ease-out",
        "slide-in": "slideIn 0.6s ease-out",
        "scale-in": "scaleIn 0.5s ease-out",
        "gradient-shift": "gradientShift 8s ease infinite",
        "float": "float 6s ease-in-out infinite",
        "pulse-subtle": "pulseSubtle 3s ease-in-out infinite",
        "shimmer": "shimmer 2.5s linear infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeDown: {
          "0%": { opacity: "0", transform: "translateY(-30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideInLeft: {
          "0%": { opacity: "0", transform: "translateX(-50px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        slideInRight: {
          "0%": { opacity: "0", transform: "translateX(50px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        zoomIn: {
          "0%": { opacity: "0", transform: "scale(0.8)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        rotateIn: {
          "0%": { opacity: "0", transform: "rotate(-180deg) scale(0.5)" },
          "100%": { opacity: "1", transform: "rotate(0) scale(1)" },
        },
        glitch: {
          "0%, 100%": { transform: "translate(0)" },
          "20%": { transform: "translate(-2px, 2px)" },
          "40%": { transform: "translate(-2px, -2px)" },
          "60%": { transform: "translate(2px, 2px)" },
          "80%": { transform: "translate(2px, -2px)" },
        },
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 5px rgba(255, 0, 110, 0.5)" },
          "50%": { boxShadow: "0 0 20px rgba(255, 0, 110, 0.8), 0 0 30px rgba(255, 0, 110, 0.6)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        gradientX: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        gradientY: {
          "0%, 100%": { backgroundPosition: "50% 0%" },
          "50%": { backgroundPosition: "50% 100%" },
        },
        gradientXY: {
          "0%, 100%": { backgroundPosition: "0% 0%" },
          "25%": { backgroundPosition: "100% 0%" },
          "50%": { backgroundPosition: "100% 100%" },
          "75%": { backgroundPosition: "0% 100%" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-1000px 0" },
          "100%": { backgroundPosition: "1000px 0" },
        },
        reveal: {
          "0%": { clipPath: "inset(0 100% 0 0)" },
          "100%": { clipPath: "inset(0 0 0 0)" },
        },
        typewriter: {
          "0%": { width: "0" },
          "100%": { width: "100%" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        neonPulse: {
          "0%, 100%": {
            textShadow: "0 0 4px #fff, 0 0 11px #fff, 0 0 19px #fff, 0 0 40px #0fa, 0 0 80px #0fa, 0 0 90px #0fa, 0 0 100px #0fa, 0 0 150px #0fa",
          },
          "50%": {
            textShadow: "0 0 2px #fff, 0 0 5px #fff, 0 0 7px #fff, 0 0 10px #0fa, 0 0 17px #0fa, 0 0 20px #0fa, 0 0 30px #0fa, 0 0 40px #0fa",
          },
        },
        hologram: {
          "0%, 100%": { opacity: "1", filter: "hue-rotate(0deg)" },
          "50%": { opacity: "0.8", filter: "hue-rotate(360deg)" },
        },
        scanLine: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100vh)" },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "shimmer-gradient": "linear-gradient(90deg, transparent, rgba(107, 84, 68, 0.1), transparent)",
        // Cyber grid alias (maps to subtle brown grid)
        "cyber-grid": "linear-gradient(rgba(107, 84, 68, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(107, 84, 68, 0.03) 1px, transparent 1px)",
      },
      backgroundSize: {
        "cyber-grid": "40px 40px",
      },
      boxShadow: {
        // Modern shadows - GitHub/Vercel style
        "elegant": "0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)",
        "elegant-lg": "0 10px 25px rgba(0, 0, 0, 0.1), 0 6px 10px rgba(0, 0, 0, 0.08)",
        "inner-light": "inset 0 2px 4px rgba(0, 0, 0, 0.06)",
        // Neon shadow aliases (subtle gray shadows)
        "neon-pink": "0 0 0 3px rgba(37, 99, 235, 0.1)",
        "neon-cyan": "0 0 0 3px rgba(37, 99, 235, 0.1)",
        "neon-purple": "0 0 0 3px rgba(59, 130, 246, 0.1)",
        "neon-green": "0 0 0 3px rgba(34, 197, 94, 0.1)",
        "glow-sm": "0 0 10px rgba(0, 0, 0, 0.1)",
        "glow-md": "0 4px 20px rgba(0, 0, 0, 0.15)",
        "glow-lg": "0 10px 40px rgba(0, 0, 0, 0.2)",
        "inner-glow": "inset 0 2px 10px rgba(0, 0, 0, 0.1)",
      },
      backdropBlur: {
        xs: "2px",
      },
      transitionTimingFunction: {
        "cyber": "cubic-bezier(0.87, 0, 0.13, 1)",
      },
      screens: {
        xs: "475px",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;