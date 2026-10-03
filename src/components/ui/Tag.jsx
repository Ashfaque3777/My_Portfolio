/**
 * Small technology chip.
 *
 * Deliberately text-only. Most technologies in data/skills.js have no matching
 * icon asset, and the ones that do are wrong for this purpose — c++.png depicts
 * C++, java.png and express.png are 500px decorative marks, and mongodb.png is
 * only 96px and pixelates above that. See BUILD.md §17 and §36.
 */
export default function Tag({ children, tone = "default", className = "" }) {
  const tones = {
    default:
      "border-[var(--border)] text-[var(--text-muted)] hover:border-[var(--border-strong)] hover:text-[var(--text)]",
    accent:
      "border-[var(--accent)] text-[var(--accent)] bg-[var(--accent-soft)]",
  }

  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1 font-mono text-[11px] leading-none tracking-wide transition-colors duration-300 ${
        tones[tone] ?? tones.default
      } ${className}`}
    >
      {children}
    </span>
  )
}