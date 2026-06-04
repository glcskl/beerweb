import { SVGProps } from "react";
import clsx from "clsx";
import Image from "next/image";

export function BreezingheadLogo(props: SVGProps<SVGSVGElement> & { className?: string }) {
  return (
    <div className={clsx("group", props.className)}>
      <Image
        src="/labels/breezinghead-logo.png?v=2"
        alt="breezinghead"
        width={220}
        height={76}
        className="object-contain"
        priority
        unoptimized
      />
    </div>
  );
}
