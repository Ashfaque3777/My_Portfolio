import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter } from "react-router-dom"

/**
 * Self-hosted variable fonts, imported here rather than pulled from a CDN.
 * WOFF2 is subset by the package, and there is no third-party request or
 * render-blocking stylesheet from a font provider. See BUILD.md §9.
 */
import "@fontsource-variable/geist"
import "@fontsource-variable/geist-mono"

import App from "./App"
import "./styles/globals.css"

/**
 * ScrollTrigger and useGSAP are registered once, at the entry point, before any
 * component calls them. Registering inside a component would re-run on every
 * mount and re-create ScrollTrigger instances. See BUILD.md §7.
 */
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(useGSAP, ScrollTrigger)

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
)
