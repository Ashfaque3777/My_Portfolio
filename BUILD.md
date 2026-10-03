# BUILD.md — Ashfaque Ansari Portfolio Rebuild

## 0. Mission

Rebuild the existing `My_Portfolio` React/Vite project into a **high-class, modern, recruiter-ready personal portfolio** for:

**Mohd Ashfaque Ansari**  
B.Tech — Computer Science & Engineering with Artificial Intelligence & Data Science  
Khwaja Moinuddin Chishti Language University  
Expected graduation: 2027  
Based in Lucknow, Uttar Pradesh, India

This file is the source of truth for OpenCode. Read it completely before modifying the project.

---

# 0.5 Prerequisite Content Gate

**Read this section before writing any content code.**

The authoritative source for all experience, education, project, and skills
claims is the CV at `src/assets/Mohd_Ashfaque_Ansari_CV.pdf`.

## Authoritative source

```text
src/assets/Mohd_Ashfaque_Ansari_CV.pdf
```

This file **replaces** the previous `src/assets/Resume.pdf` (dated 2024-08-28,
produced by Chromium print-to-PDF). The old PDF predates all AI work and must
not be referenced.

Extract and reconcile the CV **before** creating any file in `src/data/`.
Where this document and the CV disagree, **the CV wins**.

## Resolved content inputs

| Item | Verified value | Source |
| --- | --- | --- |
| Email | `ashfaque3777@gmail.com` | CV contact line |
| Phone | `+91 9871948186` | CV contact line |
| LinkedIn | `https://www.linkedin.com/in/see-me/` | CV contact line |
| GitHub | `https://github.com/Ashfaque3777` | CV contact line |
| Live portfolio | `https://my-portfolio-197786.netlify.app/` | CV contact line |
| AIforAll site | `https://aiforallglobal.org/` | CV |
| Employer site | `https://www.hanumanttechnology.com/` | CV |
| AptInnova live | `https://aptinnova.com/` | CV |
| Languages spoken | Hindi (native), English (professional) | CV |

All of the above are verified. Do not mark them as TODO.

## Corrections this document makes to itself

These earlier sections were written before the CV was available and are now
superseded. See §12, §15, §17, §19 as amended.

1. **§15 lists two roles. The CV lists three.** A third role exists:
   Full-Stack Web Development Intern at Hanumant Technology Pvt. Ltd.
2. **§12 lists four projects. The CV lists five.** A fifth exists:
   AI_Nexus, an open-source contribution to `nazishfirdaus/AI_Nexus`.
3. **§17 says `C++`. The CV says `C`.** Use `C`. The legacy asset
   `src/assets/c++.png` is misleading and must not be used as a C icon.
4. **§19 implies an award exists.** The CV states recognition was
   "communicated by email, with certificate to be issued". The certificate is
   **not yet issued**. Never claim an awarded or received certificate.
5. **§19 calls it the "AFA Global Fellow Internship Program".** The CV calls it
   the "AIforAll Global International AI Internship Program". Use the CV wording.

## Still unresolved — use marked placeholders

Per §33, do not invent these. Use a clearly marked `TODO` constant.

| Item | Handling |
| --- | --- |
| E-Commerce repository URL | Omit the GitHub link. The previous 2024 CV listed `Ashfaque3777/E-Commerce_Website` but the current CV does not, so it is unverified. |
| Project screenshots for B/C/D/E | Use the placeholder visual component (§36). |
| Professional profile photo | Not available. Design must not require it (§8). |
| AI_Nexus live demo | None. Link the repository only. |

## Assets actually available

```text
src/assets/Mohd_Ashfaque_Ansari_CV.pdf   511 KB  authoritative CV
src/assets/ecommerce.png                553 KB  1823x916  project screenshot
src/assets/FSD1.png                      500x500  ICON (not a screenshot)
src/assets/FSD2.png                      500x500  ICON (not a screenshot)
src/assets/python.png                    250x250  ICON
src/assets/java.png                      500x500  ICON
src/assets/c++.png                       250x250  ICON (depicts C++, do not label "C")
src/assets/nodejs.png                    512x512  ICON
src/assets/express.png                   500x500  ICON
src/assets/mongodb.png                    96x96   ICON (too low-res, do not enlarge)
```

`FSD1.png` and `FSD2.png` are **technology icons**, not project screenshots.
They are the same dimensions as `java.png` and `express.png`. They must not be
used as project card visuals. `mongodb.png` is 96x96 and will visibly pixelate
above 96px; prefer a text chip.

Only `ecommerce.png` is a genuine project screenshot.

The goal is NOT to make a generic student portfolio. The goal is to create a polished portfolio that communicates:

- strong software engineering fundamentals
- full-stack development ability
- practical AI/ML and RAG experience
- agentic AI work
- ability to build real products, not only academic demos
- continuous learning and project execution
- professional readiness for internships, fresher roles, and software/AI opportunities

The website should feel like a **premium developer/product-engineer portfolio**, not a template.

---

# 1. Existing Repository Analysis

Repository: `Ashfaque3777/My_Portfolio`

Current stack:

- React 18
- Vite 5
- Tailwind CSS 3
- React Router DOM 6
- GSAP + `@gsap/react`
- Lucide React
- Remix Icon

Current structure:

```text
My_Portfolio/
├── public/
│   └── vite.svg
├── src/
│   ├── Components/
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   ├── Home.jsx
│   │   ├── Navbar.jsx
│   │   ├── ProgressBar.jsx
│   │   ├── Project.jsx
│   │   ├── ProjectCard.jsx
│   │   ├── Resume.jsx
│   │   └── Skills.jsx
│   ├── assets/
│   │   ├── FSD1.png
│   │   ├── FSD2.png
│   │   ├── Mohd_Ashfaque_Ansari_CV.pdf
│   │   ├── c++.png
│   │   ├── ecommerce.png
│   │   ├── express.png
│   │   ├── java.png
│   │   ├── mongodb.png
│   │   ├── nodejs.png
│   │   └── python.png
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
└── README.md
```

Note: `src/assets/Resume.pdf` no longer exists. It was replaced by
`src/assets/Mohd_Ashfaque_Ansari_CV.pdf`. See §0.5.

Current routes:

```text
/
 /skills
 /project
 /resume
 /contact
```

Current problems to fix:

1. The visual system is extremely basic.
2. Most styling is inline Tailwind utility styling rather than a coherent design system.
3. Home is a simple two-column hero with a gradient and yellow circle.
4. Skills currently use arbitrary percentage bars such as 98%, 96%, etc. Avoid presenting subjective skill percentages as factual measurements.
5. Projects currently show only one shallow E-Commerce card.
6. The E-Commerce description is incorrect/generic and does not describe the actual project.
7. Resume page is effectively a placeholder.
8. Contact form has no actual submission behavior.
9. Navigation is route-based but does not create a cohesive portfolio browsing experience.
10. Footer is minimal and outdated.
11. There is almost no real typography hierarchy.
12. There is no About/Experience/Education/Achievements/Featured Work storytelling.
13. Existing GSAP animation is simplistic and should be replaced with a coherent motion system.
14. The README is not merely the Vite starter README — it is **malformed**. It
    contains a truncated copy of the starter README, a stray `---`, then an
    orphan `# MyPortfolio` heading and trailing blank lines. Rewrite it from
    scratch; do not attempt to edit it in place.
15. The current page height assumptions (`100vh`) can cause clipping and poor mobile layouts.
16. There is no accessibility/motion-reduction strategy.
17. There is no robust project detail experience.
18. Current social links should be verified before being displayed.
19. The portfolio should not claim technologies, metrics, achievements, or experience that are not supported by actual project/work evidence.

Do not preserve weak design decisions merely because they exist in the current codebase.

---

# 2. Product Positioning

Position Ashfaque as:

> **AI & Full-Stack Developer building practical software, intelligent systems, and modern digital products.**

