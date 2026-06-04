import React from "react";
import { BreezingheadLogo } from "./BreezingheadLogo";

type Props = {};

export default function Footer({}: Props) {
  return (
    <footer className="bg-[#1A0F08] text-[#E5A04A]">
      <div className="relative mx-auto flex w-full max-w-4xl flex-col items-center justify-center px-4 py-10">
        <BreezingheadLogo className="h-28" />
        <p className="mt-4 text-center text-base md:text-lg">
          Сварено с <span aria-hidden className="inline-block animate-breath text-[#E5A04A]">♥</span> для ценителей хмеля
        </p>
      </div>
    </footer>
  );
}
