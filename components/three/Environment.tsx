"use client";

import * as React from "react";

function Environment() {
  return (
    <>
      <mesh scale={50} position={[0, -0.8, 0]}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshBasicMaterial color="#03111b" side={2} />
      </mesh>
      <mesh scale={40} position={[0, 1.3, -2]}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshBasicMaterial color="#0a2335" side={2} />
      </mesh>
    </>
  );
}

export { Environment };
