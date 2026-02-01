import { useState, useEffect, useCallback } from "react";
import { KONAMI_CODE } from "@/lib/constants";

/**
 * Hook to detect Konami Code input
 * Returns true when user enters the Konami Code sequence
 * 
 * Default sequence: ↑ ↑ ↓ ↓ ← → ← → B A
 */
export const useKonamiCode = (callback?: () => void, customSequence?: string[]) => {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [keySequence, setKeySequence] = useState<string[]>([]);

  const sequence = customSequence || KONAMI_CODE;

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      const newSequence = [...keySequence, event.key];

      // Keep only the last N keys where N is the length of the target sequence
      if (newSequence.length > sequence.length) {
        newSequence.shift();
      }

      setKeySequence(newSequence);

      // Check if the sequence matches
      const isMatch = newSequence.every((key, index) => key === sequence[index]);

      if (isMatch && newSequence.length === sequence.length) {
        setIsUnlocked(true);
        callback?.();
        
        // Reset after 5 seconds
        setTimeout(() => {
          setIsUnlocked(false);
          setKeySequence([]);
        }, 5000);
      }
    },
    [keySequence, sequence, callback]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

  return isUnlocked;
};

/**
 * Hook to detect custom key sequence
 */
export const useKeySequence = (
  targetSequence: string[],
  callback: () => void,
  options?: {
    resetDelay?: number;
    caseSensitive?: boolean;
  }
) => {
  const [currentSequence, setCurrentSequence] = useState<string[]>([]);
  const [isMatched, setIsMatched] = useState(false);

  const resetDelay = options?.resetDelay ?? 5000;
  const caseSensitive = options?.caseSensitive ?? false;

  const handleKeyPress = useCallback(
    (event: KeyboardEvent) => {
      const key = caseSensitive ? event.key : event.key.toLowerCase();
      const newSequence = [...currentSequence, key];

      // Keep only the last N keys
      if (newSequence.length > targetSequence.length) {
        newSequence.shift();
      }

      setCurrentSequence(newSequence);

      // Check for match
      const compareSequence = caseSensitive ? targetSequence : targetSequence.map(k => k.toLowerCase());
      const matches = newSequence.every((k, i) => k === compareSequence[i]);

      if (matches && newSequence.length === targetSequence.length) {
        setIsMatched(true);
        callback();

        // Reset after delay
        setTimeout(() => {
          setIsMatched(false);
          setCurrentSequence([]);
        }, resetDelay);
      }
    },
    [currentSequence, targetSequence, callback, resetDelay, caseSensitive]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [handleKeyPress]);

  return { isMatched, currentSequence };
};

/**
 * Hook for click-based easter egg
 * Detects rapid clicks on an element
 */
export const useClickSecret = (
  clickCount: number = 7,
  timeWindow: number = 2000,
  callback?: () => void
) => {
  const [clicks, setClicks] = useState<number[]>([]);
  const [isUnlocked, setIsUnlocked] = useState(false);

  const handleClick = () => {
    const now = Date.now();
    const recentClicks = [...clicks, now].filter(
      (timestamp) => now - timestamp < timeWindow
    );

    setClicks(recentClicks);

    if (recentClicks.length >= clickCount) {
      setIsUnlocked(true);
      callback?.();
      setClicks([]);

      // Reset after 5 seconds
      setTimeout(() => {
        setIsUnlocked(false);
      }, 5000);
    }
  };

  return { handleClick, isUnlocked };
};