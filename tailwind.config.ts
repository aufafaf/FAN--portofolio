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
        neon: {
          pink: "#ff006e",
          cyan: "#00f0ff",
          purple: "#8b5cf6",
          green: "#39ff14",
        },
        // Elegant Minimalist - Ivory & Brown palette
        elegant: {
          ivory: "#FFFFF0",
          cream: "#FAF9F6",
          linen: "#F5F0E8",
          sand: "#E8DCC4",
          taupe: "#B8A892",
          brown: "#6B5444",
          "deep-brown": "#4A3728",
          charcoal: "#2C2418",
        },
        // Accent colors - Sophisticated
        "accent-primary": "#6B5444", // Warm brown
        "accent-secondary": "#8B7355", // Light brown
        "accent-tertiary": "#A68A64", // Gold brown
        "accent-highlight": "#D4A574", // Soft gold
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
        float: "float 6s ease-in-out infinite",
        "pulse-subtle": "pulseSubtle 3s ease-in-out infinite",
        shimmer: "shimmer 2.5s linear infinite",
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
          "50%": {
            boxShadow:
              "0 0 20px rgba(255, 0, 110, 0.8), 0 0 30px rgba(255, 0, 110, 0.6)",
          },
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
            textShadow:
              "0 0 4px #fff, 0 0 11px #fff, 0 0 19px #fff, 0 0 40px #0fa, 0 0 80px #0fa, 0 0 90px #0fa, 0 0 100px #0fa, 0 0 150px #0fa",
          },
          "50%": {
            textShadow:
              "0 0 2px #fff, 0 0 5px #fff, 0 0 7px #fff, 0 0 10px #0fa, 0 0 17px #0fa, 0 0 20px #0fa, 0 0 30px #0fa, 0 0 40px #0fa",
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
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "cyber-grid":
          "linear-gradient(rgba(0, 240, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 240, 255, 0.1) 1px, transparent 1px)",
        "shimmer-gradient":
          "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent)",
      },
      backgroundSize: {
        "cyber-grid": "50px 50px",
      },
      boxShadow: {
        "neon-pink":
          "0 0 5px theme('colors.neon.pink'), 0 0 20px theme('colors.neon.pink')",
        "neon-cyan":
          "0 0 5px theme('colors.neon.cyan'), 0 0 20px theme('colors.neon.cyan')",
        "neon-purple":
          "0 0 5px theme('colors.neon.purple'), 0 0 20px theme('colors.neon.purple')",
        "neon-green":
          "0 0 5px theme('colors.neon.green'), 0 0 20px theme('colors.neon.green')",
        "glow-sm": "0 0 10px rgba(139, 92, 246, 0.5)",
        "glow-md": "0 0 20px rgba(139, 92, 246, 0.5)",
        "glow-lg": "0 0 40px rgba(139, 92, 246, 0.5)",
        "inner-glow": "inset 0 0 20px rgba(139, 92, 246, 0.3)",
      },
      backdropBlur: {
        xs: "2px",
      },
      transitionTimingFunction: {
        cyber: "cubic-bezier(0.87, 0, 0.13, 1)",
      },
      screens: {
        xs: "475px",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
