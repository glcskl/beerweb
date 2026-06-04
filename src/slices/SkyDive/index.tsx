"use client";

import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import { Bounded } from "@/components/Bounded";
import Scene from "./Scene";
import { View } from "@react-three/drei";

gsap.registerPlugin(useGSAP, ScrollTrigger);

/**
 * Props for `SkyDive`.
 */
export type SkyDiveProps = SliceComponentProps<Content.SkyDiveSlice>;

/**
 * Component for "SkyDive" Slices.
 */
const SkyDive = ({ slice }: SkyDiveProps): JSX.Element => {
  const textRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!textRef.current) return;

    gsap.set(textRef.current, { opacity: 0, y: 40 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".skydive",
        pin: true,
        start: "top top",
        end: "+=2000",
        scrub: 1.5,
      },
    });

    tl.to(textRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.15,
      ease: "power2.out",
    }, 0.05)
    .to(textRef.current, {
      opacity: 0,
      y: -40,
      duration: 0.15,
      ease: "power2.in",
    }, 0.75);
  });

  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="skydive h-screen"
    >
      <View className="h-screen w-screen">
        <Scene
          flavor={slice.primary.flavor}
          sentence={null}
        />
      </View>

      <div
        ref={textRef}
        className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center px-6"
      >
        <h2 className="text-balance text-center text-5xl font-black uppercase leading-[1.05] tracking-tight text-[#E5A04A] drop-shadow-[0_4px_24px_rgba(0,0,0,0.6)] md:text-7xl lg:text-8xl">
          {slice.primary.sentence}
        </h2>
      </div>
    </Bounded>
  );
};

export default SkyDive;
