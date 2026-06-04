import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `BigText`.
 */
export type BigTextProps = SliceComponentProps<Content.BigTextSlice>;

/**
 * Component for "BigText" Slices.
 */
const BigText = ({ slice }: BigTextProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="min-h-screen w-screen overflow-hidden bg-[#1A0F08] px-4 py-16 text-[#E5A04A] md:py-20"
    >
      <h2 className="mx-auto flex max-w-6xl flex-col items-center gap-6 text-center font-black uppercase leading-[1.05] md:gap-10">
        <span className="text-[18vw] leading-none md:text-[16vw]">Пей</span>

        <span className="text-[10vw] leading-none md:text-[6vw]">псковское</span>

        <span className="text-[10vw] leading-none md:text-[6vw]">живое</span>

        <span className="flex items-center justify-center gap-[1vw]">
          <span className="text-[18vw] leading-none md:text-[16vw]">ПИВ</span>
          <span
            className="relative inline-block shrink-0"
            style={{ width: "18vw", height: "18vw" }}
          >
            <svg
              viewBox="0 0 100 100"
              className="absolute inset-0 h-full w-full animate-spin-slow"
            >
              <defs>
                <path
                  id="bigtext-circle"
                  d="M 50,50 m -38,0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0"
                />
              </defs>
              <text
                fontSize="9.2"
                fontWeight="900"
                fill="#E5A04A"
                letterSpacing="1.2"
              >
                <textPath href="#bigtext-circle" startOffset="0">
                  BREEZINGHEAD BREWERY • BREEZINGHEAD BREWERY •
                </textPath>
              </text>
            </svg>
          </span>
        </span>
      </h2>
    </section>
  );
};

export default BigText;
