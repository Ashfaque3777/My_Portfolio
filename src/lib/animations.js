import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

/**
 * ScrollTrigger ships inside the free gsap package — it is not a paid plugin
 * and needs no install. Verified at node_modules/gsap/ScrollTrigger.js.
 * See BUILD.md §30.
 */
gsap.registerPlugin(ScrollTrigger)

export const EASE = {
  out: "power3.out",
  expo: "expo.out",
  quart: "power4.out",
}

export const DURATION = {
  fast: 0.4,
  base: 0.7,
  slow: 1.1,
  cinematic: 1.5,
}

/**
 * Entrance timeline for the hero. Line-by-line headline reveal, staggered
 * upward. Transform and opacity only.
 */
export function heroIntro(scope, reduced) {
  if (reduced) {
    gsap.set(scope, { clearProps: "all" })
    return null
  }

  const tl = gsap.timeline({ defaults: { ease: EASE.expo } })

  tl.from("[data-hero-eyebrow]", { y: 18, opacity: 0, duration: 0.7 })
    .from("[data-hero-line]", { yPercent: 108, opacity: 0, duration: 1.1, stagger: 0.09 }, "-=0.45")
    .from("[data-hero-body]", { y: 22, opacity: 0, duration: 0.8 }, "-=0.7")
    .from("[data-hero-cta] > *", { y: 16, opacity: 0, duration: 0.6, stagger: 0.08 }, "-=0.55")
    .from("[data-hero-meta] > *", { y: 12, opacity: 0, duration: 0.5, stagger: 0.06 }, "-=0.4")
    .from("[data-hero-visual]", { scale: 0.94, opacity: 0, duration: 1.2 }, "-=1")

  return tl
}

/**
 * Generic scroll reveal. Elements start hidden and are revealed once as they
 * enter. Reduced motion skips the animation and clears inline state, which is
 * what keeps content visible rather than stuck at opacity 0.
 *
 * Two things are deliberate here:
 *
 *  - `gsap.utils.toArray` is NOT affected by useGSAP's `scope` (that only
 *    rewrites selector strings inside tweens). Without passing the scope
 *    explicitly, each section would query the whole document and re-animate
 *    every other section's elements.
 *  - `[data-reveal-group]` is listed separately because it is a distinct
 *    attribute from `[data-reveal]`; a single combined selector would never
 *    match group elements.
 */
export function revealOnScroll(scope, reduced) {
  if (!scope) return

  if (reduced) {
    gsap.set(scope, { clearProps: "all" })
    return
  }

  const targets = gsap.utils.toArray("[data-reveal]", scope)

  for (const el of targets) {
    gsap.from(el, {
      y: 22,
      opacity: 0,
      duration: DURATION.base,
      ease: EASE.out,
      scrollTrigger: { trigger: el, start: "top 88%", once: true },
    })
  }

  // Groups reveal as one block rather than per-child, so cards and list items
  // arrive together instead of cascading on a stagger the reader didn't ask for.
  const groups = gsap.utils.toArray("[data-reveal-group]", scope)

  for (const el of groups) {
    gsap.from(el, {
      y: 26,
      opacity: 0,
      duration: DURATION.base,
      ease: EASE.out,
      scrollTrigger: { trigger: el, start: "top 90%", once: true },
    })
  }
}

/**
 * Scrub-linked transform for decorative layers. ScrollTrigger.cleanup is
 * handled by useGSAP's context revert, so no manual kill is needed.
 */
export function parallax(scope, reduced) {
  if (!scope || reduced) return

  const targets = gsap.utils.toArray("[data-parallax]", scope)

  for (const el of targets) {
    const depth = parseFloat(el.dataset.parallax) || 0.15

    gsap.to(el, {
      yPercent: -depth * 100,
      ease: "none",
      scrollTrigger: {
        trigger: el.parentElement || el,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    })
  }
}

/**
 * Route transition. React unmounts the previous page immediately, so there is
 * no exit animation — only the incoming page reveals.
 * See BUILD.md §25.
 */
export function routeEnter(el, reduced) {
  if (reduced) {
    gsap.set(el, { clearProps: "all" })
    return
  }

  gsap.fromTo(
    el,
    { opacity: 0, y: 12 },
    { opacity: 1, y: 0, duration: DURATION.fast, ease: EASE.out, overwrite: true }
  )
}

export { gsap, ScrollTrigger }