import { useState, useEffect } from "react";
import { BREAKPOINTS } from "@/lib/constants";

/**
 * Hook to track window size
 */
export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState<{
    width: number;
    height: number;
  }>({
    width: typeof window !== "undefined" ? window.innerWidth : 0,
    height: typeof window !== "undefined" ? window.innerHeight : 0,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial size

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return windowSize;
};

/**
 * Hook to check if viewport matches a media query
 */
export const useMediaQuery = (query: string): boolean => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    
    // Set initial value
    setMatches(media.matches);

    // Create listener
    const listener = (e: MediaQueryListEvent) => setMatches(e.matches);
    
    // Add listener
    media.addEventListener("change", listener);

    return () => {
      media.removeEventListener("change", listener);
    };
  }, [query]);

  return matches;
};

/**
 * Hook to check if viewport is mobile
 */
export const useIsMobile = (): boolean => {
  return useMediaQuery(`(max-width: ${BREAKPOINTS.md - 1}px)`);
};

/**
 * Hook to check if viewport is tablet
 */
export const useIsTablet = (): boolean => {
  return useMediaQuery(
    `(min-width: ${BREAKPOINTS.md}px) and (max-width: ${BREAKPOINTS.lg - 1}px)`
  );
};

/**
 * Hook to check if viewport is desktop
 */
export const useIsDesktop = (): boolean => {
  return useMediaQuery(`(min-width: ${BREAKPOINTS.lg}px)`);
};

/**
 * Hook to get current breakpoint
 */
export const useBreakpoint = () => {
  const [breakpoint, setBreakpoint] = useState<keyof typeof BREAKPOINTS>("lg");

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      if (width >= BREAKPOINTS["2xl"]) {
        setBreakpoint("2xl");
      } else if (width >= BREAKPOINTS.xl) {
        setBreakpoint("xl");
      } else if (width >= BREAKPOINTS.lg) {
        setBreakpoint("lg");
      } else if (width >= BREAKPOINTS.md) {
        setBreakpoint("md");
      } else if (width >= BREAKPOINTS.sm) {
        setBreakpoint("sm");
      } else if (width >= BREAKPOINTS.xs) {
        setBreakpoint("xs");
      } else {
        setBreakpoint("xs");
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial breakpoint

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return breakpoint;
};

/**
 * Hook to detect if user prefers reduced motion
 */
export const usePrefersReducedMotion = (): boolean => {
  return useMediaQuery("(prefers-reduced-motion: reduce)");
};

/**
 * Hook to detect if user prefers dark mode
 */
export const usePrefersDarkMode = (): boolean => {
  return useMediaQuery("(prefers-color-scheme: dark)");
};