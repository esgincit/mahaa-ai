"use client";

import { useFrame } from "@react-three/fiber";
import * as React from "react";
import * as THREE from "three";

function Particles() {
  const pointsRef = React.useRef<THREE.Points>(null);
  const count = 220;
  const positions = React.useMemo(() => {
    const array = new Float32Array(count * 3);
    for (let i = 0; i < count; i += 1) {
      const xSeed = Math.sin((i + 1) * 12.9898) * 43758.5453;
      const ySeed = Math.sin((i + 1) * 78.233) * 24634.6345;
      const zSeed = Math.sin((i + 1) * 37.719) * 19341.1173;
      array[i * 3] = ((xSeed - Math.floor(xSeed)) - 0.5) * 14;
      array[i * 3 + 1] = (ySeed - Math.floor(ySeed)) * 6;
      array[i * 3 + 2] = ((zSeed - Math.floor(zSeed)) - 0.5) * 14;
    }
    return array;
  }, []);

  useFrame((state) => {
    if (!pointsRef.current) return;
    pointsRef.current.rotation.y = state.clock.elapsedTime * 0.04;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.045} sizeAttenuation color="#7dd3fc" transparent opacity={0.5} depthWrite={false} />
    </points>
  );
}

export { Particles };
