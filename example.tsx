import { useAttribute } from ".";
import clsx from "clsx";
export function Component() {
  const deg = 15;
  const ref = useAttribute<HTMLDivElement>(
    "style",
    [
      `--bg: hsl(${deg}deg 60% 80%)`,
      `--bg-focus: hsl(${deg}deg 70% 80%)`,
      `--bg-hover: hsl(${deg}deg 80% 80%)`,
    ].join("; ")
  );

  return (
    <div
      ref={ref}
      className={clsx(
        "bg-[var(--bg)]",
        "focus:bg-[var(--bg-focus)]",
        "hover:bg-[var(--bg-hover)]"
      )}
    >
      contents
    </div>
  );
}
