"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface GlitchTextProps {
  text: string;
  className?: string;
  active?: boolean;
  speed?: number;
}

/**
 * Glitch Text Effect Component
 * Creates cyberpunk-style glitch text animation
 */
export function GlitchText({
  text,
  className = "",
  active = true,
  speed = 2000,
}: GlitchTextProps) {
  const [isGlitching, setIsGlitching] = useState(false);

  useEffect(() => {
    if (!active) return;

    const interval = setInterval(() => {
      setIsGlitching(true);
      setTimeout(() => setIsGlitching(false), 200);
    }, speed);

    return () => clearInterval(interval);
  }, [active, speed]);

  return (
    <span
      className={cn(
        "relative inline-block",
        isGlitching && "glitch-active",
        className
      )}
      data-text={text}
    >
      {text}
      {isGlitching && (
        <>
          <span
            className="absolute left-0 top-0 animate-glitch text-neon-cyan opacity-70"
            style={{
              clipPath: "polygon(0 0, 100% 0, 100% 45%, 0 45%)",
              transform: "translateX(-2px)",
            }}
            aria-hidden="true"
          >
            {text}
          </span>
          <span
            className="absolute left-0 top-0 animate-glitch text-neon-pink opacity-70"
            style={{
              clipPath: "polygon(0 55%, 100% 55%, 100% 100%, 0 100%)",
              transform: "translateX(2px)",
            }}
            aria-hidden="true"
          >
            {text}
          </span>
        </>
      )}
    </span>
  );
}

/**
 * Continuous Glitch Text - Always animating
 */
export function GlitchTextContinuous({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}) {
  return (
    <div className={cn("relative inline-block", className)}>
      <span className="relative z-10">{text}</span>
      <span
        className="absolute left-0 top-0 -z-10 animate-glitch text-neon-cyan opacity-70"
        style={{
          clipPath: "polygon(0 0, 100% 0, 100% 45%, 0 45%)",
        }}
        aria-hidden="true"
      >
        {text}
      </span>
      <span
        className="absolute left-0 top-0 -z-10 animate-glitch text-neon-pink opacity-70"
        style={{
          clipPath: "polygon(0 80%, 100% 20%, 100% 100%, 0 100%)",
          animationDelay: "0.1s",
        }}
        aria-hidden="true"
      >
        {text}
      </span>
    </div>
  );
}

/**
 * Data Scramble Effect - Matrix-style text scramble
 */
export function ScrambleText({
  text,
  className = "",
  onComplete,
}: {
  text: string;
  className?: string;
  onComplete?: () => void;
}) {
  const [displayText, setDisplayText] = useState(text);
  const [isScrambling, setIsScrambling] = useState(true);

  useEffect(() => {
    const chars = "!@#$%^&*()_+-=[]{}|;:,.<>?/~`";
    let iteration = 0;

    const interval = setInterval(() => {
      setDisplayText(
        text
          .split("")
          .map((char, index) => {
            if (index < iteration) {
              return text[index];
            }
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join("")
      );

      if (iteration >= text.length) {
        clearInterval(interval);
        setIsScrambling(false);
        onComplete?.();
      }

      iteration += 1 / 3;
    }, 30);

    return () => clearInterval(interval);
  }, [text, onComplete]);

  return (
    <span
      className={cn(
        "inline-block font-mono",
        isScrambling && "text-neon-cyan",
        className
      )}
    >
      {displayText}
    </span>
  );
}