import { useRef } from "react"
import { useGSAP } from "@gsap/react"
import { revealOnScroll } from "../../lib/animations"
import { currentlyBuilding } from "../../data/recognition"
import useReducedMotion from "../../hooks/useReducedMotion"

/**
 * Currently building. Sits directly under Recognition rather than taking its own
 * numbered section, so the 01–07 sequence on the homepage stays unbroken.
 * See BUILD.md §20.
 */
export default function CurrentlyBuilding() {
  const scope = useRef(null)
  const reduced = useReducedMotion()

  useGSAP(
    () => {
      revealOnScroll(scope.current, reduced)
    },
    { scope }
  )

  return (
    <section ref={scope} className="shell pb-24 md:pb-36">
      <p data-reveal-group="" className="label-mono">
        Currently building
      </p>

      <ul className="mt-8 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
        {currentlyBuilding.map((item) => (
          <li
            key={item.id}
            data-reveal-group=""
            className="border-t border-[var(--border)] pt-5"
          >
            <h3 className="text-[15px] font-medium text-[var(--text)]">
              {item.title}
            </h3>
            <p className="mt-2.5 text-[14px] leading-relaxed text-[var(--text-muted)]">
              {item.body}
            </p>
          </li>
        ))}
      </ul>
    </section>
  )
}