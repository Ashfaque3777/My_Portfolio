/**
 * Abstract project cover for projects with no screenshot.
 *
 * Four projects have no real visual (see BUILD.md §36). Rather than hotlinking
 * stock imagery or shipping a broken image, this renders a deterministic
 * abstract cover generated from the project's own slug — so each one is
 * visually distinct and the grid does not read as repetitive, while costing
 * zero network requests.
 *
 * Takes `slug` (picks a deterministic variant), `title` (renders faint initials)
 * and `category` (a small caption). It fills its parent, so the caller's
 * aspect-ratio wrapper controls the box and swapping in a real screenshot later
 * needs no layout change.
 *
 * It deliberately does *not* accept `src`/`alt`. Deciding whether a project has
 * a real screenshot belongs to the caller, which checks `project.image` before
 * choosing between `<img>` and this component — so passing image props here
 * would be a second, contradictory place for that decision.
 *
 * The whole thing is aria-hidden: the project title and category are always
 * rendered as real text by ProjectCard outside the cover, so repeating them
 * here would only duplicate what a screen reader already announces.
 */

const VARIANTS = {
  grid: (
    <>
      <div className="absolute inset-0 grid-lines opacity-[0.55]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_25%,rgba(215,255,63,0.14),transparent_58%)]" />
    </>
  ),
  nodes: (
    <>
      <div className="absolute inset-0 grid-lines opacity-40" />
      <svg
        className="absolute inset-0 h-full w-full text-[var(--accent)] opacity-40"
        viewBox="0 0 400 240"
        fill="none"
        aria-hidden="true"
      >
        <circle cx="120" cy="80" r="4" fill="currentColor" />
        <circle cx="260" cy="150" r="4" fill="currentColor" />
        <circle cx="320" cy="60" r="3" fill="currentColor" />
        <circle cx="200" cy="200" r="3" fill="currentColor" />
        <path
          d="M120 80 L260 150 L320 60 M260 150 L200 200"
          stroke="currentColor"
          strokeWidth="1"
        />
      </svg>
    </>
  ),
  flow: (
    <>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_120%,rgba(215,255,63,0.16),transparent_65%)]" />
      <svg
        className="absolute inset-0 h-full w-full text-[var(--accent)] opacity-30"
        viewBox="0 0 400 240"
        fill="none"
        aria-hidden="true"
      >
        {[0, 1, 2, 3, 4].map((i) => (
          <path
            key={i}
            d={`M-20 ${40 + i * 40} C 120 ${10 + i * 40}, 260 ${90 + i * 40}, 420 ${50 + i * 40}`}
            stroke="currentColor"
            strokeWidth="1"
          />
        ))}
      </svg>
    </>
  ),
  bars: (
    <>
      <div className="absolute inset-0 grid-lines opacity-30" />
      <div className="absolute inset-x-0 bottom-0 flex h-1/2 items-end gap-[6%] px-[8%]">
        {[38, 64, 46, 82, 56, 70].map((h, i) => (
          <div
            key={i}
            className="flex-1 rounded-t-sm bg-[var(--accent)] opacity-[0.16] transition-none"
            style={{ height: `${h}%` }}
          />
        ))}
      </div>
    </>
  ),
}

const ORDER = ["grid", "nodes", "flow", "bars"]

function hash(str) {
  let h = 0
  for (let i = 0; i < str.length; i += 1) {
    h = (h * 31 + str.charCodeAt(i)) >>> 0
  }
  return h
}

/** First letters of up to two significant words, e.g. "RAG-based AI Chatbot" -> "RB". */
function initialsOf(title) {
  const words = title
    .split(/[\s-]+/)
    .filter((w) => w && !/^(based|for|the|and|with|of)$/i.test(w))

  if (!words.length) return ""
  if (words.length === 1) return words[0].slice(0, 2).toUpperCase()

  return (words[0][0] + words[1][0]).toUpperCase()
}

export default function ProjectPlaceholder({
  slug = "project",
  category = "",
  title = "",
}) {
  const seed = hash(slug)
  const variant = ORDER[seed % ORDER.length]
  const angle = (seed % 4) * 45
  const initials = initialsOf(title)

  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 overflow-hidden bg-[var(--surface-soft)]"
    >
      <div className="absolute inset-0">{VARIANTS[variant]}</div>

      {/* faint rotated sheen keeps same-variant projects distinguishable */}
      <div
        className="absolute -inset-1/4 bg-[linear-gradient(115deg,transparent_38%,rgba(255,255,255,0.05)_50%,transparent_62%)]"
        style={{ transform: `rotate(${angle}deg)` }}
      />

      {initials && (
        <span className="absolute bottom-3 right-5 font-mono text-[clamp(2rem,7vw,4.5rem)] font-bold leading-none tracking-[-0.05em] text-[var(--text)] opacity-[0.06]">
          {initials}
        </span>
      )}

      {category && (
        <span className="absolute bottom-4 left-4 font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--text-muted)]">
          {category}
        </span>
      )}
    </div>
  )
}