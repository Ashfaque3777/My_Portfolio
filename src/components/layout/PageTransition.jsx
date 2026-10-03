import { useEffect, useRef } from "react"
import { useLocation } from "react-router-dom"
import { useGSAP } from "@gsap/react"
import { routeEnter } from "../../lib/animations"
import { setPageMeta } from "../../lib/seo"
import useReducedMotion from "../../hooks/useReducedMotion"

/**
 * Wraps each route in a single animated element and keeps route-level concerns
 * in one place:
 *
 *  - enter animation keyed on pathname (BUILD.md §25)
 *  - scroll reset, so navigating from the bottom of the homepage to /projects
 *    does not land mid-page (§39)
 *  - document title / description per route (§34)
 *
 * The incoming page only reveals — React unmounts the previous page
 * immediately, so an exit animation would mean holding two subtrees in state.
 */
export default function PageTransition({ children }) {
  const { pathname, hash } = useLocation()
  const reduced = useReducedMotion()
  const ref = useRef(null)
  const firstRender = useRef(true)

  // Meta and scroll reset run outside the GSAP context — they must happen even
  // when the animation is skipped entirely under reduced motion.
  useEffect(() => {
    setPageMeta(pathname)

    if (hash) {
      // Let the target route paint before scrolling to its anchor, otherwise
      // the element may not exist yet.
      const id = hash.slice(1)
      const raf = requestAnimationFrame(() => {
        const el = document.getElementById(id)
        if (el) {
          el.scrollIntoView({
            behavior: firstRender.current ? "auto" : "smooth",
            block: "start",
          })
        }
      })
      firstRender.current = false
      return () => cancelAnimationFrame(raf)
    }

    window.scrollTo({ top: 0, left: 0, behavior: "auto" })
    return undefined
  }, [pathname, hash])

  useGSAP(
    () => {
      if (ref.current) routeEnter(ref.current, reduced)
    },
    { dependencies: [pathname], scope: ref }
  )

  return <div ref={ref}>{children}</div>
}