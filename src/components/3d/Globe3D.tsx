"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface Globe3DProps {
  position?: [number, number, number];
  scale?: number;
  autoRotate?: boolean;
  markerPosition?: { lat: number; lon: number };
}

/**
 * Interactive 3D Globe Component
 * Shows a rotating globe with a marker for user location
 */
export function Globe3D({
  position = [0, 0, 0],
  scale = 1,
  autoRotate = true,
  markerPosition = { lat: -7.797068, lon: 110.370529 }, // Yogyakarta, Indonesia
}: Globe3DProps) {
  const globeRef = useRef<THREE.Group>(null);
  const markerRef = useRef<THREE.Mesh>(null);

  // Convert lat/lon to 3D coordinates
  const latLonToVector3 = (lat: number, lon: number, radius: number) => {
    const phi = (90 - lat) * (Math.PI / 180);
    const theta = (lon + 180) * (Math.PI / 180);

    const x = -(radius * Math.sin(phi) * Math.cos(theta));
    const y = radius * Math.cos(phi);
    const z = radius * Math.sin(phi) * Math.sin(theta);

    return new THREE.Vector3(x, y, z);
  };

  const markerPos = latLonToVector3(markerPosition.lat, markerPosition.lon, 1.02);

  useFrame((state) => {
    if (!globeRef.current) return;

    // Auto rotate
    if (autoRotate) {
      globeRef.current.rotation.y += 0.002;
    }

    // Pulse marker
    if (markerRef.current) {
      const scale = 1 + Math.sin(state.clock.elapsedTime * 2) * 0.2;
      markerRef.current.scale.setScalar(scale);
    }
  });

  return (
    <group ref={globeRef} position={position} scale={scale}>
      {/* Main Globe */}
      <mesh>
        <sphereGeometry args={[1, 64, 64]} />
        <meshStandardMaterial
          color="#0A0E27"
          metalness={0.3}
          roughness={0.7}
          wireframe={false}
        />
      </mesh>

      {/* Wireframe overlay */}
      <mesh>
        <sphereGeometry args={[1.01, 32, 32]} />
        <meshBasicMaterial
          color="#00F0FF"
          wireframe
          transparent
          opacity={0.3}
        />
      </mesh>

      {/* Grid lines (latitude) */}
      {[...Array(8)].map((_, i) => {
        const lat = -90 + (i + 1) * 22.5;
        const radius = Math.cos((lat * Math.PI) / 180);
        const y = Math.sin((lat * Math.PI) / 180);

        return (
          <mesh key={`lat-${i}`} position={[0, y, 0]} rotation={[Math.PI / 2, 0, 0]}>
            <torusGeometry args={[radius, 0.002, 8, 64]} />
            <meshBasicMaterial color="#00F0FF" transparent opacity={0.2} />
          </mesh>
        );
      })}

      {/* Grid lines (longitude) */}
      {[...Array(16)].map((_, i) => {
        const lon = i * 22.5;
        return (
          <mesh key={`lon-${i}`} rotation={[0, (lon * Math.PI) / 180, 0]}>
            <torusGeometry args={[1, 0.002, 8, 64]} />
            <meshBasicMaterial color="#00F0FF" transparent opacity={0.2} />
          </mesh>
        );
      })}

      {/* Location Marker */}
      <mesh ref={markerRef} position={markerPos}>
        <sphereGeometry args={[0.03, 16, 16]} />
        <meshBasicMaterial color="#FF006E" />
      </mesh>

      {/* Marker Glow */}
      <mesh position={markerPos}>
        <sphereGeometry args={[0.05, 16, 16]} />
        <meshBasicMaterial
          color="#FF006E"
          transparent
          opacity={0.3}
        />
      </mesh>

      {/* Atmosphere Glow */}
      <mesh scale={1.1}>
        <sphereGeometry args={[1, 64, 64]} />
        <meshBasicMaterial
          color="#00F0FF"
          transparent
          opacity={0.1}
          side={THREE.BackSide}
        />
      </mesh>
    </group>
  );
}