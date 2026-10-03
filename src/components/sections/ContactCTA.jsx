import { useRef } from "react"
import { useGSAP } from "@gsap/react"
import { Mail, Github, Linkedin, Phone, MapPin } from "lucide-react"
import { revealOnScroll } from "../../lib/animations"
import SectionHeading from "../ui/SectionHeading"
import { site, contact, socials } from "../../data/site"
import useReducedMotion from "../../hooks/useReducedMotion"

const SOCIAL_ICONS = { Github, Linkedin, Mail }

export default function Contact() {
  const scope = useRef(null)
  const reduced = useReducedMotion()

  useGSAP(
    () => {
      revealOnScroll(scope.current, reduced)
    },
    { scope }
  )

  return (
    <section id="contact" ref={scope} className="shell py-24 md:py-36">
      <SectionHeading
        index="07"
        label="Contact"
        title="Let's build something worth deploying."
        data-reveal=""
      />

      <div className="mt-14 grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
        <div data-reveal-group="">
          <a
            href={`mailto:${contact.email}`}
            className="group inline-flex items-center gap-4 font-mono text-[clamp(1.25rem,4vw,2.25rem)] leading-tight tracking-[-0.02em] text-[var(--text)] transition-colors duration-300 hover:text-[var(--accent)]"
          >
            {contact.email}
            <Mail
              className="h-6 w-6 shrink-0 transition-transform duration-300 group-hover:-translate-y-1"
              aria-hidden="true"
            />
          </a>

          <p className="mt-8 max-w-[54ch] text-[16px] leading-relaxed text-[var(--text-muted)]">
            I&apos;m open to full-stack and AI engineering roles, and to internships
            where I can work on retrieval, agents, or the parts of a product nobody
            wants to own. {site.availabilityFull}
          </p>

          <ul className="mt-10 flex flex-col gap-3">
            {socials.map((s) => {
              const Icon = SOCIAL_ICONS[s.icon]

              return (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target={s.icon === "Mail" ? undefined : "_blank"}
                    rel="noopener noreferrer"
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

        <div data-reveal-group="" className="lg:pt-3">
          <dl className="flex flex-col">
            <div className="flex items-center justify-between gap-6 border-b border-[var(--border)] py-4">
              <dt className="label-mono flex items-center gap-2.5">
                <Mail className="h-3.5 w-3.5" aria-hidden="true" />
                Email
              </dt>
              <dd>
                <a
                  href={`mailto:${contact.email}`}
                  className="link-underline text-[15px] text-[var(--text)] hover:text-[var(--accent)]"
                >
                  {contact.email}
                </a>
              </dd>
            </div>

            <div className="flex items-center justify-between gap-6 border-b border-[var(--border)] py-4">
              <dt className="label-mono flex items-center gap-2.5">
                <Phone className="h-3.5 w-3.5" aria-hidden="true" />
                Phone
              </dt>
              <dd>
                <a
                  href={contact.phoneHref}
                  className="link-underline text-[15px] text-[var(--text)] hover:text-[var(--accent)]"
                >
                  {contact.phone}
                </a>
              </dd>
            </div>

            <div className="flex items-center justify-between gap-6 border-b border-[var(--border)] py-4">
              <dt className="label-mono flex items-center gap-2.5">
                <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
                Location
              </dt>
              <dd className="text-right text-[15px] text-[var(--text)]">
                {site.location}
              </dd>
            </div>

            <div className="flex items-center justify-between gap-6 border-b border-[var(--border)] py-4">
              <dt className="label-mono">Response</dt>
              <dd className="text-right text-[15px] text-[var(--text-muted)]">
                {site.responseTime}
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  )
}