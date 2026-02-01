import { useEffect, useRef } from "react";
import Lenis from "lenis";

/**
 * Hook to initialize and use Lenis smooth scrolling
 * Provides ultra-smooth scrolling experience
 */
export const useLenis = (options?: {
  duration?: number;
  easing?: (t: number) => number;
  direction?: "vertical" | "horizontal";
  smooth?: boolean;
  smoothTouch?: boolean;
}) => {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      duration: options?.duration ?? 1.2,
      easing: options?.easing ?? ((t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))),
      direction: options?.direction ?? "vertical",
      smooth: options?.smooth ?? true,
      smoothTouch: options?.smoothTouch ?? false,
    });

    lenisRef.current = lenis;

    // Animation loop
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Cleanup
    return () => {
      lenis.destroy();
    };
  }, [options]);

  return lenisRef.current;
};

/**
 * Hook to scroll to a specific element smoothly
 */
export const useScrollTo = () => {
  const lenis = useLenis();

  const scrollTo = (target: string | number | HTMLElement, options?: { offset?: number; duration?: number }) => {
    if (!lenis) return;

    lenis.scrollTo(target, {
      offset: options?.offset ?? 0,
      duration: options?.duration,
    });
  };

  return scrollTo;
};

/**
 * Hook to listen to Lenis scroll events
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const useLenisScroll = (callback: (e: any) => void) => {
  const lenis = useLenis();

  useEffect(() => {
    if (!lenis) return;

    lenis.on("scroll", callback);

    return () => {
      lenis.off("scroll", callback);
    };
  }, [lenis, callback]);
};

/**
 * Hook to stop/start Lenis scrolling
 */
export const useLenisControl = () => {
  const lenis = useLenis();

  const stop = () => {
    if (lenis) lenis.stop();
  };

  const start = () => {
    if (lenis) lenis.start();
  };

  return { stop, start };
};