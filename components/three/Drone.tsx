"use client";

import { useFrame } from "@react-three/fiber";
import * as React from "react";
import * as THREE from "three";

function Drone() {
  const groupRef = React.useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!groupRef.current) return;
    groupRef.current.position.x = Math.sin(state.clock.elapsedTime * 0.9) * 2.2;
    groupRef.current.position.z = Math.cos(state.clock.elapsedTime * 0.8) * 1.2 + 0.5;
    groupRef.current.position.y = 2.8 + Math.sin(state.clock.elapsedTime * 1.6) * 0.2;
    groupRef.current.rotation.y = state.clock.elapsedTime * 0.7;
  });

  return (
    <group ref={groupRef}>
      <mesh castShadow receiveShadow position={[0, 0, 0]}>
        <boxGeometry args={[0.6, 0.1, 0.3]} />
        <meshStandardMaterial color="#38bdf8" emissive="#0f2e46" emissiveIntensity={0.9} metalness={0.6} roughness={0.2} />
      </mesh>
      <mesh castShadow receiveShadow position={[-0.35, 0, -0.2]}>
        <cylinderGeometry args={[0.06, 0.06, 0.16, 10]} />
        <meshStandardMaterial color="#ffffff" metalness={0.7} roughness={0.15} />
      </mesh>
      <mesh castShadow receiveShadow position={[0.35, 0, -0.2]}>
        <cylinderGeometry args={[0.06, 0.06, 0.16, 10]} />
        <meshStandardMaterial color="#ffffff" metalness={0.7} roughness={0.15} />
      </mesh>
      <mesh castShadow receiveShadow position={[0, 0, 0.28]}>
        <sphereGeometry args={[0.08, 18, 18]} />
        <meshStandardMaterial color="#22c55e" emissive="#123d24" emissiveIntensity={1.1} />
      </mesh>
    </group>
  );
}

export { Drone };