Supporting message:

> Computer Science & Engineering student specializing in Artificial Intelligence & Data Science, with hands-on experience across full-stack development, RAG systems, data/ML workflows, and agentic AI.

Tone:

- confident
- technically credible
- concise
- human
- mature
- student/professional rather than corporate
- no exaggerated claims
- no buzzword stuffing

Avoid phrases such as:

- "I am the best developer"
- "world-class"
- "10x developer"
- "expert in everything"
- fake client/testimonial language
- unsupported percentages
- fake years of experience
- fake company work
- fake certifications

---

# 3. Design Direction

## Overall aesthetic

Create a **premium editorial-tech interface**.

Visual references in spirit:

- modern product studio websites
- premium developer portfolios
- high-end SaaS landing pages
- editorial typography
- subtle futuristic/AI visual language

Do NOT clone any particular website.

The design should combine:

- near-black / deep graphite background
- warm off-white typography
- restrained electric/lime accent
- subtle borders
- large typography
- generous whitespace
- glass/blur only where useful
- technical grid/noise details
- elegant cards
- strong visual rhythm

Primary direction:

```text
Dark premium interface
+
Editorial typography
+
Subtle technical grid
+
High-quality motion
+
Large project storytelling
```

Do not make it look like a gaming website.

Do not overuse neon.

Do not use giant glowing text everywhere.

Do not use excessive glassmorphism.

---

# 4. Color System

Use CSS variables/design tokens.

Suggested palette:

```css
--bg: #08090a;
--surface: #101214;
--surface-soft: #151719;
--text: #f5f5f0;
--text-muted: #a5a7a8;
--border: rgba(255,255,255,0.10);
--accent: #d7ff3f;
--accent-soft: rgba(215,255,63,0.12);
--white: #ffffff;
```

The accent must be used intentionally:

- CTA
- active navigation
- small labels
- project metadata
- hover states
- progress indicators
- important decorative elements

Do not color every component accent-green.

---

# 5. Typography

Use a premium sans-serif stack.

Prefer:

- Geist Sans if practical
- otherwise Inter
- fallback: system sans-serif

### Font delivery — required decision

Font loading must be resolved during Phase 1, not improvised.

Use **self-hosted `@fontsource-variable/geist`** (or `@fontsource-variable/inter`)
imported from npm, not a Google Fonts CDN link.

Rationale:

- no render-blocking third-party request
- no layout shift, because the variable font file is versioned and immutable
- works offline and in Netlify's build cache
- avoids adding a runtime dependency on fonts.googleapis.com

Rules:

- always `font-display: swap`
- set `--font-sans` and `--font-mono` in `globals.css`
- subset to `latin` only; do not ship Cyrillic/Greek ranges
- preload nothing — the CSS import is sufficient at this payload size
- if the npm package cannot be installed, fall back to the system stack and set
  `--font-sans: "Inter", system-ui, ...` rather than adding a CDN link

For code/technical metadata:

- Geist Mono / JetBrains Mono / monospace

Typography hierarchy:

```text
Display:
clamp(2.25rem, 8vw, 8rem)

Section heading:
clamp(1.75rem, 5vw, 5rem)

Project heading:
clamp(1.5rem, 4vw, 4rem)

Body:
16–20px

Metadata:
11–14px
```

The `clamp()` **minimum** matters. Do not use `3.5rem` as the display floor:
at a 320px viewport `8vw` is only 25.6px, so the floor always wins and a 56px
headline turns the three-line hero into five lines that consume the whole
screen. The floors above are chosen so the longest word still fits a 320px
viewport with page padding.

Use tight letter spacing on large headlines.

Use uppercase/small mono labels for section identifiers.

Canonical section identifiers — this is the single source of truth for
numbering. Earlier drafts of this document used inconsistent numbers.

```text
01 / ABOUT
02 / SELECTED WORK
03 / EXPERIENCE
04 / SKILLS
05 / EDUCATION
06 / RECOGNITION
07 / CONTACT
```

---

# 6. Navigation

Create a fixed/sticky premium navbar.

Desktop:

```text
ASHFAQUE.A
                         WORK   ABOUT   EXPERIENCE   CONTACT   RESUME
```

Features:

- transparent initially
- becomes slightly opaque/blurred after scrolling
- subtle bottom border
- active section indicator (**required**, see §26 — this is not optional)
- smooth scrolling for same-page sections
- route navigation only where appropriate
- mobile menu with animated open/close
- keyboard accessible
- Escape closes mobile menu
- CTA: "Let's Talk"

Do not use the current oversized 10vh navbar.

Navbar should occupy approximately 64–80px.

### Anchors vs routes

Nav links to homepage sections must use `/#id` hrefs so they work from any
route, e.g. `/#work` rather than `#work`. An in-page `<a href="#work">` breaks
when the user is on `/projects`, because the target element does not exist in
that document.

Every anchor target must reserve space for the fixed navbar, otherwise the
section heading lands underneath it:

```css
section[id] {
  scroll-margin-top: 96px;
}
```

96px = 80px navbar + 16px breathing room. This rule is mandatory; §26 requires
smooth anchor scrolling and it does not work without it.

The active-section indicator is required (see §26), not "if feasible".

---

# 7. Page Architecture

Build a primary single-page portfolio experience with meaningful section navigation.

Routes:

```text
/                  → Main portfolio
/projects          → All projects (supports ?tech= filter)
/projects/:slug    → Project detail
/resume            → Resume / CV
/contact           → Contact
*                  → NotFound (catch-all)
```

The catch-all `*` route is **required** — §39 mandates a 404 page, so it must be
registered. Register it last so it cannot shadow a real route.

Anchor targets live on the homepage only, so same-page navigation is used for
`#about`, `#work`, `#experience`, `#skills`, `#education`, `#recognition`, and
`#contact`. Nav items pointing at sections navigate to `/#id`; when already on
`/`, they scroll instead of remounting the page. See §26.

The homepage should contain:

1. Hero
2. Short positioning / marquee
3. About
4. Featured projects
5. Experience
6. Skills / toolkit
7. Education
8. Recognition / achievements
9. Currently learning / building
10. Contact CTA
11. Footer

Do NOT create unnecessary pages simply to split basic sections.

---

# 8. Hero Section

The hero must immediately communicate who Ashfaque is.

Content direction:

Eyebrow:

```text
AI × FULL-STACK DEVELOPER
```

Main headline:

```text
I build software
that thinks, works,
and ships.
```

Alternative if needed:

```text
Building intelligent
products at the intersection
of AI and software.
```

Supporting copy:

```text
I'm Mohd Ashfaque Ansari, a Computer Science & Engineering student
specializing in Artificial Intelligence & Data Science. I build
full-stack applications, RAG systems, and agentic AI workflows
with a focus on practical, usable software.
```

Primary CTA:

```text
View selected work
```

Secondary CTA:

```text
Download resume
```

Hero metadata:

```text
Lucknow, India
Available for internships / opportunities
```

Visual:

Do NOT use the existing yellow circle.

Instead create a subtle technical visual system such as:

- animated grid
- orbiting nodes
- abstract data-flow lines
- code-like fragments
- subtle noise
- radial glow
- moving geometric element

Keep it lightweight and performant.

If a professional profile photo is available later, structure the design so it can be inserted without redesigning the hero.

### Hero height

§28 and §43 forbid `100vh` / `h-screen` for content sections. The hero is the
one place that legitimately wants viewport height, so it must be written
explicitly:

```css
min-height: 100svh;
```

Rules:

- use `100svh`, **not** `100vh` — mobile browser chrome makes `100vh` taller
  than the visible viewport, which pushes hero content below the fold
- do not put it in a Tailwind `h-screen` class
- pair with `padding-block` so content clears the 64–80px navbar
- below 768px, allow `min-height: auto` and let content flow naturally; a
  full-height hero is not required on small screens
