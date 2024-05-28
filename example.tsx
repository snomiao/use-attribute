import { useAttribute } from ".";

export function Component() {
  const deg = 15;
  const ref = useAttribute<HTMLDivElement>(
    "style",
    [`--bg: hsl(${deg}deg 60% 80%)`, `--bg-hover: hsl(${deg}deg 80% 80%)`].join(
      "; "
    )
  );

  return (
    <div ref={ref} className="bg-[var(--bg)] hover:bg-[var(--bg-hover)]">
      contents
    </div>
  );
}
