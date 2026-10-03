import { useEffect, useState } from "react"

/**
 * Tracks which section id is currently in view.
 *
 * Uses IntersectionObserver rather than a scroll handler calling setState on
 * every frame — that pattern re-renders the tree on every scroll event and is
 * the single most common cause of jank on a page this long.
 *
 * Returns "" when no observed id is active, so callers can treat it as a plain
 * falsy value instead of special-casing null.
 */
export default function useActiveSection(ids = []) {
  const [active, setActive] = useState("")
  const key = ids.join("|")

  useEffect(() => {
    const sectionIds = key ? key.split("|") : []
    if (!sectionIds.length) {
      setActive("")
      return undefined
    }

    // Sections may not be mounted yet on the first effect pass.
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean)

    if (!elements.length) {
      setActive("")
      return undefined
    }

    // ratio map keeps the choice stable between two adjacent sections instead
    // of flickering on every threshold crossing
    const ratios = new Map(sectionIds.map((id) => [id, 0]))

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          ratios.set(entry.target.id, entry.isIntersecting
            ? entry.intersectionRatio
            : 0)
        }

        let best = ""
        let bestRatio = 0

        for (const [id, ratio] of ratios) {
          if (ratio > bestRatio) {
            bestRatio = ratio
            best = id
          }
        }

        setActive(bestRatio > 0 ? best : "")
      },
      {
        // A band around the upper third of the viewport: a section becomes
        // "current" once it reaches reading position, and stops being current
        // once it has left.
        rootMargin: "-20% 0px -55% 0px",
        threshold: [0, 0.15, 0.35, 0.6, 1],
      }
    )

    for (const el of elements) observer.observe(el)

    return () => observer.disconnect()
  }, [key])

  return active
}