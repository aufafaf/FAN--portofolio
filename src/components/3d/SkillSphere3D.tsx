"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Text } from "@react-three/drei";
import * as THREE from "three";

interface Skill {
  name: string;
  level: number; // 0-100
  color?: string;
}

interface SkillSphere3DProps {
  skills: Skill[];
  radius?: number;
  autoRotate?: boolean;
}

/**
 * 3D Skill Sphere Component
 * Creates a sphere of floating skill tags that rotate
 */
export function SkillSphere3D({
  skills,
  radius = 3,
  autoRotate = true,
}: SkillSphere3DProps) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!groupRef.current) return;

    if (autoRotate) {
      groupRef.current.rotation.y += 0.003;
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
    }
  });

  // Distribute skills on sphere using Fibonacci sphere algorithm
  const getPositionOnSphere = (index: number, total: number) => {
    const phi = Math.acos(1 - (2 * (index + 0.5)) / total);
    const theta = Math.PI * (1 + Math.sqrt(5)) * index;

    const x = radius * Math.sin(phi) * Math.cos(theta);
    const y = radius * Math.sin(phi) * Math.sin(theta);
    const z = radius * Math.cos(phi);

    return new THREE.Vector3(x, y, z);
  };

  return (
    <group ref={groupRef}>
      {skills.map((skill, index) => {
        const position = getPositionOnSphere(index, skills.length);
        const color = skill.color || "#00F0FF";
        const size = 0.15 + (skill.level / 100) * 0.1; // Larger text for higher level

        return (
          <SkillTag
            key={skill.name}
            name={skill.name}
            position={position}
            color={color}
            size={size}
            index={index}
          />
        );
      })}

      {/* Center sphere (wireframe) */}
      <mesh>
        <sphereGeometry args={[radius * 0.3, 16, 16]} />
        <meshBasicMaterial
          color="#8B5CF6"
          wireframe
          transparent
          opacity={0.2}
        />
      </mesh>

      {/* Outer sphere guide (wireframe) */}
      <mesh>
        <sphereGeometry args={[radius, 32, 32]} />
        <meshBasicMaterial
          color="#00F0FF"
          wireframe
          transparent
          opacity={0.05}
        />
      </mesh>
    </group>
  );
}

/**
 * Individual Skill Tag Component
 */
interface SkillTagProps {
  name: string;
  position: THREE.Vector3;
  color: string;
  size: number;
  index: number;
}

function SkillTag({ name, position, color, size, index }: SkillTagProps) {
  const textRef = useRef<any>(null);

  useFrame((state) => {
    if (!textRef.current) return;

    // Make text always face camera
    textRef.current.lookAt(state.camera.position);

    // Subtle floating animation
    const offset = Math.sin(state.clock.elapsedTime + index) * 0.05;
    textRef.current.position.y = position.y + offset;
  });

  return (
    <group position={position}>
      <Text
        ref={textRef}
        fontSize={size}
        color={color}
        anchorX="center"
        anchorY="middle"
        font="/fonts/Rajdhani-Bold.ttf" // Make sure to add this font
        outlineWidth={0.01}
        outlineColor="#0A0E27"
      >
        {name}
      </Text>

      {/* Glow effect behind text */}
      <mesh position={[0, 0, -0.1]}>
        <planeGeometry args={[name.length * size * 0.6, size * 1.5]} />
        <meshBasicMaterial
          color={color}
          transparent
          opacity={0.1}
          blending={THREE.AdditiveBlending}
        />
      </mesh>
    </group>
  );
}