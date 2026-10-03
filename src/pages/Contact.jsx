import { useRef } from "react"
import { useGSAP } from "@gsap/react"
import { Mail, Github, Linkedin, Phone, MapPin } from "lucide-react"
import { revealOnScroll } from "../lib/animations"
import Button from "../components/ui/Button"
import { site, contact, socials } from "../data/site"
import useReducedMotion from "../hooks/useReducedMotion"

const SOCIAL_ICONS = { Github, Linkedin, Mail }

/**
 * Contact route.
 *
 * A mailto form, not a server-backed one: there is no backend in this build and
 * a form that silently discards submissions would be worse than none. mailto:
 * degrades to a visible email address if no client is configured. Adding a real
 * endpoint later means swapping this one component — see BUILD.md §23.
 */
export default function Contact() {
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
          Contact
        </p>

        <h1 data-reveal="" className="heading-project mt-6 text-[var(--text)]">
          Let&apos;s talk.
        </h1>

        <p
          data-reveal=""
          className="mt-7 max-w-[62ch] text-[17px] leading-relaxed text-[var(--text-muted)] md:text-[19px]"
        >
          Full-stack roles, AI engineering internships, or a project you think I
          should look at — the inbox is open. {site.availabilityFull}
        </p>
      </header>

      <div className="mt-16 grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        {/* Direct channels */}
        <div data-reveal-group="">
          <a
            href={mailto}
            className="group flex items-center gap-4 font-mono text-[clamp(1.1rem,3.2vw,1.9rem)] leading-tight tracking-[-0.02em] text-[var(--text)] transition-colors duration-300 hover:text-[var(--accent)]"
          >
            {contact.email}
            <Mail
              className="h-5 w-5 shrink-0 transition-transform duration-300 group-hover:-translate-y-1"
              aria-hidden="true"
            />
          </a>

          <ul className="mt-10 flex flex-col">
            <li className="flex items-center justify-between gap-6 border-b border-[var(--border)] py-4">
              <span className="label-mono flex items-center gap-2.5">
                <Phone className="h-3.5 w-3.5" aria-hidden="true" />
                Phone
              </span>
              <a
                href={contact.phoneHref}
                className="link-underline text-[15px] text-[var(--text)] hover:text-[var(--accent)]"
              >
                {contact.phone}
              </a>
            </li>

            <li className="flex items-center justify-between gap-6 border-b border-[var(--border)] py-4">
              <span className="label-mono flex items-center gap-2.5">
                <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
                Location
              </span>
              <span className="text-right text-[15px] text-[var(--text)]">
                {site.location}
              </span>
            </li>

            <li className="flex items-center justify-between gap-6 border-b border-[var(--border)] py-4">
              <span className="label-mono">Response time</span>
              <span className="text-right text-[15px] text-[var(--text-muted)]">
                {site.responseTime}
              </span>
            </li>
          </ul>

          <ul className="mt-10 flex flex-col gap-3">
            {socials.map((s) => {
              const Icon = SOCIAL_ICONS[s.icon]

              return (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target={s.external ? "_blank" : undefined}
                    rel={s.external ? "noopener noreferrer" : undefined}
                    className="group flex items-center gap-3 text-[15px] text-[var(--text-muted)] transition-colors hover:text-[var(--text)]"
                  >
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border)] transition-colors duration-300 group-hover:border-[var(--border-strong)]">
                      <Icon className="h-4 w-4" aria-hidden="true" />
                    </span>
                    {s.label}
                  </a>
                </li>
              )
            })}
          </ul>
        </div>

        {/* Composed message */}
        <div
          data-reveal-group=""
          className="card-surface flex flex-col justify-between gap-10 p-6 md:p-9"
        >
          <div>
            <h2 className="text-[24px] leading-tight tracking-[-0.02em] text-[var(--text)] md:text-[28px]">
              Better to email than to comment.
            </h2>

            <p className="mt-5 text-[15px] leading-relaxed text-[var(--text-muted)]">
              Comments on this site aren&apos;t monitored, so a message left here
              would go nowhere. This button opens your own mail client with the
              address and subject filled in — you keep a copy of what you sent.
            </p>

            <ul className="mt-8 flex flex-col gap-2.5 text-[14px] text-[var(--text-muted)]">
              <li className="flex gap-3">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--accent)]" />
                Full-stack and AI engineering roles
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--accent)]" />
                Internships working on retrieval or agent systems
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--accent)]" />
                Collaboration on an interesting problem
              </li>
            </ul>
          </div>

          <Button href={mailto} size="lg" className="w-full">
            <Mail className="h-4 w-4" aria-hidden="true" />
            Write to {contact.email.split("@")[0]}
          </Button>
        </div>
      </div>
    </div>
  )
}