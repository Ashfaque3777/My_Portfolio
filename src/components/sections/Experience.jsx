import { useRef } from "react"
import { useGSAP } from "@gsap/react"
import { revealOnScroll } from "../../lib/animations"
import SectionHeading from "../ui/SectionHeading"
import Tag from "../ui/Tag"
import { experience } from "../../data/experience"
import useReducedMotion from "../../hooks/useReducedMotion"

/**
 * Experience timeline.
 *
 * Three roles, reverse chronological. Roles 2 and 3 share an employer but are
 * distinct engagements with a gap between them, so they render as separate
 * entries rather than one merged row — see BUILD.md §15.
 */
export default function Experience() {
  const scope = useRef(null)
  const reduced = useReducedMotion()

  useGSAP(
    () => {
      revealOnScroll(scope.current, reduced)
    },
    { scope }
  )

  return (
    <section id="experience" ref={scope} className="shell py-24 md:py-36">
      <SectionHeading
        index="03"
        label="Experience"
        title="Where the work has actually happened."
        data-reveal=""
      />

      <ol className="mt-16 flex flex-col">
        {experience.map((role) => (
          <li
            key={role.id}
            data-reveal-group=""
            className="grid gap-5 border-t border-[var(--border)] py-10 md:grid-cols-[200px_1fr] md:gap-12 md:py-12"
          >
            {/* Date column */}
            <div className="flex items-baseline gap-3 md:flex-col md:items-start md:gap-2">
              <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--accent)]">
                {role.period}
              </span>
              {role.current && (
                <span className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--text-muted)]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
                  Current
                </span>
              )}
            </div>

            {/* Body */}
            <div>
              <h3 className="text-[22px] leading-tight tracking-[-0.02em] text-[var(--text)] md:text-[26px]">
                {role.role}
              </h3>

              <p className="mt-2 text-[15px] text-[var(--text-muted)]">
                {role.orgUrl ? (
                  <a
                    href={role.orgUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-underline hover:text-[var(--text)]"
                  >
                    {role.org}
                  </a>
                ) : (
                  role.org
                )}
              </p>

              <p className="mt-5 max-w-[68ch] text-[15px] leading-relaxed text-[var(--text-muted)]">
                {role.summary}
              </p>

              <ul className="mt-5 flex flex-col gap-3">
                {role.points.map((p) => (
                  <li
                    key={p}
                    className="flex gap-3 text-[15px] leading-relaxed text-[var(--text-muted)]"
                  >
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--accent)]" />
                    {p}
                  </li>
                ))}
              </ul>

              <ul className="mt-6 flex flex-wrap gap-2">
                {role.technologies.map((t) => (
                  <li key={t}>
                    <Tag>{t}</Tag>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}