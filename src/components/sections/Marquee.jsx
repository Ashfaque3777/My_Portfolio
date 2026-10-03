import { marqueeItems } from "../../data/site"

/**
 * Narrow scrolling marquee. Duplicated once and translated -50%, so the loop is
 * seamless — a single copy translated -100% leaves a gap at the wrap point.
 *
 * The track is one long flex row; only the transform animates, which keeps it
 * on the compositor. See BUILD.md §10.
 */
export default function Marquee() {
  const row = [...marqueeItems, ...marqueeItems]

  return (
    <section
      aria-hidden="true"
      className="mask-fade-x relative border-y border-[var(--border)] py-5"
    >
      <div
        className="flex w-max"
        style={{ animation: "marquee 46s linear infinite" }}
      >
        {row.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="flex shrink-0 items-center gap-8 whitespace-nowrap px-8 font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--text-muted)]"
          >
            {item}
            <span className="h-1 w-1 rounded-full bg-[var(--accent)] opacity-70" />
          </span>
        ))}
      </div>
    </section>
  )
}