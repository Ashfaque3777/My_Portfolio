import { Link } from "react-router-dom"
import { Home, ArrowRight } from "lucide-react"
import Button from "../components/ui/Button"

/**
 * Catch-all 404 (BUILD.md §28). Rendered for unmatched routes *and* for
 * unknown project slugs, so it accepts an optional override for the specific
 * case rather than hardcoding "page not found".
 */
export default function NotFound({
  title = "This page doesn't exist.",
  lede = "The link may be outdated, or the address may have a typo in it.",
}) {
  return (
    <div className="shell flex min-h-[100svh] flex-col justify-center py-32">
      <p className="label-mono text-[var(--accent)]">Error 404</p>

      <h1 className="mt-6 max-w-[24ch] text-[clamp(2rem,6vw,3.5rem)] font-semibold leading-[1.05] tracking-[-0.035em] text-[var(--text)]">
        {title}
      </h1>

      <p className="mt-6 max-w-[54ch] text-[17px] leading-relaxed text-[var(--text-muted)]">
        {lede}
      </p>

<div className="mt-11 flex flex-wrap items-center gap-3">
        <Button as={Link} to="/" size="lg">
          <Home className="h-4 w-4" aria-hidden="true" />
          Back to home
        </Button>

        <Button
          as={Link}
          to="/projects"
          size="lg"
          variant="outline"
          className="group"
        >
          Browse projects
          <ArrowRight
            className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
            aria-hidden="true"
          />
        </Button>
      </div>
    </div>
  )
}