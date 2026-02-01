"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface FloatingShape {
  position: [number, number, number];
  rotation: [number, number, number];
  scale: number;
  type: "box" | "sphere" | "torus" | "octahedron";
  color: string;
}

interface FloatingShapesProps {
  shapes?: FloatingShape[];
}

/**
 * Floating 3D Geometric Shapes Component
 * Creates animated floating shapes in the background
 */
export function FloatingShapes({ shapes }: FloatingShapesProps) {
  const defaultShapes: FloatingShape[] = [
    {
      position: [-3, 2, -5],
      rotation: [0, 0, 0],
      scale: 0.5,
      type: "box",
      color: "#FF006E",
    },
    {
      position: [3, -2, -8],
      rotation: [0, 0, 0],
      scale: 0.7,
      type: "sphere",
      color: "#00F0FF",
    },
    {
      position: [-2, -1, -6],
      rotation: [0, 0, 0],
      scale: 0.4,
      type: "torus",
      color: "#8B5CF6",
    },
    {
      position: [2, 3, -7],
      rotation: [0, 0, 0],
      scale: 0.6,
      type: "octahedron",
      color: "#00FF41",
    },
    {
      position: [0, -3, -9],
      rotation: [0, 0, 0],
      scale: 0.5,
      type: "box",
      color: "#FFFF00",
    },
  ];

  const shapesToRender = shapes || defaultShapes;

  return (
    <group>
      {shapesToRender.map((shape, index) => (
        <FloatingShape key={index} {...shape} index={index} />
      ))}
    </group>
  );
}

/**
 * Individual Floating Shape Component
 */
function FloatingShape({
  position,
  rotation,
  scale,
  type,
  color,
  index,
}: FloatingShape & { index: number }) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;

    const time = state.clock.elapsedTime;

    // Floating animation
    meshRef.current.position.y =
      position[1] + Math.sin(time + index) * 0.3;

    // Rotation animation - different speeds for each shape
    meshRef.current.rotation.x += 0.01 * (index + 1);
    meshRef.current.rotation.y += 0.01 * (index + 1);
    meshRef.current.rotation.z += 0.005 * (index + 1);

    // Pulsing scale effect
    const pulsScale = 1 + Math.sin(time * 2 + index) * 0.1;
    meshRef.current.scale.setScalar(scale * pulsScale);
  });

  const renderGeometry = () => {
    switch (type) {
      case "box":
        return <boxGeometry args={[1, 1, 1]} />;
      case "sphere":
        return <sphereGeometry args={[0.5, 32, 32]} />;
      case "torus":
        return <torusGeometry args={[0.5, 0.2, 16, 100]} />;
      case "octahedron":
        return <octahedronGeometry args={[0.5]} />;
      default:
        return <boxGeometry args={[1, 1, 1]} />;
    }
  };

  return (
    <mesh ref={meshRef} position={position}>
      {renderGeometry()}
      <meshStandardMaterial
        color={color}
        transparent
        opacity={0.6}
        wireframe
        emissive={color}
        emissiveIntensity={0.5}
      />
    </mesh>
  );
}