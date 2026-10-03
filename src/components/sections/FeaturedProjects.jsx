import { useRef } from "react"
import { useGSAP } from "@gsap/react"
import { revealOnScroll, parallax } from "../../lib/animations"
import SectionHeading from "../ui/SectionHeading"
import ProjectGrid from "../project/ProjectGrid"
import { featuredProjects } from "../../data/projects"
import useReducedMotion from "../../hooks/useReducedMotion"

export default function FeaturedProjects() {
  const scope = useRef(null)
  const reduced = useReducedMotion()

  useGSAP(
    () => {
      revealOnScroll(scope.current, reduced)
      parallax(scope.current, reduced)
    },
    { scope }
  )

  return (
    <section id="work" ref={scope} className="shell py-24 md:py-36">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <SectionHeading
          index="02"
          label="Selected Work"
          title="Projects built to solve real problems."
          data-reveal=""
        />
        <p
          data-reveal=""
          className="max-w-xs text-[15px] leading-relaxed text-[var(--text-muted)] md:pb-3"
        >
          Three pieces of work I can explain in detail, including what I
          contributed and what I got wrong along the way.
        </p>
      </div>

      <div className="mt-14">
        <ProjectGrid items={featuredProjects} showAllHref="/projects" />
      </div>
    </section>
  )
}