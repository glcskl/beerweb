import clsx from "clsx";

type Props = {
  textColor?: string;
  backgroundColor?: string;
  className?: string;
  text?: string;
};

export default function CircleText({
  textColor = "#E5A04A",
  backgroundColor = "#1A0F08",
  className,
  text = "breezinghead brewery • breezinghead brewery • ",
}: Props) {
  const pathId = "circle-text-path";

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 200"
      className={clsx("circle-text", className)}
      aria-labelledby="circle-text-title"
    >
      <title id="circle-text-title">{text.replace(/[•·]/g, "").trim()}</title>
      <defs>
        <path
          id={pathId}
          d="M 100,100 m -78,0 a 78,78 0 1,1 156,0 a 78,78 0 1,1 -156,0"
        />
      </defs>
      <circle cx="100" cy="100" r="78" fill={backgroundColor} />
      <g className="animate-spin-slow origin-center">
        <text
          fill={textColor}
          fontSize="14"
          fontWeight="700"
          letterSpacing="1.5"
          style={{ textTransform: "uppercase" }}
        >
          <textPath href={`#${pathId}`} startOffset="0">
            {text}
          </textPath>
        </text>
      </g>
    </svg>
  );
}