- never apply a fixed height to sections that contain the project grid,
  experience timeline, or any text block

---

# 9. Hero Motion

Use GSAP for controlled, premium motion.

On first load:

1. page background fades in
2. navbar slides/fades down
3. eyebrow reveals
4. headline reveals line-by-line
5. supporting paragraph fades upward
6. CTA buttons reveal
7. technical visual begins subtle motion

Animation principles:

- use transform + opacity
- avoid expensive layout animations
- avoid constant distracting movement
- use staggered reveals
- use easing such as `power3.out`, `expo.out`, or similarly smooth curves
- motion duration mostly 0.5–1.2s
- longer cinematic transitions may reach ~1.5s

Add `prefers-reduced-motion` support.

---

# 10. Intro / Marquee Section

After hero, add a narrow scrolling marquee.

Example:

```text
FULL-STACK DEVELOPMENT  •  ARTIFICIAL INTELLIGENCE  •  RAG  •  AGENTIC AI  •  DATA  •
```

Use slow horizontal motion.

It should feel like a design element, not an advertisement.

---

# 11. About Section

Section label:

```text
01 / ABOUT
```

Heading:

```text
A developer who likes
understanding the system
behind the interface.
```

Content:

Ashfaque is a B.Tech Computer Science & Engineering student with specialization in Artificial Intelligence & Data Science.

Mention:

- full-stack development
- AI/ML
- RAG
- agentic systems
- data-driven applications
- interest in building practical software
- learning through real projects

Keep the copy personal and human.

Add a compact facts area:

```text
Based in       Lucknow, India
Education      B.Tech CSE — AI & Data Science
Graduation     2027
Focus          AI + Full Stack
```

These four facts are verified in the CV (§0.5). Do not add a fifth.

Do not expose unnecessary personal information. The phone number is verified and
belongs in `data/site.js`, but do not surface it in this facts block — city and
country are enough here. It is available on `/contact` and via the mailto link.

---

# 12. Selected Work

Section label:

```text
02 / SELECTED WORK
```

Heading:

```text
Projects built to solve
real problems.
```

Use large editorial project cards, not tiny generic cards.

Featured projects should include the strongest available work.

**There are five projects, verified against the CV (§0.5).** All five are
listed here. Verified metrics from the CV may be used, because they are
supported by evidence — see §33 rule 3.

## Project A — RAG-based AI Chatbot

Title:

```text
RAG-based AI Chatbot
```

Category: AI / RAG · Year 2026 · Personal project

Positioning:

A document question-answering system that answers questions from uploaded PDFs
and cites its sources, built as a working Streamlit application.

Verified details from the CV:

- PDF ingestion with PyMuPDF
- Tesseract OCR fallback
- chunking with metadata
- BGE-large embeddings
- ChromaDB vector store
- BM25 + dense hybrid retrieval
- cross-encoder reranking
- 3 LLM providers — OpenAI, Gemini, Groq — with routing and fallback
- citations, multiple-document support, chat memory
- RAGAS evaluation across 50 benchmark questions

Repository: `https://github.com/Ashfaque3777/Rag-based-Chatbot`

Visual: placeholder (§36).

Card should communicate the problem and outcome first, not the architecture.

---

## Project B — Agentic Mortgage Underwriting System

Title:

```text
Agentic Mortgage Underwriting
```

Category: Agentic AI · Year 2026 · Team project

Positioning:

An agentic AI workflow that coordinates document intelligence, financial
analysis, property evaluation, and compliance checks into an underwriting
decision.

Verified details — Ashfaque's individual contribution is specifically the
**Decision Agent**:

- implemented using LangGraph
- state/schema handling, risk assessment, decision logic, structured outputs
- processes 4 underwriting input categories
- produces 3 decision outcomes — Approve, Deny, Suspend
- developed via Git-based team workflow, merged into the project repository

Repository: `https://github.com/AFA-interns/Mortgage-Underwriting-System`

The repository is owned by the `AFA-interns` organisation, which confirms this
is a **team project**. Do not imply ownership of the entire system, and do not
present the other agents as Ashfaque's work. The case study's "My Contribution"
section is mandatory and must be explicit about scope.

Visual: placeholder (§36).

---

## Project C — E-Commerce Platform

Title:

```text
E-Commerce Platform
```

Category: Full-Stack · Personal project

Positioning:

A full-stack e-commerce application covering the complete purchase path, from
authentication through to order management.

Verified details from the CV:

- React + Vite frontend, Node.js/Express backend, MySQL
- REST APIs, CRUD operations, frontend-backend integration
- authentication with JWT
- role-based authorization for 2 user roles
- cart, orders, admin panel, image upload
- theme switching, form validation, error handling, responsive UI

Repository: **unverified**. The current CV lists no repository for this project
and the 2024 CV's link is not carried forward. Do not show a GitHub link or a
Live demo link for this project. Show only the case study.

Visual: `src/assets/ecommerce.png` — the only genuine project screenshot in the
repository. Must be optimized per §30 and §36.

The current description in `Project.jsx` is incorrect and must be replaced.

---

## Project D — AptInnova

Title:

```text
AptInnova
```

Category: Frontend · Year 2026 · Professional

Positioning:

The frontend foundation for a live technology and services website, adopted as
the base code for the company's actual site.

Verified details from the CV:

- React, Vite, JavaScript, CSS
- responsive design
- 10+ reusable UI components
- animations
- frontend adopted as the base code for the company's actual website
- collaborated through Git/GitHub workflows and deployment

Live site: `https://aptinnova.com/`

Visual: placeholder (§36).

---

## Project E — AI_Nexus (open-source contribution)

Title:

```text
AI_Nexus — Open-Source Contribution
```

Category: AI / RAG · Year 2026 · Open source

Positioning:

Contributions to a shared RAG codebase, merged into another maintainer's
repository. This entry demonstrates open-source collaboration rather than a solo
build, and should be presented as such.

Verified details from the CV:

- 4 commits, all merged
- project configuration
- document chunking and metadata
- ChromaDB integration
- hybrid retrieval
- Presidio / PII handling
- quota tracking
- fallback and aggregation logic
- automated tests
- RAGAS evaluation

Repository: `https://github.com/nazishfirdaus/AI_Nexus`

The repository belongs to `nazishfirdaus`, a teammate. Scope the contribution to
the 4 merged commits. There is no live demo — link the repository only.

Visual: placeholder (§36).

---

## Ordering

`featured: true` applies to A, B, and C on the homepage. D and E appear on
`/projects` but are not promoted onto the homepage, so the featured set stays
focused on the strongest evidence.

Provide on each card, as applicable:

```text
View case study
GitHub
Live demo
```

Only show links that are real and verified. Project C has no external links.
Project E has no live demo.

---

# 13. Project Card Design

Each featured project should have:

```text
PROJECT TYPE
Project title

One-line value proposition

[large visual]

TECHNOLOGY / YEAR

View case study →
```

On hover:

- image scales slightly
- metadata shifts subtly
- arrow moves
- border/accent changes
- no excessive bounce

Cards should have varying visual composition.

Example:

```text
Large project card
   image 60%
   content 40%
```

Alternate orientation:

```text
content 40%
image 60%
```

This creates editorial rhythm.

---

# 14. Project Detail Pages

Create reusable project detail template.

Route:

```text
/projects/:slug
```

Each case study should contain:

### Header

```text
PROJECT
YEAR
ROLE
STACK
```

### Problem

What problem was being solved?

### Approach

How was the system designed?

### Architecture

Use a visual architecture diagram or structured blocks.

### Key Features

Use 3–6 concise features.

### My Contribution

Especially important for team projects.

### Technical Decisions

Explain meaningful choices.

### Challenges

What was difficult?

### Outcome

Only use real outcomes/metrics.

### Links

GitHub / Live Demo / Demo Video where available.

### Next Steps

Optional.

---

# 15. Experience Section

Section label:

