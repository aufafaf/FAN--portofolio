"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface LoadingScreenProps {
  onLoadingComplete?: () => void;
  duration?: number;
}

/**
 * 3D Loading Screen Component
 * Spectacular loading animation with progress bar
 */
export function LoadingScreen({
  onLoadingComplete,
  duration = 3000,
}: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsComplete(true);
          setTimeout(() => {
            onLoadingComplete?.();
          }, 500);
          return 100;
        }
        return prev + 1;
      });
    }, duration / 100);

    return () => clearInterval(interval);
  }, [duration, onLoadingComplete]);

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-background"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Subtle background pattern */}
          <div className="subtle-grid absolute inset-0 opacity-20" />

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center gap-8">
            {/* Logo/Text with Clean Animation */}
            <div className="text-center">
              <motion.h1
                className="font-display text-5xl font-bold tracking-wide md:text-7xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                INITIALIZING
              </motion.h1>
              <motion.p
                className="mt-4 font-mono text-sm text-muted-foreground md:text-base"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                LOADING EXPERIENCE...
              </motion.p>
            </div>

            {/* 3D Spinner */}
            <div className="relative h-24 w-24">
              {/* Outer ring */}
              <motion.div
                className="absolute inset-0 rounded-full border-4 border-accent-primary/30"
                animate={{ rotate: 360 }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />

              {/* Middle ring */}
              <motion.div
                className="absolute inset-2 rounded-full border-4 border-accent-secondary/30"
                animate={{ rotate: -360 }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />

              {/* Inner ring */}
              <motion.div
                className="absolute inset-4 rounded-full border-4 border-accent-tertiary/30"
                animate={{ rotate: 360 }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />

              {/* Center dot */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  className="h-4 w-4 rounded-full bg-accent-primary shadow-elegant"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [1, 0.5, 1],
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </div>
            </div>

            {/* Progress Bar */}
            <div className="w-80 max-w-[90vw]">
              <div className="relative h-2 overflow-hidden rounded-full bg-elegant-sand/30">
                {/* Animated background */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-accent-primary/20 to-transparent"
                  animate={{ x: ["-100%", "100%"] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />

                {/* Progress fill */}
                <motion.div
                  className="relative h-full bg-gradient-to-r from-accent-primary via-accent-secondary to-accent-tertiary"
                  initial={{ width: "0%" }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>

              {/* Progress text */}
              <div className="mt-2 flex items-center justify-between font-mono text-xs text-accent-primary">
                <span>{progress}%</span>
                <motion.span
                  animate={{ opacity: [1, 0.5, 1] }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  {progress < 100 ? "LOADING..." : "COMPLETE"}
                </motion.span>
              </div>
            </div>

            {/* Random loading messages */}
            <LoadingMessages progress={progress} />
          </div>

          {/* Corner decorations */}
          <CornerDecorations />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/**
 * Loading Messages Component
 */
function LoadingMessages({ progress }: { progress: number }) {
  const messages = [
    "Establishing connection...",
    "Loading 3D assets...",
    "Initializing particles...",
    "Calibrating animations...",
    "Loading shaders...",
    "Preparing experience...",
    "Almost there...",
    "Ready!",
  ];

  const currentMessage =
    messages[Math.floor((progress / 100) * (messages.length - 1))];

  return (
    <motion.p
      key={currentMessage}
      className="font-mono text-xs text-muted-foreground"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
    >
      {currentMessage}
    </motion.p>
  );
}

/**
 * Corner Decorations Component
 */
function CornerDecorations() {
  return (
    <>
      {/* Top Left */}
      <div className="absolute left-8 top-8 h-16 w-16 border-l-2 border-t-2 border-neon-cyan" />

      {/* Top Right */}
      <div className="absolute right-8 top-8 h-16 w-16 border-r-2 border-t-2 border-neon-cyan" />
className="absolute right-4 top-4 h-20 w-20 border-r-2 border-t-2 border- md:right-8 md:top-8"


      {/* Bottom Left */}
      <div className="absolute bottom-8 left-8 h-16 w-16 border-b-2 border-l-2 border-neon-pink" />

      {/* Bottom Right */}
      <div className="absolute bottom-8 right-8 h-16 w-16 border-b-2 border-r-2 border-neon-pink" />
    </>
  );
}