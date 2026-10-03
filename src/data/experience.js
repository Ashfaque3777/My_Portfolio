/**
 * Experience timeline.
 *
 * Wording transcribed verbatim from
 * src/assets/Mohd_Ashfaque_Ansari_CV.pdf. See BUILD.md §0.5 and §15.
 *
 * Three roles, reverse chronological. Roles 2 and 3 are separate engagements at
 * the same company with a gap between them — they must not be merged.
 *
 * The AIforAll certificate is "to be issued". It does not exist yet. Never
 * reword recognition as awarded or received.
 */

export const experience = [
  {
    id: "aiforall",
    role: "International AI Intern",
    org: "AIforAll Global",
    orgUrl: "https://aiforallglobal.org/",
    start: "18 May 2026",
    end: "Present",
    period: "18 May 2026 – Present",
    current: true,
    summary:
      "Practical AI engineering work across RAG and agentic AI systems, as part of the AIforAll Global International AI Internship Program.",
    points: [
      "Selected as a standout performer in the AIforAll Global International AI Internship Program, recognition communicated by email, with certificate to be issued.",
      "Collaborated on 2 real-world AI projects involving RAG and agentic AI workflows while applying AI engineering concepts and team development practices.",
      "Implemented AI engineering components across a RAG chatbot and agentic mortgage underwriting system involving retrieval, LLM, OCR, structured outputs, and agent workflows.",
    ],
    technologies: [
      "RAG",
      "Agentic AI",
      "LangGraph",
      "OCR",
      "LLM APIs",
      "Structured LLM Output",
    ],
  },
  {
    id: "hanumant-data",
    role: "Data Science",
    org: "Hanumant Technology Pvt. Ltd.",
    orgUrl: "https://www.hanumanttechnology.com/",
    start: "15 Jul 2026",
    end: "Present",
    period: "15 Jul 2026 – Present",
    current: true,
    summary:
      "Data preparation and dashboard delivery across business datasets.",
    points: [
      "Created 12+ data visualizations and 2 dashboards using Power BI and Tableau based on prepared datasets.",
      "Worked with Python, Excel, MySQL, and MongoDB for data preparation and visualization workflows.",
      "Applied hands-on data cleaning, missing-value handling, EDA, visualization, joins, and aggregations while building dashboard outputs.",
    ],
    technologies: [
      "Python",
      "Power BI",
      "Tableau",
      "MySQL",
      "MongoDB",
      "Excel",
      "Pandas",
      "NumPy",
    ],
  },
  {
    id: "hanumant-fullstack",
    role: "Full-Stack Web Development Intern",
    org: "Hanumant Technology Pvt. Ltd.",
    orgUrl: "https://www.hanumanttechnology.com/",
    start: "01 Jan 2024",
    end: "30 Jun 2024",
    period: "Jan 2024 – Jun 2024",
    current: false,
    summary:
      "Frontend and full-stack fundamentals across a series of small web applications.",
    points: [
      "Built 9+ small web applications and responsive webpages, including calculators, analog/digital clocks, digital fan, to-do list, tic-tac-toe, sign-up page, restaurant pages, and e-commerce functionality.",
      "Practiced frontend development, responsive UI implementation, JavaScript-based interactions, and full-stack application fundamentals.",
    ],
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Full-Stack Fundamentals",
    ],
  },
]