```text
03 / EXPERIENCE
```

Present experience as a timeline.

**There are three verified roles, in reverse chronological order.** An earlier
draft of this document listed only two; the third was found in the CV (§0.5).
Use the CV wording exactly.

## Role 1 — International AI Intern, AIforAll Global

18 May 2026 – Present · Remote

```text
Selected as a standout performer in the AIforAll Global International AI
Internship Program, recognition communicated by email, with certificate
to be issued.

Collaborated on 2 real-world AI projects involving RAG and agentic AI workflows
while applying AI engineering concepts and team development practices.

Implemented AI engineering components across a RAG chatbot and agentic mortgage
underwriting system involving retrieval, LLM, OCR, structured outputs, and agent
workflows.
```

Critical wording rules:

- the program is the **International AI Internship Program**, not the "AFA Global
  Fellow Internship Program"
- the certificate is **"to be issued"** — it does not exist yet
- recognition was "communicated by email"
- never write "awarded", "received", or "holds a certificate"

Technologies: RAG, agentic AI, LangGraph, OCR, LLM APIs, structured outputs.

## Role 2 — Data Science, Hanumant Technology Pvt. Ltd.

15 Jul 2026 – Present

```text
Created 12+ data visualizations and 2 dashboards using Power BI and Tableau
based on prepared datasets.

Worked with Python, Excel, MySQL, and MongoDB for data preparation and
visualization workflows.

Applied hands-on data cleaning, missing-value handling, EDA, visualization,
joins, and aggregations while building dashboard outputs.
```

The `12+` and `2` figures are verified in the CV and may be shown.

Technologies: Python, Power BI, Tableau, MySQL, MongoDB, Excel, Pandas, NumPy.

## Role 3 — Full-Stack Web Development Intern, Hanumant Technology Pvt. Ltd.

01 Jan 2024 – 30 Jun 2024

```text
Built 9+ small web applications and responsive webpages, including calculators,
analog/digital clocks, digital fan, to-do list, tic-tac-toe, sign-up page,
restaurant pages, and e-commerce functionality.

Practiced frontend development, responsive UI implementation, JavaScript-based
interactions, and full-stack application fundamentals.
```

The `9+` figure is verified in the CV and may be shown.

Technologies: HTML, CSS, JavaScript, React, full-stack fundamentals.

## Rules for all roles

Do not invent company names, dates, responsibilities, or metrics.

Both roles 2 and 3 are at Hanumant Technology Pvt. Ltd. Render them as two
separate timeline entries, not one combined entry — they are distinct
engagements with a gap between them, and merging them would misrepresent the
timeline.

For each role:

```text
Role
Organization
Date
2–4 bullet points
Technologies
```

---

# 16. Education

Section label:

```text
05 / EDUCATION
```

Primary entry:

```text
Bachelor of Technology
Computer Science & Engineering
Artificial Intelligence & Data Science

Khwaja Moinuddin Chishti Language University
Expected 2027
Lucknow, India
```

Relevant coursework, verbatim from the CV:

- Data Structures & Algorithms
- DBMS
- Operating Systems
- Computer Networks
- Artificial Intelligence
- Machine Learning
- Deep Learning
- Cloud Computing

Do not list every course beyond these eight.

Spoken languages, from the CV — include as a small metadata row:

```text
Hindi — Native
English — Professional
```

---

# 17. Skills Section

Do NOT use subjective percentage progress bars.

Replace them with grouped capability cards.

Section label:

```text
04 / SKILLS
```

All groups below are transcribed from the CV (§0.5). Do not add a technology the
CV does not list.

### Languages

- Python
- C
- HTML
- CSS
- JavaScript
- SQL

Note: the CV lists **C**, not C++. Do not label `c++.png` as "C" — either omit
the icon or use a text chip for C.

### Frontend

- React
- Vite
- Tailwind CSS

### Backend

- Node.js
- Express.js
- REST APIs
- Authentication / JWT

### Databases

- MySQL
- MongoDB
- PostgreSQL
- ChromaDB

### AI / GenAI

- OpenAI API
- Gemini API
- Groq API
- RAG
- Embeddings
- Vector databases
- OCR
- LLMs
- Agentic AI
- LangGraph
- LangChain
- Prompt engineering
- Structured LLM output
- Function / tool calling

### Data

- Power BI
- Tableau
- Pandas
- NumPy
- Data cleaning
- EDA
- Data visualization
- Excel

### ML / DL

- Scikit-learn
- TensorFlow
- Keras
- PyTorch
- Hugging Face

### Tools

- Git
- GitHub
- VS Code
- Postman
- Docker
- GitHub Actions
- Vercel
- Railway
- Netlify

Only include technologies actually used — every item above is CV-verified.

Use iconography sparingly. Most of these have no suitable icon asset; a text
chip is acceptable and preferable to a mismatched logo.

---

# 18. Skills Interaction

Instead of percentage bars, create an interactive technology wall.

Interactions:

- hover reveals short usage context
- click filters projects by technology
- subtle icon movement
- active technology highlights matching projects

Example:

```text
Python
Used in → RAG / ML / data workflows
```

This is more credible than:

```text
Python 95%
```

### Filter state — required implementation

The filter must live in the **URL**, not in React state or a context provider.

```text
/projects?tech=python
/projects?tech=react
/projects                 → no filter
```

Rationale:

- the filtered view is shareable and survives reload
- it needs no global store, so §31's structure stays flat
- the browser back button restores the previous filter, which users expect
- it keeps §32's data model as the single source of truth

Implementation:

- read with `useSearchParams` from react-router-dom
- write with `setSearchParams({ tech })`, or `{ replace: true }` when clearing
- the `Skills` section links to `/projects?tech=<slug>`; it does not filter in
  place, so the two sections stay independent and neither owns shared state
- `/projects` reads the param, derives the matching set, and shows an active
  filter chip with a clear control
- technology slugs are compared case-insensitively against `project.technologies`

`App.jsx` must already wrap the router, so no additional provider is needed.

---

# 19. Recognition / Achievements

Section label:

```text
06 / RECOGNITION
```

Include verified achievements only.

Known item, verbatim from the CV:

```text
Selected as a standout performer in the AIforAll Global International AI
Internship Program, recognition communicated by email, with certificate
to be issued.
```

Mandatory wording constraints:

- the certificate is **not yet issued** — it is "to be issued"
- do not write "awarded", "received", "certified", or "holds a certification"
- do not describe it as a "Fellow Program"
- present it as recognition, not as a qualification

No other awards appear in the CV. Do not fabricate any.

Use a minimal horizontal list or cards.

---

# 20. Currently Building

Add a small forward-looking section.

Heading:

```text
Currently building.
Currently learning.
```

Possible entries:

```text
RAG systems
Agentic AI workflows
Full-stack product development
Data & ML systems
```

If a specific active project is current, use it only if its status is still accurate.

This section should communicate momentum without exaggeration.

---

# 21. Contact CTA

Create a strong final CTA.

Heading:

```text
Have a problem worth building?
Let's talk.
```

Supporting text:

```text
I'm interested in internships, software engineering opportunities,
AI projects, and meaningful product collaborations.
```

Buttons:

```text
Email me
LinkedIn
GitHub
Download resume
```

Use actual links from the current verified profile. All four exist and are
verified in §35 / §0.5 — read them from `data/site.js`.

Do not use placeholder `#` links in production.

Note the contrast requirement here: a lime `--accent` button needs near-black
text to pass AA, not white. Do not put white on the accent colour.

---

# 22. Contact Page

Keep `/contact` as a dedicated route, but make it useful.

Include:

- email
- LinkedIn
- GitHub
- optional contact form
- location at city/country level
- response CTA

If no backend/email service is configured:

- do NOT pretend the form submits
- use `mailto:` or clearly show a contact method
- optionally prepare a clean form component for later integration

