"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";
import { useScrollThreshold } from "@/hooks/useScrollProgress";
import { useUIStore, useToggleMenu } from "@/store/uiStore";
import { useCursorHover } from "@/components/effects/CursorFollower";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "./ThemeToggle";

/**
 * Navigation Bar Component
 * Glassmorphism navbar with scroll animations
 */
export function Navbar() {
  const isScrolled = useScrollThreshold(50);
  const [activeSection, setActiveSection] = useState("home");
  const isMenuOpen = useUIStore((state) => state.isMenuOpen);
  const toggleMenu = useToggleMenu();
  const cursorHover = useCursorHover();

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = NAV_LINKS.map((link) => link.href.replace("#", ""));
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      if (isMenuOpen) toggleMenu();
    }
  };

  return (
    <>
      <motion.nav
        className={cn(
          "fixed left-0 right-0 top-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-cyber-dark/80 backdrop-blur-md shadow-lg shadow-neon-cyan/10"
            : "bg-transparent"
        )}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="container mx-auto px-4">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <motion.a
              href="#home"
              className="font-heading text-2xl font-bold gradient-text-animated"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("#home");
              }}
              {...cursorHover}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              PORTFOLIO
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden items-center gap-8 md:flex">
              {NAV_LINKS.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "relative font-body text-sm font-medium uppercase tracking-wider transition-colors",
                    activeSection === link.href.replace("#", "")
                      ? "text-neon-cyan"
                      : "text-foreground hover:text-neon-cyan"
                  )}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  {...cursorHover}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                >
                  {link.name}
                  
                  {/* Active indicator */}
                  {activeSection === link.href.replace("#", "") && (
                    <motion.div
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-neon-cyan to-neon-purple"
                      layoutId="activeSection"
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </motion.a>
              ))}

              {/* Theme Toggle */}
              <ThemeToggle />
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              className="flex items-center justify-center rounded-lg border border-neon-cyan/30 p-2 text-neon-cyan md:hidden"
              onClick={toggleMenu}
              {...cursorHover}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>

        {/* Divider line */}
        <motion.div
          className="h-px bg-gradient-to-r from-transparent via-neon-cyan to-transparent"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: isScrolled ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />
      </motion.nav>

      {/* Mobile Menu */}
      <MobileNav
        isOpen={isMenuOpen}
        activeSection={activeSection}
        onNavClick={handleNavClick}
      />
    </>
  );
}

/**
 * Mobile Navigation Component
 */
interface MobileNavProps {
  isOpen: boolean;
  activeSection: string;
  onNavClick: (href: string) => void;
}

function MobileNav({ isOpen, activeSection, onNavClick }: MobileNavProps) {
  const cursorHover = useCursorHover();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          />

          {/* Menu */}
          <motion.div
            className="fixed right-0 top-20 z-40 h-[calc(100vh-5rem)] w-full max-w-sm bg-cyber-dark/95 backdrop-blur-md md:hidden"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="cyber-grid-animated absolute inset-0 opacity-10" />
            
            <div className="relative flex flex-col gap-2 p-6">
              {NAV_LINKS.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "rounded-lg border px-6 py-4 font-body text-lg font-medium uppercase tracking-wider transition-all",
                    activeSection === link.href.replace("#", "")
                      ? "border-neon-cyan bg-neon-cyan/10 text-neon-cyan shadow-neon-cyan"
                      : "border-border bg-transparent text-foreground hover:border-neon-cyan hover:text-neon-cyan"
                  )}
                  onClick={(e) => {
                    e.preventDefault();
                    onNavClick(link.href);
                  }}
                  {...cursorHover}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 50 }}
                  transition={{ duration: 0.2, delay: 0.05 * index }}
                  whileTap={{ scale: 0.95 }}
                >
                  {link.name}
                </motion.a>
              ))}

              {/* Theme Toggle in Mobile */}
              <div className="mt-4 flex items-center justify-between rounded-lg border border-border bg-transparent px-6 py-4">
                <span className="font-body text-sm uppercase tracking-wider text-muted-foreground">
                  Theme
                </span>
                <ThemeToggle />
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}