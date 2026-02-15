// "use client";

// import { Suspense } from "react";
// import { motion } from "framer-motion";
// import { Canvas } from "@react-three/fiber";
// import { ArrowDown, Download, Github, Linkedin } from "lucide-react";
// import { TypeAnimation } from "react-type-animation";
// import { GlitchTextContinuous } from "@/components/effects/GlitchText";
// import { ParticleSystem } from "@/components/3d/ParticleSystem";
// import { FloatingShapes } from "@/components/3d/FloatingShapes";
// import { useCursorHover } from "@/components/effects/CursorFollower";
// import { PERSONAL_INFO, SOCIAL_LINKS } from "@/lib/constants";
// import { fadeInUp, staggerContainer } from "@/lib/animations";
// import { cn } from "@/lib/utils";

// /**
//  * Hero Section Component
//  * Main landing section with 3D background and animations
//  */
// export function HeroSection() {
//   const cursorHover = useCursorHover();

//   return (
//     <section
//       id="home"
//       className="relative flex min-h-screen items-center justify-center overflow-hidden"
//     >
//       {/* 3D Background */}
//       <div className="absolute inset-0 -z-10">
//         <Canvas
//           dpr={[1, 2]}
//           gl={{ antialias: true, alpha: true }}
//           camera={{ position: [0, 0, 5], fov: 75 }}
//         >
//           <ambientLight intensity={0.5} />
//           <pointLight position={[10, 10, 10]} intensity={1} color="#00F0FF" />
//           <pointLight position={[-10, -10, -10]} intensity={0.5} color="#FF006E" />

//           <Suspense fallback={null}>
//             <ParticleSystem count={100} size={0.05} color="#00F0FF" />
//             <FloatingShapes />
//           </Suspense>
//         </Canvas>
//       </div>

//       {/* Gradient overlay */}
//       <div className="absolute inset-0 -z-10 bg-gradient-to-b from-cyber-darker via-cyber-dark/50 to-cyber-darker" />

//       {/* Cyber grid */}
//       <div className="cyber-grid-animated absolute inset-0 -z-10 opacity-20" />

//       {/* Content */}
//       <div className="container relative z-10 mx-auto px-4">
//         <motion.div
//           variants={staggerContainer}
//           initial="initial"
//           animate="animate"
//           className="mx-auto max-w-4xl text-center"
//         >
//           {/* Greeting */}
//           <motion.div
//             variants={fadeInUp}
//             className="mb-4 font-mono text-sm uppercase tracking-widest text-neon-cyan md:text-base"
//           >
//             <TypeAnimation
//               sequence={[
//                 "Hello, World!",
//                 1000,
//                 "Welcome to my portfolio",
//                 1000,
//                 "Let's build something amazing",
//                 1000,
//               ]}
//               wrapper="span"
//               speed={50}
//               repeat={Infinity}
//             />
//           </motion.div>

//           {/* Name with glitch effect */}
//           <motion.h1
//             variants={fadeInUp}
//             className="mb-6 font-heading text-5xl font-bold leading-tight md:text-7xl lg:text-8xl"
//           >
//             <GlitchTextContinuous
//               text={PERSONAL_INFO.name}
//               className="gradient-text-animated"
//             />
//           </motion.h1>

//           {/* Role */}
//           <motion.h2
//             variants={fadeInUp}
//             className="mb-8 font-body text-xl font-medium text-muted-foreground md:text-2xl lg:text-3xl"
//           >
//             {PERSONAL_INFO.role}
//           </motion.h2>

//           {/* Tagline */}
//           <motion.p
//             variants={fadeInUp}
//             className="mx-auto mb-12 max-w-2xl text-base text-muted-foreground md:text-lg"
//           >
//             {PERSONAL_INFO.bio}
//           </motion.p>

//           {/* CTA Buttons */}
//           <motion.div
//             variants={fadeInUp}
//             className="flex flex-wrap items-center justify-center gap-4"
//           >
//             {/* Primary CTA */}
//             <motion.a
//               href="#projects"
//               className={cn(
//                 "group relative overflow-hidden rounded-lg border-2 border-neon-cyan",
//                 "bg-gradient-to-r from-neon-cyan/10 to-neon-purple/10 px-8 py-4",
//                 "font-body text-sm font-semibold uppercase tracking-wider text-neon-cyan",
//                 "transition-all hover:shadow-neon-cyan"
//               )}
//               {...cursorHover}
//               whileHover={{ scale: 1.05, y: -3 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               <span className="relative z-10">View My Work</span>

//               {/* Animated background */}
//               <motion.div
//                 className="absolute inset-0 bg-gradient-to-r from-neon-cyan to-neon-purple opacity-0 transition-opacity group-hover:opacity-20"
//                 initial={false}
//               />
//             </motion.a>

//             {/* Secondary CTA */}
//             <motion.a
//               href="#contact"
//               className={cn(
//                 "rounded-lg border border-border bg-background/50 px-8 py-4",
//                 "font-body text-sm font-semibold uppercase tracking-wider",
//                 "transition-all hover:border-neon-pink hover:text-neon-pink hover:shadow-glow-sm"
//               )}
//               {...cursorHover}
//               whileHover={{ scale: 1.05, y: -3 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               Get In Touch
//             </motion.a>

