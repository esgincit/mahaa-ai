"use client";

import * as React from "react";

function Lights() {
  return (
    <>
      <ambientLight intensity={0.35} />
      <directionalLight position={[6, 8, 4]} intensity={2.2} color="#7dd3fc" castShadow />
      <directionalLight position={[-5, 3, -6]} intensity={1.4} color="#22c55e" />
      <pointLight position={[0, 3, 2]} intensity={4.2} color="#38bdf8" distance={10} decay={2.4} />
      <pointLight position={[0, 1.2, -2]} intensity={2.8} color="#22c55e" distance={8} decay={2.2} />
    </>
  );
}

export { Lights };
