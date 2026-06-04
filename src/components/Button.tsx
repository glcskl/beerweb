import { LinkField } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";
import clsx from "clsx";

type Props = {
  buttonLink?: LinkField;
  buttonText: string | null;
  className?: string;
  hrefOverride?: string;
  onClick?: () => void;
};

export default function Button({
  buttonLink,
  buttonText,
  className,
  hrefOverride,
  onClick,
}: Props) {
  const baseClass = clsx(
    "rounded-xl bg-[#E5A04A] px-5 py-4 text-center text-xl font-bold uppercase tracking-wide text-[#1A0F08] transition-colors duration-150 hover:bg-[#F5C97D] md:text-2xl",
    className,
  );

  if (onClick) {
    return (
      <button type="button" onClick={onClick} className={baseClass}>
        {buttonText}
      </button>
    );
  }

  return (
    <PrismicNextLink
      className={baseClass}
      {...(hrefOverride ? { href: hrefOverride } : { field: buttonLink })}
    >
      {buttonText}
    </PrismicNextLink>
  );
}
