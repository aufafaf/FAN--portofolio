"use client";

import { useState, useEffect } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { LoadingScreen } from "@/components/effects/LoadingScreen";
import { ScrollDownIndicator } from "@/components/effects/ScrollIndicator";
import { useKonamiCode } from "@/hooks/useKonamiCode";
import confetti from "canvas-confetti";

/**
 * Home Page
 * Main landing page composing all sections
 */
export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  // Konami Code Easter Egg
  useKonamiCode(() => {
    // Trigger special confetti effect
    const duration = 3000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    function randomInRange(min: number, max: number) {
      return Math.random() * (max - min) + min;
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const interval: any = setInterval(function () {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);

      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
        colors: ["#00F0FF", "#FF006E", "#8B5CF6", "#00FF41", "#FFFF00"],
      });
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
        colors: ["#00F0FF", "#FF006E", "#8B5CF6", "#00FF41", "#FFFF00"],
      });
    }, 250);

    // Show achievement notification
    const notification = document.createElement("div");
    notification.innerHTML = `
      <div class="fixed top-24 right-4 z-[9999] animate-slide-in-right">
        <div class="glass-card rounded-xl border border-neon-cyan bg-cyber-dark/90 p-4 shadow-neon-cyan backdrop-blur-md">
          <div class="flex items-center gap-3">
            <div class="text-2xl">🎮</div>
            <div>
              <p class="font-heading text-sm font-bold text-neon-cyan">Achievement Unlocked!</p>
              <p class="text-xs text-muted-foreground">Konami Code Master</p>
            </div>
          </div>
        </div>
      </div>
    `;
    document.body.appendChild(notification);

    setTimeout(() => {
      notification.remove();
    }, 5000);
  });

  return (
    <>
      {/* Loading Screen */}
      <LoadingScreen
        onLoadingComplete={() => setIsLoading(false)}
        duration={3000}
      />

      {/* Main Content */}
      {!isLoading && (
        <>
          {/* Navigation */}
          <Navbar />

          {/* Sections */}
          <HeroSection />
          <ScrollDownIndicator />
          
          <AboutSection />
          <ProjectsSection />
          <SkillsSection />
          <ExperienceSection />
          <ContactSection />

          {/* Footer */}
          <Footer />
        </>
      )}
    </>
  );
}