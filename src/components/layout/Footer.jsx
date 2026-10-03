import { Link } from "react-router-dom"
import { site, contact, links } from "../../data/site"
import BackToTop from "../ui/BackToTop"

const NAV = [
  { label: "Work", to: "/#work" },
  { label: "All Projects", to: "/projects" },
  { label: "Resume", to: "/resume" },
  { label: "Contact", to: "/contact" },
]

export default function Footer() {
  // Rendered from the current year rather than a hardcoded literal, which would
  // silently go stale. See BUILD.md §24.
  const year = new Date().getFullYear()

  return (
    <footer className="relative border-t border-[var(--border)]">
      <div className="shell py-16 md:py-20">
        <div className="flex flex-col gap-12 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <p className="font-mono text-lg font-semibold tracking-tight">
              ASHFAQUE<span className="text-[var(--accent)]">.A</span>
            </p>
            <p className="label-mono mt-4">{site.role}</p>
            <p className="mt-6 text-[15px] text-[var(--text-muted)]">
              {site.location}
            </p>
          </div>

          <nav aria-label="Footer" className="flex gap-12">
            <div>
              <p className="label-mono">Navigate</p>
              <ul className="mt-4 flex flex-col gap-2.5">
                {NAV.map((item) => (
                  <li key={item.to}>
                    <Link
                      to={item.to}
                      className="link-underline text-[15px] text-[var(--text-muted)] transition-colors hover:text-[var(--text)]"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="label-mono">Elsewhere</p>
              <ul className="mt-4 flex flex-col gap-2.5">
                {links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      {...(l.external
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : null)}
                      className="link-underline text-[15px] text-[var(--text-muted)] transition-colors hover:text-[var(--text)]"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
                <li>
                  <a
                    href={`mailto:${contact.email}`}
                    className="link-underline break-all text-[15px] text-[var(--text-muted)] transition-colors hover:text-[var(--text)]"
                  >
                    {contact.email}
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>

        <div className="mt-16 flex flex-col-reverse items-start gap-6 border-t border-[var(--border)] pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-[11px] tracking-wide text-[var(--text-muted)]">
            © {year} {site.fullName}
          </p>
          <BackToTop />
        </div>
      </div>
    </footer>
  )
}