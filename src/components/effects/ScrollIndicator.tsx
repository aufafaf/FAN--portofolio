"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useScrollProgress } from "@/hooks/useScrollProgress";
import { cn } from "@/lib/utils";

interface ScrollIndicatorProps {
  className?: string;
  showPercentage?: boolean;
}

/**
 * Scroll Progress Indicator Component
 * Shows visual progress of page scroll
 */
export function ScrollIndicator({
  className = "",
  showPercentage = false,
}: ScrollIndicatorProps) {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const progress = useScrollProgress();
  const percentage = Math.round(progress * 100);

  return (
    <>
      {/* Top progress bar */}
      <motion.div
        className={cn(
          "fixed left-0 top-0 z-50 h-1 origin-left bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-pink",
          className
        )}
        style={{ scaleX, width: "100%" }}
      />

      {/* Percentage indicator (optional) */}
      {showPercentage && (
        <motion.div
          className="fixed right-4 top-4 z-50 rounded-lg border border-neon-cyan/30 bg-cyber-dark/80 px-3 py-1 font-mono text-xs text-neon-cyan backdrop-blur-sm"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: progress > 0.01 ? 1 : 0, y: progress > 0.01 ? 0 : -20 }}
          transition={{ duration: 0.3 }}
        >
          {percentage}%
        </motion.div>
      )}
    </>
  );
}

/**
 * Circular Scroll Indicator
 * Shows scroll progress in a circular design
 */
export function CircularScrollIndicator({ className = "" }: { className?: string }) {
  const progress = useScrollProgress();
  const circumference = 2 * Math.PI * 45; // radius = 45
  const strokeDashoffset = circumference - progress * circumference;

  return (
    <motion.div
      className={cn(
        "fixed bottom-8 right-8 z-50 h-20 w-20",
        className
      )}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: progress > 0.01 ? 1 : 0, scale: progress > 0.01 ? 1 : 0 }}
      transition={{ duration: 0.3 }}
    >
      <svg className="h-full w-full -rotate-90" viewBox="0 0 100 100">
        {/* Background circle */}
        <circle
          cx="50"
          cy="50"
          r="45"
          fill="none"
          stroke="rgba(0, 240, 255, 0.1)"
          strokeWidth="4"
        />

        {/* Progress circle */}
        <motion.circle
          cx="50"
          cy="50"
          r="45"
          fill="none"
          stroke="url(#gradient)"
          strokeWidth="4"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          style={{ transition: "stroke-dashoffset 0.3s ease" }}
        />

        {/* Gradient definition */}
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00F0FF" />
            <stop offset="50%" stopColor="#8B5CF6" />
            <stop offset="100%" stopColor="#FF006E" />
          </linearGradient>
        </defs>
      </svg>

      {/* Percentage text */}
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="font-mono text-xs font-bold text-neon-cyan">
          {Math.round(progress * 100)}
        </span>
      </div>
    </motion.div>
  );
}

/**
 * Scroll Down Indicator
 * Animated arrow prompting user to scroll
 */
export function ScrollDownIndicator({ className = "" }: { className?: string }) {
  const progress = useScrollProgress();

  return (
    <motion.div
      className={cn(
        "fixed bottom-8 left-1/2 z-40 flex -translate-x-1/2 flex-col items-center gap-2",
        className
      )}
      initial={{ opacity: 1 }}
      animate={{ opacity: progress > 0.1 ? 0 : 1 }}
      transition={{ duration: 0.3 }}
    >
      <span className="font-mono text-xs text-neon-cyan">SCROLL</span>
      <motion.div
        className="flex flex-col gap-1"
        animate={{ y: [0, 10, 0] }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="h-1 w-1 rounded-full bg-neon-cyan" />
        <div className="h-1 w-1 rounded-full bg-neon-cyan" />
        <div className="h-1 w-1 rounded-full bg-neon-cyan" />
      </motion.div>
    </motion.div>
  );
}