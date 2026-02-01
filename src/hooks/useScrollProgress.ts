import { useState, useEffect } from "react";
import type { ScrollProgress } from "@/types";

/**
 * Hook to track scroll progress
 * Returns progress from 0 to 1 representing how far user has scrolled
 */
export const useScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;

      const totalScroll = documentHeight - windowHeight;
      const progress = scrollTop / totalScroll;

      setScrollProgress(Math.min(Math.max(progress, 0), 1));
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial calculation

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return scrollProgress;
};

/**
 * Hook to track detailed scroll information including direction and velocity
 */
export const useScrollInfo = (): ScrollProgress => {
  const [scrollInfo, setScrollInfo] = useState<ScrollProgress>({
    progress: 0,
    direction: "down",
    velocity: 0,
  });

  const [lastScrollY, setLastScrollY] = useState(0);
  const [lastTime, setLastTime] = useState(Date.now());

  useEffect(() => {
    const handleScroll = () => {
      const currentTime = Date.now();
      const currentScrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      // Calculate progress
      const totalScroll = documentHeight - windowHeight;
      const progress = Math.min(Math.max(currentScrollY / totalScroll, 0), 1);

      // Calculate direction
      const direction = currentScrollY > lastScrollY ? "down" : "up";

      // Calculate velocity (pixels per millisecond)
      const timeDiff = currentTime - lastTime;
      const scrollDiff = Math.abs(currentScrollY - lastScrollY);
      const velocity = timeDiff > 0 ? scrollDiff / timeDiff : 0;

      setScrollInfo({
        progress,
        direction,
        velocity,
      });

      setLastScrollY(currentScrollY);
      setLastTime(currentTime);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial calculation

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY, lastTime]);

  return scrollInfo;
};

/**
 * Hook to detect if user has scrolled past a certain threshold
 */
export const useScrollThreshold = (threshold: number = 100) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > threshold);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [threshold]);

  return isScrolled;
};

/**
 * Hook to get current scroll position
 */
export const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition({
        x: window.scrollX,
        y: window.scrollY,
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial position

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return scrollPosition;
};