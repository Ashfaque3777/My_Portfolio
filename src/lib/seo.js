import { seo, site } from "../data/site"

/**
 * Per-route document title and description.
 *
 * Titles live here rather than in components so the copy stays auditable
 * alongside the rest of the verified content. See BUILD.md §34.
 */
export const routeMeta = {
  "/": {
    title: seo.title,
    description: seo.description,
  },
  "/projects": {
    title: "Projects — Mohd Ashfaque Ansari",
    description:
      "Selected work: RAG systems, agentic AI workflows, full-stack applications, and data dashboards.",
  },
  "/resume": {
    title: "Resume — Mohd Ashfaque Ansari",
    description:
      "Resume of Mohd Ashfaque Ansari — experience, projects, technical skills, and education.",
  },
  "/contact": {
    title: "Contact — Mohd Ashfaque Ansari",
    description:
      "Get in touch with Mohd Ashfaque Ansari about internships, software engineering roles, and AI projects.",
  },
  "/404": {
    title: "Page not found — Mohd Ashfaque Ansari",
    description: "This page does not exist.",
  },
}

function upsertMeta(selector, attrs) {
  let el = document.head.querySelector(selector)

  if (!el) {
    el = document.createElement("meta")
    document.head.appendChild(el)
  }

  for (const [k, v] of Object.entries(attrs)) {
    el.setAttribute(k, v)
  }

  return el
}

function upsertLink(rel, href) {
  let el = document.head.querySelector(`link[rel="${rel}"]`)

  if (!el) {
    el = document.createElement("link")
    el.setAttribute("rel", rel)
    document.head.appendChild(el)
  }

  el.setAttribute("href", href)
  return el
}

/** Absolute-URL helper — crawlers ignore a relative og:url or canonical. */
export function absoluteUrl(path = "/") {
  return `${site.url}${path}`
}

/**
 * Resolves metadata for a pathname.
 *
 * Order matters: an exact match, then the /projects/<slug> pattern, then a
 * longest-prefix match, and finally the 404 entry. Falling back to the homepage
 * title for an unknown path would hand a crawler the wrong description for
 * every broken link, so an unmatched path is reported as not-found instead.
 */
export function metaFor(pathname) {
  if (routeMeta[pathname]) return routeMeta[pathname]

  // Known route, unknown slug — the case-study 404.
  if (/^\/projects\/[^/]+\/?$/.test(pathname)) {
    return {
      title: "Case study not found — Mohd Ashfaque Ansari",
      description: "No case study exists at this address.",
    }
  }

  const known = Object.keys(routeMeta).filter(
    (k) => k !== "/" && k !== "/404"
  )

  const prefix = known
    .sort((a, b) => b.length - a.length)
    .find((k) => pathname === k || pathname.startsWith(`${k}/`))

  if (prefix) return routeMeta[prefix]

  return routeMeta["/404"]
}

/**
 * Syncs <title> and the description/OG tags with the current route. index.html
 * carries the defaults; this overrides them on navigation.
 */
export function setPageMeta(pathname) {
  const meta = metaFor(pathname)

  document.title = meta.title

  if (meta.description) {
    upsertMeta('meta[name="description"]', {
      name: "description",
      content: meta.description,
    })
    upsertMeta('meta[property="og:description"]', {
      property: "og:description",
      content: meta.description,
    })
    upsertMeta('meta[name="twitter:description"]', {
      name: "twitter:description",
      content: meta.description,
    })
  }

  upsertMeta('meta[property="og:title"]', {
    property: "og:title",
    content: meta.title,
  })
  upsertMeta('meta[name="twitter:title"]', {
    name: "twitter:title",
    content: meta.title,
  })

  upsertMeta('meta[property="og:url"]', {
    property: "og:url",
    content: absoluteUrl(pathname),
  })
  upsertLink("canonical", absoluteUrl(pathname))

  return meta
}

export { seo }