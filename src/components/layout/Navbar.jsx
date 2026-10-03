import { useEffect, useRef, useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { Menu, X } from "lucide-react"
import useActiveSection from "../../hooks/useActiveSection"

const SECTIONS = [
  { label: "Work", id: "work" },
  { label: "About", id: "about" },
  { label: "Experience", id: "experience" },
  { label: "Skills", id: "skills" },
  { label: "Contact", id: "contact" },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()
  const panelRef = useRef(null)
  const toggleRef = useRef(null)

  const onHome = pathname === "/"
  const activeSection = useActiveSection(onHome ? SECTIONS.map((s) => s.id) : [])

  // Opaque backdrop once the page has scrolled off the hero
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // Close on route change
  useEffect(() => {
    setOpen(false)
  }, [pathname])

  // Escape closes and returns focus to the toggle.
  // Also locks body scroll so the panel does not scroll the page behind it.
  useEffect(() => {
    if (!open) return undefined

    const onKey = (e) => {
      if (e.key === "Escape") {
        setOpen(false)
        toggleRef.current?.focus()
      }
    }

    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"
    document.addEventListener("keydown", onKey)

    return () => {
      document.body.style.overflow = prevOverflow
      document.removeEventListener("keydown", onKey)
    }
  }, [open])

  // Move focus into the panel when it opens
  useEffect(() => {
    if (open) panelRef.current?.querySelector("a")?.focus()
  }, [open])

  const closeMenu = () => setOpen(false)

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        scrolled || open
          ? "border-b border-[var(--border)] bg-[rgba(8,9,10,0.72)] backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav
        aria-label="Primary"
        className="shell flex h-[var(--nav-h)] items-center justify-between gap-6"
      >
        <Link
          to="/"
          className="font-mono text-[15px] font-semibold tracking-tight text-[var(--text)] transition-colors hover:text-[var(--accent)]"
          aria-label="Ashfaque Ansari — home"
        >
          ASHFAQUE<span className="text-[var(--accent)]">.A</span>
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          {SECTIONS.map((s) => {
            const isActive = onHome && activeSection === s.id

            return (
              <li key={s.id}>
                <Link
                  to={`/#${s.id}`}
                  onClick={closeMenu}
                  aria-current={isActive ? "true" : undefined}
                  className={`relative block px-3 py-2 text-[13px] font-medium transition-colors duration-300 ${
                    isActive
                      ? "text-[var(--accent)]"
                      : "text-[var(--text-muted)] hover:text-[var(--text)]"
                  }`}
                >
                  {s.label}
                  {isActive && (
                    <span className="absolute inset-x-3 -bottom-0.5 h-px bg-[var(--accent)]" />
                  )}
                </Link>
              </li>
            )
          })}
        </ul>

        <div className="hidden items-center gap-4 md:flex">
          <Link
            to="/projects"
            className={`text-[13px] font-medium transition-colors duration-300 ${
              pathname.startsWith("/projects")
                ? "text-[var(--accent)]"
                : "text-[var(--text-muted)] hover:text-[var(--text)]"
            }`}
          >
            All Projects
          </Link>
          <Link
            to="/contact"
            className="inline-flex h-9 items-center rounded-full bg-[var(--accent)] px-5 text-[13px] font-semibold text-[var(--accent-contrast)] transition-colors duration-300 hover:bg-[var(--white)]"
          >
            Let&apos;s Talk
          </Link>
        </div>

        <button
          ref={toggleRef}
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          className="-mr-2 inline-flex h-11 w-11 items-center justify-center rounded-full text-[var(--text)] transition-colors hover:text-[var(--accent)] md:hidden"
        >
          {open ? (
            <X className="h-5 w-5" aria-hidden="true" />
          ) : (
            <Menu className="h-5 w-5" aria-hidden="true" />
          )}
        </button>
      </nav>

      {/* Mobile panel */}
      <div
        id="mobile-nav"
        ref={panelRef}
        hidden={!open}
        className="border-t border-[var(--border)] bg-[rgba(8,9,10,0.97)] backdrop-blur-xl md:hidden"
      >
        <ul className="shell flex flex-col py-4">
          {SECTIONS.map((s, i) => (
            <li key={s.id}>
              <Link
                to={`/#${s.id}`}
                onClick={closeMenu}
                className={`flex items-center justify-between py-3 text-lg transition-colors duration-300 ${
                  onHome && activeSection === s.id
                    ? "text-[var(--accent)]"
                    : "text-[var(--text)]"
                }`}
              >
                {s.label}
                <span className="font-mono text-[11px] text-[var(--text-muted)]">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </Link>
            </li>
          ))}

          <li className="border-t border-[var(--border)] pt-3">
            <Link
              to="/projects"
              onClick={closeMenu}
              className="block py-3 text-lg text-[var(--text)]"
            >
              All Projects
            </Link>
          </li>
          <li className="pb-2">
            <Link
              to="/resume"
              onClick={closeMenu}
              className="block py-3 text-lg text-[var(--text)]"
            >
              Resume
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              onClick={closeMenu}
              className="mt-2 flex h-12 items-center justify-center rounded-full bg-[var(--accent)] text-[15px] font-semibold text-[var(--accent-contrast)]"
            >
              Let&apos;s Talk
            </Link>
          </li>
        </ul>
      </div>
    </header>
  )
}