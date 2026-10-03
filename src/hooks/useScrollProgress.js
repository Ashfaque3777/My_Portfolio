import { useEffect, useState } from "react"

/**
 * Document scroll progress as a 0-1 value.
 *
 * Uses a passive scroll listener writing to a CSS custom property rather than
 * setState, so scrolling never triggers a React render. The returned state is
 * only a coarse percentage used for the numeric read-out, throttled by rAF.
 */
export default function useScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const root = document.documentElement
    let frame = 0
    let lastPct = -1

    const update = () => {
      frame = 0

      const max = root.scrollHeight - root.clientHeight
      const ratio = max > 0 ? Math.min(root.scrollY / max, 1) : 0

      root.style.setProperty("--scroll-progress", String(ratio))

      const pct = Math.round(ratio * 100)
      if (pct !== lastPct) {
        lastPct = pct
        setProgress(pct)
      }
    }

    const onScroll = () => {
      if (frame) return
      frame = requestAnimationFrame(update)
    }

    update()
    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", onScroll, { passive: true })

    return () => {
      if (frame) cancelAnimationFrame(frame)
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onScroll)
    }
  }, [])

  return progress
}