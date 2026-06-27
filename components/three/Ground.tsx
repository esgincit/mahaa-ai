"use client";

import * as React from "react";

function Ground() {
  return (
    <group>
      <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
        <circleGeometry args={[6, 64]} />
        <meshStandardMaterial color="#09161f" roughness={0.9} metalness={0.1} />
      </mesh>
      <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.01, 0]}>
        <circleGeometry args={[5.4, 64]} />
        <meshStandardMaterial color="#0b1725" roughness={0.9} metalness={0.1} />
      </mesh>
    </group>
  );
}

export { Ground };
