import { useRef } from "react"
import { useGSAP } from "@gsap/react"
import { revealOnScroll } from "../../lib/animations"
import SectionHeading from "../ui/SectionHeading"
import { education, spokenLanguages } from "../../data/education"
import useReducedMotion from "../../hooks/useReducedMotion"

export default function Education() {
  const scope = useRef(null)
  const reduced = useReducedMotion()

  useGSAP(
    () => {
      revealOnScroll(scope.current, reduced)
    },
    { scope }
  )

  const [degree] = education

  if (!degree) return null

  return (
    <section id="education" ref={scope} className="shell py-24 md:py-36">
      <SectionHeading
        index="05"
        label="Education"
        title="Computer Science, specialised in AI and data."
        data-reveal=""
      />

      <div className="mt-14 grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <div data-reveal-group="">
          <h3 className="text-[24px] leading-tight tracking-[-0.02em] text-[var(--text)] md:text-[28px]">
            {degree.degree}
          </h3>
          <p className="mt-3 text-[16px] text-[var(--text)]">
            {degree.field}
          </p>
          <p className="mt-1 text-[16px] text-[var(--accent)]">
            {degree.specialization}
          </p>

          <p className="mt-6 text-[15px] leading-relaxed text-[var(--text-muted)]">
            {degree.institution}
          </p>

          <dl className="mt-6 flex flex-col gap-2 font-mono text-[11px] uppercase tracking-[0.14em]">
            <div className="flex gap-3">
              <dt className="text-[var(--text-muted)]">Location</dt>
              <dd className="text-[var(--text)]">{degree.location}</dd>
            </div>
            <div className="flex gap-3">
              <dt className="text-[var(--text-muted)]">Graduation</dt>
              <dd className="text-[var(--text)]">{degree.expected}</dd>
            </div>
          </dl>
        </div>

        <div data-reveal-group="">
          <p className="label-mono">Relevant coursework</p>
          <ul className="mt-6 flex flex-wrap gap-2">
            {degree.coursework.map((c) => (
              <li
                key={c}
                className="rounded-full border border-[var(--border)] px-3.5 py-1.5 text-[13px] text-[var(--text-muted)]"
              >
                {c}
              </li>
            ))}
          </ul>

          <p className="label-mono mt-12">Languages</p>
          <ul className="mt-6 flex flex-col">
            {spokenLanguages.map((l) => (
              <li
                key={l.label}
                className="flex items-center justify-between border-b border-[var(--border)] py-3 first:border-t"
              >
                <span className="text-[15px] text-[var(--text)]">{l.label}</span>
                <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--text-muted)]">
                  {l.level}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}