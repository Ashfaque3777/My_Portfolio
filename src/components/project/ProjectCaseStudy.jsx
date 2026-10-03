import { Link } from "react-router-dom"
import { ArrowLeft, ArrowUpRight, Github } from "lucide-react"
import Tag from "../ui/Tag"
import Button from "../ui/Button"
import ProjectPlaceholder from "../ui/ProjectPlaceholder"
import ecommerceImg from "../../assets/ecommerce.png"

const IMAGES = { ecommerce: ecommerceImg }

const ARCH_HINT =
  "Each stage is listed in pipeline order, with the parts that were not mine marked as such."

const NARRATIVE = ["problem", "approach", "challenges", "outcome"]

const NARRATIVE_LABELS = {
  problem: "Problem",
  approach: "Approach",
  challenges: "Challenges",
  outcome: "Outcome",
}

/**
 * Reusable case-study layout for every project.
 *
 * The "My contribution" block is not optional: three of the five projects are
 * team or open-source work, so scoping the contribution is what keeps the
 * write-up honest. See BUILD.md §14 and §33 rule 9.
 */
export default function ProjectCaseStudy({ project }) {
  const image = project.image ? IMAGES[project.image] : null
  const { sections } = project

  const externalLinks = [
    project.github && {
      label: "GitHub",
      href: project.github,
      icon: Github,
    },
    project.live && {
      label: "Live site",
      href: project.live,
      icon: ArrowUpRight,
    },
  ].filter(Boolean)

  return (
    <article className="shell pb-28 pt-[calc(var(--nav-h)+3rem)] md:pb-36">
      <Link
        to="/projects"
        className="inline-flex items-center gap-2 text-[13px] text-[var(--text-muted)] transition-colors hover:text-[var(--text)]"
      >
        <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
        All projects
      </Link>

      {/* Header */}
      <header className="mt-10">
        <p className="label-mono flex flex-wrap items-center gap-3">
          <span className="text-[var(--accent)]">Project</span>
          <span className="h-px w-6 bg-[var(--border-strong)]" />
          <span>{project.year}</span>
          <span className="h-px w-6 bg-[var(--border-strong)]" />
          <span>{project.role}</span>
        </p>

        <h1 className="heading-project mt-6 max-w-[20ch] text-[var(--text)]">
          {project.title}
        </h1>

        <p className="mt-7 max-w-[62ch] text-[17px] leading-relaxed text-[var(--text-muted)] md:text-[19px]">
          {project.description}
        </p>

        <ul className="mt-9 flex flex-wrap gap-2">
          {project.technologies.map((t) => (
            <li key={t}>
              <Tag>{t}</Tag>
            </li>
          ))}
        </ul>

        {externalLinks.length > 0 && (
          <div className="mt-10 flex flex-wrap gap-3">
            {externalLinks.map(({ label, href, icon: Icon }) => (
              <Button key={label} href={href} external variant="outline">
                <Icon className="h-4 w-4" aria-hidden="true" />
                {label}
              </Button>
            ))}
          </div>
        )}
      </header>

      {/* Hero visual */}
      <div className="relative mt-16 aspect-[16/9] w-full overflow-hidden rounded-[var(--radius)] bg-[var(--surface-soft)]">
        {image ? (
          <img
            src={image}
            alt={`${project.title} interface`}
            width={1823}
            height={916}
            loading="eager"
            decoding="async"
            className="h-full w-full object-cover object-top"
          />
        ) : (
          <ProjectPlaceholder
            slug={project.slug}
            category={project.category}
            title={project.title}
          />
        )}
      </div>

      {/* My contribution */}
      <section className="mt-16 border-l-2 border-[var(--accent)] pl-6 md:pl-8">
        <h2 className="label-mono text-[var(--accent)]">My Contribution</h2>
        <p className="mt-5 max-w-[68ch] text-[17px] leading-relaxed text-[var(--text)]">
          {project.contribution}
        </p>
      </section>

      {/* Narrative blocks */}
      <div className="mt-20 flex flex-col gap-16 md:gap-20">
        {NARRATIVE.map((key) =>
          sections[key] ? (
            <section key={key}>
              <h2 className="text-[26px] tracking-[-0.02em] text-[var(--text)] md:text-[32px]">
                {NARRATIVE_LABELS[key]}
              </h2>
              <p className="mt-5 max-w-[68ch] text-[16px] leading-relaxed text-[var(--text-muted)] md:text-[17px]">
                {sections[key]}
              </p>
            </section>
          ) : null
        )}
      </div>

      {/* Architecture */}
      {sections.architecture?.length ? (
        <section className="mt-16 md:mt-20">
          <h2 className="text-[26px] tracking-[-0.02em] text-[var(--text)] md:text-[32px]">
            Architecture
          </h2>
          <p className="mt-4 text-[15px] text-[var(--text-muted)]">{ARCH_HINT}</p>

          <ol className="mt-8 flex flex-col">
            {sections.architecture.map((block, i) => (
              <li
                key={block.label}
                className="grid gap-2 border-t border-[var(--border)] py-6 md:grid-cols-[auto_220px_1fr] md:gap-8"
              >
                <span className="font-mono text-[11px] text-[var(--accent)]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-[15px] font-medium text-[var(--text)]">
                  {block.label}
                </span>
                <span className="text-[15px] leading-relaxed text-[var(--text-muted)]">
                  {block.detail}
                </span>
              </li>
            ))}
          </ol>
        </section>
      ) : null}

      {/* Key features */}
      {sections.features?.length ? (
        <section className="mt-16 md:mt-20">
          <h2 className="text-[26px] tracking-[-0.02em] text-[var(--text)] md:text-[32px]">
            Key Features
          </h2>
          <ul className="mt-8 grid gap-x-10 gap-y-4 sm:grid-cols-2">
            {sections.features.map((f) => (
              <li key={f} className="flex gap-3 text-[15px] leading-relaxed text-[var(--text-muted)]">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--accent)]" />
                {f}
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      {/* Technical decisions */}
      {sections.decisions?.length ? (
        <section className="mt-16 md:mt-20">
          <h2 className="text-[26px] tracking-[-0.02em] text-[var(--text)] md:text-[32px]">
            Technical Decisions
          </h2>
          <ul className="mt-8 flex flex-col gap-6">
            {sections.decisions.map((d) => (
              <li
                key={d}
                className="border-l border-[var(--border-strong)] pl-6 text-[16px] leading-relaxed text-[var(--text-muted)]"
              >
                {d}
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      {/* Links */}
      {externalLinks.length > 0 && (
        <section className="mt-20 border-t border-[var(--border)] pt-10">
          <h2 className="text-[26px] tracking-[-0.02em] text-[var(--text)] md:text-[32px]">
            Links
          </h2>
          <div className="mt-6 flex flex-wrap gap-3">
            {externalLinks.map(({ label, href, icon: Icon }) => (
              <Button key={label} href={href} external variant="outline">
                <Icon className="h-4 w-4" aria-hidden="true" />
                {label}
              </Button>
            ))}
          </div>
        </section>
      )}

      <p className="mt-16 text-[15px] text-[var(--text-muted)]">
        <Link
          to="/projects"
          className="link-underline inline-flex items-center gap-2 hover:text-[var(--accent)]"
        >
          <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
          Back to selected work
        </Link>
      </p>
    </article>
  )
}
