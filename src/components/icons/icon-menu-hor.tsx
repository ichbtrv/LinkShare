function HorizontalMenuIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={8}
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
      shapeRendering="geometricPrecision"

      {...props}
    >
      <circle cx={12} cy={6} r={1} fill="currentColor" />
      <circle cx={19} cy={6} r={1} fill="currentColor" />
      <circle cx={5} cy={6} r={1} fill="currentColor" />
    </svg>
  );
}

export default HorizontalMenuIcon;
