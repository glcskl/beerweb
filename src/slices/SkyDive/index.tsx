"use client";

import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { View } from "@react-three/drei";

import { Bounded } from "@/components/Bounded";
import Scene from "./Scene";

/**
 * Props for `SkyDive`.
 */
export type SkyDiveProps = SliceComponentProps<Content.SkyDiveSlice>;

/**
 * Component for "SkyDive" Slices.
 */
const SkyDive = ({ slice }: SkyDiveProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="skydive h-screen"
    >
      <View className="h-screen w-screen">
        <Scene
          flavor={slice.primary.flavor}
          sentence={slice.primary.sentence}
        />
      </View>

      <div className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center px-6">
        <h2 className="text-balance text-center text-3xl font-black uppercase leading-[1.05] tracking-tight text-[#E5A04A] drop-shadow-[0_4px_24px_rgba(0,0,0,0.6)] sm:text-5xl md:text-7xl lg:text-8xl">
          {slice.primary.sentence}
        </h2>
      </div>
    </Bounded>
  );
};

export default SkyDive;
