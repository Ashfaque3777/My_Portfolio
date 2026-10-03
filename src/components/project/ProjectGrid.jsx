import { Link } from "react-router-dom"
import ProjectCard from "./ProjectCard"

/**
 * Vertical stack of project cards with alternating orientation.
 * See BUILD.md §13.
 */
export default function ProjectGrid({ items, showAllHref }) {
  if (!items.length) return null

  return (
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

      {showAllHref && (
        <p data-reveal-group="" className="pt-2 text-center">
          <Link
            to={showAllHref}
            className="link-underline inline-block text-[15px] font-medium text-[var(--text)] hover:text-[var(--accent)]"
          >
            View all projects →
          </Link>
        </p>
      )}
    </div>
  )
}