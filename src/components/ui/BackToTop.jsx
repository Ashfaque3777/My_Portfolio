import { useEffect, useRef, useState } from "react"
import { ArrowUp } from "lucide-react"
import useReducedMotion from "../../hooks/useReducedMotion"

const THRESHOLD = 640

/**
 * Back-to-top control.
 *
 * Appears only after meaningful scroll, and uses window.scrollTo so it respects
 * the CSS scroll-behavior and its reduced-motion override, rather than running
 * a JS easing loop that would ignore both.
 */
export default function BackToTop({ targetId }) {
  const [visible, setVisible] = useState(false)
  const reduced = useReducedMotion()
  const first = useRef(true)

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY

      // Avoid a state update on the very first scroll event after mount
      if (first.current) {
        first.current = false
        setVisible(y > THRESHOLD)
        return
      }

      setVisible(y > THRESHOLD)
    }

    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const goTop = () => {
    if (targetId) {
      const el = document.getElementById(targetId)
      if (el) {
        el.scrollIntoView({
          behavior: reduced ? "auto" : "smooth",
          block: "start",
        })
        return
      }
    }

    window.scrollTo({ top: 0, behavior: reduced ? "auto" : "smooth" })
  }

  return (
    <button
      type="button"
      onClick={goTop}
      aria-label="Back to top"
      className={`fixed bottom-6 right-6 z-40 inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border-strong)] bg-[var(--surface)] text-[var(--text)] transition-all duration-300 hover:border-[var(--accent)] hover:text-[var(--accent)] ${
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-3 opacity-0"
      }`}
    >
      <ArrowUp className="h-4 w-4" aria-hidden="true" />
    </button>
  )
}