If a form is implemented without a backend, show a clear client-side success state only when appropriate; never falsely claim an email was sent.

**Decision for this build: ship `mailto:` only, no form.** A real verified address
exists (`ashfaque3777@gmail.com`, §0.5), so a mailto link with a prefilled subject
is honest, dependency-free, and works with no backend. Do not render a text input
that goes nowhere.

Do not build a form component "for later" — §30 forbids speculative work, and an
unused form is dead code. The old `Contact.jsx` form posts to `action=""`, which
reloads the page and discards the input. Delete it.

Also remove the hotlinked Unsplash image currently in `Contact.jsx` (§36).

Show location at city/country level: `Lucknow, Uttar Pradesh, India`. The phone
number is verified and may be shown here as a `tel:` link, which is the one place
it belongs.

---

# 23. Resume Page

Replace the placeholder Resume page.

It should contain:

```text
Resume

Short description

[Preview / embedded PDF if supported]

Download PDF
```

Use:

`src/assets/Mohd_Ashfaque_Ansari_CV.pdf`

**Not** `src/assets/Resume.pdf` — that file was deleted and replaced. Any
reference to it is stale. See §0.5.

Add:

- download button
- open-in-new-tab button
- last-updated indicator only if known

On "last-updated": the CV's internal creation timestamp is not a reliable
content date, so do not display one. Omit the indicator rather than guess.

Do not create a second fake resume.

### PDF handling

- `import resumePdf from "../assets/Mohd_Ashfaque_Ansari_CV.pdf"` gives a hashed
  Vite asset URL; use it for both download and open-in-new-tab
- the download button needs `download` attribute plus `rel="noopener noreferrer"`
- the file is 511 KB — acceptable for a single on-demand download, but do not
  preload or embed it eagerly
- prefer a link to the PDF over an `<iframe>` embed; an embedded PDF cannot be
  styled, is heavy on mobile, and blocks the section's scroll reveal

---

# 24. Footer

Premium footer.

Layout:

```text
ASHFAQUE.A

AI × FULL-STACK DEVELOPER

Lucknow, India

GitHub
LinkedIn
Email

© 2026 Mohd Ashfaque Ansari
```

Add:

```text
Back to top ↑
```

Animate back-to-top smoothly.

---

# 25. Motion System

Use GSAP because it is already installed.

Create reusable motion utilities/hooks where practical.

Motion categories:

## Page entrance

- fade
- translate
- stagger

## Scroll reveal

- section headings
- paragraphs
- project cards
- timeline items

## Image motion

- subtle scale
- clip-path reveal where performant
- parallax only when it improves the design

## Hover

- translate 2–6px
- scale 1.01–1.04
- border/accent transition
- arrow movement

## Navigation

- mobile menu clip/fade
- active indicator movement

## Page transitions

Use a subtle route transition:

```text
current page fades/slides out
new page reveals
```

### Required implementation

React Router 6 has **no** built-in transition primitive, and `AnimatePresence`
belongs to framer-motion, which §30 forbids. Implement it directly with GSAP:

- in `PageTransition`, run `useGSAP` with `dependencies: [location.pathname]`
- on each pathname change: `gsap.fromTo` the wrapper from
  `{ opacity: 0, y: 12 }` to `{ opacity: 1, y: 0 }`, `duration: 0.4`,
  `ease: "power3.out"`
- do not animate the outgoing page — React unmounts it immediately, so an
  exit animation would require holding two subtrees in state, which is not
  worth the complexity at this scale
- skip the animation entirely when reduced motion is requested

Keep it to a single wrapper element. Do not animate every child.

Do not make every element animate independently.

Motion should establish hierarchy.

---

# 26. Scroll Experience

Implement:

- smooth anchor scrolling
- scroll progress indicator
- section reveal
- sticky navigation
- **active section state (required — see §6)**
- back-to-top control

### Anchor scrolling — mandatory details

Smooth scrolling alone is not sufficient. Two rules are required in
`globals.css`:

```css
html {
  scroll-behavior: smooth;
}

@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }
}

section[id] {
  scroll-margin-top: 96px;
}
```

- `scroll-margin-top` is what stops anchored sections from landing underneath
  the fixed navbar. Omitting it makes every nav link look broken.
- the reduced-motion override is not optional — otherwise the OS setting is
  ignored and navigation still animates
- do not implement JS scroll-to with manual easing; it fights the native
  behaviour and breaks keyboard and anchor semantics

### Active section state

Implement with `IntersectionObserver` via `hooks/useActiveSection.js`, not a
scroll listener that calls `setState` on every frame.

- observe the section elements, keep the ids in a `Set`
- on intersect, set the id with the largest visible intersection ratio
- on the homepage only; other routes have no section ids to observe
- debounce or threshold-tune so the indicator does not flicker between two
  adjacent sections

Do not hijack native scrolling.

Do not implement heavy full-page scroll snapping.

---

# 27. Background Design

Create a subtle reusable background system:

- radial gradients
- technical grid
- noise texture if lightweight
- faint lines
- occasional accent glow

Example:

```text
dark background
+ 1px technical grid
+ subtle radial light
+ low-opacity noise
```

The background must never reduce text readability.

---

# 28. Responsive Design

Must work properly at:

```text
320px
375px
430px
768px
1024px
1280px
1440px
1920px
```

1920px is listed here for consistency with the §42 checklist.

Mobile priorities:

1. typography remains readable
2. CTA buttons stack when necessary
3. project cards become single-column
4. navigation becomes compact
5. decorative animation reduces
6. no horizontal overflow
7. images maintain aspect ratios
8. touch targets >= ~44px
9. forms remain usable

Never rely on `h-screen` for large content sections.

Use natural document flow.

---

# 29. Accessibility

Must include:

- semantic HTML
- proper heading hierarchy
- visible focus states
- keyboard navigation
- accessible buttons
- accessible mobile menu
- `aria-label` where needed
- descriptive image alt text
- sufficient contrast
- reduced-motion support
- no color-only information
- external links with appropriate handling

---

# 30. Performance

Avoid unnecessary dependencies.

Keep (and only these):

- React / React DOM
- React Router DOM
- GSAP **and `@gsap/react`** — `@gsap/react` is currently used by every existing
  component and must not be dropped when the old components are deleted
- Lucide React
- Tailwind CSS

Remove:

- **remixicon** — the new design uses Lucide only. Remove the dependency from
  `package.json` and delete `import "remixicon/fonts/remixicon.css"` from
  `App.jsx`. Leaving both in place ships a font package the site does not use.

Icon decision: **Lucide React is the only icon library.** Do not mix in
remixicon classes or hand-rolled SVG for interface icons.

### ScrollTrigger — no new dependency needed

§9, §25, and §26 require scroll reveals and optional parallax. These need
ScrollTrigger, which is **bundled inside the free `gsap` package** — it is not a
paid plugin and requires no install.

```js
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
```

Verify `node_modules/gsap/ScrollTrigger.js` exists before relying on it. Do not
add `@gsap/ScrollTrigger` or any other GSAP plugin package to `package.json`.

### Fonts

One variable font package is acceptable. See §5. This is the only permitted
addition to `dependencies`.

Performance rules:

- lazy-load project detail routes with `React.lazy` + `Suspense`
- optimize large images
- use transform/opacity for animations
- avoid scroll handlers that trigger excessive React renders
- clean up GSAP contexts (always `gsap.context()` via `useGSAP`)
- kill ScrollTrigger instances on unmount; `gsap.matchMedia()` plus `useGSAP`'s
  automatic revert handles this
- avoid infinite animations except subtle decorative motion
- respect reduced-motion
- avoid huge background videos

### Named image optimization

`src/assets/ecommerce.png` is the single largest asset in the repository at
**1823x916, 553 KB**, and it is the hero visual of the featured work. It must
not ship at that weight.

- convert to WebP or AVIF at build time; 1823px wide is wider than any
  breakpoint needs
