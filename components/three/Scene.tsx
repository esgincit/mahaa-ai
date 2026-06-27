"use client";

import { Canvas } from "@react-three/fiber";
import * as React from "react";

import { CameraRig } from "@/components/three/CameraRig";
import { Drone } from "@/components/three/Drone";
import { Environment } from "@/components/three/Environment";
import { Ground } from "@/components/three/Ground";
import { Lights } from "@/components/three/Lights";
import { Particles } from "@/components/three/Particles";
import { Robot } from "@/components/three/Robot";

function Scene() {
  return (
    <div className="relative h-[460px] w-full overflow-hidden rounded-[2rem] border border-white/10 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.27),_transparent_45%)] sm:h-[560px]">
      <Canvas
        camera={{ position: [0, 2.2, 6.4], fov: 42 }}
        dpr={[1, 1.75]}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      >
        <color attach="background" args={["#04111d"]} />
        <fog attach="fog" args={["#04111d", 5, 18]} />
        <Environment />
        <Lights />
        <CameraRig />
        <Ground />
        <Particles />
        <Robot />
        <Drone />
      </Canvas>
    </div>
  );
}

export { Scene };
