// "use client";

// import { useEffect, useState } from "react";
// import { motion, useSpring } from "framer-motion";
// import { useMousePosition } from "@/hooks/useMousePosition";
// import { useUIStore } from "@/store/uiStore";
// import { cn } from "@/lib/utils";

// /**
//  * Custom Cursor Follower Component
//  * Creates a custom cursor that follows mouse movement
//  */
// export function CursorFollower() {
//   const mousePosition = useMousePosition();
//   const cursorVariant = useUIStore((state) => state.cursorVariant);
//   const [isVisible, setIsVisible] = useState(false);

//   // Smooth spring animation for cursor movement
//   const cursorX = useSpring(0, { stiffness: 500, damping: 28 });
//   const cursorY = useSpring(0, { stiffness: 500, damping: 28 });

//   useEffect(() => {
//     cursorX.set(mousePosition.x - 16);
//     cursorY.set(mousePosition.y - 16);
//   }, [mousePosition, cursorX, cursorY]);

//   useEffect(() => {
//     setIsVisible(true);

//     // Hide default cursor
//     document.body.style.cursor = "none";

//     return () => {
//       document.body.style.cursor = "auto";
//     };
//   }, []);

//   // Cursor variants
//   const variants = {
//     default: {
//       width: 32,
//       height: 32,
//       backgroundColor: "rgba(0, 240, 255, 0.3)",
//       border: "2px solid rgba(0, 240, 255, 1)",
//       mixBlendMode: "difference" as const,
//     },
//     hover: {
//       width: 64,
//       height: 64,
//       backgroundColor: "rgba(255, 0, 110, 0.3)",
//       border: "2px solid rgba(255, 0, 110, 1)",
//       mixBlendMode: "difference" as const,
//     },
//     click: {
//       width: 24,
//       height: 24,
//       backgroundColor: "rgba(139, 92, 246, 0.5)",
//       border: "2px solid rgba(139, 92, 246, 1)",
//       mixBlendMode: "difference" as const,
//     },
//   };

//   if (!isVisible) return null;

//   return (
//     <>
//       {/* Main Cursor */}
//       <motion.div
//         className={cn(
//           "pointer-events-none fixed left-0 top-0 z-[9999] rounded-full",
//           "hidden md:block" // Hide on mobile
//         )}
//         style={{
//           x: cursorX,
//           y: cursorY,
//         }}
//         animate={cursorVariant}
//         variants={variants}
//         transition={{
//           type: "spring",
//           stiffness: 500,
//           damping: 28,
//         }}
//       />

//       {/* Cursor Trail */}
//       <motion.div
//         className={cn(
//           "pointer-events-none fixed left-0 top-0 z-[9998] h-2 w-2 rounded-full",
//           "bg-neon-cyan opacity-50 hidden md:block"
//         )}
//         style={{
//           x: cursorX,
//           y: cursorY,
//         }}
//         transition={{
//           type: "spring",
//           stiffness: 150,
//           damping: 15,
//           delay: 0.03,
//         }}
//       />
//     </>
//   );
// }

// /**
//  * Hook to set cursor variant on hover
//  */
// export function useCursorHover() {
//   const setCursorVariant = useUIStore((state) => state.setCursorVariant);

//   const onMouseEnter = () => setCursorVariant("hover");
//   const onMouseLeave = () => setCursorVariant("default");

//   return { onMouseEnter, onMouseLeave };
// }

"use client";

import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";
import { useMousePosition } from "@/hooks/useMousePosition";
import { useUIStore } from "@/store/uiStore";
import { cn } from "@/lib/utils";

/**
 * Custom Cursor Follower Component - Professional Style
 * Simple, elegant cursor that follows mouse movement
 */
export function CursorFollower() {
  const mousePosition = useMousePosition();
  const cursorVariant = useUIStore((state) => state.cursorVariant);
  const [isVisible, setIsVisible] = useState(false);

  // Smooth spring animation for cursor movement
  const cursorX = useSpring(0, { stiffness: 400, damping: 25 });
  const cursorY = useSpring(0, { stiffness: 400, damping: 25 });

  useEffect(() => {
    cursorX.set(mousePosition.x - 8);
    cursorY.set(mousePosition.y - 8);
  }, [mousePosition, cursorX, cursorY]);

  useEffect(() => {
    setIsVisible(true);

    // Hide default cursor
    document.body.style.cursor = "none";

    return () => {
      document.body.style.cursor = "auto";
    };
  }, []);

  // Simple professional cursor variants
  const variants = {
    default: {
      width: 16,
      height: 16,
      backgroundColor: "rgba(59, 130, 246, 0.5)",
      border: "1px solid rgba(59, 130, 246, 1)",
    },
    hover: {
      width: 40,
      height: 40,
      backgroundColor: "rgba(59, 130, 246, 0.1)",
      border: "2px solid rgba(59, 130, 246, 1)",
    },
    click: {
      width: 12,
      height: 12,
      backgroundColor: "rgba(59, 130, 246, 0.8)",
      border: "1px solid rgba(59, 130, 246, 1)",
    },
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Main Cursor - Simple dot */}
      <motion.div
        className={cn(
          "pointer-events-none fixed left-0 top-0 z-[9999] rounded-full",
          "hidden md:block" // Hide on mobile
        )}
        style={{
          x: cursorX,
          y: cursorY,
        }}
        animate={cursorVariant}
        variants={variants}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 25,
        }}
      />
    </>
  );
}

/**
 * Hook to set cursor variant on hover
 */
export function useCursorHover() {
  const setCursorVariant = useUIStore((state) => state.setCursorVariant);

  const onMouseEnter = () => setCursorVariant("hover");
  const onMouseLeave = () => setCursorVariant("default");

  return { onMouseEnter, onMouseLeave };
}