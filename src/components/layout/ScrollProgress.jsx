import useScrollProgress from "../../hooks/useScrollProgress"

/**
 * Thin reading-progress rail pinned to the top of the viewport.
 *
 * Scale is driven by the --scroll-progress custom property that
 * useScrollProgress writes inside a rAF callback, so scrolling this component
 * does not re-render the page. The percentage text is the only thing that
 * triggers state, and it is quantised to whole numbers.
 */
export default function ScrollProgress() {
  const pct = useScrollProgress()

  return (
    <div
      aria-hidden="true"
      className="fixed inset-x-0 top-0 z-50 h-px bg-transparent"
    >
      <div
        className="h-full origin-left bg-[var(--accent)]"
        style={{
          transform: "scaleX(var(--scroll-progress, 0))",
          transition: "transform 120ms linear",
        }}
      />
      <span className="sr-only">{pct}% of page read</span>
    </div>
  )
}