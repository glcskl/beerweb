import { Metadata } from "next";

import { SliceZone } from "@prismicio/react";

import { homePageSlices } from "@/data/homeContent";
import { components } from "@/slices";

export const metadata: Metadata = {
  title: "breezinghead",
  description:
    "Откройте для себя насыщенный вкус breezinghead — натуральное пиво с хмелевым ароматом, низкой калорийностью и пятью уникальными сортами.",
  openGraph: {
    title: "breezinghead",
    description:
      "Откройте для себя насыщенный вкус breezinghead — натуральное пиво с хмелевым ароматом, низкой калорийностью и пятью уникальными сортами.",
    images: [{ url: "" }],
  },
};

export default function Index() {
  return <SliceZone slices={homePageSlices as any} components={components} />;
}
