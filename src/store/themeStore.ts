import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Theme, ThemeStore } from "@/types";

/**
 * Theme Store
 * Manages theme (dark/light/auto) and accent color
 * Persisted to localStorage
 */
export const useThemeStore = create<ThemeStore>()(
  persist(
    (set) => ({
      theme: "dark" as Theme,
      accentColor: "#8B5CF6", // Default purple

      setTheme: (theme) => {
        set({ theme });
        // Apply theme to document
        if (theme === "dark") {
          document.documentElement.classList.add("dark");
        } else if (theme === "light") {
          document.documentElement.classList.remove("dark");
        } else {
          // Auto mode - check system preference
          const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
          if (isDark) {
            document.documentElement.classList.add("dark");
          } else {
            document.documentElement.classList.remove("dark");
          }
        }
      },

      setAccentColor: (color) => {
        set({ accentColor: color });
        // Apply accent color to CSS variable
        document.documentElement.style.setProperty("--accent-color", color);
      },
    }),
    {
      name: "theme-storage",
    }
  )
);

// Initialize theme on mount
if (typeof window !== "undefined") {
  const theme = useThemeStore.getState().theme;
  const accentColor = useThemeStore.getState().accentColor;
  
  // Apply initial theme
  if (theme === "dark") {
    document.documentElement.classList.add("dark");
  } else if (theme === "auto") {
    const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (isDark) {
      document.documentElement.classList.add("dark");
    }
  }
  
  // Apply initial accent color
  document.documentElement.style.setProperty("--accent-color", accentColor);
}