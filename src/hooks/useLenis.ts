// import { useEffect, useRef } from "react";
// import Lenis from "lenis";

// /**
//  * Hook to initialize and use Lenis smooth scrolling
//  * Provides ultra-smooth scrolling experience
//  */
// export const useLenis = (options?: {
//   duration?: number;
//   easing?: (t: number) => number;
//   direction?: "vertical" | "horizontal";
//   smooth?: boolean;
//   smoothTouch?: boolean;
// }) => {
//   const lenisRef = useRef<Lenis | null>(null);

//   useEffect(() => {
//     // Initialize Lenis
//     const lenis = new Lenis({
//       duration: options?.duration ?? 1.2,
//       easing: options?.easing ?? ((t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))),
//       direction: options?.direction ?? "vertical",
//       smooth: options?.smooth ?? true,
//       smoothTouch: options?.smoothTouch ?? false,
//     // eslint-disable-next-line @typescript-eslint/no-explicit-any
//     } as any);

//     lenisRef.current = lenis;

//     // Animation loop
//     function raf(time: number) {
//       lenis.raf(time);
//       requestAnimationFrame(raf);
//     }

//     requestAnimationFrame(raf);

//     // Cleanup
//     return () => {
//       lenis.destroy();
//     };
//   }, [options]);

//   return lenisRef.current;
// };

// /**
//  * Hook to scroll to a specific element smoothly
//  */
// export const useScrollTo = () => {
//   const lenis = useLenis();

//   const scrollTo = (target: string | number | HTMLElement, options?: { offset?: number; duration?: number }) => {
//     if (!lenis) return;

//     lenis.scrollTo(target, {
//       offset: options?.offset ?? 0,
//       duration: options?.duration,
//     });
//   };

//   return scrollTo;
// };

// /**
//  * Hook to listen to Lenis scroll events
//  */
// // eslint-disable-next-line @typescript-eslint/no-explicit-any
// export const useLenisScroll = (callback: (e: any) => void) => {
//   const lenis = useLenis();

//   useEffect(() => {
//     if (!lenis) return;

//     lenis.on("scroll", callback);

//     return () => {
//       lenis.off("scroll", callback);
//     };
//   }, [lenis, callback]);
// };

// /**
//  * Hook to stop/start Lenis scrolling
//  */
// export const useLenisControl = () => {
//   const lenis = useLenis();

//   const stop = () => {
//     if (lenis) lenis.stop();
//   };

//   const start = () => {
//     if (lenis) lenis.start();
//   };

//   return { stop, start };
// };

"use client";

import { useEffect, useRef, useCallback } from "react";
import Lenis, { type LenisOptions } from "lenis";

/**
 * useLenis
 * - Initialize Lenis smooth scrolling (Lenis v1.x)
 * - React Compiler safe (no ref access during render)
 * - No deprecated options (NO smooth / smoothTouch)
 */
export function useLenis(options?: LenisOptions) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.08, // smoothness (0.05 super smooth, 0.1 default)
      wheelMultiplier: 1,
      touchMultiplier: 1,
      ...options,
    });

    lenisRef.current = lenis;

    let rafId: number;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };

    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, [options]);

  return lenisRef;
}

/**
 * useScrollTo
 * - Smooth scroll to target
 */
export function useScrollTo() {
  const lenisRef = useLenis();

  return useCallback(
    (target: string | number | HTMLElement, options?: LenisOptions) => {
      lenisRef.current?.scrollTo(target, options);
    },
    [lenisRef]
  );
}

/**
 * useLenisControl
 * - Start / Stop scrolling
 */
export function useLenisControl() {
  const lenisRef = useLenis();

  const start = useCallback(() => {
    lenisRef.current?.start();
  }, [lenisRef]);

  const stop = useCallback(() => {
    lenisRef.current?.stop();
  }, [lenisRef]);

  return { start, stop };
}

/**
 * useLenisScroll
 * - Listen to scroll events
 */
export function useLenisScroll(callback: (e: unknown) => void) {
  const lenisRef = useLenis();

  useEffect(() => {
    const lenis = lenisRef.current;
    if (!lenis) return;

    lenis.on("scroll", callback);
    return () => {
      lenis.off("scroll", callback);
    };
  }, [callback, lenisRef]);
}
