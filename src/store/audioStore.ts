import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { AudioStore } from "@/types";
import { SOUNDS, FEATURES } from "@/lib/constants";

/**
 * Audio Store
 * Manages background music, sound effects, and audio preferences
 * Persisted to localStorage
 */
export const useAudioStore = create<AudioStore>()(
  persist(
    (set, get) => ({
      isEnabled: FEATURES.enableAudio,
      volume: 0.5,
      isMuted: false,
      currentTrack: undefined,

      toggleAudio: () => {
        const { isEnabled } = get();
        set({ isEnabled: !isEnabled });
      },

      setVolume: (volume) => {
        set({ volume: Math.max(0, Math.min(1, volume)) });
      },

      toggleMute: () => {
        const { isMuted } = get();
        set({ isMuted: !isMuted });
      },

      playSound: (soundKey: string) => {
        const { isEnabled, isMuted, volume } = get();
        
        if (!isEnabled || isMuted) return;

        // Get sound path from SOUNDS constant
        const soundPath = SOUNDS[soundKey as keyof typeof SOUNDS];
        
        if (!soundPath) {
          console.warn(`Sound "${soundKey}" not found`);
          return;
        }

        try {
          const audio = new Audio(soundPath);
          audio.volume = volume;
          audio.play().catch((error) => {
            console.warn("Failed to play sound:", error);
          });
        } catch (error) {
          console.warn("Failed to create audio:", error);
        }
      },
    }),
    {
      name: "audio-storage",
    }
  )
);

/**
 * Hook to play hover sound
 */
export const useHoverSound = () => {
  const playSound = useAudioStore((state) => state.playSound);
  return () => playSound("hover");
};

/**
 * Hook to play click sound
 */
export const useClickSound = () => {
  const playSound = useAudioStore((state) => state.playSound);
  return () => playSound("click");
};

/**
 * Hook to play success sound
 */
export const useSuccessSound = () => {
  const playSound = useAudioStore((state) => state.playSound);
  return () => playSound("success");
};

/**
 * Hook to play error sound
 */
export const useErrorSound = () => {
  const playSound = useAudioStore((state) => state.playSound);
  return () => playSound("error");
};