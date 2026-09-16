/**
 * Everything personal in one place, so editing the site never means
 * touching a component.
 */
export const site = {
  name: "Jose Sanchez Gonzalez",
  positioning:
    "AI/ML engineer building perception, retrieval, and learned control systems.",
  seeking: "Seeking AI/ML engineering roles in robotics, 3D perception, and simulation.",
  bio: [
    "I turn research questions into working software: vision-guided pruning in Isaac Sim, depth models for orchard robots, cross-simulator policy evaluations, and retrieval tools that trace answers to source files.",
    "M.S. in Artificial Intelligence and B.S. in Computer Science, Oregon State University. My project pages show what I built, how I tested it, and what still needs work.",
  ].join(" "),
  email: "joseszgz2021@gmail.com",
  links: [
    { label: "GitHub", href: "https://github.com/joses2017smjh" },
    {
      label: "LinkedIn",
      href: "https://linkedin.com/in/jose-j-sanchez-gonzalez-84a800257/",
    },
    { label: "Email", href: "mailto:joseszgz2021@gmail.com" },
    // Drop your resume at public/resume.pdf
    { label: "Resume", href: "/resume.pdf" },
  ],
} as const;
