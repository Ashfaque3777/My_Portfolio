import { useRef } from "react"
import { Link } from "react-router-dom"
import { useGSAP } from "@gsap/react"
import { ArrowRight, ArrowDown } from "lucide-react"
import { heroIntro } from "../../lib/animations"
import { site, contact } from "../../data/site"
import Button from "../ui/Button"
import useReducedMotion from "../../hooks/useReducedMotion"
import resumePdf from "../../assets/Mohd_Ashfaque_Ansari_CV.pdf"

const HEADLINE = ["I build software", "that thinks, works,", "and ships."]

/**
 * Technical visual: a slowly rotating conic sweep behind a static grid, with
 * two accent nodes on independent orbits. Deliberately cheap — two transforms
 * on composited layers, no canvas, no SVG filters, no per-frame JS.
 */
function HeroVisual() {
  return (
    <div
      data-hero-visual
      aria-hidden="true"
      className="pointer-events-none absolute inset-y-0 right-[-12%] hidden w-[62%] lg:block"
    >
      <div className="absolute inset-0 grid-lines mask-fade-b opacity-40" />

      {/* Positioning and rotation live on separate elements on purpose: the
          spin keyframe animates `transform`, which would otherwise overwrite
          Tailwind's -translate-x-1/2 -translate-y-1/2 centering. */}
      <div className="absolute left-1/2 top-1/2 aspect-square w-[min(58vw,620px)] -translate-x-1/2 -translate-y-1/2">
        <div
          className="h-full w-full rounded-full opacity-[0.16]"
          style={{
            background:
              "conic-gradient(from 0deg, transparent 0deg, var(--accent) 60deg, transparent 130deg, transparent 360deg)",
            animation: "spin 10s linear infinite",
          }}
        />
      </div>

      <div className="absolute left-1/2 top-1/2 aspect-square w-[min(34vw,360px)] -translate-x-1/2 -translate-y-1/2">
        <div
          className="h-full w-full rounded-full border border-[var(--border)]"
          style={{ animation: "spin 40s linear infinite reverse" }}
        />
      </div>

      <span className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--accent)] shadow-[0_0_28px_6px_rgba(215,255,63,0.35)]" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_52%_50%,rgba(215,255,63,0.10),transparent_52%)]" />
    </div>
  )
}

export default function Hero() {
  const scope = useRef(null)
  const reduced = useReducedMotion()

  useGSAP(() => {
    heroIntro(scope.current, reduced)
  }, { scope })

  return (
    <section
      id="top"
      ref={scope}
      className="relative flex min-h-[100svh] items-center overflow-hidden pb-20 pt-[calc(var(--nav-h)+3rem)] md:pb-28"
    >
      <HeroVisual />

      <div className="shell relative w-full">
        <div className="max-w-4xl">
          <p
            data-hero-eyebrow
            className="label-mono flex items-center gap-3 text-[var(--text)]"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
            {site.role}
          </p>

          <h1 className="display mt-8 text-[var(--text)]">
            {HEADLINE.map((line) => (
              <span key={line} className="block overflow-hidden">
                <span data-hero-line className="block">
                  {line}
                </span>
              </span>
            ))}
          </h1>

          <p
            data-hero-body
            className="mt-9 max-w-[54ch] text-[17px] leading-relaxed text-[var(--text-muted)] md:text-[19px]"
          >
            I&apos;m {site.fullName}, a Computer Science &amp; Engineering
            student specializing in Artificial Intelligence &amp; Data Science. I
            build full-stack applications, RAG systems, and agentic AI workflows
            with a focus on practical, usable software.
          </p>

          <div data-hero-cta className="mt-11 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button as={Link} to="/#work" size="lg">
              View selected work
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Button>

            <Button href={resumePdf} download size="lg" variant="outline">
              Download resume
              <ArrowDown className="h-4 w-4" aria-hidden="true" />
            </Button>
          </div>

          <div
            data-hero-meta
            className="mt-14 flex flex-col gap-2 font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--text-muted)] sm:flex-row sm:items-center sm:gap-8"
          >
            <span>{site.locationShort}</span>
            <span className="hidden h-3 w-px bg-[var(--border-strong)] sm:block" />
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
              {site.availability}
            </span>
            <span className="hidden h-3 w-px bg-[var(--border-strong)] sm:block" />
            <a
              href={`mailto:${contact.email}`}
              className="transition-colors hover:text-[var(--accent)]"
            >
              {contact.email}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}