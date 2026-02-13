// "use client";

// import { useEffect, useState } from "react";
// import { motion, useSpring } from "framer-motion";
// import { useMousePosition } from "@/hooks/useMousePosition";
// import { useUIStore } from "@/store/uiStore";
// import { cn } from "@/lib/utils";

// /**
//  * Custom Cursor Follower Component - Professional Style
//  * Simple, elegant cursor that follows mouse movement
//  */
// export function CursorFollower() {
//   const mousePosition = useMousePosition();
//   const cursorVariant = useUIStore((state) => state.cursorVariant);
//   const [isVisible, setIsVisible] = useState(false);

//   // Smooth spring animation for cursor movement
//   const cursorX = useSpring(0, { stiffness: 400, damping: 25 });
//   const cursorY = useSpring(0, { stiffness: 400, damping: 25 });

//   useEffect(() => {
//     cursorX.set(mousePosition.x - 8);
//     cursorY.set(mousePosition.y - 8);
//   }, [mousePosition, cursorX, cursorY]);

//   useEffect(() => {
//     setIsVisible(true);

//     // Hide default cursor
//     document.body.style.cursor = "none";

//     return () => {
//       document.body.style.cursor = "auto";
//     };
//   }, []);

//   // Elegant brown cursor variants
//   const variants = {
//     default: {
//       width: 16,
//       height: 16,
//       backgroundColor: "rgba(107, 84, 68, 0.5)",
//       border: "1px solid rgba(107, 84, 68, 1)",
//     },
//     hover: {
//       width: 40,
//       height: 40,
//       backgroundColor: "rgba(107, 84, 68, 0.1)",
//       border: "2px solid rgba(107, 84, 68, 1)",
//     },
//     click: {
//       width: 12,
//       height: 12,
//       backgroundColor: "rgba(107, 84, 68, 0.8)",
//       border: "1px solid rgba(107, 84, 68, 1)",
//     },
//   };

//   if (!isVisible) return null;

//   return (
//     <>
//       {/* Main Cursor - Simple dot */}
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
//           stiffness: 400,
//           damping: 25,
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

/**
 * Cursor Follower - DISABLED
 * Using default browser cursor for professional look
 */
export function CursorFollower() {
  // Return null - no custom cursor
  return null;
}

/**
 * Hook to set cursor variant on hover - DISABLED
 */
export function useCursorHover() {
  // Return empty functions - no custom cursor behavior
  const onMouseEnter = () => {};
  const onMouseLeave = () => {};

  return { onMouseEnter, onMouseLeave };
}