//             {/* Download CV */}
//             <motion.a
//               href="/cv.pdf"
//               download
//               className={cn(
//                 "flex items-center gap-2 rounded-lg border border-border bg-background/50 px-8 py-4",
//                 "font-body text-sm font-semibold uppercase tracking-wider",
//                 "transition-all hover:border-neon-cyan hover:text-neon-cyan hover:shadow-glow-sm"
//               )}
//               {...cursorHover}
//               whileHover={{ scale: 1.05, y: -3 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               <Download size={18} />
//               Download CV
//             </motion.a>
//           </motion.div>

//           {/* Social Links */}
//           <motion.div
//             variants={fadeInUp}
//             className="mt-12 flex items-center justify-center gap-6"
//           >
//             <SocialIcon
//               href={SOCIAL_LINKS.github}
//               icon={Github}
//               label="GitHub"
//             />
//             <SocialIcon
//               href={SOCIAL_LINKS.linkedin}
//               icon={Linkedin}
//               label="LinkedIn"
//             />
//           </motion.div>
//         </motion.div>
//       </div>

//       {/* Scroll Indicator */}
//       <motion.div
//         className="absolute bottom-8 left-1/2 -translate-x-1/2"
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 1, duration: 0.5 }}
//       >
//         <motion.div
//           className="flex flex-col items-center gap-2"
//           animate={{ y: [0, 10, 0] }}
//           transition={{ duration: 1.5, repeat: Infinity }}
//         >
//           <span className="font-mono text-xs text-neon-cyan">SCROLL</span>
//           <ArrowDown size={20} className="text-neon-cyan" />
//         </motion.div>
//       </motion.div>

//       {/* Decorative corner elements */}
//       <CornerDecorations />
//     </section>
//   );
// }

// /**
//  * Social Icon Component
//  */
// interface SocialIconProps {
//   href: string;
//   icon: React.ElementType;
//   label: string;
// }

// function SocialIcon({ href, icon: Icon, label }: SocialIconProps) {
//   const cursorHover = useCursorHover();

//   return (
//     <motion.a
//       href={href}
//       target="_blank"
//       rel="noopener noreferrer"
//       className={cn(
//         "flex h-12 w-12 items-center justify-center rounded-lg border border-border",
//         "bg-background/50 text-muted-foreground transition-all",
//         "hover:border-neon-cyan hover:text-neon-cyan hover:shadow-neon-cyan"
//       )}
//       {...cursorHover}
//       whileHover={{ scale: 1.1, y: -5 }}
//       whileTap={{ scale: 0.9 }}
//       title={label}
//     >
//       <Icon size={20} />
//     </motion.a>
//   );
// }

// /**
//  * Corner Decorations
//  */
// function CornerDecorations() {
//   return (
//     <>
//       {/* Top Left */}
//       <motion.div
//         className="absolute left-4 top-4 h-20 w-20 border-l-2 border-t-2 border-neon-cyan md:left-8 md:top-8"
//         initial={{ opacity: 0, scale: 0 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ delay: 0.5, duration: 0.5 }}
//       />

//       {/* Top Right */}
//       <motion.div
//         className="absolute right-4 top-4 h-20 w-20 border-r-2 border-t-2 border-neon-cyan md:right-8 md:top-8"
//         initial={{ opacity: 0, scale: 0 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ delay: 0.6, duration: 0.5 }}
//       />

//       {/* Bottom Left */}
//       <motion.div
//         className="absolute bottom-4 left-4 h-20 w-20 border-b-2 border-l-2 border-neon-pink md:bottom-8 md:left-8"
//         initial={{ opacity: 0, scale: 0 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ delay: 0.7, duration: 0.5 }}
//       />

//       {/* Bottom Right */}
//       <motion.div
//         className="absolute bottom-4 right-4 h-20 w-20 border-b-2 border-r-2 border-neon-pink md:bottom-8 md:right-8"
//         initial={{ opacity: 0, scale: 0 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ delay: 0.8, duration: 0.5 }}
//       />
//     </>
//   );
// }

"use client";

import { Suspense } from "react";
import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { ArrowDown, Download, Github, Linkedin } from "lucide-react";
import { TypeAnimation } from "react-type-animation";
import { GlitchTextContinuous } from "@/components/effects/GlitchText";
import { ParticleSystem } from "@/components/3d/ParticleSystem";
import { FloatingShapes } from "@/components/3d/FloatingShapes";
import { useCursorHover } from "@/components/effects/CursorFollower";
import { PERSONAL_INFO, SOCIAL_LINKS } from "@/lib/constants";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { cn } from "@/lib/utils";

/**
 * Hero Section Component
 * Main landing section with 3D background and animations
 */
