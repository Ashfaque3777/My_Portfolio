/**
 * Single source of truth for identity, links, and SEO copy.
 *
 * Every URL here is verified against src/assets/Mohd_Ashfaque_Ansari_CV.pdf.
 * See BUILD.md §0.5 and §35. Components must import from here rather than
 * hardcoding a URL.
 */

export const site = {
  name: "Ashfaque Ansari",
  fullName: "Mohd Ashfaque Ansari",
  role: "AI × Data × Full-Stack Developer",
  position:
    "AI & Full-Stack Developer building practical software, intelligent systems, and modern digital products.",
  location: "Lucknow, Uttar Pradesh, India",
  locationShort: "Lucknow, India",
  availability: "Available for jobs / opportunities",
  availabilityFull:
    "I reply to most serious enquiries within a day or two, usually sooner.",
  responseTime: "Usually within 1–2 days",
  graduation: "2027",
  url: "https://my-portfolio-197786.netlify.app",
}

export const contact = {
  email: "ashfaque3777@gmail.com",
  phone: "+91 9871948186",
  phoneHref: "tel:+919871948186",
  linkedin: "https://www.linkedin.com/in/see-me/",
  github: "https://github.com/Ashfaque3777",
  emailSubject: "Portfolio enquiry — Mohd Ashfaque Ansari",
}

export const links = [
  { label: "GitHub", href: contact.github, external: true },
  { label: "LinkedIn", href: contact.linkedin, external: true },
  { label: "Email", href: `mailto:${contact.email}`, external: false },
]

/**
 * Social entries paired with a Lucide icon key. Icons are resolved to
 * components at the call site so this file stays free of JSX.
 */
export const socials = [
  { label: "GitHub", href: contact.github, icon: "Github", external: true },
  {
    label: "LinkedIn",
    href: contact.linkedin,
    icon: "Linkedin",
    external: true,
  },
  {
    label: contact.email,
    href: `mailto:${contact.email}`,
    icon: "Mail",
    external: false,
  },
]

export const seo = {
  title: "Mohd Ashfaque Ansari — AI/Data & Full-Stack Developer",
  description:
    "Portfolio of Mohd Ashfaque Ansari — Computer Science & Engineering student building full-stack applications, RAG systems, and agentic AI workflows.",
  ogImage: `${site.url}/og.png`,
  themeColor: "#08090a",
}

export const marqueeItems = [
  "Full-Stack Development",
  "Artificial Intelligence",
  "RAG",
  "Agentic AI",
  "Data Engineering",
  "LLM Integration",
]