- serve responsive `srcset` sizes, e.g. 640 / 1024 / 1600
- keep the PNG only if a real screenshot demands lossless text fidelity; a
  photographic/dashboard screenshot does not
- add explicit `width`/`height` so the layout does not shift on load

All other PNGs are icons at 96-512px. `mongodb.png` is only 96x96 — never render
it above 96px.

---

# 31. Code Architecture

Refactor toward:

```text
src/
├── components/
│   ├── layout/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── PageTransition.jsx
│   │   ├── ScrollProgress.jsx
│   │   └── Backdrop.jsx
│   ├── sections/
│   │   ├── Hero.jsx
│   │   ├── Marquee.jsx
│   │   ├── About.jsx
│   │   ├── FeaturedProjects.jsx
│   │   ├── Experience.jsx
│   │   ├── Education.jsx
│   │   ├── Skills.jsx
│   │   ├── Recognition.jsx
│   │   ├── CurrentlyBuilding.jsx
│   │   └── ContactCTA.jsx
│   ├── project/
│   │   ├── ProjectCard.jsx
│   │   ├── ProjectGrid.jsx
│   │   ├── ProjectCaseStudy.jsx
│   │   └── ProjectFilter.jsx
│   └── ui/
│       ├── Button.jsx
│       ├── SectionHeading.jsx
│       ├── ProjectPlaceholder.jsx
│       ├── BackToTop.jsx
│       └── Tag.jsx
├── data/
│   ├── site.js
│   ├── projects.js
│   ├── experience.js
│   ├── skills.js
│   ├── education.js
│   └── recognition.js
├── pages/
│   ├── Home.jsx
│   ├── Projects.jsx
│   ├── ProjectDetail.jsx
│   ├── Resume.jsx
│   ├── Contact.jsx
│   └── NotFound.jsx
├── hooks/
│   ├── useScrollProgress.js
│   ├── useReducedMotion.js
│   └── useActiveSection.js
├── lib/
│   ├── animations.js
│   └── seo.js
├── assets/
└── styles/
    └── globals.css
```

The exact structure can differ if OpenCode has a better implementation, but keep content data separate from presentation.

Two deliberate deviations from an earlier draft of this tree, both to avoid
carrying unused API surface:

- **`Reveal.jsx` was removed.** A wrapper component would insert an extra DOM
  node around every revealed element purely to hold a data attribute. Instead,
  sections put `data-reveal` / `data-reveal-group` on the real elements and
  `revealOnScroll()` in `lib/animations.js` queries them, scoped to the section.
- **`MagneticButton.jsx` was never built.** The hover behaviour is a plain
  colour transition; a cursor-tracking transform adds a per-frame layout
  dependency for a second of decoration.

`Button.jsx` *is* used — every call to action goes through it so the primary and
outline treatments cannot drift apart between pages, and `external` hrefs get
`target`/`rel` applied automatically rather than per call site.

### Migration from the current structure

Files being deleted outright:

```text
src/Components/Home.jsx
src/Components/Navbar.jsx
src/Components/Footer.jsx
src/Components/Contact.jsx
src/Components/Skills.jsx
src/Components/Project.jsx
src/Components/ProjectCard.jsx
src/Components/Resume.jsx
src/Components/ProgressBar.jsx
src/App.css
src/index.css
```

`ProgressBar.jsx` is deleted outright — the percentage-bar concept it implements
is removed by §17, so it must not be carried over.

`src/index.css` becomes `src/styles/globals.css`; delete the original rather than
leaving an empty file. `src/App.css` is deleted and its concerns move into
`globals.css` and Tailwind utilities.

### Renaming `Components` to `components`

`src/Components/` → `src/components/` is a **case-only rename**. On
case-insensitive filesystems (Windows, default macOS) `git mv Components
components` silently does nothing or corrupts the index. Use the two-step form:

```bash
git mv src/Components src/_Components_old
git mv src/_Components_old src/components
```

Then delete the old files. Because every old component is being replaced anyway,
the simplest reliable route on Windows is to delete `src/Components/` outright
and create `src/components/` fresh.

Also update the import in `main.jsx` / `App.jsx` and confirm `tailwind.config.js`
still matches — its glob `./src/**/*.{js,ts,jsx,tsx}` is case-insensitive in
practice, but verify classes are still generated after the move.

### Prop types and ESLint

`npm run lint` runs with `--max-warnings 0`, and `plugin:react/recommended`
enables `react/prop-types`. Data-driven components receive objects and arrays
as props, which will trigger many errors.

Choose one and apply it consistently:

- **recommended:** disable `react/prop-types` for this project, since the
  codebase is plain JavaScript with centrally-validated data modules and
  TypeScript is out of scope. Add `'react/prop-types': 'off'` to `.eslintrc.cjs`
- alternative: hand-write propTypes for every component, which is a lot of
  ceremony for data that is authored in-repo, not fetched

Do not leave it half-done — a lint error per component is not shippable under
`--max-warnings 0`.

---

# 32. Content Data Model

Projects should be data-driven.

Example:

```js
{
  slug: "rag-based-chatbot",
  title: "RAG-based AI Chatbot",
  category: "AI / RAG",
  year: "2026",
  role: "Personal project",
  summary: "...",
  description: "...",
  technologies: ["Python", "RAG", "ChromaDB", "LangChain"],
  image: null,
  github: "https://github.com/Ashfaque3777/Rag-based-Chatbot",
  live: null,
  featured: true,
  contribution: "...",
  sections: {
    problem: "...",
    approach: "...",
    architecture: [...],
    features: ["...", "...", "..."],
    decisions: ["...", "..."],
    challenges: "...",
    outcome: "..."
  }
}
```

This makes future updates easy.

### Schema rules

- `github` and `live` are `null` when unverified — never `""`, never `"#"`, never
  a guessed URL. Components must treat `null` as "do not render this link".
  Project C (E-Commerce) has `github: null`; Project E (AI_Nexus) has
  `live: null`.
- `image: null` means render `<ProjectPlaceholder />` (§36)
- `technologies` is the normalized array the `?tech=` filter matches against
  (§18). Keep spelling consistent with `data/skills.js` so the two join cleanly.
- `sections.architecture` is an array of `{ label, detail }` blocks, not a
  string, so the case study can render it as structured blocks (§14)
- `sections.features` is 3-6 items (§14)
- `role` distinguishes `Personal project`, `Team project`, `Open source`, and
  `Professional` — this is what keeps team contributions honestly scoped (§33
  rule 9)
- `featured: true` only on A, B, and C (§12)

Every string in `data/projects.js` must trace back to the CV (§0.5). If a field
cannot be filled from verified evidence, use `null` or omit the key — never
invent it.

---

# 33. Verified Content Rules

Before adding any statement:

1. Check whether it is supported by the repository/project/CV.
2. If uncertain, use cautious wording.
3. Never invent metrics.
4. Never invent client names.
5. Never invent employment.
6. Never invent certifications.
7. Never invent project outcomes.
8. Never present subjective skill percentages as objective facts.
9. Team-project contribution must be explicitly scoped.
10. Links must be verified.

If information is missing, create a clearly marked placeholder in code/data rather than inventing it.

---

# 34. SEO

Update `index.html`.

Title:

```text
Mohd Ashfaque Ansari — AI & Full-Stack Developer
```

Meta description:

```text
Portfolio of Mohd Ashfaque Ansari — Computer Science & Engineering student building full-stack applications, RAG systems, and agentic AI workflows.
```

Add:

- Open Graph metadata
- theme-color
- proper favicon if available
- semantic page title
- descriptive metadata

Do not use the default "My Portfolio" title.

### Favicon — required

`index.html` currently has its favicon `<link>` commented out and `public/`
contains only `vite.svg`. Create a real favicon:

- an SVG monogram favicon at `public/favicon.svg`, using `--bg` for the
  background and `--accent` for the mark
