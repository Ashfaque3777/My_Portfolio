import { useParams } from "react-router-dom"
import { getProject } from "../data/projects"
import ProjectCaseStudy from "../components/project/ProjectCaseStudy"
import NotFound from "./NotFound"

/**
 * Thin slug dispatcher — the case-study markup lives entirely in the reusable
 * template, so adding a sixth project requires no JSX changes here.
 *
 * Lazy-loading by slug (BUILD.md §40) buys nothing at five projects, so the
 * template stays in the main bundle. The constraint that matters is the
 * opposite one: a slug must not be added to the archive until its copy is
 * verified against the CV.
 *
 * An unknown slug renders the 404 rather than silently redirecting, so a stale
 * or mistyped link reports the truth instead of looking like it worked.
 */
export default function ProjectDetail() {
  const { slug } = useParams()
  const project = getProject(slug)

  if (!project) {
    return (
      <NotFound
        title="No project with that name."
        lede={`"${slug}" isn't in the archive. It may have been renamed, or the link may be mistyped.`}
      />
    )
  }

  return <ProjectCaseStudy project={project} />
}
