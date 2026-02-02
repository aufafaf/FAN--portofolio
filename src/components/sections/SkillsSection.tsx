"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { motion } from "framer-motion";
import { SkillSphere3D } from "@/components/3d/SkillSphere3D";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { cn } from "@/lib/utils";
import type { Skill, SkillCategory } from "@/types";

// Dummy skills data
const dummySkills: Skill[] = [
  // Frontend
  { id: "1", name: "React", category: "frontend", level: 95, color: "#00F0FF" },
  { id: "2", name: "Next.js", category: "frontend", level: 90, color: "#00F0FF" },
  { id: "3", name: "TypeScript", category: "frontend", level: 90, color: "#00F0FF" },
  { id: "4", name: "Tailwind", category: "frontend", level: 95, color: "#00F0FF" },
  { id: "5", name: "Three.js", category: "3d", level: 85, color: "#8B5CF6" },
  
  // Backend
  { id: "6", name: "Node.js", category: "backend", level: 85, color: "#00FF41" },
  { id: "7", name: "Express", category: "backend", level: 80, color: "#00FF41" },
  { id: "8", name: "MongoDB", category: "backend", level: 75, color: "#00FF41" },
  { id: "9", name: "PostgreSQL", category: "backend", level: 70, color: "#00FF41" },
  
  // Design
  { id: "10", name: "Figma", category: "design", level: 80, color: "#FF006E" },
  { id: "11", name: "Adobe XD", category: "design", level: 75, color: "#FF006E" },
  
  // Tools
  { id: "12", name: "Git", category: "tools", level: 90, color: "#FFFF00" },
  { id: "13", name: "Docker", category: "tools", level: 70, color: "#FFFF00" },
  { id: "14", name: "Vercel", category: "tools", level: 85, color: "#FFFF00" },
];

const skillCategories: { name: string; category: SkillCategory; color: string }[] = [
  { name: "Frontend", category: "frontend", color: "#00F0FF" },
  { name: "Backend", category: "backend", color: "#00FF41" },
  { name: "3D & Graphics", category: "3d", color: "#8B5CF6" },
  { name: "Design", category: "design", color: "#FF006E" },
  { name: "Tools", category: "tools", color: "#FFFF00" },
];

/**
 * Skills Section Component
 * Showcases skills with 3D sphere visualization
 */
export function SkillsSection() {
  return (
    <section id="skills" className="relative py-20 md:py-32">
      {/* Background */}
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
            <span className="gradient-text-animated">Skills & Expertise</span>
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Technologies and tools I use to bring ideas to life
          </p>
          <div className="mx-auto mt-4 h-1 w-20 bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-pink" />
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left - 3D Skill Sphere */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="glass-card relative aspect-square overflow-hidden rounded-2xl border border-border p-4">
              <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1} />
                <Suspense fallback={null}>
                  <SkillSphere3D skills={dummySkills} radius={3} autoRotate />
                </Suspense>
              </Canvas>

              {/* Instructions */}
              <div className="absolute bottom-4 left-4 right-4 rounded-lg border border-neon-cyan/30 bg-cyber-dark/80 p-3 backdrop-blur-sm">
                <p className="text-center text-xs text-muted-foreground">
                  Interactive 3D Skill Cloud • Auto-rotating
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right - Skill Categories */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="space-y-6"
          >
            {skillCategories.map((category, index) => (
              <SkillCategoryCard
                key={category.category}
                category={category}
                skills={dummySkills.filter((s) => s.category === category.category)}
                index={index}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/**
 * Skill Category Card Component
 */
interface SkillCategoryCardProps {
  category: { name: string; category: SkillCategory; color: string };
  skills: Skill[];
  index: number;
}

function SkillCategoryCard({ category, skills, index }: SkillCategoryCardProps) {
  return (
    <motion.div
      variants={fadeInUp}
      className="glass-card group rounded-xl border border-border p-6 transition-all hover:border-opacity-100"
      style={{ borderColor: `${category.color}30` }}
      whileHover={{ scale: 1.02, y: -5 }}
    >
      {/* Category Header */}
      <div className="mb-4 flex items-center gap-3">
        <div
          className="h-10 w-1 rounded-full"
          style={{ backgroundColor: category.color }}
        />
        <h3 className="font-heading text-xl font-bold">{category.name}</h3>
      </div>

      {/* Skills List */}
      <div className="space-y-3">
        {skills.map((skill) => (
          <SkillBar key={skill.id} skill={skill} categoryColor={category.color} />
        ))}
      </div>
    </motion.div>
  );
}

/**
 * Skill Bar Component
 */
function SkillBar({ skill, categoryColor }: { skill: Skill; categoryColor: string }) {
  return (
    <div className="group">
      <div className="mb-1 flex items-center justify-between">
        <span className="text-sm font-medium">{skill.name}</span>
        <span className="text-xs text-muted-foreground">{skill.level}%</span>
      </div>

      {/* Progress Bar */}
      <div className="relative h-2 overflow-hidden rounded-full bg-cyber-blue/30">
        <motion.div
          className="h-full rounded-full"
          style={{
            background: `linear-gradient(90deg, ${categoryColor}, ${categoryColor}cc)`,
          }}
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
        />

        {/* Glow effect */}
        <motion.div
          className="absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100"
          style={{
            background: `linear-gradient(90deg, transparent, ${categoryColor}40, transparent)`,
          }}
          animate={{ x: ["-100%", "100%"] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
      </div>
    </div>
  );
}