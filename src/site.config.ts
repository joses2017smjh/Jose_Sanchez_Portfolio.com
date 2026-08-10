/**
 * Everything personal in one place, so editing the site never means
 * touching a component.
 */
export const site = {
  name: "Jose Sanchez Gonzalez",
  positioning:
    "AI/ML engineer — MS in Artificial Intelligence, Oregon State '26. Computer vision, 3D perception, and LLM systems.",
  bio: [
    "I work across computer vision, 3D perception, and NLP — from quantified depth-estimation research for robotic pruning to from-scratch transformers and production-style RAG systems.",
    "I hold a BS in Computer Science (2025) and an MS in Artificial Intelligence (2026) from Oregon State University, where I've also taught as a graduate TA for Operating Systems and Computational Methods.",
    "Right now I'm building the open-source Berkeley Humanoid Lite — mechanical assembly, CAD, and ROS2 + Isaac Sim for motion control and reinforcement learning.",
    "I care about systems that hold up outside the lab: measured, reproducible, and shipped.",
  ].join(" "),
  email: "sanchej7@oregonstate.edu",
  links: [
    { label: "GitHub", href: "https://github.com/joses2017smjh" },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/jose-j-sanchez-gonzalez/",
    },
    { label: "Email", href: "mailto:sanchej7@oregonstate.edu" },
    // Drop your resume at public/resume.pdf
    { label: "Resume", href: "/resume.pdf" },
  ],
} as const;
