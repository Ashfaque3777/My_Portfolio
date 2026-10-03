const BASE =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-colors duration-300 disabled:opacity-50 disabled:pointer-events-none"

const VARIANTS = {
  // Lime fill needs near-black text to clear AA. White on accent does not.
  primary:
    "bg-[var(--accent)] text-[var(--accent-contrast)] hover:bg-[var(--white)]",
  outline:
    "border border-[var(--border-strong)] text-[var(--text)] hover:border-[var(--accent)] hover:text-[var(--accent)]",
  ghost:
    "text-[var(--text-muted)] hover:text-[var(--text)]",
  link: "text-[var(--text)] hover:text-[var(--accent)] px-0",
}

const SIZES = {
  sm: "h-9 px-4 text-[13px]",
  md: "h-11 px-6 text-sm",
  lg: "h-[52px] px-8 text-[15px]",
}

/**
 * Renders an <a> when `href` is given, a <button> otherwise.
 *
 * External hrefs get target/rel automatically so no call site can forget them.
 * Icons are provided via children and marked aria-hidden by the caller.
 */
export default function Button({
  as,
  href,
  variant = "primary",
  size = "md",
  className = "",
  children,
  external = false,
  download = false,
  ...rest
}) {
  const classes = [
    BASE,
    VARIANTS[variant] ?? VARIANTS.primary,
    SIZES[size] ?? SIZES.md,
    className,
  ]
    .filter(Boolean)
    .join(" ")

  if (href) {
    const isExternal =
      external || (typeof href === "string" && /^https?:/i.test(href))

    return (
      <a
        href={href}
        className={classes}
        {...(isExternal
          ? { target: "_blank", rel: "noopener noreferrer" }
          : null)}
        {...(download ? { download: true } : null)}
        {...rest}
      >
        {children}
      </a>
    )
  }

  const Tag = as ?? "button"
  return (
    <Tag className={classes} {...rest}>
      {children}
    </Tag>
  )
}