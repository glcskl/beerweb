"use client";

import { Canvas } from "@react-three/fiber";
import { View } from "@react-three/drei";
import { Suspense } from "react";
import { useMediaQuery } from "@/hooks/useMediaQuery";

type Props = {};

export default function ViewCanvas({}: Props) {
  const isMobile = useMediaQuery("(max-width: 767px)", false);

  return (
    <Canvas
      style={{
        position: "fixed",
        top: 0,
        left: "50%",
        transform: "translateX(-50%)",
        overflow: "hidden",
        pointerEvents: "none",
        zIndex: 30,
      }}
      shadows={!isMobile}
      dpr={isMobile ? [1, 1] : [1, 1.5]}
      gl={{
        antialias: !isMobile,
        powerPreference: isMobile ? "low-power" : "high-performance",
      }}
      camera={{
        fov: 30,
      }}
    >
      <Suspense fallback={null}>
        <View.Port />
      </Suspense>
    </Canvas>
  );
}
