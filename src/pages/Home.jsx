import Hero from "../components/sections/Hero"
import Marquee from "../components/sections/Marquee"
import About from "../components/sections/About"
import FeaturedProjects from "../components/sections/FeaturedProjects"
import Experience from "../components/sections/Experience"
import Skills from "../components/sections/Skills"
import Education from "../components/sections/Education"
import Recognition from "../components/sections/Recognition"
import CurrentlyBuilding from "../components/sections/CurrentlyBuilding"
import ContactCTA from "../components/sections/ContactCTA"

/**
 * Single-page homepage. Section order is fixed by BUILD.md — the numbering
 * ("01 / ABOUT" … "07 / CONTACT") reads as a table of contents, so reordering
 * breaks the numbering that is rendered on screen.
 *
 * CurrentlyBuilding is deliberately outside the numbered sequence: it is a
 * continuation of Recognition, not a section in its own right.
 */
export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <About />
      <FeaturedProjects />
      <Experience />
      <Skills />
      <Education />
      <Recognition />
      <CurrentlyBuilding />
      <ContactCTA />
    </>
  )
}