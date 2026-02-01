"use client";

import { Moon, Sun, Monitor } from "lucide-react";
import { motion } from "framer-motion";
import { useThemeStore } from "@/store/themeStore";
import { useCursorHover } from "@/components/effects/CursorFollower";
import { cn } from "@/lib/utils";
import type { Theme } from "@/types";

/**
 * Theme Toggle Component
 * Switches between dark, light, and auto themes
 */
export function ThemeToggle() {
  const { theme, setTheme } = useThemeStore();
  const cursorHover = useCursorHover();

  const themes: { value: Theme; icon: typeof Sun; label: string }[] = [
    { value: "light", icon: Sun, label: "Light" },
    { value: "dark", icon: Moon, label: "Dark" },
    { value: "auto", icon: Monitor, label: "Auto" },
  ];

  return (
    <div className="flex items-center gap-1 rounded-lg border border-border bg-background/50 p-1">
      {themes.map(({ value, icon: Icon, label }) => (
        <motion.button
          key={value}
          onClick={() => setTheme(value)}
          className={cn(
            "relative rounded-md p-2 transition-colors",
            theme === value
              ? "text-neon-cyan"
              : "text-muted-foreground hover:text-foreground"
          )}
          {...cursorHover}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          title={label}
        >
          <Icon size={18} />
          
          {/* Active indicator */}
          {theme === value && (
            <motion.div
              className="absolute inset-0 -z-10 rounded-md bg-neon-cyan/10"
              layoutId="themeIndicator"
              transition={{ duration: 0.2 }}
            />
          )}
        </motion.button>
      ))}
    </div>
  );
}

/**
 * Simple Theme Toggle (just dark/light)
 */
export function SimpleThemeToggle() {
  const { theme, setTheme } = useThemeStore();
  const cursorHover = useCursorHover();

  const isDark = theme === "dark";

  return (
    <motion.button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="flex items-center justify-center rounded-lg border border-neon-cyan/30 p-2 text-neon-cyan transition-colors hover:bg-neon-cyan/10"
      {...cursorHover}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
    >
      <motion.div
        initial={false}
        animate={{ rotate: isDark ? 0 : 180 }}
        transition={{ duration: 0.3 }}
      >
        {isDark ? <Moon size={20} /> : <Sun size={20} />}
      </motion.div>
    </motion.button>
  );
}