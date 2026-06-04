"use client";

import { Environment, Scroll } from "@react-three/drei";
import { useRef } from "react";
import { Group } from "three";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import FloatingCan from "@/components/FloatingCan";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { Bubbles } from "../Hero/Bubbles";

gsap.registerPlugin(ScrollTrigger, useGSAP);

type Props = {};

export default function Scene({}: Props) {
  const canRef = useRef<Group>(null);
  const isDesktop = useMediaQuery("(min-width: 768px)", true);

  const bgColors = ["#3D2417", "#5A3520", "#1A0F08"];

  useGSAP(
    () => {
      if (!canRef.current) return;

      const sections = gsap.utils.toArray(".alternating-section");

      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".alternating-text-view",
          endTrigger: ".alternating-text-container",
          pin: true,
          start: "top top",
          end: "bottom bottom",
          scrub: true,
        },
      });

      sections.forEach((_, index) => {
        if (!canRef.current) return;
        if (index === 0) return;

        const isOdd = index % 2 !== 0;

        const xPosition = isDesktop ? (isOdd ? "-1" : "1") : 0;
        const yRotation = isDesktop ? (isOdd ? ".4" : "-.4") : 0;
        scrollTl
          .to(canRef.current.position, {
            x: xPosition,
            ease: "circ.inOut",
            delay: 0.5,
          })
          .to(
            canRef.current.rotation,
            {
              y: yRotation,
              ease: "back.inOut",
            },
            "<",
          )
          .to(".alternating-text-container", {
            backgroundColor: gsap.utils.wrap(bgColors, index),
          });
      });
    },
    { dependencies: [isDesktop] },
  );

  return (
    <group>
      {/* Bubbles for section 0 */}
      <group position={[0, 0, 0]}>
        <Bubbles
          count={60}
          speed={1.2}
          bubbleSize={0.04}
          opacity={0.3}
          spreadX={4}
          spreadZ={2}
          yMin={-2}
          yMax={2}
        />
      </group>
      {/* Bubbles for section 1 */}
      <group position={[0, -8, 0]}>
        <Bubbles
          count={60}
          speed={1.5}
          bubbleSize={0.045}
          opacity={0.32}
          spreadX={4}
          spreadZ={2}
          yMin={-2}
          yMax={2}
        />
      </group>
      {/* Bubbles for section 2 */}
      <group position={[0, -16, 0]}>
        <Bubbles
          count={60}
          speed={1.3}
          bubbleSize={0.04}
          opacity={0.28}
          spreadX={4}
          spreadZ={2}
          yMin={-2}
          yMax={2}
        />
      </group>

      <group
        ref={canRef}
        position-x={isDesktop ? 1 : 0}
        rotation-y={isDesktop ? -0.3 : 0}
      >
        <FloatingCan flavor="strawberryLemonade" />
        <Environment files={"/hdr/lobby.hdr"} environmentIntensity={1.5} />
      </group>
    </group>
  );
}
