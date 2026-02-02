"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { motion } from "framer-motion";
import { MapPin, Calendar, Coffee, Code, Award, Users } from "lucide-react";
import { Globe3D } from "@/components/3d/Globe3D";
import { PERSONAL_INFO, STATS } from "@/lib/constants";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { useCursorHover } from "@/components/effects/CursorFollower";
import { cn } from "@/lib/utils";

/**
 * About Section Component
 * Shows bio, stats, and interactive 3D globe
 */
export function AboutSection() {
  const cursorHover = useCursorHover();

  const stats = [
    { icon: Calendar, label: "Years Experience", value: STATS.yearsOfExperience },
    { icon: Code, label: "Projects Completed", value: STATS.projectsCompleted },
    { icon: Users, label: "Happy Clients", value: STATS.happyClients },
    { icon: Coffee, label: "Cups of Coffee", value: STATS.cupsOfCoffee },
  ];

  const interests = [
    { emoji: "🎮", label: "Gaming" },
    { emoji: "🎵", label: "Music" },
    { emoji: "✈️", label: "Travel" },
    { emoji: "📚", label: "Reading" },
    { emoji: "🎨", label: "Design" },
    { emoji: "🤖", label: "AI/ML" },
  ];

  return (
    <section id="about" className="relative py-20 md:py-32">
      {/* Background elements */}
      <div className="cyber-grid absolute inset-0 opacity-5" />
      
      <div className="container relative z-10 mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 font-heading text-4xl font-bold md:text-5xl lg:text-6xl">
            <span className="gradient-text-animated">About Me</span>
          </h2>
          <div className="mx-auto h-1 w-20 bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-pink" />
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column - Info */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Bio Card */}
            <motion.div
              variants={fadeInUp}
              className="glass-card rounded-2xl border border-border p-8"
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-neon-cyan/10">
                  <MapPin className="text-neon-cyan" size={24} />
                </div>
                <div>
                  <h3 className="font-heading text-xl font-bold">
                    {PERSONAL_INFO.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {PERSONAL_INFO.location}
                  </p>
                </div>
              </div>

              <p className="mb-4 leading-relaxed text-muted-foreground">
                {PERSONAL_INFO.bio}
              </p>

              <div className="flex items-center gap-2">
                <div className="h-2 w-2 animate-pulse rounded-full bg-neon-green" />
                <span className="text-sm font-medium text-neon-green">
                  {PERSONAL_INFO.availability}
                </span>
              </div>
            </motion.div>

            {/* Stats Grid */}
            <motion.div
              variants={fadeInUp}
              className="grid grid-cols-2 gap-4"
            >
              {stats.map((stat, index) => (
                <StatCard
                  key={stat.label}
                  icon={stat.icon}
                  label={stat.label}
                  value={stat.value}
                  index={index}
                />
              ))}
            </motion.div>

            {/* Interests Bento Grid */}
            <motion.div variants={fadeInUp}>
              <h3 className="mb-4 font-heading text-xl font-bold">
                Interests & Hobbies
              </h3>
              <div className="grid grid-cols-3 gap-3">
                {interests.map((interest, index) => (
                  <motion.div
                    key={interest.label}
                    className={cn(
                      "glass-card group cursor-pointer rounded-xl border border-border p-4",
                      "transition-all hover:border-neon-cyan hover:shadow-neon-cyan"
                    )}
                    {...cursorHover}
                    whileHover={{ scale: 1.05, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="text-center">
                      <div className="mb-2 text-3xl">{interest.emoji}</div>
                      <p className="text-xs font-medium">{interest.label}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - 3D Globe */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="glass-card relative aspect-square overflow-hidden rounded-2xl border border-border p-8">
              {/* 3D Globe */}
              <Canvas camera={{ position: [0, 0, 3], fov: 75 }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1} />
                <Suspense fallback={null}>
                  <Globe3D autoRotate />
                </Suspense>
              </Canvas>

              {/* Globe Info Overlay */}
              <div className="absolute bottom-8 left-8 right-8 rounded-lg border border-neon-cyan/30 bg-cyber-dark/80 p-4 backdrop-blur-sm">
                <div className="flex items-center gap-3">
                  <MapPin className="text-neon-cyan" size={20} />
                  <div>
                    <p className="text-sm font-medium">Based in</p>
                    <p className="text-xs text-muted-foreground">
                      {PERSONAL_INFO.location}
                    </p>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute right-4 top-4 flex gap-2">
                <div className="h-3 w-3 animate-pulse rounded-full bg-neon-cyan" />
                <div
                  className="h-3 w-3 animate-pulse rounded-full bg-neon-pink"
                  style={{ animationDelay: "0.5s" }}
                />
                <div
                  className="h-3 w-3 animate-pulse rounded-full bg-neon-purple"
                  style={{ animationDelay: "1s" }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/**
 * Stat Card Component
 */
interface StatCardProps {
  icon: React.ElementType;
  label: string;
  value: number;
  index: number;
}

function StatCard({ icon: Icon, label, value, index }: StatCardProps) {
  const cursorHover = useCursorHover();

  return (
    <motion.div
      className={cn(
        "glass-card group relative overflow-hidden rounded-xl border border-border p-6",
        "transition-all hover:border-neon-cyan hover:shadow-neon-cyan"
      )}
      {...cursorHover}
      whileHover={{ scale: 1.05, y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/5 to-neon-purple/5 opacity-0 transition-opacity group-hover:opacity-100" />

      <div className="relative">
        <Icon className="mb-3 text-neon-cyan" size={24} />
        <motion.p
          className="mb-1 font-heading text-3xl font-bold"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            {value}
            {label === "Cups of Coffee" && "+"}
          </motion.span>
        </motion.p>
        <p className="text-xs text-muted-foreground">{label}</p>
      </div>
    </motion.div>
  );
}