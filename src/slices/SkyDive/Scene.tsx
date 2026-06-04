"use client";

import { Content } from "@prismicio/client";
import { Cloud, Clouds, Text } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import FloatingCan from "@/components/FloatingCan";
import { useMediaQuery } from "@/hooks/useMediaQuery";

gsap.registerPlugin(useGSAP, ScrollTrigger);

type SkyDiveProps = {
  sentence: string | null;
  flavor: Content.SkyDiveSliceDefaultPrimary["flavor"];
};

export default function Scene({ sentence, flavor }: SkyDiveProps) {
  const groupRef = useRef<THREE.Group>(null);
  const canRef = useRef<THREE.Group>(null);
  const cloud1Ref = useRef<THREE.Group>(null);
  const cloud2Ref = useRef<THREE.Group>(null);
  const cloudsRef = useRef<THREE.Group>(null);
  const wordsRef = useRef<THREE.Group>(null);

  useGSAP(() => {
    if (
      !cloudsRef.current ||
      !canRef.current ||
      !wordsRef.current ||
      !cloud1Ref.current ||
      !cloud2Ref.current
    )
      return;

    gsap.set(canRef.current.position, { x: -1.04, y: -3.86, z: 0 });
    gsap.set(cloudsRef.current.position, { z: 0, y: 0, x: 0 });

    const wordPositions: Array<[number, number, number]> = [
      [-1.1, 0.6, 0],
      [1.1, 0.6, 0],
      [-1.1, -0.6, 0],
      [1.1, -0.6, 0],
    ];
    wordsRef.current.children.forEach((word, i) => {
      const [x, y, z] = wordPositions[i] || [0, 0, 0];
      gsap.set(word.position, { x, y, z });
    });

    gsap.to(canRef.current.rotation, {
      y: Math.PI * 2,
      duration: 1.7,
      repeat: -1,
      ease: "none",
    });

    const startX = 4.5;
    const endX = -4.5;
    const startY1 = 2.5;
    const endY1 = -2.5;
    const startY2 = -1.5;
    const endY2 = -6.5;
    const DURATION = 8;

    gsap.set(cloud1Ref.current.position, { x: startX, y: startY1, z: 0 });
    gsap.set(cloud2Ref.current.position, { x: startX, y: startY2, z: 0 });

    const animateCloud = (
      ref: THREE.Group,
      startY: number,
      endY: number,
      delay: number,
    ) => {
      gsap.to(ref.position, {
        x: endX,
        y: endY,
        duration: DURATION,
        ease: "none",
        repeat: -1,
        delay,
        onRepeat: () => {
          gsap.set(ref.position, { x: startX, y: startY });
        },
      });
    };

    animateCloud(cloud1Ref.current, startY1, endY1, 0);
    animateCloud(cloud2Ref.current, startY2, endY2, DURATION / 2);

    const scrollTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".skydive",
        pin: true,
        start: "top top",
        end: "+=2000",
        scrub: 1.5,
      },
    });

    scrollTl
      .to("body", {
        backgroundColor: "#2A1810",
        overwrite: "auto",
        duration: 0.1,
      })
      .to(canRef.current.position, {
        x: 0,
        y: 0,
        duration: 0.3,
        ease: "back.out(1.7)",
      }, 0)
      .to(
        wordsRef.current.children.map((word) => word.position),
        {
          keyframes: [
            { x: 0, y: 0, z: -1 },
            { x: -2, y: 1, z: -8 },
          ],
          stagger: 0.3,
        },
        0,
      )
      .to(canRef.current.position, {
        x: 1.04,
        y: 3.86,
        duration: 0.5,
        ease: "back.in(1.7)",
      })
      .to(cloudsRef.current.position, { z: 5, duration: 0.5 });
  });

  return (
    <group ref={groupRef}>
      <Clouds
        texture="/textures/cloud.png"
        limit={400}
        range={50}
      >
        <group ref={cloudsRef}>
          <group ref={cloud1Ref}>
            <Cloud
              seed={1}
              segments={20}
              bounds={[3, 1.5, 1]}
              volume={6}
              color="#F5E8D0"
              opacity={0.55}
              speed={0.1}
              growth={0.4}
              concentrate="random"
            />
          </group>
          <group ref={cloud2Ref}>
            <Cloud
              seed={2}
              segments={20}
              bounds={[3.5, 1.5, 1]}
              volume={6}
              color="#F5E8D0"
              opacity={0.5}
              speed={0.1}
              growth={0.4}
              concentrate="random"
            />
          </group>
        </group>
      </Clouds>

      <group rotation={[0, 0, 0.5]}>
        <FloatingCan
          ref={canRef}
          flavor={flavor}
          rotationIntensity={0}
          floatIntensity={3}
          floatSpeed={3}
        >
          <pointLight intensity={30} color="#E5A04A" decay={0.6} />
        </FloatingCan>
      </group>

      <group ref={wordsRef}>
        {sentence && <ThreeText sentence={sentence} color="#E5A04A" />}
      </group>

      <ambientLight intensity={2.5} color="#F5E8D0" />
      <directionalLight position={[5, 5, 5]} intensity={1.2} color="#F5E8D0" />
      <directionalLight position={[-5, -3, 2]} intensity={0.6} color="#E5A04A" />
    </group>
  );
}

function ThreeText({
  sentence,
  color = "white",
}: {
  sentence: string;
  color?: string;
}) {
  const words = sentence.toUpperCase().split(" ");
  const isDesktop = useMediaQuery("(min-width: 950px)", true);

  return words.map((word: string, wordIndex: number) => (
    <Text
      key={`${wordIndex}-${word}`}
      scale={isDesktop ? 0.45 : 0.32}
      color={color}
      font="/fonts/Alpino-Variable.woff"
      fontWeight={900}
      anchorX={"center"}
      anchorY={"middle"}
      characters="ABCDEFGHIJKLMNOPQRSTUVWXYZАБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ!,.?'"
    >
      {word}
    </Text>
  ));
}
