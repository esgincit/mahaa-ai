"use client";

import { useFrame } from "@react-three/fiber";
import * as React from "react";
import * as THREE from "three";

function Robot() {
  const groupRef = React.useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!groupRef.current) return;
    groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 1.3) * 0.12 + 0.6;
    groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.7) * 0.2;
  });

  return (
    <group ref={groupRef}>
      <mesh castShadow receiveShadow position={[0, 0.9, 0]}>
        <cylinderGeometry args={[0.5, 0.65, 0.95, 18]} />
        <meshStandardMaterial color="#22c55e" emissive="#123d24" emissiveIntensity={0.5} metalness={0.35} roughness={0.2} />
      </mesh>
      <mesh castShadow receiveShadow position={[0, 1.78, 0]}>
        <boxGeometry args={[0.85, 0.55, 0.75]} />
        <meshStandardMaterial color="#0b1725" emissive="#0d2436" emissiveIntensity={0.2} metalness={0.5} roughness={0.2} />
      </mesh>
      <mesh castShadow receiveShadow position={[-0.26, 1.76, 0.43]}>
        <sphereGeometry args={[0.08, 20, 20]} />
        <meshStandardMaterial color="#38bdf8" emissive="#0f2e46" emissiveIntensity={0.95} />
      </mesh>
      <mesh castShadow receiveShadow position={[0.26, 1.76, 0.43]}>
        <sphereGeometry args={[0.08, 20, 20]} />
        <meshStandardMaterial color="#38bdf8" emissive="#0f2e46" emissiveIntensity={0.95} />
      </mesh>
      <mesh castShadow receiveShadow position={[0, 1.35, 0.42]}>
        <boxGeometry args={[0.42, 0.08, 0.15]} />
        <meshStandardMaterial color="#ffffff" emissive="#2d4d66" emissiveIntensity={0.35} />
      </mesh>
      <group position={[0, 0.3, 0]}>
        <mesh castShadow receiveShadow position={[-0.42, 0.1, 0]}>
          <cylinderGeometry args={[0.08, 0.08, 0.54, 20]} />
          <meshStandardMaterial color="#0f172a" metalness={0.6} roughness={0.25} />
        </mesh>
        <mesh castShadow receiveShadow position={[0.42, 0.1, 0]}>
          <cylinderGeometry args={[0.08, 0.08, 0.54, 20]} />
          <meshStandardMaterial color="#0f172a" metalness={0.6} roughness={0.25} />
        </mesh>
      </group>
    </group>
  );
}

export { Robot };
