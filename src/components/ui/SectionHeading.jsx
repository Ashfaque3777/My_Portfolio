/**
 * Section label + heading pair.
 *
 * The index/label pair follows the canonical 01-07 numbering defined in
 * BUILD.md §5. The wrapping <section id> lives in the section component, so
 * the navbar's anchor navigation and useActiveSection can both find it.
 */
export default function SectionHeading({
  index,
  label,
  title,
  lede,
  align = "start",
  className = "",
  ...rest
}) {
  const centered = align === "center"

  return (
    <header className={className} {...rest}>
      {(index || label) && (
        <p className="label-mono flex items-center gap-3">
          {index && <span className="text-[var(--accent)]">{index}</span>}
          {label && <span>{label}</span>}
        </p>
      )}

      {title && (
        <h2 className="heading-section mt-5 max-w-[18ch] text-[var(--text)]">
          {title}
        </h2>
      )}

      {lede && (
        <p
          className={`mt-6 max-w-[62ch] text-[17px] leading-relaxed text-[var(--text-muted)] ${
            centered ? "mx-auto" : ""
          }`}
        >
          {lede}
        </p>
      )}
    </header>
  )
}