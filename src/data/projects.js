/**
 * Project data.
 *
 * All copy is transcribed from src/assets/Mohd_Ashfaque_Ansari_CV.pdf.
 * See BUILD.md §0.5, §12, and §32.
 *
 * Rules enforced here:
 *  - `github` / `live` are null when unverified. Never "", "#", or a guess.
 *  - `image: null` means the UI renders <ProjectPlaceholder />.
 *  - `role` distinguishes solo / team / open-source / professional work so
 *    contributions stay honestly scoped (BUILD.md §33 rule 9).
 */

export const projects = [
  {
    slug: "rag-based-chatbot",
    title: "RAG-based AI Chatbot",
    category: "AI / RAG",
    year: "2026",
    role: "Personal project",
    featured: true,
    summary:
      "Ask questions about uploaded PDFs and get answers that cite their sources.",
    description:
      "A retrieval-augmented question-answering system built as a working Streamlit application. It ingests PDFs, falls back to OCR when a page has no extractable text layer, chunks with metadata, embeds with BGE-large, and retrieves with a hybrid BM25 + dense pipeline before reranking. Three LLM providers are wired in with routing and fallback, and every answer carries citations back to the source page.",
    image: null,
    github: "https://github.com/Ashfaque3777/Rag-based-Chatbot",
    live: null,
    contribution:
      "Solo build. Designed and implemented the full ingestion, retrieval, reranking, and generation pipeline, the multi-provider routing layer, and the RAGAS evaluation harness.",
    technologies: [
      "Python",
      "Streamlit",
      "RAG",
      "Embeddings",
      "ChromaDB",
      "BM25",
      "Reranking",
      "OCR",
      "LangChain",
      "OpenAI API",
      "Gemini API",
      "Groq API",
    ],
    sections: {
      problem:
        "Large document sets are unsearchable by keyword alone. A user asking \"what is the refund window?\" needs the answer and the page it came from — not a confident guess. Most RAG demos stop at vector search, which returns plausible-looking passages with no traceability and no fallback when the text layer is missing.",
      approach:
        "Treat retrieval quality as the problem, not generation. Ingestion tries PyMuPDF first and drops to Tesseract OCR only when a page yields too little text, so scanned documents still work. Chunks carry page metadata so citations are always resolvable. Retrieval runs BM25 and dense search in parallel and fuses the results, which recovers the exact-term matches that pure vector search misses. A cross-encoder reranker then reorders the candidates before anything reaches the model.",
      architecture: [
        {
          label: "Ingestion",
          detail:
            "PyMuPDF text extraction with a Tesseract OCR fallback for scanned pages. Output is chunked with page-level metadata attached.",
        },
        {
          label: "Index",
          detail:
            "BGE-large embeddings persisted in ChromaDB, giving a vector store that runs locally with no hosted dependency.",
        },
        {
          label: "Retrieval",
          detail:
            "BM25 and dense retrieval run in parallel over multiple documents, then fuse. A cross-encoder reranker reorders the candidates.",
        },
        {
          label: "Generation",
          detail:
            "OpenAI, Gemini, and Groq are available behind a router with automatic fallback. Answers cite the source chunks they used.",
        },
        {
          label: "Evaluation",
          detail:
            "RAGAS evaluation across 50 benchmark questions, used to compare configurations rather than eyeballing outputs.",
        },
      ],
      features: [
        "PDF ingestion with a Tesseract OCR fallback for scanned documents",
        "Hybrid BM25 + dense retrieval fused before reranking",
        "Cross-encoder reranking of retrieved candidates",
        "Three LLM providers with routing and automatic fallback",
        "Source citations resolved back to page metadata",
        "Multi-document support and chat memory",
      ],
      decisions: [
        "Hybrid retrieval over pure vector search, because exact identifiers and error codes are matched lexically and embeddings handle them poorly.",
        "OCR as a fallback rather than the default path, since OCR is slow and lossy on documents that already have a text layer.",
        "Three providers behind one interface so a single provider outage or rate limit degrades instead of breaking the app.",
        "Evaluating with RAGAS instead of subjective review, so a configuration change can be judged against a fixed question set.",
      ],
      challenges:
        "Scanned PDFs produced empty extractions and silently useless indexes. The fallback had to trigger per page rather than per document, since a single report often mixes typed and scanned pages. Reranking also changed results substantially, which made it impossible to reason about improvements without the fixed evaluation set.",
      outcome:
        "A working end-to-end application covering ingestion through cited answers, evaluated across 50 benchmark questions. Built to apply and demonstrate practical RAG concepts rather than to benchmark a model.",
    },
  },

  {
    slug: "mortgage-underwriting-decision-agent",
    title: "Agentic Mortgage Underwriting",
    category: "Agentic AI",
    year: "2026",
    role: "Team project",
    featured: true,
    summary:
      "A LangGraph Decision Agent that turns four categories of underwriting input into Approve, Deny, or Suspend.",
    description:
      "Part of an agentic mortgage underwriting workflow in which specialised agents handle document intelligence, financial analysis, and property evaluation. My contribution was the Decision Agent: the component that consumes those upstream signals and produces the underwriting decision.",
    image: null,
    github:
      "https://github.com/AFA-interns/Mortgage-Underwriting-System",
    live: null,
    contribution:
      "Team project. I implemented the Decision Agent only — LangGraph state and schema handling, risk assessment, decision logic, and structured outputs. Document intelligence, financial analysis, and property evaluation were built by other contributors; I did not build those agents.",
    technologies: [
      "Python",
      "LangGraph",
      "Agentic AI",
      "Structured LLM Output",
      "LLMs",
      "Risk Assessment",
    ],
    sections: {
      problem:
        "Mortgage underwriting pulls together document extraction, financial analysis, and property evaluation before anyone can approve, deny, or suspend a loan. When each step is a separate script, the decision step becomes a place where judgement is applied inconsistently and the reasoning behind it is hard to inspect.",
      approach:
        "Make the decision step explicit and inspectable. Rather than burying the verdict inside a prompt, the Decision Agent holds a typed state object, runs risk assessment across the upstream signals, and emits a structured output naming one of three outcomes. Because the output is structured rather than free text, it can be validated and logged like any other step in the pipeline.",
      architecture: [
        {
          label: "Upstream agents",
          detail:
            "Document intelligence, financial analysis, and property evaluation run as separate agents in the wider system. These were built by other contributors.",
        },
        {
          label: "State and schema",
          detail:
            "My contribution: LangGraph state and schema handling carrying the underwriting inputs between agents in a defined shape.",
        },
        {
          label: "Risk assessment",
          detail:
            "My contribution: risk signals derived from the assembled inputs and carried explicitly in state.",
        },
        {
          label: "Decision Agent",
          detail:
            "My contribution: decision logic mapping the assessed risk to one of three outcomes.",
        },
        {
          label: "Structured output",
          detail:
            "My contribution: typed output for the decision so it can be validated and consumed downstream.",
        },
      ],
      features: [
        "LangGraph state and schema handling across the underwriting workflow",
        "Risk assessment carried explicitly in shared state",
        "Decision logic over 4 categories of underwriting input",
        "Structured outputs for 3 outcomes — Approve, Deny, Suspend",
        "Merged into the shared team repository through a Git workflow",
      ],
      decisions: [
        "Structured output over free-text verdicts, so the decision can be validated and logged rather than re-read by a human each time.",
        "Explicit state over agent-to-agent message passing, because the underwriting inputs have a known shape and should not be inferred from prose.",
        "A fixed three-outcome set instead of a graded score, because downstream consumers need an actionable branch, not a continuum.",
      ],
      challenges:
        "Agreeing the state schema with the other contributors was the hard part. The Decision Agent is only as good as the shape of what arrives, so the schema had to be settled before the decision logic could be written against it.",
      outcome:
        "The Decision Agent was implemented, merged into the AFA-interns project repository, and handles 4 underwriting input categories across 3 decision outcomes. It is one component of a larger multi-agent system built by a team.",
    },
  },

  {
    slug: "ecommerce-platform",
    title: "E-Commerce Platform",
    category: "Full-Stack",
    year: "2024",
    role: "Personal project",
    featured: true,
    summary:
      "A full-stack storefront covering the whole purchase path, from JWT auth to order management.",
    description:
      "A full-stack e-commerce application with a React and Vite frontend over a Node.js and Express backend on MySQL. It covers the complete purchase path — authentication, catalogue, cart, checkout, orders, and an admin panel — with role-based authorisation separating customer and administrator capabilities.",
    image: "ecommerce",
    // Unverified: the current CV lists no repository for this project and the
    // link in the superseded 2024 CV is not carried forward. See BUILD.md §0.5.
    github: null,
    live: null,
    contribution:
      "Solo build. Designed and implemented the schema, REST APIs, JWT authentication, role-based authorisation, cart and order logic, admin panel, and image upload.",
    technologies: [
      "React",
      "Vite",
      "JavaScript",
      "Node.js",
      "Express.js",
      "REST APIs",
      "MySQL",
      "Authentication / JWT",
      "Tailwind CSS",
    ],
    sections: {
      problem:
        "The aim was to build the full path a real store has to cover rather than a catalogue mockup. That means the unglamorous parts — authorisation, cart state, order persistence, admin operations — have to work, because that is where a storefront actually breaks.",
      approach:
        "Model the domain properly first: products, users, orders, and their relationships in MySQL, then expose it as REST APIs from an Express backend, then consume those APIs from a React frontend. Role-based authorisation for the two user roles is enforced on the server, not hidden in the UI, because a hidden admin panel is not an authorisation boundary.",
      architecture: [
        {
          label: "Frontend",
          detail:
            "React and Vite, with Tailwind CSS for styling, consuming the REST APIs and managing client-side cart and auth state.",
        },
        {
          label: "Backend",
          detail:
            "Node.js and Express exposing REST APIs over CRUD operations for the full domain.",
        },
        {
          label: "Database",
          detail:
            "MySQL holding products, users, and orders with the relational constraints the domain requires.",
        },
        {
          label: "Authentication",
          detail:
            "JWT-based auth with server-enforced role-based authorisation across 2 user roles.",
        },
        {
          label: "Admin",
          detail:
            "An admin panel for managing catalogue and orders, including image upload.",
        },
      ],
      features: [
        "JWT authentication with server-enforced role-based authorisation",
        "Full CRUD operations across the product and order domain",
        "Persistent cart and order management",
        "Admin panel with image upload",
        "Theme switching and responsive UI",
        "Form validation and error handling throughout",
      ],
      decisions: [
        "Authorisation enforced in the API rather than the UI, so a customer cannot reach admin endpoints by navigating directly.",
        "MySQL over MongoDB, because products and orders are genuinely relational and joins are the natural query.",
        "JWT for stateless auth, keeping the API horizontally scalable without server-side session storage.",
      ],
      challenges:
        "Keeping cart state consistent between the client and the server across page loads, and making role-based authorisation hold on every mutating endpoint rather than only on the ones behind the admin UI.",
      outcome:
        "A working full-stack application spanning authentication, catalogue, cart, orders, and administration, with responsive UI and role-based access control across 2 user roles.",
    },
  },

  {
    slug: "aptinnova",
    title: "AptInnova",
    category: "Frontend",
    year: "2026",
    role: "Professional",
    featured: false,
    summary:
      "The React frontend foundation behind a live technology and services website.",
    description:
      "A technology and services website built with React and Vite. I developed the frontend foundation — responsive layout, a reusable component set, and animation work — which was adopted as the base code for the company's actual website and carried through to deployment.",
    image: null,
    github: null,
    live: "https://aptinnova.com/",
    contribution:
      "Professional engagement. I built the frontend foundation: component library, responsive layouts, and animations. The backend and content were handled separately.",
    technologies: [
      "React",
      "Vite",
      "JavaScript",
      "CSS",
      "Responsive Design",
      "Animations",
      "Netlify",
    ],
    sections: {
      problem:
        "A services company needed a site that presents technical work credibly and holds up on mobile, without a component system that made every new page a fresh design exercise.",
      approach:
        "Build the reusable layer first. Laying down a component set before assembling pages meant new sections could be composed from existing parts instead of bespoke markup, which is what made the foundation practical to adopt as the real site.",
      architecture: [
        {
          label: "Stack",
          detail:
            "React and Vite with plain CSS, chosen to keep the dependency surface small for a marketing-led site.",
        },
        {
          label: "Component layer",
          detail:
            "10+ reusable UI components establishing layout, spacing, and responsive behaviour as a shared system.",
        },
        {
          label: "Responsive system",
          detail:
            "Layouts designed mobile-first, since the audience arrives predominantly on phones.",
        },
        {
          label: "Animation",
          detail:
            "Motion applied to transitions and reveals to keep the site feeling considered without interfering with reading.",
        },
        {
          label: "Delivery",
          detail:
            "Worked through Git and GitHub workflows with the company and carried through to deployment.",
        },
      ],
      features: [
        "React and Vite frontend foundation",
        "10+ reusable UI components",
        "Mobile-first responsive design",
        "Animation and transition work",
        "Git-based collaboration and deployment",
      ],
      decisions: [
        "Component library before page assembly, so the site could grow without each new section becoming a redesign.",
        "Plain CSS over a utility framework, keeping the payload small for a site whose content is mostly static.",
        "Mobile-first layouts, because that is where the traffic actually comes from.",
      ],
      challenges:
        "Building a component set that was genuinely reusable rather than one-off, since the test is whether the company can add a page later without needing me.",
      outcome:
        "The frontend was adopted as the base code for the company's actual website and is live at aptinnova.com.",
    },
  },

  {
    slug: "ai-nexus",
    title: "AI_Nexus — Open-Source Contribution",
    category: "AI / RAG",
    year: "2026",
    role: "Open source",
    featured: false,
    summary:
      "Four merged commits into a shared RAG codebase maintained by someone else.",
    description:
      "Contributions to AI_Nexus, a shared retrieval-augmented generation codebase maintained by another developer. My work spans 4 merged commits covering configuration, document processing, retrieval, PII handling, quota management, and the test and evaluation layer.",
    image: null,
    github: "https://github.com/nazishfirdaus/AI_Nexus",
    live: null,
    contribution:
      "Open-source contribution to a repository owned and maintained by nazishfirdaus. My work is the 4 merged commits listed below. I did not build or maintain the project.",
    technologies: [
      "Python",
      "RAG",
      "ChromaDB",
      "Hybrid Retrieval",
      "PII Handling",
      "Presidio",
      "RAGAS",
      "Testing",
    ],
    sections: {
      problem:
        "A shared RAG codebase needs the unglamorous layers to be right — configuration, PII handling, quota tracking, tests — or every contributor ends up solving them differently and the retrieval behaviour drifts.",
      approach:
        "Contribute at the seams rather than the centre. Taking the pieces that were under-specified for a single owner to own in parallel avoided conflicting with someone else's work while still fixing real gaps.",
      architecture: [
        {
          label: "Configuration",
          detail:
            "Project configuration so components read from one source instead of hardcoded values.",
        },
        {
          label: "Document processing",
          detail:
            "Document chunking and metadata handling, consistent with how the rest of the pipeline expects documents.",
        },
        {
          label: "Retrieval",
          detail:
            "ChromaDB integration and hybrid retrieval, contributing both keyword and vector paths.",
        },
        {
          label: "Privacy and limits",
          detail:
            "Presidio-based PII handling, plus quota tracking and fallback and aggregation logic.",
        },
        {
          label: "Quality",
          detail:
            "Automated tests and RAGAS evaluation so retrieval changes can be checked rather than eyeballed.",
        },
      ],
      features: [
        "Project configuration",
        "Document chunking and metadata",
        "ChromaDB integration and hybrid retrieval",
        "Presidio PII handling",
        "Quota tracking, fallback, and aggregation logic",
        "Automated tests and RAGAS evaluation",
      ],
      decisions: [
        "Central configuration over per-module constants, so the retrieval and privacy layers can be tuned without touching call sites.",
        "Presidio for PII detection rather than regex, because entity shapes vary too much for patterns to be reliable.",
        "Tests and RAGAS evaluation in the same contribution as the retrieval change, so the change is verifiable by the maintainer.",
      ],
      challenges:
        "Contributing to a codebase owned by someone else means matching existing conventions without imposing my own. Getting the chunking and metadata contract right mattered more than any local optimisation.",
      outcome:
      "4 commits merged into the maintainer's repository, spanning configuration, document processing, retrieval, PII handling, quota management, and the evaluation layer.",
    },
  },
]

export const featuredProjects = projects.filter((p) => p.featured)

export function getProject(slug) {
  return projects.find((p) => p.slug === slug)
}

/** All technologies across all projects, deduplicated, for the filter UI. */
export const allTechnologies = [
  ...new Set(projects.flatMap((p) => p.technologies)),
].sort((a, b) => a.localeCompare(b))

/**
 * URL-safe form of a technology name. The Skills wall links to
 * /projects?tech=<slug>, so filtering has to compare slugs rather than raw
 * names — otherwise "OpenAI API" (slug: openai-api) never matches.
 */
export function techSlug(name) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")
}

export function filterByTechnology(list, tech) {
  if (!tech) return list
  const needle = techSlug(tech)
  return list.filter((p) =>
    p.technologies.some((t) => techSlug(t) === needle)
  )
}