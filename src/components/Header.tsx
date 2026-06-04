import React from "react";
import { BreezingheadLogo } from "@/components/BreezingheadLogo";

type Props = {};

export default function Header({}: Props) {
  return (
    <header className="-mb-28 flex justify-center py-4">
      <BreezingheadLogo className="z-10 h-24 cursor-pointer" />
    </header>
  );
}
