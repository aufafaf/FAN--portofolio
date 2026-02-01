"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Suspense } from "react";
import { ParticleSystem } from "./ParticleSystem";
import { FloatingShapes } from "./FloatingShapes";

interface Scene3DProps {
  enableOrbitControls?: boolean;
  enableParticles?: boolean;
  enableShapes?: boolean;
  particleCount?: number;
  cameraPosition?: [number, number, number];
  className?: string;
}

/**
 * Main 3D Scene Component
 * Wraps all 3D elements and provides canvas setup
 */
export function Scene3D({
  enableOrbitControls = false,
  enableParticles = true,
  enableShapes = true,
  particleCount = 100,
  cameraPosition = [0, 0, 5],
  className = "",
}: Scene3DProps) {
  return (
    <div className={`w-full h-full ${className}`}>
      <Canvas
        dpr={[1, 2]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
        }}
        className="!fixed inset-0 -z-10"
      >
        {/* Camera */}
        <PerspectiveCamera
          makeDefault
          position={cameraPosition}
          fov={75}
          near={0.1}
          far={1000}
        />

        {/* Lights */}
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#00F0FF" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#FF006E" />
        <spotLight
          position={[0, 10, 0]}
          angle={0.3}
          penumbra={1}
          intensity={1}
          color="#8B5CF6"
          castShadow
        />

        {/* 3D Content */}
        <Suspense fallback={null}>
          {enableParticles && (
            <ParticleSystem
              count={particleCount}
              size={0.05}
              color="#00F0FF"
              speed={0.5}
              spread={10}
            />
          )}

          {enableShapes && <FloatingShapes />}
        </Suspense>

        {/* Orbit Controls (optional) */}
        {enableOrbitControls && (
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
        )}
      </Canvas>
    </div>
  );
}