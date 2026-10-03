import SectionHeading from "../ui/SectionHeading"
import { site } from "../../data/site"

const FACTS = [
  { label: "Based in", value: site.locationShort },
  { label: "Education", value: "B.Tech CSE — AI & Data Science" },
  { label: "Graduation", value: site.graduation },
  { label: "Focus", value: "AI + Full Stack" },
]

export default function About() {
  return (
    <section id="about" className="shell py-24 md:py-36">
      <SectionHeading
        index="01"
        label="About"
        title="A developer who likes understanding the system behind the interface."
        data-reveal=""
      />

      <div className="mt-14 grid gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
        <div data-reveal="" className="space-y-6 text-[17px] leading-relaxed text-[var(--text-muted)]">
          <p>
            I&apos;m {site.fullName}, a B.Tech Computer Science &amp;
            Engineering student specializing in Artificial Intelligence &amp;
            Data Science at Khwaja Moinuddin Chishti Language University,
            graduating in {site.graduation}.
          </p>

          <p>
            Most of what I know about software came from building something that
            didn&apos;t work yet. The e-commerce platform taught me that
            authorisation enforced in the UI is not an authorisation boundary.
            The RAG chatbot taught me that answering fluently is not the same as
            answering correctly, and that you only find out which one you have
            built by measuring it. The underwriting agent taught me that a
            decision nobody can inspect is not much of a decision.
          </p>

          <p>
            That pattern is why I keep coming back to the layers underneath the
            interface — retrieval quality, structured state, data integrity. The
            interface is what a user sees; the system is what has to be right.
          </p>

          <p>
            I work across full-stack development, AI/ML, retrieval systems, and
            agentic workflows, and I learn by shipping rather than by
            collecting tutorials. Right now I&apos;m most interested in retrieval
            quality and in agent systems that fail predictably instead of
            confidently.
          </p>
        </div>

        <div data-reveal-group="" className="lg:pt-2">
          <dl className="flex flex-col">
            {FACTS.map((f) => (
              <div
                key={f.label}
                className="flex items-baseline justify-between gap-6 border-b border-[var(--border)] py-4 first:border-t"
              >
                <dt className="label-mono">{f.label}</dt>
                <dd className="text-right text-[15px] text-[var(--text)]">
                  {f.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}