"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useMousePosition } from "@/hooks/useMousePosition";

interface ParticleSystemProps {
  count?: number;
  size?: number;
  color?: string;
  speed?: number;
  spread?: number;
}

/**
 * 3D Particle System Component
 * Creates floating particles that follow the mouse cursor
 */
export function ParticleSystem({
  count = 100,
  size = 0.05,
  color = "#00F0FF",
  speed = 0.5,
  spread = 10,
}: ParticleSystemProps) {
  const pointsRef = useRef<THREE.Points>(null);
  const mousePosition = useMousePosition();

  // Generate random particle positions
  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * spread;
      positions[i * 3 + 1] = (Math.random() - 0.5) * spread;
      positions[i * 3 + 2] = (Math.random() - 0.5) * spread;
    }

    return positions;
  }, [count, spread]);

  // Generate random particle velocities
  const particlesVelocity = useMemo(() => {
    const velocities = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      velocities[i * 3] = (Math.random() - 0.5) * 0.02;
      velocities[i * 3 + 1] = (Math.random() - 0.5) * 0.02;
      velocities[i * 3 + 2] = (Math.random() - 0.5) * 0.02;
    }

    return velocities;
  }, [count]);

  // Animate particles
  useFrame((state) => {
    if (!pointsRef.current) return;

    const positions = pointsRef.current.geometry.attributes.position
      .array as Float32Array;

    // Normalize mouse position (-1 to 1)
    const mouseX = (mousePosition.x / window.innerWidth) * 2 - 1;
    const mouseY = -(mousePosition.y / window.innerHeight) * 2 + 1;

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;

      // Apply velocity
      positions[i3] += particlesVelocity[i3] * speed;
      positions[i3 + 1] += particlesVelocity[i3 + 1] * speed;
      positions[i3 + 2] += particlesVelocity[i3 + 2] * speed;

      // Attract particles to mouse position
      const dx = mouseX * 5 - positions[i3];
      const dy = mouseY * 5 - positions[i3 + 1];

      positions[i3] += dx * 0.01;
      positions[i3 + 1] += dy * 0.01;

      // Boundary check - wrap around
      if (Math.abs(positions[i3]) > spread / 2) {
        positions[i3] = -positions[i3];
      }
      if (Math.abs(positions[i3 + 1]) > spread / 2) {
        positions[i3 + 1] = -positions[i3 + 1];
      }
      if (Math.abs(positions[i3 + 2]) > spread / 2) {
        positions[i3 + 2] = -positions[i3 + 2];
      }
    }

    pointsRef.current.geometry.attributes.position.needsUpdate = true;

    // Rotate particle system slowly
    pointsRef.current.rotation.y = state.clock.elapsedTime * 0.05;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={particlesPosition}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={size}
        color={color}
        transparent
        opacity={0.8}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}