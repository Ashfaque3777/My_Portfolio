import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import ProjectPlaceholder from "../ui/ProjectPlaceholder"
import Tag from "../ui/Tag"
import ecommerceImg from "../../assets/ecommerce.png"

/**
 * Only one genuine project screenshot exists (ecommerce.png), so the rest fall
 * back to a generated cover. This keeps the swap path to a single line of data
 * — see BUILD.md §36.
 */
const IMAGES = {
  ecommerce: ecommerceImg,
}

/**
 * Large editorial project card.
 *
 * Composition alternates by `orientation` so a stack of cards gets editorial
 * rhythm rather than reading as repeated identical rows. See BUILD.md §13.
 */
export default function ProjectCard({
  project,
  orientation = "start",
  headingLevel = "h3",
  priority = false,
}) {
  const image = project.image ? IMAGES[project.image] : null
  const H = headingLevel

  const visual = (
    <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[var(--radius-sm)] bg-[var(--surface-soft)]">
      {image ? (
        <img
          src={image}
          alt={`${project.title} interface`}
          width={1823}
          height={916}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          className="h-full w-full object-cover object-top transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
        />
      ) : (
        <ProjectPlaceholder
          slug={project.slug}
          category={project.category}
          title={project.title}
        />
      )}
    </div>
  )

  const meta = (
    <div className="flex flex-col">
      <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--text-muted)]">
        <span className="text-[var(--accent)]">{project.category}</span>
        <span className="h-px w-4 bg-[var(--border-strong)]" />
        <span>{project.year}</span>
        <span className="h-px w-4 bg-[var(--border-strong)]" />
        <span>{project.role}</span>
      </div>

      <H className="mt-5 text-[26px] leading-[1.12] tracking-[-0.025em] text-[var(--text)] md:text-[32px]">
        {project.title}
      </H>

      <p className="mt-4 text-[15px] leading-relaxed text-[var(--text-muted)] md:text-[16px]">
        {project.summary}
      </p>

      <ul className="mt-6 flex flex-wrap gap-2">
        {project.technologies.slice(0, 4).map((t) => (
          <li key={t}>
            <Tag>{t}</Tag>
          </li>
        ))}
        {project.technologies.length > 4 && (
          <li>
            <Tag className="border-transparent">
              +{project.technologies.length - 4}
            </Tag>
          </li>
        )}
      </ul>

      <span className="mt-8 inline-flex items-center gap-2 text-[15px] font-medium text-[var(--text)]">
        View case study
        <ArrowRight
          className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5"
          aria-hidden="true"
        />
      </span>
    </div>
  )

  const isEnd = orientation === "end"

  return (
    <article className="group card-surface relative p-5 transition-colors duration-500 hover:border-[var(--border-strong)] md:p-7">
      <Link
        to={`/projects/${project.slug}`}
        className="block focus-visible:outline-offset-4"
      >
        <span className="sr-only">View case study: {project.title}</span>

        <div
          className={`grid items-center gap-8 md:gap-12 ${
            isEnd
              ? "md:grid-cols-[0.8fr_1.2fr]"
              : "md:grid-cols-[1.2fr_0.8fr]"
          }`}
        >
          {isEnd ? (
            <>
              {visual}
              {meta}
            </>
          ) : (
            <>
              {meta}
              {visual}
            </>
          )}
        </div>
      </Link>
    </article>
  )
}