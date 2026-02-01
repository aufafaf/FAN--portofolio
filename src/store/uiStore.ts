import { create } from "zustand";
import type { UIStore } from "@/types";

/**
 * UI Store
 * Manages global UI state like menu, command palette, active section, etc.
 */
export const useUIStore = create<UIStore>((set) => ({
  isMenuOpen: false,
  isCommandPaletteOpen: false,
  activeSection: "home",
  cursorVariant: "default",

  setMenuOpen: (isOpen) => {
    set({ isMenuOpen: isOpen });
    
    // Prevent body scroll when menu is open
    if (typeof document !== "undefined") {
      if (isOpen) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "unset";
      }
    }
  },

  setCommandPaletteOpen: (isOpen) => {
    set({ isCommandPaletteOpen: isOpen });
  },

  setActiveSection: (section) => {
    set({ activeSection: section });
  },

  setCursorVariant: (variant) => {
    set({ cursorVariant: variant });
  },
}));

/**
 * Hook to toggle menu
 */
export const useToggleMenu = () => {
  const { isMenuOpen, setMenuOpen } = useUIStore();
  return () => setMenuOpen(!isMenuOpen);
};

/**
 * Hook to toggle command palette
 */
export const useToggleCommandPalette = () => {
  const { isCommandPaletteOpen, setCommandPaletteOpen } = useUIStore();
  return () => setCommandPaletteOpen(!isCommandPaletteOpen);
};