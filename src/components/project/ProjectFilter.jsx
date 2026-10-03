import { useMemo } from "react"
import { useSearchParams, Link } from "react-router-dom"
import { X } from "lucide-react"
import {
  projects,
  filterByTechnology,
  allTechnologies,
  techSlug,
} from "../../data/projects"
import ProjectCard from "./ProjectCard"

/**
 * Technology filter.
 *
 * State lives in the URL (?tech=...) rather than React state or a context
 * provider, so the filtered view is shareable, survives reload, and works with
 * the browser back button. See BUILD.md §18.
 */
export default function ProjectFilter() {
  const [params, setParams] = useSearchParams()
  const tech = params.get("tech")

  const items = useMemo(
    () => filterByTechnology(projects, tech),
    [tech]
  )

  const clear = () => {
    params.delete("tech")
    setParams(params, { replace: true })
  }

  // Only offer technologies that actually match something, so the bar stays short.
  const available = useMemo(() => {
    if (!tech) return allTechnologies
    const known = new Set(items.flatMap((p) => p.technologies))
    return known.size ? [...known].sort((a, b) => a.localeCompare(b)) : []
  }, [tech, items])

  const select = (t) => {
    if (techSlug(t) === techSlug(tech ?? "")) {
      clear()
      return
    }
    setParams({ tech: t }, { replace: false })
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-wrap items-center gap-2">
        <span className="label-mono mr-1">Filter</span>

        {available.map((t) => {
          const isActive = techSlug(t) === techSlug(tech ?? "")

          return (
            <button
              key={t}
              type="button"
              onClick={() => select(t)}
              aria-pressed={isActive}
              className={`inline-flex min-h-[36px] items-center rounded-full border px-3.5 py-1.5 font-mono text-[11px] leading-none transition-colors duration-300 ${
                isActive
                  ? "border-[var(--accent)] bg-[var(--accent-soft)] text-[var(--accent)]"
                  : "border-[var(--border)] text-[var(--text-muted)] hover:border-[var(--border-strong)] hover:text-[var(--text)]"
              }`}
            >
              {t}
            </button>
          )
        })}

        {tech && (
          <button
            type="button"
            onClick={clear}
            className="inline-flex min-h-[36px] items-center gap-1.5 rounded-full border border-[var(--border)] px-3.5 py-1.5 font-mono text-[11px] text-[var(--text-muted)] transition-colors duration-300 hover:border-[var(--accent)] hover:text-[var(--accent)]"
          >
            Clear
            <X className="h-3 w-3" aria-hidden="true" />
            <span className="sr-only">technology filter</span>
          </button>
        )}
      </div>

      <p aria-live="polite" className="font-mono text-[11px] text-[var(--text-muted)]">
        {items.length} {items.length === 1 ? "project" : "projects"}
        {tech ? ` using ${tech}` : ""}
      </p>

      {items.length === 0 ? (
        <div className="card-surface flex flex-col items-center gap-4 px-6 py-20 text-center">
          <p className="text-lg text-[var(--text)]">
            No projects use that technology yet.
          </p>
          <Link
            to="/projects"
            className="link-underline text-[15px] text-[var(--text-muted)] hover:text-[var(--accent)]"
          >
            Clear the filter →
          </Link>
        </div>
      ) : (
        <div className="flex flex-col gap-6 md:gap-8">
          {items.map((project, i) => (
            <div key={project.slug} data-reveal-group="">
              <ProjectCard
                project={project}
                orientation={i % 2 === 1 ? "end" : "start"}
                headingLevel="h2"
                priority={i === 0}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  )
}