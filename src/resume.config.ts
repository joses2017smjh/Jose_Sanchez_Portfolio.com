/**
 * Resume content for the on-site resume panel. Edit here, not in
 * components. The downloadable PDF at public/resume.pdf is compiled
 * separately from your LaTeX source — keep the two in sync when you
 * update either.
 *
 * Note: your phone number is deliberately NOT published on the website
 * (it stays in the PDF only) to keep it away from scrapers. Add it here
 * if you want it shown.
 */
export const resume = {
  /** Targets of the floating icon buttons on the resume panel. */
  links: {
    pdf: "/resume.pdf",
    overleaf: "https://www.overleaf.com/read/fnncbxtzykhz#40bcb3",
    linkedin: "https://www.linkedin.com/in/jose-j-sanchez-gonzalez/",
  },
  summary:
    "AI/ML engineer with hands-on experience across computer vision, 3D perception, and NLP — from quantified depth-estimation research for robotic pruning to from-scratch transformers and production-style RAG systems, plus an in-progress humanoid robotics build (ROS2, Isaac Sim, reinforcement learning).",
  education: [
    {
      degree: "MS, Artificial Intelligence",
      school: "Oregon State University",
      when: "Jun 2026",
    },
    {
      degree: "BS, Computer Science (Applied — Data Science), Math minor",
      school: "Oregon State University",
      when: "Jun 2025",
    },
  ],
  skills: [
    {
      area: "Graduate coursework",
      items:
        "Cloud App Development (Docker, Redis, MySQL) · Deep Learning (autoencoders, CNNs, point transformers) · NLP (LSTMs, autoregressive transformers, attentive bidirectional GRU translators)",
    },
    {
      area: "Undergraduate coursework",
      items:
        "Databases (SQL, MongoDB, C) · Machine Learning & Data Mining (Python, PyTorch, scikit-learn, Pandas) · Mobile Dev (Kotlin, Android Studio, Java)",
    },
  ],
  experience: [
    {
      role: "Graduate Teaching Assistant",
      org: "Oregon State University",
      when: "Sept 2025 – Present",
      bullets: [
        "Supported Operating Systems I (C++) and Computational Methods with COMSOL — concurrency, memory, file systems, numerical methods, and simulation workflows.",
        "Led 2-hour studio sessions for 25+ students, held office hours, graded assignments, and provided programming and debugging support.",
      ],
    },
    {
      role: "Math & Computer Science Tutor",
      org: "Oregon State University",
      when: "Nov 2022 – Jun 2025",
      bullets: [
        "Tutored and mentored 50+ students in math, programming, and CS fundamentals one-on-one, adapting explanations to different learning styles.",
      ],
    },
  ],
  /** The "Beyond programming" panel pulls from here. */
  // The humanoid build has its own log on the homepage (humanoid.config.ts),
  // so it isn't repeated in this list.
  beyond: [
    {
      title: "ICPC Club",
      body: "Programming contests and competitive coding practice sessions.",
    },
    {
      title: "Jujitsu Club",
      body: "Regular practice, plus club activities and events.",
    },
    {
      title: "Teaching & mentoring",
      body: "Four years of tutoring and TA work at Oregon State — 50+ students mentored one-on-one.",
    },
  ],
} as const;
