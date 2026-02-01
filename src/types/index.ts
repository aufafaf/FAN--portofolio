/**
 * TypeScript type definitions for the portfolio
 */

import { ReactNode } from "react";

// Project Types
export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  category: ProjectCategory;
  tags: string[];
  technologies: string[];
  image: string;
  images?: string[];
  video?: string;
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
  year: number;
  client?: string;
  role?: string;
  duration?: string;
  achievements?: string[];
  color?: string; // Accent color for the project
}

export type ProjectCategory =
  | "All"
  | "Web Development"
  | "3D Graphics"
  | "Mobile App"
  | "UI/UX Design"
  | "Game Development";

// Experience Types
export interface Experience {
  id: string;
  company: string;
  position: string;
  location: string;
  startDate: string;
  endDate: string | "Present";
  description: string;
  responsibilities: string[];
  achievements: string[];
  technologies: string[];
  logo?: string;
  companyUrl?: string;
  type: "Full-time" | "Part-time" | "Contract" | "Freelance" | "Internship";
}

// Skill Types
export interface Skill {
  id: string;
  name: string;
  category: SkillCategory;
  level: number; // 0-100
  icon?: string;
  color?: string;
  yearsOfExperience?: number;
  description?: string;
}

export type SkillCategory =
  | "frontend"
  | "backend"
  | "design"
  | "tools"
  | "3d"
  | "database"
  | "devops"
  | "mobile";

export interface SkillGroup {
  category: SkillCategory;
  title: string;
  skills: Skill[];
  icon?: ReactNode;
}

// Education Types
export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  startDate: string;
  endDate: string | "Present";
  gpa?: string;
  achievements?: string[];
  description?: string;
  logo?: string;
}

// Certification Types
export interface Certification {
  id: string;
  name: string;
  issuer: string;
  date: string;
  expiryDate?: string;
  credentialId?: string;
  credentialUrl?: string;
  logo?: string;
  skills?: string[];
}

// Blog/Article Types
export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  tags: string[];
  author: string;
  publishDate: string;
  readTime: number; // in minutes
  image: string;
  featured?: boolean;
  views?: number;
  likes?: number;
}

// Social Link Types
export interface SocialLink {
  name: string;
  url: string;
  icon: ReactNode;
  color?: string;
  username?: string;
}

// Testimonial Types
export interface Testimonial {
  id: string;
  name: string;
  position: string;
  company: string;
  avatar?: string;
  quote: string;
  rating?: number;
  date?: string;
}

// Contact Form Types
export interface ContactFormData {
  name: string;
  email: string;
  subject?: string;
  message: string;
  phone?: string;
  company?: string;
  budget?: string;
  timeline?: string;
}

// Theme Types
export type Theme = "light" | "dark" | "auto";

export interface ThemeColors {
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  foreground: string;
}

// Animation Types
export interface AnimationConfig {
  duration?: number;
  delay?: number;
  ease?: string;
  repeat?: number;
  yoyo?: boolean;
}

// 3D Types
export interface Model3D {
  path: string;
  scale?: number;
  position?: [number, number, number];
  rotation?: [number, number, number];
}

export interface ParticleConfig {
  count: number;
  size: number;
  color: string;
  speed: number;
  opacity: number;
}

// Navigation Types
export interface NavLink {
  name: string;
  href: string;
  icon?: ReactNode;
  external?: boolean;
}

// Modal Types
export interface Modal {
  isOpen: boolean;
  content?: ReactNode;
  title?: string;
  onClose?: () => void;
}

// Toast/Notification Types
export type ToastType = "success" | "error" | "warning" | "info";

export interface Toast {
  id: string;
  type: ToastType;
  message: string;
  duration?: number;
}

// SEO Types
export interface SEOData {
  title: string;
  description: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: string;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
}

// API Response Types
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface APIResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

// Store Types (Zustand)
export interface ThemeStore {
  theme: Theme;
  accentColor: string;
  setTheme: (theme: Theme) => void;
  setAccentColor: (color: string) => void;
}

export interface AudioStore {
  isEnabled: boolean;
  volume: number;
  isMuted: boolean;
  currentTrack?: string;
  toggleAudio: () => void;
  setVolume: (volume: number) => void;
  toggleMute: () => void;
  playSound: (sound: string) => void;
}

export interface UIStore {
  isMenuOpen: boolean;
  isCommandPaletteOpen: boolean;
  activeSection: string;
  cursorVariant: "default" | "hover" | "click";
  setMenuOpen: (isOpen: boolean) => void;
  setCommandPaletteOpen: (isOpen: boolean) => void;
  setActiveSection: (section: string) => void;
  setCursorVariant: (variant: "default" | "hover" | "click") => void;
}

// Utility Types
export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

export type Nullable<T> = T | null;

export type Optional<T> = T | undefined;

// Component Props Types
export interface BaseComponentProps {
  className?: string;
  children?: ReactNode;
  style?: React.CSSProperties;
}

export interface SectionProps extends BaseComponentProps {
  id: string;
  title?: string;
  subtitle?: string;
}

// Mouse/Touch Event Types
export interface MousePosition {
  x: number;
  y: number;
}

export interface TouchPosition {
  x: number;
  y: number;
  identifier: number;
}

// Scroll Types
export interface ScrollProgress {
  progress: number; // 0 to 1
  direction: "up" | "down";
  velocity: number;
}

// Performance Types
export interface PerformanceMetrics {
  fps: number;
  memory?: number;
  renderTime?: number;
}

// Easter Egg Types
export interface EasterEgg {
  id: string;
  trigger: string | string[];
  action: () => void;
  unlocked: boolean;
}

// Achievement Types
export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: ReactNode;
  unlocked: boolean;
  unlockedAt?: Date;
  rarity: "common" | "rare" | "epic" | "legendary";
}

// Command Palette Types
export interface Command {
  id: string;
  label: string;
  shortcut?: string;
  icon?: ReactNode;
  action: () => void;
  category?: string;
}

// Filter Types
export interface Filter {
  category: string;
  active: boolean;
}

// Pagination Types
export interface Pagination {
  currentPage: number;
  totalPages: number;
  itemsPerPage: number;
  totalItems: number;
}

// Search Types
export interface SearchResult {
  id: string;
  title: string;
  type: "project" | "blog" | "skill" | "experience";
  url: string;
  excerpt?: string;
}