export function HeroSection() {
  const cursorHover = useCursorHover();

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      {/* 3D Background */}
      <div className="absolute inset-0 -z-10">
        <Canvas
          dpr={[1, 2]}
          gl={{ antialias: true, alpha: true }}
          camera={{ position: [0, 0, 5], fov: 75 }}
        >
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} color="#00F0FF" />
          <pointLight
            position={[-10, -10, -10]}
            intensity={0.5}
            color="#FF006E"
          />

          <Suspense fallback={null}>
            <ParticleSystem count={100} size={0.05} color="#00F0FF" />
            <FloatingShapes />
          </Suspense>
        </Canvas>
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-cyber-darker via-cyber-dark/50 to-cyber-darker" />

      {/* Cyber grid */}
      <div className="cyber-grid-animated absolute inset-0 -z-10 opacity-20" />

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 pt-24">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="mx-auto max-w-4xl text-center"
        >
          {/* Greeting - DI BAWAH NAVBAR, DI ATAS NAMA */}
          <motion.div
            variants={fadeInUp}
            className="mb-12 font-mono text-sm uppercase tracking-widest text-neon-cyan md:text-base"
          >
            <TypeAnimation
              sequence={[
                "Hello, World!",
                1000,
                "Welcome to my portfolio",
                1000,
                "Let's build something amazing",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </motion.div>

          {/* Name with glitch effect */}
          {/* <motion.h1
            variants={fadeInUp}
            className="mb-6 font-display text-2xl font-bold leading-tight md:text-4xl lg:text-xl"
          > */}
            {/* <GlitchTextContinuous
              text={PERSONAL_INFO.name}
              className="gradient-text-animated"
            /> */}
            {/* Muhammad Falah Aufa Anggara
          </motion.h1> */}

          {/* Role */}
          <motion.h2
            variants={fadeInUp}
            className="mb-8 font-body text-xl font-medium text-muted-foreground md:text-2xl lg:text-3xl"
          >
            {PERSONAL_INFO.role}
          </motion.h2>

          {/* Tagline */}
          <motion.p
            variants={fadeInUp}
            className="mx-auto mb-12 max-w-2xl text-base text-muted-foreground md:text-lg mt-8"
          >
            {PERSONAL_INFO.bio}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            {/* Primary CTA */}
            <motion.a
              href="#projects"
              className={cn(
                "group relative overflow-hidden rounded-lg border-2 border-neon-cyan",
                "bg-gradient-to-r from-neon-cyan/10 to-neon-purple/10 px-8 py-4",
                "font-body text-sm font-semibold uppercase tracking-wider text-neon-cyan",
                "transition-all hover:shadow-neon-cyan",
              )}
              {...cursorHover}
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">View My Work</span>

              {/* Animated background */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-neon-cyan to-neon-purple opacity-0 transition-opacity group-hover:opacity-20"
                initial={false}
              />
            </motion.a>

            {/* Secondary CTA */}
            <motion.a
              href="#contact"
              className={cn(
                "rounded-lg border border-border bg-background/50 px-8 py-4",
                "font-body text-sm font-semibold uppercase tracking-wider",
                "transition-all hover:border-neon-pink hover:text-neon-pink hover:shadow-glow-sm",
              )}
              {...cursorHover}
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
            </motion.a>

            {/* Download CV */}
            <motion.a
              href="/cv.pdf"
              download
              className={cn(
                "flex items-center gap-2 rounded-lg border border-border bg-background/50 px-8 py-4",
                "font-body text-sm font-semibold uppercase tracking-wider",
                "transition-all hover:border-neon-cyan hover:text-neon-cyan hover:shadow-glow-sm",
              )}
              {...cursorHover}
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download size={18} />
              Download CV
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={fadeInUp}
            className="mt-12 flex items-center justify-center gap-6"
          >
            <SocialIcon
              href={SOCIAL_LINKS.github}
              icon={Github}
              label="GitHub"
            />
            <SocialIcon
              href={SOCIAL_LINKS.linkedin}
              icon={Linkedin}
              label="LinkedIn"
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      {/* <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <motion.div
          className="flex flex-col items-center gap-2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <span className="font-mono text-xs text-neon-cyan">SCROLL</span>
          <ArrowDown size={20} className="text-neon-cyan" />
        </motion.div>
      </motion.div> */}

      {/* 4 KOTAK SIKU DIHAPUS - NO CORNER DECORATIONS! */}
    </section>
  );
}

/**
 * Social Icon Component
 */
interface SocialIconProps {
  href: string;
  icon: React.ElementType;
  label: string;
}

function SocialIcon({ href, icon: Icon, label }: SocialIconProps) {
  const cursorHover = useCursorHover();

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "flex h-12 w-12 items-center justify-center rounded-lg border border-border",
        "bg-background/50 text-muted-foreground transition-all",
        "hover:border-neon-cyan hover:text-neon-cyan hover:shadow-neon-cyan",
      )}
      {...cursorHover}
      whileHover={{ scale: 1.1, y: -5 }}
      whileTap={{ scale: 0.9 }}
      title={label}
    >
      <Icon size={20} />
    </motion.a>
  );
}
