import { useEffect, useState } from "react"

const QUERY = "(prefers-reduced-motion: reduce)"

/**
 * Tracks the user's reduced-motion preference.
 *
 * Reads the media query rather than assuming `false`, because a mismatch
 * between this hook and the CSS media query in globals.css would leave one of
 * the two motion paths active when it should not be.
 */
export default function useReducedMotion() {
  const [reduced, setReduced] = useState(() => {
    if (typeof window === "undefined" || !window.matchMedia) return false
    return window.matchMedia(QUERY).matches
  })

  useEffect(() => {
    if (!window.matchMedia) return undefined

    const mq = window.matchMedia(QUERY)
    const onChange = (e) => setReduced(e.matches)

    setReduced(mq.matches)

    if (mq.addEventListener) {
      mq.addEventListener("change", onChange)
      return () => mq.removeEventListener("change", onChange)
    }

    // Safari < 14
    mq.addListener(onChange)
    return () => mq.removeListener(onChange)
  }, [])

  return reduced
}