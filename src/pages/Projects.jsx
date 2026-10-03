import { useRef } from "react"
import { useGSAP } from "@gsap/react"
import { revealOnScroll } from "../lib/animations"
import ProjectFilter from "../components/project/ProjectFilter"
import useReducedMotion from "../hooks/useReducedMotion"

export default function Projects() {
  const scope = useRef(null)
  const reduced = useReducedMotion()

  useGSAP(
    () => {
      revealOnScroll(scope.current, reduced)
    },
    { scope }
  )

  return (
    <div ref={scope} className="shell pb-28 pt-[calc(var(--nav-h)+4rem)] md:pb-36">
      <header>
        <p data-reveal="" className="label-mono">
          Project Archive
        </p>

        <h1 data-reveal="" className="heading-project mt-6 text-[var(--text)]">
          Everything I&apos;ve built.
        </h1>

        <p
          data-reveal=""
          className="mt-7 max-w-[62ch] text-[17px] leading-relaxed text-[var(--text-muted)] md:text-[19px]"
        >
          Five projects spanning retrieval, agentic workflows, and full-stack
          product work. Each one says what it was for, what I actually built, and
          what turned out to be harder than expected.
        </p>
      </header>

      <div className="mt-16">
        <ProjectFilter />
      </div>
    </div>
  )
}