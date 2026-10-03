/**
 * Skill groups.
 *
 * Transcribed from src/assets/Mohd_Ashfaque_Ansari_CV.pdf. See BUILD.md §17.
 *
 * No percentages — a subjective proficiency bar is not a measurement. Each
 * group instead carries a one-line context describing how the tools are used.
 *
 * Note: the CV lists C, not C++. Do not relabel the legacy c++.png asset as C.
 */

export const skillGroups = [
  {
    id: "languages",
    label: "Languages",
    note: "Primary language for AI and data work; the rest for the web layer.",
    items: ["Python", "C", "HTML", "CSS", "JavaScript", "SQL"],
  },
  {
    id: "frontend",
    label: "Frontend",
    note: "Component-driven React with Vite, styled for responsive layouts.",
    items: ["React", "Vite", "Tailwind CSS"],
  },
  {
    id: "backend",
    label: "Backend",
    note: "REST services with token-based authentication.",
    items: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "Authentication / JWT",
    ],
  },
  {
    id: "databases",
    label: "Databases",
    note: "Relational for application data, vector storage for retrieval.",
    items: ["MySQL", "MongoDB", "PostgreSQL", "ChromaDB"],
  },
  {
    id: "ai",
    label: "AI / GenAI",
    note: "Retrieval pipelines, agent orchestration, and structured LLM output.",
    items: [
      "OpenAI API",
      "Gemini API",
      "Groq API",
      "RAG",
      "Embeddings",
      "Vector Databases",
      "OCR",
      "LLMs",
      "Agentic AI",
      "LangGraph",
      "LangChain",
      "Prompt Engineering",
      "Structured LLM Output",
      "Function / Tool Calling",
    ],
  },
  {
    id: "data",
    label: "Data",
    note: "From raw messy input to dashboards someone can act on.",
    items: [
      "Power BI",
      "Tableau",
      "Pandas",
      "NumPy",
      "Data Cleaning",
      "EDA",
      "Data Visualization",
      "Excel",
    ],
  },
  {
    id: "ml",
    label: "ML / DL",
    note: "Model training and the Hugging Face ecosystem.",
    items: [
      "Scikit-learn",
      "TensorFlow",
      "Keras",
      "PyTorch",
      "Hugging Face",
    ],
  },
  {
    id: "tools",
    label: "Tools",
    note: "Ship, deploy, and observe.",
    items: [
      "Git",
      "GitHub",
      "VS Code",
      "Postman",
      "Docker",
      "GitHub Actions",
      "Vercel",
      "Railway",
      "Netlify",
    ],
  },
]