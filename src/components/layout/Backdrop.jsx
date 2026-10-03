/**
 * Fixed background system: near-black base, technical grid, two soft radial
 * lights, and a very low-opacity noise layer.
 *
 * Purely decorative and aria-hidden. Pointer events are off so it can never
 * intercept clicks on content above it. See BUILD.md §27.
 */
export default function Backdrop() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10">
      <div className="absolute inset-0 bg-[var(--bg)]" />

      <div className="absolute inset-0 grid-lines opacity-[0.22]" />

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_-10%,rgba(215,255,63,0.09),transparent_65%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_45%_40%_at_88%_12%,rgba(120,190,255,0.05),transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_45%_at_5%_92%,rgba(215,255,63,0.05),transparent_70%)]" />

      <div className="noise absolute inset-0 opacity-[0.035] mix-blend-overlay" />

      {/* vignette keeps the edges from competing with body copy */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_45%,rgba(8,9,10,0.85)_100%)]" />
    </div>
  )
}