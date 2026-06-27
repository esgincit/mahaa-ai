"use client";

import { useFrame, useThree } from "@react-three/fiber";
import * as React from "react";

function CameraRig() {
  const { camera } = useThree();

  React.useEffect(() => {
    camera.position.set(0, 1.8, 6.4);
  }, [camera]);

  useFrame((state) => {
    camera.position.x = Math.sin(state.clock.elapsedTime * 0.18) * 0.22;
    camera.position.y = 1.8 + Math.sin(state.clock.elapsedTime * 0.12) * 0.04;
    camera.lookAt(0, 0.9, 0);
  });

  return null;
}

export { CameraRig };
