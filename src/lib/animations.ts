import { Variants } from "framer-motion";

/**
 * Framer Motion animation variants library
 * Reusable animation configurations for consistent motion design
 */

// Fade animations
export const fadeIn: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

export const fadeInUp: Variants = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 30 },
};

export const fadeInDown: Variants = {
  initial: { opacity: 0, y: -30 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -30 },
};

export const fadeInLeft: Variants = {
  initial: { opacity: 0, x: -50 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -50 },
};

export const fadeInRight: Variants = {
  initial: { opacity: 0, x: 50 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 50 },
};

// Scale animations
export const scaleIn: Variants = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.8 },
};

export const zoomIn: Variants = {
  initial: { opacity: 0, scale: 0 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0 },
};

// Rotation animations
export const rotateIn: Variants = {
  initial: { opacity: 0, rotate: -180, scale: 0.5 },
  animate: { opacity: 1, rotate: 0, scale: 1 },
  exit: { opacity: 0, rotate: 180, scale: 0.5 },
};

// Container animations (for stagger children)
export const containerVariants: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

export const staggerContainer: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

// Slide animations
export const slideInLeft: Variants = {
  initial: { x: "-100%", opacity: 0 },
  animate: { x: 0, opacity: 1 },
  exit: { x: "-100%", opacity: 0 },
};

export const slideInRight: Variants = {
  initial: { x: "100%", opacity: 0 },
  animate: { x: 0, opacity: 1 },
  exit: { x: "100%", opacity: 0 },
};

// Glitch effect
export const glitchVariants: Variants = {
  initial: { x: 0, y: 0 },
  animate: {
    x: [0, -2, 2, -2, 2, 0],
    y: [0, 2, -2, 2, -2, 0],
    transition: {
      duration: 0.5,
      repeat: Infinity,
      repeatDelay: 2,
    },
  },
};

// Floating effect
export const floatingVariants: Variants = {
  initial: { y: 0 },
  animate: {
    y: [-10, 10, -10],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

// Pulse effect
export const pulseVariants: Variants = {
  initial: { scale: 1 },
  animate: {
    scale: [1, 1.05, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

// Card hover effect
export const cardHover = {
  rest: { scale: 1, y: 0 },
  hover: {
    scale: 1.05,
    y: -10,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

// 3D Tilt effect
export const tiltVariants: Variants = {
  initial: { rotateX: 0, rotateY: 0 },
  hover: {
    rotateX: 10,
    rotateY: 10,
    transition: { duration: 0.3 },
  },
};

// Text reveal animation
export const textReveal: Variants = {
  initial: { y: "100%", opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.33, 1, 0.68, 1],
    },
  },
};

// Page transition
export const pageTransition: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.3,
      ease: "easeIn",
    },
  },
};

/**
 * Default transition configurations
 */
export const transitions = {
  default: {
    duration: 0.5,
    ease: "easeOut",
  },
  fast: {
    duration: 0.3,
    ease: "easeOut",
  },
  slow: {
    duration: 0.8,
    ease: "easeOut",
  },
  spring: {
    type: "spring",
    stiffness: 100,
    damping: 10,
  },
  bounce: {
    type: "spring",
    stiffness: 300,
    damping: 20,
  },
};

/**
 * GSAP animation configurations
 */
export const gsapConfig = {
  scrollTrigger: {
    start: "top 80%",
    end: "bottom 20%",
    toggleActions: "play none none reverse",
  },
  fadeIn: {
    opacity: 0,
    y: 50,
    duration: 1,
    ease: "power3.out",
  },
  slideIn: {
    x: -100,
    opacity: 0,
    duration: 0.8,
    ease: "power2.out",
  },
  scaleUp: {
    scale: 0,
    opacity: 0,
    duration: 0.6,
    ease: "back.out(1.7)",
  },
};

/**
 * Viewport configuration for scroll animations
 */
export const viewport = {
  once: true,
  amount: 0.3,
  margin: "0px 0px -100px 0px",
};