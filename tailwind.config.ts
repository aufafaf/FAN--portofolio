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
        // Cyberpunk color palette
        neon: {
          pink: "#FF006E",
          cyan: "#00F0FF",
          purple: "#8B5CF6",
          green: "#00FF41",
          yellow: "#FFFF00",
          orange: "#FF6B35",
        },
        cyber: {
          dark: "#0A0E27",
          darker: "#050816",
          blue: "#1A1F3A",
          purple: "#2D1B69",
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
        // Cyberpunk fonts - distinctive choices!
        heading: ["var(--font-orbitron)", "system-ui", "sans-serif"],
        body: ["var(--font-rajdhani)", "system-ui", "sans-serif"],
        mono: ["var(--font-fira-code)", "monospace"],
        display: ["var(--font-audiowide)", "system-ui", "sans-serif"],
      },
      animation: {
        // Custom animations
        "fade-in": "fadeIn 0.6s ease-out",
        "fade-up": "fadeUp 0.6s ease-out",
        "fade-down": "fadeDown 0.6s ease-out",
        "slide-in-left": "slideInLeft 0.6s ease-out",
        "slide-in-right": "slideInRight 0.6s ease-out",
        "zoom-in": "zoomIn 0.6s ease-out",
        "rotate-in": "rotateIn 0.6s ease-out",
        "glitch": "glitch 1s infinite",
        "pulse-glow": "pulseGlow 2s ease-in-out infinite",
        "float": "float 3s ease-in-out infinite",
        "spin-slow": "spin 8s linear infinite",
        "bounce-slow": "bounce 3s ease-in-out infinite",
        "gradient-x": "gradientX 15s ease infinite",
        "gradient-y": "gradientY 15s ease infinite",
        "gradient-xy": "gradientXY 15s ease infinite",
        "shimmer": "shimmer 2s linear infinite",
        "reveal": "reveal 0.7s ease-out",
        "typewriter": "typewriter 3s steps(40) 1s forwards",
        "blink": "blink 1s step-end infinite",
        "neon-pulse": "neonPulse 1.5s ease-in-out infinite",
        "hologram": "hologram 3s ease-in-out infinite",
        "scan-line": "scanLine 4s linear infinite",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
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
        "cyber-grid": "linear-gradient(rgba(0, 240, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 240, 255, 0.1) 1px, transparent 1px)",
        "shimmer-gradient": "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent)",
      },
      backgroundSize: {
        "cyber-grid": "50px 50px",
      },
      boxShadow: {
        "neon-pink": "0 0 5px theme('colors.neon.pink'), 0 0 20px theme('colors.neon.pink')",
        "neon-cyan": "0 0 5px theme('colors.neon.cyan'), 0 0 20px theme('colors.neon.cyan')",
        "neon-purple": "0 0 5px theme('colors.neon.purple'), 0 0 20px theme('colors.neon.purple')",
        "neon-green": "0 0 5px theme('colors.neon.green'), 0 0 20px theme('colors.neon.green')",
        "glow-sm": "0 0 10px rgba(139, 92, 246, 0.5)",
        "glow-md": "0 0 20px rgba(139, 92, 246, 0.5)",
        "glow-lg": "0 0 40px rgba(139, 92, 246, 0.5)",
        "inner-glow": "inset 0 0 20px rgba(139, 92, 246, 0.3)",
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
