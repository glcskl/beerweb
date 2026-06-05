"use client";

import { asText } from "@prismicio/client";
import { PrismicRichText } from "@prismicio/react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { View } from "@react-three/drei";
import { useEffect, useState } from "react";
import { Bounded } from "@/components/Bounded";
import Button from "@/components/Button";
import { TextSplitter } from "@/components/TextSplitter";
import Scene from "./Scene";
import { Bubbles } from "./Bubbles";
import { useMediaQuery } from "@/hooks/useMediaQuery";

gsap.registerPlugin(useGSAP, ScrollTrigger);

type HeroSlice = {
  variation: string;
  slice_type: string;
  primary: {
    heading: any;
    subheading: any;
    body: any;
    button_text: string | null;
    button_link: any;
    cans_image?: any;
    second_heading: any;
    second_body: any;
  };
};

type HeroProps = {
  slice: HeroSlice;
};

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): JSX.Element => {
  const mediaIsDesktop = useMediaQuery("(min-width: 768px)", false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    setIsDesktop(mediaIsDesktop);
  }, [mediaIsDesktop]);

  useGSAP(
    () => {
      const introTl = gsap.timeline();

      introTl
        .set(".hero", { opacity: 1 })
        .from(".hero-header-word", {
          scale: 3,
          opacity: 0,
          ease: "power4.in",
          delay: 0.3,
          stagger: 1,
        })
        .from(
          ".hero-subheading",
          {
            opacity: 0,
            y: 30,
          },
          "+=.8",
        )
        .from(".hero-body", {
          opacity: 0,
          y: 10,
        })
        .from(".hero-button", {
          opacity: 0,
          y: 10,
          duration: 0.6,
        });

      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".hero",
          start: "top top",
          end: "bottom bottom",
          scrub: 1.5,
        },
      });

      scrollTl
        .fromTo(
          "body",
          {
            backgroundColor: "#1A0F08",
          },
          {
            backgroundColor: "#2A1810",
            overwrite: "auto",
          },
          1,
        )
        .from(".text-side-heading .split-char", {
          scale: 1.3,
          y: 40,
          rotate: -25,
          opacity: 0,
          stagger: 0.1,
          ease: "back.out(3)",
          duration: 0.5,
        })
        .from(".text-side-body", {
          y: 20,
          opacity: 0,
        });
    },
    { dependencies: [isDesktop] },
  );

  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="hero"
    >
      <View
        key="hero-scene"
        className="hero-scene pointer-events-none sticky top-0 z-50 -mt-[100vh] h-screen w-screen"
      >
        <Scene isMobile={!isDesktop} />
        <Bubbles
          count={isDesktop ? 300 : 60}
          speed={2}
          repeat={true}
        />
      </View>

      <div className="grid">
        <div className="grid h-screen place-items-center px-4">
          <div className="grid auto-rows-min place-items-center text-center">
            <h1 className="hero-header text-5xl font-black uppercase leading-[.8] text-[#E5A04A] sm:text-7xl md:text-[9rem] lg:text-[13rem]">
              <TextSplitter
                text={asText(slice.primary.heading) ?? ""}
                wordDisplayStyle="block"
                className="hero-header-word"
              />
            </h1>
            <div className="hero-subheading mt-6 text-2xl font-semibold text-[#F5E8D0] sm:mt-12 sm:text-4xl md:text-5xl lg:text-6xl">
              <PrismicRichText field={slice.primary.subheading} />
            </div>
            <div className="hero-body mt-2 max-w-md text-base font-normal text-[#F5E8D0] sm:mt-4 sm:text-xl md:text-2xl">
              <PrismicRichText field={slice.primary.body} />
            </div>
            <Button
              buttonLink={slice.primary.button_link}
              buttonText={slice.primary.button_text}
              hrefOverride="/contact"
              className="hero-button mt-6 sm:mt-12"
            />
          </div>
        </div>

        <div className="text-side relative z-[80] grid h-screen items-center gap-4 px-4 md:grid-cols-2">
          <div>
            <h2 className="text-side-heading text-balance text-3xl font-black uppercase text-[#E5A04A] sm:text-5xl md:text-6xl lg:text-8xl">
              <TextSplitter text={asText(slice.primary.second_heading) ?? ""} />
            </h2>
            <div className="text-side-body mt-4 max-w-xl text-balance text-base font-normal text-[#F5E8D0] sm:text-lg md:text-xl">
              <PrismicRichText field={slice.primary.second_body} />
            </div>
          </div>
        </div>
      </div>
    </Bounded>
  );
};

export default Hero;
