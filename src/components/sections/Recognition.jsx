import { useRef } from "react"
import { useGSAP } from "@gsap/react"
import { ArrowUpRight } from "lucide-react"
import { revealOnScroll } from "../../lib/animations"
import SectionHeading from "../ui/SectionHeading"
import { recognition } from "../../data/recognition"
import useReducedMotion from "../../hooks/useReducedMotion"

export default function Recognition() {
  const scope = useRef(null)
  const reduced = useReducedMotion()

  useGSAP(
    () => {
      revealOnScroll(scope.current, reduced)
    },
    { scope }
  )

  return (
    <section id="recognition" ref={scope} className="shell py-24 md:py-36">
      <SectionHeading
        index="06"
        label="Recognition"
        title="External validation, where it exists."
        data-reveal=""
      />

      <div className="mt-14 flex flex-col gap-6">
        {recognition.map((item) => (
          <article
            key={item.id}
            data-reveal-group=""
            className="card-surface flex flex-col gap-6 p-6 md:flex-row md:items-start md:justify-between md:p-8"
          >
            <div>
              <p className="label-mono">
                {item.org}
                <span className="mx-2 h-px w-4 inline-block bg-[var(--border-strong)] align-middle" />
                {item.year}
              </p>

              <h3 className="mt-4 text-[22px] leading-snug tracking-[-0.02em] text-[var(--text)] md:text-[26px]">
                {item.program}
              </h3>

              <p className="mt-4 max-w-[62ch] text-[15px] leading-relaxed text-[var(--text-muted)]">
                {item.body}
              </p>
            </div>

            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 shrink-0 items-center gap-2 rounded-full border border-[var(--border-strong)] px-6 text-sm font-medium text-[var(--text)] transition-colors duration-300 hover:border-[var(--accent)] hover:text-[var(--accent)]"
            >
              Visit site
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              <span className="sr-only">
                {item.org} International AI Internship Program
              </span>
            </a>
          </article>
        ))}
      </div>
    </section>
  )
}