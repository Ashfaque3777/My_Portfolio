import { useMemo, useRef, useState } from "react"
import { Link } from "react-router-dom"
import { useGSAP } from "@gsap/react"
import { ArrowUpRight } from "lucide-react"
import { revealOnScroll } from "../../lib/animations"
import SectionHeading from "../ui/SectionHeading"
import { skillGroups } from "../../data/skills"
import { projects, techSlug } from "../../data/projects"
import useReducedMotion from "../../hooks/useReducedMotion"

/**
 * Technology wall.
 *
 * No percentage bars — a subjective proficiency bar is not a measurement, and
 * a recruiter reads it as noise. Hovering a chip reveals where the technology is
 * actually used; clicking it navigates to /projects?tech=<slug>, which filters
 * the listing. The filter state is the URL, so the two sections stay
 * independent and neither owns shared state — see BUILD.md §17 and §18.
 */

/** Where each technology is genuinely used, derived from project data. */
function buildUsage() {
  const map = new Map()

  for (const p of projects) {
    for (const t of p.technologies) {
      if (!map.has(t)) map.set(t, [])
      map.get(t).push(p.title)
    }
  }

  return map
}

export default function Skills() {
  const scope = useRef(null)
  const reduced = useReducedMotion()
  const [hovered, setHovered] = useState(null)
  const usage = useMemo(buildUsage, [])

  useGSAP(
    () => {
      revealOnScroll(scope.current, reduced)
    },
    { scope }
  )

  return (
    <section id="skills" ref={scope} className="shell py-24 md:py-36">
      <SectionHeading
        index="04"
        label="Skills"
        title="What I reach for, and what I reach for it with."
        data-reveal=""
      />

      <p
        data-reveal=""
        className="mt-6 max-w-[62ch] text-[16px] leading-relaxed text-[var(--text-muted)]"
      >
        Select any technology to see which projects actually use it. Nothing here
        carries a self-assessed percentage — a proficiency bar is a claim, and
        the projects are better evidence than a number.
      </p>

      <div className="mt-14 flex flex-col gap-10">
        {skillGroups.map((group) => (
          <div
            key={group.id}
            data-reveal-group=""
            className="grid gap-5 border-t border-[var(--border)] pt-8 lg:grid-cols-[220px_1fr] lg:gap-12"
          >
            <div>
              <h3 className="text-[15px] font-medium text-[var(--text)]">
                {group.label}
              </h3>
              <p className="mt-2 text-[13px] leading-relaxed text-[var(--text-muted)]">
                {group.note}
              </p>
            </div>

            <ul className="flex flex-wrap gap-2">
              {group.items.map((item) => {
                const usedIn = usage.get(item)
                const hasProjects = Boolean(usedIn?.length)
                const isHovered = hovered === item

                const chip = (
                  <span
                    className={`inline-flex min-h-[38px] items-center rounded-full border px-3.5 py-1.5 text-[13px] transition-colors duration-300 ${
                      isHovered
                        ? "border-[var(--accent)] bg-[var(--accent-soft)] text-[var(--accent)]"
                        : "border-[var(--border)] text-[var(--text-muted)] hover:border-[var(--border-strong)] hover:text-[var(--text)]"
                    } ${hasProjects ? "" : "opacity-70"}`}
                  >
                    {item}
                    {hasProjects && (
                      <ArrowUpRight
                        className="ml-1.5 h-3 w-3 opacity-60"
                        aria-hidden="true"
                      />
                    )}
                  </span>
                )

                return (
                  <li
                    key={item}
                    onMouseEnter={() => setHovered(item)}
                    onMouseLeave={() => setHovered(null)}
                    onFocus={() => setHovered(item)}
                    onBlur={() => setHovered(null)}
                    className="relative"
                  >
                    {hasProjects ? (
                      <Link
                        to={`/projects?tech=${techSlug(item)}`}
                        className="inline-flex rounded-full focus-visible:outline-offset-4"
                        aria-label={`${item} — used in ${usedIn.length} ${
                          usedIn.length === 1 ? "project" : "projects"
                        }`}
                      >
                        {chip}
                      </Link>
                    ) : (
                      chip
                    )}
                  </li>
                )
              })}
            </ul>
          </div>
        ))}
      </div>

      <p aria-live="polite" className="sr-only">
        {hovered && usage.get(hovered)
          ? `${hovered} used in ${usage.get(hovered).join(", ")}`
          : ""}
      </p>
    </section>
  )
}