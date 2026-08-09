/**
 * Everything personal in one place, so editing the site never means
 * touching a component.
 */
export const site = {
  name: "Jose Sanchez Gonzalez",
  // One-line positioning under your name. TODO: make this yours.
  positioning:
    "MS in Artificial Intelligence, Oregon State University '26 — perception, machine learning, and LLM systems.",
  // 3-4 sentences. TODO: replace placeholder bio.
  bio: [
    "I build computer vision and machine learning systems, most recently focused on perception for robotics.",
    "My current work spans stereo vision, model ablation studies, and LLM application engineering.",
    "I care about systems that hold up outside the lab: measured, reproducible, and shipped.",
    "This is placeholder bio copy — replace it in src/site.config.ts.",
  ].join(" "),
  email: "sanchej7@oregonstate.edu",
  links: [
    // TODO: real URLs
    { label: "GitHub", href: "https://github.com/your-username" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/your-handle" },
    { label: "Email", href: "mailto:sanchej7@oregonstate.edu" },
    // Drop your resume at public/resume.pdf
    { label: "Resume", href: "/resume.pdf" },
  ],
} as const;
