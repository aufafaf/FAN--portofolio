/**
 * Application-wide constants and configuration
 */

// Personal Information
export const PERSONAL_INFO = {
  name: "Muhammad Falah Aufa Anggara",
  role: "Full Stack Developer | App Developer | Cyber Security Analyst",
  tagline: "Building secure and scalable solutions with modern technology",
  bio: "Computer Science student at Universitas Gadjah Mada with passion for full-stack development, mobile applications, and cybersecurity. Committed to writing clean, efficient code and building solutions that make a difference.",
  location: "Yogyakarta, Indonesia",
  email: "falahaufa@example.com",
  phone: "+62 xxx xxxx xxxx",
  availability: "Open for opportunities",
};

// Social Media Links
export const SOCIAL_LINKS = {
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourusername",
  twitter: "https://twitter.com/yourusername",
  instagram: "https://instagram.com/yourusername",
  dribbble: "https://dribbble.com/yourusername",
  behance: "https://behance.net/yourusername",
};

// Navigation Links
export const NAV_LINKS = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

// Skills Categories
export const SKILLS_CATEGORIES = {
  frontend: "Frontend Development",
  backend: "Backend Development",
  design: "Design & UI/UX",
  tools: "Tools & Platforms",
  "3d": "3D & Graphics",
};

// Project Categories
export const PROJECT_CATEGORIES = [
  "All",
  "Web Development",
  "3D Graphics",
  "Mobile App",
  "UI/UX Design",
  "Game Development",
] as const;

// Animation Durations (in seconds)
export const ANIMATION_DURATION = {
  fast: 0.3,
  normal: 0.5,
  slow: 0.8,
  verySlow: 1.2,
};

// Breakpoints (matching Tailwind)
export const BREAKPOINTS = {
  xs: 475,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
};

// Z-Index Layers
export const Z_INDEX = {
  background: -1,
  default: 0,
  navbar: 40,
  dropdown: 50,
  modal: 60,
  toast: 70,
  tooltip: 80,
  cursor: 90,
  loading: 100,
};

// Performance Settings
export const PERFORMANCE = {
  particleCount: {
    desktop: 100,
    mobile: 30,
  },
  modelQuality: {
    high: "high",
    medium: "medium",
    low: "low",
  },
  enable3D: true,
  enableParticles: true,
  enableSmoothScroll: true,
};

// Konami Code sequence for Easter Egg
export const KONAMI_CODE = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a",
];

// Contact Form Configuration
export const CONTACT_FORM = {
  emailJS: {
    serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "",
    templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "",
    publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "",
  },
};

// SEO Configuration
export const SEO = {
  title: "Your Name - Full Stack Developer",
  description:
    "Portfolio of Your Name - Full Stack Developer specializing in React, Next.js, Three.js, and modern web technologies.",
  keywords: [
    "web developer",
    "full stack developer",
    "react developer",
    "next.js",
    "three.js",
    "3d web",
    "portfolio",
    "frontend developer",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: process.env.NEXT_PUBLIC_APP_URL || "https://yourportfolio.com",
    siteName: "Your Name Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Your Name - Portfolio",
      },
    ],
  },
};

// Theme Colors (Spectacular Modern)
export const THEME_COLORS = {
  mono: {
    white: "#FFFFFF",
    gray50: "#FAFAFA",
    gray100: "#F4F4F5",
    gray200: "#E4E4E7",
    gray300: "#D4D4D8",
    gray400: "#A1A1AA",
    gray500: "#71717A",
    gray600: "#52525B",
    gray700: "#3F3F46",
    gray800: "#27272A",
    gray900: "#18181B",
    black: "#09090B",
  },
  accent: {
    primary: "#3B82F6", // Beautiful Blue
    secondary: "#8B5CF6", // Purple
    tertiary: "#06B6D4", // Cyan
    success: "#10B981", // Green
  },
};

// Sound Effects (paths to audio files)
export const SOUNDS = {
  hover: "/sounds/hover.mp3",
  click: "/sounds/click.mp3",
  success: "/sounds/success.mp3",
  error: "/sounds/error.mp3",
  ambient: "/sounds/ambient.mp3",
};

// 3D Model Paths
export const MODELS = {
  avatar: "/models/avatar.glb",
  logo: "/models/logo.glb",
  shapes: "/models/shapes.glb",
};

// Feature Flags
export const FEATURES = {
  enableAudio: process.env.NEXT_PUBLIC_ENABLE_AUDIO === "true",
  enable3D: process.env.NEXT_PUBLIC_ENABLE_3D === "true",
  enableEasterEggs: process.env.NEXT_PUBLIC_ENABLE_EASTER_EGGS === "true",
  enableAnalytics: !!process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID,
};

// API Endpoints (if needed)
export const API_ENDPOINTS = {
  contact: "/api/contact",
  newsletter: "/api/newsletter",
  views: "/api/views",
};

// Blog/Articles Configuration
export const BLOG = {
  postsPerPage: 6,
  categories: ["All", "Web Development", "3D Graphics", "Tutorials", "Thoughts"],
};

// Statistics
export const STATS = {
  yearsOfExperience: 5,
  projectsCompleted: 50,
  happyClients: 30,
  cupsOfCoffee: 1000,
};

// Command Palette Commands
export const COMMAND_PALETTE_COMMANDS = [
  { id: "home", label: "Go to Home", shortcut: "⌘H" },
  { id: "about", label: "Go to About", shortcut: "⌘A" },
  { id: "projects", label: "Go to Projects", shortcut: "⌘P" },
  { id: "contact", label: "Go to Contact", shortcut: "⌘C" },
  { id: "theme", label: "Toggle Theme", shortcut: "⌘T" },
];