- reference it with `<link rel="icon" type="image/svg+xml" href="/favicon.svg" />`
- delete `public/vite.svg`
- add `<meta name="color-scheme" content="dark" />` so the browser UI matches
  the dark theme and the page does not flash white on load

### Open Graph — required fields

`og:image` **must be an absolute URL** starting with `https://`. Relative paths
are ignored by every social crawler. Create a 1200x630 static image at
`public/og.png` and reference it against the production domain (§45):

```text
https://<netlify-site>.netlify.app/og.png
```

Required tags:

```text
og:type       website
og:title      Mohd Ashfaque Ansari — AI & Full-Stack Developer
og:description  (same text as the meta description)
og:image      (absolute URL, 1200x630)
og:url        (absolute URL of the page)
og:site_name  Ashfaque Ansari
twitter:card  summary_large_image
```

Also add `<link rel="canonical" href="...">`.

### Per-route titles

`index.html` holds the base title only. Set the document title per route from
`lib/seo.js` via a small `useEffect` in `PageTransition`, so `/projects/…` and
`/resume` are distinguishable when shared. Do not re-mount the router for this.

---

# 35. Link Strategy

Use real links. All values below are verified against the CV (§0.5). Store them
once in `src/data/site.js` and import from there — never hardcode a URL inside a
component.

```text
GitHub:      https://github.com/Ashfaque3777
LinkedIn:    https://www.linkedin.com/in/see-me/
Email:       ashfaque3777@gmail.com
Phone:       +91 9871948186
Live site:   https://my-portfolio-197786.netlify.app/
```

The LinkedIn URL `https://www.linkedin.com/in/see-me/` is genuine — it is the
address printed in the CV's own contact line. An earlier draft of this document
flagged it as untrustworthy; that flag is **withdrawn**. Retain it.

Instagram (`https://www.instagram.com/ashfaque2506/`) is **not** in the CV. It
is excluded from the portfolio by default, consistent with the professional-link
policy below. Do not display it.

All external links:

- `target="_blank"` with `rel="noopener noreferrer"`
- visible focus states
- an accessible name — icon-only links need `aria-label`

Prefer professional links:

- GitHub
- LinkedIn
- Email
- Resume

---

# 36. Images and Assets

Existing assets can be reused:

```text
src/assets/Mohd_Ashfaque_Ansari_CV.pdf   511 KB  the CV
src/assets/ecommerce.png                553 KB  project screenshot
src/assets/FSD1.png                          icon only
src/assets/FSD2.png                          icon only
```

`src/assets/Resume.pdf` no longer exists — it was replaced by the CV above. See
§0.5.

### Asset → project mapping

Only one asset maps to a project:

| Asset | Maps to | Notes |
| --- | --- | --- |
| `ecommerce.png` | Project C, E-Commerce Platform | 1823x916, 553 KB. Must be optimized (§30). |

`FSD1.png` and `FSD2.png` are **500x500 technology icons**, the same dimensions
as `java.png` and `express.png`. They are not project screenshots and must not be
used as project card visuals.

### Placeholder visuals — required

Four projects have no screenshot: A (RAG), B (Mortgage), D (AptInnova), and
E (AI_Nexus). Rather than hotlinking stock imagery or shipping a broken image,
build a designed placeholder component:

`components/ui/ProjectPlaceholder.jsx`

It should render a deterministic abstract cover built from the project's own
metadata — category label, title initials, and a generated technical pattern —
using only CSS and existing design tokens. No network request, no external
image.

Requirements:

- visually distinct per project, so the grid does not look repetitive
- reads as intentional design, not as a missing asset
- takes `slug`, `title`, and `category`; fills its parent so the caller's
  aspect-ratio wrapper controls the box, meaning swapping in a real screenshot
  later requires **no layout change**
- accessible: the project title is always available as real text outside the
  placeholder, so the placeholder itself can be `aria-hidden`

The component does not accept `src`/`alt`. Whether a project has a real screenshot
is decided once by the caller, which checks `project.image` before choosing
between `<img>` and the placeholder — a second prop-based path for that decision
would be a second place for the two to disagree.

Existing technology icons may be reused where visually appropriate, subject to
their real dimensions — `mongodb.png` is 96x96 and pixelates above that.

Do not force every old image into the new design.

Remove unused Vite branding/assets from the user-facing application:

- delete `public/vite.svg`
- `index.html` already has its favicon `<link>` commented out, so removing the
  file breaks nothing
- replace it with a proper favicon (§34)

Do not hotlink random Unsplash images for the final portfolio. The current
`Contact.jsx` hotlinks an Unsplash photo; that must be removed.

For project visuals, prefer actual project screenshots.

---

# 37. Micro-interactions

Add polished but restrained interactions:

- cursor-follow accent only if it does not hurt usability
- magnetic CTA buttons
- animated underline
- project image hover
- arrow movement
- subtle card tilt only if performance is good
- navigation active indicator
- copy-email interaction
- tooltip for icon-only controls

Do not implement all of these just because they are listed.

Choose the interactions that improve the experience.

---

# 38. Loading Experience

Create a minimal initial loading transition only if needed.

Possible:

```text
ASHFAQUE.A
01
02
03
→ portfolio reveal
```

Keep it under approximately 1–1.5 seconds.

Never make users wait unnecessarily.

If the application loads quickly, prefer a normal page entrance animation instead of an artificial loader.

---

# 39. Error / Empty States

Project routes must handle unknown slugs.

In `pages/ProjectDetail.jsx`, look the slug up in `data/projects.js`. If it is
missing, render:

```text
Project not found.

Return to selected work →
```

Do not redirect silently — the user should see that the slug was wrong. This is
handled by a plain conditional render, not an error boundary.

404 route, via `pages/NotFound.jsx` on the `*` catch-all (§7):

```text
404

This page doesn't exist.

Back home →
```

Also reset scroll to top on route change — otherwise navigating from the bottom
of a long homepage to `/projects` lands the user mid-page.

### Legacy route redirects

The previous site is live and has these routes. They must not 404:

| Old path | Redirect to | Reason |
| --- | --- | --- |
| `/skills` | `/#skills` | became a homepage section (§17) |
| `/project` | `/projects` | renamed to plural (§7) |

Implement with `<Navigate replace>` in `App.jsx`, registered before the `*`
catch-all. Without these, existing inbound links break — and the old Netlify
URL is already shared on the CV.

---

# 40. Quality Bar

The finished site should pass this mental test:

### Recruiter test

Within 10 seconds, a visitor can understand:

- who Ashfaque is
- what he builds
- his main technical focus
- where his strongest work is
- how to view the resume
- how to contact him

### Developer test

A developer can understand:

- technologies
- architecture
- project contribution
- engineering decisions

### Design test

The site should feel:

- intentional
- modern
- premium
- responsive
- technically polished
- not template-like

---

# 41. Implementation Order

OpenCode should implement in this order:

## Phase 0 — Content verification

- extract and read `src/assets/Mohd_Ashfaque_Ansari_CV.pdf` in full
- reconcile every claim in §12, §15, §16, §17, §19 against it
- confirm the verified links in §35 actually resolve
- resolve the four `TODO` placeholders listed in §0.5, or leave them marked
- **do not write any component or data file before this is done**

## Phase 1 — Foundation

- inspect current files
- clean outdated structure (see the migration notes in §31)
- resolve `react/prop-types` per §31 so the lint baseline can reach green
- create design tokens
- resolve font loading per §5
- establish typography
- establish global CSS, including the `scroll-margin-top` and reduced-motion
  rules from §26
- create reusable UI primitives
- configure routing, including the `*` catch-all and legacy redirects
- create `netlify.toml` per §45

## Phase 2 — Layout

- navbar
- footer
- page shell
- responsive containers
- background system

## Phase 3 — Homepage

- Hero
- Marquee
- About
- Featured Projects
- Experience
- Education
- Skills
- Recognition
- Currently Building
- Contact CTA

