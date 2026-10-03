import { lazy, Suspense } from "react"
import { Routes, Route, Navigate } from "react-router-dom"

import Backdrop from "./components/layout/Backdrop"
import ScrollProgress from "./components/layout/ScrollProgress"
import Navbar from "./components/layout/Navbar"
import Footer from "./components/layout/Footer"
import PageTransition from "./components/layout/PageTransition"
import Home from "./pages/Home"

/**
 * The homepage stays in the main bundle because it is the entry point for most
 * visitors; everything else splits out. A page-level fallback is used rather
 * than Suspense at the layout level so the shell never blanks during a split
 * load. See BUILD.md §38.
 */
const Projects = lazy(() => import("./pages/Projects"))
const ProjectDetail = lazy(() => import("./pages/ProjectDetail"))
const Resume = lazy(() => import("./pages/Resume"))
const Contact = lazy(() => import("./pages/Contact"))
const NotFound = lazy(() => import("./pages/NotFound"))

function RouteFallback() {
  return (
    <div
      className="shell flex min-h-[70svh] items-center justify-center"
      role="status"
      aria-live="polite"
    >
      <span className="label-mono">Loading…</span>
    </div>
  )
}

export default function App() {
  return (
    <>
      {/* Decorative only — aria-hidden inside the component, never interactive. */}
      <Backdrop />

      <a href="#main" className="skip-link">
        Skip to content
      </a>

      <ScrollProgress />
      <Navbar />

      <main id="main">
        <PageTransition>
          <Suspense fallback={<RouteFallback />}>
            <Routes>
              <Route path="/" element={<Home />} />

              {/* Legacy paths, kept alive so old links and bookmarks still land
                  somewhere useful. See BUILD.md §27. */}
              <Route path="/skills" element={<Navigate to="/#skills" replace />} />
              <Route
                path="/experience"
                element={<Navigate to="/#experience" replace />}
              />
              <Route path="/project" element={<Navigate to="/projects" replace />} />

              <Route path="/projects" element={<Projects />} />
              <Route path="/projects/:slug" element={<ProjectDetail />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="/contact" element={<Contact />} />

              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </PageTransition>
      </main>

      <Footer />
    </>
  )
}
