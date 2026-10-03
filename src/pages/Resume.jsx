import { useRef } from "react"
import { useGSAP } from "@gsap/react"
import { Download, ExternalLink } from "lucide-react"
import { revealOnScroll } from "../lib/animations"
import Button from "../components/ui/Button"
import { site, contact } from "../data/site"
import { experience } from "../data/experience"
import { education } from "../data/education"
import { recognition } from "../data/recognition"
import { projects } from "../data/projects"
import useReducedMotion from "../hooks/useReducedMotion"
import resumePdf from "../assets/Mohd_Ashfaque_Ansari_CV.pdf"

const ROWS = [
  ["Role", site.role],
  ["Location", site.location],
  ["Graduation", site.graduation],
  ["Availability", site.availability],
]

/**
 * Resume route. Embeds the CV as an object with a download fallback, because a
 * PDF in an <iframe> renders inconsistently across browsers and offers no
 * fallback when the plugin is unavailable. The visible summary below is the
 * accessible content — the PDF is an attachment, not the page.
 */
export default function Resume() {
  const scope = useRef(null)
  const reduced = useReducedMotion()

  useGSAP(
    () => {
      revealOnScroll(scope.current, reduced)
    },
    { scope }
  )

  const mailto = `mailto:${contact.email}?subject=${encodeURIComponent(
    contact.emailSubject
  )}`

  return (
    <div ref={scope} className="shell pb-28 pt-[calc(var(--nav-h)+4rem)] md:pb-36">
      <header>
        <p data-reveal="" className="label-mono">
          Résumé
        </p>

        <h1 data-reveal="" className="heading-project mt-6 text-[var(--text)]">
          {site.fullName}
        </h1>

        <p
          data-reveal=""
          className="mt-7 max-w-[62ch] text-[17px] leading-relaxed text-[var(--text-muted)] md:text-[19px]"
        >
          The canonical version is the PDF below — generated from the same CV
          this site is built from. If the two ever disagree, the PDF wins.
        </p>

        <div data-reveal-group="" className="mt-10 flex flex-wrap gap-3">
          <Button href={resumePdf} download size="lg">
            <Download className="h-4 w-4" aria-hidden="true" />
            Download PDF
          </Button>

          <Button href={mailto} size="lg" variant="outline">
            <ExternalLink className="h-4 w-4" aria-hidden="true" />
            Email me
          </Button>
        </div>
      </header>

      {/* Facts */}
      <dl data-reveal-group="" className="mt-20 grid gap-x-12 gap-y-5 sm:grid-cols-2">
        {ROWS.map(([label, value]) => (
          <div
            key={label}
            className="flex items-baseline justify-between gap-6 border-b border-[var(--border)] pb-3"
          >
            <dt className="label-mono">{label}</dt>
            <dd className="text-right text-[15px] text-[var(--text)]">{value}</dd>
          </div>
        ))}
      </dl>

      {/* PDF */}
      <div data-reveal-group="" className="mt-14">
        <object
          data={resumePdf}
          type="application/pdf"
          className="h-[80vh] w-full rounded-[var(--radius-sm)] border border-[var(--border)] bg-[var(--surface-soft)]"
          aria-label={`${site.fullName} resume`}
        >
          {/* Rendered only when the browser cannot display the PDF inline. */}
          <div className="flex h-[60vh] flex-col items-center justify-center gap-5 p-8 text-center">
            <p className="text-[17px] text-[var(--text)]">
              Your browser can&apos;t display this PDF inline.
            </p>
            <a
              href={resumePdf}
              download
              className="inline-flex h-12 items-center gap-2 rounded-full bg-[var(--accent)] px-7 text-sm font-semibold text-[var(--accent-contrast)]"
            >
              <Download className="h-4 w-4" aria-hidden="true" />
              Download instead
            </a>
          </div>
        </object>
      </div>

      {/* Text summary — the accessible equivalent of the PDF. */}
      <div className="mt-20 flex flex-col gap-16">
        <section>
          <h2 className="text-[26px] tracking-[-0.02em] text-[var(--text)] md:text-[30px]">
            Experience
          </h2>
          <ol className="mt-6 flex flex-col">
            {experience.map((r) => (
              <li
                key={r.id}
                className="border-b border-[var(--border)] py-5 first:border-t"
              >
                <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--accent)]">
                  {r.period}
                </p>
                <p className="mt-2 text-[17px] text-[var(--text)]">
                  {r.role} — {r.org}
                </p>
              </li>
            ))}
          </ol>
        </section>

        <section>
          <h2 className="text-[26px] tracking-[-0.02em] text-[var(--text)] md:text-[30px]">
            Projects
          </h2>
          <ul className="mt-6 grid gap-x-10 gap-y-4 sm:grid-cols-2">
            {projects.map((p) => (
              <li key={p.slug} className="flex gap-3 text-[15px] text-[var(--text-muted)]">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--accent)]" />
                {p.title}
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-[26px] tracking-[-0.02em] text-[var(--text)] md:text-[30px]">
            Education &amp; Recognition
          </h2>
          <ul className="mt-6 flex flex-col gap-3 text-[15px] leading-relaxed text-[var(--text-muted)]">
            <li>
              {education[0]?.degree}, {education[0]?.field} —{" "}
              {education[0]?.institution} (expected {education[0]?.expected})
            </li>
            {recognition.map((r) => (
              <li key={r.id}>
                {r.program}, {r.org} ({r.year}) — {r.body}
              </li>
            ))}
          </ul>
        </section>
      </div>

      <div className="mt-20 border-t border-[var(--border)] pt-10">
        <p className="label-mono">Note</p>
        <p className="mt-5 max-w-[62ch] text-[17px] leading-relaxed text-[var(--text-muted)]">
          Every fact on this site is transcribed from the CV. Where a claim could
          not be verified, it is omitted rather than softened. The PDF above is
          the canonical version — if the two ever disagree, the PDF wins.
        </p>
      </div>
    </div>
  )
}