## Phase 4 — Projects

- project data
- project listing
- project cards
- project detail routes
- case study layout

## Phase 5 — Resume & Contact

- resume page
- PDF actions
- contact page
- verified links
- graceful form/contact behavior

## Phase 6 — Motion

- GSAP entrance animations
- scroll reveals
- hover interactions
- page transitions
- reduced-motion support

## Phase 7 — Polish

- responsive QA
- accessibility
- performance
- SEO, including `favicon.svg`, `og.png`, and absolute canonical/OG URLs (§34)
- link verification against §35
- image optimization (§30)
- remove dead code
- rewrite `README.md` from scratch — the current file is malformed (§1 item 14)
- remove `remixicon` from `package.json` and delete the leftover CSS import
- delete `public/vite.svg`
- verify `netlify.toml` deep links (§45)
- run the full §42 checklist including the accessibility and deployment passes

---

# 42. Verification Checklist

Before considering the build complete, run:

```bash
npm install
npm run lint
npm run build
npm run preview
```

`npm run dev` is a blocking dev server and is **not** a verification step —
do not put it in this list. Use `npm run preview` to exercise the production
build, because that is what Netlify serves.

### Lint baseline

The repository starts with **5 pre-existing lint errors**, so "lint passes"
means fixing them, not merely adding no new ones:

```text
src/App.jsx:1                  'React' is defined but never used
src/Components/ProgressBar.jsx:9    'width' is missing in props validation
src/Components/ProjectCard.jsx:5   'img' is missing in props validation
src/Components/ProjectCard.jsx:11  'name' is missing in props validation
src/Components/ProjectCard.jsx:13  'para' is missing in props validation
```

All of these disappear when the old components are deleted and `react/prop-types`
is handled per §31. `--max-warnings 0` means an unresolved warning fails the
build just as an error does.

Verify:

### Desktop

- [ ] 1280px
- [ ] 1440px
- [ ] 1920px

### Mobile

- [ ] 320px
- [ ] 375px
- [ ] 430px

### Functionality

- [ ] navbar links
- [ ] anchored sections scroll clear of the fixed navbar (`scroll-margin-top`)
- [ ] mobile menu opens, closes on Escape, closes on link click
- [ ] project links
- [ ] project detail pages
- [ ] unknown slug shows "Project not found"
- [ ] unknown path shows 404
- [ ] `/skills` redirects to `/#skills`
- [ ] `/project` redirects to `/projects`
- [ ] `/projects?tech=react` filters, and the filter is shareable and clears
- [ ] resume download and open-in-new-tab both work
- [ ] contact links
- [ ] back to top
- [ ] scroll resets to top on route change
- [ ] no broken routes
- [ ] no horizontal overflow

### Visual

- [ ] no text clipping
- [ ] no overlapping sections
- [ ] no excessive animation
- [ ] no broken images
- [ ] consistent spacing
- [ ] consistent typography
- [ ] responsive cards
- [ ] accessible focus states
- [ ] section numbering reads 01-07 in the order given in §5

### Technical

- [ ] lint passes
- [ ] production build passes
- [ ] `npm run preview` serves correctly
- [ ] console has no avoidable errors/warnings
- [ ] no unused imports
- [ ] no fake links
- [ ] no unsupported claims
- [ ] `remixicon` removed from `package.json` and no leftover import
- [ ] `public/vite.svg` deleted and `favicon.svg` referenced
- [ ] `ecommerce.png` is served optimized, with `width`/`height` set
- [ ] every external link has `rel="noopener noreferrer"`
- [ ] no `href="#"` or `href=""` anywhere

### Accessibility

- [ ] keyboard-only pass: tab through the whole page, focus always visible
- [ ] mobile menu traps nothing and Escape closes it
- [ ] `prefers-reduced-motion` disables reveals, marquee, and route transitions
- [ ] axe DevTools reports no critical or serious violations
- [ ] heading order has no skipped levels
- [ ] project placeholder covers are `aria-hidden`, titles are real text

### Deployment

- [ ] `netlify.toml` present with the SPA rewrite (§45)
- [ ] a hard refresh on `/projects/<slug>` returns the app, not a 404
- [ ] `og:image` resolves to an absolute `https://` URL returning 200
- [ ] canonical URL is absolute

---
# 43. Important OpenCode Instructions

## Do

- inspect the current implementation before editing
- reuse useful existing assets
- preserve real project content
- refactor when necessary
- create reusable components
- use data-driven project rendering
- use GSAP thoughtfully
- make the site responsive
- test the production build
- visually inspect the result
- fix issues instead of stopping at the first successful build

## Do not

- simply restyle the current components with a few colors
- keep the old yellow-gradient visual language
- use arbitrary skill percentages
- create fake testimonials
- create fake statistics
- invent achievements
- invent work experience
- use placeholder project descriptions
- use placeholder social links in production
- overload the site with animations
- add unnecessary libraries
- make every section look like a card
- use `100vh` or `h-screen` on content sections; the hero uses
  `min-height: 100svh` (§8)
- leave "i am resume" or starter-template text
- leave Vite branding
- stop after `npm run build` succeeds

---

# 44. Final Design Goal

The final result should feel like:

> A serious young engineer's digital identity — combining the visual confidence of a premium product studio with the technical depth of an AI/full-stack portfolio.

The website should tell a coherent story:

```text
WHO I AM
   ↓
WHAT I BUILD
   ↓
HOW I THINK
   ↓
WHAT I'VE WORKED ON
   ↓
WHAT I CAN DO
   ↓
WHAT I'M BUILDING NEXT
   ↓
LET'S CONNECT
```

Every section should serve that story.

Avoid filler.

Every animation should have a purpose.

Every visual element should support hierarchy.

Every project description should explain value before technology.

Every claim should be truthful.

Build the portfolio as if it will be reviewed by a technical recruiter, an engineering manager, and a senior frontend developer.

---

# 45. Deployment

Deployment target: **Netlify**.

This is confirmed, not assumed — the CV lists the live site as
`https://my-portfolio-197786.netlify.app/` (§0.5), so this repository is already
a Netlify project and the site is currently deployed.

## Required config

Create `netlify.toml` at the repo root:

```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

The redirect is **mandatory**, not optional. `/projects/:slug`, `/resume`, and
`/contact` are client-side routes that do not exist as files in `dist/`. Without
this rule Netlify returns its own 404 page on any direct navigation or refresh,
and every shared project link is broken.

Do not rely on Netlify's automatic SPA detection. It has changed across framework
detection versions, and the failure mode is a silently broken deep link.

## Vite base path

**Do not add a `base` option to `vite.config.js`.** The site is served from a
Netlify subdomain root, so the default `/` is correct. `base` is only needed for
a sub-path deployment such as GitHub Pages, which is not the target here.

## Netlify settings that must match

- build command: `npm run build`
- publish directory: `dist`
- Node version: pin it. Add an `.nvmrc` or a `NODE_VERSION` env var so the
  build does not drift between machines.

## Post-deploy checks

1. Hard-refresh `/projects/rag-based-chatbot` — it must load the app
2. Confirm `/favicon.svg` returns 200
3. Confirm `/og.png` returns 200 and is served with an image content type
4. Confirm `/resume` serves the CV PDF from the hashed asset path
5. Run Lighthouse against the deployed URL, not just `localhost` — Netlify's CDN
   and compression settings change the result

## Custom domain

If a custom domain is added later, update the `og:url`, `og:image`, and
`<link rel="canonical">` values in §34 to match. They must point at the canonical
domain, not the `netlify.app` subdomain, or social previews will keep resolving
against the subdomain.

## Asset caching

Vite fingerprints everything under `assets/`, so those files are safe to cache
immutably. `index.html` must not be cached, or returning visitors get a stale
document referencing deleted asset hashes. Netlify does this correctly by
default; do not override it.

---

